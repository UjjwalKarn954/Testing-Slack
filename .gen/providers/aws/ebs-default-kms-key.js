"use strict";
// https://www.terraform.io/docs/providers/aws/r/ebs_default_kms_key.html
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
exports.EbsDefaultKmsKey = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ebs_default_kms_key.html aws_ebs_default_kms_key}
*/
var EbsDefaultKmsKey = /** @class */ (function (_super) {
    __extends(EbsDefaultKmsKey, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ebs_default_kms_key.html aws_ebs_default_kms_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EbsDefaultKmsKeyConfig
    */
    function EbsDefaultKmsKey(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ebs_default_kms_key',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._keyArn = config.keyArn;
        return _this;
    }
    Object.defineProperty(EbsDefaultKmsKey.prototype, "id", {
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
    Object.defineProperty(EbsDefaultKmsKey.prototype, "keyArn", {
        get: function () {
            return this.getStringAttribute('key_arn');
        },
        set: function (value) {
            this._keyArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsDefaultKmsKey.prototype, "keyArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keyArn;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    EbsDefaultKmsKey.prototype.synthesizeAttributes = function () {
        return {
            key_arn: cdktf.stringToTerraform(this._keyArn)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    EbsDefaultKmsKey.tfResourceType = "aws_ebs_default_kms_key";
    return EbsDefaultKmsKey;
}(cdktf.TerraformResource));
exports.EbsDefaultKmsKey = EbsDefaultKmsKey;
