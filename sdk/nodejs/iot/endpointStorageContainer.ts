// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages an IotHub Storage Container Endpoint
 * 
 * > **NOTE:** Endpoints can be defined either directly on the `azure.iot.IoTHub` resource, or using the `azurerm_iothub_endpoint_*` resources - but the two ways of defining the endpoints cannot be used together. If both are used against the same IoTHub, spurious changes will occur. Also, defining a `azurerm_iothub_endpoint_*` resource and another endpoint of a different type directly on the `azure.iot.IoTHub` resource is not supported.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const exampleResourceGroup = new azure.core.ResourceGroup("example", {
 *     location: "West US",
 * });
 * const exampleAccount = new azure.storage.Account("example", {
 *     accountReplicationType: "LRS",
 *     accountTier: "Standard",
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * const exampleContainer = new azure.storage.Container("example", {
 *     containerAccessType: "private",
 *     resourceGroupName: exampleResourceGroup.name,
 *     storageAccountName: exampleAccount.name,
 * });
 * const exampleIoTHub = new azure.iot.IoTHub("example", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: {
 *         capacity: 1,
 *         name: "S1",
 *     },
 * });
 * const exampleEndpointStorageContainer = new azure.iot.EndpointStorageContainer("example", {
 *     batchFrequencyInSeconds: 60,
 *     connectionString: exampleAccount.primaryBlobConnectionString,
 *     containerName: "acctestcont",
 *     encoding: "JSON",
 *     fileNameFormat: "{iothub}/{partition}_{YYYY}_{MM}_{DD}_{HH}_{mm}",
 *     iothubName: exampleIoTHub.name,
 *     maxChunkSizeInBytes: 10485760,
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/iothub_endpoint_storage_container.html.markdown.
 */
export class EndpointStorageContainer extends pulumi.CustomResource {
    /**
     * Get an existing EndpointStorageContainer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EndpointStorageContainerState, opts?: pulumi.CustomResourceOptions): EndpointStorageContainer {
        return new EndpointStorageContainer(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:iot/endpointStorageContainer:EndpointStorageContainer';

    /**
     * Returns true if the given object is an instance of EndpointStorageContainer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EndpointStorageContainer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EndpointStorageContainer.__pulumiType;
    }

    /**
     * Time interval at which blobs are written to storage. Value should be between 60 and 720 seconds. Default value is 300 seconds.
     */
    public readonly batchFrequencyInSeconds!: pulumi.Output<number | undefined>;
    /**
     * The connection string for the endpoint.
     */
    public readonly connectionString!: pulumi.Output<string>;
    /**
     * The name of storage container in the storage account.
     * *
     */
    public readonly containerName!: pulumi.Output<string>;
    /**
     * Encoding that is used to serialize messages to blobs. Supported values are 'avro' and 'avrodeflate'. Default value is 'avro'.
     */
    public readonly encoding!: pulumi.Output<string | undefined>;
    /**
     * File name format for the blob. Default format is ``{iothub}/{partition}/{YYYY}/{MM}/{DD}/{HH}/{mm}``. All parameters are mandatory but can be reordered.
     */
    public readonly fileNameFormat!: pulumi.Output<string | undefined>;
    /**
     * The name of the IoTHub to which this Storage Container Endpoint belongs. Changing this forces a new resource to be created.
     */
    public readonly iothubName!: pulumi.Output<string>;
    /**
     * Maximum number of bytes for each blob written to storage. Value should be between 10485760(10MB) and 524288000(500MB). Default value is 314572800(300MB).
     */
    public readonly maxChunkSizeInBytes!: pulumi.Output<number | undefined>;
    /**
     * The name of the endpoint. The name must be unique across endpoint types. The following names are reserved:  `events`, `operationsMonitoringEvents`, `fileNotifications` and `$default`.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The name of the resource group under which the IotHub Storage Container Endpoint resource has to be created. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;

    /**
     * Create a EndpointStorageContainer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EndpointStorageContainerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EndpointStorageContainerArgs | EndpointStorageContainerState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as EndpointStorageContainerState | undefined;
            inputs["batchFrequencyInSeconds"] = state ? state.batchFrequencyInSeconds : undefined;
            inputs["connectionString"] = state ? state.connectionString : undefined;
            inputs["containerName"] = state ? state.containerName : undefined;
            inputs["encoding"] = state ? state.encoding : undefined;
            inputs["fileNameFormat"] = state ? state.fileNameFormat : undefined;
            inputs["iothubName"] = state ? state.iothubName : undefined;
            inputs["maxChunkSizeInBytes"] = state ? state.maxChunkSizeInBytes : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
        } else {
            const args = argsOrState as EndpointStorageContainerArgs | undefined;
            if (!args || args.connectionString === undefined) {
                throw new Error("Missing required property 'connectionString'");
            }
            if (!args || args.containerName === undefined) {
                throw new Error("Missing required property 'containerName'");
            }
            if (!args || args.iothubName === undefined) {
                throw new Error("Missing required property 'iothubName'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["batchFrequencyInSeconds"] = args ? args.batchFrequencyInSeconds : undefined;
            inputs["connectionString"] = args ? args.connectionString : undefined;
            inputs["containerName"] = args ? args.containerName : undefined;
            inputs["encoding"] = args ? args.encoding : undefined;
            inputs["fileNameFormat"] = args ? args.fileNameFormat : undefined;
            inputs["iothubName"] = args ? args.iothubName : undefined;
            inputs["maxChunkSizeInBytes"] = args ? args.maxChunkSizeInBytes : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(EndpointStorageContainer.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering EndpointStorageContainer resources.
 */
export interface EndpointStorageContainerState {
    /**
     * Time interval at which blobs are written to storage. Value should be between 60 and 720 seconds. Default value is 300 seconds.
     */
    readonly batchFrequencyInSeconds?: pulumi.Input<number>;
    /**
     * The connection string for the endpoint.
     */
    readonly connectionString?: pulumi.Input<string>;
    /**
     * The name of storage container in the storage account.
     * *
     */
    readonly containerName?: pulumi.Input<string>;
    /**
     * Encoding that is used to serialize messages to blobs. Supported values are 'avro' and 'avrodeflate'. Default value is 'avro'.
     */
    readonly encoding?: pulumi.Input<string>;
    /**
     * File name format for the blob. Default format is ``{iothub}/{partition}/{YYYY}/{MM}/{DD}/{HH}/{mm}``. All parameters are mandatory but can be reordered.
     */
    readonly fileNameFormat?: pulumi.Input<string>;
    /**
     * The name of the IoTHub to which this Storage Container Endpoint belongs. Changing this forces a new resource to be created.
     */
    readonly iothubName?: pulumi.Input<string>;
    /**
     * Maximum number of bytes for each blob written to storage. Value should be between 10485760(10MB) and 524288000(500MB). Default value is 314572800(300MB).
     */
    readonly maxChunkSizeInBytes?: pulumi.Input<number>;
    /**
     * The name of the endpoint. The name must be unique across endpoint types. The following names are reserved:  `events`, `operationsMonitoringEvents`, `fileNotifications` and `$default`.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the resource group under which the IotHub Storage Container Endpoint resource has to be created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a EndpointStorageContainer resource.
 */
export interface EndpointStorageContainerArgs {
    /**
     * Time interval at which blobs are written to storage. Value should be between 60 and 720 seconds. Default value is 300 seconds.
     */
    readonly batchFrequencyInSeconds?: pulumi.Input<number>;
    /**
     * The connection string for the endpoint.
     */
    readonly connectionString: pulumi.Input<string>;
    /**
     * The name of storage container in the storage account.
     * *
     */
    readonly containerName: pulumi.Input<string>;
    /**
     * Encoding that is used to serialize messages to blobs. Supported values are 'avro' and 'avrodeflate'. Default value is 'avro'.
     */
    readonly encoding?: pulumi.Input<string>;
    /**
     * File name format for the blob. Default format is ``{iothub}/{partition}/{YYYY}/{MM}/{DD}/{HH}/{mm}``. All parameters are mandatory but can be reordered.
     */
    readonly fileNameFormat?: pulumi.Input<string>;
    /**
     * The name of the IoTHub to which this Storage Container Endpoint belongs. Changing this forces a new resource to be created.
     */
    readonly iothubName: pulumi.Input<string>;
    /**
     * Maximum number of bytes for each blob written to storage. Value should be between 10485760(10MB) and 524288000(500MB). Default value is 314572800(300MB).
     */
    readonly maxChunkSizeInBytes?: pulumi.Input<number>;
    /**
     * The name of the endpoint. The name must be unique across endpoint types. The following names are reserved:  `events`, `operationsMonitoringEvents`, `fileNotifications` and `$default`.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the resource group under which the IotHub Storage Container Endpoint resource has to be created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}