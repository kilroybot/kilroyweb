import get from "lodash/get";
import {
  ANY_OF_KEY,
  DEFAULT_KEY,
  DEPENDENCIES_KEY,
  findSchemaDefinition,
  GenericObjectType,
  getMatchingOption,
  getSchemaType,
  isFixedItems,
  isMultiSelect,
  isObject,
  mergeDefaultsWithFormData,
  mergeObjects,
  mergeSchemas,
  ONE_OF_KEY,
  PROPERTIES_KEY,
  REF_KEY,
  retrieveSchema,
  RJSFSchema,
  ValidatorType,
} from "@rjsf/utils";
import { omit } from "lodash-es";

/** Enum that indicates how `schema.additionalItems` should be handled by the `getInnerSchemaForArrayItem()` function.
 */
export enum AdditionalItemsHandling {
  Ignore,
  Invert,
  Fallback,
}

/** Splits out the value at the `key` in `object` from the `object`, returning an array that contains in the first
 * location, the `object` minus the `key: value` and in the second location the `value`.
 *
 * @param key - The key from the object to extract
 * @param object - The object from which to extract the element
 * @returns - An array with the first value being the object minus the `key` element and the second element being the
 *      value from `object[key]`
 */
export function splitKeyElementFromObject(
  key: string,
  object: GenericObjectType
) {
  const value = object[key];
  const remaining = omit(object, [key]);
  return [remaining, value];
}

/** Updates a schema with additionally required properties added
 *
 * @param schema - The schema for which resolving a dependent properties is desired
 * @param [additionallyRequired] - An optional array of additionally required names
 * @returns - The schema with the additional required values merged in
 */
export function withDependentProperties(
  schema: RJSFSchema,
  additionallyRequired?: string[]
) {
  if (!additionallyRequired) {
    return schema;
  }
  const required = Array.isArray(schema.required)
    ? Array.from(new Set([...schema.required, ...additionallyRequired]))
    : additionallyRequired;
  return { ...schema, required: required };
}

/** Resolves references within a schema and its 'allOf' children.
 *
 * @param validator - An implementation of the `ValidatorType` interface that will be forwarded to all the APIs
 * @param schema - The schema for which resolving a reference is desired
 * @param rootSchema - The root schema that will be forwarded to all the APIs
 * @param [formData] - The current formData, if any, to assist retrieving a schema
 * @returns - The schema having its references resolved
 */
export function resolveReference<T = any>(
  validator: ValidatorType,
  schema: RJSFSchema,
  rootSchema: RJSFSchema,
  formData?: T
): RJSFSchema {
  // Retrieve the referenced schema definition.
  const $refSchema = findSchemaDefinition(schema.$ref, rootSchema);
  // Drop the $ref property of the source schema.
  const { $ref, ...localSchema } = schema;
  // Update referenced schema definition with local schema properties.
  return retrieveSchema<T>(
    validator,
    { ...$refSchema, ...localSchema },
    rootSchema,
    formData
  );
}

/** Returns a `schema` with the best choice from the `oneOf` options merged into it
 *
 * @param validator - An implementation of the `ValidatorType` interface that will be used to validate oneOf options
 * @param schema - The schema for which resolving a oneOf subschema is desired
 * @param rootSchema - The root schema that will be forwarded to all the APIs
 * @param dependencyKey - The key name of the oneOf dependency
 * @param oneOf - The list of schemas representing the oneOf options
 * @param [formData] - The current formData to assist retrieving a schema
 * @returns  The schema with the best choice of oneOf schemas merged into
 */
export function withExactlyOneSubschema<T = any>(
  validator: ValidatorType,
  schema: RJSFSchema,
  rootSchema: RJSFSchema,
  dependencyKey: string,
  oneOf: any[],
  formData?: T
) {
  const validSubschemas = oneOf.filter((subschema) => {
    if (typeof subschema === "boolean" || !subschema.properties) {
      return false;
    }
    const { [dependencyKey]: conditionPropertySchema } = subschema.properties;
    if (conditionPropertySchema) {
      const conditionSchema: RJSFSchema = {
        type: "object",
        properties: {
          [dependencyKey]: conditionPropertySchema,
        },
      };
      const { errors } = validator.validateFormData(formData, conditionSchema);
      return errors.length === 0;
    }
    return false;
  });

  if (validSubschemas.length !== 1) {
    console.warn(
      "ignoring oneOf in dependencies because there isn't exactly one subschema that is valid"
    );
    return schema;
  }
  const subschema: RJSFSchema = validSubschemas[0] as RJSFSchema;
  const [dependentSubschema] = splitKeyElementFromObject(
    dependencyKey,
    subschema.properties as GenericObjectType
  );
  const dependentSchema = { ...subschema, properties: dependentSubschema };
  return mergeSchemas(
    schema,
    retrieveSchema<T>(validator, dependentSchema, rootSchema, formData)
  );
}

