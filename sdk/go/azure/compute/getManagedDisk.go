// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package compute

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Use this data source to access information about an existing Managed Disk.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/managed_disk.html.markdown.
func LookupManagedDisk(ctx *pulumi.Context, args *GetManagedDiskArgs) (*GetManagedDiskResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["name"] = args.Name
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["tags"] = args.Tags
		inputs["zones"] = args.Zones
	}
	outputs, err := ctx.Invoke("azure:compute/getManagedDisk:getManagedDisk", inputs)
	if err != nil {
		return nil, err
	}
	return &GetManagedDiskResult{
		CreateOption: outputs["createOption"],
		DiskEncryptionSetId: outputs["diskEncryptionSetId"],
		DiskIopsReadWrite: outputs["diskIopsReadWrite"],
		DiskMbpsReadWrite: outputs["diskMbpsReadWrite"],
		DiskSizeGb: outputs["diskSizeGb"],
		Name: outputs["name"],
		OsType: outputs["osType"],
		ResourceGroupName: outputs["resourceGroupName"],
		SourceResourceId: outputs["sourceResourceId"],
		SourceUri: outputs["sourceUri"],
		StorageAccountId: outputs["storageAccountId"],
		StorageAccountType: outputs["storageAccountType"],
		Tags: outputs["tags"],
		Zones: outputs["zones"],
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getManagedDisk.
type GetManagedDiskArgs struct {
	// Specifies the name of the Managed Disk.
	Name interface{}
	// Specifies the name of the Resource Group where this Managed Disk exists.
	ResourceGroupName interface{}
	Tags interface{}
	Zones interface{}
}

// A collection of values returned by getManagedDisk.
type GetManagedDiskResult struct {
	CreateOption interface{}
	// The ID of the Disk Encryption Set used to encrypt this Managed Disk.
	DiskEncryptionSetId interface{}
	// The number of IOPS allowed for this disk, where one operation can transfer between 4k and 256k bytes.
	DiskIopsReadWrite interface{}
	// The bandwidth allowed for this disk.
	DiskMbpsReadWrite interface{}
	// The size of the Managed Disk in gigabytes.
	DiskSizeGb interface{}
	Name interface{}
	// The operating system used for this Managed Disk.
	OsType interface{}
	ResourceGroupName interface{}
	// The ID of an existing Managed Disk which this Disk was created from.
	SourceResourceId interface{}
	// The Source URI for this Managed Disk.
	SourceUri interface{}
	// The ID of the Storage Account where the `sourceUri` is located.
	StorageAccountId interface{}
	// The storage account type for the Managed Disk.
	StorageAccountType interface{}
	// A mapping of tags assigned to the resource.
	Tags interface{}
	// A list of Availability Zones where the Managed Disk exists.
	Zones interface{}
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}
