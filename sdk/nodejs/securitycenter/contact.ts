// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages the subscription's Security Center Contact.
 * 
 * > **NOTE:** Owner access permission is required. 
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const azurerm_security_center_contact_example = new azure.securitycenter.Contact("example", {
 *     alertNotifications: true,
 *     alertsToAdmins: true,
 *     email: "contact@example.com",
 *     phone: "+1-555-555-5555",
 * });
 * ```
 */
export class Contact extends pulumi.CustomResource {
    /**
     * Get an existing Contact resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ContactState, opts?: pulumi.CustomResourceOptions): Contact {
        return new Contact(name, <any>state, { ...opts, id: id });
    }

    /**
     * Whether to send security alerts notifications to the security contact.
     */
    public readonly alertNotifications: pulumi.Output<boolean>;
    /**
     * Whether to send security alerts notifications to subscription admins.
     */
    public readonly alertsToAdmins: pulumi.Output<boolean>;
    /**
     * The email of the Security Center Contact.
     */
    public readonly email: pulumi.Output<string>;
    /**
     * The phone number of the Security Center Contact.
     */
    public readonly phone: pulumi.Output<string>;

    /**
     * Create a Contact resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ContactArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ContactArgs | ContactState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: ContactState = argsOrState as ContactState | undefined;
            inputs["alertNotifications"] = state ? state.alertNotifications : undefined;
            inputs["alertsToAdmins"] = state ? state.alertsToAdmins : undefined;
            inputs["email"] = state ? state.email : undefined;
            inputs["phone"] = state ? state.phone : undefined;
        } else {
            const args = argsOrState as ContactArgs | undefined;
            if (!args || args.alertNotifications === undefined) {
                throw new Error("Missing required property 'alertNotifications'");
            }
            if (!args || args.alertsToAdmins === undefined) {
                throw new Error("Missing required property 'alertsToAdmins'");
            }
            if (!args || args.email === undefined) {
                throw new Error("Missing required property 'email'");
            }
            if (!args || args.phone === undefined) {
                throw new Error("Missing required property 'phone'");
            }
            inputs["alertNotifications"] = args ? args.alertNotifications : undefined;
            inputs["alertsToAdmins"] = args ? args.alertsToAdmins : undefined;
            inputs["email"] = args ? args.email : undefined;
            inputs["phone"] = args ? args.phone : undefined;
        }
        super("azure:securitycenter/contact:Contact", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Contact resources.
 */
export interface ContactState {
    /**
     * Whether to send security alerts notifications to the security contact.
     */
    readonly alertNotifications?: pulumi.Input<boolean>;
    /**
     * Whether to send security alerts notifications to subscription admins.
     */
    readonly alertsToAdmins?: pulumi.Input<boolean>;
    /**
     * The email of the Security Center Contact.
     */
    readonly email?: pulumi.Input<string>;
    /**
     * The phone number of the Security Center Contact.
     */
    readonly phone?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Contact resource.
 */
export interface ContactArgs {
    /**
     * Whether to send security alerts notifications to the security contact.
     */
    readonly alertNotifications: pulumi.Input<boolean>;
    /**
     * Whether to send security alerts notifications to subscription admins.
     */
    readonly alertsToAdmins: pulumi.Input<boolean>;
    /**
     * The email of the Security Center Contact.
     */
    readonly email: pulumi.Input<string>;
    /**
     * The phone number of the Security Center Contact.
     */
    readonly phone: pulumi.Input<string>;
}
