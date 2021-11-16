"use strict";
// https://www.terraform.io/docs/providers/aws/r/db_instance.html
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
exports.DbInstance = void 0;
var cdktf = require("cdktf");
function dbInstanceRestoreToPointInTimeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        restore_time: cdktf.stringToTerraform(struct.restoreTime),
        source_db_instance_identifier: cdktf.stringToTerraform(struct.sourceDbInstanceIdentifier),
        source_dbi_resource_id: cdktf.stringToTerraform(struct.sourceDbiResourceId),
        use_latest_restorable_time: cdktf.booleanToTerraform(struct.useLatestRestorableTime)
    };
}
function dbInstanceS3ImportToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket_name: cdktf.stringToTerraform(struct.bucketName),
        bucket_prefix: cdktf.stringToTerraform(struct.bucketPrefix),
        ingestion_role: cdktf.stringToTerraform(struct.ingestionRole),
        source_engine: cdktf.stringToTerraform(struct.sourceEngine),
        source_engine_version: cdktf.stringToTerraform(struct.sourceEngineVersion)
    };
}
function dbInstanceTimeoutsToTerraform(struct) {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html aws_db_instance}
*/
var DbInstance = /** @class */ (function (_super) {
    __extends(DbInstance, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html aws_db_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DbInstanceConfig
    */
    function DbInstance(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_db_instance',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._allocatedStorage = config.allocatedStorage;
        _this._allowMajorVersionUpgrade = config.allowMajorVersionUpgrade;
        _this._applyImmediately = config.applyImmediately;
        _this._autoMinorVersionUpgrade = config.autoMinorVersionUpgrade;
        _this._availabilityZone = config.availabilityZone;
        _this._backupRetentionPeriod = config.backupRetentionPeriod;
        _this._backupWindow = config.backupWindow;
        _this._caCertIdentifier = config.caCertIdentifier;
        _this._characterSetName = config.characterSetName;
        _this._copyTagsToSnapshot = config.copyTagsToSnapshot;
        _this._customerOwnedIpEnabled = config.customerOwnedIpEnabled;
        _this._dbSubnetGroupName = config.dbSubnetGroupName;
        _this._deleteAutomatedBackups = config.deleteAutomatedBackups;
        _this._deletionProtection = config.deletionProtection;
        _this._domain = config.domain;
        _this._domainIamRoleName = config.domainIamRoleName;
        _this._enabledCloudwatchLogsExports = config.enabledCloudwatchLogsExports;
        _this._engine = config.engine;
        _this._engineVersion = config.engineVersion;
        _this._finalSnapshotIdentifier = config.finalSnapshotIdentifier;
        _this._iamDatabaseAuthenticationEnabled = config.iamDatabaseAuthenticationEnabled;
        _this._identifier = config.identifier;
        _this._identifierPrefix = config.identifierPrefix;
        _this._instanceClass = config.instanceClass;
        _this._iops = config.iops;
        _this._kmsKeyId = config.kmsKeyId;
        _this._licenseModel = config.licenseModel;
        _this._maintenanceWindow = config.maintenanceWindow;
        _this._maxAllocatedStorage = config.maxAllocatedStorage;
        _this._monitoringInterval = config.monitoringInterval;
        _this._monitoringRoleArn = config.monitoringRoleArn;
        _this._multiAz = config.multiAz;
        _this._name = config.name;
        _this._ncharCharacterSetName = config.ncharCharacterSetName;
        _this._optionGroupName = config.optionGroupName;
        _this._parameterGroupName = config.parameterGroupName;
        _this._password = config.password;
        _this._performanceInsightsEnabled = config.performanceInsightsEnabled;
        _this._performanceInsightsKmsKeyId = config.performanceInsightsKmsKeyId;
        _this._performanceInsightsRetentionPeriod = config.performanceInsightsRetentionPeriod;
        _this._port = config.port;
        _this._publiclyAccessible = config.publiclyAccessible;
        _this._replicaMode = config.replicaMode;
        _this._replicateSourceDb = config.replicateSourceDb;
        _this._securityGroupNames = config.securityGroupNames;
        _this._skipFinalSnapshot = config.skipFinalSnapshot;
        _this._snapshotIdentifier = config.snapshotIdentifier;
        _this._storageEncrypted = config.storageEncrypted;
        _this._storageType = config.storageType;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._timezone = config.timezone;
        _this._username = config.username;
        _this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
        _this._restoreToPointInTime = config.restoreToPointInTime;
        _this._s3Import = config.s3Import;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(DbInstance.prototype, "address", {
        // ==========
        // ATTRIBUTES
        // ==========
        // address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "allocatedStorage", {
        get: function () {
            return this.getNumberAttribute('allocated_storage');
        },
        set: function (value) {
            this._allocatedStorage = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetAllocatedStorage = function () {
        this._allocatedStorage = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "allocatedStorageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allocatedStorage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "allowMajorVersionUpgrade", {
        get: function () {
            return this.getBooleanAttribute('allow_major_version_upgrade');
        },
        set: function (value) {
            this._allowMajorVersionUpgrade = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetAllowMajorVersionUpgrade = function () {
        this._allowMajorVersionUpgrade = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "allowMajorVersionUpgradeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowMajorVersionUpgrade;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "applyImmediately", {
        get: function () {
            return this.getBooleanAttribute('apply_immediately');
        },
        set: function (value) {
            this._applyImmediately = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetApplyImmediately = function () {
        this._applyImmediately = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "applyImmediatelyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._applyImmediately;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "autoMinorVersionUpgrade", {
        get: function () {
            return this.getBooleanAttribute('auto_minor_version_upgrade');
        },
        set: function (value) {
            this._autoMinorVersionUpgrade = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetAutoMinorVersionUpgrade = function () {
        this._autoMinorVersionUpgrade = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "autoMinorVersionUpgradeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoMinorVersionUpgrade;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "availabilityZone", {
        get: function () {
            return this.getStringAttribute('availability_zone');
        },
        set: function (value) {
            this._availabilityZone = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetAvailabilityZone = function () {
        this._availabilityZone = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "availabilityZoneInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._availabilityZone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "backupRetentionPeriod", {
        get: function () {
            return this.getNumberAttribute('backup_retention_period');
        },
        set: function (value) {
            this._backupRetentionPeriod = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetBackupRetentionPeriod = function () {
        this._backupRetentionPeriod = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "backupRetentionPeriodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._backupRetentionPeriod;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "backupWindow", {
        get: function () {
            return this.getStringAttribute('backup_window');
        },
        set: function (value) {
            this._backupWindow = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetBackupWindow = function () {
        this._backupWindow = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "backupWindowInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._backupWindow;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "caCertIdentifier", {
        get: function () {
            return this.getStringAttribute('ca_cert_identifier');
        },
        set: function (value) {
            this._caCertIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetCaCertIdentifier = function () {
        this._caCertIdentifier = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "caCertIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._caCertIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "characterSetName", {
        get: function () {
            return this.getStringAttribute('character_set_name');
        },
        set: function (value) {
            this._characterSetName = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetCharacterSetName = function () {
        this._characterSetName = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "characterSetNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._characterSetName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "copyTagsToSnapshot", {
        get: function () {
            return this.getBooleanAttribute('copy_tags_to_snapshot');
        },
        set: function (value) {
            this._copyTagsToSnapshot = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetCopyTagsToSnapshot = function () {
        this._copyTagsToSnapshot = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "copyTagsToSnapshotInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._copyTagsToSnapshot;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "customerOwnedIpEnabled", {
        get: function () {
            return this.getBooleanAttribute('customer_owned_ip_enabled');
        },
        set: function (value) {
            this._customerOwnedIpEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetCustomerOwnedIpEnabled = function () {
        this._customerOwnedIpEnabled = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "customerOwnedIpEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customerOwnedIpEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "dbSubnetGroupName", {
        get: function () {
            return this.getStringAttribute('db_subnet_group_name');
        },
        set: function (value) {
            this._dbSubnetGroupName = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetDbSubnetGroupName = function () {
        this._dbSubnetGroupName = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "dbSubnetGroupNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dbSubnetGroupName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "deleteAutomatedBackups", {
        get: function () {
            return this.getBooleanAttribute('delete_automated_backups');
        },
        set: function (value) {
            this._deleteAutomatedBackups = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetDeleteAutomatedBackups = function () {
        this._deleteAutomatedBackups = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "deleteAutomatedBackupsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deleteAutomatedBackups;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "deletionProtection", {
        get: function () {
            return this.getBooleanAttribute('deletion_protection');
        },
        set: function (value) {
            this._deletionProtection = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetDeletionProtection = function () {
        this._deletionProtection = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "deletionProtectionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deletionProtection;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "domain", {
        get: function () {
            return this.getStringAttribute('domain');
        },
        set: function (value) {
            this._domain = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetDomain = function () {
        this._domain = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "domainInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domain;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "domainIamRoleName", {
        get: function () {
            return this.getStringAttribute('domain_iam_role_name');
        },
        set: function (value) {
            this._domainIamRoleName = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetDomainIamRoleName = function () {
        this._domainIamRoleName = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "domainIamRoleNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domainIamRoleName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "enabledCloudwatchLogsExports", {
        get: function () {
            return this.getListAttribute('enabled_cloudwatch_logs_exports');
        },
        set: function (value) {
            this._enabledCloudwatchLogsExports = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetEnabledCloudwatchLogsExports = function () {
        this._enabledCloudwatchLogsExports = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "enabledCloudwatchLogsExportsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabledCloudwatchLogsExports;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "endpoint", {
        // endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('endpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "engine", {
        get: function () {
            return this.getStringAttribute('engine');
        },
        set: function (value) {
            this._engine = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetEngine = function () {
        this._engine = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "engineInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._engine;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "engineVersion", {
        get: function () {
            return this.getStringAttribute('engine_version');
        },
        set: function (value) {
            this._engineVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetEngineVersion = function () {
        this._engineVersion = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "engineVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._engineVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "engineVersionActual", {
        // engine_version_actual - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('engine_version_actual');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "finalSnapshotIdentifier", {
        get: function () {
            return this.getStringAttribute('final_snapshot_identifier');
        },
        set: function (value) {
            this._finalSnapshotIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetFinalSnapshotIdentifier = function () {
        this._finalSnapshotIdentifier = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "finalSnapshotIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._finalSnapshotIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "hostedZoneId", {
        // hosted_zone_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hosted_zone_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "iamDatabaseAuthenticationEnabled", {
        get: function () {
            return this.getBooleanAttribute('iam_database_authentication_enabled');
        },
        set: function (value) {
            this._iamDatabaseAuthenticationEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetIamDatabaseAuthenticationEnabled = function () {
        this._iamDatabaseAuthenticationEnabled = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "iamDatabaseAuthenticationEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._iamDatabaseAuthenticationEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "identifier", {
        get: function () {
            return this.getStringAttribute('identifier');
        },
        set: function (value) {
            this._identifier = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetIdentifier = function () {
        this._identifier = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "identifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "identifierPrefix", {
        get: function () {
            return this.getStringAttribute('identifier_prefix');
        },
        set: function (value) {
            this._identifierPrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetIdentifierPrefix = function () {
        this._identifierPrefix = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "identifierPrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identifierPrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "instanceClass", {
        get: function () {
            return this.getStringAttribute('instance_class');
        },
        set: function (value) {
            this._instanceClass = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "instanceClassInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceClass;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "iops", {
        get: function () {
            return this.getNumberAttribute('iops');
        },
        set: function (value) {
            this._iops = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetIops = function () {
        this._iops = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "iopsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._iops;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "kmsKeyId", {
        get: function () {
            return this.getStringAttribute('kms_key_id');
        },
        set: function (value) {
            this._kmsKeyId = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetKmsKeyId = function () {
        this._kmsKeyId = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "kmsKeyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kmsKeyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "latestRestorableTime", {
        // latest_restorable_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('latest_restorable_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "licenseModel", {
        get: function () {
            return this.getStringAttribute('license_model');
        },
        set: function (value) {
            this._licenseModel = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetLicenseModel = function () {
        this._licenseModel = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "licenseModelInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._licenseModel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "maintenanceWindow", {
        get: function () {
            return this.getStringAttribute('maintenance_window');
        },
        set: function (value) {
            this._maintenanceWindow = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetMaintenanceWindow = function () {
        this._maintenanceWindow = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "maintenanceWindowInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maintenanceWindow;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "maxAllocatedStorage", {
        get: function () {
            return this.getNumberAttribute('max_allocated_storage');
        },
        set: function (value) {
            this._maxAllocatedStorage = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetMaxAllocatedStorage = function () {
        this._maxAllocatedStorage = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "maxAllocatedStorageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxAllocatedStorage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "monitoringInterval", {
        get: function () {
            return this.getNumberAttribute('monitoring_interval');
        },
        set: function (value) {
            this._monitoringInterval = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetMonitoringInterval = function () {
        this._monitoringInterval = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "monitoringIntervalInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._monitoringInterval;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "monitoringRoleArn", {
        get: function () {
            return this.getStringAttribute('monitoring_role_arn');
        },
        set: function (value) {
            this._monitoringRoleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetMonitoringRoleArn = function () {
        this._monitoringRoleArn = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "monitoringRoleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._monitoringRoleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "multiAz", {
        get: function () {
            return this.getBooleanAttribute('multi_az');
        },
        set: function (value) {
            this._multiAz = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetMultiAz = function () {
        this._multiAz = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "multiAzInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._multiAz;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "ncharCharacterSetName", {
        get: function () {
            return this.getStringAttribute('nchar_character_set_name');
        },
        set: function (value) {
            this._ncharCharacterSetName = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetNcharCharacterSetName = function () {
        this._ncharCharacterSetName = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "ncharCharacterSetNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ncharCharacterSetName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "optionGroupName", {
        get: function () {
            return this.getStringAttribute('option_group_name');
        },
        set: function (value) {
            this._optionGroupName = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetOptionGroupName = function () {
        this._optionGroupName = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "optionGroupNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._optionGroupName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "parameterGroupName", {
        get: function () {
            return this.getStringAttribute('parameter_group_name');
        },
        set: function (value) {
            this._parameterGroupName = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetParameterGroupName = function () {
        this._parameterGroupName = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "parameterGroupNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._parameterGroupName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "password", {
        get: function () {
            return this.getStringAttribute('password');
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetPassword = function () {
        this._password = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "passwordInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._password;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "performanceInsightsEnabled", {
        get: function () {
            return this.getBooleanAttribute('performance_insights_enabled');
        },
        set: function (value) {
            this._performanceInsightsEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetPerformanceInsightsEnabled = function () {
        this._performanceInsightsEnabled = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "performanceInsightsEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._performanceInsightsEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "performanceInsightsKmsKeyId", {
        get: function () {
            return this.getStringAttribute('performance_insights_kms_key_id');
        },
        set: function (value) {
            this._performanceInsightsKmsKeyId = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetPerformanceInsightsKmsKeyId = function () {
        this._performanceInsightsKmsKeyId = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "performanceInsightsKmsKeyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._performanceInsightsKmsKeyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "performanceInsightsRetentionPeriod", {
        get: function () {
            return this.getNumberAttribute('performance_insights_retention_period');
        },
        set: function (value) {
            this._performanceInsightsRetentionPeriod = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetPerformanceInsightsRetentionPeriod = function () {
        this._performanceInsightsRetentionPeriod = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "performanceInsightsRetentionPeriodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._performanceInsightsRetentionPeriod;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "port", {
        get: function () {
            return this.getNumberAttribute('port');
        },
        set: function (value) {
            this._port = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetPort = function () {
        this._port = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "portInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._port;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "publiclyAccessible", {
        get: function () {
            return this.getBooleanAttribute('publicly_accessible');
        },
        set: function (value) {
            this._publiclyAccessible = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetPubliclyAccessible = function () {
        this._publiclyAccessible = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "publiclyAccessibleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._publiclyAccessible;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "replicaMode", {
        get: function () {
            return this.getStringAttribute('replica_mode');
        },
        set: function (value) {
            this._replicaMode = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetReplicaMode = function () {
        this._replicaMode = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "replicaModeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._replicaMode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "replicas", {
        // replicas - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('replicas');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "replicateSourceDb", {
        get: function () {
            return this.getStringAttribute('replicate_source_db');
        },
        set: function (value) {
            this._replicateSourceDb = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetReplicateSourceDb = function () {
        this._replicateSourceDb = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "replicateSourceDbInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._replicateSourceDb;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "resourceId", {
        // resource_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('resource_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "securityGroupNames", {
        get: function () {
            return this.getListAttribute('security_group_names');
        },
        set: function (value) {
            this._securityGroupNames = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetSecurityGroupNames = function () {
        this._securityGroupNames = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "securityGroupNamesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._securityGroupNames;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "skipFinalSnapshot", {
        get: function () {
            return this.getBooleanAttribute('skip_final_snapshot');
        },
        set: function (value) {
            this._skipFinalSnapshot = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetSkipFinalSnapshot = function () {
        this._skipFinalSnapshot = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "skipFinalSnapshotInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._skipFinalSnapshot;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "snapshotIdentifier", {
        get: function () {
            return this.getStringAttribute('snapshot_identifier');
        },
        set: function (value) {
            this._snapshotIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetSnapshotIdentifier = function () {
        this._snapshotIdentifier = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "snapshotIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._snapshotIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "storageEncrypted", {
        get: function () {
            return this.getBooleanAttribute('storage_encrypted');
        },
        set: function (value) {
            this._storageEncrypted = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetStorageEncrypted = function () {
        this._storageEncrypted = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "storageEncryptedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._storageEncrypted;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "storageType", {
        get: function () {
            return this.getStringAttribute('storage_type');
        },
        set: function (value) {
            this._storageType = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetStorageType = function () {
        this._storageType = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "storageTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._storageType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "timezone", {
        get: function () {
            return this.getStringAttribute('timezone');
        },
        set: function (value) {
            this._timezone = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetTimezone = function () {
        this._timezone = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "timezoneInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timezone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "username", {
        get: function () {
            return this.getStringAttribute('username');
        },
        set: function (value) {
            this._username = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetUsername = function () {
        this._username = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "usernameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._username;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "vpcSecurityGroupIds", {
        get: function () {
            return this.getListAttribute('vpc_security_group_ids');
        },
        set: function (value) {
            this._vpcSecurityGroupIds = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetVpcSecurityGroupIds = function () {
        this._vpcSecurityGroupIds = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "vpcSecurityGroupIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcSecurityGroupIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "restoreToPointInTime", {
        get: function () {
            return this.interpolationForAttribute('restore_to_point_in_time');
        },
        set: function (value) {
            this._restoreToPointInTime = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetRestoreToPointInTime = function () {
        this._restoreToPointInTime = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "restoreToPointInTimeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._restoreToPointInTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "s3Import", {
        get: function () {
            return this.interpolationForAttribute('s3_import');
        },
        set: function (value) {
            this._s3Import = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetS3Import = function () {
        this._s3Import = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "s3ImportInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._s3Import;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbInstance.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    DbInstance.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(DbInstance.prototype, "timeoutsInput", {
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
    DbInstance.prototype.synthesizeAttributes = function () {
        return {
            allocated_storage: cdktf.numberToTerraform(this._allocatedStorage),
            allow_major_version_upgrade: cdktf.booleanToTerraform(this._allowMajorVersionUpgrade),
            apply_immediately: cdktf.booleanToTerraform(this._applyImmediately),
            auto_minor_version_upgrade: cdktf.booleanToTerraform(this._autoMinorVersionUpgrade),
            availability_zone: cdktf.stringToTerraform(this._availabilityZone),
            backup_retention_period: cdktf.numberToTerraform(this._backupRetentionPeriod),
            backup_window: cdktf.stringToTerraform(this._backupWindow),
            ca_cert_identifier: cdktf.stringToTerraform(this._caCertIdentifier),
            character_set_name: cdktf.stringToTerraform(this._characterSetName),
            copy_tags_to_snapshot: cdktf.booleanToTerraform(this._copyTagsToSnapshot),
            customer_owned_ip_enabled: cdktf.booleanToTerraform(this._customerOwnedIpEnabled),
            db_subnet_group_name: cdktf.stringToTerraform(this._dbSubnetGroupName),
            delete_automated_backups: cdktf.booleanToTerraform(this._deleteAutomatedBackups),
            deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
            domain: cdktf.stringToTerraform(this._domain),
            domain_iam_role_name: cdktf.stringToTerraform(this._domainIamRoleName),
            enabled_cloudwatch_logs_exports: cdktf.listMapper(cdktf.stringToTerraform)(this._enabledCloudwatchLogsExports),
            engine: cdktf.stringToTerraform(this._engine),
            engine_version: cdktf.stringToTerraform(this._engineVersion),
            final_snapshot_identifier: cdktf.stringToTerraform(this._finalSnapshotIdentifier),
            iam_database_authentication_enabled: cdktf.booleanToTerraform(this._iamDatabaseAuthenticationEnabled),
            identifier: cdktf.stringToTerraform(this._identifier),
            identifier_prefix: cdktf.stringToTerraform(this._identifierPrefix),
            instance_class: cdktf.stringToTerraform(this._instanceClass),
            iops: cdktf.numberToTerraform(this._iops),
            kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
            license_model: cdktf.stringToTerraform(this._licenseModel),
            maintenance_window: cdktf.stringToTerraform(this._maintenanceWindow),
            max_allocated_storage: cdktf.numberToTerraform(this._maxAllocatedStorage),
            monitoring_interval: cdktf.numberToTerraform(this._monitoringInterval),
            monitoring_role_arn: cdktf.stringToTerraform(this._monitoringRoleArn),
            multi_az: cdktf.booleanToTerraform(this._multiAz),
            name: cdktf.stringToTerraform(this._name),
            nchar_character_set_name: cdktf.stringToTerraform(this._ncharCharacterSetName),
            option_group_name: cdktf.stringToTerraform(this._optionGroupName),
            parameter_group_name: cdktf.stringToTerraform(this._parameterGroupName),
            password: cdktf.stringToTerraform(this._password),
            performance_insights_enabled: cdktf.booleanToTerraform(this._performanceInsightsEnabled),
            performance_insights_kms_key_id: cdktf.stringToTerraform(this._performanceInsightsKmsKeyId),
            performance_insights_retention_period: cdktf.numberToTerraform(this._performanceInsightsRetentionPeriod),
            port: cdktf.numberToTerraform(this._port),
            publicly_accessible: cdktf.booleanToTerraform(this._publiclyAccessible),
            replica_mode: cdktf.stringToTerraform(this._replicaMode),
            replicate_source_db: cdktf.stringToTerraform(this._replicateSourceDb),
            security_group_names: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupNames),
            skip_final_snapshot: cdktf.booleanToTerraform(this._skipFinalSnapshot),
            snapshot_identifier: cdktf.stringToTerraform(this._snapshotIdentifier),
            storage_encrypted: cdktf.booleanToTerraform(this._storageEncrypted),
            storage_type: cdktf.stringToTerraform(this._storageType),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            timezone: cdktf.stringToTerraform(this._timezone),
            username: cdktf.stringToTerraform(this._username),
            vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSecurityGroupIds),
            restore_to_point_in_time: cdktf.listMapper(dbInstanceRestoreToPointInTimeToTerraform)(this._restoreToPointInTime),
            s3_import: cdktf.listMapper(dbInstanceS3ImportToTerraform)(this._s3Import),
            timeouts: dbInstanceTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DbInstance.tfResourceType = "aws_db_instance";
    return DbInstance;
}(cdktf.TerraformResource));
exports.DbInstance = DbInstance;
