"use strict";
// https://www.terraform.io/docs/providers/aws/d/wafregional_rate_based_rule.html
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
exports.DataAwsWafregionalRateBasedRule = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/wafregional_rate_based_rule.html aws_wafregional_rate_based_rule}
*/
var DataAwsWafregionalRateBasedRule = /** @class */ (function (_super) {
    __extends(DataAwsWafregionalRateBasedRule, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/wafregional_rate_based_rule.html aws_wafregional_rate_based_rule} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsWafregionalRateBasedRuleConfig
    */
    function DataAwsWafregionalRateBasedRule(scope, id, config) {
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
        _this._name = config.name;
        return _this;
    }
    Object.defineProperty(DataAwsWafregionalRateBasedRule.prototype, "id", {
        // ==========
        // ATTRIBUTES
        // ==========
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWafregionalRateBasedRule.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWafregionalRateBasedRule.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsWafregionalRateBasedRule.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsWafregionalRateBasedRule.tfResourceType = "aws_wafregional_rate_based_rule";
    return DataAwsWafregionalRateBasedRule;
}(cdktf.TerraformDataSource));
exports.DataAwsWafregionalRateBasedRule = DataAwsWafregionalRateBasedRule;
