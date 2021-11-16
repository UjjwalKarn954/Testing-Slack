"use strict";
// https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_network_association.html
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
exports.Ec2ClientVpnNetworkAssociation = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_network_association.html aws_ec2_client_vpn_network_association}
*/
var Ec2ClientVpnNetworkAssociation = /** @class */ (function (_super) {
    __extends(Ec2ClientVpnNetworkAssociation, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_network_association.html aws_ec2_client_vpn_network_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2ClientVpnNetworkAssociationConfig
    */
    function Ec2ClientVpnNetworkAssociation(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ec2_client_vpn_network_association',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._clientVpnEndpointId = config.clientVpnEndpointId;
        _this._securityGroups = config.securityGroups;
        _this._subnetId = config.subnetId;
        return _this;
    }
    Object.defineProperty(Ec2ClientVpnNetworkAssociation.prototype, "associationId", {
        // ==========
        // ATTRIBUTES
        // ==========
        // association_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('association_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ClientVpnNetworkAssociation.prototype, "clientVpnEndpointId", {
        get: function () {
            return this.getStringAttribute('client_vpn_endpoint_id');
        },
        set: function (value) {
            this._clientVpnEndpointId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ClientVpnNetworkAssociation.prototype, "clientVpnEndpointIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clientVpnEndpointId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ClientVpnNetworkAssociation.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ClientVpnNetworkAssociation.prototype, "securityGroups", {
        get: function () {
            return this.getListAttribute('security_groups');
        },
        set: function (value) {
            this._securityGroups = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2ClientVpnNetworkAssociation.prototype.resetSecurityGroups = function () {
        this._securityGroups = undefined;
    };
    Object.defineProperty(Ec2ClientVpnNetworkAssociation.prototype, "securityGroupsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._securityGroups;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ClientVpnNetworkAssociation.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ClientVpnNetworkAssociation.prototype, "subnetId", {
        get: function () {
            return this.getStringAttribute('subnet_id');
        },
        set: function (value) {
            this._subnetId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ClientVpnNetworkAssociation.prototype, "subnetIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subnetId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ClientVpnNetworkAssociation.prototype, "vpcId", {
        // vpc_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Ec2ClientVpnNetworkAssociation.prototype.synthesizeAttributes = function () {
        return {
            client_vpn_endpoint_id: cdktf.stringToTerraform(this._clientVpnEndpointId),
            security_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroups),
            subnet_id: cdktf.stringToTerraform(this._subnetId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Ec2ClientVpnNetworkAssociation.tfResourceType = "aws_ec2_client_vpn_network_association";
    return Ec2ClientVpnNetworkAssociation;
}(cdktf.TerraformResource));
exports.Ec2ClientVpnNetworkAssociation = Ec2ClientVpnNetworkAssociation;
