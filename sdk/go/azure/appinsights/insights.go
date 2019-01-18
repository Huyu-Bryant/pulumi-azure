// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package appinsights

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manage an Application Insights component.
type Insights struct {
	s *pulumi.ResourceState
}

// NewInsights registers a new resource with the given unique name, arguments, and options.
func NewInsights(ctx *pulumi.Context,
	name string, args *InsightsArgs, opts ...pulumi.ResourceOpt) (*Insights, error) {
	if args == nil || args.ApplicationType == nil {
		return nil, errors.New("missing required argument 'ApplicationType'")
	}
	if args == nil || args.Location == nil {
		return nil, errors.New("missing required argument 'Location'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["applicationType"] = nil
		inputs["location"] = nil
		inputs["name"] = nil
		inputs["resourceGroupName"] = nil
		inputs["tags"] = nil
	} else {
		inputs["applicationType"] = args.ApplicationType
		inputs["location"] = args.Location
		inputs["name"] = args.Name
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["tags"] = args.Tags
	}
	inputs["appId"] = nil
	inputs["instrumentationKey"] = nil
	s, err := ctx.RegisterResource("azure:appinsights/insights:Insights", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Insights{s: s}, nil
}

// GetInsights gets an existing Insights resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetInsights(ctx *pulumi.Context,
	name string, id pulumi.ID, state *InsightsState, opts ...pulumi.ResourceOpt) (*Insights, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["appId"] = state.AppId
		inputs["applicationType"] = state.ApplicationType
		inputs["instrumentationKey"] = state.InstrumentationKey
		inputs["location"] = state.Location
		inputs["name"] = state.Name
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["tags"] = state.Tags
	}
	s, err := ctx.ReadResource("azure:appinsights/insights:Insights", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Insights{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *Insights) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Insights) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// The App ID associated with this Application Insights component.
func (r *Insights) AppId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["appId"])
}

// Specifies the type of Application Insights to create. Valid values are `Java`, `iOS`, `MobileCenter`, `Other`, `Phone`, `Store`, `Web` and `Node.JS`.
func (r *Insights) ApplicationType() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["applicationType"])
}

// The Instrumentation Key for this Application Insights component.
func (r *Insights) InstrumentationKey() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["instrumentationKey"])
}

// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
func (r *Insights) Location() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["location"])
}

// Specifies the name of the Application Insights component. Changing this forces a
// new resource to be created.
func (r *Insights) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// The name of the resource group in which to
// create the Application Insights component.
func (r *Insights) ResourceGroupName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["resourceGroupName"])
}

// A mapping of tags to assign to the resource.
func (r *Insights) Tags() *pulumi.MapOutput {
	return (*pulumi.MapOutput)(r.s.State["tags"])
}

// Input properties used for looking up and filtering Insights resources.
type InsightsState struct {
	// The App ID associated with this Application Insights component.
	AppId interface{}
	// Specifies the type of Application Insights to create. Valid values are `Java`, `iOS`, `MobileCenter`, `Other`, `Phone`, `Store`, `Web` and `Node.JS`.
	ApplicationType interface{}
	// The Instrumentation Key for this Application Insights component.
	InstrumentationKey interface{}
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location interface{}
	// Specifies the name of the Application Insights component. Changing this forces a
	// new resource to be created.
	Name interface{}
	// The name of the resource group in which to
	// create the Application Insights component.
	ResourceGroupName interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
}

// The set of arguments for constructing a Insights resource.
type InsightsArgs struct {
	// Specifies the type of Application Insights to create. Valid values are `Java`, `iOS`, `MobileCenter`, `Other`, `Phone`, `Store`, `Web` and `Node.JS`.
	ApplicationType interface{}
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location interface{}
	// Specifies the name of the Application Insights component. Changing this forces a
	// new resource to be created.
	Name interface{}
	// The name of the resource group in which to
	// create the Application Insights component.
	ResourceGroupName interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
}
