"use strict";
// https://www.terraform.io/docs/providers/aws/d/secretsmanager_secret.html
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
exports.DataAwsSecretsmanagerSecret = exports.DataAwsSecretsmanagerSecretRotationRules = void 0;
var cdktf = require("cdktf");
var DataAwsSecretsmanagerSecretRotationRules = /** @class */ (function (_super) {
    __extends(DataAwsSecretsmanagerSecretRotationRules, _super);
    function DataAwsSecretsmanagerSecretRotationRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsSecretsmanagerSecretRotationRules.prototype, "automaticallyAfterDays", {
        // automatically_after_days - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('automatically_after_days');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsSecretsmanagerSecretRotationRules;
}(cdktf.ComplexComputedList));
exports.DataAwsSecretsmanagerSecretRotationRules = DataAwsSecretsmanagerSecretRotationRules;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_secret.html aws_secretsmanager_secret}
*/
var DataAwsSecretsmanagerSecret = /** @class */ (function (_super) {
    __extends(DataAwsSecretsmanagerSecret, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_secret.html aws_secretsmanager_secret} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSecretsmanagerSecretConfig = {}
    */
    function DataAwsSecretsmanagerSecret(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_secretsmanager_secret',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        return _this;
    }
    Object.defineProperty(DataAwsSecretsmanagerSecret.prototype, "arn", {
        // ==========
        // ATTRIBUTES
        // ==========
        // arn - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSecretsmanagerSecret.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSecretsmanagerSecret.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSecretsmanagerSecret.prototype, "kmsKeyId", {
        // kms_key_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('kms_key_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSecretsmanagerSecret.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsSecretsmanagerSecret.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(DataAwsSecretsmanagerSecret.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSecretsmanagerSecret.prototype, "policy", {
        // policy - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('policy');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSecretsmanagerSecret.prototype, "rotationEnabled", {
        // rotation_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('rotation_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSecretsmanagerSecret.prototype, "rotationLambdaArn", {
        // rotation_lambda_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('rotation_lambda_arn');
        },
        enumerable: false,
        configurable: true
    });
    // rotation_rules - computed: true, optional: false, required: false
    DataAwsSecretsmanagerSecret.prototype.rotationRules = function (index) {
        return new DataAwsSecretsmanagerSecretRotationRules(this, 'rotation_rules', index);
    };
    // tags - computed: true, optional: false, required: false
    DataAwsSecretsmanagerSecret.prototype.tags = function (key) {
        return new cdktf.StringMap(this, 'tags').lookup(key);
    };
    // =========
    // SYNTHESIS
    // =========
    DataAwsSecretsmanagerSecret.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsSecretsmanagerSecret.tfResourceType = "aws_secretsmanager_secret";
    return DataAwsSecretsmanagerSecret;
}(cdktf.TerraformDataSource));
exports.DataAwsSecretsmanagerSecret = DataAwsSecretsmanagerSecret;
