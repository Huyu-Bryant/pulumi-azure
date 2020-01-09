// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package recoveryservices

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// > **NOTE:** This resource has been deprecated in favour of the `backup.ProtectedVM` resource and will be removed in the next major version of the AzureRM Provider. The new resource shares the same fields as this one, and information on migrating across can be found in this guide.
// 
// Manages an Recovery Protected VM.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/recovery_services_protected_vm.html.markdown.
type ProtectedVM struct {
	s *pulumi.ResourceState
}

// NewProtectedVM registers a new resource with the given unique name, arguments, and options.
func NewProtectedVM(ctx *pulumi.Context,
	name string, args *ProtectedVMArgs, opts ...pulumi.ResourceOpt) (*ProtectedVM, error) {
	if args == nil || args.BackupPolicyId == nil {
		return nil, errors.New("missing required argument 'BackupPolicyId'")
	}
	if args == nil || args.RecoveryVaultName == nil {
		return nil, errors.New("missing required argument 'RecoveryVaultName'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.SourceVmId == nil {
		return nil, errors.New("missing required argument 'SourceVmId'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["backupPolicyId"] = nil
		inputs["recoveryVaultName"] = nil
		inputs["resourceGroupName"] = nil
		inputs["sourceVmId"] = nil
		inputs["tags"] = nil
	} else {
		inputs["backupPolicyId"] = args.BackupPolicyId
		inputs["recoveryVaultName"] = args.RecoveryVaultName
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["sourceVmId"] = args.SourceVmId
		inputs["tags"] = args.Tags
	}
	s, err := ctx.RegisterResource("azure:recoveryservices/protectedVM:ProtectedVM", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &ProtectedVM{s: s}, nil
}

// GetProtectedVM gets an existing ProtectedVM resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetProtectedVM(ctx *pulumi.Context,
	name string, id pulumi.ID, state *ProtectedVMState, opts ...pulumi.ResourceOpt) (*ProtectedVM, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["backupPolicyId"] = state.BackupPolicyId
		inputs["recoveryVaultName"] = state.RecoveryVaultName
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["sourceVmId"] = state.SourceVmId
		inputs["tags"] = state.Tags
	}
	s, err := ctx.ReadResource("azure:recoveryservices/protectedVM:ProtectedVM", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &ProtectedVM{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *ProtectedVM) URN() pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *ProtectedVM) ID() pulumi.IDOutput {
	return r.s.ID()
}

// Specifies the id of the backup policy to use.
func (r *ProtectedVM) BackupPolicyId() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["backupPolicyId"])
}

// Specifies the name of the Recovery Services Vault to use. Changing this forces a new resource to be created.
func (r *ProtectedVM) RecoveryVaultName() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["recoveryVaultName"])
}

// The name of the resource group in which to create the Recovery Services Protected VM. Changing this forces a new resource to be created.
func (r *ProtectedVM) ResourceGroupName() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["resourceGroupName"])
}

// Specifies the ID of the VM to backup. Changing this forces a new resource to be created.
func (r *ProtectedVM) SourceVmId() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["sourceVmId"])
}

// A mapping of tags to assign to the resource.
func (r *ProtectedVM) Tags() pulumi.MapOutput {
	return (pulumi.MapOutput)(r.s.State["tags"])
}

// Input properties used for looking up and filtering ProtectedVM resources.
type ProtectedVMState struct {
	// Specifies the id of the backup policy to use.
	BackupPolicyId interface{}
	// Specifies the name of the Recovery Services Vault to use. Changing this forces a new resource to be created.
	RecoveryVaultName interface{}
	// The name of the resource group in which to create the Recovery Services Protected VM. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// Specifies the ID of the VM to backup. Changing this forces a new resource to be created.
	SourceVmId interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
}

// The set of arguments for constructing a ProtectedVM resource.
type ProtectedVMArgs struct {
	// Specifies the id of the backup policy to use.
	BackupPolicyId interface{}
	// Specifies the name of the Recovery Services Vault to use. Changing this forces a new resource to be created.
	RecoveryVaultName interface{}
	// The name of the resource group in which to create the Recovery Services Protected VM. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// Specifies the ID of the VM to backup. Changing this forces a new resource to be created.
	SourceVmId interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
}
