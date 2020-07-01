// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package apimanagement

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Manages an API Operation within an API Management Service.
//
// ## Example Usage
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-azure/sdk/v3/go/azure/apimanagement"
// 	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		exampleApi, err := apimanagement.LookupApi(ctx, &apimanagement.LookupApiArgs{
// 			Name:              "search-api",
// 			ApiManagementName: "search-api-management",
// 			ResourceGroupName: "search-service",
// 			Revision:          "2",
// 		}, nil)
// 		if err != nil {
// 			return err
// 		}
// 		_, err = apimanagement.NewApiOperation(ctx, "exampleApiOperation", &apimanagement.ApiOperationArgs{
// 			OperationId:       pulumi.String("user-delete"),
// 			ApiName:           pulumi.String(exampleApi.Name),
// 			ApiManagementName: pulumi.String(exampleApi.ApiManagementName),
// 			ResourceGroupName: pulumi.String(exampleApi.ResourceGroupName),
// 			DisplayName:       pulumi.String("Delete User Operation"),
// 			Method:            pulumi.String("DELETE"),
// 			UrlTemplate:       pulumi.String("/users/{id}/delete"),
// 			Description:       pulumi.String("This can only be done by the logged in user."),
// 			Responses: apimanagement.ApiOperationResponseArray{
// 				&apimanagement.ApiOperationResponseArgs{
// 					StatusCode: pulumi.Int(200),
// 				},
// 			},
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
type ApiOperation struct {
	pulumi.CustomResourceState

	// The Name of the API Management Service where the API exists. Changing this forces a new resource to be created.
	ApiManagementName pulumi.StringOutput `pulumi:"apiManagementName"`
	// The name of the API within the API Management Service where this API Operation should be created. Changing this forces a new resource to be created.
	ApiName pulumi.StringOutput `pulumi:"apiName"`
	// A description for this API Operation, which may include HTML formatting tags.
	Description pulumi.StringPtrOutput `pulumi:"description"`
	// The Display Name for this API Management Operation.
	DisplayName pulumi.StringOutput `pulumi:"displayName"`
	// The HTTP Method used for this API Management Operation, like `GET`, `DELETE`, `PUT` or `POST` - but not limited to these values.
	Method pulumi.StringOutput `pulumi:"method"`
	// A unique identifier for this API Operation. Changing this forces a new resource to be created.
	OperationId pulumi.StringOutput `pulumi:"operationId"`
	// A `request` block as defined below.
	Request ApiOperationRequestOutput `pulumi:"request"`
	// The Name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringOutput `pulumi:"resourceGroupName"`
	// One or more `response` blocks as defined below.
	Responses ApiOperationResponseArrayOutput `pulumi:"responses"`
	// One or more `templateParameter` blocks as defined below.
	TemplateParameters ApiOperationTemplateParameterArrayOutput `pulumi:"templateParameters"`
	// The relative URL Template identifying the target resource for this operation, which may include parameters.
	UrlTemplate pulumi.StringOutput `pulumi:"urlTemplate"`
}

