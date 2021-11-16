"use strict";
// https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_pipeline.html
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
exports.DataAwsImagebuilderImagePipeline = exports.DataAwsImagebuilderImagePipelineSchedule = exports.DataAwsImagebuilderImagePipelineImageTestsConfiguration = void 0;
var cdktf = require("cdktf");
var DataAwsImagebuilderImagePipelineImageTestsConfiguration = /** @class */ (function (_super) {
    __extends(DataAwsImagebuilderImagePipelineImageTestsConfiguration, _super);
    function DataAwsImagebuilderImagePipelineImageTestsConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsImagebuilderImagePipelineImageTestsConfiguration.prototype, "imageTestsEnabled", {
        // image_tests_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('image_tests_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderImagePipelineImageTestsConfiguration.prototype, "timeoutMinutes", {
        // timeout_minutes - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('timeout_minutes');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsImagebuilderImagePipelineImageTestsConfiguration;
}(cdktf.ComplexComputedList));
exports.DataAwsImagebuilderImagePipelineImageTestsConfiguration = DataAwsImagebuilderImagePipelineImageTestsConfiguration;
var DataAwsImagebuilderImagePipelineSchedule = /** @class */ (function (_super) {
    __extends(DataAwsImagebuilderImagePipelineSchedule, _super);
    function DataAwsImagebuilderImagePipelineSchedule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsImagebuilderImagePipelineSchedule.prototype, "pipelineExecutionStartCondition", {
        // pipeline_execution_start_condition - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('pipeline_execution_start_condition');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderImagePipelineSchedule.prototype, "scheduleExpression", {
        // schedule_expression - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('schedule_expression');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsImagebuilderImagePipelineSchedule;
}(cdktf.ComplexComputedList));
exports.DataAwsImagebuilderImagePipelineSchedule = DataAwsImagebuilderImagePipelineSchedule;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_pipeline.html aws_imagebuilder_image_pipeline}
*/
var DataAwsImagebuilderImagePipeline = /** @class */ (function (_super) {
    __extends(DataAwsImagebuilderImagePipeline, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_pipeline.html aws_imagebuilder_image_pipeline} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsImagebuilderImagePipelineConfig
    */
    function DataAwsImagebuilderImagePipeline(scope, id, config) {
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
        _this._arn = config.arn;
        _this._tags = config.tags;
        return _this;
    }
    Object.defineProperty(DataAwsImagebuilderImagePipeline.prototype, "arn", {
        get: function () {
            return this.getStringAttribute('arn');
        },
        set: function (value) {
            this._arn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderImagePipeline.prototype, "arnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._arn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderImagePipeline.prototype, "dateCreated", {
        // date_created - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('date_created');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderImagePipeline.prototype, "dateLastRun", {
        // date_last_run - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('date_last_run');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderImagePipeline.prototype, "dateNextRun", {
        // date_next_run - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('date_next_run');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderImagePipeline.prototype, "dateUpdated", {
        // date_updated - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('date_updated');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderImagePipeline.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderImagePipeline.prototype, "distributionConfigurationArn", {
        // distribution_configuration_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('distribution_configuration_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderImagePipeline.prototype, "enhancedImageMetadataEnabled", {
        // enhanced_image_metadata_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enhanced_image_metadata_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderImagePipeline.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderImagePipeline.prototype, "imageRecipeArn", {
        // image_recipe_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('image_recipe_arn');
        },
        enumerable: false,
        configurable: true
    });
    // image_tests_configuration - computed: true, optional: false, required: false
    DataAwsImagebuilderImagePipeline.prototype.imageTestsConfiguration = function (index) {
        return new DataAwsImagebuilderImagePipelineImageTestsConfiguration(this, 'image_tests_configuration', index);
    };
    Object.defineProperty(DataAwsImagebuilderImagePipeline.prototype, "infrastructureConfigurationArn", {
        // infrastructure_configuration_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('infrastructure_configuration_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderImagePipeline.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderImagePipeline.prototype, "platform", {
        // platform - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('platform');
        },
        enumerable: false,
        configurable: true
    });
    // schedule - computed: true, optional: false, required: false
    DataAwsImagebuilderImagePipeline.prototype.schedule = function (index) {
        return new DataAwsImagebuilderImagePipelineSchedule(this, 'schedule', index);
    };
    Object.defineProperty(DataAwsImagebuilderImagePipeline.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderImagePipeline.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsImagebuilderImagePipeline.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsImagebuilderImagePipeline.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsImagebuilderImagePipeline.prototype.synthesizeAttributes = function () {
        return {
            arn: cdktf.stringToTerraform(this._arn),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsImagebuilderImagePipeline.tfResourceType = "aws_imagebuilder_image_pipeline";
    return DataAwsImagebuilderImagePipeline;
}(cdktf.TerraformDataSource));
exports.DataAwsImagebuilderImagePipeline = DataAwsImagebuilderImagePipeline;
