"use strict";
// https://www.terraform.io/docs/providers/aws/d/vpn_gateway.html
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
exports.DataAwsVpnGateway = void 0;
var cdktf = require("cdktf");
function dataAwsVpnGatewayFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpn_gateway.html aws_vpn_gateway}
*/
var DataAwsVpnGateway = /** @class */ (function (_super) {
    __extends(DataAwsVpnGateway, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/vpn_gateway.html aws_vpn_gateway} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsVpnGatewayConfig = {}
    */
    function DataAwsVpnGateway(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_vpn_gateway',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._amazonSideAsn = config.amazonSideAsn;
        _this._attachedVpcId = config.attachedVpcId;
        _this._availabilityZone = config.availabilityZone;
        _this._state = config.state;
        _this._tags = config.tags;
        _this._filter = config.filter;
        return _this;
    }
    Object.defineProperty(DataAwsVpnGateway.prototype, "amazonSideAsn", {
        get: function () {
            return this.getStringAttribute('amazon_side_asn');
        },
        set: function (value) {
            this._amazonSideAsn = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsVpnGateway.prototype.resetAmazonSideAsn = function () {
        this._amazonSideAsn = undefined;
    };
    Object.defineProperty(DataAwsVpnGateway.prototype, "amazonSideAsnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._amazonSideAsn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpnGateway.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpnGateway.prototype, "attachedVpcId", {
        get: function () {
            return this.getStringAttribute('attached_vpc_id');
        },
        set: function (value) {
            this._attachedVpcId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsVpnGateway.prototype.resetAttachedVpcId = function () {
        this._attachedVpcId = undefined;
    };
    Object.defineProperty(DataAwsVpnGateway.prototype, "attachedVpcIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._attachedVpcId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpnGateway.prototype, "availabilityZone", {
        get: function () {
            return this.getStringAttribute('availability_zone');
        },
        set: function (value) {
            this._availabilityZone = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsVpnGateway.prototype.resetAvailabilityZone = function () {
        this._availabilityZone = undefined;
    };
    Object.defineProperty(DataAwsVpnGateway.prototype, "availabilityZoneInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._availabilityZone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpnGateway.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpnGateway.prototype, "state", {
        get: function () {
            return this.getStringAttribute('state');
        },
        set: function (value) {
            this._state = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsVpnGateway.prototype.resetState = function () {
        this._state = undefined;
    };
    Object.defineProperty(DataAwsVpnGateway.prototype, "stateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._state;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpnGateway.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsVpnGateway.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsVpnGateway.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpnGateway.prototype, "filter", {
        get: function () {
            return this.interpolationForAttribute('filter');
        },
        set: function (value) {
            this._filter = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsVpnGateway.prototype.resetFilter = function () {
        this._filter = undefined;
    };
    Object.defineProperty(DataAwsVpnGateway.prototype, "filterInput", {
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
    DataAwsVpnGateway.prototype.synthesizeAttributes = function () {
        return {
            amazon_side_asn: cdktf.stringToTerraform(this._amazonSideAsn),
            attached_vpc_id: cdktf.stringToTerraform(this._attachedVpcId),
            availability_zone: cdktf.stringToTerraform(this._availabilityZone),
            state: cdktf.stringToTerraform(this._state),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            filter: cdktf.listMapper(dataAwsVpnGatewayFilterToTerraform)(this._filter)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsVpnGateway.tfResourceType = "aws_vpn_gateway";
    return DataAwsVpnGateway;
}(cdktf.TerraformDataSource));
exports.DataAwsVpnGateway = DataAwsVpnGateway;
