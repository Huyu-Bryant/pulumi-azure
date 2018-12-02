// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package dns

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Enables you to manage DNS SRV Records within Azure DNS.
type SrvRecord struct {
	s *pulumi.ResourceState
}

// NewSrvRecord registers a new resource with the given unique name, arguments, and options.
func NewSrvRecord(ctx *pulumi.Context,
	name string, args *SrvRecordArgs, opts ...pulumi.ResourceOpt) (*SrvRecord, error) {
	if args == nil || args.Records == nil {
		return nil, errors.New("missing required argument 'Records'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.Ttl == nil {
		return nil, errors.New("missing required argument 'Ttl'")
	}
	if args == nil || args.ZoneName == nil {
		return nil, errors.New("missing required argument 'ZoneName'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["name"] = nil
		inputs["records"] = nil
		inputs["resourceGroupName"] = nil
		inputs["tags"] = nil
		inputs["ttl"] = nil
		inputs["zoneName"] = nil
	} else {
		inputs["name"] = args.Name
		inputs["records"] = args.Records
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["tags"] = args.Tags
		inputs["ttl"] = args.Ttl
		inputs["zoneName"] = args.ZoneName
	}
	s, err := ctx.RegisterResource("azure:dns/srvRecord:SrvRecord", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &SrvRecord{s: s}, nil
}

// GetSrvRecord gets an existing SrvRecord resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetSrvRecord(ctx *pulumi.Context,
	name string, id pulumi.ID, state *SrvRecordState, opts ...pulumi.ResourceOpt) (*SrvRecord, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["name"] = state.Name
		inputs["records"] = state.Records
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["tags"] = state.Tags
		inputs["ttl"] = state.Ttl
		inputs["zoneName"] = state.ZoneName
	}
	s, err := ctx.ReadResource("azure:dns/srvRecord:SrvRecord", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &SrvRecord{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *SrvRecord) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *SrvRecord) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// The name of the DNS SRV Record.
func (r *SrvRecord) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// A list of values that make up the SRV record. Each `record` block supports fields documented below.
func (r *SrvRecord) Records() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["records"])
}

// Specifies the resource group where the resource exists. Changing this forces a new resource to be created.
func (r *SrvRecord) ResourceGroupName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["resourceGroupName"])
}

// A mapping of tags to assign to the resource.
func (r *SrvRecord) Tags() *pulumi.MapOutput {
	return (*pulumi.MapOutput)(r.s.State["tags"])
}

// The Time To Live (TTL) of the DNS record in seconds.
func (r *SrvRecord) Ttl() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["ttl"])
}

// Specifies the DNS Zone where the resource exists. Changing this forces a new resource to be created.
func (r *SrvRecord) ZoneName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["zoneName"])
}

// Input properties used for looking up and filtering SrvRecord resources.
type SrvRecordState struct {
	// The name of the DNS SRV Record.
	Name interface{}
	// A list of values that make up the SRV record. Each `record` block supports fields documented below.
	Records interface{}
	// Specifies the resource group where the resource exists. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
	// The Time To Live (TTL) of the DNS record in seconds.
	Ttl interface{}
	// Specifies the DNS Zone where the resource exists. Changing this forces a new resource to be created.
	ZoneName interface{}
}

// The set of arguments for constructing a SrvRecord resource.
type SrvRecordArgs struct {
	// The name of the DNS SRV Record.
	Name interface{}
	// A list of values that make up the SRV record. Each `record` block supports fields documented below.
	Records interface{}
	// Specifies the resource group where the resource exists. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
	// The Time To Live (TTL) of the DNS record in seconds.
	Ttl interface{}
	// Specifies the DNS Zone where the resource exists. Changing this forces a new resource to be created.
	ZoneName interface{}
}
