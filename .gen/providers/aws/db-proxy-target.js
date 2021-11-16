"use strict";
// https://www.terraform.io/docs/providers/aws/r/db_proxy_target.html
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
exports.DbProxyTarget = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_target.html aws_db_proxy_target}
*/
var DbProxyTarget = /** @class */ (function (_super) {
    __extends(DbProxyTarget, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_target.html aws_db_proxy_target} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DbProxyTargetConfig
    */
    function DbProxyTarget(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_db_proxy_target',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._dbClusterIdentifier = config.dbClusterIdentifier;
        _this._dbInstanceIdentifier = config.dbInstanceIdentifier;
        _this._dbProxyName = config.dbProxyName;
        _this._targetGroupName = config.targetGroupName;
        return _this;
    }
    Object.defineProperty(DbProxyTarget.prototype, "dbClusterIdentifier", {
        get: function () {
            return this.getStringAttribute('db_cluster_identifier');
        },
        set: function (value) {
            this._dbClusterIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    DbProxyTarget.prototype.resetDbClusterIdentifier = function () {
        this._dbClusterIdentifier = undefined;
    };
    Object.defineProperty(DbProxyTarget.prototype, "dbClusterIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dbClusterIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbProxyTarget.prototype, "dbInstanceIdentifier", {
        get: function () {
            return this.getStringAttribute('db_instance_identifier');
        },
        set: function (value) {
            this._dbInstanceIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    DbProxyTarget.prototype.resetDbInstanceIdentifier = function () {
        this._dbInstanceIdentifier = undefined;
    };
    Object.defineProperty(DbProxyTarget.prototype, "dbInstanceIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dbInstanceIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbProxyTarget.prototype, "dbProxyName", {
        get: function () {
            return this.getStringAttribute('db_proxy_name');
        },
        set: function (value) {
            this._dbProxyName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbProxyTarget.prototype, "dbProxyNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dbProxyName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbProxyTarget.prototype, "endpoint", {
        // endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('endpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbProxyTarget.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbProxyTarget.prototype, "port", {
        // port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbProxyTarget.prototype, "rdsResourceId", {
        // rds_resource_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('rds_resource_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbProxyTarget.prototype, "targetArn", {
        // target_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('target_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbProxyTarget.prototype, "targetGroupName", {
        get: function () {
            return this.getStringAttribute('target_group_name');
        },
        set: function (value) {
            this._targetGroupName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbProxyTarget.prototype, "targetGroupNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetGroupName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbProxyTarget.prototype, "trackedClusterId", {
        // tracked_cluster_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tracked_cluster_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbProxyTarget.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DbProxyTarget.prototype.synthesizeAttributes = function () {
        return {
            db_cluster_identifier: cdktf.stringToTerraform(this._dbClusterIdentifier),
            db_instance_identifier: cdktf.stringToTerraform(this._dbInstanceIdentifier),
            db_proxy_name: cdktf.stringToTerraform(this._dbProxyName),
            target_group_name: cdktf.stringToTerraform(this._targetGroupName)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DbProxyTarget.tfResourceType = "aws_db_proxy_target";
    return DbProxyTarget;
}(cdktf.TerraformResource));
exports.DbProxyTarget = DbProxyTarget;
