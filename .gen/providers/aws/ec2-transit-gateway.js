"use strict";
// https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway.html
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
exports.Ec2TransitGateway = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway.html aws_ec2_transit_gateway}
*/
var Ec2TransitGateway = /** @class */ (function (_super) {
    __extends(Ec2TransitGateway, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway.html aws_ec2_transit_gateway} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TransitGatewayConfig = {}
    */
    function Ec2TransitGateway(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ec2_transit_gateway',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._amazonSideAsn = config.amazonSideAsn;
        _this._autoAcceptSharedAttachments = config.autoAcceptSharedAttachments;
        _this._defaultRouteTableAssociation = config.defaultRouteTableAssociation;
        _this._defaultRouteTablePropagation = config.defaultRouteTablePropagation;
        _this._description = config.description;
        _this._dnsSupport = config.dnsSupport;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._vpnEcmpSupport = config.vpnEcmpSupport;
        return _this;
    }
    Object.defineProperty(Ec2TransitGateway.prototype, "amazonSideAsn", {
        get: function () {
            return this.getNumberAttribute('amazon_side_asn');
        },
        set: function (value) {
            this._amazonSideAsn = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2TransitGateway.prototype.resetAmazonSideAsn = function () {
        this._amazonSideAsn = undefined;
    };
    Object.defineProperty(Ec2TransitGateway.prototype, "amazonSideAsnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._amazonSideAsn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGateway.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGateway.prototype, "associationDefaultRouteTableId", {
        // association_default_route_table_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('association_default_route_table_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGateway.prototype, "autoAcceptSharedAttachments", {
        get: function () {
            return this.getStringAttribute('auto_accept_shared_attachments');
        },
        set: function (value) {
            this._autoAcceptSharedAttachments = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2TransitGateway.prototype.resetAutoAcceptSharedAttachments = function () {
        this._autoAcceptSharedAttachments = undefined;
    };
    Object.defineProperty(Ec2TransitGateway.prototype, "autoAcceptSharedAttachmentsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoAcceptSharedAttachments;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGateway.prototype, "defaultRouteTableAssociation", {
        get: function () {
            return this.getStringAttribute('default_route_table_association');
        },
        set: function (value) {
            this._defaultRouteTableAssociation = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2TransitGateway.prototype.resetDefaultRouteTableAssociation = function () {
        this._defaultRouteTableAssociation = undefined;
    };
    Object.defineProperty(Ec2TransitGateway.prototype, "defaultRouteTableAssociationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultRouteTableAssociation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGateway.prototype, "defaultRouteTablePropagation", {
        get: function () {
            return this.getStringAttribute('default_route_table_propagation');
        },
        set: function (value) {
            this._defaultRouteTablePropagation = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2TransitGateway.prototype.resetDefaultRouteTablePropagation = function () {
        this._defaultRouteTablePropagation = undefined;
    };
    Object.defineProperty(Ec2TransitGateway.prototype, "defaultRouteTablePropagationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultRouteTablePropagation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGateway.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2TransitGateway.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(Ec2TransitGateway.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGateway.prototype, "dnsSupport", {
        get: function () {
            return this.getStringAttribute('dns_support');
        },
        set: function (value) {
            this._dnsSupport = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2TransitGateway.prototype.resetDnsSupport = function () {
        this._dnsSupport = undefined;
    };
    Object.defineProperty(Ec2TransitGateway.prototype, "dnsSupportInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dnsSupport;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGateway.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGateway.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGateway.prototype, "propagationDefaultRouteTableId", {
        // propagation_default_route_table_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('propagation_default_route_table_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGateway.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2TransitGateway.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(Ec2TransitGateway.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGateway.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2TransitGateway.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(Ec2TransitGateway.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGateway.prototype, "vpnEcmpSupport", {
        get: function () {
            return this.getStringAttribute('vpn_ecmp_support');
        },
        set: function (value) {
            this._vpnEcmpSupport = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2TransitGateway.prototype.resetVpnEcmpSupport = function () {
        this._vpnEcmpSupport = undefined;
    };
    Object.defineProperty(Ec2TransitGateway.prototype, "vpnEcmpSupportInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpnEcmpSupport;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Ec2TransitGateway.prototype.synthesizeAttributes = function () {
        return {
            amazon_side_asn: cdktf.numberToTerraform(this._amazonSideAsn),
            auto_accept_shared_attachments: cdktf.stringToTerraform(this._autoAcceptSharedAttachments),
            default_route_table_association: cdktf.stringToTerraform(this._defaultRouteTableAssociation),
            default_route_table_propagation: cdktf.stringToTerraform(this._defaultRouteTablePropagation),
            description: cdktf.stringToTerraform(this._description),
            dns_support: cdktf.stringToTerraform(this._dnsSupport),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            vpn_ecmp_support: cdktf.stringToTerraform(this._vpnEcmpSupport)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Ec2TransitGateway.tfResourceType = "aws_ec2_transit_gateway";
    return Ec2TransitGateway;
}(cdktf.TerraformResource));
exports.Ec2TransitGateway = Ec2TransitGateway;
