"use strict";
// https://www.terraform.io/docs/providers/aws/d/acmpca_certificate.html
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
exports.DataAwsAcmpcaCertificate = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate.html aws_acmpca_certificate}
*/
var DataAwsAcmpcaCertificate = /** @class */ (function (_super) {
    __extends(DataAwsAcmpcaCertificate, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate.html aws_acmpca_certificate} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAcmpcaCertificateConfig
    */
    function DataAwsAcmpcaCertificate(scope, id, config) {
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
        _this._arn = config.arn;
        _this._certificateAuthorityArn = config.certificateAuthorityArn;
        return _this;
    }
    Object.defineProperty(DataAwsAcmpcaCertificate.prototype, "arn", {
        get: function () {
            return this.getStringAttribute('arn');
        },
        set: function (value) {
            this._arn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAcmpcaCertificate.prototype, "arnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._arn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAcmpcaCertificate.prototype, "certificate", {
        // certificate - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAcmpcaCertificate.prototype, "certificateAuthorityArn", {
        get: function () {
            return this.getStringAttribute('certificate_authority_arn');
        },
        set: function (value) {
            this._certificateAuthorityArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAcmpcaCertificate.prototype, "certificateAuthorityArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificateAuthorityArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAcmpcaCertificate.prototype, "certificateChain", {
        // certificate_chain - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate_chain');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAcmpcaCertificate.prototype, "id", {
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
    DataAwsAcmpcaCertificate.prototype.synthesizeAttributes = function () {
        return {
            arn: cdktf.stringToTerraform(this._arn),
            certificate_authority_arn: cdktf.stringToTerraform(this._certificateAuthorityArn)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsAcmpcaCertificate.tfResourceType = "aws_acmpca_certificate";
    return DataAwsAcmpcaCertificate;
}(cdktf.TerraformDataSource));
exports.DataAwsAcmpcaCertificate = DataAwsAcmpcaCertificate;
