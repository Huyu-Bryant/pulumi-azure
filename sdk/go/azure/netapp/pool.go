// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

// nolint: lll
package netapp

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manages a Pool within a NetApp Account.
// 
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/netapp_pool.html.markdown.
type Pool struct {
	pulumi.CustomResourceState

	// The name of the NetApp account in which the NetApp Pool should be created. Changing this forces a new resource to be created.
	AccountName pulumi.StringOutput `pulumi:"accountName"`
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location pulumi.StringOutput `pulumi:"location"`
	// The name of the NetApp Pool. Changing this forces a new resource to be created.
	Name pulumi.StringOutput `pulumi:"name"`
	// The name of the resource group where the NetApp Pool should be created. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringOutput `pulumi:"resourceGroupName"`
	// The service level of the file system. Valid values include `Premium`, `Standard`, or `Ultra`.
	ServiceLevel pulumi.StringOutput `pulumi:"serviceLevel"`
	// Provisioned size of the pool in TB. Value must be between `4` and `500`.
	SizeInTb pulumi.IntOutput `pulumi:"sizeInTb"`
}

// NewPool registers a new resource with the given unique name, arguments, and options.
func NewPool(ctx *pulumi.Context,
	name string, args *PoolArgs, opts ...pulumi.ResourceOption) (*Pool, error) {
	if args == nil || args.AccountName == nil {
		return nil, errors.New("missing required argument 'AccountName'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.ServiceLevel == nil {
		return nil, errors.New("missing required argument 'ServiceLevel'")
	}
	if args == nil || args.SizeInTb == nil {
		return nil, errors.New("missing required argument 'SizeInTb'")
	}
	if args == nil {
		args = &PoolArgs{}
	}
	var resource Pool
	err := ctx.RegisterResource("azure:netapp/pool:Pool", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetPool gets an existing Pool resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetPool(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *PoolState, opts ...pulumi.ResourceOption) (*Pool, error) {
	var resource Pool
	err := ctx.ReadResource("azure:netapp/pool:Pool", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Pool resources.
type poolState struct {
	// The name of the NetApp account in which the NetApp Pool should be created. Changing this forces a new resource to be created.
	AccountName *string `pulumi:"accountName"`
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location *string `pulumi:"location"`
	// The name of the NetApp Pool. Changing this forces a new resource to be created.
	Name *string `pulumi:"name"`
	// The name of the resource group where the NetApp Pool should be created. Changing this forces a new resource to be created.
	ResourceGroupName *string `pulumi:"resourceGroupName"`
	// The service level of the file system. Valid values include `Premium`, `Standard`, or `Ultra`.
	ServiceLevel *string `pulumi:"serviceLevel"`
	// Provisioned size of the pool in TB. Value must be between `4` and `500`.
	SizeInTb *int `pulumi:"sizeInTb"`
}

type PoolState struct {
	// The name of the NetApp account in which the NetApp Pool should be created. Changing this forces a new resource to be created.
	AccountName pulumi.StringPtrInput
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location pulumi.StringPtrInput
	// The name of the NetApp Pool. Changing this forces a new resource to be created.
	Name pulumi.StringPtrInput
	// The name of the resource group where the NetApp Pool should be created. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringPtrInput
	// The service level of the file system. Valid values include `Premium`, `Standard`, or `Ultra`.
	ServiceLevel pulumi.StringPtrInput
	// Provisioned size of the pool in TB. Value must be between `4` and `500`.
	SizeInTb pulumi.IntPtrInput
}

func (PoolState) ElementType() reflect.Type {
	return reflect.TypeOf((*poolState)(nil)).Elem()
}

type poolArgs struct {
	// The name of the NetApp account in which the NetApp Pool should be created. Changing this forces a new resource to be created.
	AccountName string `pulumi:"accountName"`
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location *string `pulumi:"location"`
	// The name of the NetApp Pool. Changing this forces a new resource to be created.
	Name *string `pulumi:"name"`
	// The name of the resource group where the NetApp Pool should be created. Changing this forces a new resource to be created.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The service level of the file system. Valid values include `Premium`, `Standard`, or `Ultra`.
	ServiceLevel string `pulumi:"serviceLevel"`
	// Provisioned size of the pool in TB. Value must be between `4` and `500`.
	SizeInTb int `pulumi:"sizeInTb"`
}

// The set of arguments for constructing a Pool resource.
type PoolArgs struct {
	// The name of the NetApp account in which the NetApp Pool should be created. Changing this forces a new resource to be created.
	AccountName pulumi.StringInput
	// Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
	Location pulumi.StringPtrInput
	// The name of the NetApp Pool. Changing this forces a new resource to be created.
	Name pulumi.StringPtrInput
	// The name of the resource group where the NetApp Pool should be created. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringInput
	// The service level of the file system. Valid values include `Premium`, `Standard`, or `Ultra`.
	ServiceLevel pulumi.StringInput
	// Provisioned size of the pool in TB. Value must be between `4` and `500`.
	SizeInTb pulumi.IntInput
}

func (PoolArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*poolArgs)(nil)).Elem()
}
