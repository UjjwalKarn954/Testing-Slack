"use strict";
// https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock.html
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
exports.GlacierVaultLock = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock.html aws_glacier_vault_lock}
*/
var GlacierVaultLock = /** @class */ (function (_super) {
    __extends(GlacierVaultLock, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock.html aws_glacier_vault_lock} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlacierVaultLockConfig
    */
    function GlacierVaultLock(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_glacier_vault_lock',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._completeLock = config.completeLock;
        _this._ignoreDeletionError = config.ignoreDeletionError;
        _this._policy = config.policy;
        _this._vaultName = config.vaultName;
        return _this;
    }
    Object.defineProperty(GlacierVaultLock.prototype, "completeLock", {
        get: function () {
            return this.getBooleanAttribute('complete_lock');
        },
        set: function (value) {
            this._completeLock = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlacierVaultLock.prototype, "completeLockInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._completeLock;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlacierVaultLock.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlacierVaultLock.prototype, "ignoreDeletionError", {
        get: function () {
            return this.getBooleanAttribute('ignore_deletion_error');
        },
        set: function (value) {
            this._ignoreDeletionError = value;
        },
        enumerable: false,
        configurable: true
    });
    GlacierVaultLock.prototype.resetIgnoreDeletionError = function () {
        this._ignoreDeletionError = undefined;
    };
    Object.defineProperty(GlacierVaultLock.prototype, "ignoreDeletionErrorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ignoreDeletionError;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlacierVaultLock.prototype, "policy", {
        get: function () {
            return this.getStringAttribute('policy');
        },
        set: function (value) {
            this._policy = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlacierVaultLock.prototype, "policyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlacierVaultLock.prototype, "vaultName", {
        get: function () {
            return this.getStringAttribute('vault_name');
        },
        set: function (value) {
            this._vaultName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlacierVaultLock.prototype, "vaultNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vaultName;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    GlacierVaultLock.prototype.synthesizeAttributes = function () {
        return {
            complete_lock: cdktf.booleanToTerraform(this._completeLock),
            ignore_deletion_error: cdktf.booleanToTerraform(this._ignoreDeletionError),
            policy: cdktf.stringToTerraform(this._policy),
            vault_name: cdktf.stringToTerraform(this._vaultName)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    GlacierVaultLock.tfResourceType = "aws_glacier_vault_lock";
    return GlacierVaultLock;
}(cdktf.TerraformResource));
exports.GlacierVaultLock = GlacierVaultLock;
