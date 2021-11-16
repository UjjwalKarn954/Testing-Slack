"use strict";
// https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html
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
exports.SyntheticsCanary = exports.SyntheticsCanaryTimeline = void 0;
var cdktf = require("cdktf");
var SyntheticsCanaryTimeline = /** @class */ (function (_super) {
    __extends(SyntheticsCanaryTimeline, _super);
    function SyntheticsCanaryTimeline() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SyntheticsCanaryTimeline.prototype, "created", {
        // created - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SyntheticsCanaryTimeline.prototype, "lastModified", {
        // last_modified - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_modified');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SyntheticsCanaryTimeline.prototype, "lastStarted", {
        // last_started - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_started');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SyntheticsCanaryTimeline.prototype, "lastStopped", {
        // last_stopped - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_stopped');
        },
        enumerable: false,
        configurable: true
    });
    return SyntheticsCanaryTimeline;
}(cdktf.ComplexComputedList));
exports.SyntheticsCanaryTimeline = SyntheticsCanaryTimeline;
function syntheticsCanaryRunConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        active_tracing: cdktf.booleanToTerraform(struct.activeTracing),
        memory_in_mb: cdktf.numberToTerraform(struct.memoryInMb),
        timeout_in_seconds: cdktf.numberToTerraform(struct.timeoutInSeconds)
    };
}
function syntheticsCanaryScheduleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        duration_in_seconds: cdktf.numberToTerraform(struct.durationInSeconds),
        expression: cdktf.stringToTerraform(struct.expression)
    };
}
function syntheticsCanaryVpcConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroupIds),
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.subnetIds)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html aws_synthetics_canary}
*/
var SyntheticsCanary = /** @class */ (function (_super) {
    __extends(SyntheticsCanary, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/synthetics_canary.html aws_synthetics_canary} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SyntheticsCanaryConfig
    */
    function SyntheticsCanary(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_synthetics_canary',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._artifactS3Location = config.artifactS3Location;
        _this._executionRoleArn = config.executionRoleArn;
        _this._failureRetentionPeriod = config.failureRetentionPeriod;
        _this._handler = config.handler;
        _this._name = config.name;
        _this._runtimeVersion = config.runtimeVersion;
        _this._s3Bucket = config.s3Bucket;
        _this._s3Key = config.s3Key;
        _this._s3Version = config.s3Version;
        _this._startCanary = config.startCanary;
        _this._successRetentionPeriod = config.successRetentionPeriod;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._zipFile = config.zipFile;
        _this._runConfig = config.runConfig;
        _this._schedule = config.schedule;
        _this._vpcConfig = config.vpcConfig;
        return _this;
    }
    Object.defineProperty(SyntheticsCanary.prototype, "arn", {
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
    Object.defineProperty(SyntheticsCanary.prototype, "artifactS3Location", {
        get: function () {
            return this.getStringAttribute('artifact_s3_location');
        },
        set: function (value) {
            this._artifactS3Location = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SyntheticsCanary.prototype, "artifactS3LocationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._artifactS3Location;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SyntheticsCanary.prototype, "engineArn", {
        // engine_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('engine_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SyntheticsCanary.prototype, "executionRoleArn", {
        get: function () {
            return this.getStringAttribute('execution_role_arn');
        },
        set: function (value) {
            this._executionRoleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SyntheticsCanary.prototype, "executionRoleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._executionRoleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SyntheticsCanary.prototype, "failureRetentionPeriod", {
        get: function () {
            return this.getNumberAttribute('failure_retention_period');
        },
        set: function (value) {
            this._failureRetentionPeriod = value;
        },
        enumerable: false,
        configurable: true
    });
    SyntheticsCanary.prototype.resetFailureRetentionPeriod = function () {
        this._failureRetentionPeriod = undefined;
    };
    Object.defineProperty(SyntheticsCanary.prototype, "failureRetentionPeriodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._failureRetentionPeriod;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SyntheticsCanary.prototype, "handler", {
        get: function () {
            return this.getStringAttribute('handler');
        },
        set: function (value) {
            this._handler = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SyntheticsCanary.prototype, "handlerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._handler;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SyntheticsCanary.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SyntheticsCanary.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SyntheticsCanary.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SyntheticsCanary.prototype, "runtimeVersion", {
        get: function () {
            return this.getStringAttribute('runtime_version');
        },
        set: function (value) {
            this._runtimeVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SyntheticsCanary.prototype, "runtimeVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._runtimeVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SyntheticsCanary.prototype, "s3Bucket", {
        get: function () {
            return this.getStringAttribute('s3_bucket');
        },
        set: function (value) {
            this._s3Bucket = value;
        },
        enumerable: false,
        configurable: true
    });
    SyntheticsCanary.prototype.resetS3Bucket = function () {
        this._s3Bucket = undefined;
    };
    Object.defineProperty(SyntheticsCanary.prototype, "s3BucketInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._s3Bucket;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SyntheticsCanary.prototype, "s3Key", {
        get: function () {
            return this.getStringAttribute('s3_key');
        },
        set: function (value) {
            this._s3Key = value;
        },
        enumerable: false,
        configurable: true
    });
    SyntheticsCanary.prototype.resetS3Key = function () {
        this._s3Key = undefined;
    };
    Object.defineProperty(SyntheticsCanary.prototype, "s3KeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._s3Key;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SyntheticsCanary.prototype, "s3Version", {
        get: function () {
            return this.getStringAttribute('s3_version');
        },
        set: function (value) {
            this._s3Version = value;
        },
        enumerable: false,
        configurable: true
    });
    SyntheticsCanary.prototype.resetS3Version = function () {
        this._s3Version = undefined;
    };
    Object.defineProperty(SyntheticsCanary.prototype, "s3VersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._s3Version;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SyntheticsCanary.prototype, "sourceLocationArn", {
        // source_location_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('source_location_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SyntheticsCanary.prototype, "startCanary", {
        get: function () {
            return this.getBooleanAttribute('start_canary');
        },
        set: function (value) {
            this._startCanary = value;
        },
        enumerable: false,
        configurable: true
    });
    SyntheticsCanary.prototype.resetStartCanary = function () {
        this._startCanary = undefined;
    };
    Object.defineProperty(SyntheticsCanary.prototype, "startCanaryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._startCanary;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SyntheticsCanary.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SyntheticsCanary.prototype, "successRetentionPeriod", {
        get: function () {
            return this.getNumberAttribute('success_retention_period');
        },
        set: function (value) {
            this._successRetentionPeriod = value;
        },
        enumerable: false,
        configurable: true
    });
    SyntheticsCanary.prototype.resetSuccessRetentionPeriod = function () {
        this._successRetentionPeriod = undefined;
    };
    Object.defineProperty(SyntheticsCanary.prototype, "successRetentionPeriodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._successRetentionPeriod;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SyntheticsCanary.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    SyntheticsCanary.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(SyntheticsCanary.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SyntheticsCanary.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    SyntheticsCanary.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(SyntheticsCanary.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    // timeline - computed: true, optional: false, required: false
    SyntheticsCanary.prototype.timeline = function (index) {
        return new SyntheticsCanaryTimeline(this, 'timeline', index);
    };
    Object.defineProperty(SyntheticsCanary.prototype, "zipFile", {
        get: function () {
            return this.getStringAttribute('zip_file');
        },
        set: function (value) {
            this._zipFile = value;
        },
        enumerable: false,
        configurable: true
    });
    SyntheticsCanary.prototype.resetZipFile = function () {
        this._zipFile = undefined;
    };
    Object.defineProperty(SyntheticsCanary.prototype, "zipFileInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._zipFile;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SyntheticsCanary.prototype, "runConfig", {
        get: function () {
            return this.interpolationForAttribute('run_config');
        },
        set: function (value) {
            this._runConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    SyntheticsCanary.prototype.resetRunConfig = function () {
        this._runConfig = undefined;
    };
    Object.defineProperty(SyntheticsCanary.prototype, "runConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._runConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SyntheticsCanary.prototype, "schedule", {
        get: function () {
            return this.interpolationForAttribute('schedule');
        },
        set: function (value) {
            this._schedule = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SyntheticsCanary.prototype, "scheduleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._schedule;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SyntheticsCanary.prototype, "vpcConfig", {
        get: function () {
            return this.interpolationForAttribute('vpc_config');
        },
        set: function (value) {
            this._vpcConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    SyntheticsCanary.prototype.resetVpcConfig = function () {
        this._vpcConfig = undefined;
    };
    Object.defineProperty(SyntheticsCanary.prototype, "vpcConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcConfig;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SyntheticsCanary.prototype.synthesizeAttributes = function () {
        return {
            artifact_s3_location: cdktf.stringToTerraform(this._artifactS3Location),
            execution_role_arn: cdktf.stringToTerraform(this._executionRoleArn),
            failure_retention_period: cdktf.numberToTerraform(this._failureRetentionPeriod),
            handler: cdktf.stringToTerraform(this._handler),
            name: cdktf.stringToTerraform(this._name),
            runtime_version: cdktf.stringToTerraform(this._runtimeVersion),
            s3_bucket: cdktf.stringToTerraform(this._s3Bucket),
            s3_key: cdktf.stringToTerraform(this._s3Key),
            s3_version: cdktf.stringToTerraform(this._s3Version),
            start_canary: cdktf.booleanToTerraform(this._startCanary),
            success_retention_period: cdktf.numberToTerraform(this._successRetentionPeriod),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            zip_file: cdktf.stringToTerraform(this._zipFile),
            run_config: cdktf.listMapper(syntheticsCanaryRunConfigToTerraform)(this._runConfig),
            schedule: cdktf.listMapper(syntheticsCanaryScheduleToTerraform)(this._schedule),
            vpc_config: cdktf.listMapper(syntheticsCanaryVpcConfigToTerraform)(this._vpcConfig)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SyntheticsCanary.tfResourceType = "aws_synthetics_canary";
    return SyntheticsCanary;
}(cdktf.TerraformResource));
exports.SyntheticsCanary = SyntheticsCanary;
