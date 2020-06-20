// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Azure.LogicApps.Inputs
{

    public sealed class ActionHttpRunAfterArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Specifies the name of the precedent HTTP Action.
        /// </summary>
        [Input("actionName", required: true)]
        public Input<string> ActionName { get; set; } = null!;

        /// <summary>
        /// Specifies the expected result of the precedent HTTP Action, only after which the current HTTP Action will be triggered. Possible values include `Succeeded`, `Failed`, `Skipped` and `TimedOut`.
        /// </summary>
        [Input("actionResult", required: true)]
        public Input<string> ActionResult { get; set; } = null!;

        public ActionHttpRunAfterArgs()
        {
        }
    }
}
