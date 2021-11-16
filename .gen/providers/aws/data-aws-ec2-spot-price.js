"use strict";
// https://www.terraform.io/docs/providers/aws/d/ec2_spot_price.html
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
exports.DataAwsEc2SpotPrice = void 0;
var cdktf = require("cdktf");
function dataAwsEc2SpotPriceFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_spot_price.html aws_ec2_spot_price}
*/
var DataAwsEc2SpotPrice = /** @class */ (function (_super) {
    __extends(DataAwsEc2SpotPrice, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_spot_price.html aws_ec2_spot_price} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2SpotPriceConfig = {}
    */
    function DataAwsEc2SpotPrice(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ec2_spot_price',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._availabilityZone = config.availabilityZone;
        _this._instanceType = config.instanceType;
        _this._filter = config.filter;
        return _this;
    }
    Object.defineProperty(DataAwsEc2SpotPrice.prototype, "availabilityZone", {
        get: function () {
            return this.getStringAttribute('availability_zone');
        },
        set: function (value) {
            this._availabilityZone = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEc2SpotPrice.prototype.resetAvailabilityZone = function () {
        this._availabilityZone = undefined;
    };
    Object.defineProperty(DataAwsEc2SpotPrice.prototype, "availabilityZoneInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._availabilityZone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2SpotPrice.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2SpotPrice.prototype, "instanceType", {
        get: function () {
            return this.getStringAttribute('instance_type');
        },
        set: function (value) {
            this._instanceType = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEc2SpotPrice.prototype.resetInstanceType = function () {
        this._instanceType = undefined;
    };
    Object.defineProperty(DataAwsEc2SpotPrice.prototype, "instanceTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2SpotPrice.prototype, "spotPrice", {
        // spot_price - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('spot_price');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2SpotPrice.prototype, "spotPriceTimestamp", {
        // spot_price_timestamp - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('spot_price_timestamp');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2SpotPrice.prototype, "filter", {
        get: function () {
            return this.interpolationForAttribute('filter');
        },
        set: function (value) {
            this._filter = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEc2SpotPrice.prototype.resetFilter = function () {
        this._filter = undefined;
    };
    Object.defineProperty(DataAwsEc2SpotPrice.prototype, "filterInput", {
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
    DataAwsEc2SpotPrice.prototype.synthesizeAttributes = function () {
        return {
            availability_zone: cdktf.stringToTerraform(this._availabilityZone),
            instance_type: cdktf.stringToTerraform(this._instanceType),
            filter: cdktf.listMapper(dataAwsEc2SpotPriceFilterToTerraform)(this._filter)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsEc2SpotPrice.tfResourceType = "aws_ec2_spot_price";
    return DataAwsEc2SpotPrice;
}(cdktf.TerraformDataSource));
exports.DataAwsEc2SpotPrice = DataAwsEc2SpotPrice;
