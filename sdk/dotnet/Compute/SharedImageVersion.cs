// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.Compute
{
    /// <summary>
    /// Manages a Version of a Shared Image within a Shared Image Gallery.
    /// 
    /// &gt; This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/shared_image_version.html.markdown.
    /// </summary>
    public partial class SharedImageVersion : Pulumi.CustomResource
    {
        /// <summary>
        /// Should this Image Version be excluded from the `latest` filter? If set to `true` this Image Version won't be returned for the `latest` version. Defaults to `false`.
        /// </summary>
        [Output("excludeFromLatest")]
        public Output<bool?> ExcludeFromLatest { get; private set; } = null!;

        /// <summary>
        /// The name of the Shared Image Gallery in which the Shared Image exists. Changing this forces a new resource to be created.
        /// </summary>
        [Output("galleryName")]
        public Output<string> GalleryName { get; private set; } = null!;

        /// <summary>
        /// The name of the Shared Image within the Shared Image Gallery in which this Version should be created. Changing this forces a new resource to be created.
        /// </summary>
        [Output("imageName")]
        public Output<string> ImageName { get; private set; } = null!;

        /// <summary>
        /// The Azure Region in which the Shared Image Gallery exists. Changing this forces a new resource to be created.
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// The ID of the Managed Image which should be used for this Shared Image Version. Changing this forces a new resource to be created.
        /// </summary>
        [Output("managedImageId")]
        public Output<string> ManagedImageId { get; private set; } = null!;

        /// <summary>
        /// The version number for this Image Version, such as `1.0.0`. Changing this forces a new resource to be created.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The name of the Resource Group in which the Shared Image Gallery exists. Changing this forces a new resource to be created.
        /// </summary>
        [Output("resourceGroupName")]
        public Output<string> ResourceGroupName { get; private set; } = null!;

        /// <summary>
        /// A collection of tags which should be applied to this resource.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>> Tags { get; private set; } = null!;

        /// <summary>
        /// One or more `target_region` blocks as documented below.
        /// </summary>
        [Output("targetRegions")]
        public Output<ImmutableArray<Outputs.SharedImageVersionTargetRegions>> TargetRegions { get; private set; } = null!;


        /// <summary>
        /// Create a SharedImageVersion resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public SharedImageVersion(string name, SharedImageVersionArgs args, CustomResourceOptions? options = null)
            : base("azure:compute/sharedImageVersion:SharedImageVersion", name, args ?? ResourceArgs.Empty, MakeResourceOptions(options, ""))
        {
        }

        private SharedImageVersion(string name, Input<string> id, SharedImageVersionState? state = null, CustomResourceOptions? options = null)
            : base("azure:compute/sharedImageVersion:SharedImageVersion", name, state, MakeResourceOptions(options, id))
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
        /// Get an existing SharedImageVersion resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static SharedImageVersion Get(string name, Input<string> id, SharedImageVersionState? state = null, CustomResourceOptions? options = null)
        {
            return new SharedImageVersion(name, id, state, options);
        }
    }

    public sealed class SharedImageVersionArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Should this Image Version be excluded from the `latest` filter? If set to `true` this Image Version won't be returned for the `latest` version. Defaults to `false`.
        /// </summary>
        [Input("excludeFromLatest")]
        public Input<bool>? ExcludeFromLatest { get; set; }

        /// <summary>
        /// The name of the Shared Image Gallery in which the Shared Image exists. Changing this forces a new resource to be created.
        /// </summary>
        [Input("galleryName", required: true)]
        public Input<string> GalleryName { get; set; } = null!;

        /// <summary>
        /// The name of the Shared Image within the Shared Image Gallery in which this Version should be created. Changing this forces a new resource to be created.
        /// </summary>
        [Input("imageName", required: true)]
        public Input<string> ImageName { get; set; } = null!;

        /// <summary>
        /// The Azure Region in which the Shared Image Gallery exists. Changing this forces a new resource to be created.
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        /// <summary>
        /// The ID of the Managed Image which should be used for this Shared Image Version. Changing this forces a new resource to be created.
        /// </summary>
        [Input("managedImageId", required: true)]
        public Input<string> ManagedImageId { get; set; } = null!;

        /// <summary>
        /// The version number for this Image Version, such as `1.0.0`. Changing this forces a new resource to be created.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The name of the Resource Group in which the Shared Image Gallery exists. Changing this forces a new resource to be created.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// A collection of tags which should be applied to this resource.
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        [Input("targetRegions", required: true)]
        private InputList<Inputs.SharedImageVersionTargetRegionsArgs>? _targetRegions;

        /// <summary>
        /// One or more `target_region` blocks as documented below.
        /// </summary>
        public InputList<Inputs.SharedImageVersionTargetRegionsArgs> TargetRegions
        {
            get => _targetRegions ?? (_targetRegions = new InputList<Inputs.SharedImageVersionTargetRegionsArgs>());
            set => _targetRegions = value;
        }

        public SharedImageVersionArgs()
        {
        }
    }

    public sealed class SharedImageVersionState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Should this Image Version be excluded from the `latest` filter? If set to `true` this Image Version won't be returned for the `latest` version. Defaults to `false`.
        /// </summary>
        [Input("excludeFromLatest")]
        public Input<bool>? ExcludeFromLatest { get; set; }

        /// <summary>
        /// The name of the Shared Image Gallery in which the Shared Image exists. Changing this forces a new resource to be created.
        /// </summary>
        [Input("galleryName")]
        public Input<string>? GalleryName { get; set; }

        /// <summary>
        /// The name of the Shared Image within the Shared Image Gallery in which this Version should be created. Changing this forces a new resource to be created.
        /// </summary>
        [Input("imageName")]
        public Input<string>? ImageName { get; set; }

        /// <summary>
        /// The Azure Region in which the Shared Image Gallery exists. Changing this forces a new resource to be created.
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        /// <summary>
        /// The ID of the Managed Image which should be used for this Shared Image Version. Changing this forces a new resource to be created.
        /// </summary>
        [Input("managedImageId")]
        public Input<string>? ManagedImageId { get; set; }

        /// <summary>
        /// The version number for this Image Version, such as `1.0.0`. Changing this forces a new resource to be created.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The name of the Resource Group in which the Shared Image Gallery exists. Changing this forces a new resource to be created.
        /// </summary>
        [Input("resourceGroupName")]
        public Input<string>? ResourceGroupName { get; set; }

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// A collection of tags which should be applied to this resource.
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        [Input("targetRegions")]
        private InputList<Inputs.SharedImageVersionTargetRegionsGetArgs>? _targetRegions;

        /// <summary>
        /// One or more `target_region` blocks as documented below.
        /// </summary>
        public InputList<Inputs.SharedImageVersionTargetRegionsGetArgs> TargetRegions
        {
            get => _targetRegions ?? (_targetRegions = new InputList<Inputs.SharedImageVersionTargetRegionsGetArgs>());
            set => _targetRegions = value;
        }

        public SharedImageVersionState()
        {
        }
    }

    namespace Inputs
    {

    public sealed class SharedImageVersionTargetRegionsArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The version number for this Image Version, such as `1.0.0`. Changing this forces a new resource to be created.
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        [Input("regionalReplicaCount", required: true)]
        public Input<int> RegionalReplicaCount { get; set; } = null!;

        [Input("storageAccountType")]
        public Input<string>? StorageAccountType { get; set; }

        public SharedImageVersionTargetRegionsArgs()
        {
        }
    }

    public sealed class SharedImageVersionTargetRegionsGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The version number for this Image Version, such as `1.0.0`. Changing this forces a new resource to be created.
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        [Input("regionalReplicaCount", required: true)]
        public Input<int> RegionalReplicaCount { get; set; } = null!;

        [Input("storageAccountType")]
        public Input<string>? StorageAccountType { get; set; }

        public SharedImageVersionTargetRegionsGetArgs()
        {
        }
    }
    }

    namespace Outputs
    {

    [OutputType]
    public sealed class SharedImageVersionTargetRegions
    {
        /// <summary>
        /// The version number for this Image Version, such as `1.0.0`. Changing this forces a new resource to be created.
        /// </summary>
        public readonly string Name;
        public readonly int RegionalReplicaCount;
        public readonly string StorageAccountType;

        [OutputConstructor]
        private SharedImageVersionTargetRegions(
            string name,
            int regionalReplicaCount,
            string storageAccountType)
        {
            Name = name;
            RegionalReplicaCount = regionalReplicaCount;
            StorageAccountType = storageAccountType;
        }
    }
    }
}