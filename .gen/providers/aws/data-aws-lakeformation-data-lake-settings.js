"use strict";
// https://www.terraform.io/docs/providers/aws/d/lakeformation_data_lake_settings.html
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
exports.DataAwsLakeformationDataLakeSettings = exports.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions = exports.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions = void 0;
var cdktf = require("cdktf");
var DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions = /** @class */ (function (_super) {
    __extends(DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions, _super);
    function DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions.prototype, "permissions", {
        // permissions - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('permissions');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions.prototype, "principal", {
        // principal - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('principal');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions;
}(cdktf.ComplexComputedList));
exports.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions = DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions;
var DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions = /** @class */ (function (_super) {
    __extends(DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions, _super);
    function DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions.prototype, "permissions", {
        // permissions - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('permissions');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions.prototype, "principal", {
        // principal - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('principal');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions;
}(cdktf.ComplexComputedList));
exports.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions = DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_data_lake_settings.html aws_lakeformation_data_lake_settings}
*/
var DataAwsLakeformationDataLakeSettings = /** @class */ (function (_super) {
    __extends(DataAwsLakeformationDataLakeSettings, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_data_lake_settings.html aws_lakeformation_data_lake_settings} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLakeformationDataLakeSettingsConfig = {}
    */
    function DataAwsLakeformationDataLakeSettings(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_lakeformation_data_lake_settings',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._catalogId = config.catalogId;
        return _this;
    }
    Object.defineProperty(DataAwsLakeformationDataLakeSettings.prototype, "admins", {
        // ==========
        // ATTRIBUTES
        // ==========
        // admins - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('admins');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLakeformationDataLakeSettings.prototype, "catalogId", {
        get: function () {
            return this.getStringAttribute('catalog_id');
        },
        set: function (value) {
            this._catalogId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsLakeformationDataLakeSettings.prototype.resetCatalogId = function () {
        this._catalogId = undefined;
    };
    Object.defineProperty(DataAwsLakeformationDataLakeSettings.prototype, "catalogIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._catalogId;
        },
        enumerable: false,
        configurable: true
    });
    // create_database_default_permissions - computed: true, optional: false, required: false
    DataAwsLakeformationDataLakeSettings.prototype.createDatabaseDefaultPermissions = function (index) {
        return new DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions(this, 'create_database_default_permissions', index);
    };
    // create_table_default_permissions - computed: true, optional: false, required: false
    DataAwsLakeformationDataLakeSettings.prototype.createTableDefaultPermissions = function (index) {
        return new DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions(this, 'create_table_default_permissions', index);
    };
    Object.defineProperty(DataAwsLakeformationDataLakeSettings.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLakeformationDataLakeSettings.prototype, "trustedResourceOwners", {
        // trusted_resource_owners - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('trusted_resource_owners');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsLakeformationDataLakeSettings.prototype.synthesizeAttributes = function () {
        return {
            catalog_id: cdktf.stringToTerraform(this._catalogId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsLakeformationDataLakeSettings.tfResourceType = "aws_lakeformation_data_lake_settings";
    return DataAwsLakeformationDataLakeSettings;
}(cdktf.TerraformDataSource));
exports.DataAwsLakeformationDataLakeSettings = DataAwsLakeformationDataLakeSettings;
