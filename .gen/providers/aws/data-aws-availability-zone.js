"use strict";
// https://www.terraform.io/docs/providers/aws/d/availability_zone.html
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
exports.DataAwsAvailabilityZone = void 0;
var cdktf = require("cdktf");
function dataAwsAvailabilityZoneFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/availability_zone.html aws_availability_zone}
*/
var DataAwsAvailabilityZone = /** @class */ (function (_super) {
    __extends(DataAwsAvailabilityZone, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/availability_zone.html aws_availability_zone} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAvailabilityZoneConfig = {}
    */
    function DataAwsAvailabilityZone(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_availability_zone',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._allAvailabilityZones = config.allAvailabilityZones;
        _this._name = config.name;
        _this._state = config.state;
        _this._zoneId = config.zoneId;
        _this._filter = config.filter;
        return _this;
    }
    Object.defineProperty(DataAwsAvailabilityZone.prototype, "allAvailabilityZones", {
        get: function () {
            return this.getBooleanAttribute('all_availability_zones');
        },
        set: function (value) {
            this._allAvailabilityZones = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsAvailabilityZone.prototype.resetAllAvailabilityZones = function () {
        this._allAvailabilityZones = undefined;
    };
    Object.defineProperty(DataAwsAvailabilityZone.prototype, "allAvailabilityZonesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allAvailabilityZones;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAvailabilityZone.prototype, "groupName", {
        // group_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('group_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAvailabilityZone.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAvailabilityZone.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsAvailabilityZone.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(DataAwsAvailabilityZone.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAvailabilityZone.prototype, "nameSuffix", {
        // name_suffix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name_suffix');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAvailabilityZone.prototype, "networkBorderGroup", {
        // network_border_group - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('network_border_group');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAvailabilityZone.prototype, "optInStatus", {
        // opt_in_status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('opt_in_status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAvailabilityZone.prototype, "parentZoneId", {
        // parent_zone_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('parent_zone_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAvailabilityZone.prototype, "parentZoneName", {
        // parent_zone_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('parent_zone_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAvailabilityZone.prototype, "region", {
        // region - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('region');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAvailabilityZone.prototype, "state", {
        get: function () {
            return this.getStringAttribute('state');
        },
        set: function (value) {
            this._state = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsAvailabilityZone.prototype.resetState = function () {
        this._state = undefined;
    };
    Object.defineProperty(DataAwsAvailabilityZone.prototype, "stateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._state;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAvailabilityZone.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsAvailabilityZone.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataAwsAvailabilityZone.prototype, "zoneIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._zoneId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAvailabilityZone.prototype, "zoneType", {
        // zone_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('zone_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAvailabilityZone.prototype, "filter", {
        get: function () {
            return this.interpolationForAttribute('filter');
        },
        set: function (value) {
            this._filter = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsAvailabilityZone.prototype.resetFilter = function () {
        this._filter = undefined;
    };
    Object.defineProperty(DataAwsAvailabilityZone.prototype, "filterInput", {
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
    DataAwsAvailabilityZone.prototype.synthesizeAttributes = function () {
        return {
            all_availability_zones: cdktf.booleanToTerraform(this._allAvailabilityZones),
            name: cdktf.stringToTerraform(this._name),
            state: cdktf.stringToTerraform(this._state),
            zone_id: cdktf.stringToTerraform(this._zoneId),
            filter: cdktf.listMapper(dataAwsAvailabilityZoneFilterToTerraform)(this._filter)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsAvailabilityZone.tfResourceType = "aws_availability_zone";
    return DataAwsAvailabilityZone;
}(cdktf.TerraformDataSource));
exports.DataAwsAvailabilityZone = DataAwsAvailabilityZone;
