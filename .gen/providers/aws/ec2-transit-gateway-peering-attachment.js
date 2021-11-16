"use strict";
// https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment.html
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
exports.Ec2TransitGatewayPeeringAttachment = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment.html aws_ec2_transit_gateway_peering_attachment}
*/
var Ec2TransitGatewayPeeringAttachment = /** @class */ (function (_super) {
    __extends(Ec2TransitGatewayPeeringAttachment, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment.html aws_ec2_transit_gateway_peering_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TransitGatewayPeeringAttachmentConfig
    */
    function Ec2TransitGatewayPeeringAttachment(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ec2_transit_gateway_peering_attachment',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._peerAccountId = config.peerAccountId;
        _this._peerRegion = config.peerRegion;
        _this._peerTransitGatewayId = config.peerTransitGatewayId;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._transitGatewayId = config.transitGatewayId;
        return _this;
    }
    Object.defineProperty(Ec2TransitGatewayPeeringAttachment.prototype, "id", {
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
    Object.defineProperty(Ec2TransitGatewayPeeringAttachment.prototype, "peerAccountId", {
        get: function () {
            return this.getStringAttribute('peer_account_id');
        },
        set: function (value) {
            this._peerAccountId = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2TransitGatewayPeeringAttachment.prototype.resetPeerAccountId = function () {
        this._peerAccountId = undefined;
    };
    Object.defineProperty(Ec2TransitGatewayPeeringAttachment.prototype, "peerAccountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._peerAccountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayPeeringAttachment.prototype, "peerRegion", {
        get: function () {
            return this.getStringAttribute('peer_region');
        },
        set: function (value) {
            this._peerRegion = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayPeeringAttachment.prototype, "peerRegionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._peerRegion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayPeeringAttachment.prototype, "peerTransitGatewayId", {
        get: function () {
            return this.getStringAttribute('peer_transit_gateway_id');
        },
        set: function (value) {
            this._peerTransitGatewayId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayPeeringAttachment.prototype, "peerTransitGatewayIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._peerTransitGatewayId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayPeeringAttachment.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2TransitGatewayPeeringAttachment.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(Ec2TransitGatewayPeeringAttachment.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayPeeringAttachment.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2TransitGatewayPeeringAttachment.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(Ec2TransitGatewayPeeringAttachment.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayPeeringAttachment.prototype, "transitGatewayId", {
        get: function () {
            return this.getStringAttribute('transit_gateway_id');
        },
        set: function (value) {
            this._transitGatewayId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayPeeringAttachment.prototype, "transitGatewayIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._transitGatewayId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Ec2TransitGatewayPeeringAttachment.prototype.synthesizeAttributes = function () {
        return {
            peer_account_id: cdktf.stringToTerraform(this._peerAccountId),
            peer_region: cdktf.stringToTerraform(this._peerRegion),
            peer_transit_gateway_id: cdktf.stringToTerraform(this._peerTransitGatewayId),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            transit_gateway_id: cdktf.stringToTerraform(this._transitGatewayId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Ec2TransitGatewayPeeringAttachment.tfResourceType = "aws_ec2_transit_gateway_peering_attachment";
    return Ec2TransitGatewayPeeringAttachment;
}(cdktf.TerraformResource));
exports.Ec2TransitGatewayPeeringAttachment = Ec2TransitGatewayPeeringAttachment;
