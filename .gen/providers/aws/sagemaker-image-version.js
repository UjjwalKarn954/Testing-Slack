"use strict";
// https://www.terraform.io/docs/providers/aws/r/sagemaker_image_version.html
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
exports.SagemakerImageVersion = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_image_version.html aws_sagemaker_image_version}
*/
var SagemakerImageVersion = /** @class */ (function (_super) {
    __extends(SagemakerImageVersion, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_image_version.html aws_sagemaker_image_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerImageVersionConfig
    */
    function SagemakerImageVersion(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_sagemaker_image_version',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._baseImage = config.baseImage;
        _this._imageName = config.imageName;
        return _this;
    }
    Object.defineProperty(SagemakerImageVersion.prototype, "arn", {
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
    Object.defineProperty(SagemakerImageVersion.prototype, "baseImage", {
        get: function () {
            return this.getStringAttribute('base_image');
        },
        set: function (value) {
            this._baseImage = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerImageVersion.prototype, "baseImageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._baseImage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerImageVersion.prototype, "containerImage", {
        // container_image - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('container_image');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerImageVersion.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerImageVersion.prototype, "imageArn", {
        // image_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('image_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerImageVersion.prototype, "imageName", {
        get: function () {
            return this.getStringAttribute('image_name');
        },
        set: function (value) {
            this._imageName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerImageVersion.prototype, "imageNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._imageName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerImageVersion.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SagemakerImageVersion.prototype.synthesizeAttributes = function () {
        return {
            base_image: cdktf.stringToTerraform(this._baseImage),
            image_name: cdktf.stringToTerraform(this._imageName)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SagemakerImageVersion.tfResourceType = "aws_sagemaker_image_version";
    return SagemakerImageVersion;
}(cdktf.TerraformResource));
exports.SagemakerImageVersion = SagemakerImageVersion;
