// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Use this data source to access information about an existing Automation Account.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const example = azure.automation.getAccount({
 *     name: "example-account",
 *     resourceGroupName: "example-resources",
 * });
 * 
 * export const automationAccountId = example.id;
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/automation_account.html.markdown.
 */
export function getAccount(args: GetAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetAccountResult> & GetAccountResult {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    const promise: Promise<GetAccountResult> = pulumi.runtime.invoke("azure:automation/getAccount:getAccount", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);

    return pulumi.utils.liftProperties(promise, opts);
}

/**
 * A collection of arguments for invoking getAccount.
 */
export interface GetAccountArgs {
    /**
     * The name of the Automation Account.
     */
    readonly name: string;
    /**
     * Specifies the name of the Resource Group where the Automation Account exists.
     */
    readonly resourceGroupName: string;
}

/**
 * A collection of values returned by getAccount.
 */
export interface GetAccountResult {
    /**
     * The Endpoint for this Auomation Account.
     */
    readonly endpoint: string;
    readonly name: string;
    /**
     * The Primary Access Key for the Automation Account.
     */
    readonly primaryKey: string;
    readonly resourceGroupName: string;
    /**
     * The Secondary Access Key for the Automation Account.
     */
    readonly secondaryKey: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
