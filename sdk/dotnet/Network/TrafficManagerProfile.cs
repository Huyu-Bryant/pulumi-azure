// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.Network
{
    /// <summary>
    /// Manages a Traffic Manager Profile to which multiple endpoints can be attached.
    /// 
    /// &gt; This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/traffic_manager_profile.html.markdown.
    /// </summary>
    public partial class TrafficManagerProfile : Pulumi.CustomResource
    {
        /// <summary>
        /// This block specifies the DNS configuration of the Profile, it supports the fields documented below.
        /// </summary>
        [Output("dnsConfig")]
        public Output<Outputs.TrafficManagerProfileDnsConfig> DnsConfig { get; private set; } = null!;

        /// <summary>
        /// The FQDN of the created Profile.
        /// </summary>
        [Output("fqdn")]
        public Output<string> Fqdn { get; private set; } = null!;

        /// <summary>
        /// This block specifies the Endpoint monitoring configuration for the Profile, it supports the fields documented below.
        /// </summary>
        [Output("monitorConfig")]
        public Output<Outputs.TrafficManagerProfileMonitorConfig> MonitorConfig { get; private set; } = null!;

        /// <summary>
        /// The name of the Traffic Manager profile. Changing this forces a new resource to be created.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The status of the profile, can be set to either `Enabled` or `Disabled`. Defaults to `Enabled`.
        /// </summary>
        [Output("profileStatus")]
        public Output<string> ProfileStatus { get; private set; } = null!;

        /// <summary>
        /// The name of the resource group in which to create the Traffic Manager profile.
        /// </summary>
        [Output("resourceGroupName")]
        public Output<string> ResourceGroupName { get; private set; } = null!;

        /// <summary>
        /// A mapping of tags to assign to the resource.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// Specifies the algorithm used to route traffic, possible values are:
        /// </summary>
        [Output("trafficRoutingMethod")]
        public Output<string> TrafficRoutingMethod { get; private set; } = null!;


        /// <summary>
        /// Create a TrafficManagerProfile resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public TrafficManagerProfile(string name, TrafficManagerProfileArgs args, CustomResourceOptions? options = null)
            : base("azure:network/trafficManagerProfile:TrafficManagerProfile", name, args ?? ResourceArgs.Empty, MakeResourceOptions(options, ""))
        {
        }

        private TrafficManagerProfile(string name, Input<string> id, TrafficManagerProfileState? state = null, CustomResourceOptions? options = null)
            : base("azure:network/trafficManagerProfile:TrafficManagerProfile", name, state, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,                Aliases = { new Alias { Type = "azure:trafficmanager/profile:Profile" } },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing TrafficManagerProfile resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static TrafficManagerProfile Get(string name, Input<string> id, TrafficManagerProfileState? state = null, CustomResourceOptions? options = null)
        {
            return new TrafficManagerProfile(name, id, state, options);
        }
    }

    public sealed class TrafficManagerProfileArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// This block specifies the DNS configuration of the Profile, it supports the fields documented below.
        /// </summary>
        [Input("dnsConfig", required: true)]
        public Input<Inputs.TrafficManagerProfileDnsConfigArgs> DnsConfig { get; set; } = null!;

        /// <summary>
        /// This block specifies the Endpoint monitoring configuration for the Profile, it supports the fields documented below.
        /// </summary>
        [Input("monitorConfig", required: true)]
        public Input<Inputs.TrafficManagerProfileMonitorConfigArgs> MonitorConfig { get; set; } = null!;

        /// <summary>
        /// The name of the Traffic Manager profile. Changing this forces a new resource to be created.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The status of the profile, can be set to either `Enabled` or `Disabled`. Defaults to `Enabled`.
        /// </summary>
        [Input("profileStatus")]
        public Input<string>? ProfileStatus { get; set; }

        /// <summary>
        /// The name of the resource group in which to create the Traffic Manager profile.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// A mapping of tags to assign to the resource.
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        /// <summary>
        /// Specifies the algorithm used to route traffic, possible values are:
        /// </summary>
        [Input("trafficRoutingMethod", required: true)]
        public Input<string> TrafficRoutingMethod { get; set; } = null!;

        public TrafficManagerProfileArgs()
        {
        }
    }

    public sealed class TrafficManagerProfileState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// This block specifies the DNS configuration of the Profile, it supports the fields documented below.
        /// </summary>
        [Input("dnsConfig")]
        public Input<Inputs.TrafficManagerProfileDnsConfigGetArgs>? DnsConfig { get; set; }

        /// <summary>
        /// The FQDN of the created Profile.
        /// </summary>
        [Input("fqdn")]
        public Input<string>? Fqdn { get; set; }

        /// <summary>
        /// This block specifies the Endpoint monitoring configuration for the Profile, it supports the fields documented below.
        /// </summary>
        [Input("monitorConfig")]
        public Input<Inputs.TrafficManagerProfileMonitorConfigGetArgs>? MonitorConfig { get; set; }

        /// <summary>
        /// The name of the Traffic Manager profile. Changing this forces a new resource to be created.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The status of the profile, can be set to either `Enabled` or `Disabled`. Defaults to `Enabled`.
        /// </summary>
        [Input("profileStatus")]
        public Input<string>? ProfileStatus { get; set; }

        /// <summary>
        /// The name of the resource group in which to create the Traffic Manager profile.
        /// </summary>
        [Input("resourceGroupName")]
        public Input<string>? ResourceGroupName { get; set; }

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// A mapping of tags to assign to the resource.
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        /// <summary>
        /// Specifies the algorithm used to route traffic, possible values are:
        /// </summary>
        [Input("trafficRoutingMethod")]
        public Input<string>? TrafficRoutingMethod { get; set; }

        public TrafficManagerProfileState()
        {
        }
    }

    namespace Inputs
    {

    public sealed class TrafficManagerProfileDnsConfigArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The relative domain name, this is combined with the domain name used by Traffic Manager to form the FQDN which is exported as documented below. Changing this forces a new resource to be created.
        /// </summary>
        [Input("relativeName", required: true)]
        public Input<string> RelativeName { get; set; } = null!;

        /// <summary>
        /// The TTL value of the Profile used by Local DNS resolvers and clients.
        /// </summary>
        [Input("ttl", required: true)]
        public Input<int> Ttl { get; set; } = null!;

        public TrafficManagerProfileDnsConfigArgs()
        {
        }
    }

    public sealed class TrafficManagerProfileDnsConfigGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The relative domain name, this is combined with the domain name used by Traffic Manager to form the FQDN which is exported as documented below. Changing this forces a new resource to be created.
        /// </summary>
        [Input("relativeName", required: true)]
        public Input<string> RelativeName { get; set; } = null!;

        /// <summary>
        /// The TTL value of the Profile used by Local DNS resolvers and clients.
        /// </summary>
        [Input("ttl", required: true)]
        public Input<int> Ttl { get; set; } = null!;

        public TrafficManagerProfileDnsConfigGetArgs()
        {
        }
    }

    public sealed class TrafficManagerProfileMonitorConfigArgs : Pulumi.ResourceArgs
    {
        [Input("customHeaders")]
        private InputList<TrafficManagerProfileMonitorConfigCustomHeadersArgs>? _customHeaders;

        /// <summary>
        /// One or more `custom_header` blocks as defined below.
        /// </summary>
        public InputList<TrafficManagerProfileMonitorConfigCustomHeadersArgs> CustomHeaders
        {
            get => _customHeaders ?? (_customHeaders = new InputList<TrafficManagerProfileMonitorConfigCustomHeadersArgs>());
            set => _customHeaders = value;
        }

        [Input("expectedStatusCodeRanges")]
        private InputList<string>? _expectedStatusCodeRanges;

        /// <summary>
        /// A list of status code ranges in the format of `100-101`.
        /// </summary>
        public InputList<string> ExpectedStatusCodeRanges
        {
            get => _expectedStatusCodeRanges ?? (_expectedStatusCodeRanges = new InputList<string>());
            set => _expectedStatusCodeRanges = value;
        }

        /// <summary>
        /// The interval used to check the endpoint health from a Traffic Manager probing agent. You can specify two values here: `30` (normal probing) and `10` (fast probing). The default value is `30`.
        /// </summary>
        [Input("intervalInSeconds")]
        public Input<int>? IntervalInSeconds { get; set; }

        /// <summary>
        /// The path used by the monitoring checks. Required when `protocol` is set to `HTTP` or `HTTPS` - cannot be set when `protocol` is set to `TCP`.
        /// </summary>
        [Input("path")]
        public Input<string>? Path { get; set; }

        /// <summary>
        /// The port number used by the monitoring checks.
        /// </summary>
        [Input("port", required: true)]
        public Input<int> Port { get; set; } = null!;

        /// <summary>
        /// The protocol used by the monitoring checks, supported values are `HTTP`, `HTTPS` and `TCP`.
        /// </summary>
        [Input("protocol", required: true)]
        public Input<string> Protocol { get; set; } = null!;

        /// <summary>
        /// The amount of time the Traffic Manager probing agent should wait before considering that check a failure when a health check probe is sent to the endpoint. If `interval_in_seconds` is set to `30`, then `timeout_in_seconds` can be between `5` and `10`. The default value is `10`. If `interval_in_seconds` is set to `10`, then valid values are between `5` and `9` and `timeout_in_seconds` is required.
        /// </summary>
        [Input("timeoutInSeconds")]
        public Input<int>? TimeoutInSeconds { get; set; }

        /// <summary>
        /// The number of failures a Traffic Manager probing agent tolerates before marking that endpoint as unhealthy. Valid values are between `0` and `9`. The default value is `3`
        /// </summary>
        [Input("toleratedNumberOfFailures")]
        public Input<int>? ToleratedNumberOfFailures { get; set; }

        public TrafficManagerProfileMonitorConfigArgs()
        {
        }
    }

    public sealed class TrafficManagerProfileMonitorConfigCustomHeadersArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the custom header.
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        /// <summary>
        /// The value of custom header. Applicable for Http and Https protocol.
        /// </summary>
        [Input("value", required: true)]
        public Input<string> Value { get; set; } = null!;

        public TrafficManagerProfileMonitorConfigCustomHeadersArgs()
        {
        }
    }

    public sealed class TrafficManagerProfileMonitorConfigCustomHeadersGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the custom header.
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        /// <summary>
        /// The value of custom header. Applicable for Http and Https protocol.
        /// </summary>
        [Input("value", required: true)]
        public Input<string> Value { get; set; } = null!;

        public TrafficManagerProfileMonitorConfigCustomHeadersGetArgs()
        {
        }
    }

    public sealed class TrafficManagerProfileMonitorConfigGetArgs : Pulumi.ResourceArgs
    {
        [Input("customHeaders")]
        private InputList<TrafficManagerProfileMonitorConfigCustomHeadersGetArgs>? _customHeaders;

        /// <summary>
        /// One or more `custom_header` blocks as defined below.
        /// </summary>
        public InputList<TrafficManagerProfileMonitorConfigCustomHeadersGetArgs> CustomHeaders
        {
            get => _customHeaders ?? (_customHeaders = new InputList<TrafficManagerProfileMonitorConfigCustomHeadersGetArgs>());
            set => _customHeaders = value;
        }

        [Input("expectedStatusCodeRanges")]
        private InputList<string>? _expectedStatusCodeRanges;

        /// <summary>
        /// A list of status code ranges in the format of `100-101`.
        /// </summary>
        public InputList<string> ExpectedStatusCodeRanges
        {
            get => _expectedStatusCodeRanges ?? (_expectedStatusCodeRanges = new InputList<string>());
            set => _expectedStatusCodeRanges = value;
        }

        /// <summary>
        /// The interval used to check the endpoint health from a Traffic Manager probing agent. You can specify two values here: `30` (normal probing) and `10` (fast probing). The default value is `30`.
        /// </summary>
        [Input("intervalInSeconds")]
        public Input<int>? IntervalInSeconds { get; set; }

        /// <summary>
        /// The path used by the monitoring checks. Required when `protocol` is set to `HTTP` or `HTTPS` - cannot be set when `protocol` is set to `TCP`.
        /// </summary>
        [Input("path")]
        public Input<string>? Path { get; set; }

        /// <summary>
        /// The port number used by the monitoring checks.
        /// </summary>
        [Input("port", required: true)]
        public Input<int> Port { get; set; } = null!;

        /// <summary>
        /// The protocol used by the monitoring checks, supported values are `HTTP`, `HTTPS` and `TCP`.
        /// </summary>
        [Input("protocol", required: true)]
        public Input<string> Protocol { get; set; } = null!;

        /// <summary>
        /// The amount of time the Traffic Manager probing agent should wait before considering that check a failure when a health check probe is sent to the endpoint. If `interval_in_seconds` is set to `30`, then `timeout_in_seconds` can be between `5` and `10`. The default value is `10`. If `interval_in_seconds` is set to `10`, then valid values are between `5` and `9` and `timeout_in_seconds` is required.
        /// </summary>
        [Input("timeoutInSeconds")]
        public Input<int>? TimeoutInSeconds { get; set; }

        /// <summary>
        /// The number of failures a Traffic Manager probing agent tolerates before marking that endpoint as unhealthy. Valid values are between `0` and `9`. The default value is `3`
        /// </summary>
        [Input("toleratedNumberOfFailures")]
        public Input<int>? ToleratedNumberOfFailures { get; set; }

        public TrafficManagerProfileMonitorConfigGetArgs()
        {
        }
    }
    }

    namespace Outputs
    {

    [OutputType]
    public sealed class TrafficManagerProfileDnsConfig
    {
        /// <summary>
        /// The relative domain name, this is combined with the domain name used by Traffic Manager to form the FQDN which is exported as documented below. Changing this forces a new resource to be created.
        /// </summary>
        public readonly string RelativeName;
        /// <summary>
        /// The TTL value of the Profile used by Local DNS resolvers and clients.
        /// </summary>
        public readonly int Ttl;

        [OutputConstructor]
        private TrafficManagerProfileDnsConfig(
            string relativeName,
            int ttl)
        {
            RelativeName = relativeName;
            Ttl = ttl;
        }
    }

    [OutputType]
    public sealed class TrafficManagerProfileMonitorConfig
    {
        /// <summary>
        /// One or more `custom_header` blocks as defined below.
        /// </summary>
        public readonly ImmutableArray<TrafficManagerProfileMonitorConfigCustomHeaders> CustomHeaders;
        /// <summary>
        /// A list of status code ranges in the format of `100-101`.
        /// </summary>
        public readonly ImmutableArray<string> ExpectedStatusCodeRanges;
        /// <summary>
        /// The interval used to check the endpoint health from a Traffic Manager probing agent. You can specify two values here: `30` (normal probing) and `10` (fast probing). The default value is `30`.
        /// </summary>
        public readonly int? IntervalInSeconds;
        /// <summary>
        /// The path used by the monitoring checks. Required when `protocol` is set to `HTTP` or `HTTPS` - cannot be set when `protocol` is set to `TCP`.
        /// </summary>
        public readonly string? Path;
        /// <summary>
        /// The port number used by the monitoring checks.
        /// </summary>
        public readonly int Port;
        /// <summary>
        /// The protocol used by the monitoring checks, supported values are `HTTP`, `HTTPS` and `TCP`.
        /// </summary>
        public readonly string Protocol;
        /// <summary>
        /// The amount of time the Traffic Manager probing agent should wait before considering that check a failure when a health check probe is sent to the endpoint. If `interval_in_seconds` is set to `30`, then `timeout_in_seconds` can be between `5` and `10`. The default value is `10`. If `interval_in_seconds` is set to `10`, then valid values are between `5` and `9` and `timeout_in_seconds` is required.
        /// </summary>
        public readonly int? TimeoutInSeconds;
        /// <summary>
        /// The number of failures a Traffic Manager probing agent tolerates before marking that endpoint as unhealthy. Valid values are between `0` and `9`. The default value is `3`
        /// </summary>
        public readonly int? ToleratedNumberOfFailures;

        [OutputConstructor]
        private TrafficManagerProfileMonitorConfig(
            ImmutableArray<TrafficManagerProfileMonitorConfigCustomHeaders> customHeaders,
            ImmutableArray<string> expectedStatusCodeRanges,
            int? intervalInSeconds,
            string? path,
            int port,
            string protocol,
            int? timeoutInSeconds,
            int? toleratedNumberOfFailures)
        {
            CustomHeaders = customHeaders;
            ExpectedStatusCodeRanges = expectedStatusCodeRanges;
            IntervalInSeconds = intervalInSeconds;
            Path = path;
            Port = port;
            Protocol = protocol;
            TimeoutInSeconds = timeoutInSeconds;
            ToleratedNumberOfFailures = toleratedNumberOfFailures;
        }
    }

    [OutputType]
    public sealed class TrafficManagerProfileMonitorConfigCustomHeaders
    {
        /// <summary>
        /// The name of the custom header.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The value of custom header. Applicable for Http and Https protocol.
        /// </summary>
        public readonly string Value;

        [OutputConstructor]
        private TrafficManagerProfileMonitorConfigCustomHeaders(
            string name,
            string value)
        {
            Name = name;
            Value = value;
        }
    }
    }
}
