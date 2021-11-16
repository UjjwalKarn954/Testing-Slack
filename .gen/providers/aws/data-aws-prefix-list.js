"use strict";
// https://www.terraform.io/docs/providers/aws/d/prefix_list.html
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
exports.DataAwsPrefixList = void 0;
var cdktf = require("cdktf");
function dataAwsPrefixListFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/prefix_list.html aws_prefix_list}
*/
var DataAwsPrefixList = /** @class */ (function (_super) {
    __extends(DataAwsPrefixList, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/prefix_list.html aws_prefix_list} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsPrefixListConfig = {}
    */
    function DataAwsPrefixList(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_prefix_list',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        _this._prefixListId = config.prefixListId;
        _this._filter = config.filter;
        return _this;
    }
    Object.defineProperty(DataAwsPrefixList.prototype, "cidrBlocks", {
        // ==========
        // ATTRIBUTES
        // ==========
        // cidr_blocks - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('cidr_blocks');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsPrefixList.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsPrefixList.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsPrefixList.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(DataAwsPrefixList.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsPrefixList.prototype, "prefixListId", {
        get: function () {
            return this.getStringAttribute('prefix_list_id');
        },
        set: function (value) {
            this._prefixListId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsPrefixList.prototype.resetPrefixListId = function () {
        this._prefixListId = undefined;
    };
    Object.defineProperty(DataAwsPrefixList.prototype, "prefixListIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._prefixListId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsPrefixList.prototype, "filter", {
        get: function () {
            return this.interpolationForAttribute('filter');
        },
        set: function (value) {
            this._filter = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsPrefixList.prototype.resetFilter = function () {
        this._filter = undefined;
    };
    Object.defineProperty(DataAwsPrefixList.prototype, "filterInput", {
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
    DataAwsPrefixList.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            prefix_list_id: cdktf.stringToTerraform(this._prefixListId),
            filter: cdktf.listMapper(dataAwsPrefixListFilterToTerraform)(this._filter)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsPrefixList.tfResourceType = "aws_prefix_list";
    return DataAwsPrefixList;
}(cdktf.TerraformDataSource));
exports.DataAwsPrefixList = DataAwsPrefixList;
