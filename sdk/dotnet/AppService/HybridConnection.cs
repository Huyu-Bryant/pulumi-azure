// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.AppService
{
    /// <summary>
    /// Manages an App Service Hybrid Connection for an existing App Service, Relay and Service Bus.
    /// 
    /// ## Example Usage
    /// 
    /// This example provisions an App Service, a Relay Hybrid Connection, and a Service Bus using their outputs to create the App Service Hybrid Connection.
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
    ///             Location = "West Europe",
    ///         });
    ///         var examplePlan = new Azure.AppService.Plan("examplePlan", new Azure.AppService.PlanArgs
    ///         {
    ///             Location = exampleResourceGroup.Location,
    ///             ResourceGroupName = exampleResourceGroup.Name,
    ///             Sku = new Azure.AppService.Inputs.PlanSkuArgs
    ///             {
    ///                 Tier = "Standard",
    ///                 Size = "S1",
    ///             },
    ///         });
    ///         var exampleAppService = new Azure.AppService.AppService("exampleAppService", new Azure.AppService.AppServiceArgs
    ///         {
    ///             Location = exampleResourceGroup.Location,
    ///             ResourceGroupName = exampleResourceGroup.Name,
    ///             AppServicePlanId = examplePlan.Id,
    ///         });
    ///         var exampleNamespace = new Azure.Relay.Namespace("exampleNamespace", new Azure.Relay.NamespaceArgs
    ///         {
    ///             Location = exampleResourceGroup.Location,
    ///             ResourceGroupName = exampleResourceGroup.Name,
    ///             SkuName = "Standard",
    ///         });
    ///         var exampleHybridConnection = new Azure.Relay.HybridConnection("exampleHybridConnection", new Azure.Relay.HybridConnectionArgs
    ///         {
    ///             ResourceGroupName = exampleResourceGroup.Name,
    ///             RelayNamespaceName = exampleNamespace.Name,
    ///             UserMetadata = "examplemetadata",
    ///         });
    ///         var exampleAppservice_hybridConnectionHybridConnection = new Azure.AppService.HybridConnection("exampleAppservice/hybridConnectionHybridConnection", new Azure.AppService.HybridConnectionArgs
    ///         {
    ///             AppServiceName = exampleAppService.Name,
    ///             ResourceGroupName = exampleResourceGroup.Name,
    ///             RelayId = exampleHybridConnection.Id,
    ///             Hostname = "testhostname.example",
    ///             Port = 8080,
    ///             SendKeyName = "exampleSharedAccessKey",
    ///         });
    ///     }
    /// 
    /// }
    /// ```
    /// </summary>
    public partial class HybridConnection : Pulumi.CustomResource
    {
        /// <summary>
        /// Specifies the name of the App Service. Changing this forces a new resource to be created.
        /// </summary>
        [Output("appServiceName")]
        public Output<string> AppServiceName { get; private set; } = null!;

        /// <summary>
        /// The hostname of the endpoint.
        /// </summary>
        [Output("hostname")]
        public Output<string> Hostname { get; private set; } = null!;

        /// <summary>
        /// The name of the Relay Namespace.
        /// </summary>
        [Output("namespaceName")]
        public Output<string> NamespaceName { get; private set; } = null!;

        /// <summary>
        /// The port of the endpoint.
        /// </summary>
        [Output("port")]
        public Output<int> Port { get; private set; } = null!;

        /// <summary>
        /// The Resource ID of Service Bus relay.  Changing this forces a new resource to be created.
        /// </summary>
        [Output("relayId")]
        public Output<string> RelayId { get; private set; } = null!;

        [Output("relayName")]
        public Output<string> RelayName { get; private set; } = null!;

        /// <summary>
        /// The name of the resource group in which to create the App Service.  Changing this forces a new resource to be created.
        /// </summary>
        [Output("resourceGroupName")]
        public Output<string> ResourceGroupName { get; private set; } = null!;

        /// <summary>
        /// The name of the Service Bus key.
        /// </summary>
        [Output("sendKeyName")]
        public Output<string?> SendKeyName { get; private set; } = null!;

        /// <summary>
        /// The value of the Service Bus Primary Access key.
        /// </summary>
        [Output("sendKeyValue")]
        public Output<string> SendKeyValue { get; private set; } = null!;

        /// <summary>
        /// The name of the Service Bus namespace.
        /// </summary>
        [Output("serviceBusNamespace")]
        public Output<string> ServiceBusNamespace { get; private set; } = null!;

        /// <summary>
        /// The suffix for the service bus endpoint.
        /// </summary>
        [Output("serviceBusSuffix")]
        public Output<string> ServiceBusSuffix { get; private set; } = null!;


        /// <summary>
        /// Create a HybridConnection resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public HybridConnection(string name, HybridConnectionArgs args, CustomResourceOptions? options = null)
            : base("azure:appservice/hybridConnection:HybridConnection", name, args ?? new HybridConnectionArgs(), MakeResourceOptions(options, ""))
        {
        }

        private HybridConnection(string name, Input<string> id, HybridConnectionState? state = null, CustomResourceOptions? options = null)
            : base("azure:appservice/hybridConnection:HybridConnection", name, state, MakeResourceOptions(options, id))
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
        /// Get an existing HybridConnection resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static HybridConnection Get(string name, Input<string> id, HybridConnectionState? state = null, CustomResourceOptions? options = null)
        {
            return new HybridConnection(name, id, state, options);
        }
    }

    public sealed class HybridConnectionArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Specifies the name of the App Service. Changing this forces a new resource to be created.
        /// </summary>
        [Input("appServiceName", required: true)]
        public Input<string> AppServiceName { get; set; } = null!;

        /// <summary>
        /// The hostname of the endpoint.
        /// </summary>
        [Input("hostname", required: true)]
        public Input<string> Hostname { get; set; } = null!;

        /// <summary>
        /// The port of the endpoint.
        /// </summary>
        [Input("port", required: true)]
        public Input<int> Port { get; set; } = null!;

        /// <summary>
        /// The Resource ID of Service Bus relay.  Changing this forces a new resource to be created.
        /// </summary>
        [Input("relayId", required: true)]
        public Input<string> RelayId { get; set; } = null!;

        /// <summary>
        /// The name of the resource group in which to create the App Service.  Changing this forces a new resource to be created.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the Service Bus key.
        /// </summary>
        [Input("sendKeyName")]
        public Input<string>? SendKeyName { get; set; }

        public HybridConnectionArgs()
        {
        }
    }

    public sealed class HybridConnectionState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Specifies the name of the App Service. Changing this forces a new resource to be created.
        /// </summary>
        [Input("appServiceName")]
        public Input<string>? AppServiceName { get; set; }

        /// <summary>
        /// The hostname of the endpoint.
        /// </summary>
        [Input("hostname")]
        public Input<string>? Hostname { get; set; }

        /// <summary>
        /// The name of the Relay Namespace.
        /// </summary>
        [Input("namespaceName")]
        public Input<string>? NamespaceName { get; set; }

        /// <summary>
        /// The port of the endpoint.
        /// </summary>
        [Input("port")]
        public Input<int>? Port { get; set; }

        /// <summary>
        /// The Resource ID of Service Bus relay.  Changing this forces a new resource to be created.
        /// </summary>
        [Input("relayId")]
        public Input<string>? RelayId { get; set; }

        [Input("relayName")]
        public Input<string>? RelayName { get; set; }

        /// <summary>
        /// The name of the resource group in which to create the App Service.  Changing this forces a new resource to be created.
        /// </summary>
        [Input("resourceGroupName")]
        public Input<string>? ResourceGroupName { get; set; }

        /// <summary>
        /// The name of the Service Bus key.
        /// </summary>
        [Input("sendKeyName")]
        public Input<string>? SendKeyName { get; set; }

        /// <summary>
        /// The value of the Service Bus Primary Access key.
        /// </summary>
        [Input("sendKeyValue")]
        public Input<string>? SendKeyValue { get; set; }

        /// <summary>
        /// The name of the Service Bus namespace.
        /// </summary>
        [Input("serviceBusNamespace")]
        public Input<string>? ServiceBusNamespace { get; set; }

        /// <summary>
        /// The suffix for the service bus endpoint.
        /// </summary>
        [Input("serviceBusSuffix")]
        public Input<string>? ServiceBusSuffix { get; set; }

        public HybridConnectionState()
        {
        }
    }
}