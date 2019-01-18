# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import pulumi
import pulumi.runtime
from .. import utilities, tables

class Store(pulumi.CustomResource):
    encryption_state: pulumi.Output[str]
    """
    Is Encryption enabled on this Data Lake Store Account? Possible values are `Enabled` or `Disabled`. Defaults to `Enabled`.
    """
    encryption_type: pulumi.Output[str]
    """
    The Encryption Type used for this Data Lake Store Account. Currently can be set to `SystemManaged` when `encryption_state` is `Enabled` - and must be a blank string when it's Disabled.
    """
    endpoint: pulumi.Output[str]
    """
    The Endpoint for the Data Lake Store.
    """
    firewall_allow_azure_ips: pulumi.Output[str]
    """
    are Azure Service IP's allowed through the firewall? Possible values are `Enabled` and `Disabled`. Defaults to `Enabled.`
    """
    firewall_state: pulumi.Output[str]
    """
    the state of the Firewall. Possible values are `Enabled` and `Disabled`. Defaults to `Enabled.`
    """
    location: pulumi.Output[str]
    """
    Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
    """
    name: pulumi.Output[str]
    """
    Specifies the name of the Data Lake Store. Changing this forces a new resource to be created. Has to be between 3 to 24 characters.
    """
    resource_group_name: pulumi.Output[str]
    """
    The name of the resource group in which to create the Data Lake Store.
    """
    tags: pulumi.Output[dict]
    """
    A mapping of tags to assign to the resource.
    """
    tier: pulumi.Output[str]
    """
    The monthly commitment tier for Data Lake Store. Accepted values are `Consumption`, `Commitment_1TB`, `Commitment_10TB`, `Commitment_100TB`, `Commitment_500TB`, `Commitment_1PB` or `Commitment_5PB`.
    """
    def __init__(__self__, __name__, __opts__=None, encryption_state=None, encryption_type=None, firewall_allow_azure_ips=None, firewall_state=None, location=None, name=None, resource_group_name=None, tags=None, tier=None):
        """
        Manage an Azure Data Lake Store.
        
        
        :param str __name__: The name of the resource.
        :param pulumi.ResourceOptions __opts__: Options for the resource.
        :param pulumi.Input[str] encryption_state: Is Encryption enabled on this Data Lake Store Account? Possible values are `Enabled` or `Disabled`. Defaults to `Enabled`.
        :param pulumi.Input[str] encryption_type: The Encryption Type used for this Data Lake Store Account. Currently can be set to `SystemManaged` when `encryption_state` is `Enabled` - and must be a blank string when it's Disabled.
        :param pulumi.Input[str] firewall_allow_azure_ips: are Azure Service IP's allowed through the firewall? Possible values are `Enabled` and `Disabled`. Defaults to `Enabled.`
        :param pulumi.Input[str] firewall_state: the state of the Firewall. Possible values are `Enabled` and `Disabled`. Defaults to `Enabled.`
        :param pulumi.Input[str] location: Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: Specifies the name of the Data Lake Store. Changing this forces a new resource to be created. Has to be between 3 to 24 characters.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which to create the Data Lake Store.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.
        :param pulumi.Input[str] tier: The monthly commitment tier for Data Lake Store. Accepted values are `Consumption`, `Commitment_1TB`, `Commitment_10TB`, `Commitment_100TB`, `Commitment_500TB`, `Commitment_1PB` or `Commitment_5PB`.
        """
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, str):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        __props__['encryption_state'] = encryption_state

        __props__['encryption_type'] = encryption_type

        __props__['firewall_allow_azure_ips'] = firewall_allow_azure_ips

        __props__['firewall_state'] = firewall_state

        if not location:
            raise TypeError('Missing required property location')
        __props__['location'] = location

        __props__['name'] = name

        if not resource_group_name:
            raise TypeError('Missing required property resource_group_name')
        __props__['resource_group_name'] = resource_group_name

        __props__['tags'] = tags

        __props__['tier'] = tier

        __props__['endpoint'] = None

        super(Store, __self__).__init__(
            'azure:datalake/store:Store',
            __name__,
            __props__,
            __opts__)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

