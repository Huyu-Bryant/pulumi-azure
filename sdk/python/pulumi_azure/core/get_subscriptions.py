# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import pulumi
import pulumi.runtime
from .. import utilities, tables

class GetSubscriptionsResult(object):
    """
    A collection of values returned by getSubscriptions.
    """
    def __init__(__self__, subscriptions=None, id=None):
        if subscriptions and not isinstance(subscriptions, list):
            raise TypeError('Expected argument subscriptions to be a list')
        __self__.subscriptions = subscriptions
        """
        One or more `subscription` blocks as defined below.
        """
        if id and not isinstance(id, str):
            raise TypeError('Expected argument id to be a str')
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

async def get_subscriptions(display_name_contains=None, display_name_prefix=None):
    """
    Use this data source to access information about all the Subscriptions currently available.
    """
    __args__ = dict()

    __args__['displayNameContains'] = display_name_contains
    __args__['displayNamePrefix'] = display_name_prefix
    __ret__ = await pulumi.runtime.invoke('azure:core/getSubscriptions:getSubscriptions', __args__)

    return GetSubscriptionsResult(
        subscriptions=__ret__.get('subscriptions'),
        id=__ret__.get('id'))
