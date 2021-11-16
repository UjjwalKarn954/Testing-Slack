"use strict";
// https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment_accepter.html
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
exports.Ec2TransitGatewayPeeringAttachmentAccepter = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment_accepter.html aws_ec2_transit_gateway_peering_attachment_accepter}
*/
var Ec2TransitGatewayPeeringAttachmentAccepter = /** @class */ (function (_super) {
    __extends(Ec2TransitGatewayPeeringAttachmentAccepter, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_peering_attachment_accepter.html aws_ec2_transit_gateway_peering_attachment_accepter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TransitGatewayPeeringAttachmentAccepterConfig
    */
    function Ec2TransitGatewayPeeringAttachmentAccepter(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ec2_transit_gateway_peering_attachment_accepter',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._transitGatewayAttachmentId = config.transitGatewayAttachmentId;
        return _this;
    }
    Object.defineProperty(Ec2TransitGatewayPeeringAttachmentAccepter.prototype, "id", {
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
    Object.defineProperty(Ec2TransitGatewayPeeringAttachmentAccepter.prototype, "peerAccountId", {
        // peer_account_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('peer_account_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayPeeringAttachmentAccepter.prototype, "peerRegion", {
        // peer_region - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('peer_region');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayPeeringAttachmentAccepter.prototype, "peerTransitGatewayId", {
        // peer_transit_gateway_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('peer_transit_gateway_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayPeeringAttachmentAccepter.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2TransitGatewayPeeringAttachmentAccepter.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(Ec2TransitGatewayPeeringAttachmentAccepter.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayPeeringAttachmentAccepter.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2TransitGatewayPeeringAttachmentAccepter.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(Ec2TransitGatewayPeeringAttachmentAccepter.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayPeeringAttachmentAccepter.prototype, "transitGatewayAttachmentId", {
        get: function () {
            return this.getStringAttribute('transit_gateway_attachment_id');
        },
        set: function (value) {
            this._transitGatewayAttachmentId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayPeeringAttachmentAccepter.prototype, "transitGatewayAttachmentIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._transitGatewayAttachmentId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayPeeringAttachmentAccepter.prototype, "transitGatewayId", {
        // transit_gateway_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('transit_gateway_id');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Ec2TransitGatewayPeeringAttachmentAccepter.prototype.synthesizeAttributes = function () {
        return {
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            transit_gateway_attachment_id: cdktf.stringToTerraform(this._transitGatewayAttachmentId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Ec2TransitGatewayPeeringAttachmentAccepter.tfResourceType = "aws_ec2_transit_gateway_peering_attachment_accepter";
    return Ec2TransitGatewayPeeringAttachmentAccepter;
}(cdktf.TerraformResource));
exports.Ec2TransitGatewayPeeringAttachmentAccepter = Ec2TransitGatewayPeeringAttachmentAccepter;
