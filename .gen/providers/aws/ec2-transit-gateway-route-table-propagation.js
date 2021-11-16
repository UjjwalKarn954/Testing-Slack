"use strict";
// https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route_table_propagation.html
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
exports.Ec2TransitGatewayRouteTablePropagation = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route_table_propagation.html aws_ec2_transit_gateway_route_table_propagation}
*/
var Ec2TransitGatewayRouteTablePropagation = /** @class */ (function (_super) {
    __extends(Ec2TransitGatewayRouteTablePropagation, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route_table_propagation.html aws_ec2_transit_gateway_route_table_propagation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TransitGatewayRouteTablePropagationConfig
    */
    function Ec2TransitGatewayRouteTablePropagation(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ec2_transit_gateway_route_table_propagation',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._transitGatewayAttachmentId = config.transitGatewayAttachmentId;
        _this._transitGatewayRouteTableId = config.transitGatewayRouteTableId;
        return _this;
    }
    Object.defineProperty(Ec2TransitGatewayRouteTablePropagation.prototype, "id", {
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
    Object.defineProperty(Ec2TransitGatewayRouteTablePropagation.prototype, "resourceId", {
        // resource_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('resource_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayRouteTablePropagation.prototype, "resourceType", {
        // resource_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('resource_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayRouteTablePropagation.prototype, "transitGatewayAttachmentId", {
        get: function () {
            return this.getStringAttribute('transit_gateway_attachment_id');
        },
        set: function (value) {
            this._transitGatewayAttachmentId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayRouteTablePropagation.prototype, "transitGatewayAttachmentIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._transitGatewayAttachmentId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayRouteTablePropagation.prototype, "transitGatewayRouteTableId", {
        get: function () {
            return this.getStringAttribute('transit_gateway_route_table_id');
        },
        set: function (value) {
            this._transitGatewayRouteTableId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TransitGatewayRouteTablePropagation.prototype, "transitGatewayRouteTableIdInput", {
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
    Ec2TransitGatewayRouteTablePropagation.prototype.synthesizeAttributes = function () {
        return {
            transit_gateway_attachment_id: cdktf.stringToTerraform(this._transitGatewayAttachmentId),
            transit_gateway_route_table_id: cdktf.stringToTerraform(this._transitGatewayRouteTableId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Ec2TransitGatewayRouteTablePropagation.tfResourceType = "aws_ec2_transit_gateway_route_table_propagation";
    return Ec2TransitGatewayRouteTablePropagation;
}(cdktf.TerraformResource));
exports.Ec2TransitGatewayRouteTablePropagation = Ec2TransitGatewayRouteTablePropagation;
