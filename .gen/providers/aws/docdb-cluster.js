"use strict";
// https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html
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
exports.DocdbCluster = void 0;
var cdktf = require("cdktf");
function docdbClusterTimeoutsToTerraform(struct) {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html aws_docdb_cluster}
*/
var DocdbCluster = /** @class */ (function (_super) {
    __extends(DocdbCluster, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html aws_docdb_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DocdbClusterConfig = {}
    */
    function DocdbCluster(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_docdb_cluster',
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
        _this._clusterMembers = config.clusterMembers;
        _this._dbClusterParameterGroupName = config.dbClusterParameterGroupName;
        _this._dbSubnetGroupName = config.dbSubnetGroupName;
        _this._deletionProtection = config.deletionProtection;
        _this._enabledCloudwatchLogsExports = config.enabledCloudwatchLogsExports;
        _this._engine = config.engine;
        _this._engineVersion = config.engineVersion;
        _this._finalSnapshotIdentifier = config.finalSnapshotIdentifier;
        _this._globalClusterIdentifier = config.globalClusterIdentifier;
        _this._kmsKeyId = config.kmsKeyId;
        _this._masterPassword = config.masterPassword;
        _this._masterUsername = config.masterUsername;
        _this._port = config.port;
        _this._preferredBackupWindow = config.preferredBackupWindow;
        _this._preferredMaintenanceWindow = config.preferredMaintenanceWindow;
        _this._skipFinalSnapshot = config.skipFinalSnapshot;
        _this._snapshotIdentifier = config.snapshotIdentifier;
        _this._storageEncrypted = config.storageEncrypted;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(DocdbCluster.prototype, "applyImmediately", {
        get: function () {
            return this.getBooleanAttribute('apply_immediately');
        },
        set: function (value) {
            this._applyImmediately = value;
        },
        enumerable: false,
        configurable: true
    });
    DocdbCluster.prototype.resetApplyImmediately = function () {
        this._applyImmediately = undefined;
    };
    Object.defineProperty(DocdbCluster.prototype, "applyImmediatelyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._applyImmediately;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbCluster.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbCluster.prototype, "availabilityZones", {
        get: function () {
            return this.getListAttribute('availability_zones');
        },
        set: function (value) {
            this._availabilityZones = value;
        },
        enumerable: false,
        configurable: true
    });
    DocdbCluster.prototype.resetAvailabilityZones = function () {
        this._availabilityZones = undefined;
    };
    Object.defineProperty(DocdbCluster.prototype, "availabilityZonesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._availabilityZones;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbCluster.prototype, "backupRetentionPeriod", {
        get: function () {
            return this.getNumberAttribute('backup_retention_period');
        },
        set: function (value) {
            this._backupRetentionPeriod = value;
        },
        enumerable: false,
        configurable: true
    });
    DocdbCluster.prototype.resetBackupRetentionPeriod = function () {
        this._backupRetentionPeriod = undefined;
    };
    Object.defineProperty(DocdbCluster.prototype, "backupRetentionPeriodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._backupRetentionPeriod;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbCluster.prototype, "clusterIdentifier", {
        get: function () {
            return this.getStringAttribute('cluster_identifier');
        },
        set: function (value) {
            this._clusterIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    DocdbCluster.prototype.resetClusterIdentifier = function () {
        this._clusterIdentifier = undefined;
    };
    Object.defineProperty(DocdbCluster.prototype, "clusterIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clusterIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbCluster.prototype, "clusterIdentifierPrefix", {
        get: function () {
            return this.getStringAttribute('cluster_identifier_prefix');
        },
        set: function (value) {
            this._clusterIdentifierPrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    DocdbCluster.prototype.resetClusterIdentifierPrefix = function () {
        this._clusterIdentifierPrefix = undefined;
    };
    Object.defineProperty(DocdbCluster.prototype, "clusterIdentifierPrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clusterIdentifierPrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbCluster.prototype, "clusterMembers", {
        get: function () {
            return this.getListAttribute('cluster_members');
        },
        set: function (value) {
            this._clusterMembers = value;
        },
        enumerable: false,
        configurable: true
    });
    DocdbCluster.prototype.resetClusterMembers = function () {
        this._clusterMembers = undefined;
    };
    Object.defineProperty(DocdbCluster.prototype, "clusterMembersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clusterMembers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbCluster.prototype, "clusterResourceId", {
        // cluster_resource_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cluster_resource_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbCluster.prototype, "dbClusterParameterGroupName", {
        get: function () {
            return this.getStringAttribute('db_cluster_parameter_group_name');
        },
        set: function (value) {
            this._dbClusterParameterGroupName = value;
        },
        enumerable: false,
        configurable: true
    });
    DocdbCluster.prototype.resetDbClusterParameterGroupName = function () {
        this._dbClusterParameterGroupName = undefined;
    };
    Object.defineProperty(DocdbCluster.prototype, "dbClusterParameterGroupNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dbClusterParameterGroupName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbCluster.prototype, "dbSubnetGroupName", {
        get: function () {
            return this.getStringAttribute('db_subnet_group_name');
        },
        set: function (value) {
            this._dbSubnetGroupName = value;
        },
        enumerable: false,
        configurable: true
    });
    DocdbCluster.prototype.resetDbSubnetGroupName = function () {
        this._dbSubnetGroupName = undefined;
    };
    Object.defineProperty(DocdbCluster.prototype, "dbSubnetGroupNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dbSubnetGroupName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbCluster.prototype, "deletionProtection", {
        get: function () {
            return this.getBooleanAttribute('deletion_protection');
        },
        set: function (value) {
            this._deletionProtection = value;
        },
        enumerable: false,
        configurable: true
    });
    DocdbCluster.prototype.resetDeletionProtection = function () {
        this._deletionProtection = undefined;
    };
    Object.defineProperty(DocdbCluster.prototype, "deletionProtectionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deletionProtection;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbCluster.prototype, "enabledCloudwatchLogsExports", {
        get: function () {
            return this.getListAttribute('enabled_cloudwatch_logs_exports');
        },
        set: function (value) {
            this._enabledCloudwatchLogsExports = value;
        },
        enumerable: false,
        configurable: true
    });
    DocdbCluster.prototype.resetEnabledCloudwatchLogsExports = function () {
        this._enabledCloudwatchLogsExports = undefined;
    };
    Object.defineProperty(DocdbCluster.prototype, "enabledCloudwatchLogsExportsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabledCloudwatchLogsExports;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbCluster.prototype, "endpoint", {
        // endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('endpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbCluster.prototype, "engine", {
        get: function () {
            return this.getStringAttribute('engine');
        },
        set: function (value) {
            this._engine = value;
        },
        enumerable: false,
        configurable: true
    });
    DocdbCluster.prototype.resetEngine = function () {
        this._engine = undefined;
    };
    Object.defineProperty(DocdbCluster.prototype, "engineInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._engine;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbCluster.prototype, "engineVersion", {
        get: function () {
            return this.getStringAttribute('engine_version');
        },
        set: function (value) {
            this._engineVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    DocdbCluster.prototype.resetEngineVersion = function () {
        this._engineVersion = undefined;
    };
    Object.defineProperty(DocdbCluster.prototype, "engineVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._engineVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbCluster.prototype, "finalSnapshotIdentifier", {
        get: function () {
            return this.getStringAttribute('final_snapshot_identifier');
        },
        set: function (value) {
            this._finalSnapshotIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    DocdbCluster.prototype.resetFinalSnapshotIdentifier = function () {
        this._finalSnapshotIdentifier = undefined;
    };
    Object.defineProperty(DocdbCluster.prototype, "finalSnapshotIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._finalSnapshotIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbCluster.prototype, "globalClusterIdentifier", {
        get: function () {
            return this.getStringAttribute('global_cluster_identifier');
        },
        set: function (value) {
            this._globalClusterIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    DocdbCluster.prototype.resetGlobalClusterIdentifier = function () {
        this._globalClusterIdentifier = undefined;
    };
    Object.defineProperty(DocdbCluster.prototype, "globalClusterIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._globalClusterIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbCluster.prototype, "hostedZoneId", {
        // hosted_zone_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hosted_zone_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbCluster.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbCluster.prototype, "kmsKeyId", {
        get: function () {
            return this.getStringAttribute('kms_key_id');
        },
        set: function (value) {
            this._kmsKeyId = value;
        },
        enumerable: false,
        configurable: true
    });
    DocdbCluster.prototype.resetKmsKeyId = function () {
        this._kmsKeyId = undefined;
    };
    Object.defineProperty(DocdbCluster.prototype, "kmsKeyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kmsKeyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbCluster.prototype, "masterPassword", {
        get: function () {
            return this.getStringAttribute('master_password');
        },
        set: function (value) {
            this._masterPassword = value;
        },
        enumerable: false,
        configurable: true
    });
    DocdbCluster.prototype.resetMasterPassword = function () {
        this._masterPassword = undefined;
    };
    Object.defineProperty(DocdbCluster.prototype, "masterPasswordInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._masterPassword;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbCluster.prototype, "masterUsername", {
        get: function () {
            return this.getStringAttribute('master_username');
        },
        set: function (value) {
            this._masterUsername = value;
        },
        enumerable: false,
        configurable: true
    });
    DocdbCluster.prototype.resetMasterUsername = function () {
        this._masterUsername = undefined;
    };
    Object.defineProperty(DocdbCluster.prototype, "masterUsernameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._masterUsername;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbCluster.prototype, "port", {
        get: function () {
            return this.getNumberAttribute('port');
        },
        set: function (value) {
            this._port = value;
        },
        enumerable: false,
        configurable: true
    });
    DocdbCluster.prototype.resetPort = function () {
        this._port = undefined;
    };
    Object.defineProperty(DocdbCluster.prototype, "portInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._port;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbCluster.prototype, "preferredBackupWindow", {
        get: function () {
            return this.getStringAttribute('preferred_backup_window');
        },
        set: function (value) {
            this._preferredBackupWindow = value;
        },
        enumerable: false,
        configurable: true
    });
    DocdbCluster.prototype.resetPreferredBackupWindow = function () {
        this._preferredBackupWindow = undefined;
    };
    Object.defineProperty(DocdbCluster.prototype, "preferredBackupWindowInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._preferredBackupWindow;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbCluster.prototype, "preferredMaintenanceWindow", {
        get: function () {
            return this.getStringAttribute('preferred_maintenance_window');
        },
        set: function (value) {
            this._preferredMaintenanceWindow = value;
        },
        enumerable: false,
        configurable: true
    });
    DocdbCluster.prototype.resetPreferredMaintenanceWindow = function () {
        this._preferredMaintenanceWindow = undefined;
    };
    Object.defineProperty(DocdbCluster.prototype, "preferredMaintenanceWindowInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._preferredMaintenanceWindow;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbCluster.prototype, "readerEndpoint", {
        // reader_endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('reader_endpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbCluster.prototype, "skipFinalSnapshot", {
        get: function () {
            return this.getBooleanAttribute('skip_final_snapshot');
        },
        set: function (value) {
            this._skipFinalSnapshot = value;
        },
        enumerable: false,
        configurable: true
    });
    DocdbCluster.prototype.resetSkipFinalSnapshot = function () {
        this._skipFinalSnapshot = undefined;
    };
    Object.defineProperty(DocdbCluster.prototype, "skipFinalSnapshotInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._skipFinalSnapshot;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbCluster.prototype, "snapshotIdentifier", {
        get: function () {
            return this.getStringAttribute('snapshot_identifier');
        },
        set: function (value) {
            this._snapshotIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    DocdbCluster.prototype.resetSnapshotIdentifier = function () {
        this._snapshotIdentifier = undefined;
    };
    Object.defineProperty(DocdbCluster.prototype, "snapshotIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._snapshotIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbCluster.prototype, "storageEncrypted", {
        get: function () {
            return this.getBooleanAttribute('storage_encrypted');
        },
        set: function (value) {
            this._storageEncrypted = value;
        },
        enumerable: false,
        configurable: true
    });
    DocdbCluster.prototype.resetStorageEncrypted = function () {
        this._storageEncrypted = undefined;
    };
    Object.defineProperty(DocdbCluster.prototype, "storageEncryptedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._storageEncrypted;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbCluster.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DocdbCluster.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DocdbCluster.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbCluster.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    DocdbCluster.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(DocdbCluster.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbCluster.prototype, "vpcSecurityGroupIds", {
        get: function () {
            return this.getListAttribute('vpc_security_group_ids');
        },
        set: function (value) {
            this._vpcSecurityGroupIds = value;
        },
        enumerable: false,
        configurable: true
    });
    DocdbCluster.prototype.resetVpcSecurityGroupIds = function () {
        this._vpcSecurityGroupIds = undefined;
    };
    Object.defineProperty(DocdbCluster.prototype, "vpcSecurityGroupIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcSecurityGroupIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbCluster.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    DocdbCluster.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(DocdbCluster.prototype, "timeoutsInput", {
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
    DocdbCluster.prototype.synthesizeAttributes = function () {
        return {
            apply_immediately: cdktf.booleanToTerraform(this._applyImmediately),
            availability_zones: cdktf.listMapper(cdktf.stringToTerraform)(this._availabilityZones),
            backup_retention_period: cdktf.numberToTerraform(this._backupRetentionPeriod),
            cluster_identifier: cdktf.stringToTerraform(this._clusterIdentifier),
            cluster_identifier_prefix: cdktf.stringToTerraform(this._clusterIdentifierPrefix),
            cluster_members: cdktf.listMapper(cdktf.stringToTerraform)(this._clusterMembers),
            db_cluster_parameter_group_name: cdktf.stringToTerraform(this._dbClusterParameterGroupName),
            db_subnet_group_name: cdktf.stringToTerraform(this._dbSubnetGroupName),
            deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
            enabled_cloudwatch_logs_exports: cdktf.listMapper(cdktf.stringToTerraform)(this._enabledCloudwatchLogsExports),
            engine: cdktf.stringToTerraform(this._engine),
            engine_version: cdktf.stringToTerraform(this._engineVersion),
            final_snapshot_identifier: cdktf.stringToTerraform(this._finalSnapshotIdentifier),
            global_cluster_identifier: cdktf.stringToTerraform(this._globalClusterIdentifier),
            kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
            master_password: cdktf.stringToTerraform(this._masterPassword),
            master_username: cdktf.stringToTerraform(this._masterUsername),
            port: cdktf.numberToTerraform(this._port),
            preferred_backup_window: cdktf.stringToTerraform(this._preferredBackupWindow),
            preferred_maintenance_window: cdktf.stringToTerraform(this._preferredMaintenanceWindow),
            skip_final_snapshot: cdktf.booleanToTerraform(this._skipFinalSnapshot),
            snapshot_identifier: cdktf.stringToTerraform(this._snapshotIdentifier),
            storage_encrypted: cdktf.booleanToTerraform(this._storageEncrypted),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSecurityGroupIds),
            timeouts: docdbClusterTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DocdbCluster.tfResourceType = "aws_docdb_cluster";
    return DocdbCluster;
}(cdktf.TerraformResource));
exports.DocdbCluster = DocdbCluster;
