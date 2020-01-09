// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package privatedns

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manages a Private Link Service.
// 
// > **NOTE** Private Link is currently in Public Preview.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/private_link_service.html.markdown.
type LinkService struct {
	s *pulumi.ResourceState
}

// NewLinkService registers a new resource with the given unique name, arguments, and options.
func NewLinkService(ctx *pulumi.Context,
	name string, args *LinkServiceArgs, opts ...pulumi.ResourceOpt) (*LinkService, error) {
	if args == nil || args.LoadBalancerFrontendIpConfigurationIds == nil {
		return nil, errors.New("missing required argument 'LoadBalancerFrontendIpConfigurationIds'")
	}
	if args == nil || args.NatIpConfigurations == nil {
		return nil, errors.New("missing required argument 'NatIpConfigurations'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["autoApprovalSubscriptionIds"] = nil
		inputs["enableProxyProtocol"] = nil
		inputs["loadBalancerFrontendIpConfigurationIds"] = nil
		inputs["location"] = nil
		inputs["name"] = nil
		inputs["natIpConfigurations"] = nil
		inputs["resourceGroupName"] = nil
		inputs["tags"] = nil
		inputs["visibilitySubscriptionIds"] = nil
	} else {
		inputs["autoApprovalSubscriptionIds"] = args.AutoApprovalSubscriptionIds
		inputs["enableProxyProtocol"] = args.EnableProxyProtocol
		inputs["loadBalancerFrontendIpConfigurationIds"] = args.LoadBalancerFrontendIpConfigurationIds
		inputs["location"] = args.Location
		inputs["name"] = args.Name
		inputs["natIpConfigurations"] = args.NatIpConfigurations
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["tags"] = args.Tags
		inputs["visibilitySubscriptionIds"] = args.VisibilitySubscriptionIds
	}
	inputs["alias"] = nil
	inputs["networkInterfaceIds"] = nil
	s, err := ctx.RegisterResource("azure:privatedns/linkService:LinkService", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &LinkService{s: s}, nil
}

// GetLinkService gets an existing LinkService resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetLinkService(ctx *pulumi.Context,
	name string, id pulumi.ID, state *LinkServiceState, opts ...pulumi.ResourceOpt) (*LinkService, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["alias"] = state.Alias
		inputs["autoApprovalSubscriptionIds"] = state.AutoApprovalSubscriptionIds
		inputs["enableProxyProtocol"] = state.EnableProxyProtocol
		inputs["loadBalancerFrontendIpConfigurationIds"] = state.LoadBalancerFrontendIpConfigurationIds
		inputs["location"] = state.Location
		inputs["name"] = state.Name
		inputs["natIpConfigurations"] = state.NatIpConfigurations
		inputs["networkInterfaceIds"] = state.NetworkInterfaceIds
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["tags"] = state.Tags
		inputs["visibilitySubscriptionIds"] = state.VisibilitySubscriptionIds
	}
	s, err := ctx.ReadResource("azure:privatedns/linkService:LinkService", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &LinkService{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *LinkService) URN() pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *LinkService) ID() pulumi.IDOutput {
	return r.s.ID()
}

// A globally unique DNS Name for your Private Link Service. You can use this alias to request a connection to your Private Link Service.
func (r *LinkService) Alias() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["alias"])
}

// A list of Subscription UUID/GUID's that will be automatically be able to use this Private Link Service.
func (r *LinkService) AutoApprovalSubscriptionIds() pulumi.ArrayOutput {
	return (pulumi.ArrayOutput)(r.s.State["autoApprovalSubscriptionIds"])
}

// Should the Private Link Service support the Proxy Protocol? Defaults to `false`.
func (r *LinkService) EnableProxyProtocol() pulumi.BoolOutput {
	return (pulumi.BoolOutput)(r.s.State["enableProxyProtocol"])
}

