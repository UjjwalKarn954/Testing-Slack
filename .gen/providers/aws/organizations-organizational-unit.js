"use strict";
// https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit.html
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
exports.OrganizationsOrganizationalUnit = exports.OrganizationsOrganizationalUnitAccounts = void 0;
var cdktf = require("cdktf");
var OrganizationsOrganizationalUnitAccounts = /** @class */ (function (_super) {
    __extends(OrganizationsOrganizationalUnitAccounts, _super);
    function OrganizationsOrganizationalUnitAccounts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(OrganizationsOrganizationalUnitAccounts.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsOrganizationalUnitAccounts.prototype, "email", {
        // email - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsOrganizationalUnitAccounts.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsOrganizationalUnitAccounts.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return OrganizationsOrganizationalUnitAccounts;
}(cdktf.ComplexComputedList));
exports.OrganizationsOrganizationalUnitAccounts = OrganizationsOrganizationalUnitAccounts;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit.html aws_organizations_organizational_unit}
*/
var OrganizationsOrganizationalUnit = /** @class */ (function (_super) {
    __extends(OrganizationsOrganizationalUnit, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit.html aws_organizations_organizational_unit} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OrganizationsOrganizationalUnitConfig
    */
    function OrganizationsOrganizationalUnit(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_organizations_organizational_unit',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        _this._parentId = config.parentId;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // accounts - computed: true, optional: false, required: false
    OrganizationsOrganizationalUnit.prototype.accounts = function (index) {
        return new OrganizationsOrganizationalUnitAccounts(this, 'accounts', index);
    };
    Object.defineProperty(OrganizationsOrganizationalUnit.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsOrganizationalUnit.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsOrganizationalUnit.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsOrganizationalUnit.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsOrganizationalUnit.prototype, "parentId", {
        get: function () {
            return this.getStringAttribute('parent_id');
        },
        set: function (value) {
            this._parentId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsOrganizationalUnit.prototype, "parentIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._parentId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsOrganizationalUnit.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationsOrganizationalUnit.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(OrganizationsOrganizationalUnit.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsOrganizationalUnit.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationsOrganizationalUnit.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(OrganizationsOrganizationalUnit.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    OrganizationsOrganizationalUnit.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            parent_id: cdktf.stringToTerraform(this._parentId),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    OrganizationsOrganizationalUnit.tfResourceType = "aws_organizations_organizational_unit";
    return OrganizationsOrganizationalUnit;
}(cdktf.TerraformResource));
exports.OrganizationsOrganizationalUnit = OrganizationsOrganizationalUnit;
