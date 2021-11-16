"use strict";
// https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html
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
exports.MwaaEnvironment = exports.MwaaEnvironmentLastUpdated = exports.MwaaEnvironmentLastUpdatedError = void 0;
var cdktf = require("cdktf");
var MwaaEnvironmentLastUpdatedError = /** @class */ (function (_super) {
    __extends(MwaaEnvironmentLastUpdatedError, _super);
    function MwaaEnvironmentLastUpdatedError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MwaaEnvironmentLastUpdatedError.prototype, "errorCode", {
        // error_code - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('error_code');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MwaaEnvironmentLastUpdatedError.prototype, "errorMessage", {
        // error_message - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('error_message');
        },
        enumerable: false,
        configurable: true
    });
    return MwaaEnvironmentLastUpdatedError;
}(cdktf.ComplexComputedList));
exports.MwaaEnvironmentLastUpdatedError = MwaaEnvironmentLastUpdatedError;
var MwaaEnvironmentLastUpdated = /** @class */ (function (_super) {
    __extends(MwaaEnvironmentLastUpdated, _super);
    function MwaaEnvironmentLastUpdated() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MwaaEnvironmentLastUpdated.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MwaaEnvironmentLastUpdated.prototype, "error", {
        // error - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('error');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MwaaEnvironmentLastUpdated.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    return MwaaEnvironmentLastUpdated;
}(cdktf.ComplexComputedList));
exports.MwaaEnvironmentLastUpdated = MwaaEnvironmentLastUpdated;
function mwaaEnvironmentLoggingConfigurationDagProcessingLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_level: cdktf.stringToTerraform(struct.logLevel)
    };
}
function mwaaEnvironmentLoggingConfigurationSchedulerLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_level: cdktf.stringToTerraform(struct.logLevel)
    };
}
function mwaaEnvironmentLoggingConfigurationTaskLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_level: cdktf.stringToTerraform(struct.logLevel)
    };
}
function mwaaEnvironmentLoggingConfigurationWebserverLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_level: cdktf.stringToTerraform(struct.logLevel)
    };
}
function mwaaEnvironmentLoggingConfigurationWorkerLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_level: cdktf.stringToTerraform(struct.logLevel)
    };
}
function mwaaEnvironmentLoggingConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        dag_processing_logs: cdktf.listMapper(mwaaEnvironmentLoggingConfigurationDagProcessingLogsToTerraform)(struct.dagProcessingLogs),
        scheduler_logs: cdktf.listMapper(mwaaEnvironmentLoggingConfigurationSchedulerLogsToTerraform)(struct.schedulerLogs),
        task_logs: cdktf.listMapper(mwaaEnvironmentLoggingConfigurationTaskLogsToTerraform)(struct.taskLogs),
        webserver_logs: cdktf.listMapper(mwaaEnvironmentLoggingConfigurationWebserverLogsToTerraform)(struct.webserverLogs),
        worker_logs: cdktf.listMapper(mwaaEnvironmentLoggingConfigurationWorkerLogsToTerraform)(struct.workerLogs)
    };
}
function mwaaEnvironmentNetworkConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroupIds),
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.subnetIds)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html aws_mwaa_environment}
*/
var MwaaEnvironment = /** @class */ (function (_super) {
    __extends(MwaaEnvironment, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html aws_mwaa_environment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MwaaEnvironmentConfig
    */
    function MwaaEnvironment(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_mwaa_environment',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._airflowConfigurationOptions = config.airflowConfigurationOptions;
        _this._airflowVersion = config.airflowVersion;
        _this._dagS3Path = config.dagS3Path;
        _this._environmentClass = config.environmentClass;
        _this._executionRoleArn = config.executionRoleArn;
        _this._kmsKey = config.kmsKey;
        _this._maxWorkers = config.maxWorkers;
        _this._minWorkers = config.minWorkers;
        _this._name = config.name;
        _this._pluginsS3ObjectVersion = config.pluginsS3ObjectVersion;
        _this._pluginsS3Path = config.pluginsS3Path;
        _this._requirementsS3ObjectVersion = config.requirementsS3ObjectVersion;
        _this._requirementsS3Path = config.requirementsS3Path;
        _this._sourceBucketArn = config.sourceBucketArn;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._webserverAccessMode = config.webserverAccessMode;
        _this._weeklyMaintenanceWindowStart = config.weeklyMaintenanceWindowStart;
        _this._loggingConfiguration = config.loggingConfiguration;
        _this._networkConfiguration = config.networkConfiguration;
        return _this;
    }
    Object.defineProperty(MwaaEnvironment.prototype, "airflowConfigurationOptions", {
        get: function () {
            return this.interpolationForAttribute('airflow_configuration_options');
        },
        set: function (value) {
            this._airflowConfigurationOptions = value;
        },
        enumerable: false,
        configurable: true
    });
    MwaaEnvironment.prototype.resetAirflowConfigurationOptions = function () {
        this._airflowConfigurationOptions = undefined;
    };
    Object.defineProperty(MwaaEnvironment.prototype, "airflowConfigurationOptionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._airflowConfigurationOptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MwaaEnvironment.prototype, "airflowVersion", {
        get: function () {
            return this.getStringAttribute('airflow_version');
        },
        set: function (value) {
            this._airflowVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    MwaaEnvironment.prototype.resetAirflowVersion = function () {
        this._airflowVersion = undefined;
    };
    Object.defineProperty(MwaaEnvironment.prototype, "airflowVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._airflowVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MwaaEnvironment.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MwaaEnvironment.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MwaaEnvironment.prototype, "dagS3Path", {
        get: function () {
            return this.getStringAttribute('dag_s3_path');
        },
        set: function (value) {
            this._dagS3Path = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MwaaEnvironment.prototype, "dagS3PathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dagS3Path;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MwaaEnvironment.prototype, "environmentClass", {
        get: function () {
            return this.getStringAttribute('environment_class');
        },
        set: function (value) {
            this._environmentClass = value;
        },
        enumerable: false,
        configurable: true
    });
    MwaaEnvironment.prototype.resetEnvironmentClass = function () {
        this._environmentClass = undefined;
    };
    Object.defineProperty(MwaaEnvironment.prototype, "environmentClassInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._environmentClass;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MwaaEnvironment.prototype, "executionRoleArn", {
        get: function () {
            return this.getStringAttribute('execution_role_arn');
        },
        set: function (value) {
            this._executionRoleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MwaaEnvironment.prototype, "executionRoleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._executionRoleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MwaaEnvironment.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MwaaEnvironment.prototype, "kmsKey", {
        get: function () {
            return this.getStringAttribute('kms_key');
        },
        set: function (value) {
            this._kmsKey = value;
        },
        enumerable: false,
        configurable: true
    });
    MwaaEnvironment.prototype.resetKmsKey = function () {
        this._kmsKey = undefined;
    };
    Object.defineProperty(MwaaEnvironment.prototype, "kmsKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kmsKey;
        },
        enumerable: false,
        configurable: true
    });
    // last_updated - computed: true, optional: false, required: false
    MwaaEnvironment.prototype.lastUpdated = function (index) {
        return new MwaaEnvironmentLastUpdated(this, 'last_updated', index);
    };
    Object.defineProperty(MwaaEnvironment.prototype, "maxWorkers", {
        get: function () {
            return this.getNumberAttribute('max_workers');
        },
        set: function (value) {
            this._maxWorkers = value;
        },
        enumerable: false,
        configurable: true
    });
    MwaaEnvironment.prototype.resetMaxWorkers = function () {
        this._maxWorkers = undefined;
    };
    Object.defineProperty(MwaaEnvironment.prototype, "maxWorkersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxWorkers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MwaaEnvironment.prototype, "minWorkers", {
        get: function () {
            return this.getNumberAttribute('min_workers');
        },
        set: function (value) {
            this._minWorkers = value;
        },
        enumerable: false,
        configurable: true
    });
    MwaaEnvironment.prototype.resetMinWorkers = function () {
        this._minWorkers = undefined;
    };
    Object.defineProperty(MwaaEnvironment.prototype, "minWorkersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._minWorkers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MwaaEnvironment.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MwaaEnvironment.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MwaaEnvironment.prototype, "pluginsS3ObjectVersion", {
        get: function () {
            return this.getStringAttribute('plugins_s3_object_version');
        },
        set: function (value) {
            this._pluginsS3ObjectVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    MwaaEnvironment.prototype.resetPluginsS3ObjectVersion = function () {
        this._pluginsS3ObjectVersion = undefined;
    };
    Object.defineProperty(MwaaEnvironment.prototype, "pluginsS3ObjectVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pluginsS3ObjectVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MwaaEnvironment.prototype, "pluginsS3Path", {
        get: function () {
            return this.getStringAttribute('plugins_s3_path');
        },
        set: function (value) {
            this._pluginsS3Path = value;
        },
        enumerable: false,
        configurable: true
    });
    MwaaEnvironment.prototype.resetPluginsS3Path = function () {
        this._pluginsS3Path = undefined;
    };
    Object.defineProperty(MwaaEnvironment.prototype, "pluginsS3PathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pluginsS3Path;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MwaaEnvironment.prototype, "requirementsS3ObjectVersion", {
        get: function () {
            return this.getStringAttribute('requirements_s3_object_version');
        },
        set: function (value) {
            this._requirementsS3ObjectVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    MwaaEnvironment.prototype.resetRequirementsS3ObjectVersion = function () {
        this._requirementsS3ObjectVersion = undefined;
    };
    Object.defineProperty(MwaaEnvironment.prototype, "requirementsS3ObjectVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requirementsS3ObjectVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MwaaEnvironment.prototype, "requirementsS3Path", {
        get: function () {
            return this.getStringAttribute('requirements_s3_path');
        },
        set: function (value) {
            this._requirementsS3Path = value;
        },
        enumerable: false,
        configurable: true
    });
    MwaaEnvironment.prototype.resetRequirementsS3Path = function () {
        this._requirementsS3Path = undefined;
    };
    Object.defineProperty(MwaaEnvironment.prototype, "requirementsS3PathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requirementsS3Path;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MwaaEnvironment.prototype, "serviceRoleArn", {
        // service_role_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('service_role_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MwaaEnvironment.prototype, "sourceBucketArn", {
        get: function () {
            return this.getStringAttribute('source_bucket_arn');
        },
        set: function (value) {
            this._sourceBucketArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MwaaEnvironment.prototype, "sourceBucketArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sourceBucketArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MwaaEnvironment.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MwaaEnvironment.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    MwaaEnvironment.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(MwaaEnvironment.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MwaaEnvironment.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    MwaaEnvironment.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(MwaaEnvironment.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MwaaEnvironment.prototype, "webserverAccessMode", {
        get: function () {
            return this.getStringAttribute('webserver_access_mode');
        },
        set: function (value) {
            this._webserverAccessMode = value;
        },
        enumerable: false,
        configurable: true
    });
    MwaaEnvironment.prototype.resetWebserverAccessMode = function () {
        this._webserverAccessMode = undefined;
    };
    Object.defineProperty(MwaaEnvironment.prototype, "webserverAccessModeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._webserverAccessMode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MwaaEnvironment.prototype, "webserverUrl", {
        // webserver_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('webserver_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MwaaEnvironment.prototype, "weeklyMaintenanceWindowStart", {
        get: function () {
            return this.getStringAttribute('weekly_maintenance_window_start');
        },
        set: function (value) {
            this._weeklyMaintenanceWindowStart = value;
        },
        enumerable: false,
        configurable: true
    });
    MwaaEnvironment.prototype.resetWeeklyMaintenanceWindowStart = function () {
        this._weeklyMaintenanceWindowStart = undefined;
    };
    Object.defineProperty(MwaaEnvironment.prototype, "weeklyMaintenanceWindowStartInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._weeklyMaintenanceWindowStart;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MwaaEnvironment.prototype, "loggingConfiguration", {
        get: function () {
            return this.interpolationForAttribute('logging_configuration');
        },
        set: function (value) {
            this._loggingConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    MwaaEnvironment.prototype.resetLoggingConfiguration = function () {
        this._loggingConfiguration = undefined;
    };
    Object.defineProperty(MwaaEnvironment.prototype, "loggingConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._loggingConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MwaaEnvironment.prototype, "networkConfiguration", {
        get: function () {
            return this.interpolationForAttribute('network_configuration');
        },
        set: function (value) {
            this._networkConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MwaaEnvironment.prototype, "networkConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._networkConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    MwaaEnvironment.prototype.synthesizeAttributes = function () {
        return {
            airflow_configuration_options: cdktf.hashMapper(cdktf.anyToTerraform)(this._airflowConfigurationOptions),
            airflow_version: cdktf.stringToTerraform(this._airflowVersion),
            dag_s3_path: cdktf.stringToTerraform(this._dagS3Path),
            environment_class: cdktf.stringToTerraform(this._environmentClass),
            execution_role_arn: cdktf.stringToTerraform(this._executionRoleArn),
            kms_key: cdktf.stringToTerraform(this._kmsKey),
            max_workers: cdktf.numberToTerraform(this._maxWorkers),
            min_workers: cdktf.numberToTerraform(this._minWorkers),
            name: cdktf.stringToTerraform(this._name),
            plugins_s3_object_version: cdktf.stringToTerraform(this._pluginsS3ObjectVersion),
            plugins_s3_path: cdktf.stringToTerraform(this._pluginsS3Path),
            requirements_s3_object_version: cdktf.stringToTerraform(this._requirementsS3ObjectVersion),
            requirements_s3_path: cdktf.stringToTerraform(this._requirementsS3Path),
            source_bucket_arn: cdktf.stringToTerraform(this._sourceBucketArn),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            webserver_access_mode: cdktf.stringToTerraform(this._webserverAccessMode),
            weekly_maintenance_window_start: cdktf.stringToTerraform(this._weeklyMaintenanceWindowStart),
            logging_configuration: cdktf.listMapper(mwaaEnvironmentLoggingConfigurationToTerraform)(this._loggingConfiguration),
            network_configuration: cdktf.listMapper(mwaaEnvironmentNetworkConfigurationToTerraform)(this._networkConfiguration)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    MwaaEnvironment.tfResourceType = "aws_mwaa_environment";
    return MwaaEnvironment;
}(cdktf.TerraformResource));
exports.MwaaEnvironment = MwaaEnvironment;
