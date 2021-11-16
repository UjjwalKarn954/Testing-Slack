"use strict";
// https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html
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
exports.DbProxyDefaultTargetGroup = void 0;
var cdktf = require("cdktf");
function dbProxyDefaultTargetGroupConnectionPoolConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        connection_borrow_timeout: cdktf.numberToTerraform(struct.connectionBorrowTimeout),
        init_query: cdktf.stringToTerraform(struct.initQuery),
        max_connections_percent: cdktf.numberToTerraform(struct.maxConnectionsPercent),
        max_idle_connections_percent: cdktf.numberToTerraform(struct.maxIdleConnectionsPercent),
        session_pinning_filters: cdktf.listMapper(cdktf.stringToTerraform)(struct.sessionPinningFilters)
    };
}
function dbProxyDefaultTargetGroupTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        update: cdktf.stringToTerraform(struct.update)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html aws_db_proxy_default_target_group}
*/
var DbProxyDefaultTargetGroup = /** @class */ (function (_super) {
    __extends(DbProxyDefaultTargetGroup, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html aws_db_proxy_default_target_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DbProxyDefaultTargetGroupConfig
    */
    function DbProxyDefaultTargetGroup(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_db_proxy_default_target_group',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._dbProxyName = config.dbProxyName;
        _this._connectionPoolConfig = config.connectionPoolConfig;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(DbProxyDefaultTargetGroup.prototype, "arn", {
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
    Object.defineProperty(DbProxyDefaultTargetGroup.prototype, "dbProxyName", {
        get: function () {
            return this.getStringAttribute('db_proxy_name');
        },
        set: function (value) {
            this._dbProxyName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbProxyDefaultTargetGroup.prototype, "dbProxyNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dbProxyName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbProxyDefaultTargetGroup.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbProxyDefaultTargetGroup.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbProxyDefaultTargetGroup.prototype, "connectionPoolConfig", {
        get: function () {
            return this.interpolationForAttribute('connection_pool_config');
        },
        set: function (value) {
            this._connectionPoolConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    DbProxyDefaultTargetGroup.prototype.resetConnectionPoolConfig = function () {
        this._connectionPoolConfig = undefined;
    };
    Object.defineProperty(DbProxyDefaultTargetGroup.prototype, "connectionPoolConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._connectionPoolConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbProxyDefaultTargetGroup.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    DbProxyDefaultTargetGroup.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(DbProxyDefaultTargetGroup.prototype, "timeoutsInput", {
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
    DbProxyDefaultTargetGroup.prototype.synthesizeAttributes = function () {
        return {
            db_proxy_name: cdktf.stringToTerraform(this._dbProxyName),
            connection_pool_config: cdktf.listMapper(dbProxyDefaultTargetGroupConnectionPoolConfigToTerraform)(this._connectionPoolConfig),
            timeouts: dbProxyDefaultTargetGroupTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DbProxyDefaultTargetGroup.tfResourceType = "aws_db_proxy_default_target_group";
    return DbProxyDefaultTargetGroup;
}(cdktf.TerraformResource));
exports.DbProxyDefaultTargetGroup = DbProxyDefaultTargetGroup;
