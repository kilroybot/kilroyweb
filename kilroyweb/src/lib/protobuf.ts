import type {
  BinaryReadOptions,
  FieldList,
  JsonReadOptions,
  JsonValue,
  PartialMessage,
  PlainMessage,
} from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * @generated from enum kilroy.cilroy.v1alpha.Status
 */
export enum Status {
  /**
   * @generated from enum value: STATUS_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: STATUS_LOADING = 1;
   */
  LOADING = 1,

  /**
   * @generated from enum value: STATUS_READY = 2;
   */
  READY = 2,
}

// Retrieve enum metadata with: proto3.getEnumType(Status)
proto3.util.setEnumType(Status, "kilroy.cilroy.v1alpha.Status", [
  { no: 0, name: "STATUS_UNSPECIFIED" },
  { no: 1, name: "STATUS_LOADING" },
  { no: 2, name: "STATUS_READY" },
]);

/**
 * @generated from enum kilroy.cilroy.v1alpha.TrainingStatus
 */
export enum TrainingStatus {
  /**
   * @generated from enum value: TRAINING_STATUS_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: TRAINING_STATUS_IDLE = 1;
   */
  IDLE = 1,

  /**
   * @generated from enum value: TRAINING_STATUS_OFFLINE = 2;
   */
  OFFLINE = 2,

  /**
   * @generated from enum value: TRAINING_STATUS_ONLINE = 3;
   */
  ONLINE = 3,
}

// Retrieve enum metadata with: proto3.getEnumType(TrainingStatus)
proto3.util.setEnumType(
  TrainingStatus,
  "kilroy.cilroy.v1alpha.TrainingStatus",
  [
    { no: 0, name: "TRAINING_STATUS_UNSPECIFIED" },
    { no: 1, name: "TRAINING_STATUS_IDLE" },
    { no: 2, name: "TRAINING_STATUS_OFFLINE" },
    { no: 3, name: "TRAINING_STATUS_ONLINE" },
  ]
);

/**
 * @generated from message kilroy.cilroy.v1alpha.GetFaceMetadataRequest
 */
