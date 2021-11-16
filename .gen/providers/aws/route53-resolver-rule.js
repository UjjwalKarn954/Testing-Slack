"use strict";
// https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html
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
exports.Route53ResolverRule = void 0;
var cdktf = require("cdktf");
function route53ResolverRuleTargetIpToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        ip: cdktf.stringToTerraform(struct.ip),
        port: cdktf.numberToTerraform(struct.port)
    };
}
function route53ResolverRuleTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        "delete": cdktf.stringToTerraform(struct["delete"]),
        update: cdktf.stringToTerraform(struct.update)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html aws_route53_resolver_rule}
*/
var Route53ResolverRule = /** @class */ (function (_super) {
    __extends(Route53ResolverRule, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html aws_route53_resolver_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53ResolverRuleConfig
    */
    function Route53ResolverRule(scope, id, config) {
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
        _this._ruleType = config.ruleType;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._targetIp = config.targetIp;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(Route53ResolverRule.prototype, "arn", {
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
    Object.defineProperty(Route53ResolverRule.prototype, "domainName", {
        get: function () {
            return this.getStringAttribute('domain_name');
        },
        set: function (value) {
            this._domainName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverRule.prototype, "domainNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domainName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverRule.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverRule.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53ResolverRule.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(Route53ResolverRule.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverRule.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverRule.prototype, "resolverEndpointId", {
        get: function () {
            return this.getStringAttribute('resolver_endpoint_id');
        },
        set: function (value) {
            this._resolverEndpointId = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53ResolverRule.prototype.resetResolverEndpointId = function () {
        this._resolverEndpointId = undefined;
    };
    Object.defineProperty(Route53ResolverRule.prototype, "resolverEndpointIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resolverEndpointId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverRule.prototype, "ruleType", {
        get: function () {
            return this.getStringAttribute('rule_type');
        },
        set: function (value) {
            this._ruleType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverRule.prototype, "ruleTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ruleType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverRule.prototype, "shareStatus", {
        // share_status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('share_status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverRule.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53ResolverRule.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(Route53ResolverRule.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverRule.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53ResolverRule.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(Route53ResolverRule.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverRule.prototype, "targetIp", {
        get: function () {
            return this.interpolationForAttribute('target_ip');
        },
        set: function (value) {
            this._targetIp = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53ResolverRule.prototype.resetTargetIp = function () {
        this._targetIp = undefined;
    };
    Object.defineProperty(Route53ResolverRule.prototype, "targetIpInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetIp;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverRule.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53ResolverRule.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(Route53ResolverRule.prototype, "timeoutsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeouts;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Route53ResolverRule.prototype.synthesizeAttributes = function () {
        return {
            domain_name: cdktf.stringToTerraform(this._domainName),
            name: cdktf.stringToTerraform(this._name),
            resolver_endpoint_id: cdktf.stringToTerraform(this._resolverEndpointId),
            rule_type: cdktf.stringToTerraform(this._ruleType),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            target_ip: cdktf.listMapper(route53ResolverRuleTargetIpToTerraform)(this._targetIp),
            timeouts: route53ResolverRuleTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Route53ResolverRule.tfResourceType = "aws_route53_resolver_rule";
    return Route53ResolverRule;
}(cdktf.TerraformResource));
exports.Route53ResolverRule = Route53ResolverRule;
