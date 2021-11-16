"use strict";
// https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html
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
exports.SsmMaintenanceWindowTask = void 0;
var cdktf = require("cdktf");
function ssmMaintenanceWindowTaskTargetsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
function ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
function ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        document_version: cdktf.stringToTerraform(struct.documentVersion),
        parameter: cdktf.listMapper(ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterToTerraform)(struct.parameter)
    };
}
function ssmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        client_context: cdktf.stringToTerraform(struct.clientContext),
        payload: cdktf.stringToTerraform(struct.payload),
        qualifier: cdktf.stringToTerraform(struct.qualifier)
    };
}
function ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cloudwatch_log_group_name: cdktf.stringToTerraform(struct.cloudwatchLogGroupName),
        cloudwatch_output_enabled: cdktf.booleanToTerraform(struct.cloudwatchOutputEnabled)
    };
}
function ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        notification_arn: cdktf.stringToTerraform(struct.notificationArn),
        notification_events: cdktf.listMapper(cdktf.stringToTerraform)(struct.notificationEvents),
        notification_type: cdktf.stringToTerraform(struct.notificationType)
    };
}
function ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
function ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comment: cdktf.stringToTerraform(struct.comment),
        document_hash: cdktf.stringToTerraform(struct.documentHash),
        document_hash_type: cdktf.stringToTerraform(struct.documentHashType),
        document_version: cdktf.stringToTerraform(struct.documentVersion),
        output_s3_bucket: cdktf.stringToTerraform(struct.outputS3Bucket),
        output_s3_key_prefix: cdktf.stringToTerraform(struct.outputS3KeyPrefix),
        service_role_arn: cdktf.stringToTerraform(struct.serviceRoleArn),
        timeout_seconds: cdktf.numberToTerraform(struct.timeoutSeconds),
        cloudwatch_config: cdktf.listMapper(ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigToTerraform)(struct.cloudwatchConfig),
        notification_config: cdktf.listMapper(ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigToTerraform)(struct.notificationConfig),
        parameter: cdktf.listMapper(ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterToTerraform)(struct.parameter)
    };
}
function ssmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        input: cdktf.stringToTerraform(struct.input),
        name: cdktf.stringToTerraform(struct.name)
    };
}
function ssmMaintenanceWindowTaskTaskInvocationParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        automation_parameters: cdktf.listMapper(ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersToTerraform)(struct.automationParameters),
        lambda_parameters: cdktf.listMapper(ssmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersToTerraform)(struct.lambdaParameters),
        run_command_parameters: cdktf.listMapper(ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersToTerraform)(struct.runCommandParameters),
        step_functions_parameters: cdktf.listMapper(ssmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersToTerraform)(struct.stepFunctionsParameters)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html aws_ssm_maintenance_window_task}
