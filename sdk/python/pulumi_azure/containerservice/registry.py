# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import pulumi
import pulumi.runtime
from .. import utilities, tables

class Registry(pulumi.CustomResource):
    admin_enabled: pulumi.Output[bool]
    """
    Specifies whether the admin user is enabled. Defaults to `false`.
    """
    admin_password: pulumi.Output[str]
    """
    The Password associated with the Container Registry Admin account - if the admin account is enabled.
    """
    admin_username: pulumi.Output[str]
    """
    The Username associated with the Container Registry Admin account - if the admin account is enabled.
    """
    georeplication_locations: pulumi.Output[list]
    """
    A list of Azure locations where the container registry should be geo-replicated.
    """
    location: pulumi.Output[str]
    """
    Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
    """
    login_server: pulumi.Output[str]
    """
    The URL that can be used to log into the container registry.
    """
    name: pulumi.Output[str]
    """
    Specifies the name of the Container Registry. Changing this forces a new resource to be created.
    """
    resource_group_name: pulumi.Output[str]
    """
    The name of the resource group in which to create the Container Registry. Changing this forces a new resource to be created.
    """
    sku: pulumi.Output[str]
    """
    The SKU name of the the container registry. Possible values are `Classic` (which was previously `Basic`), `Basic`, `Standard` and `Premium`.
    """
    storage_account: pulumi.Output[dict]
    storage_account_id: pulumi.Output[str]
    """
    The ID of a Storage Account which must be located in the same Azure Region as the Container Registry.
    """
    tags: pulumi.Output[dict]
    """
    A mapping of tags to assign to the resource.
    """
    def __init__(__self__, __name__, __opts__=None, admin_enabled=None, georeplication_locations=None, location=None, name=None, resource_group_name=None, sku=None, storage_account=None, storage_account_id=None, tags=None):
        """
        Manages an Azure Container Registry.
        
        > **Note:** All arguments including the access key will be stored in the raw state as plain-text.
        [Read more about sensitive data in state](https://www.terraform.io/docs/state/sensitive-data.html).
        
        
        :param str __name__: The name of the resource.
        :param pulumi.ResourceOptions __opts__: Options for the resource.
        :param pulumi.Input[bool] admin_enabled: Specifies whether the admin user is enabled. Defaults to `false`.
        :param pulumi.Input[list] georeplication_locations: A list of Azure locations where the container registry should be geo-replicated.
        :param pulumi.Input[str] location: Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: Specifies the name of the Container Registry. Changing this forces a new resource to be created.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which to create the Container Registry. Changing this forces a new resource to be created.
        :param pulumi.Input[str] sku: The SKU name of the the container registry. Possible values are `Classic` (which was previously `Basic`), `Basic`, `Standard` and `Premium`.
        :param pulumi.Input[dict] storage_account
        :param pulumi.Input[str] storage_account_id: The ID of a Storage Account which must be located in the same Azure Region as the Container Registry.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.
        """
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, str):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        __props__['admin_enabled'] = admin_enabled

        __props__['georeplication_locations'] = georeplication_locations

        if not location:
            raise TypeError('Missing required property location')
        __props__['location'] = location

        __props__['name'] = name

        if not resource_group_name:
            raise TypeError('Missing required property resource_group_name')
        __props__['resource_group_name'] = resource_group_name

        __props__['sku'] = sku

        __props__['storage_account'] = storage_account

        __props__['storage_account_id'] = storage_account_id

        __props__['tags'] = tags

        __props__['admin_password'] = None
        __props__['admin_username'] = None
        __props__['login_server'] = None

        super(Registry, __self__).__init__(
            'azure:containerservice/registry:Registry',
            __name__,
            __props__,
            __opts__)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

