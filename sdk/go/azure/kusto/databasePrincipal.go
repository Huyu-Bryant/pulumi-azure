// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package kusto

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manages a Kusto (also known as Azure Data Explorer) Database Principal
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/kusto_database_principal.html.markdown.
type DatabasePrincipal struct {
	s *pulumi.ResourceState
}

// NewDatabasePrincipal registers a new resource with the given unique name, arguments, and options.
func NewDatabasePrincipal(ctx *pulumi.Context,
	name string, args *DatabasePrincipalArgs, opts ...pulumi.ResourceOpt) (*DatabasePrincipal, error) {
	if args == nil || args.ClientId == nil {
		return nil, errors.New("missing required argument 'ClientId'")
	}
	if args == nil || args.ClusterName == nil {
		return nil, errors.New("missing required argument 'ClusterName'")
	}
	if args == nil || args.DatabaseName == nil {
		return nil, errors.New("missing required argument 'DatabaseName'")
	}
	if args == nil || args.ObjectId == nil {
		return nil, errors.New("missing required argument 'ObjectId'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.Role == nil {
		return nil, errors.New("missing required argument 'Role'")
	}
	if args == nil || args.Type == nil {
		return nil, errors.New("missing required argument 'Type'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["clientId"] = nil
		inputs["clusterName"] = nil
		inputs["databaseName"] = nil
		inputs["objectId"] = nil
		inputs["resourceGroupName"] = nil
		inputs["role"] = nil
		inputs["type"] = nil
	} else {
		inputs["clientId"] = args.ClientId
		inputs["clusterName"] = args.ClusterName
		inputs["databaseName"] = args.DatabaseName
		inputs["objectId"] = args.ObjectId
		inputs["resourceGroupName"] = args.ResourceGroupName
		inputs["role"] = args.Role
		inputs["type"] = args.Type
	}
	inputs["appId"] = nil
	inputs["email"] = nil
	inputs["fullyQualifiedName"] = nil
	inputs["name"] = nil
	s, err := ctx.RegisterResource("azure:kusto/databasePrincipal:DatabasePrincipal", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &DatabasePrincipal{s: s}, nil
}

// GetDatabasePrincipal gets an existing DatabasePrincipal resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetDatabasePrincipal(ctx *pulumi.Context,
	name string, id pulumi.ID, state *DatabasePrincipalState, opts ...pulumi.ResourceOpt) (*DatabasePrincipal, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["appId"] = state.AppId
		inputs["clientId"] = state.ClientId
		inputs["clusterName"] = state.ClusterName
		inputs["databaseName"] = state.DatabaseName
		inputs["email"] = state.Email
		inputs["fullyQualifiedName"] = state.FullyQualifiedName
		inputs["name"] = state.Name
		inputs["objectId"] = state.ObjectId
		inputs["resourceGroupName"] = state.ResourceGroupName
		inputs["role"] = state.Role
		inputs["type"] = state.Type
	}
	s, err := ctx.ReadResource("azure:kusto/databasePrincipal:DatabasePrincipal", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &DatabasePrincipal{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *DatabasePrincipal) URN() pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *DatabasePrincipal) ID() pulumi.IDOutput {
	return r.s.ID()
}

// The app id, if not empty, of the principal.
func (r *DatabasePrincipal) AppId() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["appId"])
}

// The Client ID that owns the specified `objectId`. Changing this forces a new resource to be created. 
func (r *DatabasePrincipal) ClientId() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["clientId"])
}

// Specifies the name of the Kusto Cluster this database principal will be added to. Changing this forces a new resource to be created.
func (r *DatabasePrincipal) ClusterName() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["clusterName"])
}

// Specified the name of the Kusto Database this principal will be added to. Changing this forces a new resource to be created.
func (r *DatabasePrincipal) DatabaseName() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["databaseName"])
}

// The email, if not empty, of the principal.
func (r *DatabasePrincipal) Email() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["email"])
}

// The fully qualified name of the principal.
func (r *DatabasePrincipal) FullyQualifiedName() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["fullyQualifiedName"])
}

// The name of the Kusto Database Principal.
func (r *DatabasePrincipal) Name() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["name"])
}

// An Object ID of a User, Group, or App. Changing this forces a new resource to be created. 
func (r *DatabasePrincipal) ObjectId() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["objectId"])
}

// Specifies the Resource Group where the Kusto Database Principal should exist. Changing this forces a new resource to be created.
func (r *DatabasePrincipal) ResourceGroupName() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["resourceGroupName"])
}

// Specifies the permissions the Principal will have. Valid values include `Admin`, `Ingestor`, `Monitor`, `UnrestrictedViewers`, `User`, `Viewer`. Changing this forces a new resource to be created.
func (r *DatabasePrincipal) Role() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["role"])
}

// Specifies the type of object the principal is. Valid values include `App`, `Group`, `User`. Changing this forces a new resource to be created.
func (r *DatabasePrincipal) Type() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["type"])
}

// Input properties used for looking up and filtering DatabasePrincipal resources.
type DatabasePrincipalState struct {
	// The app id, if not empty, of the principal.
	AppId interface{}
	// The Client ID that owns the specified `objectId`. Changing this forces a new resource to be created. 
	ClientId interface{}
	// Specifies the name of the Kusto Cluster this database principal will be added to. Changing this forces a new resource to be created.
	ClusterName interface{}
	// Specified the name of the Kusto Database this principal will be added to. Changing this forces a new resource to be created.
	DatabaseName interface{}
	// The email, if not empty, of the principal.
	Email interface{}
	// The fully qualified name of the principal.
	FullyQualifiedName interface{}
	// The name of the Kusto Database Principal.
	Name interface{}
	// An Object ID of a User, Group, or App. Changing this forces a new resource to be created. 
	ObjectId interface{}
	// Specifies the Resource Group where the Kusto Database Principal should exist. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// Specifies the permissions the Principal will have. Valid values include `Admin`, `Ingestor`, `Monitor`, `UnrestrictedViewers`, `User`, `Viewer`. Changing this forces a new resource to be created.
	Role interface{}
	// Specifies the type of object the principal is. Valid values include `App`, `Group`, `User`. Changing this forces a new resource to be created.
	Type interface{}
}

// The set of arguments for constructing a DatabasePrincipal resource.
type DatabasePrincipalArgs struct {
	// The Client ID that owns the specified `objectId`. Changing this forces a new resource to be created. 
	ClientId interface{}
	// Specifies the name of the Kusto Cluster this database principal will be added to. Changing this forces a new resource to be created.
	ClusterName interface{}
	// Specified the name of the Kusto Database this principal will be added to. Changing this forces a new resource to be created.
	DatabaseName interface{}
	// An Object ID of a User, Group, or App. Changing this forces a new resource to be created. 
	ObjectId interface{}
	// Specifies the Resource Group where the Kusto Database Principal should exist. Changing this forces a new resource to be created.
	ResourceGroupName interface{}
	// Specifies the permissions the Principal will have. Valid values include `Admin`, `Ingestor`, `Monitor`, `UnrestrictedViewers`, `User`, `Viewer`. Changing this forces a new resource to be created.
	Role interface{}
	// Specifies the type of object the principal is. Valid values include `App`, `Group`, `User`. Changing this forces a new resource to be created.
	Type interface{}
}
