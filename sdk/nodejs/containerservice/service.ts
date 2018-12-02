// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages an Azure Container Service Instance
 * 
 * ~> **NOTE:** All arguments including the client secret will be stored in the raw state as plain-text.
 * [Read more about sensitive data in state](https://www.terraform.io/docs/state/sensitive-data.html).
 * 
 * ~> **NOTE:** You may wish to consider using Azure Kubernetes Service (AKS) for new deployments.
 * 
 * ## Example Usage (DCOS)
 * 
 * ```hcl
 * resource "azurerm_resource_group" "test" {
 *   name     = "acctestRG1"
 *   location = "West US"
 * }
 * 
 * resource "azurerm_container_service" "test" {
 *   name                   = "acctestcontservice1"
 *   location               = "${azurerm_resource_group.test.location}"
 *   resource_group_name    = "${azurerm_resource_group.test.name}"
 *   orchestration_platform = "DCOS"
 * 
 *   master_profile {
 *     count      = 1
 *     dns_prefix = "acctestmaster1"
 *   }
 * 
 *   linux_profile {
 *     admin_username = "acctestuser1"
 * 
 *     ssh_key {
 *       key_data = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCqaZoyiz1qbdOQ8xEf6uEu1cCwYowo5FHtsBhqLoDnnp7KUTEBN+L2NxRIfQ781rxV6Iq5jSav6b2Q8z5KiseOlvKA/RF2wqU0UPYqQviQhLmW6THTpmrv/YkUCuzxDpsH7DUDhZcwySLKVVe0Qm3+5N2Ta6UYH3lsDf9R9wTP2K/+vAnflKebuypNlmocIvakFWoZda18FOmsOoIVXQ8HWFNCuw9ZCunMSN62QGamCe3dL5cXlkgHYv7ekJE15IA9aOJcM7e90oeTqo+7HTcWfdu0qQqPWY5ujyMw/llas8tsXY85LFqRnr3gJ02bAscjc477+X+j/gkpFoN1QEmt terraform@demo.tld"
 *     }
 *   }
 * 
 *   agent_pool_profile {
 *     name       = "default"
 *     count      = 1
 *     dns_prefix = "acctestagent1"
 *     vm_size    = "Standard_F2"
 *   }
 * 
 *   diagnostics_profile {
 *     enabled = false
 *   }
 * 
 *   tags {
 *     Environment = "Production"
 *   }
 * }
 * ```
 */
export class Service extends pulumi.CustomResource {
    /**
     * Get an existing Service resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ServiceState): Service {
        return new Service(name, <any>state, { id });
    }

    /**
     * One or more Agent Pool Profile's block as documented below.
     */
    public readonly agentPoolProfile: pulumi.Output<{ count?: number, dnsPrefix: string, fqdn: string, name: string, vmSize: string }>;
    /**
     * A VM Diagnostics Profile block as documented below.
     */
    public readonly diagnosticsProfile: pulumi.Output<{ enabled: boolean, storageUri: string }>;
    /**
     * A Linux Profile block as documented below.
     */
    public readonly linuxProfile: pulumi.Output<{ adminUsername: string, sshKey: { keyData: string } }>;
    /**
     * The location where the Container Service instance should be created. Changing this forces a new resource to be created.
     */
    public readonly location: pulumi.Output<string>;
    /**
     * A Master Profile block as documented below.
     */
    public readonly masterProfile: pulumi.Output<{ count?: number, dnsPrefix: string, fqdn: string }>;
    /**
     * Unique name of the agent pool profile in the context of the subscription and resource group.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * Specifies the Container Orchestration Platform to use. Currently can be either `DCOS`, `Kubernetes` or `Swarm`. Changing this forces a new resource to be created.
     */
    public readonly orchestrationPlatform: pulumi.Output<string>;
    /**
     * Specifies the resource group where the resource exists. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A Service Principal block as documented below.
     */
    public readonly servicePrincipal: pulumi.Output<{ clientId: string, clientSecret: string } | undefined>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags: pulumi.Output<{[key: string]: any}>;

    /**
     * Create a Service resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServiceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ServiceArgs | ServiceState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: ServiceState = argsOrState as ServiceState | undefined;
            inputs["agentPoolProfile"] = state ? state.agentPoolProfile : undefined;
            inputs["diagnosticsProfile"] = state ? state.diagnosticsProfile : undefined;
            inputs["linuxProfile"] = state ? state.linuxProfile : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["masterProfile"] = state ? state.masterProfile : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["orchestrationPlatform"] = state ? state.orchestrationPlatform : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["servicePrincipal"] = state ? state.servicePrincipal : undefined;
            inputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as ServiceArgs | undefined;
            if (!args || args.agentPoolProfile === undefined) {
                throw new Error("Missing required property 'agentPoolProfile'");
            }
            if (!args || args.diagnosticsProfile === undefined) {
                throw new Error("Missing required property 'diagnosticsProfile'");
            }
            if (!args || args.linuxProfile === undefined) {
                throw new Error("Missing required property 'linuxProfile'");
            }
            if (!args || args.location === undefined) {
                throw new Error("Missing required property 'location'");
            }
            if (!args || args.masterProfile === undefined) {
                throw new Error("Missing required property 'masterProfile'");
            }
            if (!args || args.orchestrationPlatform === undefined) {
                throw new Error("Missing required property 'orchestrationPlatform'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["agentPoolProfile"] = args ? args.agentPoolProfile : undefined;
            inputs["diagnosticsProfile"] = args ? args.diagnosticsProfile : undefined;
            inputs["linuxProfile"] = args ? args.linuxProfile : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["masterProfile"] = args ? args.masterProfile : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["orchestrationPlatform"] = args ? args.orchestrationPlatform : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["servicePrincipal"] = args ? args.servicePrincipal : undefined;
            inputs["tags"] = args ? args.tags : undefined;
        }
        super("azure:containerservice/service:Service", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Service resources.
 */
export interface ServiceState {
    /**
     * One or more Agent Pool Profile's block as documented below.
     */
    readonly agentPoolProfile?: pulumi.Input<{ count?: pulumi.Input<number>, dnsPrefix: pulumi.Input<string>, fqdn?: pulumi.Input<string>, name: pulumi.Input<string>, vmSize: pulumi.Input<string> }>;
    /**
     * A VM Diagnostics Profile block as documented below.
     */
    readonly diagnosticsProfile?: pulumi.Input<{ enabled: pulumi.Input<boolean>, storageUri?: pulumi.Input<string> }>;
    /**
     * A Linux Profile block as documented below.
     */
    readonly linuxProfile?: pulumi.Input<{ adminUsername: pulumi.Input<string>, sshKey: pulumi.Input<{ keyData: pulumi.Input<string> }> }>;
    /**
     * The location where the Container Service instance should be created. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * A Master Profile block as documented below.
     */
    readonly masterProfile?: pulumi.Input<{ count?: pulumi.Input<number>, dnsPrefix: pulumi.Input<string>, fqdn?: pulumi.Input<string> }>;
    /**
     * Unique name of the agent pool profile in the context of the subscription and resource group.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Specifies the Container Orchestration Platform to use. Currently can be either `DCOS`, `Kubernetes` or `Swarm`. Changing this forces a new resource to be created.
     */
    readonly orchestrationPlatform?: pulumi.Input<string>;
    /**
     * Specifies the resource group where the resource exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * A Service Principal block as documented below.
     */
    readonly servicePrincipal?: pulumi.Input<{ clientId: pulumi.Input<string>, clientSecret: pulumi.Input<string> }>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
}

/**
 * The set of arguments for constructing a Service resource.
 */
export interface ServiceArgs {
    /**
     * One or more Agent Pool Profile's block as documented below.
     */
    readonly agentPoolProfile: pulumi.Input<{ count?: pulumi.Input<number>, dnsPrefix: pulumi.Input<string>, fqdn?: pulumi.Input<string>, name: pulumi.Input<string>, vmSize: pulumi.Input<string> }>;
    /**
     * A VM Diagnostics Profile block as documented below.
     */
    readonly diagnosticsProfile: pulumi.Input<{ enabled: pulumi.Input<boolean>, storageUri?: pulumi.Input<string> }>;
    /**
     * A Linux Profile block as documented below.
     */
    readonly linuxProfile: pulumi.Input<{ adminUsername: pulumi.Input<string>, sshKey: pulumi.Input<{ keyData: pulumi.Input<string> }> }>;
    /**
     * The location where the Container Service instance should be created. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Input<string>;
    /**
     * A Master Profile block as documented below.
     */
    readonly masterProfile: pulumi.Input<{ count?: pulumi.Input<number>, dnsPrefix: pulumi.Input<string>, fqdn?: pulumi.Input<string> }>;
    /**
     * Unique name of the agent pool profile in the context of the subscription and resource group.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Specifies the Container Orchestration Platform to use. Currently can be either `DCOS`, `Kubernetes` or `Swarm`. Changing this forces a new resource to be created.
     */
    readonly orchestrationPlatform: pulumi.Input<string>;
    /**
     * Specifies the resource group where the resource exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * A Service Principal block as documented below.
     */
    readonly servicePrincipal?: pulumi.Input<{ clientId: pulumi.Input<string>, clientSecret: pulumi.Input<string> }>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
}
