"use strict";
// https://www.terraform.io/docs/providers/aws/r/rds_cluster.html
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
exports.RdsCluster = void 0;
var cdktf = require("cdktf");
function rdsClusterRestoreToPointInTimeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        restore_to_time: cdktf.stringToTerraform(struct.restoreToTime),
        restore_type: cdktf.stringToTerraform(struct.restoreType),
        source_cluster_identifier: cdktf.stringToTerraform(struct.sourceClusterIdentifier),
        use_latest_restorable_time: cdktf.booleanToTerraform(struct.useLatestRestorableTime)
    };
}
function rdsClusterS3ImportToTerraform(struct) {
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
function rdsClusterScalingConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        auto_pause: cdktf.booleanToTerraform(struct.autoPause),
        max_capacity: cdktf.numberToTerraform(struct.maxCapacity),
        min_capacity: cdktf.numberToTerraform(struct.minCapacity),
        seconds_until_auto_pause: cdktf.numberToTerraform(struct.secondsUntilAutoPause),
        timeout_action: cdktf.stringToTerraform(struct.timeoutAction)
    };
}
function rdsClusterTimeoutsToTerraform(struct) {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html aws_rds_cluster}
*/
var RdsCluster = /** @class */ (function (_super) {
    __extends(RdsCluster, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html aws_rds_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RdsClusterConfig = {}
    */
    function RdsCluster(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_rds_cluster',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._allowMajorVersionUpgrade = config.allowMajorVersionUpgrade;
        _this._applyImmediately = config.applyImmediately;
        _this._availabilityZones = config.availabilityZones;
        _this._backtrackWindow = config.backtrackWindow;
        _this._backupRetentionPeriod = config.backupRetentionPeriod;
        _this._clusterIdentifier = config.clusterIdentifier;
        _this._clusterIdentifierPrefix = config.clusterIdentifierPrefix;
        _this._clusterMembers = config.clusterMembers;
        _this._copyTagsToSnapshot = config.copyTagsToSnapshot;
        _this._databaseName = config.databaseName;
        _this._dbClusterParameterGroupName = config.dbClusterParameterGroupName;
        _this._dbInstanceParameterGroupName = config.dbInstanceParameterGroupName;
        _this._dbSubnetGroupName = config.dbSubnetGroupName;
        _this._deletionProtection = config.deletionProtection;
        _this._enableGlobalWriteForwarding = config.enableGlobalWriteForwarding;
        _this._enableHttpEndpoint = config.enableHttpEndpoint;
        _this._enabledCloudwatchLogsExports = config.enabledCloudwatchLogsExports;
        _this._engine = config.engine;
        _this._engineMode = config.engineMode;
        _this._engineVersion = config.engineVersion;
        _this._finalSnapshotIdentifier = config.finalSnapshotIdentifier;
        _this._globalClusterIdentifier = config.globalClusterIdentifier;
        _this._iamDatabaseAuthenticationEnabled = config.iamDatabaseAuthenticationEnabled;
        _this._iamRoles = config.iamRoles;
        _this._kmsKeyId = config.kmsKeyId;
        _this._masterPassword = config.masterPassword;
        _this._masterUsername = config.masterUsername;
        _this._port = config.port;
        _this._preferredBackupWindow = config.preferredBackupWindow;
        _this._preferredMaintenanceWindow = config.preferredMaintenanceWindow;
        _this._replicationSourceIdentifier = config.replicationSourceIdentifier;
        _this._skipFinalSnapshot = config.skipFinalSnapshot;
        _this._snapshotIdentifier = config.snapshotIdentifier;
        _this._sourceRegion = config.sourceRegion;
        _this._storageEncrypted = config.storageEncrypted;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
        _this._restoreToPointInTime = config.restoreToPointInTime;
        _this._s3Import = config.s3Import;
        _this._scalingConfiguration = config.scalingConfiguration;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(RdsCluster.prototype, "allowMajorVersionUpgrade", {
        get: function () {
            return this.getBooleanAttribute('allow_major_version_upgrade');
        },
        set: function (value) {
            this._allowMajorVersionUpgrade = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsCluster.prototype.resetAllowMajorVersionUpgrade = function () {
        this._allowMajorVersionUpgrade = undefined;
    };
    Object.defineProperty(RdsCluster.prototype, "allowMajorVersionUpgradeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowMajorVersionUpgrade;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsCluster.prototype, "applyImmediately", {
        get: function () {
            return this.getBooleanAttribute('apply_immediately');
        },
        set: function (value) {
            this._applyImmediately = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsCluster.prototype.resetApplyImmediately = function () {
        this._applyImmediately = undefined;
    };
    Object.defineProperty(RdsCluster.prototype, "applyImmediatelyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._applyImmediately;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsCluster.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsCluster.prototype, "availabilityZones", {
        get: function () {
            return this.getListAttribute('availability_zones');
        },
        set: function (value) {
            this._availabilityZones = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsCluster.prototype.resetAvailabilityZones = function () {
        this._availabilityZones = undefined;
    };
    Object.defineProperty(RdsCluster.prototype, "availabilityZonesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._availabilityZones;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsCluster.prototype, "backtrackWindow", {
        get: function () {
            return this.getNumberAttribute('backtrack_window');
        },
        set: function (value) {
            this._backtrackWindow = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsCluster.prototype.resetBacktrackWindow = function () {
        this._backtrackWindow = undefined;
    };
    Object.defineProperty(RdsCluster.prototype, "backtrackWindowInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._backtrackWindow;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsCluster.prototype, "backupRetentionPeriod", {
        get: function () {
            return this.getNumberAttribute('backup_retention_period');
        },
        set: function (value) {
            this._backupRetentionPeriod = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsCluster.prototype.resetBackupRetentionPeriod = function () {
        this._backupRetentionPeriod = undefined;
    };
    Object.defineProperty(RdsCluster.prototype, "backupRetentionPeriodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._backupRetentionPeriod;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsCluster.prototype, "clusterIdentifier", {
        get: function () {
            return this.getStringAttribute('cluster_identifier');
        },
        set: function (value) {
            this._clusterIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsCluster.prototype.resetClusterIdentifier = function () {
        this._clusterIdentifier = undefined;
    };
    Object.defineProperty(RdsCluster.prototype, "clusterIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clusterIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsCluster.prototype, "clusterIdentifierPrefix", {
        get: function () {
            return this.getStringAttribute('cluster_identifier_prefix');
        },
        set: function (value) {
            this._clusterIdentifierPrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsCluster.prototype.resetClusterIdentifierPrefix = function () {
        this._clusterIdentifierPrefix = undefined;
    };
    Object.defineProperty(RdsCluster.prototype, "clusterIdentifierPrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clusterIdentifierPrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsCluster.prototype, "clusterMembers", {
        get: function () {
            return this.getListAttribute('cluster_members');
        },
        set: function (value) {
            this._clusterMembers = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsCluster.prototype.resetClusterMembers = function () {
        this._clusterMembers = undefined;
    };
    Object.defineProperty(RdsCluster.prototype, "clusterMembersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clusterMembers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsCluster.prototype, "clusterResourceId", {
        // cluster_resource_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cluster_resource_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsCluster.prototype, "copyTagsToSnapshot", {
        get: function () {
            return this.getBooleanAttribute('copy_tags_to_snapshot');
        },
        set: function (value) {
            this._copyTagsToSnapshot = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsCluster.prototype.resetCopyTagsToSnapshot = function () {
        this._copyTagsToSnapshot = undefined;
    };
    Object.defineProperty(RdsCluster.prototype, "copyTagsToSnapshotInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._copyTagsToSnapshot;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsCluster.prototype, "databaseName", {
        get: function () {
            return this.getStringAttribute('database_name');
        },
        set: function (value) {
            this._databaseName = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsCluster.prototype.resetDatabaseName = function () {
        this._databaseName = undefined;
    };
    Object.defineProperty(RdsCluster.prototype, "databaseNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._databaseName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsCluster.prototype, "dbClusterParameterGroupName", {
        get: function () {
            return this.getStringAttribute('db_cluster_parameter_group_name');
        },
        set: function (value) {
            this._dbClusterParameterGroupName = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsCluster.prototype.resetDbClusterParameterGroupName = function () {
        this._dbClusterParameterGroupName = undefined;
    };
    Object.defineProperty(RdsCluster.prototype, "dbClusterParameterGroupNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dbClusterParameterGroupName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsCluster.prototype, "dbInstanceParameterGroupName", {
        get: function () {
            return this.getStringAttribute('db_instance_parameter_group_name');
        },
        set: function (value) {
            this._dbInstanceParameterGroupName = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsCluster.prototype.resetDbInstanceParameterGroupName = function () {
        this._dbInstanceParameterGroupName = undefined;
    };
    Object.defineProperty(RdsCluster.prototype, "dbInstanceParameterGroupNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dbInstanceParameterGroupName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsCluster.prototype, "dbSubnetGroupName", {
        get: function () {
            return this.getStringAttribute('db_subnet_group_name');
        },
        set: function (value) {
            this._dbSubnetGroupName = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsCluster.prototype.resetDbSubnetGroupName = function () {
        this._dbSubnetGroupName = undefined;
    };
    Object.defineProperty(RdsCluster.prototype, "dbSubnetGroupNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dbSubnetGroupName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsCluster.prototype, "deletionProtection", {
        get: function () {
            return this.getBooleanAttribute('deletion_protection');
        },
        set: function (value) {
            this._deletionProtection = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsCluster.prototype.resetDeletionProtection = function () {
        this._deletionProtection = undefined;
    };
    Object.defineProperty(RdsCluster.prototype, "deletionProtectionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deletionProtection;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsCluster.prototype, "enableGlobalWriteForwarding", {
        get: function () {
            return this.getBooleanAttribute('enable_global_write_forwarding');
        },
        set: function (value) {
            this._enableGlobalWriteForwarding = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsCluster.prototype.resetEnableGlobalWriteForwarding = function () {
        this._enableGlobalWriteForwarding = undefined;
    };
    Object.defineProperty(RdsCluster.prototype, "enableGlobalWriteForwardingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enableGlobalWriteForwarding;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsCluster.prototype, "enableHttpEndpoint", {
        get: function () {
            return this.getBooleanAttribute('enable_http_endpoint');
        },
        set: function (value) {
            this._enableHttpEndpoint = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsCluster.prototype.resetEnableHttpEndpoint = function () {
        this._enableHttpEndpoint = undefined;
    };
    Object.defineProperty(RdsCluster.prototype, "enableHttpEndpointInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enableHttpEndpoint;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsCluster.prototype, "enabledCloudwatchLogsExports", {
        get: function () {
            return this.getListAttribute('enabled_cloudwatch_logs_exports');
        },
        set: function (value) {
            this._enabledCloudwatchLogsExports = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsCluster.prototype.resetEnabledCloudwatchLogsExports = function () {
        this._enabledCloudwatchLogsExports = undefined;
    };
    Object.defineProperty(RdsCluster.prototype, "enabledCloudwatchLogsExportsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabledCloudwatchLogsExports;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsCluster.prototype, "endpoint", {
        // endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('endpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsCluster.prototype, "engine", {
        get: function () {
            return this.getStringAttribute('engine');
        },
        set: function (value) {
            this._engine = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsCluster.prototype.resetEngine = function () {
        this._engine = undefined;
    };
    Object.defineProperty(RdsCluster.prototype, "engineInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._engine;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsCluster.prototype, "engineMode", {
        get: function () {
            return this.getStringAttribute('engine_mode');
        },
        set: function (value) {
            this._engineMode = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsCluster.prototype.resetEngineMode = function () {
        this._engineMode = undefined;
    };
    Object.defineProperty(RdsCluster.prototype, "engineModeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._engineMode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsCluster.prototype, "engineVersion", {
        get: function () {
            return this.getStringAttribute('engine_version');
        },
        set: function (value) {
            this._engineVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsCluster.prototype.resetEngineVersion = function () {
        this._engineVersion = undefined;
    };
    Object.defineProperty(RdsCluster.prototype, "engineVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._engineVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsCluster.prototype, "engineVersionActual", {
        // engine_version_actual - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('engine_version_actual');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsCluster.prototype, "finalSnapshotIdentifier", {
        get: function () {
            return this.getStringAttribute('final_snapshot_identifier');
        },
        set: function (value) {
            this._finalSnapshotIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsCluster.prototype.resetFinalSnapshotIdentifier = function () {
        this._finalSnapshotIdentifier = undefined;
    };
    Object.defineProperty(RdsCluster.prototype, "finalSnapshotIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._finalSnapshotIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsCluster.prototype, "globalClusterIdentifier", {
        get: function () {
            return this.getStringAttribute('global_cluster_identifier');
        },
        set: function (value) {
            this._globalClusterIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsCluster.prototype.resetGlobalClusterIdentifier = function () {
        this._globalClusterIdentifier = undefined;
    };
    Object.defineProperty(RdsCluster.prototype, "globalClusterIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._globalClusterIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsCluster.prototype, "hostedZoneId", {
        // hosted_zone_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hosted_zone_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsCluster.prototype, "iamDatabaseAuthenticationEnabled", {
        get: function () {
            return this.getBooleanAttribute('iam_database_authentication_enabled');
        },
        set: function (value) {
            this._iamDatabaseAuthenticationEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsCluster.prototype.resetIamDatabaseAuthenticationEnabled = function () {
        this._iamDatabaseAuthenticationEnabled = undefined;
    };
    Object.defineProperty(RdsCluster.prototype, "iamDatabaseAuthenticationEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._iamDatabaseAuthenticationEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsCluster.prototype, "iamRoles", {
        get: function () {
            return this.getListAttribute('iam_roles');
        },
        set: function (value) {
            this._iamRoles = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsCluster.prototype.resetIamRoles = function () {
        this._iamRoles = undefined;
    };
    Object.defineProperty(RdsCluster.prototype, "iamRolesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._iamRoles;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsCluster.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsCluster.prototype, "kmsKeyId", {
        get: function () {
            return this.getStringAttribute('kms_key_id');
        },
        set: function (value) {
            this._kmsKeyId = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsCluster.prototype.resetKmsKeyId = function () {
        this._kmsKeyId = undefined;
    };
    Object.defineProperty(RdsCluster.prototype, "kmsKeyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kmsKeyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsCluster.prototype, "masterPassword", {
        get: function () {
            return this.getStringAttribute('master_password');
        },
        set: function (value) {
            this._masterPassword = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsCluster.prototype.resetMasterPassword = function () {
        this._masterPassword = undefined;
    };
    Object.defineProperty(RdsCluster.prototype, "masterPasswordInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._masterPassword;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsCluster.prototype, "masterUsername", {
        get: function () {
            return this.getStringAttribute('master_username');
        },
        set: function (value) {
            this._masterUsername = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsCluster.prototype.resetMasterUsername = function () {
        this._masterUsername = undefined;
    };
    Object.defineProperty(RdsCluster.prototype, "masterUsernameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._masterUsername;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsCluster.prototype, "port", {
        get: function () {
            return this.getNumberAttribute('port');
        },
        set: function (value) {
            this._port = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsCluster.prototype.resetPort = function () {
        this._port = undefined;
    };
    Object.defineProperty(RdsCluster.prototype, "portInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._port;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsCluster.prototype, "preferredBackupWindow", {
        get: function () {
            return this.getStringAttribute('preferred_backup_window');
        },
        set: function (value) {
            this._preferredBackupWindow = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsCluster.prototype.resetPreferredBackupWindow = function () {
        this._preferredBackupWindow = undefined;
    };
    Object.defineProperty(RdsCluster.prototype, "preferredBackupWindowInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._preferredBackupWindow;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsCluster.prototype, "preferredMaintenanceWindow", {
        get: function () {
            return this.getStringAttribute('preferred_maintenance_window');
        },
        set: function (value) {
            this._preferredMaintenanceWindow = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsCluster.prototype.resetPreferredMaintenanceWindow = function () {
        this._preferredMaintenanceWindow = undefined;
    };
    Object.defineProperty(RdsCluster.prototype, "preferredMaintenanceWindowInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._preferredMaintenanceWindow;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsCluster.prototype, "readerEndpoint", {
        // reader_endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('reader_endpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsCluster.prototype, "replicationSourceIdentifier", {
        get: function () {
            return this.getStringAttribute('replication_source_identifier');
        },
        set: function (value) {
            this._replicationSourceIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsCluster.prototype.resetReplicationSourceIdentifier = function () {
        this._replicationSourceIdentifier = undefined;
    };
    Object.defineProperty(RdsCluster.prototype, "replicationSourceIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._replicationSourceIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsCluster.prototype, "skipFinalSnapshot", {
        get: function () {
            return this.getBooleanAttribute('skip_final_snapshot');
        },
        set: function (value) {
            this._skipFinalSnapshot = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsCluster.prototype.resetSkipFinalSnapshot = function () {
        this._skipFinalSnapshot = undefined;
    };
    Object.defineProperty(RdsCluster.prototype, "skipFinalSnapshotInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._skipFinalSnapshot;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsCluster.prototype, "snapshotIdentifier", {
        get: function () {
            return this.getStringAttribute('snapshot_identifier');
        },
        set: function (value) {
            this._snapshotIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsCluster.prototype.resetSnapshotIdentifier = function () {
        this._snapshotIdentifier = undefined;
    };
    Object.defineProperty(RdsCluster.prototype, "snapshotIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._snapshotIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsCluster.prototype, "sourceRegion", {
        get: function () {
            return this.getStringAttribute('source_region');
        },
        set: function (value) {
            this._sourceRegion = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsCluster.prototype.resetSourceRegion = function () {
        this._sourceRegion = undefined;
    };
    Object.defineProperty(RdsCluster.prototype, "sourceRegionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sourceRegion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsCluster.prototype, "storageEncrypted", {
        get: function () {
            return this.getBooleanAttribute('storage_encrypted');
        },
        set: function (value) {
            this._storageEncrypted = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsCluster.prototype.resetStorageEncrypted = function () {
        this._storageEncrypted = undefined;
    };
    Object.defineProperty(RdsCluster.prototype, "storageEncryptedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._storageEncrypted;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsCluster.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsCluster.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(RdsCluster.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsCluster.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsCluster.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(RdsCluster.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsCluster.prototype, "vpcSecurityGroupIds", {
        get: function () {
            return this.getListAttribute('vpc_security_group_ids');
        },
        set: function (value) {
            this._vpcSecurityGroupIds = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsCluster.prototype.resetVpcSecurityGroupIds = function () {
        this._vpcSecurityGroupIds = undefined;
    };
    Object.defineProperty(RdsCluster.prototype, "vpcSecurityGroupIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcSecurityGroupIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsCluster.prototype, "restoreToPointInTime", {
        get: function () {
            return this.interpolationForAttribute('restore_to_point_in_time');
        },
        set: function (value) {
            this._restoreToPointInTime = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsCluster.prototype.resetRestoreToPointInTime = function () {
        this._restoreToPointInTime = undefined;
    };
    Object.defineProperty(RdsCluster.prototype, "restoreToPointInTimeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._restoreToPointInTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsCluster.prototype, "s3Import", {
        get: function () {
            return this.interpolationForAttribute('s3_import');
        },
        set: function (value) {
            this._s3Import = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsCluster.prototype.resetS3Import = function () {
        this._s3Import = undefined;
    };
    Object.defineProperty(RdsCluster.prototype, "s3ImportInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._s3Import;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsCluster.prototype, "scalingConfiguration", {
        get: function () {
            return this.interpolationForAttribute('scaling_configuration');
        },
        set: function (value) {
            this._scalingConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsCluster.prototype.resetScalingConfiguration = function () {
        this._scalingConfiguration = undefined;
    };
    Object.defineProperty(RdsCluster.prototype, "scalingConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scalingConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsCluster.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsCluster.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(RdsCluster.prototype, "timeoutsInput", {
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
    RdsCluster.prototype.synthesizeAttributes = function () {
        return {
            allow_major_version_upgrade: cdktf.booleanToTerraform(this._allowMajorVersionUpgrade),
            apply_immediately: cdktf.booleanToTerraform(this._applyImmediately),
            availability_zones: cdktf.listMapper(cdktf.stringToTerraform)(this._availabilityZones),
            backtrack_window: cdktf.numberToTerraform(this._backtrackWindow),
            backup_retention_period: cdktf.numberToTerraform(this._backupRetentionPeriod),
            cluster_identifier: cdktf.stringToTerraform(this._clusterIdentifier),
            cluster_identifier_prefix: cdktf.stringToTerraform(this._clusterIdentifierPrefix),
            cluster_members: cdktf.listMapper(cdktf.stringToTerraform)(this._clusterMembers),
            copy_tags_to_snapshot: cdktf.booleanToTerraform(this._copyTagsToSnapshot),
            database_name: cdktf.stringToTerraform(this._databaseName),
            db_cluster_parameter_group_name: cdktf.stringToTerraform(this._dbClusterParameterGroupName),
            db_instance_parameter_group_name: cdktf.stringToTerraform(this._dbInstanceParameterGroupName),
            db_subnet_group_name: cdktf.stringToTerraform(this._dbSubnetGroupName),
            deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
            enable_global_write_forwarding: cdktf.booleanToTerraform(this._enableGlobalWriteForwarding),
            enable_http_endpoint: cdktf.booleanToTerraform(this._enableHttpEndpoint),
            enabled_cloudwatch_logs_exports: cdktf.listMapper(cdktf.stringToTerraform)(this._enabledCloudwatchLogsExports),
            engine: cdktf.stringToTerraform(this._engine),
            engine_mode: cdktf.stringToTerraform(this._engineMode),
            engine_version: cdktf.stringToTerraform(this._engineVersion),
            final_snapshot_identifier: cdktf.stringToTerraform(this._finalSnapshotIdentifier),
            global_cluster_identifier: cdktf.stringToTerraform(this._globalClusterIdentifier),
            iam_database_authentication_enabled: cdktf.booleanToTerraform(this._iamDatabaseAuthenticationEnabled),
            iam_roles: cdktf.listMapper(cdktf.stringToTerraform)(this._iamRoles),
            kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
            master_password: cdktf.stringToTerraform(this._masterPassword),
            master_username: cdktf.stringToTerraform(this._masterUsername),
            port: cdktf.numberToTerraform(this._port),
            preferred_backup_window: cdktf.stringToTerraform(this._preferredBackupWindow),
            preferred_maintenance_window: cdktf.stringToTerraform(this._preferredMaintenanceWindow),
            replication_source_identifier: cdktf.stringToTerraform(this._replicationSourceIdentifier),
            skip_final_snapshot: cdktf.booleanToTerraform(this._skipFinalSnapshot),
            snapshot_identifier: cdktf.stringToTerraform(this._snapshotIdentifier),
            source_region: cdktf.stringToTerraform(this._sourceRegion),
            storage_encrypted: cdktf.booleanToTerraform(this._storageEncrypted),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSecurityGroupIds),
            restore_to_point_in_time: cdktf.listMapper(rdsClusterRestoreToPointInTimeToTerraform)(this._restoreToPointInTime),
            s3_import: cdktf.listMapper(rdsClusterS3ImportToTerraform)(this._s3Import),
            scaling_configuration: cdktf.listMapper(rdsClusterScalingConfigurationToTerraform)(this._scalingConfiguration),
            timeouts: rdsClusterTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    RdsCluster.tfResourceType = "aws_rds_cluster";
    return RdsCluster;
}(cdktf.TerraformResource));
exports.RdsCluster = RdsCluster;
