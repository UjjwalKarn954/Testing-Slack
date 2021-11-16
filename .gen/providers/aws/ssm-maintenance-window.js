"use strict";
// https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window.html
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
exports.SsmMaintenanceWindow = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window.html aws_ssm_maintenance_window}
*/
var SsmMaintenanceWindow = /** @class */ (function (_super) {
    __extends(SsmMaintenanceWindow, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window.html aws_ssm_maintenance_window} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsmMaintenanceWindowConfig
    */
    function SsmMaintenanceWindow(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ssm_maintenance_window',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._allowUnassociatedTargets = config.allowUnassociatedTargets;
        _this._cutoff = config.cutoff;
        _this._description = config.description;
        _this._duration = config.duration;
        _this._enabled = config.enabled;
        _this._endDate = config.endDate;
        _this._name = config.name;
        _this._schedule = config.schedule;
        _this._scheduleOffset = config.scheduleOffset;
        _this._scheduleTimezone = config.scheduleTimezone;
        _this._startDate = config.startDate;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(SsmMaintenanceWindow.prototype, "allowUnassociatedTargets", {
        get: function () {
            return this.getBooleanAttribute('allow_unassociated_targets');
        },
        set: function (value) {
            this._allowUnassociatedTargets = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmMaintenanceWindow.prototype.resetAllowUnassociatedTargets = function () {
        this._allowUnassociatedTargets = undefined;
    };
    Object.defineProperty(SsmMaintenanceWindow.prototype, "allowUnassociatedTargetsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowUnassociatedTargets;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmMaintenanceWindow.prototype, "cutoff", {
        get: function () {
            return this.getNumberAttribute('cutoff');
        },
        set: function (value) {
            this._cutoff = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmMaintenanceWindow.prototype, "cutoffInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cutoff;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmMaintenanceWindow.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmMaintenanceWindow.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(SsmMaintenanceWindow.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmMaintenanceWindow.prototype, "duration", {
        get: function () {
            return this.getNumberAttribute('duration');
        },
        set: function (value) {
            this._duration = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmMaintenanceWindow.prototype, "durationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._duration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmMaintenanceWindow.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmMaintenanceWindow.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(SsmMaintenanceWindow.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmMaintenanceWindow.prototype, "endDate", {
        get: function () {
            return this.getStringAttribute('end_date');
        },
        set: function (value) {
            this._endDate = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmMaintenanceWindow.prototype.resetEndDate = function () {
        this._endDate = undefined;
    };
    Object.defineProperty(SsmMaintenanceWindow.prototype, "endDateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._endDate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmMaintenanceWindow.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmMaintenanceWindow.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmMaintenanceWindow.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmMaintenanceWindow.prototype, "schedule", {
        get: function () {
            return this.getStringAttribute('schedule');
        },
        set: function (value) {
            this._schedule = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmMaintenanceWindow.prototype, "scheduleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._schedule;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmMaintenanceWindow.prototype, "scheduleOffset", {
        get: function () {
            return this.getNumberAttribute('schedule_offset');
        },
        set: function (value) {
            this._scheduleOffset = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmMaintenanceWindow.prototype.resetScheduleOffset = function () {
        this._scheduleOffset = undefined;
    };
    Object.defineProperty(SsmMaintenanceWindow.prototype, "scheduleOffsetInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scheduleOffset;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmMaintenanceWindow.prototype, "scheduleTimezone", {
        get: function () {
            return this.getStringAttribute('schedule_timezone');
        },
        set: function (value) {
            this._scheduleTimezone = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmMaintenanceWindow.prototype.resetScheduleTimezone = function () {
        this._scheduleTimezone = undefined;
    };
    Object.defineProperty(SsmMaintenanceWindow.prototype, "scheduleTimezoneInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scheduleTimezone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmMaintenanceWindow.prototype, "startDate", {
        get: function () {
            return this.getStringAttribute('start_date');
        },
        set: function (value) {
            this._startDate = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmMaintenanceWindow.prototype.resetStartDate = function () {
        this._startDate = undefined;
    };
    Object.defineProperty(SsmMaintenanceWindow.prototype, "startDateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._startDate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmMaintenanceWindow.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmMaintenanceWindow.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(SsmMaintenanceWindow.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmMaintenanceWindow.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmMaintenanceWindow.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(SsmMaintenanceWindow.prototype, "tagsAllInput", {
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
    SsmMaintenanceWindow.prototype.synthesizeAttributes = function () {
        return {
            allow_unassociated_targets: cdktf.booleanToTerraform(this._allowUnassociatedTargets),
            cutoff: cdktf.numberToTerraform(this._cutoff),
            description: cdktf.stringToTerraform(this._description),
            duration: cdktf.numberToTerraform(this._duration),
            enabled: cdktf.booleanToTerraform(this._enabled),
            end_date: cdktf.stringToTerraform(this._endDate),
            name: cdktf.stringToTerraform(this._name),
            schedule: cdktf.stringToTerraform(this._schedule),
            schedule_offset: cdktf.numberToTerraform(this._scheduleOffset),
            schedule_timezone: cdktf.stringToTerraform(this._scheduleTimezone),
            start_date: cdktf.stringToTerraform(this._startDate),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SsmMaintenanceWindow.tfResourceType = "aws_ssm_maintenance_window";
    return SsmMaintenanceWindow;
}(cdktf.TerraformResource));
exports.SsmMaintenanceWindow = SsmMaintenanceWindow;
