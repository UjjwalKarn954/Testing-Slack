"use strict";
// https://www.terraform.io/docs/providers/aws/d/elasticache_cluster.html
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
exports.DataAwsElasticacheCluster = exports.DataAwsElasticacheClusterCacheNodes = void 0;
var cdktf = require("cdktf");
var DataAwsElasticacheClusterCacheNodes = /** @class */ (function (_super) {
    __extends(DataAwsElasticacheClusterCacheNodes, _super);
    function DataAwsElasticacheClusterCacheNodes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsElasticacheClusterCacheNodes.prototype, "address", {
        // address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticacheClusterCacheNodes.prototype, "availabilityZone", {
        // availability_zone - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('availability_zone');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticacheClusterCacheNodes.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticacheClusterCacheNodes.prototype, "port", {
        // port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('port');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsElasticacheClusterCacheNodes;
}(cdktf.ComplexComputedList));
exports.DataAwsElasticacheClusterCacheNodes = DataAwsElasticacheClusterCacheNodes;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/elasticache_cluster.html aws_elasticache_cluster}
*/
var DataAwsElasticacheCluster = /** @class */ (function (_super) {
    __extends(DataAwsElasticacheCluster, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/elasticache_cluster.html aws_elasticache_cluster} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsElasticacheClusterConfig
    */
    function DataAwsElasticacheCluster(scope, id, config) {
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
        _this._clusterId = config.clusterId;
        _this._tags = config.tags;
        return _this;
    }
    Object.defineProperty(DataAwsElasticacheCluster.prototype, "arn", {
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
    Object.defineProperty(DataAwsElasticacheCluster.prototype, "availabilityZone", {
        // availability_zone - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('availability_zone');
        },
        enumerable: false,
        configurable: true
    });
    // cache_nodes - computed: true, optional: false, required: false
    DataAwsElasticacheCluster.prototype.cacheNodes = function (index) {
        return new DataAwsElasticacheClusterCacheNodes(this, 'cache_nodes', index);
    };
    Object.defineProperty(DataAwsElasticacheCluster.prototype, "clusterAddress", {
        // cluster_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cluster_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticacheCluster.prototype, "clusterId", {
        get: function () {
            return this.getStringAttribute('cluster_id');
        },
        set: function (value) {
            this._clusterId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticacheCluster.prototype, "clusterIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clusterId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticacheCluster.prototype, "configurationEndpoint", {
        // configuration_endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('configuration_endpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticacheCluster.prototype, "engine", {
        // engine - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('engine');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticacheCluster.prototype, "engineVersion", {
        // engine_version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('engine_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticacheCluster.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticacheCluster.prototype, "maintenanceWindow", {
        // maintenance_window - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('maintenance_window');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticacheCluster.prototype, "nodeType", {
        // node_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('node_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticacheCluster.prototype, "notificationTopicArn", {
        // notification_topic_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('notification_topic_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticacheCluster.prototype, "numCacheNodes", {
        // num_cache_nodes - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('num_cache_nodes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticacheCluster.prototype, "parameterGroupName", {
        // parameter_group_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('parameter_group_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticacheCluster.prototype, "port", {
        // port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticacheCluster.prototype, "replicationGroupId", {
        // replication_group_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('replication_group_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticacheCluster.prototype, "securityGroupIds", {
        // security_group_ids - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('security_group_ids');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticacheCluster.prototype, "securityGroupNames", {
        // security_group_names - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('security_group_names');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticacheCluster.prototype, "snapshotRetentionLimit", {
        // snapshot_retention_limit - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('snapshot_retention_limit');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticacheCluster.prototype, "snapshotWindow", {
        // snapshot_window - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('snapshot_window');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticacheCluster.prototype, "subnetGroupName", {
        // subnet_group_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('subnet_group_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticacheCluster.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsElasticacheCluster.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsElasticacheCluster.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsElasticacheCluster.prototype.synthesizeAttributes = function () {
        return {
            cluster_id: cdktf.stringToTerraform(this._clusterId),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsElasticacheCluster.tfResourceType = "aws_elasticache_cluster";
    return DataAwsElasticacheCluster;
}(cdktf.TerraformDataSource));
exports.DataAwsElasticacheCluster = DataAwsElasticacheCluster;
