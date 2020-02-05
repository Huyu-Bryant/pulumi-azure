// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Manages a Node Pool within a Kubernetes Cluster
 * 
 * > **NOTE:** Multiple Node Pools are only supported when the Kubernetes Cluster is using Virtual Machine Scale Sets.
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/kubernetes_cluster_node_pool.html.markdown.
 */
export class KubernetesClusterNodePool extends pulumi.CustomResource {
    /**
     * Get an existing KubernetesClusterNodePool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: KubernetesClusterNodePoolState, opts?: pulumi.CustomResourceOptions): KubernetesClusterNodePool {
        return new KubernetesClusterNodePool(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure:containerservice/kubernetesClusterNodePool:KubernetesClusterNodePool';

    /**
     * Returns true if the given object is an instance of KubernetesClusterNodePool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is KubernetesClusterNodePool {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === KubernetesClusterNodePool.__pulumiType;
    }

    /**
     * A list of Availability Zones where the Nodes in this Node Pool should be created in.
     */
    public readonly availabilityZones!: pulumi.Output<string[] | undefined>;
    /**
     * Whether to enable [auto-scaler](https://docs.microsoft.com/en-us/azure/aks/cluster-autoscaler). Defaults to `false`.
     */
    public readonly enableAutoScaling!: pulumi.Output<boolean | undefined>;
    /**
     * Should each node have a Public IP Address? Defaults to `false`.
     */
    public readonly enableNodePublicIp!: pulumi.Output<boolean | undefined>;
    /**
     * The ID of the Kubernetes Cluster where this Node Pool should exist. Changing this forces a new resource to be created.
     */
    public readonly kubernetesClusterId!: pulumi.Output<string>;
    /**
     * The maximum number of nodes which should exist within this Node Pool. Valid values are between `1` and `100` and must be greater than or equal to `minCount`.
     */
    public readonly maxCount!: pulumi.Output<number | undefined>;
    /**
     * The maximum number of pods that can run on each agent. Changing this forces a new resource to be created.
     */
    public readonly maxPods!: pulumi.Output<number>;
    /**
     * The minimum number of nodes which should exist within this Node Pool. Valid values are between `1` and `100` and must be less than or equal to `maxCount`.
     */
    public readonly minCount!: pulumi.Output<number | undefined>;
    /**
     * The name of the Node Pool which should be created within the Kubernetes Cluster. Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The number of nodes which should exist within this Node Pool. Valid values are between `1` and `100`.
     */
    public readonly nodeCount!: pulumi.Output<number>;
    /**
     * A list of Kubernetes taints which should be applied to nodes in the agent pool (e.g `key=value:NoSchedule`).
     */
    public readonly nodeTaints!: pulumi.Output<string[] | undefined>;
    /**
     * The Agent Operating System disk size in GB. Changing this forces a new resource to be created.
     */
    public readonly osDiskSizeGb!: pulumi.Output<number>;
    /**
     * The Operating System which should be used for this Node Pool. Changing this forces a new resource to be created. Possible values are `Linux` and `Windows`. Defaults to `Linux`.
     */
    public readonly osType!: pulumi.Output<string | undefined>;
    /**
     * The SKU which should be used for the Virtual Machines used in this Node Pool. Changing this forces a new resource to be created.
     */
    public readonly vmSize!: pulumi.Output<string>;
    /**
     * The ID of the Subnet where this Node Pool should exist.
     */
    public readonly vnetSubnetId!: pulumi.Output<string | undefined>;

