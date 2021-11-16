"use strict";
// https://www.terraform.io/docs/providers/aws/d/kms_public_key.html
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
exports.DataAwsKmsPublicKey = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/kms_public_key.html aws_kms_public_key}
*/
var DataAwsKmsPublicKey = /** @class */ (function (_super) {
    __extends(DataAwsKmsPublicKey, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/kms_public_key.html aws_kms_public_key} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsKmsPublicKeyConfig
    */
    function DataAwsKmsPublicKey(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_kms_public_key',
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
    Object.defineProperty(DataAwsKmsPublicKey.prototype, "arn", {
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
    Object.defineProperty(DataAwsKmsPublicKey.prototype, "customerMasterKeySpec", {
        // customer_master_key_spec - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('customer_master_key_spec');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKmsPublicKey.prototype, "encryptionAlgorithms", {
        // encryption_algorithms - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('encryption_algorithms');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKmsPublicKey.prototype, "grantTokens", {
        get: function () {
            return this.getListAttribute('grant_tokens');
        },
        set: function (value) {
            this._grantTokens = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsKmsPublicKey.prototype.resetGrantTokens = function () {
        this._grantTokens = undefined;
    };
    Object.defineProperty(DataAwsKmsPublicKey.prototype, "grantTokensInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._grantTokens;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKmsPublicKey.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKmsPublicKey.prototype, "keyId", {
        get: function () {
            return this.getStringAttribute('key_id');
        },
        set: function (value) {
            this._keyId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKmsPublicKey.prototype, "keyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKmsPublicKey.prototype, "keyUsage", {
        // key_usage - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key_usage');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKmsPublicKey.prototype, "publicKey", {
        // public_key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('public_key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKmsPublicKey.prototype, "signingAlgorithms", {
        // signing_algorithms - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('signing_algorithms');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsKmsPublicKey.prototype.synthesizeAttributes = function () {
        return {
            grant_tokens: cdktf.listMapper(cdktf.stringToTerraform)(this._grantTokens),
            key_id: cdktf.stringToTerraform(this._keyId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsKmsPublicKey.tfResourceType = "aws_kms_public_key";
    return DataAwsKmsPublicKey;
}(cdktf.TerraformDataSource));
exports.DataAwsKmsPublicKey = DataAwsKmsPublicKey;
