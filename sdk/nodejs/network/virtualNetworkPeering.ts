// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages a virtual network peering which allows resources to access other
 * resources in the linked virtual network.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const test = new azure.core.ResourceGroup("test", {
 *     location: "West US",
 *     name: "peeredvnets-rg",
 * });
 * const test1VirtualNetwork = new azure.network.VirtualNetwork("test1", {
 *     addressSpaces: ["10.0.1.0/24"],
 *     location: "West US",
 *     name: "peternetwork1",
 *     resourceGroupName: test.name,
 * });
 * const test2VirtualNetwork = new azure.network.VirtualNetwork("test2", {
 *     addressSpaces: ["10.0.2.0/24"],
 *     location: "West US",
 *     name: "peternetwork2",
 *     resourceGroupName: test.name,
 * });
 * const test1VirtualNetworkPeering = new azure.network.VirtualNetworkPeering("test1", {
 *     name: "peer1to2",
 *     remoteVirtualNetworkId: test2VirtualNetwork.id,
 *     resourceGroupName: test.name,
 *     virtualNetworkName: test1VirtualNetwork.name,
 * });
 * const test2VirtualNetworkPeering = new azure.network.VirtualNetworkPeering("test2", {
 *     name: "peer2to1",
 *     remoteVirtualNetworkId: test1VirtualNetwork.id,
 *     resourceGroupName: test.name,
 *     virtualNetworkName: test2VirtualNetwork.name,
 * });
 * ```
 * 
 * ## Example Usage (Global virtual network peering)
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const config = new pulumi.Config();
 * const location = config.get("location") || [
 *     "uksouth",
 *     "southeastasia",
 * ];
 * const vnetAddressSpace = config.get("vnetAddressSpace") || [
 *     "10.0.0.0/16",
 *     "10.1.0.0/16",
 * ];
 * 
 * const vnetResourceGroup: azure.core.ResourceGroup[] = [];
 * for (let i = 0; i < location.length; i++) {
 *     vnetResourceGroup.push(new azure.core.ResourceGroup(`vnet-${i}`, {
 *         location: location[i],
 *         name: `rg-global-vnet-peering-${i}`,
 *     }));
 * }
 * const vnetVirtualNetwork: azure.network.VirtualNetwork[] = [];
 * for (let i = 0; i < location.length; i++) {
 *     vnetVirtualNetwork.push(new azure.network.VirtualNetwork(`vnet-${i}`, {
 *         addressSpaces: [vnetAddressSpace[i]],
 *         location: pulumi.all(vnetResourceGroup.map(v => v.location)).apply(location => location.map(v => v)[i]),
 *         name: `vnet-${i}`,
 *         resourceGroupName: pulumi.all(vnetResourceGroup.map(v => v.name)).apply(name => name.map(v => v)[i]),
 *     }));
 * }
 * const nva: azure.network.Subnet[] = [];
 * for (let i = 0; i < location.length; i++) {
 *     nva.push(new azure.network.Subnet(`nva-${i}`, {
 *         addressPrefix: pulumi.all(vnetVirtualNetwork.map(v => v.addressSpaces)).apply(addressSpaces => (() => {
 *             throw "tf2pulumi error: NYI: call to cidrsubnet";
 *             return (() => { throw "NYI: call to cidrsubnet"; })();
 *         })()),
 *         name: "nva",
 *         resourceGroupName: pulumi.all(vnetResourceGroup.map(v => v.name)).apply(name => name.map(v => v)[i]),
 *         virtualNetworkName: pulumi.all(vnetVirtualNetwork.map(v => v.name)).apply(name => name.map(v => v)[i]),
 *     }));
 * }
 * // enable global peering between the two virtual network 
 * const peering: azure.network.VirtualNetworkPeering[] = [];
 * for (let i = 0; i < location.length; i++) {
 *     peering.push(new azure.network.VirtualNetworkPeering(`peering-${i}`, {
 *         allowForwardedTraffic: true,
 *         // `allow_gateway_transit` must be set to false for vnet Global Peering
 *         allowGatewayTransit: false,
 *         allowVirtualNetworkAccess: true,
 *         name: pulumi.all(vnetVirtualNetwork.map(v => v.name)).apply(name => `peering-to-${name.map(v => v)[(1 - i)]}`),
 *         remoteVirtualNetworkId: pulumi.all(vnetVirtualNetwork.map(v => v.id)).apply(id => id.map(v => v)[(1 - i)]),
 *         resourceGroupName: pulumi.all(vnetResourceGroup.map(v => v.name)).apply(name => name.map(v => v)[i]),
 *         virtualNetworkName: pulumi.all(vnetVirtualNetwork.map(v => v.name)).apply(name => name.map(v => v)[i]),
 *     }));
 * }
 * ```
 * 
 * ## Note
 * 
 * Virtual Network peerings cannot be created, updated or deleted concurrently.
 */
