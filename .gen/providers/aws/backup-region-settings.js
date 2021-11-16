"use strict";
// https://www.terraform.io/docs/providers/aws/r/backup_region_settings.html
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
exports.BackupRegionSettings = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/backup_region_settings.html aws_backup_region_settings}
*/
var BackupRegionSettings = /** @class */ (function (_super) {
    __extends(BackupRegionSettings, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/backup_region_settings.html aws_backup_region_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BackupRegionSettingsConfig
    */
    function BackupRegionSettings(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_backup_region_settings',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._resourceTypeOptInPreference = config.resourceTypeOptInPreference;
        return _this;
    }
    Object.defineProperty(BackupRegionSettings.prototype, "id", {
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
    Object.defineProperty(BackupRegionSettings.prototype, "resourceTypeOptInPreference", {
        get: function () {
            return this.getBooleanAttribute('resource_type_opt_in_preference');
        },
        set: function (value) {
            this._resourceTypeOptInPreference = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackupRegionSettings.prototype, "resourceTypeOptInPreferenceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resourceTypeOptInPreference;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    BackupRegionSettings.prototype.synthesizeAttributes = function () {
        return {
            resource_type_opt_in_preference: cdktf.hashMapper(cdktf.anyToTerraform)(this._resourceTypeOptInPreference)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    BackupRegionSettings.tfResourceType = "aws_backup_region_settings";
    return BackupRegionSettings;
}(cdktf.TerraformResource));
exports.BackupRegionSettings = BackupRegionSettings;
