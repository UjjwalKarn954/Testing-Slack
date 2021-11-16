"use strict";
// https://www.terraform.io/docs/providers/aws/r/acmpca_certificate.html
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
exports.AcmpcaCertificate = void 0;
var cdktf = require("cdktf");
function acmpcaCertificateValidityToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
        value: cdktf.stringToTerraform(struct.value)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate.html aws_acmpca_certificate}
*/
var AcmpcaCertificate = /** @class */ (function (_super) {
    __extends(AcmpcaCertificate, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate.html aws_acmpca_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AcmpcaCertificateConfig
    */
    function AcmpcaCertificate(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_acmpca_certificate',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._certificateAuthorityArn = config.certificateAuthorityArn;
        _this._certificateSigningRequest = config.certificateSigningRequest;
        _this._signingAlgorithm = config.signingAlgorithm;
        _this._templateArn = config.templateArn;
        _this._validity = config.validity;
        return _this;
    }
    Object.defineProperty(AcmpcaCertificate.prototype, "arn", {
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
    Object.defineProperty(AcmpcaCertificate.prototype, "certificate", {
        // certificate - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AcmpcaCertificate.prototype, "certificateAuthorityArn", {
        get: function () {
            return this.getStringAttribute('certificate_authority_arn');
        },
        set: function (value) {
            this._certificateAuthorityArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AcmpcaCertificate.prototype, "certificateAuthorityArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificateAuthorityArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AcmpcaCertificate.prototype, "certificateChain", {
        // certificate_chain - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate_chain');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AcmpcaCertificate.prototype, "certificateSigningRequest", {
        get: function () {
            return this.getStringAttribute('certificate_signing_request');
        },
        set: function (value) {
            this._certificateSigningRequest = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AcmpcaCertificate.prototype, "certificateSigningRequestInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificateSigningRequest;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AcmpcaCertificate.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AcmpcaCertificate.prototype, "signingAlgorithm", {
        get: function () {
            return this.getStringAttribute('signing_algorithm');
        },
        set: function (value) {
            this._signingAlgorithm = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AcmpcaCertificate.prototype, "signingAlgorithmInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._signingAlgorithm;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AcmpcaCertificate.prototype, "templateArn", {
        get: function () {
            return this.getStringAttribute('template_arn');
        },
        set: function (value) {
            this._templateArn = value;
        },
        enumerable: false,
        configurable: true
    });
    AcmpcaCertificate.prototype.resetTemplateArn = function () {
        this._templateArn = undefined;
    };
    Object.defineProperty(AcmpcaCertificate.prototype, "templateArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._templateArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AcmpcaCertificate.prototype, "validity", {
        get: function () {
            return this.interpolationForAttribute('validity');
        },
        set: function (value) {
            this._validity = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AcmpcaCertificate.prototype, "validityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._validity;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    AcmpcaCertificate.prototype.synthesizeAttributes = function () {
        return {
            certificate_authority_arn: cdktf.stringToTerraform(this._certificateAuthorityArn),
            certificate_signing_request: cdktf.stringToTerraform(this._certificateSigningRequest),
            signing_algorithm: cdktf.stringToTerraform(this._signingAlgorithm),
            template_arn: cdktf.stringToTerraform(this._templateArn),
            validity: cdktf.listMapper(acmpcaCertificateValidityToTerraform)(this._validity)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    AcmpcaCertificate.tfResourceType = "aws_acmpca_certificate";
    return AcmpcaCertificate;
}(cdktf.TerraformResource));
exports.AcmpcaCertificate = AcmpcaCertificate;
