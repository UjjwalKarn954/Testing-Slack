"use strict";
// https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set.html
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
exports.WafregionalRegexMatchSet = void 0;
var cdktf = require("cdktf");
function wafregionalRegexMatchSetRegexMatchTupleFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        data: cdktf.stringToTerraform(struct.data),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafregionalRegexMatchSetRegexMatchTupleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        regex_pattern_set_id: cdktf.stringToTerraform(struct.regexPatternSetId),
        text_transformation: cdktf.stringToTerraform(struct.textTransformation),
        field_to_match: cdktf.listMapper(wafregionalRegexMatchSetRegexMatchTupleFieldToMatchToTerraform)(struct.fieldToMatch)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set.html aws_wafregional_regex_match_set}
*/
var WafregionalRegexMatchSet = /** @class */ (function (_super) {
    __extends(WafregionalRegexMatchSet, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set.html aws_wafregional_regex_match_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafregionalRegexMatchSetConfig
    */
    function WafregionalRegexMatchSet(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_wafregional_regex_match_set',
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
    Object.defineProperty(WafregionalRegexMatchSet.prototype, "id", {
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
    Object.defineProperty(WafregionalRegexMatchSet.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafregionalRegexMatchSet.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafregionalRegexMatchSet.prototype, "regexMatchTuple", {
        get: function () {
            return this.interpolationForAttribute('regex_match_tuple');
        },
        set: function (value) {
            this._regexMatchTuple = value;
        },
        enumerable: false,
        configurable: true
    });
    WafregionalRegexMatchSet.prototype.resetRegexMatchTuple = function () {
        this._regexMatchTuple = undefined;
    };
    Object.defineProperty(WafregionalRegexMatchSet.prototype, "regexMatchTupleInput", {
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
    WafregionalRegexMatchSet.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            regex_match_tuple: cdktf.listMapper(wafregionalRegexMatchSetRegexMatchTupleToTerraform)(this._regexMatchTuple)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    WafregionalRegexMatchSet.tfResourceType = "aws_wafregional_regex_match_set";
    return WafregionalRegexMatchSet;
}(cdktf.TerraformResource));
exports.WafregionalRegexMatchSet = WafregionalRegexMatchSet;
