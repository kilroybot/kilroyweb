import {
  GeneratePostsRequest,
  GeneratePostsResponse,
  GetControllerConfigRequest,
  GetControllerConfigResponse,
  GetControllerConfigSchemaRequest,
  GetControllerConfigSchemaResponse,
  GetControllerStatusRequest,
  GetControllerStatusResponse,
  GetFaceConfigRequest,
  GetFaceConfigResponse,
  GetFaceConfigSchemaRequest,
  GetFaceConfigSchemaResponse,
  GetFaceMetadataRequest,
  GetFaceMetadataResponse,
  GetFacePostSchemaRequest,
  GetFacePostSchemaResponse,
  GetFaceStatusRequest,
  GetFaceStatusResponse,
  GetFeedRequest,
  GetFeedResponse,
  GetModuleConfigRequest,
  GetModuleConfigResponse,
  GetModuleConfigSchemaRequest,
  GetModuleConfigSchemaResponse,
  GetModuleMetadataRequest,
  GetModuleMetadataResponse,
  GetModuleMetricsConfigRequest,
  GetModuleMetricsConfigResponse,
  GetModuleMetricsRequest,
  GetModuleMetricsResponse,
  GetModulePostSchemaRequest,
  GetModulePostSchemaResponse,
  GetModuleStatusRequest,
  GetModuleStatusResponse,
  GetTrainingStatusRequest,
  GetTrainingStatusResponse,
  ResetControllerRequest,
  ResetControllerResponse,
  ResetFaceRequest,
  ResetFaceResponse,
  ResetModuleRequest,
  ResetModuleResponse,
  SetControllerConfigRequest,
  SetControllerConfigResponse,
  SetFaceConfigRequest,
  SetFaceConfigResponse,
  SetModuleConfigRequest,
  SetModuleConfigResponse,
  StopTrainingRequest,
  StopTrainingResponse,
  TrainOfflineRequest,
  TrainOfflineResponse,
  TrainOnlineRequest,
  TrainOnlineResponse,
  WatchAllRequest,
  WatchAllResponse,
  WatchControllerConfigRequest,
  WatchControllerConfigResponse,
  WatchControllerStatusRequest,
  WatchControllerStatusResponse,
  WatchFaceConfigRequest,
  WatchFaceConfigResponse,
  WatchFaceStatusRequest,
  WatchFaceStatusResponse,
  WatchFeedRequest,
  WatchFeedResponse,
  WatchModuleConfigRequest,
  WatchModuleConfigResponse,
  WatchModuleMetricsRequest,
  WatchModuleMetricsResponse,
  WatchModuleStatusRequest,
  WatchModuleStatusResponse,
  WatchTrainingStatusRequest,
  WatchTrainingStatusResponse,
} from "./protobuf";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service kilroy.cilroy.v1alpha.CilroyService
 */
