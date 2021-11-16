"use strict";
// https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html
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
exports.DataAwsLakeformationPermissions = void 0;
var cdktf = require("cdktf");
function dataAwsLakeformationPermissionsDataLocationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        catalog_id: cdktf.stringToTerraform(struct.catalogId)
    };
}
function dataAwsLakeformationPermissionsDatabaseToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        catalog_id: cdktf.stringToTerraform(struct.catalogId),
        name: cdktf.stringToTerraform(struct.name)
    };
}
function dataAwsLakeformationPermissionsTableToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        catalog_id: cdktf.stringToTerraform(struct.catalogId),
        database_name: cdktf.stringToTerraform(struct.databaseName),
        name: cdktf.stringToTerraform(struct.name),
        wildcard: cdktf.booleanToTerraform(struct.wildcard)
    };
}
function dataAwsLakeformationPermissionsTableWithColumnsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        catalog_id: cdktf.stringToTerraform(struct.catalogId),
        column_names: cdktf.listMapper(cdktf.stringToTerraform)(struct.columnNames),
        database_name: cdktf.stringToTerraform(struct.databaseName),
        excluded_column_names: cdktf.listMapper(cdktf.stringToTerraform)(struct.excludedColumnNames),
        name: cdktf.stringToTerraform(struct.name),
        wildcard: cdktf.booleanToTerraform(struct.wildcard)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html aws_lakeformation_permissions}
*/
var DataAwsLakeformationPermissions = /** @class */ (function (_super) {
    __extends(DataAwsLakeformationPermissions, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html aws_lakeformation_permissions} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLakeformationPermissionsConfig
    */
    function DataAwsLakeformationPermissions(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_lakeformation_permissions',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._catalogId = config.catalogId;
        _this._catalogResource = config.catalogResource;
        _this._principal = config.principal;
        _this._dataLocation = config.dataLocation;
        _this._database = config.database;
        _this._table = config.table;
        _this._tableWithColumns = config.tableWithColumns;
        return _this;
    }
    Object.defineProperty(DataAwsLakeformationPermissions.prototype, "catalogId", {
        get: function () {
            return this.getStringAttribute('catalog_id');
        },
        set: function (value) {
            this._catalogId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsLakeformationPermissions.prototype.resetCatalogId = function () {
        this._catalogId = undefined;
    };
    Object.defineProperty(DataAwsLakeformationPermissions.prototype, "catalogIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._catalogId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLakeformationPermissions.prototype, "catalogResource", {
        get: function () {
            return this.getBooleanAttribute('catalog_resource');
        },
        set: function (value) {
            this._catalogResource = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsLakeformationPermissions.prototype.resetCatalogResource = function () {
        this._catalogResource = undefined;
    };
    Object.defineProperty(DataAwsLakeformationPermissions.prototype, "catalogResourceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._catalogResource;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLakeformationPermissions.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLakeformationPermissions.prototype, "permissions", {
        // permissions - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('permissions');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLakeformationPermissions.prototype, "permissionsWithGrantOption", {
        // permissions_with_grant_option - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('permissions_with_grant_option');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLakeformationPermissions.prototype, "principal", {
        get: function () {
            return this.getStringAttribute('principal');
        },
        set: function (value) {
            this._principal = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLakeformationPermissions.prototype, "principalInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._principal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLakeformationPermissions.prototype, "dataLocation", {
        get: function () {
            return this.interpolationForAttribute('data_location');
        },
        set: function (value) {
            this._dataLocation = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsLakeformationPermissions.prototype.resetDataLocation = function () {
        this._dataLocation = undefined;
    };
    Object.defineProperty(DataAwsLakeformationPermissions.prototype, "dataLocationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dataLocation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLakeformationPermissions.prototype, "database", {
        get: function () {
            return this.interpolationForAttribute('database');
        },
        set: function (value) {
            this._database = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsLakeformationPermissions.prototype.resetDatabase = function () {
        this._database = undefined;
    };
    Object.defineProperty(DataAwsLakeformationPermissions.prototype, "databaseInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._database;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLakeformationPermissions.prototype, "table", {
        get: function () {
            return this.interpolationForAttribute('table');
        },
        set: function (value) {
            this._table = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsLakeformationPermissions.prototype.resetTable = function () {
        this._table = undefined;
    };
    Object.defineProperty(DataAwsLakeformationPermissions.prototype, "tableInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._table;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLakeformationPermissions.prototype, "tableWithColumns", {
        get: function () {
            return this.interpolationForAttribute('table_with_columns');
        },
        set: function (value) {
            this._tableWithColumns = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsLakeformationPermissions.prototype.resetTableWithColumns = function () {
        this._tableWithColumns = undefined;
    };
    Object.defineProperty(DataAwsLakeformationPermissions.prototype, "tableWithColumnsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tableWithColumns;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsLakeformationPermissions.prototype.synthesizeAttributes = function () {
        return {
            catalog_id: cdktf.stringToTerraform(this._catalogId),
            catalog_resource: cdktf.booleanToTerraform(this._catalogResource),
            principal: cdktf.stringToTerraform(this._principal),
            data_location: cdktf.listMapper(dataAwsLakeformationPermissionsDataLocationToTerraform)(this._dataLocation),
            database: cdktf.listMapper(dataAwsLakeformationPermissionsDatabaseToTerraform)(this._database),
            table: cdktf.listMapper(dataAwsLakeformationPermissionsTableToTerraform)(this._table),
            table_with_columns: cdktf.listMapper(dataAwsLakeformationPermissionsTableWithColumnsToTerraform)(this._tableWithColumns)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsLakeformationPermissions.tfResourceType = "aws_lakeformation_permissions";
    return DataAwsLakeformationPermissions;
}(cdktf.TerraformDataSource));
exports.DataAwsLakeformationPermissions = DataAwsLakeformationPermissions;
