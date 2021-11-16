"use strict";
// https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html
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
exports.AcmpcaCertificateAuthority = void 0;
var cdktf = require("cdktf");
function acmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        common_name: cdktf.stringToTerraform(struct.commonName),
        country: cdktf.stringToTerraform(struct.country),
        distinguished_name_qualifier: cdktf.stringToTerraform(struct.distinguishedNameQualifier),
        generation_qualifier: cdktf.stringToTerraform(struct.generationQualifier),
        given_name: cdktf.stringToTerraform(struct.givenName),
        initials: cdktf.stringToTerraform(struct.initials),
        locality: cdktf.stringToTerraform(struct.locality),
        organization: cdktf.stringToTerraform(struct.organization),
        organizational_unit: cdktf.stringToTerraform(struct.organizationalUnit),
        pseudonym: cdktf.stringToTerraform(struct.pseudonym),
        state: cdktf.stringToTerraform(struct.state),
        surname: cdktf.stringToTerraform(struct.surname),
        title: cdktf.stringToTerraform(struct.title)
    };
}
function acmpcaCertificateAuthorityCertificateAuthorityConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key_algorithm: cdktf.stringToTerraform(struct.keyAlgorithm),
        signing_algorithm: cdktf.stringToTerraform(struct.signingAlgorithm),
        subject: cdktf.listMapper(acmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectToTerraform)(struct.subject)
    };
}
function acmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        custom_cname: cdktf.stringToTerraform(struct.customCname),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        expiration_in_days: cdktf.numberToTerraform(struct.expirationInDays),
        s3_bucket_name: cdktf.stringToTerraform(struct.s3BucketName),
        s3_object_acl: cdktf.stringToTerraform(struct.s3ObjectAcl)
    };
}
function acmpcaCertificateAuthorityRevocationConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        crl_configuration: cdktf.listMapper(acmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationToTerraform)(struct.crlConfiguration)
    };
}
function acmpcaCertificateAuthorityTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html aws_acmpca_certificate_authority}
*/
var AcmpcaCertificateAuthority = /** @class */ (function (_super) {
    __extends(AcmpcaCertificateAuthority, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html aws_acmpca_certificate_authority} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AcmpcaCertificateAuthorityConfig
    */
    function AcmpcaCertificateAuthority(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_acmpca_certificate_authority',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._enabled = config.enabled;
        _this._permanentDeletionTimeInDays = config.permanentDeletionTimeInDays;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._type = config.type;
        _this._certificateAuthorityConfiguration = config.certificateAuthorityConfiguration;
        _this._revocationConfiguration = config.revocationConfiguration;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(AcmpcaCertificateAuthority.prototype, "arn", {
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
    Object.defineProperty(AcmpcaCertificateAuthority.prototype, "certificate", {
        // certificate - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AcmpcaCertificateAuthority.prototype, "certificateChain", {
        // certificate_chain - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate_chain');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AcmpcaCertificateAuthority.prototype, "certificateSigningRequest", {
        // certificate_signing_request - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate_signing_request');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AcmpcaCertificateAuthority.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    AcmpcaCertificateAuthority.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(AcmpcaCertificateAuthority.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AcmpcaCertificateAuthority.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AcmpcaCertificateAuthority.prototype, "notAfter", {
        // not_after - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('not_after');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AcmpcaCertificateAuthority.prototype, "notBefore", {
        // not_before - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('not_before');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AcmpcaCertificateAuthority.prototype, "permanentDeletionTimeInDays", {
        get: function () {
            return this.getNumberAttribute('permanent_deletion_time_in_days');
        },
        set: function (value) {
            this._permanentDeletionTimeInDays = value;
        },
        enumerable: false,
        configurable: true
    });
    AcmpcaCertificateAuthority.prototype.resetPermanentDeletionTimeInDays = function () {
        this._permanentDeletionTimeInDays = undefined;
    };
    Object.defineProperty(AcmpcaCertificateAuthority.prototype, "permanentDeletionTimeInDaysInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._permanentDeletionTimeInDays;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AcmpcaCertificateAuthority.prototype, "serial", {
        // serial - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('serial');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AcmpcaCertificateAuthority.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AcmpcaCertificateAuthority.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    AcmpcaCertificateAuthority.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(AcmpcaCertificateAuthority.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AcmpcaCertificateAuthority.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    AcmpcaCertificateAuthority.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(AcmpcaCertificateAuthority.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AcmpcaCertificateAuthority.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    AcmpcaCertificateAuthority.prototype.resetType = function () {
        this._type = undefined;
    };
    Object.defineProperty(AcmpcaCertificateAuthority.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AcmpcaCertificateAuthority.prototype, "certificateAuthorityConfiguration", {
        get: function () {
            return this.interpolationForAttribute('certificate_authority_configuration');
        },
        set: function (value) {
            this._certificateAuthorityConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AcmpcaCertificateAuthority.prototype, "certificateAuthorityConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificateAuthorityConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AcmpcaCertificateAuthority.prototype, "revocationConfiguration", {
        get: function () {
            return this.interpolationForAttribute('revocation_configuration');
        },
        set: function (value) {
            this._revocationConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    AcmpcaCertificateAuthority.prototype.resetRevocationConfiguration = function () {
        this._revocationConfiguration = undefined;
    };
    Object.defineProperty(AcmpcaCertificateAuthority.prototype, "revocationConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._revocationConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AcmpcaCertificateAuthority.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    AcmpcaCertificateAuthority.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(AcmpcaCertificateAuthority.prototype, "timeoutsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeouts;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    AcmpcaCertificateAuthority.prototype.synthesizeAttributes = function () {
        return {
            enabled: cdktf.booleanToTerraform(this._enabled),
            permanent_deletion_time_in_days: cdktf.numberToTerraform(this._permanentDeletionTimeInDays),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            type: cdktf.stringToTerraform(this._type),
            certificate_authority_configuration: cdktf.listMapper(acmpcaCertificateAuthorityCertificateAuthorityConfigurationToTerraform)(this._certificateAuthorityConfiguration),
            revocation_configuration: cdktf.listMapper(acmpcaCertificateAuthorityRevocationConfigurationToTerraform)(this._revocationConfiguration),
            timeouts: acmpcaCertificateAuthorityTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    AcmpcaCertificateAuthority.tfResourceType = "aws_acmpca_certificate_authority";
    return AcmpcaCertificateAuthority;
}(cdktf.TerraformResource));
exports.AcmpcaCertificateAuthority = AcmpcaCertificateAuthority;
