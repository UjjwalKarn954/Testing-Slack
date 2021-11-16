"use strict";
// https://www.terraform.io/docs/providers/aws/d/availability_zones.html
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
exports.DataAwsAvailabilityZones = void 0;
var cdktf = require("cdktf");
function dataAwsAvailabilityZonesFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/availability_zones.html aws_availability_zones}
*/
var DataAwsAvailabilityZones = /** @class */ (function (_super) {
    __extends(DataAwsAvailabilityZones, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/availability_zones.html aws_availability_zones} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAvailabilityZonesConfig = {}
    */
    function DataAwsAvailabilityZones(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_availability_zones',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._allAvailabilityZones = config.allAvailabilityZones;
        _this._excludeNames = config.excludeNames;
        _this._excludeZoneIds = config.excludeZoneIds;
        _this._state = config.state;
        _this._filter = config.filter;
        return _this;
    }
    Object.defineProperty(DataAwsAvailabilityZones.prototype, "allAvailabilityZones", {
        get: function () {
            return this.getBooleanAttribute('all_availability_zones');
        },
        set: function (value) {
            this._allAvailabilityZones = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsAvailabilityZones.prototype.resetAllAvailabilityZones = function () {
        this._allAvailabilityZones = undefined;
    };
    Object.defineProperty(DataAwsAvailabilityZones.prototype, "allAvailabilityZonesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allAvailabilityZones;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAvailabilityZones.prototype, "excludeNames", {
        get: function () {
            return this.getListAttribute('exclude_names');
        },
        set: function (value) {
            this._excludeNames = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsAvailabilityZones.prototype.resetExcludeNames = function () {
        this._excludeNames = undefined;
    };
    Object.defineProperty(DataAwsAvailabilityZones.prototype, "excludeNamesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._excludeNames;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAvailabilityZones.prototype, "excludeZoneIds", {
        get: function () {
            return this.getListAttribute('exclude_zone_ids');
        },
        set: function (value) {
            this._excludeZoneIds = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsAvailabilityZones.prototype.resetExcludeZoneIds = function () {
        this._excludeZoneIds = undefined;
    };
    Object.defineProperty(DataAwsAvailabilityZones.prototype, "excludeZoneIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._excludeZoneIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAvailabilityZones.prototype, "groupNames", {
        // group_names - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('group_names');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAvailabilityZones.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAvailabilityZones.prototype, "names", {
        // names - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('names');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAvailabilityZones.prototype, "state", {
        get: function () {
            return this.getStringAttribute('state');
        },
        set: function (value) {
            this._state = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsAvailabilityZones.prototype.resetState = function () {
        this._state = undefined;
    };
    Object.defineProperty(DataAwsAvailabilityZones.prototype, "stateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._state;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAvailabilityZones.prototype, "zoneIds", {
        // zone_ids - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('zone_ids');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAvailabilityZones.prototype, "filter", {
        get: function () {
            return this.interpolationForAttribute('filter');
        },
        set: function (value) {
            this._filter = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsAvailabilityZones.prototype.resetFilter = function () {
        this._filter = undefined;
    };
    Object.defineProperty(DataAwsAvailabilityZones.prototype, "filterInput", {
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
    DataAwsAvailabilityZones.prototype.synthesizeAttributes = function () {
        return {
            all_availability_zones: cdktf.booleanToTerraform(this._allAvailabilityZones),
            exclude_names: cdktf.listMapper(cdktf.stringToTerraform)(this._excludeNames),
            exclude_zone_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._excludeZoneIds),
            state: cdktf.stringToTerraform(this._state),
            filter: cdktf.listMapper(dataAwsAvailabilityZonesFilterToTerraform)(this._filter)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsAvailabilityZones.tfResourceType = "aws_availability_zones";
    return DataAwsAvailabilityZones;
}(cdktf.TerraformDataSource));
exports.DataAwsAvailabilityZones = DataAwsAvailabilityZones;
