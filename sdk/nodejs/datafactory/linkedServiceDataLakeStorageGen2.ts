// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages a Linked Service (connection) between Data Lake Storage Gen2 and Azure Data Factory.
 *
 * ## Example Usage
 *
 *
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "northeurope"});
 * const exampleFactory = new azure.datafactory.Factory("exampleFactory", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * const current = azure.core.getClientConfig({});
 * const exampleLinkedServiceDataLakeStorageGen2 = new azure.datafactory.LinkedServiceDataLakeStorageGen2("exampleLinkedServiceDataLakeStorageGen2", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     dataFactoryName: exampleFactory.name,
 *     servicePrincipalId: current.then(current => current.clientId),
 *     servicePrincipalKey: "exampleKey",
 *     tenant: "11111111-1111-1111-1111-111111111111",
 *     url: "https://datalakestoragegen2",
 * });
 * ```
 */
export class LinkedServiceDataLakeStorageGen2 extends pulumi.CustomResource {
    /**
     * Get an existing LinkedServiceDataLakeStorageGen2 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LinkedServiceDataLakeStorageGen2State, opts?: pulumi.CustomResourceOptions): LinkedServiceDataLakeStorageGen2 {
        return new LinkedServiceDataLakeStorageGen2(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:datafactory/linkedServiceDataLakeStorageGen2:LinkedServiceDataLakeStorageGen2';

    /**
     * Returns true if the given object is an instance of LinkedServiceDataLakeStorageGen2.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LinkedServiceDataLakeStorageGen2 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LinkedServiceDataLakeStorageGen2.__pulumiType;
    }

    /**
     * A map of additional properties to associate with the Data Factory Linked Service MySQL.
     */
    public readonly additionalProperties!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * List of tags that can be used for describing the Data Factory Linked Service MySQL.
     */
    public readonly annotations!: pulumi.Output<string[] | undefined>;
    /**
     * The Data Factory name in which to associate the Linked Service with. Changing this forces a new resource.
     */
    public readonly dataFactoryName!: pulumi.Output<string>;
    /**
     * The description for the Data Factory Linked Service MySQL.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The integration runtime reference to associate with the Data Factory Linked Service MySQL.
     */
    public readonly integrationRuntimeName!: pulumi.Output<string | undefined>;
    /**
     * Specifies the name of the Data Factory Linked Service MySQL. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * A map of parameters to associate with the Data Factory Linked Service MySQL.
     */
    public readonly parameters!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The name of the resource group in which to create the Data Factory Linked Service MySQL. Changing this forces a new resource
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * The service principal id in which to authenticate against the Azure Data Lake Storage Gen2 account.
     */
    public readonly servicePrincipalId!: pulumi.Output<string>;
    /**
     * The service principal key in which to authenticate against the Azure Data Lake Storage Gen2 account.
     */
    public readonly servicePrincipalKey!: pulumi.Output<string>;
    /**
     * The tenant id or name in which to authenticate against the Azure Data Lake Storage Gen2 account.
     */
    public readonly tenant!: pulumi.Output<string>;
    /**
     * The endpoint for the Azure Data Lake Storage Gen2 service.
     */
    public readonly url!: pulumi.Output<string>;

    /**
     * Create a LinkedServiceDataLakeStorageGen2 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LinkedServiceDataLakeStorageGen2Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LinkedServiceDataLakeStorageGen2Args | LinkedServiceDataLakeStorageGen2State, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as LinkedServiceDataLakeStorageGen2State | undefined;
            inputs["additionalProperties"] = state ? state.additionalProperties : undefined;
            inputs["annotations"] = state ? state.annotations : undefined;
            inputs["dataFactoryName"] = state ? state.dataFactoryName : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["integrationRuntimeName"] = state ? state.integrationRuntimeName : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["parameters"] = state ? state.parameters : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["servicePrincipalId"] = state ? state.servicePrincipalId : undefined;
            inputs["servicePrincipalKey"] = state ? state.servicePrincipalKey : undefined;
            inputs["tenant"] = state ? state.tenant : undefined;
            inputs["url"] = state ? state.url : undefined;
        } else {
            const args = argsOrState as LinkedServiceDataLakeStorageGen2Args | undefined;
            if (!args || args.dataFactoryName === undefined) {
                throw new Error("Missing required property 'dataFactoryName'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.servicePrincipalId === undefined) {
                throw new Error("Missing required property 'servicePrincipalId'");
            }
            if (!args || args.servicePrincipalKey === undefined) {
                throw new Error("Missing required property 'servicePrincipalKey'");
            }
            if (!args || args.tenant === undefined) {
                throw new Error("Missing required property 'tenant'");
            }
            if (!args || args.url === undefined) {
                throw new Error("Missing required property 'url'");
            }
            inputs["additionalProperties"] = args ? args.additionalProperties : undefined;
            inputs["annotations"] = args ? args.annotations : undefined;
            inputs["dataFactoryName"] = args ? args.dataFactoryName : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["integrationRuntimeName"] = args ? args.integrationRuntimeName : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["parameters"] = args ? args.parameters : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["servicePrincipalId"] = args ? args.servicePrincipalId : undefined;
            inputs["servicePrincipalKey"] = args ? args.servicePrincipalKey : undefined;
            inputs["tenant"] = args ? args.tenant : undefined;
            inputs["url"] = args ? args.url : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(LinkedServiceDataLakeStorageGen2.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering LinkedServiceDataLakeStorageGen2 resources.
 */
export interface LinkedServiceDataLakeStorageGen2State {
    /**
     * A map of additional properties to associate with the Data Factory Linked Service MySQL.
     */
    readonly additionalProperties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * List of tags that can be used for describing the Data Factory Linked Service MySQL.
     */
    readonly annotations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Data Factory name in which to associate the Linked Service with. Changing this forces a new resource.
     */
    readonly dataFactoryName?: pulumi.Input<string>;
    /**
     * The description for the Data Factory Linked Service MySQL.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The integration runtime reference to associate with the Data Factory Linked Service MySQL.
     */
    readonly integrationRuntimeName?: pulumi.Input<string>;
    /**
     * Specifies the name of the Data Factory Linked Service MySQL. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A map of parameters to associate with the Data Factory Linked Service MySQL.
     */
    readonly parameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the resource group in which to create the Data Factory Linked Service MySQL. Changing this forces a new resource
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * The service principal id in which to authenticate against the Azure Data Lake Storage Gen2 account.
     */
    readonly servicePrincipalId?: pulumi.Input<string>;
    /**
     * The service principal key in which to authenticate against the Azure Data Lake Storage Gen2 account.
     */
    readonly servicePrincipalKey?: pulumi.Input<string>;
    /**
     * The tenant id or name in which to authenticate against the Azure Data Lake Storage Gen2 account.
     */
    readonly tenant?: pulumi.Input<string>;
    /**
     * The endpoint for the Azure Data Lake Storage Gen2 service.
     */
    readonly url?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a LinkedServiceDataLakeStorageGen2 resource.
 */
export interface LinkedServiceDataLakeStorageGen2Args {
    /**
     * A map of additional properties to associate with the Data Factory Linked Service MySQL.
     */
    readonly additionalProperties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * List of tags that can be used for describing the Data Factory Linked Service MySQL.
     */
    readonly annotations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Data Factory name in which to associate the Linked Service with. Changing this forces a new resource.
     */
    readonly dataFactoryName: pulumi.Input<string>;
    /**
     * The description for the Data Factory Linked Service MySQL.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The integration runtime reference to associate with the Data Factory Linked Service MySQL.
     */
    readonly integrationRuntimeName?: pulumi.Input<string>;
    /**
     * Specifies the name of the Data Factory Linked Service MySQL. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A map of parameters to associate with the Data Factory Linked Service MySQL.
     */
    readonly parameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the resource group in which to create the Data Factory Linked Service MySQL. Changing this forces a new resource
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The service principal id in which to authenticate against the Azure Data Lake Storage Gen2 account.
     */
    readonly servicePrincipalId: pulumi.Input<string>;
    /**
     * The service principal key in which to authenticate against the Azure Data Lake Storage Gen2 account.
     */
    readonly servicePrincipalKey: pulumi.Input<string>;
    /**
     * The tenant id or name in which to authenticate against the Azure Data Lake Storage Gen2 account.
     */
    readonly tenant: pulumi.Input<string>;
    /**
     * The endpoint for the Azure Data Lake Storage Gen2 service.
     */
    readonly url: pulumi.Input<string>;
}
