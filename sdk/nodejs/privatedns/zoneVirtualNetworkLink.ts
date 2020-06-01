// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Enables you to manage Private DNS zone Virtual Network Links. These Links enable DNS resolution and registration inside Azure Virtual Networks using Azure Private DNS.
 *
 * ## Example Usage
 *
 *
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West US"});
 * const exampleZone = new azure.privatedns.Zone("exampleZone", {resourceGroupName: exampleResourceGroup.name});
 * const exampleZoneVirtualNetworkLink = new azure.privatedns.ZoneVirtualNetworkLink("exampleZoneVirtualNetworkLink", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     privateDnsZoneName: exampleZone.name,
 *     virtualNetworkId: azurerm_virtual_network.example.id,
 * });
 * ```
 */
export class ZoneVirtualNetworkLink extends pulumi.CustomResource {
    /**
     * Get an existing ZoneVirtualNetworkLink resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ZoneVirtualNetworkLinkState, opts?: pulumi.CustomResourceOptions): ZoneVirtualNetworkLink {
        return new ZoneVirtualNetworkLink(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:privatedns/zoneVirtualNetworkLink:ZoneVirtualNetworkLink';

    /**
     * Returns true if the given object is an instance of ZoneVirtualNetworkLink.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ZoneVirtualNetworkLink {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ZoneVirtualNetworkLink.__pulumiType;
    }

    /**
     * The name of the Private DNS Zone Virtual Network Link. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The name of the Private DNS zone (without a terminating dot). Changing this forces a new resource to be created.
     */
    public readonly privateDnsZoneName!: pulumi.Output<string>;
    /**
     * Is auto-registration of virtual machine records in the virtual network in the Private DNS zone enabled? Defaults to `false`.
     */
    public readonly registrationEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * Specifies the resource group where the resource exists. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The Resource ID of the Virtual Network that should be linked to the DNS Zone. Changing this forces a new resource to be created.
     */
    public readonly virtualNetworkId!: pulumi.Output<string>;

    /**
     * Create a ZoneVirtualNetworkLink resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ZoneVirtualNetworkLinkArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ZoneVirtualNetworkLinkArgs | ZoneVirtualNetworkLinkState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ZoneVirtualNetworkLinkState | undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["privateDnsZoneName"] = state ? state.privateDnsZoneName : undefined;
            inputs["registrationEnabled"] = state ? state.registrationEnabled : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["virtualNetworkId"] = state ? state.virtualNetworkId : undefined;
        } else {
            const args = argsOrState as ZoneVirtualNetworkLinkArgs | undefined;
            if (!args || args.privateDnsZoneName === undefined) {
                throw new Error("Missing required property 'privateDnsZoneName'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.virtualNetworkId === undefined) {
                throw new Error("Missing required property 'virtualNetworkId'");
            }
            inputs["name"] = args ? args.name : undefined;
            inputs["privateDnsZoneName"] = args ? args.privateDnsZoneName : undefined;
            inputs["registrationEnabled"] = args ? args.registrationEnabled : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["virtualNetworkId"] = args ? args.virtualNetworkId : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(ZoneVirtualNetworkLink.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ZoneVirtualNetworkLink resources.
 */
export interface ZoneVirtualNetworkLinkState {
    /**
     * The name of the Private DNS Zone Virtual Network Link. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the Private DNS zone (without a terminating dot). Changing this forces a new resource to be created.
     */
    readonly privateDnsZoneName?: pulumi.Input<string>;
    /**
     * Is auto-registration of virtual machine records in the virtual network in the Private DNS zone enabled? Defaults to `false`.
     */
    readonly registrationEnabled?: pulumi.Input<boolean>;
    /**
     * Specifies the resource group where the resource exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The Resource ID of the Virtual Network that should be linked to the DNS Zone. Changing this forces a new resource to be created.
     */
    readonly virtualNetworkId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ZoneVirtualNetworkLink resource.
 */
export interface ZoneVirtualNetworkLinkArgs {
    /**
     * The name of the Private DNS Zone Virtual Network Link. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the Private DNS zone (without a terminating dot). Changing this forces a new resource to be created.
     */
    readonly privateDnsZoneName: pulumi.Input<string>;
    /**
     * Is auto-registration of virtual machine records in the virtual network in the Private DNS zone enabled? Defaults to `false`.
     */
    readonly registrationEnabled?: pulumi.Input<boolean>;
    /**
     * Specifies the resource group where the resource exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The Resource ID of the Virtual Network that should be linked to the DNS Zone. Changing this forces a new resource to be created.
     */
    readonly virtualNetworkId: pulumi.Input<string>;
}
