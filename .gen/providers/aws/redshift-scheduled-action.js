"use strict";
// https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html
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
exports.RedshiftScheduledAction = void 0;
var cdktf = require("cdktf");
function redshiftScheduledActionTargetActionPauseClusterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cluster_identifier: cdktf.stringToTerraform(struct.clusterIdentifier)
    };
}
function redshiftScheduledActionTargetActionResizeClusterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        classic: cdktf.booleanToTerraform(struct.classic),
        cluster_identifier: cdktf.stringToTerraform(struct.clusterIdentifier),
        cluster_type: cdktf.stringToTerraform(struct.clusterType),
        node_type: cdktf.stringToTerraform(struct.nodeType),
        number_of_nodes: cdktf.numberToTerraform(struct.numberOfNodes)
    };
}
function redshiftScheduledActionTargetActionResumeClusterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cluster_identifier: cdktf.stringToTerraform(struct.clusterIdentifier)
    };
}
function redshiftScheduledActionTargetActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        pause_cluster: cdktf.listMapper(redshiftScheduledActionTargetActionPauseClusterToTerraform)(struct.pauseCluster),
        resize_cluster: cdktf.listMapper(redshiftScheduledActionTargetActionResizeClusterToTerraform)(struct.resizeCluster),
        resume_cluster: cdktf.listMapper(redshiftScheduledActionTargetActionResumeClusterToTerraform)(struct.resumeCluster)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html aws_redshift_scheduled_action}
*/
var RedshiftScheduledAction = /** @class */ (function (_super) {
    __extends(RedshiftScheduledAction, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html aws_redshift_scheduled_action} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RedshiftScheduledActionConfig
    */
    function RedshiftScheduledAction(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_redshift_scheduled_action',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._description = config.description;
        _this._enable = config.enable;
        _this._endTime = config.endTime;
        _this._iamRole = config.iamRole;
        _this._name = config.name;
        _this._schedule = config.schedule;
        _this._startTime = config.startTime;
        _this._targetAction = config.targetAction;
        return _this;
    }
    Object.defineProperty(RedshiftScheduledAction.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    RedshiftScheduledAction.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(RedshiftScheduledAction.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftScheduledAction.prototype, "enable", {
        get: function () {
            return this.getBooleanAttribute('enable');
        },
        set: function (value) {
            this._enable = value;
        },
        enumerable: false,
        configurable: true
    });
    RedshiftScheduledAction.prototype.resetEnable = function () {
        this._enable = undefined;
    };
    Object.defineProperty(RedshiftScheduledAction.prototype, "enableInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enable;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftScheduledAction.prototype, "endTime", {
        get: function () {
            return this.getStringAttribute('end_time');
        },
        set: function (value) {
            this._endTime = value;
        },
        enumerable: false,
        configurable: true
    });
    RedshiftScheduledAction.prototype.resetEndTime = function () {
        this._endTime = undefined;
    };
    Object.defineProperty(RedshiftScheduledAction.prototype, "endTimeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._endTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftScheduledAction.prototype, "iamRole", {
        get: function () {
            return this.getStringAttribute('iam_role');
        },
        set: function (value) {
            this._iamRole = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftScheduledAction.prototype, "iamRoleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._iamRole;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftScheduledAction.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftScheduledAction.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftScheduledAction.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftScheduledAction.prototype, "schedule", {
        get: function () {
            return this.getStringAttribute('schedule');
        },
        set: function (value) {
            this._schedule = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftScheduledAction.prototype, "scheduleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._schedule;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftScheduledAction.prototype, "startTime", {
        get: function () {
            return this.getStringAttribute('start_time');
        },
        set: function (value) {
            this._startTime = value;
        },
        enumerable: false,
        configurable: true
    });
    RedshiftScheduledAction.prototype.resetStartTime = function () {
        this._startTime = undefined;
    };
    Object.defineProperty(RedshiftScheduledAction.prototype, "startTimeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._startTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftScheduledAction.prototype, "targetAction", {
        get: function () {
            return this.interpolationForAttribute('target_action');
        },
        set: function (value) {
            this._targetAction = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RedshiftScheduledAction.prototype, "targetActionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetAction;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    RedshiftScheduledAction.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            enable: cdktf.booleanToTerraform(this._enable),
            end_time: cdktf.stringToTerraform(this._endTime),
            iam_role: cdktf.stringToTerraform(this._iamRole),
            name: cdktf.stringToTerraform(this._name),
            schedule: cdktf.stringToTerraform(this._schedule),
            start_time: cdktf.stringToTerraform(this._startTime),
            target_action: cdktf.listMapper(redshiftScheduledActionTargetActionToTerraform)(this._targetAction)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    RedshiftScheduledAction.tfResourceType = "aws_redshift_scheduled_action";
    return RedshiftScheduledAction;
}(cdktf.TerraformResource));
exports.RedshiftScheduledAction = RedshiftScheduledAction;
