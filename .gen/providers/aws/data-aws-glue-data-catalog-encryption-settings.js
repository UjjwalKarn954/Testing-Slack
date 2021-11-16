"use strict";
// https://www.terraform.io/docs/providers/aws/d/glue_data_catalog_encryption_settings.html
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
exports.DataAwsGlueDataCatalogEncryptionSettings = exports.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings = exports.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest = exports.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption = void 0;
var cdktf = require("cdktf");
var DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption = /** @class */ (function (_super) {
    __extends(DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption, _super);
    function DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption.prototype, "awsKmsKeyId", {
        // aws_kms_key_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('aws_kms_key_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption.prototype, "returnConnectionPasswordEncrypted", {
        // return_connection_password_encrypted - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('return_connection_password_encrypted');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption;
}(cdktf.ComplexComputedList));
exports.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption = DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption;
var DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest = /** @class */ (function (_super) {
    __extends(DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest, _super);
    function DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest.prototype, "catalogEncryptionMode", {
        // catalog_encryption_mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('catalog_encryption_mode');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest.prototype, "sseAwsKmsKeyId", {
        // sse_aws_kms_key_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('sse_aws_kms_key_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest;
}(cdktf.ComplexComputedList));
exports.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest = DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest;
var DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings = /** @class */ (function (_super) {
    __extends(DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings, _super);
    function DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings.prototype, "connectionPasswordEncryption", {
        // connection_password_encryption - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('connection_password_encryption');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings.prototype, "encryptionAtRest", {
        // encryption_at_rest - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('encryption_at_rest');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings;
}(cdktf.ComplexComputedList));
exports.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings = DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/glue_data_catalog_encryption_settings.html aws_glue_data_catalog_encryption_settings}
*/
var DataAwsGlueDataCatalogEncryptionSettings = /** @class */ (function (_super) {
    __extends(DataAwsGlueDataCatalogEncryptionSettings, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/glue_data_catalog_encryption_settings.html aws_glue_data_catalog_encryption_settings} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsGlueDataCatalogEncryptionSettingsConfig
    */
    function DataAwsGlueDataCatalogEncryptionSettings(scope, id, config) {
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
        return _this;
    }
    Object.defineProperty(DataAwsGlueDataCatalogEncryptionSettings.prototype, "catalogId", {
        get: function () {
            return this.getStringAttribute('catalog_id');
        },
        set: function (value) {
            this._catalogId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsGlueDataCatalogEncryptionSettings.prototype, "catalogIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._catalogId;
        },
        enumerable: false,
        configurable: true
    });
    // data_catalog_encryption_settings - computed: true, optional: false, required: false
    DataAwsGlueDataCatalogEncryptionSettings.prototype.dataCatalogEncryptionSettings = function (index) {
        return new DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings(this, 'data_catalog_encryption_settings', index);
    };
    Object.defineProperty(DataAwsGlueDataCatalogEncryptionSettings.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsGlueDataCatalogEncryptionSettings.prototype.synthesizeAttributes = function () {
        return {
            catalog_id: cdktf.stringToTerraform(this._catalogId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsGlueDataCatalogEncryptionSettings.tfResourceType = "aws_glue_data_catalog_encryption_settings";
    return DataAwsGlueDataCatalogEncryptionSettings;
}(cdktf.TerraformDataSource));
exports.DataAwsGlueDataCatalogEncryptionSettings = DataAwsGlueDataCatalogEncryptionSettings;
