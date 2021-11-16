"use strict";
// https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html
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
exports.SagemakerModel = void 0;
var cdktf = require("cdktf");
function sagemakerModelContainerImageConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        repository_access_mode: cdktf.stringToTerraform(struct.repositoryAccessMode)
    };
}
function sagemakerModelContainerToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        container_hostname: cdktf.stringToTerraform(struct.containerHostname),
        environment: cdktf.hashMapper(cdktf.anyToTerraform)(struct.environment),
        image: cdktf.stringToTerraform(struct.image),
        mode: cdktf.stringToTerraform(struct.mode),
        model_data_url: cdktf.stringToTerraform(struct.modelDataUrl),
        image_config: cdktf.listMapper(sagemakerModelContainerImageConfigToTerraform)(struct.imageConfig)
    };
}
function sagemakerModelInferenceExecutionConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        mode: cdktf.stringToTerraform(struct.mode)
    };
}
function sagemakerModelPrimaryContainerImageConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        repository_access_mode: cdktf.stringToTerraform(struct.repositoryAccessMode)
    };
}
function sagemakerModelPrimaryContainerToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        container_hostname: cdktf.stringToTerraform(struct.containerHostname),
        environment: cdktf.hashMapper(cdktf.anyToTerraform)(struct.environment),
        image: cdktf.stringToTerraform(struct.image),
        mode: cdktf.stringToTerraform(struct.mode),
        model_data_url: cdktf.stringToTerraform(struct.modelDataUrl),
        image_config: cdktf.listMapper(sagemakerModelPrimaryContainerImageConfigToTerraform)(struct.imageConfig)
    };
}
function sagemakerModelVpcConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroupIds),
        subnets: cdktf.listMapper(cdktf.stringToTerraform)(struct.subnets)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html aws_sagemaker_model}
*/
var SagemakerModel = /** @class */ (function (_super) {
    __extends(SagemakerModel, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html aws_sagemaker_model} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerModelConfig
    */
    function SagemakerModel(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_sagemaker_model',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._enableNetworkIsolation = config.enableNetworkIsolation;
        _this._executionRoleArn = config.executionRoleArn;
        _this._name = config.name;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._container = config.container;
        _this._inferenceExecutionConfig = config.inferenceExecutionConfig;
        _this._primaryContainer = config.primaryContainer;
        _this._vpcConfig = config.vpcConfig;
        return _this;
    }
    Object.defineProperty(SagemakerModel.prototype, "arn", {
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
    Object.defineProperty(SagemakerModel.prototype, "enableNetworkIsolation", {
        get: function () {
            return this.getBooleanAttribute('enable_network_isolation');
        },
        set: function (value) {
            this._enableNetworkIsolation = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerModel.prototype.resetEnableNetworkIsolation = function () {
        this._enableNetworkIsolation = undefined;
    };
    Object.defineProperty(SagemakerModel.prototype, "enableNetworkIsolationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enableNetworkIsolation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerModel.prototype, "executionRoleArn", {
        get: function () {
            return this.getStringAttribute('execution_role_arn');
        },
        set: function (value) {
            this._executionRoleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerModel.prototype, "executionRoleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._executionRoleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerModel.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerModel.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerModel.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(SagemakerModel.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerModel.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerModel.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(SagemakerModel.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerModel.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerModel.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(SagemakerModel.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerModel.prototype, "container", {
        get: function () {
            return this.interpolationForAttribute('container');
        },
        set: function (value) {
            this._container = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerModel.prototype.resetContainer = function () {
        this._container = undefined;
    };
    Object.defineProperty(SagemakerModel.prototype, "containerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._container;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerModel.prototype, "inferenceExecutionConfig", {
        get: function () {
            return this.interpolationForAttribute('inference_execution_config');
        },
        set: function (value) {
            this._inferenceExecutionConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerModel.prototype.resetInferenceExecutionConfig = function () {
        this._inferenceExecutionConfig = undefined;
    };
    Object.defineProperty(SagemakerModel.prototype, "inferenceExecutionConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._inferenceExecutionConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerModel.prototype, "primaryContainer", {
        get: function () {
            return this.interpolationForAttribute('primary_container');
        },
        set: function (value) {
            this._primaryContainer = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerModel.prototype.resetPrimaryContainer = function () {
        this._primaryContainer = undefined;
    };
    Object.defineProperty(SagemakerModel.prototype, "primaryContainerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._primaryContainer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerModel.prototype, "vpcConfig", {
        get: function () {
            return this.interpolationForAttribute('vpc_config');
        },
        set: function (value) {
            this._vpcConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerModel.prototype.resetVpcConfig = function () {
        this._vpcConfig = undefined;
    };
    Object.defineProperty(SagemakerModel.prototype, "vpcConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcConfig;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SagemakerModel.prototype.synthesizeAttributes = function () {
        return {
            enable_network_isolation: cdktf.booleanToTerraform(this._enableNetworkIsolation),
            execution_role_arn: cdktf.stringToTerraform(this._executionRoleArn),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            container: cdktf.listMapper(sagemakerModelContainerToTerraform)(this._container),
            inference_execution_config: cdktf.listMapper(sagemakerModelInferenceExecutionConfigToTerraform)(this._inferenceExecutionConfig),
            primary_container: cdktf.listMapper(sagemakerModelPrimaryContainerToTerraform)(this._primaryContainer),
            vpc_config: cdktf.listMapper(sagemakerModelVpcConfigToTerraform)(this._vpcConfig)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SagemakerModel.tfResourceType = "aws_sagemaker_model";
    return SagemakerModel;
}(cdktf.TerraformResource));
exports.SagemakerModel = SagemakerModel;
