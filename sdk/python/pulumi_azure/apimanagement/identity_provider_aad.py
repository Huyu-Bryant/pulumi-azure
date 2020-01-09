# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class IdentityProviderAad(pulumi.CustomResource):
    allowed_tenants: pulumi.Output[list]
    """
    List of allowed AAD Tenants.
    """
    api_management_name: pulumi.Output[str]
    """
    The Name of the API Management Service where this AAD Identity Provider should be created. Changing this forces a new resource to be created.
    """
    client_id: pulumi.Output[str]
    """
    Client Id of the Application in the AAD Identity Provider.
    """
    client_secret: pulumi.Output[str]
    """
    Client secret of the Application in the AAD Identity Provider.
    """
    resource_group_name: pulumi.Output[str]
    """
    The Name of the Resource Group where the API Management Service exists. Changing this forces a new resource to be created.
    """
    def __init__(__self__, resource_name, opts=None, allowed_tenants=None, api_management_name=None, client_id=None, client_secret=None, resource_group_name=None, __props__=None, __name__=None, __opts__=None):
        """
        Manages an API Management AAD Identity Provider.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[list] allowed_tenants: List of allowed AAD Tenants.
        :param pulumi.Input[str] api_management_name: The Name of the API Management Service where this AAD Identity Provider should be created. Changing this forces a new resource to be created.
        :param pulumi.Input[str] client_id: Client Id of the Application in the AAD Identity Provider.
        :param pulumi.Input[str] client_secret: Client secret of the Application in the AAD Identity Provider.
        :param pulumi.Input[str] resource_group_name: The Name of the Resource Group where the API Management Service exists. Changing this forces a new resource to be created.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/api_management_identity_provider_aad.html.markdown.
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if opts is None:
            opts = pulumi.ResourceOptions()
        if not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')
        if opts.version is None:
            opts.version = utilities.get_version()
        if opts.id is None:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = dict()

            if allowed_tenants is None:
                raise TypeError("Missing required property 'allowed_tenants'")
            __props__['allowed_tenants'] = allowed_tenants
            if api_management_name is None:
                raise TypeError("Missing required property 'api_management_name'")
            __props__['api_management_name'] = api_management_name
            if client_id is None:
                raise TypeError("Missing required property 'client_id'")
            __props__['client_id'] = client_id
            if client_secret is None:
                raise TypeError("Missing required property 'client_secret'")
            __props__['client_secret'] = client_secret
            if resource_group_name is None:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
        super(IdentityProviderAad, __self__).__init__(
            'azure:apimanagement/identityProviderAad:IdentityProviderAad',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, allowed_tenants=None, api_management_name=None, client_id=None, client_secret=None, resource_group_name=None):
        """
        Get an existing IdentityProviderAad resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.
        
        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[list] allowed_tenants: List of allowed AAD Tenants.
        :param pulumi.Input[str] api_management_name: The Name of the API Management Service where this AAD Identity Provider should be created. Changing this forces a new resource to be created.
        :param pulumi.Input[str] client_id: Client Id of the Application in the AAD Identity Provider.
        :param pulumi.Input[str] client_secret: Client secret of the Application in the AAD Identity Provider.
        :param pulumi.Input[str] resource_group_name: The Name of the Resource Group where the API Management Service exists. Changing this forces a new resource to be created.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/api_management_identity_provider_aad.html.markdown.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()
        __props__["allowed_tenants"] = allowed_tenants
        __props__["api_management_name"] = api_management_name
        __props__["client_id"] = client_id
        __props__["client_secret"] = client_secret
        __props__["resource_group_name"] = resource_group_name
        return IdentityProviderAad(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

