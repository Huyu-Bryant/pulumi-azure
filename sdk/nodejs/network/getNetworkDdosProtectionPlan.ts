// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Use this data source to access information about an existing Azure Network DDoS Protection Plan.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const example = pulumi.all([azurerm_network_ddos_protection_plan_example.name, azurerm_network_ddos_protection_plan_example.resourceGroupName]).apply(([name, resourceGroupName]) => azure.network.getNetworkDdosProtectionPlan({
 *     name: name,
 *     resourceGroupName: resourceGroupName,
 * }));
 * 
 * export const ddosProtectionPlanId = example.id;
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/network_ddos_protection_plan.html.markdown.
 */
export function getNetworkDdosProtectionPlan(args: GetNetworkDdosProtectionPlanArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkDdosProtectionPlanResult> & GetNetworkDdosProtectionPlanResult {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    const promise: Promise<GetNetworkDdosProtectionPlanResult> = pulumi.runtime.invoke("azure:network/getNetworkDdosProtectionPlan:getNetworkDdosProtectionPlan", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "tags": args.tags,
    }, opts);

    return pulumi.utils.liftProperties(promise, opts);
}

/**
 * A collection of arguments for invoking getNetworkDdosProtectionPlan.
 */
export interface GetNetworkDdosProtectionPlanArgs {
    /**
     * The name of the Network DDoS Protection Plan.
     */
    readonly name: string;
    /**
     * The name of the resource group where the Network DDoS Protection Plan exists.
     */
    readonly resourceGroupName: string;
    readonly tags?: {[key: string]: string};
}

/**
 * A collection of values returned by getNetworkDdosProtectionPlan.
 */
export interface GetNetworkDdosProtectionPlanResult {
    /**
     * Specifies the supported Azure location where the resource exists.
     */
    readonly location: string;
    readonly name: string;
    readonly resourceGroupName: string;
    /**
     * A mapping of tags assigned to the resource.
     */
    readonly tags: {[key: string]: string};
    /**
     * The Resource ID list of the Virtual Networks associated with DDoS Protection Plan.
     */
    readonly virtualNetworkIds: string[];
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}