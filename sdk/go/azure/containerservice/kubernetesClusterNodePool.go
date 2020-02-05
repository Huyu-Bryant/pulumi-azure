// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

// nolint: lll
package containerservice

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manages a Node Pool within a Kubernetes Cluster
// 
// > **NOTE:** Multiple Node Pools are only supported when the Kubernetes Cluster is using Virtual Machine Scale Sets.
// 
// > This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/kubernetes_cluster_node_pool.html.markdown.
type KubernetesClusterNodePool struct {
	pulumi.CustomResourceState

	// A list of Availability Zones where the Nodes in this Node Pool should be created in.
	AvailabilityZones pulumi.StringArrayOutput `pulumi:"availabilityZones"`
	// Whether to enable [auto-scaler](https://docs.microsoft.com/en-us/azure/aks/cluster-autoscaler). Defaults to `false`.
	EnableAutoScaling pulumi.BoolPtrOutput `pulumi:"enableAutoScaling"`
	// Should each node have a Public IP Address? Defaults to `false`.
	EnableNodePublicIp pulumi.BoolPtrOutput `pulumi:"enableNodePublicIp"`
	// The ID of the Kubernetes Cluster where this Node Pool should exist. Changing this forces a new resource to be created.
	KubernetesClusterId pulumi.StringOutput `pulumi:"kubernetesClusterId"`
	// The maximum number of nodes which should exist within this Node Pool. Valid values are between `1` and `100` and must be greater than or equal to `minCount`.
	MaxCount pulumi.IntPtrOutput `pulumi:"maxCount"`
	// The maximum number of pods that can run on each agent. Changing this forces a new resource to be created.
	MaxPods pulumi.IntOutput `pulumi:"maxPods"`
	// The minimum number of nodes which should exist within this Node Pool. Valid values are between `1` and `100` and must be less than or equal to `maxCount`.
	MinCount pulumi.IntPtrOutput `pulumi:"minCount"`
	// The name of the Node Pool which should be created within the Kubernetes Cluster. Changing this forces a new resource to be created.
	Name pulumi.StringOutput `pulumi:"name"`
	// The number of nodes which should exist within this Node Pool. Valid values are between `1` and `100`.
	NodeCount pulumi.IntOutput `pulumi:"nodeCount"`
	// A list of Kubernetes taints which should be applied to nodes in the agent pool (e.g `key=value:NoSchedule`).
	NodeTaints pulumi.StringArrayOutput `pulumi:"nodeTaints"`
	// The Agent Operating System disk size in GB. Changing this forces a new resource to be created.
	OsDiskSizeGb pulumi.IntOutput `pulumi:"osDiskSizeGb"`
	// The Operating System which should be used for this Node Pool. Changing this forces a new resource to be created. Possible values are `Linux` and `Windows`. Defaults to `Linux`.
	OsType pulumi.StringPtrOutput `pulumi:"osType"`
	// The SKU which should be used for the Virtual Machines used in this Node Pool. Changing this forces a new resource to be created.
	VmSize pulumi.StringOutput `pulumi:"vmSize"`
	// The ID of the Subnet where this Node Pool should exist.
	VnetSubnetId pulumi.StringPtrOutput `pulumi:"vnetSubnetId"`
}

