"use strict";
// https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html
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
exports.NeptuneCluster = void 0;
var cdktf = require("cdktf");
function neptuneClusterTimeoutsToTerraform(struct) {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html aws_neptune_cluster}
*/
var NeptuneCluster = /** @class */ (function (_super) {
    __extends(NeptuneCluster, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html aws_neptune_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NeptuneClusterConfig = {}
    */
    function NeptuneCluster(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_neptune_cluster',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._applyImmediately = config.applyImmediately;
        _this._availabilityZones = config.availabilityZones;
        _this._backupRetentionPeriod = config.backupRetentionPeriod;
        _this._clusterIdentifier = config.clusterIdentifier;
        _this._clusterIdentifierPrefix = config.clusterIdentifierPrefix;
        _this._copyTagsToSnapshot = config.copyTagsToSnapshot;
        _this._deletionProtection = config.deletionProtection;
        _this._enableCloudwatchLogsExports = config.enableCloudwatchLogsExports;
        _this._engine = config.engine;
        _this._engineVersion = config.engineVersion;
        _this._finalSnapshotIdentifier = config.finalSnapshotIdentifier;
        _this._iamDatabaseAuthenticationEnabled = config.iamDatabaseAuthenticationEnabled;
        _this._iamRoles = config.iamRoles;
        _this._kmsKeyArn = config.kmsKeyArn;
        _this._neptuneClusterParameterGroupName = config.neptuneClusterParameterGroupName;
        _this._neptuneSubnetGroupName = config.neptuneSubnetGroupName;
        _this._port = config.port;
        _this._preferredBackupWindow = config.preferredBackupWindow;
        _this._preferredMaintenanceWindow = config.preferredMaintenanceWindow;
        _this._replicationSourceIdentifier = config.replicationSourceIdentifier;
        _this._skipFinalSnapshot = config.skipFinalSnapshot;
        _this._snapshotIdentifier = config.snapshotIdentifier;
        _this._storageEncrypted = config.storageEncrypted;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(NeptuneCluster.prototype, "applyImmediately", {
        get: function () {
            return this.getBooleanAttribute('apply_immediately');
        },
        set: function (value) {
            this._applyImmediately = value;
        },
        enumerable: false,
        configurable: true
    });
    NeptuneCluster.prototype.resetApplyImmediately = function () {
        this._applyImmediately = undefined;
    };
    Object.defineProperty(NeptuneCluster.prototype, "applyImmediatelyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._applyImmediately;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneCluster.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneCluster.prototype, "availabilityZones", {
        get: function () {
            return this.getListAttribute('availability_zones');
        },
        set: function (value) {
            this._availabilityZones = value;
        },
        enumerable: false,
        configurable: true
    });
    NeptuneCluster.prototype.resetAvailabilityZones = function () {
        this._availabilityZones = undefined;
    };
    Object.defineProperty(NeptuneCluster.prototype, "availabilityZonesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._availabilityZones;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneCluster.prototype, "backupRetentionPeriod", {
        get: function () {
            return this.getNumberAttribute('backup_retention_period');
        },
        set: function (value) {
            this._backupRetentionPeriod = value;
        },
        enumerable: false,
        configurable: true
    });
    NeptuneCluster.prototype.resetBackupRetentionPeriod = function () {
        this._backupRetentionPeriod = undefined;
    };
    Object.defineProperty(NeptuneCluster.prototype, "backupRetentionPeriodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._backupRetentionPeriod;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneCluster.prototype, "clusterIdentifier", {
        get: function () {
            return this.getStringAttribute('cluster_identifier');
        },
        set: function (value) {
            this._clusterIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    NeptuneCluster.prototype.resetClusterIdentifier = function () {
        this._clusterIdentifier = undefined;
    };
    Object.defineProperty(NeptuneCluster.prototype, "clusterIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clusterIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneCluster.prototype, "clusterIdentifierPrefix", {
        get: function () {
            return this.getStringAttribute('cluster_identifier_prefix');
        },
        set: function (value) {
            this._clusterIdentifierPrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    NeptuneCluster.prototype.resetClusterIdentifierPrefix = function () {
        this._clusterIdentifierPrefix = undefined;
    };
    Object.defineProperty(NeptuneCluster.prototype, "clusterIdentifierPrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clusterIdentifierPrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneCluster.prototype, "clusterMembers", {
        // cluster_members - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('cluster_members');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneCluster.prototype, "clusterResourceId", {
        // cluster_resource_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cluster_resource_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneCluster.prototype, "copyTagsToSnapshot", {
        get: function () {
            return this.getBooleanAttribute('copy_tags_to_snapshot');
        },
        set: function (value) {
            this._copyTagsToSnapshot = value;
        },
        enumerable: false,
        configurable: true
    });
    NeptuneCluster.prototype.resetCopyTagsToSnapshot = function () {
        this._copyTagsToSnapshot = undefined;
    };
    Object.defineProperty(NeptuneCluster.prototype, "copyTagsToSnapshotInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._copyTagsToSnapshot;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneCluster.prototype, "deletionProtection", {
        get: function () {
            return this.getBooleanAttribute('deletion_protection');
        },
        set: function (value) {
            this._deletionProtection = value;
        },
        enumerable: false,
        configurable: true
    });
    NeptuneCluster.prototype.resetDeletionProtection = function () {
        this._deletionProtection = undefined;
    };
    Object.defineProperty(NeptuneCluster.prototype, "deletionProtectionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deletionProtection;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneCluster.prototype, "enableCloudwatchLogsExports", {
        get: function () {
            return this.getListAttribute('enable_cloudwatch_logs_exports');
        },
        set: function (value) {
            this._enableCloudwatchLogsExports = value;
        },
        enumerable: false,
        configurable: true
    });
    NeptuneCluster.prototype.resetEnableCloudwatchLogsExports = function () {
        this._enableCloudwatchLogsExports = undefined;
    };
    Object.defineProperty(NeptuneCluster.prototype, "enableCloudwatchLogsExportsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enableCloudwatchLogsExports;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneCluster.prototype, "endpoint", {
        // endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('endpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneCluster.prototype, "engine", {
        get: function () {
            return this.getStringAttribute('engine');
        },
        set: function (value) {
            this._engine = value;
        },
        enumerable: false,
        configurable: true
    });
    NeptuneCluster.prototype.resetEngine = function () {
        this._engine = undefined;
    };
    Object.defineProperty(NeptuneCluster.prototype, "engineInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._engine;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneCluster.prototype, "engineVersion", {
        get: function () {
            return this.getStringAttribute('engine_version');
        },
        set: function (value) {
            this._engineVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    NeptuneCluster.prototype.resetEngineVersion = function () {
        this._engineVersion = undefined;
    };
    Object.defineProperty(NeptuneCluster.prototype, "engineVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._engineVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneCluster.prototype, "finalSnapshotIdentifier", {
        get: function () {
            return this.getStringAttribute('final_snapshot_identifier');
        },
        set: function (value) {
            this._finalSnapshotIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    NeptuneCluster.prototype.resetFinalSnapshotIdentifier = function () {
        this._finalSnapshotIdentifier = undefined;
    };
    Object.defineProperty(NeptuneCluster.prototype, "finalSnapshotIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._finalSnapshotIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneCluster.prototype, "hostedZoneId", {
        // hosted_zone_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hosted_zone_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneCluster.prototype, "iamDatabaseAuthenticationEnabled", {
        get: function () {
            return this.getBooleanAttribute('iam_database_authentication_enabled');
        },
        set: function (value) {
            this._iamDatabaseAuthenticationEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    NeptuneCluster.prototype.resetIamDatabaseAuthenticationEnabled = function () {
        this._iamDatabaseAuthenticationEnabled = undefined;
    };
    Object.defineProperty(NeptuneCluster.prototype, "iamDatabaseAuthenticationEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._iamDatabaseAuthenticationEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneCluster.prototype, "iamRoles", {
        get: function () {
            return this.getListAttribute('iam_roles');
        },
        set: function (value) {
            this._iamRoles = value;
        },
        enumerable: false,
        configurable: true
    });
    NeptuneCluster.prototype.resetIamRoles = function () {
        this._iamRoles = undefined;
    };
    Object.defineProperty(NeptuneCluster.prototype, "iamRolesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._iamRoles;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneCluster.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneCluster.prototype, "kmsKeyArn", {
        get: function () {
            return this.getStringAttribute('kms_key_arn');
        },
        set: function (value) {
            this._kmsKeyArn = value;
        },
        enumerable: false,
        configurable: true
    });
    NeptuneCluster.prototype.resetKmsKeyArn = function () {
        this._kmsKeyArn = undefined;
    };
    Object.defineProperty(NeptuneCluster.prototype, "kmsKeyArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kmsKeyArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneCluster.prototype, "neptuneClusterParameterGroupName", {
        get: function () {
            return this.getStringAttribute('neptune_cluster_parameter_group_name');
        },
        set: function (value) {
            this._neptuneClusterParameterGroupName = value;
        },
        enumerable: false,
        configurable: true
    });
    NeptuneCluster.prototype.resetNeptuneClusterParameterGroupName = function () {
        this._neptuneClusterParameterGroupName = undefined;
    };
    Object.defineProperty(NeptuneCluster.prototype, "neptuneClusterParameterGroupNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._neptuneClusterParameterGroupName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneCluster.prototype, "neptuneSubnetGroupName", {
        get: function () {
            return this.getStringAttribute('neptune_subnet_group_name');
        },
        set: function (value) {
            this._neptuneSubnetGroupName = value;
        },
        enumerable: false,
        configurable: true
    });
    NeptuneCluster.prototype.resetNeptuneSubnetGroupName = function () {
        this._neptuneSubnetGroupName = undefined;
    };
    Object.defineProperty(NeptuneCluster.prototype, "neptuneSubnetGroupNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._neptuneSubnetGroupName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneCluster.prototype, "port", {
        get: function () {
            return this.getNumberAttribute('port');
        },
        set: function (value) {
            this._port = value;
        },
        enumerable: false,
        configurable: true
    });
    NeptuneCluster.prototype.resetPort = function () {
        this._port = undefined;
    };
    Object.defineProperty(NeptuneCluster.prototype, "portInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._port;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneCluster.prototype, "preferredBackupWindow", {
        get: function () {
            return this.getStringAttribute('preferred_backup_window');
        },
        set: function (value) {
            this._preferredBackupWindow = value;
        },
        enumerable: false,
        configurable: true
    });
    NeptuneCluster.prototype.resetPreferredBackupWindow = function () {
        this._preferredBackupWindow = undefined;
    };
    Object.defineProperty(NeptuneCluster.prototype, "preferredBackupWindowInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._preferredBackupWindow;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneCluster.prototype, "preferredMaintenanceWindow", {
        get: function () {
            return this.getStringAttribute('preferred_maintenance_window');
        },
        set: function (value) {
            this._preferredMaintenanceWindow = value;
        },
        enumerable: false,
        configurable: true
    });
    NeptuneCluster.prototype.resetPreferredMaintenanceWindow = function () {
        this._preferredMaintenanceWindow = undefined;
    };
    Object.defineProperty(NeptuneCluster.prototype, "preferredMaintenanceWindowInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._preferredMaintenanceWindow;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneCluster.prototype, "readerEndpoint", {
        // reader_endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('reader_endpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneCluster.prototype, "replicationSourceIdentifier", {
        get: function () {
            return this.getStringAttribute('replication_source_identifier');
        },
        set: function (value) {
            this._replicationSourceIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    NeptuneCluster.prototype.resetReplicationSourceIdentifier = function () {
        this._replicationSourceIdentifier = undefined;
    };
    Object.defineProperty(NeptuneCluster.prototype, "replicationSourceIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._replicationSourceIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneCluster.prototype, "skipFinalSnapshot", {
        get: function () {
            return this.getBooleanAttribute('skip_final_snapshot');
        },
        set: function (value) {
            this._skipFinalSnapshot = value;
        },
        enumerable: false,
        configurable: true
    });
    NeptuneCluster.prototype.resetSkipFinalSnapshot = function () {
        this._skipFinalSnapshot = undefined;
    };
    Object.defineProperty(NeptuneCluster.prototype, "skipFinalSnapshotInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._skipFinalSnapshot;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneCluster.prototype, "snapshotIdentifier", {
        get: function () {
            return this.getStringAttribute('snapshot_identifier');
        },
        set: function (value) {
            this._snapshotIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    NeptuneCluster.prototype.resetSnapshotIdentifier = function () {
        this._snapshotIdentifier = undefined;
    };
    Object.defineProperty(NeptuneCluster.prototype, "snapshotIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._snapshotIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneCluster.prototype, "storageEncrypted", {
        get: function () {
            return this.getBooleanAttribute('storage_encrypted');
        },
        set: function (value) {
            this._storageEncrypted = value;
        },
        enumerable: false,
        configurable: true
    });
    NeptuneCluster.prototype.resetStorageEncrypted = function () {
        this._storageEncrypted = undefined;
    };
    Object.defineProperty(NeptuneCluster.prototype, "storageEncryptedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._storageEncrypted;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneCluster.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    NeptuneCluster.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(NeptuneCluster.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneCluster.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    NeptuneCluster.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(NeptuneCluster.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneCluster.prototype, "vpcSecurityGroupIds", {
        get: function () {
            return this.getListAttribute('vpc_security_group_ids');
        },
        set: function (value) {
            this._vpcSecurityGroupIds = value;
        },
        enumerable: false,
        configurable: true
    });
    NeptuneCluster.prototype.resetVpcSecurityGroupIds = function () {
        this._vpcSecurityGroupIds = undefined;
    };
    Object.defineProperty(NeptuneCluster.prototype, "vpcSecurityGroupIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcSecurityGroupIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneCluster.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    NeptuneCluster.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(NeptuneCluster.prototype, "timeoutsInput", {
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
    NeptuneCluster.prototype.synthesizeAttributes = function () {
        return {
            apply_immediately: cdktf.booleanToTerraform(this._applyImmediately),
            availability_zones: cdktf.listMapper(cdktf.stringToTerraform)(this._availabilityZones),
            backup_retention_period: cdktf.numberToTerraform(this._backupRetentionPeriod),
            cluster_identifier: cdktf.stringToTerraform(this._clusterIdentifier),
            cluster_identifier_prefix: cdktf.stringToTerraform(this._clusterIdentifierPrefix),
            copy_tags_to_snapshot: cdktf.booleanToTerraform(this._copyTagsToSnapshot),
            deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
            enable_cloudwatch_logs_exports: cdktf.listMapper(cdktf.stringToTerraform)(this._enableCloudwatchLogsExports),
            engine: cdktf.stringToTerraform(this._engine),
            engine_version: cdktf.stringToTerraform(this._engineVersion),
            final_snapshot_identifier: cdktf.stringToTerraform(this._finalSnapshotIdentifier),
            iam_database_authentication_enabled: cdktf.booleanToTerraform(this._iamDatabaseAuthenticationEnabled),
            iam_roles: cdktf.listMapper(cdktf.stringToTerraform)(this._iamRoles),
            kms_key_arn: cdktf.stringToTerraform(this._kmsKeyArn),
            neptune_cluster_parameter_group_name: cdktf.stringToTerraform(this._neptuneClusterParameterGroupName),
            neptune_subnet_group_name: cdktf.stringToTerraform(this._neptuneSubnetGroupName),
            port: cdktf.numberToTerraform(this._port),
            preferred_backup_window: cdktf.stringToTerraform(this._preferredBackupWindow),
            preferred_maintenance_window: cdktf.stringToTerraform(this._preferredMaintenanceWindow),
            replication_source_identifier: cdktf.stringToTerraform(this._replicationSourceIdentifier),
            skip_final_snapshot: cdktf.booleanToTerraform(this._skipFinalSnapshot),
            snapshot_identifier: cdktf.stringToTerraform(this._snapshotIdentifier),
            storage_encrypted: cdktf.booleanToTerraform(this._storageEncrypted),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSecurityGroupIds),
            timeouts: neptuneClusterTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    NeptuneCluster.tfResourceType = "aws_neptune_cluster";
    return NeptuneCluster;
}(cdktf.TerraformResource));
exports.NeptuneCluster = NeptuneCluster;
