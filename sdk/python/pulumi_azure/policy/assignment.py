# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables


class Assignment(pulumi.CustomResource):
    description: pulumi.Output[str]
    """
    A description to use for this Policy Assignment. Changing this forces a new resource to be created.
    """
    display_name: pulumi.Output[str]
    """
    A friendly display name to use for this Policy Assignment. Changing this forces a new resource to be created.
    """
    enforcement_mode: pulumi.Output[bool]
    """
    Can be set to 'true' or 'false' to control whether the assignment is enforced (true) or not (false). Default is 'true'.
    ---
    """
    identity: pulumi.Output[dict]
    """
    An `identity` block.

      * `principal_id` (`str`) - The Principal ID of this Policy Assignment if `type` is `SystemAssigned`.
      * `tenant_id` (`str`) - The Tenant ID of this Policy Assignment if `type` is `SystemAssigned`.
      * `type` (`str`) - The Managed Service Identity Type of this Policy Assignment. Possible values are `SystemAssigned` (where Azure will generate a Service Principal for you), or `None` (no use of a Managed Service Identity).
    """
    location: pulumi.Output[str]
    """
    The Azure location where this policy assignment should exist. This is required when an Identity is assigned. Changing this forces a new resource to be created.
    """
    name: pulumi.Output[str]
    """
    The name of the Policy Assignment. Changing this forces a new resource to be created.
    """
    not_scopes: pulumi.Output[list]
    """
    A list of the Policy Assignment's excluded scopes. The list must contain Resource IDs (such as Subscriptions e.g. `/subscriptions/00000000-0000-0000-000000000000` or Resource Groups e.g.`/subscriptions/00000000-0000-0000-000000000000/resourceGroups/myResourceGroup`).
    """
    parameters: pulumi.Output[str]
    """
    Parameters for the policy definition. This field is a JSON object that maps to the Parameters field from the Policy Definition. Changing this forces a new resource to be created.
    """
    policy_definition_id: pulumi.Output[str]
    """
    The ID of the Policy Definition to be applied at the specified Scope.
    """
    scope: pulumi.Output[str]
    """
    The Scope at which the Policy Assignment should be applied, which must be a Resource ID (such as Subscription e.g. `/subscriptions/00000000-0000-0000-000000000000` or a Resource Group e.g.`/subscriptions/00000000-0000-0000-000000000000/resourceGroups/myResourceGroup`). Changing this forces a new resource to be created.
    """
    def __init__(__self__, resource_name, opts=None, description=None, display_name=None, enforcement_mode=None, identity=None, location=None, name=None, not_scopes=None, parameters=None, policy_definition_id=None, scope=None, __props__=None, __name__=None, __opts__=None):
        """
        Configures the specified Policy Definition at the specified Scope. Also, Policy Set Definitions are supported.

        ## Example Usage



        ```python
        import pulumi
        import pulumi_azure as azure

        example_definition = azure.policy.Definition("exampleDefinition",
            policy_type="Custom",
            mode="All",
            display_name="my-policy-definition",
            policy_rule=\"\"\"	{
            "if": {
              "not": {
                "field": "location",
                "in": "[parameters('allowedLocations')]"
              }
            },
            "then": {
              "effect": "audit"
            }
          }
        \"\"\",
            parameters=\"\"\"	{
            "allowedLocations": {
              "type": "Array",
              "metadata": {
                "description": "The list of allowed locations for resources.",
                "displayName": "Allowed locations",
                "strongType": "location"
              }
            }
          }
        \"\"\")
        example_resource_group = azure.core.ResourceGroup("exampleResourceGroup", location="West Europe")
        example_assignment = azure.policy.Assignment("exampleAssignment",
            scope=example_resource_group.id,
            policy_definition_id=example_definition.id,
            description="Policy Assignment created via an Acceptance Test",
            display_name="My Example Policy Assignment",
            parameters=\"\"\"{
          "allowedLocations": {
            "value": [ "West Europe" ]
          }
        }
        \"\"\")
        ```

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] description: A description to use for this Policy Assignment. Changing this forces a new resource to be created.
        :param pulumi.Input[str] display_name: A friendly display name to use for this Policy Assignment. Changing this forces a new resource to be created.
        :param pulumi.Input[bool] enforcement_mode: Can be set to 'true' or 'false' to control whether the assignment is enforced (true) or not (false). Default is 'true'.
               ---
        :param pulumi.Input[dict] identity: An `identity` block.
        :param pulumi.Input[str] location: The Azure location where this policy assignment should exist. This is required when an Identity is assigned. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: The name of the Policy Assignment. Changing this forces a new resource to be created.
        :param pulumi.Input[list] not_scopes: A list of the Policy Assignment's excluded scopes. The list must contain Resource IDs (such as Subscriptions e.g. `/subscriptions/00000000-0000-0000-000000000000` or Resource Groups e.g.`/subscriptions/00000000-0000-0000-000000000000/resourceGroups/myResourceGroup`).
        :param pulumi.Input[str] parameters: Parameters for the policy definition. This field is a JSON object that maps to the Parameters field from the Policy Definition. Changing this forces a new resource to be created.
        :param pulumi.Input[str] policy_definition_id: The ID of the Policy Definition to be applied at the specified Scope.
        :param pulumi.Input[str] scope: The Scope at which the Policy Assignment should be applied, which must be a Resource ID (such as Subscription e.g. `/subscriptions/00000000-0000-0000-000000000000` or a Resource Group e.g.`/subscriptions/00000000-0000-0000-000000000000/resourceGroups/myResourceGroup`). Changing this forces a new resource to be created.

        The **identity** object supports the following:

          * `principal_id` (`pulumi.Input[str]`) - The Principal ID of this Policy Assignment if `type` is `SystemAssigned`.
          * `tenant_id` (`pulumi.Input[str]`) - The Tenant ID of this Policy Assignment if `type` is `SystemAssigned`.
          * `type` (`pulumi.Input[str]`) - The Managed Service Identity Type of this Policy Assignment. Possible values are `SystemAssigned` (where Azure will generate a Service Principal for you), or `None` (no use of a Managed Service Identity).
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

            __props__['description'] = description
            __props__['display_name'] = display_name
            __props__['enforcement_mode'] = enforcement_mode
            __props__['identity'] = identity
            __props__['location'] = location
            __props__['name'] = name
            __props__['not_scopes'] = not_scopes
            __props__['parameters'] = parameters
            if policy_definition_id is None:
                raise TypeError("Missing required property 'policy_definition_id'")
            __props__['policy_definition_id'] = policy_definition_id
            if scope is None:
                raise TypeError("Missing required property 'scope'")
            __props__['scope'] = scope
        super(Assignment, __self__).__init__(
            'azure:policy/assignment:Assignment',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, description=None, display_name=None, enforcement_mode=None, identity=None, location=None, name=None, not_scopes=None, parameters=None, policy_definition_id=None, scope=None):
        """
        Get an existing Assignment resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] description: A description to use for this Policy Assignment. Changing this forces a new resource to be created.
        :param pulumi.Input[str] display_name: A friendly display name to use for this Policy Assignment. Changing this forces a new resource to be created.
        :param pulumi.Input[bool] enforcement_mode: Can be set to 'true' or 'false' to control whether the assignment is enforced (true) or not (false). Default is 'true'.
               ---
        :param pulumi.Input[dict] identity: An `identity` block.
        :param pulumi.Input[str] location: The Azure location where this policy assignment should exist. This is required when an Identity is assigned. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: The name of the Policy Assignment. Changing this forces a new resource to be created.
        :param pulumi.Input[list] not_scopes: A list of the Policy Assignment's excluded scopes. The list must contain Resource IDs (such as Subscriptions e.g. `/subscriptions/00000000-0000-0000-000000000000` or Resource Groups e.g.`/subscriptions/00000000-0000-0000-000000000000/resourceGroups/myResourceGroup`).
        :param pulumi.Input[str] parameters: Parameters for the policy definition. This field is a JSON object that maps to the Parameters field from the Policy Definition. Changing this forces a new resource to be created.
        :param pulumi.Input[str] policy_definition_id: The ID of the Policy Definition to be applied at the specified Scope.
        :param pulumi.Input[str] scope: The Scope at which the Policy Assignment should be applied, which must be a Resource ID (such as Subscription e.g. `/subscriptions/00000000-0000-0000-000000000000` or a Resource Group e.g.`/subscriptions/00000000-0000-0000-000000000000/resourceGroups/myResourceGroup`). Changing this forces a new resource to be created.

        The **identity** object supports the following:

          * `principal_id` (`pulumi.Input[str]`) - The Principal ID of this Policy Assignment if `type` is `SystemAssigned`.
          * `tenant_id` (`pulumi.Input[str]`) - The Tenant ID of this Policy Assignment if `type` is `SystemAssigned`.
          * `type` (`pulumi.Input[str]`) - The Managed Service Identity Type of this Policy Assignment. Possible values are `SystemAssigned` (where Azure will generate a Service Principal for you), or `None` (no use of a Managed Service Identity).
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["description"] = description
        __props__["display_name"] = display_name
        __props__["enforcement_mode"] = enforcement_mode
        __props__["identity"] = identity
        __props__["location"] = location
        __props__["name"] = name
        __props__["not_scopes"] = not_scopes
        __props__["parameters"] = parameters
        __props__["policy_definition_id"] = policy_definition_id
        __props__["scope"] = scope
        return Assignment(resource_name, opts=opts, __props__=__props__)

    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop
