"use strict";
// https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set.html
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
exports.WafSizeConstraintSet = void 0;
var cdktf = require("cdktf");
function wafSizeConstraintSetSizeConstraintsFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        data: cdktf.stringToTerraform(struct.data),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafSizeConstraintSetSizeConstraintsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison_operator: cdktf.stringToTerraform(struct.comparisonOperator),
        size: cdktf.numberToTerraform(struct.size),
        text_transformation: cdktf.stringToTerraform(struct.textTransformation),
        field_to_match: cdktf.listMapper(wafSizeConstraintSetSizeConstraintsFieldToMatchToTerraform)(struct.fieldToMatch)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set.html aws_waf_size_constraint_set}
*/
var WafSizeConstraintSet = /** @class */ (function (_super) {
    __extends(WafSizeConstraintSet, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set.html aws_waf_size_constraint_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafSizeConstraintSetConfig
    */
    function WafSizeConstraintSet(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_waf_size_constraint_set',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        _this._sizeConstraints = config.sizeConstraints;
        return _this;
    }
    Object.defineProperty(WafSizeConstraintSet.prototype, "arn", {
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
    Object.defineProperty(WafSizeConstraintSet.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafSizeConstraintSet.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafSizeConstraintSet.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafSizeConstraintSet.prototype, "sizeConstraints", {
        get: function () {
            return this.interpolationForAttribute('size_constraints');
        },
        set: function (value) {
            this._sizeConstraints = value;
        },
        enumerable: false,
        configurable: true
    });
    WafSizeConstraintSet.prototype.resetSizeConstraints = function () {
        this._sizeConstraints = undefined;
    };
    Object.defineProperty(WafSizeConstraintSet.prototype, "sizeConstraintsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sizeConstraints;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    WafSizeConstraintSet.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            size_constraints: cdktf.listMapper(wafSizeConstraintSetSizeConstraintsToTerraform)(this._sizeConstraints)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    WafSizeConstraintSet.tfResourceType = "aws_waf_size_constraint_set";
    return WafSizeConstraintSet;
}(cdktf.TerraformResource));
exports.WafSizeConstraintSet = WafSizeConstraintSet;
