"use strict";
// https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set.html
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
exports.WafByteMatchSet = void 0;
var cdktf = require("cdktf");
function wafByteMatchSetByteMatchTuplesFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        data: cdktf.stringToTerraform(struct.data),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafByteMatchSetByteMatchTuplesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        positional_constraint: cdktf.stringToTerraform(struct.positionalConstraint),
        target_string: cdktf.stringToTerraform(struct.targetString),
        text_transformation: cdktf.stringToTerraform(struct.textTransformation),
        field_to_match: cdktf.listMapper(wafByteMatchSetByteMatchTuplesFieldToMatchToTerraform)(struct.fieldToMatch)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set.html aws_waf_byte_match_set}
*/
var WafByteMatchSet = /** @class */ (function (_super) {
    __extends(WafByteMatchSet, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set.html aws_waf_byte_match_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafByteMatchSetConfig
    */
    function WafByteMatchSet(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_waf_byte_match_set',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        _this._byteMatchTuples = config.byteMatchTuples;
        return _this;
    }
    Object.defineProperty(WafByteMatchSet.prototype, "id", {
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
    Object.defineProperty(WafByteMatchSet.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafByteMatchSet.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafByteMatchSet.prototype, "byteMatchTuples", {
        get: function () {
            return this.interpolationForAttribute('byte_match_tuples');
        },
        set: function (value) {
            this._byteMatchTuples = value;
        },
        enumerable: false,
        configurable: true
    });
    WafByteMatchSet.prototype.resetByteMatchTuples = function () {
        this._byteMatchTuples = undefined;
    };
    Object.defineProperty(WafByteMatchSet.prototype, "byteMatchTuplesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._byteMatchTuples;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    WafByteMatchSet.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            byte_match_tuples: cdktf.listMapper(wafByteMatchSetByteMatchTuplesToTerraform)(this._byteMatchTuples)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    WafByteMatchSet.tfResourceType = "aws_waf_byte_match_set";
    return WafByteMatchSet;
}(cdktf.TerraformResource));
exports.WafByteMatchSet = WafByteMatchSet;
