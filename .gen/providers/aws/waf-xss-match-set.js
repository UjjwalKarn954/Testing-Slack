"use strict";
// https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set.html
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
exports.WafXssMatchSet = void 0;
var cdktf = require("cdktf");
function wafXssMatchSetXssMatchTuplesFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        data: cdktf.stringToTerraform(struct.data),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafXssMatchSetXssMatchTuplesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        text_transformation: cdktf.stringToTerraform(struct.textTransformation),
        field_to_match: cdktf.listMapper(wafXssMatchSetXssMatchTuplesFieldToMatchToTerraform)(struct.fieldToMatch)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set.html aws_waf_xss_match_set}
*/
var WafXssMatchSet = /** @class */ (function (_super) {
    __extends(WafXssMatchSet, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set.html aws_waf_xss_match_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafXssMatchSetConfig
    */
    function WafXssMatchSet(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_waf_xss_match_set',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        _this._xssMatchTuples = config.xssMatchTuples;
        return _this;
    }
    Object.defineProperty(WafXssMatchSet.prototype, "arn", {
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
    Object.defineProperty(WafXssMatchSet.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafXssMatchSet.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafXssMatchSet.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafXssMatchSet.prototype, "xssMatchTuples", {
        get: function () {
            return this.interpolationForAttribute('xss_match_tuples');
        },
        set: function (value) {
            this._xssMatchTuples = value;
        },
        enumerable: false,
        configurable: true
    });
    WafXssMatchSet.prototype.resetXssMatchTuples = function () {
        this._xssMatchTuples = undefined;
    };
    Object.defineProperty(WafXssMatchSet.prototype, "xssMatchTuplesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._xssMatchTuples;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    WafXssMatchSet.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            xss_match_tuples: cdktf.listMapper(wafXssMatchSetXssMatchTuplesToTerraform)(this._xssMatchTuples)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    WafXssMatchSet.tfResourceType = "aws_waf_xss_match_set";
    return WafXssMatchSet;
}(cdktf.TerraformResource));
exports.WafXssMatchSet = WafXssMatchSet;
