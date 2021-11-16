"use strict";
// https://www.terraform.io/docs/providers/aws/r/codebuild_source_credential.html
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
exports.CodebuildSourceCredential = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/codebuild_source_credential.html aws_codebuild_source_credential}
*/
var CodebuildSourceCredential = /** @class */ (function (_super) {
    __extends(CodebuildSourceCredential, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codebuild_source_credential.html aws_codebuild_source_credential} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodebuildSourceCredentialConfig
    */
    function CodebuildSourceCredential(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_codebuild_source_credential',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._authType = config.authType;
        _this._serverType = config.serverType;
        _this._token = config.token;
        _this._userName = config.userName;
        return _this;
    }
    Object.defineProperty(CodebuildSourceCredential.prototype, "arn", {
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
    Object.defineProperty(CodebuildSourceCredential.prototype, "authType", {
        get: function () {
            return this.getStringAttribute('auth_type');
        },
        set: function (value) {
            this._authType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodebuildSourceCredential.prototype, "authTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodebuildSourceCredential.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodebuildSourceCredential.prototype, "serverType", {
        get: function () {
            return this.getStringAttribute('server_type');
        },
        set: function (value) {
            this._serverType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodebuildSourceCredential.prototype, "serverTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serverType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodebuildSourceCredential.prototype, "token", {
        get: function () {
            return this.getStringAttribute('token');
        },
        set: function (value) {
            this._token = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodebuildSourceCredential.prototype, "tokenInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._token;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodebuildSourceCredential.prototype, "userName", {
        get: function () {
            return this.getStringAttribute('user_name');
        },
        set: function (value) {
            this._userName = value;
        },
        enumerable: false,
        configurable: true
    });
    CodebuildSourceCredential.prototype.resetUserName = function () {
        this._userName = undefined;
    };
    Object.defineProperty(CodebuildSourceCredential.prototype, "userNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userName;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CodebuildSourceCredential.prototype.synthesizeAttributes = function () {
        return {
            auth_type: cdktf.stringToTerraform(this._authType),
            server_type: cdktf.stringToTerraform(this._serverType),
            token: cdktf.stringToTerraform(this._token),
            user_name: cdktf.stringToTerraform(this._userName)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CodebuildSourceCredential.tfResourceType = "aws_codebuild_source_credential";
    return CodebuildSourceCredential;
}(cdktf.TerraformResource));
exports.CodebuildSourceCredential = CodebuildSourceCredential;
