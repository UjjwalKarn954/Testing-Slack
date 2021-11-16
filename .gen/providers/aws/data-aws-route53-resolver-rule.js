"use strict";
// https://www.terraform.io/docs/providers/aws/d/route53_resolver_rule.html
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
exports.DataAwsRoute53ResolverRule = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rule.html aws_route53_resolver_rule}
*/
var DataAwsRoute53ResolverRule = /** @class */ (function (_super) {
    __extends(DataAwsRoute53ResolverRule, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rule.html aws_route53_resolver_rule} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRoute53ResolverRuleConfig = {}
    */
    function DataAwsRoute53ResolverRule(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_route53_resolver_rule',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._domainName = config.domainName;
        _this._name = config.name;
        _this._resolverEndpointId = config.resolverEndpointId;
        _this._resolverRuleId = config.resolverRuleId;
        _this._ruleType = config.ruleType;
        _this._tags = config.tags;
        return _this;
    }
    Object.defineProperty(DataAwsRoute53ResolverRule.prototype, "arn", {
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
    Object.defineProperty(DataAwsRoute53ResolverRule.prototype, "domainName", {
        get: function () {
            return this.getStringAttribute('domain_name');
        },
        set: function (value) {
            this._domainName = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRoute53ResolverRule.prototype.resetDomainName = function () {
        this._domainName = undefined;
    };
    Object.defineProperty(DataAwsRoute53ResolverRule.prototype, "domainNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domainName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRoute53ResolverRule.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRoute53ResolverRule.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRoute53ResolverRule.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(DataAwsRoute53ResolverRule.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRoute53ResolverRule.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRoute53ResolverRule.prototype, "resolverEndpointId", {
        get: function () {
            return this.getStringAttribute('resolver_endpoint_id');
        },
        set: function (value) {
            this._resolverEndpointId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRoute53ResolverRule.prototype.resetResolverEndpointId = function () {
        this._resolverEndpointId = undefined;
    };
    Object.defineProperty(DataAwsRoute53ResolverRule.prototype, "resolverEndpointIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resolverEndpointId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRoute53ResolverRule.prototype, "resolverRuleId", {
        get: function () {
            return this.getStringAttribute('resolver_rule_id');
        },
        set: function (value) {
            this._resolverRuleId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRoute53ResolverRule.prototype.resetResolverRuleId = function () {
        this._resolverRuleId = undefined;
    };
    Object.defineProperty(DataAwsRoute53ResolverRule.prototype, "resolverRuleIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resolverRuleId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRoute53ResolverRule.prototype, "ruleType", {
        get: function () {
            return this.getStringAttribute('rule_type');
        },
        set: function (value) {
            this._ruleType = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRoute53ResolverRule.prototype.resetRuleType = function () {
        this._ruleType = undefined;
    };
    Object.defineProperty(DataAwsRoute53ResolverRule.prototype, "ruleTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ruleType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRoute53ResolverRule.prototype, "shareStatus", {
        // share_status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('share_status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRoute53ResolverRule.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRoute53ResolverRule.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsRoute53ResolverRule.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsRoute53ResolverRule.prototype.synthesizeAttributes = function () {
        return {
            domain_name: cdktf.stringToTerraform(this._domainName),
            name: cdktf.stringToTerraform(this._name),
            resolver_endpoint_id: cdktf.stringToTerraform(this._resolverEndpointId),
            resolver_rule_id: cdktf.stringToTerraform(this._resolverRuleId),
            rule_type: cdktf.stringToTerraform(this._ruleType),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsRoute53ResolverRule.tfResourceType = "aws_route53_resolver_rule";
    return DataAwsRoute53ResolverRule;
}(cdktf.TerraformDataSource));
exports.DataAwsRoute53ResolverRule = DataAwsRoute53ResolverRule;
