"use strict";
// https://www.terraform.io/docs/providers/aws/r/load_balancer_backend_server_policy.html
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
exports.LoadBalancerBackendServerPolicy = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_backend_server_policy.html aws_load_balancer_backend_server_policy}
*/
var LoadBalancerBackendServerPolicy = /** @class */ (function (_super) {
    __extends(LoadBalancerBackendServerPolicy, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_backend_server_policy.html aws_load_balancer_backend_server_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LoadBalancerBackendServerPolicyConfig
    */
    function LoadBalancerBackendServerPolicy(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_load_balancer_backend_server_policy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._instancePort = config.instancePort;
        _this._loadBalancerName = config.loadBalancerName;
        _this._policyNames = config.policyNames;
        return _this;
    }
    Object.defineProperty(LoadBalancerBackendServerPolicy.prototype, "id", {
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
    Object.defineProperty(LoadBalancerBackendServerPolicy.prototype, "instancePort", {
        get: function () {
            return this.getNumberAttribute('instance_port');
        },
        set: function (value) {
            this._instancePort = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerBackendServerPolicy.prototype, "instancePortInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instancePort;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerBackendServerPolicy.prototype, "loadBalancerName", {
        get: function () {
            return this.getStringAttribute('load_balancer_name');
        },
        set: function (value) {
            this._loadBalancerName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerBackendServerPolicy.prototype, "loadBalancerNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._loadBalancerName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerBackendServerPolicy.prototype, "policyNames", {
        get: function () {
            return this.getListAttribute('policy_names');
        },
        set: function (value) {
            this._policyNames = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerBackendServerPolicy.prototype.resetPolicyNames = function () {
        this._policyNames = undefined;
    };
    Object.defineProperty(LoadBalancerBackendServerPolicy.prototype, "policyNamesInput", {
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
    LoadBalancerBackendServerPolicy.prototype.synthesizeAttributes = function () {
        return {
            instance_port: cdktf.numberToTerraform(this._instancePort),
            load_balancer_name: cdktf.stringToTerraform(this._loadBalancerName),
            policy_names: cdktf.listMapper(cdktf.stringToTerraform)(this._policyNames)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    LoadBalancerBackendServerPolicy.tfResourceType = "aws_load_balancer_backend_server_policy";
    return LoadBalancerBackendServerPolicy;
}(cdktf.TerraformResource));
exports.LoadBalancerBackendServerPolicy = LoadBalancerBackendServerPolicy;
