"use strict";
// https://www.terraform.io/docs/providers/aws/r/backup_vault_lock_configuration.html
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
exports.BackupVaultLockConfiguration = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_lock_configuration.html aws_backup_vault_lock_configuration}
*/
var BackupVaultLockConfiguration = /** @class */ (function (_super) {
    __extends(BackupVaultLockConfiguration, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_lock_configuration.html aws_backup_vault_lock_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BackupVaultLockConfigurationConfig
    */
    function BackupVaultLockConfiguration(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_backup_vault_lock_configuration',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._backupVaultName = config.backupVaultName;
        _this._changeableForDays = config.changeableForDays;
        _this._maxRetentionDays = config.maxRetentionDays;
        _this._minRetentionDays = config.minRetentionDays;
        return _this;
    }
    Object.defineProperty(BackupVaultLockConfiguration.prototype, "backupVaultArn", {
        // ==========
        // ATTRIBUTES
        // ==========
        // backup_vault_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('backup_vault_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackupVaultLockConfiguration.prototype, "backupVaultName", {
        get: function () {
            return this.getStringAttribute('backup_vault_name');
        },
        set: function (value) {
            this._backupVaultName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackupVaultLockConfiguration.prototype, "backupVaultNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._backupVaultName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackupVaultLockConfiguration.prototype, "changeableForDays", {
        get: function () {
            return this.getNumberAttribute('changeable_for_days');
        },
        set: function (value) {
            this._changeableForDays = value;
        },
        enumerable: false,
        configurable: true
    });
    BackupVaultLockConfiguration.prototype.resetChangeableForDays = function () {
        this._changeableForDays = undefined;
    };
    Object.defineProperty(BackupVaultLockConfiguration.prototype, "changeableForDaysInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._changeableForDays;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackupVaultLockConfiguration.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackupVaultLockConfiguration.prototype, "maxRetentionDays", {
        get: function () {
            return this.getNumberAttribute('max_retention_days');
        },
        set: function (value) {
            this._maxRetentionDays = value;
        },
        enumerable: false,
        configurable: true
    });
    BackupVaultLockConfiguration.prototype.resetMaxRetentionDays = function () {
        this._maxRetentionDays = undefined;
    };
    Object.defineProperty(BackupVaultLockConfiguration.prototype, "maxRetentionDaysInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxRetentionDays;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackupVaultLockConfiguration.prototype, "minRetentionDays", {
        get: function () {
            return this.getNumberAttribute('min_retention_days');
        },
        set: function (value) {
            this._minRetentionDays = value;
        },
        enumerable: false,
        configurable: true
    });
    BackupVaultLockConfiguration.prototype.resetMinRetentionDays = function () {
        this._minRetentionDays = undefined;
    };
    Object.defineProperty(BackupVaultLockConfiguration.prototype, "minRetentionDaysInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._minRetentionDays;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    BackupVaultLockConfiguration.prototype.synthesizeAttributes = function () {
        return {
            backup_vault_name: cdktf.stringToTerraform(this._backupVaultName),
            changeable_for_days: cdktf.numberToTerraform(this._changeableForDays),
            max_retention_days: cdktf.numberToTerraform(this._maxRetentionDays),
            min_retention_days: cdktf.numberToTerraform(this._minRetentionDays)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    BackupVaultLockConfiguration.tfResourceType = "aws_backup_vault_lock_configuration";
    return BackupVaultLockConfiguration;
}(cdktf.TerraformResource));
exports.BackupVaultLockConfiguration = BackupVaultLockConfiguration;
