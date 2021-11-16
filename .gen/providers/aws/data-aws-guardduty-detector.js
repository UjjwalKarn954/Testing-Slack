"use strict";
// https://www.terraform.io/docs/providers/aws/d/guardduty_detector.html
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
exports.DataAwsGuarddutyDetector = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/guardduty_detector.html aws_guardduty_detector}
*/
var DataAwsGuarddutyDetector = /** @class */ (function (_super) {
    __extends(DataAwsGuarddutyDetector, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/guardduty_detector.html aws_guardduty_detector} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsGuarddutyDetectorConfig = {}
    */
    function DataAwsGuarddutyDetector(scope, id, config) {
        if (config === void 0) { config = {}; }
        return _super.call(this, scope, id, {
            terraformResourceType: 'aws_guardduty_detector',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
    }
    Object.defineProperty(DataAwsGuarddutyDetector.prototype, "findingPublishingFrequency", {
        // ==========
        // ATTRIBUTES
        // ==========
        // finding_publishing_frequency - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('finding_publishing_frequency');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsGuarddutyDetector.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsGuarddutyDetector.prototype, "serviceRoleArn", {
        // service_role_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('service_role_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsGuarddutyDetector.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsGuarddutyDetector.prototype.synthesizeAttributes = function () {
        return {};
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsGuarddutyDetector.tfResourceType = "aws_guardduty_detector";
    return DataAwsGuarddutyDetector;
}(cdktf.TerraformDataSource));
exports.DataAwsGuarddutyDetector = DataAwsGuarddutyDetector;
