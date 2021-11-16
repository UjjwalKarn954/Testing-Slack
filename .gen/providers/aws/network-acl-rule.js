"use strict";
// https://www.terraform.io/docs/providers/aws/r/network_acl_rule.html
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
exports.NetworkAclRule = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule.html aws_network_acl_rule}
*/
var NetworkAclRule = /** @class */ (function (_super) {
    __extends(NetworkAclRule, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule.html aws_network_acl_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkAclRuleConfig
    */
    function NetworkAclRule(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_network_acl_rule',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._cidrBlock = config.cidrBlock;
        _this._egress = config.egress;
        _this._fromPort = config.fromPort;
        _this._icmpCode = config.icmpCode;
        _this._icmpType = config.icmpType;
        _this._ipv6CidrBlock = config.ipv6CidrBlock;
        _this._networkAclId = config.networkAclId;
        _this._protocol = config.protocol;
        _this._ruleAction = config.ruleAction;
        _this._ruleNumber = config.ruleNumber;
        _this._toPort = config.toPort;
        return _this;
    }
    Object.defineProperty(NetworkAclRule.prototype, "cidrBlock", {
        get: function () {
            return this.getStringAttribute('cidr_block');
        },
        set: function (value) {
            this._cidrBlock = value;
        },
        enumerable: false,
        configurable: true
    });
    NetworkAclRule.prototype.resetCidrBlock = function () {
        this._cidrBlock = undefined;
    };
    Object.defineProperty(NetworkAclRule.prototype, "cidrBlockInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cidrBlock;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkAclRule.prototype, "egress", {
        get: function () {
            return this.getBooleanAttribute('egress');
        },
        set: function (value) {
            this._egress = value;
        },
        enumerable: false,
        configurable: true
    });
    NetworkAclRule.prototype.resetEgress = function () {
        this._egress = undefined;
    };
    Object.defineProperty(NetworkAclRule.prototype, "egressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._egress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkAclRule.prototype, "fromPort", {
        get: function () {
            return this.getNumberAttribute('from_port');
        },
        set: function (value) {
            this._fromPort = value;
        },
        enumerable: false,
        configurable: true
    });
    NetworkAclRule.prototype.resetFromPort = function () {
        this._fromPort = undefined;
    };
    Object.defineProperty(NetworkAclRule.prototype, "fromPortInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fromPort;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkAclRule.prototype, "icmpCode", {
        get: function () {
            return this.getStringAttribute('icmp_code');
        },
        set: function (value) {
            this._icmpCode = value;
        },
        enumerable: false,
        configurable: true
    });
    NetworkAclRule.prototype.resetIcmpCode = function () {
        this._icmpCode = undefined;
    };
    Object.defineProperty(NetworkAclRule.prototype, "icmpCodeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._icmpCode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkAclRule.prototype, "icmpType", {
        get: function () {
            return this.getStringAttribute('icmp_type');
        },
        set: function (value) {
            this._icmpType = value;
        },
        enumerable: false,
        configurable: true
    });
    NetworkAclRule.prototype.resetIcmpType = function () {
        this._icmpType = undefined;
    };
    Object.defineProperty(NetworkAclRule.prototype, "icmpTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._icmpType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkAclRule.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkAclRule.prototype, "ipv6CidrBlock", {
        get: function () {
            return this.getStringAttribute('ipv6_cidr_block');
        },
        set: function (value) {
            this._ipv6CidrBlock = value;
        },
        enumerable: false,
        configurable: true
    });
    NetworkAclRule.prototype.resetIpv6CidrBlock = function () {
        this._ipv6CidrBlock = undefined;
    };
    Object.defineProperty(NetworkAclRule.prototype, "ipv6CidrBlockInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipv6CidrBlock;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkAclRule.prototype, "networkAclId", {
        get: function () {
            return this.getStringAttribute('network_acl_id');
        },
        set: function (value) {
            this._networkAclId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkAclRule.prototype, "networkAclIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._networkAclId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkAclRule.prototype, "protocol", {
        get: function () {
            return this.getStringAttribute('protocol');
        },
        set: function (value) {
            this._protocol = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkAclRule.prototype, "protocolInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._protocol;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkAclRule.prototype, "ruleAction", {
        get: function () {
            return this.getStringAttribute('rule_action');
        },
        set: function (value) {
            this._ruleAction = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkAclRule.prototype, "ruleActionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ruleAction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkAclRule.prototype, "ruleNumber", {
        get: function () {
            return this.getNumberAttribute('rule_number');
        },
        set: function (value) {
            this._ruleNumber = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkAclRule.prototype, "ruleNumberInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ruleNumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkAclRule.prototype, "toPort", {
        get: function () {
            return this.getNumberAttribute('to_port');
        },
        set: function (value) {
            this._toPort = value;
        },
        enumerable: false,
        configurable: true
    });
    NetworkAclRule.prototype.resetToPort = function () {
        this._toPort = undefined;
    };
    Object.defineProperty(NetworkAclRule.prototype, "toPortInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._toPort;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    NetworkAclRule.prototype.synthesizeAttributes = function () {
        return {
            cidr_block: cdktf.stringToTerraform(this._cidrBlock),
            egress: cdktf.booleanToTerraform(this._egress),
            from_port: cdktf.numberToTerraform(this._fromPort),
            icmp_code: cdktf.stringToTerraform(this._icmpCode),
            icmp_type: cdktf.stringToTerraform(this._icmpType),
            ipv6_cidr_block: cdktf.stringToTerraform(this._ipv6CidrBlock),
            network_acl_id: cdktf.stringToTerraform(this._networkAclId),
            protocol: cdktf.stringToTerraform(this._protocol),
            rule_action: cdktf.stringToTerraform(this._ruleAction),
            rule_number: cdktf.numberToTerraform(this._ruleNumber),
            to_port: cdktf.numberToTerraform(this._toPort)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    NetworkAclRule.tfResourceType = "aws_network_acl_rule";
    return NetworkAclRule;
}(cdktf.TerraformResource));
exports.NetworkAclRule = NetworkAclRule;
