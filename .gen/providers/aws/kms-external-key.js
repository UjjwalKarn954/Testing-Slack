"use strict";
// https://www.terraform.io/docs/providers/aws/r/kms_external_key.html
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
exports.KmsExternalKey = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key.html aws_kms_external_key}
*/
var KmsExternalKey = /** @class */ (function (_super) {
    __extends(KmsExternalKey, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key.html aws_kms_external_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KmsExternalKeyConfig = {}
    */
    function KmsExternalKey(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_kms_external_key',
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
        _this._multiRegion = config.multiRegion;
        _this._policy = config.policy;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._validTo = config.validTo;
        return _this;
    }
    Object.defineProperty(KmsExternalKey.prototype, "arn", {
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
    Object.defineProperty(KmsExternalKey.prototype, "bypassPolicyLockoutSafetyCheck", {
        get: function () {
            return this.getBooleanAttribute('bypass_policy_lockout_safety_check');
        },
        set: function (value) {
            this._bypassPolicyLockoutSafetyCheck = value;
        },
        enumerable: false,
        configurable: true
    });
    KmsExternalKey.prototype.resetBypassPolicyLockoutSafetyCheck = function () {
        this._bypassPolicyLockoutSafetyCheck = undefined;
    };
    Object.defineProperty(KmsExternalKey.prototype, "bypassPolicyLockoutSafetyCheckInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bypassPolicyLockoutSafetyCheck;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsExternalKey.prototype, "deletionWindowInDays", {
        get: function () {
            return this.getNumberAttribute('deletion_window_in_days');
        },
        set: function (value) {
            this._deletionWindowInDays = value;
        },
        enumerable: false,
        configurable: true
    });
    KmsExternalKey.prototype.resetDeletionWindowInDays = function () {
        this._deletionWindowInDays = undefined;
    };
    Object.defineProperty(KmsExternalKey.prototype, "deletionWindowInDaysInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deletionWindowInDays;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsExternalKey.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    KmsExternalKey.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(KmsExternalKey.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsExternalKey.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    KmsExternalKey.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(KmsExternalKey.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsExternalKey.prototype, "expirationModel", {
        // expiration_model - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expiration_model');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsExternalKey.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsExternalKey.prototype, "keyMaterialBase64", {
        get: function () {
            return this.getStringAttribute('key_material_base64');
        },
        set: function (value) {
            this._keyMaterialBase64 = value;
        },
        enumerable: false,
        configurable: true
    });
    KmsExternalKey.prototype.resetKeyMaterialBase64 = function () {
        this._keyMaterialBase64 = undefined;
    };
    Object.defineProperty(KmsExternalKey.prototype, "keyMaterialBase64Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keyMaterialBase64;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsExternalKey.prototype, "keyState", {
        // key_state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key_state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsExternalKey.prototype, "keyUsage", {
        // key_usage - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key_usage');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsExternalKey.prototype, "multiRegion", {
        get: function () {
            return this.getBooleanAttribute('multi_region');
        },
        set: function (value) {
            this._multiRegion = value;
        },
        enumerable: false,
        configurable: true
    });
    KmsExternalKey.prototype.resetMultiRegion = function () {
        this._multiRegion = undefined;
    };
    Object.defineProperty(KmsExternalKey.prototype, "multiRegionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._multiRegion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsExternalKey.prototype, "policy", {
        get: function () {
            return this.getStringAttribute('policy');
        },
        set: function (value) {
            this._policy = value;
        },
        enumerable: false,
        configurable: true
    });
    KmsExternalKey.prototype.resetPolicy = function () {
        this._policy = undefined;
    };
    Object.defineProperty(KmsExternalKey.prototype, "policyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsExternalKey.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    KmsExternalKey.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(KmsExternalKey.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsExternalKey.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    KmsExternalKey.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(KmsExternalKey.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KmsExternalKey.prototype, "validTo", {
        get: function () {
            return this.getStringAttribute('valid_to');
        },
        set: function (value) {
            this._validTo = value;
        },
        enumerable: false,
        configurable: true
    });
    KmsExternalKey.prototype.resetValidTo = function () {
        this._validTo = undefined;
    };
    Object.defineProperty(KmsExternalKey.prototype, "validToInput", {
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
    KmsExternalKey.prototype.synthesizeAttributes = function () {
        return {
            bypass_policy_lockout_safety_check: cdktf.booleanToTerraform(this._bypassPolicyLockoutSafetyCheck),
            deletion_window_in_days: cdktf.numberToTerraform(this._deletionWindowInDays),
            description: cdktf.stringToTerraform(this._description),
            enabled: cdktf.booleanToTerraform(this._enabled),
            key_material_base64: cdktf.stringToTerraform(this._keyMaterialBase64),
            multi_region: cdktf.booleanToTerraform(this._multiRegion),
            policy: cdktf.stringToTerraform(this._policy),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            valid_to: cdktf.stringToTerraform(this._validTo)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    KmsExternalKey.tfResourceType = "aws_kms_external_key";
    return KmsExternalKey;
}(cdktf.TerraformResource));
exports.KmsExternalKey = KmsExternalKey;
