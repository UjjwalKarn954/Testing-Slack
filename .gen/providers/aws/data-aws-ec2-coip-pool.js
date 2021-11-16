"use strict";
// https://www.terraform.io/docs/providers/aws/d/ec2_coip_pool.html
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
exports.DataAwsEc2CoipPool = void 0;
var cdktf = require("cdktf");
function dataAwsEc2CoipPoolFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_coip_pool.html aws_ec2_coip_pool}
*/
var DataAwsEc2CoipPool = /** @class */ (function (_super) {
    __extends(DataAwsEc2CoipPool, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_coip_pool.html aws_ec2_coip_pool} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2CoipPoolConfig = {}
    */
    function DataAwsEc2CoipPool(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ec2_coip_pool',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._localGatewayRouteTableId = config.localGatewayRouteTableId;
        _this._poolId = config.poolId;
        _this._tags = config.tags;
        _this._filter = config.filter;
        return _this;
    }
    Object.defineProperty(DataAwsEc2CoipPool.prototype, "arn", {
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
    Object.defineProperty(DataAwsEc2CoipPool.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2CoipPool.prototype, "localGatewayRouteTableId", {
        get: function () {
            return this.getStringAttribute('local_gateway_route_table_id');
        },
        set: function (value) {
            this._localGatewayRouteTableId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEc2CoipPool.prototype.resetLocalGatewayRouteTableId = function () {
        this._localGatewayRouteTableId = undefined;
    };
    Object.defineProperty(DataAwsEc2CoipPool.prototype, "localGatewayRouteTableIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._localGatewayRouteTableId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2CoipPool.prototype, "poolCidrs", {
        // pool_cidrs - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('pool_cidrs');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2CoipPool.prototype, "poolId", {
        get: function () {
            return this.getStringAttribute('pool_id');
        },
        set: function (value) {
            this._poolId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEc2CoipPool.prototype.resetPoolId = function () {
        this._poolId = undefined;
    };
    Object.defineProperty(DataAwsEc2CoipPool.prototype, "poolIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._poolId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2CoipPool.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEc2CoipPool.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsEc2CoipPool.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2CoipPool.prototype, "filter", {
        get: function () {
            return this.interpolationForAttribute('filter');
        },
        set: function (value) {
            this._filter = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEc2CoipPool.prototype.resetFilter = function () {
        this._filter = undefined;
    };
    Object.defineProperty(DataAwsEc2CoipPool.prototype, "filterInput", {
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
    DataAwsEc2CoipPool.prototype.synthesizeAttributes = function () {
        return {
            local_gateway_route_table_id: cdktf.stringToTerraform(this._localGatewayRouteTableId),
            pool_id: cdktf.stringToTerraform(this._poolId),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            filter: cdktf.listMapper(dataAwsEc2CoipPoolFilterToTerraform)(this._filter)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsEc2CoipPool.tfResourceType = "aws_ec2_coip_pool";
    return DataAwsEc2CoipPool;
}(cdktf.TerraformDataSource));
exports.DataAwsEc2CoipPool = DataAwsEc2CoipPool;
