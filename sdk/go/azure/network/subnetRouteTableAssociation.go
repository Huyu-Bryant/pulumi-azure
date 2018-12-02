// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package network

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Associates a Route Table with a Subnet within a Virtual Network.
// 
// -> **NOTE:** Subnet `<->` Route Table associations currently need to be configured on both this resource and using the `route_table_id` field on the `azurerm_subnet` resource. The next major version of the AzureRM Provider (2.0) will remove the `route_table_id` field from the `azurerm_subnet` resource such that this resource is used to link resources in future.
type SubnetRouteTableAssociation struct {
	s *pulumi.ResourceState
}

// NewSubnetRouteTableAssociation registers a new resource with the given unique name, arguments, and options.
func NewSubnetRouteTableAssociation(ctx *pulumi.Context,
	name string, args *SubnetRouteTableAssociationArgs, opts ...pulumi.ResourceOpt) (*SubnetRouteTableAssociation, error) {
	if args == nil || args.RouteTableId == nil {
		return nil, errors.New("missing required argument 'RouteTableId'")
	}
	if args == nil || args.SubnetId == nil {
		return nil, errors.New("missing required argument 'SubnetId'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["routeTableId"] = nil
		inputs["subnetId"] = nil
	} else {
		inputs["routeTableId"] = args.RouteTableId
		inputs["subnetId"] = args.SubnetId
	}
	s, err := ctx.RegisterResource("azure:network/subnetRouteTableAssociation:SubnetRouteTableAssociation", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &SubnetRouteTableAssociation{s: s}, nil
}

// GetSubnetRouteTableAssociation gets an existing SubnetRouteTableAssociation resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetSubnetRouteTableAssociation(ctx *pulumi.Context,
	name string, id pulumi.ID, state *SubnetRouteTableAssociationState, opts ...pulumi.ResourceOpt) (*SubnetRouteTableAssociation, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["routeTableId"] = state.RouteTableId
		inputs["subnetId"] = state.SubnetId
	}
	s, err := ctx.ReadResource("azure:network/subnetRouteTableAssociation:SubnetRouteTableAssociation", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &SubnetRouteTableAssociation{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *SubnetRouteTableAssociation) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *SubnetRouteTableAssociation) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// The ID of the Route Table which should be associated with the Subnet. Changing this forces a new resource to be created.
func (r *SubnetRouteTableAssociation) RouteTableId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["routeTableId"])
}

// The ID of the Subnet. Changing this forces a new resource to be created.
func (r *SubnetRouteTableAssociation) SubnetId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["subnetId"])
}

// Input properties used for looking up and filtering SubnetRouteTableAssociation resources.
type SubnetRouteTableAssociationState struct {
	// The ID of the Route Table which should be associated with the Subnet. Changing this forces a new resource to be created.
	RouteTableId interface{}
	// The ID of the Subnet. Changing this forces a new resource to be created.
	SubnetId interface{}
}

// The set of arguments for constructing a SubnetRouteTableAssociation resource.
type SubnetRouteTableAssociationArgs struct {
	// The ID of the Route Table which should be associated with the Subnet. Changing this forces a new resource to be created.
	RouteTableId interface{}
	// The ID of the Subnet. Changing this forces a new resource to be created.
	SubnetId interface{}
}
