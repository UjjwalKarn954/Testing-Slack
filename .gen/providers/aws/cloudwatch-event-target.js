"use strict";
// https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html
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
exports.CloudwatchEventTarget = void 0;
var cdktf = require("cdktf");
function cloudwatchEventTargetBatchTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        array_size: cdktf.numberToTerraform(struct.arraySize),
        job_attempts: cdktf.numberToTerraform(struct.jobAttempts),
        job_definition: cdktf.stringToTerraform(struct.jobDefinition),
        job_name: cdktf.stringToTerraform(struct.jobName)
    };
}
function cloudwatchEventTargetDeadLetterConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn)
    };
}
function cloudwatchEventTargetEcsTargetNetworkConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        assign_public_ip: cdktf.booleanToTerraform(struct.assignPublicIp),
        security_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroups),
        subnets: cdktf.listMapper(cdktf.stringToTerraform)(struct.subnets)
    };
}
function cloudwatchEventTargetEcsTargetPlacementConstraintToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        expression: cdktf.stringToTerraform(struct.expression),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function cloudwatchEventTargetEcsTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enable_ecs_managed_tags: cdktf.booleanToTerraform(struct.enableEcsManagedTags),
        enable_execute_command: cdktf.booleanToTerraform(struct.enableExecuteCommand),
        group: cdktf.stringToTerraform(struct.group),
        launch_type: cdktf.stringToTerraform(struct.launchType),
        platform_version: cdktf.stringToTerraform(struct.platformVersion),
        propagate_tags: cdktf.stringToTerraform(struct.propagateTags),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct.tags),
        task_count: cdktf.numberToTerraform(struct.taskCount),
        task_definition_arn: cdktf.stringToTerraform(struct.taskDefinitionArn),
        network_configuration: cdktf.listMapper(cloudwatchEventTargetEcsTargetNetworkConfigurationToTerraform)(struct.networkConfiguration),
        placement_constraint: cdktf.listMapper(cloudwatchEventTargetEcsTargetPlacementConstraintToTerraform)(struct.placementConstraint)
    };
}
function cloudwatchEventTargetHttpTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        header_parameters: cdktf.hashMapper(cdktf.anyToTerraform)(struct.headerParameters),
        path_parameter_values: cdktf.listMapper(cdktf.stringToTerraform)(struct.pathParameterValues),
        query_string_parameters: cdktf.hashMapper(cdktf.anyToTerraform)(struct.queryStringParameters)
    };
}
function cloudwatchEventTargetInputTransformerToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        input_paths: cdktf.hashMapper(cdktf.anyToTerraform)(struct.inputPaths),
        input_template: cdktf.stringToTerraform(struct.inputTemplate)
    };
}
function cloudwatchEventTargetKinesisTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        partition_key_path: cdktf.stringToTerraform(struct.partitionKeyPath)
    };
}
function cloudwatchEventTargetRedshiftTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        database: cdktf.stringToTerraform(struct.database),
        db_user: cdktf.stringToTerraform(struct.dbUser),
        secrets_manager_arn: cdktf.stringToTerraform(struct.secretsManagerArn),
        sql: cdktf.stringToTerraform(struct.sql),
        statement_name: cdktf.stringToTerraform(struct.statementName),
        with_event: cdktf.booleanToTerraform(struct.withEvent)
    };
}
function cloudwatchEventTargetRetryPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        maximum_event_age_in_seconds: cdktf.numberToTerraform(struct.maximumEventAgeInSeconds),
        maximum_retry_attempts: cdktf.numberToTerraform(struct.maximumRetryAttempts)
    };
}
function cloudwatchEventTargetRunCommandTargetsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
function cloudwatchEventTargetSqsTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        message_group_id: cdktf.stringToTerraform(struct.messageGroupId)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html aws_cloudwatch_event_target}
*/
var CloudwatchEventTarget = /** @class */ (function (_super) {
    __extends(CloudwatchEventTarget, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html aws_cloudwatch_event_target} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchEventTargetConfig
    */
    function CloudwatchEventTarget(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_cloudwatch_event_target',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._arn = config.arn;
        _this._eventBusName = config.eventBusName;
        _this._input = config.input;
        _this._inputPath = config.inputPath;
        _this._roleArn = config.roleArn;
        _this._rule = config.rule;
        _this._targetId = config.targetId;
        _this._batchTarget = config.batchTarget;
        _this._deadLetterConfig = config.deadLetterConfig;
        _this._ecsTarget = config.ecsTarget;
        _this._httpTarget = config.httpTarget;
        _this._inputTransformer = config.inputTransformer;
        _this._kinesisTarget = config.kinesisTarget;
        _this._redshiftTarget = config.redshiftTarget;
        _this._retryPolicy = config.retryPolicy;
        _this._runCommandTargets = config.runCommandTargets;
        _this._sqsTarget = config.sqsTarget;
        return _this;
    }
    Object.defineProperty(CloudwatchEventTarget.prototype, "arn", {
        get: function () {
            return this.getStringAttribute('arn');
        },
        set: function (value) {
            this._arn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventTarget.prototype, "arnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._arn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventTarget.prototype, "eventBusName", {
        get: function () {
            return this.getStringAttribute('event_bus_name');
        },
        set: function (value) {
            this._eventBusName = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchEventTarget.prototype.resetEventBusName = function () {
        this._eventBusName = undefined;
    };
    Object.defineProperty(CloudwatchEventTarget.prototype, "eventBusNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._eventBusName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventTarget.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventTarget.prototype, "input", {
        get: function () {
            return this.getStringAttribute('input');
        },
        set: function (value) {
            this._input = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchEventTarget.prototype.resetInput = function () {
        this._input = undefined;
    };
    Object.defineProperty(CloudwatchEventTarget.prototype, "inputInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._input;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventTarget.prototype, "inputPath", {
        get: function () {
            return this.getStringAttribute('input_path');
        },
        set: function (value) {
            this._inputPath = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchEventTarget.prototype.resetInputPath = function () {
        this._inputPath = undefined;
    };
    Object.defineProperty(CloudwatchEventTarget.prototype, "inputPathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._inputPath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventTarget.prototype, "roleArn", {
        get: function () {
            return this.getStringAttribute('role_arn');
        },
        set: function (value) {
            this._roleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchEventTarget.prototype.resetRoleArn = function () {
        this._roleArn = undefined;
    };
    Object.defineProperty(CloudwatchEventTarget.prototype, "roleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._roleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventTarget.prototype, "rule", {
        get: function () {
            return this.getStringAttribute('rule');
        },
        set: function (value) {
            this._rule = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventTarget.prototype, "ruleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rule;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventTarget.prototype, "targetId", {
        get: function () {
            return this.getStringAttribute('target_id');
        },
        set: function (value) {
            this._targetId = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchEventTarget.prototype.resetTargetId = function () {
        this._targetId = undefined;
    };
    Object.defineProperty(CloudwatchEventTarget.prototype, "targetIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventTarget.prototype, "batchTarget", {
        get: function () {
            return this.interpolationForAttribute('batch_target');
        },
        set: function (value) {
            this._batchTarget = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchEventTarget.prototype.resetBatchTarget = function () {
        this._batchTarget = undefined;
    };
    Object.defineProperty(CloudwatchEventTarget.prototype, "batchTargetInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._batchTarget;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventTarget.prototype, "deadLetterConfig", {
        get: function () {
            return this.interpolationForAttribute('dead_letter_config');
        },
        set: function (value) {
            this._deadLetterConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchEventTarget.prototype.resetDeadLetterConfig = function () {
        this._deadLetterConfig = undefined;
    };
    Object.defineProperty(CloudwatchEventTarget.prototype, "deadLetterConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deadLetterConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventTarget.prototype, "ecsTarget", {
        get: function () {
            return this.interpolationForAttribute('ecs_target');
        },
        set: function (value) {
            this._ecsTarget = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchEventTarget.prototype.resetEcsTarget = function () {
        this._ecsTarget = undefined;
    };
    Object.defineProperty(CloudwatchEventTarget.prototype, "ecsTargetInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ecsTarget;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventTarget.prototype, "httpTarget", {
        get: function () {
            return this.interpolationForAttribute('http_target');
        },
        set: function (value) {
            this._httpTarget = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchEventTarget.prototype.resetHttpTarget = function () {
        this._httpTarget = undefined;
    };
    Object.defineProperty(CloudwatchEventTarget.prototype, "httpTargetInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._httpTarget;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventTarget.prototype, "inputTransformer", {
        get: function () {
            return this.interpolationForAttribute('input_transformer');
        },
        set: function (value) {
            this._inputTransformer = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchEventTarget.prototype.resetInputTransformer = function () {
        this._inputTransformer = undefined;
    };
    Object.defineProperty(CloudwatchEventTarget.prototype, "inputTransformerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._inputTransformer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventTarget.prototype, "kinesisTarget", {
        get: function () {
            return this.interpolationForAttribute('kinesis_target');
        },
        set: function (value) {
            this._kinesisTarget = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchEventTarget.prototype.resetKinesisTarget = function () {
        this._kinesisTarget = undefined;
    };
    Object.defineProperty(CloudwatchEventTarget.prototype, "kinesisTargetInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kinesisTarget;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventTarget.prototype, "redshiftTarget", {
        get: function () {
            return this.interpolationForAttribute('redshift_target');
        },
        set: function (value) {
            this._redshiftTarget = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchEventTarget.prototype.resetRedshiftTarget = function () {
        this._redshiftTarget = undefined;
    };
    Object.defineProperty(CloudwatchEventTarget.prototype, "redshiftTargetInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._redshiftTarget;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventTarget.prototype, "retryPolicy", {
        get: function () {
            return this.interpolationForAttribute('retry_policy');
        },
        set: function (value) {
            this._retryPolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchEventTarget.prototype.resetRetryPolicy = function () {
        this._retryPolicy = undefined;
    };
    Object.defineProperty(CloudwatchEventTarget.prototype, "retryPolicyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._retryPolicy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventTarget.prototype, "runCommandTargets", {
        get: function () {
            return this.interpolationForAttribute('run_command_targets');
        },
        set: function (value) {
            this._runCommandTargets = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchEventTarget.prototype.resetRunCommandTargets = function () {
        this._runCommandTargets = undefined;
    };
    Object.defineProperty(CloudwatchEventTarget.prototype, "runCommandTargetsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._runCommandTargets;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventTarget.prototype, "sqsTarget", {
        get: function () {
            return this.interpolationForAttribute('sqs_target');
        },
        set: function (value) {
            this._sqsTarget = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchEventTarget.prototype.resetSqsTarget = function () {
        this._sqsTarget = undefined;
    };
    Object.defineProperty(CloudwatchEventTarget.prototype, "sqsTargetInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sqsTarget;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CloudwatchEventTarget.prototype.synthesizeAttributes = function () {
        return {
            arn: cdktf.stringToTerraform(this._arn),
            event_bus_name: cdktf.stringToTerraform(this._eventBusName),
            input: cdktf.stringToTerraform(this._input),
            input_path: cdktf.stringToTerraform(this._inputPath),
            role_arn: cdktf.stringToTerraform(this._roleArn),
            rule: cdktf.stringToTerraform(this._rule),
            target_id: cdktf.stringToTerraform(this._targetId),
            batch_target: cdktf.listMapper(cloudwatchEventTargetBatchTargetToTerraform)(this._batchTarget),
            dead_letter_config: cdktf.listMapper(cloudwatchEventTargetDeadLetterConfigToTerraform)(this._deadLetterConfig),
            ecs_target: cdktf.listMapper(cloudwatchEventTargetEcsTargetToTerraform)(this._ecsTarget),
            http_target: cdktf.listMapper(cloudwatchEventTargetHttpTargetToTerraform)(this._httpTarget),
            input_transformer: cdktf.listMapper(cloudwatchEventTargetInputTransformerToTerraform)(this._inputTransformer),
            kinesis_target: cdktf.listMapper(cloudwatchEventTargetKinesisTargetToTerraform)(this._kinesisTarget),
            redshift_target: cdktf.listMapper(cloudwatchEventTargetRedshiftTargetToTerraform)(this._redshiftTarget),
            retry_policy: cdktf.listMapper(cloudwatchEventTargetRetryPolicyToTerraform)(this._retryPolicy),
            run_command_targets: cdktf.listMapper(cloudwatchEventTargetRunCommandTargetsToTerraform)(this._runCommandTargets),
            sqs_target: cdktf.listMapper(cloudwatchEventTargetSqsTargetToTerraform)(this._sqsTarget)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CloudwatchEventTarget.tfResourceType = "aws_cloudwatch_event_target";
    return CloudwatchEventTarget;
}(cdktf.TerraformResource));
exports.CloudwatchEventTarget = CloudwatchEventTarget;
