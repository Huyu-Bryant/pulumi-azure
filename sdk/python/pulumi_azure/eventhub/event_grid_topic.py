# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

warnings.warn("azure.eventhub.EventGridTopic has been deprecated in favor of azure.eventgrid.Topic", DeprecationWarning)
class EventGridTopic(pulumi.CustomResource):
    endpoint: pulumi.Output[str]
    """
    The Endpoint associated with the EventGrid Topic.
    """
    location: pulumi.Output[str]
    """
    Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
    """
    name: pulumi.Output[str]
    """
    Specifies the name of the EventGrid Topic resource. Changing this forces a new resource to be created.
    """
    primary_access_key: pulumi.Output[str]
    """
    The Primary Shared Access Key associated with the EventGrid Topic.
    """
    resource_group_name: pulumi.Output[str]
    """
    The name of the resource group in which the EventGrid Topic exists. Changing this forces a new resource to be created.
    """
    secondary_access_key: pulumi.Output[str]
    """
    The Secondary Shared Access Key associated with the EventGrid Topic.
    """
    tags: pulumi.Output[dict]
    """
    A mapping of tags to assign to the resource.
    """
    warnings.warn("azure.eventhub.EventGridTopic has been deprecated in favor of azure.eventgrid.Topic", DeprecationWarning)
    def __init__(__self__, resource_name, opts=None, location=None, name=None, resource_group_name=None, tags=None, __props__=None, __name__=None, __opts__=None):
        """
        Manages an EventGrid Topic

        > **Note:** at this time EventGrid Topic's are only available in a limited number of regions.

        ## Example Usage



        ```python
        import pulumi
        import pulumi_azure as azure

        example_resource_group = azure.core.ResourceGroup("exampleResourceGroup", location="West US 2")
        example_topic = azure.eventgrid.Topic("exampleTopic",
            location=example_resource_group.location,
            resource_group_name=example_resource_group.name,
            tags={
                "environment": "Production",
            })
        ```


        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] location: Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: Specifies the name of the EventGrid Topic resource. Changing this forces a new resource to be created.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which the EventGrid Topic exists. Changing this forces a new resource to be created.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.
        """
        pulumi.log.warn("EventGridTopic is deprecated: azure.eventhub.EventGridTopic has been deprecated in favor of azure.eventgrid.Topic")
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
            if resource_group_name is None:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            __props__['tags'] = tags
            __props__['endpoint'] = None
            __props__['primary_access_key'] = None
            __props__['secondary_access_key'] = None
        super(EventGridTopic, __self__).__init__(
            'azure:eventhub/eventGridTopic:EventGridTopic',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, endpoint=None, location=None, name=None, primary_access_key=None, resource_group_name=None, secondary_access_key=None, tags=None):
        """
        Get an existing EventGridTopic resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] endpoint: The Endpoint associated with the EventGrid Topic.
        :param pulumi.Input[str] location: Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: Specifies the name of the EventGrid Topic resource. Changing this forces a new resource to be created.
        :param pulumi.Input[str] primary_access_key: The Primary Shared Access Key associated with the EventGrid Topic.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which the EventGrid Topic exists. Changing this forces a new resource to be created.
        :param pulumi.Input[str] secondary_access_key: The Secondary Shared Access Key associated with the EventGrid Topic.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["endpoint"] = endpoint
        __props__["location"] = location
        __props__["name"] = name
        __props__["primary_access_key"] = primary_access_key
        __props__["resource_group_name"] = resource_group_name
        __props__["secondary_access_key"] = secondary_access_key
        __props__["tags"] = tags
        return EventGridTopic(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

