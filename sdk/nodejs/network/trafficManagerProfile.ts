// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages a Traffic Manager Profile to which multiple endpoints can be attached.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * import * as random from "@pulumi/random";
 *
 * const server = new random.RandomId("server", {
 *     keepers: {
 *         azi_id: 1,
 *     },
 *     byteLength: 8,
 * });
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West US"});
 * const exampleTrafficManagerProfile = new azure.network.TrafficManagerProfile("exampleTrafficManagerProfile", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     trafficRoutingMethod: "Weighted",
 *     dnsConfig: {
 *         relativeName: server.hex,
 *         ttl: 100,
 *     },
 *     monitorConfig: {
 *         protocol: "http",
 *         port: 80,
 *         path: "/",
 *         intervalInSeconds: 30,
 *         timeoutInSeconds: 9,
 *         toleratedNumberOfFailures: 3,
 *     },
 *     tags: {
 *         environment: "Production",
 *     },
 * });
 * ```
 */
export class TrafficManagerProfile extends pulumi.CustomResource {
    /**
     * Get an existing TrafficManagerProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TrafficManagerProfileState, opts?: pulumi.CustomResourceOptions): TrafficManagerProfile {
        return new TrafficManagerProfile(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:network/trafficManagerProfile:TrafficManagerProfile';

    /**
     * Returns true if the given object is an instance of TrafficManagerProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TrafficManagerProfile {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TrafficManagerProfile.__pulumiType;
    }

    /**
     * This block specifies the DNS configuration of the Profile, it supports the fields documented below.
     */
    public readonly dnsConfig!: pulumi.Output<outputs.network.TrafficManagerProfileDnsConfig>;
    /**
     * The FQDN of the created Profile.
     */
    public /*out*/ readonly fqdn!: pulumi.Output<string>;
    /**
     * This block specifies the Endpoint monitoring configuration for the Profile, it supports the fields documented below.
     */
    public readonly monitorConfig!: pulumi.Output<outputs.network.TrafficManagerProfileMonitorConfig>;
    /**
     * The name of the Traffic Manager profile. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The status of the profile, can be set to either `Enabled` or `Disabled`. Defaults to `Enabled`.
     */
    public readonly profileStatus!: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the Traffic Manager profile.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Specifies the algorithm used to route traffic, possible values are:
     */
    public readonly trafficRoutingMethod!: pulumi.Output<string>;

    /**
     * Create a TrafficManagerProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TrafficManagerProfileArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TrafficManagerProfileArgs | TrafficManagerProfileState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as TrafficManagerProfileState | undefined;
            inputs["dnsConfig"] = state ? state.dnsConfig : undefined;
            inputs["fqdn"] = state ? state.fqdn : undefined;
            inputs["monitorConfig"] = state ? state.monitorConfig : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["profileStatus"] = state ? state.profileStatus : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["trafficRoutingMethod"] = state ? state.trafficRoutingMethod : undefined;
        } else {
            const args = argsOrState as TrafficManagerProfileArgs | undefined;
            if (!args || args.dnsConfig === undefined) {
                throw new Error("Missing required property 'dnsConfig'");
            }
            if (!args || args.monitorConfig === undefined) {
                throw new Error("Missing required property 'monitorConfig'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.trafficRoutingMethod === undefined) {
                throw new Error("Missing required property 'trafficRoutingMethod'");
            }
            inputs["dnsConfig"] = args ? args.dnsConfig : undefined;
            inputs["monitorConfig"] = args ? args.monitorConfig : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["profileStatus"] = args ? args.profileStatus : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["trafficRoutingMethod"] = args ? args.trafficRoutingMethod : undefined;
            inputs["fqdn"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure:trafficmanager/profile:Profile" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(TrafficManagerProfile.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering TrafficManagerProfile resources.
 */
export interface TrafficManagerProfileState {
    /**
     * This block specifies the DNS configuration of the Profile, it supports the fields documented below.
     */
    readonly dnsConfig?: pulumi.Input<inputs.network.TrafficManagerProfileDnsConfig>;
    /**
     * The FQDN of the created Profile.
     */
    readonly fqdn?: pulumi.Input<string>;
    /**
     * This block specifies the Endpoint monitoring configuration for the Profile, it supports the fields documented below.
     */
    readonly monitorConfig?: pulumi.Input<inputs.network.TrafficManagerProfileMonitorConfig>;
    /**
     * The name of the Traffic Manager profile. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The status of the profile, can be set to either `Enabled` or `Disabled`. Defaults to `Enabled`.
     */
    readonly profileStatus?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Traffic Manager profile.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Specifies the algorithm used to route traffic, possible values are:
     */
    readonly trafficRoutingMethod?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a TrafficManagerProfile resource.
 */
export interface TrafficManagerProfileArgs {
    /**
     * This block specifies the DNS configuration of the Profile, it supports the fields documented below.
     */
    readonly dnsConfig: pulumi.Input<inputs.network.TrafficManagerProfileDnsConfig>;
    /**
     * This block specifies the Endpoint monitoring configuration for the Profile, it supports the fields documented below.
     */
    readonly monitorConfig: pulumi.Input<inputs.network.TrafficManagerProfileMonitorConfig>;
    /**
     * The name of the Traffic Manager profile. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The status of the profile, can be set to either `Enabled` or `Disabled`. Defaults to `Enabled`.
     */
    readonly profileStatus?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Traffic Manager profile.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Specifies the algorithm used to route traffic, possible values are:
     */
    readonly trafficRoutingMethod: pulumi.Input<string>;
}
