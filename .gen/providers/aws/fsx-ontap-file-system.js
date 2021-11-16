"use strict";
// https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html
// generated from terraform resource schema
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.FsxOntapFileSystem = exports.FsxOntapFileSystemEndpoints = exports.FsxOntapFileSystemEndpointsManagement = exports.FsxOntapFileSystemEndpointsIntercluster = void 0;
var cdktf = require("cdktf");
var FsxOntapFileSystemEndpointsIntercluster = /** @class */ (function (_super) {
    __extends(FsxOntapFileSystemEndpointsIntercluster, _super);
    function FsxOntapFileSystemEndpointsIntercluster() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FsxOntapFileSystemEndpointsIntercluster.prototype, "dnsName", {
        // dns_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dns_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxOntapFileSystemEndpointsIntercluster.prototype, "ipAddresses", {
        // ip_addresses - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('ip_addresses');
        },
        enumerable: false,
        configurable: true
    });
    return FsxOntapFileSystemEndpointsIntercluster;
}(cdktf.ComplexComputedList));
exports.FsxOntapFileSystemEndpointsIntercluster = FsxOntapFileSystemEndpointsIntercluster;
var FsxOntapFileSystemEndpointsManagement = /** @class */ (function (_super) {
    __extends(FsxOntapFileSystemEndpointsManagement, _super);
    function FsxOntapFileSystemEndpointsManagement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FsxOntapFileSystemEndpointsManagement.prototype, "dnsName", {
        // dns_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dns_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxOntapFileSystemEndpointsManagement.prototype, "ipAddresses", {
        // ip_addresses - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('ip_addresses');
        },
        enumerable: false,
        configurable: true
    });
    return FsxOntapFileSystemEndpointsManagement;
}(cdktf.ComplexComputedList));
exports.FsxOntapFileSystemEndpointsManagement = FsxOntapFileSystemEndpointsManagement;
var FsxOntapFileSystemEndpoints = /** @class */ (function (_super) {
    __extends(FsxOntapFileSystemEndpoints, _super);
    function FsxOntapFileSystemEndpoints() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FsxOntapFileSystemEndpoints.prototype, "intercluster", {
        // intercluster - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('intercluster');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxOntapFileSystemEndpoints.prototype, "management", {
        // management - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('management');
        },
        enumerable: false,
        configurable: true
    });
    return FsxOntapFileSystemEndpoints;
}(cdktf.ComplexComputedList));
exports.FsxOntapFileSystemEndpoints = FsxOntapFileSystemEndpoints;
function fsxOntapFileSystemDiskIopsConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        iops: cdktf.numberToTerraform(struct.iops),
        mode: cdktf.stringToTerraform(struct.mode)
    };
}
function fsxOntapFileSystemTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        "delete": cdktf.stringToTerraform(struct["delete"]),
        update: cdktf.stringToTerraform(struct.update)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html aws_fsx_ontap_file_system}