// NewKubernetesClusterNodePool registers a new resource with the given unique name, arguments, and options.
func NewKubernetesClusterNodePool(ctx *pulumi.Context,
	name string, args *KubernetesClusterNodePoolArgs, opts ...pulumi.ResourceOption) (*KubernetesClusterNodePool, error) {
	if args == nil || args.KubernetesClusterId == nil {
		return nil, errors.New("missing required argument 'KubernetesClusterId'")
	}
	if args == nil || args.VmSize == nil {
		return nil, errors.New("missing required argument 'VmSize'")
	}
	if args == nil {
		args = &KubernetesClusterNodePoolArgs{}
	}
	var resource KubernetesClusterNodePool
	err := ctx.RegisterResource("azure:containerservice/kubernetesClusterNodePool:KubernetesClusterNodePool", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetKubernetesClusterNodePool gets an existing KubernetesClusterNodePool resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetKubernetesClusterNodePool(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *KubernetesClusterNodePoolState, opts ...pulumi.ResourceOption) (*KubernetesClusterNodePool, error) {
	var resource KubernetesClusterNodePool
	err := ctx.ReadResource("azure:containerservice/kubernetesClusterNodePool:KubernetesClusterNodePool", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering KubernetesClusterNodePool resources.
type kubernetesClusterNodePoolState struct {
	// A list of Availability Zones where the Nodes in this Node Pool should be created in.
	AvailabilityZones []string `pulumi:"availabilityZones"`
	// Whether to enable [auto-scaler](https://docs.microsoft.com/en-us/azure/aks/cluster-autoscaler). Defaults to `false`.
	EnableAutoScaling *bool `pulumi:"enableAutoScaling"`
	// Should each node have a Public IP Address? Defaults to `false`.
	EnableNodePublicIp *bool `pulumi:"enableNodePublicIp"`
	// The ID of the Kubernetes Cluster where this Node Pool should exist. Changing this forces a new resource to be created.
	KubernetesClusterId *string `pulumi:"kubernetesClusterId"`
	// The maximum number of nodes which should exist within this Node Pool. Valid values are between `1` and `100` and must be greater than or equal to `minCount`.
	MaxCount *int `pulumi:"maxCount"`
	// The maximum number of pods that can run on each agent. Changing this forces a new resource to be created.
	MaxPods *int `pulumi:"maxPods"`
	// The minimum number of nodes which should exist within this Node Pool. Valid values are between `1` and `100` and must be less than or equal to `maxCount`.
	MinCount *int `pulumi:"minCount"`
	// The name of the Node Pool which should be created within the Kubernetes Cluster. Changing this forces a new resource to be created.
	Name *string `pulumi:"name"`
	// The number of nodes which should exist within this Node Pool. Valid values are between `1` and `100`.
	NodeCount *int `pulumi:"nodeCount"`
	// A list of Kubernetes taints which should be applied to nodes in the agent pool (e.g `key=value:NoSchedule`).
	NodeTaints []string `pulumi:"nodeTaints"`
	// The Agent Operating System disk size in GB. Changing this forces a new resource to be created.
	OsDiskSizeGb *int `pulumi:"osDiskSizeGb"`
	// The Operating System which should be used for this Node Pool. Changing this forces a new resource to be created. Possible values are `Linux` and `Windows`. Defaults to `Linux`.
	OsType *string `pulumi:"osType"`
	// The SKU which should be used for the Virtual Machines used in this Node Pool. Changing this forces a new resource to be created.
	VmSize *string `pulumi:"vmSize"`
	// The ID of the Subnet where this Node Pool should exist.
	VnetSubnetId *string `pulumi:"vnetSubnetId"`
}

type KubernetesClusterNodePoolState struct {
	// A list of Availability Zones where the Nodes in this Node Pool should be created in.
	AvailabilityZones pulumi.StringArrayInput
	// Whether to enable [auto-scaler](https://docs.microsoft.com/en-us/azure/aks/cluster-autoscaler). Defaults to `false`.
	EnableAutoScaling pulumi.BoolPtrInput
	// Should each node have a Public IP Address? Defaults to `false`.
	EnableNodePublicIp pulumi.BoolPtrInput
	// The ID of the Kubernetes Cluster where this Node Pool should exist. Changing this forces a new resource to be created.
	KubernetesClusterId pulumi.StringPtrInput
	// The maximum number of nodes which should exist within this Node Pool. Valid values are between `1` and `100` and must be greater than or equal to `minCount`.
	MaxCount pulumi.IntPtrInput
	// The maximum number of pods that can run on each agent. Changing this forces a new resource to be created.
	MaxPods pulumi.IntPtrInput
	// The minimum number of nodes which should exist within this Node Pool. Valid values are between `1` and `100` and must be less than or equal to `maxCount`.
	MinCount pulumi.IntPtrInput
	// The name of the Node Pool which should be created within the Kubernetes Cluster. Changing this forces a new resource to be created.
	Name pulumi.StringPtrInput
	// The number of nodes which should exist within this Node Pool. Valid values are between `1` and `100`.
	NodeCount pulumi.IntPtrInput
	// A list of Kubernetes taints which should be applied to nodes in the agent pool (e.g `key=value:NoSchedule`).
	NodeTaints pulumi.StringArrayInput
	// The Agent Operating System disk size in GB. Changing this forces a new resource to be created.
	OsDiskSizeGb pulumi.IntPtrInput
	// The Operating System which should be used for this Node Pool. Changing this forces a new resource to be created. Possible values are `Linux` and `Windows`. Defaults to `Linux`.
	OsType pulumi.StringPtrInput
	// The SKU which should be used for the Virtual Machines used in this Node Pool. Changing this forces a new resource to be created.
	VmSize pulumi.StringPtrInput
	// The ID of the Subnet where this Node Pool should exist.
	VnetSubnetId pulumi.StringPtrInput
}

func (KubernetesClusterNodePoolState) ElementType() reflect.Type {
	return reflect.TypeOf((*kubernetesClusterNodePoolState)(nil)).Elem()
}

type kubernetesClusterNodePoolArgs struct {
	// A list of Availability Zones where the Nodes in this Node Pool should be created in.
	AvailabilityZones []string `pulumi:"availabilityZones"`
	// Whether to enable [auto-scaler](https://docs.microsoft.com/en-us/azure/aks/cluster-autoscaler). Defaults to `false`.
	EnableAutoScaling *bool `pulumi:"enableAutoScaling"`
	// Should each node have a Public IP Address? Defaults to `false`.
	EnableNodePublicIp *bool `pulumi:"enableNodePublicIp"`
	// The ID of the Kubernetes Cluster where this Node Pool should exist. Changing this forces a new resource to be created.
	KubernetesClusterId string `pulumi:"kubernetesClusterId"`
	// The maximum number of nodes which should exist within this Node Pool. Valid values are between `1` and `100` and must be greater than or equal to `minCount`.
	MaxCount *int `pulumi:"maxCount"`
	// The maximum number of pods that can run on each agent. Changing this forces a new resource to be created.
	MaxPods *int `pulumi:"maxPods"`
	// The minimum number of nodes which should exist within this Node Pool. Valid values are between `1` and `100` and must be less than or equal to `maxCount`.
	MinCount *int `pulumi:"minCount"`
	// The name of the Node Pool which should be created within the Kubernetes Cluster. Changing this forces a new resource to be created.
	Name *string `pulumi:"name"`
	// The number of nodes which should exist within this Node Pool. Valid values are between `1` and `100`.
	NodeCount *int `pulumi:"nodeCount"`
	// A list of Kubernetes taints which should be applied to nodes in the agent pool (e.g `key=value:NoSchedule`).
	NodeTaints []string `pulumi:"nodeTaints"`
	// The Agent Operating System disk size in GB. Changing this forces a new resource to be created.
	OsDiskSizeGb *int `pulumi:"osDiskSizeGb"`
	// The Operating System which should be used for this Node Pool. Changing this forces a new resource to be created. Possible values are `Linux` and `Windows`. Defaults to `Linux`.
	OsType *string `pulumi:"osType"`
	// The SKU which should be used for the Virtual Machines used in this Node Pool. Changing this forces a new resource to be created.
	VmSize string `pulumi:"vmSize"`
	// The ID of the Subnet where this Node Pool should exist.
	VnetSubnetId *string `pulumi:"vnetSubnetId"`
}

// The set of arguments for constructing a KubernetesClusterNodePool resource.
type KubernetesClusterNodePoolArgs struct {
	// A list of Availability Zones where the Nodes in this Node Pool should be created in.
	AvailabilityZones pulumi.StringArrayInput
	// Whether to enable [auto-scaler](https://docs.microsoft.com/en-us/azure/aks/cluster-autoscaler). Defaults to `false`.
	EnableAutoScaling pulumi.BoolPtrInput
	// Should each node have a Public IP Address? Defaults to `false`.
	EnableNodePublicIp pulumi.BoolPtrInput
	// The ID of the Kubernetes Cluster where this Node Pool should exist. Changing this forces a new resource to be created.
	KubernetesClusterId pulumi.StringInput
	// The maximum number of nodes which should exist within this Node Pool. Valid values are between `1` and `100` and must be greater than or equal to `minCount`.
	MaxCount pulumi.IntPtrInput
	// The maximum number of pods that can run on each agent. Changing this forces a new resource to be created.
	MaxPods pulumi.IntPtrInput
	// The minimum number of nodes which should exist within this Node Pool. Valid values are between `1` and `100` and must be less than or equal to `maxCount`.
	MinCount pulumi.IntPtrInput
	// The name of the Node Pool which should be created within the Kubernetes Cluster. Changing this forces a new resource to be created.
	Name pulumi.StringPtrInput
	// The number of nodes which should exist within this Node Pool. Valid values are between `1` and `100`.
	NodeCount pulumi.IntPtrInput
	// A list of Kubernetes taints which should be applied to nodes in the agent pool (e.g `key=value:NoSchedule`).
	NodeTaints pulumi.StringArrayInput
	// The Agent Operating System disk size in GB. Changing this forces a new resource to be created.
	OsDiskSizeGb pulumi.IntPtrInput
	// The Operating System which should be used for this Node Pool. Changing this forces a new resource to be created. Possible values are `Linux` and `Windows`. Defaults to `Linux`.
	OsType pulumi.StringPtrInput
	// The SKU which should be used for the Virtual Machines used in this Node Pool. Changing this forces a new resource to be created.
	VmSize pulumi.StringInput
	// The ID of the Subnet where this Node Pool should exist.
	VnetSubnetId pulumi.StringPtrInput
}

func (KubernetesClusterNodePoolArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*kubernetesClusterNodePoolArgs)(nil)).Elem()
}
