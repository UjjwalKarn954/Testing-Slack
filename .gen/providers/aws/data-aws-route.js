"use strict";
// https://www.terraform.io/docs/providers/aws/d/route.html
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
exports.DataAwsRoute = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/route.html aws_route}
*/
var DataAwsRoute = /** @class */ (function (_super) {
    __extends(DataAwsRoute, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/route.html aws_route} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRouteConfig
    */
    function DataAwsRoute(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_route',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._carrierGatewayId = config.carrierGatewayId;
        _this._destinationCidrBlock = config.destinationCidrBlock;
        _this._destinationIpv6CidrBlock = config.destinationIpv6CidrBlock;
        _this._destinationPrefixListId = config.destinationPrefixListId;
        _this._egressOnlyGatewayId = config.egressOnlyGatewayId;
        _this._gatewayId = config.gatewayId;
        _this._instanceId = config.instanceId;
        _this._localGatewayId = config.localGatewayId;
        _this._natGatewayId = config.natGatewayId;
        _this._networkInterfaceId = config.networkInterfaceId;
        _this._routeTableId = config.routeTableId;
        _this._transitGatewayId = config.transitGatewayId;
        _this._vpcPeeringConnectionId = config.vpcPeeringConnectionId;
        return _this;
    }
    Object.defineProperty(DataAwsRoute.prototype, "carrierGatewayId", {
        get: function () {
            return this.getStringAttribute('carrier_gateway_id');
        },
        set: function (value) {
            this._carrierGatewayId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRoute.prototype.resetCarrierGatewayId = function () {
        this._carrierGatewayId = undefined;
    };
    Object.defineProperty(DataAwsRoute.prototype, "carrierGatewayIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._carrierGatewayId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRoute.prototype, "destinationCidrBlock", {
        get: function () {
            return this.getStringAttribute('destination_cidr_block');
        },
        set: function (value) {
            this._destinationCidrBlock = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRoute.prototype.resetDestinationCidrBlock = function () {
        this._destinationCidrBlock = undefined;
    };
    Object.defineProperty(DataAwsRoute.prototype, "destinationCidrBlockInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._destinationCidrBlock;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRoute.prototype, "destinationIpv6CidrBlock", {
        get: function () {
            return this.getStringAttribute('destination_ipv6_cidr_block');
        },
        set: function (value) {
            this._destinationIpv6CidrBlock = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRoute.prototype.resetDestinationIpv6CidrBlock = function () {
        this._destinationIpv6CidrBlock = undefined;
    };
    Object.defineProperty(DataAwsRoute.prototype, "destinationIpv6CidrBlockInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._destinationIpv6CidrBlock;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRoute.prototype, "destinationPrefixListId", {
        get: function () {
            return this.getStringAttribute('destination_prefix_list_id');
        },
        set: function (value) {
            this._destinationPrefixListId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRoute.prototype.resetDestinationPrefixListId = function () {
        this._destinationPrefixListId = undefined;
    };
    Object.defineProperty(DataAwsRoute.prototype, "destinationPrefixListIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._destinationPrefixListId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRoute.prototype, "egressOnlyGatewayId", {
        get: function () {
            return this.getStringAttribute('egress_only_gateway_id');
        },
        set: function (value) {
            this._egressOnlyGatewayId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRoute.prototype.resetEgressOnlyGatewayId = function () {
        this._egressOnlyGatewayId = undefined;
    };
    Object.defineProperty(DataAwsRoute.prototype, "egressOnlyGatewayIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._egressOnlyGatewayId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRoute.prototype, "gatewayId", {
        get: function () {
            return this.getStringAttribute('gateway_id');
        },
        set: function (value) {
            this._gatewayId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRoute.prototype.resetGatewayId = function () {
        this._gatewayId = undefined;
    };
    Object.defineProperty(DataAwsRoute.prototype, "gatewayIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._gatewayId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRoute.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRoute.prototype, "instanceId", {
        get: function () {
            return this.getStringAttribute('instance_id');
        },
        set: function (value) {
            this._instanceId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRoute.prototype.resetInstanceId = function () {
        this._instanceId = undefined;
    };
    Object.defineProperty(DataAwsRoute.prototype, "instanceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRoute.prototype, "localGatewayId", {
        get: function () {
            return this.getStringAttribute('local_gateway_id');
        },
        set: function (value) {
            this._localGatewayId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRoute.prototype.resetLocalGatewayId = function () {
        this._localGatewayId = undefined;
    };
    Object.defineProperty(DataAwsRoute.prototype, "localGatewayIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._localGatewayId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRoute.prototype, "natGatewayId", {
        get: function () {
            return this.getStringAttribute('nat_gateway_id');
        },
        set: function (value) {
            this._natGatewayId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRoute.prototype.resetNatGatewayId = function () {
        this._natGatewayId = undefined;
    };
    Object.defineProperty(DataAwsRoute.prototype, "natGatewayIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._natGatewayId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRoute.prototype, "networkInterfaceId", {
        get: function () {
            return this.getStringAttribute('network_interface_id');
        },
        set: function (value) {
            this._networkInterfaceId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRoute.prototype.resetNetworkInterfaceId = function () {
        this._networkInterfaceId = undefined;
    };
    Object.defineProperty(DataAwsRoute.prototype, "networkInterfaceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._networkInterfaceId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRoute.prototype, "routeTableId", {
        get: function () {
            return this.getStringAttribute('route_table_id');
        },
        set: function (value) {
            this._routeTableId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRoute.prototype, "routeTableIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._routeTableId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRoute.prototype, "transitGatewayId", {
        get: function () {
            return this.getStringAttribute('transit_gateway_id');
        },
        set: function (value) {
            this._transitGatewayId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRoute.prototype.resetTransitGatewayId = function () {
        this._transitGatewayId = undefined;
    };
    Object.defineProperty(DataAwsRoute.prototype, "transitGatewayIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._transitGatewayId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRoute.prototype, "vpcPeeringConnectionId", {
        get: function () {
            return this.getStringAttribute('vpc_peering_connection_id');
        },
        set: function (value) {
            this._vpcPeeringConnectionId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRoute.prototype.resetVpcPeeringConnectionId = function () {
        this._vpcPeeringConnectionId = undefined;
    };
    Object.defineProperty(DataAwsRoute.prototype, "vpcPeeringConnectionIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcPeeringConnectionId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsRoute.prototype.synthesizeAttributes = function () {
        return {
            carrier_gateway_id: cdktf.stringToTerraform(this._carrierGatewayId),
            destination_cidr_block: cdktf.stringToTerraform(this._destinationCidrBlock),
            destination_ipv6_cidr_block: cdktf.stringToTerraform(this._destinationIpv6CidrBlock),
            destination_prefix_list_id: cdktf.stringToTerraform(this._destinationPrefixListId),
            egress_only_gateway_id: cdktf.stringToTerraform(this._egressOnlyGatewayId),
            gateway_id: cdktf.stringToTerraform(this._gatewayId),
            instance_id: cdktf.stringToTerraform(this._instanceId),
            local_gateway_id: cdktf.stringToTerraform(this._localGatewayId),
            nat_gateway_id: cdktf.stringToTerraform(this._natGatewayId),
            network_interface_id: cdktf.stringToTerraform(this._networkInterfaceId),
            route_table_id: cdktf.stringToTerraform(this._routeTableId),
            transit_gateway_id: cdktf.stringToTerraform(this._transitGatewayId),
            vpc_peering_connection_id: cdktf.stringToTerraform(this._vpcPeeringConnectionId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsRoute.tfResourceType = "aws_route";
    return DataAwsRoute;
}(cdktf.TerraformDataSource));
exports.DataAwsRoute = DataAwsRoute;
