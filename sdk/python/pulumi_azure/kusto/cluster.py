# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables


class Cluster(pulumi.CustomResource):
    data_ingestion_uri: pulumi.Output[str]
    """
    The Kusto Cluster URI to be used for data ingestion.
    """
    enable_disk_encryption: pulumi.Output[bool]
    """
    Specifies if the cluster's disks are encrypted.
    """
    enable_purge: pulumi.Output[bool]
    """
    Specifies if the purge operations are enabled.
    """
    enable_streaming_ingest: pulumi.Output[bool]
    """
    Specifies if the streaming ingest is enabled.
    """
    identity: pulumi.Output[dict]
    """
    A identity block.

      * `identityIds` (`list`) - The list of user identities associated with the Kusto cluster.
      * `principal_id` (`str`) - Specifies the Principal ID of the System Assigned Managed Service Identity that is configured on this Kusto Cluster.
      * `tenant_id` (`str`) - Specifies the Tenant ID of the System Assigned Managed Service Identity that is configured on this Kusto Cluster.
      * `type` (`str`) - Specifies the type of Managed Service Identity that is configured on this Kusto Cluster. Possible values are: `SystemAssigned` (where Azure will generate a Service Principal for you).
    """
    location: pulumi.Output[str]
    """
    The location where the Kusto Cluster should be created. Changing this forces a new resource to be created.
    """
    name: pulumi.Output[str]
    """
    The name of the Kusto Cluster to create. Changing this forces a new resource to be created.
    """
    resource_group_name: pulumi.Output[str]
    """
    Specifies the Resource Group where the Kusto Cluster should exist. Changing this forces a new resource to be created.
    """
    sku: pulumi.Output[dict]
    """
    A `sku` block as defined below.

      * `capacity` (`float`) - Specifies the node count for the cluster. Boundaries depend on the sku name.
      * `name` (`str`) - The name of the SKU. Valid values are: `Dev(No SLA)_Standard_D11_v2`, `Dev(No SLA)_Standard_E2a_v4`, `Standard_D11_v2`, `Standard_D12_v2`, `Standard_D13_v2`, `Standard_D14_v2`, `Standard_DS13_v2+1TB_PS`, `Standard_DS13_v2+2TB_PS`, `Standard_DS14_v2+3TB_PS`, `Standard_DS14_v2+4TB_PS`, `Standard_E16as_v4+3TB_PS`, `Standard_E16as_v4+4TB_PS`, `Standard_E16a_v4`, `Standard_E2a_v4`, `Standard_E4a_v4`, `Standard_E8as_v4+1TB_PS`, `Standard_E8as_v4+2TB_PS`, `Standard_E8a_v4`, `Standard_L16s`, `Standard_L4s` and `Standard_L8s`
    """
    tags: pulumi.Output[dict]
    """
    A mapping of tags to assign to the resource.
    """
    uri: pulumi.Output[str]
    """
    The FQDN of the Azure Kusto Cluster.
    """
    virtual_network_configuration: pulumi.Output[dict]
    """
    A `virtual_network_configuration` block as defined below.

      * `dataManagementPublicIpId` (`str`) - Data management's service public IP address resource id.
      * `enginePublicIpId` (`str`) - Engine service's public IP address resource id.
      * `subnet_id` (`str`) - The subnet resource id.
    """
    zones: pulumi.Output[list]
    """
    A list of Availability Zones in which the cluster instances should be created in. Changing this forces a new resource to be created.
    """
    def __init__(__self__, resource_name, opts=None, enable_disk_encryption=None, enable_purge=None, enable_streaming_ingest=None, identity=None, location=None, name=None, resource_group_name=None, sku=None, tags=None, virtual_network_configuration=None, zones=None, __props__=None, __name__=None, __opts__=None):
        """
        Manages a Kusto (also known as Azure Data Explorer) Cluster

        ## Example Usage

        ```python
        import pulumi
        import pulumi_azure as azure

        rg = azure.core.ResourceGroup("rg", location="East US")
        example = azure.kusto.Cluster("example",
            location=rg.location,
            resource_group_name=rg.name,
            sku={
                "name": "Standard_D13_v2",
                "capacity": 2,
            },
            tags={
                "Environment": "Production",
            })
        ```

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[bool] enable_disk_encryption: Specifies if the cluster's disks are encrypted.
        :param pulumi.Input[bool] enable_purge: Specifies if the purge operations are enabled.
        :param pulumi.Input[bool] enable_streaming_ingest: Specifies if the streaming ingest is enabled.
        :param pulumi.Input[dict] identity: A identity block.
        :param pulumi.Input[str] location: The location where the Kusto Cluster should be created. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: The name of the Kusto Cluster to create. Changing this forces a new resource to be created.
        :param pulumi.Input[str] resource_group_name: Specifies the Resource Group where the Kusto Cluster should exist. Changing this forces a new resource to be created.
        :param pulumi.Input[dict] sku: A `sku` block as defined below.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.
        :param pulumi.Input[dict] virtual_network_configuration: A `virtual_network_configuration` block as defined below.
        :param pulumi.Input[list] zones: A list of Availability Zones in which the cluster instances should be created in. Changing this forces a new resource to be created.

        The **identity** object supports the following:

          * `identityIds` (`pulumi.Input[list]`) - The list of user identities associated with the Kusto cluster.
          * `principal_id` (`pulumi.Input[str]`) - Specifies the Principal ID of the System Assigned Managed Service Identity that is configured on this Kusto Cluster.
          * `tenant_id` (`pulumi.Input[str]`) - Specifies the Tenant ID of the System Assigned Managed Service Identity that is configured on this Kusto Cluster.
          * `type` (`pulumi.Input[str]`) - Specifies the type of Managed Service Identity that is configured on this Kusto Cluster. Possible values are: `SystemAssigned` (where Azure will generate a Service Principal for you).

        The **sku** object supports the following:

          * `capacity` (`pulumi.Input[float]`) - Specifies the node count for the cluster. Boundaries depend on the sku name.
          * `name` (`pulumi.Input[str]`) - The name of the SKU. Valid values are: `Dev(No SLA)_Standard_D11_v2`, `Dev(No SLA)_Standard_E2a_v4`, `Standard_D11_v2`, `Standard_D12_v2`, `Standard_D13_v2`, `Standard_D14_v2`, `Standard_DS13_v2+1TB_PS`, `Standard_DS13_v2+2TB_PS`, `Standard_DS14_v2+3TB_PS`, `Standard_DS14_v2+4TB_PS`, `Standard_E16as_v4+3TB_PS`, `Standard_E16as_v4+4TB_PS`, `Standard_E16a_v4`, `Standard_E2a_v4`, `Standard_E4a_v4`, `Standard_E8as_v4+1TB_PS`, `Standard_E8as_v4+2TB_PS`, `Standard_E8a_v4`, `Standard_L16s`, `Standard_L4s` and `Standard_L8s`

        The **virtual_network_configuration** object supports the following:

          * `dataManagementPublicIpId` (`pulumi.Input[str]`) - Data management's service public IP address resource id.
          * `enginePublicIpId` (`pulumi.Input[str]`) - Engine service's public IP address resource id.
          * `subnet_id` (`pulumi.Input[str]`) - The subnet resource id.
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

            __props__['enable_disk_encryption'] = enable_disk_encryption
            __props__['enable_purge'] = enable_purge
            __props__['enable_streaming_ingest'] = enable_streaming_ingest
            __props__['identity'] = identity
            __props__['location'] = location
            __props__['name'] = name
            if resource_group_name is None:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            if sku is None:
                raise TypeError("Missing required property 'sku'")
            __props__['sku'] = sku
            __props__['tags'] = tags
            __props__['virtual_network_configuration'] = virtual_network_configuration
            __props__['zones'] = zones
            __props__['data_ingestion_uri'] = None
            __props__['uri'] = None
        super(Cluster, __self__).__init__(
            'azure:kusto/cluster:Cluster',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, data_ingestion_uri=None, enable_disk_encryption=None, enable_purge=None, enable_streaming_ingest=None, identity=None, location=None, name=None, resource_group_name=None, sku=None, tags=None, uri=None, virtual_network_configuration=None, zones=None):
        """
        Get an existing Cluster resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] data_ingestion_uri: The Kusto Cluster URI to be used for data ingestion.
        :param pulumi.Input[bool] enable_disk_encryption: Specifies if the cluster's disks are encrypted.
        :param pulumi.Input[bool] enable_purge: Specifies if the purge operations are enabled.
        :param pulumi.Input[bool] enable_streaming_ingest: Specifies if the streaming ingest is enabled.
        :param pulumi.Input[dict] identity: A identity block.
        :param pulumi.Input[str] location: The location where the Kusto Cluster should be created. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: The name of the Kusto Cluster to create. Changing this forces a new resource to be created.
        :param pulumi.Input[str] resource_group_name: Specifies the Resource Group where the Kusto Cluster should exist. Changing this forces a new resource to be created.
        :param pulumi.Input[dict] sku: A `sku` block as defined below.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.
        :param pulumi.Input[str] uri: The FQDN of the Azure Kusto Cluster.
        :param pulumi.Input[dict] virtual_network_configuration: A `virtual_network_configuration` block as defined below.
        :param pulumi.Input[list] zones: A list of Availability Zones in which the cluster instances should be created in. Changing this forces a new resource to be created.

        The **identity** object supports the following:

          * `identityIds` (`pulumi.Input[list]`) - The list of user identities associated with the Kusto cluster.
          * `principal_id` (`pulumi.Input[str]`) - Specifies the Principal ID of the System Assigned Managed Service Identity that is configured on this Kusto Cluster.
          * `tenant_id` (`pulumi.Input[str]`) - Specifies the Tenant ID of the System Assigned Managed Service Identity that is configured on this Kusto Cluster.
          * `type` (`pulumi.Input[str]`) - Specifies the type of Managed Service Identity that is configured on this Kusto Cluster. Possible values are: `SystemAssigned` (where Azure will generate a Service Principal for you).

        The **sku** object supports the following:

          * `capacity` (`pulumi.Input[float]`) - Specifies the node count for the cluster. Boundaries depend on the sku name.
          * `name` (`pulumi.Input[str]`) - The name of the SKU. Valid values are: `Dev(No SLA)_Standard_D11_v2`, `Dev(No SLA)_Standard_E2a_v4`, `Standard_D11_v2`, `Standard_D12_v2`, `Standard_D13_v2`, `Standard_D14_v2`, `Standard_DS13_v2+1TB_PS`, `Standard_DS13_v2+2TB_PS`, `Standard_DS14_v2+3TB_PS`, `Standard_DS14_v2+4TB_PS`, `Standard_E16as_v4+3TB_PS`, `Standard_E16as_v4+4TB_PS`, `Standard_E16a_v4`, `Standard_E2a_v4`, `Standard_E4a_v4`, `Standard_E8as_v4+1TB_PS`, `Standard_E8as_v4+2TB_PS`, `Standard_E8a_v4`, `Standard_L16s`, `Standard_L4s` and `Standard_L8s`

        The **virtual_network_configuration** object supports the following:

          * `dataManagementPublicIpId` (`pulumi.Input[str]`) - Data management's service public IP address resource id.
          * `enginePublicIpId` (`pulumi.Input[str]`) - Engine service's public IP address resource id.
          * `subnet_id` (`pulumi.Input[str]`) - The subnet resource id.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["data_ingestion_uri"] = data_ingestion_uri
        __props__["enable_disk_encryption"] = enable_disk_encryption
        __props__["enable_purge"] = enable_purge
        __props__["enable_streaming_ingest"] = enable_streaming_ingest
        __props__["identity"] = identity
        __props__["location"] = location
        __props__["name"] = name
        __props__["resource_group_name"] = resource_group_name
        __props__["sku"] = sku
        __props__["tags"] = tags
        __props__["uri"] = uri
        __props__["virtual_network_configuration"] = virtual_network_configuration
        __props__["zones"] = zones
        return Cluster(resource_name, opts=opts, __props__=__props__)

    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop
