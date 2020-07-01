# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables


class Definition(pulumi.CustomResource):
    authorizations: pulumi.Output[list]
    """
    One or more `authorization` block defined below.

      * `role_definition_id` (`str`) - Specifies a role definition identifier for the provider. This role will define all the permissions that the provider must have on the managed application's container resource group. This role definition cannot have permission to delete the resource group.
      * `service_principal_id` (`str`) - Specifies a service principal identifier for the provider. This is the identity that the provider will use to call ARM to manage the managed application resources.
    """
    create_ui_definition: pulumi.Output[str]
    """
    Specifies the `createUiDefinition` json for the backing template with `Microsoft.Solutions/applications` resource.
    """
    description: pulumi.Output[str]
    """
    Specifies the managed application definition description.
    """
    display_name: pulumi.Output[str]
    """
    Specifies the managed application definition display name.
    """
    location: pulumi.Output[str]
    """
    Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
    """
    lock_level: pulumi.Output[str]
    """
    Specifies the managed application lock level. Valid values include `CanNotDelete`, `None`, `ReadOnly`. Changing this forces a new resource to be created.
    """
    main_template: pulumi.Output[str]
    """
    Specifies the inline main template json which has resources to be provisioned.
    """
    name: pulumi.Output[str]
    """
    Specifies the name of the Managed Application Definition. Changing this forces a new resource to be created.
    """
    package_enabled: pulumi.Output[bool]
    """
    Is the package enabled? Defaults to `true`.
    """
    package_file_uri: pulumi.Output[str]
    """
    Specifies the managed application definition package file Uri.
    """
    resource_group_name: pulumi.Output[str]
    """
    The name of the Resource Group where the Managed Application Definition should exist. Changing this forces a new resource to be created.
    """
    tags: pulumi.Output[dict]
    """
    A mapping of tags to assign to the resource.
    """
    def __init__(__self__, resource_name, opts=None, authorizations=None, create_ui_definition=None, description=None, display_name=None, location=None, lock_level=None, main_template=None, name=None, package_enabled=None, package_file_uri=None, resource_group_name=None, tags=None, __props__=None, __name__=None, __opts__=None):
        """
        Manages a Managed Application Definition.

        ## Example Usage

        ```python
        import pulumi
        import pulumi_azure as azure

        current = azure.core.get_client_config()
        example_resource_group = azure.core.ResourceGroup("exampleResourceGroup", location="West Europe")
        example_definition = azure.managedapplication.Definition("exampleDefinition",
            location=example_resource_group.location,
            resource_group_name=example_resource_group.name,
            lock_level="ReadOnly",
            package_file_uri="https://github.com/Azure/azure-managedapp-samples/raw/master/Managed Application Sample Packages/201-managed-storage-account/managedstorage.zip",
            display_name="TestManagedApplicationDefinition",
            description="Test Managed Application Definition",
            authorizations=[{
                "service_principal_id": current.object_id,
                "role_definition_id": "a094b430-dad3-424d-ae58-13f72fd72591",
            }])
        ```

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[list] authorizations: One or more `authorization` block defined below.
        :param pulumi.Input[str] create_ui_definition: Specifies the `createUiDefinition` json for the backing template with `Microsoft.Solutions/applications` resource.
        :param pulumi.Input[str] description: Specifies the managed application definition description.
        :param pulumi.Input[str] display_name: Specifies the managed application definition display name.
        :param pulumi.Input[str] location: Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        :param pulumi.Input[str] lock_level: Specifies the managed application lock level. Valid values include `CanNotDelete`, `None`, `ReadOnly`. Changing this forces a new resource to be created.
        :param pulumi.Input[str] main_template: Specifies the inline main template json which has resources to be provisioned.
        :param pulumi.Input[str] name: Specifies the name of the Managed Application Definition. Changing this forces a new resource to be created.
        :param pulumi.Input[bool] package_enabled: Is the package enabled? Defaults to `true`.
        :param pulumi.Input[str] package_file_uri: Specifies the managed application definition package file Uri.
        :param pulumi.Input[str] resource_group_name: The name of the Resource Group where the Managed Application Definition should exist. Changing this forces a new resource to be created.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.

        The **authorizations** object supports the following:

          * `role_definition_id` (`pulumi.Input[str]`) - Specifies a role definition identifier for the provider. This role will define all the permissions that the provider must have on the managed application's container resource group. This role definition cannot have permission to delete the resource group.
          * `service_principal_id` (`pulumi.Input[str]`) - Specifies a service principal identifier for the provider. This is the identity that the provider will use to call ARM to manage the managed application resources.
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

            __props__['authorizations'] = authorizations
            __props__['create_ui_definition'] = create_ui_definition
            __props__['description'] = description
            if display_name is None:
                raise TypeError("Missing required property 'display_name'")
            __props__['display_name'] = display_name
            __props__['location'] = location
            if lock_level is None:
                raise TypeError("Missing required property 'lock_level'")
            __props__['lock_level'] = lock_level
            __props__['main_template'] = main_template
            __props__['name'] = name
            __props__['package_enabled'] = package_enabled
            __props__['package_file_uri'] = package_file_uri
            if resource_group_name is None:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            __props__['tags'] = tags
        super(Definition, __self__).__init__(
            'azure:managedapplication/definition:Definition',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, authorizations=None, create_ui_definition=None, description=None, display_name=None, location=None, lock_level=None, main_template=None, name=None, package_enabled=None, package_file_uri=None, resource_group_name=None, tags=None):
        """
        Get an existing Definition resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[list] authorizations: One or more `authorization` block defined below.
        :param pulumi.Input[str] create_ui_definition: Specifies the `createUiDefinition` json for the backing template with `Microsoft.Solutions/applications` resource.
        :param pulumi.Input[str] description: Specifies the managed application definition description.
        :param pulumi.Input[str] display_name: Specifies the managed application definition display name.
        :param pulumi.Input[str] location: Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        :param pulumi.Input[str] lock_level: Specifies the managed application lock level. Valid values include `CanNotDelete`, `None`, `ReadOnly`. Changing this forces a new resource to be created.
        :param pulumi.Input[str] main_template: Specifies the inline main template json which has resources to be provisioned.
        :param pulumi.Input[str] name: Specifies the name of the Managed Application Definition. Changing this forces a new resource to be created.
        :param pulumi.Input[bool] package_enabled: Is the package enabled? Defaults to `true`.
        :param pulumi.Input[str] package_file_uri: Specifies the managed application definition package file Uri.
        :param pulumi.Input[str] resource_group_name: The name of the Resource Group where the Managed Application Definition should exist. Changing this forces a new resource to be created.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.

        The **authorizations** object supports the following:

          * `role_definition_id` (`pulumi.Input[str]`) - Specifies a role definition identifier for the provider. This role will define all the permissions that the provider must have on the managed application's container resource group. This role definition cannot have permission to delete the resource group.
          * `service_principal_id` (`pulumi.Input[str]`) - Specifies a service principal identifier for the provider. This is the identity that the provider will use to call ARM to manage the managed application resources.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["authorizations"] = authorizations
        __props__["create_ui_definition"] = create_ui_definition
        __props__["description"] = description
        __props__["display_name"] = display_name
        __props__["location"] = location
        __props__["lock_level"] = lock_level
        __props__["main_template"] = main_template
        __props__["name"] = name
        __props__["package_enabled"] = package_enabled
        __props__["package_file_uri"] = package_file_uri
        __props__["resource_group_name"] = resource_group_name
        __props__["tags"] = tags
        return Definition(resource_name, opts=opts, __props__=__props__)

    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop
