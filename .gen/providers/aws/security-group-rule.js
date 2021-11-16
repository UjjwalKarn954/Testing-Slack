"use strict";
// https://www.terraform.io/docs/providers/aws/r/security_group_rule.html
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
exports.SecurityGroupRule = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule.html aws_security_group_rule}
*/
var SecurityGroupRule = /** @class */ (function (_super) {
    __extends(SecurityGroupRule, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/security_group_rule.html aws_security_group_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecurityGroupRuleConfig
    */
    function SecurityGroupRule(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_security_group_rule',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._cidrBlocks = config.cidrBlocks;
        _this._description = config.description;
        _this._fromPort = config.fromPort;
        _this._ipv6CidrBlocks = config.ipv6CidrBlocks;
        _this._prefixListIds = config.prefixListIds;
        _this._protocol = config.protocol;
        _this._securityGroupId = config.securityGroupId;
        _this._self = config.selfAttribute;
        _this._sourceSecurityGroupId = config.sourceSecurityGroupId;
        _this._toPort = config.toPort;
        _this._type = config.type;
        return _this;
    }
    Object.defineProperty(SecurityGroupRule.prototype, "cidrBlocks", {
        get: function () {
            return this.getListAttribute('cidr_blocks');
        },
        set: function (value) {
            this._cidrBlocks = value;
        },
        enumerable: false,
        configurable: true
    });
    SecurityGroupRule.prototype.resetCidrBlocks = function () {
        this._cidrBlocks = undefined;
    };
    Object.defineProperty(SecurityGroupRule.prototype, "cidrBlocksInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cidrBlocks;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityGroupRule.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    SecurityGroupRule.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(SecurityGroupRule.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityGroupRule.prototype, "fromPort", {
        get: function () {
            return this.getNumberAttribute('from_port');
        },
        set: function (value) {
            this._fromPort = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityGroupRule.prototype, "fromPortInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fromPort;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityGroupRule.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityGroupRule.prototype, "ipv6CidrBlocks", {
        get: function () {
            return this.getListAttribute('ipv6_cidr_blocks');
        },
        set: function (value) {
            this._ipv6CidrBlocks = value;
        },
        enumerable: false,
        configurable: true
    });
    SecurityGroupRule.prototype.resetIpv6CidrBlocks = function () {
        this._ipv6CidrBlocks = undefined;
    };
    Object.defineProperty(SecurityGroupRule.prototype, "ipv6CidrBlocksInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipv6CidrBlocks;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityGroupRule.prototype, "prefixListIds", {
        get: function () {
            return this.getListAttribute('prefix_list_ids');
        },
        set: function (value) {
            this._prefixListIds = value;
        },
        enumerable: false,
        configurable: true
    });
    SecurityGroupRule.prototype.resetPrefixListIds = function () {
        this._prefixListIds = undefined;
    };
    Object.defineProperty(SecurityGroupRule.prototype, "prefixListIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._prefixListIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityGroupRule.prototype, "protocol", {
        get: function () {
            return this.getStringAttribute('protocol');
        },
        set: function (value) {
            this._protocol = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityGroupRule.prototype, "protocolInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._protocol;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityGroupRule.prototype, "securityGroupId", {
        get: function () {
            return this.getStringAttribute('security_group_id');
        },
        set: function (value) {
            this._securityGroupId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityGroupRule.prototype, "securityGroupIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._securityGroupId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityGroupRule.prototype, "selfAttribute", {
        get: function () {
            return this.getBooleanAttribute('self');
        },
        set: function (value) {
            this._self = value;
        },
        enumerable: false,
        configurable: true
    });
    SecurityGroupRule.prototype.resetSelfAttribute = function () {
        this._self = undefined;
    };
    Object.defineProperty(SecurityGroupRule.prototype, "selfAttributeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._self;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityGroupRule.prototype, "sourceSecurityGroupId", {
        get: function () {
            return this.getStringAttribute('source_security_group_id');
        },
        set: function (value) {
            this._sourceSecurityGroupId = value;
        },
        enumerable: false,
        configurable: true
    });
    SecurityGroupRule.prototype.resetSourceSecurityGroupId = function () {
        this._sourceSecurityGroupId = undefined;
    };
    Object.defineProperty(SecurityGroupRule.prototype, "sourceSecurityGroupIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sourceSecurityGroupId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityGroupRule.prototype, "toPort", {
        get: function () {
            return this.getNumberAttribute('to_port');
        },
        set: function (value) {
            this._toPort = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityGroupRule.prototype, "toPortInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._toPort;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityGroupRule.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityGroupRule.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SecurityGroupRule.prototype.synthesizeAttributes = function () {
        return {
            cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform)(this._cidrBlocks),
            description: cdktf.stringToTerraform(this._description),
            from_port: cdktf.numberToTerraform(this._fromPort),
            ipv6_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform)(this._ipv6CidrBlocks),
            prefix_list_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._prefixListIds),
            protocol: cdktf.stringToTerraform(this._protocol),
            security_group_id: cdktf.stringToTerraform(this._securityGroupId),
            self: cdktf.booleanToTerraform(this._self),
            source_security_group_id: cdktf.stringToTerraform(this._sourceSecurityGroupId),
            to_port: cdktf.numberToTerraform(this._toPort),
            type: cdktf.stringToTerraform(this._type)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SecurityGroupRule.tfResourceType = "aws_security_group_rule";
    return SecurityGroupRule;
}(cdktf.TerraformResource));
exports.SecurityGroupRule = SecurityGroupRule;
