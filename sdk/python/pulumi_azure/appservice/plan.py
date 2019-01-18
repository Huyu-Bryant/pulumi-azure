# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import pulumi
import pulumi.runtime
from .. import utilities, tables

class Plan(pulumi.CustomResource):
    app_service_environment_id: pulumi.Output[str]
    """
    The ID of the App Service Environment where the App Service Plan should be located. Changing forces a new resource to be created.
    """
    kind: pulumi.Output[str]
    """
    The kind of the App Service Plan to create. Possible values are `Windows` (also available as `App`), `Linux` and `FunctionApp` (for a Consumption Plan). Defaults to `Windows`. Changing this forces a new resource to be created.
    """
    location: pulumi.Output[str]
    """
    Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
    """
    maximum_number_of_workers: pulumi.Output[int]
    """
    The maximum number of workers supported with the App Service Plan's sku.
    """
    name: pulumi.Output[str]
    """
    Specifies the name of the App Service Plan component. Changing this forces a new resource to be created.
    """
    per_site_scaling: pulumi.Output[bool]
    """
    Can Apps assigned to this App Service Plan be scaled independently? If set to `false` apps assigned to this plan will scale to all instances of the plan.  Defaults to `false`.
    """
    properties: pulumi.Output[dict]
    reserved: pulumi.Output[bool]
    """
    Is this App Service Plan `Reserved`. Defaults to `false`.
    """
    resource_group_name: pulumi.Output[str]
    """
    The name of the resource group in which to create the App Service Plan component.
    """
    sku: pulumi.Output[dict]
    """
    A `sku` block as documented below.
    """
    tags: pulumi.Output[dict]
    """
    A mapping of tags to assign to the resource.
    """
    def __init__(__self__, __name__, __opts__=None, app_service_environment_id=None, kind=None, location=None, name=None, per_site_scaling=None, properties=None, reserved=None, resource_group_name=None, sku=None, tags=None):
        """
        Manage an App Service Plan component.
        
        
        :param str __name__: The name of the resource.
        :param pulumi.ResourceOptions __opts__: Options for the resource.
        :param pulumi.Input[str] app_service_environment_id: The ID of the App Service Environment where the App Service Plan should be located. Changing forces a new resource to be created.
        :param pulumi.Input[str] kind: The kind of the App Service Plan to create. Possible values are `Windows` (also available as `App`), `Linux` and `FunctionApp` (for a Consumption Plan). Defaults to `Windows`. Changing this forces a new resource to be created.
        :param pulumi.Input[str] location: Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: Specifies the name of the App Service Plan component. Changing this forces a new resource to be created.
        :param pulumi.Input[bool] per_site_scaling: Can Apps assigned to this App Service Plan be scaled independently? If set to `false` apps assigned to this plan will scale to all instances of the plan.  Defaults to `false`.
        :param pulumi.Input[dict] properties
        :param pulumi.Input[bool] reserved: Is this App Service Plan `Reserved`. Defaults to `false`.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which to create the App Service Plan component.
        :param pulumi.Input[dict] sku: A `sku` block as documented below.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.
        """
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, str):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        __props__['app_service_environment_id'] = app_service_environment_id

        __props__['kind'] = kind

        if not location:
            raise TypeError('Missing required property location')
        __props__['location'] = location

        __props__['name'] = name

        __props__['per_site_scaling'] = per_site_scaling

        __props__['properties'] = properties

        __props__['reserved'] = reserved

        if not resource_group_name:
            raise TypeError('Missing required property resource_group_name')
        __props__['resource_group_name'] = resource_group_name

        if not sku:
            raise TypeError('Missing required property sku')
        __props__['sku'] = sku

        __props__['tags'] = tags

        __props__['maximum_number_of_workers'] = None

        super(Plan, __self__).__init__(
            'azure:appservice/plan:Plan',
            __name__,
            __props__,
            __opts__)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

