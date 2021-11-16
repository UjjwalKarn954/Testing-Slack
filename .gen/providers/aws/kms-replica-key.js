"use strict";
// https://www.terraform.io/docs/providers/aws/r/kms_replica_key.html
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
exports.KmsReplicaKey = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_key.html aws_kms_replica_key}
*/
var KmsReplicaKey = /** @class */ (function (_super) {
    __extends(KmsReplicaKey, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_key.html aws_kms_replica_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KmsReplicaKeyConfig
    */
    function KmsReplicaKey(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_kms_replica_key',
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
        _this._policy = config.policy;
        _this._primaryKeyArn = config.primaryKeyArn;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(KmsReplicaKey.prototype, "arn", {
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
    Object.defineProperty(KmsReplicaKey.prototype, "bypassPolicyLockoutSafetyCheck", {
        get: function () {
            return this.getBooleanAttribute('bypass_policy_lockout_safety_check');
        },
        set: function (value) {
            this._bypassPolicyLockoutSafetyCheck = value;
        },
        enumerable: false,
        configurable: true
    });
    KmsReplicaKey.prototype.resetBypassPolicyLockoutSafetyCheck = function () {
        this._bypassPolicyLockoutSafetyCheck = undefined;
    };
    Object.defineProperty(KmsReplicaKey.prototype, "bypassPolicyLockoutSafetyCheckInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bypassPolicyLockoutSafetyCheck;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsReplicaKey.prototype, "deletionWindowInDays", {
        get: function () {
            return this.getNumberAttribute('deletion_window_in_days');
        },
        set: function (value) {
            this._deletionWindowInDays = value;
        },
        enumerable: false,
        configurable: true
    });
    KmsReplicaKey.prototype.resetDeletionWindowInDays = function () {
        this._deletionWindowInDays = undefined;
    };
    Object.defineProperty(KmsReplicaKey.prototype, "deletionWindowInDaysInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deletionWindowInDays;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsReplicaKey.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    KmsReplicaKey.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(KmsReplicaKey.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsReplicaKey.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    KmsReplicaKey.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(KmsReplicaKey.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsReplicaKey.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsReplicaKey.prototype, "keyId", {
        // key_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsReplicaKey.prototype, "keyRotationEnabled", {
        // key_rotation_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('key_rotation_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsReplicaKey.prototype, "keySpec", {
        // key_spec - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key_spec');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsReplicaKey.prototype, "keyUsage", {
        // key_usage - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key_usage');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsReplicaKey.prototype, "policy", {
        get: function () {
            return this.getStringAttribute('policy');
        },
        set: function (value) {
            this._policy = value;
        },
        enumerable: false,
        configurable: true
    });
    KmsReplicaKey.prototype.resetPolicy = function () {
        this._policy = undefined;
    };
    Object.defineProperty(KmsReplicaKey.prototype, "policyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsReplicaKey.prototype, "primaryKeyArn", {
        get: function () {
            return this.getStringAttribute('primary_key_arn');
        },
        set: function (value) {
            this._primaryKeyArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsReplicaKey.prototype, "primaryKeyArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._primaryKeyArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsReplicaKey.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    KmsReplicaKey.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(KmsReplicaKey.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsReplicaKey.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    KmsReplicaKey.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(KmsReplicaKey.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    KmsReplicaKey.prototype.synthesizeAttributes = function () {
        return {
            bypass_policy_lockout_safety_check: cdktf.booleanToTerraform(this._bypassPolicyLockoutSafetyCheck),
            deletion_window_in_days: cdktf.numberToTerraform(this._deletionWindowInDays),
            description: cdktf.stringToTerraform(this._description),
            enabled: cdktf.booleanToTerraform(this._enabled),
            policy: cdktf.stringToTerraform(this._policy),
            primary_key_arn: cdktf.stringToTerraform(this._primaryKeyArn),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    KmsReplicaKey.tfResourceType = "aws_kms_replica_key";
    return KmsReplicaKey;
}(cdktf.TerraformResource));
exports.KmsReplicaKey = KmsReplicaKey;
