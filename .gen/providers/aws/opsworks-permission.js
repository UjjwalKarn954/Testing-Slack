"use strict";
// https://www.terraform.io/docs/providers/aws/r/opsworks_permission.html
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
exports.OpsworksPermission = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission.html aws_opsworks_permission}
*/
var OpsworksPermission = /** @class */ (function (_super) {
    __extends(OpsworksPermission, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission.html aws_opsworks_permission} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OpsworksPermissionConfig
    */
    function OpsworksPermission(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_opsworks_permission',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._allowSsh = config.allowSsh;
        _this._allowSudo = config.allowSudo;
        _this._level = config.level;
        _this._stackId = config.stackId;
        _this._userArn = config.userArn;
        return _this;
    }
    Object.defineProperty(OpsworksPermission.prototype, "allowSsh", {
        get: function () {
            return this.getBooleanAttribute('allow_ssh');
        },
        set: function (value) {
            this._allowSsh = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksPermission.prototype.resetAllowSsh = function () {
        this._allowSsh = undefined;
    };
    Object.defineProperty(OpsworksPermission.prototype, "allowSshInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowSsh;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksPermission.prototype, "allowSudo", {
        get: function () {
            return this.getBooleanAttribute('allow_sudo');
        },
        set: function (value) {
            this._allowSudo = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksPermission.prototype.resetAllowSudo = function () {
        this._allowSudo = undefined;
    };
    Object.defineProperty(OpsworksPermission.prototype, "allowSudoInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowSudo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksPermission.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksPermission.prototype, "level", {
        get: function () {
            return this.getStringAttribute('level');
        },
        set: function (value) {
            this._level = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksPermission.prototype.resetLevel = function () {
        this._level = undefined;
    };
    Object.defineProperty(OpsworksPermission.prototype, "levelInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._level;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksPermission.prototype, "stackId", {
        get: function () {
            return this.getStringAttribute('stack_id');
        },
        set: function (value) {
            this._stackId = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksPermission.prototype.resetStackId = function () {
        this._stackId = undefined;
    };
    Object.defineProperty(OpsworksPermission.prototype, "stackIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._stackId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksPermission.prototype, "userArn", {
        get: function () {
            return this.getStringAttribute('user_arn');
        },
        set: function (value) {
            this._userArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksPermission.prototype, "userArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userArn;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    OpsworksPermission.prototype.synthesizeAttributes = function () {
        return {
            allow_ssh: cdktf.booleanToTerraform(this._allowSsh),
            allow_sudo: cdktf.booleanToTerraform(this._allowSudo),
            level: cdktf.stringToTerraform(this._level),
            stack_id: cdktf.stringToTerraform(this._stackId),
            user_arn: cdktf.stringToTerraform(this._userArn)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    OpsworksPermission.tfResourceType = "aws_opsworks_permission";
    return OpsworksPermission;
}(cdktf.TerraformResource));
exports.OpsworksPermission = OpsworksPermission;
