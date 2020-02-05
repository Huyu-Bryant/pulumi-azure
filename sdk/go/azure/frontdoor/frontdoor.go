// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

// nolint: lll
package frontdoor

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manages an Azure Front Door instance.
// 
// Azure Front Door Service is Microsoft's highly available and scalable web application acceleration platform and global HTTP(s) load balancer. It provides built-in DDoS protection and application layer security and caching. Front Door enables you to build applications that maximize and automate high-availability and performance for your end-users. Use Front Door with Azure services including Web/Mobile Apps, Cloud Services and Virtual Machines – or combine it with on-premises services for hybrid deployments and smooth cloud migration.
// 
// Below are some of the key scenarios that Azure Front Door Service addresses:
// * Use Front Door to improve application scale and availability with instant multi-region failover
// * Use Front Door to improve application performance with SSL offload and routing requests to the fastest available application backend.
// * Use Front Door for application layer security and DDoS protection for your application.
// 
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/frontdoor.html.markdown.
type Frontdoor struct {
	pulumi.CustomResourceState

	// A `backendPoolHealthProbe` block as defined below.
	BackendPoolHealthProbes FrontdoorBackendPoolHealthProbeArrayOutput `pulumi:"backendPoolHealthProbes"`
	// A `backendPoolLoadBalancing` block as defined below.
	BackendPoolLoadBalancings FrontdoorBackendPoolLoadBalancingArrayOutput `pulumi:"backendPoolLoadBalancings"`
	// A `backendPool` block as defined below.
	BackendPools FrontdoorBackendPoolArrayOutput `pulumi:"backendPools"`
	// The host that each frontendEndpoint must CNAME to.
	Cname pulumi.StringOutput `pulumi:"cname"`
	// Enforce certificate name check on `HTTPS` requests to all backend pools, this setting will have no effect on `HTTP` requests. Permitted values are `true` or `false`.
	EnforceBackendPoolsCertificateNameCheck pulumi.BoolOutput `pulumi:"enforceBackendPoolsCertificateNameCheck"`
	// A friendly name for the Front Door service.
	FriendlyName pulumi.StringPtrOutput `pulumi:"friendlyName"`
	// A `frontendEndpoint` block as defined below.
	FrontendEndpoints FrontdoorFrontendEndpointArrayOutput `pulumi:"frontendEndpoints"`
	// Should the Front Door Load Balancer be Enabled? Defaults to `true`.
	LoadBalancerEnabled pulumi.BoolPtrOutput `pulumi:"loadBalancerEnabled"`
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location pulumi.StringOutput `pulumi:"location"`
	// Specifies the name of the Front Door service. Changing this forces a new resource to be created.
	Name pulumi.StringOutput `pulumi:"name"`
	// Specifies the name of the Resource Group in which the Front Door service should exist. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringOutput `pulumi:"resourceGroupName"`
	// A `routingRule` block as defined below.
	RoutingRules FrontdoorRoutingRuleArrayOutput `pulumi:"routingRules"`
	// A mapping of tags to assign to the resource.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
}

