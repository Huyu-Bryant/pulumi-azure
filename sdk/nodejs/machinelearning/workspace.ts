// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages a Azure Machine Learning Workspace
 *
 * ## Example Usage
 *
 *
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const current = azure.core.getClientConfig({});
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleInsights = new azure.appinsights.Insights("exampleInsights", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     applicationType: "web",
 * });
 * const exampleKeyVault = new azure.keyvault.KeyVault("exampleKeyVault", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     tenantId: current.then(current => current.tenantId),
 *     skuName: "premium",
 * });
 * const exampleAccount = new azure.storage.Account("exampleAccount", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     accountTier: "Standard",
 *     accountReplicationType: "GRS",
 * });
 * const exampleWorkspace = new azure.machinelearning.Workspace("exampleWorkspace", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     applicationInsightsId: exampleInsights.id,
 *     keyVaultId: exampleKeyVault.id,
 *     storageAccountId: exampleAccount.id,
 *     identity: {
 *         type: "SystemAssigned",
 *     },
 * });
 * ```
 */
export class Workspace extends pulumi.CustomResource {
    /**
     * Get an existing Workspace resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WorkspaceState, opts?: pulumi.CustomResourceOptions): Workspace {
        return new Workspace(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:machinelearning/workspace:Workspace';

    /**
     * Returns true if the given object is an instance of Workspace.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Workspace {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Workspace.__pulumiType;
    }

    /**
     * The ID of the Application Insights associated with this Machine Learning Workspace. Changing this forces a new resource to be created.
     */
    public readonly applicationInsightsId!: pulumi.Output<string>;
    /**
     * The ID of the container registry associated with this Machine Learning Workspace. Changing this forces a new resource to be created.
     */
    public readonly containerRegistryId!: pulumi.Output<string | undefined>;
    /**
     * The description of this Machine Learning Workspace.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Friendly name for this Machine Learning Workspace.
     */
    public readonly friendlyName!: pulumi.Output<string | undefined>;
    /**
     * An `identity` block defined below.
     */
    public readonly identity!: pulumi.Output<outputs.machinelearning.WorkspaceIdentity>;
    /**
     * The ID of key vault associated with this Machine Learning Workspace. Changing this forces a new resource to be created.
     */
    public readonly keyVaultId!: pulumi.Output<string>;
    /**
     * Specifies the supported Azure location where the Machine Learning Workspace should exist. Changing this forces a new resource to be created.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Specifies the name of the Machine Learning Workspace. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Specifies the name of the Resource Group in which the Machine Learning Workspace should exist. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * SKU/edition of the Machine Learning Workspace, possible values are `Basic` for a basic workspace or `Enterprise` for a feature rich workspace. Defaults to `Basic`.
     */
    public readonly skuName!: pulumi.Output<string | undefined>;
    /**
     * The ID of the Storage Account associated with this Machine Learning Workspace. Changing this forces a new resource to be created.
     */
    public readonly storageAccountId!: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource. Changing this forces a new resource to be created.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;

    /**
     * Create a Workspace resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkspaceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WorkspaceArgs | WorkspaceState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as WorkspaceState | undefined;
            inputs["applicationInsightsId"] = state ? state.applicationInsightsId : undefined;
            inputs["containerRegistryId"] = state ? state.containerRegistryId : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["friendlyName"] = state ? state.friendlyName : undefined;
            inputs["identity"] = state ? state.identity : undefined;
            inputs["keyVaultId"] = state ? state.keyVaultId : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["skuName"] = state ? state.skuName : undefined;
            inputs["storageAccountId"] = state ? state.storageAccountId : undefined;
            inputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as WorkspaceArgs | undefined;
            if (!args || args.applicationInsightsId === undefined) {
                throw new Error("Missing required property 'applicationInsightsId'");
            }
            if (!args || args.identity === undefined) {
                throw new Error("Missing required property 'identity'");
            }
            if (!args || args.keyVaultId === undefined) {
                throw new Error("Missing required property 'keyVaultId'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.storageAccountId === undefined) {
                throw new Error("Missing required property 'storageAccountId'");
            }
            inputs["applicationInsightsId"] = args ? args.applicationInsightsId : undefined;
            inputs["containerRegistryId"] = args ? args.containerRegistryId : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["friendlyName"] = args ? args.friendlyName : undefined;
            inputs["identity"] = args ? args.identity : undefined;
            inputs["keyVaultId"] = args ? args.keyVaultId : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["skuName"] = args ? args.skuName : undefined;
            inputs["storageAccountId"] = args ? args.storageAccountId : undefined;
            inputs["tags"] = args ? args.tags : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(Workspace.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Workspace resources.
 */
export interface WorkspaceState {
    /**
     * The ID of the Application Insights associated with this Machine Learning Workspace. Changing this forces a new resource to be created.
     */
    readonly applicationInsightsId?: pulumi.Input<string>;
    /**
     * The ID of the container registry associated with this Machine Learning Workspace. Changing this forces a new resource to be created.
     */
    readonly containerRegistryId?: pulumi.Input<string>;
    /**
     * The description of this Machine Learning Workspace.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Friendly name for this Machine Learning Workspace.
     */
    readonly friendlyName?: pulumi.Input<string>;
    /**
     * An `identity` block defined below.
     */
    readonly identity?: pulumi.Input<inputs.machinelearning.WorkspaceIdentity>;
    /**
     * The ID of key vault associated with this Machine Learning Workspace. Changing this forces a new resource to be created.
     */
    readonly keyVaultId?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the Machine Learning Workspace should exist. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Machine Learning Workspace. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Specifies the name of the Resource Group in which the Machine Learning Workspace should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * SKU/edition of the Machine Learning Workspace, possible values are `Basic` for a basic workspace or `Enterprise` for a feature rich workspace. Defaults to `Basic`.
     */
    readonly skuName?: pulumi.Input<string>;
    /**
     * The ID of the Storage Account associated with this Machine Learning Workspace. Changing this forces a new resource to be created.
     */
    readonly storageAccountId?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource. Changing this forces a new resource to be created.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The set of arguments for constructing a Workspace resource.
 */
export interface WorkspaceArgs {
    /**
     * The ID of the Application Insights associated with this Machine Learning Workspace. Changing this forces a new resource to be created.
     */
    readonly applicationInsightsId: pulumi.Input<string>;
    /**
     * The ID of the container registry associated with this Machine Learning Workspace. Changing this forces a new resource to be created.
     */
    readonly containerRegistryId?: pulumi.Input<string>;
    /**
     * The description of this Machine Learning Workspace.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Friendly name for this Machine Learning Workspace.
     */
    readonly friendlyName?: pulumi.Input<string>;
    /**
     * An `identity` block defined below.
     */
    readonly identity: pulumi.Input<inputs.machinelearning.WorkspaceIdentity>;
    /**
     * The ID of key vault associated with this Machine Learning Workspace. Changing this forces a new resource to be created.
     */
    readonly keyVaultId: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the Machine Learning Workspace should exist. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Machine Learning Workspace. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Specifies the name of the Resource Group in which the Machine Learning Workspace should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * SKU/edition of the Machine Learning Workspace, possible values are `Basic` for a basic workspace or `Enterprise` for a feature rich workspace. Defaults to `Basic`.
     */
    readonly skuName?: pulumi.Input<string>;
    /**
     * The ID of the Storage Account associated with this Machine Learning Workspace. Changing this forces a new resource to be created.
     */
    readonly storageAccountId: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource. Changing this forces a new resource to be created.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
