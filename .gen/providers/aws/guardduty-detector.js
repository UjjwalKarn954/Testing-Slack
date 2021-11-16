"use strict";
// https://www.terraform.io/docs/providers/aws/r/guardduty_detector.html
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
exports.GuarddutyDetector = void 0;
var cdktf = require("cdktf");
function guarddutyDetectorDatasourcesS3LogsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enable: cdktf.booleanToTerraform(struct.enable)
    };
}
function guarddutyDetectorDatasourcesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        s3_logs: cdktf.listMapper(guarddutyDetectorDatasourcesS3LogsToTerraform)(struct.s3Logs)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector.html aws_guardduty_detector}
*/
var GuarddutyDetector = /** @class */ (function (_super) {
    __extends(GuarddutyDetector, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector.html aws_guardduty_detector} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GuarddutyDetectorConfig = {}
    */
    function GuarddutyDetector(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_guardduty_detector',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._enable = config.enable;
        _this._findingPublishingFrequency = config.findingPublishingFrequency;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._datasources = config.datasources;
        return _this;
    }
    Object.defineProperty(GuarddutyDetector.prototype, "accountId", {
        // ==========
        // ATTRIBUTES
        // ==========
        // account_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('account_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyDetector.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyDetector.prototype, "enable", {
        get: function () {
            return this.getBooleanAttribute('enable');
        },
        set: function (value) {
            this._enable = value;
        },
        enumerable: false,
        configurable: true
    });
    GuarddutyDetector.prototype.resetEnable = function () {
        this._enable = undefined;
    };
    Object.defineProperty(GuarddutyDetector.prototype, "enableInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enable;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyDetector.prototype, "findingPublishingFrequency", {
        get: function () {
            return this.getStringAttribute('finding_publishing_frequency');
        },
        set: function (value) {
            this._findingPublishingFrequency = value;
        },
        enumerable: false,
        configurable: true
    });
    GuarddutyDetector.prototype.resetFindingPublishingFrequency = function () {
        this._findingPublishingFrequency = undefined;
    };
    Object.defineProperty(GuarddutyDetector.prototype, "findingPublishingFrequencyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._findingPublishingFrequency;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyDetector.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyDetector.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    GuarddutyDetector.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(GuarddutyDetector.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyDetector.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    GuarddutyDetector.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(GuarddutyDetector.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyDetector.prototype, "datasources", {
        get: function () {
            return this.interpolationForAttribute('datasources');
        },
        set: function (value) {
            this._datasources = value;
        },
        enumerable: false,
        configurable: true
    });
    GuarddutyDetector.prototype.resetDatasources = function () {
        this._datasources = undefined;
    };
    Object.defineProperty(GuarddutyDetector.prototype, "datasourcesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._datasources;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    GuarddutyDetector.prototype.synthesizeAttributes = function () {
        return {
            enable: cdktf.booleanToTerraform(this._enable),
            finding_publishing_frequency: cdktf.stringToTerraform(this._findingPublishingFrequency),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            datasources: cdktf.listMapper(guarddutyDetectorDatasourcesToTerraform)(this._datasources)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    GuarddutyDetector.tfResourceType = "aws_guardduty_detector";
    return GuarddutyDetector;
}(cdktf.TerraformResource));
exports.GuarddutyDetector = GuarddutyDetector;
