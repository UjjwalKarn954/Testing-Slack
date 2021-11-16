"use strict";
// https://www.terraform.io/docs/providers/aws/r/vpn_gateway_attachment.html
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
exports.VpnGatewayAttachment = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_attachment.html aws_vpn_gateway_attachment}
*/
var VpnGatewayAttachment = /** @class */ (function (_super) {
    __extends(VpnGatewayAttachment, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpn_gateway_attachment.html aws_vpn_gateway_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpnGatewayAttachmentConfig
    */
    function VpnGatewayAttachment(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_vpn_gateway_attachment',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._vpcId = config.vpcId;
        _this._vpnGatewayId = config.vpnGatewayId;
        return _this;
    }
    Object.defineProperty(VpnGatewayAttachment.prototype, "id", {
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
    Object.defineProperty(VpnGatewayAttachment.prototype, "vpcId", {
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        set: function (value) {
            this._vpcId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnGatewayAttachment.prototype, "vpcIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnGatewayAttachment.prototype, "vpnGatewayId", {
        get: function () {
            return this.getStringAttribute('vpn_gateway_id');
        },
        set: function (value) {
            this._vpnGatewayId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpnGatewayAttachment.prototype, "vpnGatewayIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpnGatewayId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    VpnGatewayAttachment.prototype.synthesizeAttributes = function () {
        return {
            vpc_id: cdktf.stringToTerraform(this._vpcId),
            vpn_gateway_id: cdktf.stringToTerraform(this._vpnGatewayId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    VpnGatewayAttachment.tfResourceType = "aws_vpn_gateway_attachment";
    return VpnGatewayAttachment;
}(cdktf.TerraformResource));
exports.VpnGatewayAttachment = VpnGatewayAttachment;
