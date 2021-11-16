"use strict";
// https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer.html
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
exports.DxBgpPeer = void 0;
var cdktf = require("cdktf");
function dxBgpPeerTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        "delete": cdktf.stringToTerraform(struct["delete"])
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer.html aws_dx_bgp_peer}
*/
var DxBgpPeer = /** @class */ (function (_super) {
    __extends(DxBgpPeer, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_bgp_peer.html aws_dx_bgp_peer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DxBgpPeerConfig
    */
    function DxBgpPeer(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_dx_bgp_peer',
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
        _this._customerAddress = config.customerAddress;
        _this._virtualInterfaceId = config.virtualInterfaceId;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(DxBgpPeer.prototype, "addressFamily", {
        get: function () {
            return this.getStringAttribute('address_family');
        },
        set: function (value) {
            this._addressFamily = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxBgpPeer.prototype, "addressFamilyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._addressFamily;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxBgpPeer.prototype, "amazonAddress", {
        get: function () {
            return this.getStringAttribute('amazon_address');
        },
        set: function (value) {
            this._amazonAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    DxBgpPeer.prototype.resetAmazonAddress = function () {
        this._amazonAddress = undefined;
    };
    Object.defineProperty(DxBgpPeer.prototype, "amazonAddressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._amazonAddress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxBgpPeer.prototype, "awsDevice", {
        // aws_device - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('aws_device');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxBgpPeer.prototype, "bgpAsn", {
        get: function () {
            return this.getNumberAttribute('bgp_asn');
        },
        set: function (value) {
            this._bgpAsn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxBgpPeer.prototype, "bgpAsnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bgpAsn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxBgpPeer.prototype, "bgpAuthKey", {
        get: function () {
            return this.getStringAttribute('bgp_auth_key');
        },
        set: function (value) {
            this._bgpAuthKey = value;
        },
        enumerable: false,
        configurable: true
    });
    DxBgpPeer.prototype.resetBgpAuthKey = function () {
        this._bgpAuthKey = undefined;
    };
    Object.defineProperty(DxBgpPeer.prototype, "bgpAuthKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bgpAuthKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxBgpPeer.prototype, "bgpPeerId", {
        // bgp_peer_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('bgp_peer_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxBgpPeer.prototype, "bgpStatus", {
        // bgp_status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('bgp_status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxBgpPeer.prototype, "customerAddress", {
        get: function () {
            return this.getStringAttribute('customer_address');
        },
        set: function (value) {
            this._customerAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    DxBgpPeer.prototype.resetCustomerAddress = function () {
        this._customerAddress = undefined;
    };
    Object.defineProperty(DxBgpPeer.prototype, "customerAddressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customerAddress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxBgpPeer.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxBgpPeer.prototype, "virtualInterfaceId", {
        get: function () {
            return this.getStringAttribute('virtual_interface_id');
        },
        set: function (value) {
            this._virtualInterfaceId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxBgpPeer.prototype, "virtualInterfaceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._virtualInterfaceId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxBgpPeer.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    DxBgpPeer.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(DxBgpPeer.prototype, "timeoutsInput", {
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
    DxBgpPeer.prototype.synthesizeAttributes = function () {
        return {
            address_family: cdktf.stringToTerraform(this._addressFamily),
            amazon_address: cdktf.stringToTerraform(this._amazonAddress),
            bgp_asn: cdktf.numberToTerraform(this._bgpAsn),
            bgp_auth_key: cdktf.stringToTerraform(this._bgpAuthKey),
            customer_address: cdktf.stringToTerraform(this._customerAddress),
            virtual_interface_id: cdktf.stringToTerraform(this._virtualInterfaceId),
            timeouts: dxBgpPeerTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DxBgpPeer.tfResourceType = "aws_dx_bgp_peer";
    return DxBgpPeer;
}(cdktf.TerraformResource));
exports.DxBgpPeer = DxBgpPeer;
