"use strict";
// https://www.terraform.io/docs/providers/aws/d/vpcs.html
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
exports.DataAwsVpcs = void 0;
var cdktf = require("cdktf");
function dataAwsVpcsFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpcs.html aws_vpcs}
*/
var DataAwsVpcs = /** @class */ (function (_super) {
    __extends(DataAwsVpcs, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/vpcs.html aws_vpcs} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsVpcsConfig = {}
    */
    function DataAwsVpcs(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_vpcs',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._tags = config.tags;
        _this._filter = config.filter;
        return _this;
    }
    Object.defineProperty(DataAwsVpcs.prototype, "id", {
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
    Object.defineProperty(DataAwsVpcs.prototype, "ids", {
        // ids - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('ids');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpcs.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsVpcs.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsVpcs.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpcs.prototype, "filter", {
        get: function () {
            return this.interpolationForAttribute('filter');
        },
        set: function (value) {
            this._filter = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsVpcs.prototype.resetFilter = function () {
        this._filter = undefined;
    };
    Object.defineProperty(DataAwsVpcs.prototype, "filterInput", {
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
    DataAwsVpcs.prototype.synthesizeAttributes = function () {
        return {
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            filter: cdktf.listMapper(dataAwsVpcsFilterToTerraform)(this._filter)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsVpcs.tfResourceType = "aws_vpcs";
    return DataAwsVpcs;
}(cdktf.TerraformDataSource));
exports.DataAwsVpcs = DataAwsVpcs;
