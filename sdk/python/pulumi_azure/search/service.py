# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class Service(pulumi.CustomResource):
    location: pulumi.Output[str]
    """
    Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
    """
    name: pulumi.Output[str]
    """
    The name of the Search Service. Changing this forces a new resource to be created.
    """
    partition_count: pulumi.Output[float]
    """
    Default is 1. Valid values include 1, 2, 3, 4, 6, or 12. Valid only when `sku` is `standard`. Changing this forces a new resource to be created.
    """
    primary_key: pulumi.Output[str]
    """
    The Search Service Administration primary key.
    """
    replica_count: pulumi.Output[float]
    """
    Default is 1. Valid values include 1 through 12. Valid only when `sku` is `standard`. Changing this forces a new resource to be created.
    """
    resource_group_name: pulumi.Output[str]
    """
    The name of the resource group in which to create the Search Service. Changing this forces a new resource to be created.
    """
    secondary_key: pulumi.Output[str]
    """
    The Search Service Administration secondary key.
    """
    sku: pulumi.Output[str]
    """
    Valid values are `free` and `standard`. `standard2` and `standard3` are also valid, but can only be used when it's enabled on the backend by Microsoft support. `free` provisions the service in shared clusters. `standard` provisions the service in dedicated clusters.  Changing this forces a new resource to be created.
    """
    tags: pulumi.Output[dict]
    """
    A mapping of tags to assign to the resource.
    """
    def __init__(__self__, resource_name, opts=None, location=None, name=None, partition_count=None, replica_count=None, resource_group_name=None, sku=None, tags=None, __props__=None, __name__=None, __opts__=None):
        """
        Allows you to manage an Azure Search Service.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] location: Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: The name of the Search Service. Changing this forces a new resource to be created.
        :param pulumi.Input[float] partition_count: Default is 1. Valid values include 1, 2, 3, 4, 6, or 12. Valid only when `sku` is `standard`. Changing this forces a new resource to be created.
        :param pulumi.Input[float] replica_count: Default is 1. Valid values include 1 through 12. Valid only when `sku` is `standard`. Changing this forces a new resource to be created.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which to create the Search Service. Changing this forces a new resource to be created.
        :param pulumi.Input[str] sku: Valid values are `free` and `standard`. `standard2` and `standard3` are also valid, but can only be used when it's enabled on the backend by Microsoft support. `free` provisions the service in shared clusters. `standard` provisions the service in dedicated clusters.  Changing this forces a new resource to be created.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/search_service.html.markdown.
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

            __props__['location'] = location
            __props__['name'] = name
            __props__['partition_count'] = partition_count
            __props__['replica_count'] = replica_count
            if resource_group_name is None:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            if sku is None:
                raise TypeError("Missing required property 'sku'")
            __props__['sku'] = sku
            __props__['tags'] = tags
            __props__['primary_key'] = None
            __props__['secondary_key'] = None
        super(Service, __self__).__init__(
            'azure:search/service:Service',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, location=None, name=None, partition_count=None, primary_key=None, replica_count=None, resource_group_name=None, secondary_key=None, sku=None, tags=None):
        """
        Get an existing Service resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.
        
        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] location: Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: The name of the Search Service. Changing this forces a new resource to be created.
        :param pulumi.Input[float] partition_count: Default is 1. Valid values include 1, 2, 3, 4, 6, or 12. Valid only when `sku` is `standard`. Changing this forces a new resource to be created.
        :param pulumi.Input[str] primary_key: The Search Service Administration primary key.
        :param pulumi.Input[float] replica_count: Default is 1. Valid values include 1 through 12. Valid only when `sku` is `standard`. Changing this forces a new resource to be created.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which to create the Search Service. Changing this forces a new resource to be created.
        :param pulumi.Input[str] secondary_key: The Search Service Administration secondary key.
        :param pulumi.Input[str] sku: Valid values are `free` and `standard`. `standard2` and `standard3` are also valid, but can only be used when it's enabled on the backend by Microsoft support. `free` provisions the service in shared clusters. `standard` provisions the service in dedicated clusters.  Changing this forces a new resource to be created.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/search_service.html.markdown.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()
        __props__["location"] = location
        __props__["name"] = name
        __props__["partition_count"] = partition_count
        __props__["primary_key"] = primary_key
        __props__["replica_count"] = replica_count
        __props__["resource_group_name"] = resource_group_name
        __props__["secondary_key"] = secondary_key
        __props__["sku"] = sku
        __props__["tags"] = tags
        return Service(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

