"use strict";
// https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html
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
exports.GlueSecurityConfiguration = void 0;
var cdktf = require("cdktf");
function glueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cloudwatch_encryption_mode: cdktf.stringToTerraform(struct.cloudwatchEncryptionMode),
        kms_key_arn: cdktf.stringToTerraform(struct.kmsKeyArn)
    };
}
function glueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        job_bookmarks_encryption_mode: cdktf.stringToTerraform(struct.jobBookmarksEncryptionMode),
        kms_key_arn: cdktf.stringToTerraform(struct.kmsKeyArn)
    };
}
function glueSecurityConfigurationEncryptionConfigurationS3EncryptionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        kms_key_arn: cdktf.stringToTerraform(struct.kmsKeyArn),
        s3_encryption_mode: cdktf.stringToTerraform(struct.s3EncryptionMode)
    };
}
function glueSecurityConfigurationEncryptionConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cloudwatch_encryption: cdktf.listMapper(glueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionToTerraform)(struct.cloudwatchEncryption),
        job_bookmarks_encryption: cdktf.listMapper(glueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionToTerraform)(struct.jobBookmarksEncryption),
        s3_encryption: cdktf.listMapper(glueSecurityConfigurationEncryptionConfigurationS3EncryptionToTerraform)(struct.s3Encryption)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html aws_glue_security_configuration}
*/
var GlueSecurityConfiguration = /** @class */ (function (_super) {
    __extends(GlueSecurityConfiguration, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html aws_glue_security_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueSecurityConfigurationConfig
    */
    function GlueSecurityConfiguration(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_glue_security_configuration',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        _this._encryptionConfiguration = config.encryptionConfiguration;
        return _this;
    }
    Object.defineProperty(GlueSecurityConfiguration.prototype, "id", {
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
    Object.defineProperty(GlueSecurityConfiguration.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueSecurityConfiguration.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueSecurityConfiguration.prototype, "encryptionConfiguration", {
        get: function () {
            return this.interpolationForAttribute('encryption_configuration');
        },
        set: function (value) {
            this._encryptionConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueSecurityConfiguration.prototype, "encryptionConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._encryptionConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    GlueSecurityConfiguration.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            encryption_configuration: cdktf.listMapper(glueSecurityConfigurationEncryptionConfigurationToTerraform)(this._encryptionConfiguration)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    GlueSecurityConfiguration.tfResourceType = "aws_glue_security_configuration";
    return GlueSecurityConfiguration;
}(cdktf.TerraformResource));
exports.GlueSecurityConfiguration = GlueSecurityConfiguration;
