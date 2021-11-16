"use strict";
// https://www.terraform.io/docs/providers/aws/r/iot_role_alias.html
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
exports.IotRoleAlias = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iot_role_alias.html aws_iot_role_alias}
*/
var IotRoleAlias = /** @class */ (function (_super) {
    __extends(IotRoleAlias, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iot_role_alias.html aws_iot_role_alias} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotRoleAliasConfig
    */
    function IotRoleAlias(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_iot_role_alias',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._alias = config.alias;
        _this._credentialDuration = config.credentialDuration;
        _this._roleArn = config.roleArn;
        return _this;
    }
    Object.defineProperty(IotRoleAlias.prototype, "alias", {
        get: function () {
            return this.getStringAttribute('alias');
        },
        set: function (value) {
            this._alias = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotRoleAlias.prototype, "aliasInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._alias;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotRoleAlias.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotRoleAlias.prototype, "credentialDuration", {
        get: function () {
            return this.getNumberAttribute('credential_duration');
        },
        set: function (value) {
            this._credentialDuration = value;
        },
        enumerable: false,
        configurable: true
    });
    IotRoleAlias.prototype.resetCredentialDuration = function () {
        this._credentialDuration = undefined;
    };
    Object.defineProperty(IotRoleAlias.prototype, "credentialDurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._credentialDuration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotRoleAlias.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotRoleAlias.prototype, "roleArn", {
        get: function () {
            return this.getStringAttribute('role_arn');
        },
        set: function (value) {
            this._roleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotRoleAlias.prototype, "roleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._roleArn;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    IotRoleAlias.prototype.synthesizeAttributes = function () {
        return {
            alias: cdktf.stringToTerraform(this._alias),
            credential_duration: cdktf.numberToTerraform(this._credentialDuration),
            role_arn: cdktf.stringToTerraform(this._roleArn)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    IotRoleAlias.tfResourceType = "aws_iot_role_alias";
    return IotRoleAlias;
}(cdktf.TerraformResource));
exports.IotRoleAlias = IotRoleAlias;
