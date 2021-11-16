"use strict";
// https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group.html
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
exports.WafregionalRuleGroup = void 0;
var cdktf = require("cdktf");
function wafregionalRuleGroupActivatedRuleActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafregionalRuleGroupActivatedRuleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        rule_id: cdktf.stringToTerraform(struct.ruleId),
        type: cdktf.stringToTerraform(struct.type),
        action: cdktf.listMapper(wafregionalRuleGroupActivatedRuleActionToTerraform)(struct.action)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group.html aws_wafregional_rule_group}
*/
var WafregionalRuleGroup = /** @class */ (function (_super) {
    __extends(WafregionalRuleGroup, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group.html aws_wafregional_rule_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafregionalRuleGroupConfig
    */
    function WafregionalRuleGroup(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_wafregional_rule_group',
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
        _this._activatedRule = config.activatedRule;
        return _this;
    }
    Object.defineProperty(WafregionalRuleGroup.prototype, "arn", {
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
    Object.defineProperty(WafregionalRuleGroup.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafregionalRuleGroup.prototype, "metricName", {
        get: function () {
            return this.getStringAttribute('metric_name');
        },
        set: function (value) {
            this._metricName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafregionalRuleGroup.prototype, "metricNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._metricName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafregionalRuleGroup.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafregionalRuleGroup.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafregionalRuleGroup.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    WafregionalRuleGroup.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(WafregionalRuleGroup.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafregionalRuleGroup.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    WafregionalRuleGroup.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(WafregionalRuleGroup.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafregionalRuleGroup.prototype, "activatedRule", {
        get: function () {
            return this.interpolationForAttribute('activated_rule');
        },
        set: function (value) {
            this._activatedRule = value;
        },
        enumerable: false,
        configurable: true
    });
    WafregionalRuleGroup.prototype.resetActivatedRule = function () {
        this._activatedRule = undefined;
    };
    Object.defineProperty(WafregionalRuleGroup.prototype, "activatedRuleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._activatedRule;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    WafregionalRuleGroup.prototype.synthesizeAttributes = function () {
        return {
            metric_name: cdktf.stringToTerraform(this._metricName),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            activated_rule: cdktf.listMapper(wafregionalRuleGroupActivatedRuleToTerraform)(this._activatedRule)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    WafregionalRuleGroup.tfResourceType = "aws_wafregional_rule_group";
    return WafregionalRuleGroup;
}(cdktf.TerraformResource));
exports.WafregionalRuleGroup = WafregionalRuleGroup;
