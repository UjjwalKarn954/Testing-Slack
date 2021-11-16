"use strict";
// https://www.terraform.io/docs/providers/aws/d/db_event_categories.html
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
exports.DataAwsDbEventCategories = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/db_event_categories.html aws_db_event_categories}
*/
var DataAwsDbEventCategories = /** @class */ (function (_super) {
    __extends(DataAwsDbEventCategories, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/db_event_categories.html aws_db_event_categories} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsDbEventCategoriesConfig = {}
    */
    function DataAwsDbEventCategories(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_db_event_categories',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._sourceType = config.sourceType;
        return _this;
    }
    Object.defineProperty(DataAwsDbEventCategories.prototype, "eventCategories", {
        // ==========
        // ATTRIBUTES
        // ==========
        // event_categories - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('event_categories');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbEventCategories.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbEventCategories.prototype, "sourceType", {
        get: function () {
            return this.getStringAttribute('source_type');
        },
        set: function (value) {
            this._sourceType = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsDbEventCategories.prototype.resetSourceType = function () {
        this._sourceType = undefined;
    };
    Object.defineProperty(DataAwsDbEventCategories.prototype, "sourceTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sourceType;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsDbEventCategories.prototype.synthesizeAttributes = function () {
        return {
            source_type: cdktf.stringToTerraform(this._sourceType)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsDbEventCategories.tfResourceType = "aws_db_event_categories";
    return DataAwsDbEventCategories;
}(cdktf.TerraformDataSource));
exports.DataAwsDbEventCategories = DataAwsDbEventCategories;
