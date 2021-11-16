"use strict";
// https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html
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
exports.ElasticacheReplicationGroup = void 0;
var cdktf = require("cdktf");
function elasticacheReplicationGroupClusterModeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        num_node_groups: cdktf.numberToTerraform(struct.numNodeGroups),
        replicas_per_node_group: cdktf.numberToTerraform(struct.replicasPerNodeGroup)
    };
}
function elasticacheReplicationGroupTimeoutsToTerraform(struct) {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html aws_elasticache_replication_group}
*/
var ElasticacheReplicationGroup = /** @class */ (function (_super) {
    __extends(ElasticacheReplicationGroup, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html aws_elasticache_replication_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElasticacheReplicationGroupConfig
    */
    function ElasticacheReplicationGroup(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_elasticache_replication_group',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._applyImmediately = config.applyImmediately;
        _this._atRestEncryptionEnabled = config.atRestEncryptionEnabled;
        _this._authToken = config.authToken;
        _this._autoMinorVersionUpgrade = config.autoMinorVersionUpgrade;
        _this._automaticFailoverEnabled = config.automaticFailoverEnabled;
        _this._availabilityZones = config.availabilityZones;
        _this._engine = config.engine;
        _this._engineVersion = config.engineVersion;
        _this._finalSnapshotIdentifier = config.finalSnapshotIdentifier;
        _this._globalReplicationGroupId = config.globalReplicationGroupId;
        _this._kmsKeyId = config.kmsKeyId;
        _this._maintenanceWindow = config.maintenanceWindow;
        _this._multiAzEnabled = config.multiAzEnabled;
        _this._nodeType = config.nodeType;
        _this._notificationTopicArn = config.notificationTopicArn;
        _this._numberCacheClusters = config.numberCacheClusters;
        _this._parameterGroupName = config.parameterGroupName;
        _this._port = config.port;
        _this._replicationGroupDescription = config.replicationGroupDescription;
        _this._replicationGroupId = config.replicationGroupId;
        _this._securityGroupIds = config.securityGroupIds;
        _this._securityGroupNames = config.securityGroupNames;
        _this._snapshotArns = config.snapshotArns;
        _this._snapshotName = config.snapshotName;
        _this._snapshotRetentionLimit = config.snapshotRetentionLimit;
        _this._snapshotWindow = config.snapshotWindow;
        _this._subnetGroupName = config.subnetGroupName;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._transitEncryptionEnabled = config.transitEncryptionEnabled;
        _this._clusterMode = config.clusterMode;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "applyImmediately", {
        get: function () {
            return this.getBooleanAttribute('apply_immediately');
        },
        set: function (value) {
            this._applyImmediately = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheReplicationGroup.prototype.resetApplyImmediately = function () {
        this._applyImmediately = undefined;
    };
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "applyImmediatelyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._applyImmediately;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "atRestEncryptionEnabled", {
        get: function () {
            return this.getBooleanAttribute('at_rest_encryption_enabled');
        },
        set: function (value) {
            this._atRestEncryptionEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheReplicationGroup.prototype.resetAtRestEncryptionEnabled = function () {
        this._atRestEncryptionEnabled = undefined;
    };
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "atRestEncryptionEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._atRestEncryptionEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "authToken", {
        get: function () {
            return this.getStringAttribute('auth_token');
        },
        set: function (value) {
            this._authToken = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheReplicationGroup.prototype.resetAuthToken = function () {
        this._authToken = undefined;
    };
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "authTokenInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authToken;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "autoMinorVersionUpgrade", {
        get: function () {
            return this.getBooleanAttribute('auto_minor_version_upgrade');
        },
        set: function (value) {
            this._autoMinorVersionUpgrade = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheReplicationGroup.prototype.resetAutoMinorVersionUpgrade = function () {
        this._autoMinorVersionUpgrade = undefined;
    };
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "autoMinorVersionUpgradeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoMinorVersionUpgrade;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "automaticFailoverEnabled", {
        get: function () {
            return this.getBooleanAttribute('automatic_failover_enabled');
        },
        set: function (value) {
            this._automaticFailoverEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheReplicationGroup.prototype.resetAutomaticFailoverEnabled = function () {
        this._automaticFailoverEnabled = undefined;
    };
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "automaticFailoverEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._automaticFailoverEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "availabilityZones", {
        get: function () {
            return this.getListAttribute('availability_zones');
        },
        set: function (value) {
            this._availabilityZones = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheReplicationGroup.prototype.resetAvailabilityZones = function () {
        this._availabilityZones = undefined;
    };
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "availabilityZonesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._availabilityZones;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "clusterEnabled", {
        // cluster_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('cluster_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "configurationEndpointAddress", {
        // configuration_endpoint_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('configuration_endpoint_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "engine", {
        get: function () {
            return this.getStringAttribute('engine');
        },
        set: function (value) {
            this._engine = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheReplicationGroup.prototype.resetEngine = function () {
        this._engine = undefined;
    };
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "engineInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._engine;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "engineVersion", {
        get: function () {
            return this.getStringAttribute('engine_version');
        },
        set: function (value) {
            this._engineVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheReplicationGroup.prototype.resetEngineVersion = function () {
        this._engineVersion = undefined;
    };
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "engineVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._engineVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "engineVersionActual", {
        // engine_version_actual - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('engine_version_actual');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "finalSnapshotIdentifier", {
        get: function () {
            return this.getStringAttribute('final_snapshot_identifier');
        },
        set: function (value) {
            this._finalSnapshotIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheReplicationGroup.prototype.resetFinalSnapshotIdentifier = function () {
        this._finalSnapshotIdentifier = undefined;
    };
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "finalSnapshotIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._finalSnapshotIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "globalReplicationGroupId", {
        get: function () {
            return this.getStringAttribute('global_replication_group_id');
        },
        set: function (value) {
            this._globalReplicationGroupId = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheReplicationGroup.prototype.resetGlobalReplicationGroupId = function () {
        this._globalReplicationGroupId = undefined;
    };
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "globalReplicationGroupIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._globalReplicationGroupId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "kmsKeyId", {
        get: function () {
            return this.getStringAttribute('kms_key_id');
        },
        set: function (value) {
            this._kmsKeyId = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheReplicationGroup.prototype.resetKmsKeyId = function () {
        this._kmsKeyId = undefined;
    };
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "kmsKeyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kmsKeyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "maintenanceWindow", {
        get: function () {
            return this.getStringAttribute('maintenance_window');
        },
        set: function (value) {
            this._maintenanceWindow = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheReplicationGroup.prototype.resetMaintenanceWindow = function () {
        this._maintenanceWindow = undefined;
    };
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "maintenanceWindowInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maintenanceWindow;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "memberClusters", {
        // member_clusters - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('member_clusters');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "multiAzEnabled", {
        get: function () {
            return this.getBooleanAttribute('multi_az_enabled');
        },
        set: function (value) {
            this._multiAzEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheReplicationGroup.prototype.resetMultiAzEnabled = function () {
        this._multiAzEnabled = undefined;
    };
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "multiAzEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._multiAzEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "nodeType", {
        get: function () {
            return this.getStringAttribute('node_type');
        },
        set: function (value) {
            this._nodeType = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheReplicationGroup.prototype.resetNodeType = function () {
        this._nodeType = undefined;
    };
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "nodeTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._nodeType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "notificationTopicArn", {
        get: function () {
            return this.getStringAttribute('notification_topic_arn');
        },
        set: function (value) {
            this._notificationTopicArn = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheReplicationGroup.prototype.resetNotificationTopicArn = function () {
        this._notificationTopicArn = undefined;
    };
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "notificationTopicArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._notificationTopicArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "numberCacheClusters", {
        get: function () {
            return this.getNumberAttribute('number_cache_clusters');
        },
        set: function (value) {
            this._numberCacheClusters = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheReplicationGroup.prototype.resetNumberCacheClusters = function () {
        this._numberCacheClusters = undefined;
    };
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "numberCacheClustersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._numberCacheClusters;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "parameterGroupName", {
        get: function () {
            return this.getStringAttribute('parameter_group_name');
        },
        set: function (value) {
            this._parameterGroupName = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheReplicationGroup.prototype.resetParameterGroupName = function () {
        this._parameterGroupName = undefined;
    };
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "parameterGroupNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._parameterGroupName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "port", {
        get: function () {
            return this.getNumberAttribute('port');
        },
        set: function (value) {
            this._port = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheReplicationGroup.prototype.resetPort = function () {
        this._port = undefined;
    };
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "portInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._port;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "primaryEndpointAddress", {
        // primary_endpoint_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('primary_endpoint_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "readerEndpointAddress", {
        // reader_endpoint_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('reader_endpoint_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "replicationGroupDescription", {
        get: function () {
            return this.getStringAttribute('replication_group_description');
        },
        set: function (value) {
            this._replicationGroupDescription = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "replicationGroupDescriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._replicationGroupDescription;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "replicationGroupId", {
        get: function () {
            return this.getStringAttribute('replication_group_id');
        },
        set: function (value) {
            this._replicationGroupId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "replicationGroupIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._replicationGroupId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "securityGroupIds", {
        get: function () {
            return this.getListAttribute('security_group_ids');
        },
        set: function (value) {
            this._securityGroupIds = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheReplicationGroup.prototype.resetSecurityGroupIds = function () {
        this._securityGroupIds = undefined;
    };
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "securityGroupIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._securityGroupIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "securityGroupNames", {
        get: function () {
            return this.getListAttribute('security_group_names');
        },
        set: function (value) {
            this._securityGroupNames = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheReplicationGroup.prototype.resetSecurityGroupNames = function () {
        this._securityGroupNames = undefined;
    };
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "securityGroupNamesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._securityGroupNames;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "snapshotArns", {
        get: function () {
            return this.getListAttribute('snapshot_arns');
        },
        set: function (value) {
            this._snapshotArns = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheReplicationGroup.prototype.resetSnapshotArns = function () {
        this._snapshotArns = undefined;
    };
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "snapshotArnsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._snapshotArns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "snapshotName", {
        get: function () {
            return this.getStringAttribute('snapshot_name');
        },
        set: function (value) {
            this._snapshotName = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheReplicationGroup.prototype.resetSnapshotName = function () {
        this._snapshotName = undefined;
    };
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "snapshotNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._snapshotName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "snapshotRetentionLimit", {
        get: function () {
            return this.getNumberAttribute('snapshot_retention_limit');
        },
        set: function (value) {
            this._snapshotRetentionLimit = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheReplicationGroup.prototype.resetSnapshotRetentionLimit = function () {
        this._snapshotRetentionLimit = undefined;
    };
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "snapshotRetentionLimitInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._snapshotRetentionLimit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "snapshotWindow", {
        get: function () {
            return this.getStringAttribute('snapshot_window');
        },
        set: function (value) {
            this._snapshotWindow = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheReplicationGroup.prototype.resetSnapshotWindow = function () {
        this._snapshotWindow = undefined;
    };
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "snapshotWindowInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._snapshotWindow;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "subnetGroupName", {
        get: function () {
            return this.getStringAttribute('subnet_group_name');
        },
        set: function (value) {
            this._subnetGroupName = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheReplicationGroup.prototype.resetSubnetGroupName = function () {
        this._subnetGroupName = undefined;
    };
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "subnetGroupNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subnetGroupName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheReplicationGroup.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheReplicationGroup.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "transitEncryptionEnabled", {
        get: function () {
            return this.getBooleanAttribute('transit_encryption_enabled');
        },
        set: function (value) {
            this._transitEncryptionEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheReplicationGroup.prototype.resetTransitEncryptionEnabled = function () {
        this._transitEncryptionEnabled = undefined;
    };
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "transitEncryptionEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._transitEncryptionEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "clusterMode", {
        get: function () {
            return this.interpolationForAttribute('cluster_mode');
        },
        set: function (value) {
            this._clusterMode = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheReplicationGroup.prototype.resetClusterMode = function () {
        this._clusterMode = undefined;
    };
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "clusterModeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clusterMode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheReplicationGroup.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(ElasticacheReplicationGroup.prototype, "timeoutsInput", {
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
    ElasticacheReplicationGroup.prototype.synthesizeAttributes = function () {
        return {
            apply_immediately: cdktf.booleanToTerraform(this._applyImmediately),
            at_rest_encryption_enabled: cdktf.booleanToTerraform(this._atRestEncryptionEnabled),
            auth_token: cdktf.stringToTerraform(this._authToken),
            auto_minor_version_upgrade: cdktf.booleanToTerraform(this._autoMinorVersionUpgrade),
            automatic_failover_enabled: cdktf.booleanToTerraform(this._automaticFailoverEnabled),
            availability_zones: cdktf.listMapper(cdktf.stringToTerraform)(this._availabilityZones),
            engine: cdktf.stringToTerraform(this._engine),
            engine_version: cdktf.stringToTerraform(this._engineVersion),
            final_snapshot_identifier: cdktf.stringToTerraform(this._finalSnapshotIdentifier),
            global_replication_group_id: cdktf.stringToTerraform(this._globalReplicationGroupId),
            kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
            maintenance_window: cdktf.stringToTerraform(this._maintenanceWindow),
            multi_az_enabled: cdktf.booleanToTerraform(this._multiAzEnabled),
            node_type: cdktf.stringToTerraform(this._nodeType),
            notification_topic_arn: cdktf.stringToTerraform(this._notificationTopicArn),
            number_cache_clusters: cdktf.numberToTerraform(this._numberCacheClusters),
            parameter_group_name: cdktf.stringToTerraform(this._parameterGroupName),
            port: cdktf.numberToTerraform(this._port),
            replication_group_description: cdktf.stringToTerraform(this._replicationGroupDescription),
            replication_group_id: cdktf.stringToTerraform(this._replicationGroupId),
            security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupIds),
            security_group_names: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupNames),
            snapshot_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._snapshotArns),
            snapshot_name: cdktf.stringToTerraform(this._snapshotName),
            snapshot_retention_limit: cdktf.numberToTerraform(this._snapshotRetentionLimit),
            snapshot_window: cdktf.stringToTerraform(this._snapshotWindow),
            subnet_group_name: cdktf.stringToTerraform(this._subnetGroupName),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            transit_encryption_enabled: cdktf.booleanToTerraform(this._transitEncryptionEnabled),
            cluster_mode: cdktf.listMapper(elasticacheReplicationGroupClusterModeToTerraform)(this._clusterMode),
            timeouts: elasticacheReplicationGroupTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ElasticacheReplicationGroup.tfResourceType = "aws_elasticache_replication_group";
    return ElasticacheReplicationGroup;
}(cdktf.TerraformResource));
exports.ElasticacheReplicationGroup = ElasticacheReplicationGroup;
