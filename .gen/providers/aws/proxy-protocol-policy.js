"use strict";
// https://www.terraform.io/docs/providers/aws/r/proxy_protocol_policy.html
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
exports.ProxyProtocolPolicy = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/proxy_protocol_policy.html aws_proxy_protocol_policy}
*/
var ProxyProtocolPolicy = /** @class */ (function (_super) {
    __extends(ProxyProtocolPolicy, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/proxy_protocol_policy.html aws_proxy_protocol_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ProxyProtocolPolicyConfig
    */
    function ProxyProtocolPolicy(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_proxy_protocol_policy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._instancePorts = config.instancePorts;
        _this._loadBalancer = config.loadBalancer;
        return _this;
    }
    Object.defineProperty(ProxyProtocolPolicy.prototype, "id", {
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
    Object.defineProperty(ProxyProtocolPolicy.prototype, "instancePorts", {
        get: function () {
            return this.getListAttribute('instance_ports');
        },
        set: function (value) {
            this._instancePorts = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProxyProtocolPolicy.prototype, "instancePortsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instancePorts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProxyProtocolPolicy.prototype, "loadBalancer", {
        get: function () {
            return this.getStringAttribute('load_balancer');
        },
        set: function (value) {
            this._loadBalancer = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProxyProtocolPolicy.prototype, "loadBalancerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._loadBalancer;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ProxyProtocolPolicy.prototype.synthesizeAttributes = function () {
        return {
            instance_ports: cdktf.listMapper(cdktf.stringToTerraform)(this._instancePorts),
            load_balancer: cdktf.stringToTerraform(this._loadBalancer)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ProxyProtocolPolicy.tfResourceType = "aws_proxy_protocol_policy";
    return ProxyProtocolPolicy;
}(cdktf.TerraformResource));
exports.ProxyProtocolPolicy = ProxyProtocolPolicy;
