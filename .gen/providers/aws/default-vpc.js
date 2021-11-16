"use strict";
// https://www.terraform.io/docs/providers/aws/r/default_vpc.html
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
exports.DefaultVpc = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_vpc.html aws_default_vpc}
*/
var DefaultVpc = /** @class */ (function (_super) {
    __extends(DefaultVpc, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/default_vpc.html aws_default_vpc} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DefaultVpcConfig = {}
    */
    function DefaultVpc(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_default_vpc',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._enableClassiclink = config.enableClassiclink;
        _this._enableClassiclinkDnsSupport = config.enableClassiclinkDnsSupport;
        _this._enableDnsHostnames = config.enableDnsHostnames;
        _this._enableDnsSupport = config.enableDnsSupport;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(DefaultVpc.prototype, "arn", {
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
    Object.defineProperty(DefaultVpc.prototype, "assignGeneratedIpv6CidrBlock", {
        // assign_generated_ipv6_cidr_block - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('assign_generated_ipv6_cidr_block');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultVpc.prototype, "cidrBlock", {
        // cidr_block - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cidr_block');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultVpc.prototype, "defaultNetworkAclId", {
        // default_network_acl_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('default_network_acl_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultVpc.prototype, "defaultRouteTableId", {
        // default_route_table_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('default_route_table_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultVpc.prototype, "defaultSecurityGroupId", {
        // default_security_group_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('default_security_group_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultVpc.prototype, "dhcpOptionsId", {
        // dhcp_options_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dhcp_options_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultVpc.prototype, "enableClassiclink", {
        get: function () {
            return this.getBooleanAttribute('enable_classiclink');
        },
        set: function (value) {
            this._enableClassiclink = value;
        },
        enumerable: false,
        configurable: true
    });
    DefaultVpc.prototype.resetEnableClassiclink = function () {
        this._enableClassiclink = undefined;
    };
    Object.defineProperty(DefaultVpc.prototype, "enableClassiclinkInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enableClassiclink;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultVpc.prototype, "enableClassiclinkDnsSupport", {
        get: function () {
            return this.getBooleanAttribute('enable_classiclink_dns_support');
        },
        set: function (value) {
            this._enableClassiclinkDnsSupport = value;
        },
        enumerable: false,
        configurable: true
    });
    DefaultVpc.prototype.resetEnableClassiclinkDnsSupport = function () {
        this._enableClassiclinkDnsSupport = undefined;
    };
    Object.defineProperty(DefaultVpc.prototype, "enableClassiclinkDnsSupportInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enableClassiclinkDnsSupport;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultVpc.prototype, "enableDnsHostnames", {
        get: function () {
            return this.getBooleanAttribute('enable_dns_hostnames');
        },
        set: function (value) {
            this._enableDnsHostnames = value;
        },
        enumerable: false,
        configurable: true
    });
    DefaultVpc.prototype.resetEnableDnsHostnames = function () {
        this._enableDnsHostnames = undefined;
    };
    Object.defineProperty(DefaultVpc.prototype, "enableDnsHostnamesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enableDnsHostnames;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultVpc.prototype, "enableDnsSupport", {
        get: function () {
            return this.getBooleanAttribute('enable_dns_support');
        },
        set: function (value) {
            this._enableDnsSupport = value;
        },
        enumerable: false,
        configurable: true
    });
    DefaultVpc.prototype.resetEnableDnsSupport = function () {
        this._enableDnsSupport = undefined;
    };
    Object.defineProperty(DefaultVpc.prototype, "enableDnsSupportInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enableDnsSupport;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultVpc.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultVpc.prototype, "instanceTenancy", {
        // instance_tenancy - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('instance_tenancy');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultVpc.prototype, "ipv6AssociationId", {
        // ipv6_association_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ipv6_association_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultVpc.prototype, "ipv6CidrBlock", {
        // ipv6_cidr_block - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ipv6_cidr_block');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultVpc.prototype, "mainRouteTableId", {
        // main_route_table_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('main_route_table_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultVpc.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultVpc.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DefaultVpc.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DefaultVpc.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultVpc.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    DefaultVpc.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(DefaultVpc.prototype, "tagsAllInput", {
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
    DefaultVpc.prototype.synthesizeAttributes = function () {
        return {
            enable_classiclink: cdktf.booleanToTerraform(this._enableClassiclink),
            enable_classiclink_dns_support: cdktf.booleanToTerraform(this._enableClassiclinkDnsSupport),
            enable_dns_hostnames: cdktf.booleanToTerraform(this._enableDnsHostnames),
            enable_dns_support: cdktf.booleanToTerraform(this._enableDnsSupport),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DefaultVpc.tfResourceType = "aws_default_vpc";
    return DefaultVpc;
}(cdktf.TerraformResource));
exports.DefaultVpc = DefaultVpc;
