"use strict";
// https://www.terraform.io/docs/providers/aws/d/nat_gateway.html
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
exports.DataAwsNatGateway = void 0;
var cdktf = require("cdktf");
function dataAwsNatGatewayFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/nat_gateway.html aws_nat_gateway}
*/
var DataAwsNatGateway = /** @class */ (function (_super) {
    __extends(DataAwsNatGateway, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/nat_gateway.html aws_nat_gateway} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsNatGatewayConfig = {}
    */
    function DataAwsNatGateway(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_nat_gateway',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._state = config.state;
        _this._subnetId = config.subnetId;
        _this._tags = config.tags;
        _this._vpcId = config.vpcId;
        _this._filter = config.filter;
        return _this;
    }
    Object.defineProperty(DataAwsNatGateway.prototype, "allocationId", {
        // ==========
        // ATTRIBUTES
        // ==========
        // allocation_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('allocation_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsNatGateway.prototype, "connectivityType", {
        // connectivity_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('connectivity_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsNatGateway.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsNatGateway.prototype, "networkInterfaceId", {
        // network_interface_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('network_interface_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsNatGateway.prototype, "privateIp", {
        // private_ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('private_ip');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsNatGateway.prototype, "publicIp", {
        // public_ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('public_ip');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsNatGateway.prototype, "state", {
        get: function () {
            return this.getStringAttribute('state');
        },
        set: function (value) {
            this._state = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsNatGateway.prototype.resetState = function () {
        this._state = undefined;
    };
    Object.defineProperty(DataAwsNatGateway.prototype, "stateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._state;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsNatGateway.prototype, "subnetId", {
        get: function () {
            return this.getStringAttribute('subnet_id');
        },
        set: function (value) {
            this._subnetId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsNatGateway.prototype.resetSubnetId = function () {
        this._subnetId = undefined;
    };
    Object.defineProperty(DataAwsNatGateway.prototype, "subnetIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subnetId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsNatGateway.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsNatGateway.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsNatGateway.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsNatGateway.prototype, "vpcId", {
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        set: function (value) {
            this._vpcId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsNatGateway.prototype.resetVpcId = function () {
        this._vpcId = undefined;
    };
    Object.defineProperty(DataAwsNatGateway.prototype, "vpcIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsNatGateway.prototype, "filter", {
        get: function () {
            return this.interpolationForAttribute('filter');
        },
        set: function (value) {
            this._filter = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsNatGateway.prototype.resetFilter = function () {
        this._filter = undefined;
    };
    Object.defineProperty(DataAwsNatGateway.prototype, "filterInput", {
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
    DataAwsNatGateway.prototype.synthesizeAttributes = function () {
        return {
            state: cdktf.stringToTerraform(this._state),
            subnet_id: cdktf.stringToTerraform(this._subnetId),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            vpc_id: cdktf.stringToTerraform(this._vpcId),
            filter: cdktf.listMapper(dataAwsNatGatewayFilterToTerraform)(this._filter)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsNatGateway.tfResourceType = "aws_nat_gateway";
    return DataAwsNatGateway;
}(cdktf.TerraformDataSource));
exports.DataAwsNatGateway = DataAwsNatGateway;
