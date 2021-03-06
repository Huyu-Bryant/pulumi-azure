# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables


class VirtualNetworkGateway(pulumi.CustomResource):
    active_active: pulumi.Output[bool]
    """
    If `true`, an active-active Virtual Network Gateway
    will be created. An active-active gateway requires a `HighPerformance` or an
    `UltraPerformance` sku. If `false`, an active-standby gateway will be created.
    Defaults to `false`.
    """
    bgp_settings: pulumi.Output[dict]
    default_local_network_gateway_id: pulumi.Output[str]
    """
    The ID of the local network gateway
    through which outbound Internet traffic from the virtual network in which the
    gateway is created will be routed (*forced tunnelling*). Refer to the
    [Azure documentation on forced tunnelling](https://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-forced-tunneling-rm).
    If not specified, forced tunnelling is disabled.
    """
    enable_bgp: pulumi.Output[bool]
    """
    If `true`, BGP (Border Gateway Protocol) will be enabled
    for this Virtual Network Gateway. Defaults to `false`.
    """
    generation: pulumi.Output[str]
    """
    The Generation of the Virtual Network gateway. Possible values include `Generation1`, `Generation2` or `None`.
    """
    ip_configurations: pulumi.Output[list]
    """
    One or two `ip_configuration` blocks documented below.
    An active-standby gateway requires exactly one `ip_configuration` block whereas
    an active-active gateway requires exactly two `ip_configuration` blocks.

      * `name` (`str`) - A user-defined name of the revoked certificate.
      * `privateIpAddressAllocation` (`str`) - Defines how the private IP address
        of the gateways virtual interface is assigned. Valid options are `Static` or
        `Dynamic`. Defaults to `Dynamic`.
      * `public_ip_address_id` (`str`) - The ID of the public ip address to associate
        with the Virtual Network Gateway.
      * `subnet_id` (`str`) - The ID of the gateway subnet of a virtual network in
        which the virtual network gateway will be created. It is mandatory that
        the associated subnet is named `GatewaySubnet`. Therefore, each virtual
        network can contain at most a single Virtual Network Gateway.
    """
    location: pulumi.Output[str]
    """
    The location/region where the Virtual Network Gateway is
    located. Changing the location/region forces a new resource to be created.
    """
    name: pulumi.Output[str]
    """
    A user-defined name of the revoked certificate.
    """
    resource_group_name: pulumi.Output[str]
    """
    The name of the resource group in which to
    create the Virtual Network Gateway. Changing the resource group name forces
    a new resource to be created.
    """
    sku: pulumi.Output[str]
    """
    Configuration of the size and capacity of the virtual network
    gateway. Valid options are `Basic`, `Standard`, `HighPerformance`, `UltraPerformance`,
    `ErGw1AZ`, `ErGw2AZ`, `ErGw3AZ`, `VpnGw1`, `VpnGw2`, `VpnGw3`, `VpnGw4`,`VpnGw5`, `VpnGw1AZ`,
    `VpnGw2AZ`, `VpnGw3AZ`,`VpnGw4AZ` and `VpnGw5AZ` and depend on the `type`, `vpn_type` and
    `generation` arguments.
    A `PolicyBased` gateway only supports the `Basic` sku. Further, the `UltraPerformance`
    sku is only supported by an `ExpressRoute` gateway.
    """
    tags: pulumi.Output[dict]
    """
    A mapping of tags to assign to the resource.
    """
    type: pulumi.Output[str]
    """
    The type of the Virtual Network Gateway. Valid options are
    `Vpn` or `ExpressRoute`. Changing the type forces a new resource to be created.
    """
    vpn_client_configuration: pulumi.Output[dict]
    """
    A `vpn_client_configuration` block which
    is documented below. In this block the Virtual Network Gateway can be configured
    to accept IPSec point-to-site connections.

      * `address_spaces` (`list`) - The address space out of which ip addresses for
        vpn clients will be taken. You can provide more than one address space, e.g.
        in CIDR notation.
      * `radiusServerAddress` (`str`) - The address of the Radius server.
        This setting is incompatible with the use of `root_certificate` and `revoked_certificate`.
      * `radiusServerSecret` (`str`) - The secret used by the Radius server.
        This setting is incompatible with the use of `root_certificate` and `revoked_certificate`.
      * `revokedCertificates` (`list`) - One or more `revoked_certificate` blocks which
        are defined below.
        This setting is incompatible with the use of `radius_server_address` and `radius_server_secret`.
        * `name` (`str`) - A user-defined name of the revoked certificate.
        * `thumbprint` (`str`)

      * `rootCertificates` (`list`) - One or more `root_certificate` blocks which are
        defined below. These root certificates are used to sign the client certificate
        used by the VPN clients to connect to the gateway.
        This setting is incompatible with the use of `radius_server_address` and `radius_server_secret`.
        * `name` (`str`) - A user-defined name of the revoked certificate.
        * `publicCertData` (`str`) - The SHA1 thumbprint of the certificate to be
          revoked.

      * `vpnClientProtocols` (`list`) - List of the protocols supported by the vpn client.
        The supported values are `SSTP`, `IkeV2` and `OpenVPN`.
    """
    vpn_type: pulumi.Output[str]
    """
    The routing type of the Virtual Network Gateway. Valid
    options are `RouteBased` or `PolicyBased`. Defaults to `RouteBased`.
    """
    def __init__(__self__, resource_name, opts=None, active_active=None, bgp_settings=None, default_local_network_gateway_id=None, enable_bgp=None, generation=None, ip_configurations=None, location=None, name=None, resource_group_name=None, sku=None, tags=None, type=None, vpn_client_configuration=None, vpn_type=None, __props__=None, __name__=None, __opts__=None):
        """
        Manages a Virtual Network Gateway to establish secure, cross-premises connectivity.

        > **Note:** Please be aware that provisioning a Virtual Network Gateway takes a long time (between 30 minutes and 1 hour)

        ## Example Usage

        ```python
        import pulumi
        import pulumi_azure as azure

        example_resource_group = azure.core.ResourceGroup("exampleResourceGroup", location="West US")
        example_virtual_network = azure.network.VirtualNetwork("exampleVirtualNetwork",
            location=example_resource_group.location,
            resource_group_name=example_resource_group.name,
            address_spaces=["10.0.0.0/16"])
        example_subnet = azure.network.Subnet("exampleSubnet",
            resource_group_name=example_resource_group.name,
            virtual_network_name=example_virtual_network.name,
            address_prefix="10.0.1.0/24")
        example_public_ip = azure.network.PublicIp("examplePublicIp",
            location=example_resource_group.location,
            resource_group_name=example_resource_group.name,
            allocation_method="Dynamic")
        example_virtual_network_gateway = azure.network.VirtualNetworkGateway("exampleVirtualNetworkGateway",
            location=example_resource_group.location,
            resource_group_name=example_resource_group.name,
            type="Vpn",
            vpn_type="RouteBased",
            active_active=False,
            enable_bgp=False,
            sku="Basic",
            ip_configurations=[{
                "name": "vnetGatewayConfig",
                "public_ip_address_id": example_public_ip.id,
                "privateIpAddressAllocation": "Dynamic",
                "subnet_id": example_subnet.id,
            }],
            vpn_client_configuration={
                "address_spaces": ["10.2.0.0/24"],
                "rootCertificates": [{
                    "name": "DigiCert-Federated-ID-Root-CA",
                    "publicCertData": \"\"\"MIIDuzCCAqOgAwIBAgIQCHTZWCM+IlfFIRXIvyKSrjANBgkqhkiG9w0BAQsFADBn
        MQswCQYDVQQGEwJVUzEVMBMGA1UEChMMRGlnaUNlcnQgSW5jMRkwFwYDVQQLExB3
        d3cuZGlnaWNlcnQuY29tMSYwJAYDVQQDEx1EaWdpQ2VydCBGZWRlcmF0ZWQgSUQg
        Um9vdCBDQTAeFw0xMzAxMTUxMjAwMDBaFw0zMzAxMTUxMjAwMDBaMGcxCzAJBgNV
        BAYTAlVTMRUwEwYDVQQKEwxEaWdpQ2VydCBJbmMxGTAXBgNVBAsTEHd3dy5kaWdp
        Y2VydC5jb20xJjAkBgNVBAMTHURpZ2lDZXJ0IEZlZGVyYXRlZCBJRCBSb290IENB
        MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvAEB4pcCqnNNOWE6Ur5j
        QPUH+1y1F9KdHTRSza6k5iDlXq1kGS1qAkuKtw9JsiNRrjltmFnzMZRBbX8Tlfl8
        zAhBmb6dDduDGED01kBsTkgywYPxXVTKec0WxYEEF0oMn4wSYNl0lt2eJAKHXjNf
        GTwiibdP8CUR2ghSM2sUTI8Nt1Omfc4SMHhGhYD64uJMbX98THQ/4LMGuYegou+d
        GTiahfHtjn7AboSEknwAMJHCh5RlYZZ6B1O4QbKJ+34Q0eKgnI3X6Vc9u0zf6DH8
        Dk+4zQDYRRTqTnVO3VT8jzqDlCRuNtq6YvryOWN74/dq8LQhUnXHvFyrsdMaE1X2
        DwIDAQABo2MwYTAPBgNVHRMBAf8EBTADAQH/MA4GA1UdDwEB/wQEAwIBhjAdBgNV
        HQ4EFgQUGRdkFnbGt1EWjKwbUne+5OaZvRYwHwYDVR0jBBgwFoAUGRdkFnbGt1EW
        jKwbUne+5OaZvRYwDQYJKoZIhvcNAQELBQADggEBAHcqsHkrjpESqfuVTRiptJfP
        9JbdtWqRTmOf6uJi2c8YVqI6XlKXsD8C1dUUaaHKLUJzvKiazibVuBwMIT84AyqR
        QELn3e0BtgEymEygMU569b01ZPxoFSnNXc7qDZBDef8WfqAV/sxkTi8L9BkmFYfL
        uGLOhRJOFprPdoDIUBB+tmCl3oDcBy3vnUeOEioz8zAkprcb3GHwHAK+vHmmfgcn
        WsfMLH4JCLa/tRYL+Rw/N3ybCkDp00s0WUZ+AoDywSl0Q/ZEnNY0MsFiw6LyIdbq
        M/s/1JRtO3bDSzD9TazRVzn2oBqzSa8VgIo5C1nOnoAKJTlsClJKvIhnRlaLQqk=
        \"\"\",
                }],
                "revokedCertificates": [{
                    "name": "Verizon-Global-Root-CA",
                    "thumbprint": "912198EEF23DCAC40939312FEE97DD560BAE49B1",
                }],
            })
        ```

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[bool] active_active: If `true`, an active-active Virtual Network Gateway
               will be created. An active-active gateway requires a `HighPerformance` or an
               `UltraPerformance` sku. If `false`, an active-standby gateway will be created.
               Defaults to `false`.
        :param pulumi.Input[str] default_local_network_gateway_id: The ID of the local network gateway
               through which outbound Internet traffic from the virtual network in which the
               gateway is created will be routed (*forced tunnelling*). Refer to the
               [Azure documentation on forced tunnelling](https://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-forced-tunneling-rm).
               If not specified, forced tunnelling is disabled.
        :param pulumi.Input[bool] enable_bgp: If `true`, BGP (Border Gateway Protocol) will be enabled
               for this Virtual Network Gateway. Defaults to `false`.
        :param pulumi.Input[str] generation: The Generation of the Virtual Network gateway. Possible values include `Generation1`, `Generation2` or `None`.
        :param pulumi.Input[list] ip_configurations: One or two `ip_configuration` blocks documented below.
               An active-standby gateway requires exactly one `ip_configuration` block whereas
               an active-active gateway requires exactly two `ip_configuration` blocks.
        :param pulumi.Input[str] location: The location/region where the Virtual Network Gateway is
               located. Changing the location/region forces a new resource to be created.
        :param pulumi.Input[str] name: A user-defined name of the revoked certificate.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which to
               create the Virtual Network Gateway. Changing the resource group name forces
               a new resource to be created.
        :param pulumi.Input[str] sku: Configuration of the size and capacity of the virtual network
               gateway. Valid options are `Basic`, `Standard`, `HighPerformance`, `UltraPerformance`,
               `ErGw1AZ`, `ErGw2AZ`, `ErGw3AZ`, `VpnGw1`, `VpnGw2`, `VpnGw3`, `VpnGw4`,`VpnGw5`, `VpnGw1AZ`,
               `VpnGw2AZ`, `VpnGw3AZ`,`VpnGw4AZ` and `VpnGw5AZ` and depend on the `type`, `vpn_type` and
               `generation` arguments.
               A `PolicyBased` gateway only supports the `Basic` sku. Further, the `UltraPerformance`
               sku is only supported by an `ExpressRoute` gateway.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.
        :param pulumi.Input[str] type: The type of the Virtual Network Gateway. Valid options are
               `Vpn` or `ExpressRoute`. Changing the type forces a new resource to be created.
        :param pulumi.Input[dict] vpn_client_configuration: A `vpn_client_configuration` block which
               is documented below. In this block the Virtual Network Gateway can be configured
               to accept IPSec point-to-site connections.
        :param pulumi.Input[str] vpn_type: The routing type of the Virtual Network Gateway. Valid
               options are `RouteBased` or `PolicyBased`. Defaults to `RouteBased`.

        The **bgp_settings** object supports the following:

          * `asn` (`pulumi.Input[float]`) - The Autonomous System Number (ASN) to use as part of the BGP.
          * `peerWeight` (`pulumi.Input[float]`) - The weight added to routes which have been learned
            through BGP peering. Valid values can be between `0` and `100`.
          * `peeringAddress` (`pulumi.Input[str]`) - The BGP peer IP address of the virtual network
            gateway. This address is needed to configure the created gateway as a BGP Peer
            on the on-premises VPN devices. The IP address must be part of the subnet of
            the Virtual Network Gateway. Changing this forces a new resource to be created.

        The **ip_configurations** object supports the following:

          * `name` (`pulumi.Input[str]`) - A user-defined name of the revoked certificate.
          * `privateIpAddressAllocation` (`pulumi.Input[str]`) - Defines how the private IP address
            of the gateways virtual interface is assigned. Valid options are `Static` or
            `Dynamic`. Defaults to `Dynamic`.
          * `public_ip_address_id` (`pulumi.Input[str]`) - The ID of the public ip address to associate
            with the Virtual Network Gateway.
          * `subnet_id` (`pulumi.Input[str]`) - The ID of the gateway subnet of a virtual network in
            which the virtual network gateway will be created. It is mandatory that
            the associated subnet is named `GatewaySubnet`. Therefore, each virtual
            network can contain at most a single Virtual Network Gateway.

        The **vpn_client_configuration** object supports the following:

          * `address_spaces` (`pulumi.Input[list]`) - The address space out of which ip addresses for
            vpn clients will be taken. You can provide more than one address space, e.g.
            in CIDR notation.
          * `radiusServerAddress` (`pulumi.Input[str]`) - The address of the Radius server.
            This setting is incompatible with the use of `root_certificate` and `revoked_certificate`.
          * `radiusServerSecret` (`pulumi.Input[str]`) - The secret used by the Radius server.
            This setting is incompatible with the use of `root_certificate` and `revoked_certificate`.
          * `revokedCertificates` (`pulumi.Input[list]`) - One or more `revoked_certificate` blocks which
            are defined below.
            This setting is incompatible with the use of `radius_server_address` and `radius_server_secret`.
            * `name` (`pulumi.Input[str]`) - A user-defined name of the revoked certificate.
            * `thumbprint` (`pulumi.Input[str]`)

          * `rootCertificates` (`pulumi.Input[list]`) - One or more `root_certificate` blocks which are
            defined below. These root certificates are used to sign the client certificate
            used by the VPN clients to connect to the gateway.
            This setting is incompatible with the use of `radius_server_address` and `radius_server_secret`.
            * `name` (`pulumi.Input[str]`) - A user-defined name of the revoked certificate.
            * `publicCertData` (`pulumi.Input[str]`) - The SHA1 thumbprint of the certificate to be
              revoked.

          * `vpnClientProtocols` (`pulumi.Input[list]`) - List of the protocols supported by the vpn client.
            The supported values are `SSTP`, `IkeV2` and `OpenVPN`.
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

            __props__['active_active'] = active_active
            __props__['bgp_settings'] = bgp_settings
            __props__['default_local_network_gateway_id'] = default_local_network_gateway_id
            __props__['enable_bgp'] = enable_bgp
            __props__['generation'] = generation
            if ip_configurations is None:
                raise TypeError("Missing required property 'ip_configurations'")
            __props__['ip_configurations'] = ip_configurations
            __props__['location'] = location
            __props__['name'] = name
            if resource_group_name is None:
                raise TypeError("Missing required property 'resource_group_name'")
            __props__['resource_group_name'] = resource_group_name
            if sku is None:
                raise TypeError("Missing required property 'sku'")
            __props__['sku'] = sku
            __props__['tags'] = tags
            if type is None:
                raise TypeError("Missing required property 'type'")
            __props__['type'] = type
            __props__['vpn_client_configuration'] = vpn_client_configuration
            __props__['vpn_type'] = vpn_type
        super(VirtualNetworkGateway, __self__).__init__(
            'azure:network/virtualNetworkGateway:VirtualNetworkGateway',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, active_active=None, bgp_settings=None, default_local_network_gateway_id=None, enable_bgp=None, generation=None, ip_configurations=None, location=None, name=None, resource_group_name=None, sku=None, tags=None, type=None, vpn_client_configuration=None, vpn_type=None):
        """
        Get an existing VirtualNetworkGateway resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[bool] active_active: If `true`, an active-active Virtual Network Gateway
               will be created. An active-active gateway requires a `HighPerformance` or an
               `UltraPerformance` sku. If `false`, an active-standby gateway will be created.
               Defaults to `false`.
        :param pulumi.Input[str] default_local_network_gateway_id: The ID of the local network gateway
               through which outbound Internet traffic from the virtual network in which the
               gateway is created will be routed (*forced tunnelling*). Refer to the
               [Azure documentation on forced tunnelling](https://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-forced-tunneling-rm).
               If not specified, forced tunnelling is disabled.
        :param pulumi.Input[bool] enable_bgp: If `true`, BGP (Border Gateway Protocol) will be enabled
               for this Virtual Network Gateway. Defaults to `false`.
        :param pulumi.Input[str] generation: The Generation of the Virtual Network gateway. Possible values include `Generation1`, `Generation2` or `None`.
        :param pulumi.Input[list] ip_configurations: One or two `ip_configuration` blocks documented below.
               An active-standby gateway requires exactly one `ip_configuration` block whereas
               an active-active gateway requires exactly two `ip_configuration` blocks.
        :param pulumi.Input[str] location: The location/region where the Virtual Network Gateway is
               located. Changing the location/region forces a new resource to be created.
        :param pulumi.Input[str] name: A user-defined name of the revoked certificate.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which to
               create the Virtual Network Gateway. Changing the resource group name forces
               a new resource to be created.
        :param pulumi.Input[str] sku: Configuration of the size and capacity of the virtual network
               gateway. Valid options are `Basic`, `Standard`, `HighPerformance`, `UltraPerformance`,
               `ErGw1AZ`, `ErGw2AZ`, `ErGw3AZ`, `VpnGw1`, `VpnGw2`, `VpnGw3`, `VpnGw4`,`VpnGw5`, `VpnGw1AZ`,
               `VpnGw2AZ`, `VpnGw3AZ`,`VpnGw4AZ` and `VpnGw5AZ` and depend on the `type`, `vpn_type` and
               `generation` arguments.
               A `PolicyBased` gateway only supports the `Basic` sku. Further, the `UltraPerformance`
               sku is only supported by an `ExpressRoute` gateway.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.
        :param pulumi.Input[str] type: The type of the Virtual Network Gateway. Valid options are
               `Vpn` or `ExpressRoute`. Changing the type forces a new resource to be created.
        :param pulumi.Input[dict] vpn_client_configuration: A `vpn_client_configuration` block which
               is documented below. In this block the Virtual Network Gateway can be configured
               to accept IPSec point-to-site connections.
        :param pulumi.Input[str] vpn_type: The routing type of the Virtual Network Gateway. Valid
               options are `RouteBased` or `PolicyBased`. Defaults to `RouteBased`.

        The **bgp_settings** object supports the following:

          * `asn` (`pulumi.Input[float]`) - The Autonomous System Number (ASN) to use as part of the BGP.
          * `peerWeight` (`pulumi.Input[float]`) - The weight added to routes which have been learned
            through BGP peering. Valid values can be between `0` and `100`.
          * `peeringAddress` (`pulumi.Input[str]`) - The BGP peer IP address of the virtual network
            gateway. This address is needed to configure the created gateway as a BGP Peer
            on the on-premises VPN devices. The IP address must be part of the subnet of
            the Virtual Network Gateway. Changing this forces a new resource to be created.

        The **ip_configurations** object supports the following:

          * `name` (`pulumi.Input[str]`) - A user-defined name of the revoked certificate.
          * `privateIpAddressAllocation` (`pulumi.Input[str]`) - Defines how the private IP address
            of the gateways virtual interface is assigned. Valid options are `Static` or
            `Dynamic`. Defaults to `Dynamic`.
          * `public_ip_address_id` (`pulumi.Input[str]`) - The ID of the public ip address to associate
            with the Virtual Network Gateway.
          * `subnet_id` (`pulumi.Input[str]`) - The ID of the gateway subnet of a virtual network in
            which the virtual network gateway will be created. It is mandatory that
            the associated subnet is named `GatewaySubnet`. Therefore, each virtual
            network can contain at most a single Virtual Network Gateway.

        The **vpn_client_configuration** object supports the following:

          * `address_spaces` (`pulumi.Input[list]`) - The address space out of which ip addresses for
            vpn clients will be taken. You can provide more than one address space, e.g.
            in CIDR notation.
          * `radiusServerAddress` (`pulumi.Input[str]`) - The address of the Radius server.
            This setting is incompatible with the use of `root_certificate` and `revoked_certificate`.
          * `radiusServerSecret` (`pulumi.Input[str]`) - The secret used by the Radius server.
            This setting is incompatible with the use of `root_certificate` and `revoked_certificate`.
          * `revokedCertificates` (`pulumi.Input[list]`) - One or more `revoked_certificate` blocks which
            are defined below.
            This setting is incompatible with the use of `radius_server_address` and `radius_server_secret`.
            * `name` (`pulumi.Input[str]`) - A user-defined name of the revoked certificate.
            * `thumbprint` (`pulumi.Input[str]`)

          * `rootCertificates` (`pulumi.Input[list]`) - One or more `root_certificate` blocks which are
            defined below. These root certificates are used to sign the client certificate
            used by the VPN clients to connect to the gateway.
            This setting is incompatible with the use of `radius_server_address` and `radius_server_secret`.
            * `name` (`pulumi.Input[str]`) - A user-defined name of the revoked certificate.
            * `publicCertData` (`pulumi.Input[str]`) - The SHA1 thumbprint of the certificate to be
              revoked.

          * `vpnClientProtocols` (`pulumi.Input[list]`) - List of the protocols supported by the vpn client.
            The supported values are `SSTP`, `IkeV2` and `OpenVPN`.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["active_active"] = active_active
        __props__["bgp_settings"] = bgp_settings
        __props__["default_local_network_gateway_id"] = default_local_network_gateway_id
        __props__["enable_bgp"] = enable_bgp
        __props__["generation"] = generation
        __props__["ip_configurations"] = ip_configurations
        __props__["location"] = location
        __props__["name"] = name
        __props__["resource_group_name"] = resource_group_name
        __props__["sku"] = sku
        __props__["tags"] = tags
        __props__["type"] = type
        __props__["vpn_client_configuration"] = vpn_client_configuration
        __props__["vpn_type"] = vpn_type
        return VirtualNetworkGateway(resource_name, opts=opts, __props__=__props__)

    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop
