# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables


class Endpoint(pulumi.CustomResource):
    custom_dns_configs: pulumi.Output[list]
    location: pulumi.Output[str]
    """
    The supported Azure location where the resource exists. Changing this forces a new resource to be created.
    """
    name: pulumi.Output[str]
    """
    Specifies the Name of the Private Endpoint. Changing this forces a new resource to be created.
    """
    private_dns_zone_configs: pulumi.Output[list]
    private_dns_zone_group: pulumi.Output[dict]
    """
    A `private_dns_zone_group` block as defined below.

      * `id` (`str`) - The ID of the Private DNS Zone Config.
      * `name` (`str`) - Specifies the Name of the Private Service Connection. Changing this forces the a new `private_dns_zone_group` to be created.
      * `privateDnsZoneIds` (`list`) - Specifies the list of Private DNS Zones to include within the `private_dns_zone_group`.
    """
    private_service_connection: pulumi.Output[dict]
    """
    A `private_service_connection` block as defined below.

      * `isManualConnection` (`bool`) - Does the Private Endpoint require Manual Approval from the remote resource owner? Changing this forces a new resource to be created.
      * `name` (`str`) - Specifies the Name of the Private Service Connection. Changing this forces a new resource to be created.
      * `privateConnectionResourceId` (`str`) - The ID of the Private Link Enabled Remote Resource which this Private Endpoint should be connected to. Changing this forces a new resource to be created.
      * `private_ip_address` (`str`) - The private IP address associated with the private endpoint, note that you will have a private IP address assigned to the private endpoint even if the connection request was `Rejected`.
      * `requestMessage` (`str`) - A message passed to the owner of the remote resource when the private endpoint attempts to establish the connection to the remote resource. The request message can be a maximum of `140` characters in length. Only valid if `is_manual_connection` is set to `true`.
      * `subresourceNames` (`list`) - A list of subresource names which the Private Endpoint is able to connect to. `subresource_names` corresponds to `group_id`. Changing this forces a new resource to be created.
    """
    resource_group_name: pulumi.Output[str]
    """
    Specifies the Name of the Resource Group within which the Private Endpoint should exist. Changing this forces a new resource to be created.
    """
    subnet_id: pulumi.Output[str]
    """
    The ID of the Subnet from which Private IP Addresses will be allocated for this Private Endpoint. Changing this forces a new resource to be created.
    """
    tags: pulumi.Output[dict]
    """
    A mapping of tags to assign to the resource.
    """
    def __init__(__self__, resource_name, opts=None, location=None, name=None, private_dns_zone_group=None, private_service_connection=None, resource_group_name=None, subnet_id=None, tags=None, __props__=None, __name__=None, __opts__=None):
        """
        Manages a Private Endpoint.

        > **NOTE** Private Endpoint is currently in Public Preview.

        Azure Private Endpoint is a network interface that connects you privately and securely to a service powered by Azure Private Link. Private Endpoint uses a private IP address from your VNet, effectively bringing the service into your VNet. The service could be an Azure service such as Azure Storage, SQL, etc. or your own Private Link Service.

        ## Example Usage



        ```python
        import pulumi
        import pulumi_azure as azure

        example_resource_group = azure.core.ResourceGroup("exampleResourceGroup", location="West Europe")
        example_virtual_network = azure.network.VirtualNetwork("exampleVirtualNetwork",
            address_spaces=["10.0.0.0/16"],
            location=example_resource_group.location,
            resource_group_name=example_resource_group.name)
        service = azure.network.Subnet("service",
            resource_group_name=example_resource_group.name,
            virtual_network_name=example_virtual_network.name,
            address_prefix="10.0.1.0/24",
            enforce_private_link_service_network_policies=True)
        endpoint = azure.network.Subnet("endpoint",
            resource_group_name=example_resource_group.name,
            virtual_network_name=example_virtual_network.name,
            address_prefix="10.0.2.0/24",
            enforce_private_link_endpoint_network_policies=True)
        example_public_ip = azure.network.PublicIp("examplePublicIp",
            sku="Standard",
            location=example_resource_group.location,
            resource_group_name=example_resource_group.name,
            allocation_method="Static")
        example_load_balancer = azure.lb.LoadBalancer("exampleLoadBalancer",
            sku="Standard",
            location=example_resource_group.location,
            resource_group_name=example_resource_group.name,
            frontend_ip_configuration=[{
                "name": example_public_ip.name,
                "public_ip_address_id": example_public_ip.id,
            }])
        example_link_service = azure.privatedns.LinkService("exampleLinkService",
            location=example_resource_group.location,
            resource_group_name=example_resource_group.name,
            nat_ip_configuration=[{
                "name": example_public_ip.name,
                "primary": True,
                "subnet_id": service.id,
            }],
            load_balancer_frontend_ip_configuration_ids=[example_load_balancer.frontend_ip_configurations[0]["id"]])
        example_endpoint = azure.privatelink.Endpoint("exampleEndpoint",
            location=example_resource_group.location,
            resource_group_name=example_resource_group.name,
            subnet_id=endpoint.id,
            private_service_connection={
                "name": "example-privateserviceconnection",
                "privateConnectionResourceId": example_link_service.id,
                "isManualConnection": False,
            })
        ```

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] location: The supported Azure location where the resource exists. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: Specifies the Name of the Private Endpoint. Changing this forces a new resource to be created.
        :param pulumi.Input[dict] private_dns_zone_group: A `private_dns_zone_group` block as defined below.
        :param pulumi.Input[dict] private_service_connection: A `private_service_connection` block as defined below.
        :param pulumi.Input[str] resource_group_name: Specifies the Name of the Resource Group within which the Private Endpoint should exist. Changing this forces a new resource to be created.
        :param pulumi.Input[str] subnet_id: The ID of the Subnet from which Private IP Addresses will be allocated for this Private Endpoint. Changing this forces a new resource to be created.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.

        The **private_dns_zone_group** object supports the following:

          * `id` (`pulumi.Input[str]`) - The ID of the Private DNS Zone Config.
          * `name` (`pulumi.Input[str]`) - Specifies the Name of the Private Service Connection. Changing this forces the a new `private_dns_zone_group` to be created.
          * `privateDnsZoneIds` (`pulumi.Input[list]`) - Specifies the list of Private DNS Zones to include within the `private_dns_zone_group`.

        The **private_service_connection** object supports the following:

          * `isManualConnection` (`pulumi.Input[bool]`) - Does the Private Endpoint require Manual Approval from the remote resource owner? Changing this forces a new resource to be created.
          * `name` (`pulumi.Input[str]`) - Specifies the Name of the Private Service Connection. Changing this forces a new resource to be created.
          * `privateConnectionResourceId` (`pulumi.Input[str]`) - The ID of the Private Link Enabled Remote Resource which this Private Endpoint should be connected to. Changing this forces a new resource to be created.
          * `private_ip_address` (`pulumi.Input[str]`) - The private IP address associated with the private endpoint, note that you will have a private IP address assigned to the private endpoint even if the connection request was `Rejected`.
          * `requestMessage` (`pulumi.Input[str]`) - A message passed to the owner of the remote resource when the private endpoint attempts to establish the connection to the remote resource. The request message can be a maximum of `140` characters in length. Only valid if `is_manual_connection` is set to `true`.
          * `subresourceNames` (`pulumi.Input[list]`) - A list of subresource names which the Private Endpoint is able to connect to. `subresource_names` corresponds to `group_id`. Changing this forces a new resource to be created.
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
            __props__['private_dns_zone_group'] = private_dns_zone_group
            if private_service_connection is None:
                raise TypeError("Missing required property 'private_service_connection'")
            __props__['private_service_connection'] = private_service_connection
            if resource_group_name is None:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            if subnet_id is None:
                raise TypeError("Missing required property 'subnet_id'")
            __props__['subnet_id'] = subnet_id
            __props__['tags'] = tags
            __props__['custom_dns_configs'] = None
            __props__['private_dns_zone_configs'] = None
        super(Endpoint, __self__).__init__(
            'azure:privatelink/endpoint:Endpoint',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, custom_dns_configs=None, location=None, name=None, private_dns_zone_configs=None, private_dns_zone_group=None, private_service_connection=None, resource_group_name=None, subnet_id=None, tags=None):
        """
        Get an existing Endpoint resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] location: The supported Azure location where the resource exists. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: Specifies the Name of the Private Endpoint. Changing this forces a new resource to be created.
        :param pulumi.Input[dict] private_dns_zone_group: A `private_dns_zone_group` block as defined below.
        :param pulumi.Input[dict] private_service_connection: A `private_service_connection` block as defined below.
        :param pulumi.Input[str] resource_group_name: Specifies the Name of the Resource Group within which the Private Endpoint should exist. Changing this forces a new resource to be created.
        :param pulumi.Input[str] subnet_id: The ID of the Subnet from which Private IP Addresses will be allocated for this Private Endpoint. Changing this forces a new resource to be created.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.

        The **custom_dns_configs** object supports the following:

          * `fqdn` (`pulumi.Input[str]`) - The fully qualified domain name to the `private_dns_zone`.
          * `ipAddresses` (`pulumi.Input[list]`) - A list of all IP Addresses that map to the `private_dns_zone` fqdn.

        The **private_dns_zone_configs** object supports the following:

          * `id` (`pulumi.Input[str]`) - The ID of the Private DNS Zone Config.
          * `name` (`pulumi.Input[str]`) - Specifies the Name of the Private Endpoint. Changing this forces a new resource to be created.
          * `privateDnsZoneId` (`pulumi.Input[str]`) - A list of IP Addresses
          * `recordSets` (`pulumi.Input[list]`) - A `record_sets` block as defined below.
            * `fqdn` (`pulumi.Input[str]`) - The fully qualified domain name to the `private_dns_zone`.
            * `ipAddresses` (`pulumi.Input[list]`) - A list of all IP Addresses that map to the `private_dns_zone` fqdn.
            * `name` (`pulumi.Input[str]`) - Specifies the Name of the Private Endpoint. Changing this forces a new resource to be created.
            * `ttl` (`pulumi.Input[float]`) - The time to live for each connection to the `private_dns_zone`.
            * `type` (`pulumi.Input[str]`) - The type of DNS record.

        The **private_dns_zone_group** object supports the following:

          * `id` (`pulumi.Input[str]`) - The ID of the Private DNS Zone Config.
          * `name` (`pulumi.Input[str]`) - Specifies the Name of the Private Service Connection. Changing this forces the a new `private_dns_zone_group` to be created.
          * `privateDnsZoneIds` (`pulumi.Input[list]`) - Specifies the list of Private DNS Zones to include within the `private_dns_zone_group`.

        The **private_service_connection** object supports the following:

          * `isManualConnection` (`pulumi.Input[bool]`) - Does the Private Endpoint require Manual Approval from the remote resource owner? Changing this forces a new resource to be created.
          * `name` (`pulumi.Input[str]`) - Specifies the Name of the Private Service Connection. Changing this forces a new resource to be created.
          * `privateConnectionResourceId` (`pulumi.Input[str]`) - The ID of the Private Link Enabled Remote Resource which this Private Endpoint should be connected to. Changing this forces a new resource to be created.
          * `private_ip_address` (`pulumi.Input[str]`) - The private IP address associated with the private endpoint, note that you will have a private IP address assigned to the private endpoint even if the connection request was `Rejected`.
          * `requestMessage` (`pulumi.Input[str]`) - A message passed to the owner of the remote resource when the private endpoint attempts to establish the connection to the remote resource. The request message can be a maximum of `140` characters in length. Only valid if `is_manual_connection` is set to `true`.
          * `subresourceNames` (`pulumi.Input[list]`) - A list of subresource names which the Private Endpoint is able to connect to. `subresource_names` corresponds to `group_id`. Changing this forces a new resource to be created.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["custom_dns_configs"] = custom_dns_configs
        __props__["location"] = location
        __props__["name"] = name
        __props__["private_dns_zone_configs"] = private_dns_zone_configs
        __props__["private_dns_zone_group"] = private_dns_zone_group
        __props__["private_service_connection"] = private_service_connection
        __props__["resource_group_name"] = resource_group_name
        __props__["subnet_id"] = subnet_id
        __props__["tags"] = tags
        return Endpoint(resource_name, opts=opts, __props__=__props__)

    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop
