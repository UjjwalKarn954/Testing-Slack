"use strict";
// https://www.terraform.io/docs/providers/aws/d/elasticache_replication_group.html
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
exports.DataAwsElasticacheReplicationGroup = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/elasticache_replication_group.html aws_elasticache_replication_group}
*/
var DataAwsElasticacheReplicationGroup = /** @class */ (function (_super) {
    __extends(DataAwsElasticacheReplicationGroup, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/elasticache_replication_group.html aws_elasticache_replication_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsElasticacheReplicationGroupConfig
    */
    function DataAwsElasticacheReplicationGroup(scope, id, config) {
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
        _this._replicationGroupId = config.replicationGroupId;
        return _this;
    }
    Object.defineProperty(DataAwsElasticacheReplicationGroup.prototype, "arn", {
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
    Object.defineProperty(DataAwsElasticacheReplicationGroup.prototype, "authTokenEnabled", {
        // auth_token_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('auth_token_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticacheReplicationGroup.prototype, "automaticFailoverEnabled", {
        // automatic_failover_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('automatic_failover_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticacheReplicationGroup.prototype, "configurationEndpointAddress", {
        // configuration_endpoint_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('configuration_endpoint_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticacheReplicationGroup.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticacheReplicationGroup.prototype, "memberClusters", {
        // member_clusters - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('member_clusters');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticacheReplicationGroup.prototype, "multiAzEnabled", {
        // multi_az_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('multi_az_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticacheReplicationGroup.prototype, "nodeType", {
        // node_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('node_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticacheReplicationGroup.prototype, "numberCacheClusters", {
        // number_cache_clusters - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('number_cache_clusters');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticacheReplicationGroup.prototype, "port", {
        // port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticacheReplicationGroup.prototype, "primaryEndpointAddress", {
        // primary_endpoint_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('primary_endpoint_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticacheReplicationGroup.prototype, "readerEndpointAddress", {
        // reader_endpoint_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('reader_endpoint_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticacheReplicationGroup.prototype, "replicationGroupDescription", {
        // replication_group_description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('replication_group_description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticacheReplicationGroup.prototype, "replicationGroupId", {
        get: function () {
            return this.getStringAttribute('replication_group_id');
        },
        set: function (value) {
            this._replicationGroupId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticacheReplicationGroup.prototype, "replicationGroupIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._replicationGroupId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticacheReplicationGroup.prototype, "snapshotRetentionLimit", {
        // snapshot_retention_limit - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('snapshot_retention_limit');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElasticacheReplicationGroup.prototype, "snapshotWindow", {
        // snapshot_window - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('snapshot_window');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsElasticacheReplicationGroup.prototype.synthesizeAttributes = function () {
        return {
            replication_group_id: cdktf.stringToTerraform(this._replicationGroupId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsElasticacheReplicationGroup.tfResourceType = "aws_elasticache_replication_group";
    return DataAwsElasticacheReplicationGroup;
}(cdktf.TerraformDataSource));
exports.DataAwsElasticacheReplicationGroup = DataAwsElasticacheReplicationGroup;
