"use strict";
// https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html
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
exports.IotTopicRule = void 0;
var cdktf = require("cdktf");
function iotTopicRuleCloudwatchAlarmToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        alarm_name: cdktf.stringToTerraform(struct.alarmName),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        state_reason: cdktf.stringToTerraform(struct.stateReason),
        state_value: cdktf.stringToTerraform(struct.stateValue)
    };
}
function iotTopicRuleCloudwatchMetricToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        metric_name: cdktf.stringToTerraform(struct.metricName),
        metric_namespace: cdktf.stringToTerraform(struct.metricNamespace),
        metric_timestamp: cdktf.stringToTerraform(struct.metricTimestamp),
        metric_unit: cdktf.stringToTerraform(struct.metricUnit),
        metric_value: cdktf.stringToTerraform(struct.metricValue),
        role_arn: cdktf.stringToTerraform(struct.roleArn)
    };
}
function iotTopicRuleDynamodbToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        hash_key_field: cdktf.stringToTerraform(struct.hashKeyField),
        hash_key_type: cdktf.stringToTerraform(struct.hashKeyType),
        hash_key_value: cdktf.stringToTerraform(struct.hashKeyValue),
        operation: cdktf.stringToTerraform(struct.operation),
        payload_field: cdktf.stringToTerraform(struct.payloadField),
        range_key_field: cdktf.stringToTerraform(struct.rangeKeyField),
        range_key_type: cdktf.stringToTerraform(struct.rangeKeyType),
        range_key_value: cdktf.stringToTerraform(struct.rangeKeyValue),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        table_name: cdktf.stringToTerraform(struct.tableName)
    };
}
function iotTopicRuleDynamodbv2PutItemToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        table_name: cdktf.stringToTerraform(struct.tableName)
    };
}
function iotTopicRuleDynamodbv2ToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        put_item: cdktf.listMapper(iotTopicRuleDynamodbv2PutItemToTerraform)(struct.putItem)
    };
}
function iotTopicRuleElasticsearchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        endpoint: cdktf.stringToTerraform(struct.endpoint),
        id: cdktf.stringToTerraform(struct.id),
        index: cdktf.stringToTerraform(struct.index),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function iotTopicRuleErrorActionCloudwatchAlarmToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        alarm_name: cdktf.stringToTerraform(struct.alarmName),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        state_reason: cdktf.stringToTerraform(struct.stateReason),
        state_value: cdktf.stringToTerraform(struct.stateValue)
    };
}
function iotTopicRuleErrorActionCloudwatchMetricToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        metric_name: cdktf.stringToTerraform(struct.metricName),
        metric_namespace: cdktf.stringToTerraform(struct.metricNamespace),
        metric_timestamp: cdktf.stringToTerraform(struct.metricTimestamp),
        metric_unit: cdktf.stringToTerraform(struct.metricUnit),
        metric_value: cdktf.stringToTerraform(struct.metricValue),
        role_arn: cdktf.stringToTerraform(struct.roleArn)
    };
}
function iotTopicRuleErrorActionDynamodbToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        hash_key_field: cdktf.stringToTerraform(struct.hashKeyField),
        hash_key_type: cdktf.stringToTerraform(struct.hashKeyType),
        hash_key_value: cdktf.stringToTerraform(struct.hashKeyValue),
        operation: cdktf.stringToTerraform(struct.operation),
        payload_field: cdktf.stringToTerraform(struct.payloadField),
        range_key_field: cdktf.stringToTerraform(struct.rangeKeyField),
        range_key_type: cdktf.stringToTerraform(struct.rangeKeyType),
        range_key_value: cdktf.stringToTerraform(struct.rangeKeyValue),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        table_name: cdktf.stringToTerraform(struct.tableName)
    };
}
function iotTopicRuleErrorActionDynamodbv2PutItemToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        table_name: cdktf.stringToTerraform(struct.tableName)
    };
}
function iotTopicRuleErrorActionDynamodbv2ToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        put_item: cdktf.listMapper(iotTopicRuleErrorActionDynamodbv2PutItemToTerraform)(struct.putItem)
    };
}
function iotTopicRuleErrorActionElasticsearchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        endpoint: cdktf.stringToTerraform(struct.endpoint),
        id: cdktf.stringToTerraform(struct.id),
        index: cdktf.stringToTerraform(struct.index),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function iotTopicRuleErrorActionFirehoseToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        delivery_stream_name: cdktf.stringToTerraform(struct.deliveryStreamName),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        separator: cdktf.stringToTerraform(struct.separator)
    };
}
function iotTopicRuleErrorActionIotAnalyticsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        channel_name: cdktf.stringToTerraform(struct.channelName),
        role_arn: cdktf.stringToTerraform(struct.roleArn)
    };
}
function iotTopicRuleErrorActionIotEventsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        input_name: cdktf.stringToTerraform(struct.inputName),
        message_id: cdktf.stringToTerraform(struct.messageId),
        role_arn: cdktf.stringToTerraform(struct.roleArn)
    };
}
function iotTopicRuleErrorActionKinesisToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        partition_key: cdktf.stringToTerraform(struct.partitionKey),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        stream_name: cdktf.stringToTerraform(struct.streamName)
    };
}
function iotTopicRuleErrorActionLambdaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        function_arn: cdktf.stringToTerraform(struct.functionArn)
    };
}
function iotTopicRuleErrorActionRepublishToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        qos: cdktf.numberToTerraform(struct.qos),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        topic: cdktf.stringToTerraform(struct.topic)
    };
}
function iotTopicRuleErrorActionS3ToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket_name: cdktf.stringToTerraform(struct.bucketName),
        key: cdktf.stringToTerraform(struct.key),
        role_arn: cdktf.stringToTerraform(struct.roleArn)
    };
}
function iotTopicRuleErrorActionSnsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        message_format: cdktf.stringToTerraform(struct.messageFormat),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        target_arn: cdktf.stringToTerraform(struct.targetArn)
    };
}
function iotTopicRuleErrorActionSqsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        queue_url: cdktf.stringToTerraform(struct.queueUrl),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        use_base64: cdktf.booleanToTerraform(struct.useBase64)
    };
}
function iotTopicRuleErrorActionStepFunctionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        execution_name_prefix: cdktf.stringToTerraform(struct.executionNamePrefix),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        state_machine_name: cdktf.stringToTerraform(struct.stateMachineName)
    };
}
function iotTopicRuleErrorActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cloudwatch_alarm: cdktf.listMapper(iotTopicRuleErrorActionCloudwatchAlarmToTerraform)(struct.cloudwatchAlarm),
        cloudwatch_metric: cdktf.listMapper(iotTopicRuleErrorActionCloudwatchMetricToTerraform)(struct.cloudwatchMetric),
        dynamodb: cdktf.listMapper(iotTopicRuleErrorActionDynamodbToTerraform)(struct.dynamodb),
        dynamodbv2: cdktf.listMapper(iotTopicRuleErrorActionDynamodbv2ToTerraform)(struct.dynamodbv2),
        elasticsearch: cdktf.listMapper(iotTopicRuleErrorActionElasticsearchToTerraform)(struct.elasticsearch),
        firehose: cdktf.listMapper(iotTopicRuleErrorActionFirehoseToTerraform)(struct.firehose),
        iot_analytics: cdktf.listMapper(iotTopicRuleErrorActionIotAnalyticsToTerraform)(struct.iotAnalytics),
        iot_events: cdktf.listMapper(iotTopicRuleErrorActionIotEventsToTerraform)(struct.iotEvents),
        kinesis: cdktf.listMapper(iotTopicRuleErrorActionKinesisToTerraform)(struct.kinesis),
        lambda: cdktf.listMapper(iotTopicRuleErrorActionLambdaToTerraform)(struct.lambda),
        republish: cdktf.listMapper(iotTopicRuleErrorActionRepublishToTerraform)(struct.republish),
        s3: cdktf.listMapper(iotTopicRuleErrorActionS3ToTerraform)(struct.s3),
        sns: cdktf.listMapper(iotTopicRuleErrorActionSnsToTerraform)(struct.sns),
        sqs: cdktf.listMapper(iotTopicRuleErrorActionSqsToTerraform)(struct.sqs),
        step_functions: cdktf.listMapper(iotTopicRuleErrorActionStepFunctionsToTerraform)(struct.stepFunctions)
    };
}
function iotTopicRuleFirehoseToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        delivery_stream_name: cdktf.stringToTerraform(struct.deliveryStreamName),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        separator: cdktf.stringToTerraform(struct.separator)
    };
}
function iotTopicRuleIotAnalyticsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        channel_name: cdktf.stringToTerraform(struct.channelName),
        role_arn: cdktf.stringToTerraform(struct.roleArn)
    };
}
function iotTopicRuleIotEventsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        input_name: cdktf.stringToTerraform(struct.inputName),
        message_id: cdktf.stringToTerraform(struct.messageId),
        role_arn: cdktf.stringToTerraform(struct.roleArn)
    };
}
function iotTopicRuleKinesisToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        partition_key: cdktf.stringToTerraform(struct.partitionKey),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        stream_name: cdktf.stringToTerraform(struct.streamName)
    };
}
function iotTopicRuleLambdaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        function_arn: cdktf.stringToTerraform(struct.functionArn)
    };
}
function iotTopicRuleRepublishToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        qos: cdktf.numberToTerraform(struct.qos),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        topic: cdktf.stringToTerraform(struct.topic)
    };
}
function iotTopicRuleS3ToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket_name: cdktf.stringToTerraform(struct.bucketName),
        key: cdktf.stringToTerraform(struct.key),
        role_arn: cdktf.stringToTerraform(struct.roleArn)
    };
}
function iotTopicRuleSnsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        message_format: cdktf.stringToTerraform(struct.messageFormat),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        target_arn: cdktf.stringToTerraform(struct.targetArn)
    };
}
function iotTopicRuleSqsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        queue_url: cdktf.stringToTerraform(struct.queueUrl),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        use_base64: cdktf.booleanToTerraform(struct.useBase64)
    };
}
function iotTopicRuleStepFunctionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        execution_name_prefix: cdktf.stringToTerraform(struct.executionNamePrefix),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        state_machine_name: cdktf.stringToTerraform(struct.stateMachineName)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html aws_iot_topic_rule}
*/
var IotTopicRule = /** @class */ (function (_super) {
    __extends(IotTopicRule, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html aws_iot_topic_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotTopicRuleConfig
    */
    function IotTopicRule(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_iot_topic_rule',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._description = config.description;
        _this._enabled = config.enabled;
        _this._name = config.name;
        _this._sql = config.sql;
        _this._sqlVersion = config.sqlVersion;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._cloudwatchAlarm = config.cloudwatchAlarm;
        _this._cloudwatchMetric = config.cloudwatchMetric;
        _this._dynamodb = config.dynamodb;
        _this._dynamodbv2 = config.dynamodbv2;
        _this._elasticsearch = config.elasticsearch;
        _this._errorAction = config.errorAction;
        _this._firehose = config.firehose;
        _this._iotAnalytics = config.iotAnalytics;
        _this._iotEvents = config.iotEvents;
        _this._kinesis = config.kinesis;
        _this._lambda = config.lambda;
        _this._republish = config.republish;
        _this._s3 = config.s3;
        _this._sns = config.sns;
        _this._sqs = config.sqs;
        _this._stepFunctions = config.stepFunctions;
        return _this;
    }
    Object.defineProperty(IotTopicRule.prototype, "arn", {
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
    Object.defineProperty(IotTopicRule.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    IotTopicRule.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(IotTopicRule.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotTopicRule.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotTopicRule.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotTopicRule.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotTopicRule.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotTopicRule.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotTopicRule.prototype, "sql", {
        get: function () {
            return this.getStringAttribute('sql');
        },
        set: function (value) {
            this._sql = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotTopicRule.prototype, "sqlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sql;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotTopicRule.prototype, "sqlVersion", {
        get: function () {
            return this.getStringAttribute('sql_version');
        },
        set: function (value) {
            this._sqlVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotTopicRule.prototype, "sqlVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sqlVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotTopicRule.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    IotTopicRule.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(IotTopicRule.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotTopicRule.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    IotTopicRule.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(IotTopicRule.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotTopicRule.prototype, "cloudwatchAlarm", {
        get: function () {
            return this.interpolationForAttribute('cloudwatch_alarm');
        },
        set: function (value) {
            this._cloudwatchAlarm = value;
        },
        enumerable: false,
        configurable: true
    });
    IotTopicRule.prototype.resetCloudwatchAlarm = function () {
        this._cloudwatchAlarm = undefined;
    };
    Object.defineProperty(IotTopicRule.prototype, "cloudwatchAlarmInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cloudwatchAlarm;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotTopicRule.prototype, "cloudwatchMetric", {
        get: function () {
            return this.interpolationForAttribute('cloudwatch_metric');
        },
        set: function (value) {
            this._cloudwatchMetric = value;
        },
        enumerable: false,
        configurable: true
    });
    IotTopicRule.prototype.resetCloudwatchMetric = function () {
        this._cloudwatchMetric = undefined;
    };
    Object.defineProperty(IotTopicRule.prototype, "cloudwatchMetricInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cloudwatchMetric;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotTopicRule.prototype, "dynamodb", {
        get: function () {
            return this.interpolationForAttribute('dynamodb');
        },
        set: function (value) {
            this._dynamodb = value;
        },
        enumerable: false,
        configurable: true
    });
    IotTopicRule.prototype.resetDynamodb = function () {
        this._dynamodb = undefined;
    };
    Object.defineProperty(IotTopicRule.prototype, "dynamodbInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dynamodb;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotTopicRule.prototype, "dynamodbv2", {
        get: function () {
            return this.interpolationForAttribute('dynamodbv2');
        },
        set: function (value) {
            this._dynamodbv2 = value;
        },
        enumerable: false,
        configurable: true
    });
    IotTopicRule.prototype.resetDynamodbv2 = function () {
        this._dynamodbv2 = undefined;
    };
    Object.defineProperty(IotTopicRule.prototype, "dynamodbv2Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dynamodbv2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotTopicRule.prototype, "elasticsearch", {
        get: function () {
            return this.interpolationForAttribute('elasticsearch');
        },
        set: function (value) {
            this._elasticsearch = value;
        },
        enumerable: false,
        configurable: true
    });
    IotTopicRule.prototype.resetElasticsearch = function () {
        this._elasticsearch = undefined;
    };
    Object.defineProperty(IotTopicRule.prototype, "elasticsearchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._elasticsearch;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotTopicRule.prototype, "errorAction", {
        get: function () {
            return this.interpolationForAttribute('error_action');
        },
        set: function (value) {
            this._errorAction = value;
        },
        enumerable: false,
        configurable: true
    });
    IotTopicRule.prototype.resetErrorAction = function () {
        this._errorAction = undefined;
    };
    Object.defineProperty(IotTopicRule.prototype, "errorActionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._errorAction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotTopicRule.prototype, "firehose", {
        get: function () {
            return this.interpolationForAttribute('firehose');
        },
        set: function (value) {
            this._firehose = value;
        },
        enumerable: false,
        configurable: true
    });
    IotTopicRule.prototype.resetFirehose = function () {
        this._firehose = undefined;
    };
    Object.defineProperty(IotTopicRule.prototype, "firehoseInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._firehose;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotTopicRule.prototype, "iotAnalytics", {
        get: function () {
            return this.interpolationForAttribute('iot_analytics');
        },
        set: function (value) {
            this._iotAnalytics = value;
        },
        enumerable: false,
        configurable: true
    });
    IotTopicRule.prototype.resetIotAnalytics = function () {
        this._iotAnalytics = undefined;
    };
    Object.defineProperty(IotTopicRule.prototype, "iotAnalyticsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._iotAnalytics;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotTopicRule.prototype, "iotEvents", {
        get: function () {
            return this.interpolationForAttribute('iot_events');
        },
        set: function (value) {
            this._iotEvents = value;
        },
        enumerable: false,
        configurable: true
    });
    IotTopicRule.prototype.resetIotEvents = function () {
        this._iotEvents = undefined;
    };
    Object.defineProperty(IotTopicRule.prototype, "iotEventsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._iotEvents;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotTopicRule.prototype, "kinesis", {
        get: function () {
            return this.interpolationForAttribute('kinesis');
        },
        set: function (value) {
            this._kinesis = value;
        },
        enumerable: false,
        configurable: true
    });
    IotTopicRule.prototype.resetKinesis = function () {
        this._kinesis = undefined;
    };
    Object.defineProperty(IotTopicRule.prototype, "kinesisInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kinesis;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotTopicRule.prototype, "lambda", {
        get: function () {
            return this.interpolationForAttribute('lambda');
        },
        set: function (value) {
            this._lambda = value;
        },
        enumerable: false,
        configurable: true
    });
    IotTopicRule.prototype.resetLambda = function () {
        this._lambda = undefined;
    };
    Object.defineProperty(IotTopicRule.prototype, "lambdaInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._lambda;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotTopicRule.prototype, "republish", {
        get: function () {
            return this.interpolationForAttribute('republish');
        },
        set: function (value) {
            this._republish = value;
        },
        enumerable: false,
        configurable: true
    });
    IotTopicRule.prototype.resetRepublish = function () {
        this._republish = undefined;
    };
    Object.defineProperty(IotTopicRule.prototype, "republishInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._republish;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotTopicRule.prototype, "s3", {
        get: function () {
            return this.interpolationForAttribute('s3');
        },
        set: function (value) {
            this._s3 = value;
        },
        enumerable: false,
        configurable: true
    });
    IotTopicRule.prototype.resetS3 = function () {
        this._s3 = undefined;
    };
    Object.defineProperty(IotTopicRule.prototype, "s3Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._s3;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotTopicRule.prototype, "sns", {
        get: function () {
            return this.interpolationForAttribute('sns');
        },
        set: function (value) {
            this._sns = value;
        },
        enumerable: false,
        configurable: true
    });
    IotTopicRule.prototype.resetSns = function () {
        this._sns = undefined;
    };
    Object.defineProperty(IotTopicRule.prototype, "snsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotTopicRule.prototype, "sqs", {
        get: function () {
            return this.interpolationForAttribute('sqs');
        },
        set: function (value) {
            this._sqs = value;
        },
        enumerable: false,
        configurable: true
    });
    IotTopicRule.prototype.resetSqs = function () {
        this._sqs = undefined;
    };
    Object.defineProperty(IotTopicRule.prototype, "sqsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sqs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotTopicRule.prototype, "stepFunctions", {
        get: function () {
            return this.interpolationForAttribute('step_functions');
        },
        set: function (value) {
            this._stepFunctions = value;
        },
        enumerable: false,
        configurable: true
    });
    IotTopicRule.prototype.resetStepFunctions = function () {
        this._stepFunctions = undefined;
    };
    Object.defineProperty(IotTopicRule.prototype, "stepFunctionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._stepFunctions;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    IotTopicRule.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            enabled: cdktf.booleanToTerraform(this._enabled),
            name: cdktf.stringToTerraform(this._name),
            sql: cdktf.stringToTerraform(this._sql),
            sql_version: cdktf.stringToTerraform(this._sqlVersion),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            cloudwatch_alarm: cdktf.listMapper(iotTopicRuleCloudwatchAlarmToTerraform)(this._cloudwatchAlarm),
            cloudwatch_metric: cdktf.listMapper(iotTopicRuleCloudwatchMetricToTerraform)(this._cloudwatchMetric),
            dynamodb: cdktf.listMapper(iotTopicRuleDynamodbToTerraform)(this._dynamodb),
            dynamodbv2: cdktf.listMapper(iotTopicRuleDynamodbv2ToTerraform)(this._dynamodbv2),
            elasticsearch: cdktf.listMapper(iotTopicRuleElasticsearchToTerraform)(this._elasticsearch),
            error_action: cdktf.listMapper(iotTopicRuleErrorActionToTerraform)(this._errorAction),
            firehose: cdktf.listMapper(iotTopicRuleFirehoseToTerraform)(this._firehose),
            iot_analytics: cdktf.listMapper(iotTopicRuleIotAnalyticsToTerraform)(this._iotAnalytics),
            iot_events: cdktf.listMapper(iotTopicRuleIotEventsToTerraform)(this._iotEvents),
            kinesis: cdktf.listMapper(iotTopicRuleKinesisToTerraform)(this._kinesis),
            lambda: cdktf.listMapper(iotTopicRuleLambdaToTerraform)(this._lambda),
            republish: cdktf.listMapper(iotTopicRuleRepublishToTerraform)(this._republish),
            s3: cdktf.listMapper(iotTopicRuleS3ToTerraform)(this._s3),
            sns: cdktf.listMapper(iotTopicRuleSnsToTerraform)(this._sns),
            sqs: cdktf.listMapper(iotTopicRuleSqsToTerraform)(this._sqs),
            step_functions: cdktf.listMapper(iotTopicRuleStepFunctionsToTerraform)(this._stepFunctions)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    IotTopicRule.tfResourceType = "aws_iot_topic_rule";
    return IotTopicRule;
}(cdktf.TerraformResource));
exports.IotTopicRule = IotTopicRule;
