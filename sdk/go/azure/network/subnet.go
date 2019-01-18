// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package network

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manages a subnet. Subnets represent network segments within the IP space defined by the virtual network.
// 
// > **NOTE on Virtual Networks and Subnet's:** Terraform currently
// provides both a standalone Subnet resource, and allows for Subnets to be defined in-line within the Virtual Network resource.
// At this time you cannot use a Virtual Network with in-line Subnets in conjunction with any Subnet resources. Doing so will cause a conflict of Subnet configurations and will overwrite Subnet's.
type Subnet struct {
	s *pulumi.ResourceState
}

// NewSubnet registers a new resource with the given unique name, arguments, and options.
func NewSubnet(ctx *pulumi.Context,
	name string, args *SubnetArgs, opts ...pulumi.ResourceOpt) (*Subnet, error) {
	if args == nil || args.AddressPrefix == nil {
		return nil, errors.New("missing required argument 'AddressPrefix'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.VirtualNetworkName == nil {
		return nil, errors.New("missing required argument 'VirtualNetworkName'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["addressPrefix"] = nil
		inputs["delegations"] = nil
		inputs["ipConfigurations"] = nil
		inputs["name"] = nil
		inputs["networkSecurityGroupId"] = nil
		inputs["resourceGroupName"] = nil
		inputs["routeTableId"] = nil
		inputs["serviceEndpoints"] = nil
		inputs["virtualNetworkName"] = nil
	} else {
		inputs["addressPrefix"] = args.AddressPrefix
		inputs["delegations"] = args.Delegations
		inputs["ipConfigurations"] = args.IpConfigurations
		inputs["name"] = args.Name
		inputs["networkSecurityGroupId"] = args.NetworkSecurityGroupId
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["routeTableId"] = args.RouteTableId
		inputs["serviceEndpoints"] = args.ServiceEndpoints
		inputs["virtualNetworkName"] = args.VirtualNetworkName
	}
	s, err := ctx.RegisterResource("azure:network/subnet:Subnet", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Subnet{s: s}, nil
}

// GetSubnet gets an existing Subnet resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetSubnet(ctx *pulumi.Context,
	name string, id pulumi.ID, state *SubnetState, opts ...pulumi.ResourceOpt) (*Subnet, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["addressPrefix"] = state.AddressPrefix
		inputs["delegations"] = state.Delegations
		inputs["ipConfigurations"] = state.IpConfigurations
		inputs["name"] = state.Name
		inputs["networkSecurityGroupId"] = state.NetworkSecurityGroupId
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["routeTableId"] = state.RouteTableId
		inputs["serviceEndpoints"] = state.ServiceEndpoints
		inputs["virtualNetworkName"] = state.VirtualNetworkName
	}
	s, err := ctx.ReadResource("azure:network/subnet:Subnet", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Subnet{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *Subnet) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Subnet) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// The address prefix to use for the subnet.
func (r *Subnet) AddressPrefix() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["addressPrefix"])
}

// One or more `delegation` blocks as defined below.
func (r *Subnet) Delegations() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["delegations"])
}

// The collection of IP Configurations with IPs within this subnet.
func (r *Subnet) IpConfigurations() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["ipConfigurations"])
}

// The name of the subnet. Changing this forces a new resource to be created.
func (r *Subnet) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// The ID of the Network Security Group to associate with the subnet.
func (r *Subnet) NetworkSecurityGroupId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["networkSecurityGroupId"])
}

// The name of the resource group in which to create the subnet. Changing this forces a new resource to be created.
func (r *Subnet) ResourceGroupName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["resourceGroupName"])
}

// The ID of the Route Table to associate with the subnet.
func (r *Subnet) RouteTableId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["routeTableId"])
}

// The list of Service endpoints to associate with the subnet. Possible values include: `Microsoft.AzureActiveDirectory`, `Microsoft.AzureCosmosDB`, `Microsoft.EventHub`, `Microsoft.KeyVault`, `Microsoft.ServiceBus`, `Microsoft.Sql` and `Microsoft.Storage`.
func (r *Subnet) ServiceEndpoints() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["serviceEndpoints"])
}

// The name of the virtual network to which to attach the subnet. Changing this forces a new resource to be created.
func (r *Subnet) VirtualNetworkName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["virtualNetworkName"])
}

// Input properties used for looking up and filtering Subnet resources.
type SubnetState struct {
	// The address prefix to use for the subnet.
	AddressPrefix interface{}
	// One or more `delegation` blocks as defined below.
	Delegations interface{}
	// The collection of IP Configurations with IPs within this subnet.
	IpConfigurations interface{}
	// The name of the subnet. Changing this forces a new resource to be created.
	Name interface{}
	// The ID of the Network Security Group to associate with the subnet.
	NetworkSecurityGroupId interface{}
	// The name of the resource group in which to create the subnet. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// The ID of the Route Table to associate with the subnet.
	RouteTableId interface{}
	// The list of Service endpoints to associate with the subnet. Possible values include: `Microsoft.AzureActiveDirectory`, `Microsoft.AzureCosmosDB`, `Microsoft.EventHub`, `Microsoft.KeyVault`, `Microsoft.ServiceBus`, `Microsoft.Sql` and `Microsoft.Storage`.
	ServiceEndpoints interface{}
	// The name of the virtual network to which to attach the subnet. Changing this forces a new resource to be created.
	VirtualNetworkName interface{}
}

// The set of arguments for constructing a Subnet resource.
type SubnetArgs struct {
	// The address prefix to use for the subnet.
	AddressPrefix interface{}
	// One or more `delegation` blocks as defined below.
	Delegations interface{}
	// The collection of IP Configurations with IPs within this subnet.
	IpConfigurations interface{}
	// The name of the subnet. Changing this forces a new resource to be created.
	Name interface{}
	// The ID of the Network Security Group to associate with the subnet.
	NetworkSecurityGroupId interface{}
	// The name of the resource group in which to create the subnet. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// The ID of the Route Table to associate with the subnet.
	RouteTableId interface{}
	// The list of Service endpoints to associate with the subnet. Possible values include: `Microsoft.AzureActiveDirectory`, `Microsoft.AzureCosmosDB`, `Microsoft.EventHub`, `Microsoft.KeyVault`, `Microsoft.ServiceBus`, `Microsoft.Sql` and `Microsoft.Storage`.
	ServiceEndpoints interface{}
	// The name of the virtual network to which to attach the subnet. Changing this forces a new resource to be created.
	VirtualNetworkName interface{}
}
