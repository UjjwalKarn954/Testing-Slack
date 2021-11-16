"use strict";
// https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html
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
exports.ImagebuilderImageRecipe = void 0;
var cdktf = require("cdktf");
function imagebuilderImageRecipeBlockDeviceMappingEbsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        delete_on_termination: cdktf.stringToTerraform(struct.deleteOnTermination),
        encrypted: cdktf.stringToTerraform(struct.encrypted),
        iops: cdktf.numberToTerraform(struct.iops),
        kms_key_id: cdktf.stringToTerraform(struct.kmsKeyId),
        snapshot_id: cdktf.stringToTerraform(struct.snapshotId),
        volume_size: cdktf.numberToTerraform(struct.volumeSize),
        volume_type: cdktf.stringToTerraform(struct.volumeType)
    };
}
function imagebuilderImageRecipeBlockDeviceMappingToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        device_name: cdktf.stringToTerraform(struct.deviceName),
        no_device: cdktf.booleanToTerraform(struct.noDevice),
        virtual_name: cdktf.stringToTerraform(struct.virtualName),
        ebs: cdktf.listMapper(imagebuilderImageRecipeBlockDeviceMappingEbsToTerraform)(struct.ebs)
    };
}
function imagebuilderImageRecipeComponentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        component_arn: cdktf.stringToTerraform(struct.componentArn)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html aws_imagebuilder_image_recipe}
*/
var ImagebuilderImageRecipe = /** @class */ (function (_super) {
    __extends(ImagebuilderImageRecipe, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html aws_imagebuilder_image_recipe} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ImagebuilderImageRecipeConfig
    */
    function ImagebuilderImageRecipe(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_imagebuilder_image_recipe',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._description = config.description;
        _this._name = config.name;
        _this._parentImage = config.parentImage;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._version = config.version;
        _this._workingDirectory = config.workingDirectory;
        _this._blockDeviceMapping = config.blockDeviceMapping;
        _this._component = config.component;
        return _this;
    }
    Object.defineProperty(ImagebuilderImageRecipe.prototype, "arn", {
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
    Object.defineProperty(ImagebuilderImageRecipe.prototype, "dateCreated", {
        // date_created - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('date_created');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderImageRecipe.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ImagebuilderImageRecipe.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(ImagebuilderImageRecipe.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderImageRecipe.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderImageRecipe.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderImageRecipe.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderImageRecipe.prototype, "owner", {
        // owner - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderImageRecipe.prototype, "parentImage", {
        get: function () {
            return this.getStringAttribute('parent_image');
        },
        set: function (value) {
            this._parentImage = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderImageRecipe.prototype, "parentImageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._parentImage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderImageRecipe.prototype, "platform", {
        // platform - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('platform');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderImageRecipe.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    ImagebuilderImageRecipe.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(ImagebuilderImageRecipe.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderImageRecipe.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    ImagebuilderImageRecipe.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(ImagebuilderImageRecipe.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderImageRecipe.prototype, "version", {
        get: function () {
            return this.getStringAttribute('version');
        },
        set: function (value) {
            this._version = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderImageRecipe.prototype, "versionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._version;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderImageRecipe.prototype, "workingDirectory", {
        get: function () {
            return this.getStringAttribute('working_directory');
        },
        set: function (value) {
            this._workingDirectory = value;
        },
        enumerable: false,
        configurable: true
    });
    ImagebuilderImageRecipe.prototype.resetWorkingDirectory = function () {
        this._workingDirectory = undefined;
    };
    Object.defineProperty(ImagebuilderImageRecipe.prototype, "workingDirectoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._workingDirectory;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderImageRecipe.prototype, "blockDeviceMapping", {
        get: function () {
            return this.interpolationForAttribute('block_device_mapping');
        },
        set: function (value) {
            this._blockDeviceMapping = value;
        },
        enumerable: false,
        configurable: true
    });
    ImagebuilderImageRecipe.prototype.resetBlockDeviceMapping = function () {
        this._blockDeviceMapping = undefined;
    };
    Object.defineProperty(ImagebuilderImageRecipe.prototype, "blockDeviceMappingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._blockDeviceMapping;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderImageRecipe.prototype, "component", {
        get: function () {
            return this.interpolationForAttribute('component');
        },
        set: function (value) {
            this._component = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderImageRecipe.prototype, "componentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._component;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ImagebuilderImageRecipe.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            name: cdktf.stringToTerraform(this._name),
            parent_image: cdktf.stringToTerraform(this._parentImage),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            version: cdktf.stringToTerraform(this._version),
            working_directory: cdktf.stringToTerraform(this._workingDirectory),
            block_device_mapping: cdktf.listMapper(imagebuilderImageRecipeBlockDeviceMappingToTerraform)(this._blockDeviceMapping),
            component: cdktf.listMapper(imagebuilderImageRecipeComponentToTerraform)(this._component)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ImagebuilderImageRecipe.tfResourceType = "aws_imagebuilder_image_recipe";
    return ImagebuilderImageRecipe;
}(cdktf.TerraformResource));
exports.ImagebuilderImageRecipe = ImagebuilderImageRecipe;
