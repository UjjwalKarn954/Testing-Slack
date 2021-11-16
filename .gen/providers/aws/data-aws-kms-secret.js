"use strict";
// https://www.terraform.io/docs/providers/aws/d/kms_secret.html
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
exports.DataAwsKmsSecret = void 0;
var cdktf = require("cdktf");
function dataAwsKmsSecretSecretToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        context: cdktf.hashMapper(cdktf.anyToTerraform)(struct.context),
        grant_tokens: cdktf.listMapper(cdktf.stringToTerraform)(struct.grantTokens),
        name: cdktf.stringToTerraform(struct.name),
        payload: cdktf.stringToTerraform(struct.payload)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/kms_secret.html aws_kms_secret}
*/
var DataAwsKmsSecret = /** @class */ (function (_super) {
    __extends(DataAwsKmsSecret, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/kms_secret.html aws_kms_secret} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsKmsSecretConfig
    */
    function DataAwsKmsSecret(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_kms_secret',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._secret = config.secret;
        return _this;
    }
    Object.defineProperty(DataAwsKmsSecret.prototype, "id", {
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
    Object.defineProperty(DataAwsKmsSecret.prototype, "secret", {
        get: function () {
            return this.interpolationForAttribute('secret');
        },
        set: function (value) {
            this._secret = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKmsSecret.prototype, "secretInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secret;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsKmsSecret.prototype.synthesizeAttributes = function () {
        return {
            secret: cdktf.listMapper(dataAwsKmsSecretSecretToTerraform)(this._secret)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsKmsSecret.tfResourceType = "aws_kms_secret";
    return DataAwsKmsSecret;
}(cdktf.TerraformDataSource));
exports.DataAwsKmsSecret = DataAwsKmsSecret;
