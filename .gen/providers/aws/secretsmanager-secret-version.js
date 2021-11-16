"use strict";
// https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_version.html
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
exports.SecretsmanagerSecretVersion = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_version.html aws_secretsmanager_secret_version}
*/
var SecretsmanagerSecretVersion = /** @class */ (function (_super) {
    __extends(SecretsmanagerSecretVersion, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_version.html aws_secretsmanager_secret_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretsmanagerSecretVersionConfig
    */
    function SecretsmanagerSecretVersion(scope, id, config) {
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
        _this._secretBinary = config.secretBinary;
        _this._secretId = config.secretId;
        _this._secretString = config.secretString;
        _this._versionStages = config.versionStages;
        return _this;
    }
    Object.defineProperty(SecretsmanagerSecretVersion.prototype, "arn", {
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
    Object.defineProperty(SecretsmanagerSecretVersion.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretsmanagerSecretVersion.prototype, "secretBinary", {
        get: function () {
            return this.getStringAttribute('secret_binary');
        },
        set: function (value) {
            this._secretBinary = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretsmanagerSecretVersion.prototype.resetSecretBinary = function () {
        this._secretBinary = undefined;
    };
    Object.defineProperty(SecretsmanagerSecretVersion.prototype, "secretBinaryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretBinary;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretsmanagerSecretVersion.prototype, "secretId", {
        get: function () {
            return this.getStringAttribute('secret_id');
        },
        set: function (value) {
            this._secretId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretsmanagerSecretVersion.prototype, "secretIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretsmanagerSecretVersion.prototype, "secretString", {
        get: function () {
            return this.getStringAttribute('secret_string');
        },
        set: function (value) {
            this._secretString = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretsmanagerSecretVersion.prototype.resetSecretString = function () {
        this._secretString = undefined;
    };
    Object.defineProperty(SecretsmanagerSecretVersion.prototype, "secretStringInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretString;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretsmanagerSecretVersion.prototype, "versionId", {
        // version_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('version_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretsmanagerSecretVersion.prototype, "versionStages", {
        get: function () {
            return this.getListAttribute('version_stages');
        },
        set: function (value) {
            this._versionStages = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretsmanagerSecretVersion.prototype.resetVersionStages = function () {
        this._versionStages = undefined;
    };
    Object.defineProperty(SecretsmanagerSecretVersion.prototype, "versionStagesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._versionStages;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SecretsmanagerSecretVersion.prototype.synthesizeAttributes = function () {
        return {
            secret_binary: cdktf.stringToTerraform(this._secretBinary),
            secret_id: cdktf.stringToTerraform(this._secretId),
            secret_string: cdktf.stringToTerraform(this._secretString),
            version_stages: cdktf.listMapper(cdktf.stringToTerraform)(this._versionStages)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SecretsmanagerSecretVersion.tfResourceType = "aws_secretsmanager_secret_version";
    return SecretsmanagerSecretVersion;
}(cdktf.TerraformResource));
exports.SecretsmanagerSecretVersion = SecretsmanagerSecretVersion;
