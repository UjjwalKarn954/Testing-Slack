"use strict";
// https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_peering_attachment.html
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
exports.DataAwsEc2TransitGatewayPeeringAttachment = void 0;
var cdktf = require("cdktf");
function dataAwsEc2TransitGatewayPeeringAttachmentFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_peering_attachment.html aws_ec2_transit_gateway_peering_attachment}
*/
var DataAwsEc2TransitGatewayPeeringAttachment = /** @class */ (function (_super) {
    __extends(DataAwsEc2TransitGatewayPeeringAttachment, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_peering_attachment.html aws_ec2_transit_gateway_peering_attachment} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2TransitGatewayPeeringAttachmentConfig = {}
    */
    function DataAwsEc2TransitGatewayPeeringAttachment(scope, id, config) {
        if (config === void 0) { config = {}; }
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
        _this._tags = config.tags;
        _this._filter = config.filter;
        return _this;
    }
    Object.defineProperty(DataAwsEc2TransitGatewayPeeringAttachment.prototype, "id", {
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
    Object.defineProperty(DataAwsEc2TransitGatewayPeeringAttachment.prototype, "peerAccountId", {
        // peer_account_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('peer_account_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2TransitGatewayPeeringAttachment.prototype, "peerRegion", {
        // peer_region - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('peer_region');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2TransitGatewayPeeringAttachment.prototype, "peerTransitGatewayId", {
        // peer_transit_gateway_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('peer_transit_gateway_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2TransitGatewayPeeringAttachment.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEc2TransitGatewayPeeringAttachment.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsEc2TransitGatewayPeeringAttachment.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2TransitGatewayPeeringAttachment.prototype, "transitGatewayId", {
        // transit_gateway_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('transit_gateway_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2TransitGatewayPeeringAttachment.prototype, "filter", {
        get: function () {
            return this.interpolationForAttribute('filter');
        },
        set: function (value) {
            this._filter = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEc2TransitGatewayPeeringAttachment.prototype.resetFilter = function () {
        this._filter = undefined;
    };
    Object.defineProperty(DataAwsEc2TransitGatewayPeeringAttachment.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsEc2TransitGatewayPeeringAttachment.prototype.synthesizeAttributes = function () {
        return {
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            filter: cdktf.listMapper(dataAwsEc2TransitGatewayPeeringAttachmentFilterToTerraform)(this._filter)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsEc2TransitGatewayPeeringAttachment.tfResourceType = "aws_ec2_transit_gateway_peering_attachment";
    return DataAwsEc2TransitGatewayPeeringAttachment;
}(cdktf.TerraformDataSource));
exports.DataAwsEc2TransitGatewayPeeringAttachment = DataAwsEc2TransitGatewayPeeringAttachment;
