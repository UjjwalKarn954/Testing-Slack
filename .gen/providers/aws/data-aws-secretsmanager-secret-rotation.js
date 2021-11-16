"use strict";
// https://www.terraform.io/docs/providers/aws/d/secretsmanager_secret_rotation.html
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
exports.DataAwsSecretsmanagerSecretRotation = exports.DataAwsSecretsmanagerSecretRotationRotationRules = void 0;
var cdktf = require("cdktf");
var DataAwsSecretsmanagerSecretRotationRotationRules = /** @class */ (function (_super) {
    __extends(DataAwsSecretsmanagerSecretRotationRotationRules, _super);
    function DataAwsSecretsmanagerSecretRotationRotationRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsSecretsmanagerSecretRotationRotationRules.prototype, "automaticallyAfterDays", {
        // automatically_after_days - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('automatically_after_days');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsSecretsmanagerSecretRotationRotationRules;
}(cdktf.ComplexComputedList));
exports.DataAwsSecretsmanagerSecretRotationRotationRules = DataAwsSecretsmanagerSecretRotationRotationRules;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_secret_rotation.html aws_secretsmanager_secret_rotation}
*/
var DataAwsSecretsmanagerSecretRotation = /** @class */ (function (_super) {
    __extends(DataAwsSecretsmanagerSecretRotation, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_secret_rotation.html aws_secretsmanager_secret_rotation} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSecretsmanagerSecretRotationConfig
    */
    function DataAwsSecretsmanagerSecretRotation(scope, id, config) {
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
        _this._secretId = config.secretId;
        return _this;
    }
    Object.defineProperty(DataAwsSecretsmanagerSecretRotation.prototype, "id", {
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
    Object.defineProperty(DataAwsSecretsmanagerSecretRotation.prototype, "rotationEnabled", {
        // rotation_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('rotation_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSecretsmanagerSecretRotation.prototype, "rotationLambdaArn", {
        // rotation_lambda_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('rotation_lambda_arn');
        },
        enumerable: false,
        configurable: true
    });
    // rotation_rules - computed: true, optional: false, required: false
    DataAwsSecretsmanagerSecretRotation.prototype.rotationRules = function (index) {
        return new DataAwsSecretsmanagerSecretRotationRotationRules(this, 'rotation_rules', index);
    };
    Object.defineProperty(DataAwsSecretsmanagerSecretRotation.prototype, "secretId", {
        get: function () {
            return this.getStringAttribute('secret_id');
        },
        set: function (value) {
            this._secretId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSecretsmanagerSecretRotation.prototype, "secretIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsSecretsmanagerSecretRotation.prototype.synthesizeAttributes = function () {
        return {
            secret_id: cdktf.stringToTerraform(this._secretId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsSecretsmanagerSecretRotation.tfResourceType = "aws_secretsmanager_secret_rotation";
    return DataAwsSecretsmanagerSecretRotation;
}(cdktf.TerraformDataSource));
exports.DataAwsSecretsmanagerSecretRotation = DataAwsSecretsmanagerSecretRotation;
