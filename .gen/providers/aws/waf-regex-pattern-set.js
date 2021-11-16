"use strict";
// https://www.terraform.io/docs/providers/aws/r/waf_regex_pattern_set.html
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
exports.WafRegexPatternSet = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_pattern_set.html aws_waf_regex_pattern_set}
*/
var WafRegexPatternSet = /** @class */ (function (_super) {
    __extends(WafRegexPatternSet, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_pattern_set.html aws_waf_regex_pattern_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafRegexPatternSetConfig
    */
    function WafRegexPatternSet(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_waf_regex_pattern_set',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        _this._regexPatternStrings = config.regexPatternStrings;
        return _this;
    }
    Object.defineProperty(WafRegexPatternSet.prototype, "arn", {
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
    Object.defineProperty(WafRegexPatternSet.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafRegexPatternSet.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafRegexPatternSet.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafRegexPatternSet.prototype, "regexPatternStrings", {
        get: function () {
            return this.getListAttribute('regex_pattern_strings');
        },
        set: function (value) {
            this._regexPatternStrings = value;
        },
        enumerable: false,
        configurable: true
    });
    WafRegexPatternSet.prototype.resetRegexPatternStrings = function () {
        this._regexPatternStrings = undefined;
    };
    Object.defineProperty(WafRegexPatternSet.prototype, "regexPatternStringsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._regexPatternStrings;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    WafRegexPatternSet.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            regex_pattern_strings: cdktf.listMapper(cdktf.stringToTerraform)(this._regexPatternStrings)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    WafRegexPatternSet.tfResourceType = "aws_waf_regex_pattern_set";
    return WafRegexPatternSet;
}(cdktf.TerraformResource));
exports.WafRegexPatternSet = WafRegexPatternSet;
