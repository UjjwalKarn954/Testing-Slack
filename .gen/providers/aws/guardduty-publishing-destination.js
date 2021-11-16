"use strict";
// https://www.terraform.io/docs/providers/aws/r/guardduty_publishing_destination.html
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
exports.GuarddutyPublishingDestination = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/guardduty_publishing_destination.html aws_guardduty_publishing_destination}
*/
var GuarddutyPublishingDestination = /** @class */ (function (_super) {
    __extends(GuarddutyPublishingDestination, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/guardduty_publishing_destination.html aws_guardduty_publishing_destination} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GuarddutyPublishingDestinationConfig
    */
    function GuarddutyPublishingDestination(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_guardduty_publishing_destination',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._destinationArn = config.destinationArn;
        _this._destinationType = config.destinationType;
        _this._detectorId = config.detectorId;
        _this._kmsKeyArn = config.kmsKeyArn;
        return _this;
    }
    Object.defineProperty(GuarddutyPublishingDestination.prototype, "destinationArn", {
        get: function () {
            return this.getStringAttribute('destination_arn');
        },
        set: function (value) {
            this._destinationArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyPublishingDestination.prototype, "destinationArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._destinationArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyPublishingDestination.prototype, "destinationType", {
        get: function () {
            return this.getStringAttribute('destination_type');
        },
        set: function (value) {
            this._destinationType = value;
        },
        enumerable: false,
        configurable: true
    });
    GuarddutyPublishingDestination.prototype.resetDestinationType = function () {
        this._destinationType = undefined;
    };
    Object.defineProperty(GuarddutyPublishingDestination.prototype, "destinationTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._destinationType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyPublishingDestination.prototype, "detectorId", {
        get: function () {
            return this.getStringAttribute('detector_id');
        },
        set: function (value) {
            this._detectorId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyPublishingDestination.prototype, "detectorIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._detectorId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyPublishingDestination.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyPublishingDestination.prototype, "kmsKeyArn", {
        get: function () {
            return this.getStringAttribute('kms_key_arn');
        },
        set: function (value) {
            this._kmsKeyArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyPublishingDestination.prototype, "kmsKeyArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kmsKeyArn;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    GuarddutyPublishingDestination.prototype.synthesizeAttributes = function () {
        return {
            destination_arn: cdktf.stringToTerraform(this._destinationArn),
            destination_type: cdktf.stringToTerraform(this._destinationType),
            detector_id: cdktf.stringToTerraform(this._detectorId),
            kms_key_arn: cdktf.stringToTerraform(this._kmsKeyArn)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    GuarddutyPublishingDestination.tfResourceType = "aws_guardduty_publishing_destination";
    return GuarddutyPublishingDestination;
}(cdktf.TerraformResource));
exports.GuarddutyPublishingDestination = GuarddutyPublishingDestination;
