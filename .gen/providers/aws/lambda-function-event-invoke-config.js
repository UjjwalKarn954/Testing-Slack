"use strict";
// https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config.html
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
exports.LambdaFunctionEventInvokeConfig = void 0;
var cdktf = require("cdktf");
function lambdaFunctionEventInvokeConfigDestinationConfigOnFailureToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        destination: cdktf.stringToTerraform(struct.destination)
    };
}
function lambdaFunctionEventInvokeConfigDestinationConfigOnSuccessToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        destination: cdktf.stringToTerraform(struct.destination)
    };
}
function lambdaFunctionEventInvokeConfigDestinationConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        on_failure: cdktf.listMapper(lambdaFunctionEventInvokeConfigDestinationConfigOnFailureToTerraform)(struct.onFailure),
        on_success: cdktf.listMapper(lambdaFunctionEventInvokeConfigDestinationConfigOnSuccessToTerraform)(struct.onSuccess)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config.html aws_lambda_function_event_invoke_config}
*/
var LambdaFunctionEventInvokeConfig = /** @class */ (function (_super) {
    __extends(LambdaFunctionEventInvokeConfig, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config.html aws_lambda_function_event_invoke_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LambdaFunctionEventInvokeConfigConfig
    */
    function LambdaFunctionEventInvokeConfig(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_lambda_function_event_invoke_config',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._functionName = config.functionName;
        _this._maximumEventAgeInSeconds = config.maximumEventAgeInSeconds;
        _this._maximumRetryAttempts = config.maximumRetryAttempts;
        _this._qualifier = config.qualifier;
        _this._destinationConfig = config.destinationConfig;
        return _this;
    }
    Object.defineProperty(LambdaFunctionEventInvokeConfig.prototype, "functionName", {
        get: function () {
            return this.getStringAttribute('function_name');
        },
        set: function (value) {
            this._functionName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaFunctionEventInvokeConfig.prototype, "functionNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._functionName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaFunctionEventInvokeConfig.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaFunctionEventInvokeConfig.prototype, "maximumEventAgeInSeconds", {
        get: function () {
            return this.getNumberAttribute('maximum_event_age_in_seconds');
        },
        set: function (value) {
            this._maximumEventAgeInSeconds = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaFunctionEventInvokeConfig.prototype.resetMaximumEventAgeInSeconds = function () {
        this._maximumEventAgeInSeconds = undefined;
    };
    Object.defineProperty(LambdaFunctionEventInvokeConfig.prototype, "maximumEventAgeInSecondsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maximumEventAgeInSeconds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaFunctionEventInvokeConfig.prototype, "maximumRetryAttempts", {
        get: function () {
            return this.getNumberAttribute('maximum_retry_attempts');
        },
        set: function (value) {
            this._maximumRetryAttempts = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaFunctionEventInvokeConfig.prototype.resetMaximumRetryAttempts = function () {
        this._maximumRetryAttempts = undefined;
    };
    Object.defineProperty(LambdaFunctionEventInvokeConfig.prototype, "maximumRetryAttemptsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maximumRetryAttempts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaFunctionEventInvokeConfig.prototype, "qualifier", {
        get: function () {
            return this.getStringAttribute('qualifier');
        },
        set: function (value) {
            this._qualifier = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaFunctionEventInvokeConfig.prototype.resetQualifier = function () {
        this._qualifier = undefined;
    };
    Object.defineProperty(LambdaFunctionEventInvokeConfig.prototype, "qualifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._qualifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaFunctionEventInvokeConfig.prototype, "destinationConfig", {
        get: function () {
            return this.interpolationForAttribute('destination_config');
        },
        set: function (value) {
            this._destinationConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaFunctionEventInvokeConfig.prototype.resetDestinationConfig = function () {
        this._destinationConfig = undefined;
    };
    Object.defineProperty(LambdaFunctionEventInvokeConfig.prototype, "destinationConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._destinationConfig;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    LambdaFunctionEventInvokeConfig.prototype.synthesizeAttributes = function () {
        return {
            function_name: cdktf.stringToTerraform(this._functionName),
            maximum_event_age_in_seconds: cdktf.numberToTerraform(this._maximumEventAgeInSeconds),
            maximum_retry_attempts: cdktf.numberToTerraform(this._maximumRetryAttempts),
            qualifier: cdktf.stringToTerraform(this._qualifier),
            destination_config: cdktf.listMapper(lambdaFunctionEventInvokeConfigDestinationConfigToTerraform)(this._destinationConfig)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    LambdaFunctionEventInvokeConfig.tfResourceType = "aws_lambda_function_event_invoke_config";
    return LambdaFunctionEventInvokeConfig;
}(cdktf.TerraformResource));
exports.LambdaFunctionEventInvokeConfig = LambdaFunctionEventInvokeConfig;
