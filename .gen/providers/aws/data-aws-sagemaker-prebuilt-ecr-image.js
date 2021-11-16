"use strict";
// https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image.html
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
exports.DataAwsSagemakerPrebuiltEcrImage = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image.html aws_sagemaker_prebuilt_ecr_image}
*/
var DataAwsSagemakerPrebuiltEcrImage = /** @class */ (function (_super) {
    __extends(DataAwsSagemakerPrebuiltEcrImage, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/sagemaker_prebuilt_ecr_image.html aws_sagemaker_prebuilt_ecr_image} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSagemakerPrebuiltEcrImageConfig
    */
    function DataAwsSagemakerPrebuiltEcrImage(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_sagemaker_prebuilt_ecr_image',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._dnsSuffix = config.dnsSuffix;
        _this._imageTag = config.imageTag;
        _this._region = config.region;
        _this._repositoryName = config.repositoryName;
        return _this;
    }
    Object.defineProperty(DataAwsSagemakerPrebuiltEcrImage.prototype, "dnsSuffix", {
        get: function () {
            return this.getStringAttribute('dns_suffix');
        },
        set: function (value) {
            this._dnsSuffix = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsSagemakerPrebuiltEcrImage.prototype.resetDnsSuffix = function () {
        this._dnsSuffix = undefined;
    };
    Object.defineProperty(DataAwsSagemakerPrebuiltEcrImage.prototype, "dnsSuffixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dnsSuffix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSagemakerPrebuiltEcrImage.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSagemakerPrebuiltEcrImage.prototype, "imageTag", {
        get: function () {
            return this.getStringAttribute('image_tag');
        },
        set: function (value) {
            this._imageTag = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsSagemakerPrebuiltEcrImage.prototype.resetImageTag = function () {
        this._imageTag = undefined;
    };
    Object.defineProperty(DataAwsSagemakerPrebuiltEcrImage.prototype, "imageTagInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._imageTag;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSagemakerPrebuiltEcrImage.prototype, "region", {
        get: function () {
            return this.getStringAttribute('region');
        },
        set: function (value) {
            this._region = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsSagemakerPrebuiltEcrImage.prototype.resetRegion = function () {
        this._region = undefined;
    };
    Object.defineProperty(DataAwsSagemakerPrebuiltEcrImage.prototype, "regionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._region;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSagemakerPrebuiltEcrImage.prototype, "registryId", {
        // registry_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('registry_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSagemakerPrebuiltEcrImage.prototype, "registryPath", {
        // registry_path - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('registry_path');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSagemakerPrebuiltEcrImage.prototype, "repositoryName", {
        get: function () {
            return this.getStringAttribute('repository_name');
        },
        set: function (value) {
            this._repositoryName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSagemakerPrebuiltEcrImage.prototype, "repositoryNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._repositoryName;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsSagemakerPrebuiltEcrImage.prototype.synthesizeAttributes = function () {
        return {
            dns_suffix: cdktf.stringToTerraform(this._dnsSuffix),
            image_tag: cdktf.stringToTerraform(this._imageTag),
            region: cdktf.stringToTerraform(this._region),
            repository_name: cdktf.stringToTerraform(this._repositoryName)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsSagemakerPrebuiltEcrImage.tfResourceType = "aws_sagemaker_prebuilt_ecr_image";
    return DataAwsSagemakerPrebuiltEcrImage;
}(cdktf.TerraformDataSource));
exports.DataAwsSagemakerPrebuiltEcrImage = DataAwsSagemakerPrebuiltEcrImage;
