// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Use this data source to access the ID of a specified Traffic Manager Geographical Location within the Geographical Hierarchy.
 * 
 * ## Example Usage (World)
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const azurerm_traffic_manager_geographical_location_test = pulumi.output(azure.trafficmanager.getGeographicalLocation({
 *     name: "World",
 * }));
 * 
 * export const locationCode = azurerm_traffic_manager_geographical_location_test.apply(__arg0 => __arg0.id);
 * ```
 */
export function getGeographicalLocation(args: GetGeographicalLocationArgs, opts?: pulumi.InvokeOptions): Promise<GetGeographicalLocationResult> {
    return pulumi.runtime.invoke("azure:trafficmanager/getGeographicalLocation:getGeographicalLocation", {
        "name": args.name,
    }, opts);
}

/**
 * A collection of arguments for invoking getGeographicalLocation.
 */
export interface GetGeographicalLocationArgs {
    /**
     * Specifies the name of the Location, for example `World`, `Europe` or `Germany`.
     */
    readonly name: string;
}

/**
 * A collection of values returned by getGeographicalLocation.
 */
export interface GetGeographicalLocationResult {
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
