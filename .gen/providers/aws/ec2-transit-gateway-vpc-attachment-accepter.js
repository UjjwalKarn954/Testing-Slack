"use strict";
// https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter.html
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
exports.Ec2TransitGatewayVpcAttachmentAccepter = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter.html aws_ec2_transit_gateway_vpc_attachment_accepter}
*/
var Ec2TransitGatewayVpcAttachmentAccepter = /** @class */ (function (_super) {
    __extends(Ec2TransitGatewayVpcAttachmentAccepter, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment_accepter.html aws_ec2_transit_gateway_vpc_attachment_accepter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TransitGatewayVpcAttachmentAccepterConfig
    */
    function Ec2TransitGatewayVpcAttachmentAccepter(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ec2_transit_gateway_vpc_attachment_accepter',
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
        _this._transitGatewayDefaultRouteTableAssociation = config.transitGatewayDefaultRouteTableAssociation;
        _this._transitGatewayDefaultRouteTablePropagation = config.transitGatewayDefaultRouteTablePropagation;
        return _this;
    }
    Object.defineProperty(Ec2TransitGatewayVpcAttachmentAccepter.prototype, "applianceModeSupport", {
        // ==========
        // ATTRIBUTES
        // ==========
        // appliance_mode_support - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('appliance_mode_support');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayVpcAttachmentAccepter.prototype, "dnsSupport", {
        // dns_support - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dns_support');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayVpcAttachmentAccepter.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayVpcAttachmentAccepter.prototype, "ipv6Support", {
        // ipv6_support - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ipv6_support');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayVpcAttachmentAccepter.prototype, "subnetIds", {
        // subnet_ids - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('subnet_ids');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayVpcAttachmentAccepter.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2TransitGatewayVpcAttachmentAccepter.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(Ec2TransitGatewayVpcAttachmentAccepter.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayVpcAttachmentAccepter.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2TransitGatewayVpcAttachmentAccepter.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(Ec2TransitGatewayVpcAttachmentAccepter.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayVpcAttachmentAccepter.prototype, "transitGatewayAttachmentId", {
        get: function () {
            return this.getStringAttribute('transit_gateway_attachment_id');
        },
        set: function (value) {
            this._transitGatewayAttachmentId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayVpcAttachmentAccepter.prototype, "transitGatewayAttachmentIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._transitGatewayAttachmentId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayVpcAttachmentAccepter.prototype, "transitGatewayDefaultRouteTableAssociation", {
        get: function () {
            return this.getBooleanAttribute('transit_gateway_default_route_table_association');
        },
        set: function (value) {
            this._transitGatewayDefaultRouteTableAssociation = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2TransitGatewayVpcAttachmentAccepter.prototype.resetTransitGatewayDefaultRouteTableAssociation = function () {
        this._transitGatewayDefaultRouteTableAssociation = undefined;
    };
    Object.defineProperty(Ec2TransitGatewayVpcAttachmentAccepter.prototype, "transitGatewayDefaultRouteTableAssociationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._transitGatewayDefaultRouteTableAssociation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayVpcAttachmentAccepter.prototype, "transitGatewayDefaultRouteTablePropagation", {
        get: function () {
            return this.getBooleanAttribute('transit_gateway_default_route_table_propagation');
        },
        set: function (value) {
            this._transitGatewayDefaultRouteTablePropagation = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2TransitGatewayVpcAttachmentAccepter.prototype.resetTransitGatewayDefaultRouteTablePropagation = function () {
        this._transitGatewayDefaultRouteTablePropagation = undefined;
    };
    Object.defineProperty(Ec2TransitGatewayVpcAttachmentAccepter.prototype, "transitGatewayDefaultRouteTablePropagationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._transitGatewayDefaultRouteTablePropagation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayVpcAttachmentAccepter.prototype, "transitGatewayId", {
        // transit_gateway_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('transit_gateway_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayVpcAttachmentAccepter.prototype, "vpcId", {
        // vpc_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayVpcAttachmentAccepter.prototype, "vpcOwnerId", {
        // vpc_owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('vpc_owner_id');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Ec2TransitGatewayVpcAttachmentAccepter.prototype.synthesizeAttributes = function () {
        return {
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            transit_gateway_attachment_id: cdktf.stringToTerraform(this._transitGatewayAttachmentId),
            transit_gateway_default_route_table_association: cdktf.booleanToTerraform(this._transitGatewayDefaultRouteTableAssociation),
            transit_gateway_default_route_table_propagation: cdktf.booleanToTerraform(this._transitGatewayDefaultRouteTablePropagation)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Ec2TransitGatewayVpcAttachmentAccepter.tfResourceType = "aws_ec2_transit_gateway_vpc_attachment_accepter";
    return Ec2TransitGatewayVpcAttachmentAccepter;
}(cdktf.TerraformResource));
exports.Ec2TransitGatewayVpcAttachmentAccepter = Ec2TransitGatewayVpcAttachmentAccepter;
