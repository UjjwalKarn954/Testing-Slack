"use strict";
// https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_rotation.html
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
exports.SecretsmanagerSecretRotation = void 0;
var cdktf = require("cdktf");
function secretsmanagerSecretRotationRotationRulesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        automatically_after_days: cdktf.numberToTerraform(struct.automaticallyAfterDays)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_rotation.html aws_secretsmanager_secret_rotation}
*/
var SecretsmanagerSecretRotation = /** @class */ (function (_super) {
    __extends(SecretsmanagerSecretRotation, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_rotation.html aws_secretsmanager_secret_rotation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretsmanagerSecretRotationConfig
    */
    function SecretsmanagerSecretRotation(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_secretsmanager_secret_rotation',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._rotationLambdaArn = config.rotationLambdaArn;
        _this._secretId = config.secretId;
        _this._tags = config.tags;
        _this._rotationRules = config.rotationRules;
        return _this;
    }
    Object.defineProperty(SecretsmanagerSecretRotation.prototype, "id", {
        // ==========
        // ATTRIBUTES
        // ==========
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretsmanagerSecretRotation.prototype, "rotationEnabled", {
        // rotation_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('rotation_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretsmanagerSecretRotation.prototype, "rotationLambdaArn", {
        get: function () {
            return this.getStringAttribute('rotation_lambda_arn');
        },
        set: function (value) {
            this._rotationLambdaArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretsmanagerSecretRotation.prototype, "rotationLambdaArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rotationLambdaArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretsmanagerSecretRotation.prototype, "secretId", {
        get: function () {
            return this.getStringAttribute('secret_id');
        },
        set: function (value) {
            this._secretId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretsmanagerSecretRotation.prototype, "secretIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretsmanagerSecretRotation.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretsmanagerSecretRotation.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(SecretsmanagerSecretRotation.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretsmanagerSecretRotation.prototype, "rotationRules", {
        get: function () {
            return this.interpolationForAttribute('rotation_rules');
        },
        set: function (value) {
            this._rotationRules = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretsmanagerSecretRotation.prototype, "rotationRulesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rotationRules;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SecretsmanagerSecretRotation.prototype.synthesizeAttributes = function () {
        return {
            rotation_lambda_arn: cdktf.stringToTerraform(this._rotationLambdaArn),
            secret_id: cdktf.stringToTerraform(this._secretId),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            rotation_rules: cdktf.listMapper(secretsmanagerSecretRotationRotationRulesToTerraform)(this._rotationRules)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SecretsmanagerSecretRotation.tfResourceType = "aws_secretsmanager_secret_rotation";
    return SecretsmanagerSecretRotation;
}(cdktf.TerraformResource));
exports.SecretsmanagerSecretRotation = SecretsmanagerSecretRotation;
