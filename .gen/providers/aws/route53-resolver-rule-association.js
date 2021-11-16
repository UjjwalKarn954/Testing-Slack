"use strict";
// https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule_association.html
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
exports.Route53ResolverRuleAssociation = void 0;
var cdktf = require("cdktf");
function route53ResolverRuleAssociationTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        "delete": cdktf.stringToTerraform(struct["delete"])
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule_association.html aws_route53_resolver_rule_association}
*/
var Route53ResolverRuleAssociation = /** @class */ (function (_super) {
    __extends(Route53ResolverRuleAssociation, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule_association.html aws_route53_resolver_rule_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53ResolverRuleAssociationConfig
    */
    function Route53ResolverRuleAssociation(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_route53_resolver_rule_association',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        _this._resolverRuleId = config.resolverRuleId;
        _this._vpcId = config.vpcId;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(Route53ResolverRuleAssociation.prototype, "id", {
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
    Object.defineProperty(Route53ResolverRuleAssociation.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53ResolverRuleAssociation.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(Route53ResolverRuleAssociation.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverRuleAssociation.prototype, "resolverRuleId", {
        get: function () {
            return this.getStringAttribute('resolver_rule_id');
        },
        set: function (value) {
            this._resolverRuleId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverRuleAssociation.prototype, "resolverRuleIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resolverRuleId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverRuleAssociation.prototype, "vpcId", {
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        set: function (value) {
            this._vpcId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverRuleAssociation.prototype, "vpcIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverRuleAssociation.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53ResolverRuleAssociation.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(Route53ResolverRuleAssociation.prototype, "timeoutsInput", {
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
    Route53ResolverRuleAssociation.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            resolver_rule_id: cdktf.stringToTerraform(this._resolverRuleId),
            vpc_id: cdktf.stringToTerraform(this._vpcId),
            timeouts: route53ResolverRuleAssociationTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Route53ResolverRuleAssociation.tfResourceType = "aws_route53_resolver_rule_association";
    return Route53ResolverRuleAssociation;
}(cdktf.TerraformResource));
exports.Route53ResolverRuleAssociation = Route53ResolverRuleAssociation;
