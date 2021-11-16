"use strict";
// https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key.html
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
exports.KmsReplicaExternalKey = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key.html aws_kms_replica_external_key}
*/
var KmsReplicaExternalKey = /** @class */ (function (_super) {
    __extends(KmsReplicaExternalKey, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key.html aws_kms_replica_external_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KmsReplicaExternalKeyConfig
    */
    function KmsReplicaExternalKey(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_kms_replica_external_key',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._bypassPolicyLockoutSafetyCheck = config.bypassPolicyLockoutSafetyCheck;
        _this._deletionWindowInDays = config.deletionWindowInDays;
        _this._description = config.description;
        _this._enabled = config.enabled;
        _this._keyMaterialBase64 = config.keyMaterialBase64;
        _this._policy = config.policy;
        _this._primaryKeyArn = config.primaryKeyArn;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._validTo = config.validTo;
        return _this;
    }
    Object.defineProperty(KmsReplicaExternalKey.prototype, "arn", {
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
    Object.defineProperty(KmsReplicaExternalKey.prototype, "bypassPolicyLockoutSafetyCheck", {
        get: function () {
            return this.getBooleanAttribute('bypass_policy_lockout_safety_check');
        },
        set: function (value) {
            this._bypassPolicyLockoutSafetyCheck = value;
        },
        enumerable: false,
        configurable: true
    });
    KmsReplicaExternalKey.prototype.resetBypassPolicyLockoutSafetyCheck = function () {
        this._bypassPolicyLockoutSafetyCheck = undefined;
    };
    Object.defineProperty(KmsReplicaExternalKey.prototype, "bypassPolicyLockoutSafetyCheckInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bypassPolicyLockoutSafetyCheck;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsReplicaExternalKey.prototype, "deletionWindowInDays", {
        get: function () {
            return this.getNumberAttribute('deletion_window_in_days');
        },
        set: function (value) {
            this._deletionWindowInDays = value;
        },
        enumerable: false,
        configurable: true
    });
    KmsReplicaExternalKey.prototype.resetDeletionWindowInDays = function () {
        this._deletionWindowInDays = undefined;
    };
    Object.defineProperty(KmsReplicaExternalKey.prototype, "deletionWindowInDaysInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deletionWindowInDays;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsReplicaExternalKey.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    KmsReplicaExternalKey.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(KmsReplicaExternalKey.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsReplicaExternalKey.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    KmsReplicaExternalKey.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(KmsReplicaExternalKey.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsReplicaExternalKey.prototype, "expirationModel", {
        // expiration_model - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expiration_model');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsReplicaExternalKey.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsReplicaExternalKey.prototype, "keyId", {
        // key_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsReplicaExternalKey.prototype, "keyMaterialBase64", {
        get: function () {
            return this.getStringAttribute('key_material_base64');
        },
        set: function (value) {
            this._keyMaterialBase64 = value;
        },
        enumerable: false,
        configurable: true
    });
    KmsReplicaExternalKey.prototype.resetKeyMaterialBase64 = function () {
        this._keyMaterialBase64 = undefined;
    };
    Object.defineProperty(KmsReplicaExternalKey.prototype, "keyMaterialBase64Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keyMaterialBase64;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsReplicaExternalKey.prototype, "keyState", {
        // key_state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key_state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsReplicaExternalKey.prototype, "keyUsage", {
        // key_usage - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key_usage');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsReplicaExternalKey.prototype, "policy", {
        get: function () {
            return this.getStringAttribute('policy');
        },
        set: function (value) {
            this._policy = value;
        },
        enumerable: false,
        configurable: true
    });
    KmsReplicaExternalKey.prototype.resetPolicy = function () {
        this._policy = undefined;
    };
    Object.defineProperty(KmsReplicaExternalKey.prototype, "policyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsReplicaExternalKey.prototype, "primaryKeyArn", {
        get: function () {
            return this.getStringAttribute('primary_key_arn');
        },
        set: function (value) {
            this._primaryKeyArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsReplicaExternalKey.prototype, "primaryKeyArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._primaryKeyArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsReplicaExternalKey.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    KmsReplicaExternalKey.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(KmsReplicaExternalKey.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsReplicaExternalKey.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    KmsReplicaExternalKey.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(KmsReplicaExternalKey.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsReplicaExternalKey.prototype, "validTo", {
        get: function () {
            return this.getStringAttribute('valid_to');
        },
        set: function (value) {
            this._validTo = value;
        },
        enumerable: false,
        configurable: true
    });
    KmsReplicaExternalKey.prototype.resetValidTo = function () {
        this._validTo = undefined;
    };
    Object.defineProperty(KmsReplicaExternalKey.prototype, "validToInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._validTo;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    KmsReplicaExternalKey.prototype.synthesizeAttributes = function () {
        return {
            bypass_policy_lockout_safety_check: cdktf.booleanToTerraform(this._bypassPolicyLockoutSafetyCheck),
            deletion_window_in_days: cdktf.numberToTerraform(this._deletionWindowInDays),
            description: cdktf.stringToTerraform(this._description),
            enabled: cdktf.booleanToTerraform(this._enabled),
            key_material_base64: cdktf.stringToTerraform(this._keyMaterialBase64),
            policy: cdktf.stringToTerraform(this._policy),
            primary_key_arn: cdktf.stringToTerraform(this._primaryKeyArn),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            valid_to: cdktf.stringToTerraform(this._validTo)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    KmsReplicaExternalKey.tfResourceType = "aws_kms_replica_external_key";
    return KmsReplicaExternalKey;
}(cdktf.TerraformResource));
exports.KmsReplicaExternalKey = KmsReplicaExternalKey;
