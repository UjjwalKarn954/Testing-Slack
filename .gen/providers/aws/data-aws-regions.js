"use strict";
// https://www.terraform.io/docs/providers/aws/d/regions.html
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
exports.DataAwsRegions = void 0;
var cdktf = require("cdktf");
function dataAwsRegionsFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/regions.html aws_regions}
*/
var DataAwsRegions = /** @class */ (function (_super) {
    __extends(DataAwsRegions, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/regions.html aws_regions} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRegionsConfig = {}
    */
    function DataAwsRegions(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_regions',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._allRegions = config.allRegions;
        _this._filter = config.filter;
        return _this;
    }
    Object.defineProperty(DataAwsRegions.prototype, "allRegions", {
        get: function () {
            return this.getBooleanAttribute('all_regions');
        },
        set: function (value) {
            this._allRegions = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRegions.prototype.resetAllRegions = function () {
        this._allRegions = undefined;
    };
    Object.defineProperty(DataAwsRegions.prototype, "allRegionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allRegions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRegions.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRegions.prototype, "names", {
        // names - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('names');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRegions.prototype, "filter", {
        get: function () {
            return this.interpolationForAttribute('filter');
        },
        set: function (value) {
            this._filter = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRegions.prototype.resetFilter = function () {
        this._filter = undefined;
    };
    Object.defineProperty(DataAwsRegions.prototype, "filterInput", {
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
    DataAwsRegions.prototype.synthesizeAttributes = function () {
        return {
            all_regions: cdktf.booleanToTerraform(this._allRegions),
            filter: cdktf.listMapper(dataAwsRegionsFilterToTerraform)(this._filter)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsRegions.tfResourceType = "aws_regions";
    return DataAwsRegions;
}(cdktf.TerraformDataSource));
exports.DataAwsRegions = DataAwsRegions;
