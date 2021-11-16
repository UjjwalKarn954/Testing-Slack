"use strict";
// https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html
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
exports.ImagebuilderImagePipeline = void 0;
var cdktf = require("cdktf");
function imagebuilderImagePipelineImageTestsConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        image_tests_enabled: cdktf.booleanToTerraform(struct.imageTestsEnabled),
        timeout_minutes: cdktf.numberToTerraform(struct.timeoutMinutes)
    };
}
function imagebuilderImagePipelineScheduleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        pipeline_execution_start_condition: cdktf.stringToTerraform(struct.pipelineExecutionStartCondition),
        schedule_expression: cdktf.stringToTerraform(struct.scheduleExpression)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html aws_imagebuilder_image_pipeline}
*/
var ImagebuilderImagePipeline = /** @class */ (function (_super) {
    __extends(ImagebuilderImagePipeline, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html aws_imagebuilder_image_pipeline} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ImagebuilderImagePipelineConfig
    */
    function ImagebuilderImagePipeline(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_imagebuilder_image_pipeline',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._description = config.description;
        _this._distributionConfigurationArn = config.distributionConfigurationArn;
        _this._enhancedImageMetadataEnabled = config.enhancedImageMetadataEnabled;
        _this._imageRecipeArn = config.imageRecipeArn;
        _this._infrastructureConfigurationArn = config.infrastructureConfigurationArn;
        _this._name = config.name;
        _this._status = config.status;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._imageTestsConfiguration = config.imageTestsConfiguration;
        _this._schedule = config.schedule;
        return _this;
    }
    Object.defineProperty(ImagebuilderImagePipeline.prototype, "arn", {
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
    Object.defineProperty(ImagebuilderImagePipeline.prototype, "dateCreated", {
        // date_created - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('date_created');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderImagePipeline.prototype, "dateLastRun", {
        // date_last_run - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('date_last_run');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderImagePipeline.prototype, "dateNextRun", {
        // date_next_run - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('date_next_run');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderImagePipeline.prototype, "dateUpdated", {
        // date_updated - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('date_updated');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderImagePipeline.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ImagebuilderImagePipeline.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(ImagebuilderImagePipeline.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderImagePipeline.prototype, "distributionConfigurationArn", {
        get: function () {
            return this.getStringAttribute('distribution_configuration_arn');
        },
        set: function (value) {
            this._distributionConfigurationArn = value;
        },
        enumerable: false,
        configurable: true
    });
    ImagebuilderImagePipeline.prototype.resetDistributionConfigurationArn = function () {
        this._distributionConfigurationArn = undefined;
    };
    Object.defineProperty(ImagebuilderImagePipeline.prototype, "distributionConfigurationArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._distributionConfigurationArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderImagePipeline.prototype, "enhancedImageMetadataEnabled", {
        get: function () {
            return this.getBooleanAttribute('enhanced_image_metadata_enabled');
        },
        set: function (value) {
            this._enhancedImageMetadataEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ImagebuilderImagePipeline.prototype.resetEnhancedImageMetadataEnabled = function () {
        this._enhancedImageMetadataEnabled = undefined;
    };
    Object.defineProperty(ImagebuilderImagePipeline.prototype, "enhancedImageMetadataEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enhancedImageMetadataEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderImagePipeline.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderImagePipeline.prototype, "imageRecipeArn", {
        get: function () {
            return this.getStringAttribute('image_recipe_arn');
        },
        set: function (value) {
            this._imageRecipeArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderImagePipeline.prototype, "imageRecipeArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._imageRecipeArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderImagePipeline.prototype, "infrastructureConfigurationArn", {
        get: function () {
            return this.getStringAttribute('infrastructure_configuration_arn');
        },
        set: function (value) {
            this._infrastructureConfigurationArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderImagePipeline.prototype, "infrastructureConfigurationArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._infrastructureConfigurationArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderImagePipeline.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderImagePipeline.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderImagePipeline.prototype, "platform", {
        // platform - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('platform');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderImagePipeline.prototype, "status", {
        get: function () {
            return this.getStringAttribute('status');
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    ImagebuilderImagePipeline.prototype.resetStatus = function () {
        this._status = undefined;
    };
    Object.defineProperty(ImagebuilderImagePipeline.prototype, "statusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderImagePipeline.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    ImagebuilderImagePipeline.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(ImagebuilderImagePipeline.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderImagePipeline.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    ImagebuilderImagePipeline.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(ImagebuilderImagePipeline.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderImagePipeline.prototype, "imageTestsConfiguration", {
        get: function () {
            return this.interpolationForAttribute('image_tests_configuration');
        },
        set: function (value) {
            this._imageTestsConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    ImagebuilderImagePipeline.prototype.resetImageTestsConfiguration = function () {
        this._imageTestsConfiguration = undefined;
    };
    Object.defineProperty(ImagebuilderImagePipeline.prototype, "imageTestsConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._imageTestsConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderImagePipeline.prototype, "schedule", {
        get: function () {
            return this.interpolationForAttribute('schedule');
        },
        set: function (value) {
            this._schedule = value;
        },
        enumerable: false,
        configurable: true
    });
    ImagebuilderImagePipeline.prototype.resetSchedule = function () {
        this._schedule = undefined;
    };
    Object.defineProperty(ImagebuilderImagePipeline.prototype, "scheduleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._schedule;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ImagebuilderImagePipeline.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            distribution_configuration_arn: cdktf.stringToTerraform(this._distributionConfigurationArn),
            enhanced_image_metadata_enabled: cdktf.booleanToTerraform(this._enhancedImageMetadataEnabled),
            image_recipe_arn: cdktf.stringToTerraform(this._imageRecipeArn),
            infrastructure_configuration_arn: cdktf.stringToTerraform(this._infrastructureConfigurationArn),
            name: cdktf.stringToTerraform(this._name),
            status: cdktf.stringToTerraform(this._status),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            image_tests_configuration: cdktf.listMapper(imagebuilderImagePipelineImageTestsConfigurationToTerraform)(this._imageTestsConfiguration),
            schedule: cdktf.listMapper(imagebuilderImagePipelineScheduleToTerraform)(this._schedule)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ImagebuilderImagePipeline.tfResourceType = "aws_imagebuilder_image_pipeline";
    return ImagebuilderImagePipeline;
}(cdktf.TerraformResource));
exports.ImagebuilderImagePipeline = ImagebuilderImagePipeline;