export class GetFaceMetadataRequest extends Message<GetFaceMetadataRequest> {
  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.GetFaceMetadataRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => []);

  constructor(data?: PartialMessage<GetFaceMetadataRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetFaceMetadataRequest {
    return new GetFaceMetadataRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetFaceMetadataRequest {
    return new GetFaceMetadataRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetFaceMetadataRequest {
    return new GetFaceMetadataRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a:
      | GetFaceMetadataRequest
      | PlainMessage<GetFaceMetadataRequest>
      | undefined,
    b: GetFaceMetadataRequest | PlainMessage<GetFaceMetadataRequest> | undefined
  ): boolean {
    return proto3.util.equals(GetFaceMetadataRequest, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.GetFaceMetadataResponse
 */
export class GetFaceMetadataResponse extends Message<GetFaceMetadataResponse> {
  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.GetFaceMetadataResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    {
      no: 2,
      name: "description",
      kind: "scalar",
      T: 9 /* ScalarType.STRING */,
    },
  ]);
  /**
   * @generated from field: string key = 1;
   */
  key = "";
  /**
   * @generated from field: string description = 2;
   */
  description = "";

  constructor(data?: PartialMessage<GetFaceMetadataResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetFaceMetadataResponse {
    return new GetFaceMetadataResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetFaceMetadataResponse {
    return new GetFaceMetadataResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetFaceMetadataResponse {
    return new GetFaceMetadataResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a:
      | GetFaceMetadataResponse
      | PlainMessage<GetFaceMetadataResponse>
      | undefined,
    b:
      | GetFaceMetadataResponse
      | PlainMessage<GetFaceMetadataResponse>
      | undefined
  ): boolean {
    return proto3.util.equals(GetFaceMetadataResponse, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.GetModuleMetadataRequest
 */
export class GetModuleMetadataRequest extends Message<GetModuleMetadataRequest> {
  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.GetModuleMetadataRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => []);

  constructor(data?: PartialMessage<GetModuleMetadataRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetModuleMetadataRequest {
    return new GetModuleMetadataRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetModuleMetadataRequest {
    return new GetModuleMetadataRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetModuleMetadataRequest {
    return new GetModuleMetadataRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a:
      | GetModuleMetadataRequest
      | PlainMessage<GetModuleMetadataRequest>
      | undefined,
    b:
      | GetModuleMetadataRequest
      | PlainMessage<GetModuleMetadataRequest>
      | undefined
  ): boolean {
    return proto3.util.equals(GetModuleMetadataRequest, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.GetModuleMetadataResponse
 */
export class GetModuleMetadataResponse extends Message<GetModuleMetadataResponse> {
  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.GetModuleMetadataResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    {
      no: 2,
      name: "description",
      kind: "scalar",
      T: 9 /* ScalarType.STRING */,
    },
  ]);
  /**
   * @generated from field: string key = 1;
   */
  key = "";
  /**
   * @generated from field: string description = 2;
   */
  description = "";

  constructor(data?: PartialMessage<GetModuleMetadataResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetModuleMetadataResponse {
    return new GetModuleMetadataResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetModuleMetadataResponse {
    return new GetModuleMetadataResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetModuleMetadataResponse {
    return new GetModuleMetadataResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a:
      | GetModuleMetadataResponse
      | PlainMessage<GetModuleMetadataResponse>
      | undefined,
    b:
      | GetModuleMetadataResponse
      | PlainMessage<GetModuleMetadataResponse>
      | undefined
  ): boolean {
    return proto3.util.equals(GetModuleMetadataResponse, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.GetFacePostSchemaRequest
 */
export class GetFacePostSchemaRequest extends Message<GetFacePostSchemaRequest> {
  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.GetFacePostSchemaRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => []);

  constructor(data?: PartialMessage<GetFacePostSchemaRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetFacePostSchemaRequest {
    return new GetFacePostSchemaRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetFacePostSchemaRequest {
    return new GetFacePostSchemaRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetFacePostSchemaRequest {
    return new GetFacePostSchemaRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a:
      | GetFacePostSchemaRequest
      | PlainMessage<GetFacePostSchemaRequest>
      | undefined,
    b:
      | GetFacePostSchemaRequest
      | PlainMessage<GetFacePostSchemaRequest>
      | undefined
  ): boolean {
    return proto3.util.equals(GetFacePostSchemaRequest, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.GetFacePostSchemaResponse
 */
export class GetFacePostSchemaResponse extends Message<GetFacePostSchemaResponse> {
  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.GetFacePostSchemaResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "schema", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);
  /**
   * @generated from field: string schema = 1;
   */
  schema = "";

  constructor(data?: PartialMessage<GetFacePostSchemaResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetFacePostSchemaResponse {
    return new GetFacePostSchemaResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetFacePostSchemaResponse {
    return new GetFacePostSchemaResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetFacePostSchemaResponse {
    return new GetFacePostSchemaResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a:
      | GetFacePostSchemaResponse
      | PlainMessage<GetFacePostSchemaResponse>
      | undefined,
    b:
      | GetFacePostSchemaResponse
      | PlainMessage<GetFacePostSchemaResponse>
      | undefined
  ): boolean {
    return proto3.util.equals(GetFacePostSchemaResponse, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.GetModulePostSchemaRequest
 */
export class GetModulePostSchemaRequest extends Message<GetModulePostSchemaRequest> {
  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.GetModulePostSchemaRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => []);

  constructor(data?: PartialMessage<GetModulePostSchemaRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetModulePostSchemaRequest {
    return new GetModulePostSchemaRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetModulePostSchemaRequest {
    return new GetModulePostSchemaRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetModulePostSchemaRequest {
    return new GetModulePostSchemaRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a:
      | GetModulePostSchemaRequest
      | PlainMessage<GetModulePostSchemaRequest>
      | undefined,
    b:
      | GetModulePostSchemaRequest
      | PlainMessage<GetModulePostSchemaRequest>
      | undefined
  ): boolean {
    return proto3.util.equals(GetModulePostSchemaRequest, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.GetModulePostSchemaResponse
 */
export class GetModulePostSchemaResponse extends Message<GetModulePostSchemaResponse> {
  static readonly runtime = proto3;
  static readonly typeName =
    "kilroy.cilroy.v1alpha.GetModulePostSchemaResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "schema", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);
  /**
   * @generated from field: string schema = 1;
   */
  schema = "";

  constructor(data?: PartialMessage<GetModulePostSchemaResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetModulePostSchemaResponse {
    return new GetModulePostSchemaResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetModulePostSchemaResponse {
    return new GetModulePostSchemaResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetModulePostSchemaResponse {
    return new GetModulePostSchemaResponse().fromJsonString(
      jsonString,
      options
    );
  }

  static equals(
    a:
      | GetModulePostSchemaResponse
      | PlainMessage<GetModulePostSchemaResponse>
      | undefined,
    b:
      | GetModulePostSchemaResponse
      | PlainMessage<GetModulePostSchemaResponse>
      | undefined
  ): boolean {
    return proto3.util.equals(GetModulePostSchemaResponse, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.GetControllerStatusRequest
 */
export class GetControllerStatusRequest extends Message<GetControllerStatusRequest> {
  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.GetControllerStatusRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => []);

  constructor(data?: PartialMessage<GetControllerStatusRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetControllerStatusRequest {
    return new GetControllerStatusRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetControllerStatusRequest {
    return new GetControllerStatusRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetControllerStatusRequest {
    return new GetControllerStatusRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a:
      | GetControllerStatusRequest
      | PlainMessage<GetControllerStatusRequest>
      | undefined,
    b:
      | GetControllerStatusRequest
      | PlainMessage<GetControllerStatusRequest>
      | undefined
  ): boolean {
    return proto3.util.equals(GetControllerStatusRequest, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.GetControllerStatusResponse
 */
export class GetControllerStatusResponse extends Message<GetControllerStatusResponse> {
  static readonly runtime = proto3;
  static readonly typeName =
    "kilroy.cilroy.v1alpha.GetControllerStatusResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "status", kind: "enum", T: proto3.getEnumType(Status) },
  ]);
  /**
   * @generated from field: kilroy.cilroy.v1alpha.Status status = 1;
   */
  status = Status.UNSPECIFIED;

  constructor(data?: PartialMessage<GetControllerStatusResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetControllerStatusResponse {
    return new GetControllerStatusResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetControllerStatusResponse {
    return new GetControllerStatusResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetControllerStatusResponse {
    return new GetControllerStatusResponse().fromJsonString(
      jsonString,
      options
    );
  }

  static equals(
    a:
      | GetControllerStatusResponse
      | PlainMessage<GetControllerStatusResponse>
      | undefined,
    b:
      | GetControllerStatusResponse
      | PlainMessage<GetControllerStatusResponse>
      | undefined
  ): boolean {
    return proto3.util.equals(GetControllerStatusResponse, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.WatchControllerStatusRequest
 */
export class WatchControllerStatusRequest extends Message<WatchControllerStatusRequest> {
  static readonly runtime = proto3;
  static readonly typeName =
    "kilroy.cilroy.v1alpha.WatchControllerStatusRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => []);

  constructor(data?: PartialMessage<WatchControllerStatusRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): WatchControllerStatusRequest {
    return new WatchControllerStatusRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): WatchControllerStatusRequest {
    return new WatchControllerStatusRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): WatchControllerStatusRequest {
    return new WatchControllerStatusRequest().fromJsonString(
      jsonString,
      options
    );
  }

  static equals(
    a:
      | WatchControllerStatusRequest
      | PlainMessage<WatchControllerStatusRequest>
      | undefined,
    b:
      | WatchControllerStatusRequest
      | PlainMessage<WatchControllerStatusRequest>
      | undefined
  ): boolean {
    return proto3.util.equals(WatchControllerStatusRequest, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.WatchControllerStatusResponse
 */
export class WatchControllerStatusResponse extends Message<WatchControllerStatusResponse> {
  static readonly runtime = proto3;
  static readonly typeName =
    "kilroy.cilroy.v1alpha.WatchControllerStatusResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "status", kind: "enum", T: proto3.getEnumType(Status) },
  ]);
  /**
   * @generated from field: kilroy.cilroy.v1alpha.Status status = 1;
   */
  status = Status.UNSPECIFIED;

  constructor(data?: PartialMessage<WatchControllerStatusResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): WatchControllerStatusResponse {
    return new WatchControllerStatusResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): WatchControllerStatusResponse {
    return new WatchControllerStatusResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): WatchControllerStatusResponse {
    return new WatchControllerStatusResponse().fromJsonString(
      jsonString,
      options
    );
  }

  static equals(
    a:
      | WatchControllerStatusResponse
      | PlainMessage<WatchControllerStatusResponse>
      | undefined,
    b:
      | WatchControllerStatusResponse
      | PlainMessage<WatchControllerStatusResponse>
      | undefined
  ): boolean {
    return proto3.util.equals(WatchControllerStatusResponse, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.GetFaceStatusRequest
 */
export class GetFaceStatusRequest extends Message<GetFaceStatusRequest> {
  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.GetFaceStatusRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => []);

  constructor(data?: PartialMessage<GetFaceStatusRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetFaceStatusRequest {
    return new GetFaceStatusRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetFaceStatusRequest {
    return new GetFaceStatusRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetFaceStatusRequest {
    return new GetFaceStatusRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: GetFaceStatusRequest | PlainMessage<GetFaceStatusRequest> | undefined,
    b: GetFaceStatusRequest | PlainMessage<GetFaceStatusRequest> | undefined
  ): boolean {
    return proto3.util.equals(GetFaceStatusRequest, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.GetFaceStatusResponse
 */
export class GetFaceStatusResponse extends Message<GetFaceStatusResponse> {
  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.GetFaceStatusResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "status", kind: "enum", T: proto3.getEnumType(Status) },
  ]);
  /**
   * @generated from field: kilroy.cilroy.v1alpha.Status status = 1;
   */
  status = Status.UNSPECIFIED;

  constructor(data?: PartialMessage<GetFaceStatusResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetFaceStatusResponse {
    return new GetFaceStatusResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetFaceStatusResponse {
    return new GetFaceStatusResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetFaceStatusResponse {
    return new GetFaceStatusResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a: GetFaceStatusResponse | PlainMessage<GetFaceStatusResponse> | undefined,
    b: GetFaceStatusResponse | PlainMessage<GetFaceStatusResponse> | undefined
  ): boolean {
    return proto3.util.equals(GetFaceStatusResponse, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.WatchFaceStatusRequest
 */
export class WatchFaceStatusRequest extends Message<WatchFaceStatusRequest> {
  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.WatchFaceStatusRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => []);

  constructor(data?: PartialMessage<WatchFaceStatusRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): WatchFaceStatusRequest {
    return new WatchFaceStatusRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): WatchFaceStatusRequest {
    return new WatchFaceStatusRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): WatchFaceStatusRequest {
    return new WatchFaceStatusRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a:
      | WatchFaceStatusRequest
      | PlainMessage<WatchFaceStatusRequest>
      | undefined,
    b: WatchFaceStatusRequest | PlainMessage<WatchFaceStatusRequest> | undefined
  ): boolean {
    return proto3.util.equals(WatchFaceStatusRequest, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.WatchFaceStatusResponse
 */
export class WatchFaceStatusResponse extends Message<WatchFaceStatusResponse> {
  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.WatchFaceStatusResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "status", kind: "enum", T: proto3.getEnumType(Status) },
  ]);
  /**
   * @generated from field: kilroy.cilroy.v1alpha.Status status = 1;
   */
  status = Status.UNSPECIFIED;

  constructor(data?: PartialMessage<WatchFaceStatusResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): WatchFaceStatusResponse {
    return new WatchFaceStatusResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): WatchFaceStatusResponse {
    return new WatchFaceStatusResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): WatchFaceStatusResponse {
    return new WatchFaceStatusResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a:
      | WatchFaceStatusResponse
      | PlainMessage<WatchFaceStatusResponse>
      | undefined,
    b:
      | WatchFaceStatusResponse
      | PlainMessage<WatchFaceStatusResponse>
      | undefined
  ): boolean {
    return proto3.util.equals(WatchFaceStatusResponse, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.GetModuleStatusRequest
 */
export class GetModuleStatusRequest extends Message<GetModuleStatusRequest> {
  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.GetModuleStatusRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => []);

  constructor(data?: PartialMessage<GetModuleStatusRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetModuleStatusRequest {
    return new GetModuleStatusRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetModuleStatusRequest {
    return new GetModuleStatusRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetModuleStatusRequest {
    return new GetModuleStatusRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a:
      | GetModuleStatusRequest
      | PlainMessage<GetModuleStatusRequest>
      | undefined,
    b: GetModuleStatusRequest | PlainMessage<GetModuleStatusRequest> | undefined
  ): boolean {
    return proto3.util.equals(GetModuleStatusRequest, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.GetModuleStatusResponse
 */
export class GetModuleStatusResponse extends Message<GetModuleStatusResponse> {
  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.GetModuleStatusResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "status", kind: "enum", T: proto3.getEnumType(Status) },
  ]);
  /**
   * @generated from field: kilroy.cilroy.v1alpha.Status status = 1;
   */
  status = Status.UNSPECIFIED;

  constructor(data?: PartialMessage<GetModuleStatusResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetModuleStatusResponse {
    return new GetModuleStatusResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetModuleStatusResponse {
    return new GetModuleStatusResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetModuleStatusResponse {
    return new GetModuleStatusResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a:
      | GetModuleStatusResponse
      | PlainMessage<GetModuleStatusResponse>
      | undefined,
    b:
      | GetModuleStatusResponse
      | PlainMessage<GetModuleStatusResponse>
      | undefined
  ): boolean {
    return proto3.util.equals(GetModuleStatusResponse, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.WatchModuleStatusRequest
 */
export class WatchModuleStatusRequest extends Message<WatchModuleStatusRequest> {
  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.WatchModuleStatusRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => []);

  constructor(data?: PartialMessage<WatchModuleStatusRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): WatchModuleStatusRequest {
    return new WatchModuleStatusRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): WatchModuleStatusRequest {
    return new WatchModuleStatusRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): WatchModuleStatusRequest {
    return new WatchModuleStatusRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a:
      | WatchModuleStatusRequest
      | PlainMessage<WatchModuleStatusRequest>
      | undefined,
    b:
      | WatchModuleStatusRequest
      | PlainMessage<WatchModuleStatusRequest>
      | undefined
  ): boolean {
    return proto3.util.equals(WatchModuleStatusRequest, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.WatchModuleStatusResponse
 */
export class WatchModuleStatusResponse extends Message<WatchModuleStatusResponse> {
  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.WatchModuleStatusResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "status", kind: "enum", T: proto3.getEnumType(Status) },
  ]);
  /**
   * @generated from field: kilroy.cilroy.v1alpha.Status status = 1;
   */
  status = Status.UNSPECIFIED;

  constructor(data?: PartialMessage<WatchModuleStatusResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): WatchModuleStatusResponse {
    return new WatchModuleStatusResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): WatchModuleStatusResponse {
    return new WatchModuleStatusResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): WatchModuleStatusResponse {
    return new WatchModuleStatusResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a:
      | WatchModuleStatusResponse
      | PlainMessage<WatchModuleStatusResponse>
      | undefined,
    b:
      | WatchModuleStatusResponse
      | PlainMessage<WatchModuleStatusResponse>
      | undefined
  ): boolean {
    return proto3.util.equals(WatchModuleStatusResponse, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.GetTrainingStatusRequest
 */
export class GetTrainingStatusRequest extends Message<GetTrainingStatusRequest> {
  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.GetTrainingStatusRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => []);

  constructor(data?: PartialMessage<GetTrainingStatusRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetTrainingStatusRequest {
    return new GetTrainingStatusRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetTrainingStatusRequest {
    return new GetTrainingStatusRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetTrainingStatusRequest {
    return new GetTrainingStatusRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a:
      | GetTrainingStatusRequest
      | PlainMessage<GetTrainingStatusRequest>
      | undefined,
    b:
      | GetTrainingStatusRequest
      | PlainMessage<GetTrainingStatusRequest>
      | undefined
  ): boolean {
    return proto3.util.equals(GetTrainingStatusRequest, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.GetTrainingStatusResponse
 */
export class GetTrainingStatusResponse extends Message<GetTrainingStatusResponse> {
  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.GetTrainingStatusResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    {
      no: 1,
      name: "status",
      kind: "enum",
      T: proto3.getEnumType(TrainingStatus),
    },
  ]);
  /**
   * @generated from field: kilroy.cilroy.v1alpha.TrainingStatus status = 1;
   */
  status = TrainingStatus.UNSPECIFIED;

  constructor(data?: PartialMessage<GetTrainingStatusResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetTrainingStatusResponse {
    return new GetTrainingStatusResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetTrainingStatusResponse {
    return new GetTrainingStatusResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetTrainingStatusResponse {
    return new GetTrainingStatusResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a:
      | GetTrainingStatusResponse
      | PlainMessage<GetTrainingStatusResponse>
      | undefined,
    b:
      | GetTrainingStatusResponse
      | PlainMessage<GetTrainingStatusResponse>
      | undefined
  ): boolean {
    return proto3.util.equals(GetTrainingStatusResponse, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.WatchTrainingStatusRequest
 */
export class WatchTrainingStatusRequest extends Message<WatchTrainingStatusRequest> {
  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.WatchTrainingStatusRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => []);

  constructor(data?: PartialMessage<WatchTrainingStatusRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): WatchTrainingStatusRequest {
    return new WatchTrainingStatusRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): WatchTrainingStatusRequest {
    return new WatchTrainingStatusRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): WatchTrainingStatusRequest {
    return new WatchTrainingStatusRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a:
      | WatchTrainingStatusRequest
      | PlainMessage<WatchTrainingStatusRequest>
      | undefined,
    b:
      | WatchTrainingStatusRequest
      | PlainMessage<WatchTrainingStatusRequest>
      | undefined
  ): boolean {
    return proto3.util.equals(WatchTrainingStatusRequest, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.WatchTrainingStatusResponse
 */
export class WatchTrainingStatusResponse extends Message<WatchTrainingStatusResponse> {
  static readonly runtime = proto3;
  static readonly typeName =
    "kilroy.cilroy.v1alpha.WatchTrainingStatusResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    {
      no: 1,
      name: "status",
      kind: "enum",
      T: proto3.getEnumType(TrainingStatus),
    },
  ]);
  /**
   * @generated from field: kilroy.cilroy.v1alpha.TrainingStatus status = 1;
   */
  status = TrainingStatus.UNSPECIFIED;

  constructor(data?: PartialMessage<WatchTrainingStatusResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): WatchTrainingStatusResponse {
    return new WatchTrainingStatusResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): WatchTrainingStatusResponse {
    return new WatchTrainingStatusResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): WatchTrainingStatusResponse {
    return new WatchTrainingStatusResponse().fromJsonString(
      jsonString,
      options
    );
  }

  static equals(
    a:
      | WatchTrainingStatusResponse
      | PlainMessage<WatchTrainingStatusResponse>
      | undefined,
    b:
      | WatchTrainingStatusResponse
      | PlainMessage<WatchTrainingStatusResponse>
      | undefined
  ): boolean {
    return proto3.util.equals(WatchTrainingStatusResponse, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.GetControllerConfigSchemaRequest
 */
export class GetControllerConfigSchemaRequest extends Message<GetControllerConfigSchemaRequest> {
  static readonly runtime = proto3;
  static readonly typeName =
    "kilroy.cilroy.v1alpha.GetControllerConfigSchemaRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => []);

  constructor(data?: PartialMessage<GetControllerConfigSchemaRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetControllerConfigSchemaRequest {
    return new GetControllerConfigSchemaRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetControllerConfigSchemaRequest {
    return new GetControllerConfigSchemaRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetControllerConfigSchemaRequest {
    return new GetControllerConfigSchemaRequest().fromJsonString(
      jsonString,
      options
    );
  }

  static equals(
    a:
      | GetControllerConfigSchemaRequest
      | PlainMessage<GetControllerConfigSchemaRequest>
      | undefined,
    b:
      | GetControllerConfigSchemaRequest
      | PlainMessage<GetControllerConfigSchemaRequest>
      | undefined
  ): boolean {
    return proto3.util.equals(GetControllerConfigSchemaRequest, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.GetControllerConfigSchemaResponse
 */
export class GetControllerConfigSchemaResponse extends Message<GetControllerConfigSchemaResponse> {
  static readonly runtime = proto3;
  static readonly typeName =
    "kilroy.cilroy.v1alpha.GetControllerConfigSchemaResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "schema", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);
  /**
   * @generated from field: string schema = 1;
   */
  schema = "";

  constructor(data?: PartialMessage<GetControllerConfigSchemaResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetControllerConfigSchemaResponse {
    return new GetControllerConfigSchemaResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetControllerConfigSchemaResponse {
    return new GetControllerConfigSchemaResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetControllerConfigSchemaResponse {
    return new GetControllerConfigSchemaResponse().fromJsonString(
      jsonString,
      options
    );
  }

  static equals(
    a:
      | GetControllerConfigSchemaResponse
      | PlainMessage<GetControllerConfigSchemaResponse>
      | undefined,
    b:
      | GetControllerConfigSchemaResponse
      | PlainMessage<GetControllerConfigSchemaResponse>
      | undefined
  ): boolean {
    return proto3.util.equals(GetControllerConfigSchemaResponse, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.GetControllerConfigRequest
 */
export class GetControllerConfigRequest extends Message<GetControllerConfigRequest> {
  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.GetControllerConfigRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => []);

  constructor(data?: PartialMessage<GetControllerConfigRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetControllerConfigRequest {
    return new GetControllerConfigRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetControllerConfigRequest {
    return new GetControllerConfigRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetControllerConfigRequest {
    return new GetControllerConfigRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a:
      | GetControllerConfigRequest
      | PlainMessage<GetControllerConfigRequest>
      | undefined,
    b:
      | GetControllerConfigRequest
      | PlainMessage<GetControllerConfigRequest>
      | undefined
  ): boolean {
    return proto3.util.equals(GetControllerConfigRequest, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.GetControllerConfigResponse
 */
export class GetControllerConfigResponse extends Message<GetControllerConfigResponse> {
  static readonly runtime = proto3;
  static readonly typeName =
    "kilroy.cilroy.v1alpha.GetControllerConfigResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "config", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);
  /**
   * @generated from field: string config = 1;
   */
  config = "";

  constructor(data?: PartialMessage<GetControllerConfigResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetControllerConfigResponse {
    return new GetControllerConfigResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetControllerConfigResponse {
    return new GetControllerConfigResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetControllerConfigResponse {
    return new GetControllerConfigResponse().fromJsonString(
      jsonString,
      options
    );
  }

  static equals(
    a:
      | GetControllerConfigResponse
      | PlainMessage<GetControllerConfigResponse>
      | undefined,
    b:
      | GetControllerConfigResponse
      | PlainMessage<GetControllerConfigResponse>
      | undefined
  ): boolean {
    return proto3.util.equals(GetControllerConfigResponse, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.WatchControllerConfigRequest
 */
export class WatchControllerConfigRequest extends Message<WatchControllerConfigRequest> {
  static readonly runtime = proto3;
  static readonly typeName =
    "kilroy.cilroy.v1alpha.WatchControllerConfigRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => []);

  constructor(data?: PartialMessage<WatchControllerConfigRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): WatchControllerConfigRequest {
    return new WatchControllerConfigRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): WatchControllerConfigRequest {
    return new WatchControllerConfigRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): WatchControllerConfigRequest {
    return new WatchControllerConfigRequest().fromJsonString(
      jsonString,
      options
    );
  }

  static equals(
    a:
      | WatchControllerConfigRequest
      | PlainMessage<WatchControllerConfigRequest>
      | undefined,
    b:
      | WatchControllerConfigRequest
      | PlainMessage<WatchControllerConfigRequest>
      | undefined
  ): boolean {
    return proto3.util.equals(WatchControllerConfigRequest, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.WatchControllerConfigResponse
 */
export class WatchControllerConfigResponse extends Message<WatchControllerConfigResponse> {
  static readonly runtime = proto3;
  static readonly typeName =
    "kilroy.cilroy.v1alpha.WatchControllerConfigResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "config", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);
  /**
   * @generated from field: string config = 1;
   */
  config = "";

  constructor(data?: PartialMessage<WatchControllerConfigResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): WatchControllerConfigResponse {
    return new WatchControllerConfigResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): WatchControllerConfigResponse {
    return new WatchControllerConfigResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): WatchControllerConfigResponse {
    return new WatchControllerConfigResponse().fromJsonString(
      jsonString,
      options
    );
  }

  static equals(
    a:
      | WatchControllerConfigResponse
      | PlainMessage<WatchControllerConfigResponse>
      | undefined,
    b:
      | WatchControllerConfigResponse
      | PlainMessage<WatchControllerConfigResponse>
      | undefined
  ): boolean {
    return proto3.util.equals(WatchControllerConfigResponse, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.SetControllerConfigRequest
 */
export class SetControllerConfigRequest extends Message<SetControllerConfigRequest> {
  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.SetControllerConfigRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "config", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);
  /**
   * @generated from field: string config = 1;
   */
  config = "";

  constructor(data?: PartialMessage<SetControllerConfigRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): SetControllerConfigRequest {
    return new SetControllerConfigRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): SetControllerConfigRequest {
    return new SetControllerConfigRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): SetControllerConfigRequest {
    return new SetControllerConfigRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a:
      | SetControllerConfigRequest
      | PlainMessage<SetControllerConfigRequest>
      | undefined,
    b:
      | SetControllerConfigRequest
      | PlainMessage<SetControllerConfigRequest>
      | undefined
  ): boolean {
    return proto3.util.equals(SetControllerConfigRequest, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.SetControllerConfigResponse
 */
export class SetControllerConfigResponse extends Message<SetControllerConfigResponse> {
  static readonly runtime = proto3;
  static readonly typeName =
    "kilroy.cilroy.v1alpha.SetControllerConfigResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "config", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);
  /**
   * @generated from field: string config = 1;
   */
  config = "";

  constructor(data?: PartialMessage<SetControllerConfigResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): SetControllerConfigResponse {
    return new SetControllerConfigResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): SetControllerConfigResponse {
    return new SetControllerConfigResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): SetControllerConfigResponse {
    return new SetControllerConfigResponse().fromJsonString(
      jsonString,
      options
    );
  }

  static equals(
    a:
      | SetControllerConfigResponse
      | PlainMessage<SetControllerConfigResponse>
      | undefined,
    b:
      | SetControllerConfigResponse
      | PlainMessage<SetControllerConfigResponse>
      | undefined
  ): boolean {
    return proto3.util.equals(SetControllerConfigResponse, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.GetFaceConfigSchemaRequest
 */
export class GetFaceConfigSchemaRequest extends Message<GetFaceConfigSchemaRequest> {
  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.GetFaceConfigSchemaRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => []);

  constructor(data?: PartialMessage<GetFaceConfigSchemaRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetFaceConfigSchemaRequest {
    return new GetFaceConfigSchemaRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetFaceConfigSchemaRequest {
    return new GetFaceConfigSchemaRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetFaceConfigSchemaRequest {
    return new GetFaceConfigSchemaRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a:
      | GetFaceConfigSchemaRequest
      | PlainMessage<GetFaceConfigSchemaRequest>
      | undefined,
    b:
      | GetFaceConfigSchemaRequest
      | PlainMessage<GetFaceConfigSchemaRequest>
      | undefined
  ): boolean {
    return proto3.util.equals(GetFaceConfigSchemaRequest, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.GetFaceConfigSchemaResponse
 */
export class GetFaceConfigSchemaResponse extends Message<GetFaceConfigSchemaResponse> {
  static readonly runtime = proto3;
  static readonly typeName =
    "kilroy.cilroy.v1alpha.GetFaceConfigSchemaResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "schema", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);
  /**
   * @generated from field: string schema = 1;
   */
  schema = "";

  constructor(data?: PartialMessage<GetFaceConfigSchemaResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetFaceConfigSchemaResponse {
    return new GetFaceConfigSchemaResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetFaceConfigSchemaResponse {
    return new GetFaceConfigSchemaResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetFaceConfigSchemaResponse {
    return new GetFaceConfigSchemaResponse().fromJsonString(
      jsonString,
      options
    );
  }

  static equals(
    a:
      | GetFaceConfigSchemaResponse
      | PlainMessage<GetFaceConfigSchemaResponse>
      | undefined,
    b:
      | GetFaceConfigSchemaResponse
      | PlainMessage<GetFaceConfigSchemaResponse>
      | undefined
  ): boolean {
    return proto3.util.equals(GetFaceConfigSchemaResponse, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.GetFaceConfigRequest
 */
export class GetFaceConfigRequest extends Message<GetFaceConfigRequest> {
  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.GetFaceConfigRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => []);

  constructor(data?: PartialMessage<GetFaceConfigRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetFaceConfigRequest {
    return new GetFaceConfigRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetFaceConfigRequest {
    return new GetFaceConfigRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetFaceConfigRequest {
    return new GetFaceConfigRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: GetFaceConfigRequest | PlainMessage<GetFaceConfigRequest> | undefined,
    b: GetFaceConfigRequest | PlainMessage<GetFaceConfigRequest> | undefined
  ): boolean {
    return proto3.util.equals(GetFaceConfigRequest, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.GetFaceConfigResponse
 */
export class GetFaceConfigResponse extends Message<GetFaceConfigResponse> {
  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.GetFaceConfigResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "config", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);
  /**
   * @generated from field: string config = 1;
   */
  config = "";

  constructor(data?: PartialMessage<GetFaceConfigResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetFaceConfigResponse {
    return new GetFaceConfigResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetFaceConfigResponse {
    return new GetFaceConfigResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetFaceConfigResponse {
    return new GetFaceConfigResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a: GetFaceConfigResponse | PlainMessage<GetFaceConfigResponse> | undefined,
    b: GetFaceConfigResponse | PlainMessage<GetFaceConfigResponse> | undefined
  ): boolean {
    return proto3.util.equals(GetFaceConfigResponse, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.WatchFaceConfigRequest
 */
export class WatchFaceConfigRequest extends Message<WatchFaceConfigRequest> {
  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.WatchFaceConfigRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => []);

  constructor(data?: PartialMessage<WatchFaceConfigRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): WatchFaceConfigRequest {
    return new WatchFaceConfigRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): WatchFaceConfigRequest {
    return new WatchFaceConfigRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): WatchFaceConfigRequest {
    return new WatchFaceConfigRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a:
      | WatchFaceConfigRequest
      | PlainMessage<WatchFaceConfigRequest>
      | undefined,
    b: WatchFaceConfigRequest | PlainMessage<WatchFaceConfigRequest> | undefined
  ): boolean {
    return proto3.util.equals(WatchFaceConfigRequest, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.WatchFaceConfigResponse
 */
export class WatchFaceConfigResponse extends Message<WatchFaceConfigResponse> {
  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.WatchFaceConfigResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "config", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);
  /**
   * @generated from field: string config = 1;
   */
  config = "";

  constructor(data?: PartialMessage<WatchFaceConfigResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): WatchFaceConfigResponse {
    return new WatchFaceConfigResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): WatchFaceConfigResponse {
    return new WatchFaceConfigResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): WatchFaceConfigResponse {
    return new WatchFaceConfigResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a:
      | WatchFaceConfigResponse
      | PlainMessage<WatchFaceConfigResponse>
      | undefined,
    b:
      | WatchFaceConfigResponse
      | PlainMessage<WatchFaceConfigResponse>
      | undefined
  ): boolean {
    return proto3.util.equals(WatchFaceConfigResponse, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.SetFaceConfigRequest
 */
export class SetFaceConfigRequest extends Message<SetFaceConfigRequest> {
  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.SetFaceConfigRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "config", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);
  /**
   * @generated from field: string config = 1;
   */
  config = "";

  constructor(data?: PartialMessage<SetFaceConfigRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): SetFaceConfigRequest {
    return new SetFaceConfigRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): SetFaceConfigRequest {
    return new SetFaceConfigRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): SetFaceConfigRequest {
    return new SetFaceConfigRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: SetFaceConfigRequest | PlainMessage<SetFaceConfigRequest> | undefined,
    b: SetFaceConfigRequest | PlainMessage<SetFaceConfigRequest> | undefined
  ): boolean {
    return proto3.util.equals(SetFaceConfigRequest, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.SetFaceConfigResponse
 */
export class SetFaceConfigResponse extends Message<SetFaceConfigResponse> {
  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.SetFaceConfigResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "config", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);
  /**
   * @generated from field: string config = 1;
   */
  config = "";

  constructor(data?: PartialMessage<SetFaceConfigResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): SetFaceConfigResponse {
    return new SetFaceConfigResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): SetFaceConfigResponse {
    return new SetFaceConfigResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): SetFaceConfigResponse {
    return new SetFaceConfigResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a: SetFaceConfigResponse | PlainMessage<SetFaceConfigResponse> | undefined,
    b: SetFaceConfigResponse | PlainMessage<SetFaceConfigResponse> | undefined
  ): boolean {
    return proto3.util.equals(SetFaceConfigResponse, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.GetModuleConfigSchemaRequest
 */
export class GetModuleConfigSchemaRequest extends Message<GetModuleConfigSchemaRequest> {
  static readonly runtime = proto3;
  static readonly typeName =
    "kilroy.cilroy.v1alpha.GetModuleConfigSchemaRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => []);

  constructor(data?: PartialMessage<GetModuleConfigSchemaRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetModuleConfigSchemaRequest {
    return new GetModuleConfigSchemaRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetModuleConfigSchemaRequest {
    return new GetModuleConfigSchemaRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetModuleConfigSchemaRequest {
    return new GetModuleConfigSchemaRequest().fromJsonString(
      jsonString,
      options
    );
  }

  static equals(
    a:
      | GetModuleConfigSchemaRequest
      | PlainMessage<GetModuleConfigSchemaRequest>
      | undefined,
    b:
      | GetModuleConfigSchemaRequest
      | PlainMessage<GetModuleConfigSchemaRequest>
      | undefined
  ): boolean {
    return proto3.util.equals(GetModuleConfigSchemaRequest, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.GetModuleConfigSchemaResponse
 */
export class GetModuleConfigSchemaResponse extends Message<GetModuleConfigSchemaResponse> {
  static readonly runtime = proto3;
  static readonly typeName =
    "kilroy.cilroy.v1alpha.GetModuleConfigSchemaResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "schema", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);
  /**
   * @generated from field: string schema = 1;
   */
  schema = "";

  constructor(data?: PartialMessage<GetModuleConfigSchemaResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetModuleConfigSchemaResponse {
    return new GetModuleConfigSchemaResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetModuleConfigSchemaResponse {
    return new GetModuleConfigSchemaResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetModuleConfigSchemaResponse {
    return new GetModuleConfigSchemaResponse().fromJsonString(
      jsonString,
      options
    );
  }

  static equals(
    a:
      | GetModuleConfigSchemaResponse
      | PlainMessage<GetModuleConfigSchemaResponse>
      | undefined,
    b:
      | GetModuleConfigSchemaResponse
      | PlainMessage<GetModuleConfigSchemaResponse>
      | undefined
  ): boolean {
    return proto3.util.equals(GetModuleConfigSchemaResponse, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.GetModuleConfigRequest
 */
export class GetModuleConfigRequest extends Message<GetModuleConfigRequest> {
  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.GetModuleConfigRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => []);

  constructor(data?: PartialMessage<GetModuleConfigRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetModuleConfigRequest {
    return new GetModuleConfigRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetModuleConfigRequest {
    return new GetModuleConfigRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetModuleConfigRequest {
    return new GetModuleConfigRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a:
      | GetModuleConfigRequest
      | PlainMessage<GetModuleConfigRequest>
      | undefined,
    b: GetModuleConfigRequest | PlainMessage<GetModuleConfigRequest> | undefined
  ): boolean {
    return proto3.util.equals(GetModuleConfigRequest, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.GetModuleConfigResponse
 */
export class GetModuleConfigResponse extends Message<GetModuleConfigResponse> {
  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.GetModuleConfigResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "config", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);
  /**
   * @generated from field: string config = 1;
   */
  config = "";

  constructor(data?: PartialMessage<GetModuleConfigResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetModuleConfigResponse {
    return new GetModuleConfigResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetModuleConfigResponse {
    return new GetModuleConfigResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetModuleConfigResponse {
    return new GetModuleConfigResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a:
      | GetModuleConfigResponse
      | PlainMessage<GetModuleConfigResponse>
      | undefined,
    b:
      | GetModuleConfigResponse
      | PlainMessage<GetModuleConfigResponse>
      | undefined
  ): boolean {
    return proto3.util.equals(GetModuleConfigResponse, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.WatchModuleConfigRequest
 */
export class WatchModuleConfigRequest extends Message<WatchModuleConfigRequest> {
  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.WatchModuleConfigRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => []);

  constructor(data?: PartialMessage<WatchModuleConfigRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): WatchModuleConfigRequest {
    return new WatchModuleConfigRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): WatchModuleConfigRequest {
    return new WatchModuleConfigRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): WatchModuleConfigRequest {
    return new WatchModuleConfigRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a:
      | WatchModuleConfigRequest
      | PlainMessage<WatchModuleConfigRequest>
      | undefined,
    b:
      | WatchModuleConfigRequest
      | PlainMessage<WatchModuleConfigRequest>
      | undefined
  ): boolean {
    return proto3.util.equals(WatchModuleConfigRequest, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.WatchModuleConfigResponse
 */
export class WatchModuleConfigResponse extends Message<WatchModuleConfigResponse> {
  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.WatchModuleConfigResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "config", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);
  /**
   * @generated from field: string config = 1;
   */
  config = "";

  constructor(data?: PartialMessage<WatchModuleConfigResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): WatchModuleConfigResponse {
    return new WatchModuleConfigResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): WatchModuleConfigResponse {
    return new WatchModuleConfigResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): WatchModuleConfigResponse {
    return new WatchModuleConfigResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a:
      | WatchModuleConfigResponse
      | PlainMessage<WatchModuleConfigResponse>
      | undefined,
    b:
      | WatchModuleConfigResponse
      | PlainMessage<WatchModuleConfigResponse>
      | undefined
  ): boolean {
    return proto3.util.equals(WatchModuleConfigResponse, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.SetModuleConfigRequest
 */
export class SetModuleConfigRequest extends Message<SetModuleConfigRequest> {
  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.SetModuleConfigRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "config", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);
  /**
   * @generated from field: string config = 1;
   */
  config = "";

  constructor(data?: PartialMessage<SetModuleConfigRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): SetModuleConfigRequest {
    return new SetModuleConfigRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): SetModuleConfigRequest {
    return new SetModuleConfigRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): SetModuleConfigRequest {
    return new SetModuleConfigRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a:
      | SetModuleConfigRequest
      | PlainMessage<SetModuleConfigRequest>
      | undefined,
    b: SetModuleConfigRequest | PlainMessage<SetModuleConfigRequest> | undefined
  ): boolean {
    return proto3.util.equals(SetModuleConfigRequest, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.SetModuleConfigResponse
 */
export class SetModuleConfigResponse extends Message<SetModuleConfigResponse> {
  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.SetModuleConfigResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "config", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);
  /**
   * @generated from field: string config = 1;
   */
  config = "";

  constructor(data?: PartialMessage<SetModuleConfigResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): SetModuleConfigResponse {
    return new SetModuleConfigResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): SetModuleConfigResponse {
    return new SetModuleConfigResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): SetModuleConfigResponse {
    return new SetModuleConfigResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a:
      | SetModuleConfigResponse
      | PlainMessage<SetModuleConfigResponse>
      | undefined,
    b:
      | SetModuleConfigResponse
      | PlainMessage<SetModuleConfigResponse>
      | undefined
  ): boolean {
    return proto3.util.equals(SetModuleConfigResponse, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.TrainOfflineRequest
 */
export class TrainOfflineRequest extends Message<TrainOfflineRequest> {
  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.TrainOfflineRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => []);

  constructor(data?: PartialMessage<TrainOfflineRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): TrainOfflineRequest {
    return new TrainOfflineRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): TrainOfflineRequest {
    return new TrainOfflineRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): TrainOfflineRequest {
    return new TrainOfflineRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: TrainOfflineRequest | PlainMessage<TrainOfflineRequest> | undefined,
    b: TrainOfflineRequest | PlainMessage<TrainOfflineRequest> | undefined
  ): boolean {
    return proto3.util.equals(TrainOfflineRequest, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.TrainOfflineResponse
 */
export class TrainOfflineResponse extends Message<TrainOfflineResponse> {
  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.TrainOfflineResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => []);

  constructor(data?: PartialMessage<TrainOfflineResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): TrainOfflineResponse {
    return new TrainOfflineResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): TrainOfflineResponse {
    return new TrainOfflineResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): TrainOfflineResponse {
    return new TrainOfflineResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a: TrainOfflineResponse | PlainMessage<TrainOfflineResponse> | undefined,
    b: TrainOfflineResponse | PlainMessage<TrainOfflineResponse> | undefined
  ): boolean {
    return proto3.util.equals(TrainOfflineResponse, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.TrainOnlineRequest
 */
export class TrainOnlineRequest extends Message<TrainOnlineRequest> {
  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.TrainOnlineRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => []);

  constructor(data?: PartialMessage<TrainOnlineRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): TrainOnlineRequest {
    return new TrainOnlineRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): TrainOnlineRequest {
    return new TrainOnlineRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): TrainOnlineRequest {
    return new TrainOnlineRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: TrainOnlineRequest | PlainMessage<TrainOnlineRequest> | undefined,
    b: TrainOnlineRequest | PlainMessage<TrainOnlineRequest> | undefined
  ): boolean {
    return proto3.util.equals(TrainOnlineRequest, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.TrainOnlineResponse
 */
export class TrainOnlineResponse extends Message<TrainOnlineResponse> {
  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.TrainOnlineResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => []);

  constructor(data?: PartialMessage<TrainOnlineResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): TrainOnlineResponse {
    return new TrainOnlineResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): TrainOnlineResponse {
    return new TrainOnlineResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): TrainOnlineResponse {
    return new TrainOnlineResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a: TrainOnlineResponse | PlainMessage<TrainOnlineResponse> | undefined,
    b: TrainOnlineResponse | PlainMessage<TrainOnlineResponse> | undefined
  ): boolean {
    return proto3.util.equals(TrainOnlineResponse, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.StopTrainingRequest
 */
export class StopTrainingRequest extends Message<StopTrainingRequest> {
  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.StopTrainingRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => []);

  constructor(data?: PartialMessage<StopTrainingRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): StopTrainingRequest {
    return new StopTrainingRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): StopTrainingRequest {
    return new StopTrainingRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): StopTrainingRequest {
    return new StopTrainingRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: StopTrainingRequest | PlainMessage<StopTrainingRequest> | undefined,
    b: StopTrainingRequest | PlainMessage<StopTrainingRequest> | undefined
  ): boolean {
    return proto3.util.equals(StopTrainingRequest, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.StopTrainingResponse
 */
export class StopTrainingResponse extends Message<StopTrainingResponse> {
  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.StopTrainingResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => []);

  constructor(data?: PartialMessage<StopTrainingResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): StopTrainingResponse {
    return new StopTrainingResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): StopTrainingResponse {
    return new StopTrainingResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): StopTrainingResponse {
    return new StopTrainingResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a: StopTrainingResponse | PlainMessage<StopTrainingResponse> | undefined,
    b: StopTrainingResponse | PlainMessage<StopTrainingResponse> | undefined
  ): boolean {
    return proto3.util.equals(StopTrainingResponse, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.MetricConfig
 */
export class MetricConfig extends Message<MetricConfig> {
  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.MetricConfig";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "group", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "config", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);
  /**
   * @generated from field: string id = 1;
   */
  id = "";
  /**
   * @generated from field: string label = 2;
   */
  label = "";
  /**
   * @generated from field: string group = 3;
   */
  group = "";
  /**
   * @generated from field: string config = 4;
   */
  config = "";

  constructor(data?: PartialMessage<MetricConfig>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): MetricConfig {
    return new MetricConfig().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): MetricConfig {
    return new MetricConfig().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): MetricConfig {
    return new MetricConfig().fromJsonString(jsonString, options);
  }

  static equals(
    a: MetricConfig | PlainMessage<MetricConfig> | undefined,
    b: MetricConfig | PlainMessage<MetricConfig> | undefined
  ): boolean {
    return proto3.util.equals(MetricConfig, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.GetModuleMetricsConfigRequest
 */
export class GetModuleMetricsConfigRequest extends Message<GetModuleMetricsConfigRequest> {
  static readonly runtime = proto3;
  static readonly typeName =
    "kilroy.cilroy.v1alpha.GetModuleMetricsConfigRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => []);

  constructor(data?: PartialMessage<GetModuleMetricsConfigRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetModuleMetricsConfigRequest {
    return new GetModuleMetricsConfigRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetModuleMetricsConfigRequest {
    return new GetModuleMetricsConfigRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetModuleMetricsConfigRequest {
    return new GetModuleMetricsConfigRequest().fromJsonString(
      jsonString,
      options
    );
  }

  static equals(
    a:
      | GetModuleMetricsConfigRequest
      | PlainMessage<GetModuleMetricsConfigRequest>
      | undefined,
    b:
      | GetModuleMetricsConfigRequest
      | PlainMessage<GetModuleMetricsConfigRequest>
      | undefined
  ): boolean {
    return proto3.util.equals(GetModuleMetricsConfigRequest, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.GetModuleMetricsConfigResponse
 */
export class GetModuleMetricsConfigResponse extends Message<GetModuleMetricsConfigResponse> {
  static readonly runtime = proto3;
  static readonly typeName =
    "kilroy.cilroy.v1alpha.GetModuleMetricsConfigResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    {
      no: 1,
      name: "configs",
      kind: "message",
      T: MetricConfig,
      repeated: true,
    },
  ]);
  /**
   * @generated from field: repeated kilroy.cilroy.v1alpha.MetricConfig configs = 1;
   */
  configs: MetricConfig[] = [];

  constructor(data?: PartialMessage<GetModuleMetricsConfigResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetModuleMetricsConfigResponse {
    return new GetModuleMetricsConfigResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetModuleMetricsConfigResponse {
    return new GetModuleMetricsConfigResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetModuleMetricsConfigResponse {
    return new GetModuleMetricsConfigResponse().fromJsonString(
      jsonString,
      options
    );
  }

  static equals(
    a:
      | GetModuleMetricsConfigResponse
      | PlainMessage<GetModuleMetricsConfigResponse>
      | undefined,
    b:
      | GetModuleMetricsConfigResponse
      | PlainMessage<GetModuleMetricsConfigResponse>
      | undefined
  ): boolean {
    return proto3.util.equals(GetModuleMetricsConfigResponse, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.MetricData
 */
export class MetricData extends Message<MetricData> {
  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.MetricData";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "metric_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "dataset_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "data", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);
  /**
   * @generated from field: string metric_id = 1;
   */
  metricId = "";
  /**
   * @generated from field: uint64 dataset_id = 2;
   */
  datasetId = protoInt64.zero;
  /**
   * @generated from field: string data = 3;
   */
  data = "";

  constructor(data?: PartialMessage<MetricData>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): MetricData {
    return new MetricData().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): MetricData {
    return new MetricData().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): MetricData {
    return new MetricData().fromJsonString(jsonString, options);
  }

  static equals(
    a: MetricData | PlainMessage<MetricData> | undefined,
    b: MetricData | PlainMessage<MetricData> | undefined
  ): boolean {
    return proto3.util.equals(MetricData, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.GetModuleMetricsRequest
 */
export class GetModuleMetricsRequest extends Message<GetModuleMetricsRequest> {
  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.GetModuleMetricsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => []);

  constructor(data?: PartialMessage<GetModuleMetricsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetModuleMetricsRequest {
    return new GetModuleMetricsRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetModuleMetricsRequest {
    return new GetModuleMetricsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetModuleMetricsRequest {
    return new GetModuleMetricsRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a:
      | GetModuleMetricsRequest
      | PlainMessage<GetModuleMetricsRequest>
      | undefined,
    b:
      | GetModuleMetricsRequest
      | PlainMessage<GetModuleMetricsRequest>
      | undefined
  ): boolean {
    return proto3.util.equals(GetModuleMetricsRequest, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.GetModuleMetricsResponse
 */
export class GetModuleMetricsResponse extends Message<GetModuleMetricsResponse> {
  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.GetModuleMetricsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "metrics", kind: "message", T: MetricData, repeated: true },
  ]);
  /**
   * @generated from field: repeated kilroy.cilroy.v1alpha.MetricData metrics = 1;
   */
  metrics: MetricData[] = [];

  constructor(data?: PartialMessage<GetModuleMetricsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetModuleMetricsResponse {
    return new GetModuleMetricsResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetModuleMetricsResponse {
    return new GetModuleMetricsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetModuleMetricsResponse {
    return new GetModuleMetricsResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a:
      | GetModuleMetricsResponse
      | PlainMessage<GetModuleMetricsResponse>
      | undefined,
    b:
      | GetModuleMetricsResponse
      | PlainMessage<GetModuleMetricsResponse>
      | undefined
  ): boolean {
    return proto3.util.equals(GetModuleMetricsResponse, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.WatchModuleMetricsRequest
 */
export class WatchModuleMetricsRequest extends Message<WatchModuleMetricsRequest> {
  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.WatchModuleMetricsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => []);

  constructor(data?: PartialMessage<WatchModuleMetricsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): WatchModuleMetricsRequest {
    return new WatchModuleMetricsRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): WatchModuleMetricsRequest {
    return new WatchModuleMetricsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): WatchModuleMetricsRequest {
    return new WatchModuleMetricsRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a:
      | WatchModuleMetricsRequest
      | PlainMessage<WatchModuleMetricsRequest>
      | undefined,
    b:
      | WatchModuleMetricsRequest
      | PlainMessage<WatchModuleMetricsRequest>
      | undefined
  ): boolean {
    return proto3.util.equals(WatchModuleMetricsRequest, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.WatchModuleMetricsResponse
 */
export class WatchModuleMetricsResponse extends Message<WatchModuleMetricsResponse> {
  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.WatchModuleMetricsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "metric", kind: "message", T: MetricData },
  ]);
  /**
   * @generated from field: kilroy.cilroy.v1alpha.MetricData metric = 1;
   */
  metric?: MetricData;

  constructor(data?: PartialMessage<WatchModuleMetricsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): WatchModuleMetricsResponse {
    return new WatchModuleMetricsResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): WatchModuleMetricsResponse {
    return new WatchModuleMetricsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): WatchModuleMetricsResponse {
    return new WatchModuleMetricsResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a:
      | WatchModuleMetricsResponse
      | PlainMessage<WatchModuleMetricsResponse>
      | undefined,
    b:
      | WatchModuleMetricsResponse
      | PlainMessage<WatchModuleMetricsResponse>
      | undefined
  ): boolean {
    return proto3.util.equals(WatchModuleMetricsResponse, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.WatchAllRequest
 */
export class WatchAllRequest extends Message<WatchAllRequest> {
  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.WatchAllRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => []);

  constructor(data?: PartialMessage<WatchAllRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): WatchAllRequest {
    return new WatchAllRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): WatchAllRequest {
    return new WatchAllRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): WatchAllRequest {
    return new WatchAllRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: WatchAllRequest | PlainMessage<WatchAllRequest> | undefined,
    b: WatchAllRequest | PlainMessage<WatchAllRequest> | undefined
  ): boolean {
    return proto3.util.equals(WatchAllRequest, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.WatchAllResponse
 */
export class WatchAllResponse extends Message<WatchAllResponse> {
  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.WatchAllResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "method", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);
  /**
   * @generated from field: string method = 1;
   */
  method = "";
  /**
   * @generated from field: string message = 2;
   */
  message = "";

  constructor(data?: PartialMessage<WatchAllResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): WatchAllResponse {
    return new WatchAllResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): WatchAllResponse {
    return new WatchAllResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): WatchAllResponse {
    return new WatchAllResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a: WatchAllResponse | PlainMessage<WatchAllResponse> | undefined,
    b: WatchAllResponse | PlainMessage<WatchAllResponse> | undefined
  ): boolean {
    return proto3.util.equals(WatchAllResponse, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.ResetControllerRequest
 */
export class ResetControllerRequest extends Message<ResetControllerRequest> {
  constructor(data?: PartialMessage<ResetControllerRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.ResetControllerRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => []);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): ResetControllerRequest {
    return new ResetControllerRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): ResetControllerRequest {
    return new ResetControllerRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): ResetControllerRequest {
    return new ResetControllerRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a:
      | ResetControllerRequest
      | PlainMessage<ResetControllerRequest>
      | undefined,
    b: ResetControllerRequest | PlainMessage<ResetControllerRequest> | undefined
  ): boolean {
    return proto3.util.equals(ResetControllerRequest, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.ResetControllerResponse
 */
export class ResetControllerResponse extends Message<ResetControllerResponse> {
  constructor(data?: PartialMessage<ResetControllerResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.ResetControllerResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => []);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): ResetControllerResponse {
    return new ResetControllerResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): ResetControllerResponse {
    return new ResetControllerResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): ResetControllerResponse {
    return new ResetControllerResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a:
      | ResetControllerResponse
      | PlainMessage<ResetControllerResponse>
      | undefined,
    b:
      | ResetControllerResponse
      | PlainMessage<ResetControllerResponse>
      | undefined
  ): boolean {
    return proto3.util.equals(ResetControllerResponse, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.ResetFaceRequest
 */
export class ResetFaceRequest extends Message<ResetFaceRequest> {
  constructor(data?: PartialMessage<ResetFaceRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.ResetFaceRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => []);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): ResetFaceRequest {
    return new ResetFaceRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): ResetFaceRequest {
    return new ResetFaceRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): ResetFaceRequest {
    return new ResetFaceRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: ResetFaceRequest | PlainMessage<ResetFaceRequest> | undefined,
    b: ResetFaceRequest | PlainMessage<ResetFaceRequest> | undefined
  ): boolean {
    return proto3.util.equals(ResetFaceRequest, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.ResetFaceResponse
 */
export class ResetFaceResponse extends Message<ResetFaceResponse> {
  constructor(data?: PartialMessage<ResetFaceResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.ResetFaceResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => []);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): ResetFaceResponse {
    return new ResetFaceResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): ResetFaceResponse {
    return new ResetFaceResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): ResetFaceResponse {
    return new ResetFaceResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a: ResetFaceResponse | PlainMessage<ResetFaceResponse> | undefined,
    b: ResetFaceResponse | PlainMessage<ResetFaceResponse> | undefined
  ): boolean {
    return proto3.util.equals(ResetFaceResponse, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.ResetModuleRequest
 */
export class ResetModuleRequest extends Message<ResetModuleRequest> {
  constructor(data?: PartialMessage<ResetModuleRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.ResetModuleRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => []);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): ResetModuleRequest {
    return new ResetModuleRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): ResetModuleRequest {
    return new ResetModuleRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): ResetModuleRequest {
    return new ResetModuleRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: ResetModuleRequest | PlainMessage<ResetModuleRequest> | undefined,
    b: ResetModuleRequest | PlainMessage<ResetModuleRequest> | undefined
  ): boolean {
    return proto3.util.equals(ResetModuleRequest, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.ResetModuleResponse
 */
export class ResetModuleResponse extends Message<ResetModuleResponse> {
  constructor(data?: PartialMessage<ResetModuleResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.ResetModuleResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => []);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): ResetModuleResponse {
    return new ResetModuleResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): ResetModuleResponse {
    return new ResetModuleResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): ResetModuleResponse {
    return new ResetModuleResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a: ResetModuleResponse | PlainMessage<ResetModuleResponse> | undefined,
    b: ResetModuleResponse | PlainMessage<ResetModuleResponse> | undefined
  ): boolean {
    return proto3.util.equals(ResetModuleResponse, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.Post
 */
export class Post extends Message<Post> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: string url = 2;
   */
  url = "";

  /**
   * @generated from field: string content = 3;
   */
  content = "";

  /**
   * @generated from field: string created_at = 4;
   */
  createdAt = "";

  constructor(data?: PartialMessage<Post>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.Post";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "content", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "created_at", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): Post {
    return new Post().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): Post {
    return new Post().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): Post {
    return new Post().fromJsonString(jsonString, options);
  }

  static equals(
    a: Post | PlainMessage<Post> | undefined,
    b: Post | PlainMessage<Post> | undefined
  ): boolean {
    return proto3.util.equals(Post, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.GetFeedRequest
 */
export class GetFeedRequest extends Message<GetFeedRequest> {
  constructor(data?: PartialMessage<GetFeedRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.GetFeedRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => []);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetFeedRequest {
    return new GetFeedRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetFeedRequest {
    return new GetFeedRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetFeedRequest {
    return new GetFeedRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: GetFeedRequest | PlainMessage<GetFeedRequest> | undefined,
    b: GetFeedRequest | PlainMessage<GetFeedRequest> | undefined
  ): boolean {
    return proto3.util.equals(GetFeedRequest, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.GetFeedResponse
 */
export class GetFeedResponse extends Message<GetFeedResponse> {
  /**
   * @generated from field: repeated kilroy.cilroy.v1alpha.Post posts = 1;
   */
  posts: Post[] = [];

  constructor(data?: PartialMessage<GetFeedResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.GetFeedResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "posts", kind: "message", T: Post, repeated: true },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetFeedResponse {
    return new GetFeedResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetFeedResponse {
    return new GetFeedResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetFeedResponse {
    return new GetFeedResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a: GetFeedResponse | PlainMessage<GetFeedResponse> | undefined,
    b: GetFeedResponse | PlainMessage<GetFeedResponse> | undefined
  ): boolean {
    return proto3.util.equals(GetFeedResponse, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.WatchFeedRequest
 */
export class WatchFeedRequest extends Message<WatchFeedRequest> {
  constructor(data?: PartialMessage<WatchFeedRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.WatchFeedRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => []);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): WatchFeedRequest {
    return new WatchFeedRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): WatchFeedRequest {
    return new WatchFeedRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): WatchFeedRequest {
    return new WatchFeedRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: WatchFeedRequest | PlainMessage<WatchFeedRequest> | undefined,
    b: WatchFeedRequest | PlainMessage<WatchFeedRequest> | undefined
  ): boolean {
    return proto3.util.equals(WatchFeedRequest, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.WatchFeedResponse
 */
export class WatchFeedResponse extends Message<WatchFeedResponse> {
  /**
   * @generated from field: kilroy.cilroy.v1alpha.Post post = 1;
   */
  post?: Post;

  constructor(data?: PartialMessage<WatchFeedResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.WatchFeedResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "post", kind: "message", T: Post },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): WatchFeedResponse {
    return new WatchFeedResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): WatchFeedResponse {
    return new WatchFeedResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): WatchFeedResponse {
    return new WatchFeedResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a: WatchFeedResponse | PlainMessage<WatchFeedResponse> | undefined,
    b: WatchFeedResponse | PlainMessage<WatchFeedResponse> | undefined
  ): boolean {
    return proto3.util.equals(WatchFeedResponse, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.GeneratePostsRequest
 */
export class GeneratePostsRequest extends Message<GeneratePostsRequest> {
  /**
   * @generated from field: uint64 quantity = 1;
   */
  quantity = protoInt64.zero;

  constructor(data?: PartialMessage<GeneratePostsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.GeneratePostsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "quantity", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GeneratePostsRequest {
    return new GeneratePostsRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GeneratePostsRequest {
    return new GeneratePostsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GeneratePostsRequest {
    return new GeneratePostsRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: GeneratePostsRequest | PlainMessage<GeneratePostsRequest> | undefined,
    b: GeneratePostsRequest | PlainMessage<GeneratePostsRequest> | undefined
  ): boolean {
    return proto3.util.equals(GeneratePostsRequest, a, b);
  }
}

/**
 * @generated from message kilroy.cilroy.v1alpha.GeneratePostsResponse
 */
export class GeneratePostsResponse extends Message<GeneratePostsResponse> {
  /**
   * @generated from field: string content = 1;
   */
  content = "";

  constructor(data?: PartialMessage<GeneratePostsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "kilroy.cilroy.v1alpha.GeneratePostsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "content", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GeneratePostsResponse {
    return new GeneratePostsResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GeneratePostsResponse {
    return new GeneratePostsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GeneratePostsResponse {
    return new GeneratePostsResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a: GeneratePostsResponse | PlainMessage<GeneratePostsResponse> | undefined,
    b: GeneratePostsResponse | PlainMessage<GeneratePostsResponse> | undefined
  ): boolean {
    return proto3.util.equals(GeneratePostsResponse, a, b);
  }
}
