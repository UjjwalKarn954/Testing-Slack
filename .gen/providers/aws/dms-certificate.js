"use strict";
// https://www.terraform.io/docs/providers/aws/r/dms_certificate.html
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
exports.DmsCertificate = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dms_certificate.html aws_dms_certificate}
*/
var DmsCertificate = /** @class */ (function (_super) {
    __extends(DmsCertificate, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dms_certificate.html aws_dms_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DmsCertificateConfig
    */
    function DmsCertificate(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_dms_certificate',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._certificateId = config.certificateId;
        _this._certificatePem = config.certificatePem;
        _this._certificateWallet = config.certificateWallet;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(DmsCertificate.prototype, "certificateArn", {
        // ==========
        // ATTRIBUTES
        // ==========
        // certificate_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsCertificate.prototype, "certificateId", {
        get: function () {
            return this.getStringAttribute('certificate_id');
        },
        set: function (value) {
            this._certificateId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsCertificate.prototype, "certificateIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificateId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsCertificate.prototype, "certificatePem", {
        get: function () {
            return this.getStringAttribute('certificate_pem');
        },
        set: function (value) {
            this._certificatePem = value;
        },
        enumerable: false,
        configurable: true
    });
    DmsCertificate.prototype.resetCertificatePem = function () {
        this._certificatePem = undefined;
    };
    Object.defineProperty(DmsCertificate.prototype, "certificatePemInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificatePem;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsCertificate.prototype, "certificateWallet", {
        get: function () {
            return this.getStringAttribute('certificate_wallet');
        },
        set: function (value) {
            this._certificateWallet = value;
        },
        enumerable: false,
        configurable: true
    });
    DmsCertificate.prototype.resetCertificateWallet = function () {
        this._certificateWallet = undefined;
    };
    Object.defineProperty(DmsCertificate.prototype, "certificateWalletInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificateWallet;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsCertificate.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsCertificate.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DmsCertificate.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DmsCertificate.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsCertificate.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    DmsCertificate.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(DmsCertificate.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DmsCertificate.prototype.synthesizeAttributes = function () {
        return {
            certificate_id: cdktf.stringToTerraform(this._certificateId),
            certificate_pem: cdktf.stringToTerraform(this._certificatePem),
            certificate_wallet: cdktf.stringToTerraform(this._certificateWallet),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DmsCertificate.tfResourceType = "aws_dms_certificate";
    return DmsCertificate;
}(cdktf.TerraformResource));
exports.DmsCertificate = DmsCertificate;
