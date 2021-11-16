"use strict";
// https://www.terraform.io/docs/providers/aws/r/iot_authorizer.html
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
exports.IotAuthorizer = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iot_authorizer.html aws_iot_authorizer}
*/
var IotAuthorizer = /** @class */ (function (_super) {
    __extends(IotAuthorizer, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iot_authorizer.html aws_iot_authorizer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotAuthorizerConfig
    */
    function IotAuthorizer(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_iot_authorizer',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._authorizerFunctionArn = config.authorizerFunctionArn;
        _this._name = config.name;
        _this._signingDisabled = config.signingDisabled;
        _this._status = config.status;
        _this._tokenKeyName = config.tokenKeyName;
        _this._tokenSigningPublicKeys = config.tokenSigningPublicKeys;
        return _this;
    }
    Object.defineProperty(IotAuthorizer.prototype, "arn", {
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
    Object.defineProperty(IotAuthorizer.prototype, "authorizerFunctionArn", {
        get: function () {
            return this.getStringAttribute('authorizer_function_arn');
        },
        set: function (value) {
            this._authorizerFunctionArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotAuthorizer.prototype, "authorizerFunctionArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authorizerFunctionArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotAuthorizer.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotAuthorizer.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotAuthorizer.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotAuthorizer.prototype, "signingDisabled", {
        get: function () {
            return this.getBooleanAttribute('signing_disabled');
        },
        set: function (value) {
            this._signingDisabled = value;
        },
        enumerable: false,
        configurable: true
    });
    IotAuthorizer.prototype.resetSigningDisabled = function () {
        this._signingDisabled = undefined;
    };
    Object.defineProperty(IotAuthorizer.prototype, "signingDisabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._signingDisabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotAuthorizer.prototype, "status", {
        get: function () {
            return this.getStringAttribute('status');
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    IotAuthorizer.prototype.resetStatus = function () {
        this._status = undefined;
    };
    Object.defineProperty(IotAuthorizer.prototype, "statusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotAuthorizer.prototype, "tokenKeyName", {
        get: function () {
            return this.getStringAttribute('token_key_name');
        },
        set: function (value) {
            this._tokenKeyName = value;
        },
        enumerable: false,
        configurable: true
    });
    IotAuthorizer.prototype.resetTokenKeyName = function () {
        this._tokenKeyName = undefined;
    };
    Object.defineProperty(IotAuthorizer.prototype, "tokenKeyNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tokenKeyName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotAuthorizer.prototype, "tokenSigningPublicKeys", {
        get: function () {
            return this.interpolationForAttribute('token_signing_public_keys');
        },
        set: function (value) {
            this._tokenSigningPublicKeys = value;
        },
        enumerable: false,
        configurable: true
    });
    IotAuthorizer.prototype.resetTokenSigningPublicKeys = function () {
        this._tokenSigningPublicKeys = undefined;
    };
    Object.defineProperty(IotAuthorizer.prototype, "tokenSigningPublicKeysInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tokenSigningPublicKeys;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    IotAuthorizer.prototype.synthesizeAttributes = function () {
        return {
            authorizer_function_arn: cdktf.stringToTerraform(this._authorizerFunctionArn),
            name: cdktf.stringToTerraform(this._name),
            signing_disabled: cdktf.booleanToTerraform(this._signingDisabled),
            status: cdktf.stringToTerraform(this._status),
            token_key_name: cdktf.stringToTerraform(this._tokenKeyName),
            token_signing_public_keys: cdktf.hashMapper(cdktf.anyToTerraform)(this._tokenSigningPublicKeys)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    IotAuthorizer.tfResourceType = "aws_iot_authorizer";
    return IotAuthorizer;
}(cdktf.TerraformResource));
exports.IotAuthorizer = IotAuthorizer;
