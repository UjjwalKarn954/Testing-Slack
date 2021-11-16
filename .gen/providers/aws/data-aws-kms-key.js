"use strict";
// https://www.terraform.io/docs/providers/aws/d/kms_key.html
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
exports.DataAwsKmsKey = exports.DataAwsKmsKeyMultiRegionConfiguration = exports.DataAwsKmsKeyMultiRegionConfigurationReplicaKeys = exports.DataAwsKmsKeyMultiRegionConfigurationPrimaryKey = void 0;
var cdktf = require("cdktf");
var DataAwsKmsKeyMultiRegionConfigurationPrimaryKey = /** @class */ (function (_super) {
    __extends(DataAwsKmsKeyMultiRegionConfigurationPrimaryKey, _super);
    function DataAwsKmsKeyMultiRegionConfigurationPrimaryKey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsKmsKeyMultiRegionConfigurationPrimaryKey.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKmsKeyMultiRegionConfigurationPrimaryKey.prototype, "region", {
        // region - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('region');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsKmsKeyMultiRegionConfigurationPrimaryKey;
}(cdktf.ComplexComputedList));
exports.DataAwsKmsKeyMultiRegionConfigurationPrimaryKey = DataAwsKmsKeyMultiRegionConfigurationPrimaryKey;
var DataAwsKmsKeyMultiRegionConfigurationReplicaKeys = /** @class */ (function (_super) {
    __extends(DataAwsKmsKeyMultiRegionConfigurationReplicaKeys, _super);
    function DataAwsKmsKeyMultiRegionConfigurationReplicaKeys() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsKmsKeyMultiRegionConfigurationReplicaKeys.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKmsKeyMultiRegionConfigurationReplicaKeys.prototype, "region", {
        // region - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('region');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsKmsKeyMultiRegionConfigurationReplicaKeys;
}(cdktf.ComplexComputedList));
exports.DataAwsKmsKeyMultiRegionConfigurationReplicaKeys = DataAwsKmsKeyMultiRegionConfigurationReplicaKeys;
var DataAwsKmsKeyMultiRegionConfiguration = /** @class */ (function (_super) {
    __extends(DataAwsKmsKeyMultiRegionConfiguration, _super);
    function DataAwsKmsKeyMultiRegionConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsKmsKeyMultiRegionConfiguration.prototype, "multiRegionKeyType", {
        // multi_region_key_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('multi_region_key_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKmsKeyMultiRegionConfiguration.prototype, "primaryKey", {
        // primary_key - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('primary_key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKmsKeyMultiRegionConfiguration.prototype, "replicaKeys", {
        // replica_keys - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('replica_keys');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsKmsKeyMultiRegionConfiguration;
}(cdktf.ComplexComputedList));
exports.DataAwsKmsKeyMultiRegionConfiguration = DataAwsKmsKeyMultiRegionConfiguration;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/kms_key.html aws_kms_key}
*/
var DataAwsKmsKey = /** @class */ (function (_super) {
    __extends(DataAwsKmsKey, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/kms_key.html aws_kms_key} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsKmsKeyConfig
    */
    function DataAwsKmsKey(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_kms_key',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._grantTokens = config.grantTokens;
        _this._keyId = config.keyId;
        return _this;
    }
    Object.defineProperty(DataAwsKmsKey.prototype, "arn", {
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
    Object.defineProperty(DataAwsKmsKey.prototype, "awsAccountId", {
        // aws_account_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('aws_account_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKmsKey.prototype, "creationDate", {
        // creation_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('creation_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKmsKey.prototype, "customerMasterKeySpec", {
        // customer_master_key_spec - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('customer_master_key_spec');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKmsKey.prototype, "deletionDate", {
        // deletion_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('deletion_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKmsKey.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKmsKey.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKmsKey.prototype, "expirationModel", {
        // expiration_model - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expiration_model');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKmsKey.prototype, "grantTokens", {
        get: function () {
            return this.getListAttribute('grant_tokens');
        },
        set: function (value) {
            this._grantTokens = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsKmsKey.prototype.resetGrantTokens = function () {
        this._grantTokens = undefined;
    };
    Object.defineProperty(DataAwsKmsKey.prototype, "grantTokensInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._grantTokens;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKmsKey.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKmsKey.prototype, "keyId", {
        get: function () {
            return this.getStringAttribute('key_id');
        },
        set: function (value) {
            this._keyId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKmsKey.prototype, "keyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKmsKey.prototype, "keyManager", {
        // key_manager - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key_manager');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKmsKey.prototype, "keyState", {
        // key_state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key_state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKmsKey.prototype, "keyUsage", {
        // key_usage - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key_usage');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKmsKey.prototype, "multiRegion", {
        // multi_region - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('multi_region');
        },
        enumerable: false,
        configurable: true
    });
    // multi_region_configuration - computed: true, optional: false, required: false
    DataAwsKmsKey.prototype.multiRegionConfiguration = function (index) {
        return new DataAwsKmsKeyMultiRegionConfiguration(this, 'multi_region_configuration', index);
    };
    Object.defineProperty(DataAwsKmsKey.prototype, "origin", {
        // origin - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('origin');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKmsKey.prototype, "validTo", {
        // valid_to - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('valid_to');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsKmsKey.prototype.synthesizeAttributes = function () {
        return {
            grant_tokens: cdktf.listMapper(cdktf.stringToTerraform)(this._grantTokens),
            key_id: cdktf.stringToTerraform(this._keyId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsKmsKey.tfResourceType = "aws_kms_key";
    return DataAwsKmsKey;
}(cdktf.TerraformDataSource));
exports.DataAwsKmsKey = DataAwsKmsKey;