/** Merges a dependent schema into the `schema` dealing with oneOfs and references
 *
 * @param validator - An implementation of the `ValidatorType` interface that will be forwarded to all the APIs
 * @param schema - The schema for which resolving a dependent schema is desired
 * @param rootSchema - The root schema that will be forwarded to all the APIs
 * @param dependencyKey - The key name of the dependency
 * @param dependencyValue - The potentially dependent schema
 * @param formData- The current formData to assist retrieving a schema
 * @returns - The schema with the dependent schema resolved into it
 */
export function withDependentSchema<T>(
  validator: ValidatorType,
  schema: RJSFSchema,
  rootSchema: RJSFSchema,
  dependencyKey: string,
  dependencyValue: RJSFSchema,
  formData?: T
) {
  const { oneOf, ...dependentSchema } = retrieveSchema<T>(
    validator,
    dependencyValue,
    rootSchema,
    formData
  );
  schema = mergeSchemas(schema, dependentSchema);
  // Since it does not contain oneOf, we return the original schema.
  if (oneOf === undefined) {
    return schema;
  }
  // Resolve $refs inside oneOf.
  const resolvedOneOf = oneOf.map((subschema) => {
    if (typeof subschema === "boolean" || !(REF_KEY in subschema)) {
      return subschema;
    }
    return resolveReference<T>(
      validator,
      subschema as RJSFSchema,
      rootSchema,
      formData
    );
  });
  return withExactlyOneSubschema<T>(
    validator,
    schema,
    rootSchema,
    dependencyKey,
    resolvedOneOf,
    formData
  );
}

/** Processes all the `dependencies` recursively into the `resolvedSchema` as needed
 *
 * @param validator - An implementation of the `ValidatorType` interface that will be forwarded to all the APIs
 * @param dependencies - The set of dependencies that needs to be processed
 * @param resolvedSchema - The schema for which processing dependencies is desired
 * @param rootSchema - The root schema that will be forwarded to all the APIs
 * @param [formData] - The current formData, if any, to assist retrieving a schema
 * @returns - The schema with the `dependencies` resolved into it
 */
export function processDependencies<T = any>(
  validator: ValidatorType,
  dependencies: RJSFSchema["dependencies"],
  resolvedSchema: RJSFSchema,
  rootSchema: RJSFSchema,
  formData?: T
): RJSFSchema {
  let schema = resolvedSchema;
  // Process dependencies updating the local schema properties as appropriate.
  for (const dependencyKey in dependencies) {
    // Skip this dependency if its trigger property is not present.
    if (get(formData, [dependencyKey]) === undefined) {
      continue;
    }
    // Skip this dependency if it is not included in the schema (such as when dependencyKey is itself a hidden dependency.)
    if (schema.properties && !(dependencyKey in schema.properties)) {
      continue;
    }
    const [remainingDependencies, dependencyValue] = splitKeyElementFromObject(
      dependencyKey,
      dependencies as GenericObjectType
    );
    if (Array.isArray(dependencyValue)) {
      schema = withDependentProperties(schema, dependencyValue);
    } else if (isObject(dependencyValue)) {
      schema = withDependentSchema<T>(
        validator,
        schema,
        rootSchema,
        dependencyKey,
        dependencyValue as RJSFSchema,
        formData
      );
    }
    return processDependencies<T>(
      validator,
      remainingDependencies,
      schema,
      rootSchema,
      formData
    );
  }
  return schema;
}

/** Resolves dependencies within a schema and its 'allOf' children.
 *
 * @param validator - An implementation of the `ValidatorType` interface that will be forwarded to all the APIs
 * @param schema - The schema for which resolving a dependency is desired
 * @param rootSchema - The root schema that will be forwarded to all the APIs
 * @param [formData] - The current formData, if any, to assist retrieving a schema
 * @returns - The schema with its dependencies resolved
 */
export function resolveDependencies<T = any>(
  validator: ValidatorType,
  schema: RJSFSchema,
  rootSchema: RJSFSchema,
  formData?: T
): RJSFSchema {
  // Drop the dependencies from the source schema.
  const { dependencies, ...remainingSchema } = schema;
  let resolvedSchema = remainingSchema;
  if (Array.isArray(resolvedSchema.oneOf)) {
    resolvedSchema = resolvedSchema.oneOf[
      getMatchingOption<T>(
        validator,
        formData,
        resolvedSchema.oneOf as RJSFSchema[],
        rootSchema
      )
    ] as RJSFSchema;
  } else if (Array.isArray(resolvedSchema.anyOf)) {
    resolvedSchema = resolvedSchema.anyOf[
      getMatchingOption<T>(
        validator,
        formData,
        resolvedSchema.anyOf as RJSFSchema[],
        rootSchema
      )
    ] as RJSFSchema;
  }
  return processDependencies<T>(
    validator,
    dependencies,
    resolvedSchema,
    rootSchema,
    formData
  );
}

