"use strict";
// https://www.terraform.io/docs/providers/aws/r/wafregional_rule.html
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
exports.WafregionalRule = void 0;
var cdktf = require("cdktf");
function wafregionalRulePredicateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        data_id: cdktf.stringToTerraform(struct.dataId),
        negated: cdktf.booleanToTerraform(struct.negated),
        type: cdktf.stringToTerraform(struct.type)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule.html aws_wafregional_rule}
*/
var WafregionalRule = /** @class */ (function (_super) {
    __extends(WafregionalRule, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule.html aws_wafregional_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafregionalRuleConfig
    */
    function WafregionalRule(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_wafregional_rule',
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
        _this._predicate = config.predicate;
        return _this;
    }
    Object.defineProperty(WafregionalRule.prototype, "arn", {
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
    Object.defineProperty(WafregionalRule.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafregionalRule.prototype, "metricName", {
        get: function () {
            return this.getStringAttribute('metric_name');
        },
        set: function (value) {
            this._metricName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafregionalRule.prototype, "metricNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._metricName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafregionalRule.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafregionalRule.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafregionalRule.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    WafregionalRule.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(WafregionalRule.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafregionalRule.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    WafregionalRule.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(WafregionalRule.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafregionalRule.prototype, "predicate", {
        get: function () {
            return this.interpolationForAttribute('predicate');
        },
        set: function (value) {
            this._predicate = value;
        },
        enumerable: false,
        configurable: true
    });
    WafregionalRule.prototype.resetPredicate = function () {
        this._predicate = undefined;
    };
    Object.defineProperty(WafregionalRule.prototype, "predicateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._predicate;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    WafregionalRule.prototype.synthesizeAttributes = function () {
        return {
            metric_name: cdktf.stringToTerraform(this._metricName),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            predicate: cdktf.listMapper(wafregionalRulePredicateToTerraform)(this._predicate)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    WafregionalRule.tfResourceType = "aws_wafregional_rule";
    return WafregionalRule;
}(cdktf.TerraformResource));
exports.WafregionalRule = WafregionalRule;
