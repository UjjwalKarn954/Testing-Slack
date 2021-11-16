"use strict";
// https://www.terraform.io/docs/providers/aws/r/signer_signing_profile.html
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
exports.SignerSigningProfile = exports.SignerSigningProfileRevocationRecord = void 0;
var cdktf = require("cdktf");
var SignerSigningProfileRevocationRecord = /** @class */ (function (_super) {
    __extends(SignerSigningProfileRevocationRecord, _super);
    function SignerSigningProfileRevocationRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SignerSigningProfileRevocationRecord.prototype, "revocationEffectiveFrom", {
        // revocation_effective_from - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('revocation_effective_from');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SignerSigningProfileRevocationRecord.prototype, "revokedAt", {
        // revoked_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('revoked_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SignerSigningProfileRevocationRecord.prototype, "revokedBy", {
        // revoked_by - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('revoked_by');
        },
        enumerable: false,
        configurable: true
    });
    return SignerSigningProfileRevocationRecord;
}(cdktf.ComplexComputedList));
exports.SignerSigningProfileRevocationRecord = SignerSigningProfileRevocationRecord;
function signerSigningProfileSignatureValidityPeriodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
        value: cdktf.numberToTerraform(struct.value)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile.html aws_signer_signing_profile}
*/
var SignerSigningProfile = /** @class */ (function (_super) {
    __extends(SignerSigningProfile, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile.html aws_signer_signing_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SignerSigningProfileConfig
    */
    function SignerSigningProfile(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_signer_signing_profile',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        _this._namePrefix = config.namePrefix;
        _this._platformId = config.platformId;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._signatureValidityPeriod = config.signatureValidityPeriod;
        return _this;
    }
    Object.defineProperty(SignerSigningProfile.prototype, "arn", {
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
    Object.defineProperty(SignerSigningProfile.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SignerSigningProfile.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    SignerSigningProfile.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(SignerSigningProfile.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SignerSigningProfile.prototype, "namePrefix", {
        get: function () {
            return this.getStringAttribute('name_prefix');
        },
        set: function (value) {
            this._namePrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    SignerSigningProfile.prototype.resetNamePrefix = function () {
        this._namePrefix = undefined;
    };
    Object.defineProperty(SignerSigningProfile.prototype, "namePrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._namePrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SignerSigningProfile.prototype, "platformDisplayName", {
        // platform_display_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('platform_display_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SignerSigningProfile.prototype, "platformId", {
        get: function () {
            return this.getStringAttribute('platform_id');
        },
        set: function (value) {
            this._platformId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SignerSigningProfile.prototype, "platformIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._platformId;
        },
        enumerable: false,
        configurable: true
    });
    // revocation_record - computed: true, optional: false, required: false
    SignerSigningProfile.prototype.revocationRecord = function (index) {
        return new SignerSigningProfileRevocationRecord(this, 'revocation_record', index);
    };
    Object.defineProperty(SignerSigningProfile.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SignerSigningProfile.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    SignerSigningProfile.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(SignerSigningProfile.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SignerSigningProfile.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    SignerSigningProfile.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(SignerSigningProfile.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SignerSigningProfile.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SignerSigningProfile.prototype, "versionArn", {
        // version_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('version_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SignerSigningProfile.prototype, "signatureValidityPeriod", {
        get: function () {
            return this.interpolationForAttribute('signature_validity_period');
        },
        set: function (value) {
            this._signatureValidityPeriod = value;
        },
        enumerable: false,
        configurable: true
    });
    SignerSigningProfile.prototype.resetSignatureValidityPeriod = function () {
        this._signatureValidityPeriod = undefined;
    };
    Object.defineProperty(SignerSigningProfile.prototype, "signatureValidityPeriodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._signatureValidityPeriod;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SignerSigningProfile.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            name_prefix: cdktf.stringToTerraform(this._namePrefix),
            platform_id: cdktf.stringToTerraform(this._platformId),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            signature_validity_period: cdktf.listMapper(signerSigningProfileSignatureValidityPeriodToTerraform)(this._signatureValidityPeriod)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SignerSigningProfile.tfResourceType = "aws_signer_signing_profile";
    return SignerSigningProfile;
}(cdktf.TerraformResource));
exports.SignerSigningProfile = SignerSigningProfile;
