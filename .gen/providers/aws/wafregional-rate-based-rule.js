"use strict";
// https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule.html
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
exports.WafregionalRateBasedRule = void 0;
var cdktf = require("cdktf");
function wafregionalRateBasedRulePredicateToTerraform(struct) {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule.html aws_wafregional_rate_based_rule}
*/
var WafregionalRateBasedRule = /** @class */ (function (_super) {
    __extends(WafregionalRateBasedRule, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule.html aws_wafregional_rate_based_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafregionalRateBasedRuleConfig
    */
    function WafregionalRateBasedRule(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_wafregional_rate_based_rule',
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
        _this._rateKey = config.rateKey;
        _this._rateLimit = config.rateLimit;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._predicate = config.predicate;
        return _this;
    }
    Object.defineProperty(WafregionalRateBasedRule.prototype, "arn", {
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
    Object.defineProperty(WafregionalRateBasedRule.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafregionalRateBasedRule.prototype, "metricName", {
        get: function () {
            return this.getStringAttribute('metric_name');
        },
        set: function (value) {
            this._metricName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafregionalRateBasedRule.prototype, "metricNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._metricName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafregionalRateBasedRule.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafregionalRateBasedRule.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafregionalRateBasedRule.prototype, "rateKey", {
        get: function () {
            return this.getStringAttribute('rate_key');
        },
        set: function (value) {
            this._rateKey = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafregionalRateBasedRule.prototype, "rateKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rateKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafregionalRateBasedRule.prototype, "rateLimit", {
        get: function () {
            return this.getNumberAttribute('rate_limit');
        },
        set: function (value) {
            this._rateLimit = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafregionalRateBasedRule.prototype, "rateLimitInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rateLimit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafregionalRateBasedRule.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    WafregionalRateBasedRule.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(WafregionalRateBasedRule.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafregionalRateBasedRule.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    WafregionalRateBasedRule.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(WafregionalRateBasedRule.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafregionalRateBasedRule.prototype, "predicate", {
        get: function () {
            return this.interpolationForAttribute('predicate');
        },
        set: function (value) {
            this._predicate = value;
        },
        enumerable: false,
        configurable: true
    });
    WafregionalRateBasedRule.prototype.resetPredicate = function () {
        this._predicate = undefined;
    };
    Object.defineProperty(WafregionalRateBasedRule.prototype, "predicateInput", {
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
    WafregionalRateBasedRule.prototype.synthesizeAttributes = function () {
        return {
            metric_name: cdktf.stringToTerraform(this._metricName),
            name: cdktf.stringToTerraform(this._name),
            rate_key: cdktf.stringToTerraform(this._rateKey),
            rate_limit: cdktf.numberToTerraform(this._rateLimit),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            predicate: cdktf.listMapper(wafregionalRateBasedRulePredicateToTerraform)(this._predicate)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    WafregionalRateBasedRule.tfResourceType = "aws_wafregional_rate_based_rule";
    return WafregionalRateBasedRule;
}(cdktf.TerraformResource));
exports.WafregionalRateBasedRule = WafregionalRateBasedRule;
