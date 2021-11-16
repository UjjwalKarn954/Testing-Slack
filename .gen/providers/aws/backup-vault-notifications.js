"use strict";
// https://www.terraform.io/docs/providers/aws/r/backup_vault_notifications.html
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
exports.BackupVaultNotifications = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_notifications.html aws_backup_vault_notifications}
*/
var BackupVaultNotifications = /** @class */ (function (_super) {
    __extends(BackupVaultNotifications, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_notifications.html aws_backup_vault_notifications} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BackupVaultNotificationsConfig
    */
    function BackupVaultNotifications(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_backup_vault_notifications',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._backupVaultEvents = config.backupVaultEvents;
        _this._backupVaultName = config.backupVaultName;
        _this._snsTopicArn = config.snsTopicArn;
        return _this;
    }
    Object.defineProperty(BackupVaultNotifications.prototype, "backupVaultArn", {
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
    Object.defineProperty(BackupVaultNotifications.prototype, "backupVaultEvents", {
        get: function () {
            return this.getListAttribute('backup_vault_events');
        },
        set: function (value) {
            this._backupVaultEvents = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackupVaultNotifications.prototype, "backupVaultEventsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._backupVaultEvents;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackupVaultNotifications.prototype, "backupVaultName", {
        get: function () {
            return this.getStringAttribute('backup_vault_name');
        },
        set: function (value) {
            this._backupVaultName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackupVaultNotifications.prototype, "backupVaultNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._backupVaultName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackupVaultNotifications.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackupVaultNotifications.prototype, "snsTopicArn", {
        get: function () {
            return this.getStringAttribute('sns_topic_arn');
        },
        set: function (value) {
            this._snsTopicArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackupVaultNotifications.prototype, "snsTopicArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._snsTopicArn;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    BackupVaultNotifications.prototype.synthesizeAttributes = function () {
        return {
            backup_vault_events: cdktf.listMapper(cdktf.stringToTerraform)(this._backupVaultEvents),
            backup_vault_name: cdktf.stringToTerraform(this._backupVaultName),
            sns_topic_arn: cdktf.stringToTerraform(this._snsTopicArn)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    BackupVaultNotifications.tfResourceType = "aws_backup_vault_notifications";
    return BackupVaultNotifications;
}(cdktf.TerraformResource));
exports.BackupVaultNotifications = BackupVaultNotifications;
