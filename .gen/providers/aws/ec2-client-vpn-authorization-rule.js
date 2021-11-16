"use strict";
// https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule.html
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
exports.Ec2ClientVpnAuthorizationRule = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule.html aws_ec2_client_vpn_authorization_rule}
*/
var Ec2ClientVpnAuthorizationRule = /** @class */ (function (_super) {
    __extends(Ec2ClientVpnAuthorizationRule, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule.html aws_ec2_client_vpn_authorization_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2ClientVpnAuthorizationRuleConfig
    */
    function Ec2ClientVpnAuthorizationRule(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ec2_client_vpn_authorization_rule',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._accessGroupId = config.accessGroupId;
        _this._authorizeAllGroups = config.authorizeAllGroups;
        _this._clientVpnEndpointId = config.clientVpnEndpointId;
        _this._description = config.description;
        _this._targetNetworkCidr = config.targetNetworkCidr;
        return _this;
    }
    Object.defineProperty(Ec2ClientVpnAuthorizationRule.prototype, "accessGroupId", {
        get: function () {
            return this.getStringAttribute('access_group_id');
        },
        set: function (value) {
            this._accessGroupId = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2ClientVpnAuthorizationRule.prototype.resetAccessGroupId = function () {
        this._accessGroupId = undefined;
    };
    Object.defineProperty(Ec2ClientVpnAuthorizationRule.prototype, "accessGroupIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessGroupId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ClientVpnAuthorizationRule.prototype, "authorizeAllGroups", {
        get: function () {
            return this.getBooleanAttribute('authorize_all_groups');
        },
        set: function (value) {
            this._authorizeAllGroups = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2ClientVpnAuthorizationRule.prototype.resetAuthorizeAllGroups = function () {
        this._authorizeAllGroups = undefined;
    };
    Object.defineProperty(Ec2ClientVpnAuthorizationRule.prototype, "authorizeAllGroupsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authorizeAllGroups;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ClientVpnAuthorizationRule.prototype, "clientVpnEndpointId", {
        get: function () {
            return this.getStringAttribute('client_vpn_endpoint_id');
        },
        set: function (value) {
            this._clientVpnEndpointId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ClientVpnAuthorizationRule.prototype, "clientVpnEndpointIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clientVpnEndpointId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ClientVpnAuthorizationRule.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2ClientVpnAuthorizationRule.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(Ec2ClientVpnAuthorizationRule.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ClientVpnAuthorizationRule.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ClientVpnAuthorizationRule.prototype, "targetNetworkCidr", {
        get: function () {
            return this.getStringAttribute('target_network_cidr');
        },
        set: function (value) {
            this._targetNetworkCidr = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ClientVpnAuthorizationRule.prototype, "targetNetworkCidrInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetNetworkCidr;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Ec2ClientVpnAuthorizationRule.prototype.synthesizeAttributes = function () {
        return {
            access_group_id: cdktf.stringToTerraform(this._accessGroupId),
            authorize_all_groups: cdktf.booleanToTerraform(this._authorizeAllGroups),
            client_vpn_endpoint_id: cdktf.stringToTerraform(this._clientVpnEndpointId),
            description: cdktf.stringToTerraform(this._description),
            target_network_cidr: cdktf.stringToTerraform(this._targetNetworkCidr)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Ec2ClientVpnAuthorizationRule.tfResourceType = "aws_ec2_client_vpn_authorization_rule";
    return Ec2ClientVpnAuthorizationRule;
}(cdktf.TerraformResource));
exports.Ec2ClientVpnAuthorizationRule = Ec2ClientVpnAuthorizationRule;
