"use strict";
// https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy.html
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
exports.IamAccountPasswordPolicy = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy.html aws_iam_account_password_policy}
*/
var IamAccountPasswordPolicy = /** @class */ (function (_super) {
    __extends(IamAccountPasswordPolicy, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy.html aws_iam_account_password_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamAccountPasswordPolicyConfig = {}
    */
    function IamAccountPasswordPolicy(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_iam_account_password_policy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._allowUsersToChangePassword = config.allowUsersToChangePassword;
        _this._hardExpiry = config.hardExpiry;
        _this._maxPasswordAge = config.maxPasswordAge;
        _this._minimumPasswordLength = config.minimumPasswordLength;
        _this._passwordReusePrevention = config.passwordReusePrevention;
        _this._requireLowercaseCharacters = config.requireLowercaseCharacters;
        _this._requireNumbers = config.requireNumbers;
        _this._requireSymbols = config.requireSymbols;
        _this._requireUppercaseCharacters = config.requireUppercaseCharacters;
        return _this;
    }
    Object.defineProperty(IamAccountPasswordPolicy.prototype, "allowUsersToChangePassword", {
        get: function () {
            return this.getBooleanAttribute('allow_users_to_change_password');
        },
        set: function (value) {
            this._allowUsersToChangePassword = value;
        },
        enumerable: false,
        configurable: true
    });
    IamAccountPasswordPolicy.prototype.resetAllowUsersToChangePassword = function () {
        this._allowUsersToChangePassword = undefined;
    };
    Object.defineProperty(IamAccountPasswordPolicy.prototype, "allowUsersToChangePasswordInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowUsersToChangePassword;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamAccountPasswordPolicy.prototype, "expirePasswords", {
        // expire_passwords - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('expire_passwords');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamAccountPasswordPolicy.prototype, "hardExpiry", {
        get: function () {
            return this.getBooleanAttribute('hard_expiry');
        },
        set: function (value) {
            this._hardExpiry = value;
        },
        enumerable: false,
        configurable: true
    });
    IamAccountPasswordPolicy.prototype.resetHardExpiry = function () {
        this._hardExpiry = undefined;
    };
    Object.defineProperty(IamAccountPasswordPolicy.prototype, "hardExpiryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hardExpiry;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamAccountPasswordPolicy.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamAccountPasswordPolicy.prototype, "maxPasswordAge", {
        get: function () {
            return this.getNumberAttribute('max_password_age');
        },
        set: function (value) {
            this._maxPasswordAge = value;
        },
        enumerable: false,
        configurable: true
    });
    IamAccountPasswordPolicy.prototype.resetMaxPasswordAge = function () {
        this._maxPasswordAge = undefined;
    };
    Object.defineProperty(IamAccountPasswordPolicy.prototype, "maxPasswordAgeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxPasswordAge;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamAccountPasswordPolicy.prototype, "minimumPasswordLength", {
        get: function () {
            return this.getNumberAttribute('minimum_password_length');
        },
        set: function (value) {
            this._minimumPasswordLength = value;
        },
        enumerable: false,
        configurable: true
    });
    IamAccountPasswordPolicy.prototype.resetMinimumPasswordLength = function () {
        this._minimumPasswordLength = undefined;
    };
    Object.defineProperty(IamAccountPasswordPolicy.prototype, "minimumPasswordLengthInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._minimumPasswordLength;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamAccountPasswordPolicy.prototype, "passwordReusePrevention", {
        get: function () {
            return this.getNumberAttribute('password_reuse_prevention');
        },
        set: function (value) {
            this._passwordReusePrevention = value;
        },
        enumerable: false,
        configurable: true
    });
    IamAccountPasswordPolicy.prototype.resetPasswordReusePrevention = function () {
        this._passwordReusePrevention = undefined;
    };
    Object.defineProperty(IamAccountPasswordPolicy.prototype, "passwordReusePreventionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._passwordReusePrevention;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamAccountPasswordPolicy.prototype, "requireLowercaseCharacters", {
        get: function () {
            return this.getBooleanAttribute('require_lowercase_characters');
        },
        set: function (value) {
            this._requireLowercaseCharacters = value;
        },
        enumerable: false,
        configurable: true
    });
    IamAccountPasswordPolicy.prototype.resetRequireLowercaseCharacters = function () {
        this._requireLowercaseCharacters = undefined;
    };
    Object.defineProperty(IamAccountPasswordPolicy.prototype, "requireLowercaseCharactersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requireLowercaseCharacters;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamAccountPasswordPolicy.prototype, "requireNumbers", {
        get: function () {
            return this.getBooleanAttribute('require_numbers');
        },
        set: function (value) {
            this._requireNumbers = value;
        },
        enumerable: false,
        configurable: true
    });
    IamAccountPasswordPolicy.prototype.resetRequireNumbers = function () {
        this._requireNumbers = undefined;
    };
    Object.defineProperty(IamAccountPasswordPolicy.prototype, "requireNumbersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requireNumbers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamAccountPasswordPolicy.prototype, "requireSymbols", {
        get: function () {
            return this.getBooleanAttribute('require_symbols');
        },
        set: function (value) {
            this._requireSymbols = value;
        },
        enumerable: false,
        configurable: true
    });
    IamAccountPasswordPolicy.prototype.resetRequireSymbols = function () {
        this._requireSymbols = undefined;
    };
    Object.defineProperty(IamAccountPasswordPolicy.prototype, "requireSymbolsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requireSymbols;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamAccountPasswordPolicy.prototype, "requireUppercaseCharacters", {
        get: function () {
            return this.getBooleanAttribute('require_uppercase_characters');
        },
        set: function (value) {
            this._requireUppercaseCharacters = value;
        },
        enumerable: false,
        configurable: true
    });
    IamAccountPasswordPolicy.prototype.resetRequireUppercaseCharacters = function () {
        this._requireUppercaseCharacters = undefined;
    };
    Object.defineProperty(IamAccountPasswordPolicy.prototype, "requireUppercaseCharactersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requireUppercaseCharacters;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    IamAccountPasswordPolicy.prototype.synthesizeAttributes = function () {
        return {
            allow_users_to_change_password: cdktf.booleanToTerraform(this._allowUsersToChangePassword),
            hard_expiry: cdktf.booleanToTerraform(this._hardExpiry),
            max_password_age: cdktf.numberToTerraform(this._maxPasswordAge),
            minimum_password_length: cdktf.numberToTerraform(this._minimumPasswordLength),
            password_reuse_prevention: cdktf.numberToTerraform(this._passwordReusePrevention),
            require_lowercase_characters: cdktf.booleanToTerraform(this._requireLowercaseCharacters),
            require_numbers: cdktf.booleanToTerraform(this._requireNumbers),
            require_symbols: cdktf.booleanToTerraform(this._requireSymbols),
            require_uppercase_characters: cdktf.booleanToTerraform(this._requireUppercaseCharacters)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    IamAccountPasswordPolicy.tfResourceType = "aws_iam_account_password_policy";
    return IamAccountPasswordPolicy;
}(cdktf.TerraformResource));
exports.IamAccountPasswordPolicy = IamAccountPasswordPolicy;
