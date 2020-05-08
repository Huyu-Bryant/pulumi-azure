// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.Compute.Outputs
{

    [OutputType]
    public sealed class ScaleSetNetworkProfileIpConfiguration
    {
        /// <summary>
        /// Specifies an array of references to backend address pools of application gateways. A scale set can reference backend address pools of multiple application gateways. Multiple scale sets can use the same application gateway.
        /// </summary>
        public readonly ImmutableArray<string> ApplicationGatewayBackendAddressPoolIds;
        /// <summary>
        /// Specifies up to `20` application security group IDs.
        /// </summary>
        public readonly ImmutableArray<string> ApplicationSecurityGroupIds;
        /// <summary>
        /// Specifies an array of references to backend address pools of load balancers. A scale set can reference backend address pools of one public and one internal load balancer. Multiple scale sets cannot use the same load balancer.
        /// </summary>
        public readonly ImmutableArray<string> LoadBalancerBackendAddressPoolIds;
        /// <summary>
        /// Specifies an array of references to inbound NAT pools for load balancers. A scale set can reference inbound nat pools of one public and one internal load balancer. Multiple scale sets cannot use the same load balancer.
        /// </summary>
        public readonly ImmutableArray<string> LoadBalancerInboundNatRulesIds;
        /// <summary>
        /// Specifies name of the IP configuration.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Specifies if this ip_configuration is the primary one.
        /// </summary>
        public readonly bool Primary;
        /// <summary>
        /// Describes a virtual machines scale set IP Configuration's PublicIPAddress configuration. The public_ip_address_configuration is documented below.
        /// </summary>
        public readonly Outputs.ScaleSetNetworkProfileIpConfigurationPublicIpAddressConfiguration? PublicIpAddressConfiguration;
        /// <summary>
        /// Specifies the identifier of the subnet.
        /// </summary>
        public readonly string SubnetId;

        [OutputConstructor]
        private ScaleSetNetworkProfileIpConfiguration(
            ImmutableArray<string> applicationGatewayBackendAddressPoolIds,

            ImmutableArray<string> applicationSecurityGroupIds,

            ImmutableArray<string> loadBalancerBackendAddressPoolIds,

            ImmutableArray<string> loadBalancerInboundNatRulesIds,

            string name,

            bool primary,

            Outputs.ScaleSetNetworkProfileIpConfigurationPublicIpAddressConfiguration? publicIpAddressConfiguration,

            string subnetId)
        {
            ApplicationGatewayBackendAddressPoolIds = applicationGatewayBackendAddressPoolIds;
            ApplicationSecurityGroupIds = applicationSecurityGroupIds;
            LoadBalancerBackendAddressPoolIds = loadBalancerBackendAddressPoolIds;
            LoadBalancerInboundNatRulesIds = loadBalancerInboundNatRulesIds;
            Name = name;
            Primary = primary;
            PublicIpAddressConfiguration = publicIpAddressConfiguration;
            SubnetId = subnetId;
        }
    }
}