/** Given a `schema` will return an inner schema that for an array item. This is computed differently based on the
 * `additionalItems` enum and the value of `idx`. There are four possible returns:
 * 1. If `idx` is >= 0, then if `schema.items` is an array the `idx`th element of the array is returned if it is a valid
 *    index and not a boolean, otherwise it falls through to 3.
 * 2. If `schema.items` is not an array AND truthy and not a boolean, then `schema.items` is returned since it actually
 *    is a schema, otherwise it falls through to 3.
 * 3. If `additionalItems` is not `AdditionalItemsHandling.Ignore` and `schema.additionalItems` is an object, then
 *    `schema.additionalItems` is returned since it actually is a schema, otherwise it falls through to 4.
 * 4. {} is returned representing an empty schema
 *
 * @param schema - The schema from which to get the particular item
 * @param [additionalItems=AdditionalItemsHandling.Ignore] - How do we want to handle additional items?
 * @param [idx=-1] - Index, if non-negative, will be used to return the idx-th element in a `schema.items` array
 * @returns - The best fit schema object from the `schema` given the `additionalItems` and `idx` modifiers
 */
export function getInnerSchemaForArrayItem(
  schema: RJSFSchema,
  additionalItems: AdditionalItemsHandling = AdditionalItemsHandling.Ignore,
  idx = -1
): RJSFSchema {
  if (idx >= 0) {
    if (Array.isArray(schema.items) && idx < schema.items.length) {
      const item = schema.items[idx];
      if (typeof item !== "boolean") {
        return item;
      }
    }
  } else if (
    schema.items &&
    !Array.isArray(schema.items) &&
    typeof schema.items !== "boolean"
  ) {
    return schema.items;
  }
  if (
    additionalItems !== AdditionalItemsHandling.Ignore &&
    isObject(schema.additionalItems)
  ) {
    return schema.additionalItems as RJSFSchema;
  }
  return {};
}

/** Computes the defaults for the current `schema` given the `rawFormData` and `parentDefaults` if any. This drills into
 * each level of the schema, recursively, to fill out every level of defaults provided by the schema.
 *
 * @param validator - an implementation of the `ValidatorType` interface that will be used when necessary
 * @param schema - The schema for which the default state is desired
 * @param [parentDefaults] - Any defaults provided by the parent field in the schema
 * @param [rootSchema] - The options root schema, used to primarily to look up `$ref`s
 * @param [rawFormData] - The current formData, if any, onto which to provide any missing defaults
 * @param [includeUndefinedValues=false] - Optional flag, if true, cause undefined values to be added as defaults
 * @returns - The resulting `formData` with all the defaults provided
 */
