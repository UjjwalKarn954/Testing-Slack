"use strict";
// https://www.terraform.io/docs/providers/aws/r/ses_active_receipt_rule_set.html
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
exports.SesActiveReceiptRuleSet = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_active_receipt_rule_set.html aws_ses_active_receipt_rule_set}
*/
var SesActiveReceiptRuleSet = /** @class */ (function (_super) {
    __extends(SesActiveReceiptRuleSet, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ses_active_receipt_rule_set.html aws_ses_active_receipt_rule_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SesActiveReceiptRuleSetConfig
    */
    function SesActiveReceiptRuleSet(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ses_active_receipt_rule_set',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._ruleSetName = config.ruleSetName;
        return _this;
    }
    Object.defineProperty(SesActiveReceiptRuleSet.prototype, "arn", {
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
    Object.defineProperty(SesActiveReceiptRuleSet.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesActiveReceiptRuleSet.prototype, "ruleSetName", {
        get: function () {
            return this.getStringAttribute('rule_set_name');
        },
        set: function (value) {
            this._ruleSetName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesActiveReceiptRuleSet.prototype, "ruleSetNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ruleSetName;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SesActiveReceiptRuleSet.prototype.synthesizeAttributes = function () {
        return {
            rule_set_name: cdktf.stringToTerraform(this._ruleSetName)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SesActiveReceiptRuleSet.tfResourceType = "aws_ses_active_receipt_rule_set";
    return SesActiveReceiptRuleSet;
}(cdktf.TerraformResource));
exports.SesActiveReceiptRuleSet = SesActiveReceiptRuleSet;
