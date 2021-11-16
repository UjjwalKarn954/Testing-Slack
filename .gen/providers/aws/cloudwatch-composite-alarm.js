"use strict";
// https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm.html
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
exports.CloudwatchCompositeAlarm = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm.html aws_cloudwatch_composite_alarm}
*/
var CloudwatchCompositeAlarm = /** @class */ (function (_super) {
    __extends(CloudwatchCompositeAlarm, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_composite_alarm.html aws_cloudwatch_composite_alarm} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchCompositeAlarmConfig
    */
    function CloudwatchCompositeAlarm(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_cloudwatch_composite_alarm',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._actionsEnabled = config.actionsEnabled;
        _this._alarmActions = config.alarmActions;
        _this._alarmDescription = config.alarmDescription;
        _this._alarmName = config.alarmName;
        _this._alarmRule = config.alarmRule;
        _this._insufficientDataActions = config.insufficientDataActions;
        _this._okActions = config.okActions;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(CloudwatchCompositeAlarm.prototype, "actionsEnabled", {
        get: function () {
            return this.getBooleanAttribute('actions_enabled');
        },
        set: function (value) {
            this._actionsEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchCompositeAlarm.prototype.resetActionsEnabled = function () {
        this._actionsEnabled = undefined;
    };
    Object.defineProperty(CloudwatchCompositeAlarm.prototype, "actionsEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._actionsEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchCompositeAlarm.prototype, "alarmActions", {
        get: function () {
            return this.getListAttribute('alarm_actions');
        },
        set: function (value) {
            this._alarmActions = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchCompositeAlarm.prototype.resetAlarmActions = function () {
        this._alarmActions = undefined;
    };
    Object.defineProperty(CloudwatchCompositeAlarm.prototype, "alarmActionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._alarmActions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchCompositeAlarm.prototype, "alarmDescription", {
        get: function () {
            return this.getStringAttribute('alarm_description');
        },
        set: function (value) {
            this._alarmDescription = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchCompositeAlarm.prototype.resetAlarmDescription = function () {
        this._alarmDescription = undefined;
    };
    Object.defineProperty(CloudwatchCompositeAlarm.prototype, "alarmDescriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._alarmDescription;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchCompositeAlarm.prototype, "alarmName", {
        get: function () {
            return this.getStringAttribute('alarm_name');
        },
        set: function (value) {
            this._alarmName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchCompositeAlarm.prototype, "alarmNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._alarmName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchCompositeAlarm.prototype, "alarmRule", {
        get: function () {
            return this.getStringAttribute('alarm_rule');
        },
        set: function (value) {
            this._alarmRule = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchCompositeAlarm.prototype, "alarmRuleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._alarmRule;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchCompositeAlarm.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchCompositeAlarm.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchCompositeAlarm.prototype, "insufficientDataActions", {
        get: function () {
            return this.getListAttribute('insufficient_data_actions');
        },
        set: function (value) {
            this._insufficientDataActions = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchCompositeAlarm.prototype.resetInsufficientDataActions = function () {
        this._insufficientDataActions = undefined;
    };
    Object.defineProperty(CloudwatchCompositeAlarm.prototype, "insufficientDataActionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._insufficientDataActions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchCompositeAlarm.prototype, "okActions", {
        get: function () {
            return this.getListAttribute('ok_actions');
        },
        set: function (value) {
            this._okActions = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchCompositeAlarm.prototype.resetOkActions = function () {
        this._okActions = undefined;
    };
    Object.defineProperty(CloudwatchCompositeAlarm.prototype, "okActionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._okActions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchCompositeAlarm.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchCompositeAlarm.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(CloudwatchCompositeAlarm.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchCompositeAlarm.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchCompositeAlarm.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(CloudwatchCompositeAlarm.prototype, "tagsAllInput", {
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
    CloudwatchCompositeAlarm.prototype.synthesizeAttributes = function () {
        return {
            actions_enabled: cdktf.booleanToTerraform(this._actionsEnabled),
            alarm_actions: cdktf.listMapper(cdktf.stringToTerraform)(this._alarmActions),
            alarm_description: cdktf.stringToTerraform(this._alarmDescription),
            alarm_name: cdktf.stringToTerraform(this._alarmName),
            alarm_rule: cdktf.stringToTerraform(this._alarmRule),
            insufficient_data_actions: cdktf.listMapper(cdktf.stringToTerraform)(this._insufficientDataActions),
            ok_actions: cdktf.listMapper(cdktf.stringToTerraform)(this._okActions),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CloudwatchCompositeAlarm.tfResourceType = "aws_cloudwatch_composite_alarm";
    return CloudwatchCompositeAlarm;
}(cdktf.TerraformResource));
exports.CloudwatchCompositeAlarm = CloudwatchCompositeAlarm;
