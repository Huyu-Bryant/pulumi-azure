// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages the Pricing Tier for Azure Security Center in the current subscription.
 *
 * > **NOTE:** This resource requires the `Owner` permission on the Subscription.
 *
 * > **NOTE:** Deletion of this resource does not change or reset the pricing tier to `Free`
 *
 * ## Example Usage
 *
 *
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = new azure.securitycenter.SubscriptionPricing("example", {
 *     tier: "Standard",
 * });
 * ```
 */
export class SubscriptionPricing extends pulumi.CustomResource {
    /**
     * Get an existing SubscriptionPricing resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SubscriptionPricingState, opts?: pulumi.CustomResourceOptions): SubscriptionPricing {
        return new SubscriptionPricing(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:securitycenter/subscriptionPricing:SubscriptionPricing';

    /**
     * Returns true if the given object is an instance of SubscriptionPricing.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SubscriptionPricing {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SubscriptionPricing.__pulumiType;
    }

    /**
     * The pricing tier to use. Possible values are `Free` and `Standard`.
     */
    public readonly tier!: pulumi.Output<string>;

    /**
     * Create a SubscriptionPricing resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SubscriptionPricingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SubscriptionPricingArgs | SubscriptionPricingState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as SubscriptionPricingState | undefined;
            inputs["tier"] = state ? state.tier : undefined;
        } else {
            const args = argsOrState as SubscriptionPricingArgs | undefined;
            if (!args || args.tier === undefined) {
                throw new Error("Missing required property 'tier'");
            }
            inputs["tier"] = args ? args.tier : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(SubscriptionPricing.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering SubscriptionPricing resources.
 */
export interface SubscriptionPricingState {
    /**
     * The pricing tier to use. Possible values are `Free` and `Standard`.
     */
    readonly tier?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SubscriptionPricing resource.
 */
export interface SubscriptionPricingArgs {
    /**
     * The pricing tier to use. Possible values are `Free` and `Standard`.
     */
    readonly tier: pulumi.Input<string>;
}
