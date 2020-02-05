// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.Network
{
    public static partial class Invokes
    {
        /// <summary>
        /// Use this data source to access information about an existing Virtual Network Gateway.
        /// 
        /// &gt; This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/virtual_network_gateway.html.markdown.
        /// </summary>
        public static Task<GetVirtualNetworkGatewayResult> GetVirtualNetworkGateway(GetVirtualNetworkGatewayArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetVirtualNetworkGatewayResult>("azure:network/getVirtualNetworkGateway:getVirtualNetworkGateway", args ?? InvokeArgs.Empty, options.WithVersion());
    }

    public sealed class GetVirtualNetworkGatewayArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Specifies the name of the Virtual Network Gateway.
        /// </summary>
        [Input("name", required: true)]
        public string Name { get; set; } = null!;

        /// <summary>
        /// Specifies the name of the resource group the Virtual Network Gateway is located in.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetVirtualNetworkGatewayArgs()
        {
        }
    }

    [OutputType]
    public sealed class GetVirtualNetworkGatewayResult
    {
        /// <summary>
        /// (Optional) Is this an Active-Active Gateway?
        /// </summary>
        public readonly bool ActiveActive;
        public readonly ImmutableArray<Outputs.GetVirtualNetworkGatewayBgpSettingsResult> BgpSettings;
        /// <summary>
        /// The ID of the local network gateway
        /// through which outbound Internet traffic from the virtual network in which the
        /// gateway is created will be routed (*forced tunneling*). Refer to the
        /// [Azure documentation on forced tunneling](https://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-forced-tunneling-rm).
        /// </summary>
        public readonly string DefaultLocalNetworkGatewayId;
        /// <summary>
        /// Will BGP (Border Gateway Protocol) will be enabled
        /// for this Virtual Network Gateway.
        /// </summary>
        public readonly bool EnableBgp;
        /// <summary>
        /// The Generation of the Virtual Network Gateway.
        /// </summary>
        public readonly string Generation;
        /// <summary>
        /// One or two `ip_configuration` blocks documented below.
        /// </summary>
        public readonly ImmutableArray<Outputs.GetVirtualNetworkGatewayIpConfigurationsResult> IpConfigurations;
        /// <summary>
        /// The location/region where the Virtual Network Gateway is located.
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// The user-defined name of the revoked certificate.
        /// </summary>
        public readonly string Name;
        public readonly string ResourceGroupName;
        /// <summary>
        /// Configuration of the size and capacity of the Virtual Network Gateway.
        /// </summary>
        public readonly string Sku;
        /// <summary>
        /// A mapping of tags assigned to the resource.
        /// </summary>
        public readonly ImmutableDictionary<string, string> Tags;
        /// <summary>
        /// The type of the Virtual Network Gateway.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// A `vpn_client_configuration` block which is documented below.
        /// </summary>
        public readonly ImmutableArray<Outputs.GetVirtualNetworkGatewayVpnClientConfigurationsResult> VpnClientConfigurations;
        /// <summary>
        /// The routing type of the Virtual Network Gateway.
        /// </summary>
        public readonly string VpnType;
        /// <summary>
        /// id is the provider-assigned unique ID for this managed resource.
        /// </summary>
        public readonly string Id;

        [OutputConstructor]
        private GetVirtualNetworkGatewayResult(
            bool activeActive,
            ImmutableArray<Outputs.GetVirtualNetworkGatewayBgpSettingsResult> bgpSettings,
            string defaultLocalNetworkGatewayId,
            bool enableBgp,
            string generation,
            ImmutableArray<Outputs.GetVirtualNetworkGatewayIpConfigurationsResult> ipConfigurations,
            string location,
            string name,
            string resourceGroupName,
            string sku,
            ImmutableDictionary<string, string> tags,
            string type,
            ImmutableArray<Outputs.GetVirtualNetworkGatewayVpnClientConfigurationsResult> vpnClientConfigurations,
            string vpnType,
            string id)
        {
            ActiveActive = activeActive;
            BgpSettings = bgpSettings;
            DefaultLocalNetworkGatewayId = defaultLocalNetworkGatewayId;
            EnableBgp = enableBgp;
            Generation = generation;
            IpConfigurations = ipConfigurations;
            Location = location;
            Name = name;
            ResourceGroupName = resourceGroupName;
            Sku = sku;
            Tags = tags;
            Type = type;
            VpnClientConfigurations = vpnClientConfigurations;
            VpnType = vpnType;
            Id = id;
        }
    }

    namespace Outputs
    {

    [OutputType]
    public sealed class GetVirtualNetworkGatewayBgpSettingsResult
    {
        /// <summary>
        /// The Autonomous System Number (ASN) to use as part of the BGP.
        /// </summary>
        public readonly int Asn;
        /// <summary>
        /// The weight added to routes which have been learned
        /// through BGP peering.
        /// </summary>
        public readonly int PeerWeight;
        /// <summary>
        /// The BGP peer IP address of the virtual network
        /// gateway. This address is needed to configure the created gateway as a BGP Peer
        /// on the on-premises VPN devices.
        /// </summary>
        public readonly string PeeringAddress;

        [OutputConstructor]
        private GetVirtualNetworkGatewayBgpSettingsResult(
            int asn,
            int peerWeight,
            string peeringAddress)
        {
            Asn = asn;
            PeerWeight = peerWeight;
            PeeringAddress = peeringAddress;
        }
    }

    [OutputType]
    public sealed class GetVirtualNetworkGatewayIpConfigurationsResult
    {
        /// <summary>
        /// Specifies the name of the Virtual Network Gateway.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Defines how the private IP address
        /// of the gateways virtual interface is assigned.
        /// </summary>
        public readonly string PrivateIpAddressAllocation;
        /// <summary>
        /// The ID of the Public IP Address associated
        /// with the Virtual Network Gateway.
        /// </summary>
        public readonly string PublicIpAddressId;
        /// <summary>
        /// The ID of the gateway subnet of a virtual network in
        /// which the virtual network gateway will be created. It is mandatory that
        /// the associated subnet is named `GatewaySubnet`. Therefore, each virtual
        /// network can contain at most a single Virtual Network Gateway.
        /// </summary>
        public readonly string SubnetId;

        [OutputConstructor]
        private GetVirtualNetworkGatewayIpConfigurationsResult(
            string name,
            string privateIpAddressAllocation,
            string publicIpAddressId,
            string subnetId)
        {
            Name = name;
            PrivateIpAddressAllocation = privateIpAddressAllocation;
            PublicIpAddressId = publicIpAddressId;
            SubnetId = subnetId;
        }
    }

    [OutputType]
    public sealed class GetVirtualNetworkGatewayVpnClientConfigurationsResult
    {
        /// <summary>
        /// The address space out of which ip addresses for
        /// vpn clients will be taken. You can provide more than one address space, e.g.
        /// in CIDR notation.
        /// </summary>
        public readonly ImmutableArray<string> AddressSpaces;
        /// <summary>
        /// (Optional) The address of the Radius server.
        /// This setting is incompatible with the use of `root_certificate` and `revoked_certificate`.
        /// </summary>
        public readonly string RadiusServerAddress;
        /// <summary>
        /// (Optional) The secret used by the Radius server.
        /// This setting is incompatible with the use of `root_certificate` and `revoked_certificate`.
        /// </summary>
        public readonly string RadiusServerSecret;
        /// <summary>
        /// One or more `revoked_certificate` blocks which
        /// are defined below.
        /// </summary>
        public readonly ImmutableArray<GetVirtualNetworkGatewayVpnClientConfigurationsRevokedCertificatesResult> RevokedCertificates;
        /// <summary>
        /// One or more `root_certificate` blocks which are
        /// defined below. These root certificates are used to sign the client certificate
        /// used by the VPN clients to connect to the gateway.
        /// </summary>
        public readonly ImmutableArray<GetVirtualNetworkGatewayVpnClientConfigurationsRootCertificatesResult> RootCertificates;
        /// <summary>
        /// (Optional) List of the protocols supported by the vpn client.
        /// The supported values are `SSTP`, `IkeV2` and `OpenVPN`.
        /// </summary>
        public readonly ImmutableArray<string> VpnClientProtocols;

        [OutputConstructor]
        private GetVirtualNetworkGatewayVpnClientConfigurationsResult(
            ImmutableArray<string> addressSpaces,
            string radiusServerAddress,
            string radiusServerSecret,
            ImmutableArray<GetVirtualNetworkGatewayVpnClientConfigurationsRevokedCertificatesResult> revokedCertificates,
            ImmutableArray<GetVirtualNetworkGatewayVpnClientConfigurationsRootCertificatesResult> rootCertificates,
            ImmutableArray<string> vpnClientProtocols)
        {
            AddressSpaces = addressSpaces;
            RadiusServerAddress = radiusServerAddress;
            RadiusServerSecret = radiusServerSecret;
            RevokedCertificates = revokedCertificates;
            RootCertificates = rootCertificates;
            VpnClientProtocols = vpnClientProtocols;
        }
    }

    [OutputType]
    public sealed class GetVirtualNetworkGatewayVpnClientConfigurationsRevokedCertificatesResult
    {
        /// <summary>
        /// Specifies the name of the Virtual Network Gateway.
        /// </summary>
        public readonly string Name;
        public readonly string Thumbprint;

        [OutputConstructor]
        private GetVirtualNetworkGatewayVpnClientConfigurationsRevokedCertificatesResult(
            string name,
            string thumbprint)
        {
            Name = name;
            Thumbprint = thumbprint;
        }
    }

    [OutputType]
    public sealed class GetVirtualNetworkGatewayVpnClientConfigurationsRootCertificatesResult
    {
        /// <summary>
        /// Specifies the name of the Virtual Network Gateway.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The SHA1 thumbprint of the certificate to be revoked.
        /// </summary>
        public readonly string PublicCertData;

        [OutputConstructor]
        private GetVirtualNetworkGatewayVpnClientConfigurationsRootCertificatesResult(
            string name,
            string publicCertData)
        {
            Name = name;
            PublicCertData = publicCertData;
        }
    }
    }
}