"use strict";
// https://www.terraform.io/docs/providers/aws/r/iam_user_ssh_key.html
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
exports.IamUserSshKey = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_user_ssh_key.html aws_iam_user_ssh_key}
*/
var IamUserSshKey = /** @class */ (function (_super) {
    __extends(IamUserSshKey, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_user_ssh_key.html aws_iam_user_ssh_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamUserSshKeyConfig
    */
    function IamUserSshKey(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_iam_user_ssh_key',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._encoding = config.encoding;
        _this._publicKey = config.publicKey;
        _this._status = config.status;
        _this._username = config.username;
        return _this;
    }
    Object.defineProperty(IamUserSshKey.prototype, "encoding", {
        get: function () {
            return this.getStringAttribute('encoding');
        },
        set: function (value) {
            this._encoding = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamUserSshKey.prototype, "encodingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._encoding;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamUserSshKey.prototype, "fingerprint", {
        // fingerprint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('fingerprint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamUserSshKey.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamUserSshKey.prototype, "publicKey", {
        get: function () {
            return this.getStringAttribute('public_key');
        },
        set: function (value) {
            this._publicKey = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamUserSshKey.prototype, "publicKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._publicKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamUserSshKey.prototype, "sshPublicKeyId", {
        // ssh_public_key_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ssh_public_key_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamUserSshKey.prototype, "status", {
        get: function () {
            return this.getStringAttribute('status');
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    IamUserSshKey.prototype.resetStatus = function () {
        this._status = undefined;
    };
    Object.defineProperty(IamUserSshKey.prototype, "statusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamUserSshKey.prototype, "username", {
        get: function () {
            return this.getStringAttribute('username');
        },
        set: function (value) {
            this._username = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamUserSshKey.prototype, "usernameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._username;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    IamUserSshKey.prototype.synthesizeAttributes = function () {
        return {
            encoding: cdktf.stringToTerraform(this._encoding),
            public_key: cdktf.stringToTerraform(this._publicKey),
            status: cdktf.stringToTerraform(this._status),
            username: cdktf.stringToTerraform(this._username)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    IamUserSshKey.tfResourceType = "aws_iam_user_ssh_key";
    return IamUserSshKey;
}(cdktf.TerraformResource));
exports.IamUserSshKey = IamUserSshKey;
