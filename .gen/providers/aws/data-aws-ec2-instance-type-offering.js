"use strict";
// https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering.html
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
exports.DataAwsEc2InstanceTypeOffering = void 0;
var cdktf = require("cdktf");
function dataAwsEc2InstanceTypeOfferingFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering.html aws_ec2_instance_type_offering}
*/
var DataAwsEc2InstanceTypeOffering = /** @class */ (function (_super) {
    __extends(DataAwsEc2InstanceTypeOffering, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering.html aws_ec2_instance_type_offering} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2InstanceTypeOfferingConfig = {}
    */
    function DataAwsEc2InstanceTypeOffering(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ec2_instance_type_offering',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._locationType = config.locationType;
        _this._preferredInstanceTypes = config.preferredInstanceTypes;
        _this._filter = config.filter;
        return _this;
    }
    Object.defineProperty(DataAwsEc2InstanceTypeOffering.prototype, "id", {
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
    Object.defineProperty(DataAwsEc2InstanceTypeOffering.prototype, "instanceType", {
        // instance_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('instance_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2InstanceTypeOffering.prototype, "locationType", {
        get: function () {
            return this.getStringAttribute('location_type');
        },
        set: function (value) {
            this._locationType = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEc2InstanceTypeOffering.prototype.resetLocationType = function () {
        this._locationType = undefined;
    };
    Object.defineProperty(DataAwsEc2InstanceTypeOffering.prototype, "locationTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._locationType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2InstanceTypeOffering.prototype, "preferredInstanceTypes", {
        get: function () {
            return this.getListAttribute('preferred_instance_types');
        },
        set: function (value) {
            this._preferredInstanceTypes = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEc2InstanceTypeOffering.prototype.resetPreferredInstanceTypes = function () {
        this._preferredInstanceTypes = undefined;
    };
    Object.defineProperty(DataAwsEc2InstanceTypeOffering.prototype, "preferredInstanceTypesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._preferredInstanceTypes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2InstanceTypeOffering.prototype, "filter", {
        get: function () {
            return this.interpolationForAttribute('filter');
        },
        set: function (value) {
            this._filter = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEc2InstanceTypeOffering.prototype.resetFilter = function () {
        this._filter = undefined;
    };
    Object.defineProperty(DataAwsEc2InstanceTypeOffering.prototype, "filterInput", {
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
    DataAwsEc2InstanceTypeOffering.prototype.synthesizeAttributes = function () {
        return {
            location_type: cdktf.stringToTerraform(this._locationType),
            preferred_instance_types: cdktf.listMapper(cdktf.stringToTerraform)(this._preferredInstanceTypes),
            filter: cdktf.listMapper(dataAwsEc2InstanceTypeOfferingFilterToTerraform)(this._filter)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsEc2InstanceTypeOffering.tfResourceType = "aws_ec2_instance_type_offering";
    return DataAwsEc2InstanceTypeOffering;
}(cdktf.TerraformDataSource));
exports.DataAwsEc2InstanceTypeOffering = DataAwsEc2InstanceTypeOffering;
