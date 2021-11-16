"use strict";
// https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config.html
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
exports.SagemakerStudioLifecycleConfig = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config.html aws_sagemaker_studio_lifecycle_config}
*/
var SagemakerStudioLifecycleConfig = /** @class */ (function (_super) {
    __extends(SagemakerStudioLifecycleConfig, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config.html aws_sagemaker_studio_lifecycle_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerStudioLifecycleConfigConfig
    */
    function SagemakerStudioLifecycleConfig(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_sagemaker_studio_lifecycle_config',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._studioLifecycleConfigAppType = config.studioLifecycleConfigAppType;
        _this._studioLifecycleConfigContent = config.studioLifecycleConfigContent;
        _this._studioLifecycleConfigName = config.studioLifecycleConfigName;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(SagemakerStudioLifecycleConfig.prototype, "arn", {
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
    Object.defineProperty(SagemakerStudioLifecycleConfig.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerStudioLifecycleConfig.prototype, "studioLifecycleConfigAppType", {
        get: function () {
            return this.getStringAttribute('studio_lifecycle_config_app_type');
        },
        set: function (value) {
            this._studioLifecycleConfigAppType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerStudioLifecycleConfig.prototype, "studioLifecycleConfigAppTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._studioLifecycleConfigAppType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerStudioLifecycleConfig.prototype, "studioLifecycleConfigContent", {
        get: function () {
            return this.getStringAttribute('studio_lifecycle_config_content');
        },
        set: function (value) {
            this._studioLifecycleConfigContent = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerStudioLifecycleConfig.prototype, "studioLifecycleConfigContentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._studioLifecycleConfigContent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerStudioLifecycleConfig.prototype, "studioLifecycleConfigName", {
        get: function () {
            return this.getStringAttribute('studio_lifecycle_config_name');
        },
        set: function (value) {
            this._studioLifecycleConfigName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerStudioLifecycleConfig.prototype, "studioLifecycleConfigNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._studioLifecycleConfigName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerStudioLifecycleConfig.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerStudioLifecycleConfig.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(SagemakerStudioLifecycleConfig.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerStudioLifecycleConfig.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerStudioLifecycleConfig.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(SagemakerStudioLifecycleConfig.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SagemakerStudioLifecycleConfig.prototype.synthesizeAttributes = function () {
        return {
            studio_lifecycle_config_app_type: cdktf.stringToTerraform(this._studioLifecycleConfigAppType),
            studio_lifecycle_config_content: cdktf.stringToTerraform(this._studioLifecycleConfigContent),
            studio_lifecycle_config_name: cdktf.stringToTerraform(this._studioLifecycleConfigName),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SagemakerStudioLifecycleConfig.tfResourceType = "aws_sagemaker_studio_lifecycle_config";
    return SagemakerStudioLifecycleConfig;
}(cdktf.TerraformResource));
exports.SagemakerStudioLifecycleConfig = SagemakerStudioLifecycleConfig;
