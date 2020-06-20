// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.PrivateLink.Outputs
{

    [OutputType]
    public sealed class EndpointCustomDnsConfig
    {
        /// <summary>
        /// The fully qualified domain name to the `private_dns_zone`.
        /// </summary>
        public readonly string? Fqdn;
        /// <summary>
        /// A list of all IP Addresses that map to the `private_dns_zone` fqdn.
        /// </summary>
        public readonly ImmutableArray<string> IpAddresses;

        [OutputConstructor]
        private EndpointCustomDnsConfig(
            string? fqdn,

            ImmutableArray<string> ipAddresses)
        {
            Fqdn = fqdn;
            IpAddresses = ipAddresses;
        }
    }
}
