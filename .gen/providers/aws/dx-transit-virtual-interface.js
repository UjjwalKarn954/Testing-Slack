"use strict";
// https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface.html
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
exports.DxTransitVirtualInterface = void 0;
var cdktf = require("cdktf");
function dxTransitVirtualInterfaceTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        "delete": cdktf.stringToTerraform(struct["delete"]),
        update: cdktf.stringToTerraform(struct.update)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface.html aws_dx_transit_virtual_interface}
*/
var DxTransitVirtualInterface = /** @class */ (function (_super) {
    __extends(DxTransitVirtualInterface, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface.html aws_dx_transit_virtual_interface} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DxTransitVirtualInterfaceConfig
    */
    function DxTransitVirtualInterface(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_dx_transit_virtual_interface',
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
        _this._dxGatewayId = config.dxGatewayId;
        _this._mtu = config.mtu;
        _this._name = config.name;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._vlan = config.vlan;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(DxTransitVirtualInterface.prototype, "addressFamily", {
        get: function () {
            return this.getStringAttribute('address_family');
        },
        set: function (value) {
            this._addressFamily = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxTransitVirtualInterface.prototype, "addressFamilyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._addressFamily;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxTransitVirtualInterface.prototype, "amazonAddress", {
        get: function () {
            return this.getStringAttribute('amazon_address');
        },
        set: function (value) {
            this._amazonAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    DxTransitVirtualInterface.prototype.resetAmazonAddress = function () {
        this._amazonAddress = undefined;
    };
    Object.defineProperty(DxTransitVirtualInterface.prototype, "amazonAddressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._amazonAddress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxTransitVirtualInterface.prototype, "amazonSideAsn", {
        // amazon_side_asn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('amazon_side_asn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxTransitVirtualInterface.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxTransitVirtualInterface.prototype, "awsDevice", {
        // aws_device - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('aws_device');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxTransitVirtualInterface.prototype, "bgpAsn", {
        get: function () {
            return this.getNumberAttribute('bgp_asn');
        },
        set: function (value) {
            this._bgpAsn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxTransitVirtualInterface.prototype, "bgpAsnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bgpAsn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxTransitVirtualInterface.prototype, "bgpAuthKey", {
        get: function () {
            return this.getStringAttribute('bgp_auth_key');
        },
        set: function (value) {
            this._bgpAuthKey = value;
        },
        enumerable: false,
        configurable: true
    });
    DxTransitVirtualInterface.prototype.resetBgpAuthKey = function () {
        this._bgpAuthKey = undefined;
    };
    Object.defineProperty(DxTransitVirtualInterface.prototype, "bgpAuthKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bgpAuthKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxTransitVirtualInterface.prototype, "connectionId", {
        get: function () {
            return this.getStringAttribute('connection_id');
        },
        set: function (value) {
            this._connectionId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxTransitVirtualInterface.prototype, "connectionIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._connectionId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxTransitVirtualInterface.prototype, "customerAddress", {
        get: function () {
            return this.getStringAttribute('customer_address');
        },
        set: function (value) {
            this._customerAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    DxTransitVirtualInterface.prototype.resetCustomerAddress = function () {
        this._customerAddress = undefined;
    };
    Object.defineProperty(DxTransitVirtualInterface.prototype, "customerAddressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customerAddress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxTransitVirtualInterface.prototype, "dxGatewayId", {
        get: function () {
            return this.getStringAttribute('dx_gateway_id');
        },
        set: function (value) {
            this._dxGatewayId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxTransitVirtualInterface.prototype, "dxGatewayIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dxGatewayId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxTransitVirtualInterface.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxTransitVirtualInterface.prototype, "jumboFrameCapable", {
        // jumbo_frame_capable - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('jumbo_frame_capable');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxTransitVirtualInterface.prototype, "mtu", {
        get: function () {
            return this.getNumberAttribute('mtu');
        },
        set: function (value) {
            this._mtu = value;
        },
        enumerable: false,
        configurable: true
    });
    DxTransitVirtualInterface.prototype.resetMtu = function () {
        this._mtu = undefined;
    };
    Object.defineProperty(DxTransitVirtualInterface.prototype, "mtuInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mtu;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxTransitVirtualInterface.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxTransitVirtualInterface.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxTransitVirtualInterface.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DxTransitVirtualInterface.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DxTransitVirtualInterface.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxTransitVirtualInterface.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    DxTransitVirtualInterface.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(DxTransitVirtualInterface.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxTransitVirtualInterface.prototype, "vlan", {
        get: function () {
            return this.getNumberAttribute('vlan');
        },
        set: function (value) {
            this._vlan = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxTransitVirtualInterface.prototype, "vlanInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vlan;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxTransitVirtualInterface.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    DxTransitVirtualInterface.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(DxTransitVirtualInterface.prototype, "timeoutsInput", {
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
    DxTransitVirtualInterface.prototype.synthesizeAttributes = function () {
        return {
            address_family: cdktf.stringToTerraform(this._addressFamily),
            amazon_address: cdktf.stringToTerraform(this._amazonAddress),
            bgp_asn: cdktf.numberToTerraform(this._bgpAsn),
            bgp_auth_key: cdktf.stringToTerraform(this._bgpAuthKey),
            connection_id: cdktf.stringToTerraform(this._connectionId),
            customer_address: cdktf.stringToTerraform(this._customerAddress),
            dx_gateway_id: cdktf.stringToTerraform(this._dxGatewayId),
            mtu: cdktf.numberToTerraform(this._mtu),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            vlan: cdktf.numberToTerraform(this._vlan),
            timeouts: dxTransitVirtualInterfaceTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DxTransitVirtualInterface.tfResourceType = "aws_dx_transit_virtual_interface";
    return DxTransitVirtualInterface;
}(cdktf.TerraformResource));
exports.DxTransitVirtualInterface = DxTransitVirtualInterface;
