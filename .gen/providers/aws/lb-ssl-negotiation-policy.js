"use strict";
// https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy.html
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
exports.LbSslNegotiationPolicy = void 0;
var cdktf = require("cdktf");
function lbSslNegotiationPolicyAttributeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        value: cdktf.stringToTerraform(struct.value)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy.html aws_lb_ssl_negotiation_policy}
*/
var LbSslNegotiationPolicy = /** @class */ (function (_super) {
    __extends(LbSslNegotiationPolicy, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy.html aws_lb_ssl_negotiation_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LbSslNegotiationPolicyConfig
    */
    function LbSslNegotiationPolicy(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_lb_ssl_negotiation_policy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._lbPort = config.lbPort;
        _this._loadBalancer = config.loadBalancer;
        _this._name = config.name;
        _this._attribute = config.attribute;
        return _this;
    }
    Object.defineProperty(LbSslNegotiationPolicy.prototype, "id", {
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
    Object.defineProperty(LbSslNegotiationPolicy.prototype, "lbPort", {
        get: function () {
            return this.getNumberAttribute('lb_port');
        },
        set: function (value) {
            this._lbPort = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LbSslNegotiationPolicy.prototype, "lbPortInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._lbPort;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LbSslNegotiationPolicy.prototype, "loadBalancer", {
        get: function () {
            return this.getStringAttribute('load_balancer');
        },
        set: function (value) {
            this._loadBalancer = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LbSslNegotiationPolicy.prototype, "loadBalancerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._loadBalancer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LbSslNegotiationPolicy.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LbSslNegotiationPolicy.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LbSslNegotiationPolicy.prototype, "attribute", {
        get: function () {
            return this.interpolationForAttribute('attribute');
        },
        set: function (value) {
            this._attribute = value;
        },
        enumerable: false,
        configurable: true
    });
    LbSslNegotiationPolicy.prototype.resetAttribute = function () {
        this._attribute = undefined;
    };
    Object.defineProperty(LbSslNegotiationPolicy.prototype, "attributeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._attribute;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    LbSslNegotiationPolicy.prototype.synthesizeAttributes = function () {
        return {
            lb_port: cdktf.numberToTerraform(this._lbPort),
            load_balancer: cdktf.stringToTerraform(this._loadBalancer),
            name: cdktf.stringToTerraform(this._name),
            attribute: cdktf.listMapper(lbSslNegotiationPolicyAttributeToTerraform)(this._attribute)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    LbSslNegotiationPolicy.tfResourceType = "aws_lb_ssl_negotiation_policy";
    return LbSslNegotiationPolicy;
}(cdktf.TerraformResource));
exports.LbSslNegotiationPolicy = LbSslNegotiationPolicy;
