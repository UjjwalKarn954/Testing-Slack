"use strict";
// https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_policy.html
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
exports.SecretsmanagerSecretPolicy = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_policy.html aws_secretsmanager_secret_policy}
*/
var SecretsmanagerSecretPolicy = /** @class */ (function (_super) {
    __extends(SecretsmanagerSecretPolicy, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_policy.html aws_secretsmanager_secret_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretsmanagerSecretPolicyConfig
    */
    function SecretsmanagerSecretPolicy(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_secretsmanager_secret_policy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._blockPublicPolicy = config.blockPublicPolicy;
        _this._policy = config.policy;
        _this._secretArn = config.secretArn;
        return _this;
    }
    Object.defineProperty(SecretsmanagerSecretPolicy.prototype, "blockPublicPolicy", {
        get: function () {
            return this.getBooleanAttribute('block_public_policy');
        },
        set: function (value) {
            this._blockPublicPolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretsmanagerSecretPolicy.prototype.resetBlockPublicPolicy = function () {
        this._blockPublicPolicy = undefined;
    };
    Object.defineProperty(SecretsmanagerSecretPolicy.prototype, "blockPublicPolicyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._blockPublicPolicy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretsmanagerSecretPolicy.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretsmanagerSecretPolicy.prototype, "policy", {
        get: function () {
            return this.getStringAttribute('policy');
        },
        set: function (value) {
            this._policy = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretsmanagerSecretPolicy.prototype, "policyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretsmanagerSecretPolicy.prototype, "secretArn", {
        get: function () {
            return this.getStringAttribute('secret_arn');
        },
        set: function (value) {
            this._secretArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretsmanagerSecretPolicy.prototype, "secretArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretArn;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SecretsmanagerSecretPolicy.prototype.synthesizeAttributes = function () {
        return {
            block_public_policy: cdktf.booleanToTerraform(this._blockPublicPolicy),
            policy: cdktf.stringToTerraform(this._policy),
            secret_arn: cdktf.stringToTerraform(this._secretArn)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SecretsmanagerSecretPolicy.tfResourceType = "aws_secretsmanager_secret_policy";
    return SecretsmanagerSecretPolicy;
}(cdktf.TerraformResource));
exports.SecretsmanagerSecretPolicy = SecretsmanagerSecretPolicy;
