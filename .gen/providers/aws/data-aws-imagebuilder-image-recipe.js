"use strict";
// https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipe.html
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
exports.DataAwsImagebuilderImageRecipe = exports.DataAwsImagebuilderImageRecipeComponent = exports.DataAwsImagebuilderImageRecipeBlockDeviceMapping = exports.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbs = void 0;
var cdktf = require("cdktf");
var DataAwsImagebuilderImageRecipeBlockDeviceMappingEbs = /** @class */ (function (_super) {
    __extends(DataAwsImagebuilderImageRecipeBlockDeviceMappingEbs, _super);
    function DataAwsImagebuilderImageRecipeBlockDeviceMappingEbs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsImagebuilderImageRecipeBlockDeviceMappingEbs.prototype, "deleteOnTermination", {
        // delete_on_termination - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('delete_on_termination');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderImageRecipeBlockDeviceMappingEbs.prototype, "encrypted", {
        // encrypted - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('encrypted');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderImageRecipeBlockDeviceMappingEbs.prototype, "iops", {
        // iops - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('iops');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderImageRecipeBlockDeviceMappingEbs.prototype, "kmsKeyId", {
        // kms_key_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('kms_key_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderImageRecipeBlockDeviceMappingEbs.prototype, "snapshotId", {
        // snapshot_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('snapshot_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderImageRecipeBlockDeviceMappingEbs.prototype, "volumeSize", {
        // volume_size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('volume_size');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderImageRecipeBlockDeviceMappingEbs.prototype, "volumeType", {
        // volume_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('volume_type');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsImagebuilderImageRecipeBlockDeviceMappingEbs;
}(cdktf.ComplexComputedList));
exports.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbs = DataAwsImagebuilderImageRecipeBlockDeviceMappingEbs;
var DataAwsImagebuilderImageRecipeBlockDeviceMapping = /** @class */ (function (_super) {
    __extends(DataAwsImagebuilderImageRecipeBlockDeviceMapping, _super);
    function DataAwsImagebuilderImageRecipeBlockDeviceMapping() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsImagebuilderImageRecipeBlockDeviceMapping.prototype, "deviceName", {
        // device_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('device_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderImageRecipeBlockDeviceMapping.prototype, "ebs", {
        // ebs - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('ebs');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderImageRecipeBlockDeviceMapping.prototype, "noDevice", {
        // no_device - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('no_device');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderImageRecipeBlockDeviceMapping.prototype, "virtualName", {
        // virtual_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('virtual_name');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsImagebuilderImageRecipeBlockDeviceMapping;
}(cdktf.ComplexComputedList));
exports.DataAwsImagebuilderImageRecipeBlockDeviceMapping = DataAwsImagebuilderImageRecipeBlockDeviceMapping;
var DataAwsImagebuilderImageRecipeComponent = /** @class */ (function (_super) {
    __extends(DataAwsImagebuilderImageRecipeComponent, _super);
    function DataAwsImagebuilderImageRecipeComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsImagebuilderImageRecipeComponent.prototype, "componentArn", {
        // component_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('component_arn');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsImagebuilderImageRecipeComponent;
}(cdktf.ComplexComputedList));
exports.DataAwsImagebuilderImageRecipeComponent = DataAwsImagebuilderImageRecipeComponent;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipe.html aws_imagebuilder_image_recipe}
*/
var DataAwsImagebuilderImageRecipe = /** @class */ (function (_super) {
    __extends(DataAwsImagebuilderImageRecipe, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipe.html aws_imagebuilder_image_recipe} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsImagebuilderImageRecipeConfig
    */
    function DataAwsImagebuilderImageRecipe(scope, id, config) {
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
        _this._arn = config.arn;
        _this._tags = config.tags;
        return _this;
    }
    Object.defineProperty(DataAwsImagebuilderImageRecipe.prototype, "arn", {
        get: function () {
            return this.getStringAttribute('arn');
        },
        set: function (value) {
            this._arn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderImageRecipe.prototype, "arnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._arn;
        },
        enumerable: false,
        configurable: true
    });
    // block_device_mapping - computed: true, optional: false, required: false
    DataAwsImagebuilderImageRecipe.prototype.blockDeviceMapping = function (index) {
        return new DataAwsImagebuilderImageRecipeBlockDeviceMapping(this, 'block_device_mapping', index);
    };
    // component - computed: true, optional: false, required: false
    DataAwsImagebuilderImageRecipe.prototype.component = function (index) {
        return new DataAwsImagebuilderImageRecipeComponent(this, 'component', index);
    };
    Object.defineProperty(DataAwsImagebuilderImageRecipe.prototype, "dateCreated", {
        // date_created - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('date_created');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderImageRecipe.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderImageRecipe.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderImageRecipe.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderImageRecipe.prototype, "owner", {
        // owner - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderImageRecipe.prototype, "parentImage", {
        // parent_image - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('parent_image');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderImageRecipe.prototype, "platform", {
        // platform - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('platform');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderImageRecipe.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsImagebuilderImageRecipe.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsImagebuilderImageRecipe.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderImageRecipe.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderImageRecipe.prototype, "workingDirectory", {
        // working_directory - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('working_directory');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsImagebuilderImageRecipe.prototype.synthesizeAttributes = function () {
        return {
            arn: cdktf.stringToTerraform(this._arn),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsImagebuilderImageRecipe.tfResourceType = "aws_imagebuilder_image_recipe";
    return DataAwsImagebuilderImageRecipe;
}(cdktf.TerraformDataSource));
exports.DataAwsImagebuilderImageRecipe = DataAwsImagebuilderImageRecipe;
