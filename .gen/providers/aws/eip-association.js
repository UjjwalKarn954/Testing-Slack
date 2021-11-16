"use strict";
// https://www.terraform.io/docs/providers/aws/r/eip_association.html
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
exports.EipAssociation = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/eip_association.html aws_eip_association}
*/
var EipAssociation = /** @class */ (function (_super) {
    __extends(EipAssociation, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/eip_association.html aws_eip_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EipAssociationConfig = {}
    */
    function EipAssociation(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_eip_association',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._allocationId = config.allocationId;
        _this._allowReassociation = config.allowReassociation;
        _this._instanceId = config.instanceId;
        _this._networkInterfaceId = config.networkInterfaceId;
        _this._privateIpAddress = config.privateIpAddress;
        _this._publicIp = config.publicIp;
        return _this;
    }
    Object.defineProperty(EipAssociation.prototype, "allocationId", {
        get: function () {
            return this.getStringAttribute('allocation_id');
        },
        set: function (value) {
            this._allocationId = value;
        },
        enumerable: false,
        configurable: true
    });
    EipAssociation.prototype.resetAllocationId = function () {
        this._allocationId = undefined;
    };
    Object.defineProperty(EipAssociation.prototype, "allocationIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allocationId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EipAssociation.prototype, "allowReassociation", {
        get: function () {
            return this.getBooleanAttribute('allow_reassociation');
        },
        set: function (value) {
            this._allowReassociation = value;
        },
        enumerable: false,
        configurable: true
    });
    EipAssociation.prototype.resetAllowReassociation = function () {
        this._allowReassociation = undefined;
    };
    Object.defineProperty(EipAssociation.prototype, "allowReassociationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowReassociation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EipAssociation.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EipAssociation.prototype, "instanceId", {
        get: function () {
            return this.getStringAttribute('instance_id');
        },
        set: function (value) {
            this._instanceId = value;
        },
        enumerable: false,
        configurable: true
    });
    EipAssociation.prototype.resetInstanceId = function () {
        this._instanceId = undefined;
    };
    Object.defineProperty(EipAssociation.prototype, "instanceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EipAssociation.prototype, "networkInterfaceId", {
        get: function () {
            return this.getStringAttribute('network_interface_id');
        },
        set: function (value) {
            this._networkInterfaceId = value;
        },
        enumerable: false,
        configurable: true
    });
    EipAssociation.prototype.resetNetworkInterfaceId = function () {
        this._networkInterfaceId = undefined;
    };
    Object.defineProperty(EipAssociation.prototype, "networkInterfaceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._networkInterfaceId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EipAssociation.prototype, "privateIpAddress", {
        get: function () {
            return this.getStringAttribute('private_ip_address');
        },
        set: function (value) {
            this._privateIpAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    EipAssociation.prototype.resetPrivateIpAddress = function () {
        this._privateIpAddress = undefined;
    };
    Object.defineProperty(EipAssociation.prototype, "privateIpAddressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._privateIpAddress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EipAssociation.prototype, "publicIp", {
        get: function () {
            return this.getStringAttribute('public_ip');
        },
        set: function (value) {
            this._publicIp = value;
        },
        enumerable: false,
        configurable: true
    });
    EipAssociation.prototype.resetPublicIp = function () {
        this._publicIp = undefined;
    };
    Object.defineProperty(EipAssociation.prototype, "publicIpInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._publicIp;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    EipAssociation.prototype.synthesizeAttributes = function () {
        return {
            allocation_id: cdktf.stringToTerraform(this._allocationId),
            allow_reassociation: cdktf.booleanToTerraform(this._allowReassociation),
            instance_id: cdktf.stringToTerraform(this._instanceId),
            network_interface_id: cdktf.stringToTerraform(this._networkInterfaceId),
            private_ip_address: cdktf.stringToTerraform(this._privateIpAddress),
            public_ip: cdktf.stringToTerraform(this._publicIp)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    EipAssociation.tfResourceType = "aws_eip_association";
    return EipAssociation;
}(cdktf.TerraformResource));
exports.EipAssociation = EipAssociation;
