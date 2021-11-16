"use strict";
// https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway.html
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
exports.DataAwsEc2TransitGateway = void 0;
var cdktf = require("cdktf");
function dataAwsEc2TransitGatewayFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway.html aws_ec2_transit_gateway}
*/
var DataAwsEc2TransitGateway = /** @class */ (function (_super) {
    __extends(DataAwsEc2TransitGateway, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway.html aws_ec2_transit_gateway} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2TransitGatewayConfig = {}
    */
    function DataAwsEc2TransitGateway(scope, id, config) {
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
        _this._tags = config.tags;
        _this._filter = config.filter;
        return _this;
    }
    Object.defineProperty(DataAwsEc2TransitGateway.prototype, "amazonSideAsn", {
        // ==========
        // ATTRIBUTES
        // ==========
        // amazon_side_asn - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('amazon_side_asn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2TransitGateway.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2TransitGateway.prototype, "associationDefaultRouteTableId", {
        // association_default_route_table_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('association_default_route_table_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2TransitGateway.prototype, "autoAcceptSharedAttachments", {
        // auto_accept_shared_attachments - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('auto_accept_shared_attachments');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2TransitGateway.prototype, "defaultRouteTableAssociation", {
        // default_route_table_association - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('default_route_table_association');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2TransitGateway.prototype, "defaultRouteTablePropagation", {
        // default_route_table_propagation - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('default_route_table_propagation');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2TransitGateway.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2TransitGateway.prototype, "dnsSupport", {
        // dns_support - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dns_support');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2TransitGateway.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2TransitGateway.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2TransitGateway.prototype, "propagationDefaultRouteTableId", {
        // propagation_default_route_table_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('propagation_default_route_table_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2TransitGateway.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEc2TransitGateway.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsEc2TransitGateway.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2TransitGateway.prototype, "vpnEcmpSupport", {
        // vpn_ecmp_support - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('vpn_ecmp_support');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2TransitGateway.prototype, "filter", {
        get: function () {
            return this.interpolationForAttribute('filter');
        },
        set: function (value) {
            this._filter = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEc2TransitGateway.prototype.resetFilter = function () {
        this._filter = undefined;
    };
    Object.defineProperty(DataAwsEc2TransitGateway.prototype, "filterInput", {
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
    DataAwsEc2TransitGateway.prototype.synthesizeAttributes = function () {
        return {
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            filter: cdktf.listMapper(dataAwsEc2TransitGatewayFilterToTerraform)(this._filter)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsEc2TransitGateway.tfResourceType = "aws_ec2_transit_gateway";
    return DataAwsEc2TransitGateway;
}(cdktf.TerraformDataSource));
exports.DataAwsEc2TransitGateway = DataAwsEc2TransitGateway;
