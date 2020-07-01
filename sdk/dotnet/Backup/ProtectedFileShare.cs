// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.Backup
{
    /// <summary>
    /// Manages an Azure Backup Protected File Share to enable backups for file shares within an Azure Storage Account
    /// 
    /// &gt; **NOTE:** Azure Backup for Azure File Shares is currently in public preview. During the preview, the service is subject to additional limitations and unsupported backup scenarios. [Read More](https://docs.microsoft.com/en-us/azure/backup/backup-azure-files#limitations-for-azure-file-share-backup-during-preview)
    /// 
    /// &gt; **NOTE** Azure Backup for Azure File Shares does not support Soft Delete at this time. Deleting this resource will also delete all associated backup data. Please exercise caution. Consider using [`protect`](https://www.pulumi.com/docs/intro/concepts/programming-model/#protect) to guard against accidental deletion.
    /// 
    /// ## Example Usage
    /// 
    /// ```csharp
    /// using Pulumi;
    /// using Azure = Pulumi.Azure;
    /// 
    /// class MyStack : Stack
    /// {
    ///     public MyStack()
    ///     {
    ///         var rg = new Azure.Core.ResourceGroup("rg", new Azure.Core.ResourceGroupArgs
    ///         {
    ///             Location = "West US",
    ///         });
    ///         var vault = new Azure.RecoveryServices.Vault("vault", new Azure.RecoveryServices.VaultArgs
    ///         {
    ///             Location = rg.Location,
    ///             ResourceGroupName = rg.Name,
    ///             Sku = "Standard",
    ///         });
    ///         var sa = new Azure.Storage.Account("sa", new Azure.Storage.AccountArgs
    ///         {
    ///             Location = rg.Location,
    ///             ResourceGroupName = rg.Name,
    ///             AccountTier = "Standard",
    ///             AccountReplicationType = "LRS",
    ///         });
    ///         var exampleShare = new Azure.Storage.Share("exampleShare", new Azure.Storage.ShareArgs
    ///         {
    ///             StorageAccountName = sa.Name,
    ///         });
    ///         var protection_container = new Azure.Backup.ContainerStorageAccount("protection-container", new Azure.Backup.ContainerStorageAccountArgs
    ///         {
    ///             ResourceGroupName = rg.Name,
    ///             RecoveryVaultName = vault.Name,
    ///             StorageAccountId = sa.Id,
    ///         });
    ///         var examplePolicyFileShare = new Azure.Backup.PolicyFileShare("examplePolicyFileShare", new Azure.Backup.PolicyFileShareArgs
    ///         {
    ///             ResourceGroupName = rg.Name,
    ///             RecoveryVaultName = vault.Name,
    ///             Backup = new Azure.Backup.Inputs.PolicyFileShareBackupArgs
    ///             {
    ///                 Frequency = "Daily",
    ///                 Time = "23:00",
    ///             },
    ///             RetentionDaily = new Azure.Backup.Inputs.PolicyFileShareRetentionDailyArgs
    ///             {
    ///                 Count = 10,
    ///             },
    ///         });
    ///         var share1 = new Azure.Backup.ProtectedFileShare("share1", new Azure.Backup.ProtectedFileShareArgs
    ///         {
    ///             ResourceGroupName = rg.Name,
    ///             RecoveryVaultName = vault.Name,
    ///             SourceStorageAccountId = protection_container.StorageAccountId,
    ///             SourceFileShareName = exampleShare.Name,
    ///             BackupPolicyId = examplePolicyFileShare.Id,
    ///         });
    ///     }
    /// 
    /// }
    /// ```
    /// </summary>
    public partial class ProtectedFileShare : Pulumi.CustomResource
    {
        /// <summary>
        /// Specifies the ID of the backup policy to use. The policy must be an Azure File Share backup policy. Other types are not supported.
        /// </summary>
        [Output("backupPolicyId")]
        public Output<string> BackupPolicyId { get; private set; } = null!;

        /// <summary>
        /// Specifies the name of the Recovery Services Vault to use. Changing this forces a new resource to be created.
        /// </summary>
        [Output("recoveryVaultName")]
        public Output<string> RecoveryVaultName { get; private set; } = null!;

        /// <summary>
        /// The name of the resource group in which to create the Azure Backup Protected File Share. Changing this forces a new resource to be created.
        /// </summary>
        [Output("resourceGroupName")]
        public Output<string> ResourceGroupName { get; private set; } = null!;

        /// <summary>
        /// Specifies the name of the file share to backup. Changing this forces a new resource to be created.
        /// </summary>
        [Output("sourceFileShareName")]
        public Output<string> SourceFileShareName { get; private set; } = null!;

        /// <summary>
        /// Specifies the ID of the storage account of the file share to backup. Changing this forces a new resource to be created.
        /// </summary>
        [Output("sourceStorageAccountId")]
        public Output<string> SourceStorageAccountId { get; private set; } = null!;


        /// <summary>
        /// Create a ProtectedFileShare resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public ProtectedFileShare(string name, ProtectedFileShareArgs args, CustomResourceOptions? options = null)
            : base("azure:backup/protectedFileShare:ProtectedFileShare", name, args ?? new ProtectedFileShareArgs(), MakeResourceOptions(options, ""))
        {
        }

        private ProtectedFileShare(string name, Input<string> id, ProtectedFileShareState? state = null, CustomResourceOptions? options = null)
            : base("azure:backup/protectedFileShare:ProtectedFileShare", name, state, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing ProtectedFileShare resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static ProtectedFileShare Get(string name, Input<string> id, ProtectedFileShareState? state = null, CustomResourceOptions? options = null)
        {
            return new ProtectedFileShare(name, id, state, options);
        }
    }

    public sealed class ProtectedFileShareArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Specifies the ID of the backup policy to use. The policy must be an Azure File Share backup policy. Other types are not supported.
        /// </summary>
        [Input("backupPolicyId", required: true)]
        public Input<string> BackupPolicyId { get; set; } = null!;

        /// <summary>
        /// Specifies the name of the Recovery Services Vault to use. Changing this forces a new resource to be created.
        /// </summary>
        [Input("recoveryVaultName", required: true)]
        public Input<string> RecoveryVaultName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group in which to create the Azure Backup Protected File Share. Changing this forces a new resource to be created.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// Specifies the name of the file share to backup. Changing this forces a new resource to be created.
        /// </summary>
        [Input("sourceFileShareName", required: true)]
        public Input<string> SourceFileShareName { get; set; } = null!;

        /// <summary>
        /// Specifies the ID of the storage account of the file share to backup. Changing this forces a new resource to be created.
        /// </summary>
        [Input("sourceStorageAccountId", required: true)]
        public Input<string> SourceStorageAccountId { get; set; } = null!;

        public ProtectedFileShareArgs()
        {
        }
    }

    public sealed class ProtectedFileShareState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Specifies the ID of the backup policy to use. The policy must be an Azure File Share backup policy. Other types are not supported.
        /// </summary>
        [Input("backupPolicyId")]
        public Input<string>? BackupPolicyId { get; set; }

        /// <summary>
        /// Specifies the name of the Recovery Services Vault to use. Changing this forces a new resource to be created.
        /// </summary>
        [Input("recoveryVaultName")]
        public Input<string>? RecoveryVaultName { get; set; }

        /// <summary>
        /// The name of the resource group in which to create the Azure Backup Protected File Share. Changing this forces a new resource to be created.
        /// </summary>
        [Input("resourceGroupName")]
        public Input<string>? ResourceGroupName { get; set; }

        /// <summary>
        /// Specifies the name of the file share to backup. Changing this forces a new resource to be created.
        /// </summary>
        [Input("sourceFileShareName")]
        public Input<string>? SourceFileShareName { get; set; }

        /// <summary>
        /// Specifies the ID of the storage account of the file share to backup. Changing this forces a new resource to be created.
        /// </summary>
        [Input("sourceStorageAccountId")]
        public Input<string>? SourceStorageAccountId { get; set; }

        public ProtectedFileShareState()
        {
        }
    }
}
