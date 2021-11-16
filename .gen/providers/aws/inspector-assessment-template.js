"use strict";
// https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template.html
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
exports.InspectorAssessmentTemplate = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template.html aws_inspector_assessment_template}
*/
var InspectorAssessmentTemplate = /** @class */ (function (_super) {
    __extends(InspectorAssessmentTemplate, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template.html aws_inspector_assessment_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options InspectorAssessmentTemplateConfig
    */
    function InspectorAssessmentTemplate(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_inspector_assessment_template',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._duration = config.duration;
        _this._name = config.name;
        _this._rulesPackageArns = config.rulesPackageArns;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._targetArn = config.targetArn;
        return _this;
    }
    Object.defineProperty(InspectorAssessmentTemplate.prototype, "arn", {
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
    Object.defineProperty(InspectorAssessmentTemplate.prototype, "duration", {
        get: function () {
            return this.getNumberAttribute('duration');
        },
        set: function (value) {
            this._duration = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InspectorAssessmentTemplate.prototype, "durationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._duration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InspectorAssessmentTemplate.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InspectorAssessmentTemplate.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InspectorAssessmentTemplate.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InspectorAssessmentTemplate.prototype, "rulesPackageArns", {
        get: function () {
            return this.getListAttribute('rules_package_arns');
        },
        set: function (value) {
            this._rulesPackageArns = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InspectorAssessmentTemplate.prototype, "rulesPackageArnsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rulesPackageArns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InspectorAssessmentTemplate.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    InspectorAssessmentTemplate.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(InspectorAssessmentTemplate.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InspectorAssessmentTemplate.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    InspectorAssessmentTemplate.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(InspectorAssessmentTemplate.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InspectorAssessmentTemplate.prototype, "targetArn", {
        get: function () {
            return this.getStringAttribute('target_arn');
        },
        set: function (value) {
            this._targetArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InspectorAssessmentTemplate.prototype, "targetArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetArn;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    InspectorAssessmentTemplate.prototype.synthesizeAttributes = function () {
        return {
            duration: cdktf.numberToTerraform(this._duration),
            name: cdktf.stringToTerraform(this._name),
            rules_package_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._rulesPackageArns),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            target_arn: cdktf.stringToTerraform(this._targetArn)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    InspectorAssessmentTemplate.tfResourceType = "aws_inspector_assessment_template";
    return InspectorAssessmentTemplate;
}(cdktf.TerraformResource));
exports.InspectorAssessmentTemplate = InspectorAssessmentTemplate;
