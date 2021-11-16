"use strict";
// https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html
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
exports.LambdaEventSourceMapping = void 0;
var cdktf = require("cdktf");
function lambdaEventSourceMappingDestinationConfigOnFailureToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        destination_arn: cdktf.stringToTerraform(struct.destinationArn)
    };
}
function lambdaEventSourceMappingDestinationConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        on_failure: cdktf.listMapper(lambdaEventSourceMappingDestinationConfigOnFailureToTerraform)(struct.onFailure)
    };
}
function lambdaEventSourceMappingSelfManagedEventSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        endpoints: cdktf.hashMapper(cdktf.anyToTerraform)(struct.endpoints)
    };
}
function lambdaEventSourceMappingSourceAccessConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
        uri: cdktf.stringToTerraform(struct.uri)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html aws_lambda_event_source_mapping}
*/
var LambdaEventSourceMapping = /** @class */ (function (_super) {
    __extends(LambdaEventSourceMapping, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html aws_lambda_event_source_mapping} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LambdaEventSourceMappingConfig
    */
    function LambdaEventSourceMapping(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_lambda_event_source_mapping',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._batchSize = config.batchSize;
        _this._bisectBatchOnFunctionError = config.bisectBatchOnFunctionError;
        _this._enabled = config.enabled;
        _this._eventSourceArn = config.eventSourceArn;
        _this._functionName = config.functionName;
        _this._functionResponseTypes = config.functionResponseTypes;
        _this._maximumBatchingWindowInSeconds = config.maximumBatchingWindowInSeconds;
        _this._maximumRecordAgeInSeconds = config.maximumRecordAgeInSeconds;
        _this._maximumRetryAttempts = config.maximumRetryAttempts;
        _this._parallelizationFactor = config.parallelizationFactor;
        _this._queues = config.queues;
        _this._startingPosition = config.startingPosition;
        _this._startingPositionTimestamp = config.startingPositionTimestamp;
        _this._topics = config.topics;
        _this._tumblingWindowInSeconds = config.tumblingWindowInSeconds;
        _this._destinationConfig = config.destinationConfig;
        _this._selfManagedEventSource = config.selfManagedEventSource;
        _this._sourceAccessConfiguration = config.sourceAccessConfiguration;
        return _this;
    }
    Object.defineProperty(LambdaEventSourceMapping.prototype, "batchSize", {
        get: function () {
            return this.getNumberAttribute('batch_size');
        },
        set: function (value) {
            this._batchSize = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaEventSourceMapping.prototype.resetBatchSize = function () {
        this._batchSize = undefined;
    };
    Object.defineProperty(LambdaEventSourceMapping.prototype, "batchSizeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._batchSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaEventSourceMapping.prototype, "bisectBatchOnFunctionError", {
        get: function () {
            return this.getBooleanAttribute('bisect_batch_on_function_error');
        },
        set: function (value) {
            this._bisectBatchOnFunctionError = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaEventSourceMapping.prototype.resetBisectBatchOnFunctionError = function () {
        this._bisectBatchOnFunctionError = undefined;
    };
    Object.defineProperty(LambdaEventSourceMapping.prototype, "bisectBatchOnFunctionErrorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bisectBatchOnFunctionError;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaEventSourceMapping.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaEventSourceMapping.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(LambdaEventSourceMapping.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaEventSourceMapping.prototype, "eventSourceArn", {
        get: function () {
            return this.getStringAttribute('event_source_arn');
        },
        set: function (value) {
            this._eventSourceArn = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaEventSourceMapping.prototype.resetEventSourceArn = function () {
        this._eventSourceArn = undefined;
    };
    Object.defineProperty(LambdaEventSourceMapping.prototype, "eventSourceArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._eventSourceArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaEventSourceMapping.prototype, "functionArn", {
        // function_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('function_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaEventSourceMapping.prototype, "functionName", {
        get: function () {
            return this.getStringAttribute('function_name');
        },
        set: function (value) {
            this._functionName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaEventSourceMapping.prototype, "functionNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._functionName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaEventSourceMapping.prototype, "functionResponseTypes", {
        get: function () {
            return this.getListAttribute('function_response_types');
        },
        set: function (value) {
            this._functionResponseTypes = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaEventSourceMapping.prototype.resetFunctionResponseTypes = function () {
        this._functionResponseTypes = undefined;
    };
    Object.defineProperty(LambdaEventSourceMapping.prototype, "functionResponseTypesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._functionResponseTypes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaEventSourceMapping.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaEventSourceMapping.prototype, "lastModified", {
        // last_modified - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_modified');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaEventSourceMapping.prototype, "lastProcessingResult", {
        // last_processing_result - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_processing_result');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaEventSourceMapping.prototype, "maximumBatchingWindowInSeconds", {
        get: function () {
            return this.getNumberAttribute('maximum_batching_window_in_seconds');
        },
        set: function (value) {
            this._maximumBatchingWindowInSeconds = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaEventSourceMapping.prototype.resetMaximumBatchingWindowInSeconds = function () {
        this._maximumBatchingWindowInSeconds = undefined;
    };
    Object.defineProperty(LambdaEventSourceMapping.prototype, "maximumBatchingWindowInSecondsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maximumBatchingWindowInSeconds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaEventSourceMapping.prototype, "maximumRecordAgeInSeconds", {
        get: function () {
            return this.getNumberAttribute('maximum_record_age_in_seconds');
        },
        set: function (value) {
            this._maximumRecordAgeInSeconds = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaEventSourceMapping.prototype.resetMaximumRecordAgeInSeconds = function () {
        this._maximumRecordAgeInSeconds = undefined;
    };
    Object.defineProperty(LambdaEventSourceMapping.prototype, "maximumRecordAgeInSecondsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maximumRecordAgeInSeconds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaEventSourceMapping.prototype, "maximumRetryAttempts", {
        get: function () {
            return this.getNumberAttribute('maximum_retry_attempts');
        },
        set: function (value) {
            this._maximumRetryAttempts = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaEventSourceMapping.prototype.resetMaximumRetryAttempts = function () {
        this._maximumRetryAttempts = undefined;
    };
    Object.defineProperty(LambdaEventSourceMapping.prototype, "maximumRetryAttemptsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maximumRetryAttempts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaEventSourceMapping.prototype, "parallelizationFactor", {
        get: function () {
            return this.getNumberAttribute('parallelization_factor');
        },
        set: function (value) {
            this._parallelizationFactor = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaEventSourceMapping.prototype.resetParallelizationFactor = function () {
        this._parallelizationFactor = undefined;
    };
    Object.defineProperty(LambdaEventSourceMapping.prototype, "parallelizationFactorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._parallelizationFactor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaEventSourceMapping.prototype, "queues", {
        get: function () {
            return this.getListAttribute('queues');
        },
        set: function (value) {
            this._queues = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaEventSourceMapping.prototype.resetQueues = function () {
        this._queues = undefined;
    };
    Object.defineProperty(LambdaEventSourceMapping.prototype, "queuesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._queues;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaEventSourceMapping.prototype, "startingPosition", {
        get: function () {
            return this.getStringAttribute('starting_position');
        },
        set: function (value) {
            this._startingPosition = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaEventSourceMapping.prototype.resetStartingPosition = function () {
        this._startingPosition = undefined;
    };
    Object.defineProperty(LambdaEventSourceMapping.prototype, "startingPositionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._startingPosition;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaEventSourceMapping.prototype, "startingPositionTimestamp", {
        get: function () {
            return this.getStringAttribute('starting_position_timestamp');
        },
        set: function (value) {
            this._startingPositionTimestamp = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaEventSourceMapping.prototype.resetStartingPositionTimestamp = function () {
        this._startingPositionTimestamp = undefined;
    };
    Object.defineProperty(LambdaEventSourceMapping.prototype, "startingPositionTimestampInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._startingPositionTimestamp;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaEventSourceMapping.prototype, "state", {
        // state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaEventSourceMapping.prototype, "stateTransitionReason", {
        // state_transition_reason - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('state_transition_reason');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaEventSourceMapping.prototype, "topics", {
        get: function () {
            return this.getListAttribute('topics');
        },
        set: function (value) {
            this._topics = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaEventSourceMapping.prototype.resetTopics = function () {
        this._topics = undefined;
    };
    Object.defineProperty(LambdaEventSourceMapping.prototype, "topicsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._topics;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaEventSourceMapping.prototype, "tumblingWindowInSeconds", {
        get: function () {
            return this.getNumberAttribute('tumbling_window_in_seconds');
        },
        set: function (value) {
            this._tumblingWindowInSeconds = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaEventSourceMapping.prototype.resetTumblingWindowInSeconds = function () {
        this._tumblingWindowInSeconds = undefined;
    };
    Object.defineProperty(LambdaEventSourceMapping.prototype, "tumblingWindowInSecondsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tumblingWindowInSeconds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaEventSourceMapping.prototype, "uuid", {
        // uuid - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('uuid');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaEventSourceMapping.prototype, "destinationConfig", {
        get: function () {
            return this.interpolationForAttribute('destination_config');
        },
        set: function (value) {
            this._destinationConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaEventSourceMapping.prototype.resetDestinationConfig = function () {
        this._destinationConfig = undefined;
    };
    Object.defineProperty(LambdaEventSourceMapping.prototype, "destinationConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._destinationConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaEventSourceMapping.prototype, "selfManagedEventSource", {
        get: function () {
            return this.interpolationForAttribute('self_managed_event_source');
        },
        set: function (value) {
            this._selfManagedEventSource = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaEventSourceMapping.prototype.resetSelfManagedEventSource = function () {
        this._selfManagedEventSource = undefined;
    };
    Object.defineProperty(LambdaEventSourceMapping.prototype, "selfManagedEventSourceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._selfManagedEventSource;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaEventSourceMapping.prototype, "sourceAccessConfiguration", {
        get: function () {
            return this.interpolationForAttribute('source_access_configuration');
        },
        set: function (value) {
            this._sourceAccessConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaEventSourceMapping.prototype.resetSourceAccessConfiguration = function () {
        this._sourceAccessConfiguration = undefined;
    };
    Object.defineProperty(LambdaEventSourceMapping.prototype, "sourceAccessConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sourceAccessConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    LambdaEventSourceMapping.prototype.synthesizeAttributes = function () {
        return {
            batch_size: cdktf.numberToTerraform(this._batchSize),
            bisect_batch_on_function_error: cdktf.booleanToTerraform(this._bisectBatchOnFunctionError),
            enabled: cdktf.booleanToTerraform(this._enabled),
            event_source_arn: cdktf.stringToTerraform(this._eventSourceArn),
            function_name: cdktf.stringToTerraform(this._functionName),
            function_response_types: cdktf.listMapper(cdktf.stringToTerraform)(this._functionResponseTypes),
            maximum_batching_window_in_seconds: cdktf.numberToTerraform(this._maximumBatchingWindowInSeconds),
            maximum_record_age_in_seconds: cdktf.numberToTerraform(this._maximumRecordAgeInSeconds),
            maximum_retry_attempts: cdktf.numberToTerraform(this._maximumRetryAttempts),
            parallelization_factor: cdktf.numberToTerraform(this._parallelizationFactor),
            queues: cdktf.listMapper(cdktf.stringToTerraform)(this._queues),
            starting_position: cdktf.stringToTerraform(this._startingPosition),
            starting_position_timestamp: cdktf.stringToTerraform(this._startingPositionTimestamp),
            topics: cdktf.listMapper(cdktf.stringToTerraform)(this._topics),
            tumbling_window_in_seconds: cdktf.numberToTerraform(this._tumblingWindowInSeconds),
            destination_config: cdktf.listMapper(lambdaEventSourceMappingDestinationConfigToTerraform)(this._destinationConfig),
            self_managed_event_source: cdktf.listMapper(lambdaEventSourceMappingSelfManagedEventSourceToTerraform)(this._selfManagedEventSource),
            source_access_configuration: cdktf.listMapper(lambdaEventSourceMappingSourceAccessConfigurationToTerraform)(this._sourceAccessConfiguration)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    LambdaEventSourceMapping.tfResourceType = "aws_lambda_event_source_mapping";
    return LambdaEventSourceMapping;
}(cdktf.TerraformResource));
exports.LambdaEventSourceMapping = LambdaEventSourceMapping;
