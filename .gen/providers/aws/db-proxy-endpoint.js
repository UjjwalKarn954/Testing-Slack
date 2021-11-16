"use strict";
// https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html
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
exports.DbProxyEndpoint = void 0;
var cdktf = require("cdktf");
function dbProxyEndpointTimeoutsToTerraform(struct) {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html aws_db_proxy_endpoint}
*/
var DbProxyEndpoint = /** @class */ (function (_super) {
    __extends(DbProxyEndpoint, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html aws_db_proxy_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DbProxyEndpointConfig
    */
    function DbProxyEndpoint(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_db_proxy_endpoint',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._dbProxyEndpointName = config.dbProxyEndpointName;
        _this._dbProxyName = config.dbProxyName;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._targetRole = config.targetRole;
        _this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
        _this._vpcSubnetIds = config.vpcSubnetIds;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(DbProxyEndpoint.prototype, "arn", {
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
    Object.defineProperty(DbProxyEndpoint.prototype, "dbProxyEndpointName", {
        get: function () {
            return this.getStringAttribute('db_proxy_endpoint_name');
        },
        set: function (value) {
            this._dbProxyEndpointName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbProxyEndpoint.prototype, "dbProxyEndpointNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dbProxyEndpointName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbProxyEndpoint.prototype, "dbProxyName", {
        get: function () {
            return this.getStringAttribute('db_proxy_name');
        },
        set: function (value) {
            this._dbProxyName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbProxyEndpoint.prototype, "dbProxyNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dbProxyName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbProxyEndpoint.prototype, "endpoint", {
        // endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('endpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbProxyEndpoint.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbProxyEndpoint.prototype, "isDefault", {
        // is_default - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_default');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbProxyEndpoint.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DbProxyEndpoint.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DbProxyEndpoint.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbProxyEndpoint.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    DbProxyEndpoint.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(DbProxyEndpoint.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbProxyEndpoint.prototype, "targetRole", {
        get: function () {
            return this.getStringAttribute('target_role');
        },
        set: function (value) {
            this._targetRole = value;
        },
        enumerable: false,
        configurable: true
    });
    DbProxyEndpoint.prototype.resetTargetRole = function () {
        this._targetRole = undefined;
    };
    Object.defineProperty(DbProxyEndpoint.prototype, "targetRoleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetRole;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbProxyEndpoint.prototype, "vpcId", {
        // vpc_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbProxyEndpoint.prototype, "vpcSecurityGroupIds", {
        get: function () {
            return this.getListAttribute('vpc_security_group_ids');
        },
        set: function (value) {
            this._vpcSecurityGroupIds = value;
        },
        enumerable: false,
        configurable: true
    });
    DbProxyEndpoint.prototype.resetVpcSecurityGroupIds = function () {
        this._vpcSecurityGroupIds = undefined;
    };
    Object.defineProperty(DbProxyEndpoint.prototype, "vpcSecurityGroupIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcSecurityGroupIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbProxyEndpoint.prototype, "vpcSubnetIds", {
        get: function () {
            return this.getListAttribute('vpc_subnet_ids');
        },
        set: function (value) {
            this._vpcSubnetIds = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbProxyEndpoint.prototype, "vpcSubnetIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcSubnetIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbProxyEndpoint.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    DbProxyEndpoint.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(DbProxyEndpoint.prototype, "timeoutsInput", {
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
    DbProxyEndpoint.prototype.synthesizeAttributes = function () {
        return {
            db_proxy_endpoint_name: cdktf.stringToTerraform(this._dbProxyEndpointName),
            db_proxy_name: cdktf.stringToTerraform(this._dbProxyName),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            target_role: cdktf.stringToTerraform(this._targetRole),
            vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSecurityGroupIds),
            vpc_subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSubnetIds),
            timeouts: dbProxyEndpointTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DbProxyEndpoint.tfResourceType = "aws_db_proxy_endpoint";
    return DbProxyEndpoint;
}(cdktf.TerraformResource));
exports.DbProxyEndpoint = DbProxyEndpoint;