// NewApiOperation registers a new resource with the given unique name, arguments, and options.
func NewApiOperation(ctx *pulumi.Context,
	name string, args *ApiOperationArgs, opts ...pulumi.ResourceOption) (*ApiOperation, error) {
	if args == nil || args.ApiManagementName == nil {
		return nil, errors.New("missing required argument 'ApiManagementName'")
	}
	if args == nil || args.ApiName == nil {
		return nil, errors.New("missing required argument 'ApiName'")
	}
	if args == nil || args.DisplayName == nil {
		return nil, errors.New("missing required argument 'DisplayName'")
	}
	if args == nil || args.Method == nil {
		return nil, errors.New("missing required argument 'Method'")
	}
	if args == nil || args.OperationId == nil {
		return nil, errors.New("missing required argument 'OperationId'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.UrlTemplate == nil {
		return nil, errors.New("missing required argument 'UrlTemplate'")
	}
	if args == nil {
		args = &ApiOperationArgs{}
	}
	var resource ApiOperation
	err := ctx.RegisterResource("azure:apimanagement/apiOperation:ApiOperation", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetApiOperation gets an existing ApiOperation resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetApiOperation(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ApiOperationState, opts ...pulumi.ResourceOption) (*ApiOperation, error) {
	var resource ApiOperation
	err := ctx.ReadResource("azure:apimanagement/apiOperation:ApiOperation", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ApiOperation resources.
type apiOperationState struct {
	// The Name of the API Management Service where the API exists. Changing this forces a new resource to be created.
	ApiManagementName *string `pulumi:"apiManagementName"`
	// The name of the API within the API Management Service where this API Operation should be created. Changing this forces a new resource to be created.
	ApiName *string `pulumi:"apiName"`
	// A description for this API Operation, which may include HTML formatting tags.
	Description *string `pulumi:"description"`
	// The Display Name for this API Management Operation.
	DisplayName *string `pulumi:"displayName"`
	// The HTTP Method used for this API Management Operation, like `GET`, `DELETE`, `PUT` or `POST` - but not limited to these values.
	Method *string `pulumi:"method"`
	// A unique identifier for this API Operation. Changing this forces a new resource to be created.
	OperationId *string `pulumi:"operationId"`
	// A `request` block as defined below.
	Request *ApiOperationRequest `pulumi:"request"`
	// The Name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
	ResourceGroupName *string `pulumi:"resourceGroupName"`
	// One or more `response` blocks as defined below.
	Responses []ApiOperationResponse `pulumi:"responses"`
	// One or more `templateParameter` blocks as defined below.
	TemplateParameters []ApiOperationTemplateParameter `pulumi:"templateParameters"`
	// The relative URL Template identifying the target resource for this operation, which may include parameters.
	UrlTemplate *string `pulumi:"urlTemplate"`
}

type ApiOperationState struct {
	// The Name of the API Management Service where the API exists. Changing this forces a new resource to be created.
	ApiManagementName pulumi.StringPtrInput
	// The name of the API within the API Management Service where this API Operation should be created. Changing this forces a new resource to be created.
	ApiName pulumi.StringPtrInput
	// A description for this API Operation, which may include HTML formatting tags.
	Description pulumi.StringPtrInput
	// The Display Name for this API Management Operation.
	DisplayName pulumi.StringPtrInput
	// The HTTP Method used for this API Management Operation, like `GET`, `DELETE`, `PUT` or `POST` - but not limited to these values.
	Method pulumi.StringPtrInput
	// A unique identifier for this API Operation. Changing this forces a new resource to be created.
	OperationId pulumi.StringPtrInput
	// A `request` block as defined below.
	Request ApiOperationRequestPtrInput
	// The Name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringPtrInput
	// One or more `response` blocks as defined below.
	Responses ApiOperationResponseArrayInput
	// One or more `templateParameter` blocks as defined below.
	TemplateParameters ApiOperationTemplateParameterArrayInput
	// The relative URL Template identifying the target resource for this operation, which may include parameters.
	UrlTemplate pulumi.StringPtrInput
}

func (ApiOperationState) ElementType() reflect.Type {
	return reflect.TypeOf((*apiOperationState)(nil)).Elem()
}

type apiOperationArgs struct {
	// The Name of the API Management Service where the API exists. Changing this forces a new resource to be created.
	ApiManagementName string `pulumi:"apiManagementName"`
	// The name of the API within the API Management Service where this API Operation should be created. Changing this forces a new resource to be created.
	ApiName string `pulumi:"apiName"`
	// A description for this API Operation, which may include HTML formatting tags.
	Description *string `pulumi:"description"`
	// The Display Name for this API Management Operation.
	DisplayName string `pulumi:"displayName"`
	// The HTTP Method used for this API Management Operation, like `GET`, `DELETE`, `PUT` or `POST` - but not limited to these values.
	Method string `pulumi:"method"`
	// A unique identifier for this API Operation. Changing this forces a new resource to be created.
	OperationId string `pulumi:"operationId"`
	// A `request` block as defined below.
	Request *ApiOperationRequest `pulumi:"request"`
	// The Name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// One or more `response` blocks as defined below.
	Responses []ApiOperationResponse `pulumi:"responses"`
	// One or more `templateParameter` blocks as defined below.
	TemplateParameters []ApiOperationTemplateParameter `pulumi:"templateParameters"`
	// The relative URL Template identifying the target resource for this operation, which may include parameters.
	UrlTemplate string `pulumi:"urlTemplate"`
}

// The set of arguments for constructing a ApiOperation resource.
type ApiOperationArgs struct {
	// The Name of the API Management Service where the API exists. Changing this forces a new resource to be created.
	ApiManagementName pulumi.StringInput
	// The name of the API within the API Management Service where this API Operation should be created. Changing this forces a new resource to be created.
	ApiName pulumi.StringInput
	// A description for this API Operation, which may include HTML formatting tags.
	Description pulumi.StringPtrInput
	// The Display Name for this API Management Operation.
	DisplayName pulumi.StringInput
	// The HTTP Method used for this API Management Operation, like `GET`, `DELETE`, `PUT` or `POST` - but not limited to these values.
	Method pulumi.StringInput
	// A unique identifier for this API Operation. Changing this forces a new resource to be created.
	OperationId pulumi.StringInput
	// A `request` block as defined below.
	Request ApiOperationRequestPtrInput
	// The Name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
	ResourceGroupName pulumi.StringInput
	// One or more `response` blocks as defined below.
	Responses ApiOperationResponseArrayInput
	// One or more `templateParameter` blocks as defined below.
	TemplateParameters ApiOperationTemplateParameterArrayInput
	// The relative URL Template identifying the target resource for this operation, which may include parameters.
	UrlTemplate pulumi.StringInput
}

func (ApiOperationArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*apiOperationArgs)(nil)).Elem()
}
