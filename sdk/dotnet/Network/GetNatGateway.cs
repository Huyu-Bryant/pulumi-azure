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
        /// Use this data source to access information about an existing NAT Gateway.
        /// 
        /// &gt; **NOTE:** The Azure NAT Gateway service is currently in private preview. Your subscription must be on the NAT Gateway private preview whitelist for this resource to be provisioned correctly. If you attempt to provision this resource and receive an `InvalidResourceType` error may mean that your subscription is not part of the NAT Gateway private preview or you are using a region which does not yet support the NAT Gateway private preview service. The NAT Gateway private preview service is currently available in a limited set of regions. Private preview resources may have multiple breaking changes over their lifecycle until they GA. You can opt into the Private Preview by contacting your Microsoft Representative.
        /// 
        /// &gt; This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/nat_gateway.html.markdown.
        /// </summary>
        public static Task<GetNatGatewayResult> GetNatGateway(GetNatGatewayArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetNatGatewayResult>("azure:network/getNatGateway:getNatGateway", args ?? InvokeArgs.Empty, options.WithVersion());
    }

    public sealed class GetNatGatewayArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Specifies the Name of the NAT Gateway.
        /// </summary>
        [Input("name", required: true)]
        public string Name { get; set; } = null!;

        [Input("publicIpAddressIds")]
        private List<string>? _publicIpAddressIds;
        public List<string> PublicIpAddressIds
        {
            get => _publicIpAddressIds ?? (_publicIpAddressIds = new List<string>());
            set => _publicIpAddressIds = value;
        }

        [Input("publicIpPrefixIds")]
        private List<string>? _publicIpPrefixIds;
        public List<string> PublicIpPrefixIds
        {
            get => _publicIpPrefixIds ?? (_publicIpPrefixIds = new List<string>());
            set => _publicIpPrefixIds = value;
        }

        /// <summary>
        /// Specifies the name of the Resource Group where the NAT Gateway exists.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetNatGatewayArgs()
        {
        }
    }

    [OutputType]
    public sealed class GetNatGatewayResult
    {
        /// <summary>
        /// The idle timeout in minutes which is used for the NAT Gateway.
        /// </summary>
        public readonly int IdleTimeoutInMinutes;
        /// <summary>
        /// The location where the NAT Gateway exists.
        /// </summary>
        public readonly string Location;
        public readonly string Name;
        /// <summary>
        /// A list of existing Public IP Address resource IDs which the NAT Gateway is using.
        /// </summary>
        public readonly ImmutableArray<string> PublicIpAddressIds;
        /// <summary>
        /// A list of existing Public IP Prefix resource IDs which the NAT Gateway is using.
        /// </summary>
        public readonly ImmutableArray<string> PublicIpPrefixIds;
        public readonly string ResourceGroupName;
        /// <summary>
        /// The Resource GUID of the NAT Gateway.
        /// </summary>
        public readonly string ResourceGuid;
        /// <summary>
        /// The SKU used by the NAT Gateway.
        /// </summary>
        public readonly string SkuName;
        /// <summary>
        /// A mapping of tags assigned to the resource.
        /// </summary>
        public readonly ImmutableDictionary<string, string> Tags;
        /// <summary>
        /// A list of Availability Zones which the NAT Gateway exists in.
        /// </summary>
        public readonly ImmutableArray<string> Zones;
        /// <summary>
        /// id is the provider-assigned unique ID for this managed resource.
        /// </summary>
        public readonly string Id;

        [OutputConstructor]
        private GetNatGatewayResult(
            int idleTimeoutInMinutes,
            string location,
            string name,
            ImmutableArray<string> publicIpAddressIds,
            ImmutableArray<string> publicIpPrefixIds,
            string resourceGroupName,
            string resourceGuid,
            string skuName,
            ImmutableDictionary<string, string> tags,
            ImmutableArray<string> zones,
            string id)
        {
            IdleTimeoutInMinutes = idleTimeoutInMinutes;
            Location = location;
            Name = name;
            PublicIpAddressIds = publicIpAddressIds;
            PublicIpPrefixIds = publicIpPrefixIds;
            ResourceGroupName = resourceGroupName;
            ResourceGuid = resourceGuid;
            SkuName = skuName;
            Tags = tags;
            Zones = zones;
            Id = id;
        }
    }
}
