// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Use this data source to access information about an existing Virtual Network Gateway Connection.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const test = pulumi.output(azure.network.getGatewayConnection({
 *     name: "production",
 *     resourceGroupName: "networking",
 * }));
 * 
 * export const virtualNetworkGatewayConnectionId = test.id;
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/virtual_network_gateway_connection.html.markdown.
 */
export function getGatewayConnection(args: GetGatewayConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetGatewayConnectionResult> & GetGatewayConnectionResult {
    const promise: Promise<GetGatewayConnectionResult> = pulumi.runtime.invoke("azure:network/getGatewayConnection:getGatewayConnection", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);

    return pulumi.utils.liftProperties(promise, opts);
}

/**
 * A collection of arguments for invoking getGatewayConnection.
 */
export interface GetGatewayConnectionArgs {
    /**
     * Specifies the name of the Virtual Network Gateway Connection.
     */
    readonly name: string;
    /**
     * Specifies the name of the resource group the Virtual Network Gateway Connection is located in.
     */
    readonly resourceGroupName: string;
}

/**
 * A collection of values returned by getGatewayConnection.
 */
export interface GetGatewayConnectionResult {
    /**
     * The authorization key associated with the
     * Express Route Circuit. This field is present only if the type is an
     * ExpressRoute connection.
     */
    readonly authorizationKey: string;
    readonly connectionProtocol: string;
    readonly egressBytesTransferred: number;
    /**
     * If `true`, BGP (Border Gateway Protocol) is enabled
     * for this connection.
     */
    readonly enableBgp: boolean;
    /**
     * The ID of the Express Route Circuit
     * (i.e. when `type` is `ExpressRoute`).
     */
    readonly expressRouteCircuitId: string;
    /**
     * If `true`, data packets will bypass ExpressRoute Gateway for data forwarding. This is only valid for ExpressRoute connections.
     */
    readonly expressRouteGatewayBypass: boolean;
    readonly ingressBytesTransferred: number;
    readonly ipsecPolicies: { dhGroup: string, ikeEncryption: string, ikeIntegrity: string, ipsecEncryption: string, ipsecIntegrity: string, pfsGroup: string, saDatasize: number, saLifetime: number }[];
    /**
     * The ID of the local network gateway
     * when a Site-to-Site connection (i.e. when `type` is `IPsec`).
     */
    readonly localNetworkGatewayId: string;
    /**
     * The location/region where the connection is
     * located.
     */
    readonly location: string;
    readonly name: string;
    /**
     * The ID of the peer virtual
     * network gateway when a VNet-to-VNet connection (i.e. when `type`
     * is `Vnet2Vnet`).
     */
    readonly peerVirtualNetworkGatewayId: string;
    readonly resourceGroupName: string;
    readonly resourceGuid: string;
    /**
     * The routing weight.
     */
    readonly routingWeight: number;
    /**
     * The shared IPSec key. 
     */
    readonly sharedKey: string;
    /**
     * (Optional) A mapping of tags to assign to the resource.
     */
    readonly tags: {[key: string]: any};
    /**
     * The type of connection. Valid options are `IPsec`
     * (Site-to-Site), `ExpressRoute` (ExpressRoute), and `Vnet2Vnet` (VNet-to-VNet).
     */
    readonly type: string;
    /**
     * If `true`, policy-based traffic
     * selectors are enabled for this connection. Enabling policy-based traffic
     * selectors requires an `ipsec_policy` block.
     */
    readonly usePolicyBasedTrafficSelectors: boolean;
    /**
     * The ID of the Virtual Network Gateway
     * in which the connection is created.
     */
    readonly virtualNetworkGatewayId: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}