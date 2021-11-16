"use strict";
// https://www.terraform.io/docs/providers/aws/d/organizations_organizational_units.html
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
exports.DataAwsOrganizationsOrganizationalUnits = exports.DataAwsOrganizationsOrganizationalUnitsChildren = void 0;
var cdktf = require("cdktf");
var DataAwsOrganizationsOrganizationalUnitsChildren = /** @class */ (function (_super) {
    __extends(DataAwsOrganizationsOrganizationalUnitsChildren, _super);
    function DataAwsOrganizationsOrganizationalUnitsChildren() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsOrganizationsOrganizationalUnitsChildren.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsOrganizationsOrganizationalUnitsChildren.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsOrganizationsOrganizationalUnitsChildren.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsOrganizationsOrganizationalUnitsChildren;
}(cdktf.ComplexComputedList));
exports.DataAwsOrganizationsOrganizationalUnitsChildren = DataAwsOrganizationsOrganizationalUnitsChildren;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/organizations_organizational_units.html aws_organizations_organizational_units}
*/
var DataAwsOrganizationsOrganizationalUnits = /** @class */ (function (_super) {
    __extends(DataAwsOrganizationsOrganizationalUnits, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/organizations_organizational_units.html aws_organizations_organizational_units} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsOrganizationsOrganizationalUnitsConfig
    */
    function DataAwsOrganizationsOrganizationalUnits(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_organizations_organizational_units',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._parentId = config.parentId;
        return _this;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // children - computed: true, optional: false, required: false
    DataAwsOrganizationsOrganizationalUnits.prototype.children = function (index) {
        return new DataAwsOrganizationsOrganizationalUnitsChildren(this, 'children', index);
    };
    Object.defineProperty(DataAwsOrganizationsOrganizationalUnits.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsOrganizationsOrganizationalUnits.prototype, "parentId", {
        get: function () {
            return this.getStringAttribute('parent_id');
        },
        set: function (value) {
            this._parentId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsOrganizationsOrganizationalUnits.prototype, "parentIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._parentId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsOrganizationsOrganizationalUnits.prototype.synthesizeAttributes = function () {
        return {
            parent_id: cdktf.stringToTerraform(this._parentId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsOrganizationsOrganizationalUnits.tfResourceType = "aws_organizations_organizational_units";
    return DataAwsOrganizationsOrganizationalUnits;
}(cdktf.TerraformDataSource));
exports.DataAwsOrganizationsOrganizationalUnits = DataAwsOrganizationsOrganizationalUnits;
