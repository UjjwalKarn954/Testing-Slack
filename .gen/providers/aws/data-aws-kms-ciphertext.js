"use strict";
// https://www.terraform.io/docs/providers/aws/d/kms_ciphertext.html
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
exports.DataAwsKmsCiphertext = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/kms_ciphertext.html aws_kms_ciphertext}
*/
var DataAwsKmsCiphertext = /** @class */ (function (_super) {
    __extends(DataAwsKmsCiphertext, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/kms_ciphertext.html aws_kms_ciphertext} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsKmsCiphertextConfig
    */
    function DataAwsKmsCiphertext(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_kms_ciphertext',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._context = config.context;
        _this._keyId = config.keyId;
        _this._plaintext = config.plaintext;
        return _this;
    }
    Object.defineProperty(DataAwsKmsCiphertext.prototype, "ciphertextBlob", {
        // ==========
        // ATTRIBUTES
        // ==========
        // ciphertext_blob - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ciphertext_blob');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKmsCiphertext.prototype, "context", {
        get: function () {
            return this.interpolationForAttribute('context');
        },
        set: function (value) {
            this._context = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsKmsCiphertext.prototype.resetContext = function () {
        this._context = undefined;
    };
    Object.defineProperty(DataAwsKmsCiphertext.prototype, "contextInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._context;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKmsCiphertext.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKmsCiphertext.prototype, "keyId", {
        get: function () {
            return this.getStringAttribute('key_id');
        },
        set: function (value) {
            this._keyId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKmsCiphertext.prototype, "keyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKmsCiphertext.prototype, "plaintext", {
        get: function () {
            return this.getStringAttribute('plaintext');
        },
        set: function (value) {
            this._plaintext = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKmsCiphertext.prototype, "plaintextInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._plaintext;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsKmsCiphertext.prototype.synthesizeAttributes = function () {
        return {
            context: cdktf.hashMapper(cdktf.anyToTerraform)(this._context),
            key_id: cdktf.stringToTerraform(this._keyId),
            plaintext: cdktf.stringToTerraform(this._plaintext)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsKmsCiphertext.tfResourceType = "aws_kms_ciphertext";
    return DataAwsKmsCiphertext;
}(cdktf.TerraformDataSource));
exports.DataAwsKmsCiphertext = DataAwsKmsCiphertext;
