"use strict";
// https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html
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
exports.FsxWindowsFileSystem = void 0;
var cdktf = require("cdktf");
function fsxWindowsFileSystemAuditLogConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        audit_log_destination: cdktf.stringToTerraform(struct.auditLogDestination),
        file_access_audit_log_level: cdktf.stringToTerraform(struct.fileAccessAuditLogLevel),
        file_share_access_audit_log_level: cdktf.stringToTerraform(struct.fileShareAccessAuditLogLevel)
    };
}
function fsxWindowsFileSystemSelfManagedActiveDirectoryToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        dns_ips: cdktf.listMapper(cdktf.stringToTerraform)(struct.dnsIps),
        domain_name: cdktf.stringToTerraform(struct.domainName),
        file_system_administrators_group: cdktf.stringToTerraform(struct.fileSystemAdministratorsGroup),
        organizational_unit_distinguished_name: cdktf.stringToTerraform(struct.organizationalUnitDistinguishedName),
        password: cdktf.stringToTerraform(struct.password),
        username: cdktf.stringToTerraform(struct.username)
    };
}
function fsxWindowsFileSystemTimeoutsToTerraform(struct) {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html aws_fsx_windows_file_system}
*/
var FsxWindowsFileSystem = /** @class */ (function (_super) {
    __extends(FsxWindowsFileSystem, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html aws_fsx_windows_file_system} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FsxWindowsFileSystemConfig
    */
    function FsxWindowsFileSystem(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_fsx_windows_file_system',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._activeDirectoryId = config.activeDirectoryId;
        _this._aliases = config.aliases;
        _this._automaticBackupRetentionDays = config.automaticBackupRetentionDays;
        _this._backupId = config.backupId;
        _this._copyTagsToBackups = config.copyTagsToBackups;
        _this._dailyAutomaticBackupStartTime = config.dailyAutomaticBackupStartTime;
        _this._deploymentType = config.deploymentType;
        _this._kmsKeyId = config.kmsKeyId;
        _this._preferredSubnetId = config.preferredSubnetId;
        _this._securityGroupIds = config.securityGroupIds;
        _this._skipFinalBackup = config.skipFinalBackup;
        _this._storageCapacity = config.storageCapacity;
        _this._storageType = config.storageType;
        _this._subnetIds = config.subnetIds;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._throughputCapacity = config.throughputCapacity;
        _this._weeklyMaintenanceStartTime = config.weeklyMaintenanceStartTime;
        _this._auditLogConfiguration = config.auditLogConfiguration;
        _this._selfManagedActiveDirectory = config.selfManagedActiveDirectory;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(FsxWindowsFileSystem.prototype, "activeDirectoryId", {
        get: function () {
            return this.getStringAttribute('active_directory_id');
        },
        set: function (value) {
            this._activeDirectoryId = value;
        },
        enumerable: false,
        configurable: true
    });
    FsxWindowsFileSystem.prototype.resetActiveDirectoryId = function () {
        this._activeDirectoryId = undefined;
    };
    Object.defineProperty(FsxWindowsFileSystem.prototype, "activeDirectoryIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._activeDirectoryId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxWindowsFileSystem.prototype, "aliases", {
        get: function () {
            return this.getListAttribute('aliases');
        },
        set: function (value) {
            this._aliases = value;
        },
        enumerable: false,
        configurable: true
    });
    FsxWindowsFileSystem.prototype.resetAliases = function () {
        this._aliases = undefined;
    };
    Object.defineProperty(FsxWindowsFileSystem.prototype, "aliasesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._aliases;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxWindowsFileSystem.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxWindowsFileSystem.prototype, "automaticBackupRetentionDays", {
        get: function () {
            return this.getNumberAttribute('automatic_backup_retention_days');
        },
        set: function (value) {
            this._automaticBackupRetentionDays = value;
        },
        enumerable: false,
        configurable: true
    });
    FsxWindowsFileSystem.prototype.resetAutomaticBackupRetentionDays = function () {
        this._automaticBackupRetentionDays = undefined;
    };
    Object.defineProperty(FsxWindowsFileSystem.prototype, "automaticBackupRetentionDaysInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._automaticBackupRetentionDays;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxWindowsFileSystem.prototype, "backupId", {
        get: function () {
            return this.getStringAttribute('backup_id');
        },
        set: function (value) {
            this._backupId = value;
        },
        enumerable: false,
        configurable: true
    });
    FsxWindowsFileSystem.prototype.resetBackupId = function () {
        this._backupId = undefined;
    };
    Object.defineProperty(FsxWindowsFileSystem.prototype, "backupIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._backupId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxWindowsFileSystem.prototype, "copyTagsToBackups", {
        get: function () {
            return this.getBooleanAttribute('copy_tags_to_backups');
        },
        set: function (value) {
            this._copyTagsToBackups = value;
        },
        enumerable: false,
        configurable: true
    });
    FsxWindowsFileSystem.prototype.resetCopyTagsToBackups = function () {
        this._copyTagsToBackups = undefined;
    };
    Object.defineProperty(FsxWindowsFileSystem.prototype, "copyTagsToBackupsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._copyTagsToBackups;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxWindowsFileSystem.prototype, "dailyAutomaticBackupStartTime", {
        get: function () {
            return this.getStringAttribute('daily_automatic_backup_start_time');
        },
        set: function (value) {
            this._dailyAutomaticBackupStartTime = value;
        },
        enumerable: false,
        configurable: true
    });
    FsxWindowsFileSystem.prototype.resetDailyAutomaticBackupStartTime = function () {
        this._dailyAutomaticBackupStartTime = undefined;
    };
    Object.defineProperty(FsxWindowsFileSystem.prototype, "dailyAutomaticBackupStartTimeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dailyAutomaticBackupStartTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxWindowsFileSystem.prototype, "deploymentType", {
        get: function () {
            return this.getStringAttribute('deployment_type');
        },
        set: function (value) {
            this._deploymentType = value;
        },
        enumerable: false,
        configurable: true
    });
    FsxWindowsFileSystem.prototype.resetDeploymentType = function () {
        this._deploymentType = undefined;
    };
    Object.defineProperty(FsxWindowsFileSystem.prototype, "deploymentTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deploymentType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxWindowsFileSystem.prototype, "dnsName", {
        // dns_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dns_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxWindowsFileSystem.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxWindowsFileSystem.prototype, "kmsKeyId", {
        get: function () {
            return this.getStringAttribute('kms_key_id');
        },
        set: function (value) {
            this._kmsKeyId = value;
        },
        enumerable: false,
        configurable: true
    });
    FsxWindowsFileSystem.prototype.resetKmsKeyId = function () {
        this._kmsKeyId = undefined;
    };
    Object.defineProperty(FsxWindowsFileSystem.prototype, "kmsKeyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kmsKeyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxWindowsFileSystem.prototype, "networkInterfaceIds", {
        // network_interface_ids - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('network_interface_ids');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxWindowsFileSystem.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxWindowsFileSystem.prototype, "preferredFileServerIp", {
        // preferred_file_server_ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('preferred_file_server_ip');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxWindowsFileSystem.prototype, "preferredSubnetId", {
        get: function () {
            return this.getStringAttribute('preferred_subnet_id');
        },
        set: function (value) {
            this._preferredSubnetId = value;
        },
        enumerable: false,
        configurable: true
    });
    FsxWindowsFileSystem.prototype.resetPreferredSubnetId = function () {
        this._preferredSubnetId = undefined;
    };
    Object.defineProperty(FsxWindowsFileSystem.prototype, "preferredSubnetIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._preferredSubnetId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxWindowsFileSystem.prototype, "remoteAdministrationEndpoint", {
        // remote_administration_endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('remote_administration_endpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxWindowsFileSystem.prototype, "securityGroupIds", {
        get: function () {
            return this.getListAttribute('security_group_ids');
        },
        set: function (value) {
            this._securityGroupIds = value;
        },
        enumerable: false,
        configurable: true
    });
    FsxWindowsFileSystem.prototype.resetSecurityGroupIds = function () {
        this._securityGroupIds = undefined;
    };
    Object.defineProperty(FsxWindowsFileSystem.prototype, "securityGroupIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._securityGroupIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxWindowsFileSystem.prototype, "skipFinalBackup", {
        get: function () {
            return this.getBooleanAttribute('skip_final_backup');
        },
        set: function (value) {
            this._skipFinalBackup = value;
        },
        enumerable: false,
        configurable: true
    });
    FsxWindowsFileSystem.prototype.resetSkipFinalBackup = function () {
        this._skipFinalBackup = undefined;
    };
    Object.defineProperty(FsxWindowsFileSystem.prototype, "skipFinalBackupInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._skipFinalBackup;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxWindowsFileSystem.prototype, "storageCapacity", {
        get: function () {
            return this.getNumberAttribute('storage_capacity');
        },
        set: function (value) {
            this._storageCapacity = value;
        },
        enumerable: false,
        configurable: true
    });
    FsxWindowsFileSystem.prototype.resetStorageCapacity = function () {
        this._storageCapacity = undefined;
    };
    Object.defineProperty(FsxWindowsFileSystem.prototype, "storageCapacityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._storageCapacity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxWindowsFileSystem.prototype, "storageType", {
        get: function () {
            return this.getStringAttribute('storage_type');
        },
        set: function (value) {
            this._storageType = value;
        },
        enumerable: false,
        configurable: true
    });
    FsxWindowsFileSystem.prototype.resetStorageType = function () {
        this._storageType = undefined;
    };
    Object.defineProperty(FsxWindowsFileSystem.prototype, "storageTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._storageType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxWindowsFileSystem.prototype, "subnetIds", {
        get: function () {
            return this.getListAttribute('subnet_ids');
        },
        set: function (value) {
            this._subnetIds = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxWindowsFileSystem.prototype, "subnetIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subnetIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxWindowsFileSystem.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    FsxWindowsFileSystem.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(FsxWindowsFileSystem.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxWindowsFileSystem.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    FsxWindowsFileSystem.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(FsxWindowsFileSystem.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxWindowsFileSystem.prototype, "throughputCapacity", {
        get: function () {
            return this.getNumberAttribute('throughput_capacity');
        },
        set: function (value) {
            this._throughputCapacity = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxWindowsFileSystem.prototype, "throughputCapacityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._throughputCapacity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxWindowsFileSystem.prototype, "vpcId", {
        // vpc_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxWindowsFileSystem.prototype, "weeklyMaintenanceStartTime", {
        get: function () {
            return this.getStringAttribute('weekly_maintenance_start_time');
        },
        set: function (value) {
            this._weeklyMaintenanceStartTime = value;
        },
        enumerable: false,
        configurable: true
    });
    FsxWindowsFileSystem.prototype.resetWeeklyMaintenanceStartTime = function () {
        this._weeklyMaintenanceStartTime = undefined;
    };
    Object.defineProperty(FsxWindowsFileSystem.prototype, "weeklyMaintenanceStartTimeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._weeklyMaintenanceStartTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxWindowsFileSystem.prototype, "auditLogConfiguration", {
        get: function () {
            return this.interpolationForAttribute('audit_log_configuration');
        },
        set: function (value) {
            this._auditLogConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    FsxWindowsFileSystem.prototype.resetAuditLogConfiguration = function () {
        this._auditLogConfiguration = undefined;
    };
    Object.defineProperty(FsxWindowsFileSystem.prototype, "auditLogConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._auditLogConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxWindowsFileSystem.prototype, "selfManagedActiveDirectory", {
        get: function () {
            return this.interpolationForAttribute('self_managed_active_directory');
        },
        set: function (value) {
            this._selfManagedActiveDirectory = value;
        },
        enumerable: false,
        configurable: true
    });
    FsxWindowsFileSystem.prototype.resetSelfManagedActiveDirectory = function () {
        this._selfManagedActiveDirectory = undefined;
    };
    Object.defineProperty(FsxWindowsFileSystem.prototype, "selfManagedActiveDirectoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._selfManagedActiveDirectory;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FsxWindowsFileSystem.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    FsxWindowsFileSystem.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(FsxWindowsFileSystem.prototype, "timeoutsInput", {
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
    FsxWindowsFileSystem.prototype.synthesizeAttributes = function () {
        return {
            active_directory_id: cdktf.stringToTerraform(this._activeDirectoryId),
            aliases: cdktf.listMapper(cdktf.stringToTerraform)(this._aliases),
            automatic_backup_retention_days: cdktf.numberToTerraform(this._automaticBackupRetentionDays),
            backup_id: cdktf.stringToTerraform(this._backupId),
            copy_tags_to_backups: cdktf.booleanToTerraform(this._copyTagsToBackups),
            daily_automatic_backup_start_time: cdktf.stringToTerraform(this._dailyAutomaticBackupStartTime),
            deployment_type: cdktf.stringToTerraform(this._deploymentType),
            kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
            preferred_subnet_id: cdktf.stringToTerraform(this._preferredSubnetId),
            security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupIds),
            skip_final_backup: cdktf.booleanToTerraform(this._skipFinalBackup),
            storage_capacity: cdktf.numberToTerraform(this._storageCapacity),
            storage_type: cdktf.stringToTerraform(this._storageType),
            subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            throughput_capacity: cdktf.numberToTerraform(this._throughputCapacity),
            weekly_maintenance_start_time: cdktf.stringToTerraform(this._weeklyMaintenanceStartTime),
            audit_log_configuration: cdktf.listMapper(fsxWindowsFileSystemAuditLogConfigurationToTerraform)(this._auditLogConfiguration),
            self_managed_active_directory: cdktf.listMapper(fsxWindowsFileSystemSelfManagedActiveDirectoryToTerraform)(this._selfManagedActiveDirectory),
            timeouts: fsxWindowsFileSystemTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    FsxWindowsFileSystem.tfResourceType = "aws_fsx_windows_file_system";
    return FsxWindowsFileSystem;
}(cdktf.TerraformResource));
exports.FsxWindowsFileSystem = FsxWindowsFileSystem;
