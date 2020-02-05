// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

// nolint: lll
package mariadb

import (
	"context"
	"reflect"

	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

type ServerSku struct {
	Capacity int `pulumi:"capacity"`
	Family string `pulumi:"family"`
	// Specifies the name of the MariaDB Server. Changing this forces a new resource to be created.
	Name string `pulumi:"name"`
	Tier string `pulumi:"tier"`
}

type ServerSkuInput interface {
	pulumi.Input

	ToServerSkuOutput() ServerSkuOutput
	ToServerSkuOutputWithContext(context.Context) ServerSkuOutput
}

type ServerSkuArgs struct {
	Capacity pulumi.IntInput `pulumi:"capacity"`
	Family pulumi.StringInput `pulumi:"family"`
	// Specifies the name of the MariaDB Server. Changing this forces a new resource to be created.
	Name pulumi.StringInput `pulumi:"name"`
	Tier pulumi.StringInput `pulumi:"tier"`
}

func (ServerSkuArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*ServerSku)(nil)).Elem()
}

func (i ServerSkuArgs) ToServerSkuOutput() ServerSkuOutput {
	return i.ToServerSkuOutputWithContext(context.Background())
}

func (i ServerSkuArgs) ToServerSkuOutputWithContext(ctx context.Context) ServerSkuOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ServerSkuOutput)
}

func (i ServerSkuArgs) ToServerSkuPtrOutput() ServerSkuPtrOutput {
	return i.ToServerSkuPtrOutputWithContext(context.Background())
}

func (i ServerSkuArgs) ToServerSkuPtrOutputWithContext(ctx context.Context) ServerSkuPtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ServerSkuOutput).ToServerSkuPtrOutputWithContext(ctx)
}

type ServerSkuPtrInput interface {
	pulumi.Input

	ToServerSkuPtrOutput() ServerSkuPtrOutput
	ToServerSkuPtrOutputWithContext(context.Context) ServerSkuPtrOutput
}

type serverSkuPtrType ServerSkuArgs

func ServerSkuPtr(v *ServerSkuArgs) ServerSkuPtrInput {	return (*serverSkuPtrType)(v)
}

func (*serverSkuPtrType) ElementType() reflect.Type {
	return reflect.TypeOf((**ServerSku)(nil)).Elem()
}

func (i *serverSkuPtrType) ToServerSkuPtrOutput() ServerSkuPtrOutput {
	return i.ToServerSkuPtrOutputWithContext(context.Background())
}

func (i *serverSkuPtrType) ToServerSkuPtrOutputWithContext(ctx context.Context) ServerSkuPtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ServerSkuPtrOutput)
}

type ServerSkuOutput struct { *pulumi.OutputState }

func (ServerSkuOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ServerSku)(nil)).Elem()
}

func (o ServerSkuOutput) ToServerSkuOutput() ServerSkuOutput {
	return o
}

func (o ServerSkuOutput) ToServerSkuOutputWithContext(ctx context.Context) ServerSkuOutput {
	return o
}

func (o ServerSkuOutput) ToServerSkuPtrOutput() ServerSkuPtrOutput {
	return o.ToServerSkuPtrOutputWithContext(context.Background())
}

func (o ServerSkuOutput) ToServerSkuPtrOutputWithContext(ctx context.Context) ServerSkuPtrOutput {
	return o.ApplyT(func(v ServerSku) *ServerSku {
		return &v
	}).(ServerSkuPtrOutput)
}
func (o ServerSkuOutput) Capacity() pulumi.IntOutput {
	return o.ApplyT(func (v ServerSku) int { return v.Capacity }).(pulumi.IntOutput)
}

func (o ServerSkuOutput) Family() pulumi.StringOutput {
	return o.ApplyT(func (v ServerSku) string { return v.Family }).(pulumi.StringOutput)
}

// Specifies the name of the MariaDB Server. Changing this forces a new resource to be created.
func (o ServerSkuOutput) Name() pulumi.StringOutput {
	return o.ApplyT(func (v ServerSku) string { return v.Name }).(pulumi.StringOutput)
}

func (o ServerSkuOutput) Tier() pulumi.StringOutput {
	return o.ApplyT(func (v ServerSku) string { return v.Tier }).(pulumi.StringOutput)
}

type ServerSkuPtrOutput struct { *pulumi.OutputState}

func (ServerSkuPtrOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**ServerSku)(nil)).Elem()
}

func (o ServerSkuPtrOutput) ToServerSkuPtrOutput() ServerSkuPtrOutput {
	return o
}

func (o ServerSkuPtrOutput) ToServerSkuPtrOutputWithContext(ctx context.Context) ServerSkuPtrOutput {
	return o
}

