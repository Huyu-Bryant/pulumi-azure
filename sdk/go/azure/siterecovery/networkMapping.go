// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package siterecovery

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manages a site recovery network mapping on Azure. A network mapping decides how to translate connected netwroks when a VM is migrated from one region to another.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/site_recovery_network_mapping.html.markdown.
type NetworkMapping struct {
	s *pulumi.ResourceState
}

// NewNetworkMapping registers a new resource with the given unique name, arguments, and options.
func NewNetworkMapping(ctx *pulumi.Context,
	name string, args *NetworkMappingArgs, opts ...pulumi.ResourceOpt) (*NetworkMapping, error) {
	if args == nil || args.RecoveryVaultName == nil {
		return nil, errors.New("missing required argument 'RecoveryVaultName'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.SourceNetworkId == nil {
		return nil, errors.New("missing required argument 'SourceNetworkId'")
	}
	if args == nil || args.SourceRecoveryFabricName == nil {
		return nil, errors.New("missing required argument 'SourceRecoveryFabricName'")
	}
	if args == nil || args.TargetNetworkId == nil {
		return nil, errors.New("missing required argument 'TargetNetworkId'")
	}
	if args == nil || args.TargetRecoveryFabricName == nil {
		return nil, errors.New("missing required argument 'TargetRecoveryFabricName'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["name"] = nil
		inputs["recoveryVaultName"] = nil
		inputs["resourceGroupName"] = nil
		inputs["sourceNetworkId"] = nil
		inputs["sourceRecoveryFabricName"] = nil
		inputs["targetNetworkId"] = nil
		inputs["targetRecoveryFabricName"] = nil
	} else {
		inputs["name"] = args.Name
		inputs["recoveryVaultName"] = args.RecoveryVaultName
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["sourceNetworkId"] = args.SourceNetworkId
		inputs["sourceRecoveryFabricName"] = args.SourceRecoveryFabricName
		inputs["targetNetworkId"] = args.TargetNetworkId
		inputs["targetRecoveryFabricName"] = args.TargetRecoveryFabricName
	}
	s, err := ctx.RegisterResource("azure:siterecovery/networkMapping:NetworkMapping", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &NetworkMapping{s: s}, nil
}

// GetNetworkMapping gets an existing NetworkMapping resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetNetworkMapping(ctx *pulumi.Context,
	name string, id pulumi.ID, state *NetworkMappingState, opts ...pulumi.ResourceOpt) (*NetworkMapping, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["name"] = state.Name
		inputs["recoveryVaultName"] = state.RecoveryVaultName
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["sourceNetworkId"] = state.SourceNetworkId
		inputs["sourceRecoveryFabricName"] = state.SourceRecoveryFabricName
		inputs["targetNetworkId"] = state.TargetNetworkId
		inputs["targetRecoveryFabricName"] = state.TargetRecoveryFabricName
	}
	s, err := ctx.ReadResource("azure:siterecovery/networkMapping:NetworkMapping", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &NetworkMapping{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *NetworkMapping) URN() pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *NetworkMapping) ID() pulumi.IDOutput {
	return r.s.ID()
}

// The name of the network mapping.
func (r *NetworkMapping) Name() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["name"])
}

// The name of the vault that should be updated.
func (r *NetworkMapping) RecoveryVaultName() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["recoveryVaultName"])
}

// Name of the resource group where the vault that should be updated is located.
func (r *NetworkMapping) ResourceGroupName() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["resourceGroupName"])
}

// The id of the primary network.
func (r *NetworkMapping) SourceNetworkId() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["sourceNetworkId"])
}

// Specifies the ASR fabric where mapping should be created.
func (r *NetworkMapping) SourceRecoveryFabricName() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["sourceRecoveryFabricName"])
}

// The id of the recovery network.
func (r *NetworkMapping) TargetNetworkId() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["targetNetworkId"])
}

// The Azure Site Recovery fabric object corresponding to the recovery Azure region.
func (r *NetworkMapping) TargetRecoveryFabricName() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["targetRecoveryFabricName"])
}

// Input properties used for looking up and filtering NetworkMapping resources.
type NetworkMappingState struct {
	// The name of the network mapping.
	Name interface{}
	// The name of the vault that should be updated.
	RecoveryVaultName interface{}
	// Name of the resource group where the vault that should be updated is located.
	ResourceGroupName interface{}
	// The id of the primary network.
	SourceNetworkId interface{}
	// Specifies the ASR fabric where mapping should be created.
	SourceRecoveryFabricName interface{}
	// The id of the recovery network.
	TargetNetworkId interface{}
	// The Azure Site Recovery fabric object corresponding to the recovery Azure region.
	TargetRecoveryFabricName interface{}
}

// The set of arguments for constructing a NetworkMapping resource.
type NetworkMappingArgs struct {
	// The name of the network mapping.
	Name interface{}
	// The name of the vault that should be updated.
	RecoveryVaultName interface{}
	// Name of the resource group where the vault that should be updated is located.
	ResourceGroupName interface{}
	// The id of the primary network.
	SourceNetworkId interface{}
	// Specifies the ASR fabric where mapping should be created.
	SourceRecoveryFabricName interface{}
	// The id of the recovery network.
	TargetNetworkId interface{}
	// The Azure Site Recovery fabric object corresponding to the recovery Azure region.
	TargetRecoveryFabricName interface{}
}
