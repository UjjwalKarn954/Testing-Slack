"use strict";
// https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table.html
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
exports.DataAwsEc2LocalGatewayRouteTable = void 0;
var cdktf = require("cdktf");
function dataAwsEc2LocalGatewayRouteTableFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table.html aws_ec2_local_gateway_route_table}
*/
var DataAwsEc2LocalGatewayRouteTable = /** @class */ (function (_super) {
    __extends(DataAwsEc2LocalGatewayRouteTable, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_route_table.html aws_ec2_local_gateway_route_table} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2LocalGatewayRouteTableConfig = {}
    */
    function DataAwsEc2LocalGatewayRouteTable(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ec2_local_gateway_route_table',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._localGatewayId = config.localGatewayId;
        _this._localGatewayRouteTableId = config.localGatewayRouteTableId;
        _this._outpostArn = config.outpostArn;
        _this._state = config.state;
        _this._tags = config.tags;
        _this._filter = config.filter;
        return _this;
    }
    Object.defineProperty(DataAwsEc2LocalGatewayRouteTable.prototype, "id", {
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
    Object.defineProperty(DataAwsEc2LocalGatewayRouteTable.prototype, "localGatewayId", {
        get: function () {
            return this.getStringAttribute('local_gateway_id');
        },
        set: function (value) {
            this._localGatewayId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEc2LocalGatewayRouteTable.prototype.resetLocalGatewayId = function () {
        this._localGatewayId = undefined;
    };
    Object.defineProperty(DataAwsEc2LocalGatewayRouteTable.prototype, "localGatewayIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._localGatewayId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2LocalGatewayRouteTable.prototype, "localGatewayRouteTableId", {
        get: function () {
            return this.getStringAttribute('local_gateway_route_table_id');
        },
        set: function (value) {
            this._localGatewayRouteTableId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEc2LocalGatewayRouteTable.prototype.resetLocalGatewayRouteTableId = function () {
        this._localGatewayRouteTableId = undefined;
    };
    Object.defineProperty(DataAwsEc2LocalGatewayRouteTable.prototype, "localGatewayRouteTableIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._localGatewayRouteTableId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2LocalGatewayRouteTable.prototype, "outpostArn", {
        get: function () {
            return this.getStringAttribute('outpost_arn');
        },
        set: function (value) {
            this._outpostArn = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEc2LocalGatewayRouteTable.prototype.resetOutpostArn = function () {
        this._outpostArn = undefined;
    };
    Object.defineProperty(DataAwsEc2LocalGatewayRouteTable.prototype, "outpostArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._outpostArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2LocalGatewayRouteTable.prototype, "state", {
        get: function () {
            return this.getStringAttribute('state');
        },
        set: function (value) {
            this._state = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEc2LocalGatewayRouteTable.prototype.resetState = function () {
        this._state = undefined;
    };
    Object.defineProperty(DataAwsEc2LocalGatewayRouteTable.prototype, "stateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._state;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2LocalGatewayRouteTable.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEc2LocalGatewayRouteTable.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsEc2LocalGatewayRouteTable.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2LocalGatewayRouteTable.prototype, "filter", {
        get: function () {
            return this.interpolationForAttribute('filter');
        },
        set: function (value) {
            this._filter = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEc2LocalGatewayRouteTable.prototype.resetFilter = function () {
        this._filter = undefined;
    };
    Object.defineProperty(DataAwsEc2LocalGatewayRouteTable.prototype, "filterInput", {
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
    DataAwsEc2LocalGatewayRouteTable.prototype.synthesizeAttributes = function () {
        return {
            local_gateway_id: cdktf.stringToTerraform(this._localGatewayId),
            local_gateway_route_table_id: cdktf.stringToTerraform(this._localGatewayRouteTableId),
            outpost_arn: cdktf.stringToTerraform(this._outpostArn),
            state: cdktf.stringToTerraform(this._state),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            filter: cdktf.listMapper(dataAwsEc2LocalGatewayRouteTableFilterToTerraform)(this._filter)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsEc2LocalGatewayRouteTable.tfResourceType = "aws_ec2_local_gateway_route_table";
    return DataAwsEc2LocalGatewayRouteTable;
}(cdktf.TerraformDataSource));
exports.DataAwsEc2LocalGatewayRouteTable = DataAwsEc2LocalGatewayRouteTable;
