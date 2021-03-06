# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class GetDatasetBlobStorageResult:
    """
    A collection of values returned by getDatasetBlobStorage.
    """
    def __init__(__self__, container_name=None, data_share_id=None, display_name=None, file_path=None, folder_path=None, id=None, name=None, storage_accounts=None):
        if container_name and not isinstance(container_name, str):
            raise TypeError("Expected argument 'container_name' to be a str")
        __self__.container_name = container_name
        """
        The name of the storage account container to be shared with the receiver.
        """
        if data_share_id and not isinstance(data_share_id, str):
            raise TypeError("Expected argument 'data_share_id' to be a str")
        __self__.data_share_id = data_share_id
        if display_name and not isinstance(display_name, str):
            raise TypeError("Expected argument 'display_name' to be a str")
        __self__.display_name = display_name
        """
        The name of the Data Share Dataset.
        """
        if file_path and not isinstance(file_path, str):
            raise TypeError("Expected argument 'file_path' to be a str")
        __self__.file_path = file_path
        """
        The path of the file in the storage container to be shared with the receiver.
        """
        if folder_path and not isinstance(folder_path, str):
            raise TypeError("Expected argument 'folder_path' to be a str")
        __self__.folder_path = folder_path
        """
        The folder path of the file in the storage container to be shared with the receiver.
        """
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        The provider-assigned unique ID for this managed resource.
        """
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        __self__.name = name
        """
        The name of the storage account to be shared with the receiver.
        """
        if storage_accounts and not isinstance(storage_accounts, list):
            raise TypeError("Expected argument 'storage_accounts' to be a list")
        __self__.storage_accounts = storage_accounts
        """
        A `storage_account` block as defined below.
        """
class AwaitableGetDatasetBlobStorageResult(GetDatasetBlobStorageResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetDatasetBlobStorageResult(
            container_name=self.container_name,
            data_share_id=self.data_share_id,
            display_name=self.display_name,
            file_path=self.file_path,
            folder_path=self.folder_path,
            id=self.id,
            name=self.name,
            storage_accounts=self.storage_accounts)

def get_dataset_blob_storage(data_share_id=None,name=None,opts=None):
    """
    Use this data source to access information about an existing Data Share Blob Storage Dataset.

    ## Example Usage

    ```python
    import pulumi
    import pulumi_azure as azure

    example = azure.datashare.get_dataset_blob_storage(name="example-dsbsds",
        data_share_id="example-share-id")
    pulumi.export("id", example.id)
    ```


    :param str data_share_id: The ID of the Data Share in which this Data Share Blob Storage Dataset should be created.
    :param str name: The name of this Data Share Blob Storage Dataset.
    """
    __args__ = dict()


    __args__['dataShareId'] = data_share_id
    __args__['name'] = name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure:datashare/getDatasetBlobStorage:getDatasetBlobStorage', __args__, opts=opts).value

    return AwaitableGetDatasetBlobStorageResult(
        container_name=__ret__.get('containerName'),
        data_share_id=__ret__.get('dataShareId'),
        display_name=__ret__.get('displayName'),
        file_path=__ret__.get('filePath'),
        folder_path=__ret__.get('folderPath'),
        id=__ret__.get('id'),
        name=__ret__.get('name'),
        storage_accounts=__ret__.get('storageAccounts'))
