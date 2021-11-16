"use strict";
// https://www.terraform.io/docs/providers/aws/r/backup_global_settings.html
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
exports.BackupGlobalSettings = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/backup_global_settings.html aws_backup_global_settings}
*/
var BackupGlobalSettings = /** @class */ (function (_super) {
    __extends(BackupGlobalSettings, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/backup_global_settings.html aws_backup_global_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BackupGlobalSettingsConfig
    */
    function BackupGlobalSettings(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_backup_global_settings',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._globalSettings = config.globalSettings;
        return _this;
    }
    Object.defineProperty(BackupGlobalSettings.prototype, "globalSettings", {
        get: function () {
            return this.interpolationForAttribute('global_settings');
        },
        set: function (value) {
            this._globalSettings = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackupGlobalSettings.prototype, "globalSettingsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._globalSettings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackupGlobalSettings.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    BackupGlobalSettings.prototype.synthesizeAttributes = function () {
        return {
            global_settings: cdktf.hashMapper(cdktf.anyToTerraform)(this._globalSettings)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    BackupGlobalSettings.tfResourceType = "aws_backup_global_settings";
    return BackupGlobalSettings;
}(cdktf.TerraformResource));
exports.BackupGlobalSettings = BackupGlobalSettings;
