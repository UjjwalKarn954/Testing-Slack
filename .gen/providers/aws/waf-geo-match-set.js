"use strict";
// https://www.terraform.io/docs/providers/aws/r/waf_geo_match_set.html
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
exports.WafGeoMatchSet = void 0;
var cdktf = require("cdktf");
function wafGeoMatchSetGeoMatchConstraintToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
        value: cdktf.stringToTerraform(struct.value)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_geo_match_set.html aws_waf_geo_match_set}
*/
var WafGeoMatchSet = /** @class */ (function (_super) {
    __extends(WafGeoMatchSet, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/waf_geo_match_set.html aws_waf_geo_match_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafGeoMatchSetConfig
    */
    function WafGeoMatchSet(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_waf_geo_match_set',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        _this._geoMatchConstraint = config.geoMatchConstraint;
        return _this;
    }
    Object.defineProperty(WafGeoMatchSet.prototype, "arn", {
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
    Object.defineProperty(WafGeoMatchSet.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafGeoMatchSet.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafGeoMatchSet.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafGeoMatchSet.prototype, "geoMatchConstraint", {
        get: function () {
            return this.interpolationForAttribute('geo_match_constraint');
        },
        set: function (value) {
            this._geoMatchConstraint = value;
        },
        enumerable: false,
        configurable: true
    });
    WafGeoMatchSet.prototype.resetGeoMatchConstraint = function () {
        this._geoMatchConstraint = undefined;
    };
    Object.defineProperty(WafGeoMatchSet.prototype, "geoMatchConstraintInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._geoMatchConstraint;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    WafGeoMatchSet.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            geo_match_constraint: cdktf.listMapper(wafGeoMatchSetGeoMatchConstraintToTerraform)(this._geoMatchConstraint)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    WafGeoMatchSet.tfResourceType = "aws_waf_geo_match_set";
    return WafGeoMatchSet;
}(cdktf.TerraformResource));
exports.WafGeoMatchSet = WafGeoMatchSet;