    /**
     * Create a KubernetesClusterNodePool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: KubernetesClusterNodePoolArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: KubernetesClusterNodePoolArgs | KubernetesClusterNodePoolState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as KubernetesClusterNodePoolState | undefined;
            inputs["availabilityZones"] = state ? state.availabilityZones : undefined;
            inputs["enableAutoScaling"] = state ? state.enableAutoScaling : undefined;
            inputs["enableNodePublicIp"] = state ? state.enableNodePublicIp : undefined;
            inputs["kubernetesClusterId"] = state ? state.kubernetesClusterId : undefined;
            inputs["maxCount"] = state ? state.maxCount : undefined;
            inputs["maxPods"] = state ? state.maxPods : undefined;
            inputs["minCount"] = state ? state.minCount : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["nodeCount"] = state ? state.nodeCount : undefined;
            inputs["nodeTaints"] = state ? state.nodeTaints : undefined;
            inputs["osDiskSizeGb"] = state ? state.osDiskSizeGb : undefined;
            inputs["osType"] = state ? state.osType : undefined;
            inputs["vmSize"] = state ? state.vmSize : undefined;
            inputs["vnetSubnetId"] = state ? state.vnetSubnetId : undefined;
        } else {
            const args = argsOrState as KubernetesClusterNodePoolArgs | undefined;
            if (!args || args.kubernetesClusterId === undefined) {
                throw new Error("Missing required property 'kubernetesClusterId'");
            }
            if (!args || args.vmSize === undefined) {
                throw new Error("Missing required property 'vmSize'");
            }
            inputs["availabilityZones"] = args ? args.availabilityZones : undefined;
            inputs["enableAutoScaling"] = args ? args.enableAutoScaling : undefined;
            inputs["enableNodePublicIp"] = args ? args.enableNodePublicIp : undefined;
            inputs["kubernetesClusterId"] = args ? args.kubernetesClusterId : undefined;
            inputs["maxCount"] = args ? args.maxCount : undefined;
            inputs["maxPods"] = args ? args.maxPods : undefined;
            inputs["minCount"] = args ? args.minCount : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["nodeCount"] = args ? args.nodeCount : undefined;
            inputs["nodeTaints"] = args ? args.nodeTaints : undefined;
            inputs["osDiskSizeGb"] = args ? args.osDiskSizeGb : undefined;
            inputs["osType"] = args ? args.osType : undefined;
            inputs["vmSize"] = args ? args.vmSize : undefined;
            inputs["vnetSubnetId"] = args ? args.vnetSubnetId : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(KubernetesClusterNodePool.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering KubernetesClusterNodePool resources.
 */
export interface KubernetesClusterNodePoolState {
    /**
     * A list of Availability Zones where the Nodes in this Node Pool should be created in.
     */
    readonly availabilityZones?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Whether to enable [auto-scaler](https://docs.microsoft.com/en-us/azure/aks/cluster-autoscaler). Defaults to `false`.
     */
    readonly enableAutoScaling?: pulumi.Input<boolean>;
    /**
     * Should each node have a Public IP Address? Defaults to `false`.
     */
    readonly enableNodePublicIp?: pulumi.Input<boolean>;
    /**
     * The ID of the Kubernetes Cluster where this Node Pool should exist. Changing this forces a new resource to be created.
     */
    readonly kubernetesClusterId?: pulumi.Input<string>;
    /**
     * The maximum number of nodes which should exist within this Node Pool. Valid values are between `1` and `100` and must be greater than or equal to `minCount`.
     */
    readonly maxCount?: pulumi.Input<number>;
    /**
     * The maximum number of pods that can run on each agent. Changing this forces a new resource to be created.
     */
    readonly maxPods?: pulumi.Input<number>;
    /**
     * The minimum number of nodes which should exist within this Node Pool. Valid values are between `1` and `100` and must be less than or equal to `maxCount`.
     */
    readonly minCount?: pulumi.Input<number>;
    /**
     * The name of the Node Pool which should be created within the Kubernetes Cluster. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The number of nodes which should exist within this Node Pool. Valid values are between `1` and `100`.
     */
    readonly nodeCount?: pulumi.Input<number>;
    /**
     * A list of Kubernetes taints which should be applied to nodes in the agent pool (e.g `key=value:NoSchedule`).
     */
    readonly nodeTaints?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Agent Operating System disk size in GB. Changing this forces a new resource to be created.
     */
    readonly osDiskSizeGb?: pulumi.Input<number>;
    /**
     * The Operating System which should be used for this Node Pool. Changing this forces a new resource to be created. Possible values are `Linux` and `Windows`. Defaults to `Linux`.
     */
    readonly osType?: pulumi.Input<string>;
    /**
     * The SKU which should be used for the Virtual Machines used in this Node Pool. Changing this forces a new resource to be created.
     */
    readonly vmSize?: pulumi.Input<string>;
    /**
     * The ID of the Subnet where this Node Pool should exist.
     */
    readonly vnetSubnetId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a KubernetesClusterNodePool resource.
 */
export interface KubernetesClusterNodePoolArgs {
    /**
     * A list of Availability Zones where the Nodes in this Node Pool should be created in.
     */
    readonly availabilityZones?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Whether to enable [auto-scaler](https://docs.microsoft.com/en-us/azure/aks/cluster-autoscaler). Defaults to `false`.
     */
    readonly enableAutoScaling?: pulumi.Input<boolean>;
    /**
     * Should each node have a Public IP Address? Defaults to `false`.
     */
    readonly enableNodePublicIp?: pulumi.Input<boolean>;
    /**
     * The ID of the Kubernetes Cluster where this Node Pool should exist. Changing this forces a new resource to be created.
     */
    readonly kubernetesClusterId: pulumi.Input<string>;
    /**
     * The maximum number of nodes which should exist within this Node Pool. Valid values are between `1` and `100` and must be greater than or equal to `minCount`.
     */
    readonly maxCount?: pulumi.Input<number>;
    /**
     * The maximum number of pods that can run on each agent. Changing this forces a new resource to be created.
     */
    readonly maxPods?: pulumi.Input<number>;
    /**
     * The minimum number of nodes which should exist within this Node Pool. Valid values are between `1` and `100` and must be less than or equal to `maxCount`.
     */
    readonly minCount?: pulumi.Input<number>;
    /**
     * The name of the Node Pool which should be created within the Kubernetes Cluster. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The number of nodes which should exist within this Node Pool. Valid values are between `1` and `100`.
     */
    readonly nodeCount?: pulumi.Input<number>;
    /**
     * A list of Kubernetes taints which should be applied to nodes in the agent pool (e.g `key=value:NoSchedule`).
     */
    readonly nodeTaints?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Agent Operating System disk size in GB. Changing this forces a new resource to be created.
     */
    readonly osDiskSizeGb?: pulumi.Input<number>;
    /**
     * The Operating System which should be used for this Node Pool. Changing this forces a new resource to be created. Possible values are `Linux` and `Windows`. Defaults to `Linux`.
     */
    readonly osType?: pulumi.Input<string>;
    /**
     * The SKU which should be used for the Virtual Machines used in this Node Pool. Changing this forces a new resource to be created.
     */
    readonly vmSize: pulumi.Input<string>;
    /**
     * The ID of the Subnet where this Node Pool should exist.
     */
    readonly vnetSubnetId?: pulumi.Input<string>;
}