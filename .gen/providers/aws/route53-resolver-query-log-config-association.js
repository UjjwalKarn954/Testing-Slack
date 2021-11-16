"use strict";
// https://www.terraform.io/docs/providers/aws/r/route53_resolver_query_log_config_association.html
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
exports.Route53ResolverQueryLogConfigAssociation = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_query_log_config_association.html aws_route53_resolver_query_log_config_association}
*/
var Route53ResolverQueryLogConfigAssociation = /** @class */ (function (_super) {
    __extends(Route53ResolverQueryLogConfigAssociation, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_query_log_config_association.html aws_route53_resolver_query_log_config_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53ResolverQueryLogConfigAssociationConfig
    */
    function Route53ResolverQueryLogConfigAssociation(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_route53_resolver_query_log_config_association',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._resolverQueryLogConfigId = config.resolverQueryLogConfigId;
        _this._resourceId = config.resourceId;
        return _this;
    }
    Object.defineProperty(Route53ResolverQueryLogConfigAssociation.prototype, "id", {
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
    Object.defineProperty(Route53ResolverQueryLogConfigAssociation.prototype, "resolverQueryLogConfigId", {
        get: function () {
            return this.getStringAttribute('resolver_query_log_config_id');
        },
        set: function (value) {
            this._resolverQueryLogConfigId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverQueryLogConfigAssociation.prototype, "resolverQueryLogConfigIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resolverQueryLogConfigId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverQueryLogConfigAssociation.prototype, "resourceId", {
        get: function () {
            return this.getStringAttribute('resource_id');
        },
        set: function (value) {
            this._resourceId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverQueryLogConfigAssociation.prototype, "resourceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resourceId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Route53ResolverQueryLogConfigAssociation.prototype.synthesizeAttributes = function () {
        return {
            resolver_query_log_config_id: cdktf.stringToTerraform(this._resolverQueryLogConfigId),
            resource_id: cdktf.stringToTerraform(this._resourceId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Route53ResolverQueryLogConfigAssociation.tfResourceType = "aws_route53_resolver_query_log_config_association";
    return Route53ResolverQueryLogConfigAssociation;
}(cdktf.TerraformResource));
exports.Route53ResolverQueryLogConfigAssociation = Route53ResolverQueryLogConfigAssociation;
