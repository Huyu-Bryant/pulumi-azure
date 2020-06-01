// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Use this data source to access information about an existing Sentinel Alert Rule.
 *
 * ## Example Usage
 *
 *
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleAnalyticsWorkspace = azure.operationalinsights.getAnalyticsWorkspace({
 *     name: "example",
 *     resourceGroupName: "example-resources",
 * });
 * const exampleAlertRule = exampleAnalyticsWorkspace.then(exampleAnalyticsWorkspace => azure.sentinel.getAlertRule({
 *     name: "existing",
 *     logAnalyticsWorkspaceId: exampleAnalyticsWorkspace.id,
 * }));
 * export const id = exampleAlertRule.then(exampleAlertRule => exampleAlertRule.id);
 * ```
 */
export function getAlertRule(args: GetAlertRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetAlertRuleResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure:sentinel/getAlertRule:getAlertRule", {
        "logAnalyticsWorkspaceId": args.logAnalyticsWorkspaceId,
        "name": args.name,
    }, opts);
}

/**
 * A collection of arguments for invoking getAlertRule.
 */
export interface GetAlertRuleArgs {
    /**
     * The ID of the Log Analytics Workspace this Sentinel Alert Rule belongs to.
     */
    readonly logAnalyticsWorkspaceId: string;
    /**
     * The name which should be used for this Sentinel Alert Rule.
     */
    readonly name: string;
}

/**
 * A collection of values returned by getAlertRule.
 */
export interface GetAlertRuleResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly logAnalyticsWorkspaceId: string;
    readonly name: string;
}
