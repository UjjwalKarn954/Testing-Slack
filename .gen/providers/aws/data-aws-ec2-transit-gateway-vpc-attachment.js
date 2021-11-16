"use strict";
// https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachment.html
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
exports.DataAwsEc2TransitGatewayVpcAttachment = void 0;
var cdktf = require("cdktf");
function dataAwsEc2TransitGatewayVpcAttachmentFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachment.html aws_ec2_transit_gateway_vpc_attachment}
*/
var DataAwsEc2TransitGatewayVpcAttachment = /** @class */ (function (_super) {
    __extends(DataAwsEc2TransitGatewayVpcAttachment, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_transit_gateway_vpc_attachment.html aws_ec2_transit_gateway_vpc_attachment} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2TransitGatewayVpcAttachmentConfig = {}
    */
    function DataAwsEc2TransitGatewayVpcAttachment(scope, id, config) {
        if (config === void 0) { config = {}; }
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
        _this._tags = config.tags;
        _this._filter = config.filter;
        return _this;
    }
    Object.defineProperty(DataAwsEc2TransitGatewayVpcAttachment.prototype, "applianceModeSupport", {
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
    Object.defineProperty(DataAwsEc2TransitGatewayVpcAttachment.prototype, "dnsSupport", {
        // dns_support - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dns_support');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2TransitGatewayVpcAttachment.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2TransitGatewayVpcAttachment.prototype, "ipv6Support", {
        // ipv6_support - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ipv6_support');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2TransitGatewayVpcAttachment.prototype, "subnetIds", {
        // subnet_ids - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('subnet_ids');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2TransitGatewayVpcAttachment.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEc2TransitGatewayVpcAttachment.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsEc2TransitGatewayVpcAttachment.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2TransitGatewayVpcAttachment.prototype, "transitGatewayId", {
        // transit_gateway_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('transit_gateway_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2TransitGatewayVpcAttachment.prototype, "vpcId", {
        // vpc_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2TransitGatewayVpcAttachment.prototype, "vpcOwnerId", {
        // vpc_owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('vpc_owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2TransitGatewayVpcAttachment.prototype, "filter", {
        get: function () {
            return this.interpolationForAttribute('filter');
        },
        set: function (value) {
            this._filter = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEc2TransitGatewayVpcAttachment.prototype.resetFilter = function () {
        this._filter = undefined;
    };
    Object.defineProperty(DataAwsEc2TransitGatewayVpcAttachment.prototype, "filterInput", {
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
    DataAwsEc2TransitGatewayVpcAttachment.prototype.synthesizeAttributes = function () {
        return {
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            filter: cdktf.listMapper(dataAwsEc2TransitGatewayVpcAttachmentFilterToTerraform)(this._filter)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsEc2TransitGatewayVpcAttachment.tfResourceType = "aws_ec2_transit_gateway_vpc_attachment";
    return DataAwsEc2TransitGatewayVpcAttachment;
}(cdktf.TerraformDataSource));
exports.DataAwsEc2TransitGatewayVpcAttachment = DataAwsEc2TransitGatewayVpcAttachment;
