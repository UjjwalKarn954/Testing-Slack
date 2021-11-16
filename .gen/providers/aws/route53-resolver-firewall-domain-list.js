"use strict";
// https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_domain_list.html
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
exports.Route53ResolverFirewallDomainList = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_domain_list.html aws_route53_resolver_firewall_domain_list}
*/
var Route53ResolverFirewallDomainList = /** @class */ (function (_super) {
    __extends(Route53ResolverFirewallDomainList, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_domain_list.html aws_route53_resolver_firewall_domain_list} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53ResolverFirewallDomainListConfig
    */
    function Route53ResolverFirewallDomainList(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_route53_resolver_firewall_domain_list',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._domains = config.domains;
        _this._name = config.name;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(Route53ResolverFirewallDomainList.prototype, "arn", {
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
    Object.defineProperty(Route53ResolverFirewallDomainList.prototype, "domains", {
        get: function () {
            return this.getListAttribute('domains');
        },
        set: function (value) {
            this._domains = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53ResolverFirewallDomainList.prototype.resetDomains = function () {
        this._domains = undefined;
    };
    Object.defineProperty(Route53ResolverFirewallDomainList.prototype, "domainsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domains;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverFirewallDomainList.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverFirewallDomainList.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverFirewallDomainList.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverFirewallDomainList.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53ResolverFirewallDomainList.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(Route53ResolverFirewallDomainList.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverFirewallDomainList.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53ResolverFirewallDomainList.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(Route53ResolverFirewallDomainList.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Route53ResolverFirewallDomainList.prototype.synthesizeAttributes = function () {
        return {
            domains: cdktf.listMapper(cdktf.stringToTerraform)(this._domains),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Route53ResolverFirewallDomainList.tfResourceType = "aws_route53_resolver_firewall_domain_list";
    return Route53ResolverFirewallDomainList;
}(cdktf.TerraformResource));
exports.Route53ResolverFirewallDomainList = Route53ResolverFirewallDomainList;
