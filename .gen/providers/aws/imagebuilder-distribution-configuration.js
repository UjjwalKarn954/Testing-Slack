"use strict";
// https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html
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
exports.ImagebuilderDistributionConfiguration = void 0;
var cdktf = require("cdktf");
function imagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        user_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct.userGroups),
        user_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.userIds)
    };
}
function imagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        ami_tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct.amiTags),
        description: cdktf.stringToTerraform(struct.description),
        kms_key_id: cdktf.stringToTerraform(struct.kmsKeyId),
        name: cdktf.stringToTerraform(struct.name),
        target_account_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.targetAccountIds),
        launch_permission: cdktf.listMapper(imagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionToTerraform)(struct.launchPermission)
    };
}
function imagebuilderDistributionConfigurationDistributionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        license_configuration_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct.licenseConfigurationArns),
        region: cdktf.stringToTerraform(struct.region),
        ami_distribution_configuration: cdktf.listMapper(imagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationToTerraform)(struct.amiDistributionConfiguration)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html aws_imagebuilder_distribution_configuration}
*/
var ImagebuilderDistributionConfiguration = /** @class */ (function (_super) {
    __extends(ImagebuilderDistributionConfiguration, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html aws_imagebuilder_distribution_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ImagebuilderDistributionConfigurationConfig
    */
    function ImagebuilderDistributionConfiguration(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_imagebuilder_distribution_configuration',
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
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._distribution = config.distribution;
        return _this;
    }
    Object.defineProperty(ImagebuilderDistributionConfiguration.prototype, "arn", {
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
    Object.defineProperty(ImagebuilderDistributionConfiguration.prototype, "dateCreated", {
        // date_created - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('date_created');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderDistributionConfiguration.prototype, "dateUpdated", {
        // date_updated - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('date_updated');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderDistributionConfiguration.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ImagebuilderDistributionConfiguration.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(ImagebuilderDistributionConfiguration.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderDistributionConfiguration.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderDistributionConfiguration.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderDistributionConfiguration.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderDistributionConfiguration.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    ImagebuilderDistributionConfiguration.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(ImagebuilderDistributionConfiguration.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderDistributionConfiguration.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    ImagebuilderDistributionConfiguration.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(ImagebuilderDistributionConfiguration.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderDistributionConfiguration.prototype, "distribution", {
        get: function () {
            return this.interpolationForAttribute('distribution');
        },
        set: function (value) {
            this._distribution = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImagebuilderDistributionConfiguration.prototype, "distributionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._distribution;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ImagebuilderDistributionConfiguration.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            distribution: cdktf.listMapper(imagebuilderDistributionConfigurationDistributionToTerraform)(this._distribution)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ImagebuilderDistributionConfiguration.tfResourceType = "aws_imagebuilder_distribution_configuration";
    return ImagebuilderDistributionConfiguration;
}(cdktf.TerraformResource));
exports.ImagebuilderDistributionConfiguration = ImagebuilderDistributionConfiguration;
