"use strict";
// https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile.html
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
exports.IamUserLoginProfile = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile.html aws_iam_user_login_profile}
*/
var IamUserLoginProfile = /** @class */ (function (_super) {
    __extends(IamUserLoginProfile, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile.html aws_iam_user_login_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamUserLoginProfileConfig
    */
    function IamUserLoginProfile(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_iam_user_login_profile',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._passwordLength = config.passwordLength;
        _this._passwordResetRequired = config.passwordResetRequired;
        _this._pgpKey = config.pgpKey;
        _this._user = config.user;
        return _this;
    }
    Object.defineProperty(IamUserLoginProfile.prototype, "encryptedPassword", {
        // ==========
        // ATTRIBUTES
        // ==========
        // encrypted_password - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('encrypted_password');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamUserLoginProfile.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamUserLoginProfile.prototype, "keyFingerprint", {
        // key_fingerprint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key_fingerprint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamUserLoginProfile.prototype, "passwordLength", {
        get: function () {
            return this.getNumberAttribute('password_length');
        },
        set: function (value) {
            this._passwordLength = value;
        },
        enumerable: false,
        configurable: true
    });
    IamUserLoginProfile.prototype.resetPasswordLength = function () {
        this._passwordLength = undefined;
    };
    Object.defineProperty(IamUserLoginProfile.prototype, "passwordLengthInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._passwordLength;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamUserLoginProfile.prototype, "passwordResetRequired", {
        get: function () {
            return this.getBooleanAttribute('password_reset_required');
        },
        set: function (value) {
            this._passwordResetRequired = value;
        },
        enumerable: false,
        configurable: true
    });
    IamUserLoginProfile.prototype.resetPasswordResetRequired = function () {
        this._passwordResetRequired = undefined;
    };
    Object.defineProperty(IamUserLoginProfile.prototype, "passwordResetRequiredInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._passwordResetRequired;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamUserLoginProfile.prototype, "pgpKey", {
        get: function () {
            return this.getStringAttribute('pgp_key');
        },
        set: function (value) {
            this._pgpKey = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamUserLoginProfile.prototype, "pgpKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pgpKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamUserLoginProfile.prototype, "user", {
        get: function () {
            return this.getStringAttribute('user');
        },
        set: function (value) {
            this._user = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamUserLoginProfile.prototype, "userInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._user;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    IamUserLoginProfile.prototype.synthesizeAttributes = function () {
        return {
            password_length: cdktf.numberToTerraform(this._passwordLength),
            password_reset_required: cdktf.booleanToTerraform(this._passwordResetRequired),
            pgp_key: cdktf.stringToTerraform(this._pgpKey),
            user: cdktf.stringToTerraform(this._user)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    IamUserLoginProfile.tfResourceType = "aws_iam_user_login_profile";
    return IamUserLoginProfile;
}(cdktf.TerraformResource));
exports.IamUserLoginProfile = IamUserLoginProfile;
