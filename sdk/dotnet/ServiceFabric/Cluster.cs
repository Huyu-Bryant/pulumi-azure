// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.ServiceFabric
{
    /// <summary>
    /// Manages a Service Fabric Cluster.
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
    ///             Location = "West Europe",
    ///         });
    ///         var exampleCluster = new Azure.ServiceFabric.Cluster("exampleCluster", new Azure.ServiceFabric.ClusterArgs
    ///         {
    ///             ResourceGroupName = exampleResourceGroup.Name,
    ///             Location = exampleResourceGroup.Location,
    ///             ReliabilityLevel = "Bronze",
    ///             UpgradeMode = "Manual",
    ///             ClusterCodeVersion = "6.5.639.9590",
    ///             VmImage = "Windows",
    ///             ManagementEndpoint = "https://example:80",
    ///             NodeTypes = 
    ///             {
    ///                 new Azure.ServiceFabric.Inputs.ClusterNodeTypeArgs
    ///                 {
    ///                     Name = "first",
    ///                     InstanceCount = 3,
    ///                     IsPrimary = true,
    ///                     ClientEndpointPort = 2020,
    ///                     HttpEndpointPort = 80,
    ///                 },
    ///             },
    ///         });
    ///     }
    /// 
    /// }
    /// ```
    /// </summary>
    public partial class Cluster : Pulumi.CustomResource
    {
        /// <summary>
        /// A List of one or more features which should be enabled, such as `DnsService`.
        /// </summary>
        [Output("addOnFeatures")]
        public Output<ImmutableArray<string>> AddOnFeatures { get; private set; } = null!;

        /// <summary>
        /// An `azure_active_directory` block as defined below.
        /// </summary>
        [Output("azureActiveDirectory")]
        public Output<Outputs.ClusterAzureActiveDirectory?> AzureActiveDirectory { get; private set; } = null!;

        /// <summary>
        /// A `certificate` block as defined below. Conflicts with `certificate_common_names`.
        /// </summary>
        [Output("certificate")]
        public Output<Outputs.ClusterCertificate?> Certificate { get; private set; } = null!;

        /// <summary>
        /// A `certificate_common_names` block as defined below. Conflicts with `certificate`.
        /// </summary>
        [Output("certificateCommonNames")]
        public Output<Outputs.ClusterCertificateCommonNames?> CertificateCommonNames { get; private set; } = null!;

        /// <summary>
        /// A `client_certificate_common_name` block as defined below.
        /// </summary>
        [Output("clientCertificateCommonNames")]
        public Output<ImmutableArray<Outputs.ClusterClientCertificateCommonName>> ClientCertificateCommonNames { get; private set; } = null!;

        /// <summary>
        /// One or two `client_certificate_thumbprint` blocks as defined below.
        /// </summary>
        [Output("clientCertificateThumbprints")]
        public Output<ImmutableArray<Outputs.ClusterClientCertificateThumbprint>> ClientCertificateThumbprints { get; private set; } = null!;

        /// <summary>
        /// Required if Upgrade Mode set to `Manual`, Specifies the Version of the Cluster Code of the cluster.
        /// </summary>
        [Output("clusterCodeVersion")]
        public Output<string> ClusterCodeVersion { get; private set; } = null!;

        /// <summary>
        /// The Cluster Endpoint for this Service Fabric Cluster.
        /// </summary>
        [Output("clusterEndpoint")]
        public Output<string> ClusterEndpoint { get; private set; } = null!;

        /// <summary>
        /// A `diagnostics_config` block as defined below. Changing this forces a new resource to be created.
        /// </summary>
        [Output("diagnosticsConfig")]
        public Output<Outputs.ClusterDiagnosticsConfig?> DiagnosticsConfig { get; private set; } = null!;

        /// <summary>
        /// One or more `fabric_settings` blocks as defined below.
        /// </summary>
        [Output("fabricSettings")]
        public Output<ImmutableArray<Outputs.ClusterFabricSetting>> FabricSettings { get; private set; } = null!;

        /// <summary>
        /// Specifies the Azure Region where the Service Fabric Cluster should exist. Changing this forces a new resource to be created.
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// Specifies the Management Endpoint of the cluster such as `http://example.com`. Changing this forces a new resource to be created.
        /// </summary>
        [Output("managementEndpoint")]
        public Output<string> ManagementEndpoint { get; private set; } = null!;

        /// <summary>
        /// The name of the Service Fabric Cluster. Changing this forces a new resource to be created.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// One or more `node_type` blocks as defined below.
        /// </summary>
        [Output("nodeTypes")]
        public Output<ImmutableArray<Outputs.ClusterNodeType>> NodeTypes { get; private set; } = null!;

        /// <summary>
        /// Specifies the Reliability Level of the Cluster. Possible values include `None`, `Bronze`, `Silver`, `Gold` and `Platinum`.
        /// </summary>
        [Output("reliabilityLevel")]
        public Output<string> ReliabilityLevel { get; private set; } = null!;

        /// <summary>
        /// The name of the Resource Group in which the Service Fabric Cluster exists. Changing this forces a new resource to be created.
        /// </summary>
        [Output("resourceGroupName")]
        public Output<string> ResourceGroupName { get; private set; } = null!;

        /// <summary>
        /// A `reverse_proxy_certificate` block as defined below.
        /// </summary>
        [Output("reverseProxyCertificate")]
        public Output<Outputs.ClusterReverseProxyCertificate?> ReverseProxyCertificate { get; private set; } = null!;

        /// <summary>
        /// A mapping of tags to assign to the resource.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// Specifies the Upgrade Mode of the cluster. Possible values are `Automatic` or `Manual`.
        /// </summary>
        [Output("upgradeMode")]
        public Output<string> UpgradeMode { get; private set; } = null!;

        /// <summary>
        /// Specifies the Image expected for the Service Fabric Cluster, such as `Windows`. Changing this forces a new resource to be created.
        /// </summary>
        [Output("vmImage")]
        public Output<string> VmImage { get; private set; } = null!;


        /// <summary>
        /// Create a Cluster resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Cluster(string name, ClusterArgs args, CustomResourceOptions? options = null)
            : base("azure:servicefabric/cluster:Cluster", name, args ?? new ClusterArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Cluster(string name, Input<string> id, ClusterState? state = null, CustomResourceOptions? options = null)
            : base("azure:servicefabric/cluster:Cluster", name, state, MakeResourceOptions(options, id))
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
        /// Get an existing Cluster resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Cluster Get(string name, Input<string> id, ClusterState? state = null, CustomResourceOptions? options = null)
        {
            return new Cluster(name, id, state, options);
        }
    }

    public sealed class ClusterArgs : Pulumi.ResourceArgs
    {
        [Input("addOnFeatures")]
        private InputList<string>? _addOnFeatures;

        /// <summary>
        /// A List of one or more features which should be enabled, such as `DnsService`.
        /// </summary>
        public InputList<string> AddOnFeatures
        {
            get => _addOnFeatures ?? (_addOnFeatures = new InputList<string>());
            set => _addOnFeatures = value;
        }

        /// <summary>
        /// An `azure_active_directory` block as defined below.
        /// </summary>
        [Input("azureActiveDirectory")]
        public Input<Inputs.ClusterAzureActiveDirectoryArgs>? AzureActiveDirectory { get; set; }

        /// <summary>
        /// A `certificate` block as defined below. Conflicts with `certificate_common_names`.
        /// </summary>
        [Input("certificate")]
        public Input<Inputs.ClusterCertificateArgs>? Certificate { get; set; }

        /// <summary>
        /// A `certificate_common_names` block as defined below. Conflicts with `certificate`.
        /// </summary>
        [Input("certificateCommonNames")]
        public Input<Inputs.ClusterCertificateCommonNamesArgs>? CertificateCommonNames { get; set; }

        [Input("clientCertificateCommonNames")]
        private InputList<Inputs.ClusterClientCertificateCommonNameArgs>? _clientCertificateCommonNames;

        /// <summary>
        /// A `client_certificate_common_name` block as defined below.
        /// </summary>
        public InputList<Inputs.ClusterClientCertificateCommonNameArgs> ClientCertificateCommonNames
        {
            get => _clientCertificateCommonNames ?? (_clientCertificateCommonNames = new InputList<Inputs.ClusterClientCertificateCommonNameArgs>());
            set => _clientCertificateCommonNames = value;
        }

        [Input("clientCertificateThumbprints")]
        private InputList<Inputs.ClusterClientCertificateThumbprintArgs>? _clientCertificateThumbprints;

        /// <summary>
        /// One or two `client_certificate_thumbprint` blocks as defined below.
        /// </summary>
        public InputList<Inputs.ClusterClientCertificateThumbprintArgs> ClientCertificateThumbprints
        {
            get => _clientCertificateThumbprints ?? (_clientCertificateThumbprints = new InputList<Inputs.ClusterClientCertificateThumbprintArgs>());
            set => _clientCertificateThumbprints = value;
        }

        /// <summary>
        /// Required if Upgrade Mode set to `Manual`, Specifies the Version of the Cluster Code of the cluster.
        /// </summary>
        [Input("clusterCodeVersion")]
        public Input<string>? ClusterCodeVersion { get; set; }

        /// <summary>
        /// A `diagnostics_config` block as defined below. Changing this forces a new resource to be created.
        /// </summary>
        [Input("diagnosticsConfig")]
        public Input<Inputs.ClusterDiagnosticsConfigArgs>? DiagnosticsConfig { get; set; }

        [Input("fabricSettings")]
        private InputList<Inputs.ClusterFabricSettingArgs>? _fabricSettings;

        /// <summary>
        /// One or more `fabric_settings` blocks as defined below.
        /// </summary>
        public InputList<Inputs.ClusterFabricSettingArgs> FabricSettings
        {
            get => _fabricSettings ?? (_fabricSettings = new InputList<Inputs.ClusterFabricSettingArgs>());
            set => _fabricSettings = value;
        }

        /// <summary>
        /// Specifies the Azure Region where the Service Fabric Cluster should exist. Changing this forces a new resource to be created.
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        /// <summary>
        /// Specifies the Management Endpoint of the cluster such as `http://example.com`. Changing this forces a new resource to be created.
        /// </summary>
        [Input("managementEndpoint", required: true)]
        public Input<string> ManagementEndpoint { get; set; } = null!;

        /// <summary>
        /// The name of the Service Fabric Cluster. Changing this forces a new resource to be created.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        [Input("nodeTypes", required: true)]
        private InputList<Inputs.ClusterNodeTypeArgs>? _nodeTypes;

        /// <summary>
        /// One or more `node_type` blocks as defined below.
        /// </summary>
        public InputList<Inputs.ClusterNodeTypeArgs> NodeTypes
        {
            get => _nodeTypes ?? (_nodeTypes = new InputList<Inputs.ClusterNodeTypeArgs>());
            set => _nodeTypes = value;
        }

        /// <summary>
        /// Specifies the Reliability Level of the Cluster. Possible values include `None`, `Bronze`, `Silver`, `Gold` and `Platinum`.
        /// </summary>
        [Input("reliabilityLevel", required: true)]
        public Input<string> ReliabilityLevel { get; set; } = null!;

        /// <summary>
        /// The name of the Resource Group in which the Service Fabric Cluster exists. Changing this forces a new resource to be created.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// A `reverse_proxy_certificate` block as defined below.
        /// </summary>
        [Input("reverseProxyCertificate")]
        public Input<Inputs.ClusterReverseProxyCertificateArgs>? ReverseProxyCertificate { get; set; }

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
        /// Specifies the Upgrade Mode of the cluster. Possible values are `Automatic` or `Manual`.
        /// </summary>
        [Input("upgradeMode", required: true)]
        public Input<string> UpgradeMode { get; set; } = null!;

        /// <summary>
        /// Specifies the Image expected for the Service Fabric Cluster, such as `Windows`. Changing this forces a new resource to be created.
        /// </summary>
        [Input("vmImage", required: true)]
        public Input<string> VmImage { get; set; } = null!;

        public ClusterArgs()
        {
        }
    }

    public sealed class ClusterState : Pulumi.ResourceArgs
    {
        [Input("addOnFeatures")]
        private InputList<string>? _addOnFeatures;

        /// <summary>
        /// A List of one or more features which should be enabled, such as `DnsService`.
        /// </summary>
        public InputList<string> AddOnFeatures
        {
            get => _addOnFeatures ?? (_addOnFeatures = new InputList<string>());
            set => _addOnFeatures = value;
        }

        /// <summary>
        /// An `azure_active_directory` block as defined below.
        /// </summary>
        [Input("azureActiveDirectory")]
        public Input<Inputs.ClusterAzureActiveDirectoryGetArgs>? AzureActiveDirectory { get; set; }

        /// <summary>
        /// A `certificate` block as defined below. Conflicts with `certificate_common_names`.
        /// </summary>
        [Input("certificate")]
        public Input<Inputs.ClusterCertificateGetArgs>? Certificate { get; set; }

        /// <summary>
        /// A `certificate_common_names` block as defined below. Conflicts with `certificate`.
        /// </summary>
        [Input("certificateCommonNames")]
        public Input<Inputs.ClusterCertificateCommonNamesGetArgs>? CertificateCommonNames { get; set; }

        [Input("clientCertificateCommonNames")]
        private InputList<Inputs.ClusterClientCertificateCommonNameGetArgs>? _clientCertificateCommonNames;

        /// <summary>
        /// A `client_certificate_common_name` block as defined below.
        /// </summary>
        public InputList<Inputs.ClusterClientCertificateCommonNameGetArgs> ClientCertificateCommonNames
        {
            get => _clientCertificateCommonNames ?? (_clientCertificateCommonNames = new InputList<Inputs.ClusterClientCertificateCommonNameGetArgs>());
            set => _clientCertificateCommonNames = value;
        }

        [Input("clientCertificateThumbprints")]
        private InputList<Inputs.ClusterClientCertificateThumbprintGetArgs>? _clientCertificateThumbprints;

        /// <summary>
        /// One or two `client_certificate_thumbprint` blocks as defined below.
        /// </summary>
        public InputList<Inputs.ClusterClientCertificateThumbprintGetArgs> ClientCertificateThumbprints
        {
            get => _clientCertificateThumbprints ?? (_clientCertificateThumbprints = new InputList<Inputs.ClusterClientCertificateThumbprintGetArgs>());
            set => _clientCertificateThumbprints = value;
        }

        /// <summary>
        /// Required if Upgrade Mode set to `Manual`, Specifies the Version of the Cluster Code of the cluster.
        /// </summary>
        [Input("clusterCodeVersion")]
        public Input<string>? ClusterCodeVersion { get; set; }

        /// <summary>
        /// The Cluster Endpoint for this Service Fabric Cluster.
        /// </summary>
        [Input("clusterEndpoint")]
        public Input<string>? ClusterEndpoint { get; set; }

        /// <summary>
        /// A `diagnostics_config` block as defined below. Changing this forces a new resource to be created.
        /// </summary>
        [Input("diagnosticsConfig")]
        public Input<Inputs.ClusterDiagnosticsConfigGetArgs>? DiagnosticsConfig { get; set; }

        [Input("fabricSettings")]
        private InputList<Inputs.ClusterFabricSettingGetArgs>? _fabricSettings;

        /// <summary>
        /// One or more `fabric_settings` blocks as defined below.
        /// </summary>
        public InputList<Inputs.ClusterFabricSettingGetArgs> FabricSettings
        {
            get => _fabricSettings ?? (_fabricSettings = new InputList<Inputs.ClusterFabricSettingGetArgs>());
            set => _fabricSettings = value;
        }

        /// <summary>
        /// Specifies the Azure Region where the Service Fabric Cluster should exist. Changing this forces a new resource to be created.
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        /// <summary>
        /// Specifies the Management Endpoint of the cluster such as `http://example.com`. Changing this forces a new resource to be created.
        /// </summary>
        [Input("managementEndpoint")]
        public Input<string>? ManagementEndpoint { get; set; }

        /// <summary>
        /// The name of the Service Fabric Cluster. Changing this forces a new resource to be created.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        [Input("nodeTypes")]
        private InputList<Inputs.ClusterNodeTypeGetArgs>? _nodeTypes;

        /// <summary>
        /// One or more `node_type` blocks as defined below.
        /// </summary>
        public InputList<Inputs.ClusterNodeTypeGetArgs> NodeTypes
        {
            get => _nodeTypes ?? (_nodeTypes = new InputList<Inputs.ClusterNodeTypeGetArgs>());
            set => _nodeTypes = value;
        }

        /// <summary>
        /// Specifies the Reliability Level of the Cluster. Possible values include `None`, `Bronze`, `Silver`, `Gold` and `Platinum`.
        /// </summary>
        [Input("reliabilityLevel")]
        public Input<string>? ReliabilityLevel { get; set; }

        /// <summary>
        /// The name of the Resource Group in which the Service Fabric Cluster exists. Changing this forces a new resource to be created.
        /// </summary>
        [Input("resourceGroupName")]
        public Input<string>? ResourceGroupName { get; set; }

        /// <summary>
        /// A `reverse_proxy_certificate` block as defined below.
        /// </summary>
        [Input("reverseProxyCertificate")]
        public Input<Inputs.ClusterReverseProxyCertificateGetArgs>? ReverseProxyCertificate { get; set; }

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
        /// Specifies the Upgrade Mode of the cluster. Possible values are `Automatic` or `Manual`.
        /// </summary>
        [Input("upgradeMode")]
        public Input<string>? UpgradeMode { get; set; }

        /// <summary>
        /// Specifies the Image expected for the Service Fabric Cluster, such as `Windows`. Changing this forces a new resource to be created.
        /// </summary>
        [Input("vmImage")]
        public Input<string>? VmImage { get; set; }

        public ClusterState()
        {
        }
    }
}
