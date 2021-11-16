"use strict";
// https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings.html
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
exports.LakeformationDataLakeSettings = void 0;
var cdktf = require("cdktf");
function lakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        permissions: cdktf.listMapper(cdktf.stringToTerraform)(struct.permissions),
        principal: cdktf.stringToTerraform(struct.principal)
    };
}
function lakeformationDataLakeSettingsCreateTableDefaultPermissionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        permissions: cdktf.listMapper(cdktf.stringToTerraform)(struct.permissions),
        principal: cdktf.stringToTerraform(struct.principal)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings.html aws_lakeformation_data_lake_settings}
*/
var LakeformationDataLakeSettings = /** @class */ (function (_super) {
    __extends(LakeformationDataLakeSettings, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings.html aws_lakeformation_data_lake_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LakeformationDataLakeSettingsConfig = {}
    */
    function LakeformationDataLakeSettings(scope, id, config) {
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
        _this._admins = config.admins;
        _this._catalogId = config.catalogId;
        _this._trustedResourceOwners = config.trustedResourceOwners;
        _this._createDatabaseDefaultPermissions = config.createDatabaseDefaultPermissions;
        _this._createTableDefaultPermissions = config.createTableDefaultPermissions;
        return _this;
    }
    Object.defineProperty(LakeformationDataLakeSettings.prototype, "admins", {
        get: function () {
            return this.getListAttribute('admins');
        },
        set: function (value) {
            this._admins = value;
        },
        enumerable: false,
        configurable: true
    });
    LakeformationDataLakeSettings.prototype.resetAdmins = function () {
        this._admins = undefined;
    };
    Object.defineProperty(LakeformationDataLakeSettings.prototype, "adminsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._admins;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LakeformationDataLakeSettings.prototype, "catalogId", {
        get: function () {
            return this.getStringAttribute('catalog_id');
        },
        set: function (value) {
            this._catalogId = value;
        },
        enumerable: false,
        configurable: true
    });
    LakeformationDataLakeSettings.prototype.resetCatalogId = function () {
        this._catalogId = undefined;
    };
    Object.defineProperty(LakeformationDataLakeSettings.prototype, "catalogIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._catalogId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LakeformationDataLakeSettings.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LakeformationDataLakeSettings.prototype, "trustedResourceOwners", {
        get: function () {
            return this.getListAttribute('trusted_resource_owners');
        },
        set: function (value) {
            this._trustedResourceOwners = value;
        },
        enumerable: false,
        configurable: true
    });
    LakeformationDataLakeSettings.prototype.resetTrustedResourceOwners = function () {
        this._trustedResourceOwners = undefined;
    };
    Object.defineProperty(LakeformationDataLakeSettings.prototype, "trustedResourceOwnersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._trustedResourceOwners;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LakeformationDataLakeSettings.prototype, "createDatabaseDefaultPermissions", {
        get: function () {
            return this.interpolationForAttribute('create_database_default_permissions');
        },
        set: function (value) {
            this._createDatabaseDefaultPermissions = value;
        },
        enumerable: false,
        configurable: true
    });
    LakeformationDataLakeSettings.prototype.resetCreateDatabaseDefaultPermissions = function () {
        this._createDatabaseDefaultPermissions = undefined;
    };
    Object.defineProperty(LakeformationDataLakeSettings.prototype, "createDatabaseDefaultPermissionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._createDatabaseDefaultPermissions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LakeformationDataLakeSettings.prototype, "createTableDefaultPermissions", {
        get: function () {
            return this.interpolationForAttribute('create_table_default_permissions');
        },
        set: function (value) {
            this._createTableDefaultPermissions = value;
        },
        enumerable: false,
        configurable: true
    });
    LakeformationDataLakeSettings.prototype.resetCreateTableDefaultPermissions = function () {
        this._createTableDefaultPermissions = undefined;
    };
    Object.defineProperty(LakeformationDataLakeSettings.prototype, "createTableDefaultPermissionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._createTableDefaultPermissions;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    LakeformationDataLakeSettings.prototype.synthesizeAttributes = function () {
        return {
            admins: cdktf.listMapper(cdktf.stringToTerraform)(this._admins),
            catalog_id: cdktf.stringToTerraform(this._catalogId),
            trusted_resource_owners: cdktf.listMapper(cdktf.stringToTerraform)(this._trustedResourceOwners),
            create_database_default_permissions: cdktf.listMapper(lakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsToTerraform)(this._createDatabaseDefaultPermissions),
            create_table_default_permissions: cdktf.listMapper(lakeformationDataLakeSettingsCreateTableDefaultPermissionsToTerraform)(this._createTableDefaultPermissions)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    LakeformationDataLakeSettings.tfResourceType = "aws_lakeformation_data_lake_settings";
    return LakeformationDataLakeSettings;
}(cdktf.TerraformResource));
exports.LakeformationDataLakeSettings = LakeformationDataLakeSettings;
