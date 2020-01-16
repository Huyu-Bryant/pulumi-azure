// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package iot

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Use this data source to access information about an existing IotHub Shared Access Policy
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/iothub_shared_access_policy.html.markdown.
func LookupSharedAccessPolicy(ctx *pulumi.Context, args *GetSharedAccessPolicyArgs) (*GetSharedAccessPolicyResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["iothubName"] = args.IothubName
		inputs["name"] = args.Name
		inputs["resourceGroupName"] = args.ResourceGroupName
	}
	outputs, err := ctx.Invoke("azure:iot/getSharedAccessPolicy:getSharedAccessPolicy", inputs)
	if err != nil {
		return nil, err
	}
	return &GetSharedAccessPolicyResult{
		IothubName: outputs["iothubName"],
		Name: outputs["name"],
		PrimaryConnectionString: outputs["primaryConnectionString"],
		PrimaryKey: outputs["primaryKey"],
		ResourceGroupName: outputs["resourceGroupName"],
		SecondaryConnectionString: outputs["secondaryConnectionString"],
		SecondaryKey: outputs["secondaryKey"],
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getSharedAccessPolicy.
type GetSharedAccessPolicyArgs struct {
	// The name of the IoTHub to which this Shared Access Policy belongs.
	IothubName interface{}
	// Specifies the name of the IotHub Shared Access Policy resource.
	Name interface{}
	// The name of the resource group under which the IotHub Shared Access Policy resource has to be created.
	ResourceGroupName interface{}
}

// A collection of values returned by getSharedAccessPolicy.
type GetSharedAccessPolicyResult struct {
	IothubName interface{}
	Name interface{}
	// The primary connection string of the Shared Access Policy.
	PrimaryConnectionString interface{}
	// The primary key used to create the authentication token.
	PrimaryKey interface{}
	ResourceGroupName interface{}
	// The secondary connection string of the Shared Access Policy.
	SecondaryConnectionString interface{}
	// The secondary key used to create the authentication token.
	SecondaryKey interface{}
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}
