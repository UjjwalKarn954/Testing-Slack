"use strict";
// https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences.html
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
exports.SnsSmsPreferences = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences.html aws_sns_sms_preferences}
*/
var SnsSmsPreferences = /** @class */ (function (_super) {
    __extends(SnsSmsPreferences, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences.html aws_sns_sms_preferences} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SnsSmsPreferencesConfig = {}
    */
    function SnsSmsPreferences(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_sns_sms_preferences',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._defaultSenderId = config.defaultSenderId;
        _this._defaultSmsType = config.defaultSmsType;
        _this._deliveryStatusIamRoleArn = config.deliveryStatusIamRoleArn;
        _this._deliveryStatusSuccessSamplingRate = config.deliveryStatusSuccessSamplingRate;
        _this._monthlySpendLimit = config.monthlySpendLimit;
        _this._usageReportS3Bucket = config.usageReportS3Bucket;
        return _this;
    }
    Object.defineProperty(SnsSmsPreferences.prototype, "defaultSenderId", {
        get: function () {
            return this.getStringAttribute('default_sender_id');
        },
        set: function (value) {
            this._defaultSenderId = value;
        },
        enumerable: false,
        configurable: true
    });
    SnsSmsPreferences.prototype.resetDefaultSenderId = function () {
        this._defaultSenderId = undefined;
    };
    Object.defineProperty(SnsSmsPreferences.prototype, "defaultSenderIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultSenderId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsSmsPreferences.prototype, "defaultSmsType", {
        get: function () {
            return this.getStringAttribute('default_sms_type');
        },
        set: function (value) {
            this._defaultSmsType = value;
        },
        enumerable: false,
        configurable: true
    });
    SnsSmsPreferences.prototype.resetDefaultSmsType = function () {
        this._defaultSmsType = undefined;
    };
    Object.defineProperty(SnsSmsPreferences.prototype, "defaultSmsTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultSmsType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsSmsPreferences.prototype, "deliveryStatusIamRoleArn", {
        get: function () {
            return this.getStringAttribute('delivery_status_iam_role_arn');
        },
        set: function (value) {
            this._deliveryStatusIamRoleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    SnsSmsPreferences.prototype.resetDeliveryStatusIamRoleArn = function () {
        this._deliveryStatusIamRoleArn = undefined;
    };
    Object.defineProperty(SnsSmsPreferences.prototype, "deliveryStatusIamRoleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deliveryStatusIamRoleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsSmsPreferences.prototype, "deliveryStatusSuccessSamplingRate", {
        get: function () {
            return this.getStringAttribute('delivery_status_success_sampling_rate');
        },
        set: function (value) {
            this._deliveryStatusSuccessSamplingRate = value;
        },
        enumerable: false,
        configurable: true
    });
    SnsSmsPreferences.prototype.resetDeliveryStatusSuccessSamplingRate = function () {
        this._deliveryStatusSuccessSamplingRate = undefined;
    };
    Object.defineProperty(SnsSmsPreferences.prototype, "deliveryStatusSuccessSamplingRateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deliveryStatusSuccessSamplingRate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsSmsPreferences.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsSmsPreferences.prototype, "monthlySpendLimit", {
        get: function () {
            return this.getNumberAttribute('monthly_spend_limit');
        },
        set: function (value) {
            this._monthlySpendLimit = value;
        },
        enumerable: false,
        configurable: true
    });
    SnsSmsPreferences.prototype.resetMonthlySpendLimit = function () {
        this._monthlySpendLimit = undefined;
    };
    Object.defineProperty(SnsSmsPreferences.prototype, "monthlySpendLimitInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._monthlySpendLimit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsSmsPreferences.prototype, "usageReportS3Bucket", {
        get: function () {
            return this.getStringAttribute('usage_report_s3_bucket');
        },
        set: function (value) {
            this._usageReportS3Bucket = value;
        },
        enumerable: false,
        configurable: true
    });
    SnsSmsPreferences.prototype.resetUsageReportS3Bucket = function () {
        this._usageReportS3Bucket = undefined;
    };
    Object.defineProperty(SnsSmsPreferences.prototype, "usageReportS3BucketInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._usageReportS3Bucket;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SnsSmsPreferences.prototype.synthesizeAttributes = function () {
        return {
            default_sender_id: cdktf.stringToTerraform(this._defaultSenderId),
            default_sms_type: cdktf.stringToTerraform(this._defaultSmsType),
            delivery_status_iam_role_arn: cdktf.stringToTerraform(this._deliveryStatusIamRoleArn),
            delivery_status_success_sampling_rate: cdktf.stringToTerraform(this._deliveryStatusSuccessSamplingRate),
            monthly_spend_limit: cdktf.numberToTerraform(this._monthlySpendLimit),
            usage_report_s3_bucket: cdktf.stringToTerraform(this._usageReportS3Bucket)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SnsSmsPreferences.tfResourceType = "aws_sns_sms_preferences";
    return SnsSmsPreferences;
}(cdktf.TerraformResource));
exports.SnsSmsPreferences = SnsSmsPreferences;