*/
var SsmMaintenanceWindowTask = /** @class */ (function (_super) {
    __extends(SsmMaintenanceWindowTask, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html aws_ssm_maintenance_window_task} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsmMaintenanceWindowTaskConfig
    */
    function SsmMaintenanceWindowTask(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ssm_maintenance_window_task',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._description = config.description;
        _this._maxConcurrency = config.maxConcurrency;
        _this._maxErrors = config.maxErrors;
        _this._name = config.name;
        _this._priority = config.priority;
        _this._serviceRoleArn = config.serviceRoleArn;
        _this._taskArn = config.taskArn;
        _this._taskType = config.taskType;
        _this._windowId = config.windowId;
        _this._targets = config.targets;
        _this._taskInvocationParameters = config.taskInvocationParameters;
        return _this;
    }
    Object.defineProperty(SsmMaintenanceWindowTask.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmMaintenanceWindowTask.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(SsmMaintenanceWindowTask.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmMaintenanceWindowTask.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmMaintenanceWindowTask.prototype, "maxConcurrency", {
        get: function () {
            return this.getStringAttribute('max_concurrency');
        },
        set: function (value) {
            this._maxConcurrency = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmMaintenanceWindowTask.prototype, "maxConcurrencyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxConcurrency;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmMaintenanceWindowTask.prototype, "maxErrors", {
        get: function () {
            return this.getStringAttribute('max_errors');
        },
        set: function (value) {
            this._maxErrors = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmMaintenanceWindowTask.prototype, "maxErrorsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxErrors;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmMaintenanceWindowTask.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmMaintenanceWindowTask.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(SsmMaintenanceWindowTask.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmMaintenanceWindowTask.prototype, "priority", {
        get: function () {
            return this.getNumberAttribute('priority');
        },
        set: function (value) {
            this._priority = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmMaintenanceWindowTask.prototype.resetPriority = function () {
        this._priority = undefined;
    };
    Object.defineProperty(SsmMaintenanceWindowTask.prototype, "priorityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._priority;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmMaintenanceWindowTask.prototype, "serviceRoleArn", {
        get: function () {
            return this.getStringAttribute('service_role_arn');
        },
        set: function (value) {
            this._serviceRoleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmMaintenanceWindowTask.prototype.resetServiceRoleArn = function () {
        this._serviceRoleArn = undefined;
    };
    Object.defineProperty(SsmMaintenanceWindowTask.prototype, "serviceRoleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serviceRoleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmMaintenanceWindowTask.prototype, "taskArn", {
        get: function () {
            return this.getStringAttribute('task_arn');
        },
        set: function (value) {
            this._taskArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmMaintenanceWindowTask.prototype, "taskArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._taskArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmMaintenanceWindowTask.prototype, "taskType", {
        get: function () {
            return this.getStringAttribute('task_type');
        },
        set: function (value) {
            this._taskType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmMaintenanceWindowTask.prototype, "taskTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._taskType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmMaintenanceWindowTask.prototype, "windowId", {
        get: function () {
            return this.getStringAttribute('window_id');
        },
        set: function (value) {
            this._windowId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmMaintenanceWindowTask.prototype, "windowIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._windowId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmMaintenanceWindowTask.prototype, "targets", {
        get: function () {
            return this.interpolationForAttribute('targets');
        },
        set: function (value) {
            this._targets = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmMaintenanceWindowTask.prototype.resetTargets = function () {
        this._targets = undefined;
    };
    Object.defineProperty(SsmMaintenanceWindowTask.prototype, "targetsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targets;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmMaintenanceWindowTask.prototype, "taskInvocationParameters", {
        get: function () {
            return this.interpolationForAttribute('task_invocation_parameters');
        },
        set: function (value) {
            this._taskInvocationParameters = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmMaintenanceWindowTask.prototype.resetTaskInvocationParameters = function () {
        this._taskInvocationParameters = undefined;
    };
    Object.defineProperty(SsmMaintenanceWindowTask.prototype, "taskInvocationParametersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._taskInvocationParameters;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SsmMaintenanceWindowTask.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            max_concurrency: cdktf.stringToTerraform(this._maxConcurrency),
            max_errors: cdktf.stringToTerraform(this._maxErrors),
            name: cdktf.stringToTerraform(this._name),
            priority: cdktf.numberToTerraform(this._priority),
            service_role_arn: cdktf.stringToTerraform(this._serviceRoleArn),
            task_arn: cdktf.stringToTerraform(this._taskArn),
            task_type: cdktf.stringToTerraform(this._taskType),
            window_id: cdktf.stringToTerraform(this._windowId),
            targets: cdktf.listMapper(ssmMaintenanceWindowTaskTargetsToTerraform)(this._targets),
            task_invocation_parameters: cdktf.listMapper(ssmMaintenanceWindowTaskTaskInvocationParametersToTerraform)(this._taskInvocationParameters)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SsmMaintenanceWindowTask.tfResourceType = "aws_ssm_maintenance_window_task";
    return SsmMaintenanceWindowTask;
}(cdktf.TerraformResource));
exports.SsmMaintenanceWindowTask = SsmMaintenanceWindowTask;
