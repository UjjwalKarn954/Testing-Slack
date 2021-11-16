"use strict";
// https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference.html
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
exports.Ec2TransitGatewayPrefixListReference = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference.html aws_ec2_transit_gateway_prefix_list_reference}
*/
var Ec2TransitGatewayPrefixListReference = /** @class */ (function (_super) {
    __extends(Ec2TransitGatewayPrefixListReference, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_prefix_list_reference.html aws_ec2_transit_gateway_prefix_list_reference} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TransitGatewayPrefixListReferenceConfig
    */
    function Ec2TransitGatewayPrefixListReference(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ec2_transit_gateway_prefix_list_reference',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._blackhole = config.blackhole;
        _this._prefixListId = config.prefixListId;
        _this._transitGatewayAttachmentId = config.transitGatewayAttachmentId;
        _this._transitGatewayRouteTableId = config.transitGatewayRouteTableId;
        return _this;
    }
    Object.defineProperty(Ec2TransitGatewayPrefixListReference.prototype, "blackhole", {
        get: function () {
            return this.getBooleanAttribute('blackhole');
        },
        set: function (value) {
            this._blackhole = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2TransitGatewayPrefixListReference.prototype.resetBlackhole = function () {
        this._blackhole = undefined;
    };
    Object.defineProperty(Ec2TransitGatewayPrefixListReference.prototype, "blackholeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._blackhole;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayPrefixListReference.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayPrefixListReference.prototype, "prefixListId", {
        get: function () {
            return this.getStringAttribute('prefix_list_id');
        },
        set: function (value) {
            this._prefixListId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayPrefixListReference.prototype, "prefixListIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._prefixListId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayPrefixListReference.prototype, "prefixListOwnerId", {
        // prefix_list_owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('prefix_list_owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayPrefixListReference.prototype, "transitGatewayAttachmentId", {
        get: function () {
            return this.getStringAttribute('transit_gateway_attachment_id');
        },
        set: function (value) {
            this._transitGatewayAttachmentId = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2TransitGatewayPrefixListReference.prototype.resetTransitGatewayAttachmentId = function () {
        this._transitGatewayAttachmentId = undefined;
    };
    Object.defineProperty(Ec2TransitGatewayPrefixListReference.prototype, "transitGatewayAttachmentIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._transitGatewayAttachmentId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayPrefixListReference.prototype, "transitGatewayRouteTableId", {
        get: function () {
            return this.getStringAttribute('transit_gateway_route_table_id');
        },
        set: function (value) {
            this._transitGatewayRouteTableId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayPrefixListReference.prototype, "transitGatewayRouteTableIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._transitGatewayRouteTableId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Ec2TransitGatewayPrefixListReference.prototype.synthesizeAttributes = function () {
        return {
            blackhole: cdktf.booleanToTerraform(this._blackhole),
            prefix_list_id: cdktf.stringToTerraform(this._prefixListId),
            transit_gateway_attachment_id: cdktf.stringToTerraform(this._transitGatewayAttachmentId),
            transit_gateway_route_table_id: cdktf.stringToTerraform(this._transitGatewayRouteTableId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Ec2TransitGatewayPrefixListReference.tfResourceType = "aws_ec2_transit_gateway_prefix_list_reference";
    return Ec2TransitGatewayPrefixListReference;
}(cdktf.TerraformResource));
exports.Ec2TransitGatewayPrefixListReference = Ec2TransitGatewayPrefixListReference;
