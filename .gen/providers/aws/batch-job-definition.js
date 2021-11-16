"use strict";
// https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html
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
exports.BatchJobDefinition = void 0;
var cdktf = require("cdktf");
function batchJobDefinitionRetryStrategyEvaluateOnExitToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        action: cdktf.stringToTerraform(struct.action),
        on_exit_code: cdktf.stringToTerraform(struct.onExitCode),
        on_reason: cdktf.stringToTerraform(struct.onReason),
        on_status_reason: cdktf.stringToTerraform(struct.onStatusReason)
    };
}
function batchJobDefinitionRetryStrategyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        attempts: cdktf.numberToTerraform(struct.attempts),
        evaluate_on_exit: cdktf.listMapper(batchJobDefinitionRetryStrategyEvaluateOnExitToTerraform)(struct.evaluateOnExit)
    };
}
function batchJobDefinitionTimeoutToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        attempt_duration_seconds: cdktf.numberToTerraform(struct.attemptDurationSeconds)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html aws_batch_job_definition}
*/
var BatchJobDefinition = /** @class */ (function (_super) {
    __extends(BatchJobDefinition, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html aws_batch_job_definition} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BatchJobDefinitionConfig
    */
    function BatchJobDefinition(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_batch_job_definition',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._containerProperties = config.containerProperties;
        _this._name = config.name;
        _this._parameters = config.parameters;
        _this._platformCapabilities = config.platformCapabilities;
        _this._propagateTags = config.propagateTags;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._type = config.type;
        _this._retryStrategy = config.retryStrategy;
        _this._timeout = config.timeout;
        return _this;
    }
    Object.defineProperty(BatchJobDefinition.prototype, "arn", {
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
    Object.defineProperty(BatchJobDefinition.prototype, "containerProperties", {
        get: function () {
            return this.getStringAttribute('container_properties');
        },
        set: function (value) {
            this._containerProperties = value;
        },
        enumerable: false,
        configurable: true
    });
    BatchJobDefinition.prototype.resetContainerProperties = function () {
        this._containerProperties = undefined;
    };
    Object.defineProperty(BatchJobDefinition.prototype, "containerPropertiesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._containerProperties;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BatchJobDefinition.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BatchJobDefinition.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BatchJobDefinition.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BatchJobDefinition.prototype, "parameters", {
        get: function () {
            return this.interpolationForAttribute('parameters');
        },
        set: function (value) {
            this._parameters = value;
        },
        enumerable: false,
        configurable: true
    });
    BatchJobDefinition.prototype.resetParameters = function () {
        this._parameters = undefined;
    };
    Object.defineProperty(BatchJobDefinition.prototype, "parametersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._parameters;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BatchJobDefinition.prototype, "platformCapabilities", {
        get: function () {
            return this.getListAttribute('platform_capabilities');
        },
        set: function (value) {
            this._platformCapabilities = value;
        },
        enumerable: false,
        configurable: true
    });
    BatchJobDefinition.prototype.resetPlatformCapabilities = function () {
        this._platformCapabilities = undefined;
    };
    Object.defineProperty(BatchJobDefinition.prototype, "platformCapabilitiesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._platformCapabilities;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BatchJobDefinition.prototype, "propagateTags", {
        get: function () {
            return this.getBooleanAttribute('propagate_tags');
        },
        set: function (value) {
            this._propagateTags = value;
        },
        enumerable: false,
        configurable: true
    });
    BatchJobDefinition.prototype.resetPropagateTags = function () {
        this._propagateTags = undefined;
    };
    Object.defineProperty(BatchJobDefinition.prototype, "propagateTagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._propagateTags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BatchJobDefinition.prototype, "revision", {
        // revision - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('revision');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BatchJobDefinition.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    BatchJobDefinition.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(BatchJobDefinition.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BatchJobDefinition.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    BatchJobDefinition.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(BatchJobDefinition.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BatchJobDefinition.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BatchJobDefinition.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BatchJobDefinition.prototype, "retryStrategy", {
        get: function () {
            return this.interpolationForAttribute('retry_strategy');
        },
        set: function (value) {
            this._retryStrategy = value;
        },
        enumerable: false,
        configurable: true
    });
    BatchJobDefinition.prototype.resetRetryStrategy = function () {
        this._retryStrategy = undefined;
    };
    Object.defineProperty(BatchJobDefinition.prototype, "retryStrategyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._retryStrategy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BatchJobDefinition.prototype, "timeout", {
        get: function () {
            return this.interpolationForAttribute('timeout');
        },
        set: function (value) {
            this._timeout = value;
        },
        enumerable: false,
        configurable: true
    });
    BatchJobDefinition.prototype.resetTimeout = function () {
        this._timeout = undefined;
    };
    Object.defineProperty(BatchJobDefinition.prototype, "timeoutInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeout;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    BatchJobDefinition.prototype.synthesizeAttributes = function () {
        return {
            container_properties: cdktf.stringToTerraform(this._containerProperties),
            name: cdktf.stringToTerraform(this._name),
            parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
            platform_capabilities: cdktf.listMapper(cdktf.stringToTerraform)(this._platformCapabilities),
            propagate_tags: cdktf.booleanToTerraform(this._propagateTags),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            type: cdktf.stringToTerraform(this._type),
            retry_strategy: cdktf.listMapper(batchJobDefinitionRetryStrategyToTerraform)(this._retryStrategy),
            timeout: cdktf.listMapper(batchJobDefinitionTimeoutToTerraform)(this._timeout)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    BatchJobDefinition.tfResourceType = "aws_batch_job_definition";
    return BatchJobDefinition;
}(cdktf.TerraformResource));
exports.BatchJobDefinition = BatchJobDefinition;
