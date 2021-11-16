"use strict";
// https://www.terraform.io/docs/providers/aws/r/waf_ipset.html
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
exports.WafIpset = void 0;
var cdktf = require("cdktf");
function wafIpsetIpSetDescriptorsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
        value: cdktf.stringToTerraform(struct.value)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_ipset.html aws_waf_ipset}
*/
var WafIpset = /** @class */ (function (_super) {
    __extends(WafIpset, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/waf_ipset.html aws_waf_ipset} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafIpsetConfig
    */
    function WafIpset(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_waf_ipset',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        _this._ipSetDescriptors = config.ipSetDescriptors;
        return _this;
    }
    Object.defineProperty(WafIpset.prototype, "arn", {
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
    Object.defineProperty(WafIpset.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafIpset.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafIpset.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafIpset.prototype, "ipSetDescriptors", {
        get: function () {
            return this.interpolationForAttribute('ip_set_descriptors');
        },
        set: function (value) {
            this._ipSetDescriptors = value;
        },
        enumerable: false,
        configurable: true
    });
    WafIpset.prototype.resetIpSetDescriptors = function () {
        this._ipSetDescriptors = undefined;
    };
    Object.defineProperty(WafIpset.prototype, "ipSetDescriptorsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipSetDescriptors;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    WafIpset.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            ip_set_descriptors: cdktf.listMapper(wafIpsetIpSetDescriptorsToTerraform)(this._ipSetDescriptors)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    WafIpset.tfResourceType = "aws_waf_ipset";
    return WafIpset;
}(cdktf.TerraformResource));
exports.WafIpset = WafIpset;
