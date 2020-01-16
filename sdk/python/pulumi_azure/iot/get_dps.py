# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class GetDpsResult:
    """
    A collection of values returned by getDps.
    """
    def __init__(__self__, allocation_policy=None, device_provisioning_host_name=None, id_scope=None, location=None, name=None, resource_group_name=None, service_operations_host_name=None, tags=None, id=None):
        if allocation_policy and not isinstance(allocation_policy, str):
            raise TypeError("Expected argument 'allocation_policy' to be a str")
        __self__.allocation_policy = allocation_policy
        """
        The allocation policy of the IoT Device Provisioning Service.
        """
        if device_provisioning_host_name and not isinstance(device_provisioning_host_name, str):
            raise TypeError("Expected argument 'device_provisioning_host_name' to be a str")
        __self__.device_provisioning_host_name = device_provisioning_host_name
        """
        The device endpoint of the IoT Device Provisioning Service.
        """
        if id_scope and not isinstance(id_scope, str):
            raise TypeError("Expected argument 'id_scope' to be a str")
        __self__.id_scope = id_scope
        """
        The unique identifier of the IoT Device Provisioning Service.
        """
        if location and not isinstance(location, str):
            raise TypeError("Expected argument 'location' to be a str")
        __self__.location = location
        """
        Specifies the supported Azure location where the IoT Device Provisioning Service exists.
        """
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        __self__.name = name
        if resource_group_name and not isinstance(resource_group_name, str):
            raise TypeError("Expected argument 'resource_group_name' to be a str")
        __self__.resource_group_name = resource_group_name
        if service_operations_host_name and not isinstance(service_operations_host_name, str):
            raise TypeError("Expected argument 'service_operations_host_name' to be a str")
        __self__.service_operations_host_name = service_operations_host_name
        """
        The service endpoint of the IoT Device Provisioning Service.
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
class AwaitableGetDpsResult(GetDpsResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetDpsResult(
            allocation_policy=self.allocation_policy,
            device_provisioning_host_name=self.device_provisioning_host_name,
            id_scope=self.id_scope,
            location=self.location,
            name=self.name,
            resource_group_name=self.resource_group_name,
            service_operations_host_name=self.service_operations_host_name,
            tags=self.tags,
            id=self.id)

def get_dps(name=None,resource_group_name=None,tags=None,opts=None):
    """
    Use this data source to access information about an existing IotHub Device Provisioning Service.
    
    :param str name: Specifies the name of the Iot Device Provisioning Service resource.
    :param str resource_group_name: The name of the resource group under which the Iot Device Provisioning Service is located in.

    > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/iothub_dps.html.markdown.
    """
    __args__ = dict()

    __args__['name'] = name
    __args__['resourceGroupName'] = resource_group_name
    __args__['tags'] = tags
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure:iot/getDps:getDps', __args__, opts=opts).value

    return AwaitableGetDpsResult(
        allocation_policy=__ret__.get('allocationPolicy'),
        device_provisioning_host_name=__ret__.get('deviceProvisioningHostName'),
        id_scope=__ret__.get('idScope'),
        location=__ret__.get('location'),
        name=__ret__.get('name'),
        resource_group_name=__ret__.get('resourceGroupName'),
        service_operations_host_name=__ret__.get('serviceOperationsHostName'),
        tags=__ret__.get('tags'),
        id=__ret__.get('id'))
