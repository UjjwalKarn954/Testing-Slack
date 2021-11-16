"use strict";
// https://www.terraform.io/docs/providers/aws/d/rds_certificate.html
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
exports.DataAwsRdsCertificate = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/rds_certificate.html aws_rds_certificate}
*/
var DataAwsRdsCertificate = /** @class */ (function (_super) {
    __extends(DataAwsRdsCertificate, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/rds_certificate.html aws_rds_certificate} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRdsCertificateConfig = {}
    */
    function DataAwsRdsCertificate(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_rds_certificate',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._latestValidTill = config.latestValidTill;
        return _this;
    }
    Object.defineProperty(DataAwsRdsCertificate.prototype, "arn", {
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
    Object.defineProperty(DataAwsRdsCertificate.prototype, "certificateType", {
        // certificate_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsCertificate.prototype, "customerOverride", {
        // customer_override - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('customer_override');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsCertificate.prototype, "customerOverrideValidTill", {
        // customer_override_valid_till - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('customer_override_valid_till');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsCertificate.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsCertificate.prototype, "latestValidTill", {
        get: function () {
            return this.getBooleanAttribute('latest_valid_till');
        },
        set: function (value) {
            this._latestValidTill = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRdsCertificate.prototype.resetLatestValidTill = function () {
        this._latestValidTill = undefined;
    };
    Object.defineProperty(DataAwsRdsCertificate.prototype, "latestValidTillInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._latestValidTill;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsCertificate.prototype, "thumbprint", {
        // thumbprint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('thumbprint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsCertificate.prototype, "validFrom", {
        // valid_from - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('valid_from');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRdsCertificate.prototype, "validTill", {
        // valid_till - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('valid_till');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsRdsCertificate.prototype.synthesizeAttributes = function () {
        return {
            latest_valid_till: cdktf.booleanToTerraform(this._latestValidTill)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsRdsCertificate.tfResourceType = "aws_rds_certificate";
    return DataAwsRdsCertificate;
}(cdktf.TerraformDataSource));
exports.DataAwsRdsCertificate = DataAwsRdsCertificate;