func (o ServerSkuPtrOutput) Elem() ServerSkuOutput {
	return o.ApplyT(func (v *ServerSku) ServerSku { return *v }).(ServerSkuOutput)
}

func (o ServerSkuPtrOutput) Capacity() pulumi.IntOutput {
	return o.ApplyT(func (v ServerSku) int { return v.Capacity }).(pulumi.IntOutput)
}

func (o ServerSkuPtrOutput) Family() pulumi.StringOutput {
	return o.ApplyT(func (v ServerSku) string { return v.Family }).(pulumi.StringOutput)
}

// Specifies the name of the MariaDB Server. Changing this forces a new resource to be created.
func (o ServerSkuPtrOutput) Name() pulumi.StringOutput {
	return o.ApplyT(func (v ServerSku) string { return v.Name }).(pulumi.StringOutput)
}

func (o ServerSkuPtrOutput) Tier() pulumi.StringOutput {
	return o.ApplyT(func (v ServerSku) string { return v.Tier }).(pulumi.StringOutput)
}

type ServerStorageProfile struct {
	AutoGrow *string `pulumi:"autoGrow"`
	BackupRetentionDays *int `pulumi:"backupRetentionDays"`
	GeoRedundantBackup *string `pulumi:"geoRedundantBackup"`
	StorageMb int `pulumi:"storageMb"`
}

type ServerStorageProfileInput interface {
	pulumi.Input

	ToServerStorageProfileOutput() ServerStorageProfileOutput
	ToServerStorageProfileOutputWithContext(context.Context) ServerStorageProfileOutput
}

type ServerStorageProfileArgs struct {
	AutoGrow pulumi.StringPtrInput `pulumi:"autoGrow"`
	BackupRetentionDays pulumi.IntPtrInput `pulumi:"backupRetentionDays"`
	GeoRedundantBackup pulumi.StringPtrInput `pulumi:"geoRedundantBackup"`
	StorageMb pulumi.IntInput `pulumi:"storageMb"`
}

func (ServerStorageProfileArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*ServerStorageProfile)(nil)).Elem()
}

func (i ServerStorageProfileArgs) ToServerStorageProfileOutput() ServerStorageProfileOutput {
	return i.ToServerStorageProfileOutputWithContext(context.Background())
}

func (i ServerStorageProfileArgs) ToServerStorageProfileOutputWithContext(ctx context.Context) ServerStorageProfileOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ServerStorageProfileOutput)
}

func (i ServerStorageProfileArgs) ToServerStorageProfilePtrOutput() ServerStorageProfilePtrOutput {
	return i.ToServerStorageProfilePtrOutputWithContext(context.Background())
}

func (i ServerStorageProfileArgs) ToServerStorageProfilePtrOutputWithContext(ctx context.Context) ServerStorageProfilePtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ServerStorageProfileOutput).ToServerStorageProfilePtrOutputWithContext(ctx)
}

type ServerStorageProfilePtrInput interface {
	pulumi.Input

	ToServerStorageProfilePtrOutput() ServerStorageProfilePtrOutput
	ToServerStorageProfilePtrOutputWithContext(context.Context) ServerStorageProfilePtrOutput
}

type serverStorageProfilePtrType ServerStorageProfileArgs

func ServerStorageProfilePtr(v *ServerStorageProfileArgs) ServerStorageProfilePtrInput {	return (*serverStorageProfilePtrType)(v)
}

func (*serverStorageProfilePtrType) ElementType() reflect.Type {
	return reflect.TypeOf((**ServerStorageProfile)(nil)).Elem()
}

func (i *serverStorageProfilePtrType) ToServerStorageProfilePtrOutput() ServerStorageProfilePtrOutput {
	return i.ToServerStorageProfilePtrOutputWithContext(context.Background())
}

func (i *serverStorageProfilePtrType) ToServerStorageProfilePtrOutputWithContext(ctx context.Context) ServerStorageProfilePtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ServerStorageProfilePtrOutput)
}

type ServerStorageProfileOutput struct { *pulumi.OutputState }

func (ServerStorageProfileOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ServerStorageProfile)(nil)).Elem()
}

func (o ServerStorageProfileOutput) ToServerStorageProfileOutput() ServerStorageProfileOutput {
	return o
}

func (o ServerStorageProfileOutput) ToServerStorageProfileOutputWithContext(ctx context.Context) ServerStorageProfileOutput {
	return o
}

func (o ServerStorageProfileOutput) ToServerStorageProfilePtrOutput() ServerStorageProfilePtrOutput {
	return o.ToServerStorageProfilePtrOutputWithContext(context.Background())
}

