"use strict";
// https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association.html
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
exports.Route53ResolverFirewallRuleGroupAssociation = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association.html aws_route53_resolver_firewall_rule_group_association}
*/
var Route53ResolverFirewallRuleGroupAssociation = /** @class */ (function (_super) {
    __extends(Route53ResolverFirewallRuleGroupAssociation, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association.html aws_route53_resolver_firewall_rule_group_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53ResolverFirewallRuleGroupAssociationConfig
    */
    function Route53ResolverFirewallRuleGroupAssociation(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_route53_resolver_firewall_rule_group_association',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._firewallRuleGroupId = config.firewallRuleGroupId;
        _this._mutationProtection = config.mutationProtection;
        _this._name = config.name;
        _this._priority = config.priority;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._vpcId = config.vpcId;
        return _this;
    }
    Object.defineProperty(Route53ResolverFirewallRuleGroupAssociation.prototype, "arn", {
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
    Object.defineProperty(Route53ResolverFirewallRuleGroupAssociation.prototype, "firewallRuleGroupId", {
        get: function () {
            return this.getStringAttribute('firewall_rule_group_id');
        },
        set: function (value) {
            this._firewallRuleGroupId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverFirewallRuleGroupAssociation.prototype, "firewallRuleGroupIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._firewallRuleGroupId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverFirewallRuleGroupAssociation.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverFirewallRuleGroupAssociation.prototype, "mutationProtection", {
        get: function () {
            return this.getStringAttribute('mutation_protection');
        },
        set: function (value) {
            this._mutationProtection = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53ResolverFirewallRuleGroupAssociation.prototype.resetMutationProtection = function () {
        this._mutationProtection = undefined;
    };
    Object.defineProperty(Route53ResolverFirewallRuleGroupAssociation.prototype, "mutationProtectionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mutationProtection;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverFirewallRuleGroupAssociation.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverFirewallRuleGroupAssociation.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverFirewallRuleGroupAssociation.prototype, "priority", {
        get: function () {
            return this.getNumberAttribute('priority');
        },
        set: function (value) {
            this._priority = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverFirewallRuleGroupAssociation.prototype, "priorityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._priority;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverFirewallRuleGroupAssociation.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53ResolverFirewallRuleGroupAssociation.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(Route53ResolverFirewallRuleGroupAssociation.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverFirewallRuleGroupAssociation.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53ResolverFirewallRuleGroupAssociation.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(Route53ResolverFirewallRuleGroupAssociation.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverFirewallRuleGroupAssociation.prototype, "vpcId", {
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        set: function (value) {
            this._vpcId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverFirewallRuleGroupAssociation.prototype, "vpcIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Route53ResolverFirewallRuleGroupAssociation.prototype.synthesizeAttributes = function () {
        return {
            firewall_rule_group_id: cdktf.stringToTerraform(this._firewallRuleGroupId),
            mutation_protection: cdktf.stringToTerraform(this._mutationProtection),
            name: cdktf.stringToTerraform(this._name),
            priority: cdktf.numberToTerraform(this._priority),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            vpc_id: cdktf.stringToTerraform(this._vpcId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Route53ResolverFirewallRuleGroupAssociation.tfResourceType = "aws_route53_resolver_firewall_rule_group_association";
    return Route53ResolverFirewallRuleGroupAssociation;
}(cdktf.TerraformResource));
exports.Route53ResolverFirewallRuleGroupAssociation = Route53ResolverFirewallRuleGroupAssociation;
