"use strict";
// https://www.terraform.io/docs/providers/aws/r/wafregional_ipset.html
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
exports.WafregionalIpset = void 0;
var cdktf = require("cdktf");
function wafregionalIpsetIpSetDescriptorToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
        value: cdktf.stringToTerraform(struct.value)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_ipset.html aws_wafregional_ipset}
*/
var WafregionalIpset = /** @class */ (function (_super) {
    __extends(WafregionalIpset, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafregional_ipset.html aws_wafregional_ipset} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafregionalIpsetConfig
    */
    function WafregionalIpset(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_wafregional_ipset',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        _this._ipSetDescriptor = config.ipSetDescriptor;
        return _this;
    }
    Object.defineProperty(WafregionalIpset.prototype, "arn", {
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
    Object.defineProperty(WafregionalIpset.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafregionalIpset.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafregionalIpset.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WafregionalIpset.prototype, "ipSetDescriptor", {
        get: function () {
            return this.interpolationForAttribute('ip_set_descriptor');
        },
        set: function (value) {
            this._ipSetDescriptor = value;
        },
        enumerable: false,
        configurable: true
    });
    WafregionalIpset.prototype.resetIpSetDescriptor = function () {
        this._ipSetDescriptor = undefined;
    };
    Object.defineProperty(WafregionalIpset.prototype, "ipSetDescriptorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipSetDescriptor;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    WafregionalIpset.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            ip_set_descriptor: cdktf.listMapper(wafregionalIpsetIpSetDescriptorToTerraform)(this._ipSetDescriptor)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    WafregionalIpset.tfResourceType = "aws_wafregional_ipset";
    return WafregionalIpset;
}(cdktf.TerraformResource));
exports.WafregionalIpset = WafregionalIpset;
