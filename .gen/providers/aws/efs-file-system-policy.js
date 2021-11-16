"use strict";
// https://www.terraform.io/docs/providers/aws/r/efs_file_system_policy.html
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
exports.EfsFileSystemPolicy = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system_policy.html aws_efs_file_system_policy}
*/
var EfsFileSystemPolicy = /** @class */ (function (_super) {
    __extends(EfsFileSystemPolicy, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system_policy.html aws_efs_file_system_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EfsFileSystemPolicyConfig
    */
    function EfsFileSystemPolicy(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_efs_file_system_policy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._bypassPolicyLockoutSafetyCheck = config.bypassPolicyLockoutSafetyCheck;
        _this._fileSystemId = config.fileSystemId;
        _this._policy = config.policy;
        return _this;
    }
    Object.defineProperty(EfsFileSystemPolicy.prototype, "bypassPolicyLockoutSafetyCheck", {
        get: function () {
            return this.getBooleanAttribute('bypass_policy_lockout_safety_check');
        },
        set: function (value) {
            this._bypassPolicyLockoutSafetyCheck = value;
        },
        enumerable: false,
        configurable: true
    });
    EfsFileSystemPolicy.prototype.resetBypassPolicyLockoutSafetyCheck = function () {
        this._bypassPolicyLockoutSafetyCheck = undefined;
    };
    Object.defineProperty(EfsFileSystemPolicy.prototype, "bypassPolicyLockoutSafetyCheckInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bypassPolicyLockoutSafetyCheck;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EfsFileSystemPolicy.prototype, "fileSystemId", {
        get: function () {
            return this.getStringAttribute('file_system_id');
        },
        set: function (value) {
            this._fileSystemId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EfsFileSystemPolicy.prototype, "fileSystemIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fileSystemId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EfsFileSystemPolicy.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EfsFileSystemPolicy.prototype, "policy", {
        get: function () {
            return this.getStringAttribute('policy');
        },
        set: function (value) {
            this._policy = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EfsFileSystemPolicy.prototype, "policyInput", {
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
    EfsFileSystemPolicy.prototype.synthesizeAttributes = function () {
        return {
            bypass_policy_lockout_safety_check: cdktf.booleanToTerraform(this._bypassPolicyLockoutSafetyCheck),
            file_system_id: cdktf.stringToTerraform(this._fileSystemId),
            policy: cdktf.stringToTerraform(this._policy)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    EfsFileSystemPolicy.tfResourceType = "aws_efs_file_system_policy";
    return EfsFileSystemPolicy;
}(cdktf.TerraformResource));
exports.EfsFileSystemPolicy = EfsFileSystemPolicy;
