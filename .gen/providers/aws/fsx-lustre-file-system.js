"use strict";
// https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html
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
exports.FsxLustreFileSystem = void 0;
var cdktf = require("cdktf");
function fsxLustreFileSystemTimeoutsToTerraform(struct) {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html aws_fsx_lustre_file_system}
*/
var FsxLustreFileSystem = /** @class */ (function (_super) {
    __extends(FsxLustreFileSystem, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html aws_fsx_lustre_file_system} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FsxLustreFileSystemConfig
    */
    function FsxLustreFileSystem(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_fsx_lustre_file_system',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._autoImportPolicy = config.autoImportPolicy;
        _this._automaticBackupRetentionDays = config.automaticBackupRetentionDays;
        _this._backupId = config.backupId;
        _this._copyTagsToBackups = config.copyTagsToBackups;
        _this._dailyAutomaticBackupStartTime = config.dailyAutomaticBackupStartTime;
        _this._dataCompressionType = config.dataCompressionType;
        _this._deploymentType = config.deploymentType;
        _this._driveCacheType = config.driveCacheType;
        _this._exportPath = config.exportPath;
        _this._importPath = config.importPath;
        _this._importedFileChunkSize = config.importedFileChunkSize;
        _this._kmsKeyId = config.kmsKeyId;
        _this._perUnitStorageThroughput = config.perUnitStorageThroughput;
        _this._securityGroupIds = config.securityGroupIds;
        _this._storageCapacity = config.storageCapacity;
        _this._storageType = config.storageType;
        _this._subnetIds = config.subnetIds;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._weeklyMaintenanceStartTime = config.weeklyMaintenanceStartTime;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(FsxLustreFileSystem.prototype, "arn", {
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
    Object.defineProperty(FsxLustreFileSystem.prototype, "autoImportPolicy", {
        get: function () {
            return this.getStringAttribute('auto_import_policy');
        },
        set: function (value) {
            this._autoImportPolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    FsxLustreFileSystem.prototype.resetAutoImportPolicy = function () {
        this._autoImportPolicy = undefined;
    };
    Object.defineProperty(FsxLustreFileSystem.prototype, "autoImportPolicyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoImportPolicy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxLustreFileSystem.prototype, "automaticBackupRetentionDays", {
        get: function () {
            return this.getNumberAttribute('automatic_backup_retention_days');
        },
        set: function (value) {
            this._automaticBackupRetentionDays = value;
        },
        enumerable: false,
        configurable: true
    });
    FsxLustreFileSystem.prototype.resetAutomaticBackupRetentionDays = function () {
        this._automaticBackupRetentionDays = undefined;
    };
    Object.defineProperty(FsxLustreFileSystem.prototype, "automaticBackupRetentionDaysInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._automaticBackupRetentionDays;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxLustreFileSystem.prototype, "backupId", {
        get: function () {
            return this.getStringAttribute('backup_id');
        },
        set: function (value) {
            this._backupId = value;
        },
        enumerable: false,
        configurable: true
    });
    FsxLustreFileSystem.prototype.resetBackupId = function () {
        this._backupId = undefined;
    };
    Object.defineProperty(FsxLustreFileSystem.prototype, "backupIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._backupId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxLustreFileSystem.prototype, "copyTagsToBackups", {
        get: function () {
            return this.getBooleanAttribute('copy_tags_to_backups');
        },
        set: function (value) {
            this._copyTagsToBackups = value;
        },
        enumerable: false,
        configurable: true
    });
    FsxLustreFileSystem.prototype.resetCopyTagsToBackups = function () {
        this._copyTagsToBackups = undefined;
    };
    Object.defineProperty(FsxLustreFileSystem.prototype, "copyTagsToBackupsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._copyTagsToBackups;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxLustreFileSystem.prototype, "dailyAutomaticBackupStartTime", {
        get: function () {
            return this.getStringAttribute('daily_automatic_backup_start_time');
        },
        set: function (value) {
            this._dailyAutomaticBackupStartTime = value;
        },
        enumerable: false,
        configurable: true
    });
    FsxLustreFileSystem.prototype.resetDailyAutomaticBackupStartTime = function () {
        this._dailyAutomaticBackupStartTime = undefined;
    };
    Object.defineProperty(FsxLustreFileSystem.prototype, "dailyAutomaticBackupStartTimeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dailyAutomaticBackupStartTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxLustreFileSystem.prototype, "dataCompressionType", {
        get: function () {
            return this.getStringAttribute('data_compression_type');
        },
        set: function (value) {
            this._dataCompressionType = value;
        },
        enumerable: false,
        configurable: true
    });
    FsxLustreFileSystem.prototype.resetDataCompressionType = function () {
        this._dataCompressionType = undefined;
    };
    Object.defineProperty(FsxLustreFileSystem.prototype, "dataCompressionTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dataCompressionType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxLustreFileSystem.prototype, "deploymentType", {
        get: function () {
            return this.getStringAttribute('deployment_type');
        },
        set: function (value) {
            this._deploymentType = value;
        },
        enumerable: false,
        configurable: true
    });
    FsxLustreFileSystem.prototype.resetDeploymentType = function () {
        this._deploymentType = undefined;
    };
    Object.defineProperty(FsxLustreFileSystem.prototype, "deploymentTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deploymentType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxLustreFileSystem.prototype, "dnsName", {
        // dns_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dns_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxLustreFileSystem.prototype, "driveCacheType", {
        get: function () {
            return this.getStringAttribute('drive_cache_type');
        },
        set: function (value) {
            this._driveCacheType = value;
        },
        enumerable: false,
        configurable: true
    });
    FsxLustreFileSystem.prototype.resetDriveCacheType = function () {
        this._driveCacheType = undefined;
    };
    Object.defineProperty(FsxLustreFileSystem.prototype, "driveCacheTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._driveCacheType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxLustreFileSystem.prototype, "exportPath", {
        get: function () {
            return this.getStringAttribute('export_path');
        },
        set: function (value) {
            this._exportPath = value;
        },
        enumerable: false,
        configurable: true
    });
    FsxLustreFileSystem.prototype.resetExportPath = function () {
        this._exportPath = undefined;
    };
    Object.defineProperty(FsxLustreFileSystem.prototype, "exportPathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._exportPath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxLustreFileSystem.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxLustreFileSystem.prototype, "importPath", {
        get: function () {
            return this.getStringAttribute('import_path');
        },
        set: function (value) {
            this._importPath = value;
        },
        enumerable: false,
        configurable: true
    });
    FsxLustreFileSystem.prototype.resetImportPath = function () {
        this._importPath = undefined;
    };
    Object.defineProperty(FsxLustreFileSystem.prototype, "importPathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._importPath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxLustreFileSystem.prototype, "importedFileChunkSize", {
        get: function () {
            return this.getNumberAttribute('imported_file_chunk_size');
        },
        set: function (value) {
            this._importedFileChunkSize = value;
        },
        enumerable: false,
        configurable: true
    });
    FsxLustreFileSystem.prototype.resetImportedFileChunkSize = function () {
        this._importedFileChunkSize = undefined;
    };
    Object.defineProperty(FsxLustreFileSystem.prototype, "importedFileChunkSizeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._importedFileChunkSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxLustreFileSystem.prototype, "kmsKeyId", {
        get: function () {
            return this.getStringAttribute('kms_key_id');
        },
        set: function (value) {
            this._kmsKeyId = value;
        },
        enumerable: false,
        configurable: true
    });
    FsxLustreFileSystem.prototype.resetKmsKeyId = function () {
        this._kmsKeyId = undefined;
    };
    Object.defineProperty(FsxLustreFileSystem.prototype, "kmsKeyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kmsKeyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxLustreFileSystem.prototype, "mountName", {
        // mount_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('mount_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxLustreFileSystem.prototype, "networkInterfaceIds", {
        // network_interface_ids - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('network_interface_ids');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxLustreFileSystem.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxLustreFileSystem.prototype, "perUnitStorageThroughput", {
        get: function () {
            return this.getNumberAttribute('per_unit_storage_throughput');
        },
        set: function (value) {
            this._perUnitStorageThroughput = value;
        },
        enumerable: false,
        configurable: true
    });
    FsxLustreFileSystem.prototype.resetPerUnitStorageThroughput = function () {
        this._perUnitStorageThroughput = undefined;
    };
    Object.defineProperty(FsxLustreFileSystem.prototype, "perUnitStorageThroughputInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._perUnitStorageThroughput;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxLustreFileSystem.prototype, "securityGroupIds", {
        get: function () {
            return this.getListAttribute('security_group_ids');
        },
        set: function (value) {
            this._securityGroupIds = value;
        },
        enumerable: false,
        configurable: true
    });
    FsxLustreFileSystem.prototype.resetSecurityGroupIds = function () {
        this._securityGroupIds = undefined;
    };
    Object.defineProperty(FsxLustreFileSystem.prototype, "securityGroupIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._securityGroupIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxLustreFileSystem.prototype, "storageCapacity", {
        get: function () {
            return this.getNumberAttribute('storage_capacity');
        },
        set: function (value) {
            this._storageCapacity = value;
        },
        enumerable: false,
        configurable: true
    });
    FsxLustreFileSystem.prototype.resetStorageCapacity = function () {
        this._storageCapacity = undefined;
    };
    Object.defineProperty(FsxLustreFileSystem.prototype, "storageCapacityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._storageCapacity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxLustreFileSystem.prototype, "storageType", {
        get: function () {
            return this.getStringAttribute('storage_type');
        },
        set: function (value) {
            this._storageType = value;
        },
        enumerable: false,
        configurable: true
    });
    FsxLustreFileSystem.prototype.resetStorageType = function () {
        this._storageType = undefined;
    };
    Object.defineProperty(FsxLustreFileSystem.prototype, "storageTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._storageType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxLustreFileSystem.prototype, "subnetIds", {
        get: function () {
            return this.getListAttribute('subnet_ids');
        },
        set: function (value) {
            this._subnetIds = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxLustreFileSystem.prototype, "subnetIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subnetIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxLustreFileSystem.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    FsxLustreFileSystem.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(FsxLustreFileSystem.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxLustreFileSystem.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    FsxLustreFileSystem.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(FsxLustreFileSystem.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxLustreFileSystem.prototype, "vpcId", {
        // vpc_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxLustreFileSystem.prototype, "weeklyMaintenanceStartTime", {
        get: function () {
            return this.getStringAttribute('weekly_maintenance_start_time');
        },
        set: function (value) {
            this._weeklyMaintenanceStartTime = value;
        },
        enumerable: false,
        configurable: true
    });
    FsxLustreFileSystem.prototype.resetWeeklyMaintenanceStartTime = function () {
        this._weeklyMaintenanceStartTime = undefined;
    };
    Object.defineProperty(FsxLustreFileSystem.prototype, "weeklyMaintenanceStartTimeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._weeklyMaintenanceStartTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxLustreFileSystem.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    FsxLustreFileSystem.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(FsxLustreFileSystem.prototype, "timeoutsInput", {
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
    FsxLustreFileSystem.prototype.synthesizeAttributes = function () {
        return {
            auto_import_policy: cdktf.stringToTerraform(this._autoImportPolicy),
            automatic_backup_retention_days: cdktf.numberToTerraform(this._automaticBackupRetentionDays),
            backup_id: cdktf.stringToTerraform(this._backupId),
            copy_tags_to_backups: cdktf.booleanToTerraform(this._copyTagsToBackups),
            daily_automatic_backup_start_time: cdktf.stringToTerraform(this._dailyAutomaticBackupStartTime),
            data_compression_type: cdktf.stringToTerraform(this._dataCompressionType),
            deployment_type: cdktf.stringToTerraform(this._deploymentType),
            drive_cache_type: cdktf.stringToTerraform(this._driveCacheType),
            export_path: cdktf.stringToTerraform(this._exportPath),
            import_path: cdktf.stringToTerraform(this._importPath),
            imported_file_chunk_size: cdktf.numberToTerraform(this._importedFileChunkSize),
            kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
            per_unit_storage_throughput: cdktf.numberToTerraform(this._perUnitStorageThroughput),
            security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupIds),
            storage_capacity: cdktf.numberToTerraform(this._storageCapacity),
            storage_type: cdktf.stringToTerraform(this._storageType),
            subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            weekly_maintenance_start_time: cdktf.stringToTerraform(this._weeklyMaintenanceStartTime),
            timeouts: fsxLustreFileSystemTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    FsxLustreFileSystem.tfResourceType = "aws_fsx_lustre_file_system";
    return FsxLustreFileSystem;
}(cdktf.TerraformResource));
exports.FsxLustreFileSystem = FsxLustreFileSystem;
