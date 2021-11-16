"use strict";
// https://www.terraform.io/docs/providers/aws/r/glue_job.html
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
exports.GlueJob = void 0;
var cdktf = require("cdktf");
function glueJobCommandToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        python_version: cdktf.stringToTerraform(struct.pythonVersion),
        script_location: cdktf.stringToTerraform(struct.scriptLocation)
    };
}
function glueJobExecutionPropertyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        max_concurrent_runs: cdktf.numberToTerraform(struct.maxConcurrentRuns)
    };
}
function glueJobNotificationPropertyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        notify_delay_after: cdktf.numberToTerraform(struct.notifyDelayAfter)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html aws_glue_job}
*/
var GlueJob = /** @class */ (function (_super) {
    __extends(GlueJob, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html aws_glue_job} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueJobConfig
    */
    function GlueJob(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_glue_job',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._connections = config.connections;
        _this._defaultArguments = config.defaultArguments;
        _this._description = config.description;
        _this._glueVersion = config.glueVersion;
        _this._maxCapacity = config.maxCapacity;
        _this._maxRetries = config.maxRetries;
        _this._name = config.name;
        _this._nonOverridableArguments = config.nonOverridableArguments;
        _this._numberOfWorkers = config.numberOfWorkers;
        _this._roleArn = config.roleArn;
        _this._securityConfiguration = config.securityConfiguration;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._timeout = config.timeout;
        _this._workerType = config.workerType;
        _this._command = config.command;
        _this._executionProperty = config.executionProperty;
        _this._notificationProperty = config.notificationProperty;
        return _this;
    }
    Object.defineProperty(GlueJob.prototype, "arn", {
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
    Object.defineProperty(GlueJob.prototype, "connections", {
        get: function () {
            return this.getListAttribute('connections');
        },
        set: function (value) {
            this._connections = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueJob.prototype.resetConnections = function () {
        this._connections = undefined;
    };
    Object.defineProperty(GlueJob.prototype, "connectionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._connections;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueJob.prototype, "defaultArguments", {
        get: function () {
            return this.interpolationForAttribute('default_arguments');
        },
        set: function (value) {
            this._defaultArguments = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueJob.prototype.resetDefaultArguments = function () {
        this._defaultArguments = undefined;
    };
    Object.defineProperty(GlueJob.prototype, "defaultArgumentsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultArguments;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueJob.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueJob.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(GlueJob.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueJob.prototype, "glueVersion", {
        get: function () {
            return this.getStringAttribute('glue_version');
        },
        set: function (value) {
            this._glueVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueJob.prototype.resetGlueVersion = function () {
        this._glueVersion = undefined;
    };
    Object.defineProperty(GlueJob.prototype, "glueVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._glueVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueJob.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueJob.prototype, "maxCapacity", {
        get: function () {
            return this.getNumberAttribute('max_capacity');
        },
        set: function (value) {
            this._maxCapacity = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueJob.prototype.resetMaxCapacity = function () {
        this._maxCapacity = undefined;
    };
    Object.defineProperty(GlueJob.prototype, "maxCapacityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxCapacity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueJob.prototype, "maxRetries", {
        get: function () {
            return this.getNumberAttribute('max_retries');
        },
        set: function (value) {
            this._maxRetries = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueJob.prototype.resetMaxRetries = function () {
        this._maxRetries = undefined;
    };
    Object.defineProperty(GlueJob.prototype, "maxRetriesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxRetries;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueJob.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueJob.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueJob.prototype, "nonOverridableArguments", {
        get: function () {
            return this.interpolationForAttribute('non_overridable_arguments');
        },
        set: function (value) {
            this._nonOverridableArguments = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueJob.prototype.resetNonOverridableArguments = function () {
        this._nonOverridableArguments = undefined;
    };
    Object.defineProperty(GlueJob.prototype, "nonOverridableArgumentsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._nonOverridableArguments;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueJob.prototype, "numberOfWorkers", {
        get: function () {
            return this.getNumberAttribute('number_of_workers');
        },
        set: function (value) {
            this._numberOfWorkers = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueJob.prototype.resetNumberOfWorkers = function () {
        this._numberOfWorkers = undefined;
    };
    Object.defineProperty(GlueJob.prototype, "numberOfWorkersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._numberOfWorkers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueJob.prototype, "roleArn", {
        get: function () {
            return this.getStringAttribute('role_arn');
        },
        set: function (value) {
            this._roleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueJob.prototype, "roleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._roleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueJob.prototype, "securityConfiguration", {
        get: function () {
            return this.getStringAttribute('security_configuration');
        },
        set: function (value) {
            this._securityConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueJob.prototype.resetSecurityConfiguration = function () {
        this._securityConfiguration = undefined;
    };
    Object.defineProperty(GlueJob.prototype, "securityConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._securityConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueJob.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueJob.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(GlueJob.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueJob.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueJob.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(GlueJob.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueJob.prototype, "timeout", {
        get: function () {
            return this.getNumberAttribute('timeout');
        },
        set: function (value) {
            this._timeout = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueJob.prototype.resetTimeout = function () {
        this._timeout = undefined;
    };
    Object.defineProperty(GlueJob.prototype, "timeoutInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeout;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueJob.prototype, "workerType", {
        get: function () {
            return this.getStringAttribute('worker_type');
        },
        set: function (value) {
            this._workerType = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueJob.prototype.resetWorkerType = function () {
        this._workerType = undefined;
    };
    Object.defineProperty(GlueJob.prototype, "workerTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._workerType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueJob.prototype, "command", {
        get: function () {
            return this.interpolationForAttribute('command');
        },
        set: function (value) {
            this._command = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueJob.prototype, "commandInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._command;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueJob.prototype, "executionProperty", {
        get: function () {
            return this.interpolationForAttribute('execution_property');
        },
        set: function (value) {
            this._executionProperty = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueJob.prototype.resetExecutionProperty = function () {
        this._executionProperty = undefined;
    };
    Object.defineProperty(GlueJob.prototype, "executionPropertyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._executionProperty;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueJob.prototype, "notificationProperty", {
        get: function () {
            return this.interpolationForAttribute('notification_property');
        },
        set: function (value) {
            this._notificationProperty = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueJob.prototype.resetNotificationProperty = function () {
        this._notificationProperty = undefined;
    };
    Object.defineProperty(GlueJob.prototype, "notificationPropertyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._notificationProperty;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    GlueJob.prototype.synthesizeAttributes = function () {
        return {
            connections: cdktf.listMapper(cdktf.stringToTerraform)(this._connections),
            default_arguments: cdktf.hashMapper(cdktf.anyToTerraform)(this._defaultArguments),
            description: cdktf.stringToTerraform(this._description),
            glue_version: cdktf.stringToTerraform(this._glueVersion),
            max_capacity: cdktf.numberToTerraform(this._maxCapacity),
            max_retries: cdktf.numberToTerraform(this._maxRetries),
            name: cdktf.stringToTerraform(this._name),
            non_overridable_arguments: cdktf.hashMapper(cdktf.anyToTerraform)(this._nonOverridableArguments),
            number_of_workers: cdktf.numberToTerraform(this._numberOfWorkers),
            role_arn: cdktf.stringToTerraform(this._roleArn),
            security_configuration: cdktf.stringToTerraform(this._securityConfiguration),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            timeout: cdktf.numberToTerraform(this._timeout),
            worker_type: cdktf.stringToTerraform(this._workerType),
            command: cdktf.listMapper(glueJobCommandToTerraform)(this._command),
            execution_property: cdktf.listMapper(glueJobExecutionPropertyToTerraform)(this._executionProperty),
            notification_property: cdktf.listMapper(glueJobNotificationPropertyToTerraform)(this._notificationProperty)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    GlueJob.tfResourceType = "aws_glue_job";
    return GlueJob;
}(cdktf.TerraformResource));
exports.GlueJob = GlueJob;
