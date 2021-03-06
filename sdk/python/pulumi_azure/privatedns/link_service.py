# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables


class LinkService(pulumi.CustomResource):
    alias: pulumi.Output[str]
    """
    A globally unique DNS Name for your Private Link Service. You can use this alias to request a connection to your Private Link Service.
    """
    auto_approval_subscription_ids: pulumi.Output[list]
    """
    A list of Subscription UUID/GUID's that will be automatically be able to use this Private Link Service.
    """
    enable_proxy_protocol: pulumi.Output[bool]
    """
    Should the Private Link Service support the Proxy Protocol? Defaults to `false`.
    """
    load_balancer_frontend_ip_configuration_ids: pulumi.Output[list]
    """
    A list of Frontend IP Configuration ID's from a Standard Load Balancer, where traffic from the Private Link Service should be routed. You can use Load Balancer Rules to direct this traffic to appropriate backend pools where your applications are running.
    """
    location: pulumi.Output[str]
    """
    Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
    """
    name: pulumi.Output[str]
    """
    Specifies the name of this Private Link Service. Changing this forces a new resource to be created.
    """
    nat_ip_configurations: pulumi.Output[list]
    """
    One or more (up to 8) `nat_ip_configuration` block as defined below.

      * `name` (`str`) - Specifies the name which should be used for the NAT IP Configuration. Changing this forces a new resource to be created.
      * `primary` (`bool`) - Is this is the Primary IP Configuration? Changing this forces a new resource to be created.
      * `private_ip_address` (`str`) - Specifies a Private Static IP Address for this IP Configuration.
      * `privateIpAddressVersion` (`str`) - The version of the IP Protocol which should be used. At this time the only supported value is `IPv4`. Defaults to `IPv4`.
      * `subnet_id` (`str`) - Specifies the ID of the Subnet which should be used for the Private Link Service.
    """
    resource_group_name: pulumi.Output[str]
    """
    The name of the Resource Group where the Private Link Service should exist. Changing this forces a new resource to be created.
    """
    tags: pulumi.Output[dict]
    """
    A mapping of tags to assign to the resource. Changing this forces a new resource to be created.
    """
    visibility_subscription_ids: pulumi.Output[list]
    """
    A list of Subscription UUID/GUID's that will be able to see this Private Link Service.
    """
    def __init__(__self__, resource_name, opts=None, auto_approval_subscription_ids=None, enable_proxy_protocol=None, load_balancer_frontend_ip_configuration_ids=None, location=None, name=None, nat_ip_configurations=None, resource_group_name=None, tags=None, visibility_subscription_ids=None, __props__=None, __name__=None, __opts__=None):
        """
        Manages a Private Link Service.

        > **NOTE** Private Link is now in [GA](https://docs.microsoft.com/en-gb/azure/private-link/).

        ## Example Usage

        ```python
        import pulumi
        import pulumi_azure as azure

        example_resource_group = azure.core.ResourceGroup("exampleResourceGroup", location="West Europe")
        example_virtual_network = azure.network.VirtualNetwork("exampleVirtualNetwork",
            resource_group_name=example_resource_group.name,
            location=example_resource_group.location,
            address_spaces=["10.5.0.0/16"])
        example_subnet = azure.network.Subnet("exampleSubnet",
            resource_group_name=example_resource_group.name,
            virtual_network_name=example_virtual_network.name,
            address_prefix="10.5.1.0/24",
            enforce_private_link_service_network_policies=True)
        example_public_ip = azure.network.PublicIp("examplePublicIp",
            sku="Standard",
            location=example_resource_group.location,
            resource_group_name=example_resource_group.name,
            allocation_method="Static")
        example_load_balancer = azure.lb.LoadBalancer("exampleLoadBalancer",
            sku="Standard",
            location=example_resource_group.location,
            resource_group_name=example_resource_group.name,
            frontend_ip_configurations=[{
                "name": example_public_ip.name,
                "public_ip_address_id": example_public_ip.id,
            }])
        example_link_service = azure.privatedns.LinkService("exampleLinkService",
            resource_group_name=example_resource_group.name,
            location=example_resource_group.location,
            auto_approval_subscription_ids=["00000000-0000-0000-0000-000000000000"],
            visibility_subscription_ids=["00000000-0000-0000-0000-000000000000"],
            load_balancer_frontend_ip_configuration_ids=[example_load_balancer.frontend_ip_configurations[0]["id"]],
            nat_ip_configurations=[
                {
                    "name": "primary",
                    "private_ip_address": "10.5.1.17",
                    "privateIpAddressVersion": "IPv4",
                    "subnet_id": example_subnet.id,
                    "primary": True,
                },
                {
                    "name": "secondary",
                    "private_ip_address": "10.5.1.18",
                    "privateIpAddressVersion": "IPv4",
                    "subnet_id": example_subnet.id,
                    "primary": False,
                },
            ])
        ```

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[list] auto_approval_subscription_ids: A list of Subscription UUID/GUID's that will be automatically be able to use this Private Link Service.
        :param pulumi.Input[bool] enable_proxy_protocol: Should the Private Link Service support the Proxy Protocol? Defaults to `false`.
        :param pulumi.Input[list] load_balancer_frontend_ip_configuration_ids: A list of Frontend IP Configuration ID's from a Standard Load Balancer, where traffic from the Private Link Service should be routed. You can use Load Balancer Rules to direct this traffic to appropriate backend pools where your applications are running.
        :param pulumi.Input[str] location: Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: Specifies the name of this Private Link Service. Changing this forces a new resource to be created.
        :param pulumi.Input[list] nat_ip_configurations: One or more (up to 8) `nat_ip_configuration` block as defined below.
        :param pulumi.Input[str] resource_group_name: The name of the Resource Group where the Private Link Service should exist. Changing this forces a new resource to be created.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource. Changing this forces a new resource to be created.
        :param pulumi.Input[list] visibility_subscription_ids: A list of Subscription UUID/GUID's that will be able to see this Private Link Service.

        The **nat_ip_configurations** object supports the following:

          * `name` (`pulumi.Input[str]`) - Specifies the name which should be used for the NAT IP Configuration. Changing this forces a new resource to be created.
          * `primary` (`pulumi.Input[bool]`) - Is this is the Primary IP Configuration? Changing this forces a new resource to be created.
          * `private_ip_address` (`pulumi.Input[str]`) - Specifies a Private Static IP Address for this IP Configuration.
          * `privateIpAddressVersion` (`pulumi.Input[str]`) - The version of the IP Protocol which should be used. At this time the only supported value is `IPv4`. Defaults to `IPv4`.
          * `subnet_id` (`pulumi.Input[str]`) - Specifies the ID of the Subnet which should be used for the Private Link Service.
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

            __props__['auto_approval_subscription_ids'] = auto_approval_subscription_ids
            __props__['enable_proxy_protocol'] = enable_proxy_protocol
            if load_balancer_frontend_ip_configuration_ids is None:
                raise TypeError("Missing required property 'load_balancer_frontend_ip_configuration_ids'")
            __props__['load_balancer_frontend_ip_configuration_ids'] = load_balancer_frontend_ip_configuration_ids
            __props__['location'] = location
            __props__['name'] = name
            if nat_ip_configurations is None:
                raise TypeError("Missing required property 'nat_ip_configurations'")
            __props__['nat_ip_configurations'] = nat_ip_configurations
            if resource_group_name is None:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            __props__['tags'] = tags
            __props__['visibility_subscription_ids'] = visibility_subscription_ids
            __props__['alias'] = None
        super(LinkService, __self__).__init__(
            'azure:privatedns/linkService:LinkService',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, alias=None, auto_approval_subscription_ids=None, enable_proxy_protocol=None, load_balancer_frontend_ip_configuration_ids=None, location=None, name=None, nat_ip_configurations=None, resource_group_name=None, tags=None, visibility_subscription_ids=None):
        """
        Get an existing LinkService resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] alias: A globally unique DNS Name for your Private Link Service. You can use this alias to request a connection to your Private Link Service.
        :param pulumi.Input[list] auto_approval_subscription_ids: A list of Subscription UUID/GUID's that will be automatically be able to use this Private Link Service.
        :param pulumi.Input[bool] enable_proxy_protocol: Should the Private Link Service support the Proxy Protocol? Defaults to `false`.
        :param pulumi.Input[list] load_balancer_frontend_ip_configuration_ids: A list of Frontend IP Configuration ID's from a Standard Load Balancer, where traffic from the Private Link Service should be routed. You can use Load Balancer Rules to direct this traffic to appropriate backend pools where your applications are running.
        :param pulumi.Input[str] location: Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: Specifies the name of this Private Link Service. Changing this forces a new resource to be created.
        :param pulumi.Input[list] nat_ip_configurations: One or more (up to 8) `nat_ip_configuration` block as defined below.
        :param pulumi.Input[str] resource_group_name: The name of the Resource Group where the Private Link Service should exist. Changing this forces a new resource to be created.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource. Changing this forces a new resource to be created.
        :param pulumi.Input[list] visibility_subscription_ids: A list of Subscription UUID/GUID's that will be able to see this Private Link Service.

        The **nat_ip_configurations** object supports the following:

          * `name` (`pulumi.Input[str]`) - Specifies the name which should be used for the NAT IP Configuration. Changing this forces a new resource to be created.
          * `primary` (`pulumi.Input[bool]`) - Is this is the Primary IP Configuration? Changing this forces a new resource to be created.
          * `private_ip_address` (`pulumi.Input[str]`) - Specifies a Private Static IP Address for this IP Configuration.
          * `privateIpAddressVersion` (`pulumi.Input[str]`) - The version of the IP Protocol which should be used. At this time the only supported value is `IPv4`. Defaults to `IPv4`.
          * `subnet_id` (`pulumi.Input[str]`) - Specifies the ID of the Subnet which should be used for the Private Link Service.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["alias"] = alias
        __props__["auto_approval_subscription_ids"] = auto_approval_subscription_ids
        __props__["enable_proxy_protocol"] = enable_proxy_protocol
        __props__["load_balancer_frontend_ip_configuration_ids"] = load_balancer_frontend_ip_configuration_ids
        __props__["location"] = location
        __props__["name"] = name
        __props__["nat_ip_configurations"] = nat_ip_configurations
        __props__["resource_group_name"] = resource_group_name
        __props__["tags"] = tags
        __props__["visibility_subscription_ids"] = visibility_subscription_ids
        return LinkService(resource_name, opts=opts, __props__=__props__)

    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop
