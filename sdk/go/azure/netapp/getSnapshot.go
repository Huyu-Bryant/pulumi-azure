// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package netapp

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Uses this data source to access information about an existing NetApp Snapshot.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/netapp_snapshot.html.markdown.
func LookupSnapshot(ctx *pulumi.Context, args *GetSnapshotArgs) (*GetSnapshotResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["accountName"] = args.AccountName
		inputs["name"] = args.Name
		inputs["poolName"] = args.PoolName
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["volumeName"] = args.VolumeName
	}
	outputs, err := ctx.Invoke("azure:netapp/getSnapshot:getSnapshot", inputs)
	if err != nil {
		return nil, err
	}
	return &GetSnapshotResult{
		AccountName: outputs["accountName"],
		Location: outputs["location"],
		Name: outputs["name"],
		PoolName: outputs["poolName"],
		ResourceGroupName: outputs["resourceGroupName"],
		VolumeName: outputs["volumeName"],
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getSnapshot.
type GetSnapshotArgs struct {
	// The name of the NetApp Account where the NetApp Pool exists.
	AccountName interface{}
	// The name of the NetApp Snapshot.
	Name interface{}
	// The name of the NetApp Pool where the NetApp Volume exists.
	PoolName interface{}
	// The Name of the Resource Group where the NetApp Snapshot exists.
	ResourceGroupName interface{}
	// The name of the NetApp Volume where the NetApp Snapshot exists.
	VolumeName interface{}
}

// A collection of values returned by getSnapshot.
type GetSnapshotResult struct {
	AccountName interface{}
	// The Azure Region where the NetApp Snapshot exists.
	Location interface{}
	Name interface{}
	PoolName interface{}
	ResourceGroupName interface{}
	VolumeName interface{}
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}
