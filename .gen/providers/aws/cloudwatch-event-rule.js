"use strict";
// https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule.html
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
exports.CloudwatchEventRule = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule.html aws_cloudwatch_event_rule}
*/
var CloudwatchEventRule = /** @class */ (function (_super) {
    __extends(CloudwatchEventRule, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule.html aws_cloudwatch_event_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchEventRuleConfig = {}
    */
    function CloudwatchEventRule(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_cloudwatch_event_rule',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._description = config.description;
        _this._eventBusName = config.eventBusName;
        _this._eventPattern = config.eventPattern;
        _this._isEnabled = config.isEnabled;
        _this._name = config.name;
        _this._namePrefix = config.namePrefix;
        _this._roleArn = config.roleArn;
        _this._scheduleExpression = config.scheduleExpression;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(CloudwatchEventRule.prototype, "arn", {
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
    Object.defineProperty(CloudwatchEventRule.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchEventRule.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(CloudwatchEventRule.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventRule.prototype, "eventBusName", {
        get: function () {
            return this.getStringAttribute('event_bus_name');
        },
        set: function (value) {
            this._eventBusName = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchEventRule.prototype.resetEventBusName = function () {
        this._eventBusName = undefined;
    };
    Object.defineProperty(CloudwatchEventRule.prototype, "eventBusNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._eventBusName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventRule.prototype, "eventPattern", {
        get: function () {
            return this.getStringAttribute('event_pattern');
        },
        set: function (value) {
            this._eventPattern = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchEventRule.prototype.resetEventPattern = function () {
        this._eventPattern = undefined;
    };
    Object.defineProperty(CloudwatchEventRule.prototype, "eventPatternInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._eventPattern;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventRule.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventRule.prototype, "isEnabled", {
        get: function () {
            return this.getBooleanAttribute('is_enabled');
        },
        set: function (value) {
            this._isEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchEventRule.prototype.resetIsEnabled = function () {
        this._isEnabled = undefined;
    };
    Object.defineProperty(CloudwatchEventRule.prototype, "isEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._isEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventRule.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchEventRule.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(CloudwatchEventRule.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventRule.prototype, "namePrefix", {
        get: function () {
            return this.getStringAttribute('name_prefix');
        },
        set: function (value) {
            this._namePrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchEventRule.prototype.resetNamePrefix = function () {
        this._namePrefix = undefined;
    };
    Object.defineProperty(CloudwatchEventRule.prototype, "namePrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._namePrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventRule.prototype, "roleArn", {
        get: function () {
            return this.getStringAttribute('role_arn');
        },
        set: function (value) {
            this._roleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchEventRule.prototype.resetRoleArn = function () {
        this._roleArn = undefined;
    };
    Object.defineProperty(CloudwatchEventRule.prototype, "roleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._roleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventRule.prototype, "scheduleExpression", {
        get: function () {
            return this.getStringAttribute('schedule_expression');
        },
        set: function (value) {
            this._scheduleExpression = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchEventRule.prototype.resetScheduleExpression = function () {
        this._scheduleExpression = undefined;
    };
    Object.defineProperty(CloudwatchEventRule.prototype, "scheduleExpressionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scheduleExpression;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventRule.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchEventRule.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(CloudwatchEventRule.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventRule.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchEventRule.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(CloudwatchEventRule.prototype, "tagsAllInput", {
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
    CloudwatchEventRule.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            event_bus_name: cdktf.stringToTerraform(this._eventBusName),
            event_pattern: cdktf.stringToTerraform(this._eventPattern),
            is_enabled: cdktf.booleanToTerraform(this._isEnabled),
            name: cdktf.stringToTerraform(this._name),
            name_prefix: cdktf.stringToTerraform(this._namePrefix),
            role_arn: cdktf.stringToTerraform(this._roleArn),
            schedule_expression: cdktf.stringToTerraform(this._scheduleExpression),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CloudwatchEventRule.tfResourceType = "aws_cloudwatch_event_rule";
    return CloudwatchEventRule;
}(cdktf.TerraformResource));
exports.CloudwatchEventRule = CloudwatchEventRule;
