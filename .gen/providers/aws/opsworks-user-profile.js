"use strict";
// https://www.terraform.io/docs/providers/aws/r/opsworks_user_profile.html
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
exports.OpsworksUserProfile = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_user_profile.html aws_opsworks_user_profile}
*/
var OpsworksUserProfile = /** @class */ (function (_super) {
    __extends(OpsworksUserProfile, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/opsworks_user_profile.html aws_opsworks_user_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OpsworksUserProfileConfig
    */
    function OpsworksUserProfile(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_opsworks_user_profile',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._allowSelfManagement = config.allowSelfManagement;
        _this._sshPublicKey = config.sshPublicKey;
        _this._sshUsername = config.sshUsername;
        _this._userArn = config.userArn;
        return _this;
    }
    Object.defineProperty(OpsworksUserProfile.prototype, "allowSelfManagement", {
        get: function () {
            return this.getBooleanAttribute('allow_self_management');
        },
        set: function (value) {
            this._allowSelfManagement = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksUserProfile.prototype.resetAllowSelfManagement = function () {
        this._allowSelfManagement = undefined;
    };
    Object.defineProperty(OpsworksUserProfile.prototype, "allowSelfManagementInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowSelfManagement;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksUserProfile.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksUserProfile.prototype, "sshPublicKey", {
        get: function () {
            return this.getStringAttribute('ssh_public_key');
        },
        set: function (value) {
            this._sshPublicKey = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksUserProfile.prototype.resetSshPublicKey = function () {
        this._sshPublicKey = undefined;
    };
    Object.defineProperty(OpsworksUserProfile.prototype, "sshPublicKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sshPublicKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksUserProfile.prototype, "sshUsername", {
        get: function () {
            return this.getStringAttribute('ssh_username');
        },
        set: function (value) {
            this._sshUsername = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksUserProfile.prototype, "sshUsernameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sshUsername;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksUserProfile.prototype, "userArn", {
        get: function () {
            return this.getStringAttribute('user_arn');
        },
        set: function (value) {
            this._userArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksUserProfile.prototype, "userArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userArn;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    OpsworksUserProfile.prototype.synthesizeAttributes = function () {
        return {
            allow_self_management: cdktf.booleanToTerraform(this._allowSelfManagement),
            ssh_public_key: cdktf.stringToTerraform(this._sshPublicKey),
            ssh_username: cdktf.stringToTerraform(this._sshUsername),
            user_arn: cdktf.stringToTerraform(this._userArn)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    OpsworksUserProfile.tfResourceType = "aws_opsworks_user_profile";
    return OpsworksUserProfile;
}(cdktf.TerraformResource));
exports.OpsworksUserProfile = OpsworksUserProfile;
