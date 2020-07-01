// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.Iot
{
    /// <summary>
    /// Manages an IotHub
    /// 
    /// &gt; **NOTE:** Endpoints can be defined either directly on the `azure.iot.IoTHub` resource, or using the `azurerm_iothub_endpoint_*` resources - but the two ways of defining the endpoints cannot be used together. If both are used against the same IoTHub, spurious changes will occur. Also, defining a `azurerm_iothub_endpoint_*` resource and another endpoint of a different type directly on the `azure.iot.IoTHub` resource is not supported.
    /// 
    /// &gt; **NOTE:** Routes can be defined either directly on the `azure.iot.IoTHub` resource, or using the `azure.iot.Route` resource - but the two cannot be used together. If both are used against the same IoTHub, spurious changes will occur.
    /// 
    /// &gt; **NOTE:** Fallback route can be defined either directly on the `azure.iot.IoTHub` resource, or using the `azure.iot.FallbackRoute` resource - but the two cannot be used together. If both are used against the same IoTHub, spurious changes will occur.
    /// 
    /// ## Example Usage
    /// 
    /// ```csharp
    /// using Pulumi;
    /// using Azure = Pulumi.Azure;
    /// 
    /// class MyStack : Stack
    /// {
    ///     public MyStack()
    ///     {
    ///         var exampleResourceGroup = new Azure.Core.ResourceGroup("exampleResourceGroup", new Azure.Core.ResourceGroupArgs
    ///         {
    ///             Location = "Canada Central",
    ///         });
    ///         var exampleAccount = new Azure.Storage.Account("exampleAccount", new Azure.Storage.AccountArgs
    ///         {
    ///             ResourceGroupName = exampleResourceGroup.Name,
    ///             Location = exampleResourceGroup.Location,
    ///             AccountTier = "Standard",
    ///             AccountReplicationType = "LRS",
    ///         });
    ///         var exampleContainer = new Azure.Storage.Container("exampleContainer", new Azure.Storage.ContainerArgs
    ///         {
    ///             StorageAccountName = exampleAccount.Name,
    ///             ContainerAccessType = "private",
    ///         });
    ///         var exampleEventHubNamespace = new Azure.EventHub.EventHubNamespace("exampleEventHubNamespace", new Azure.EventHub.EventHubNamespaceArgs
    ///         {
    ///             ResourceGroupName = exampleResourceGroup.Name,
    ///             Location = exampleResourceGroup.Location,
    ///             Sku = "Basic",
    ///         });
    ///         var exampleEventHub = new Azure.EventHub.EventHub("exampleEventHub", new Azure.EventHub.EventHubArgs
    ///         {
    ///             ResourceGroupName = exampleResourceGroup.Name,
    ///             NamespaceName = exampleEventHubNamespace.Name,
    ///             PartitionCount = 2,
    ///             MessageRetention = 1,
    ///         });
    ///         var exampleAuthorizationRule = new Azure.EventHub.AuthorizationRule("exampleAuthorizationRule", new Azure.EventHub.AuthorizationRuleArgs
    ///         {
    ///             ResourceGroupName = exampleResourceGroup.Name,
    ///             NamespaceName = exampleEventHubNamespace.Name,
    ///             EventhubName = exampleEventHub.Name,
    ///             Send = true,
    ///         });
    ///         var exampleIoTHub = new Azure.Iot.IoTHub("exampleIoTHub", new Azure.Iot.IoTHubArgs
    ///         {
    ///             ResourceGroupName = exampleResourceGroup.Name,
    ///             Location = exampleResourceGroup.Location,
    ///             Sku = new Azure.Iot.Inputs.IoTHubSkuArgs
    ///             {
    ///                 Name = "S1",
    ///                 Capacity = 1,
    ///             },
    ///             Endpoints = 
    ///             {
    ///                 new Azure.Iot.Inputs.IoTHubEndpointArgs
    ///                 {
    ///                     Type = "AzureIotHub.StorageContainer",
    ///                     ConnectionString = exampleAccount.PrimaryBlobConnectionString,
    ///                     Name = "export",
    ///                     BatchFrequencyInSeconds = 60,
    ///                     MaxChunkSizeInBytes = 10485760,
    ///                     ContainerName = exampleContainer.Name,
    ///                     Encoding = "Avro",
    ///                     FileNameFormat = "{iothub}/{partition}_{YYYY}_{MM}_{DD}_{HH}_{mm}",
    ///                 },
    ///                 new Azure.Iot.Inputs.IoTHubEndpointArgs
    ///                 {
    ///                     Type = "AzureIotHub.EventHub",
    ///                     ConnectionString = exampleAuthorizationRule.PrimaryConnectionString,
    ///                     Name = "export2",
    ///                 },
    ///             },
    ///             Routes = 
    ///             {
    ///                 new Azure.Iot.Inputs.IoTHubRouteArgs
    ///                 {
    ///                     Name = "export",
    ///                     Source = "DeviceMessages",
    ///                     Condition = "true",
    ///                     EndpointNames = 
    ///                     {
    ///                         "export",
    ///                     },
    ///                     Enabled = true,
    ///                 },
    ///                 new Azure.Iot.Inputs.IoTHubRouteArgs
    ///                 {
    ///                     Name = "export2",
    ///                     Source = "DeviceMessages",
    ///                     Condition = "true",
    ///                     EndpointNames = 
    ///                     {
    ///                         "export2",
    ///                     },
    ///                     Enabled = true,
    ///                 },
    ///             },
    ///             Tags = 
    ///             {
    ///                 { "purpose", "testing" },
    ///             },
    ///         });
    ///     }
    /// 
    /// }
    /// ```
    /// </summary>
    public partial class IoTHub : Pulumi.CustomResource
    {
        /// <summary>
        /// An `endpoint` block as defined below.
        /// </summary>
        [Output("endpoints")]
        public Output<ImmutableArray<Outputs.IoTHubEndpoint>> Endpoints { get; private set; } = null!;

        /// <summary>
        /// The EventHub compatible endpoint for events data
        /// </summary>
        [Output("eventHubEventsEndpoint")]
        public Output<string> EventHubEventsEndpoint { get; private set; } = null!;

        /// <summary>
        /// The EventHub compatible path for events data
        /// </summary>
        [Output("eventHubEventsPath")]
        public Output<string> EventHubEventsPath { get; private set; } = null!;

        /// <summary>
        /// The EventHub compatible endpoint for operational data
        /// </summary>
        [Output("eventHubOperationsEndpoint")]
        public Output<string> EventHubOperationsEndpoint { get; private set; } = null!;

        /// <summary>
        /// The EventHub compatible path for operational data
        /// </summary>
        [Output("eventHubOperationsPath")]
        public Output<string> EventHubOperationsPath { get; private set; } = null!;

        /// <summary>
        /// The number of device-to-cloud partitions used by backing event hubs. Must be between `2` and `128`.
        /// </summary>
        [Output("eventHubPartitionCount")]
        public Output<int> EventHubPartitionCount { get; private set; } = null!;

        /// <summary>
        /// The event hub retention to use in days. Must be between `1` and `7`.
        /// </summary>
        [Output("eventHubRetentionInDays")]
        public Output<int> EventHubRetentionInDays { get; private set; } = null!;

        /// <summary>
        /// A `fallback_route` block as defined below. If the fallback route is enabled, messages that don't match any of the supplied routes are automatically sent to this route. Defaults to messages/events.
        /// </summary>
        [Output("fallbackRoute")]
        public Output<Outputs.IoTHubFallbackRoute> FallbackRoute { get; private set; } = null!;

        /// <summary>
        /// A `file_upload` block as defined below.
        /// </summary>
        [Output("fileUpload")]
        public Output<Outputs.IoTHubFileUpload?> FileUpload { get; private set; } = null!;

        /// <summary>
        /// The hostname of the IotHub Resource.
        /// </summary>
        [Output("hostname")]
        public Output<string> Hostname { get; private set; } = null!;

        /// <summary>
        /// One or more `ip_filter_rule` blocks as defined below.
        /// </summary>
        [Output("ipFilterRules")]
        public Output<ImmutableArray<Outputs.IoTHubIpFilterRule>> IpFilterRules { get; private set; } = null!;

        /// <summary>
        /// Specifies the supported Azure location where the resource has to be createc. Changing this forces a new resource to be created.
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// Specifies the name of the IotHub resource. Changing this forces a new resource to be created.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The name of the resource group under which the IotHub resource has to be created. Changing this forces a new resource to be created.
        /// </summary>
        [Output("resourceGroupName")]
        public Output<string> ResourceGroupName { get; private set; } = null!;

        /// <summary>
        /// A `route` block as defined below.
        /// </summary>
        [Output("routes")]
        public Output<ImmutableArray<Outputs.IoTHubRoute>> Routes { get; private set; } = null!;

        /// <summary>
        /// One or more `shared_access_policy` blocks as defined below.
        /// </summary>
        [Output("sharedAccessPolicies")]
        public Output<ImmutableArray<Outputs.IoTHubSharedAccessPolicy>> SharedAccessPolicies { get; private set; } = null!;

        /// <summary>
        /// A `sku` block as defined below.
        /// </summary>
        [Output("sku")]
        public Output<Outputs.IoTHubSku> Sku { get; private set; } = null!;

        /// <summary>
        /// A mapping of tags to assign to the resource.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// The type of the endpoint. Possible values are `AzureIotHub.StorageContainer`, `AzureIotHub.ServiceBusQueue`, `AzureIotHub.ServiceBusTopic` or `AzureIotHub.EventHub`.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a IoTHub resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public IoTHub(string name, IoTHubArgs args, CustomResourceOptions? options = null)
            : base("azure:iot/ioTHub:IoTHub", name, args ?? new IoTHubArgs(), MakeResourceOptions(options, ""))
        {
        }

        private IoTHub(string name, Input<string> id, IoTHubState? state = null, CustomResourceOptions? options = null)
            : base("azure:iot/ioTHub:IoTHub", name, state, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing IoTHub resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static IoTHub Get(string name, Input<string> id, IoTHubState? state = null, CustomResourceOptions? options = null)
        {
            return new IoTHub(name, id, state, options);
        }
    }

    public sealed class IoTHubArgs : Pulumi.ResourceArgs
    {
        [Input("endpoints")]
        private InputList<Inputs.IoTHubEndpointArgs>? _endpoints;

        /// <summary>
        /// An `endpoint` block as defined below.
        /// </summary>
        public InputList<Inputs.IoTHubEndpointArgs> Endpoints
        {
            get => _endpoints ?? (_endpoints = new InputList<Inputs.IoTHubEndpointArgs>());
            set => _endpoints = value;
        }

        /// <summary>
        /// The number of device-to-cloud partitions used by backing event hubs. Must be between `2` and `128`.
        /// </summary>
        [Input("eventHubPartitionCount")]
        public Input<int>? EventHubPartitionCount { get; set; }

        /// <summary>
        /// The event hub retention to use in days. Must be between `1` and `7`.
        /// </summary>
        [Input("eventHubRetentionInDays")]
        public Input<int>? EventHubRetentionInDays { get; set; }

        /// <summary>
        /// A `fallback_route` block as defined below. If the fallback route is enabled, messages that don't match any of the supplied routes are automatically sent to this route. Defaults to messages/events.
        /// </summary>
        [Input("fallbackRoute")]
        public Input<Inputs.IoTHubFallbackRouteArgs>? FallbackRoute { get; set; }

        /// <summary>
        /// A `file_upload` block as defined below.
        /// </summary>
        [Input("fileUpload")]
        public Input<Inputs.IoTHubFileUploadArgs>? FileUpload { get; set; }

        [Input("ipFilterRules")]
        private InputList<Inputs.IoTHubIpFilterRuleArgs>? _ipFilterRules;

        /// <summary>
        /// One or more `ip_filter_rule` blocks as defined below.
        /// </summary>
        public InputList<Inputs.IoTHubIpFilterRuleArgs> IpFilterRules
        {
            get => _ipFilterRules ?? (_ipFilterRules = new InputList<Inputs.IoTHubIpFilterRuleArgs>());
            set => _ipFilterRules = value;
        }

        /// <summary>
        /// Specifies the supported Azure location where the resource has to be createc. Changing this forces a new resource to be created.
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        /// <summary>
        /// Specifies the name of the IotHub resource. Changing this forces a new resource to be created.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The name of the resource group under which the IotHub resource has to be created. Changing this forces a new resource to be created.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        [Input("routes")]
        private InputList<Inputs.IoTHubRouteArgs>? _routes;

        /// <summary>
        /// A `route` block as defined below.
        /// </summary>
        public InputList<Inputs.IoTHubRouteArgs> Routes
        {
            get => _routes ?? (_routes = new InputList<Inputs.IoTHubRouteArgs>());
            set => _routes = value;
        }

        /// <summary>
        /// A `sku` block as defined below.
        /// </summary>
        [Input("sku", required: true)]
        public Input<Inputs.IoTHubSkuArgs> Sku { get; set; } = null!;

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

        public IoTHubArgs()
        {
        }
    }

    public sealed class IoTHubState : Pulumi.ResourceArgs
    {
        [Input("endpoints")]
        private InputList<Inputs.IoTHubEndpointGetArgs>? _endpoints;

        /// <summary>
        /// An `endpoint` block as defined below.
        /// </summary>
        public InputList<Inputs.IoTHubEndpointGetArgs> Endpoints
        {
            get => _endpoints ?? (_endpoints = new InputList<Inputs.IoTHubEndpointGetArgs>());
            set => _endpoints = value;
        }

        /// <summary>
        /// The EventHub compatible endpoint for events data
        /// </summary>
        [Input("eventHubEventsEndpoint")]
        public Input<string>? EventHubEventsEndpoint { get; set; }

        /// <summary>
        /// The EventHub compatible path for events data
        /// </summary>
        [Input("eventHubEventsPath")]
        public Input<string>? EventHubEventsPath { get; set; }

        /// <summary>
        /// The EventHub compatible endpoint for operational data
        /// </summary>
        [Input("eventHubOperationsEndpoint")]
        public Input<string>? EventHubOperationsEndpoint { get; set; }

        /// <summary>
        /// The EventHub compatible path for operational data
        /// </summary>
        [Input("eventHubOperationsPath")]
        public Input<string>? EventHubOperationsPath { get; set; }

        /// <summary>
        /// The number of device-to-cloud partitions used by backing event hubs. Must be between `2` and `128`.
        /// </summary>
        [Input("eventHubPartitionCount")]
        public Input<int>? EventHubPartitionCount { get; set; }

        /// <summary>
        /// The event hub retention to use in days. Must be between `1` and `7`.
        /// </summary>
        [Input("eventHubRetentionInDays")]
        public Input<int>? EventHubRetentionInDays { get; set; }

        /// <summary>
        /// A `fallback_route` block as defined below. If the fallback route is enabled, messages that don't match any of the supplied routes are automatically sent to this route. Defaults to messages/events.
        /// </summary>
        [Input("fallbackRoute")]
        public Input<Inputs.IoTHubFallbackRouteGetArgs>? FallbackRoute { get; set; }

        /// <summary>
        /// A `file_upload` block as defined below.
        /// </summary>
        [Input("fileUpload")]
        public Input<Inputs.IoTHubFileUploadGetArgs>? FileUpload { get; set; }

        /// <summary>
        /// The hostname of the IotHub Resource.
        /// </summary>
        [Input("hostname")]
        public Input<string>? Hostname { get; set; }

        [Input("ipFilterRules")]
        private InputList<Inputs.IoTHubIpFilterRuleGetArgs>? _ipFilterRules;

        /// <summary>
        /// One or more `ip_filter_rule` blocks as defined below.
        /// </summary>
        public InputList<Inputs.IoTHubIpFilterRuleGetArgs> IpFilterRules
        {
            get => _ipFilterRules ?? (_ipFilterRules = new InputList<Inputs.IoTHubIpFilterRuleGetArgs>());
            set => _ipFilterRules = value;
        }

        /// <summary>
        /// Specifies the supported Azure location where the resource has to be createc. Changing this forces a new resource to be created.
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        /// <summary>
        /// Specifies the name of the IotHub resource. Changing this forces a new resource to be created.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The name of the resource group under which the IotHub resource has to be created. Changing this forces a new resource to be created.
        /// </summary>
        [Input("resourceGroupName")]
        public Input<string>? ResourceGroupName { get; set; }

        [Input("routes")]
        private InputList<Inputs.IoTHubRouteGetArgs>? _routes;

        /// <summary>
        /// A `route` block as defined below.
        /// </summary>
        public InputList<Inputs.IoTHubRouteGetArgs> Routes
        {
            get => _routes ?? (_routes = new InputList<Inputs.IoTHubRouteGetArgs>());
            set => _routes = value;
        }

        [Input("sharedAccessPolicies")]
        private InputList<Inputs.IoTHubSharedAccessPolicyGetArgs>? _sharedAccessPolicies;

        /// <summary>
        /// One or more `shared_access_policy` blocks as defined below.
        /// </summary>
        public InputList<Inputs.IoTHubSharedAccessPolicyGetArgs> SharedAccessPolicies
        {
            get => _sharedAccessPolicies ?? (_sharedAccessPolicies = new InputList<Inputs.IoTHubSharedAccessPolicyGetArgs>());
            set => _sharedAccessPolicies = value;
        }

        /// <summary>
        /// A `sku` block as defined below.
        /// </summary>
        [Input("sku")]
        public Input<Inputs.IoTHubSkuGetArgs>? Sku { get; set; }

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
        /// The type of the endpoint. Possible values are `AzureIotHub.StorageContainer`, `AzureIotHub.ServiceBusQueue`, `AzureIotHub.ServiceBusTopic` or `AzureIotHub.EventHub`.
        /// </summary>
        [Input("type")]
        public Input<string>? Type { get; set; }

        public IoTHubState()
        {
        }
    }
}
