"use strict";
// https://www.terraform.io/docs/providers/aws/d/ecr_image.html
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
exports.DataAwsEcrImage = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ecr_image.html aws_ecr_image}
*/
var DataAwsEcrImage = /** @class */ (function (_super) {
    __extends(DataAwsEcrImage, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ecr_image.html aws_ecr_image} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEcrImageConfig
    */
    function DataAwsEcrImage(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ecr_image',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._imageDigest = config.imageDigest;
        _this._imageTag = config.imageTag;
        _this._registryId = config.registryId;
        _this._repositoryName = config.repositoryName;
        return _this;
    }
    Object.defineProperty(DataAwsEcrImage.prototype, "id", {
        // ==========
        // ATTRIBUTES
        // ==========
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEcrImage.prototype, "imageDigest", {
        get: function () {
            return this.getStringAttribute('image_digest');
        },
        set: function (value) {
            this._imageDigest = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEcrImage.prototype.resetImageDigest = function () {
        this._imageDigest = undefined;
    };
    Object.defineProperty(DataAwsEcrImage.prototype, "imageDigestInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._imageDigest;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEcrImage.prototype, "imagePushedAt", {
        // image_pushed_at - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('image_pushed_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEcrImage.prototype, "imageSizeInBytes", {
        // image_size_in_bytes - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('image_size_in_bytes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEcrImage.prototype, "imageTag", {
        get: function () {
            return this.getStringAttribute('image_tag');
        },
        set: function (value) {
            this._imageTag = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEcrImage.prototype.resetImageTag = function () {
        this._imageTag = undefined;
    };
    Object.defineProperty(DataAwsEcrImage.prototype, "imageTagInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._imageTag;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEcrImage.prototype, "imageTags", {
        // image_tags - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('image_tags');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEcrImage.prototype, "registryId", {
        get: function () {
            return this.getStringAttribute('registry_id');
        },
        set: function (value) {
            this._registryId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEcrImage.prototype.resetRegistryId = function () {
        this._registryId = undefined;
    };
    Object.defineProperty(DataAwsEcrImage.prototype, "registryIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._registryId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEcrImage.prototype, "repositoryName", {
        get: function () {
            return this.getStringAttribute('repository_name');
        },
        set: function (value) {
            this._repositoryName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEcrImage.prototype, "repositoryNameInput", {
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
    DataAwsEcrImage.prototype.synthesizeAttributes = function () {
        return {
            image_digest: cdktf.stringToTerraform(this._imageDigest),
            image_tag: cdktf.stringToTerraform(this._imageTag),
            registry_id: cdktf.stringToTerraform(this._registryId),
            repository_name: cdktf.stringToTerraform(this._repositoryName)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsEcrImage.tfResourceType = "aws_ecr_image";
    return DataAwsEcrImage;
}(cdktf.TerraformDataSource));
exports.DataAwsEcrImage = DataAwsEcrImage;
