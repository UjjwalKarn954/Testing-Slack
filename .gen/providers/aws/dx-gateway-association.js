"use strict";
// https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html
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
exports.DxGatewayAssociation = void 0;
var cdktf = require("cdktf");
function dxGatewayAssociationTimeoutsToTerraform(struct) {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html aws_dx_gateway_association}
*/
var DxGatewayAssociation = /** @class */ (function (_super) {
    __extends(DxGatewayAssociation, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html aws_dx_gateway_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DxGatewayAssociationConfig
    */
    function DxGatewayAssociation(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_dx_gateway_association',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._allowedPrefixes = config.allowedPrefixes;
        _this._associatedGatewayId = config.associatedGatewayId;
        _this._associatedGatewayOwnerAccountId = config.associatedGatewayOwnerAccountId;
        _this._dxGatewayId = config.dxGatewayId;
        _this._proposalId = config.proposalId;
        _this._vpnGatewayId = config.vpnGatewayId;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(DxGatewayAssociation.prototype, "allowedPrefixes", {
        get: function () {
            return this.getListAttribute('allowed_prefixes');
        },
        set: function (value) {
            this._allowedPrefixes = value;
        },
        enumerable: false,
        configurable: true
    });
    DxGatewayAssociation.prototype.resetAllowedPrefixes = function () {
        this._allowedPrefixes = undefined;
    };
    Object.defineProperty(DxGatewayAssociation.prototype, "allowedPrefixesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowedPrefixes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxGatewayAssociation.prototype, "associatedGatewayId", {
        get: function () {
            return this.getStringAttribute('associated_gateway_id');
        },
        set: function (value) {
            this._associatedGatewayId = value;
        },
        enumerable: false,
        configurable: true
    });
    DxGatewayAssociation.prototype.resetAssociatedGatewayId = function () {
        this._associatedGatewayId = undefined;
    };
    Object.defineProperty(DxGatewayAssociation.prototype, "associatedGatewayIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._associatedGatewayId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxGatewayAssociation.prototype, "associatedGatewayOwnerAccountId", {
        get: function () {
            return this.getStringAttribute('associated_gateway_owner_account_id');
        },
        set: function (value) {
            this._associatedGatewayOwnerAccountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DxGatewayAssociation.prototype.resetAssociatedGatewayOwnerAccountId = function () {
        this._associatedGatewayOwnerAccountId = undefined;
    };
    Object.defineProperty(DxGatewayAssociation.prototype, "associatedGatewayOwnerAccountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._associatedGatewayOwnerAccountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxGatewayAssociation.prototype, "associatedGatewayType", {
        // associated_gateway_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('associated_gateway_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxGatewayAssociation.prototype, "dxGatewayAssociationId", {
        // dx_gateway_association_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dx_gateway_association_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxGatewayAssociation.prototype, "dxGatewayId", {
        get: function () {
            return this.getStringAttribute('dx_gateway_id');
        },
        set: function (value) {
            this._dxGatewayId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxGatewayAssociation.prototype, "dxGatewayIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dxGatewayId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxGatewayAssociation.prototype, "dxGatewayOwnerAccountId", {
        // dx_gateway_owner_account_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dx_gateway_owner_account_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxGatewayAssociation.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxGatewayAssociation.prototype, "proposalId", {
        get: function () {
            return this.getStringAttribute('proposal_id');
        },
        set: function (value) {
            this._proposalId = value;
        },
        enumerable: false,
        configurable: true
    });
    DxGatewayAssociation.prototype.resetProposalId = function () {
        this._proposalId = undefined;
    };
    Object.defineProperty(DxGatewayAssociation.prototype, "proposalIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._proposalId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxGatewayAssociation.prototype, "vpnGatewayId", {
        get: function () {
            return this.getStringAttribute('vpn_gateway_id');
        },
        set: function (value) {
            this._vpnGatewayId = value;
        },
        enumerable: false,
        configurable: true
    });
    DxGatewayAssociation.prototype.resetVpnGatewayId = function () {
        this._vpnGatewayId = undefined;
    };
    Object.defineProperty(DxGatewayAssociation.prototype, "vpnGatewayIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpnGatewayId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxGatewayAssociation.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    DxGatewayAssociation.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(DxGatewayAssociation.prototype, "timeoutsInput", {
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
    DxGatewayAssociation.prototype.synthesizeAttributes = function () {
        return {
            allowed_prefixes: cdktf.listMapper(cdktf.stringToTerraform)(this._allowedPrefixes),
            associated_gateway_id: cdktf.stringToTerraform(this._associatedGatewayId),
            associated_gateway_owner_account_id: cdktf.stringToTerraform(this._associatedGatewayOwnerAccountId),
            dx_gateway_id: cdktf.stringToTerraform(this._dxGatewayId),
            proposal_id: cdktf.stringToTerraform(this._proposalId),
            vpn_gateway_id: cdktf.stringToTerraform(this._vpnGatewayId),
            timeouts: dxGatewayAssociationTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DxGatewayAssociation.tfResourceType = "aws_dx_gateway_association";
    return DxGatewayAssociation;
}(cdktf.TerraformResource));
exports.DxGatewayAssociation = DxGatewayAssociation;
