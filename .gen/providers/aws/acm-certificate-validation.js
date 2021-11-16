"use strict";
// https://www.terraform.io/docs/providers/aws/r/acm_certificate_validation.html
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
exports.AcmCertificateValidation = void 0;
var cdktf = require("cdktf");
function acmCertificateValidationTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate_validation.html aws_acm_certificate_validation}
*/
var AcmCertificateValidation = /** @class */ (function (_super) {
    __extends(AcmCertificateValidation, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate_validation.html aws_acm_certificate_validation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AcmCertificateValidationConfig
    */
    function AcmCertificateValidation(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_acm_certificate_validation',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._certificateArn = config.certificateArn;
        _this._validationRecordFqdns = config.validationRecordFqdns;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(AcmCertificateValidation.prototype, "certificateArn", {
        get: function () {
            return this.getStringAttribute('certificate_arn');
        },
        set: function (value) {
            this._certificateArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AcmCertificateValidation.prototype, "certificateArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificateArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AcmCertificateValidation.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AcmCertificateValidation.prototype, "validationRecordFqdns", {
        get: function () {
            return this.getListAttribute('validation_record_fqdns');
        },
        set: function (value) {
            this._validationRecordFqdns = value;
        },
        enumerable: false,
        configurable: true
    });
    AcmCertificateValidation.prototype.resetValidationRecordFqdns = function () {
        this._validationRecordFqdns = undefined;
    };
    Object.defineProperty(AcmCertificateValidation.prototype, "validationRecordFqdnsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._validationRecordFqdns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AcmCertificateValidation.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    AcmCertificateValidation.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(AcmCertificateValidation.prototype, "timeoutsInput", {
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
    AcmCertificateValidation.prototype.synthesizeAttributes = function () {
        return {
            certificate_arn: cdktf.stringToTerraform(this._certificateArn),
            validation_record_fqdns: cdktf.listMapper(cdktf.stringToTerraform)(this._validationRecordFqdns),
            timeouts: acmCertificateValidationTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    AcmCertificateValidation.tfResourceType = "aws_acm_certificate_validation";
    return AcmCertificateValidation;
}(cdktf.TerraformResource));
exports.AcmCertificateValidation = AcmCertificateValidation;
