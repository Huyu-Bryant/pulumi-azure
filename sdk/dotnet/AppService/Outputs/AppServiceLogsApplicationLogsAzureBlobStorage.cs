// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.AppService.Outputs
{

    [OutputType]
    public sealed class AppServiceLogsApplicationLogsAzureBlobStorage
    {
        /// <summary>
        /// The level at which to log. Possible values include `Error`, `Warning`, `Information`, `Verbose` and `Off`. **NOTE:** this field is not available for `http_logs`
        /// </summary>
        public readonly string Level;
        /// <summary>
        /// The number of days to retain logs for.
        /// </summary>
        public readonly int RetentionInDays;
        /// <summary>
        /// The URL to the storage container, with a Service SAS token appended. **NOTE:** there is currently no means of generating Service SAS tokens with the `azurerm` provider.
        /// </summary>
        public readonly string SasUrl;

        [OutputConstructor]
        private AppServiceLogsApplicationLogsAzureBlobStorage(
            string level,

            int retentionInDays,

            string sasUrl)
        {
            Level = level;
            RetentionInDays = retentionInDays;
            SasUrl = sasUrl;
        }
    }
}