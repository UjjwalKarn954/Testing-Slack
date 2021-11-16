"use strict";
// https://www.terraform.io/docs/providers/aws/r/efs_backup_policy.html
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
exports.EfsBackupPolicy = void 0;
var cdktf = require("cdktf");
function efsBackupPolicyBackupPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        status: cdktf.stringToTerraform(struct.status)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/efs_backup_policy.html aws_efs_backup_policy}
*/
var EfsBackupPolicy = /** @class */ (function (_super) {
    __extends(EfsBackupPolicy, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/efs_backup_policy.html aws_efs_backup_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EfsBackupPolicyConfig
    */
    function EfsBackupPolicy(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_efs_backup_policy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._fileSystemId = config.fileSystemId;
        _this._backupPolicy = config.backupPolicy;
        return _this;
    }
    Object.defineProperty(EfsBackupPolicy.prototype, "fileSystemId", {
        get: function () {
            return this.getStringAttribute('file_system_id');
        },
        set: function (value) {
            this._fileSystemId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EfsBackupPolicy.prototype, "fileSystemIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fileSystemId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EfsBackupPolicy.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EfsBackupPolicy.prototype, "backupPolicy", {
        get: function () {
            return this.interpolationForAttribute('backup_policy');
        },
        set: function (value) {
            this._backupPolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EfsBackupPolicy.prototype, "backupPolicyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._backupPolicy;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    EfsBackupPolicy.prototype.synthesizeAttributes = function () {
        return {
            file_system_id: cdktf.stringToTerraform(this._fileSystemId),
            backup_policy: cdktf.listMapper(efsBackupPolicyBackupPolicyToTerraform)(this._backupPolicy)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    EfsBackupPolicy.tfResourceType = "aws_efs_backup_policy";
    return EfsBackupPolicy;
}(cdktf.TerraformResource));
exports.EfsBackupPolicy = EfsBackupPolicy;
