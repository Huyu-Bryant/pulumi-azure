// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.Compute.Outputs
{

    [OutputType]
    public sealed class SharedImageVersionTargetRegion
    {
        /// <summary>
        /// The Azure Region in which this Image Version should exist.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The number of replicas of the Image Version to be created per region.
        /// </summary>
        public readonly int RegionalReplicaCount;
        /// <summary>
        /// The storage account type for the image version. Possible values are `Standard_LRS` and `Standard_ZRS`. Defaults to `Standard_LRS`. You can store all of your image version replicas in Zone Redundant Storage by specifying `Standard_ZRS`.
        /// </summary>
        public readonly string? StorageAccountType;

        [OutputConstructor]
        private SharedImageVersionTargetRegion(
            string name,

            int regionalReplicaCount,

            string? storageAccountType)
        {
            Name = name;
            RegionalReplicaCount = regionalReplicaCount;
            StorageAccountType = storageAccountType;
        }
    }
}
