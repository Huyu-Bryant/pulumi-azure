// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages an API Version Set within a API Management Service.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const exampleResourceGroup = new azure.core.ResourceGroup("example", {
 *     location: "West US",
 *     name: "example-resources",
 * });
 * const exampleService = new azure.apimanagement.Service("example", {
 *     location: exampleResourceGroup.location,
 *     name: "example-apim",
 *     publisherEmail: "pub1@email.com",
 *     publisherName: "pub1",
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: {
 *         capacity: 1,
 *         name: "Developer",
 *     },
 * });
 * const exampleApiManagementVersionSet = new azure.ApiManagementVersionSet("example", {
 *     apiManagementName: exampleService.name,
 *     displayName: "ExampleAPIVersionSet",
 *     name: "example-apimapi-1.0.0",
 *     resourceGroupName: exampleResourceGroup.name,
 *     versioningScheme: "Segment",
 * });
 * ```
 */
export class ApiVersionSet extends pulumi.CustomResource {
    /**
     * Get an existing ApiVersionSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApiVersionSetState, opts?: pulumi.CustomResourceOptions): ApiVersionSet {
        return new ApiVersionSet(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:apimanagement/apiVersionSet:ApiVersionSet';

    /**
     * Returns true if the given object is an instance of ApiVersionSet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApiVersionSet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApiVersionSet.__pulumiType;
    }

    /**
     * The name of the API Management Service in which the API Version Set should exist. Changing this forces a new resource to be created.
     */
    public readonly apiManagementName!: pulumi.Output<string>;
    /**
     * The description of API Version Set.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The display name of this API Version Set.
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * The name of the API Version Set. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The name of the Resource Group in which the parent API Management Service exists. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * The name of the Header which should be read from Inbound Requests which defines the API Version.
     */
    public readonly versionHeaderName!: pulumi.Output<string | undefined>;
    /**
     * The name of the Query String which should be read from Inbound Requests which defines the API Version.
     */
    public readonly versionQueryName!: pulumi.Output<string | undefined>;
    /**
     * Specifies where in an Inbound HTTP Request that the API Version should be read from. Possible values are `Header`, `Query` and `Segment`.
     */
    public readonly versioningScheme!: pulumi.Output<string>;

    /**
     * Create a ApiVersionSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiVersionSetArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ApiVersionSetArgs | ApiVersionSetState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ApiVersionSetState | undefined;
            inputs["apiManagementName"] = state ? state.apiManagementName : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["displayName"] = state ? state.displayName : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["versionHeaderName"] = state ? state.versionHeaderName : undefined;
            inputs["versionQueryName"] = state ? state.versionQueryName : undefined;
            inputs["versioningScheme"] = state ? state.versioningScheme : undefined;
        } else {
            const args = argsOrState as ApiVersionSetArgs | undefined;
            if (!args || args.apiManagementName === undefined) {
                throw new Error("Missing required property 'apiManagementName'");
            }
            if (!args || args.displayName === undefined) {
                throw new Error("Missing required property 'displayName'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.versioningScheme === undefined) {
                throw new Error("Missing required property 'versioningScheme'");
            }
            inputs["apiManagementName"] = args ? args.apiManagementName : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["displayName"] = args ? args.displayName : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["versionHeaderName"] = args ? args.versionHeaderName : undefined;
            inputs["versionQueryName"] = args ? args.versionQueryName : undefined;
            inputs["versioningScheme"] = args ? args.versioningScheme : undefined;
        }
        super(ApiVersionSet.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ApiVersionSet resources.
 */
export interface ApiVersionSetState {
    /**
     * The name of the API Management Service in which the API Version Set should exist. Changing this forces a new resource to be created.
     */
    readonly apiManagementName?: pulumi.Input<string>;
    /**
     * The description of API Version Set.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The display name of this API Version Set.
     */
    readonly displayName?: pulumi.Input<string>;
    /**
     * The name of the API Version Set. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the parent API Management Service exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * The name of the Header which should be read from Inbound Requests which defines the API Version.
     */
    readonly versionHeaderName?: pulumi.Input<string>;
    /**
     * The name of the Query String which should be read from Inbound Requests which defines the API Version.
     */
    readonly versionQueryName?: pulumi.Input<string>;
    /**
     * Specifies where in an Inbound HTTP Request that the API Version should be read from. Possible values are `Header`, `Query` and `Segment`.
     */
    readonly versioningScheme?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ApiVersionSet resource.
 */
export interface ApiVersionSetArgs {
    /**
     * The name of the API Management Service in which the API Version Set should exist. Changing this forces a new resource to be created.
     */
    readonly apiManagementName: pulumi.Input<string>;
    /**
     * The description of API Version Set.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The display name of this API Version Set.
     */
    readonly displayName: pulumi.Input<string>;
    /**
     * The name of the API Version Set. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the parent API Management Service exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Header which should be read from Inbound Requests which defines the API Version.
     */
    readonly versionHeaderName?: pulumi.Input<string>;
    /**
     * The name of the Query String which should be read from Inbound Requests which defines the API Version.
     */
    readonly versionQueryName?: pulumi.Input<string>;
    /**
     * Specifies where in an Inbound HTTP Request that the API Version should be read from. Possible values are `Header`, `Query` and `Segment`.
     */
    readonly versioningScheme: pulumi.Input<string>;
}
