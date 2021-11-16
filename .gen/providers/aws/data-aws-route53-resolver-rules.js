"use strict";
// https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules.html
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
exports.DataAwsRoute53ResolverRules = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules.html aws_route53_resolver_rules}
*/
var DataAwsRoute53ResolverRules = /** @class */ (function (_super) {
    __extends(DataAwsRoute53ResolverRules, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules.html aws_route53_resolver_rules} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRoute53ResolverRulesConfig = {}
    */
    function DataAwsRoute53ResolverRules(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_route53_resolver_rules',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._ownerId = config.ownerId;
        _this._resolverEndpointId = config.resolverEndpointId;
        _this._ruleType = config.ruleType;
        _this._shareStatus = config.shareStatus;
        return _this;
    }
    Object.defineProperty(DataAwsRoute53ResolverRules.prototype, "id", {
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
    Object.defineProperty(DataAwsRoute53ResolverRules.prototype, "ownerId", {
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        set: function (value) {
            this._ownerId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRoute53ResolverRules.prototype.resetOwnerId = function () {
        this._ownerId = undefined;
    };
    Object.defineProperty(DataAwsRoute53ResolverRules.prototype, "ownerIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ownerId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRoute53ResolverRules.prototype, "resolverEndpointId", {
        get: function () {
            return this.getStringAttribute('resolver_endpoint_id');
        },
        set: function (value) {
            this._resolverEndpointId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRoute53ResolverRules.prototype.resetResolverEndpointId = function () {
        this._resolverEndpointId = undefined;
    };
    Object.defineProperty(DataAwsRoute53ResolverRules.prototype, "resolverEndpointIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resolverEndpointId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRoute53ResolverRules.prototype, "resolverRuleIds", {
        // resolver_rule_ids - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('resolver_rule_ids');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRoute53ResolverRules.prototype, "ruleType", {
        get: function () {
            return this.getStringAttribute('rule_type');
        },
        set: function (value) {
            this._ruleType = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRoute53ResolverRules.prototype.resetRuleType = function () {
        this._ruleType = undefined;
    };
    Object.defineProperty(DataAwsRoute53ResolverRules.prototype, "ruleTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ruleType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRoute53ResolverRules.prototype, "shareStatus", {
        get: function () {
            return this.getStringAttribute('share_status');
        },
        set: function (value) {
            this._shareStatus = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRoute53ResolverRules.prototype.resetShareStatus = function () {
        this._shareStatus = undefined;
    };
    Object.defineProperty(DataAwsRoute53ResolverRules.prototype, "shareStatusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._shareStatus;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsRoute53ResolverRules.prototype.synthesizeAttributes = function () {
        return {
            owner_id: cdktf.stringToTerraform(this._ownerId),
            resolver_endpoint_id: cdktf.stringToTerraform(this._resolverEndpointId),
            rule_type: cdktf.stringToTerraform(this._ruleType),
            share_status: cdktf.stringToTerraform(this._shareStatus)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsRoute53ResolverRules.tfResourceType = "aws_route53_resolver_rules";
    return DataAwsRoute53ResolverRules;
}(cdktf.TerraformDataSource));
exports.DataAwsRoute53ResolverRules = DataAwsRoute53ResolverRules;
