"use strict";
// https://www.terraform.io/docs/providers/aws/r/sqs_queue.html
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
exports.SqsQueue = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html aws_sqs_queue}
*/
var SqsQueue = /** @class */ (function (_super) {
    __extends(SqsQueue, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html aws_sqs_queue} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SqsQueueConfig = {}
    */
    function SqsQueue(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_sqs_queue',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._contentBasedDeduplication = config.contentBasedDeduplication;
        _this._deduplicationScope = config.deduplicationScope;
        _this._delaySeconds = config.delaySeconds;
        _this._fifoQueue = config.fifoQueue;
        _this._fifoThroughputLimit = config.fifoThroughputLimit;
        _this._kmsDataKeyReusePeriodSeconds = config.kmsDataKeyReusePeriodSeconds;
        _this._kmsMasterKeyId = config.kmsMasterKeyId;
        _this._maxMessageSize = config.maxMessageSize;
        _this._messageRetentionSeconds = config.messageRetentionSeconds;
        _this._name = config.name;
        _this._namePrefix = config.namePrefix;
        _this._policy = config.policy;
        _this._receiveWaitTimeSeconds = config.receiveWaitTimeSeconds;
        _this._redrivePolicy = config.redrivePolicy;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._visibilityTimeoutSeconds = config.visibilityTimeoutSeconds;
        return _this;
    }
    Object.defineProperty(SqsQueue.prototype, "arn", {
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
    Object.defineProperty(SqsQueue.prototype, "contentBasedDeduplication", {
        get: function () {
            return this.getBooleanAttribute('content_based_deduplication');
        },
        set: function (value) {
            this._contentBasedDeduplication = value;
        },
        enumerable: false,
        configurable: true
    });
    SqsQueue.prototype.resetContentBasedDeduplication = function () {
        this._contentBasedDeduplication = undefined;
    };
    Object.defineProperty(SqsQueue.prototype, "contentBasedDeduplicationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contentBasedDeduplication;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SqsQueue.prototype, "deduplicationScope", {
        get: function () {
            return this.getStringAttribute('deduplication_scope');
        },
        set: function (value) {
            this._deduplicationScope = value;
        },
        enumerable: false,
        configurable: true
    });
    SqsQueue.prototype.resetDeduplicationScope = function () {
        this._deduplicationScope = undefined;
    };
    Object.defineProperty(SqsQueue.prototype, "deduplicationScopeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deduplicationScope;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SqsQueue.prototype, "delaySeconds", {
        get: function () {
            return this.getNumberAttribute('delay_seconds');
        },
        set: function (value) {
            this._delaySeconds = value;
        },
        enumerable: false,
        configurable: true
    });
    SqsQueue.prototype.resetDelaySeconds = function () {
        this._delaySeconds = undefined;
    };
    Object.defineProperty(SqsQueue.prototype, "delaySecondsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._delaySeconds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SqsQueue.prototype, "fifoQueue", {
        get: function () {
            return this.getBooleanAttribute('fifo_queue');
        },
        set: function (value) {
            this._fifoQueue = value;
        },
        enumerable: false,
        configurable: true
    });
    SqsQueue.prototype.resetFifoQueue = function () {
        this._fifoQueue = undefined;
    };
    Object.defineProperty(SqsQueue.prototype, "fifoQueueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fifoQueue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SqsQueue.prototype, "fifoThroughputLimit", {
        get: function () {
            return this.getStringAttribute('fifo_throughput_limit');
        },
        set: function (value) {
            this._fifoThroughputLimit = value;
        },
        enumerable: false,
        configurable: true
    });
    SqsQueue.prototype.resetFifoThroughputLimit = function () {
        this._fifoThroughputLimit = undefined;
    };
    Object.defineProperty(SqsQueue.prototype, "fifoThroughputLimitInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fifoThroughputLimit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SqsQueue.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SqsQueue.prototype, "kmsDataKeyReusePeriodSeconds", {
        get: function () {
            return this.getNumberAttribute('kms_data_key_reuse_period_seconds');
        },
        set: function (value) {
            this._kmsDataKeyReusePeriodSeconds = value;
        },
        enumerable: false,
        configurable: true
    });
    SqsQueue.prototype.resetKmsDataKeyReusePeriodSeconds = function () {
        this._kmsDataKeyReusePeriodSeconds = undefined;
    };
    Object.defineProperty(SqsQueue.prototype, "kmsDataKeyReusePeriodSecondsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kmsDataKeyReusePeriodSeconds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SqsQueue.prototype, "kmsMasterKeyId", {
        get: function () {
            return this.getStringAttribute('kms_master_key_id');
        },
        set: function (value) {
            this._kmsMasterKeyId = value;
        },
        enumerable: false,
        configurable: true
    });
    SqsQueue.prototype.resetKmsMasterKeyId = function () {
        this._kmsMasterKeyId = undefined;
    };
    Object.defineProperty(SqsQueue.prototype, "kmsMasterKeyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kmsMasterKeyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SqsQueue.prototype, "maxMessageSize", {
        get: function () {
            return this.getNumberAttribute('max_message_size');
        },
        set: function (value) {
            this._maxMessageSize = value;
        },
        enumerable: false,
        configurable: true
    });
    SqsQueue.prototype.resetMaxMessageSize = function () {
        this._maxMessageSize = undefined;
    };
    Object.defineProperty(SqsQueue.prototype, "maxMessageSizeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxMessageSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SqsQueue.prototype, "messageRetentionSeconds", {
        get: function () {
            return this.getNumberAttribute('message_retention_seconds');
        },
        set: function (value) {
            this._messageRetentionSeconds = value;
        },
        enumerable: false,
        configurable: true
    });
    SqsQueue.prototype.resetMessageRetentionSeconds = function () {
        this._messageRetentionSeconds = undefined;
    };
    Object.defineProperty(SqsQueue.prototype, "messageRetentionSecondsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._messageRetentionSeconds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SqsQueue.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    SqsQueue.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(SqsQueue.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SqsQueue.prototype, "namePrefix", {
        get: function () {
            return this.getStringAttribute('name_prefix');
        },
        set: function (value) {
            this._namePrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    SqsQueue.prototype.resetNamePrefix = function () {
        this._namePrefix = undefined;
    };
    Object.defineProperty(SqsQueue.prototype, "namePrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._namePrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SqsQueue.prototype, "policy", {
        get: function () {
            return this.getStringAttribute('policy');
        },
        set: function (value) {
            this._policy = value;
        },
        enumerable: false,
        configurable: true
    });
    SqsQueue.prototype.resetPolicy = function () {
        this._policy = undefined;
    };
    Object.defineProperty(SqsQueue.prototype, "policyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SqsQueue.prototype, "receiveWaitTimeSeconds", {
        get: function () {
            return this.getNumberAttribute('receive_wait_time_seconds');
        },
        set: function (value) {
            this._receiveWaitTimeSeconds = value;
        },
        enumerable: false,
        configurable: true
    });
    SqsQueue.prototype.resetReceiveWaitTimeSeconds = function () {
        this._receiveWaitTimeSeconds = undefined;
    };
    Object.defineProperty(SqsQueue.prototype, "receiveWaitTimeSecondsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._receiveWaitTimeSeconds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SqsQueue.prototype, "redrivePolicy", {
        get: function () {
            return this.getStringAttribute('redrive_policy');
        },
        set: function (value) {
            this._redrivePolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    SqsQueue.prototype.resetRedrivePolicy = function () {
        this._redrivePolicy = undefined;
    };
    Object.defineProperty(SqsQueue.prototype, "redrivePolicyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._redrivePolicy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SqsQueue.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    SqsQueue.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(SqsQueue.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SqsQueue.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    SqsQueue.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(SqsQueue.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SqsQueue.prototype, "url", {
        // url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SqsQueue.prototype, "visibilityTimeoutSeconds", {
        get: function () {
            return this.getNumberAttribute('visibility_timeout_seconds');
        },
        set: function (value) {
            this._visibilityTimeoutSeconds = value;
        },
        enumerable: false,
        configurable: true
    });
    SqsQueue.prototype.resetVisibilityTimeoutSeconds = function () {
        this._visibilityTimeoutSeconds = undefined;
    };
    Object.defineProperty(SqsQueue.prototype, "visibilityTimeoutSecondsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._visibilityTimeoutSeconds;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SqsQueue.prototype.synthesizeAttributes = function () {
        return {
            content_based_deduplication: cdktf.booleanToTerraform(this._contentBasedDeduplication),
            deduplication_scope: cdktf.stringToTerraform(this._deduplicationScope),
            delay_seconds: cdktf.numberToTerraform(this._delaySeconds),
            fifo_queue: cdktf.booleanToTerraform(this._fifoQueue),
            fifo_throughput_limit: cdktf.stringToTerraform(this._fifoThroughputLimit),
            kms_data_key_reuse_period_seconds: cdktf.numberToTerraform(this._kmsDataKeyReusePeriodSeconds),
            kms_master_key_id: cdktf.stringToTerraform(this._kmsMasterKeyId),
            max_message_size: cdktf.numberToTerraform(this._maxMessageSize),
            message_retention_seconds: cdktf.numberToTerraform(this._messageRetentionSeconds),
            name: cdktf.stringToTerraform(this._name),
            name_prefix: cdktf.stringToTerraform(this._namePrefix),
            policy: cdktf.stringToTerraform(this._policy),
            receive_wait_time_seconds: cdktf.numberToTerraform(this._receiveWaitTimeSeconds),
            redrive_policy: cdktf.stringToTerraform(this._redrivePolicy),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            visibility_timeout_seconds: cdktf.numberToTerraform(this._visibilityTimeoutSeconds)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SqsQueue.tfResourceType = "aws_sqs_queue";
    return SqsQueue;
}(cdktf.TerraformResource));
exports.SqsQueue = SqsQueue;
