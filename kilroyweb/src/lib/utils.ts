import { each, isPlainObject } from "lodash-es";
import {
  getInputProps,
  InputPropsType,
  RJSFSchema,
  UIOptionsType,
} from "@rjsf/utils";

export function countDecimals(num: number): number {
  const text = num.toString();

  if (text.indexOf("e-") > -1) {
    const [base, trail] = text.split("e-");
    const elen = parseInt(trail, 10);
    const idx = base.indexOf(".");

    return idx == -1 ? elen : base.length - idx - 1 + elen;
  }

  const index = text.indexOf(".");
  return index == -1 ? 0 : text.length - index - 1;
}

const ordinalRules = new Intl.PluralRules("en", { type: "ordinal" });

const ordinalSuffixes = {
  one: "st",
  two: "nd",
  few: "rd",
  other: "th",
};

export function toOrdinal(number: number): string {
  const category = ordinalRules.select(number);
  const suffix = ordinalSuffixes[category];
  return number + suffix;
}

export function objectDiff(a: object, b: object): object | null {
  const result = {};
  each(a, (v, k) => {
    if (b[k] === v) return;
    if (!isPlainObject(v)) {
      result[k] = v;
      return;
    }
    const diff = objectDiff(v, b[k]);
    if (diff !== null) result[k] = diff;
  });
  return Object.keys(result).length > 0 ? result : null;
}

export function getInputProperties<T = any, F = any>(
  schema: RJSFSchema,
  defaultType?: string,
  options?: UIOptionsType<T, F>
): InputPropsType {
  const type =
    Array.isArray(schema.type) &&
    schema.type.length === 2 &&
    schema.type.includes("null")
      ? schema.type.find((t) => t !== "null")
      : schema.type;

  const modifiedSchema = { ...schema, type };

  return getInputProps(modifiedSchema, defaultType, options);
}

export function enumToArray(enumObj) {
  return Object.keys(enumObj)
    .filter((value) => isNaN(Number(value)) === false)
    .map((key) => enumObj[key]);
}
