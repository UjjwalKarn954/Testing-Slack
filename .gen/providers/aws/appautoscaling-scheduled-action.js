"use strict";
// https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html
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
exports.AppautoscalingScheduledAction = void 0;
var cdktf = require("cdktf");
function appautoscalingScheduledActionScalableTargetActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        max_capacity: cdktf.stringToTerraform(struct.maxCapacity),
        min_capacity: cdktf.stringToTerraform(struct.minCapacity)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html aws_appautoscaling_scheduled_action}
*/
var AppautoscalingScheduledAction = /** @class */ (function (_super) {
    __extends(AppautoscalingScheduledAction, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html aws_appautoscaling_scheduled_action} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppautoscalingScheduledActionConfig
    */
    function AppautoscalingScheduledAction(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_appautoscaling_scheduled_action',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._endTime = config.endTime;
        _this._name = config.name;
        _this._resourceId = config.resourceId;
        _this._scalableDimension = config.scalableDimension;
        _this._schedule = config.schedule;
        _this._serviceNamespace = config.serviceNamespace;
        _this._startTime = config.startTime;
        _this._timezone = config.timezone;
        _this._scalableTargetAction = config.scalableTargetAction;
        return _this;
    }
    Object.defineProperty(AppautoscalingScheduledAction.prototype, "arn", {
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
    Object.defineProperty(AppautoscalingScheduledAction.prototype, "endTime", {
        get: function () {
            return this.getStringAttribute('end_time');
        },
        set: function (value) {
            this._endTime = value;
        },
        enumerable: false,
        configurable: true
    });
    AppautoscalingScheduledAction.prototype.resetEndTime = function () {
        this._endTime = undefined;
    };
    Object.defineProperty(AppautoscalingScheduledAction.prototype, "endTimeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._endTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppautoscalingScheduledAction.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppautoscalingScheduledAction.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppautoscalingScheduledAction.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppautoscalingScheduledAction.prototype, "resourceId", {
        get: function () {
            return this.getStringAttribute('resource_id');
        },
        set: function (value) {
            this._resourceId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppautoscalingScheduledAction.prototype, "resourceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resourceId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppautoscalingScheduledAction.prototype, "scalableDimension", {
        get: function () {
            return this.getStringAttribute('scalable_dimension');
        },
        set: function (value) {
            this._scalableDimension = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppautoscalingScheduledAction.prototype, "scalableDimensionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scalableDimension;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppautoscalingScheduledAction.prototype, "schedule", {
        get: function () {
            return this.getStringAttribute('schedule');
        },
        set: function (value) {
            this._schedule = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppautoscalingScheduledAction.prototype, "scheduleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._schedule;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppautoscalingScheduledAction.prototype, "serviceNamespace", {
        get: function () {
            return this.getStringAttribute('service_namespace');
        },
        set: function (value) {
            this._serviceNamespace = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppautoscalingScheduledAction.prototype, "serviceNamespaceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serviceNamespace;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppautoscalingScheduledAction.prototype, "startTime", {
        get: function () {
            return this.getStringAttribute('start_time');
        },
        set: function (value) {
            this._startTime = value;
        },
        enumerable: false,
        configurable: true
    });
    AppautoscalingScheduledAction.prototype.resetStartTime = function () {
        this._startTime = undefined;
    };
    Object.defineProperty(AppautoscalingScheduledAction.prototype, "startTimeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._startTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppautoscalingScheduledAction.prototype, "timezone", {
        get: function () {
            return this.getStringAttribute('timezone');
        },
        set: function (value) {
            this._timezone = value;
        },
        enumerable: false,
        configurable: true
    });
    AppautoscalingScheduledAction.prototype.resetTimezone = function () {
        this._timezone = undefined;
    };
    Object.defineProperty(AppautoscalingScheduledAction.prototype, "timezoneInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timezone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppautoscalingScheduledAction.prototype, "scalableTargetAction", {
        get: function () {
            return this.interpolationForAttribute('scalable_target_action');
        },
        set: function (value) {
            this._scalableTargetAction = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppautoscalingScheduledAction.prototype, "scalableTargetActionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scalableTargetAction;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    AppautoscalingScheduledAction.prototype.synthesizeAttributes = function () {
        return {
            end_time: cdktf.stringToTerraform(this._endTime),
            name: cdktf.stringToTerraform(this._name),
            resource_id: cdktf.stringToTerraform(this._resourceId),
            scalable_dimension: cdktf.stringToTerraform(this._scalableDimension),
            schedule: cdktf.stringToTerraform(this._schedule),
            service_namespace: cdktf.stringToTerraform(this._serviceNamespace),
            start_time: cdktf.stringToTerraform(this._startTime),
            timezone: cdktf.stringToTerraform(this._timezone),
            scalable_target_action: cdktf.listMapper(appautoscalingScheduledActionScalableTargetActionToTerraform)(this._scalableTargetAction)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    AppautoscalingScheduledAction.tfResourceType = "aws_appautoscaling_scheduled_action";
    return AppautoscalingScheduledAction;
}(cdktf.TerraformResource));
exports.AppautoscalingScheduledAction = AppautoscalingScheduledAction;
