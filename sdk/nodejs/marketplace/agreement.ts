// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Allows accepting the Legal Terms for a Marketplace Image.
 *
 * ## Example Usage
 *
 *
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const barracuda = new azure.marketplace.Agreement("barracuda", {
 *     offer: "waf",
 *     plan: "hourly",
 *     publisher: "barracudanetworks",
 * });
 * ```
 */
export class Agreement extends pulumi.CustomResource {
    /**
     * Get an existing Agreement resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AgreementState, opts?: pulumi.CustomResourceOptions): Agreement {
        return new Agreement(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:marketplace/agreement:Agreement';

    /**
     * Returns true if the given object is an instance of Agreement.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Agreement {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Agreement.__pulumiType;
    }

    public /*out*/ readonly licenseTextLink!: pulumi.Output<string>;
    /**
     * The Offer of the Marketplace Image. Changing this forces a new resource to be created.
     */
    public readonly offer!: pulumi.Output<string>;
    /**
     * The Plan of the Marketplace Image. Changing this forces a new resource to be created.
     */
    public readonly plan!: pulumi.Output<string>;
    public /*out*/ readonly privacyPolicyLink!: pulumi.Output<string>;
    /**
     * The Publisher of the Marketplace Image. Changing this forces a new resource to be created.
     */
    public readonly publisher!: pulumi.Output<string>;

    /**
     * Create a Agreement resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AgreementArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AgreementArgs | AgreementState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as AgreementState | undefined;
            inputs["licenseTextLink"] = state ? state.licenseTextLink : undefined;
            inputs["offer"] = state ? state.offer : undefined;
            inputs["plan"] = state ? state.plan : undefined;
            inputs["privacyPolicyLink"] = state ? state.privacyPolicyLink : undefined;
            inputs["publisher"] = state ? state.publisher : undefined;
        } else {
            const args = argsOrState as AgreementArgs | undefined;
            if (!args || args.offer === undefined) {
                throw new Error("Missing required property 'offer'");
            }
            if (!args || args.plan === undefined) {
                throw new Error("Missing required property 'plan'");
            }
            if (!args || args.publisher === undefined) {
                throw new Error("Missing required property 'publisher'");
            }
            inputs["offer"] = args ? args.offer : undefined;
            inputs["plan"] = args ? args.plan : undefined;
            inputs["publisher"] = args ? args.publisher : undefined;
            inputs["licenseTextLink"] = undefined /*out*/;
            inputs["privacyPolicyLink"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(Agreement.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Agreement resources.
 */
export interface AgreementState {
    readonly licenseTextLink?: pulumi.Input<string>;
    /**
     * The Offer of the Marketplace Image. Changing this forces a new resource to be created.
     */
    readonly offer?: pulumi.Input<string>;
    /**
     * The Plan of the Marketplace Image. Changing this forces a new resource to be created.
     */
    readonly plan?: pulumi.Input<string>;
    readonly privacyPolicyLink?: pulumi.Input<string>;
    /**
     * The Publisher of the Marketplace Image. Changing this forces a new resource to be created.
     */
    readonly publisher?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Agreement resource.
 */
export interface AgreementArgs {
    /**
     * The Offer of the Marketplace Image. Changing this forces a new resource to be created.
     */
    readonly offer: pulumi.Input<string>;
    /**
     * The Plan of the Marketplace Image. Changing this forces a new resource to be created.
     */
    readonly plan: pulumi.Input<string>;
    /**
     * The Publisher of the Marketplace Image. Changing this forces a new resource to be created.
     */
    readonly publisher: pulumi.Input<string>;
}
