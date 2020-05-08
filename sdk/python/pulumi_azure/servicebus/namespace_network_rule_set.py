# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class NamespaceNetworkRuleSet(pulumi.CustomResource):
    default_action: pulumi.Output[str]
    """
    Specifies the default action for the ServiceBus Namespace Network Rule Set. Possible values are `Allow` and `Deny`. Defaults to `Deny`.
    """
    ip_rules: pulumi.Output[list]
    """
    One or more IP Addresses, or CIDR Blocks which should be able to access the ServiceBus Namespace.
    """
    namespace_name: pulumi.Output[str]
    """
    Specifies the ServiceBus Namespace name to which to attach the ServiceBus Namespace Network Rule Set. Changing this forces a new resource to be created.
    """
    network_rules: pulumi.Output[list]
    """
    One or more `network_rules` blocks as defined below.

      * `ignore_missing_vnet_service_endpoint` (`bool`) - Should the ServiceBus Namespace Network Rule Set ignore missing Virtual Network Service Endpoint option in the Subnet? Defaults to `false`.
      * `subnet_id` (`str`) - The Subnet ID which should be able to access this ServiceBus Namespace.
    """
    resource_group_name: pulumi.Output[str]
    """
    Specifies the name of the Resource Group where the ServiceBus Namespace Network Rule Set should exist. Changing this forces a new resource to be created.
    """
    def __init__(__self__, resource_name, opts=None, default_action=None, ip_rules=None, namespace_name=None, network_rules=None, resource_group_name=None, __props__=None, __name__=None, __opts__=None):
        """
        Manages a ServiceBus Namespace Network Rule Set Set.



        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] default_action: Specifies the default action for the ServiceBus Namespace Network Rule Set. Possible values are `Allow` and `Deny`. Defaults to `Deny`.
        :param pulumi.Input[list] ip_rules: One or more IP Addresses, or CIDR Blocks which should be able to access the ServiceBus Namespace.
        :param pulumi.Input[str] namespace_name: Specifies the ServiceBus Namespace name to which to attach the ServiceBus Namespace Network Rule Set. Changing this forces a new resource to be created.
        :param pulumi.Input[list] network_rules: One or more `network_rules` blocks as defined below.
        :param pulumi.Input[str] resource_group_name: Specifies the name of the Resource Group where the ServiceBus Namespace Network Rule Set should exist. Changing this forces a new resource to be created.

        The **network_rules** object supports the following:

          * `ignore_missing_vnet_service_endpoint` (`pulumi.Input[bool]`) - Should the ServiceBus Namespace Network Rule Set ignore missing Virtual Network Service Endpoint option in the Subnet? Defaults to `false`.
          * `subnet_id` (`pulumi.Input[str]`) - The Subnet ID which should be able to access this ServiceBus Namespace.
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

            __props__['default_action'] = default_action
            __props__['ip_rules'] = ip_rules
            if namespace_name is None:
                raise TypeError("Missing required property 'namespace_name'")
            __props__['namespace_name'] = namespace_name
            __props__['network_rules'] = network_rules
            if resource_group_name is None:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
        super(NamespaceNetworkRuleSet, __self__).__init__(
            'azure:servicebus/namespaceNetworkRuleSet:NamespaceNetworkRuleSet',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, default_action=None, ip_rules=None, namespace_name=None, network_rules=None, resource_group_name=None):
        """
        Get an existing NamespaceNetworkRuleSet resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] default_action: Specifies the default action for the ServiceBus Namespace Network Rule Set. Possible values are `Allow` and `Deny`. Defaults to `Deny`.
        :param pulumi.Input[list] ip_rules: One or more IP Addresses, or CIDR Blocks which should be able to access the ServiceBus Namespace.
        :param pulumi.Input[str] namespace_name: Specifies the ServiceBus Namespace name to which to attach the ServiceBus Namespace Network Rule Set. Changing this forces a new resource to be created.
        :param pulumi.Input[list] network_rules: One or more `network_rules` blocks as defined below.
        :param pulumi.Input[str] resource_group_name: Specifies the name of the Resource Group where the ServiceBus Namespace Network Rule Set should exist. Changing this forces a new resource to be created.

        The **network_rules** object supports the following:

          * `ignore_missing_vnet_service_endpoint` (`pulumi.Input[bool]`) - Should the ServiceBus Namespace Network Rule Set ignore missing Virtual Network Service Endpoint option in the Subnet? Defaults to `false`.
          * `subnet_id` (`pulumi.Input[str]`) - The Subnet ID which should be able to access this ServiceBus Namespace.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["default_action"] = default_action
        __props__["ip_rules"] = ip_rules
        __props__["namespace_name"] = namespace_name
        __props__["network_rules"] = network_rules
        __props__["resource_group_name"] = resource_group_name
        return NamespaceNetworkRuleSet(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop
