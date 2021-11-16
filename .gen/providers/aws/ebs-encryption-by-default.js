"use strict";
// https://www.terraform.io/docs/providers/aws/r/ebs_encryption_by_default.html
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
exports.EbsEncryptionByDefault = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ebs_encryption_by_default.html aws_ebs_encryption_by_default}
*/
var EbsEncryptionByDefault = /** @class */ (function (_super) {
    __extends(EbsEncryptionByDefault, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ebs_encryption_by_default.html aws_ebs_encryption_by_default} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EbsEncryptionByDefaultConfig = {}
    */
    function EbsEncryptionByDefault(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ebs_encryption_by_default',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._enabled = config.enabled;
        return _this;
    }
    Object.defineProperty(EbsEncryptionByDefault.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    EbsEncryptionByDefault.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(EbsEncryptionByDefault.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EbsEncryptionByDefault.prototype, "id", {
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
    EbsEncryptionByDefault.prototype.synthesizeAttributes = function () {
        return {
            enabled: cdktf.booleanToTerraform(this._enabled)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    EbsEncryptionByDefault.tfResourceType = "aws_ebs_encryption_by_default";
    return EbsEncryptionByDefault;
}(cdktf.TerraformResource));
exports.EbsEncryptionByDefault = EbsEncryptionByDefault;