export function computeDefaults<T = any>(
  validator: ValidatorType,
  schema: RJSFSchema,
  parentDefaults?: T,
  rootSchema: RJSFSchema = {},
  rawFormData?: T,
  includeUndefinedValues = false
): T | T[] | undefined {
  const formData = isObject(rawFormData) ? rawFormData : {};
  // Compute the defaults recursively: give the highest priority to the deepest nodes.
  let defaults: T | T[] | undefined = parentDefaults;

  if (REF_KEY in schema) {
    // Use referenced schema defaults for this node.
    const refSchema = findSchemaDefinition(schema[REF_KEY]!, rootSchema);
    return computeDefaults<T>(
      validator,
      refSchema,
      defaults,
      rootSchema,
      formData as T,
      includeUndefinedValues
    );
  }

  if (DEPENDENCIES_KEY in schema) {
    const resolvedSchema = resolveDependencies(
      validator,
      schema,
      rootSchema,
      formData
    );
    return computeDefaults<T>(
      validator,
      resolvedSchema,
      defaults,
      rootSchema,
      formData as T,
      includeUndefinedValues
    );
  }

  if (isObject(defaults) && isObject(schema.default)) {
    // For object defaults, only override parent defaults that are defined in
    // schema.default.
    defaults = mergeObjects(
      defaults!,
      schema.default as GenericObjectType
    ) as T;
  } else if (DEFAULT_KEY in schema) {
    defaults = schema.default as unknown as T;
  } else if (isFixedItems(schema)) {
    defaults = (schema.items! as RJSFSchema[]).map(
      (itemSchema: RJSFSchema, idx: number) =>
        computeDefaults<T>(
          validator,
          itemSchema,
          Array.isArray(parentDefaults) ? parentDefaults[idx] : undefined,
          rootSchema,
          formData as T,
          includeUndefinedValues
        )
    ) as T[];
  }

  const combinedData = isObject(defaults)
    ? mergeObjects(defaults, formData)
    : rawFormData ?? defaults;

  if (ONE_OF_KEY in schema) {
    schema = schema.oneOf![
      getMatchingOption(
        validator,
        combinedData,
        schema.oneOf as RJSFSchema[],
        rootSchema
      )
    ] as RJSFSchema;
  } else if (ANY_OF_KEY in schema) {
    schema = schema.anyOf![
      getMatchingOption(
        validator,
        combinedData,
        schema.anyOf as RJSFSchema[],
        rootSchema
      )
    ] as RJSFSchema;
  }

  // Not defaults defined for this node, fallback to generic typed ones.
  if (typeof defaults === "undefined") {
    defaults = schema.default as unknown as T;
  }

  switch (getSchemaType(schema)) {
    // We need to recur for object schema inner default values.
    case "object":
      return Object.keys(schema.properties || {}).reduce(
        (acc: GenericObjectType, key: string) => {
          // Compute the defaults for this node, with the parent defaults we might
          // have from a previous run: defaults[key].
          const computedDefault = computeDefaults<T>(
            validator,
            get(schema, [PROPERTIES_KEY, key]),
            get(defaults, [key]),
            rootSchema,
            get(formData, [key]),
            includeUndefinedValues
          );
          if (includeUndefinedValues || computedDefault !== undefined) {
            acc[key] = computedDefault;
          }
          return acc;
        },
        {}
      ) as T;

    case "array":
      // Inject defaults into existing array defaults
      if (Array.isArray(defaults)) {
        defaults = defaults.map((item, idx) => {
          const schemaItem: RJSFSchema = getInnerSchemaForArrayItem(
            schema,
            AdditionalItemsHandling.Fallback,
            idx
          );
          return computeDefaults<T>(validator, schemaItem, item, rootSchema);
        }) as T[];
      }

      // Deeply inject defaults into already existing form data
      if (Array.isArray(rawFormData)) {
        const schemaItem: RJSFSchema = getInnerSchemaForArrayItem(schema);
        defaults = rawFormData.map((item: T, idx: number) => {
          return computeDefaults<T>(
            validator,
            schemaItem,
            get(defaults, [idx]),
            rootSchema,
            item
          );
        }) as T[];
      }
      if (schema.minItems) {
        if (!isMultiSelect<T>(validator, schema, rootSchema)) {
          const defaultsLength = Array.isArray(defaults) ? defaults.length : 0;
          if (schema.minItems > defaultsLength) {
            const defaultEntries: T[] = (defaults || []) as T[];
            // populate the array with the defaults
            const fillerSchema: RJSFSchema = getInnerSchemaForArrayItem(
              schema,
              AdditionalItemsHandling.Invert
            );
            const fillerDefault = fillerSchema.default;
            const fillerEntries: T[] = new Array(
              schema.minItems - defaultsLength
            ).fill(
              computeDefaults<any>(
                validator,
                fillerSchema,
                fillerDefault,
                rootSchema
              )
            ) as T[];
            // then fill up the rest with either the item default or empty, up to minItems
            return defaultEntries.concat(fillerEntries);
          }
        }
        return defaults ? defaults : [];
      }
  }
  return defaults;
}

/** Returns the superset of `formData` that includes the given set updated to include any missing fields that have
 * computed to have defaults provided in the `schema`.
 *
 * @param validator - An implementation of the `ValidatorType` interface that will be used when necessary
 * @param theSchema - The schema for which the default state is desired
 * @param [formData] - The current formData, if any, onto which to provide any missing defaults
 * @param [rootSchema] - The root schema, used to primarily to look up `$ref`s
 * @param [includeUndefinedValues=false] - Optional flag, if true, cause undefined values to be added as defaults
 * @returns - The resulting `formData` with all the defaults provided
 */
export default function getDefaultFormState<T = any>(
  validator: ValidatorType,
  theSchema: RJSFSchema,
  formData?: T,
  rootSchema?: RJSFSchema,
  includeUndefinedValues = false
) {
  if (!isObject(theSchema)) {
    throw new Error("Invalid schema: " + theSchema);
  }
  const schema = retrieveSchema<T>(validator, theSchema, rootSchema, formData);
  const defaults = computeDefaults<T>(
    validator,
    schema,
    undefined,
    rootSchema,
    formData,
    includeUndefinedValues
  );
  if (
    typeof formData === "undefined" ||
    formData === null ||
    (typeof formData === "number" && isNaN(formData))
  ) {
    // No form data? Use schema defaults.
    return defaults;
  }
  if (isObject(formData)) {
    return mergeDefaultsWithFormData<T>(defaults as T, formData);
  }
  if (Array.isArray(formData)) {
    return mergeDefaultsWithFormData<T[]>(defaults as T[], formData);
  }
  return formData;
}