export class VirtualNetworkPeering extends pulumi.CustomResource {
    /**
     * Get an existing VirtualNetworkPeering resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VirtualNetworkPeeringState, opts?: pulumi.CustomResourceOptions): VirtualNetworkPeering {
        return new VirtualNetworkPeering(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:network/virtualNetworkPeering:VirtualNetworkPeering';

    /**
     * Returns true if the given object is an instance of VirtualNetworkPeering.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VirtualNetworkPeering {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VirtualNetworkPeering.__pulumiType;
    }

    /**
     * Controls if forwarded traffic from  VMs
     * in the remote virtual network is allowed. Defaults to false.
     */
    public readonly allowForwardedTraffic!: pulumi.Output<boolean>;
    /**
     * Controls gatewayLinks can be used in the
     * remote virtual network’s link to the local virtual network.
     */
    public readonly allowGatewayTransit!: pulumi.Output<boolean>;
    /**
     * Controls if the VMs in the remote
     * virtual network can access VMs in the local virtual network. Defaults to
     * false.
     */
    public readonly allowVirtualNetworkAccess!: pulumi.Output<boolean>;
    /**
     * The name of the virtual network peering. Changing this
     * forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The full Azure resource ID of the
     * remote virtual network.  Changing this forces a new resource to be created.
     */
    public readonly remoteVirtualNetworkId!: pulumi.Output<string>;
    /**
     * The name of the resource group in which to
     * create the virtual network. Changing this forces a new resource to be
     * created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * Controls if remote gateways can be used on
     * the local virtual network. If the flag is set to `true`, and
     * `allow_gateway_transit` on the remote peering is also `true`, virtual network will
     * use gateways of remote virtual network for transit. Only one peering can
     * have this flag set to `true`. This flag cannot be set if virtual network
     * already has a gateway. Defaults to `false`.
     */
    public readonly useRemoteGateways!: pulumi.Output<boolean>;
    /**
     * The name of the virtual network. Changing
     * this forces a new resource to be created.
     */
    public readonly virtualNetworkName!: pulumi.Output<string>;

