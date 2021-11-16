"use strict";
// https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route.html
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
exports.Ec2LocalGatewayRoute = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route.html aws_ec2_local_gateway_route}
*/
var Ec2LocalGatewayRoute = /** @class */ (function (_super) {
    __extends(Ec2LocalGatewayRoute, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_local_gateway_route.html aws_ec2_local_gateway_route} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2LocalGatewayRouteConfig
    */
    function Ec2LocalGatewayRoute(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ec2_local_gateway_route',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._destinationCidrBlock = config.destinationCidrBlock;
        _this._localGatewayRouteTableId = config.localGatewayRouteTableId;
        _this._localGatewayVirtualInterfaceGroupId = config.localGatewayVirtualInterfaceGroupId;
        return _this;
    }
    Object.defineProperty(Ec2LocalGatewayRoute.prototype, "destinationCidrBlock", {
        get: function () {
            return this.getStringAttribute('destination_cidr_block');
        },
        set: function (value) {
            this._destinationCidrBlock = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2LocalGatewayRoute.prototype, "destinationCidrBlockInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._destinationCidrBlock;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2LocalGatewayRoute.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2LocalGatewayRoute.prototype, "localGatewayRouteTableId", {
        get: function () {
            return this.getStringAttribute('local_gateway_route_table_id');
        },
        set: function (value) {
            this._localGatewayRouteTableId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2LocalGatewayRoute.prototype, "localGatewayRouteTableIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._localGatewayRouteTableId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2LocalGatewayRoute.prototype, "localGatewayVirtualInterfaceGroupId", {
        get: function () {
            return this.getStringAttribute('local_gateway_virtual_interface_group_id');
        },
        set: function (value) {
            this._localGatewayVirtualInterfaceGroupId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2LocalGatewayRoute.prototype, "localGatewayVirtualInterfaceGroupIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._localGatewayVirtualInterfaceGroupId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Ec2LocalGatewayRoute.prototype.synthesizeAttributes = function () {
        return {
            destination_cidr_block: cdktf.stringToTerraform(this._destinationCidrBlock),
            local_gateway_route_table_id: cdktf.stringToTerraform(this._localGatewayRouteTableId),
            local_gateway_virtual_interface_group_id: cdktf.stringToTerraform(this._localGatewayVirtualInterfaceGroupId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Ec2LocalGatewayRoute.tfResourceType = "aws_ec2_local_gateway_route";
    return Ec2LocalGatewayRoute;
}(cdktf.TerraformResource));
exports.Ec2LocalGatewayRoute = Ec2LocalGatewayRoute;