func (o ServerStorageProfileOutput) ToServerStorageProfilePtrOutputWithContext(ctx context.Context) ServerStorageProfilePtrOutput {
	return o.ApplyT(func(v ServerStorageProfile) *ServerStorageProfile {
		return &v
	}).(ServerStorageProfilePtrOutput)
}
func (o ServerStorageProfileOutput) AutoGrow() pulumi.StringPtrOutput {
	return o.ApplyT(func (v ServerStorageProfile) *string { return v.AutoGrow }).(pulumi.StringPtrOutput)
}

func (o ServerStorageProfileOutput) BackupRetentionDays() pulumi.IntPtrOutput {
	return o.ApplyT(func (v ServerStorageProfile) *int { return v.BackupRetentionDays }).(pulumi.IntPtrOutput)
}

func (o ServerStorageProfileOutput) GeoRedundantBackup() pulumi.StringPtrOutput {
	return o.ApplyT(func (v ServerStorageProfile) *string { return v.GeoRedundantBackup }).(pulumi.StringPtrOutput)
}

func (o ServerStorageProfileOutput) StorageMb() pulumi.IntOutput {
	return o.ApplyT(func (v ServerStorageProfile) int { return v.StorageMb }).(pulumi.IntOutput)
}

type ServerStorageProfilePtrOutput struct { *pulumi.OutputState}

func (ServerStorageProfilePtrOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**ServerStorageProfile)(nil)).Elem()
}

func (o ServerStorageProfilePtrOutput) ToServerStorageProfilePtrOutput() ServerStorageProfilePtrOutput {
	return o
}

func (o ServerStorageProfilePtrOutput) ToServerStorageProfilePtrOutputWithContext(ctx context.Context) ServerStorageProfilePtrOutput {
	return o
}

func (o ServerStorageProfilePtrOutput) Elem() ServerStorageProfileOutput {
	return o.ApplyT(func (v *ServerStorageProfile) ServerStorageProfile { return *v }).(ServerStorageProfileOutput)
}

func (o ServerStorageProfilePtrOutput) AutoGrow() pulumi.StringPtrOutput {
	return o.ApplyT(func (v ServerStorageProfile) *string { return v.AutoGrow }).(pulumi.StringPtrOutput)
}

func (o ServerStorageProfilePtrOutput) BackupRetentionDays() pulumi.IntPtrOutput {
	return o.ApplyT(func (v ServerStorageProfile) *int { return v.BackupRetentionDays }).(pulumi.IntPtrOutput)
}

func (o ServerStorageProfilePtrOutput) GeoRedundantBackup() pulumi.StringPtrOutput {
	return o.ApplyT(func (v ServerStorageProfile) *string { return v.GeoRedundantBackup }).(pulumi.StringPtrOutput)
}

func (o ServerStorageProfilePtrOutput) StorageMb() pulumi.IntOutput {
	return o.ApplyT(func (v ServerStorageProfile) int { return v.StorageMb }).(pulumi.IntOutput)
}

type GetMariaDbServerStorageProfile struct {
	// Whether autogrow is enabled or disabled for the storage.
	AutoGrow string `pulumi:"autoGrow"`
	// Backup retention days for the server.
	BackupRetentionDays int `pulumi:"backupRetentionDays"`
	// Whether Geo-redundant is enabled or not for server backup.
	GeoRedundantBackup string `pulumi:"geoRedundantBackup"`
	// The max storage allowed for a server.
	StorageMb int `pulumi:"storageMb"`
}

type GetMariaDbServerStorageProfileInput interface {
	pulumi.Input

	ToGetMariaDbServerStorageProfileOutput() GetMariaDbServerStorageProfileOutput
	ToGetMariaDbServerStorageProfileOutputWithContext(context.Context) GetMariaDbServerStorageProfileOutput
}

type GetMariaDbServerStorageProfileArgs struct {
	// Whether autogrow is enabled or disabled for the storage.
	AutoGrow pulumi.StringInput `pulumi:"autoGrow"`
	// Backup retention days for the server.
	BackupRetentionDays pulumi.IntInput `pulumi:"backupRetentionDays"`
	// Whether Geo-redundant is enabled or not for server backup.
	GeoRedundantBackup pulumi.StringInput `pulumi:"geoRedundantBackup"`
	// The max storage allowed for a server.
	StorageMb pulumi.IntInput `pulumi:"storageMb"`
}

func (GetMariaDbServerStorageProfileArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*GetMariaDbServerStorageProfile)(nil)).Elem()
}

func (i GetMariaDbServerStorageProfileArgs) ToGetMariaDbServerStorageProfileOutput() GetMariaDbServerStorageProfileOutput {
	return i.ToGetMariaDbServerStorageProfileOutputWithContext(context.Background())
}

