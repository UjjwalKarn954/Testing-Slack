"use strict";
// https://www.terraform.io/docs/providers/aws/r/inspector_assessment_target.html
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
exports.InspectorAssessmentTarget = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_target.html aws_inspector_assessment_target}
*/
var InspectorAssessmentTarget = /** @class */ (function (_super) {
    __extends(InspectorAssessmentTarget, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_target.html aws_inspector_assessment_target} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options InspectorAssessmentTargetConfig
    */
    function InspectorAssessmentTarget(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_inspector_assessment_target',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        _this._resourceGroupArn = config.resourceGroupArn;
        return _this;
    }
    Object.defineProperty(InspectorAssessmentTarget.prototype, "arn", {
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
    Object.defineProperty(InspectorAssessmentTarget.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InspectorAssessmentTarget.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InspectorAssessmentTarget.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InspectorAssessmentTarget.prototype, "resourceGroupArn", {
        get: function () {
            return this.getStringAttribute('resource_group_arn');
        },
        set: function (value) {
            this._resourceGroupArn = value;
        },
        enumerable: false,
        configurable: true
    });
    InspectorAssessmentTarget.prototype.resetResourceGroupArn = function () {
        this._resourceGroupArn = undefined;
    };
    Object.defineProperty(InspectorAssessmentTarget.prototype, "resourceGroupArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resourceGroupArn;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    InspectorAssessmentTarget.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            resource_group_arn: cdktf.stringToTerraform(this._resourceGroupArn)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    InspectorAssessmentTarget.tfResourceType = "aws_inspector_assessment_target";
    return InspectorAssessmentTarget;
}(cdktf.TerraformResource));
exports.InspectorAssessmentTarget = InspectorAssessmentTarget;
