"use strict";
// https://www.terraform.io/docs/providers/aws/r/vpc.html
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
exports.Vpc = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc.html aws_vpc}
*/
var Vpc = /** @class */ (function (_super) {
    __extends(Vpc, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc.html aws_vpc} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcConfig
    */
    function Vpc(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_vpc',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._assignGeneratedIpv6CidrBlock = config.assignGeneratedIpv6CidrBlock;
        _this._cidrBlock = config.cidrBlock;
        _this._enableClassiclink = config.enableClassiclink;
        _this._enableClassiclinkDnsSupport = config.enableClassiclinkDnsSupport;
        _this._enableDnsHostnames = config.enableDnsHostnames;
        _this._enableDnsSupport = config.enableDnsSupport;
        _this._instanceTenancy = config.instanceTenancy;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(Vpc.prototype, "arn", {
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
    Object.defineProperty(Vpc.prototype, "assignGeneratedIpv6CidrBlock", {
        get: function () {
            return this.getBooleanAttribute('assign_generated_ipv6_cidr_block');
        },
        set: function (value) {
            this._assignGeneratedIpv6CidrBlock = value;
        },
        enumerable: false,
        configurable: true
    });
    Vpc.prototype.resetAssignGeneratedIpv6CidrBlock = function () {
        this._assignGeneratedIpv6CidrBlock = undefined;
    };
    Object.defineProperty(Vpc.prototype, "assignGeneratedIpv6CidrBlockInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._assignGeneratedIpv6CidrBlock;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vpc.prototype, "cidrBlock", {
        get: function () {
            return this.getStringAttribute('cidr_block');
        },
        set: function (value) {
            this._cidrBlock = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vpc.prototype, "cidrBlockInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cidrBlock;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vpc.prototype, "defaultNetworkAclId", {
        // default_network_acl_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('default_network_acl_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vpc.prototype, "defaultRouteTableId", {
        // default_route_table_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('default_route_table_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vpc.prototype, "defaultSecurityGroupId", {
        // default_security_group_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('default_security_group_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vpc.prototype, "dhcpOptionsId", {
        // dhcp_options_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dhcp_options_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vpc.prototype, "enableClassiclink", {
        get: function () {
            return this.getBooleanAttribute('enable_classiclink');
        },
        set: function (value) {
            this._enableClassiclink = value;
        },
        enumerable: false,
        configurable: true
    });
    Vpc.prototype.resetEnableClassiclink = function () {
        this._enableClassiclink = undefined;
    };
    Object.defineProperty(Vpc.prototype, "enableClassiclinkInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enableClassiclink;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vpc.prototype, "enableClassiclinkDnsSupport", {
        get: function () {
            return this.getBooleanAttribute('enable_classiclink_dns_support');
        },
        set: function (value) {
            this._enableClassiclinkDnsSupport = value;
        },
        enumerable: false,
        configurable: true
    });
    Vpc.prototype.resetEnableClassiclinkDnsSupport = function () {
        this._enableClassiclinkDnsSupport = undefined;
    };
    Object.defineProperty(Vpc.prototype, "enableClassiclinkDnsSupportInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enableClassiclinkDnsSupport;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vpc.prototype, "enableDnsHostnames", {
        get: function () {
            return this.getBooleanAttribute('enable_dns_hostnames');
        },
        set: function (value) {
            this._enableDnsHostnames = value;
        },
        enumerable: false,
        configurable: true
    });
    Vpc.prototype.resetEnableDnsHostnames = function () {
        this._enableDnsHostnames = undefined;
    };
    Object.defineProperty(Vpc.prototype, "enableDnsHostnamesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enableDnsHostnames;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vpc.prototype, "enableDnsSupport", {
        get: function () {
            return this.getBooleanAttribute('enable_dns_support');
        },
        set: function (value) {
            this._enableDnsSupport = value;
        },
        enumerable: false,
        configurable: true
    });
    Vpc.prototype.resetEnableDnsSupport = function () {
        this._enableDnsSupport = undefined;
    };
    Object.defineProperty(Vpc.prototype, "enableDnsSupportInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enableDnsSupport;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vpc.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vpc.prototype, "instanceTenancy", {
        get: function () {
            return this.getStringAttribute('instance_tenancy');
        },
        set: function (value) {
            this._instanceTenancy = value;
        },
        enumerable: false,
        configurable: true
    });
    Vpc.prototype.resetInstanceTenancy = function () {
        this._instanceTenancy = undefined;
    };
    Object.defineProperty(Vpc.prototype, "instanceTenancyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceTenancy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vpc.prototype, "ipv6AssociationId", {
        // ipv6_association_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ipv6_association_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vpc.prototype, "ipv6CidrBlock", {
        // ipv6_cidr_block - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ipv6_cidr_block');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vpc.prototype, "mainRouteTableId", {
        // main_route_table_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('main_route_table_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vpc.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vpc.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    Vpc.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(Vpc.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vpc.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    Vpc.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(Vpc.prototype, "tagsAllInput", {
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
    Vpc.prototype.synthesizeAttributes = function () {
        return {
            assign_generated_ipv6_cidr_block: cdktf.booleanToTerraform(this._assignGeneratedIpv6CidrBlock),
            cidr_block: cdktf.stringToTerraform(this._cidrBlock),
            enable_classiclink: cdktf.booleanToTerraform(this._enableClassiclink),
            enable_classiclink_dns_support: cdktf.booleanToTerraform(this._enableClassiclinkDnsSupport),
            enable_dns_hostnames: cdktf.booleanToTerraform(this._enableDnsHostnames),
            enable_dns_support: cdktf.booleanToTerraform(this._enableDnsSupport),
            instance_tenancy: cdktf.stringToTerraform(this._instanceTenancy),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Vpc.tfResourceType = "aws_vpc";
    return Vpc;
}(cdktf.TerraformResource));
exports.Vpc = Vpc;
