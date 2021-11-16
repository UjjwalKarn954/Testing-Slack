"use strict";
// https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html
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
exports.WafregionalWebAcl = void 0;
var cdktf = require("cdktf");
function wafregionalWebAclDefaultActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        data: cdktf.stringToTerraform(struct.data),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafregionalWebAclLoggingConfigurationRedactedFieldsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        field_to_match: cdktf.listMapper(wafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchToTerraform)(struct.fieldToMatch)
    };
}
function wafregionalWebAclLoggingConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        log_destination: cdktf.stringToTerraform(struct.logDestination),
        redacted_fields: cdktf.listMapper(wafregionalWebAclLoggingConfigurationRedactedFieldsToTerraform)(struct.redactedFields)
    };
}
function wafregionalWebAclRuleActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafregionalWebAclRuleOverrideActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafregionalWebAclRuleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        rule_id: cdktf.stringToTerraform(struct.ruleId),
        type: cdktf.stringToTerraform(struct.type),
        action: cdktf.listMapper(wafregionalWebAclRuleActionToTerraform)(struct.action),
        override_action: cdktf.listMapper(wafregionalWebAclRuleOverrideActionToTerraform)(struct.overrideAction)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html aws_wafregional_web_acl}
*/
var WafregionalWebAcl = /** @class */ (function (_super) {
    __extends(WafregionalWebAcl, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html aws_wafregional_web_acl} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafregionalWebAclConfig
    */
    function WafregionalWebAcl(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_wafregional_web_acl',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._metricName = config.metricName;
        _this._name = config.name;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._defaultAction = config.defaultAction;
        _this._loggingConfiguration = config.loggingConfiguration;
        _this._rule = config.rule;
        return _this;
    }
    Object.defineProperty(WafregionalWebAcl.prototype, "arn", {
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
    Object.defineProperty(WafregionalWebAcl.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafregionalWebAcl.prototype, "metricName", {
        get: function () {
            return this.getStringAttribute('metric_name');
        },
        set: function (value) {
            this._metricName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafregionalWebAcl.prototype, "metricNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._metricName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafregionalWebAcl.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafregionalWebAcl.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafregionalWebAcl.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    WafregionalWebAcl.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(WafregionalWebAcl.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafregionalWebAcl.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    WafregionalWebAcl.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(WafregionalWebAcl.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafregionalWebAcl.prototype, "defaultAction", {
        get: function () {
            return this.interpolationForAttribute('default_action');
        },
        set: function (value) {
            this._defaultAction = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafregionalWebAcl.prototype, "defaultActionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultAction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafregionalWebAcl.prototype, "loggingConfiguration", {
        get: function () {
            return this.interpolationForAttribute('logging_configuration');
        },
        set: function (value) {
            this._loggingConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    WafregionalWebAcl.prototype.resetLoggingConfiguration = function () {
        this._loggingConfiguration = undefined;
    };
    Object.defineProperty(WafregionalWebAcl.prototype, "loggingConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._loggingConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafregionalWebAcl.prototype, "rule", {
        get: function () {
            return this.interpolationForAttribute('rule');
        },
        set: function (value) {
            this._rule = value;
        },
        enumerable: false,
        configurable: true
    });
    WafregionalWebAcl.prototype.resetRule = function () {
        this._rule = undefined;
    };
    Object.defineProperty(WafregionalWebAcl.prototype, "ruleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rule;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    WafregionalWebAcl.prototype.synthesizeAttributes = function () {
        return {
            metric_name: cdktf.stringToTerraform(this._metricName),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            default_action: cdktf.listMapper(wafregionalWebAclDefaultActionToTerraform)(this._defaultAction),
            logging_configuration: cdktf.listMapper(wafregionalWebAclLoggingConfigurationToTerraform)(this._loggingConfiguration),
            rule: cdktf.listMapper(wafregionalWebAclRuleToTerraform)(this._rule)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    WafregionalWebAcl.tfResourceType = "aws_wafregional_web_acl";
    return WafregionalWebAcl;
}(cdktf.TerraformResource));
exports.WafregionalWebAcl = WafregionalWebAcl;
