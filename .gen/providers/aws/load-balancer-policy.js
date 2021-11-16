"use strict";
// https://www.terraform.io/docs/providers/aws/r/load_balancer_policy.html
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
exports.LoadBalancerPolicy = void 0;
var cdktf = require("cdktf");
function loadBalancerPolicyPolicyAttributeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        value: cdktf.stringToTerraform(struct.value)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy.html aws_load_balancer_policy}
*/
var LoadBalancerPolicy = /** @class */ (function (_super) {
    __extends(LoadBalancerPolicy, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy.html aws_load_balancer_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LoadBalancerPolicyConfig
    */
    function LoadBalancerPolicy(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_load_balancer_policy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._loadBalancerName = config.loadBalancerName;
        _this._policyName = config.policyName;
        _this._policyTypeName = config.policyTypeName;
        _this._policyAttribute = config.policyAttribute;
        return _this;
    }
    Object.defineProperty(LoadBalancerPolicy.prototype, "id", {
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
    Object.defineProperty(LoadBalancerPolicy.prototype, "loadBalancerName", {
        get: function () {
            return this.getStringAttribute('load_balancer_name');
        },
        set: function (value) {
            this._loadBalancerName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerPolicy.prototype, "loadBalancerNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._loadBalancerName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerPolicy.prototype, "policyName", {
        get: function () {
            return this.getStringAttribute('policy_name');
        },
        set: function (value) {
            this._policyName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerPolicy.prototype, "policyNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policyName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerPolicy.prototype, "policyTypeName", {
        get: function () {
            return this.getStringAttribute('policy_type_name');
        },
        set: function (value) {
            this._policyTypeName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerPolicy.prototype, "policyTypeNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policyTypeName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadBalancerPolicy.prototype, "policyAttribute", {
        get: function () {
            return this.interpolationForAttribute('policy_attribute');
        },
        set: function (value) {
            this._policyAttribute = value;
        },
        enumerable: false,
        configurable: true
    });
    LoadBalancerPolicy.prototype.resetPolicyAttribute = function () {
        this._policyAttribute = undefined;
    };
    Object.defineProperty(LoadBalancerPolicy.prototype, "policyAttributeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policyAttribute;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    LoadBalancerPolicy.prototype.synthesizeAttributes = function () {
        return {
            load_balancer_name: cdktf.stringToTerraform(this._loadBalancerName),
            policy_name: cdktf.stringToTerraform(this._policyName),
            policy_type_name: cdktf.stringToTerraform(this._policyTypeName),
            policy_attribute: cdktf.listMapper(loadBalancerPolicyPolicyAttributeToTerraform)(this._policyAttribute)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    LoadBalancerPolicy.tfResourceType = "aws_load_balancer_policy";
    return LoadBalancerPolicy;
}(cdktf.TerraformResource));
exports.LoadBalancerPolicy = LoadBalancerPolicy;
