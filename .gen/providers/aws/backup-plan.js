"use strict";
// https://www.terraform.io/docs/providers/aws/r/backup_plan.html
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
exports.BackupPlan = void 0;
var cdktf = require("cdktf");
function backupPlanAdvancedBackupSettingToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        backup_options: cdktf.hashMapper(cdktf.anyToTerraform)(struct.backupOptions),
        resource_type: cdktf.stringToTerraform(struct.resourceType)
    };
}
function backupPlanRuleCopyActionLifecycleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cold_storage_after: cdktf.numberToTerraform(struct.coldStorageAfter),
        delete_after: cdktf.numberToTerraform(struct.deleteAfter)
    };
}
function backupPlanRuleCopyActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        destination_vault_arn: cdktf.stringToTerraform(struct.destinationVaultArn),
        lifecycle: cdktf.listMapper(backupPlanRuleCopyActionLifecycleToTerraform)(struct.lifecycle)
    };
}
function backupPlanRuleLifecycleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cold_storage_after: cdktf.numberToTerraform(struct.coldStorageAfter),
        delete_after: cdktf.numberToTerraform(struct.deleteAfter)
    };
}
function backupPlanRuleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        completion_window: cdktf.numberToTerraform(struct.completionWindow),
        enable_continuous_backup: cdktf.booleanToTerraform(struct.enableContinuousBackup),
        recovery_point_tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct.recoveryPointTags),
        rule_name: cdktf.stringToTerraform(struct.ruleName),
        schedule: cdktf.stringToTerraform(struct.schedule),
        start_window: cdktf.numberToTerraform(struct.startWindow),
        target_vault_name: cdktf.stringToTerraform(struct.targetVaultName),
        copy_action: cdktf.listMapper(backupPlanRuleCopyActionToTerraform)(struct.copyAction),
        lifecycle: cdktf.listMapper(backupPlanRuleLifecycleToTerraform)(struct.lifecycle)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html aws_backup_plan}
*/
var BackupPlan = /** @class */ (function (_super) {
    __extends(BackupPlan, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html aws_backup_plan} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BackupPlanConfig
    */
    function BackupPlan(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_backup_plan',
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
        _this._tagsAll = config.tagsAll;
        _this._advancedBackupSetting = config.advancedBackupSetting;
        _this._rule = config.rule;
        return _this;
    }
    Object.defineProperty(BackupPlan.prototype, "arn", {
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
    Object.defineProperty(BackupPlan.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackupPlan.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackupPlan.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackupPlan.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    BackupPlan.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(BackupPlan.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackupPlan.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    BackupPlan.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(BackupPlan.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackupPlan.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackupPlan.prototype, "advancedBackupSetting", {
        get: function () {
            return this.interpolationForAttribute('advanced_backup_setting');
        },
        set: function (value) {
            this._advancedBackupSetting = value;
        },
        enumerable: false,
        configurable: true
    });
    BackupPlan.prototype.resetAdvancedBackupSetting = function () {
        this._advancedBackupSetting = undefined;
    };
    Object.defineProperty(BackupPlan.prototype, "advancedBackupSettingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._advancedBackupSetting;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackupPlan.prototype, "rule", {
        get: function () {
            return this.interpolationForAttribute('rule');
        },
        set: function (value) {
            this._rule = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackupPlan.prototype, "ruleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rule;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    BackupPlan.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            advanced_backup_setting: cdktf.listMapper(backupPlanAdvancedBackupSettingToTerraform)(this._advancedBackupSetting),
            rule: cdktf.listMapper(backupPlanRuleToTerraform)(this._rule)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    BackupPlan.tfResourceType = "aws_backup_plan";
    return BackupPlan;
}(cdktf.TerraformResource));
exports.BackupPlan = BackupPlan;
