"use strict";
// https://www.terraform.io/docs/providers/aws/d/dx_location.html
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
exports.DataAwsDxLocation = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/dx_location.html aws_dx_location}
*/
var DataAwsDxLocation = /** @class */ (function (_super) {
    __extends(DataAwsDxLocation, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/dx_location.html aws_dx_location} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsDxLocationConfig
    */
    function DataAwsDxLocation(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_dx_location',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._locationCode = config.locationCode;
        return _this;
    }
    Object.defineProperty(DataAwsDxLocation.prototype, "availablePortSpeeds", {
        // ==========
        // ATTRIBUTES
        // ==========
        // available_port_speeds - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('available_port_speeds');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDxLocation.prototype, "availableProviders", {
        // available_providers - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('available_providers');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDxLocation.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDxLocation.prototype, "locationCode", {
        get: function () {
            return this.getStringAttribute('location_code');
        },
        set: function (value) {
            this._locationCode = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDxLocation.prototype, "locationCodeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._locationCode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDxLocation.prototype, "locationName", {
        // location_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('location_name');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsDxLocation.prototype.synthesizeAttributes = function () {
        return {
            location_code: cdktf.stringToTerraform(this._locationCode)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsDxLocation.tfResourceType = "aws_dx_location";
    return DataAwsDxLocation;
}(cdktf.TerraformDataSource));
exports.DataAwsDxLocation = DataAwsDxLocation;
