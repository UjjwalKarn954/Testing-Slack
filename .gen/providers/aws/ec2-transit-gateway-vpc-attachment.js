"use strict";
// https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment.html
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
exports.Ec2TransitGatewayVpcAttachment = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment.html aws_ec2_transit_gateway_vpc_attachment}
*/
var Ec2TransitGatewayVpcAttachment = /** @class */ (function (_super) {
    __extends(Ec2TransitGatewayVpcAttachment, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment.html aws_ec2_transit_gateway_vpc_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TransitGatewayVpcAttachmentConfig
    */
    function Ec2TransitGatewayVpcAttachment(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ec2_transit_gateway_vpc_attachment',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._applianceModeSupport = config.applianceModeSupport;
        _this._dnsSupport = config.dnsSupport;
        _this._ipv6Support = config.ipv6Support;
        _this._subnetIds = config.subnetIds;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._transitGatewayDefaultRouteTableAssociation = config.transitGatewayDefaultRouteTableAssociation;
        _this._transitGatewayDefaultRouteTablePropagation = config.transitGatewayDefaultRouteTablePropagation;
        _this._transitGatewayId = config.transitGatewayId;
        _this._vpcId = config.vpcId;
        return _this;
    }
    Object.defineProperty(Ec2TransitGatewayVpcAttachment.prototype, "applianceModeSupport", {
        get: function () {
            return this.getStringAttribute('appliance_mode_support');
        },
        set: function (value) {
            this._applianceModeSupport = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2TransitGatewayVpcAttachment.prototype.resetApplianceModeSupport = function () {
        this._applianceModeSupport = undefined;
    };
    Object.defineProperty(Ec2TransitGatewayVpcAttachment.prototype, "applianceModeSupportInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._applianceModeSupport;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayVpcAttachment.prototype, "dnsSupport", {
        get: function () {
            return this.getStringAttribute('dns_support');
        },
        set: function (value) {
            this._dnsSupport = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2TransitGatewayVpcAttachment.prototype.resetDnsSupport = function () {
        this._dnsSupport = undefined;
    };
    Object.defineProperty(Ec2TransitGatewayVpcAttachment.prototype, "dnsSupportInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dnsSupport;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayVpcAttachment.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayVpcAttachment.prototype, "ipv6Support", {
        get: function () {
            return this.getStringAttribute('ipv6_support');
        },
        set: function (value) {
            this._ipv6Support = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2TransitGatewayVpcAttachment.prototype.resetIpv6Support = function () {
        this._ipv6Support = undefined;
    };
    Object.defineProperty(Ec2TransitGatewayVpcAttachment.prototype, "ipv6SupportInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipv6Support;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayVpcAttachment.prototype, "subnetIds", {
        get: function () {
            return this.getListAttribute('subnet_ids');
        },
        set: function (value) {
            this._subnetIds = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayVpcAttachment.prototype, "subnetIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subnetIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayVpcAttachment.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2TransitGatewayVpcAttachment.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(Ec2TransitGatewayVpcAttachment.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayVpcAttachment.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2TransitGatewayVpcAttachment.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(Ec2TransitGatewayVpcAttachment.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayVpcAttachment.prototype, "transitGatewayDefaultRouteTableAssociation", {
        get: function () {
            return this.getBooleanAttribute('transit_gateway_default_route_table_association');
        },
        set: function (value) {
            this._transitGatewayDefaultRouteTableAssociation = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2TransitGatewayVpcAttachment.prototype.resetTransitGatewayDefaultRouteTableAssociation = function () {
        this._transitGatewayDefaultRouteTableAssociation = undefined;
    };
    Object.defineProperty(Ec2TransitGatewayVpcAttachment.prototype, "transitGatewayDefaultRouteTableAssociationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._transitGatewayDefaultRouteTableAssociation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayVpcAttachment.prototype, "transitGatewayDefaultRouteTablePropagation", {
        get: function () {
            return this.getBooleanAttribute('transit_gateway_default_route_table_propagation');
        },
        set: function (value) {
            this._transitGatewayDefaultRouteTablePropagation = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2TransitGatewayVpcAttachment.prototype.resetTransitGatewayDefaultRouteTablePropagation = function () {
        this._transitGatewayDefaultRouteTablePropagation = undefined;
    };
    Object.defineProperty(Ec2TransitGatewayVpcAttachment.prototype, "transitGatewayDefaultRouteTablePropagationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._transitGatewayDefaultRouteTablePropagation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayVpcAttachment.prototype, "transitGatewayId", {
        get: function () {
            return this.getStringAttribute('transit_gateway_id');
        },
        set: function (value) {
            this._transitGatewayId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayVpcAttachment.prototype, "transitGatewayIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._transitGatewayId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayVpcAttachment.prototype, "vpcId", {
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        set: function (value) {
            this._vpcId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayVpcAttachment.prototype, "vpcIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayVpcAttachment.prototype, "vpcOwnerId", {
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
    Ec2TransitGatewayVpcAttachment.prototype.synthesizeAttributes = function () {
        return {
            appliance_mode_support: cdktf.stringToTerraform(this._applianceModeSupport),
            dns_support: cdktf.stringToTerraform(this._dnsSupport),
            ipv6_support: cdktf.stringToTerraform(this._ipv6Support),
            subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            transit_gateway_default_route_table_association: cdktf.booleanToTerraform(this._transitGatewayDefaultRouteTableAssociation),
            transit_gateway_default_route_table_propagation: cdktf.booleanToTerraform(this._transitGatewayDefaultRouteTablePropagation),
            transit_gateway_id: cdktf.stringToTerraform(this._transitGatewayId),
            vpc_id: cdktf.stringToTerraform(this._vpcId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Ec2TransitGatewayVpcAttachment.tfResourceType = "aws_ec2_transit_gateway_vpc_attachment";
    return Ec2TransitGatewayVpcAttachment;
}(cdktf.TerraformResource));
exports.Ec2TransitGatewayVpcAttachment = Ec2TransitGatewayVpcAttachment;
