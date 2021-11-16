"use strict";
// https://www.terraform.io/docs/providers/aws/d/route_table.html
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
exports.DataAwsRouteTable = exports.DataAwsRouteTableRoutes = exports.DataAwsRouteTableAssociations = void 0;
var cdktf = require("cdktf");
var DataAwsRouteTableAssociations = /** @class */ (function (_super) {
    __extends(DataAwsRouteTableAssociations, _super);
    function DataAwsRouteTableAssociations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsRouteTableAssociations.prototype, "gatewayId", {
        // gateway_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('gateway_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRouteTableAssociations.prototype, "main", {
        // main - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('main');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRouteTableAssociations.prototype, "routeTableAssociationId", {
        // route_table_association_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('route_table_association_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRouteTableAssociations.prototype, "routeTableId", {
        // route_table_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('route_table_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRouteTableAssociations.prototype, "subnetId", {
        // subnet_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('subnet_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsRouteTableAssociations;
}(cdktf.ComplexComputedList));
exports.DataAwsRouteTableAssociations = DataAwsRouteTableAssociations;
var DataAwsRouteTableRoutes = /** @class */ (function (_super) {
    __extends(DataAwsRouteTableRoutes, _super);
    function DataAwsRouteTableRoutes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsRouteTableRoutes.prototype, "carrierGatewayId", {
        // carrier_gateway_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('carrier_gateway_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRouteTableRoutes.prototype, "cidrBlock", {
        // cidr_block - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cidr_block');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRouteTableRoutes.prototype, "destinationPrefixListId", {
        // destination_prefix_list_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('destination_prefix_list_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRouteTableRoutes.prototype, "egressOnlyGatewayId", {
        // egress_only_gateway_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('egress_only_gateway_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRouteTableRoutes.prototype, "gatewayId", {
        // gateway_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('gateway_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRouteTableRoutes.prototype, "instanceId", {
        // instance_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('instance_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRouteTableRoutes.prototype, "ipv6CidrBlock", {
        // ipv6_cidr_block - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ipv6_cidr_block');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRouteTableRoutes.prototype, "localGatewayId", {
        // local_gateway_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('local_gateway_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRouteTableRoutes.prototype, "natGatewayId", {
        // nat_gateway_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('nat_gateway_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRouteTableRoutes.prototype, "networkInterfaceId", {
        // network_interface_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('network_interface_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRouteTableRoutes.prototype, "transitGatewayId", {
        // transit_gateway_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('transit_gateway_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRouteTableRoutes.prototype, "vpcEndpointId", {
        // vpc_endpoint_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('vpc_endpoint_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRouteTableRoutes.prototype, "vpcPeeringConnectionId", {
        // vpc_peering_connection_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('vpc_peering_connection_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsRouteTableRoutes;
}(cdktf.ComplexComputedList));
exports.DataAwsRouteTableRoutes = DataAwsRouteTableRoutes;
function dataAwsRouteTableFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/route_table.html aws_route_table}
*/
var DataAwsRouteTable = /** @class */ (function (_super) {
    __extends(DataAwsRouteTable, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/route_table.html aws_route_table} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRouteTableConfig = {}
    */
    function DataAwsRouteTable(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_route_table',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._gatewayId = config.gatewayId;
        _this._routeTableId = config.routeTableId;
        _this._subnetId = config.subnetId;
        _this._tags = config.tags;
        _this._vpcId = config.vpcId;
        _this._filter = config.filter;
        return _this;
    }
    Object.defineProperty(DataAwsRouteTable.prototype, "arn", {
        // ==========
        // ATTRIBUTES
        // ==========
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    // associations - computed: true, optional: false, required: false
    DataAwsRouteTable.prototype.associations = function (index) {
        return new DataAwsRouteTableAssociations(this, 'associations', index);
    };
    Object.defineProperty(DataAwsRouteTable.prototype, "gatewayId", {
        get: function () {
            return this.getStringAttribute('gateway_id');
        },
        set: function (value) {
            this._gatewayId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRouteTable.prototype.resetGatewayId = function () {
        this._gatewayId = undefined;
    };
    Object.defineProperty(DataAwsRouteTable.prototype, "gatewayIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._gatewayId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRouteTable.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRouteTable.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRouteTable.prototype, "routeTableId", {
        get: function () {
            return this.getStringAttribute('route_table_id');
        },
        set: function (value) {
            this._routeTableId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRouteTable.prototype.resetRouteTableId = function () {
        this._routeTableId = undefined;
    };
    Object.defineProperty(DataAwsRouteTable.prototype, "routeTableIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._routeTableId;
        },
        enumerable: false,
        configurable: true
    });
    // routes - computed: true, optional: false, required: false
    DataAwsRouteTable.prototype.routes = function (index) {
        return new DataAwsRouteTableRoutes(this, 'routes', index);
    };
    Object.defineProperty(DataAwsRouteTable.prototype, "subnetId", {
        get: function () {
            return this.getStringAttribute('subnet_id');
        },
        set: function (value) {
            this._subnetId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRouteTable.prototype.resetSubnetId = function () {
        this._subnetId = undefined;
    };
    Object.defineProperty(DataAwsRouteTable.prototype, "subnetIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subnetId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRouteTable.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRouteTable.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsRouteTable.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRouteTable.prototype, "vpcId", {
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        set: function (value) {
            this._vpcId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRouteTable.prototype.resetVpcId = function () {
        this._vpcId = undefined;
    };
    Object.defineProperty(DataAwsRouteTable.prototype, "vpcIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRouteTable.prototype, "filter", {
        get: function () {
            return this.interpolationForAttribute('filter');
        },
        set: function (value) {
            this._filter = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRouteTable.prototype.resetFilter = function () {
        this._filter = undefined;
    };
    Object.defineProperty(DataAwsRouteTable.prototype, "filterInput", {
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
    DataAwsRouteTable.prototype.synthesizeAttributes = function () {
        return {
            gateway_id: cdktf.stringToTerraform(this._gatewayId),
            route_table_id: cdktf.stringToTerraform(this._routeTableId),
            subnet_id: cdktf.stringToTerraform(this._subnetId),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            vpc_id: cdktf.stringToTerraform(this._vpcId),
            filter: cdktf.listMapper(dataAwsRouteTableFilterToTerraform)(this._filter)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsRouteTable.tfResourceType = "aws_route_table";
    return DataAwsRouteTable;
}(cdktf.TerraformDataSource));
exports.DataAwsRouteTable = DataAwsRouteTable;
