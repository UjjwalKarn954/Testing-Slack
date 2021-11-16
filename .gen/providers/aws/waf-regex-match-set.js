"use strict";
// https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set.html
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
exports.WafRegexMatchSet = void 0;
var cdktf = require("cdktf");
function wafRegexMatchSetRegexMatchTupleFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        data: cdktf.stringToTerraform(struct.data),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafRegexMatchSetRegexMatchTupleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        regex_pattern_set_id: cdktf.stringToTerraform(struct.regexPatternSetId),
        text_transformation: cdktf.stringToTerraform(struct.textTransformation),
        field_to_match: cdktf.listMapper(wafRegexMatchSetRegexMatchTupleFieldToMatchToTerraform)(struct.fieldToMatch)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set.html aws_waf_regex_match_set}
*/
var WafRegexMatchSet = /** @class */ (function (_super) {
    __extends(WafRegexMatchSet, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set.html aws_waf_regex_match_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafRegexMatchSetConfig
    */
    function WafRegexMatchSet(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_waf_regex_match_set',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        _this._regexMatchTuple = config.regexMatchTuple;
        return _this;
    }
    Object.defineProperty(WafRegexMatchSet.prototype, "arn", {
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
    Object.defineProperty(WafRegexMatchSet.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafRegexMatchSet.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafRegexMatchSet.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafRegexMatchSet.prototype, "regexMatchTuple", {
        get: function () {
            return this.interpolationForAttribute('regex_match_tuple');
        },
        set: function (value) {
            this._regexMatchTuple = value;
        },
        enumerable: false,
        configurable: true
    });
    WafRegexMatchSet.prototype.resetRegexMatchTuple = function () {
        this._regexMatchTuple = undefined;
    };
    Object.defineProperty(WafRegexMatchSet.prototype, "regexMatchTupleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._regexMatchTuple;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    WafRegexMatchSet.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            regex_match_tuple: cdktf.listMapper(wafRegexMatchSetRegexMatchTupleToTerraform)(this._regexMatchTuple)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    WafRegexMatchSet.tfResourceType = "aws_waf_regex_match_set";
    return WafRegexMatchSet;
}(cdktf.TerraformResource));
exports.WafRegexMatchSet = WafRegexMatchSet;
