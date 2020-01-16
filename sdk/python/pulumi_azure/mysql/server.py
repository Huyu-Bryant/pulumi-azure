# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class Server(pulumi.CustomResource):
    administrator_login: pulumi.Output[str]
    """
    The Administrator Login for the MySQL Server. Changing this forces a new resource to be created.
    """
    administrator_login_password: pulumi.Output[str]
    """
    The Password associated with the `administrator_login` for the MySQL Server.
    """
    fqdn: pulumi.Output[str]
    """
    The FQDN of the MySQL Server.
    """
    location: pulumi.Output[str]
    """
    Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
    """
    name: pulumi.Output[str]
    """
    Specifies the name of the MySQL Server. Changing this forces a new resource to be created. This needs to be globally unique within Azure.
    """
    resource_group_name: pulumi.Output[str]
    """
    The name of the resource group in which to create the MySQL Server. Changing this forces a new resource to be created.
    """
    sku: pulumi.Output[dict]
    sku_name: pulumi.Output[str]
    """
    Specifies the SKU Name for this MySQL Server. The name of the SKU, follows the `tier` + `family` + `cores` pattern (e.g. `B_Gen4_1`, `GP_Gen5_8`). For more information see the [product documentation](https://docs.microsoft.com/en-us/rest/api/mysql/servers/create#sku).
    """
    ssl_enforcement: pulumi.Output[str]
    """
    Specifies if SSL should be enforced on connections. Possible values are `Enabled` and `Disabled`.
    """
    storage_profile: pulumi.Output[dict]
    """
    A `storage_profile` block as defined below.
    
      * `autoGrow` (`str`) - Defines whether autogrow is enabled or disabled for the storage. Valid values are `Enabled` or `Disabled`.
      * `backupRetentionDays` (`float`) - Backup retention days for the server, supported values are between `7` and `35` days.
      * `geoRedundantBackup` (`str`) - Enable Geo-redundant or not for server backup. Valid values for this property are `Enabled` or `Disabled`, not supported for the `basic` tier.
      * `storageMb` (`float`) - Max storage allowed for a server. Possible values are between `5120` MB(5GB) and `1048576` MB(1TB) for the Basic SKU and between `5120` MB(5GB) and `4194304` MB(4TB) for General Purpose/Memory Optimized SKUs. For more information see the [product documentation](https://docs.microsoft.com/en-us/rest/api/mysql/servers/create#StorageProfile).
    """
    tags: pulumi.Output[dict]
    """
    A mapping of tags to assign to the resource.
    """
    version: pulumi.Output[str]
    """
    Specifies the version of MySQL to use. Valid values are `5.6`, `5.7`, and `8.0`. Changing this forces a new resource to be created.
    """
    def __init__(__self__, resource_name, opts=None, administrator_login=None, administrator_login_password=None, location=None, name=None, resource_group_name=None, sku=None, sku_name=None, ssl_enforcement=None, storage_profile=None, tags=None, version=None, __props__=None, __name__=None, __opts__=None):
        """
        Manages a MySQL Server.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] administrator_login: The Administrator Login for the MySQL Server. Changing this forces a new resource to be created.
        :param pulumi.Input[str] administrator_login_password: The Password associated with the `administrator_login` for the MySQL Server.
        :param pulumi.Input[str] location: Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: Specifies the name of the MySQL Server. Changing this forces a new resource to be created. This needs to be globally unique within Azure.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which to create the MySQL Server. Changing this forces a new resource to be created.
        :param pulumi.Input[str] sku_name: Specifies the SKU Name for this MySQL Server. The name of the SKU, follows the `tier` + `family` + `cores` pattern (e.g. `B_Gen4_1`, `GP_Gen5_8`). For more information see the [product documentation](https://docs.microsoft.com/en-us/rest/api/mysql/servers/create#sku).
        :param pulumi.Input[str] ssl_enforcement: Specifies if SSL should be enforced on connections. Possible values are `Enabled` and `Disabled`.
        :param pulumi.Input[dict] storage_profile: A `storage_profile` block as defined below.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.
        :param pulumi.Input[str] version: Specifies the version of MySQL to use. Valid values are `5.6`, `5.7`, and `8.0`. Changing this forces a new resource to be created.
        
        The **sku** object supports the following:
        
          * `capacity` (`pulumi.Input[float]`)
          * `family` (`pulumi.Input[str]`)
          * `name` (`pulumi.Input[str]`) - Specifies the name of the MySQL Server. Changing this forces a new resource to be created. This needs to be globally unique within Azure.
          * `tier` (`pulumi.Input[str]`)
        
        The **storage_profile** object supports the following:
        
          * `autoGrow` (`pulumi.Input[str]`) - Defines whether autogrow is enabled or disabled for the storage. Valid values are `Enabled` or `Disabled`.
          * `backupRetentionDays` (`pulumi.Input[float]`) - Backup retention days for the server, supported values are between `7` and `35` days.
          * `geoRedundantBackup` (`pulumi.Input[str]`) - Enable Geo-redundant or not for server backup. Valid values for this property are `Enabled` or `Disabled`, not supported for the `basic` tier.
          * `storageMb` (`pulumi.Input[float]`) - Max storage allowed for a server. Possible values are between `5120` MB(5GB) and `1048576` MB(1TB) for the Basic SKU and between `5120` MB(5GB) and `4194304` MB(4TB) for General Purpose/Memory Optimized SKUs. For more information see the [product documentation](https://docs.microsoft.com/en-us/rest/api/mysql/servers/create#StorageProfile).

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/mysql_server.html.markdown.
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

            if administrator_login is None:
                raise TypeError("Missing required property 'administrator_login'")
            __props__['administrator_login'] = administrator_login
            if administrator_login_password is None:
                raise TypeError("Missing required property 'administrator_login_password'")
            __props__['administrator_login_password'] = administrator_login_password
            __props__['location'] = location
            __props__['name'] = name
            if resource_group_name is None:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            __props__['sku'] = sku
            __props__['sku_name'] = sku_name
            if ssl_enforcement is None:
                raise TypeError("Missing required property 'ssl_enforcement'")
            __props__['ssl_enforcement'] = ssl_enforcement
            if storage_profile is None:
                raise TypeError("Missing required property 'storage_profile'")
            __props__['storage_profile'] = storage_profile
            __props__['tags'] = tags
            if version is None:
                raise TypeError("Missing required property 'version'")
            __props__['version'] = version
            __props__['fqdn'] = None
        super(Server, __self__).__init__(
            'azure:mysql/server:Server',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, administrator_login=None, administrator_login_password=None, fqdn=None, location=None, name=None, resource_group_name=None, sku=None, sku_name=None, ssl_enforcement=None, storage_profile=None, tags=None, version=None):
        """
        Get an existing Server resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.
        
        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] administrator_login: The Administrator Login for the MySQL Server. Changing this forces a new resource to be created.
        :param pulumi.Input[str] administrator_login_password: The Password associated with the `administrator_login` for the MySQL Server.
        :param pulumi.Input[str] fqdn: The FQDN of the MySQL Server.
        :param pulumi.Input[str] location: Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: Specifies the name of the MySQL Server. Changing this forces a new resource to be created. This needs to be globally unique within Azure.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which to create the MySQL Server. Changing this forces a new resource to be created.
        :param pulumi.Input[str] sku_name: Specifies the SKU Name for this MySQL Server. The name of the SKU, follows the `tier` + `family` + `cores` pattern (e.g. `B_Gen4_1`, `GP_Gen5_8`). For more information see the [product documentation](https://docs.microsoft.com/en-us/rest/api/mysql/servers/create#sku).
        :param pulumi.Input[str] ssl_enforcement: Specifies if SSL should be enforced on connections. Possible values are `Enabled` and `Disabled`.
        :param pulumi.Input[dict] storage_profile: A `storage_profile` block as defined below.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.
        :param pulumi.Input[str] version: Specifies the version of MySQL to use. Valid values are `5.6`, `5.7`, and `8.0`. Changing this forces a new resource to be created.
        
        The **sku** object supports the following:
        
          * `capacity` (`pulumi.Input[float]`)
          * `family` (`pulumi.Input[str]`)
          * `name` (`pulumi.Input[str]`) - Specifies the name of the MySQL Server. Changing this forces a new resource to be created. This needs to be globally unique within Azure.
          * `tier` (`pulumi.Input[str]`)
        
        The **storage_profile** object supports the following:
        
          * `autoGrow` (`pulumi.Input[str]`) - Defines whether autogrow is enabled or disabled for the storage. Valid values are `Enabled` or `Disabled`.
          * `backupRetentionDays` (`pulumi.Input[float]`) - Backup retention days for the server, supported values are between `7` and `35` days.
          * `geoRedundantBackup` (`pulumi.Input[str]`) - Enable Geo-redundant or not for server backup. Valid values for this property are `Enabled` or `Disabled`, not supported for the `basic` tier.
          * `storageMb` (`pulumi.Input[float]`) - Max storage allowed for a server. Possible values are between `5120` MB(5GB) and `1048576` MB(1TB) for the Basic SKU and between `5120` MB(5GB) and `4194304` MB(4TB) for General Purpose/Memory Optimized SKUs. For more information see the [product documentation](https://docs.microsoft.com/en-us/rest/api/mysql/servers/create#StorageProfile).

        > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/mysql_server.html.markdown.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()
        __props__["administrator_login"] = administrator_login
        __props__["administrator_login_password"] = administrator_login_password
        __props__["fqdn"] = fqdn
        __props__["location"] = location
        __props__["name"] = name
        __props__["resource_group_name"] = resource_group_name
        __props__["sku"] = sku
        __props__["sku_name"] = sku_name
        __props__["ssl_enforcement"] = ssl_enforcement
        __props__["storage_profile"] = storage_profile
        __props__["tags"] = tags
        __props__["version"] = version
        return Server(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

