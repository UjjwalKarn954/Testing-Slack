"use strict";
// https://www.terraform.io/docs/providers/aws/d/acmpca_certificate_authority.html
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
exports.DataAwsAcmpcaCertificateAuthority = void 0;
var cdktf = require("cdktf");
function dataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function dataAwsAcmpcaCertificateAuthorityRevocationConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        crl_configuration: cdktf.listMapper(dataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationToTerraform)(struct.crlConfiguration)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate_authority.html aws_acmpca_certificate_authority}
*/
var DataAwsAcmpcaCertificateAuthority = /** @class */ (function (_super) {
    __extends(DataAwsAcmpcaCertificateAuthority, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate_authority.html aws_acmpca_certificate_authority} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAcmpcaCertificateAuthorityConfig
    */
    function DataAwsAcmpcaCertificateAuthority(scope, id, config) {
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
        _this._arn = config.arn;
        _this._tags = config.tags;
        _this._revocationConfiguration = config.revocationConfiguration;
        return _this;
    }
    Object.defineProperty(DataAwsAcmpcaCertificateAuthority.prototype, "arn", {
        get: function () {
            return this.getStringAttribute('arn');
        },
        set: function (value) {
            this._arn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAcmpcaCertificateAuthority.prototype, "arnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._arn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAcmpcaCertificateAuthority.prototype, "certificate", {
        // certificate - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAcmpcaCertificateAuthority.prototype, "certificateChain", {
        // certificate_chain - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate_chain');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAcmpcaCertificateAuthority.prototype, "certificateSigningRequest", {
        // certificate_signing_request - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate_signing_request');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAcmpcaCertificateAuthority.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAcmpcaCertificateAuthority.prototype, "notAfter", {
        // not_after - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('not_after');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAcmpcaCertificateAuthority.prototype, "notBefore", {
        // not_before - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('not_before');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAcmpcaCertificateAuthority.prototype, "serial", {
        // serial - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('serial');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAcmpcaCertificateAuthority.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAcmpcaCertificateAuthority.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsAcmpcaCertificateAuthority.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsAcmpcaCertificateAuthority.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAcmpcaCertificateAuthority.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAcmpcaCertificateAuthority.prototype, "revocationConfiguration", {
        get: function () {
            return this.interpolationForAttribute('revocation_configuration');
        },
        set: function (value) {
            this._revocationConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsAcmpcaCertificateAuthority.prototype.resetRevocationConfiguration = function () {
        this._revocationConfiguration = undefined;
    };
    Object.defineProperty(DataAwsAcmpcaCertificateAuthority.prototype, "revocationConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._revocationConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsAcmpcaCertificateAuthority.prototype.synthesizeAttributes = function () {
        return {
            arn: cdktf.stringToTerraform(this._arn),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            revocation_configuration: cdktf.listMapper(dataAwsAcmpcaCertificateAuthorityRevocationConfigurationToTerraform)(this._revocationConfiguration)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsAcmpcaCertificateAuthority.tfResourceType = "aws_acmpca_certificate_authority";
    return DataAwsAcmpcaCertificateAuthority;
}(cdktf.TerraformDataSource));
exports.DataAwsAcmpcaCertificateAuthority = DataAwsAcmpcaCertificateAuthority;
