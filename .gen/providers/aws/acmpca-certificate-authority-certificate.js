"use strict";
// https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority_certificate.html
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
exports.AcmpcaCertificateAuthorityCertificate = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority_certificate.html aws_acmpca_certificate_authority_certificate}
*/
var AcmpcaCertificateAuthorityCertificate = /** @class */ (function (_super) {
    __extends(AcmpcaCertificateAuthorityCertificate, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority_certificate.html aws_acmpca_certificate_authority_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AcmpcaCertificateAuthorityCertificateConfig
    */
    function AcmpcaCertificateAuthorityCertificate(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_acmpca_certificate_authority_certificate',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._certificate = config.certificate;
        _this._certificateAuthorityArn = config.certificateAuthorityArn;
        _this._certificateChain = config.certificateChain;
        return _this;
    }
    Object.defineProperty(AcmpcaCertificateAuthorityCertificate.prototype, "certificate", {
        get: function () {
            return this.getStringAttribute('certificate');
        },
        set: function (value) {
            this._certificate = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AcmpcaCertificateAuthorityCertificate.prototype, "certificateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AcmpcaCertificateAuthorityCertificate.prototype, "certificateAuthorityArn", {
        get: function () {
            return this.getStringAttribute('certificate_authority_arn');
        },
        set: function (value) {
            this._certificateAuthorityArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AcmpcaCertificateAuthorityCertificate.prototype, "certificateAuthorityArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificateAuthorityArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AcmpcaCertificateAuthorityCertificate.prototype, "certificateChain", {
        get: function () {
            return this.getStringAttribute('certificate_chain');
        },
        set: function (value) {
            this._certificateChain = value;
        },
        enumerable: false,
        configurable: true
    });
    AcmpcaCertificateAuthorityCertificate.prototype.resetCertificateChain = function () {
        this._certificateChain = undefined;
    };
    Object.defineProperty(AcmpcaCertificateAuthorityCertificate.prototype, "certificateChainInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificateChain;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AcmpcaCertificateAuthorityCertificate.prototype, "id", {
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
    AcmpcaCertificateAuthorityCertificate.prototype.synthesizeAttributes = function () {
        return {
            certificate: cdktf.stringToTerraform(this._certificate),
            certificate_authority_arn: cdktf.stringToTerraform(this._certificateAuthorityArn),
            certificate_chain: cdktf.stringToTerraform(this._certificateChain)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    AcmpcaCertificateAuthorityCertificate.tfResourceType = "aws_acmpca_certificate_authority_certificate";
    return AcmpcaCertificateAuthorityCertificate;
}(cdktf.TerraformResource));
exports.AcmpcaCertificateAuthorityCertificate = AcmpcaCertificateAuthorityCertificate;
