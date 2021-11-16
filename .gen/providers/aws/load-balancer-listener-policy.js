"use strict";
// https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy.html
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
exports.LoadBalancerListenerPolicy = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy.html aws_load_balancer_listener_policy}
*/
var LoadBalancerListenerPolicy = /** @class */ (function (_super) {
    __extends(LoadBalancerListenerPolicy, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy.html aws_load_balancer_listener_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LoadBalancerListenerPolicyConfig
    */
    function LoadBalancerListenerPolicy(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_load_balancer_listener_policy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._loadBalancerName = config.loadBalancerName;
        _this._loadBalancerPort = config.loadBalancerPort;
        _this._policyNames = config.policyNames;
        return _this;
    }
    Object.defineProperty(LoadBalancerListenerPolicy.prototype, "id", {
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
    Object.defineProperty(LoadBalancerListenerPolicy.prototype, "loadBalancerName", {
        get: function () {
            return this.getStringAttribute('load_balancer_name');
        },
        set: function (value) {
            this._loadBalancerName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerListenerPolicy.prototype, "loadBalancerNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._loadBalancerName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerListenerPolicy.prototype, "loadBalancerPort", {
        get: function () {
            return this.getNumberAttribute('load_balancer_port');
        },
        set: function (value) {
            this._loadBalancerPort = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerListenerPolicy.prototype, "loadBalancerPortInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._loadBalancerPort;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerListenerPolicy.prototype, "policyNames", {
        get: function () {
            return this.getListAttribute('policy_names');
        },
        set: function (value) {
            this._policyNames = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerListenerPolicy.prototype.resetPolicyNames = function () {
        this._policyNames = undefined;
    };
    Object.defineProperty(LoadBalancerListenerPolicy.prototype, "policyNamesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policyNames;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    LoadBalancerListenerPolicy.prototype.synthesizeAttributes = function () {
        return {
            load_balancer_name: cdktf.stringToTerraform(this._loadBalancerName),
            load_balancer_port: cdktf.numberToTerraform(this._loadBalancerPort),
            policy_names: cdktf.listMapper(cdktf.stringToTerraform)(this._policyNames)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    LoadBalancerListenerPolicy.tfResourceType = "aws_load_balancer_listener_policy";
    return LoadBalancerListenerPolicy;
}(cdktf.TerraformResource));
exports.LoadBalancerListenerPolicy = LoadBalancerListenerPolicy;