export const CilroyService = {
  typeName: "kilroy.cilroy.v1alpha.CilroyService",
  methods: {
    /**
     * @generated from rpc kilroy.cilroy.v1alpha.CilroyService.GetFaceMetadata
     */
    getFaceMetadata: {
      name: "GetFaceMetadata",
      I: GetFaceMetadataRequest,
      O: GetFaceMetadataResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc kilroy.cilroy.v1alpha.CilroyService.GetModuleMetadata
     */
    getModuleMetadata: {
      name: "GetModuleMetadata",
      I: GetModuleMetadataRequest,
      O: GetModuleMetadataResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc kilroy.cilroy.v1alpha.CilroyService.GetFacePostSchema
     */
    getFacePostSchema: {
      name: "GetFacePostSchema",
      I: GetFacePostSchemaRequest,
      O: GetFacePostSchemaResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc kilroy.cilroy.v1alpha.CilroyService.GetModulePostSchema
     */
    getModulePostSchema: {
      name: "GetModulePostSchema",
      I: GetModulePostSchemaRequest,
      O: GetModulePostSchemaResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc kilroy.cilroy.v1alpha.CilroyService.GetControllerStatus
     */
    getControllerStatus: {
      name: "GetControllerStatus",
      I: GetControllerStatusRequest,
      O: GetControllerStatusResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc kilroy.cilroy.v1alpha.CilroyService.WatchControllerStatus
     */
    watchControllerStatus: {
      name: "WatchControllerStatus",
      I: WatchControllerStatusRequest,
      O: WatchControllerStatusResponse,
      kind: MethodKind.ServerStreaming,
    },
    /**
     * @generated from rpc kilroy.cilroy.v1alpha.CilroyService.GetFaceStatus
     */
    getFaceStatus: {
      name: "GetFaceStatus",
      I: GetFaceStatusRequest,
      O: GetFaceStatusResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc kilroy.cilroy.v1alpha.CilroyService.WatchFaceStatus
     */
    watchFaceStatus: {
      name: "WatchFaceStatus",
      I: WatchFaceStatusRequest,
      O: WatchFaceStatusResponse,
      kind: MethodKind.ServerStreaming,
    },
    /**
     * @generated from rpc kilroy.cilroy.v1alpha.CilroyService.GetModuleStatus
     */
    getModuleStatus: {
      name: "GetModuleStatus",
      I: GetModuleStatusRequest,
      O: GetModuleStatusResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc kilroy.cilroy.v1alpha.CilroyService.WatchModuleStatus
     */
    watchModuleStatus: {
      name: "WatchModuleStatus",
      I: WatchModuleStatusRequest,
      O: WatchModuleStatusResponse,
      kind: MethodKind.ServerStreaming,
    },
    /**
     * @generated from rpc kilroy.cilroy.v1alpha.CilroyService.GetTrainingStatus
     */
    getTrainingStatus: {
      name: "GetTrainingStatus",
      I: GetTrainingStatusRequest,
      O: GetTrainingStatusResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc kilroy.cilroy.v1alpha.CilroyService.WatchTrainingStatus
     */
    watchTrainingStatus: {
      name: "WatchTrainingStatus",
      I: WatchTrainingStatusRequest,
      O: WatchTrainingStatusResponse,
      kind: MethodKind.ServerStreaming,
    },
    /**
     * @generated from rpc kilroy.cilroy.v1alpha.CilroyService.GetControllerConfigSchema
     */
    getControllerConfigSchema: {
      name: "GetControllerConfigSchema",
      I: GetControllerConfigSchemaRequest,
      O: GetControllerConfigSchemaResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc kilroy.cilroy.v1alpha.CilroyService.GetControllerConfig
     */
    getControllerConfig: {
      name: "GetControllerConfig",
      I: GetControllerConfigRequest,
      O: GetControllerConfigResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc kilroy.cilroy.v1alpha.CilroyService.WatchControllerConfig
     */
    watchControllerConfig: {
      name: "WatchControllerConfig",
      I: WatchControllerConfigRequest,
      O: WatchControllerConfigResponse,
      kind: MethodKind.ServerStreaming,
    },
    /**
     * @generated from rpc kilroy.cilroy.v1alpha.CilroyService.SetControllerConfig
     */
    setControllerConfig: {
      name: "SetControllerConfig",
      I: SetControllerConfigRequest,
      O: SetControllerConfigResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc kilroy.cilroy.v1alpha.CilroyService.GetFaceConfigSchema
     */
    getFaceConfigSchema: {
      name: "GetFaceConfigSchema",
      I: GetFaceConfigSchemaRequest,
      O: GetFaceConfigSchemaResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc kilroy.cilroy.v1alpha.CilroyService.GetFaceConfig
     */
    getFaceConfig: {
      name: "GetFaceConfig",
      I: GetFaceConfigRequest,
      O: GetFaceConfigResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc kilroy.cilroy.v1alpha.CilroyService.WatchFaceConfig
     */
    watchFaceConfig: {
      name: "WatchFaceConfig",
      I: WatchFaceConfigRequest,
      O: WatchFaceConfigResponse,
      kind: MethodKind.ServerStreaming,
    },
    /**
     * @generated from rpc kilroy.cilroy.v1alpha.CilroyService.SetFaceConfig
     */
    setFaceConfig: {
      name: "SetFaceConfig",
      I: SetFaceConfigRequest,
      O: SetFaceConfigResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc kilroy.cilroy.v1alpha.CilroyService.GetModuleConfigSchema
     */
    getModuleConfigSchema: {
      name: "GetModuleConfigSchema",
      I: GetModuleConfigSchemaRequest,
      O: GetModuleConfigSchemaResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc kilroy.cilroy.v1alpha.CilroyService.GetModuleConfig
     */
    getModuleConfig: {
      name: "GetModuleConfig",
      I: GetModuleConfigRequest,
      O: GetModuleConfigResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc kilroy.cilroy.v1alpha.CilroyService.WatchModuleConfig
     */
    watchModuleConfig: {
      name: "WatchModuleConfig",
      I: WatchModuleConfigRequest,
      O: WatchModuleConfigResponse,
      kind: MethodKind.ServerStreaming,
    },
    /**
     * @generated from rpc kilroy.cilroy.v1alpha.CilroyService.SetModuleConfig
     */
    setModuleConfig: {
      name: "SetModuleConfig",
      I: SetModuleConfigRequest,
      O: SetModuleConfigResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc kilroy.cilroy.v1alpha.CilroyService.TrainOffline
     */
    trainOffline: {
      name: "TrainOffline",
      I: TrainOfflineRequest,
      O: TrainOfflineResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc kilroy.cilroy.v1alpha.CilroyService.TrainOnline
     */
    trainOnline: {
      name: "TrainOnline",
      I: TrainOnlineRequest,
      O: TrainOnlineResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc kilroy.cilroy.v1alpha.CilroyService.StopTraining
     */
    stopTraining: {
      name: "StopTraining",
      I: StopTrainingRequest,
      O: StopTrainingResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc kilroy.cilroy.v1alpha.CilroyService.GetModuleMetricsConfig
     */
    getModuleMetricsConfig: {
      name: "GetModuleMetricsConfig",
      I: GetModuleMetricsConfigRequest,
      O: GetModuleMetricsConfigResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc kilroy.cilroy.v1alpha.CilroyService.GetModuleMetrics
     */
    getModuleMetrics: {
      name: "GetModuleMetrics",
      I: GetModuleMetricsRequest,
      O: GetModuleMetricsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc kilroy.cilroy.v1alpha.CilroyService.WatchModuleMetrics
     */
    watchModuleMetrics: {
      name: "WatchModuleMetrics",
      I: WatchModuleMetricsRequest,
      O: WatchModuleMetricsResponse,
      kind: MethodKind.ServerStreaming,
    },
    /**
     * @generated from rpc kilroy.cilroy.v1alpha.CilroyService.WatchAll
     */
    watchAll: {
      name: "WatchAll",
      I: WatchAllRequest,
      O: WatchAllResponse,
      kind: MethodKind.ServerStreaming,
    },
    /**
     * @generated from rpc kilroy.cilroy.v1alpha.CilroyService.ResetController
     */
    resetController: {
      name: "ResetController",
      I: ResetControllerRequest,
      O: ResetControllerResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc kilroy.cilroy.v1alpha.CilroyService.ResetFace
     */
    resetFace: {
      name: "ResetFace",
      I: ResetFaceRequest,
      O: ResetFaceResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc kilroy.cilroy.v1alpha.CilroyService.ResetModule
     */
    resetModule: {
      name: "ResetModule",
      I: ResetModuleRequest,
      O: ResetModuleResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc kilroy.cilroy.v1alpha.CilroyService.GetFeed
     */
    getFeed: {
      name: "GetFeed",
      I: GetFeedRequest,
      O: GetFeedResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc kilroy.cilroy.v1alpha.CilroyService.WatchFeed
     */
    watchFeed: {
      name: "WatchFeed",
      I: WatchFeedRequest,
      O: WatchFeedResponse,
      kind: MethodKind.ServerStreaming,
    },
    /**
     * @generated from rpc kilroy.cilroy.v1alpha.CilroyService.GeneratePosts
     */
    generatePosts: {
      name: "GeneratePosts",
      I: GeneratePostsRequest,
      O: GeneratePostsResponse,
      kind: MethodKind.ServerStreaming,
    },
  },
} as const;
