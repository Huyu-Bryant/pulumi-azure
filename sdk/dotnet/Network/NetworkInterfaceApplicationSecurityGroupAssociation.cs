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
    /// Manages the association between a Network Interface and a Application Security Group.
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
    ///         var exampleVirtualNetwork = new Azure.Network.VirtualNetwork("exampleVirtualNetwork", new Azure.Network.VirtualNetworkArgs
    ///         {
    ///             AddressSpaces = 
    ///             {
    ///                 "10.0.0.0/16",
    ///             },
    ///             Location = exampleResourceGroup.Location,
    ///             ResourceGroupName = exampleResourceGroup.Name,
    ///         });
    ///         var exampleSubnet = new Azure.Network.Subnet("exampleSubnet", new Azure.Network.SubnetArgs
    ///         {
    ///             ResourceGroupName = exampleResourceGroup.Name,
    ///             VirtualNetworkName = exampleVirtualNetwork.Name,
    ///             AddressPrefix = "10.0.1.0/24",
    ///         });
    ///         var exampleApplicationSecurityGroup = new Azure.Network.ApplicationSecurityGroup("exampleApplicationSecurityGroup", new Azure.Network.ApplicationSecurityGroupArgs
    ///         {
    ///             Location = exampleResourceGroup.Location,
    ///             ResourceGroupName = exampleResourceGroup.Name,
    ///         });
    ///         var exampleNetworkInterface = new Azure.Network.NetworkInterface("exampleNetworkInterface", new Azure.Network.NetworkInterfaceArgs
    ///         {
    ///             Location = exampleResourceGroup.Location,
    ///             ResourceGroupName = exampleResourceGroup.Name,
    ///             IpConfigurations = 
    ///             {
    ///                 new Azure.Network.Inputs.NetworkInterfaceIpConfigurationArgs
    ///                 {
    ///                     Name = "testconfiguration1",
    ///                     SubnetId = exampleSubnet.Id,
    ///                     PrivateIpAddressAllocation = "Dynamic",
    ///                     ApplicationSecurityGroupIds = 
    ///                     {
    ///                         exampleApplicationSecurityGroup.Id,
    ///                     },
    ///                 },
    ///             },
    ///         });
    ///         var exampleNetworkInterfaceApplicationSecurityGroupAssociation = new Azure.Network.NetworkInterfaceApplicationSecurityGroupAssociation("exampleNetworkInterfaceApplicationSecurityGroupAssociation", new Azure.Network.NetworkInterfaceApplicationSecurityGroupAssociationArgs
    ///         {
    ///             NetworkInterfaceId = exampleNetworkInterface.Id,
    ///             ApplicationSecurityGroupId = exampleApplicationSecurityGroup.Id,
    ///         });
    ///     }
    /// 
    /// }
    /// ```
    /// </summary>
    public partial class NetworkInterfaceApplicationSecurityGroupAssociation : Pulumi.CustomResource
    {
        /// <summary>
        /// The ID of the Application Security Group which this Network Interface which should be connected to. Changing this forces a new resource to be created.
        /// </summary>
        [Output("applicationSecurityGroupId")]
        public Output<string> ApplicationSecurityGroupId { get; private set; } = null!;

        /// <summary>
        /// The ID of the Network Interface. Changing this forces a new resource to be created.
        /// </summary>
        [Output("networkInterfaceId")]
        public Output<string> NetworkInterfaceId { get; private set; } = null!;


        /// <summary>
        /// Create a NetworkInterfaceApplicationSecurityGroupAssociation resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public NetworkInterfaceApplicationSecurityGroupAssociation(string name, NetworkInterfaceApplicationSecurityGroupAssociationArgs args, CustomResourceOptions? options = null)
            : base("azure:network/networkInterfaceApplicationSecurityGroupAssociation:NetworkInterfaceApplicationSecurityGroupAssociation", name, args ?? new NetworkInterfaceApplicationSecurityGroupAssociationArgs(), MakeResourceOptions(options, ""))
        {
        }

        private NetworkInterfaceApplicationSecurityGroupAssociation(string name, Input<string> id, NetworkInterfaceApplicationSecurityGroupAssociationState? state = null, CustomResourceOptions? options = null)
            : base("azure:network/networkInterfaceApplicationSecurityGroupAssociation:NetworkInterfaceApplicationSecurityGroupAssociation", name, state, MakeResourceOptions(options, id))
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
        /// Get an existing NetworkInterfaceApplicationSecurityGroupAssociation resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static NetworkInterfaceApplicationSecurityGroupAssociation Get(string name, Input<string> id, NetworkInterfaceApplicationSecurityGroupAssociationState? state = null, CustomResourceOptions? options = null)
        {
            return new NetworkInterfaceApplicationSecurityGroupAssociation(name, id, state, options);
        }
    }

    public sealed class NetworkInterfaceApplicationSecurityGroupAssociationArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The ID of the Application Security Group which this Network Interface which should be connected to. Changing this forces a new resource to be created.
        /// </summary>
        [Input("applicationSecurityGroupId", required: true)]
        public Input<string> ApplicationSecurityGroupId { get; set; } = null!;

        /// <summary>
        /// The ID of the Network Interface. Changing this forces a new resource to be created.
        /// </summary>
        [Input("networkInterfaceId", required: true)]
        public Input<string> NetworkInterfaceId { get; set; } = null!;

        public NetworkInterfaceApplicationSecurityGroupAssociationArgs()
        {
        }
    }

    public sealed class NetworkInterfaceApplicationSecurityGroupAssociationState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The ID of the Application Security Group which this Network Interface which should be connected to. Changing this forces a new resource to be created.
        /// </summary>
        [Input("applicationSecurityGroupId")]
        public Input<string>? ApplicationSecurityGroupId { get; set; }

        /// <summary>
        /// The ID of the Network Interface. Changing this forces a new resource to be created.
        /// </summary>
        [Input("networkInterfaceId")]
        public Input<string>? NetworkInterfaceId { get; set; }

        public NetworkInterfaceApplicationSecurityGroupAssociationState()
        {
        }
    }
}
