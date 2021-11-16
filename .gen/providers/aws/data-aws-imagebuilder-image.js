"use strict";
// https://www.terraform.io/docs/providers/aws/d/imagebuilder_image.html
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
exports.DataAwsImagebuilderImage = exports.DataAwsImagebuilderImageOutputResources = exports.DataAwsImagebuilderImageOutputResourcesAmis = exports.DataAwsImagebuilderImageImageTestsConfiguration = void 0;
var cdktf = require("cdktf");
var DataAwsImagebuilderImageImageTestsConfiguration = /** @class */ (function (_super) {
    __extends(DataAwsImagebuilderImageImageTestsConfiguration, _super);
    function DataAwsImagebuilderImageImageTestsConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsImagebuilderImageImageTestsConfiguration.prototype, "imageTestsEnabled", {
        // image_tests_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('image_tests_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderImageImageTestsConfiguration.prototype, "timeoutMinutes", {
        // timeout_minutes - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('timeout_minutes');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsImagebuilderImageImageTestsConfiguration;
}(cdktf.ComplexComputedList));
exports.DataAwsImagebuilderImageImageTestsConfiguration = DataAwsImagebuilderImageImageTestsConfiguration;
var DataAwsImagebuilderImageOutputResourcesAmis = /** @class */ (function (_super) {
    __extends(DataAwsImagebuilderImageOutputResourcesAmis, _super);
    function DataAwsImagebuilderImageOutputResourcesAmis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsImagebuilderImageOutputResourcesAmis.prototype, "accountId", {
        // account_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('account_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderImageOutputResourcesAmis.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderImageOutputResourcesAmis.prototype, "image", {
        // image - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('image');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderImageOutputResourcesAmis.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderImageOutputResourcesAmis.prototype, "region", {
        // region - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('region');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsImagebuilderImageOutputResourcesAmis;
}(cdktf.ComplexComputedList));
exports.DataAwsImagebuilderImageOutputResourcesAmis = DataAwsImagebuilderImageOutputResourcesAmis;
var DataAwsImagebuilderImageOutputResources = /** @class */ (function (_super) {
    __extends(DataAwsImagebuilderImageOutputResources, _super);
    function DataAwsImagebuilderImageOutputResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsImagebuilderImageOutputResources.prototype, "amis", {
        // amis - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('amis');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsImagebuilderImageOutputResources;
}(cdktf.ComplexComputedList));
exports.DataAwsImagebuilderImageOutputResources = DataAwsImagebuilderImageOutputResources;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image.html aws_imagebuilder_image}
*/
var DataAwsImagebuilderImage = /** @class */ (function (_super) {
    __extends(DataAwsImagebuilderImage, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image.html aws_imagebuilder_image} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsImagebuilderImageConfig
    */
    function DataAwsImagebuilderImage(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_imagebuilder_image',
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
    Object.defineProperty(DataAwsImagebuilderImage.prototype, "arn", {
        get: function () {
            return this.getStringAttribute('arn');
        },
        set: function (value) {
            this._arn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderImage.prototype, "arnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._arn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderImage.prototype, "buildVersionArn", {
        // build_version_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('build_version_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderImage.prototype, "dateCreated", {
        // date_created - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('date_created');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderImage.prototype, "distributionConfigurationArn", {
        // distribution_configuration_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('distribution_configuration_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderImage.prototype, "enhancedImageMetadataEnabled", {
        // enhanced_image_metadata_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enhanced_image_metadata_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderImage.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderImage.prototype, "imageRecipeArn", {
        // image_recipe_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('image_recipe_arn');
        },
        enumerable: false,
        configurable: true
    });
    // image_tests_configuration - computed: true, optional: false, required: false
    DataAwsImagebuilderImage.prototype.imageTestsConfiguration = function (index) {
        return new DataAwsImagebuilderImageImageTestsConfiguration(this, 'image_tests_configuration', index);
    };
    Object.defineProperty(DataAwsImagebuilderImage.prototype, "infrastructureConfigurationArn", {
        // infrastructure_configuration_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('infrastructure_configuration_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderImage.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderImage.prototype, "osVersion", {
        // os_version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('os_version');
        },
        enumerable: false,
        configurable: true
    });
    // output_resources - computed: true, optional: false, required: false
    DataAwsImagebuilderImage.prototype.outputResources = function (index) {
        return new DataAwsImagebuilderImageOutputResources(this, 'output_resources', index);
    };
    Object.defineProperty(DataAwsImagebuilderImage.prototype, "platform", {
        // platform - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('platform');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderImage.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsImagebuilderImage.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsImagebuilderImage.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderImage.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsImagebuilderImage.prototype.synthesizeAttributes = function () {
        return {
            arn: cdktf.stringToTerraform(this._arn),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsImagebuilderImage.tfResourceType = "aws_imagebuilder_image";
    return DataAwsImagebuilderImage;
}(cdktf.TerraformDataSource));
exports.DataAwsImagebuilderImage = DataAwsImagebuilderImage;
