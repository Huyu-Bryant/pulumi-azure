// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Promotes an App Service Slot to Production within an App Service.
 *
 * > **Note:** When using Slots - the `appSettings`, `connectionString` and `siteConfig` blocks on the `azure.appservice.AppService` resource will be overwritten when promoting a Slot using the `azure.appservice.ActiveSlot` resource.
 *
 * ## Example Usage
 *
 *
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * import * as random from "@pulumi/random";
 *
 * const server = new random.RandomId("server", {});
 * // ...
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {});
 * // ...
 * const examplePlan = new azure.appservice.Plan("examplePlan", {});
 * // ...
 * const exampleAppService = new azure.appservice.AppService("exampleAppService", {});
 * // ...
 * const exampleSlot = new azure.appservice.Slot("exampleSlot", {});
 * // ...
 * const exampleActiveSlot = new azure.appservice.ActiveSlot("exampleActiveSlot", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     appServiceName: exampleAppService.name,
 *     appServiceSlotName: exampleSlot.name,
 * });
 * ```
 */
export class ActiveSlot extends pulumi.CustomResource {
    /**
     * Get an existing ActiveSlot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ActiveSlotState, opts?: pulumi.CustomResourceOptions): ActiveSlot {
        return new ActiveSlot(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:appservice/activeSlot:ActiveSlot';

    /**
     * Returns true if the given object is an instance of ActiveSlot.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ActiveSlot {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ActiveSlot.__pulumiType;
    }

    /**
     * The name of the App Service within which the Slot exists.  Changing this forces a new resource to be created.
     */
    public readonly appServiceName!: pulumi.Output<string>;
    /**
     * The name of the App Service Slot which should be promoted to the Production Slot within the App Service.
     */
    public readonly appServiceSlotName!: pulumi.Output<string>;
    /**
     * The name of the resource group in which the App Service exists. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;

    /**
     * Create a ActiveSlot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ActiveSlotArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ActiveSlotArgs | ActiveSlotState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ActiveSlotState | undefined;
            inputs["appServiceName"] = state ? state.appServiceName : undefined;
            inputs["appServiceSlotName"] = state ? state.appServiceSlotName : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
        } else {
            const args = argsOrState as ActiveSlotArgs | undefined;
            if (!args || args.appServiceName === undefined) {
                throw new Error("Missing required property 'appServiceName'");
            }
            if (!args || args.appServiceSlotName === undefined) {
                throw new Error("Missing required property 'appServiceSlotName'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["appServiceName"] = args ? args.appServiceName : undefined;
            inputs["appServiceSlotName"] = args ? args.appServiceSlotName : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(ActiveSlot.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ActiveSlot resources.
 */
export interface ActiveSlotState {
    /**
     * The name of the App Service within which the Slot exists.  Changing this forces a new resource to be created.
     */
    readonly appServiceName?: pulumi.Input<string>;
    /**
     * The name of the App Service Slot which should be promoted to the Production Slot within the App Service.
     */
    readonly appServiceSlotName?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the App Service exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ActiveSlot resource.
 */
export interface ActiveSlotArgs {
    /**
     * The name of the App Service within which the Slot exists.  Changing this forces a new resource to be created.
     */
    readonly appServiceName: pulumi.Input<string>;
    /**
     * The name of the App Service Slot which should be promoted to the Production Slot within the App Service.
     */
    readonly appServiceSlotName: pulumi.Input<string>;
    /**
     * The name of the resource group in which the App Service exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
