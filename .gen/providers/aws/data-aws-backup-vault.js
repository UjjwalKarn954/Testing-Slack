"use strict";
// https://www.terraform.io/docs/providers/aws/d/backup_vault.html
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
exports.DataAwsBackupVault = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/backup_vault.html aws_backup_vault}
*/
var DataAwsBackupVault = /** @class */ (function (_super) {
    __extends(DataAwsBackupVault, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/backup_vault.html aws_backup_vault} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsBackupVaultConfig
    */
    function DataAwsBackupVault(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_backup_vault',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        _this._tags = config.tags;
        return _this;
    }
    Object.defineProperty(DataAwsBackupVault.prototype, "arn", {
        // ==========
        // ATTRIBUTES
        // ==========
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsBackupVault.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsBackupVault.prototype, "kmsKeyArn", {
        // kms_key_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('kms_key_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsBackupVault.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsBackupVault.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsBackupVault.prototype, "recoveryPoints", {
        // recovery_points - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('recovery_points');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsBackupVault.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsBackupVault.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsBackupVault.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsBackupVault.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsBackupVault.tfResourceType = "aws_backup_vault";
    return DataAwsBackupVault;
}(cdktf.TerraformDataSource));
exports.DataAwsBackupVault = DataAwsBackupVault;
