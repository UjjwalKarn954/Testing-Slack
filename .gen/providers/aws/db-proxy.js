"use strict";
// https://www.terraform.io/docs/providers/aws/r/db_proxy.html
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
exports.DbProxy = void 0;
var cdktf = require("cdktf");
function dbProxyAuthToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        auth_scheme: cdktf.stringToTerraform(struct.authScheme),
        description: cdktf.stringToTerraform(struct.description),
        iam_auth: cdktf.stringToTerraform(struct.iamAuth),
        secret_arn: cdktf.stringToTerraform(struct.secretArn)
    };
}
function dbProxyTimeoutsToTerraform(struct) {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html aws_db_proxy}
*/
var DbProxy = /** @class */ (function (_super) {
    __extends(DbProxy, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html aws_db_proxy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DbProxyConfig
    */
    function DbProxy(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_db_proxy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._debugLogging = config.debugLogging;
        _this._engineFamily = config.engineFamily;
        _this._idleClientTimeout = config.idleClientTimeout;
        _this._name = config.name;
        _this._requireTls = config.requireTls;
        _this._roleArn = config.roleArn;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
        _this._vpcSubnetIds = config.vpcSubnetIds;
        _this._auth = config.auth;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(DbProxy.prototype, "arn", {
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
    Object.defineProperty(DbProxy.prototype, "debugLogging", {
        get: function () {
            return this.getBooleanAttribute('debug_logging');
        },
        set: function (value) {
            this._debugLogging = value;
        },
        enumerable: false,
        configurable: true
    });
    DbProxy.prototype.resetDebugLogging = function () {
        this._debugLogging = undefined;
    };
    Object.defineProperty(DbProxy.prototype, "debugLoggingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._debugLogging;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbProxy.prototype, "endpoint", {
        // endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('endpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbProxy.prototype, "engineFamily", {
        get: function () {
            return this.getStringAttribute('engine_family');
        },
        set: function (value) {
            this._engineFamily = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbProxy.prototype, "engineFamilyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._engineFamily;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbProxy.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbProxy.prototype, "idleClientTimeout", {
        get: function () {
            return this.getNumberAttribute('idle_client_timeout');
        },
        set: function (value) {
            this._idleClientTimeout = value;
        },
        enumerable: false,
        configurable: true
    });
    DbProxy.prototype.resetIdleClientTimeout = function () {
        this._idleClientTimeout = undefined;
    };
    Object.defineProperty(DbProxy.prototype, "idleClientTimeoutInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._idleClientTimeout;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbProxy.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbProxy.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbProxy.prototype, "requireTls", {
        get: function () {
            return this.getBooleanAttribute('require_tls');
        },
        set: function (value) {
            this._requireTls = value;
        },
        enumerable: false,
        configurable: true
    });
    DbProxy.prototype.resetRequireTls = function () {
        this._requireTls = undefined;
    };
    Object.defineProperty(DbProxy.prototype, "requireTlsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requireTls;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbProxy.prototype, "roleArn", {
        get: function () {
            return this.getStringAttribute('role_arn');
        },
        set: function (value) {
            this._roleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbProxy.prototype, "roleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._roleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbProxy.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DbProxy.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DbProxy.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbProxy.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    DbProxy.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(DbProxy.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbProxy.prototype, "vpcSecurityGroupIds", {
        get: function () {
            return this.getListAttribute('vpc_security_group_ids');
        },
        set: function (value) {
            this._vpcSecurityGroupIds = value;
        },
        enumerable: false,
        configurable: true
    });
    DbProxy.prototype.resetVpcSecurityGroupIds = function () {
        this._vpcSecurityGroupIds = undefined;
    };
    Object.defineProperty(DbProxy.prototype, "vpcSecurityGroupIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcSecurityGroupIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbProxy.prototype, "vpcSubnetIds", {
        get: function () {
            return this.getListAttribute('vpc_subnet_ids');
        },
        set: function (value) {
            this._vpcSubnetIds = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbProxy.prototype, "vpcSubnetIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcSubnetIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbProxy.prototype, "auth", {
        get: function () {
            return this.interpolationForAttribute('auth');
        },
        set: function (value) {
            this._auth = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbProxy.prototype, "authInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._auth;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbProxy.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    DbProxy.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(DbProxy.prototype, "timeoutsInput", {
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
    DbProxy.prototype.synthesizeAttributes = function () {
        return {
            debug_logging: cdktf.booleanToTerraform(this._debugLogging),
            engine_family: cdktf.stringToTerraform(this._engineFamily),
            idle_client_timeout: cdktf.numberToTerraform(this._idleClientTimeout),
            name: cdktf.stringToTerraform(this._name),
            require_tls: cdktf.booleanToTerraform(this._requireTls),
            role_arn: cdktf.stringToTerraform(this._roleArn),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSecurityGroupIds),
            vpc_subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSubnetIds),
            auth: cdktf.listMapper(dbProxyAuthToTerraform)(this._auth),
            timeouts: dbProxyTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DbProxy.tfResourceType = "aws_db_proxy";
    return DbProxy;
}(cdktf.TerraformResource));
exports.DbProxy = DbProxy;
