# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class GetTopicResult:
    """
    A collection of values returned by getTopic.
    """
    def __init__(__self__, endpoint=None, location=None, name=None, primary_access_key=None, resource_group_name=None, secondary_access_key=None, tags=None, id=None):
        if endpoint and not isinstance(endpoint, str):
            raise TypeError("Expected argument 'endpoint' to be a str")
        __self__.endpoint = endpoint
        """
        The Endpoint associated with the EventGrid Topic.
        """
        if location and not isinstance(location, str):
            raise TypeError("Expected argument 'location' to be a str")
        __self__.location = location
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        __self__.name = name
        if primary_access_key and not isinstance(primary_access_key, str):
            raise TypeError("Expected argument 'primary_access_key' to be a str")
        __self__.primary_access_key = primary_access_key
        """
        The Primary Shared Access Key associated with the EventGrid Topic.
        """
        if resource_group_name and not isinstance(resource_group_name, str):
            raise TypeError("Expected argument 'resource_group_name' to be a str")
        __self__.resource_group_name = resource_group_name
        if secondary_access_key and not isinstance(secondary_access_key, str):
            raise TypeError("Expected argument 'secondary_access_key' to be a str")
        __self__.secondary_access_key = secondary_access_key
        """
        The Secondary Shared Access Key associated with the EventGrid Topic.
        """
        if tags and not isinstance(tags, dict):
            raise TypeError("Expected argument 'tags' to be a dict")
        __self__.tags = tags
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """
class AwaitableGetTopicResult(GetTopicResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetTopicResult(
            endpoint=self.endpoint,
            location=self.location,
            name=self.name,
            primary_access_key=self.primary_access_key,
            resource_group_name=self.resource_group_name,
            secondary_access_key=self.secondary_access_key,
            tags=self.tags,
            id=self.id)

def get_topic(name=None,resource_group_name=None,tags=None,opts=None):
    """
    Use this data source to access information about an existing EventGrid Topic
    
    :param str name: The name of the EventGrid Topic resource.
    :param str resource_group_name: The name of the resource group in which the EventGrid Topic exists.

    > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/eventgrid_topic.html.markdown.
    """
    __args__ = dict()

    __args__['name'] = name
    __args__['resourceGroupName'] = resource_group_name
    __args__['tags'] = tags
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure:eventgrid/getTopic:getTopic', __args__, opts=opts).value

    return AwaitableGetTopicResult(
        endpoint=__ret__.get('endpoint'),
        location=__ret__.get('location'),
        name=__ret__.get('name'),
        primary_access_key=__ret__.get('primaryAccessKey'),
        resource_group_name=__ret__.get('resourceGroupName'),
        secondary_access_key=__ret__.get('secondaryAccessKey'),
        tags=__ret__.get('tags'),
        id=__ret__.get('id'))
