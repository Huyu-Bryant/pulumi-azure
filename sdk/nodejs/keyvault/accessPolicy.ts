// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages a Key Vault Access Policy.
 * 
 * > **NOTE:** It's possible to define Key Vault Access Policies both within the `azurerm_key_vault` resource via the `access_policy` block and by using the `azurerm_key_vault_access_policy` resource. However it's not possible to use both methods to manage Access Policies within a KeyVault, since there'll be conflicts.
 * 
 * > **NOTE:** Azure permits a maximum of 1024 Access Policies per Key Vault - [more information can be found in this document](https://docs.microsoft.com/en-us/azure/key-vault/key-vault-secure-your-key-vault#data-plane-access-control).
 */
export class AccessPolicy extends pulumi.CustomResource {
    /**
     * Get an existing AccessPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AccessPolicyState, opts?: pulumi.CustomResourceOptions): AccessPolicy {
        return new AccessPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:keyvault/accessPolicy:AccessPolicy';

    /**
     * Returns true if the given object is an instance of AccessPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AccessPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AccessPolicy.__pulumiType;
    }

    /**
     * The object ID of an Application in Azure Active Directory.
     */
    public readonly applicationId!: pulumi.Output<string | undefined>;
    /**
     * List of certificate permissions, must be one or more from
     * the following: `backup`, `create`, `delete`, `deleteissuers`, `get`, `getissuers`, `import`, `list`, `listissuers`,
     * `managecontacts`, `manageissuers`, `purge`, `recover`, `restore`, `setissuers` and `update`.
     */
    public readonly certificatePermissions!: pulumi.Output<string[] | undefined>;
    /**
     * List of key permissions, must be one or more from
     * the following: `backup`, `create`, `decrypt`, `delete`, `encrypt`, `get`, `import`, `list`, `purge`,
     * `recover`, `restore`, `sign`, `unwrapKey`, `update`, `verify` and `wrapKey`.
     */
    public readonly keyPermissions!: pulumi.Output<string[] | undefined>;
    /**
     * Specifies the id of the Key Vault resource. Changing this
     * forces a new resource to be created.
     */
    public readonly keyVaultId!: pulumi.Output<string>;
    /**
     * The object ID of a user, service principal or security
     * group in the Azure Active Directory tenant for the vault. The object ID must
     * be unique for the list of access policies. Changing this forces a new resource
     * to be created.
     */
    public readonly objectId!: pulumi.Output<string>;
    /**
     * The name of the resource group in which to
     * create the namespace. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * List of secret permissions, must be one or more
     * from the following: `backup`, `delete`, `get`, `list`, `purge`, `recover`, `restore` and `set`.
     */
    public readonly secretPermissions!: pulumi.Output<string[] | undefined>;
    /**
     * List of storage permissions, must be one or more from the following: `backup`, `delete`, `deletesas`, `get`, `getsas`, `list`, `listsas`, `purge`, `recover`, `regeneratekey`, `restore`, `set`, `setsas` and `update`.
     */
    public readonly storagePermissions!: pulumi.Output<string[] | undefined>;
    /**
     * The Azure Active Directory tenant ID that should be used
     * for authenticating requests to the key vault. Changing this forces a new resource
     * to be created.
     */
    public readonly tenantId!: pulumi.Output<string>;
    /**
     * Specifies the name of the Key Vault resource. Changing this
     * forces a new resource to be created.
     */
    public readonly vaultName!: pulumi.Output<string>;

    /**
     * Create a AccessPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AccessPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AccessPolicyArgs | AccessPolicyState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as AccessPolicyState | undefined;
            inputs["applicationId"] = state ? state.applicationId : undefined;
            inputs["certificatePermissions"] = state ? state.certificatePermissions : undefined;
            inputs["keyPermissions"] = state ? state.keyPermissions : undefined;
            inputs["keyVaultId"] = state ? state.keyVaultId : undefined;
            inputs["objectId"] = state ? state.objectId : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["secretPermissions"] = state ? state.secretPermissions : undefined;
            inputs["storagePermissions"] = state ? state.storagePermissions : undefined;
            inputs["tenantId"] = state ? state.tenantId : undefined;
            inputs["vaultName"] = state ? state.vaultName : undefined;
        } else {
            const args = argsOrState as AccessPolicyArgs | undefined;
            if (!args || args.objectId === undefined) {
                throw new Error("Missing required property 'objectId'");
            }
            if (!args || args.tenantId === undefined) {
                throw new Error("Missing required property 'tenantId'");
            }
            inputs["applicationId"] = args ? args.applicationId : undefined;
            inputs["certificatePermissions"] = args ? args.certificatePermissions : undefined;
            inputs["keyPermissions"] = args ? args.keyPermissions : undefined;
            inputs["keyVaultId"] = args ? args.keyVaultId : undefined;
            inputs["objectId"] = args ? args.objectId : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["secretPermissions"] = args ? args.secretPermissions : undefined;
            inputs["storagePermissions"] = args ? args.storagePermissions : undefined;
            inputs["tenantId"] = args ? args.tenantId : undefined;
            inputs["vaultName"] = args ? args.vaultName : undefined;
        }
        super(AccessPolicy.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering AccessPolicy resources.
 */
export interface AccessPolicyState {
    /**
     * The object ID of an Application in Azure Active Directory.
     */
    readonly applicationId?: pulumi.Input<string>;
    /**
     * List of certificate permissions, must be one or more from
     * the following: `backup`, `create`, `delete`, `deleteissuers`, `get`, `getissuers`, `import`, `list`, `listissuers`,
     * `managecontacts`, `manageissuers`, `purge`, `recover`, `restore`, `setissuers` and `update`.
     */
    readonly certificatePermissions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of key permissions, must be one or more from
     * the following: `backup`, `create`, `decrypt`, `delete`, `encrypt`, `get`, `import`, `list`, `purge`,
     * `recover`, `restore`, `sign`, `unwrapKey`, `update`, `verify` and `wrapKey`.
     */
    readonly keyPermissions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the id of the Key Vault resource. Changing this
     * forces a new resource to be created.
     */
    readonly keyVaultId?: pulumi.Input<string>;
    /**
     * The object ID of a user, service principal or security
     * group in the Azure Active Directory tenant for the vault. The object ID must
     * be unique for the list of access policies. Changing this forces a new resource
     * to be created.
     */
    readonly objectId?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to
     * create the namespace. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * List of secret permissions, must be one or more
     * from the following: `backup`, `delete`, `get`, `list`, `purge`, `recover`, `restore` and `set`.
     */
    readonly secretPermissions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of storage permissions, must be one or more from the following: `backup`, `delete`, `deletesas`, `get`, `getsas`, `list`, `listsas`, `purge`, `recover`, `regeneratekey`, `restore`, `set`, `setsas` and `update`.
     */
    readonly storagePermissions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Azure Active Directory tenant ID that should be used
     * for authenticating requests to the key vault. Changing this forces a new resource
     * to be created.
     */
    readonly tenantId?: pulumi.Input<string>;
    /**
     * Specifies the name of the Key Vault resource. Changing this
     * forces a new resource to be created.
     */
    readonly vaultName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AccessPolicy resource.
 */
export interface AccessPolicyArgs {
    /**
     * The object ID of an Application in Azure Active Directory.
     */
    readonly applicationId?: pulumi.Input<string>;
    /**
     * List of certificate permissions, must be one or more from
     * the following: `backup`, `create`, `delete`, `deleteissuers`, `get`, `getissuers`, `import`, `list`, `listissuers`,
     * `managecontacts`, `manageissuers`, `purge`, `recover`, `restore`, `setissuers` and `update`.
     */
    readonly certificatePermissions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of key permissions, must be one or more from
     * the following: `backup`, `create`, `decrypt`, `delete`, `encrypt`, `get`, `import`, `list`, `purge`,
     * `recover`, `restore`, `sign`, `unwrapKey`, `update`, `verify` and `wrapKey`.
     */
    readonly keyPermissions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the id of the Key Vault resource. Changing this
     * forces a new resource to be created.
     */
    readonly keyVaultId?: pulumi.Input<string>;
    /**
     * The object ID of a user, service principal or security
     * group in the Azure Active Directory tenant for the vault. The object ID must
     * be unique for the list of access policies. Changing this forces a new resource
     * to be created.
     */
    readonly objectId: pulumi.Input<string>;
    /**
     * The name of the resource group in which to
     * create the namespace. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * List of secret permissions, must be one or more
     * from the following: `backup`, `delete`, `get`, `list`, `purge`, `recover`, `restore` and `set`.
     */
    readonly secretPermissions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of storage permissions, must be one or more from the following: `backup`, `delete`, `deletesas`, `get`, `getsas`, `list`, `listsas`, `purge`, `recover`, `regeneratekey`, `restore`, `set`, `setsas` and `update`.
     */
    readonly storagePermissions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Azure Active Directory tenant ID that should be used
     * for authenticating requests to the key vault. Changing this forces a new resource
     * to be created.
     */
    readonly tenantId: pulumi.Input<string>;
    /**
     * Specifies the name of the Key Vault resource. Changing this
     * forces a new resource to be created.
     */
    readonly vaultName?: pulumi.Input<string>;
}
