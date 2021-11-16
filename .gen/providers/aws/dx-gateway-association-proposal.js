"use strict";
// https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal.html
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
exports.DxGatewayAssociationProposal = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal.html aws_dx_gateway_association_proposal}
*/
var DxGatewayAssociationProposal = /** @class */ (function (_super) {
    __extends(DxGatewayAssociationProposal, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal.html aws_dx_gateway_association_proposal} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DxGatewayAssociationProposalConfig
    */
    function DxGatewayAssociationProposal(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_dx_gateway_association_proposal',
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
        _this._dxGatewayId = config.dxGatewayId;
        _this._dxGatewayOwnerAccountId = config.dxGatewayOwnerAccountId;
        return _this;
    }
    Object.defineProperty(DxGatewayAssociationProposal.prototype, "allowedPrefixes", {
        get: function () {
            return this.getListAttribute('allowed_prefixes');
        },
        set: function (value) {
            this._allowedPrefixes = value;
        },
        enumerable: false,
        configurable: true
    });
    DxGatewayAssociationProposal.prototype.resetAllowedPrefixes = function () {
        this._allowedPrefixes = undefined;
    };
    Object.defineProperty(DxGatewayAssociationProposal.prototype, "allowedPrefixesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowedPrefixes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxGatewayAssociationProposal.prototype, "associatedGatewayId", {
        get: function () {
            return this.getStringAttribute('associated_gateway_id');
        },
        set: function (value) {
            this._associatedGatewayId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxGatewayAssociationProposal.prototype, "associatedGatewayIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._associatedGatewayId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxGatewayAssociationProposal.prototype, "associatedGatewayOwnerAccountId", {
        // associated_gateway_owner_account_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('associated_gateway_owner_account_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxGatewayAssociationProposal.prototype, "associatedGatewayType", {
        // associated_gateway_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('associated_gateway_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxGatewayAssociationProposal.prototype, "dxGatewayId", {
        get: function () {
            return this.getStringAttribute('dx_gateway_id');
        },
        set: function (value) {
            this._dxGatewayId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxGatewayAssociationProposal.prototype, "dxGatewayIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dxGatewayId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxGatewayAssociationProposal.prototype, "dxGatewayOwnerAccountId", {
        get: function () {
            return this.getStringAttribute('dx_gateway_owner_account_id');
        },
        set: function (value) {
            this._dxGatewayOwnerAccountId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxGatewayAssociationProposal.prototype, "dxGatewayOwnerAccountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dxGatewayOwnerAccountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxGatewayAssociationProposal.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DxGatewayAssociationProposal.prototype.synthesizeAttributes = function () {
        return {
            allowed_prefixes: cdktf.listMapper(cdktf.stringToTerraform)(this._allowedPrefixes),
            associated_gateway_id: cdktf.stringToTerraform(this._associatedGatewayId),
            dx_gateway_id: cdktf.stringToTerraform(this._dxGatewayId),
            dx_gateway_owner_account_id: cdktf.stringToTerraform(this._dxGatewayOwnerAccountId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DxGatewayAssociationProposal.tfResourceType = "aws_dx_gateway_association_proposal";
    return DxGatewayAssociationProposal;
}(cdktf.TerraformResource));
exports.DxGatewayAssociationProposal = DxGatewayAssociationProposal;
