"use strict";
// https://www.terraform.io/docs/providers/aws/r/route_table.html
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
exports.RouteTable = void 0;
var cdktf = require("cdktf");
function routeTableRouteToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        carrier_gateway_id: struct.carrierGatewayId === undefined ? null : cdktf.stringToTerraform(struct.carrierGatewayId),
        cidr_block: struct.cidrBlock === undefined ? null : cdktf.stringToTerraform(struct.cidrBlock),
        destination_prefix_list_id: struct.destinationPrefixListId === undefined ? null : cdktf.stringToTerraform(struct.destinationPrefixListId),
        egress_only_gateway_id: struct.egressOnlyGatewayId === undefined ? null : cdktf.stringToTerraform(struct.egressOnlyGatewayId),
        gateway_id: struct.gatewayId === undefined ? null : cdktf.stringToTerraform(struct.gatewayId),
        instance_id: struct.instanceId === undefined ? null : cdktf.stringToTerraform(struct.instanceId),
        ipv6_cidr_block: struct.ipv6CidrBlock === undefined ? null : cdktf.stringToTerraform(struct.ipv6CidrBlock),
        local_gateway_id: struct.localGatewayId === undefined ? null : cdktf.stringToTerraform(struct.localGatewayId),
        nat_gateway_id: struct.natGatewayId === undefined ? null : cdktf.stringToTerraform(struct.natGatewayId),
        network_interface_id: struct.networkInterfaceId === undefined ? null : cdktf.stringToTerraform(struct.networkInterfaceId),
        transit_gateway_id: struct.transitGatewayId === undefined ? null : cdktf.stringToTerraform(struct.transitGatewayId),
        vpc_endpoint_id: struct.vpcEndpointId === undefined ? null : cdktf.stringToTerraform(struct.vpcEndpointId),
        vpc_peering_connection_id: struct.vpcPeeringConnectionId === undefined ? null : cdktf.stringToTerraform(struct.vpcPeeringConnectionId)
    };
}
function routeTableTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        "delete": cdktf.stringToTerraform(struct["delete"]),
        update: cdktf.stringToTerraform(struct.update)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route_table.html aws_route_table}
*/
var RouteTable = /** @class */ (function (_super) {
    __extends(RouteTable, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route_table.html aws_route_table} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RouteTableConfig
    */
    function RouteTable(scope, id, config) {
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
        _this._propagatingVgws = config.propagatingVgws;
        _this._route = config.route;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._vpcId = config.vpcId;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(RouteTable.prototype, "arn", {
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
    Object.defineProperty(RouteTable.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RouteTable.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RouteTable.prototype, "propagatingVgws", {
        get: function () {
            return this.getListAttribute('propagating_vgws');
        },
        set: function (value) {
            this._propagatingVgws = value;
        },
        enumerable: false,
        configurable: true
    });
    RouteTable.prototype.resetPropagatingVgws = function () {
        this._propagatingVgws = undefined;
    };
    Object.defineProperty(RouteTable.prototype, "propagatingVgwsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._propagatingVgws;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RouteTable.prototype, "route", {
        get: function () {
            return this.interpolationForAttribute('route'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._route = value;
        },
        enumerable: false,
        configurable: true
    });
    RouteTable.prototype.resetRoute = function () {
        this._route = undefined;
    };
    Object.defineProperty(RouteTable.prototype, "routeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._route;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RouteTable.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    RouteTable.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(RouteTable.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RouteTable.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    RouteTable.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(RouteTable.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RouteTable.prototype, "vpcId", {
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        set: function (value) {
            this._vpcId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RouteTable.prototype, "vpcIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RouteTable.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    RouteTable.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(RouteTable.prototype, "timeoutsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeouts;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    RouteTable.prototype.synthesizeAttributes = function () {
        return {
            propagating_vgws: cdktf.listMapper(cdktf.stringToTerraform)(this._propagatingVgws),
            route: cdktf.listMapper(routeTableRouteToTerraform)(this._route),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            vpc_id: cdktf.stringToTerraform(this._vpcId),
            timeouts: routeTableTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    RouteTable.tfResourceType = "aws_route_table";
    return RouteTable;
}(cdktf.TerraformResource));
exports.RouteTable = RouteTable;