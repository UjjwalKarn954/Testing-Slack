"use strict";
// https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission.html
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
exports.SignerSigningProfilePermission = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission.html aws_signer_signing_profile_permission}
*/
var SignerSigningProfilePermission = /** @class */ (function (_super) {
    __extends(SignerSigningProfilePermission, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission.html aws_signer_signing_profile_permission} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SignerSigningProfilePermissionConfig
    */
    function SignerSigningProfilePermission(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_signer_signing_profile_permission',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._action = config.action;
        _this._principal = config.principal;
        _this._profileName = config.profileName;
        _this._profileVersion = config.profileVersion;
        _this._statementId = config.statementId;
        _this._statementIdPrefix = config.statementIdPrefix;
        return _this;
    }
    Object.defineProperty(SignerSigningProfilePermission.prototype, "action", {
        get: function () {
            return this.getStringAttribute('action');
        },
        set: function (value) {
            this._action = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SignerSigningProfilePermission.prototype, "actionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._action;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SignerSigningProfilePermission.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SignerSigningProfilePermission.prototype, "principal", {
        get: function () {
            return this.getStringAttribute('principal');
        },
        set: function (value) {
            this._principal = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SignerSigningProfilePermission.prototype, "principalInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._principal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SignerSigningProfilePermission.prototype, "profileName", {
        get: function () {
            return this.getStringAttribute('profile_name');
        },
        set: function (value) {
            this._profileName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SignerSigningProfilePermission.prototype, "profileNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._profileName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SignerSigningProfilePermission.prototype, "profileVersion", {
        get: function () {
            return this.getStringAttribute('profile_version');
        },
        set: function (value) {
            this._profileVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    SignerSigningProfilePermission.prototype.resetProfileVersion = function () {
        this._profileVersion = undefined;
    };
    Object.defineProperty(SignerSigningProfilePermission.prototype, "profileVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._profileVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SignerSigningProfilePermission.prototype, "statementId", {
        get: function () {
            return this.getStringAttribute('statement_id');
        },
        set: function (value) {
            this._statementId = value;
        },
        enumerable: false,
        configurable: true
    });
    SignerSigningProfilePermission.prototype.resetStatementId = function () {
        this._statementId = undefined;
    };
    Object.defineProperty(SignerSigningProfilePermission.prototype, "statementIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._statementId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SignerSigningProfilePermission.prototype, "statementIdPrefix", {
        get: function () {
            return this.getStringAttribute('statement_id_prefix');
        },
        set: function (value) {
            this._statementIdPrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    SignerSigningProfilePermission.prototype.resetStatementIdPrefix = function () {
        this._statementIdPrefix = undefined;
    };
    Object.defineProperty(SignerSigningProfilePermission.prototype, "statementIdPrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._statementIdPrefix;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SignerSigningProfilePermission.prototype.synthesizeAttributes = function () {
        return {
            action: cdktf.stringToTerraform(this._action),
            principal: cdktf.stringToTerraform(this._principal),
            profile_name: cdktf.stringToTerraform(this._profileName),
            profile_version: cdktf.stringToTerraform(this._profileVersion),
            statement_id: cdktf.stringToTerraform(this._statementId),
            statement_id_prefix: cdktf.stringToTerraform(this._statementIdPrefix)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SignerSigningProfilePermission.tfResourceType = "aws_signer_signing_profile_permission";
    return SignerSigningProfilePermission;
}(cdktf.TerraformResource));
exports.SignerSigningProfilePermission = SignerSigningProfilePermission;
