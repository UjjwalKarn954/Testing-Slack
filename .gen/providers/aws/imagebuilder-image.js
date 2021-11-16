"use strict";
// https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html
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
exports.ImagebuilderImage = exports.ImagebuilderImageOutputResources = exports.ImagebuilderImageOutputResourcesAmis = void 0;
var cdktf = require("cdktf");
var ImagebuilderImageOutputResourcesAmis = /** @class */ (function (_super) {
    __extends(ImagebuilderImageOutputResourcesAmis, _super);
    function ImagebuilderImageOutputResourcesAmis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ImagebuilderImageOutputResourcesAmis.prototype, "accountId", {
        // account_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('account_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderImageOutputResourcesAmis.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderImageOutputResourcesAmis.prototype, "image", {
        // image - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('image');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderImageOutputResourcesAmis.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderImageOutputResourcesAmis.prototype, "region", {
        // region - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('region');
        },
        enumerable: false,
        configurable: true
    });
    return ImagebuilderImageOutputResourcesAmis;
}(cdktf.ComplexComputedList));
exports.ImagebuilderImageOutputResourcesAmis = ImagebuilderImageOutputResourcesAmis;
var ImagebuilderImageOutputResources = /** @class */ (function (_super) {
    __extends(ImagebuilderImageOutputResources, _super);
    function ImagebuilderImageOutputResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ImagebuilderImageOutputResources.prototype, "amis", {
        // amis - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('amis');
        },
        enumerable: false,
        configurable: true
    });
    return ImagebuilderImageOutputResources;
}(cdktf.ComplexComputedList));
exports.ImagebuilderImageOutputResources = ImagebuilderImageOutputResources;
function imagebuilderImageImageTestsConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        image_tests_enabled: cdktf.booleanToTerraform(struct.imageTestsEnabled),
        timeout_minutes: cdktf.numberToTerraform(struct.timeoutMinutes)
    };
}
function imagebuilderImageTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html aws_imagebuilder_image}
*/
var ImagebuilderImage = /** @class */ (function (_super) {
    __extends(ImagebuilderImage, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html aws_imagebuilder_image} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ImagebuilderImageConfig
    */
    function ImagebuilderImage(scope, id, config) {
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
        _this._distributionConfigurationArn = config.distributionConfigurationArn;
        _this._enhancedImageMetadataEnabled = config.enhancedImageMetadataEnabled;
        _this._imageRecipeArn = config.imageRecipeArn;
        _this._infrastructureConfigurationArn = config.infrastructureConfigurationArn;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._imageTestsConfiguration = config.imageTestsConfiguration;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(ImagebuilderImage.prototype, "arn", {
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
    Object.defineProperty(ImagebuilderImage.prototype, "dateCreated", {
        // date_created - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('date_created');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderImage.prototype, "distributionConfigurationArn", {
        get: function () {
            return this.getStringAttribute('distribution_configuration_arn');
        },
        set: function (value) {
            this._distributionConfigurationArn = value;
        },
        enumerable: false,
        configurable: true
    });
    ImagebuilderImage.prototype.resetDistributionConfigurationArn = function () {
        this._distributionConfigurationArn = undefined;
    };
    Object.defineProperty(ImagebuilderImage.prototype, "distributionConfigurationArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._distributionConfigurationArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderImage.prototype, "enhancedImageMetadataEnabled", {
        get: function () {
            return this.getBooleanAttribute('enhanced_image_metadata_enabled');
        },
        set: function (value) {
            this._enhancedImageMetadataEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ImagebuilderImage.prototype.resetEnhancedImageMetadataEnabled = function () {
        this._enhancedImageMetadataEnabled = undefined;
    };
    Object.defineProperty(ImagebuilderImage.prototype, "enhancedImageMetadataEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enhancedImageMetadataEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderImage.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderImage.prototype, "imageRecipeArn", {
        get: function () {
            return this.getStringAttribute('image_recipe_arn');
        },
        set: function (value) {
            this._imageRecipeArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderImage.prototype, "imageRecipeArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._imageRecipeArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderImage.prototype, "infrastructureConfigurationArn", {
        get: function () {
            return this.getStringAttribute('infrastructure_configuration_arn');
        },
        set: function (value) {
            this._infrastructureConfigurationArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderImage.prototype, "infrastructureConfigurationArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._infrastructureConfigurationArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderImage.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderImage.prototype, "osVersion", {
        // os_version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('os_version');
        },
        enumerable: false,
        configurable: true
    });
    // output_resources - computed: true, optional: false, required: false
    ImagebuilderImage.prototype.outputResources = function (index) {
        return new ImagebuilderImageOutputResources(this, 'output_resources', index);
    };
    Object.defineProperty(ImagebuilderImage.prototype, "platform", {
        // platform - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('platform');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderImage.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    ImagebuilderImage.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(ImagebuilderImage.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderImage.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    ImagebuilderImage.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(ImagebuilderImage.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderImage.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderImage.prototype, "imageTestsConfiguration", {
        get: function () {
            return this.interpolationForAttribute('image_tests_configuration');
        },
        set: function (value) {
            this._imageTestsConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    ImagebuilderImage.prototype.resetImageTestsConfiguration = function () {
        this._imageTestsConfiguration = undefined;
    };
    Object.defineProperty(ImagebuilderImage.prototype, "imageTestsConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._imageTestsConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderImage.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    ImagebuilderImage.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(ImagebuilderImage.prototype, "timeoutsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeouts;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ImagebuilderImage.prototype.synthesizeAttributes = function () {
        return {
            distribution_configuration_arn: cdktf.stringToTerraform(this._distributionConfigurationArn),
            enhanced_image_metadata_enabled: cdktf.booleanToTerraform(this._enhancedImageMetadataEnabled),
            image_recipe_arn: cdktf.stringToTerraform(this._imageRecipeArn),
            infrastructure_configuration_arn: cdktf.stringToTerraform(this._infrastructureConfigurationArn),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            image_tests_configuration: cdktf.listMapper(imagebuilderImageImageTestsConfigurationToTerraform)(this._imageTestsConfiguration),
            timeouts: imagebuilderImageTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ImagebuilderImage.tfResourceType = "aws_imagebuilder_image";
    return ImagebuilderImage;
}(cdktf.TerraformResource));
exports.ImagebuilderImage = ImagebuilderImage;
