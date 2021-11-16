"use strict";
// https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html
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
exports.WafWebAcl = void 0;
var cdktf = require("cdktf");
function wafWebAclDefaultActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafWebAclLoggingConfigurationRedactedFieldsFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        data: cdktf.stringToTerraform(struct.data),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafWebAclLoggingConfigurationRedactedFieldsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        field_to_match: cdktf.listMapper(wafWebAclLoggingConfigurationRedactedFieldsFieldToMatchToTerraform)(struct.fieldToMatch)
    };
}
function wafWebAclLoggingConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        log_destination: cdktf.stringToTerraform(struct.logDestination),
        redacted_fields: cdktf.listMapper(wafWebAclLoggingConfigurationRedactedFieldsToTerraform)(struct.redactedFields)
    };
}
function wafWebAclRulesActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafWebAclRulesOverrideActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafWebAclRulesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        rule_id: cdktf.stringToTerraform(struct.ruleId),
        type: cdktf.stringToTerraform(struct.type),
        action: cdktf.listMapper(wafWebAclRulesActionToTerraform)(struct.action),
        override_action: cdktf.listMapper(wafWebAclRulesOverrideActionToTerraform)(struct.overrideAction)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html aws_waf_web_acl}
*/
var WafWebAcl = /** @class */ (function (_super) {
    __extends(WafWebAcl, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html aws_waf_web_acl} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafWebAclConfig
    */
    function WafWebAcl(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_waf_web_acl',
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
        _this._rules = config.rules;
        return _this;
    }
    Object.defineProperty(WafWebAcl.prototype, "arn", {
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
    Object.defineProperty(WafWebAcl.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafWebAcl.prototype, "metricName", {
        get: function () {
            return this.getStringAttribute('metric_name');
        },
        set: function (value) {
            this._metricName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafWebAcl.prototype, "metricNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._metricName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafWebAcl.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafWebAcl.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafWebAcl.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    WafWebAcl.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(WafWebAcl.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafWebAcl.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    WafWebAcl.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(WafWebAcl.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafWebAcl.prototype, "defaultAction", {
        get: function () {
            return this.interpolationForAttribute('default_action');
        },
        set: function (value) {
            this._defaultAction = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafWebAcl.prototype, "defaultActionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultAction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafWebAcl.prototype, "loggingConfiguration", {
        get: function () {
            return this.interpolationForAttribute('logging_configuration');
        },
        set: function (value) {
            this._loggingConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    WafWebAcl.prototype.resetLoggingConfiguration = function () {
        this._loggingConfiguration = undefined;
    };
    Object.defineProperty(WafWebAcl.prototype, "loggingConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._loggingConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafWebAcl.prototype, "rules", {
        get: function () {
            return this.interpolationForAttribute('rules');
        },
        set: function (value) {
            this._rules = value;
        },
        enumerable: false,
        configurable: true
    });
    WafWebAcl.prototype.resetRules = function () {
        this._rules = undefined;
    };
    Object.defineProperty(WafWebAcl.prototype, "rulesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rules;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    WafWebAcl.prototype.synthesizeAttributes = function () {
        return {
            metric_name: cdktf.stringToTerraform(this._metricName),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            default_action: cdktf.listMapper(wafWebAclDefaultActionToTerraform)(this._defaultAction),
            logging_configuration: cdktf.listMapper(wafWebAclLoggingConfigurationToTerraform)(this._loggingConfiguration),
            rules: cdktf.listMapper(wafWebAclRulesToTerraform)(this._rules)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    WafWebAcl.tfResourceType = "aws_waf_web_acl";
    return WafWebAcl;
}(cdktf.TerraformResource));
exports.WafWebAcl = WafWebAcl;
