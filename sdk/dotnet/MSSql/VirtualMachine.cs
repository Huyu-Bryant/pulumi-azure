// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.MSSql
{
    /// <summary>
    /// Manages a Microsoft SQL Virtual Machine
    /// 
    /// ## Example Usage
    /// 
    /// This example provisions a brief Managed MsSql Virtual Machine.
    /// 
    /// ```csharp
    /// using Pulumi;
    /// using Azure = Pulumi.Azure;
    /// 
    /// class MyStack : Stack
    /// {
    ///     public MyStack()
    ///     {
    ///         var exampleVirtualMachine = Output.Create(Azure.Compute.GetVirtualMachine.InvokeAsync(new Azure.Compute.GetVirtualMachineArgs
    ///         {
    ///             Name = "example-vm",
    ///             ResourceGroupName = "example-resources",
    ///         }));
    ///         var exampleMssql_virtualMachineVirtualMachine = new Azure.MSSql.VirtualMachine("exampleMssql/virtualMachineVirtualMachine", new Azure.MSSql.VirtualMachineArgs
    ///         {
    ///             VirtualMachineId = exampleVirtualMachine.Apply(exampleVirtualMachine =&gt; exampleVirtualMachine.Id),
    ///             SqlLicenseType = "PAYG",
    ///             RServicesEnabled = true,
    ///             SqlConnectivityPort = 1433,
    ///             SqlConnectivityType = "PRIVATE",
    ///             SqlConnectivityUpdatePassword = "Password1234!",
    ///             SqlConnectivityUpdateUsername = "sqllogin",
    ///             AutoPatching = new Azure.MSSql.Inputs.VirtualMachineAutoPatchingArgs
    ///             {
    ///                 DayOfWeek = "Sunday",
    ///                 MaintenanceWindowDurationInMinutes = 60,
    ///                 MaintenanceWindowStartingHour = 2,
    ///             },
    ///         });
    ///     }
    /// 
    /// }
    /// ```
    /// </summary>
    public partial class VirtualMachine : Pulumi.CustomResource
    {
        /// <summary>
        /// An `auto_patching` block as defined below.
        /// </summary>
        [Output("autoPatching")]
        public Output<Outputs.VirtualMachineAutoPatching?> AutoPatching { get; private set; } = null!;

        /// <summary>
        /// (Optional) An `key_vault_credential` block as defined below.
        /// </summary>
        [Output("keyVaultCredential")]
        public Output<Outputs.VirtualMachineKeyVaultCredential?> KeyVaultCredential { get; private set; } = null!;

        /// <summary>
        /// Should R Services be enabled?
        /// </summary>
        [Output("rServicesEnabled")]
        public Output<bool?> RServicesEnabled { get; private set; } = null!;

        /// <summary>
        /// The SQL Server port. Defaults to `1433`.
        /// </summary>
        [Output("sqlConnectivityPort")]
        public Output<int?> SqlConnectivityPort { get; private set; } = null!;

        /// <summary>
        /// The connectivity type used for this SQL Server. Defaults to `PRIVATE`.
        /// </summary>
        [Output("sqlConnectivityType")]
        public Output<string?> SqlConnectivityType { get; private set; } = null!;

        /// <summary>
        /// The SQL Server sysadmin login password.
        /// </summary>
        [Output("sqlConnectivityUpdatePassword")]
        public Output<string?> SqlConnectivityUpdatePassword { get; private set; } = null!;

        /// <summary>
        /// The SQL Server sysadmin login to create.
        /// </summary>
        [Output("sqlConnectivityUpdateUsername")]
        public Output<string?> SqlConnectivityUpdateUsername { get; private set; } = null!;

        /// <summary>
        /// The SQL Server license type. Possible values are `AHUB` (Azure Hybrid Benefit) and `PAYG` (Pay-As-You-Go). Changing this forces a new resource to be created.
        /// </summary>
        [Output("sqlLicenseType")]
        public Output<string> SqlLicenseType { get; private set; } = null!;

        /// <summary>
        /// A mapping of tags to assign to the resource.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// The ID of the Virtual Machine. Changing this forces a new resource to be created.
        /// </summary>
        [Output("virtualMachineId")]
        public Output<string> VirtualMachineId { get; private set; } = null!;


        /// <summary>
        /// Create a VirtualMachine resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public VirtualMachine(string name, VirtualMachineArgs args, CustomResourceOptions? options = null)
            : base("azure:mssql/virtualMachine:VirtualMachine", name, args ?? new VirtualMachineArgs(), MakeResourceOptions(options, ""))
        {
        }

        private VirtualMachine(string name, Input<string> id, VirtualMachineState? state = null, CustomResourceOptions? options = null)
            : base("azure:mssql/virtualMachine:VirtualMachine", name, state, MakeResourceOptions(options, id))
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
        /// Get an existing VirtualMachine resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static VirtualMachine Get(string name, Input<string> id, VirtualMachineState? state = null, CustomResourceOptions? options = null)
        {
            return new VirtualMachine(name, id, state, options);
        }
    }

    public sealed class VirtualMachineArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// An `auto_patching` block as defined below.
        /// </summary>
        [Input("autoPatching")]
        public Input<Inputs.VirtualMachineAutoPatchingArgs>? AutoPatching { get; set; }

        /// <summary>
        /// (Optional) An `key_vault_credential` block as defined below.
        /// </summary>
        [Input("keyVaultCredential")]
        public Input<Inputs.VirtualMachineKeyVaultCredentialArgs>? KeyVaultCredential { get; set; }

        /// <summary>
        /// Should R Services be enabled?
        /// </summary>
        [Input("rServicesEnabled")]
        public Input<bool>? RServicesEnabled { get; set; }

        /// <summary>
        /// The SQL Server port. Defaults to `1433`.
        /// </summary>
        [Input("sqlConnectivityPort")]
        public Input<int>? SqlConnectivityPort { get; set; }

        /// <summary>
        /// The connectivity type used for this SQL Server. Defaults to `PRIVATE`.
        /// </summary>
        [Input("sqlConnectivityType")]
        public Input<string>? SqlConnectivityType { get; set; }

        /// <summary>
        /// The SQL Server sysadmin login password.
        /// </summary>
        [Input("sqlConnectivityUpdatePassword")]
        public Input<string>? SqlConnectivityUpdatePassword { get; set; }

        /// <summary>
        /// The SQL Server sysadmin login to create.
        /// </summary>
        [Input("sqlConnectivityUpdateUsername")]
        public Input<string>? SqlConnectivityUpdateUsername { get; set; }

        /// <summary>
        /// The SQL Server license type. Possible values are `AHUB` (Azure Hybrid Benefit) and `PAYG` (Pay-As-You-Go). Changing this forces a new resource to be created.
        /// </summary>
        [Input("sqlLicenseType", required: true)]
        public Input<string> SqlLicenseType { get; set; } = null!;

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// A mapping of tags to assign to the resource.
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        /// <summary>
        /// The ID of the Virtual Machine. Changing this forces a new resource to be created.
        /// </summary>
        [Input("virtualMachineId", required: true)]
        public Input<string> VirtualMachineId { get; set; } = null!;

        public VirtualMachineArgs()
        {
        }
    }

    public sealed class VirtualMachineState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// An `auto_patching` block as defined below.
        /// </summary>
        [Input("autoPatching")]
        public Input<Inputs.VirtualMachineAutoPatchingGetArgs>? AutoPatching { get; set; }

        /// <summary>
        /// (Optional) An `key_vault_credential` block as defined below.
        /// </summary>
        [Input("keyVaultCredential")]
        public Input<Inputs.VirtualMachineKeyVaultCredentialGetArgs>? KeyVaultCredential { get; set; }

        /// <summary>
        /// Should R Services be enabled?
        /// </summary>
        [Input("rServicesEnabled")]
        public Input<bool>? RServicesEnabled { get; set; }

        /// <summary>
        /// The SQL Server port. Defaults to `1433`.
        /// </summary>
        [Input("sqlConnectivityPort")]
        public Input<int>? SqlConnectivityPort { get; set; }

        /// <summary>
        /// The connectivity type used for this SQL Server. Defaults to `PRIVATE`.
        /// </summary>
        [Input("sqlConnectivityType")]
        public Input<string>? SqlConnectivityType { get; set; }

        /// <summary>
        /// The SQL Server sysadmin login password.
        /// </summary>
        [Input("sqlConnectivityUpdatePassword")]
        public Input<string>? SqlConnectivityUpdatePassword { get; set; }

        /// <summary>
        /// The SQL Server sysadmin login to create.
        /// </summary>
        [Input("sqlConnectivityUpdateUsername")]
        public Input<string>? SqlConnectivityUpdateUsername { get; set; }

        /// <summary>
        /// The SQL Server license type. Possible values are `AHUB` (Azure Hybrid Benefit) and `PAYG` (Pay-As-You-Go). Changing this forces a new resource to be created.
        /// </summary>
        [Input("sqlLicenseType")]
        public Input<string>? SqlLicenseType { get; set; }

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// A mapping of tags to assign to the resource.
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        /// <summary>
        /// The ID of the Virtual Machine. Changing this forces a new resource to be created.
        /// </summary>
        [Input("virtualMachineId")]
        public Input<string>? VirtualMachineId { get; set; }

        public VirtualMachineState()
        {
        }
    }
}
