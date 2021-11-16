"use strict";
// https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule.html
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
exports.AutoscalingSchedule = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule.html aws_autoscaling_schedule}
*/
var AutoscalingSchedule = /** @class */ (function (_super) {
    __extends(AutoscalingSchedule, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule.html aws_autoscaling_schedule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AutoscalingScheduleConfig
    */
    function AutoscalingSchedule(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_autoscaling_schedule',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._autoscalingGroupName = config.autoscalingGroupName;
        _this._desiredCapacity = config.desiredCapacity;
        _this._endTime = config.endTime;
        _this._maxSize = config.maxSize;
        _this._minSize = config.minSize;
        _this._recurrence = config.recurrence;
        _this._scheduledActionName = config.scheduledActionName;
        _this._startTime = config.startTime;
        _this._timeZone = config.timeZone;
        return _this;
    }
    Object.defineProperty(AutoscalingSchedule.prototype, "arn", {
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
    Object.defineProperty(AutoscalingSchedule.prototype, "autoscalingGroupName", {
        get: function () {
            return this.getStringAttribute('autoscaling_group_name');
        },
        set: function (value) {
            this._autoscalingGroupName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingSchedule.prototype, "autoscalingGroupNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoscalingGroupName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingSchedule.prototype, "desiredCapacity", {
        get: function () {
            return this.getNumberAttribute('desired_capacity');
        },
        set: function (value) {
            this._desiredCapacity = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingSchedule.prototype.resetDesiredCapacity = function () {
        this._desiredCapacity = undefined;
    };
    Object.defineProperty(AutoscalingSchedule.prototype, "desiredCapacityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._desiredCapacity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingSchedule.prototype, "endTime", {
        get: function () {
            return this.getStringAttribute('end_time');
        },
        set: function (value) {
            this._endTime = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingSchedule.prototype.resetEndTime = function () {
        this._endTime = undefined;
    };
    Object.defineProperty(AutoscalingSchedule.prototype, "endTimeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._endTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingSchedule.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingSchedule.prototype, "maxSize", {
        get: function () {
            return this.getNumberAttribute('max_size');
        },
        set: function (value) {
            this._maxSize = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingSchedule.prototype.resetMaxSize = function () {
        this._maxSize = undefined;
    };
    Object.defineProperty(AutoscalingSchedule.prototype, "maxSizeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingSchedule.prototype, "minSize", {
        get: function () {
            return this.getNumberAttribute('min_size');
        },
        set: function (value) {
            this._minSize = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingSchedule.prototype.resetMinSize = function () {
        this._minSize = undefined;
    };
    Object.defineProperty(AutoscalingSchedule.prototype, "minSizeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._minSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingSchedule.prototype, "recurrence", {
        get: function () {
            return this.getStringAttribute('recurrence');
        },
        set: function (value) {
            this._recurrence = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingSchedule.prototype.resetRecurrence = function () {
        this._recurrence = undefined;
    };
    Object.defineProperty(AutoscalingSchedule.prototype, "recurrenceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._recurrence;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingSchedule.prototype, "scheduledActionName", {
        get: function () {
            return this.getStringAttribute('scheduled_action_name');
        },
        set: function (value) {
            this._scheduledActionName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingSchedule.prototype, "scheduledActionNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scheduledActionName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingSchedule.prototype, "startTime", {
        get: function () {
            return this.getStringAttribute('start_time');
        },
        set: function (value) {
            this._startTime = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingSchedule.prototype.resetStartTime = function () {
        this._startTime = undefined;
    };
    Object.defineProperty(AutoscalingSchedule.prototype, "startTimeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._startTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingSchedule.prototype, "timeZone", {
        get: function () {
            return this.getStringAttribute('time_zone');
        },
        set: function (value) {
            this._timeZone = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingSchedule.prototype.resetTimeZone = function () {
        this._timeZone = undefined;
    };
    Object.defineProperty(AutoscalingSchedule.prototype, "timeZoneInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeZone;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    AutoscalingSchedule.prototype.synthesizeAttributes = function () {
        return {
            autoscaling_group_name: cdktf.stringToTerraform(this._autoscalingGroupName),
            desired_capacity: cdktf.numberToTerraform(this._desiredCapacity),
            end_time: cdktf.stringToTerraform(this._endTime),
            max_size: cdktf.numberToTerraform(this._maxSize),
            min_size: cdktf.numberToTerraform(this._minSize),
            recurrence: cdktf.stringToTerraform(this._recurrence),
            scheduled_action_name: cdktf.stringToTerraform(this._scheduledActionName),
            start_time: cdktf.stringToTerraform(this._startTime),
            time_zone: cdktf.stringToTerraform(this._timeZone)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    AutoscalingSchedule.tfResourceType = "aws_autoscaling_schedule";
    return AutoscalingSchedule;
}(cdktf.TerraformResource));
exports.AutoscalingSchedule = AutoscalingSchedule;
