"use strict";
// https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule.html
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
exports.Route53ResolverFirewallRule = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule.html aws_route53_resolver_firewall_rule}
*/
var Route53ResolverFirewallRule = /** @class */ (function (_super) {
    __extends(Route53ResolverFirewallRule, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule.html aws_route53_resolver_firewall_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53ResolverFirewallRuleConfig
    */
    function Route53ResolverFirewallRule(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_route53_resolver_firewall_rule',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._action = config.action;
        _this._blockOverrideDnsType = config.blockOverrideDnsType;
        _this._blockOverrideDomain = config.blockOverrideDomain;
        _this._blockOverrideTtl = config.blockOverrideTtl;
        _this._blockResponse = config.blockResponse;
        _this._firewallDomainListId = config.firewallDomainListId;
        _this._firewallRuleGroupId = config.firewallRuleGroupId;
        _this._name = config.name;
        _this._priority = config.priority;
        return _this;
    }
    Object.defineProperty(Route53ResolverFirewallRule.prototype, "action", {
        get: function () {
            return this.getStringAttribute('action');
        },
        set: function (value) {
            this._action = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverFirewallRule.prototype, "actionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._action;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverFirewallRule.prototype, "blockOverrideDnsType", {
        get: function () {
            return this.getStringAttribute('block_override_dns_type');
        },
        set: function (value) {
            this._blockOverrideDnsType = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53ResolverFirewallRule.prototype.resetBlockOverrideDnsType = function () {
        this._blockOverrideDnsType = undefined;
    };
    Object.defineProperty(Route53ResolverFirewallRule.prototype, "blockOverrideDnsTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._blockOverrideDnsType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverFirewallRule.prototype, "blockOverrideDomain", {
        get: function () {
            return this.getStringAttribute('block_override_domain');
        },
        set: function (value) {
            this._blockOverrideDomain = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53ResolverFirewallRule.prototype.resetBlockOverrideDomain = function () {
        this._blockOverrideDomain = undefined;
    };
    Object.defineProperty(Route53ResolverFirewallRule.prototype, "blockOverrideDomainInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._blockOverrideDomain;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverFirewallRule.prototype, "blockOverrideTtl", {
        get: function () {
            return this.getNumberAttribute('block_override_ttl');
        },
        set: function (value) {
            this._blockOverrideTtl = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53ResolverFirewallRule.prototype.resetBlockOverrideTtl = function () {
        this._blockOverrideTtl = undefined;
    };
    Object.defineProperty(Route53ResolverFirewallRule.prototype, "blockOverrideTtlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._blockOverrideTtl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverFirewallRule.prototype, "blockResponse", {
        get: function () {
            return this.getStringAttribute('block_response');
        },
        set: function (value) {
            this._blockResponse = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53ResolverFirewallRule.prototype.resetBlockResponse = function () {
        this._blockResponse = undefined;
    };
    Object.defineProperty(Route53ResolverFirewallRule.prototype, "blockResponseInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._blockResponse;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverFirewallRule.prototype, "firewallDomainListId", {
        get: function () {
            return this.getStringAttribute('firewall_domain_list_id');
        },
        set: function (value) {
            this._firewallDomainListId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverFirewallRule.prototype, "firewallDomainListIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._firewallDomainListId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverFirewallRule.prototype, "firewallRuleGroupId", {
        get: function () {
            return this.getStringAttribute('firewall_rule_group_id');
        },
        set: function (value) {
            this._firewallRuleGroupId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverFirewallRule.prototype, "firewallRuleGroupIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._firewallRuleGroupId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverFirewallRule.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverFirewallRule.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverFirewallRule.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverFirewallRule.prototype, "priority", {
        get: function () {
            return this.getNumberAttribute('priority');
        },
        set: function (value) {
            this._priority = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverFirewallRule.prototype, "priorityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._priority;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Route53ResolverFirewallRule.prototype.synthesizeAttributes = function () {
        return {
            action: cdktf.stringToTerraform(this._action),
            block_override_dns_type: cdktf.stringToTerraform(this._blockOverrideDnsType),
            block_override_domain: cdktf.stringToTerraform(this._blockOverrideDomain),
            block_override_ttl: cdktf.numberToTerraform(this._blockOverrideTtl),
            block_response: cdktf.stringToTerraform(this._blockResponse),
            firewall_domain_list_id: cdktf.stringToTerraform(this._firewallDomainListId),
            firewall_rule_group_id: cdktf.stringToTerraform(this._firewallRuleGroupId),
            name: cdktf.stringToTerraform(this._name),
            priority: cdktf.numberToTerraform(this._priority)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Route53ResolverFirewallRule.tfResourceType = "aws_route53_resolver_firewall_rule";
    return Route53ResolverFirewallRule;
}(cdktf.TerraformResource));
exports.Route53ResolverFirewallRule = Route53ResolverFirewallRule;