// NewFrontdoor registers a new resource with the given unique name, arguments, and options.
func NewFrontdoor(ctx *pulumi.Context,
	name string, args *FrontdoorArgs, opts ...pulumi.ResourceOption) (*Frontdoor, error) {
	if args == nil || args.BackendPoolHealthProbes == nil {
		return nil, errors.New("missing required argument 'BackendPoolHealthProbes'")
	}
	if args == nil || args.BackendPoolLoadBalancings == nil {
		return nil, errors.New("missing required argument 'BackendPoolLoadBalancings'")
	}
	if args == nil || args.BackendPools == nil {
		return nil, errors.New("missing required argument 'BackendPools'")
	}
	if args == nil || args.EnforceBackendPoolsCertificateNameCheck == nil {
		return nil, errors.New("missing required argument 'EnforceBackendPoolsCertificateNameCheck'")
	}
	if args == nil || args.FrontendEndpoints == nil {
		return nil, errors.New("missing required argument 'FrontendEndpoints'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.RoutingRules == nil {
		return nil, errors.New("missing required argument 'RoutingRules'")
	}
	if args == nil {
		args = &FrontdoorArgs{}
	}
	var resource Frontdoor
	err := ctx.RegisterResource("azure:frontdoor/frontdoor:Frontdoor", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetFrontdoor gets an existing Frontdoor resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetFrontdoor(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *FrontdoorState, opts ...pulumi.ResourceOption) (*Frontdoor, error) {
	var resource Frontdoor
	err := ctx.ReadResource("azure:frontdoor/frontdoor:Frontdoor", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Frontdoor resources.
type frontdoorState struct {
	// A `backendPoolHealthProbe` block as defined below.
	BackendPoolHealthProbes []FrontdoorBackendPoolHealthProbe `pulumi:"backendPoolHealthProbes"`
	// A `backendPoolLoadBalancing` block as defined below.
	BackendPoolLoadBalancings []FrontdoorBackendPoolLoadBalancing `pulumi:"backendPoolLoadBalancings"`
	// A `backendPool` block as defined below.
	BackendPools []FrontdoorBackendPool `pulumi:"backendPools"`
	// The host that each frontendEndpoint must CNAME to.
	Cname *string `pulumi:"cname"`
	// Enforce certificate name check on `HTTPS` requests to all backend pools, this setting will have no effect on `HTTP` requests. Permitted values are `true` or `false`.
	EnforceBackendPoolsCertificateNameCheck *bool `pulumi:"enforceBackendPoolsCertificateNameCheck"`
	// A friendly name for the Front Door service.
	FriendlyName *string `pulumi:"friendlyName"`
	// A `frontendEndpoint` block as defined below.
	FrontendEndpoints []FrontdoorFrontendEndpoint `pulumi:"frontendEndpoints"`
	// Should the Front Door Load Balancer be Enabled? Defaults to `true`.
	LoadBalancerEnabled *bool `pulumi:"loadBalancerEnabled"`
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location *string `pulumi:"location"`
	// Specifies the name of the Front Door service. Changing this forces a new resource to be created.
	Name *string `pulumi:"name"`
	// Specifies the name of the Resource Group in which the Front Door service should exist. Changing this forces a new resource to be created.
	ResourceGroupName *string `pulumi:"resourceGroupName"`
	// A `routingRule` block as defined below.
	RoutingRules []FrontdoorRoutingRule `pulumi:"routingRules"`
	// A mapping of tags to assign to the resource.
	Tags map[string]string `pulumi:"tags"`
}

type FrontdoorState struct {
	// A `backendPoolHealthProbe` block as defined below.
	BackendPoolHealthProbes FrontdoorBackendPoolHealthProbeArrayInput
	// A `backendPoolLoadBalancing` block as defined below.
	BackendPoolLoadBalancings FrontdoorBackendPoolLoadBalancingArrayInput
	// A `backendPool` block as defined below.
	BackendPools FrontdoorBackendPoolArrayInput
	// The host that each frontendEndpoint must CNAME to.
	Cname pulumi.StringPtrInput
	// Enforce certificate name check on `HTTPS` requests to all backend pools, this setting will have no effect on `HTTP` requests. Permitted values are `true` or `false`.
	EnforceBackendPoolsCertificateNameCheck pulumi.BoolPtrInput
	// A friendly name for the Front Door service.
	FriendlyName pulumi.StringPtrInput
	// A `frontendEndpoint` block as defined below.
	FrontendEndpoints FrontdoorFrontendEndpointArrayInput
	// Should the Front Door Load Balancer be Enabled? Defaults to `true`.
	LoadBalancerEnabled pulumi.BoolPtrInput
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location pulumi.StringPtrInput
	// Specifies the name of the Front Door service. Changing this forces a new resource to be created.
	Name pulumi.StringPtrInput
	// Specifies the name of the Resource Group in which the Front Door service should exist. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringPtrInput
	// A `routingRule` block as defined below.
	RoutingRules FrontdoorRoutingRuleArrayInput
	// A mapping of tags to assign to the resource.
	Tags pulumi.StringMapInput
}

func (FrontdoorState) ElementType() reflect.Type {
	return reflect.TypeOf((*frontdoorState)(nil)).Elem()
}

type frontdoorArgs struct {
	// A `backendPoolHealthProbe` block as defined below.
	BackendPoolHealthProbes []FrontdoorBackendPoolHealthProbe `pulumi:"backendPoolHealthProbes"`
	// A `backendPoolLoadBalancing` block as defined below.
	BackendPoolLoadBalancings []FrontdoorBackendPoolLoadBalancing `pulumi:"backendPoolLoadBalancings"`
	// A `backendPool` block as defined below.
	BackendPools []FrontdoorBackendPool `pulumi:"backendPools"`
	// Enforce certificate name check on `HTTPS` requests to all backend pools, this setting will have no effect on `HTTP` requests. Permitted values are `true` or `false`.
	EnforceBackendPoolsCertificateNameCheck bool `pulumi:"enforceBackendPoolsCertificateNameCheck"`
	// A friendly name for the Front Door service.
	FriendlyName *string `pulumi:"friendlyName"`
	// A `frontendEndpoint` block as defined below.
	FrontendEndpoints []FrontdoorFrontendEndpoint `pulumi:"frontendEndpoints"`
	// Should the Front Door Load Balancer be Enabled? Defaults to `true`.
	LoadBalancerEnabled *bool `pulumi:"loadBalancerEnabled"`
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location *string `pulumi:"location"`
	// Specifies the name of the Front Door service. Changing this forces a new resource to be created.
	Name *string `pulumi:"name"`
	// Specifies the name of the Resource Group in which the Front Door service should exist. Changing this forces a new resource to be created.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// A `routingRule` block as defined below.
	RoutingRules []FrontdoorRoutingRule `pulumi:"routingRules"`
	// A mapping of tags to assign to the resource.
	Tags map[string]string `pulumi:"tags"`
}

// The set of arguments for constructing a Frontdoor resource.
type FrontdoorArgs struct {
	// A `backendPoolHealthProbe` block as defined below.
	BackendPoolHealthProbes FrontdoorBackendPoolHealthProbeArrayInput
	// A `backendPoolLoadBalancing` block as defined below.
	BackendPoolLoadBalancings FrontdoorBackendPoolLoadBalancingArrayInput
	// A `backendPool` block as defined below.
	BackendPools FrontdoorBackendPoolArrayInput
	// Enforce certificate name check on `HTTPS` requests to all backend pools, this setting will have no effect on `HTTP` requests. Permitted values are `true` or `false`.
	EnforceBackendPoolsCertificateNameCheck pulumi.BoolInput
	// A friendly name for the Front Door service.
	FriendlyName pulumi.StringPtrInput
	// A `frontendEndpoint` block as defined below.
	FrontendEndpoints FrontdoorFrontendEndpointArrayInput
	// Should the Front Door Load Balancer be Enabled? Defaults to `true`.
	LoadBalancerEnabled pulumi.BoolPtrInput
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location pulumi.StringPtrInput
	// Specifies the name of the Front Door service. Changing this forces a new resource to be created.
	Name pulumi.StringPtrInput
	// Specifies the name of the Resource Group in which the Front Door service should exist. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringInput
	// A `routingRule` block as defined below.
	RoutingRules FrontdoorRoutingRuleArrayInput
	// A mapping of tags to assign to the resource.
	Tags pulumi.StringMapInput
}

func (FrontdoorArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*frontdoorArgs)(nil)).Elem()
}
