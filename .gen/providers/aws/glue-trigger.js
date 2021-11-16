"use strict";
// https://www.terraform.io/docs/providers/aws/r/glue_trigger.html
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
exports.GlueTrigger = void 0;
var cdktf = require("cdktf");
function glueTriggerActionsNotificationPropertyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        notify_delay_after: cdktf.numberToTerraform(struct.notifyDelayAfter)
    };
}
function glueTriggerActionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arguments: cdktf.hashMapper(cdktf.anyToTerraform)(struct.arguments),
        crawler_name: cdktf.stringToTerraform(struct.crawlerName),
        job_name: cdktf.stringToTerraform(struct.jobName),
        security_configuration: cdktf.stringToTerraform(struct.securityConfiguration),
        timeout: cdktf.numberToTerraform(struct.timeout),
        notification_property: cdktf.listMapper(glueTriggerActionsNotificationPropertyToTerraform)(struct.notificationProperty)
    };
}
function glueTriggerPredicateConditionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        crawl_state: cdktf.stringToTerraform(struct.crawlState),
        crawler_name: cdktf.stringToTerraform(struct.crawlerName),
        job_name: cdktf.stringToTerraform(struct.jobName),
        logical_operator: cdktf.stringToTerraform(struct.logicalOperator),
        state: cdktf.stringToTerraform(struct.state)
    };
}
function glueTriggerPredicateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        logical: cdktf.stringToTerraform(struct.logical),
        conditions: cdktf.listMapper(glueTriggerPredicateConditionsToTerraform)(struct.conditions)
    };
}
function glueTriggerTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        "delete": cdktf.stringToTerraform(struct["delete"])
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html aws_glue_trigger}
*/
var GlueTrigger = /** @class */ (function (_super) {
    __extends(GlueTrigger, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger.html aws_glue_trigger} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueTriggerConfig
    */
    function GlueTrigger(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_glue_trigger',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._description = config.description;
        _this._enabled = config.enabled;
        _this._name = config.name;
        _this._schedule = config.schedule;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._type = config.type;
        _this._workflowName = config.workflowName;
        _this._actions = config.actions;
        _this._predicate = config.predicate;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(GlueTrigger.prototype, "arn", {
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
    Object.defineProperty(GlueTrigger.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueTrigger.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(GlueTrigger.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueTrigger.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueTrigger.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(GlueTrigger.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueTrigger.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueTrigger.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueTrigger.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueTrigger.prototype, "schedule", {
        get: function () {
            return this.getStringAttribute('schedule');
        },
        set: function (value) {
            this._schedule = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueTrigger.prototype.resetSchedule = function () {
        this._schedule = undefined;
    };
    Object.defineProperty(GlueTrigger.prototype, "scheduleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._schedule;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueTrigger.prototype, "state", {
        // state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueTrigger.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueTrigger.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(GlueTrigger.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueTrigger.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueTrigger.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(GlueTrigger.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueTrigger.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueTrigger.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueTrigger.prototype, "workflowName", {
        get: function () {
            return this.getStringAttribute('workflow_name');
        },
        set: function (value) {
            this._workflowName = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueTrigger.prototype.resetWorkflowName = function () {
        this._workflowName = undefined;
    };
    Object.defineProperty(GlueTrigger.prototype, "workflowNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._workflowName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueTrigger.prototype, "actions", {
        get: function () {
            return this.interpolationForAttribute('actions');
        },
        set: function (value) {
            this._actions = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueTrigger.prototype, "actionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._actions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueTrigger.prototype, "predicate", {
        get: function () {
            return this.interpolationForAttribute('predicate');
        },
        set: function (value) {
            this._predicate = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueTrigger.prototype.resetPredicate = function () {
        this._predicate = undefined;
    };
    Object.defineProperty(GlueTrigger.prototype, "predicateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._predicate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueTrigger.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueTrigger.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(GlueTrigger.prototype, "timeoutsInput", {
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
    GlueTrigger.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            enabled: cdktf.booleanToTerraform(this._enabled),
            name: cdktf.stringToTerraform(this._name),
            schedule: cdktf.stringToTerraform(this._schedule),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            type: cdktf.stringToTerraform(this._type),
            workflow_name: cdktf.stringToTerraform(this._workflowName),
            actions: cdktf.listMapper(glueTriggerActionsToTerraform)(this._actions),
            predicate: cdktf.listMapper(glueTriggerPredicateToTerraform)(this._predicate),
            timeouts: glueTriggerTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    GlueTrigger.tfResourceType = "aws_glue_trigger";
    return GlueTrigger;
}(cdktf.TerraformResource));
exports.GlueTrigger = GlueTrigger;
