"use strict";
// https://www.terraform.io/docs/providers/aws/r/kms_key.html
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
exports.KmsKey = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/kms_key.html aws_kms_key}
*/
var KmsKey = /** @class */ (function (_super) {
    __extends(KmsKey, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kms_key.html aws_kms_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KmsKeyConfig = {}
    */
    function KmsKey(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_kms_key',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._bypassPolicyLockoutSafetyCheck = config.bypassPolicyLockoutSafetyCheck;
        _this._customerMasterKeySpec = config.customerMasterKeySpec;
        _this._deletionWindowInDays = config.deletionWindowInDays;
        _this._description = config.description;
        _this._enableKeyRotation = config.enableKeyRotation;
        _this._isEnabled = config.isEnabled;
        _this._keyUsage = config.keyUsage;
        _this._multiRegion = config.multiRegion;
        _this._policy = config.policy;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(KmsKey.prototype, "arn", {
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
    Object.defineProperty(KmsKey.prototype, "bypassPolicyLockoutSafetyCheck", {
        get: function () {
            return this.getBooleanAttribute('bypass_policy_lockout_safety_check');
        },
        set: function (value) {
            this._bypassPolicyLockoutSafetyCheck = value;
        },
        enumerable: false,
        configurable: true
    });
    KmsKey.prototype.resetBypassPolicyLockoutSafetyCheck = function () {
        this._bypassPolicyLockoutSafetyCheck = undefined;
    };
    Object.defineProperty(KmsKey.prototype, "bypassPolicyLockoutSafetyCheckInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bypassPolicyLockoutSafetyCheck;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsKey.prototype, "customerMasterKeySpec", {
        get: function () {
            return this.getStringAttribute('customer_master_key_spec');
        },
        set: function (value) {
            this._customerMasterKeySpec = value;
        },
        enumerable: false,
        configurable: true
    });
    KmsKey.prototype.resetCustomerMasterKeySpec = function () {
        this._customerMasterKeySpec = undefined;
    };
    Object.defineProperty(KmsKey.prototype, "customerMasterKeySpecInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customerMasterKeySpec;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsKey.prototype, "deletionWindowInDays", {
        get: function () {
            return this.getNumberAttribute('deletion_window_in_days');
        },
        set: function (value) {
            this._deletionWindowInDays = value;
        },
        enumerable: false,
        configurable: true
    });
    KmsKey.prototype.resetDeletionWindowInDays = function () {
        this._deletionWindowInDays = undefined;
    };
    Object.defineProperty(KmsKey.prototype, "deletionWindowInDaysInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deletionWindowInDays;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsKey.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    KmsKey.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(KmsKey.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsKey.prototype, "enableKeyRotation", {
        get: function () {
            return this.getBooleanAttribute('enable_key_rotation');
        },
        set: function (value) {
            this._enableKeyRotation = value;
        },
        enumerable: false,
        configurable: true
    });
    KmsKey.prototype.resetEnableKeyRotation = function () {
        this._enableKeyRotation = undefined;
    };
    Object.defineProperty(KmsKey.prototype, "enableKeyRotationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enableKeyRotation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsKey.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsKey.prototype, "isEnabled", {
        get: function () {
            return this.getBooleanAttribute('is_enabled');
        },
        set: function (value) {
            this._isEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    KmsKey.prototype.resetIsEnabled = function () {
        this._isEnabled = undefined;
    };
    Object.defineProperty(KmsKey.prototype, "isEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._isEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsKey.prototype, "keyId", {
        // key_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsKey.prototype, "keyUsage", {
        get: function () {
            return this.getStringAttribute('key_usage');
        },
        set: function (value) {
            this._keyUsage = value;
        },
        enumerable: false,
        configurable: true
    });
    KmsKey.prototype.resetKeyUsage = function () {
        this._keyUsage = undefined;
    };
    Object.defineProperty(KmsKey.prototype, "keyUsageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keyUsage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsKey.prototype, "multiRegion", {
        get: function () {
            return this.getBooleanAttribute('multi_region');
        },
        set: function (value) {
            this._multiRegion = value;
        },
        enumerable: false,
        configurable: true
    });
    KmsKey.prototype.resetMultiRegion = function () {
        this._multiRegion = undefined;
    };
    Object.defineProperty(KmsKey.prototype, "multiRegionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._multiRegion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsKey.prototype, "policy", {
        get: function () {
            return this.getStringAttribute('policy');
        },
        set: function (value) {
            this._policy = value;
        },
        enumerable: false,
        configurable: true
    });
    KmsKey.prototype.resetPolicy = function () {
        this._policy = undefined;
    };
    Object.defineProperty(KmsKey.prototype, "policyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsKey.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    KmsKey.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(KmsKey.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsKey.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    KmsKey.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(KmsKey.prototype, "tagsAllInput", {
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
    KmsKey.prototype.synthesizeAttributes = function () {
        return {
            bypass_policy_lockout_safety_check: cdktf.booleanToTerraform(this._bypassPolicyLockoutSafetyCheck),
            customer_master_key_spec: cdktf.stringToTerraform(this._customerMasterKeySpec),
            deletion_window_in_days: cdktf.numberToTerraform(this._deletionWindowInDays),
            description: cdktf.stringToTerraform(this._description),
            enable_key_rotation: cdktf.booleanToTerraform(this._enableKeyRotation),
            is_enabled: cdktf.booleanToTerraform(this._isEnabled),
            key_usage: cdktf.stringToTerraform(this._keyUsage),
            multi_region: cdktf.booleanToTerraform(this._multiRegion),
            policy: cdktf.stringToTerraform(this._policy),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    KmsKey.tfResourceType = "aws_kms_key";
    return KmsKey;
}(cdktf.TerraformResource));
exports.KmsKey = KmsKey;
