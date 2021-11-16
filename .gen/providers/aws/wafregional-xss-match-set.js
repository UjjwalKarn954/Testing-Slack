"use strict";
// https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set.html
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
exports.WafregionalXssMatchSet = void 0;
var cdktf = require("cdktf");
function wafregionalXssMatchSetXssMatchTupleFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        data: cdktf.stringToTerraform(struct.data),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafregionalXssMatchSetXssMatchTupleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        text_transformation: cdktf.stringToTerraform(struct.textTransformation),
        field_to_match: cdktf.listMapper(wafregionalXssMatchSetXssMatchTupleFieldToMatchToTerraform)(struct.fieldToMatch)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set.html aws_wafregional_xss_match_set}
*/
var WafregionalXssMatchSet = /** @class */ (function (_super) {
    __extends(WafregionalXssMatchSet, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set.html aws_wafregional_xss_match_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafregionalXssMatchSetConfig
    */
    function WafregionalXssMatchSet(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_wafregional_xss_match_set',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        _this._xssMatchTuple = config.xssMatchTuple;
        return _this;
    }
    Object.defineProperty(WafregionalXssMatchSet.prototype, "id", {
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
    Object.defineProperty(WafregionalXssMatchSet.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafregionalXssMatchSet.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafregionalXssMatchSet.prototype, "xssMatchTuple", {
        get: function () {
            return this.interpolationForAttribute('xss_match_tuple');
        },
        set: function (value) {
            this._xssMatchTuple = value;
        },
        enumerable: false,
        configurable: true
    });
    WafregionalXssMatchSet.prototype.resetXssMatchTuple = function () {
        this._xssMatchTuple = undefined;
    };
    Object.defineProperty(WafregionalXssMatchSet.prototype, "xssMatchTupleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._xssMatchTuple;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    WafregionalXssMatchSet.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            xss_match_tuple: cdktf.listMapper(wafregionalXssMatchSetXssMatchTupleToTerraform)(this._xssMatchTuple)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    WafregionalXssMatchSet.tfResourceType = "aws_wafregional_xss_match_set";
    return WafregionalXssMatchSet;
}(cdktf.TerraformResource));
exports.WafregionalXssMatchSet = WafregionalXssMatchSet;
