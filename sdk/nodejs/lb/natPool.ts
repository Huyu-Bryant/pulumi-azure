// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages a Load Balancer NAT pool.
 *
 * > **NOTE:** This resource cannot be used with with virtual machines, instead use the `azure.lb.NatRule` resource.
 *
 * > **NOTE** When using this resource, the Load Balancer needs to have a FrontEnd IP Configuration Attached
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West US"});
 * const examplePublicIp = new azure.network.PublicIp("examplePublicIp", {
 *     location: "West US",
 *     resourceGroupName: exampleResourceGroup.name,
 *     allocationMethod: "Static",
 * });
 * const exampleLoadBalancer = new azure.lb.LoadBalancer("exampleLoadBalancer", {
 *     location: "West US",
 *     resourceGroupName: exampleResourceGroup.name,
 *     frontendIpConfigurations: [{
 *         name: "PublicIPAddress",
 *         publicIpAddressId: examplePublicIp.id,
 *     }],
 * });
 * const exampleNatPool = new azure.lb.NatPool("exampleNatPool", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     loadbalancerId: exampleLoadBalancer.id,
 *     protocol: "Tcp",
 *     frontendPortStart: 80,
 *     frontendPortEnd: 81,
 *     backendPort: 8080,
 *     frontendIpConfigurationName: "PublicIPAddress",
 * });
 * ```
 */
export class NatPool extends pulumi.CustomResource {
    /**
     * Get an existing NatPool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NatPoolState, opts?: pulumi.CustomResourceOptions): NatPool {
        return new NatPool(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:lb/natPool:NatPool';

    /**
     * Returns true if the given object is an instance of NatPool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NatPool {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NatPool.__pulumiType;
    }

    /**
     * The port used for the internal endpoint. Possible values range between 1 and 65535, inclusive.
     */
    public readonly backendPort!: pulumi.Output<number>;
    public /*out*/ readonly frontendIpConfigurationId!: pulumi.Output<string>;
    /**
     * The name of the frontend IP configuration exposing this rule.
     */
    public readonly frontendIpConfigurationName!: pulumi.Output<string>;
    /**
     * The last port number in the range of external ports that will be used to provide Inbound Nat to NICs associated with this Load Balancer. Possible values range between 1 and 65534, inclusive.
     */
    public readonly frontendPortEnd!: pulumi.Output<number>;
    /**
     * The first port number in the range of external ports that will be used to provide Inbound Nat to NICs associated with this Load Balancer. Possible values range between 1 and 65534, inclusive.
     */
    public readonly frontendPortStart!: pulumi.Output<number>;
    /**
     * The ID of the Load Balancer in which to create the NAT pool.
     */
    public readonly loadbalancerId!: pulumi.Output<string>;
    /**
     * Specifies the name of the NAT pool.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The transport protocol for the external endpoint. Possible values are `Udp` or `Tcp`.
     */
    public readonly protocol!: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the resource.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;

    /**
     * Create a NatPool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NatPoolArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NatPoolArgs | NatPoolState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as NatPoolState | undefined;
            inputs["backendPort"] = state ? state.backendPort : undefined;
            inputs["frontendIpConfigurationId"] = state ? state.frontendIpConfigurationId : undefined;
            inputs["frontendIpConfigurationName"] = state ? state.frontendIpConfigurationName : undefined;
            inputs["frontendPortEnd"] = state ? state.frontendPortEnd : undefined;
            inputs["frontendPortStart"] = state ? state.frontendPortStart : undefined;
            inputs["loadbalancerId"] = state ? state.loadbalancerId : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["protocol"] = state ? state.protocol : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
        } else {
            const args = argsOrState as NatPoolArgs | undefined;
            if (!args || args.backendPort === undefined) {
                throw new Error("Missing required property 'backendPort'");
            }
            if (!args || args.frontendIpConfigurationName === undefined) {
                throw new Error("Missing required property 'frontendIpConfigurationName'");
            }
            if (!args || args.frontendPortEnd === undefined) {
                throw new Error("Missing required property 'frontendPortEnd'");
            }
            if (!args || args.frontendPortStart === undefined) {
                throw new Error("Missing required property 'frontendPortStart'");
            }
            if (!args || args.loadbalancerId === undefined) {
                throw new Error("Missing required property 'loadbalancerId'");
            }
            if (!args || args.protocol === undefined) {
                throw new Error("Missing required property 'protocol'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["backendPort"] = args ? args.backendPort : undefined;
            inputs["frontendIpConfigurationName"] = args ? args.frontendIpConfigurationName : undefined;
            inputs["frontendPortEnd"] = args ? args.frontendPortEnd : undefined;
            inputs["frontendPortStart"] = args ? args.frontendPortStart : undefined;
            inputs["loadbalancerId"] = args ? args.loadbalancerId : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["protocol"] = args ? args.protocol : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["frontendIpConfigurationId"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(NatPool.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering NatPool resources.
 */
export interface NatPoolState {
    /**
     * The port used for the internal endpoint. Possible values range between 1 and 65535, inclusive.
     */
    readonly backendPort?: pulumi.Input<number>;
    readonly frontendIpConfigurationId?: pulumi.Input<string>;
    /**
     * The name of the frontend IP configuration exposing this rule.
     */
    readonly frontendIpConfigurationName?: pulumi.Input<string>;
    /**
     * The last port number in the range of external ports that will be used to provide Inbound Nat to NICs associated with this Load Balancer. Possible values range between 1 and 65534, inclusive.
     */
    readonly frontendPortEnd?: pulumi.Input<number>;
    /**
     * The first port number in the range of external ports that will be used to provide Inbound Nat to NICs associated with this Load Balancer. Possible values range between 1 and 65534, inclusive.
     */
    readonly frontendPortStart?: pulumi.Input<number>;
    /**
     * The ID of the Load Balancer in which to create the NAT pool.
     */
    readonly loadbalancerId?: pulumi.Input<string>;
    /**
     * Specifies the name of the NAT pool.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The transport protocol for the external endpoint. Possible values are `Udp` or `Tcp`.
     */
    readonly protocol?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the resource.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a NatPool resource.
 */
export interface NatPoolArgs {
    /**
     * The port used for the internal endpoint. Possible values range between 1 and 65535, inclusive.
     */
    readonly backendPort: pulumi.Input<number>;
    /**
     * The name of the frontend IP configuration exposing this rule.
     */
    readonly frontendIpConfigurationName: pulumi.Input<string>;
    /**
     * The last port number in the range of external ports that will be used to provide Inbound Nat to NICs associated with this Load Balancer. Possible values range between 1 and 65534, inclusive.
     */
    readonly frontendPortEnd: pulumi.Input<number>;
    /**
     * The first port number in the range of external ports that will be used to provide Inbound Nat to NICs associated with this Load Balancer. Possible values range between 1 and 65534, inclusive.
     */
    readonly frontendPortStart: pulumi.Input<number>;
    /**
     * The ID of the Load Balancer in which to create the NAT pool.
     */
    readonly loadbalancerId: pulumi.Input<string>;
    /**
     * Specifies the name of the NAT pool.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The transport protocol for the external endpoint. Possible values are `Udp` or `Tcp`.
     */
    readonly protocol: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the resource.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
