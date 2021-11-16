"use strict";
// https://www.terraform.io/docs/providers/aws/d/secretsmanager_secret_version.html
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
exports.DataAwsSecretsmanagerSecretVersion = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_secret_version.html aws_secretsmanager_secret_version}
*/
var DataAwsSecretsmanagerSecretVersion = /** @class */ (function (_super) {
    __extends(DataAwsSecretsmanagerSecretVersion, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_secret_version.html aws_secretsmanager_secret_version} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSecretsmanagerSecretVersionConfig
    */
    function DataAwsSecretsmanagerSecretVersion(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_secretsmanager_secret_version',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._secretId = config.secretId;
        _this._versionId = config.versionId;
        _this._versionStage = config.versionStage;
        return _this;
    }
    Object.defineProperty(DataAwsSecretsmanagerSecretVersion.prototype, "arn", {
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
    Object.defineProperty(DataAwsSecretsmanagerSecretVersion.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSecretsmanagerSecretVersion.prototype, "secretBinary", {
        // secret_binary - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('secret_binary');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSecretsmanagerSecretVersion.prototype, "secretId", {
        get: function () {
            return this.getStringAttribute('secret_id');
        },
        set: function (value) {
            this._secretId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSecretsmanagerSecretVersion.prototype, "secretIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSecretsmanagerSecretVersion.prototype, "secretString", {
        // secret_string - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('secret_string');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSecretsmanagerSecretVersion.prototype, "versionId", {
        get: function () {
            return this.getStringAttribute('version_id');
        },
        set: function (value) {
            this._versionId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsSecretsmanagerSecretVersion.prototype.resetVersionId = function () {
        this._versionId = undefined;
    };
    Object.defineProperty(DataAwsSecretsmanagerSecretVersion.prototype, "versionIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._versionId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSecretsmanagerSecretVersion.prototype, "versionStage", {
        get: function () {
            return this.getStringAttribute('version_stage');
        },
        set: function (value) {
            this._versionStage = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsSecretsmanagerSecretVersion.prototype.resetVersionStage = function () {
        this._versionStage = undefined;
    };
    Object.defineProperty(DataAwsSecretsmanagerSecretVersion.prototype, "versionStageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._versionStage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSecretsmanagerSecretVersion.prototype, "versionStages", {
        // version_stages - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('version_stages');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsSecretsmanagerSecretVersion.prototype.synthesizeAttributes = function () {
        return {
            secret_id: cdktf.stringToTerraform(this._secretId),
            version_id: cdktf.stringToTerraform(this._versionId),
            version_stage: cdktf.stringToTerraform(this._versionStage)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsSecretsmanagerSecretVersion.tfResourceType = "aws_secretsmanager_secret_version";
    return DataAwsSecretsmanagerSecretVersion;
}(cdktf.TerraformDataSource));
exports.DataAwsSecretsmanagerSecretVersion = DataAwsSecretsmanagerSecretVersion;
