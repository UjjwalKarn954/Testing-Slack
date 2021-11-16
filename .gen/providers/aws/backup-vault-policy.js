"use strict";
// https://www.terraform.io/docs/providers/aws/r/backup_vault_policy.html
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
exports.BackupVaultPolicy = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_policy.html aws_backup_vault_policy}
*/
var BackupVaultPolicy = /** @class */ (function (_super) {
    __extends(BackupVaultPolicy, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_policy.html aws_backup_vault_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BackupVaultPolicyConfig
    */
    function BackupVaultPolicy(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_backup_vault_policy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._backupVaultName = config.backupVaultName;
        _this._policy = config.policy;
        return _this;
    }
    Object.defineProperty(BackupVaultPolicy.prototype, "backupVaultArn", {
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
    Object.defineProperty(BackupVaultPolicy.prototype, "backupVaultName", {
        get: function () {
            return this.getStringAttribute('backup_vault_name');
        },
        set: function (value) {
            this._backupVaultName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackupVaultPolicy.prototype, "backupVaultNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._backupVaultName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackupVaultPolicy.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackupVaultPolicy.prototype, "policy", {
        get: function () {
            return this.getStringAttribute('policy');
        },
        set: function (value) {
            this._policy = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackupVaultPolicy.prototype, "policyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policy;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    BackupVaultPolicy.prototype.synthesizeAttributes = function () {
        return {
            backup_vault_name: cdktf.stringToTerraform(this._backupVaultName),
            policy: cdktf.stringToTerraform(this._policy)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    BackupVaultPolicy.tfResourceType = "aws_backup_vault_policy";
    return BackupVaultPolicy;
}(cdktf.TerraformResource));
exports.BackupVaultPolicy = BackupVaultPolicy;
