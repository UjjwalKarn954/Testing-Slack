"use strict";
// https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_config.html
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
exports.Route53ResolverFirewallConfig = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_config.html aws_route53_resolver_firewall_config}
*/
var Route53ResolverFirewallConfig = /** @class */ (function (_super) {
    __extends(Route53ResolverFirewallConfig, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_config.html aws_route53_resolver_firewall_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53ResolverFirewallConfigConfig
    */
    function Route53ResolverFirewallConfig(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_route53_resolver_firewall_config',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._firewallFailOpen = config.firewallFailOpen;
        _this._resourceId = config.resourceId;
        return _this;
    }
    Object.defineProperty(Route53ResolverFirewallConfig.prototype, "firewallFailOpen", {
        get: function () {
            return this.getStringAttribute('firewall_fail_open');
        },
        set: function (value) {
            this._firewallFailOpen = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53ResolverFirewallConfig.prototype.resetFirewallFailOpen = function () {
        this._firewallFailOpen = undefined;
    };
    Object.defineProperty(Route53ResolverFirewallConfig.prototype, "firewallFailOpenInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._firewallFailOpen;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverFirewallConfig.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverFirewallConfig.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverFirewallConfig.prototype, "resourceId", {
        get: function () {
            return this.getStringAttribute('resource_id');
        },
        set: function (value) {
            this._resourceId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverFirewallConfig.prototype, "resourceIdInput", {
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
    Route53ResolverFirewallConfig.prototype.synthesizeAttributes = function () {
        return {
            firewall_fail_open: cdktf.stringToTerraform(this._firewallFailOpen),
            resource_id: cdktf.stringToTerraform(this._resourceId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Route53ResolverFirewallConfig.tfResourceType = "aws_route53_resolver_firewall_config";
    return Route53ResolverFirewallConfig;
}(cdktf.TerraformResource));
exports.Route53ResolverFirewallConfig = Route53ResolverFirewallConfig;
