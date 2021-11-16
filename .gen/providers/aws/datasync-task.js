"use strict";
// https://www.terraform.io/docs/providers/aws/r/datasync_task.html
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
exports.DatasyncTask = void 0;
var cdktf = require("cdktf");
function datasyncTaskExcludesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        filter_type: cdktf.stringToTerraform(struct.filterType),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function datasyncTaskOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        atime: cdktf.stringToTerraform(struct.atime),
        bytes_per_second: cdktf.numberToTerraform(struct.bytesPerSecond),
        gid: cdktf.stringToTerraform(struct.gid),
        log_level: cdktf.stringToTerraform(struct.logLevel),
        mtime: cdktf.stringToTerraform(struct.mtime),
        overwrite_mode: cdktf.stringToTerraform(struct.overwriteMode),
        posix_permissions: cdktf.stringToTerraform(struct.posixPermissions),
        preserve_deleted_files: cdktf.stringToTerraform(struct.preserveDeletedFiles),
        preserve_devices: cdktf.stringToTerraform(struct.preserveDevices),
        task_queueing: cdktf.stringToTerraform(struct.taskQueueing),
        transfer_mode: cdktf.stringToTerraform(struct.transferMode),
        uid: cdktf.stringToTerraform(struct.uid),
        verify_mode: cdktf.stringToTerraform(struct.verifyMode)
    };
}
function datasyncTaskScheduleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        schedule_expression: cdktf.stringToTerraform(struct.scheduleExpression)
    };
}
function datasyncTaskTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html aws_datasync_task}
*/
var DatasyncTask = /** @class */ (function (_super) {
    __extends(DatasyncTask, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html aws_datasync_task} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatasyncTaskConfig
    */
    function DatasyncTask(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_datasync_task',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._cloudwatchLogGroupArn = config.cloudwatchLogGroupArn;
        _this._destinationLocationArn = config.destinationLocationArn;
        _this._name = config.name;
        _this._sourceLocationArn = config.sourceLocationArn;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._excludes = config.excludes;
        _this._options = config.options;
        _this._schedule = config.schedule;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(DatasyncTask.prototype, "arn", {
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
    Object.defineProperty(DatasyncTask.prototype, "cloudwatchLogGroupArn", {
        get: function () {
            return this.getStringAttribute('cloudwatch_log_group_arn');
        },
        set: function (value) {
            this._cloudwatchLogGroupArn = value;
        },
        enumerable: false,
        configurable: true
    });
    DatasyncTask.prototype.resetCloudwatchLogGroupArn = function () {
        this._cloudwatchLogGroupArn = undefined;
    };
    Object.defineProperty(DatasyncTask.prototype, "cloudwatchLogGroupArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cloudwatchLogGroupArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncTask.prototype, "destinationLocationArn", {
        get: function () {
            return this.getStringAttribute('destination_location_arn');
        },
        set: function (value) {
            this._destinationLocationArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncTask.prototype, "destinationLocationArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._destinationLocationArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncTask.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncTask.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    DatasyncTask.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(DatasyncTask.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncTask.prototype, "sourceLocationArn", {
        get: function () {
            return this.getStringAttribute('source_location_arn');
        },
        set: function (value) {
            this._sourceLocationArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncTask.prototype, "sourceLocationArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sourceLocationArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncTask.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DatasyncTask.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DatasyncTask.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncTask.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    DatasyncTask.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(DatasyncTask.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncTask.prototype, "excludes", {
        get: function () {
            return this.interpolationForAttribute('excludes');
        },
        set: function (value) {
            this._excludes = value;
        },
        enumerable: false,
        configurable: true
    });
    DatasyncTask.prototype.resetExcludes = function () {
        this._excludes = undefined;
    };
    Object.defineProperty(DatasyncTask.prototype, "excludesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._excludes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncTask.prototype, "options", {
        get: function () {
            return this.interpolationForAttribute('options');
        },
        set: function (value) {
            this._options = value;
        },
        enumerable: false,
        configurable: true
    });
    DatasyncTask.prototype.resetOptions = function () {
        this._options = undefined;
    };
    Object.defineProperty(DatasyncTask.prototype, "optionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._options;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncTask.prototype, "schedule", {
        get: function () {
            return this.interpolationForAttribute('schedule');
        },
        set: function (value) {
            this._schedule = value;
        },
        enumerable: false,
        configurable: true
    });
    DatasyncTask.prototype.resetSchedule = function () {
        this._schedule = undefined;
    };
    Object.defineProperty(DatasyncTask.prototype, "scheduleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._schedule;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatasyncTask.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    DatasyncTask.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(DatasyncTask.prototype, "timeoutsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeouts;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DatasyncTask.prototype.synthesizeAttributes = function () {
        return {
            cloudwatch_log_group_arn: cdktf.stringToTerraform(this._cloudwatchLogGroupArn),
            destination_location_arn: cdktf.stringToTerraform(this._destinationLocationArn),
            name: cdktf.stringToTerraform(this._name),
            source_location_arn: cdktf.stringToTerraform(this._sourceLocationArn),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            excludes: cdktf.listMapper(datasyncTaskExcludesToTerraform)(this._excludes),
            options: cdktf.listMapper(datasyncTaskOptionsToTerraform)(this._options),
            schedule: cdktf.listMapper(datasyncTaskScheduleToTerraform)(this._schedule),
            timeouts: datasyncTaskTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DatasyncTask.tfResourceType = "aws_datasync_task";
    return DatasyncTask;
}(cdktf.TerraformResource));
exports.DatasyncTask = DatasyncTask;
