"use strict";
// https://www.terraform.io/docs/providers/aws/r/vpn_connection_route.html
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
exports.VpnConnectionRoute = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection_route.html aws_vpn_connection_route}
*/
var VpnConnectionRoute = /** @class */ (function (_super) {
    __extends(VpnConnectionRoute, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection_route.html aws_vpn_connection_route} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpnConnectionRouteConfig
    */
    function VpnConnectionRoute(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_vpn_connection_route',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._destinationCidrBlock = config.destinationCidrBlock;
        _this._vpnConnectionId = config.vpnConnectionId;
        return _this;
    }
    Object.defineProperty(VpnConnectionRoute.prototype, "destinationCidrBlock", {
        get: function () {
            return this.getStringAttribute('destination_cidr_block');
        },
        set: function (value) {
            this._destinationCidrBlock = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnectionRoute.prototype, "destinationCidrBlockInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._destinationCidrBlock;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnectionRoute.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnectionRoute.prototype, "vpnConnectionId", {
        get: function () {
            return this.getStringAttribute('vpn_connection_id');
        },
        set: function (value) {
            this._vpnConnectionId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnConnectionRoute.prototype, "vpnConnectionIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpnConnectionId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    VpnConnectionRoute.prototype.synthesizeAttributes = function () {
        return {
            destination_cidr_block: cdktf.stringToTerraform(this._destinationCidrBlock),
            vpn_connection_id: cdktf.stringToTerraform(this._vpnConnectionId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    VpnConnectionRoute.tfResourceType = "aws_vpn_connection_route";
    return VpnConnectionRoute;
}(cdktf.TerraformResource));
exports.VpnConnectionRoute = VpnConnectionRoute;
