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
    public sealed class SlotSiteConfig
    {
        /// <summary>
        /// Should the app be loaded at all times? Defaults to `false`.
        /// </summary>
        public readonly bool? AlwaysOn;
        /// <summary>
        /// App command line to launch, e.g. `/sbin/myserver -b 0.0.0.0`.
        /// </summary>
        public readonly string? AppCommandLine;
        /// <summary>
        /// The name of the swap to automatically swap to during deployment
        /// </summary>
        public readonly string? AutoSwapSlotName;
        /// <summary>
        /// A `cors` block as defined below.
        /// </summary>
        public readonly Outputs.SlotSiteConfigCors? Cors;
        /// <summary>
        /// The ordering of default documents to load, if an address isn't specified.
        /// </summary>
        public readonly ImmutableArray<string> DefaultDocuments;
        /// <summary>
        /// The version of the .net framework's CLR used in this App Service Slot. Possible values are `v2.0` (which will use the latest version of the .net framework for the .net CLR v2 - currently `.net 3.5`) and `v4.0` (which corresponds to the latest version of the .net CLR v4 - which at the time of writing is `.net 4.7.1`). [For more information on which .net CLR version to use based on the .net framework you're targeting - please see this table](https://en.wikipedia.org/wiki/.NET_Framework_version_history#Overview). Defaults to `v4.0`.
        /// </summary>
        public readonly string? DotnetFrameworkVersion;
        public readonly string? FtpsState;
        public readonly string? HealthCheckPath;
        /// <summary>
        /// Is HTTP2 Enabled on this App Service? Defaults to `false`.
        /// </summary>
        public readonly bool? Http2Enabled;
        /// <summary>
        /// A list of objects representing ip restrictions as defined below.
        /// </summary>
        public readonly ImmutableArray<Outputs.SlotSiteConfigIpRestriction> IpRestrictions;
        /// <summary>
        /// The Java Container to use. If specified `java_version` and `java_container_version` must also be specified. Possible values are `JETTY` and `TOMCAT`.
        /// </summary>
        public readonly string? JavaContainer;
        /// <summary>
        /// The version of the Java Container to use. If specified `java_version` and `java_container` must also be specified.
        /// </summary>
        public readonly string? JavaContainerVersion;
        /// <summary>
        /// The version of Java to use. If specified `java_container` and `java_container_version` must also be specified. Possible values are `1.7`, `1.8`, and `11` and their specific versions - except for Java 11 (e.g. `1.7.0_80`, `1.8.0_181`, `11`)
        /// </summary>
        public readonly string? JavaVersion;
        public readonly string? LinuxFxVersion;
        /// <summary>
        /// Is "MySQL In App" Enabled? This runs a local MySQL instance with your app and shares resources from the App Service plan.
        /// </summary>
        public readonly bool? LocalMysqlEnabled;
        /// <summary>
        /// The Managed Pipeline Mode. Possible values are `Integrated` and `Classic`. Defaults to `Integrated`.
        /// </summary>
        public readonly string? ManagedPipelineMode;
        /// <summary>
        /// The minimum supported TLS version for the app service. Possible values are `1.0`, `1.1`, and `1.2`. Defaults to `1.2` for new app services.
        /// </summary>
        public readonly string? MinTlsVersion;
        /// <summary>
        /// The version of PHP to use in this App Service Slot. Possible values are `5.5`, `5.6`, `7.0`, `7.1`, `7.2`, and `7.3`.
        /// </summary>
        public readonly string? PhpVersion;
        /// <summary>
        /// The version of Python to use in this App Service Slot. Possible values are `2.7` and `3.4`.
        /// </summary>
        public readonly string? PythonVersion;
        /// <summary>
        /// Is Remote Debugging Enabled? Defaults to `false`.
        /// </summary>
        public readonly bool? RemoteDebuggingEnabled;
        /// <summary>
        /// Which version of Visual Studio should the Remote Debugger be compatible with? Possible values are `VS2012`, `VS2013`, `VS2015`, and `VS2017`.
        /// </summary>
        public readonly string? RemoteDebuggingVersion;
        public readonly ImmutableArray<Outputs.SlotSiteConfigScmIpRestriction> ScmIpRestrictions;
        /// <summary>
        /// The type of Source Control enabled for this App Service Slot. Defaults to `None`. Possible values are: `BitbucketGit`, `BitbucketHg`, `CodePlexGit`, `CodePlexHg`, `Dropbox`, `ExternalGit`, `ExternalHg`, `GitHub`, `LocalGit`, `None`, `OneDrive`, `Tfs`, `VSO`, and `VSTSRM`
        /// </summary>
        public readonly string? ScmType;
        public readonly bool? ScmUseMainIpRestriction;
        /// <summary>
        /// Should the App Service Slot run in 32 bit mode, rather than 64 bit mode?
        /// </summary>
        public readonly bool? Use32BitWorkerProcess;
        /// <summary>
        /// Should WebSockets be enabled?
        /// </summary>
        public readonly bool? WebsocketsEnabled;
        public readonly string? WindowsFxVersion;

        [OutputConstructor]
        private SlotSiteConfig(
            bool? alwaysOn,

            string? appCommandLine,

            string? autoSwapSlotName,

            Outputs.SlotSiteConfigCors? cors,

            ImmutableArray<string> defaultDocuments,

            string? dotnetFrameworkVersion,

            string? ftpsState,

            string? healthCheckPath,

            bool? http2Enabled,

            ImmutableArray<Outputs.SlotSiteConfigIpRestriction> ipRestrictions,

            string? javaContainer,

            string? javaContainerVersion,

            string? javaVersion,

            string? linuxFxVersion,

            bool? localMysqlEnabled,

            string? managedPipelineMode,

            string? minTlsVersion,

            string? phpVersion,

            string? pythonVersion,

            bool? remoteDebuggingEnabled,

            string? remoteDebuggingVersion,

            ImmutableArray<Outputs.SlotSiteConfigScmIpRestriction> scmIpRestrictions,

            string? scmType,

            bool? scmUseMainIpRestriction,

            bool? use32BitWorkerProcess,

            bool? websocketsEnabled,

            string? windowsFxVersion)
        {
            AlwaysOn = alwaysOn;
            AppCommandLine = appCommandLine;
            AutoSwapSlotName = autoSwapSlotName;
            Cors = cors;
            DefaultDocuments = defaultDocuments;
            DotnetFrameworkVersion = dotnetFrameworkVersion;
            FtpsState = ftpsState;
            HealthCheckPath = healthCheckPath;
            Http2Enabled = http2Enabled;
            IpRestrictions = ipRestrictions;
            JavaContainer = javaContainer;
            JavaContainerVersion = javaContainerVersion;
            JavaVersion = javaVersion;
            LinuxFxVersion = linuxFxVersion;
            LocalMysqlEnabled = localMysqlEnabled;
            ManagedPipelineMode = managedPipelineMode;
            MinTlsVersion = minTlsVersion;
            PhpVersion = phpVersion;
            PythonVersion = pythonVersion;
            RemoteDebuggingEnabled = remoteDebuggingEnabled;
            RemoteDebuggingVersion = remoteDebuggingVersion;
            ScmIpRestrictions = scmIpRestrictions;
            ScmType = scmType;
            ScmUseMainIpRestriction = scmUseMainIpRestriction;
            Use32BitWorkerProcess = use32BitWorkerProcess;
            WebsocketsEnabled = websocketsEnabled;
            WindowsFxVersion = windowsFxVersion;
        }
    }
}
