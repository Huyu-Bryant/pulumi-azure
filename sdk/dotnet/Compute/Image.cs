// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.Compute
{
    /// <summary>
    /// Manages a custom virtual machine image that can be used to create virtual machines.
    /// 
    /// &gt; This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/image.html.markdown.
    /// </summary>
    public partial class Image : Pulumi.CustomResource
    {
        /// <summary>
        /// One or more `data_disk` elements as defined below.
        /// </summary>
        [Output("dataDisks")]
        public Output<ImmutableArray<Outputs.ImageDataDisks>> DataDisks { get; private set; } = null!;

        /// <summary>
        /// The HyperVGenerationType of the VirtualMachine created from the image as `V1`, `V2`. The default is `V1`.
        /// </summary>
        [Output("hyperVGeneration")]
        public Output<string?> HyperVGeneration { get; private set; } = null!;

        /// <summary>
        /// Specified the supported Azure location where the resource exists.
        /// Changing this forces a new resource to be created.
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// Specifies the name of the image. Changing this forces a
        /// new resource to be created.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// One or more `os_disk` elements as defined below.
        /// </summary>
        [Output("osDisk")]
        public Output<Outputs.ImageOsDisk?> OsDisk { get; private set; } = null!;

        /// <summary>
        /// The name of the resource group in which to create
        /// the image. Changing this forces a new resource to be created.
        /// </summary>
        [Output("resourceGroupName")]
        public Output<string> ResourceGroupName { get; private set; } = null!;

        /// <summary>
        /// The Virtual Machine ID from which to create the image.
        /// </summary>
        [Output("sourceVirtualMachineId")]
        public Output<string?> SourceVirtualMachineId { get; private set; } = null!;

        /// <summary>
        /// A mapping of tags to assign to the resource.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>> Tags { get; private set; } = null!;

        /// <summary>
        /// Is zone resiliency enabled?  Defaults to `false`.  Changing this forces a new resource to be created.
        /// </summary>
        [Output("zoneResilient")]
        public Output<bool?> ZoneResilient { get; private set; } = null!;


        /// <summary>
        /// Create a Image resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Image(string name, ImageArgs args, CustomResourceOptions? options = null)
            : base("azure:compute/image:Image", name, args ?? ResourceArgs.Empty, MakeResourceOptions(options, ""))
        {
        }

        private Image(string name, Input<string> id, ImageState? state = null, CustomResourceOptions? options = null)
            : base("azure:compute/image:Image", name, state, MakeResourceOptions(options, id))
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
        /// Get an existing Image resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Image Get(string name, Input<string> id, ImageState? state = null, CustomResourceOptions? options = null)
        {
            return new Image(name, id, state, options);
        }
    }

    public sealed class ImageArgs : Pulumi.ResourceArgs
    {
        [Input("dataDisks")]
        private InputList<Inputs.ImageDataDisksArgs>? _dataDisks;

        /// <summary>
        /// One or more `data_disk` elements as defined below.
        /// </summary>
        public InputList<Inputs.ImageDataDisksArgs> DataDisks
        {
            get => _dataDisks ?? (_dataDisks = new InputList<Inputs.ImageDataDisksArgs>());
            set => _dataDisks = value;
        }

        /// <summary>
        /// The HyperVGenerationType of the VirtualMachine created from the image as `V1`, `V2`. The default is `V1`.
        /// </summary>
        [Input("hyperVGeneration")]
        public Input<string>? HyperVGeneration { get; set; }

        /// <summary>
        /// Specified the supported Azure location where the resource exists.
        /// Changing this forces a new resource to be created.
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        /// <summary>
        /// Specifies the name of the image. Changing this forces a
        /// new resource to be created.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// One or more `os_disk` elements as defined below.
        /// </summary>
        [Input("osDisk")]
        public Input<Inputs.ImageOsDiskArgs>? OsDisk { get; set; }

        /// <summary>
        /// The name of the resource group in which to create
        /// the image. Changing this forces a new resource to be created.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The Virtual Machine ID from which to create the image.
        /// </summary>
        [Input("sourceVirtualMachineId")]
        public Input<string>? SourceVirtualMachineId { get; set; }

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
        /// Is zone resiliency enabled?  Defaults to `false`.  Changing this forces a new resource to be created.
        /// </summary>
        [Input("zoneResilient")]
        public Input<bool>? ZoneResilient { get; set; }

        public ImageArgs()
        {
        }
    }

    public sealed class ImageState : Pulumi.ResourceArgs
    {
        [Input("dataDisks")]
        private InputList<Inputs.ImageDataDisksGetArgs>? _dataDisks;

        /// <summary>
        /// One or more `data_disk` elements as defined below.
        /// </summary>
        public InputList<Inputs.ImageDataDisksGetArgs> DataDisks
        {
            get => _dataDisks ?? (_dataDisks = new InputList<Inputs.ImageDataDisksGetArgs>());
            set => _dataDisks = value;
        }

        /// <summary>
        /// The HyperVGenerationType of the VirtualMachine created from the image as `V1`, `V2`. The default is `V1`.
        /// </summary>
        [Input("hyperVGeneration")]
        public Input<string>? HyperVGeneration { get; set; }

        /// <summary>
        /// Specified the supported Azure location where the resource exists.
        /// Changing this forces a new resource to be created.
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        /// <summary>
        /// Specifies the name of the image. Changing this forces a
        /// new resource to be created.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// One or more `os_disk` elements as defined below.
        /// </summary>
        [Input("osDisk")]
        public Input<Inputs.ImageOsDiskGetArgs>? OsDisk { get; set; }

        /// <summary>
        /// The name of the resource group in which to create
        /// the image. Changing this forces a new resource to be created.
        /// </summary>
        [Input("resourceGroupName")]
        public Input<string>? ResourceGroupName { get; set; }

        /// <summary>
        /// The Virtual Machine ID from which to create the image.
        /// </summary>
        [Input("sourceVirtualMachineId")]
        public Input<string>? SourceVirtualMachineId { get; set; }

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
        /// Is zone resiliency enabled?  Defaults to `false`.  Changing this forces a new resource to be created.
        /// </summary>
        [Input("zoneResilient")]
        public Input<bool>? ZoneResilient { get; set; }

        public ImageState()
        {
        }
    }

    namespace Inputs
    {

    public sealed class ImageDataDisksArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Specifies the URI in Azure storage of the blob that you want to use to create the image.
        /// </summary>
        [Input("blobUri")]
        public Input<string>? BlobUri { get; set; }

        /// <summary>
        /// Specifies the caching mode as `ReadWrite`, `ReadOnly`, or `None`. The default is `None`.
        /// </summary>
        [Input("caching")]
        public Input<string>? Caching { get; set; }

        /// <summary>
        /// Specifies the logical unit number of the data disk.
        /// </summary>
        [Input("lun")]
        public Input<int>? Lun { get; set; }

        /// <summary>
        /// Specifies the ID of the managed disk resource that you want to use to create the image.
        /// </summary>
        [Input("managedDiskId")]
        public Input<string>? ManagedDiskId { get; set; }

        /// <summary>
        /// Specifies the size of the image to be created. The target size can't be smaller than the source size.
        /// </summary>
        [Input("sizeGb")]
        public Input<int>? SizeGb { get; set; }

        public ImageDataDisksArgs()
        {
        }
    }

    public sealed class ImageDataDisksGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Specifies the URI in Azure storage of the blob that you want to use to create the image.
        /// </summary>
        [Input("blobUri")]
        public Input<string>? BlobUri { get; set; }

        /// <summary>
        /// Specifies the caching mode as `ReadWrite`, `ReadOnly`, or `None`. The default is `None`.
        /// </summary>
        [Input("caching")]
        public Input<string>? Caching { get; set; }

        /// <summary>
        /// Specifies the logical unit number of the data disk.
        /// </summary>
        [Input("lun")]
        public Input<int>? Lun { get; set; }

        /// <summary>
        /// Specifies the ID of the managed disk resource that you want to use to create the image.
        /// </summary>
        [Input("managedDiskId")]
        public Input<string>? ManagedDiskId { get; set; }

        /// <summary>
        /// Specifies the size of the image to be created. The target size can't be smaller than the source size.
        /// </summary>
        [Input("sizeGb")]
        public Input<int>? SizeGb { get; set; }

        public ImageDataDisksGetArgs()
        {
        }
    }

    public sealed class ImageOsDiskArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Specifies the URI in Azure storage of the blob that you want to use to create the image.
        /// </summary>
        [Input("blobUri")]
        public Input<string>? BlobUri { get; set; }

        /// <summary>
        /// Specifies the caching mode as `ReadWrite`, `ReadOnly`, or `None`. The default is `None`.
        /// </summary>
        [Input("caching")]
        public Input<string>? Caching { get; set; }

        /// <summary>
        /// Specifies the ID of the managed disk resource that you want to use to create the image.
        /// </summary>
        [Input("managedDiskId")]
        public Input<string>? ManagedDiskId { get; set; }

        /// <summary>
        /// Specifies the state of the operating system contained in the blob. Currently, the only value is Generalized.
        /// </summary>
        [Input("osState")]
        public Input<string>? OsState { get; set; }

        /// <summary>
        /// Specifies the type of operating system contained in the virtual machine image. Possible values are: Windows or Linux.
        /// </summary>
        [Input("osType")]
        public Input<string>? OsType { get; set; }

        /// <summary>
        /// Specifies the size of the image to be created. The target size can't be smaller than the source size.
        /// </summary>
        [Input("sizeGb")]
        public Input<int>? SizeGb { get; set; }

        public ImageOsDiskArgs()
        {
        }
    }

    public sealed class ImageOsDiskGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Specifies the URI in Azure storage of the blob that you want to use to create the image.
        /// </summary>
        [Input("blobUri")]
        public Input<string>? BlobUri { get; set; }

        /// <summary>
        /// Specifies the caching mode as `ReadWrite`, `ReadOnly`, or `None`. The default is `None`.
        /// </summary>
        [Input("caching")]
        public Input<string>? Caching { get; set; }

        /// <summary>
        /// Specifies the ID of the managed disk resource that you want to use to create the image.
        /// </summary>
        [Input("managedDiskId")]
        public Input<string>? ManagedDiskId { get; set; }

        /// <summary>
        /// Specifies the state of the operating system contained in the blob. Currently, the only value is Generalized.
        /// </summary>
        [Input("osState")]
        public Input<string>? OsState { get; set; }

        /// <summary>
        /// Specifies the type of operating system contained in the virtual machine image. Possible values are: Windows or Linux.
        /// </summary>
        [Input("osType")]
        public Input<string>? OsType { get; set; }

        /// <summary>
        /// Specifies the size of the image to be created. The target size can't be smaller than the source size.
        /// </summary>
        [Input("sizeGb")]
        public Input<int>? SizeGb { get; set; }

        public ImageOsDiskGetArgs()
        {
        }
    }
    }

    namespace Outputs
    {

    [OutputType]
    public sealed class ImageDataDisks
    {
        /// <summary>
        /// Specifies the URI in Azure storage of the blob that you want to use to create the image.
        /// </summary>
        public readonly string BlobUri;
        /// <summary>
        /// Specifies the caching mode as `ReadWrite`, `ReadOnly`, or `None`. The default is `None`.
        /// </summary>
        public readonly string? Caching;
        /// <summary>
        /// Specifies the logical unit number of the data disk.
        /// </summary>
        public readonly int? Lun;
        /// <summary>
        /// Specifies the ID of the managed disk resource that you want to use to create the image.
        /// </summary>
        public readonly string? ManagedDiskId;
        /// <summary>
        /// Specifies the size of the image to be created. The target size can't be smaller than the source size.
        /// </summary>
        public readonly int SizeGb;

        [OutputConstructor]
        private ImageDataDisks(
            string blobUri,
            string? caching,
            int? lun,
            string? managedDiskId,
            int sizeGb)
        {
            BlobUri = blobUri;
            Caching = caching;
            Lun = lun;
            ManagedDiskId = managedDiskId;
            SizeGb = sizeGb;
        }
    }

    [OutputType]
    public sealed class ImageOsDisk
    {
        /// <summary>
        /// Specifies the URI in Azure storage of the blob that you want to use to create the image.
        /// </summary>
        public readonly string BlobUri;
        /// <summary>
        /// Specifies the caching mode as `ReadWrite`, `ReadOnly`, or `None`. The default is `None`.
        /// </summary>
        public readonly string? Caching;
        /// <summary>
        /// Specifies the ID of the managed disk resource that you want to use to create the image.
        /// </summary>
        public readonly string ManagedDiskId;
        /// <summary>
        /// Specifies the state of the operating system contained in the blob. Currently, the only value is Generalized.
        /// </summary>
        public readonly string? OsState;
        /// <summary>
        /// Specifies the type of operating system contained in the virtual machine image. Possible values are: Windows or Linux.
        /// </summary>
        public readonly string? OsType;
        /// <summary>
        /// Specifies the size of the image to be created. The target size can't be smaller than the source size.
        /// </summary>
        public readonly int SizeGb;

        [OutputConstructor]
        private ImageOsDisk(
            string blobUri,
            string? caching,
            string managedDiskId,
            string? osState,
            string? osType,
            int sizeGb)
        {
            BlobUri = blobUri;
            Caching = caching;
            ManagedDiskId = managedDiskId;
            OsState = osState;
            OsType = osType;
            SizeGb = sizeGb;
        }
    }
    }
}