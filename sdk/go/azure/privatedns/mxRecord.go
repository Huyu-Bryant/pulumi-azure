// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

// nolint: lll
package privatedns

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Enables you to manage DNS MX Records within Azure Private DNS.
// 
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/private_dns_mx_record.html.markdown.
type MxRecord struct {
	pulumi.CustomResourceState

	// The name of the DNS MX Record. Changing this forces a new resource to be created. Default to '@' for root zone entry.
	Name pulumi.StringOutput `pulumi:"name"`
	// One or more `record` blocks as defined below.
	Records MxRecordRecordArrayOutput `pulumi:"records"`
	// Specifies the resource group where the resource exists. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringOutput `pulumi:"resourceGroupName"`
	// A mapping of tags to assign to the resource.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	Ttl pulumi.IntOutput `pulumi:"ttl"`
	// Specifies the Private DNS Zone where the resource exists. Changing this forces a new resource to be created.
	ZoneName pulumi.StringOutput `pulumi:"zoneName"`
}

// NewMxRecord registers a new resource with the given unique name, arguments, and options.
func NewMxRecord(ctx *pulumi.Context,
	name string, args *MxRecordArgs, opts ...pulumi.ResourceOption) (*MxRecord, error) {
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
	if args == nil {
		args = &MxRecordArgs{}
	}
	var resource MxRecord
	err := ctx.RegisterResource("azure:privatedns/mxRecord:MxRecord", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetMxRecord gets an existing MxRecord resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetMxRecord(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *MxRecordState, opts ...pulumi.ResourceOption) (*MxRecord, error) {
	var resource MxRecord
	err := ctx.ReadResource("azure:privatedns/mxRecord:MxRecord", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering MxRecord resources.
type mxRecordState struct {
	// The name of the DNS MX Record. Changing this forces a new resource to be created. Default to '@' for root zone entry.
	Name *string `pulumi:"name"`
	// One or more `record` blocks as defined below.
	Records []MxRecordRecord `pulumi:"records"`
	// Specifies the resource group where the resource exists. Changing this forces a new resource to be created.
	ResourceGroupName *string `pulumi:"resourceGroupName"`
	// A mapping of tags to assign to the resource.
	Tags map[string]string `pulumi:"tags"`
	Ttl *int `pulumi:"ttl"`
	// Specifies the Private DNS Zone where the resource exists. Changing this forces a new resource to be created.
	ZoneName *string `pulumi:"zoneName"`
}

type MxRecordState struct {
	// The name of the DNS MX Record. Changing this forces a new resource to be created. Default to '@' for root zone entry.
	Name pulumi.StringPtrInput
	// One or more `record` blocks as defined below.
	Records MxRecordRecordArrayInput
	// Specifies the resource group where the resource exists. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringPtrInput
	// A mapping of tags to assign to the resource.
	Tags pulumi.StringMapInput
	Ttl pulumi.IntPtrInput
	// Specifies the Private DNS Zone where the resource exists. Changing this forces a new resource to be created.
	ZoneName pulumi.StringPtrInput
}

func (MxRecordState) ElementType() reflect.Type {
	return reflect.TypeOf((*mxRecordState)(nil)).Elem()
}

type mxRecordArgs struct {
	// The name of the DNS MX Record. Changing this forces a new resource to be created. Default to '@' for root zone entry.
	Name *string `pulumi:"name"`
	// One or more `record` blocks as defined below.
	Records []MxRecordRecord `pulumi:"records"`
	// Specifies the resource group where the resource exists. Changing this forces a new resource to be created.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// A mapping of tags to assign to the resource.
	Tags map[string]string `pulumi:"tags"`
	Ttl int `pulumi:"ttl"`
	// Specifies the Private DNS Zone where the resource exists. Changing this forces a new resource to be created.
	ZoneName string `pulumi:"zoneName"`
}

// The set of arguments for constructing a MxRecord resource.
type MxRecordArgs struct {
	// The name of the DNS MX Record. Changing this forces a new resource to be created. Default to '@' for root zone entry.
	Name pulumi.StringPtrInput
	// One or more `record` blocks as defined below.
	Records MxRecordRecordArrayInput
	// Specifies the resource group where the resource exists. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringInput
	// A mapping of tags to assign to the resource.
	Tags pulumi.StringMapInput
	Ttl pulumi.IntInput
	// Specifies the Private DNS Zone where the resource exists. Changing this forces a new resource to be created.
	ZoneName pulumi.StringInput
}

func (MxRecordArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*mxRecordArgs)(nil)).Elem()
}
