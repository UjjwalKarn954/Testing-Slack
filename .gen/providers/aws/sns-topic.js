"use strict";
// https://www.terraform.io/docs/providers/aws/r/sns_topic.html
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
exports.SnsTopic = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html aws_sns_topic}
*/
var SnsTopic = /** @class */ (function (_super) {
    __extends(SnsTopic, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html aws_sns_topic} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SnsTopicConfig = {}
    */
    function SnsTopic(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_sns_topic',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._applicationFailureFeedbackRoleArn = config.applicationFailureFeedbackRoleArn;
        _this._applicationSuccessFeedbackRoleArn = config.applicationSuccessFeedbackRoleArn;
        _this._applicationSuccessFeedbackSampleRate = config.applicationSuccessFeedbackSampleRate;
        _this._contentBasedDeduplication = config.contentBasedDeduplication;
        _this._deliveryPolicy = config.deliveryPolicy;
        _this._displayName = config.displayName;
        _this._fifoTopic = config.fifoTopic;
        _this._firehoseFailureFeedbackRoleArn = config.firehoseFailureFeedbackRoleArn;
        _this._firehoseSuccessFeedbackRoleArn = config.firehoseSuccessFeedbackRoleArn;
        _this._firehoseSuccessFeedbackSampleRate = config.firehoseSuccessFeedbackSampleRate;
        _this._httpFailureFeedbackRoleArn = config.httpFailureFeedbackRoleArn;
        _this._httpSuccessFeedbackRoleArn = config.httpSuccessFeedbackRoleArn;
        _this._httpSuccessFeedbackSampleRate = config.httpSuccessFeedbackSampleRate;
        _this._kmsMasterKeyId = config.kmsMasterKeyId;
        _this._lambdaFailureFeedbackRoleArn = config.lambdaFailureFeedbackRoleArn;
        _this._lambdaSuccessFeedbackRoleArn = config.lambdaSuccessFeedbackRoleArn;
        _this._lambdaSuccessFeedbackSampleRate = config.lambdaSuccessFeedbackSampleRate;
        _this._name = config.name;
        _this._namePrefix = config.namePrefix;
        _this._policy = config.policy;
        _this._sqsFailureFeedbackRoleArn = config.sqsFailureFeedbackRoleArn;
        _this._sqsSuccessFeedbackRoleArn = config.sqsSuccessFeedbackRoleArn;
        _this._sqsSuccessFeedbackSampleRate = config.sqsSuccessFeedbackSampleRate;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(SnsTopic.prototype, "applicationFailureFeedbackRoleArn", {
        get: function () {
            return this.getStringAttribute('application_failure_feedback_role_arn');
        },
        set: function (value) {
            this._applicationFailureFeedbackRoleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    SnsTopic.prototype.resetApplicationFailureFeedbackRoleArn = function () {
        this._applicationFailureFeedbackRoleArn = undefined;
    };
    Object.defineProperty(SnsTopic.prototype, "applicationFailureFeedbackRoleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._applicationFailureFeedbackRoleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsTopic.prototype, "applicationSuccessFeedbackRoleArn", {
        get: function () {
            return this.getStringAttribute('application_success_feedback_role_arn');
        },
        set: function (value) {
            this._applicationSuccessFeedbackRoleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    SnsTopic.prototype.resetApplicationSuccessFeedbackRoleArn = function () {
        this._applicationSuccessFeedbackRoleArn = undefined;
    };
    Object.defineProperty(SnsTopic.prototype, "applicationSuccessFeedbackRoleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._applicationSuccessFeedbackRoleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsTopic.prototype, "applicationSuccessFeedbackSampleRate", {
        get: function () {
            return this.getNumberAttribute('application_success_feedback_sample_rate');
        },
        set: function (value) {
            this._applicationSuccessFeedbackSampleRate = value;
        },
        enumerable: false,
        configurable: true
    });
    SnsTopic.prototype.resetApplicationSuccessFeedbackSampleRate = function () {
        this._applicationSuccessFeedbackSampleRate = undefined;
    };
    Object.defineProperty(SnsTopic.prototype, "applicationSuccessFeedbackSampleRateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._applicationSuccessFeedbackSampleRate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsTopic.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsTopic.prototype, "contentBasedDeduplication", {
        get: function () {
            return this.getBooleanAttribute('content_based_deduplication');
        },
        set: function (value) {
            this._contentBasedDeduplication = value;
        },
        enumerable: false,
        configurable: true
    });
    SnsTopic.prototype.resetContentBasedDeduplication = function () {
        this._contentBasedDeduplication = undefined;
    };
    Object.defineProperty(SnsTopic.prototype, "contentBasedDeduplicationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contentBasedDeduplication;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsTopic.prototype, "deliveryPolicy", {
        get: function () {
            return this.getStringAttribute('delivery_policy');
        },
        set: function (value) {
            this._deliveryPolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    SnsTopic.prototype.resetDeliveryPolicy = function () {
        this._deliveryPolicy = undefined;
    };
    Object.defineProperty(SnsTopic.prototype, "deliveryPolicyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deliveryPolicy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsTopic.prototype, "displayName", {
        get: function () {
            return this.getStringAttribute('display_name');
        },
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    SnsTopic.prototype.resetDisplayName = function () {
        this._displayName = undefined;
    };
    Object.defineProperty(SnsTopic.prototype, "displayNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._displayName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsTopic.prototype, "fifoTopic", {
        get: function () {
            return this.getBooleanAttribute('fifo_topic');
        },
        set: function (value) {
            this._fifoTopic = value;
        },
        enumerable: false,
        configurable: true
    });
    SnsTopic.prototype.resetFifoTopic = function () {
        this._fifoTopic = undefined;
    };
    Object.defineProperty(SnsTopic.prototype, "fifoTopicInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fifoTopic;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsTopic.prototype, "firehoseFailureFeedbackRoleArn", {
        get: function () {
            return this.getStringAttribute('firehose_failure_feedback_role_arn');
        },
        set: function (value) {
            this._firehoseFailureFeedbackRoleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    SnsTopic.prototype.resetFirehoseFailureFeedbackRoleArn = function () {
        this._firehoseFailureFeedbackRoleArn = undefined;
    };
    Object.defineProperty(SnsTopic.prototype, "firehoseFailureFeedbackRoleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._firehoseFailureFeedbackRoleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsTopic.prototype, "firehoseSuccessFeedbackRoleArn", {
        get: function () {
            return this.getStringAttribute('firehose_success_feedback_role_arn');
        },
        set: function (value) {
            this._firehoseSuccessFeedbackRoleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    SnsTopic.prototype.resetFirehoseSuccessFeedbackRoleArn = function () {
        this._firehoseSuccessFeedbackRoleArn = undefined;
    };
    Object.defineProperty(SnsTopic.prototype, "firehoseSuccessFeedbackRoleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._firehoseSuccessFeedbackRoleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsTopic.prototype, "firehoseSuccessFeedbackSampleRate", {
        get: function () {
            return this.getNumberAttribute('firehose_success_feedback_sample_rate');
        },
        set: function (value) {
            this._firehoseSuccessFeedbackSampleRate = value;
        },
        enumerable: false,
        configurable: true
    });
    SnsTopic.prototype.resetFirehoseSuccessFeedbackSampleRate = function () {
        this._firehoseSuccessFeedbackSampleRate = undefined;
    };
    Object.defineProperty(SnsTopic.prototype, "firehoseSuccessFeedbackSampleRateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._firehoseSuccessFeedbackSampleRate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsTopic.prototype, "httpFailureFeedbackRoleArn", {
        get: function () {
            return this.getStringAttribute('http_failure_feedback_role_arn');
        },
        set: function (value) {
            this._httpFailureFeedbackRoleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    SnsTopic.prototype.resetHttpFailureFeedbackRoleArn = function () {
        this._httpFailureFeedbackRoleArn = undefined;
    };
    Object.defineProperty(SnsTopic.prototype, "httpFailureFeedbackRoleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._httpFailureFeedbackRoleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsTopic.prototype, "httpSuccessFeedbackRoleArn", {
        get: function () {
            return this.getStringAttribute('http_success_feedback_role_arn');
        },
        set: function (value) {
            this._httpSuccessFeedbackRoleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    SnsTopic.prototype.resetHttpSuccessFeedbackRoleArn = function () {
        this._httpSuccessFeedbackRoleArn = undefined;
    };
    Object.defineProperty(SnsTopic.prototype, "httpSuccessFeedbackRoleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._httpSuccessFeedbackRoleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsTopic.prototype, "httpSuccessFeedbackSampleRate", {
        get: function () {
            return this.getNumberAttribute('http_success_feedback_sample_rate');
        },
        set: function (value) {
            this._httpSuccessFeedbackSampleRate = value;
        },
        enumerable: false,
        configurable: true
    });
    SnsTopic.prototype.resetHttpSuccessFeedbackSampleRate = function () {
        this._httpSuccessFeedbackSampleRate = undefined;
    };
    Object.defineProperty(SnsTopic.prototype, "httpSuccessFeedbackSampleRateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._httpSuccessFeedbackSampleRate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsTopic.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsTopic.prototype, "kmsMasterKeyId", {
        get: function () {
            return this.getStringAttribute('kms_master_key_id');
        },
        set: function (value) {
            this._kmsMasterKeyId = value;
        },
        enumerable: false,
        configurable: true
    });
    SnsTopic.prototype.resetKmsMasterKeyId = function () {
        this._kmsMasterKeyId = undefined;
    };
    Object.defineProperty(SnsTopic.prototype, "kmsMasterKeyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kmsMasterKeyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsTopic.prototype, "lambdaFailureFeedbackRoleArn", {
        get: function () {
            return this.getStringAttribute('lambda_failure_feedback_role_arn');
        },
        set: function (value) {
            this._lambdaFailureFeedbackRoleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    SnsTopic.prototype.resetLambdaFailureFeedbackRoleArn = function () {
        this._lambdaFailureFeedbackRoleArn = undefined;
    };
    Object.defineProperty(SnsTopic.prototype, "lambdaFailureFeedbackRoleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._lambdaFailureFeedbackRoleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsTopic.prototype, "lambdaSuccessFeedbackRoleArn", {
        get: function () {
            return this.getStringAttribute('lambda_success_feedback_role_arn');
        },
        set: function (value) {
            this._lambdaSuccessFeedbackRoleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    SnsTopic.prototype.resetLambdaSuccessFeedbackRoleArn = function () {
        this._lambdaSuccessFeedbackRoleArn = undefined;
    };
    Object.defineProperty(SnsTopic.prototype, "lambdaSuccessFeedbackRoleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._lambdaSuccessFeedbackRoleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsTopic.prototype, "lambdaSuccessFeedbackSampleRate", {
        get: function () {
            return this.getNumberAttribute('lambda_success_feedback_sample_rate');
        },
        set: function (value) {
            this._lambdaSuccessFeedbackSampleRate = value;
        },
        enumerable: false,
        configurable: true
    });
    SnsTopic.prototype.resetLambdaSuccessFeedbackSampleRate = function () {
        this._lambdaSuccessFeedbackSampleRate = undefined;
    };
    Object.defineProperty(SnsTopic.prototype, "lambdaSuccessFeedbackSampleRateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._lambdaSuccessFeedbackSampleRate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsTopic.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    SnsTopic.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(SnsTopic.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsTopic.prototype, "namePrefix", {
        get: function () {
            return this.getStringAttribute('name_prefix');
        },
        set: function (value) {
            this._namePrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    SnsTopic.prototype.resetNamePrefix = function () {
        this._namePrefix = undefined;
    };
    Object.defineProperty(SnsTopic.prototype, "namePrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._namePrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsTopic.prototype, "owner", {
        // owner - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsTopic.prototype, "policy", {
        get: function () {
            return this.getStringAttribute('policy');
        },
        set: function (value) {
            this._policy = value;
        },
        enumerable: false,
        configurable: true
    });
    SnsTopic.prototype.resetPolicy = function () {
        this._policy = undefined;
    };
    Object.defineProperty(SnsTopic.prototype, "policyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsTopic.prototype, "sqsFailureFeedbackRoleArn", {
        get: function () {
            return this.getStringAttribute('sqs_failure_feedback_role_arn');
        },
        set: function (value) {
            this._sqsFailureFeedbackRoleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    SnsTopic.prototype.resetSqsFailureFeedbackRoleArn = function () {
        this._sqsFailureFeedbackRoleArn = undefined;
    };
    Object.defineProperty(SnsTopic.prototype, "sqsFailureFeedbackRoleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sqsFailureFeedbackRoleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsTopic.prototype, "sqsSuccessFeedbackRoleArn", {
        get: function () {
            return this.getStringAttribute('sqs_success_feedback_role_arn');
        },
        set: function (value) {
            this._sqsSuccessFeedbackRoleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    SnsTopic.prototype.resetSqsSuccessFeedbackRoleArn = function () {
        this._sqsSuccessFeedbackRoleArn = undefined;
    };
    Object.defineProperty(SnsTopic.prototype, "sqsSuccessFeedbackRoleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sqsSuccessFeedbackRoleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsTopic.prototype, "sqsSuccessFeedbackSampleRate", {
        get: function () {
            return this.getNumberAttribute('sqs_success_feedback_sample_rate');
        },
        set: function (value) {
            this._sqsSuccessFeedbackSampleRate = value;
        },
        enumerable: false,
        configurable: true
    });
    SnsTopic.prototype.resetSqsSuccessFeedbackSampleRate = function () {
        this._sqsSuccessFeedbackSampleRate = undefined;
    };
    Object.defineProperty(SnsTopic.prototype, "sqsSuccessFeedbackSampleRateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sqsSuccessFeedbackSampleRate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsTopic.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    SnsTopic.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(SnsTopic.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnsTopic.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    SnsTopic.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(SnsTopic.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SnsTopic.prototype.synthesizeAttributes = function () {
        return {
            application_failure_feedback_role_arn: cdktf.stringToTerraform(this._applicationFailureFeedbackRoleArn),
            application_success_feedback_role_arn: cdktf.stringToTerraform(this._applicationSuccessFeedbackRoleArn),
            application_success_feedback_sample_rate: cdktf.numberToTerraform(this._applicationSuccessFeedbackSampleRate),
            content_based_deduplication: cdktf.booleanToTerraform(this._contentBasedDeduplication),
            delivery_policy: cdktf.stringToTerraform(this._deliveryPolicy),
            display_name: cdktf.stringToTerraform(this._displayName),
            fifo_topic: cdktf.booleanToTerraform(this._fifoTopic),
            firehose_failure_feedback_role_arn: cdktf.stringToTerraform(this._firehoseFailureFeedbackRoleArn),
            firehose_success_feedback_role_arn: cdktf.stringToTerraform(this._firehoseSuccessFeedbackRoleArn),
            firehose_success_feedback_sample_rate: cdktf.numberToTerraform(this._firehoseSuccessFeedbackSampleRate),
            http_failure_feedback_role_arn: cdktf.stringToTerraform(this._httpFailureFeedbackRoleArn),
            http_success_feedback_role_arn: cdktf.stringToTerraform(this._httpSuccessFeedbackRoleArn),
            http_success_feedback_sample_rate: cdktf.numberToTerraform(this._httpSuccessFeedbackSampleRate),
            kms_master_key_id: cdktf.stringToTerraform(this._kmsMasterKeyId),
            lambda_failure_feedback_role_arn: cdktf.stringToTerraform(this._lambdaFailureFeedbackRoleArn),
            lambda_success_feedback_role_arn: cdktf.stringToTerraform(this._lambdaSuccessFeedbackRoleArn),
            lambda_success_feedback_sample_rate: cdktf.numberToTerraform(this._lambdaSuccessFeedbackSampleRate),
            name: cdktf.stringToTerraform(this._name),
            name_prefix: cdktf.stringToTerraform(this._namePrefix),
            policy: cdktf.stringToTerraform(this._policy),
            sqs_failure_feedback_role_arn: cdktf.stringToTerraform(this._sqsFailureFeedbackRoleArn),
            sqs_success_feedback_role_arn: cdktf.stringToTerraform(this._sqsSuccessFeedbackRoleArn),
            sqs_success_feedback_sample_rate: cdktf.numberToTerraform(this._sqsSuccessFeedbackSampleRate),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SnsTopic.tfResourceType = "aws_sns_topic";
    return SnsTopic;
}(cdktf.TerraformResource));
exports.SnsTopic = SnsTopic;