*/
var FsxOntapFileSystem = /** @class */ (function (_super) {
    __extends(FsxOntapFileSystem, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html aws_fsx_ontap_file_system} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FsxOntapFileSystemConfig
    */
    function FsxOntapFileSystem(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_fsx_ontap_file_system',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._automaticBackupRetentionDays = config.automaticBackupRetentionDays;
        _this._dailyAutomaticBackupStartTime = config.dailyAutomaticBackupStartTime;
        _this._deploymentType = config.deploymentType;
        _this._endpointIpAddressRange = config.endpointIpAddressRange;
        _this._fsxAdminPassword = config.fsxAdminPassword;
        _this._kmsKeyId = config.kmsKeyId;
        _this._preferredSubnetId = config.preferredSubnetId;
        _this._routeTableIds = config.routeTableIds;
        _this._securityGroupIds = config.securityGroupIds;
        _this._storageCapacity = config.storageCapacity;
        _this._storageType = config.storageType;
        _this._subnetIds = config.subnetIds;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._throughputCapacity = config.throughputCapacity;
        _this._weeklyMaintenanceStartTime = config.weeklyMaintenanceStartTime;
        _this._diskIopsConfiguration = config.diskIopsConfiguration;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(FsxOntapFileSystem.prototype, "arn", {
        // ==========
        // ATTRIBUTES
        // ==========
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxOntapFileSystem.prototype, "automaticBackupRetentionDays", {
        get: function () {
            return this.getNumberAttribute('automatic_backup_retention_days');
        },
        set: function (value) {
            this._automaticBackupRetentionDays = value;
        },
        enumerable: false,
        configurable: true
    });
    FsxOntapFileSystem.prototype.resetAutomaticBackupRetentionDays = function () {
        this._automaticBackupRetentionDays = undefined;
    };
    Object.defineProperty(FsxOntapFileSystem.prototype, "automaticBackupRetentionDaysInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._automaticBackupRetentionDays;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxOntapFileSystem.prototype, "dailyAutomaticBackupStartTime", {
        get: function () {
            return this.getStringAttribute('daily_automatic_backup_start_time');
        },
        set: function (value) {
            this._dailyAutomaticBackupStartTime = value;
        },
        enumerable: false,
        configurable: true
    });
    FsxOntapFileSystem.prototype.resetDailyAutomaticBackupStartTime = function () {
        this._dailyAutomaticBackupStartTime = undefined;
    };
    Object.defineProperty(FsxOntapFileSystem.prototype, "dailyAutomaticBackupStartTimeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dailyAutomaticBackupStartTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxOntapFileSystem.prototype, "deploymentType", {
        get: function () {
            return this.getStringAttribute('deployment_type');
        },
        set: function (value) {
            this._deploymentType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxOntapFileSystem.prototype, "deploymentTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deploymentType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxOntapFileSystem.prototype, "dnsName", {
        // dns_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dns_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxOntapFileSystem.prototype, "endpointIpAddressRange", {
        get: function () {
            return this.getStringAttribute('endpoint_ip_address_range');
        },
        set: function (value) {
            this._endpointIpAddressRange = value;
        },
        enumerable: false,
        configurable: true
    });
    FsxOntapFileSystem.prototype.resetEndpointIpAddressRange = function () {
        this._endpointIpAddressRange = undefined;
    };
    Object.defineProperty(FsxOntapFileSystem.prototype, "endpointIpAddressRangeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._endpointIpAddressRange;
        },
        enumerable: false,
        configurable: true
    });
    // endpoints - computed: true, optional: false, required: false
    FsxOntapFileSystem.prototype.endpoints = function (index) {
        return new FsxOntapFileSystemEndpoints(this, 'endpoints', index);
    };
    Object.defineProperty(FsxOntapFileSystem.prototype, "fsxAdminPassword", {
        get: function () {
            return this.getStringAttribute('fsx_admin_password');
        },
        set: function (value) {
            this._fsxAdminPassword = value;
        },
        enumerable: false,
        configurable: true
    });
    FsxOntapFileSystem.prototype.resetFsxAdminPassword = function () {
        this._fsxAdminPassword = undefined;
    };
    Object.defineProperty(FsxOntapFileSystem.prototype, "fsxAdminPasswordInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fsxAdminPassword;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxOntapFileSystem.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxOntapFileSystem.prototype, "kmsKeyId", {
        get: function () {
            return this.getStringAttribute('kms_key_id');
        },
        set: function (value) {
            this._kmsKeyId = value;
        },
        enumerable: false,
        configurable: true
    });
    FsxOntapFileSystem.prototype.resetKmsKeyId = function () {
        this._kmsKeyId = undefined;
    };
    Object.defineProperty(FsxOntapFileSystem.prototype, "kmsKeyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kmsKeyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxOntapFileSystem.prototype, "networkInterfaceIds", {
        // network_interface_ids - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('network_interface_ids');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxOntapFileSystem.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxOntapFileSystem.prototype, "preferredSubnetId", {
        get: function () {
            return this.getStringAttribute('preferred_subnet_id');
        },
        set: function (value) {
            this._preferredSubnetId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxOntapFileSystem.prototype, "preferredSubnetIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._preferredSubnetId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxOntapFileSystem.prototype, "routeTableIds", {
        get: function () {
            return this.getListAttribute('route_table_ids');
        },
        set: function (value) {
            this._routeTableIds = value;
        },
        enumerable: false,
        configurable: true
    });
    FsxOntapFileSystem.prototype.resetRouteTableIds = function () {
        this._routeTableIds = undefined;
    };
    Object.defineProperty(FsxOntapFileSystem.prototype, "routeTableIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._routeTableIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxOntapFileSystem.prototype, "securityGroupIds", {
        get: function () {
            return this.getListAttribute('security_group_ids');
        },
        set: function (value) {
            this._securityGroupIds = value;
        },
        enumerable: false,
        configurable: true
    });
    FsxOntapFileSystem.prototype.resetSecurityGroupIds = function () {
        this._securityGroupIds = undefined;
    };
    Object.defineProperty(FsxOntapFileSystem.prototype, "securityGroupIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._securityGroupIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxOntapFileSystem.prototype, "storageCapacity", {
        get: function () {
            return this.getNumberAttribute('storage_capacity');
        },
        set: function (value) {
            this._storageCapacity = value;
        },
        enumerable: false,
        configurable: true
    });
    FsxOntapFileSystem.prototype.resetStorageCapacity = function () {
        this._storageCapacity = undefined;
    };
    Object.defineProperty(FsxOntapFileSystem.prototype, "storageCapacityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._storageCapacity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxOntapFileSystem.prototype, "storageType", {
        get: function () {
            return this.getStringAttribute('storage_type');
        },
        set: function (value) {
            this._storageType = value;
        },
        enumerable: false,
        configurable: true
    });
    FsxOntapFileSystem.prototype.resetStorageType = function () {
        this._storageType = undefined;
    };
    Object.defineProperty(FsxOntapFileSystem.prototype, "storageTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._storageType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxOntapFileSystem.prototype, "subnetIds", {
        get: function () {
            return this.getListAttribute('subnet_ids');
        },
        set: function (value) {
            this._subnetIds = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxOntapFileSystem.prototype, "subnetIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subnetIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxOntapFileSystem.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    FsxOntapFileSystem.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(FsxOntapFileSystem.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxOntapFileSystem.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    FsxOntapFileSystem.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(FsxOntapFileSystem.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxOntapFileSystem.prototype, "throughputCapacity", {
        get: function () {
            return this.getNumberAttribute('throughput_capacity');
        },
        set: function (value) {
            this._throughputCapacity = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxOntapFileSystem.prototype, "throughputCapacityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._throughputCapacity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxOntapFileSystem.prototype, "vpcId", {
        // vpc_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxOntapFileSystem.prototype, "weeklyMaintenanceStartTime", {
        get: function () {
            return this.getStringAttribute('weekly_maintenance_start_time');
        },
        set: function (value) {
            this._weeklyMaintenanceStartTime = value;
        },
        enumerable: false,
        configurable: true
    });
    FsxOntapFileSystem.prototype.resetWeeklyMaintenanceStartTime = function () {
        this._weeklyMaintenanceStartTime = undefined;
    };
    Object.defineProperty(FsxOntapFileSystem.prototype, "weeklyMaintenanceStartTimeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._weeklyMaintenanceStartTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxOntapFileSystem.prototype, "diskIopsConfiguration", {
        get: function () {
            return this.interpolationForAttribute('disk_iops_configuration');
        },
        set: function (value) {
            this._diskIopsConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    FsxOntapFileSystem.prototype.resetDiskIopsConfiguration = function () {
        this._diskIopsConfiguration = undefined;
    };
    Object.defineProperty(FsxOntapFileSystem.prototype, "diskIopsConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._diskIopsConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxOntapFileSystem.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    FsxOntapFileSystem.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(FsxOntapFileSystem.prototype, "timeoutsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeouts;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    FsxOntapFileSystem.prototype.synthesizeAttributes = function () {
        return {
            automatic_backup_retention_days: cdktf.numberToTerraform(this._automaticBackupRetentionDays),
            daily_automatic_backup_start_time: cdktf.stringToTerraform(this._dailyAutomaticBackupStartTime),
            deployment_type: cdktf.stringToTerraform(this._deploymentType),
            endpoint_ip_address_range: cdktf.stringToTerraform(this._endpointIpAddressRange),
            fsx_admin_password: cdktf.stringToTerraform(this._fsxAdminPassword),
            kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
            preferred_subnet_id: cdktf.stringToTerraform(this._preferredSubnetId),
            route_table_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._routeTableIds),
            security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupIds),
            storage_capacity: cdktf.numberToTerraform(this._storageCapacity),
            storage_type: cdktf.stringToTerraform(this._storageType),
            subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            throughput_capacity: cdktf.numberToTerraform(this._throughputCapacity),
            weekly_maintenance_start_time: cdktf.stringToTerraform(this._weeklyMaintenanceStartTime),
            disk_iops_configuration: cdktf.listMapper(fsxOntapFileSystemDiskIopsConfigurationToTerraform)(this._diskIopsConfiguration),
            timeouts: fsxOntapFileSystemTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    FsxOntapFileSystem.tfResourceType = "aws_fsx_ontap_file_system";
    return FsxOntapFileSystem;
}(cdktf.TerraformResource));
exports.FsxOntapFileSystem = FsxOntapFileSystem;
