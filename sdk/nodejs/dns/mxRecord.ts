// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Enables you to manage DNS MX Records within Azure DNS.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const azurerm_resource_group_test = new azure.core.ResourceGroup("test", {
 *     location: "West US",
 *     name: "acceptanceTestResourceGroup1",
 * });
 * const azurerm_dns_zone_test = new azure.dns.Zone("test", {
 *     name: "mydomain.com",
 *     resourceGroupName: azurerm_resource_group_test.name,
 * });
 * const azurerm_dns_mx_record_test = new azure.dns.MxRecord("test", {
 *     name: "test",
 *     records: [
 *         {
 *             exchange: "mail1.contoso.com",
 *             preference: "10",
 *         },
 *         {
 *             exchange: "mail2.contoso.com",
 *             preference: "20",
 *         },
 *     ],
 *     resourceGroupName: azurerm_resource_group_test.name,
 *     tags: {
 *         Environment: "Production",
 *     },
 *     ttl: 300,
 *     zoneName: azurerm_dns_zone_test.name,
 * });
 * ```
 */
export class MxRecord extends pulumi.CustomResource {
    /**
     * Get an existing MxRecord resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MxRecordState, opts?: pulumi.CustomResourceOptions): MxRecord {
        return new MxRecord(name, <any>state, { ...opts, id: id });
    }

    /**
     * The name of the DNS MX Record.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * A list of values that make up the MX record. Each `record` block supports fields documented below.
     */
    public readonly records: pulumi.Output<{ exchange: string, preference: string }[]>;
    /**
     * Specifies the resource group where the resource exists. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags: pulumi.Output<{[key: string]: any}>;
    /**
     * The Time To Live (TTL) of the DNS record in seconds.
     */
    public readonly ttl: pulumi.Output<number>;
    /**
     * Specifies the DNS Zone where the resource exists. Changing this forces a new resource to be created.
     */
    public readonly zoneName: pulumi.Output<string>;

    /**
     * Create a MxRecord resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MxRecordArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MxRecordArgs | MxRecordState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: MxRecordState = argsOrState as MxRecordState | undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["records"] = state ? state.records : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["ttl"] = state ? state.ttl : undefined;
            inputs["zoneName"] = state ? state.zoneName : undefined;
        } else {
            const args = argsOrState as MxRecordArgs | undefined;
            if (!args || args.records === undefined) {
                throw new Error("Missing required property 'records'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.ttl === undefined) {
                throw new Error("Missing required property 'ttl'");
            }
            if (!args || args.zoneName === undefined) {
                throw new Error("Missing required property 'zoneName'");
            }
            inputs["name"] = args ? args.name : undefined;
            inputs["records"] = args ? args.records : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["ttl"] = args ? args.ttl : undefined;
            inputs["zoneName"] = args ? args.zoneName : undefined;
        }
        super("azure:dns/mxRecord:MxRecord", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering MxRecord resources.
 */
export interface MxRecordState {
    /**
     * The name of the DNS MX Record.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A list of values that make up the MX record. Each `record` block supports fields documented below.
     */
    readonly records?: pulumi.Input<pulumi.Input<{ exchange: pulumi.Input<string>, preference: pulumi.Input<string> }>[]>;
    /**
     * Specifies the resource group where the resource exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * The Time To Live (TTL) of the DNS record in seconds.
     */
    readonly ttl?: pulumi.Input<number>;
    /**
     * Specifies the DNS Zone where the resource exists. Changing this forces a new resource to be created.
     */
    readonly zoneName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a MxRecord resource.
 */
export interface MxRecordArgs {
    /**
     * The name of the DNS MX Record.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A list of values that make up the MX record. Each `record` block supports fields documented below.
     */
    readonly records: pulumi.Input<pulumi.Input<{ exchange: pulumi.Input<string>, preference: pulumi.Input<string> }>[]>;
    /**
     * Specifies the resource group where the resource exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * The Time To Live (TTL) of the DNS record in seconds.
     */
    readonly ttl: pulumi.Input<number>;
    /**
     * Specifies the DNS Zone where the resource exists. Changing this forces a new resource to be created.
     */
    readonly zoneName: pulumi.Input<string>;
}
