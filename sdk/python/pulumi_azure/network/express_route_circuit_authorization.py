# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class ExpressRouteCircuitAuthorization(pulumi.CustomResource):
    authorization_key: pulumi.Output[str]
    """
    The Authorization Key.
    """
    authorization_use_status: pulumi.Output[str]
    """
    The authorization use status.
    """
    express_route_circuit_name: pulumi.Output[str]
    """
    The name of the Express Route Circuit in which to create the Authorization.
    """
    name: pulumi.Output[str]
    """
    The name of the ExpressRoute circuit. Changing this forces a
    new resource to be created.
    """
    resource_group_name: pulumi.Output[str]
    """
    The name of the resource group in which to
    create the ExpressRoute circuit. Changing this forces a new resource to be created.
    """
    def __init__(__self__, resource_name, opts=None, express_route_circuit_name=None, name=None, resource_group_name=None, __props__=None, __name__=None, __opts__=None):
        """
        Manages an ExpressRoute Circuit Authorization.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] express_route_circuit_name: The name of the Express Route Circuit in which to create the Authorization.
        :param pulumi.Input[str] name: The name of the ExpressRoute circuit. Changing this forces a
               new resource to be created.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which to
               create the ExpressRoute circuit. Changing this forces a new resource to be created.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/express_route_circuit_authorization.html.markdown.
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

            if express_route_circuit_name is None:
                raise TypeError("Missing required property 'express_route_circuit_name'")
            __props__['express_route_circuit_name'] = express_route_circuit_name
            __props__['name'] = name
            if resource_group_name is None:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            __props__['authorization_key'] = None
            __props__['authorization_use_status'] = None
        super(ExpressRouteCircuitAuthorization, __self__).__init__(
            'azure:network/expressRouteCircuitAuthorization:ExpressRouteCircuitAuthorization',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, authorization_key=None, authorization_use_status=None, express_route_circuit_name=None, name=None, resource_group_name=None):
        """
        Get an existing ExpressRouteCircuitAuthorization resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.
        
        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] authorization_key: The Authorization Key.
        :param pulumi.Input[str] authorization_use_status: The authorization use status.
        :param pulumi.Input[str] express_route_circuit_name: The name of the Express Route Circuit in which to create the Authorization.
        :param pulumi.Input[str] name: The name of the ExpressRoute circuit. Changing this forces a
               new resource to be created.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which to
               create the ExpressRoute circuit. Changing this forces a new resource to be created.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/express_route_circuit_authorization.html.markdown.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()
        __props__["authorization_key"] = authorization_key
        __props__["authorization_use_status"] = authorization_use_status
        __props__["express_route_circuit_name"] = express_route_circuit_name
        __props__["name"] = name
        __props__["resource_group_name"] = resource_group_name
        return ExpressRouteCircuitAuthorization(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

