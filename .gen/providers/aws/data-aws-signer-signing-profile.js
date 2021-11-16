"use strict";
// https://www.terraform.io/docs/providers/aws/d/signer_signing_profile.html
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
exports.DataAwsSignerSigningProfile = exports.DataAwsSignerSigningProfileSignatureValidityPeriod = exports.DataAwsSignerSigningProfileRevocationRecord = void 0;
var cdktf = require("cdktf");
var DataAwsSignerSigningProfileRevocationRecord = /** @class */ (function (_super) {
    __extends(DataAwsSignerSigningProfileRevocationRecord, _super);
    function DataAwsSignerSigningProfileRevocationRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsSignerSigningProfileRevocationRecord.prototype, "revocationEffectiveFrom", {
        // revocation_effective_from - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('revocation_effective_from');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSignerSigningProfileRevocationRecord.prototype, "revokedAt", {
        // revoked_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('revoked_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSignerSigningProfileRevocationRecord.prototype, "revokedBy", {
        // revoked_by - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('revoked_by');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsSignerSigningProfileRevocationRecord;
}(cdktf.ComplexComputedList));
exports.DataAwsSignerSigningProfileRevocationRecord = DataAwsSignerSigningProfileRevocationRecord;
var DataAwsSignerSigningProfileSignatureValidityPeriod = /** @class */ (function (_super) {
    __extends(DataAwsSignerSigningProfileSignatureValidityPeriod, _super);
    function DataAwsSignerSigningProfileSignatureValidityPeriod() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsSignerSigningProfileSignatureValidityPeriod.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSignerSigningProfileSignatureValidityPeriod.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsSignerSigningProfileSignatureValidityPeriod;
}(cdktf.ComplexComputedList));
exports.DataAwsSignerSigningProfileSignatureValidityPeriod = DataAwsSignerSigningProfileSignatureValidityPeriod;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/signer_signing_profile.html aws_signer_signing_profile}
*/
var DataAwsSignerSigningProfile = /** @class */ (function (_super) {
    __extends(DataAwsSignerSigningProfile, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/signer_signing_profile.html aws_signer_signing_profile} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSignerSigningProfileConfig
    */
    function DataAwsSignerSigningProfile(scope, id, config) {
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
        _this._tags = config.tags;
        return _this;
    }
    Object.defineProperty(DataAwsSignerSigningProfile.prototype, "arn", {
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
    Object.defineProperty(DataAwsSignerSigningProfile.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSignerSigningProfile.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSignerSigningProfile.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSignerSigningProfile.prototype, "platformDisplayName", {
        // platform_display_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('platform_display_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSignerSigningProfile.prototype, "platformId", {
        // platform_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('platform_id');
        },
        enumerable: false,
        configurable: true
    });
    // revocation_record - computed: true, optional: false, required: false
    DataAwsSignerSigningProfile.prototype.revocationRecord = function (index) {
        return new DataAwsSignerSigningProfileRevocationRecord(this, 'revocation_record', index);
    };
    // signature_validity_period - computed: true, optional: false, required: false
    DataAwsSignerSigningProfile.prototype.signatureValidityPeriod = function (index) {
        return new DataAwsSignerSigningProfileSignatureValidityPeriod(this, 'signature_validity_period', index);
    };
    Object.defineProperty(DataAwsSignerSigningProfile.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSignerSigningProfile.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsSignerSigningProfile.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsSignerSigningProfile.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSignerSigningProfile.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSignerSigningProfile.prototype, "versionArn", {
        // version_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('version_arn');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsSignerSigningProfile.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsSignerSigningProfile.tfResourceType = "aws_signer_signing_profile";
    return DataAwsSignerSigningProfile;
}(cdktf.TerraformDataSource));
exports.DataAwsSignerSigningProfile = DataAwsSignerSigningProfile;
