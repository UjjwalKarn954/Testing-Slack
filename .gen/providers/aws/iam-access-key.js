"use strict";
// https://www.terraform.io/docs/providers/aws/r/iam_access_key.html
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
exports.IamAccessKey = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_access_key.html aws_iam_access_key}
*/
var IamAccessKey = /** @class */ (function (_super) {
    __extends(IamAccessKey, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_access_key.html aws_iam_access_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamAccessKeyConfig
    */
    function IamAccessKey(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_iam_access_key',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._pgpKey = config.pgpKey;
        _this._status = config.status;
        _this._user = config.user;
        return _this;
    }
    Object.defineProperty(IamAccessKey.prototype, "createDate", {
        // ==========
        // ATTRIBUTES
        // ==========
        // create_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('create_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamAccessKey.prototype, "encryptedSecret", {
        // encrypted_secret - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('encrypted_secret');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamAccessKey.prototype, "encryptedSesSmtpPasswordV4", {
        // encrypted_ses_smtp_password_v4 - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('encrypted_ses_smtp_password_v4');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamAccessKey.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamAccessKey.prototype, "keyFingerprint", {
        // key_fingerprint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key_fingerprint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamAccessKey.prototype, "pgpKey", {
        get: function () {
            return this.getStringAttribute('pgp_key');
        },
        set: function (value) {
            this._pgpKey = value;
        },
        enumerable: false,
        configurable: true
    });
    IamAccessKey.prototype.resetPgpKey = function () {
        this._pgpKey = undefined;
    };
    Object.defineProperty(IamAccessKey.prototype, "pgpKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pgpKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamAccessKey.prototype, "secret", {
        // secret - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('secret');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamAccessKey.prototype, "sesSmtpPasswordV4", {
        // ses_smtp_password_v4 - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ses_smtp_password_v4');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamAccessKey.prototype, "status", {
        get: function () {
            return this.getStringAttribute('status');
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    IamAccessKey.prototype.resetStatus = function () {
        this._status = undefined;
    };
    Object.defineProperty(IamAccessKey.prototype, "statusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamAccessKey.prototype, "user", {
        get: function () {
            return this.getStringAttribute('user');
        },
        set: function (value) {
            this._user = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamAccessKey.prototype, "userInput", {
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
    IamAccessKey.prototype.synthesizeAttributes = function () {
        return {
            pgp_key: cdktf.stringToTerraform(this._pgpKey),
            status: cdktf.stringToTerraform(this._status),
            user: cdktf.stringToTerraform(this._user)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    IamAccessKey.tfResourceType = "aws_iam_access_key";
    return IamAccessKey;
}(cdktf.TerraformResource));
exports.IamAccessKey = IamAccessKey;
