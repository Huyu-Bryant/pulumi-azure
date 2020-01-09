// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package recoveryservices

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// > **NOTE:** This resource has been deprecated in favour of the `siterecovery.ReplicationPolicy` resource and will be removed in the next major version of the AzureRM Provider. The new resource shares the same fields as this one, and information on migrating across can be found in this guide.
// 
// Manages a Azure recovery vault replication policy.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/recovery_services_replication_policy.html.markdown.
type ReplicationPolicy struct {
	s *pulumi.ResourceState
}

// NewReplicationPolicy registers a new resource with the given unique name, arguments, and options.
func NewReplicationPolicy(ctx *pulumi.Context,
	name string, args *ReplicationPolicyArgs, opts ...pulumi.ResourceOpt) (*ReplicationPolicy, error) {
	if args == nil || args.ApplicationConsistentSnapshotFrequencyInMinutes == nil {
		return nil, errors.New("missing required argument 'ApplicationConsistentSnapshotFrequencyInMinutes'")
	}
	if args == nil || args.RecoveryPointRetentionInMinutes == nil {
		return nil, errors.New("missing required argument 'RecoveryPointRetentionInMinutes'")
	}
	if args == nil || args.RecoveryVaultName == nil {
		return nil, errors.New("missing required argument 'RecoveryVaultName'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["applicationConsistentSnapshotFrequencyInMinutes"] = nil
		inputs["name"] = nil
		inputs["recoveryPointRetentionInMinutes"] = nil
		inputs["recoveryVaultName"] = nil
		inputs["resourceGroupName"] = nil
	} else {
		inputs["applicationConsistentSnapshotFrequencyInMinutes"] = args.ApplicationConsistentSnapshotFrequencyInMinutes
		inputs["name"] = args.Name
		inputs["recoveryPointRetentionInMinutes"] = args.RecoveryPointRetentionInMinutes
		inputs["recoveryVaultName"] = args.RecoveryVaultName
		inputs["resourceGroupName"] = args.ResourceGroupName
	}
	s, err := ctx.RegisterResource("azure:recoveryservices/replicationPolicy:ReplicationPolicy", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &ReplicationPolicy{s: s}, nil
}

// GetReplicationPolicy gets an existing ReplicationPolicy resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetReplicationPolicy(ctx *pulumi.Context,
	name string, id pulumi.ID, state *ReplicationPolicyState, opts ...pulumi.ResourceOpt) (*ReplicationPolicy, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["applicationConsistentSnapshotFrequencyInMinutes"] = state.ApplicationConsistentSnapshotFrequencyInMinutes
		inputs["name"] = state.Name
		inputs["recoveryPointRetentionInMinutes"] = state.RecoveryPointRetentionInMinutes
		inputs["recoveryVaultName"] = state.RecoveryVaultName
		inputs["resourceGroupName"] = state.ResourceGroupName
	}
	s, err := ctx.ReadResource("azure:recoveryservices/replicationPolicy:ReplicationPolicy", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &ReplicationPolicy{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *ReplicationPolicy) URN() pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *ReplicationPolicy) ID() pulumi.IDOutput {
	return r.s.ID()
}

// Specifies the frequency(in minutes) at which to create application consistent recovery points.
func (r *ReplicationPolicy) ApplicationConsistentSnapshotFrequencyInMinutes() pulumi.IntOutput {
	return (pulumi.IntOutput)(r.s.State["applicationConsistentSnapshotFrequencyInMinutes"])
}

// The name of the network mapping.
func (r *ReplicationPolicy) Name() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["name"])
}

// Retain the recovery points for given time in minutes.
func (r *ReplicationPolicy) RecoveryPointRetentionInMinutes() pulumi.IntOutput {
	return (pulumi.IntOutput)(r.s.State["recoveryPointRetentionInMinutes"])
}

// The name of the vault that should be updated.
func (r *ReplicationPolicy) RecoveryVaultName() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["recoveryVaultName"])
}

// Name of the resource group where the vault that should be updated is located.
func (r *ReplicationPolicy) ResourceGroupName() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["resourceGroupName"])
}

// Input properties used for looking up and filtering ReplicationPolicy resources.
type ReplicationPolicyState struct {
	// Specifies the frequency(in minutes) at which to create application consistent recovery points.
	ApplicationConsistentSnapshotFrequencyInMinutes interface{}
	// The name of the network mapping.
	Name interface{}
	// Retain the recovery points for given time in minutes.
	RecoveryPointRetentionInMinutes interface{}
	// The name of the vault that should be updated.
	RecoveryVaultName interface{}
	// Name of the resource group where the vault that should be updated is located.
	ResourceGroupName interface{}
}

// The set of arguments for constructing a ReplicationPolicy resource.
type ReplicationPolicyArgs struct {
	// Specifies the frequency(in minutes) at which to create application consistent recovery points.
	ApplicationConsistentSnapshotFrequencyInMinutes interface{}
	// The name of the network mapping.
	Name interface{}
	// Retain the recovery points for given time in minutes.
	RecoveryPointRetentionInMinutes interface{}
	// The name of the vault that should be updated.
	RecoveryVaultName interface{}
	// Name of the resource group where the vault that should be updated is located.
	ResourceGroupName interface{}
}
