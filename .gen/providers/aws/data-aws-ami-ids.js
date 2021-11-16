"use strict";
// https://www.terraform.io/docs/providers/aws/d/ami_ids.html
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
exports.DataAwsAmiIds = void 0;
var cdktf = require("cdktf");
function dataAwsAmiIdsFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ami_ids.html aws_ami_ids}
*/
var DataAwsAmiIds = /** @class */ (function (_super) {
    __extends(DataAwsAmiIds, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ami_ids.html aws_ami_ids} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAmiIdsConfig
    */
    function DataAwsAmiIds(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ami_ids',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._executableUsers = config.executableUsers;
        _this._nameRegex = config.nameRegex;
        _this._owners = config.owners;
        _this._sortAscending = config.sortAscending;
        _this._filter = config.filter;
        return _this;
    }
    Object.defineProperty(DataAwsAmiIds.prototype, "executableUsers", {
        get: function () {
            return this.getListAttribute('executable_users');
        },
        set: function (value) {
            this._executableUsers = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsAmiIds.prototype.resetExecutableUsers = function () {
        this._executableUsers = undefined;
    };
    Object.defineProperty(DataAwsAmiIds.prototype, "executableUsersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._executableUsers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAmiIds.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAmiIds.prototype, "ids", {
        // ids - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('ids');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAmiIds.prototype, "nameRegex", {
        get: function () {
            return this.getStringAttribute('name_regex');
        },
        set: function (value) {
            this._nameRegex = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsAmiIds.prototype.resetNameRegex = function () {
        this._nameRegex = undefined;
    };
    Object.defineProperty(DataAwsAmiIds.prototype, "nameRegexInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._nameRegex;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAmiIds.prototype, "owners", {
        get: function () {
            return this.getListAttribute('owners');
        },
        set: function (value) {
            this._owners = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAmiIds.prototype, "ownersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._owners;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAmiIds.prototype, "sortAscending", {
        get: function () {
            return this.getBooleanAttribute('sort_ascending');
        },
        set: function (value) {
            this._sortAscending = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsAmiIds.prototype.resetSortAscending = function () {
        this._sortAscending = undefined;
    };
    Object.defineProperty(DataAwsAmiIds.prototype, "sortAscendingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sortAscending;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAmiIds.prototype, "filter", {
        get: function () {
            return this.interpolationForAttribute('filter');
        },
        set: function (value) {
            this._filter = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsAmiIds.prototype.resetFilter = function () {
        this._filter = undefined;
    };
    Object.defineProperty(DataAwsAmiIds.prototype, "filterInput", {
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
    DataAwsAmiIds.prototype.synthesizeAttributes = function () {
        return {
            executable_users: cdktf.listMapper(cdktf.stringToTerraform)(this._executableUsers),
            name_regex: cdktf.stringToTerraform(this._nameRegex),
            owners: cdktf.listMapper(cdktf.stringToTerraform)(this._owners),
            sort_ascending: cdktf.booleanToTerraform(this._sortAscending),
            filter: cdktf.listMapper(dataAwsAmiIdsFilterToTerraform)(this._filter)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsAmiIds.tfResourceType = "aws_ami_ids";
    return DataAwsAmiIds;
}(cdktf.TerraformDataSource));
exports.DataAwsAmiIds = DataAwsAmiIds;
