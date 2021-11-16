"use strict";
// https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation.html
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
exports.VpnGatewayRoutePropagation = void 0;
var cdktf = require("cdktf");
function vpnGatewayRoutePropagationTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        "delete": cdktf.stringToTerraform(struct["delete"])
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation.html aws_vpn_gateway_route_propagation}
*/
var VpnGatewayRoutePropagation = /** @class */ (function (_super) {
    __extends(VpnGatewayRoutePropagation, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation.html aws_vpn_gateway_route_propagation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpnGatewayRoutePropagationConfig
    */
    function VpnGatewayRoutePropagation(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_vpn_gateway_route_propagation',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._routeTableId = config.routeTableId;
        _this._vpnGatewayId = config.vpnGatewayId;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(VpnGatewayRoutePropagation.prototype, "id", {
        // ==========
        // ATTRIBUTES
        // ==========
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnGatewayRoutePropagation.prototype, "routeTableId", {
        get: function () {
            return this.getStringAttribute('route_table_id');
        },
        set: function (value) {
            this._routeTableId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnGatewayRoutePropagation.prototype, "routeTableIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._routeTableId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnGatewayRoutePropagation.prototype, "vpnGatewayId", {
        get: function () {
            return this.getStringAttribute('vpn_gateway_id');
        },
        set: function (value) {
            this._vpnGatewayId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnGatewayRoutePropagation.prototype, "vpnGatewayIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpnGatewayId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnGatewayRoutePropagation.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    VpnGatewayRoutePropagation.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(VpnGatewayRoutePropagation.prototype, "timeoutsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeouts;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    VpnGatewayRoutePropagation.prototype.synthesizeAttributes = function () {
        return {
            route_table_id: cdktf.stringToTerraform(this._routeTableId),
            vpn_gateway_id: cdktf.stringToTerraform(this._vpnGatewayId),
            timeouts: vpnGatewayRoutePropagationTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    VpnGatewayRoutePropagation.tfResourceType = "aws_vpn_gateway_route_propagation";
    return VpnGatewayRoutePropagation;
}(cdktf.TerraformResource));
exports.VpnGatewayRoutePropagation = VpnGatewayRoutePropagation;
