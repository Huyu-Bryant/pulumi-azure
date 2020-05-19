// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Use this data source to access information about Service Tags.
 *
 * ## Example Usage
 *
 *
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = azure.network.getServiceTags({
 *     location: "West Europe",
 *     service: "AzureKeyVault",
 *     locationFilter: "northeurope",
 * });
 * export const addressPrefixes = data.azurerm_service_tags.example.address_prefixes;
 * ```
 */
export function getServiceTags(args: GetServiceTagsArgs, opts?: pulumi.InvokeOptions): Promise<GetServiceTagsResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure:network/getServiceTags:getServiceTags", {
        "location": args.location,
        "locationFilter": args.locationFilter,
        "service": args.service,
    }, opts);
}

/**
 * A collection of arguments for invoking getServiceTags.
 */
export interface GetServiceTagsArgs {
    /**
     * The Azure Region where the Service Tags exists. This value is not used to filter the results but for specifying the region to request. For filtering by region use `locationFilter` instead.  More information can be found here: [Service Tags URL parameters](https://docs.microsoft.com/en-us/rest/api/virtualnetwork/servicetags/list#uri-parameters).
     */
    readonly location: string;
    /**
     * Changes the scope of the service tags. Can be any value that is also valid for `location`. If this field is empty then all address prefixes are considered instead of only location specific ones.
     */
    readonly locationFilter?: string;
    /**
     * The type of the service for which address prefixes will be fetched. Available service tags can be found here: [Available service tags](https://docs.microsoft.com/en-us/azure/virtual-network/service-tags-overview#available-service-tags).
     */
    readonly service: string;
}

/**
 * A collection of values returned by getServiceTags.
 */
export interface GetServiceTagsResult {
    /**
     * List of address prefixes for the service type (and optionally a specific region).
     */
    readonly addressPrefixes: string[];
    readonly location: string;
    readonly locationFilter?: string;
    readonly service: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
