// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.CosmosDB
{
    /// <summary>
    /// Manages a Gremlin Database within a Cosmos DB Account.
    /// 
    /// &gt; This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/cosmosdb_gremlin_database.html.markdown.
    /// </summary>
    public partial class GremlinDatabase : Pulumi.CustomResource
    {
        /// <summary>
        /// The name of the CosmosDB Account to create the Gremlin Database within. Changing this forces a new resource to be created.
        /// </summary>
        [Output("accountName")]
        public Output<string> AccountName { get; private set; } = null!;

        /// <summary>
        /// Specifies the name of the Cosmos DB Gremlin Database. Changing this forces a new resource to be created.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The name of the resource group in which the Cosmos DB Gremlin Database is created. Changing this forces a new resource to be created.
        /// </summary>
        [Output("resourceGroupName")]
        public Output<string> ResourceGroupName { get; private set; } = null!;

        [Output("throughput")]
        public Output<int> Throughput { get; private set; } = null!;


        /// <summary>
        /// Create a GremlinDatabase resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public GremlinDatabase(string name, GremlinDatabaseArgs args, CustomResourceOptions? options = null)
            : base("azure:cosmosdb/gremlinDatabase:GremlinDatabase", name, args ?? ResourceArgs.Empty, MakeResourceOptions(options, ""))
        {
        }

        private GremlinDatabase(string name, Input<string> id, GremlinDatabaseState? state = null, CustomResourceOptions? options = null)
            : base("azure:cosmosdb/gremlinDatabase:GremlinDatabase", name, state, MakeResourceOptions(options, id))
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
        /// Get an existing GremlinDatabase resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static GremlinDatabase Get(string name, Input<string> id, GremlinDatabaseState? state = null, CustomResourceOptions? options = null)
        {
            return new GremlinDatabase(name, id, state, options);
        }
    }

    public sealed class GremlinDatabaseArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the CosmosDB Account to create the Gremlin Database within. Changing this forces a new resource to be created.
        /// </summary>
        [Input("accountName", required: true)]
        public Input<string> AccountName { get; set; } = null!;

        /// <summary>
        /// Specifies the name of the Cosmos DB Gremlin Database. Changing this forces a new resource to be created.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The name of the resource group in which the Cosmos DB Gremlin Database is created. Changing this forces a new resource to be created.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        [Input("throughput")]
        public Input<int>? Throughput { get; set; }

        public GremlinDatabaseArgs()
        {
        }
    }

    public sealed class GremlinDatabaseState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the CosmosDB Account to create the Gremlin Database within. Changing this forces a new resource to be created.
        /// </summary>
        [Input("accountName")]
        public Input<string>? AccountName { get; set; }

        /// <summary>
        /// Specifies the name of the Cosmos DB Gremlin Database. Changing this forces a new resource to be created.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The name of the resource group in which the Cosmos DB Gremlin Database is created. Changing this forces a new resource to be created.
        /// </summary>
        [Input("resourceGroupName")]
        public Input<string>? ResourceGroupName { get; set; }

        [Input("throughput")]
        public Input<int>? Throughput { get; set; }

        public GremlinDatabaseState()
        {
        }
    }
}