    /**
     * Create a VirtualNetworkPeering resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualNetworkPeeringArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VirtualNetworkPeeringArgs | VirtualNetworkPeeringState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as VirtualNetworkPeeringState | undefined;
            inputs["allowForwardedTraffic"] = state ? state.allowForwardedTraffic : undefined;
            inputs["allowGatewayTransit"] = state ? state.allowGatewayTransit : undefined;
            inputs["allowVirtualNetworkAccess"] = state ? state.allowVirtualNetworkAccess : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["remoteVirtualNetworkId"] = state ? state.remoteVirtualNetworkId : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["useRemoteGateways"] = state ? state.useRemoteGateways : undefined;
            inputs["virtualNetworkName"] = state ? state.virtualNetworkName : undefined;
        } else {
            const args = argsOrState as VirtualNetworkPeeringArgs | undefined;
            if (!args || args.remoteVirtualNetworkId === undefined) {
                throw new Error("Missing required property 'remoteVirtualNetworkId'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.virtualNetworkName === undefined) {
                throw new Error("Missing required property 'virtualNetworkName'");
            }
            inputs["allowForwardedTraffic"] = args ? args.allowForwardedTraffic : undefined;
            inputs["allowGatewayTransit"] = args ? args.allowGatewayTransit : undefined;
            inputs["allowVirtualNetworkAccess"] = args ? args.allowVirtualNetworkAccess : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["remoteVirtualNetworkId"] = args ? args.remoteVirtualNetworkId : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["useRemoteGateways"] = args ? args.useRemoteGateways : undefined;
            inputs["virtualNetworkName"] = args ? args.virtualNetworkName : undefined;
        }
        super(VirtualNetworkPeering.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering VirtualNetworkPeering resources.
 */
export interface VirtualNetworkPeeringState {
    /**
     * Controls if forwarded traffic from  VMs
     * in the remote virtual network is allowed. Defaults to false.
     */
    readonly allowForwardedTraffic?: pulumi.Input<boolean>;
    /**
     * Controls gatewayLinks can be used in the
     * remote virtual network’s link to the local virtual network.
     */
    readonly allowGatewayTransit?: pulumi.Input<boolean>;
    /**
     * Controls if the VMs in the remote
     * virtual network can access VMs in the local virtual network. Defaults to
     * false.
     */
    readonly allowVirtualNetworkAccess?: pulumi.Input<boolean>;
    /**
     * The name of the virtual network peering. Changing this
     * forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The full Azure resource ID of the
     * remote virtual network.  Changing this forces a new resource to be created.
     */
    readonly remoteVirtualNetworkId?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to
     * create the virtual network. Changing this forces a new resource to be
     * created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * Controls if remote gateways can be used on
     * the local virtual network. If the flag is set to `true`, and
     * `allow_gateway_transit` on the remote peering is also `true`, virtual network will
     * use gateways of remote virtual network for transit. Only one peering can
     * have this flag set to `true`. This flag cannot be set if virtual network
     * already has a gateway. Defaults to `false`.
     */
    readonly useRemoteGateways?: pulumi.Input<boolean>;
    /**
     * The name of the virtual network. Changing
     * this forces a new resource to be created.
     */
    readonly virtualNetworkName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VirtualNetworkPeering resource.
 */
export interface VirtualNetworkPeeringArgs {
    /**
     * Controls if forwarded traffic from  VMs
     * in the remote virtual network is allowed. Defaults to false.
     */
    readonly allowForwardedTraffic?: pulumi.Input<boolean>;
    /**
     * Controls gatewayLinks can be used in the
     * remote virtual network’s link to the local virtual network.
     */
    readonly allowGatewayTransit?: pulumi.Input<boolean>;
    /**
     * Controls if the VMs in the remote
     * virtual network can access VMs in the local virtual network. Defaults to
     * false.
     */
    readonly allowVirtualNetworkAccess?: pulumi.Input<boolean>;
    /**
     * The name of the virtual network peering. Changing this
     * forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The full Azure resource ID of the
     * remote virtual network.  Changing this forces a new resource to be created.
     */
    readonly remoteVirtualNetworkId: pulumi.Input<string>;
    /**
     * The name of the resource group in which to
     * create the virtual network. Changing this forces a new resource to be
     * created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Controls if remote gateways can be used on
     * the local virtual network. If the flag is set to `true`, and
     * `allow_gateway_transit` on the remote peering is also `true`, virtual network will
     * use gateways of remote virtual network for transit. Only one peering can
     * have this flag set to `true`. This flag cannot be set if virtual network
     * already has a gateway. Defaults to `false`.
     */
    readonly useRemoteGateways?: pulumi.Input<boolean>;
    /**
     * The name of the virtual network. Changing
     * this forces a new resource to be created.
     */
    readonly virtualNetworkName: pulumi.Input<string>;
}
