"use strict";
// https://www.terraform.io/docs/providers/aws/r/rds_global_cluster.html
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
exports.RdsGlobalCluster = exports.RdsGlobalClusterGlobalClusterMembers = void 0;
var cdktf = require("cdktf");
var RdsGlobalClusterGlobalClusterMembers = /** @class */ (function (_super) {
    __extends(RdsGlobalClusterGlobalClusterMembers, _super);
    function RdsGlobalClusterGlobalClusterMembers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(RdsGlobalClusterGlobalClusterMembers.prototype, "dbClusterArn", {
        // db_cluster_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('db_cluster_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsGlobalClusterGlobalClusterMembers.prototype, "isWriter", {
        // is_writer - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_writer');
        },
        enumerable: false,
        configurable: true
    });
    return RdsGlobalClusterGlobalClusterMembers;
}(cdktf.ComplexComputedList));
exports.RdsGlobalClusterGlobalClusterMembers = RdsGlobalClusterGlobalClusterMembers;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster.html aws_rds_global_cluster}
*/
var RdsGlobalCluster = /** @class */ (function (_super) {
    __extends(RdsGlobalCluster, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/rds_global_cluster.html aws_rds_global_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RdsGlobalClusterConfig
    */
    function RdsGlobalCluster(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_rds_global_cluster',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._databaseName = config.databaseName;
        _this._deletionProtection = config.deletionProtection;
        _this._engine = config.engine;
        _this._engineVersion = config.engineVersion;
        _this._forceDestroy = config.forceDestroy;
        _this._globalClusterIdentifier = config.globalClusterIdentifier;
        _this._sourceDbClusterIdentifier = config.sourceDbClusterIdentifier;
        _this._storageEncrypted = config.storageEncrypted;
        return _this;
    }
    Object.defineProperty(RdsGlobalCluster.prototype, "arn", {
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
    Object.defineProperty(RdsGlobalCluster.prototype, "databaseName", {
        get: function () {
            return this.getStringAttribute('database_name');
        },
        set: function (value) {
            this._databaseName = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsGlobalCluster.prototype.resetDatabaseName = function () {
        this._databaseName = undefined;
    };
    Object.defineProperty(RdsGlobalCluster.prototype, "databaseNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._databaseName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsGlobalCluster.prototype, "deletionProtection", {
        get: function () {
            return this.getBooleanAttribute('deletion_protection');
        },
        set: function (value) {
            this._deletionProtection = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsGlobalCluster.prototype.resetDeletionProtection = function () {
        this._deletionProtection = undefined;
    };
    Object.defineProperty(RdsGlobalCluster.prototype, "deletionProtectionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deletionProtection;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsGlobalCluster.prototype, "engine", {
        get: function () {
            return this.getStringAttribute('engine');
        },
        set: function (value) {
            this._engine = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsGlobalCluster.prototype.resetEngine = function () {
        this._engine = undefined;
    };
    Object.defineProperty(RdsGlobalCluster.prototype, "engineInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._engine;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsGlobalCluster.prototype, "engineVersion", {
        get: function () {
            return this.getStringAttribute('engine_version');
        },
        set: function (value) {
            this._engineVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsGlobalCluster.prototype.resetEngineVersion = function () {
        this._engineVersion = undefined;
    };
    Object.defineProperty(RdsGlobalCluster.prototype, "engineVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._engineVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsGlobalCluster.prototype, "forceDestroy", {
        get: function () {
            return this.getBooleanAttribute('force_destroy');
        },
        set: function (value) {
            this._forceDestroy = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsGlobalCluster.prototype.resetForceDestroy = function () {
        this._forceDestroy = undefined;
    };
    Object.defineProperty(RdsGlobalCluster.prototype, "forceDestroyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._forceDestroy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsGlobalCluster.prototype, "globalClusterIdentifier", {
        get: function () {
            return this.getStringAttribute('global_cluster_identifier');
        },
        set: function (value) {
            this._globalClusterIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsGlobalCluster.prototype, "globalClusterIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._globalClusterIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    // global_cluster_members - computed: true, optional: false, required: false
    RdsGlobalCluster.prototype.globalClusterMembers = function (index) {
        return new RdsGlobalClusterGlobalClusterMembers(this, 'global_cluster_members', index);
    };
    Object.defineProperty(RdsGlobalCluster.prototype, "globalClusterResourceId", {
        // global_cluster_resource_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('global_cluster_resource_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsGlobalCluster.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsGlobalCluster.prototype, "sourceDbClusterIdentifier", {
        get: function () {
            return this.getStringAttribute('source_db_cluster_identifier');
        },
        set: function (value) {
            this._sourceDbClusterIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsGlobalCluster.prototype.resetSourceDbClusterIdentifier = function () {
        this._sourceDbClusterIdentifier = undefined;
    };
    Object.defineProperty(RdsGlobalCluster.prototype, "sourceDbClusterIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sourceDbClusterIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsGlobalCluster.prototype, "storageEncrypted", {
        get: function () {
            return this.getBooleanAttribute('storage_encrypted');
        },
        set: function (value) {
            this._storageEncrypted = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsGlobalCluster.prototype.resetStorageEncrypted = function () {
        this._storageEncrypted = undefined;
    };
    Object.defineProperty(RdsGlobalCluster.prototype, "storageEncryptedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._storageEncrypted;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    RdsGlobalCluster.prototype.synthesizeAttributes = function () {
        return {
            database_name: cdktf.stringToTerraform(this._databaseName),
            deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
            engine: cdktf.stringToTerraform(this._engine),
            engine_version: cdktf.stringToTerraform(this._engineVersion),
            force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
            global_cluster_identifier: cdktf.stringToTerraform(this._globalClusterIdentifier),
            source_db_cluster_identifier: cdktf.stringToTerraform(this._sourceDbClusterIdentifier),
            storage_encrypted: cdktf.booleanToTerraform(this._storageEncrypted)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    RdsGlobalCluster.tfResourceType = "aws_rds_global_cluster";
    return RdsGlobalCluster;
}(cdktf.TerraformResource));
exports.RdsGlobalCluster = RdsGlobalCluster;
