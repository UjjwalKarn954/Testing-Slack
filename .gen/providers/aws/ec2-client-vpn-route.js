"use strict";
// https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_route.html
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
exports.Ec2ClientVpnRoute = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_route.html aws_ec2_client_vpn_route}
*/
var Ec2ClientVpnRoute = /** @class */ (function (_super) {
    __extends(Ec2ClientVpnRoute, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_route.html aws_ec2_client_vpn_route} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2ClientVpnRouteConfig
    */
    function Ec2ClientVpnRoute(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ec2_client_vpn_route',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._clientVpnEndpointId = config.clientVpnEndpointId;
        _this._description = config.description;
        _this._destinationCidrBlock = config.destinationCidrBlock;
        _this._targetVpcSubnetId = config.targetVpcSubnetId;
        return _this;
    }
    Object.defineProperty(Ec2ClientVpnRoute.prototype, "clientVpnEndpointId", {
        get: function () {
            return this.getStringAttribute('client_vpn_endpoint_id');
        },
        set: function (value) {
            this._clientVpnEndpointId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ClientVpnRoute.prototype, "clientVpnEndpointIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clientVpnEndpointId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ClientVpnRoute.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2ClientVpnRoute.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(Ec2ClientVpnRoute.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ClientVpnRoute.prototype, "destinationCidrBlock", {
        get: function () {
            return this.getStringAttribute('destination_cidr_block');
        },
        set: function (value) {
            this._destinationCidrBlock = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ClientVpnRoute.prototype, "destinationCidrBlockInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._destinationCidrBlock;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ClientVpnRoute.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ClientVpnRoute.prototype, "origin", {
        // origin - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('origin');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ClientVpnRoute.prototype, "targetVpcSubnetId", {
        get: function () {
            return this.getStringAttribute('target_vpc_subnet_id');
        },
        set: function (value) {
            this._targetVpcSubnetId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ClientVpnRoute.prototype, "targetVpcSubnetIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetVpcSubnetId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ClientVpnRoute.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Ec2ClientVpnRoute.prototype.synthesizeAttributes = function () {
        return {
            client_vpn_endpoint_id: cdktf.stringToTerraform(this._clientVpnEndpointId),
            description: cdktf.stringToTerraform(this._description),
            destination_cidr_block: cdktf.stringToTerraform(this._destinationCidrBlock),
            target_vpc_subnet_id: cdktf.stringToTerraform(this._targetVpcSubnetId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Ec2ClientVpnRoute.tfResourceType = "aws_ec2_client_vpn_route";
    return Ec2ClientVpnRoute;
}(cdktf.TerraformResource));
exports.Ec2ClientVpnRoute = Ec2ClientVpnRoute;
