"use strict";
// https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui.html
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
exports.SagemakerHumanTaskUi = void 0;
var cdktf = require("cdktf");
function sagemakerHumanTaskUiUiTemplateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        content: cdktf.stringToTerraform(struct.content)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui.html aws_sagemaker_human_task_ui}
*/
var SagemakerHumanTaskUi = /** @class */ (function (_super) {
    __extends(SagemakerHumanTaskUi, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui.html aws_sagemaker_human_task_ui} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerHumanTaskUiConfig
    */
    function SagemakerHumanTaskUi(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_sagemaker_human_task_ui',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._humanTaskUiName = config.humanTaskUiName;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._uiTemplate = config.uiTemplate;
        return _this;
    }
    Object.defineProperty(SagemakerHumanTaskUi.prototype, "arn", {
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
    Object.defineProperty(SagemakerHumanTaskUi.prototype, "humanTaskUiName", {
        get: function () {
            return this.getStringAttribute('human_task_ui_name');
        },
        set: function (value) {
            this._humanTaskUiName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerHumanTaskUi.prototype, "humanTaskUiNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._humanTaskUiName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerHumanTaskUi.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerHumanTaskUi.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerHumanTaskUi.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(SagemakerHumanTaskUi.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerHumanTaskUi.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerHumanTaskUi.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(SagemakerHumanTaskUi.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerHumanTaskUi.prototype, "uiTemplate", {
        get: function () {
            return this.interpolationForAttribute('ui_template');
        },
        set: function (value) {
            this._uiTemplate = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerHumanTaskUi.prototype, "uiTemplateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._uiTemplate;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SagemakerHumanTaskUi.prototype.synthesizeAttributes = function () {
        return {
            human_task_ui_name: cdktf.stringToTerraform(this._humanTaskUiName),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            ui_template: cdktf.listMapper(sagemakerHumanTaskUiUiTemplateToTerraform)(this._uiTemplate)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SagemakerHumanTaskUi.tfResourceType = "aws_sagemaker_human_task_ui";
    return SagemakerHumanTaskUi;
}(cdktf.TerraformResource));
exports.SagemakerHumanTaskUi = SagemakerHumanTaskUi;