// A list of Frontend IP Configuration ID's from a Standard Load Balancer, where traffic from the Private Link Service should be routed. You can use Load Balancer Rules to direct this traffic to appropriate backend pools where your applications are running. 
func (r *LinkService) LoadBalancerFrontendIpConfigurationIds() pulumi.ArrayOutput {
	return (pulumi.ArrayOutput)(r.s.State["loadBalancerFrontendIpConfigurationIds"])
}

// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
func (r *LinkService) Location() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["location"])
}

// Specifies the name of this Private Link Service. Changing this forces a new resource to be created.
func (r *LinkService) Name() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["name"])
}

// One or more (up to 8) `natIpConfiguration` block as defined below.
func (r *LinkService) NatIpConfigurations() pulumi.ArrayOutput {
	return (pulumi.ArrayOutput)(r.s.State["natIpConfigurations"])
}

func (r *LinkService) NetworkInterfaceIds() pulumi.ArrayOutput {
	return (pulumi.ArrayOutput)(r.s.State["networkInterfaceIds"])
}

// The name of the Resource Group where the Private Link Service should exist. Changing this forces a new resource to be created.
func (r *LinkService) ResourceGroupName() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["resourceGroupName"])
}

// A mapping of tags to assign to the resource. Changing this forces a new resource to be created.
func (r *LinkService) Tags() pulumi.MapOutput {
	return (pulumi.MapOutput)(r.s.State["tags"])
}

// A list of Subscription UUID/GUID's that will be able to see this Private Link Service.
func (r *LinkService) VisibilitySubscriptionIds() pulumi.ArrayOutput {
	return (pulumi.ArrayOutput)(r.s.State["visibilitySubscriptionIds"])
}

// Input properties used for looking up and filtering LinkService resources.
type LinkServiceState struct {
	// A globally unique DNS Name for your Private Link Service. You can use this alias to request a connection to your Private Link Service.
	Alias interface{}
	// A list of Subscription UUID/GUID's that will be automatically be able to use this Private Link Service.
	AutoApprovalSubscriptionIds interface{}
	// Should the Private Link Service support the Proxy Protocol? Defaults to `false`.
	EnableProxyProtocol interface{}
	// A list of Frontend IP Configuration ID's from a Standard Load Balancer, where traffic from the Private Link Service should be routed. You can use Load Balancer Rules to direct this traffic to appropriate backend pools where your applications are running. 
	LoadBalancerFrontendIpConfigurationIds interface{}
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location interface{}
	// Specifies the name of this Private Link Service. Changing this forces a new resource to be created.
	Name interface{}
	// One or more (up to 8) `natIpConfiguration` block as defined below.
	NatIpConfigurations interface{}
	NetworkInterfaceIds interface{}
	// The name of the Resource Group where the Private Link Service should exist. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// A mapping of tags to assign to the resource. Changing this forces a new resource to be created.
	Tags interface{}
	// A list of Subscription UUID/GUID's that will be able to see this Private Link Service.
	VisibilitySubscriptionIds interface{}
}

// The set of arguments for constructing a LinkService resource.
type LinkServiceArgs struct {
	// A list of Subscription UUID/GUID's that will be automatically be able to use this Private Link Service.
	AutoApprovalSubscriptionIds interface{}
	// Should the Private Link Service support the Proxy Protocol? Defaults to `false`.
	EnableProxyProtocol interface{}
	// A list of Frontend IP Configuration ID's from a Standard Load Balancer, where traffic from the Private Link Service should be routed. You can use Load Balancer Rules to direct this traffic to appropriate backend pools where your applications are running. 
	LoadBalancerFrontendIpConfigurationIds interface{}
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location interface{}
	// Specifies the name of this Private Link Service. Changing this forces a new resource to be created.
	Name interface{}
	// One or more (up to 8) `natIpConfiguration` block as defined below.
	NatIpConfigurations interface{}
	// The name of the Resource Group where the Private Link Service should exist. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// A mapping of tags to assign to the resource. Changing this forces a new resource to be created.
	Tags interface{}
	// A list of Subscription UUID/GUID's that will be able to see this Private Link Service.
	VisibilitySubscriptionIds interface{}
}
