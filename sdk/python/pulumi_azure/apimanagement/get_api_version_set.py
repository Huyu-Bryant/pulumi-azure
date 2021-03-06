# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class GetApiVersionSetResult:
    """
    A collection of values returned by getApiVersionSet.
    """
    def __init__(__self__, api_management_name=None, description=None, display_name=None, id=None, name=None, resource_group_name=None, version_header_name=None, version_query_name=None, versioning_scheme=None):
        if api_management_name and not isinstance(api_management_name, str):
            raise TypeError("Expected argument 'api_management_name' to be a str")
        __self__.api_management_name = api_management_name
        if description and not isinstance(description, str):
            raise TypeError("Expected argument 'description' to be a str")
        __self__.description = description
        """
        The description of API Version Set.
        """
        if display_name and not isinstance(display_name, str):
            raise TypeError("Expected argument 'display_name' to be a str")
        __self__.display_name = display_name
        """
        The display name of this API Version Set.
        """
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        The provider-assigned unique ID for this managed resource.
        """
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        __self__.name = name
        if resource_group_name and not isinstance(resource_group_name, str):
            raise TypeError("Expected argument 'resource_group_name' to be a str")
        __self__.resource_group_name = resource_group_name
        if version_header_name and not isinstance(version_header_name, str):
            raise TypeError("Expected argument 'version_header_name' to be a str")
        __self__.version_header_name = version_header_name
        """
        The name of the Header which should be read from Inbound Requests which defines the API Version.
        """
        if version_query_name and not isinstance(version_query_name, str):
            raise TypeError("Expected argument 'version_query_name' to be a str")
        __self__.version_query_name = version_query_name
        """
        The name of the Query String which should be read from Inbound Requests which defines the API Version.
        """
        if versioning_scheme and not isinstance(versioning_scheme, str):
            raise TypeError("Expected argument 'versioning_scheme' to be a str")
        __self__.versioning_scheme = versioning_scheme
class AwaitableGetApiVersionSetResult(GetApiVersionSetResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetApiVersionSetResult(
            api_management_name=self.api_management_name,
            description=self.description,
            display_name=self.display_name,
            id=self.id,
            name=self.name,
            resource_group_name=self.resource_group_name,
            version_header_name=self.version_header_name,
            version_query_name=self.version_query_name,
            versioning_scheme=self.versioning_scheme)

def get_api_version_set(api_management_name=None,name=None,resource_group_name=None,opts=None):
    """
    Uses this data source to access information about an API Version Set within an API Management Service.

    ## Example Usage

    ```python
    import pulumi
    import pulumi_azure as azure

    example = azure.apimanagement.get_api_version_set(resource_group_name="example-resources",
        api_management_name="example-api",
        name="example-api-version-set")
    pulumi.export("apiManagementApiVersionSetId", example.id)
    ```


    :param str api_management_name: The name of the API Management Service where the API Version Set exists.
    :param str name: The name of the API Version Set.
    :param str resource_group_name: The name of the Resource Group in which the parent API Management Service exists.
    """
    __args__ = dict()


    __args__['apiManagementName'] = api_management_name
    __args__['name'] = name
    __args__['resourceGroupName'] = resource_group_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure:apimanagement/getApiVersionSet:getApiVersionSet', __args__, opts=opts).value

    return AwaitableGetApiVersionSetResult(
        api_management_name=__ret__.get('apiManagementName'),
        description=__ret__.get('description'),
        display_name=__ret__.get('displayName'),
        id=__ret__.get('id'),
        name=__ret__.get('name'),
        resource_group_name=__ret__.get('resourceGroupName'),
        version_header_name=__ret__.get('versionHeaderName'),
        version_query_name=__ret__.get('versionQueryName'),
        versioning_scheme=__ret__.get('versioningScheme'))
