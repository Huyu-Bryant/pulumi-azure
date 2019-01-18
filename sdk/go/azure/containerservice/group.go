// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package containerservice

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manage as an Azure Container Group instance.
type Group struct {
	s *pulumi.ResourceState
}

// NewGroup registers a new resource with the given unique name, arguments, and options.
func NewGroup(ctx *pulumi.Context,
	name string, args *GroupArgs, opts ...pulumi.ResourceOpt) (*Group, error) {
	if args == nil || args.Containers == nil {
		return nil, errors.New("missing required argument 'Containers'")
	}
	if args == nil || args.Location == nil {
		return nil, errors.New("missing required argument 'Location'")
	}
	if args == nil || args.OsType == nil {
		return nil, errors.New("missing required argument 'OsType'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["containers"] = nil
		inputs["dnsNameLabel"] = nil
		inputs["imageRegistryCredentials"] = nil
		inputs["ipAddressType"] = nil
		inputs["location"] = nil
		inputs["name"] = nil
		inputs["osType"] = nil
		inputs["resourceGroupName"] = nil
		inputs["restartPolicy"] = nil
		inputs["tags"] = nil
	} else {
		inputs["containers"] = args.Containers
		inputs["dnsNameLabel"] = args.DnsNameLabel
		inputs["imageRegistryCredentials"] = args.ImageRegistryCredentials
		inputs["ipAddressType"] = args.IpAddressType
		inputs["location"] = args.Location
		inputs["name"] = args.Name
		inputs["osType"] = args.OsType
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["restartPolicy"] = args.RestartPolicy
		inputs["tags"] = args.Tags
	}
	inputs["fqdn"] = nil
	inputs["ipAddress"] = nil
	s, err := ctx.RegisterResource("azure:containerservice/group:Group", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Group{s: s}, nil
}

// GetGroup gets an existing Group resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetGroup(ctx *pulumi.Context,
	name string, id pulumi.ID, state *GroupState, opts ...pulumi.ResourceOpt) (*Group, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["containers"] = state.Containers
		inputs["dnsNameLabel"] = state.DnsNameLabel
		inputs["fqdn"] = state.Fqdn
		inputs["imageRegistryCredentials"] = state.ImageRegistryCredentials
		inputs["ipAddress"] = state.IpAddress
		inputs["ipAddressType"] = state.IpAddressType
		inputs["location"] = state.Location
		inputs["name"] = state.Name
		inputs["osType"] = state.OsType
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["restartPolicy"] = state.RestartPolicy
		inputs["tags"] = state.Tags
	}
	s, err := ctx.ReadResource("azure:containerservice/group:Group", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Group{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *Group) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Group) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// The definition of a container that is part of the group as documented in the `container` block below. Changing this forces a new resource to be created.
func (r *Group) Containers() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["containers"])
}

// The DNS label/name for the container groups IP.
func (r *Group) DnsNameLabel() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["dnsNameLabel"])
}

// The FQDN of the container group derived from `dns_name_label`.
func (r *Group) Fqdn() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["fqdn"])
}

// Set image registry credentials for the group as documented in the `image_registry_credential` block below
func (r *Group) ImageRegistryCredentials() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["imageRegistryCredentials"])
}

// The IP address allocated to the container group.
func (r *Group) IpAddress() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["ipAddress"])
}

// Specifies the ip address type of the container. `Public` is the only acceptable value at this time. Changing this forces a new resource to be created.
func (r *Group) IpAddressType() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["ipAddressType"])
}

// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
func (r *Group) Location() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["location"])
}

// Specifies the name of the Container Group. Changing this forces a new resource to be created.
func (r *Group) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// The OS for the container group. Allowed values are `Linux` and `Windows`. Changing this forces a new resource to be created.
func (r *Group) OsType() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["osType"])
}

// The name of the resource group in which to create the Container Group. Changing this forces a new resource to be created.
func (r *Group) ResourceGroupName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["resourceGroupName"])
}

// Restart policy for the container group. Allowed values are `Always`, `Never`, `OnFailure`. Defaults to `Always`.
func (r *Group) RestartPolicy() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["restartPolicy"])
}

// A mapping of tags to assign to the resource.
func (r *Group) Tags() *pulumi.MapOutput {
	return (*pulumi.MapOutput)(r.s.State["tags"])
}

// Input properties used for looking up and filtering Group resources.
type GroupState struct {
	// The definition of a container that is part of the group as documented in the `container` block below. Changing this forces a new resource to be created.
	Containers interface{}
	// The DNS label/name for the container groups IP.
	DnsNameLabel interface{}
	// The FQDN of the container group derived from `dns_name_label`.
	Fqdn interface{}
	// Set image registry credentials for the group as documented in the `image_registry_credential` block below
	ImageRegistryCredentials interface{}
	// The IP address allocated to the container group.
	IpAddress interface{}
	// Specifies the ip address type of the container. `Public` is the only acceptable value at this time. Changing this forces a new resource to be created.
	IpAddressType interface{}
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location interface{}
	// Specifies the name of the Container Group. Changing this forces a new resource to be created.
	Name interface{}
	// The OS for the container group. Allowed values are `Linux` and `Windows`. Changing this forces a new resource to be created.
	OsType interface{}
	// The name of the resource group in which to create the Container Group. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// Restart policy for the container group. Allowed values are `Always`, `Never`, `OnFailure`. Defaults to `Always`.
	RestartPolicy interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
}

// The set of arguments for constructing a Group resource.
type GroupArgs struct {
	// The definition of a container that is part of the group as documented in the `container` block below. Changing this forces a new resource to be created.
	Containers interface{}
	// The DNS label/name for the container groups IP.
	DnsNameLabel interface{}
	// Set image registry credentials for the group as documented in the `image_registry_credential` block below
	ImageRegistryCredentials interface{}
	// Specifies the ip address type of the container. `Public` is the only acceptable value at this time. Changing this forces a new resource to be created.
	IpAddressType interface{}
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location interface{}
	// Specifies the name of the Container Group. Changing this forces a new resource to be created.
	Name interface{}
	// The OS for the container group. Allowed values are `Linux` and `Windows`. Changing this forces a new resource to be created.
	OsType interface{}
	// The name of the resource group in which to create the Container Group. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// Restart policy for the container group. Allowed values are `Always`, `Never`, `OnFailure`. Defaults to `Always`.
	RestartPolicy interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
}
