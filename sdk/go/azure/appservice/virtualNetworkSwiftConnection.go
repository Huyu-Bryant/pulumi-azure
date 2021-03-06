// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package appservice

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Manages an App Service Virtual Network Association (this is for the [Regional VNet Integration](https://docs.microsoft.com/en-us/azure/app-service/web-sites-integrate-with-vnet#regional-vnet-integration) which is still in preview).
//
// ## Example Usage
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-azure/sdk/v3/go/azure/appservice"
// 	"github.com/pulumi/pulumi-azure/sdk/v3/go/azure/core"
// 	"github.com/pulumi/pulumi-azure/sdk/v3/go/azure/network"
// 	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		testResourceGroup, err := core.NewResourceGroup(ctx, "testResourceGroup", &core.ResourceGroupArgs{
// 			Location: pulumi.String("uksouth"),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		testVirtualNetwork, err := network.NewVirtualNetwork(ctx, "testVirtualNetwork", &network.VirtualNetworkArgs{
// 			AddressSpaces: pulumi.StringArray{
// 				pulumi.String("10.0.0.0/16"),
// 			},
// 			Location:          testResourceGroup.Location,
// 			ResourceGroupName: testResourceGroup.Name,
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		test1, err := network.NewSubnet(ctx, "test1", &network.SubnetArgs{
// 			ResourceGroupName:  testResourceGroup.Name,
// 			VirtualNetworkName: testVirtualNetwork.Name,
// 			AddressPrefix:      pulumi.String("10.0.1.0/24"),
// 			Delegations: network.SubnetDelegationArray{
// 				&network.SubnetDelegationArgs{
// 					Name: pulumi.String("acctestdelegation"),
// 					ServiceDelegation: &network.SubnetDelegationServiceDelegationArgs{
// 						Name: pulumi.String("Microsoft.Web/serverFarms"),
// 						Actions: pulumi.StringArray{
// 							pulumi.String("Microsoft.Network/virtualNetworks/subnets/action"),
// 						},
// 					},
// 				},
// 			},
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		testPlan, err := appservice.NewPlan(ctx, "testPlan", &appservice.PlanArgs{
// 			Location:          testResourceGroup.Location,
// 			ResourceGroupName: testResourceGroup.Name,
// 			Sku: &appservice.PlanSkuArgs{
// 				Tier: pulumi.String("Standard"),
// 				Size: pulumi.String("S1"),
// 			},
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		testAppService, err := appservice.NewAppService(ctx, "testAppService", &appservice.AppServiceArgs{
// 			Location:          testResourceGroup.Location,
// 			ResourceGroupName: testResourceGroup.Name,
// 			AppServicePlanId:  testPlan.ID(),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		_, err = appservice.NewVirtualNetworkSwiftConnection(ctx, "testVirtualNetworkSwiftConnection", &appservice.VirtualNetworkSwiftConnectionArgs{
// 			AppServiceId: testAppService.ID(),
// 			SubnetId:     test1.ID(),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
type VirtualNetworkSwiftConnection struct {
	pulumi.CustomResourceState

	// The ID of the App Service to associate to the VNet. Changing this forces a new resource to be created.
	AppServiceId pulumi.StringOutput `pulumi:"appServiceId"`
	// The ID of the subnet the app service will be associated to (the subnet must have a `serviceDelegation` configured for `Microsoft.Web/serverFarms`).
	SubnetId pulumi.StringOutput `pulumi:"subnetId"`
}

// NewVirtualNetworkSwiftConnection registers a new resource with the given unique name, arguments, and options.
func NewVirtualNetworkSwiftConnection(ctx *pulumi.Context,
	name string, args *VirtualNetworkSwiftConnectionArgs, opts ...pulumi.ResourceOption) (*VirtualNetworkSwiftConnection, error) {
	if args == nil || args.AppServiceId == nil {
		return nil, errors.New("missing required argument 'AppServiceId'")
	}
	if args == nil || args.SubnetId == nil {
		return nil, errors.New("missing required argument 'SubnetId'")
	}
	if args == nil {
		args = &VirtualNetworkSwiftConnectionArgs{}
	}
	var resource VirtualNetworkSwiftConnection
	err := ctx.RegisterResource("azure:appservice/virtualNetworkSwiftConnection:VirtualNetworkSwiftConnection", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetVirtualNetworkSwiftConnection gets an existing VirtualNetworkSwiftConnection resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetVirtualNetworkSwiftConnection(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *VirtualNetworkSwiftConnectionState, opts ...pulumi.ResourceOption) (*VirtualNetworkSwiftConnection, error) {
	var resource VirtualNetworkSwiftConnection
	err := ctx.ReadResource("azure:appservice/virtualNetworkSwiftConnection:VirtualNetworkSwiftConnection", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering VirtualNetworkSwiftConnection resources.
type virtualNetworkSwiftConnectionState struct {
	// The ID of the App Service to associate to the VNet. Changing this forces a new resource to be created.
	AppServiceId *string `pulumi:"appServiceId"`
	// The ID of the subnet the app service will be associated to (the subnet must have a `serviceDelegation` configured for `Microsoft.Web/serverFarms`).
	SubnetId *string `pulumi:"subnetId"`
}

type VirtualNetworkSwiftConnectionState struct {
	// The ID of the App Service to associate to the VNet. Changing this forces a new resource to be created.
	AppServiceId pulumi.StringPtrInput
	// The ID of the subnet the app service will be associated to (the subnet must have a `serviceDelegation` configured for `Microsoft.Web/serverFarms`).
	SubnetId pulumi.StringPtrInput
}

func (VirtualNetworkSwiftConnectionState) ElementType() reflect.Type {
	return reflect.TypeOf((*virtualNetworkSwiftConnectionState)(nil)).Elem()
}

type virtualNetworkSwiftConnectionArgs struct {
	// The ID of the App Service to associate to the VNet. Changing this forces a new resource to be created.
	AppServiceId string `pulumi:"appServiceId"`
	// The ID of the subnet the app service will be associated to (the subnet must have a `serviceDelegation` configured for `Microsoft.Web/serverFarms`).
	SubnetId string `pulumi:"subnetId"`
}

// The set of arguments for constructing a VirtualNetworkSwiftConnection resource.
type VirtualNetworkSwiftConnectionArgs struct {
	// The ID of the App Service to associate to the VNet. Changing this forces a new resource to be created.
	AppServiceId pulumi.StringInput
	// The ID of the subnet the app service will be associated to (the subnet must have a `serviceDelegation` configured for `Microsoft.Web/serverFarms`).
	SubnetId pulumi.StringInput
}

func (VirtualNetworkSwiftConnectionArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*virtualNetworkSwiftConnectionArgs)(nil)).Elem()
}
