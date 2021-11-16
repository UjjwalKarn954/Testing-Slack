"use strict";
// https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html
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
exports.SagemakerAppImageConfig = void 0;
var cdktf = require("cdktf");
function sagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        default_gid: cdktf.numberToTerraform(struct.defaultGid),
        default_uid: cdktf.numberToTerraform(struct.defaultUid),
        mount_path: cdktf.stringToTerraform(struct.mountPath)
    };
}
function sagemakerAppImageConfigKernelGatewayImageConfigKernelSpecToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        display_name: cdktf.stringToTerraform(struct.displayName),
        name: cdktf.stringToTerraform(struct.name)
    };
}
function sagemakerAppImageConfigKernelGatewayImageConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        file_system_config: cdktf.listMapper(sagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigToTerraform)(struct.fileSystemConfig),
        kernel_spec: cdktf.listMapper(sagemakerAppImageConfigKernelGatewayImageConfigKernelSpecToTerraform)(struct.kernelSpec)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html aws_sagemaker_app_image_config}
*/
var SagemakerAppImageConfig = /** @class */ (function (_super) {
    __extends(SagemakerAppImageConfig, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app_image_config.html aws_sagemaker_app_image_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerAppImageConfigConfig
    */
    function SagemakerAppImageConfig(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_sagemaker_app_image_config',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._appImageConfigName = config.appImageConfigName;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._kernelGatewayImageConfig = config.kernelGatewayImageConfig;
        return _this;
    }
    Object.defineProperty(SagemakerAppImageConfig.prototype, "appImageConfigName", {
        get: function () {
            return this.getStringAttribute('app_image_config_name');
        },
        set: function (value) {
            this._appImageConfigName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerAppImageConfig.prototype, "appImageConfigNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._appImageConfigName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerAppImageConfig.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerAppImageConfig.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerAppImageConfig.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerAppImageConfig.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(SagemakerAppImageConfig.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerAppImageConfig.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerAppImageConfig.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(SagemakerAppImageConfig.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerAppImageConfig.prototype, "kernelGatewayImageConfig", {
        get: function () {
            return this.interpolationForAttribute('kernel_gateway_image_config');
        },
        set: function (value) {
            this._kernelGatewayImageConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerAppImageConfig.prototype.resetKernelGatewayImageConfig = function () {
        this._kernelGatewayImageConfig = undefined;
    };
    Object.defineProperty(SagemakerAppImageConfig.prototype, "kernelGatewayImageConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kernelGatewayImageConfig;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SagemakerAppImageConfig.prototype.synthesizeAttributes = function () {
        return {
            app_image_config_name: cdktf.stringToTerraform(this._appImageConfigName),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            kernel_gateway_image_config: cdktf.listMapper(sagemakerAppImageConfigKernelGatewayImageConfigToTerraform)(this._kernelGatewayImageConfig)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SagemakerAppImageConfig.tfResourceType = "aws_sagemaker_app_image_config";
    return SagemakerAppImageConfig;
}(cdktf.TerraformResource));
exports.SagemakerAppImageConfig = SagemakerAppImageConfig;
