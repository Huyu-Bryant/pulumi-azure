// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Create a failover group of databases on a collection of Azure SQL servers.
 *
 * ## Example Usage
 *
 *
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "uksouth"});
 * const primary = new azure.sql.SqlServer("primary", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     version: "12.0",
 *     administratorLogin: "sqladmin",
 *     administratorLoginPassword: `pa$$w0rd`,
 * });
 * const secondary = new azure.sql.SqlServer("secondary", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: "northeurope",
 *     version: "12.0",
 *     administratorLogin: "sqladmin",
 *     administratorLoginPassword: `pa$$w0rd`,
 * });
 * const db1 = new azure.sql.Database("db1", {
 *     resourceGroupName: primary.resourceGroupName,
 *     location: primary.location,
 *     serverName: primary.name,
 * });
 * const exampleFailoverGroup = new azure.sql.FailoverGroup("exampleFailoverGroup", {
 *     resourceGroupName: primary.resourceGroupName,
 *     serverName: primary.name,
 *     databases: [db1.id],
 *     partner_servers: [{
 *         id: secondary.id,
 *     }],
 *     read_write_endpoint_failover_policy: {
 *         mode: "Automatic",
 *         graceMinutes: 60,
 *     },
 * });
 * ```
 */
export class FailoverGroup extends pulumi.CustomResource {
    /**
     * Get an existing FailoverGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FailoverGroupState, opts?: pulumi.CustomResourceOptions): FailoverGroup {
        return new FailoverGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:sql/failoverGroup:FailoverGroup';

    /**
     * Returns true if the given object is an instance of FailoverGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FailoverGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FailoverGroup.__pulumiType;
    }

    /**
     * A list of database ids to add to the failover group
     */
    public readonly databases!: pulumi.Output<string[] | undefined>;
    /**
     * the location of the failover group.
     */
    public /*out*/ readonly location!: pulumi.Output<string>;
    /**
     * The name of the failover group. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * A list of secondary servers as documented below
     */
    public readonly partnerServers!: pulumi.Output<outputs.sql.FailoverGroupPartnerServer[]>;
    /**
     * A read/write policy as documented below
     */
    public readonly readWriteEndpointFailoverPolicy!: pulumi.Output<outputs.sql.FailoverGroupReadWriteEndpointFailoverPolicy>;
    /**
     * a read-only policy as documented below
     */
    public readonly readonlyEndpointFailoverPolicy!: pulumi.Output<outputs.sql.FailoverGroupReadonlyEndpointFailoverPolicy>;
    /**
     * The name of the resource group containing the SQL server
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * local replication role of the failover group instance.
     */
    public /*out*/ readonly role!: pulumi.Output<string>;
    /**
     * The name of the primary SQL server. Changing this forces a new resource to be created.
     */
    public readonly serverName!: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;

    /**
     * Create a FailoverGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FailoverGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FailoverGroupArgs | FailoverGroupState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as FailoverGroupState | undefined;
            inputs["databases"] = state ? state.databases : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["partnerServers"] = state ? state.partnerServers : undefined;
            inputs["readWriteEndpointFailoverPolicy"] = state ? state.readWriteEndpointFailoverPolicy : undefined;
            inputs["readonlyEndpointFailoverPolicy"] = state ? state.readonlyEndpointFailoverPolicy : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["role"] = state ? state.role : undefined;
            inputs["serverName"] = state ? state.serverName : undefined;
            inputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as FailoverGroupArgs | undefined;
            if (!args || args.partnerServers === undefined) {
                throw new Error("Missing required property 'partnerServers'");
            }
            if (!args || args.readWriteEndpointFailoverPolicy === undefined) {
                throw new Error("Missing required property 'readWriteEndpointFailoverPolicy'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.serverName === undefined) {
                throw new Error("Missing required property 'serverName'");
            }
            inputs["databases"] = args ? args.databases : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["partnerServers"] = args ? args.partnerServers : undefined;
            inputs["readWriteEndpointFailoverPolicy"] = args ? args.readWriteEndpointFailoverPolicy : undefined;
            inputs["readonlyEndpointFailoverPolicy"] = args ? args.readonlyEndpointFailoverPolicy : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["serverName"] = args ? args.serverName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["location"] = undefined /*out*/;
            inputs["role"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(FailoverGroup.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering FailoverGroup resources.
 */
export interface FailoverGroupState {
    /**
     * A list of database ids to add to the failover group
     */
    readonly databases?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * the location of the failover group.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the failover group. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A list of secondary servers as documented below
     */
    readonly partnerServers?: pulumi.Input<pulumi.Input<inputs.sql.FailoverGroupPartnerServer>[]>;
    /**
     * A read/write policy as documented below
     */
    readonly readWriteEndpointFailoverPolicy?: pulumi.Input<inputs.sql.FailoverGroupReadWriteEndpointFailoverPolicy>;
    /**
     * a read-only policy as documented below
     */
    readonly readonlyEndpointFailoverPolicy?: pulumi.Input<inputs.sql.FailoverGroupReadonlyEndpointFailoverPolicy>;
    /**
     * The name of the resource group containing the SQL server
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * local replication role of the failover group instance.
     */
    readonly role?: pulumi.Input<string>;
    /**
     * The name of the primary SQL server. Changing this forces a new resource to be created.
     */
    readonly serverName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The set of arguments for constructing a FailoverGroup resource.
 */
export interface FailoverGroupArgs {
    /**
     * A list of database ids to add to the failover group
     */
    readonly databases?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the failover group. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A list of secondary servers as documented below
     */
    readonly partnerServers: pulumi.Input<pulumi.Input<inputs.sql.FailoverGroupPartnerServer>[]>;
    /**
     * A read/write policy as documented below
     */
    readonly readWriteEndpointFailoverPolicy: pulumi.Input<inputs.sql.FailoverGroupReadWriteEndpointFailoverPolicy>;
    /**
     * a read-only policy as documented below
     */
    readonly readonlyEndpointFailoverPolicy?: pulumi.Input<inputs.sql.FailoverGroupReadonlyEndpointFailoverPolicy>;
    /**
     * The name of the resource group containing the SQL server
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the primary SQL server. Changing this forces a new resource to be created.
     */
    readonly serverName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
