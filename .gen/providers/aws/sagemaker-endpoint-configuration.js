"use strict";
// https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html
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
exports.SagemakerEndpointConfiguration = void 0;
var cdktf = require("cdktf");
function sagemakerEndpointConfigurationAsyncInferenceConfigClientConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        max_concurrent_invocations_per_instance: cdktf.numberToTerraform(struct.maxConcurrentInvocationsPerInstance)
    };
}
function sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        error_topic: cdktf.stringToTerraform(struct.errorTopic),
        success_topic: cdktf.stringToTerraform(struct.successTopic)
    };
}
function sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        kms_key_id: cdktf.stringToTerraform(struct.kmsKeyId),
        s3_output_path: cdktf.stringToTerraform(struct.s3OutputPath),
        notification_config: cdktf.listMapper(sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigToTerraform)(struct.notificationConfig)
    };
}
function sagemakerEndpointConfigurationAsyncInferenceConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        client_config: cdktf.listMapper(sagemakerEndpointConfigurationAsyncInferenceConfigClientConfigToTerraform)(struct.clientConfig),
        output_config: cdktf.listMapper(sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigToTerraform)(struct.outputConfig)
    };
}
function sagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        csv_content_types: cdktf.listMapper(cdktf.stringToTerraform)(struct.csvContentTypes),
        json_content_types: cdktf.listMapper(cdktf.stringToTerraform)(struct.jsonContentTypes)
    };
}
function sagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        capture_mode: cdktf.stringToTerraform(struct.captureMode)
    };
}
function sagemakerEndpointConfigurationDataCaptureConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        destination_s3_uri: cdktf.stringToTerraform(struct.destinationS3Uri),
        enable_capture: cdktf.booleanToTerraform(struct.enableCapture),
        initial_sampling_percentage: cdktf.numberToTerraform(struct.initialSamplingPercentage),
        kms_key_id: cdktf.stringToTerraform(struct.kmsKeyId),
        capture_content_type_header: cdktf.listMapper(sagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderToTerraform)(struct.captureContentTypeHeader),
        capture_options: cdktf.listMapper(sagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsToTerraform)(struct.captureOptions)
    };
}
function sagemakerEndpointConfigurationProductionVariantsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        accelerator_type: cdktf.stringToTerraform(struct.acceleratorType),
        initial_instance_count: cdktf.numberToTerraform(struct.initialInstanceCount),
        initial_variant_weight: cdktf.numberToTerraform(struct.initialVariantWeight),
        instance_type: cdktf.stringToTerraform(struct.instanceType),
        model_name: cdktf.stringToTerraform(struct.modelName),
        variant_name: cdktf.stringToTerraform(struct.variantName)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html aws_sagemaker_endpoint_configuration}
*/
var SagemakerEndpointConfiguration = /** @class */ (function (_super) {
    __extends(SagemakerEndpointConfiguration, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html aws_sagemaker_endpoint_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerEndpointConfigurationConfig
    */
    function SagemakerEndpointConfiguration(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_sagemaker_endpoint_configuration',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._kmsKeyArn = config.kmsKeyArn;
        _this._name = config.name;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._asyncInferenceConfig = config.asyncInferenceConfig;
        _this._dataCaptureConfig = config.dataCaptureConfig;
        _this._productionVariants = config.productionVariants;
        return _this;
    }
    Object.defineProperty(SagemakerEndpointConfiguration.prototype, "arn", {
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
    Object.defineProperty(SagemakerEndpointConfiguration.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerEndpointConfiguration.prototype, "kmsKeyArn", {
        get: function () {
            return this.getStringAttribute('kms_key_arn');
        },
        set: function (value) {
            this._kmsKeyArn = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerEndpointConfiguration.prototype.resetKmsKeyArn = function () {
        this._kmsKeyArn = undefined;
    };
    Object.defineProperty(SagemakerEndpointConfiguration.prototype, "kmsKeyArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kmsKeyArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerEndpointConfiguration.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerEndpointConfiguration.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(SagemakerEndpointConfiguration.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerEndpointConfiguration.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerEndpointConfiguration.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(SagemakerEndpointConfiguration.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerEndpointConfiguration.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerEndpointConfiguration.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(SagemakerEndpointConfiguration.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerEndpointConfiguration.prototype, "asyncInferenceConfig", {
        get: function () {
            return this.interpolationForAttribute('async_inference_config');
        },
        set: function (value) {
            this._asyncInferenceConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerEndpointConfiguration.prototype.resetAsyncInferenceConfig = function () {
        this._asyncInferenceConfig = undefined;
    };
    Object.defineProperty(SagemakerEndpointConfiguration.prototype, "asyncInferenceConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._asyncInferenceConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerEndpointConfiguration.prototype, "dataCaptureConfig", {
        get: function () {
            return this.interpolationForAttribute('data_capture_config');
        },
        set: function (value) {
            this._dataCaptureConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerEndpointConfiguration.prototype.resetDataCaptureConfig = function () {
        this._dataCaptureConfig = undefined;
    };
    Object.defineProperty(SagemakerEndpointConfiguration.prototype, "dataCaptureConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dataCaptureConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerEndpointConfiguration.prototype, "productionVariants", {
        get: function () {
            return this.interpolationForAttribute('production_variants');
        },
        set: function (value) {
            this._productionVariants = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerEndpointConfiguration.prototype, "productionVariantsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._productionVariants;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SagemakerEndpointConfiguration.prototype.synthesizeAttributes = function () {
        return {
            kms_key_arn: cdktf.stringToTerraform(this._kmsKeyArn),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            async_inference_config: cdktf.listMapper(sagemakerEndpointConfigurationAsyncInferenceConfigToTerraform)(this._asyncInferenceConfig),
            data_capture_config: cdktf.listMapper(sagemakerEndpointConfigurationDataCaptureConfigToTerraform)(this._dataCaptureConfig),
            production_variants: cdktf.listMapper(sagemakerEndpointConfigurationProductionVariantsToTerraform)(this._productionVariants)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SagemakerEndpointConfiguration.tfResourceType = "aws_sagemaker_endpoint_configuration";
    return SagemakerEndpointConfiguration;
}(cdktf.TerraformResource));
exports.SagemakerEndpointConfiguration = SagemakerEndpointConfiguration;
