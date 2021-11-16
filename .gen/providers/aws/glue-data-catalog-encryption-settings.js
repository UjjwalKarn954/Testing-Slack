"use strict";
// https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html
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
exports.GlueDataCatalogEncryptionSettings = void 0;
var cdktf = require("cdktf");
function glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        aws_kms_key_id: cdktf.stringToTerraform(struct.awsKmsKeyId),
        return_connection_password_encrypted: cdktf.booleanToTerraform(struct.returnConnectionPasswordEncrypted)
    };
}
function glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        catalog_encryption_mode: cdktf.stringToTerraform(struct.catalogEncryptionMode),
        sse_aws_kms_key_id: cdktf.stringToTerraform(struct.sseAwsKmsKeyId)
    };
}
function glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        connection_password_encryption: cdktf.listMapper(glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionToTerraform)(struct.connectionPasswordEncryption),
        encryption_at_rest: cdktf.listMapper(glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestToTerraform)(struct.encryptionAtRest)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html aws_glue_data_catalog_encryption_settings}
*/
var GlueDataCatalogEncryptionSettings = /** @class */ (function (_super) {
    __extends(GlueDataCatalogEncryptionSettings, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html aws_glue_data_catalog_encryption_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueDataCatalogEncryptionSettingsConfig
    */
    function GlueDataCatalogEncryptionSettings(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_glue_data_catalog_encryption_settings',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._catalogId = config.catalogId;
        _this._dataCatalogEncryptionSettings = config.dataCatalogEncryptionSettings;
        return _this;
    }
    Object.defineProperty(GlueDataCatalogEncryptionSettings.prototype, "catalogId", {
        get: function () {
            return this.getStringAttribute('catalog_id');
        },
        set: function (value) {
            this._catalogId = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueDataCatalogEncryptionSettings.prototype.resetCatalogId = function () {
        this._catalogId = undefined;
    };
    Object.defineProperty(GlueDataCatalogEncryptionSettings.prototype, "catalogIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._catalogId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueDataCatalogEncryptionSettings.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueDataCatalogEncryptionSettings.prototype, "dataCatalogEncryptionSettings", {
        get: function () {
            return this.interpolationForAttribute('data_catalog_encryption_settings');
        },
        set: function (value) {
            this._dataCatalogEncryptionSettings = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueDataCatalogEncryptionSettings.prototype, "dataCatalogEncryptionSettingsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dataCatalogEncryptionSettings;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    GlueDataCatalogEncryptionSettings.prototype.synthesizeAttributes = function () {
        return {
            catalog_id: cdktf.stringToTerraform(this._catalogId),
            data_catalog_encryption_settings: cdktf.listMapper(glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsToTerraform)(this._dataCatalogEncryptionSettings)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    GlueDataCatalogEncryptionSettings.tfResourceType = "aws_glue_data_catalog_encryption_settings";
    return GlueDataCatalogEncryptionSettings;
}(cdktf.TerraformResource));
exports.GlueDataCatalogEncryptionSettings = GlueDataCatalogEncryptionSettings;
