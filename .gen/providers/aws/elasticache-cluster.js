"use strict";
// https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html
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
exports.ElasticacheCluster = exports.ElasticacheClusterCacheNodes = void 0;
var cdktf = require("cdktf");
var ElasticacheClusterCacheNodes = /** @class */ (function (_super) {
    __extends(ElasticacheClusterCacheNodes, _super);
    function ElasticacheClusterCacheNodes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ElasticacheClusterCacheNodes.prototype, "address", {
        // address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheClusterCacheNodes.prototype, "availabilityZone", {
        // availability_zone - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('availability_zone');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheClusterCacheNodes.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheClusterCacheNodes.prototype, "port", {
        // port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('port');
        },
        enumerable: false,
        configurable: true
    });
    return ElasticacheClusterCacheNodes;
}(cdktf.ComplexComputedList));
exports.ElasticacheClusterCacheNodes = ElasticacheClusterCacheNodes;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html aws_elasticache_cluster}
*/
var ElasticacheCluster = /** @class */ (function (_super) {
    __extends(ElasticacheCluster, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html aws_elasticache_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElasticacheClusterConfig
    */
    function ElasticacheCluster(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_elasticache_cluster',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._applyImmediately = config.applyImmediately;
        _this._availabilityZone = config.availabilityZone;
        _this._azMode = config.azMode;
        _this._clusterId = config.clusterId;
        _this._engine = config.engine;
        _this._engineVersion = config.engineVersion;
        _this._finalSnapshotIdentifier = config.finalSnapshotIdentifier;
        _this._maintenanceWindow = config.maintenanceWindow;
        _this._nodeType = config.nodeType;
        _this._notificationTopicArn = config.notificationTopicArn;
        _this._numCacheNodes = config.numCacheNodes;
        _this._parameterGroupName = config.parameterGroupName;
        _this._port = config.port;
        _this._preferredAvailabilityZones = config.preferredAvailabilityZones;
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
        return _this;
    }
    Object.defineProperty(ElasticacheCluster.prototype, "applyImmediately", {
        get: function () {
            return this.getBooleanAttribute('apply_immediately');
        },
        set: function (value) {
            this._applyImmediately = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheCluster.prototype.resetApplyImmediately = function () {
        this._applyImmediately = undefined;
    };
    Object.defineProperty(ElasticacheCluster.prototype, "applyImmediatelyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._applyImmediately;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheCluster.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheCluster.prototype, "availabilityZone", {
        get: function () {
            return this.getStringAttribute('availability_zone');
        },
        set: function (value) {
            this._availabilityZone = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheCluster.prototype.resetAvailabilityZone = function () {
        this._availabilityZone = undefined;
    };
    Object.defineProperty(ElasticacheCluster.prototype, "availabilityZoneInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._availabilityZone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheCluster.prototype, "azMode", {
        get: function () {
            return this.getStringAttribute('az_mode');
        },
        set: function (value) {
            this._azMode = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheCluster.prototype.resetAzMode = function () {
        this._azMode = undefined;
    };
    Object.defineProperty(ElasticacheCluster.prototype, "azModeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._azMode;
        },
        enumerable: false,
        configurable: true
    });
    // cache_nodes - computed: true, optional: false, required: false
    ElasticacheCluster.prototype.cacheNodes = function (index) {
        return new ElasticacheClusterCacheNodes(this, 'cache_nodes', index);
    };
    Object.defineProperty(ElasticacheCluster.prototype, "clusterAddress", {
        // cluster_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cluster_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheCluster.prototype, "clusterId", {
        get: function () {
            return this.getStringAttribute('cluster_id');
        },
        set: function (value) {
            this._clusterId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheCluster.prototype, "clusterIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clusterId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheCluster.prototype, "configurationEndpoint", {
        // configuration_endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('configuration_endpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheCluster.prototype, "engine", {
        get: function () {
            return this.getStringAttribute('engine');
        },
        set: function (value) {
            this._engine = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheCluster.prototype.resetEngine = function () {
        this._engine = undefined;
    };
    Object.defineProperty(ElasticacheCluster.prototype, "engineInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._engine;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheCluster.prototype, "engineVersion", {
        get: function () {
            return this.getStringAttribute('engine_version');
        },
        set: function (value) {
            this._engineVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheCluster.prototype.resetEngineVersion = function () {
        this._engineVersion = undefined;
    };
    Object.defineProperty(ElasticacheCluster.prototype, "engineVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._engineVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheCluster.prototype, "engineVersionActual", {
        // engine_version_actual - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('engine_version_actual');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheCluster.prototype, "finalSnapshotIdentifier", {
        get: function () {
            return this.getStringAttribute('final_snapshot_identifier');
        },
        set: function (value) {
            this._finalSnapshotIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheCluster.prototype.resetFinalSnapshotIdentifier = function () {
        this._finalSnapshotIdentifier = undefined;
    };
    Object.defineProperty(ElasticacheCluster.prototype, "finalSnapshotIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._finalSnapshotIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheCluster.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheCluster.prototype, "maintenanceWindow", {
        get: function () {
            return this.getStringAttribute('maintenance_window');
        },
        set: function (value) {
            this._maintenanceWindow = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheCluster.prototype.resetMaintenanceWindow = function () {
        this._maintenanceWindow = undefined;
    };
    Object.defineProperty(ElasticacheCluster.prototype, "maintenanceWindowInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maintenanceWindow;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheCluster.prototype, "nodeType", {
        get: function () {
            return this.getStringAttribute('node_type');
        },
        set: function (value) {
            this._nodeType = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheCluster.prototype.resetNodeType = function () {
        this._nodeType = undefined;
    };
    Object.defineProperty(ElasticacheCluster.prototype, "nodeTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._nodeType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheCluster.prototype, "notificationTopicArn", {
        get: function () {
            return this.getStringAttribute('notification_topic_arn');
        },
        set: function (value) {
            this._notificationTopicArn = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheCluster.prototype.resetNotificationTopicArn = function () {
        this._notificationTopicArn = undefined;
    };
    Object.defineProperty(ElasticacheCluster.prototype, "notificationTopicArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._notificationTopicArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheCluster.prototype, "numCacheNodes", {
        get: function () {
            return this.getNumberAttribute('num_cache_nodes');
        },
        set: function (value) {
            this._numCacheNodes = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheCluster.prototype.resetNumCacheNodes = function () {
        this._numCacheNodes = undefined;
    };
    Object.defineProperty(ElasticacheCluster.prototype, "numCacheNodesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._numCacheNodes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheCluster.prototype, "parameterGroupName", {
        get: function () {
            return this.getStringAttribute('parameter_group_name');
        },
        set: function (value) {
            this._parameterGroupName = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheCluster.prototype.resetParameterGroupName = function () {
        this._parameterGroupName = undefined;
    };
    Object.defineProperty(ElasticacheCluster.prototype, "parameterGroupNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._parameterGroupName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheCluster.prototype, "port", {
        get: function () {
            return this.getNumberAttribute('port');
        },
        set: function (value) {
            this._port = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheCluster.prototype.resetPort = function () {
        this._port = undefined;
    };
    Object.defineProperty(ElasticacheCluster.prototype, "portInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._port;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheCluster.prototype, "preferredAvailabilityZones", {
        get: function () {
            return this.getListAttribute('preferred_availability_zones');
        },
        set: function (value) {
            this._preferredAvailabilityZones = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheCluster.prototype.resetPreferredAvailabilityZones = function () {
        this._preferredAvailabilityZones = undefined;
    };
    Object.defineProperty(ElasticacheCluster.prototype, "preferredAvailabilityZonesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._preferredAvailabilityZones;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheCluster.prototype, "replicationGroupId", {
        get: function () {
            return this.getStringAttribute('replication_group_id');
        },
        set: function (value) {
            this._replicationGroupId = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheCluster.prototype.resetReplicationGroupId = function () {
        this._replicationGroupId = undefined;
    };
    Object.defineProperty(ElasticacheCluster.prototype, "replicationGroupIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._replicationGroupId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheCluster.prototype, "securityGroupIds", {
        get: function () {
            return this.getListAttribute('security_group_ids');
        },
        set: function (value) {
            this._securityGroupIds = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheCluster.prototype.resetSecurityGroupIds = function () {
        this._securityGroupIds = undefined;
    };
    Object.defineProperty(ElasticacheCluster.prototype, "securityGroupIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._securityGroupIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheCluster.prototype, "securityGroupNames", {
        get: function () {
            return this.getListAttribute('security_group_names');
        },
        set: function (value) {
            this._securityGroupNames = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheCluster.prototype.resetSecurityGroupNames = function () {
        this._securityGroupNames = undefined;
    };
    Object.defineProperty(ElasticacheCluster.prototype, "securityGroupNamesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._securityGroupNames;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheCluster.prototype, "snapshotArns", {
        get: function () {
            return this.getListAttribute('snapshot_arns');
        },
        set: function (value) {
            this._snapshotArns = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheCluster.prototype.resetSnapshotArns = function () {
        this._snapshotArns = undefined;
    };
    Object.defineProperty(ElasticacheCluster.prototype, "snapshotArnsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._snapshotArns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheCluster.prototype, "snapshotName", {
        get: function () {
            return this.getStringAttribute('snapshot_name');
        },
        set: function (value) {
            this._snapshotName = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheCluster.prototype.resetSnapshotName = function () {
        this._snapshotName = undefined;
    };
    Object.defineProperty(ElasticacheCluster.prototype, "snapshotNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._snapshotName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheCluster.prototype, "snapshotRetentionLimit", {
        get: function () {
            return this.getNumberAttribute('snapshot_retention_limit');
        },
        set: function (value) {
            this._snapshotRetentionLimit = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheCluster.prototype.resetSnapshotRetentionLimit = function () {
        this._snapshotRetentionLimit = undefined;
    };
    Object.defineProperty(ElasticacheCluster.prototype, "snapshotRetentionLimitInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._snapshotRetentionLimit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheCluster.prototype, "snapshotWindow", {
        get: function () {
            return this.getStringAttribute('snapshot_window');
        },
        set: function (value) {
            this._snapshotWindow = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheCluster.prototype.resetSnapshotWindow = function () {
        this._snapshotWindow = undefined;
    };
    Object.defineProperty(ElasticacheCluster.prototype, "snapshotWindowInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._snapshotWindow;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheCluster.prototype, "subnetGroupName", {
        get: function () {
            return this.getStringAttribute('subnet_group_name');
        },
        set: function (value) {
            this._subnetGroupName = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheCluster.prototype.resetSubnetGroupName = function () {
        this._subnetGroupName = undefined;
    };
    Object.defineProperty(ElasticacheCluster.prototype, "subnetGroupNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subnetGroupName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheCluster.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheCluster.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(ElasticacheCluster.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheCluster.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheCluster.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(ElasticacheCluster.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ElasticacheCluster.prototype.synthesizeAttributes = function () {
        return {
            apply_immediately: cdktf.booleanToTerraform(this._applyImmediately),
            availability_zone: cdktf.stringToTerraform(this._availabilityZone),
            az_mode: cdktf.stringToTerraform(this._azMode),
            cluster_id: cdktf.stringToTerraform(this._clusterId),
            engine: cdktf.stringToTerraform(this._engine),
            engine_version: cdktf.stringToTerraform(this._engineVersion),
            final_snapshot_identifier: cdktf.stringToTerraform(this._finalSnapshotIdentifier),
            maintenance_window: cdktf.stringToTerraform(this._maintenanceWindow),
            node_type: cdktf.stringToTerraform(this._nodeType),
            notification_topic_arn: cdktf.stringToTerraform(this._notificationTopicArn),
            num_cache_nodes: cdktf.numberToTerraform(this._numCacheNodes),
            parameter_group_name: cdktf.stringToTerraform(this._parameterGroupName),
            port: cdktf.numberToTerraform(this._port),
            preferred_availability_zones: cdktf.listMapper(cdktf.stringToTerraform)(this._preferredAvailabilityZones),
            replication_group_id: cdktf.stringToTerraform(this._replicationGroupId),
            security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupIds),
            security_group_names: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupNames),
            snapshot_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._snapshotArns),
            snapshot_name: cdktf.stringToTerraform(this._snapshotName),
            snapshot_retention_limit: cdktf.numberToTerraform(this._snapshotRetentionLimit),
            snapshot_window: cdktf.stringToTerraform(this._snapshotWindow),
            subnet_group_name: cdktf.stringToTerraform(this._subnetGroupName),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ElasticacheCluster.tfResourceType = "aws_elasticache_cluster";
    return ElasticacheCluster;
}(cdktf.TerraformResource));
exports.ElasticacheCluster = ElasticacheCluster;
