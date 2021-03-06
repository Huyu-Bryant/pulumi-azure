// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package datafactory

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Use this data source to access information about an existing Azure Data Factory (Version 2).
//
// ## Example Usage
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-azure/sdk/v3/go/azure/datafactory"
// 	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		_, err := datafactory.LookupFactory(ctx, &datafactory.LookupFactoryArgs{
// 			Name:              azurerm_data_factory.Example.Name,
// 			ResourceGroupName: azurerm_data_factory.Example.Resource_group_name,
// 		}, nil)
// 		if err != nil {
// 			return err
// 		}
// 		ctx.Export("dataFactoryId", azurerm_data_factory.Example.Id)
// 		return nil
// 	})
// }
// ```
func LookupFactory(ctx *pulumi.Context, args *LookupFactoryArgs, opts ...pulumi.InvokeOption) (*LookupFactoryResult, error) {
	var rv LookupFactoryResult
	err := ctx.Invoke("azure:datafactory/getFactory:getFactory", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

// A collection of arguments for invoking getFactory.
type LookupFactoryArgs struct {
	// Specifies the name of the Data Factory to retrieve information about.
	Name string `pulumi:"name"`
	// The name of the resource group where the Data Factory exists.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// A collection of values returned by getFactory.
type LookupFactoryResult struct {
	// A `githubConfiguration` block as defined below.
	GithubConfigurations []GetFactoryGithubConfiguration `pulumi:"githubConfigurations"`
	// The provider-assigned unique ID for this managed resource.
	Id string `pulumi:"id"`
	// An `identity` block as defined below.
	Identities []GetFactoryIdentity `pulumi:"identities"`
	// The Azure location where the resource exists.
	Location          string `pulumi:"location"`
	Name              string `pulumi:"name"`
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// A mapping of tags assigned to the resource.
	// ---
	Tags map[string]string `pulumi:"tags"`
	// A `vstsConfiguration` block as defined below.
	VstsConfigurations []GetFactoryVstsConfiguration `pulumi:"vstsConfigurations"`
}
