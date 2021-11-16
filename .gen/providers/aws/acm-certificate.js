"use strict";
// https://www.terraform.io/docs/providers/aws/r/acm_certificate.html
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
exports.AcmCertificate = exports.AcmCertificateDomainValidationOptions = void 0;
var cdktf = require("cdktf");
var AcmCertificateDomainValidationOptions = /** @class */ (function (_super) {
    __extends(AcmCertificateDomainValidationOptions, _super);
    function AcmCertificateDomainValidationOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(AcmCertificateDomainValidationOptions.prototype, "domainName", {
        // domain_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('domain_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AcmCertificateDomainValidationOptions.prototype, "resourceRecordName", {
        // resource_record_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('resource_record_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AcmCertificateDomainValidationOptions.prototype, "resourceRecordType", {
        // resource_record_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('resource_record_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AcmCertificateDomainValidationOptions.prototype, "resourceRecordValue", {
        // resource_record_value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('resource_record_value');
        },
        enumerable: false,
        configurable: true
    });
    return AcmCertificateDomainValidationOptions;
}(cdktf.ComplexComputedList));
exports.AcmCertificateDomainValidationOptions = AcmCertificateDomainValidationOptions;
function acmCertificateOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        certificate_transparency_logging_preference: cdktf.stringToTerraform(struct.certificateTransparencyLoggingPreference)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate.html aws_acm_certificate}
*/
var AcmCertificate = /** @class */ (function (_super) {
    __extends(AcmCertificate, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate.html aws_acm_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AcmCertificateConfig = {}
    */
    function AcmCertificate(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_acm_certificate',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._certificateAuthorityArn = config.certificateAuthorityArn;
        _this._certificateBody = config.certificateBody;
        _this._certificateChain = config.certificateChain;
        _this._domainName = config.domainName;
        _this._privateKey = config.privateKey;
        _this._subjectAlternativeNames = config.subjectAlternativeNames;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._validationMethod = config.validationMethod;
        _this._options = config.options;
        return _this;
    }
    Object.defineProperty(AcmCertificate.prototype, "arn", {
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
    Object.defineProperty(AcmCertificate.prototype, "certificateAuthorityArn", {
        get: function () {
            return this.getStringAttribute('certificate_authority_arn');
        },
        set: function (value) {
            this._certificateAuthorityArn = value;
        },
        enumerable: false,
        configurable: true
    });
    AcmCertificate.prototype.resetCertificateAuthorityArn = function () {
        this._certificateAuthorityArn = undefined;
    };
    Object.defineProperty(AcmCertificate.prototype, "certificateAuthorityArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificateAuthorityArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AcmCertificate.prototype, "certificateBody", {
        get: function () {
            return this.getStringAttribute('certificate_body');
        },
        set: function (value) {
            this._certificateBody = value;
        },
        enumerable: false,
        configurable: true
    });
    AcmCertificate.prototype.resetCertificateBody = function () {
        this._certificateBody = undefined;
    };
    Object.defineProperty(AcmCertificate.prototype, "certificateBodyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificateBody;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AcmCertificate.prototype, "certificateChain", {
        get: function () {
            return this.getStringAttribute('certificate_chain');
        },
        set: function (value) {
            this._certificateChain = value;
        },
        enumerable: false,
        configurable: true
    });
    AcmCertificate.prototype.resetCertificateChain = function () {
        this._certificateChain = undefined;
    };
    Object.defineProperty(AcmCertificate.prototype, "certificateChainInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificateChain;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AcmCertificate.prototype, "domainName", {
        get: function () {
            return this.getStringAttribute('domain_name');
        },
        set: function (value) {
            this._domainName = value;
        },
        enumerable: false,
        configurable: true
    });
    AcmCertificate.prototype.resetDomainName = function () {
        this._domainName = undefined;
    };
    Object.defineProperty(AcmCertificate.prototype, "domainNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domainName;
        },
        enumerable: false,
        configurable: true
    });
    // domain_validation_options - computed: true, optional: false, required: false
    AcmCertificate.prototype.domainValidationOptions = function (index) {
        return new AcmCertificateDomainValidationOptions(this, 'domain_validation_options', index);
    };
    Object.defineProperty(AcmCertificate.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AcmCertificate.prototype, "privateKey", {
        get: function () {
            return this.getStringAttribute('private_key');
        },
        set: function (value) {
            this._privateKey = value;
        },
        enumerable: false,
        configurable: true
    });
    AcmCertificate.prototype.resetPrivateKey = function () {
        this._privateKey = undefined;
    };
    Object.defineProperty(AcmCertificate.prototype, "privateKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._privateKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AcmCertificate.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AcmCertificate.prototype, "subjectAlternativeNames", {
        get: function () {
            return this.getListAttribute('subject_alternative_names');
        },
        set: function (value) {
            this._subjectAlternativeNames = value;
        },
        enumerable: false,
        configurable: true
    });
    AcmCertificate.prototype.resetSubjectAlternativeNames = function () {
        this._subjectAlternativeNames = undefined;
    };
    Object.defineProperty(AcmCertificate.prototype, "subjectAlternativeNamesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subjectAlternativeNames;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AcmCertificate.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    AcmCertificate.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(AcmCertificate.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AcmCertificate.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    AcmCertificate.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(AcmCertificate.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AcmCertificate.prototype, "validationEmails", {
        // validation_emails - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('validation_emails');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AcmCertificate.prototype, "validationMethod", {
        get: function () {
            return this.getStringAttribute('validation_method');
        },
        set: function (value) {
            this._validationMethod = value;
        },
        enumerable: false,
        configurable: true
    });
    AcmCertificate.prototype.resetValidationMethod = function () {
        this._validationMethod = undefined;
    };
    Object.defineProperty(AcmCertificate.prototype, "validationMethodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._validationMethod;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AcmCertificate.prototype, "options", {
        get: function () {
            return this.interpolationForAttribute('options');
        },
        set: function (value) {
            this._options = value;
        },
        enumerable: false,
        configurable: true
    });
    AcmCertificate.prototype.resetOptions = function () {
        this._options = undefined;
    };
    Object.defineProperty(AcmCertificate.prototype, "optionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._options;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    AcmCertificate.prototype.synthesizeAttributes = function () {
        return {
            certificate_authority_arn: cdktf.stringToTerraform(this._certificateAuthorityArn),
            certificate_body: cdktf.stringToTerraform(this._certificateBody),
            certificate_chain: cdktf.stringToTerraform(this._certificateChain),
            domain_name: cdktf.stringToTerraform(this._domainName),
            private_key: cdktf.stringToTerraform(this._privateKey),
            subject_alternative_names: cdktf.listMapper(cdktf.stringToTerraform)(this._subjectAlternativeNames),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            validation_method: cdktf.stringToTerraform(this._validationMethod),
            options: cdktf.listMapper(acmCertificateOptionsToTerraform)(this._options)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    AcmCertificate.tfResourceType = "aws_acm_certificate";
    return AcmCertificate;
}(cdktf.TerraformResource));
exports.AcmCertificate = AcmCertificate;
