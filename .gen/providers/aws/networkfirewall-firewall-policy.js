"use strict";
// https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html
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
exports.NetworkfirewallFirewallPolicy = void 0;
var cdktf = require("cdktf");
function networkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        resource_arn: cdktf.stringToTerraform(struct.resourceArn)
    };
}
function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        value: cdktf.stringToTerraform(struct.value)
    };
}
function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        dimension: cdktf.listMapper(networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionToTerraform)(struct.dimension)
    };
}
function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        publish_metric_action: cdktf.listMapper(networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionToTerraform)(struct.publishMetricAction)
    };
}
function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        action_name: cdktf.stringToTerraform(struct.actionName),
        action_definition: cdktf.listMapper(networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionToTerraform)(struct.actionDefinition)
    };
}
function networkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        resource_arn: cdktf.stringToTerraform(struct.resourceArn)
    };
}
function networkfirewallFirewallPolicyFirewallPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        stateless_default_actions: cdktf.listMapper(cdktf.stringToTerraform)(struct.statelessDefaultActions),
        stateless_fragment_default_actions: cdktf.listMapper(cdktf.stringToTerraform)(struct.statelessFragmentDefaultActions),
        stateful_rule_group_reference: cdktf.listMapper(networkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceToTerraform)(struct.statefulRuleGroupReference),
        stateless_custom_action: cdktf.listMapper(networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionToTerraform)(struct.statelessCustomAction),
        stateless_rule_group_reference: cdktf.listMapper(networkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceToTerraform)(struct.statelessRuleGroupReference)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html aws_networkfirewall_firewall_policy}
*/
var NetworkfirewallFirewallPolicy = /** @class */ (function (_super) {
    __extends(NetworkfirewallFirewallPolicy, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html aws_networkfirewall_firewall_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkfirewallFirewallPolicyConfig
    */
    function NetworkfirewallFirewallPolicy(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_networkfirewall_firewall_policy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._description = config.description;
        _this._name = config.name;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._firewallPolicy = config.firewallPolicy;
        return _this;
    }
    Object.defineProperty(NetworkfirewallFirewallPolicy.prototype, "arn", {
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
    Object.defineProperty(NetworkfirewallFirewallPolicy.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    NetworkfirewallFirewallPolicy.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(NetworkfirewallFirewallPolicy.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkfirewallFirewallPolicy.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkfirewallFirewallPolicy.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkfirewallFirewallPolicy.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkfirewallFirewallPolicy.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    NetworkfirewallFirewallPolicy.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(NetworkfirewallFirewallPolicy.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkfirewallFirewallPolicy.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    NetworkfirewallFirewallPolicy.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(NetworkfirewallFirewallPolicy.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkfirewallFirewallPolicy.prototype, "updateToken", {
        // update_token - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('update_token');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkfirewallFirewallPolicy.prototype, "firewallPolicy", {
        get: function () {
            return this.interpolationForAttribute('firewall_policy');
        },
        set: function (value) {
            this._firewallPolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkfirewallFirewallPolicy.prototype, "firewallPolicyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._firewallPolicy;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    NetworkfirewallFirewallPolicy.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            firewall_policy: cdktf.listMapper(networkfirewallFirewallPolicyFirewallPolicyToTerraform)(this._firewallPolicy)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    NetworkfirewallFirewallPolicy.tfResourceType = "aws_networkfirewall_firewall_policy";
    return NetworkfirewallFirewallPolicy;
}(cdktf.TerraformResource));
exports.NetworkfirewallFirewallPolicy = NetworkfirewallFirewallPolicy;
