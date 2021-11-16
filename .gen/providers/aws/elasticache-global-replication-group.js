"use strict";
// https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group.html
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
exports.ElasticacheGlobalReplicationGroup = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group.html aws_elasticache_global_replication_group}
*/
var ElasticacheGlobalReplicationGroup = /** @class */ (function (_super) {
    __extends(ElasticacheGlobalReplicationGroup, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group.html aws_elasticache_global_replication_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElasticacheGlobalReplicationGroupConfig
    */
    function ElasticacheGlobalReplicationGroup(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_elasticache_global_replication_group',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._globalReplicationGroupDescription = config.globalReplicationGroupDescription;
        _this._globalReplicationGroupIdSuffix = config.globalReplicationGroupIdSuffix;
        _this._primaryReplicationGroupId = config.primaryReplicationGroupId;
        return _this;
    }
    Object.defineProperty(ElasticacheGlobalReplicationGroup.prototype, "actualEngineVersion", {
        // ==========
        // ATTRIBUTES
        // ==========
        // actual_engine_version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('actual_engine_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheGlobalReplicationGroup.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheGlobalReplicationGroup.prototype, "atRestEncryptionEnabled", {
        // at_rest_encryption_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('at_rest_encryption_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheGlobalReplicationGroup.prototype, "authTokenEnabled", {
        // auth_token_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('auth_token_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheGlobalReplicationGroup.prototype, "cacheNodeType", {
        // cache_node_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cache_node_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheGlobalReplicationGroup.prototype, "clusterEnabled", {
        // cluster_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('cluster_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheGlobalReplicationGroup.prototype, "engine", {
        // engine - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('engine');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheGlobalReplicationGroup.prototype, "engineVersionActual", {
        // engine_version_actual - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('engine_version_actual');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheGlobalReplicationGroup.prototype, "globalReplicationGroupDescription", {
        get: function () {
            return this.getStringAttribute('global_replication_group_description');
        },
        set: function (value) {
            this._globalReplicationGroupDescription = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticacheGlobalReplicationGroup.prototype.resetGlobalReplicationGroupDescription = function () {
        this._globalReplicationGroupDescription = undefined;
    };
    Object.defineProperty(ElasticacheGlobalReplicationGroup.prototype, "globalReplicationGroupDescriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._globalReplicationGroupDescription;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheGlobalReplicationGroup.prototype, "globalReplicationGroupId", {
        // global_replication_group_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('global_replication_group_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheGlobalReplicationGroup.prototype, "globalReplicationGroupIdSuffix", {
        get: function () {
            return this.getStringAttribute('global_replication_group_id_suffix');
        },
        set: function (value) {
            this._globalReplicationGroupIdSuffix = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheGlobalReplicationGroup.prototype, "globalReplicationGroupIdSuffixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._globalReplicationGroupIdSuffix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheGlobalReplicationGroup.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheGlobalReplicationGroup.prototype, "primaryReplicationGroupId", {
        get: function () {
            return this.getStringAttribute('primary_replication_group_id');
        },
        set: function (value) {
            this._primaryReplicationGroupId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheGlobalReplicationGroup.prototype, "primaryReplicationGroupIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._primaryReplicationGroupId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticacheGlobalReplicationGroup.prototype, "transitEncryptionEnabled", {
        // transit_encryption_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('transit_encryption_enabled');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ElasticacheGlobalReplicationGroup.prototype.synthesizeAttributes = function () {
        return {
            global_replication_group_description: cdktf.stringToTerraform(this._globalReplicationGroupDescription),
            global_replication_group_id_suffix: cdktf.stringToTerraform(this._globalReplicationGroupIdSuffix),
            primary_replication_group_id: cdktf.stringToTerraform(this._primaryReplicationGroupId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ElasticacheGlobalReplicationGroup.tfResourceType = "aws_elasticache_global_replication_group";
    return ElasticacheGlobalReplicationGroup;
}(cdktf.TerraformResource));
exports.ElasticacheGlobalReplicationGroup = ElasticacheGlobalReplicationGroup;
