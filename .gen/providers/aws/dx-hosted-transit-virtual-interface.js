"use strict";
// https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface.html
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
exports.DxHostedTransitVirtualInterface = void 0;
var cdktf = require("cdktf");
function dxHostedTransitVirtualInterfaceTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        "delete": cdktf.stringToTerraform(struct["delete"])
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface.html aws_dx_hosted_transit_virtual_interface}
*/
var DxHostedTransitVirtualInterface = /** @class */ (function (_super) {
    __extends(DxHostedTransitVirtualInterface, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface.html aws_dx_hosted_transit_virtual_interface} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DxHostedTransitVirtualInterfaceConfig
    */
    function DxHostedTransitVirtualInterface(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_dx_hosted_transit_virtual_interface',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._addressFamily = config.addressFamily;
        _this._amazonAddress = config.amazonAddress;
        _this._bgpAsn = config.bgpAsn;
        _this._bgpAuthKey = config.bgpAuthKey;
        _this._connectionId = config.connectionId;
        _this._customerAddress = config.customerAddress;
        _this._mtu = config.mtu;
        _this._name = config.name;
        _this._ownerAccountId = config.ownerAccountId;
        _this._vlan = config.vlan;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(DxHostedTransitVirtualInterface.prototype, "addressFamily", {
        get: function () {
            return this.getStringAttribute('address_family');
        },
        set: function (value) {
            this._addressFamily = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxHostedTransitVirtualInterface.prototype, "addressFamilyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._addressFamily;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxHostedTransitVirtualInterface.prototype, "amazonAddress", {
        get: function () {
            return this.getStringAttribute('amazon_address');
        },
        set: function (value) {
            this._amazonAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    DxHostedTransitVirtualInterface.prototype.resetAmazonAddress = function () {
        this._amazonAddress = undefined;
    };
    Object.defineProperty(DxHostedTransitVirtualInterface.prototype, "amazonAddressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._amazonAddress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxHostedTransitVirtualInterface.prototype, "amazonSideAsn", {
        // amazon_side_asn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('amazon_side_asn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxHostedTransitVirtualInterface.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxHostedTransitVirtualInterface.prototype, "awsDevice", {
        // aws_device - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('aws_device');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxHostedTransitVirtualInterface.prototype, "bgpAsn", {
        get: function () {
            return this.getNumberAttribute('bgp_asn');
        },
        set: function (value) {
            this._bgpAsn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxHostedTransitVirtualInterface.prototype, "bgpAsnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bgpAsn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxHostedTransitVirtualInterface.prototype, "bgpAuthKey", {
        get: function () {
            return this.getStringAttribute('bgp_auth_key');
        },
        set: function (value) {
            this._bgpAuthKey = value;
        },
        enumerable: false,
        configurable: true
    });
    DxHostedTransitVirtualInterface.prototype.resetBgpAuthKey = function () {
        this._bgpAuthKey = undefined;
    };
    Object.defineProperty(DxHostedTransitVirtualInterface.prototype, "bgpAuthKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bgpAuthKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxHostedTransitVirtualInterface.prototype, "connectionId", {
        get: function () {
            return this.getStringAttribute('connection_id');
        },
        set: function (value) {
            this._connectionId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxHostedTransitVirtualInterface.prototype, "connectionIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._connectionId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxHostedTransitVirtualInterface.prototype, "customerAddress", {
        get: function () {
            return this.getStringAttribute('customer_address');
        },
        set: function (value) {
            this._customerAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    DxHostedTransitVirtualInterface.prototype.resetCustomerAddress = function () {
        this._customerAddress = undefined;
    };
    Object.defineProperty(DxHostedTransitVirtualInterface.prototype, "customerAddressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customerAddress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxHostedTransitVirtualInterface.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxHostedTransitVirtualInterface.prototype, "jumboFrameCapable", {
        // jumbo_frame_capable - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('jumbo_frame_capable');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxHostedTransitVirtualInterface.prototype, "mtu", {
        get: function () {
            return this.getNumberAttribute('mtu');
        },
        set: function (value) {
            this._mtu = value;
        },
        enumerable: false,
        configurable: true
    });
    DxHostedTransitVirtualInterface.prototype.resetMtu = function () {
        this._mtu = undefined;
    };
    Object.defineProperty(DxHostedTransitVirtualInterface.prototype, "mtuInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mtu;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxHostedTransitVirtualInterface.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxHostedTransitVirtualInterface.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxHostedTransitVirtualInterface.prototype, "ownerAccountId", {
        get: function () {
            return this.getStringAttribute('owner_account_id');
        },
        set: function (value) {
            this._ownerAccountId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxHostedTransitVirtualInterface.prototype, "ownerAccountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ownerAccountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxHostedTransitVirtualInterface.prototype, "vlan", {
        get: function () {
            return this.getNumberAttribute('vlan');
        },
        set: function (value) {
            this._vlan = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxHostedTransitVirtualInterface.prototype, "vlanInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vlan;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxHostedTransitVirtualInterface.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    DxHostedTransitVirtualInterface.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(DxHostedTransitVirtualInterface.prototype, "timeoutsInput", {
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
    DxHostedTransitVirtualInterface.prototype.synthesizeAttributes = function () {
        return {
            address_family: cdktf.stringToTerraform(this._addressFamily),
            amazon_address: cdktf.stringToTerraform(this._amazonAddress),
            bgp_asn: cdktf.numberToTerraform(this._bgpAsn),
            bgp_auth_key: cdktf.stringToTerraform(this._bgpAuthKey),
            connection_id: cdktf.stringToTerraform(this._connectionId),
            customer_address: cdktf.stringToTerraform(this._customerAddress),
            mtu: cdktf.numberToTerraform(this._mtu),
            name: cdktf.stringToTerraform(this._name),
            owner_account_id: cdktf.stringToTerraform(this._ownerAccountId),
            vlan: cdktf.numberToTerraform(this._vlan),
            timeouts: dxHostedTransitVirtualInterfaceTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DxHostedTransitVirtualInterface.tfResourceType = "aws_dx_hosted_transit_virtual_interface";
    return DxHostedTransitVirtualInterface;
}(cdktf.TerraformResource));
exports.DxHostedTransitVirtualInterface = DxHostedTransitVirtualInterface;