func (i GetMariaDbServerStorageProfileArgs) ToGetMariaDbServerStorageProfileOutputWithContext(ctx context.Context) GetMariaDbServerStorageProfileOutput {
	return pulumi.ToOutputWithContext(ctx, i).(GetMariaDbServerStorageProfileOutput)
}

type GetMariaDbServerStorageProfileArrayInput interface {
	pulumi.Input

	ToGetMariaDbServerStorageProfileArrayOutput() GetMariaDbServerStorageProfileArrayOutput
	ToGetMariaDbServerStorageProfileArrayOutputWithContext(context.Context) GetMariaDbServerStorageProfileArrayOutput
}

type GetMariaDbServerStorageProfileArray []GetMariaDbServerStorageProfileInput

func (GetMariaDbServerStorageProfileArray) ElementType() reflect.Type {
	return reflect.TypeOf((*[]GetMariaDbServerStorageProfile)(nil)).Elem()
}

func (i GetMariaDbServerStorageProfileArray) ToGetMariaDbServerStorageProfileArrayOutput() GetMariaDbServerStorageProfileArrayOutput {
	return i.ToGetMariaDbServerStorageProfileArrayOutputWithContext(context.Background())
}

func (i GetMariaDbServerStorageProfileArray) ToGetMariaDbServerStorageProfileArrayOutputWithContext(ctx context.Context) GetMariaDbServerStorageProfileArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(GetMariaDbServerStorageProfileArrayOutput)
}

type GetMariaDbServerStorageProfileOutput struct { *pulumi.OutputState }

func (GetMariaDbServerStorageProfileOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*GetMariaDbServerStorageProfile)(nil)).Elem()
}

func (o GetMariaDbServerStorageProfileOutput) ToGetMariaDbServerStorageProfileOutput() GetMariaDbServerStorageProfileOutput {
	return o
}

func (o GetMariaDbServerStorageProfileOutput) ToGetMariaDbServerStorageProfileOutputWithContext(ctx context.Context) GetMariaDbServerStorageProfileOutput {
	return o
}

// Whether autogrow is enabled or disabled for the storage.
func (o GetMariaDbServerStorageProfileOutput) AutoGrow() pulumi.StringOutput {
	return o.ApplyT(func (v GetMariaDbServerStorageProfile) string { return v.AutoGrow }).(pulumi.StringOutput)
}

// Backup retention days for the server.
func (o GetMariaDbServerStorageProfileOutput) BackupRetentionDays() pulumi.IntOutput {
	return o.ApplyT(func (v GetMariaDbServerStorageProfile) int { return v.BackupRetentionDays }).(pulumi.IntOutput)
}

// Whether Geo-redundant is enabled or not for server backup.
func (o GetMariaDbServerStorageProfileOutput) GeoRedundantBackup() pulumi.StringOutput {
	return o.ApplyT(func (v GetMariaDbServerStorageProfile) string { return v.GeoRedundantBackup }).(pulumi.StringOutput)
}

// The max storage allowed for a server.
func (o GetMariaDbServerStorageProfileOutput) StorageMb() pulumi.IntOutput {
	return o.ApplyT(func (v GetMariaDbServerStorageProfile) int { return v.StorageMb }).(pulumi.IntOutput)
}

type GetMariaDbServerStorageProfileArrayOutput struct { *pulumi.OutputState}

func (GetMariaDbServerStorageProfileArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]GetMariaDbServerStorageProfile)(nil)).Elem()
}

func (o GetMariaDbServerStorageProfileArrayOutput) ToGetMariaDbServerStorageProfileArrayOutput() GetMariaDbServerStorageProfileArrayOutput {
	return o
}

func (o GetMariaDbServerStorageProfileArrayOutput) ToGetMariaDbServerStorageProfileArrayOutputWithContext(ctx context.Context) GetMariaDbServerStorageProfileArrayOutput {
	return o
}

func (o GetMariaDbServerStorageProfileArrayOutput) Index(i pulumi.IntInput) GetMariaDbServerStorageProfileOutput {
	return pulumi.All(o, i).ApplyT(func (vs []interface{}) GetMariaDbServerStorageProfile {
		return vs[0].([]GetMariaDbServerStorageProfile)[vs[1].(int)]
	}).(GetMariaDbServerStorageProfileOutput)
}

func init() {
	pulumi.RegisterOutputType(ServerSkuOutput{})
	pulumi.RegisterOutputType(ServerSkuPtrOutput{})
	pulumi.RegisterOutputType(ServerStorageProfileOutput{})
	pulumi.RegisterOutputType(ServerStorageProfilePtrOutput{})
	pulumi.RegisterOutputType(GetMariaDbServerStorageProfileOutput{})
	pulumi.RegisterOutputType(GetMariaDbServerStorageProfileArrayOutput{})
}