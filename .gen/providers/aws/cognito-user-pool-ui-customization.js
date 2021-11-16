"use strict";
// https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization.html
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
exports.CognitoUserPoolUiCustomization = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization.html aws_cognito_user_pool_ui_customization}
*/
var CognitoUserPoolUiCustomization = /** @class */ (function (_super) {
    __extends(CognitoUserPoolUiCustomization, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization.html aws_cognito_user_pool_ui_customization} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CognitoUserPoolUiCustomizationConfig
    */
    function CognitoUserPoolUiCustomization(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_cognito_user_pool_ui_customization',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._clientId = config.clientId;
        _this._css = config.css;
        _this._imageFile = config.imageFile;
        _this._userPoolId = config.userPoolId;
        return _this;
    }
    Object.defineProperty(CognitoUserPoolUiCustomization.prototype, "clientId", {
        get: function () {
            return this.getStringAttribute('client_id');
        },
        set: function (value) {
            this._clientId = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoUserPoolUiCustomization.prototype.resetClientId = function () {
        this._clientId = undefined;
    };
    Object.defineProperty(CognitoUserPoolUiCustomization.prototype, "clientIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clientId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPoolUiCustomization.prototype, "creationDate", {
        // creation_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('creation_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPoolUiCustomization.prototype, "css", {
        get: function () {
            return this.getStringAttribute('css');
        },
        set: function (value) {
            this._css = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoUserPoolUiCustomization.prototype.resetCss = function () {
        this._css = undefined;
    };
    Object.defineProperty(CognitoUserPoolUiCustomization.prototype, "cssInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._css;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPoolUiCustomization.prototype, "cssVersion", {
        // css_version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('css_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPoolUiCustomization.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPoolUiCustomization.prototype, "imageFile", {
        get: function () {
            return this.getStringAttribute('image_file');
        },
        set: function (value) {
            this._imageFile = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoUserPoolUiCustomization.prototype.resetImageFile = function () {
        this._imageFile = undefined;
    };
    Object.defineProperty(CognitoUserPoolUiCustomization.prototype, "imageFileInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._imageFile;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPoolUiCustomization.prototype, "imageUrl", {
        // image_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('image_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPoolUiCustomization.prototype, "lastModifiedDate", {
        // last_modified_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_modified_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPoolUiCustomization.prototype, "userPoolId", {
        get: function () {
            return this.getStringAttribute('user_pool_id');
        },
        set: function (value) {
            this._userPoolId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPoolUiCustomization.prototype, "userPoolIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userPoolId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CognitoUserPoolUiCustomization.prototype.synthesizeAttributes = function () {
        return {
            client_id: cdktf.stringToTerraform(this._clientId),
            css: cdktf.stringToTerraform(this._css),
            image_file: cdktf.stringToTerraform(this._imageFile),
            user_pool_id: cdktf.stringToTerraform(this._userPoolId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CognitoUserPoolUiCustomization.tfResourceType = "aws_cognito_user_pool_ui_customization";
    return CognitoUserPoolUiCustomization;
}(cdktf.TerraformResource));
exports.CognitoUserPoolUiCustomization = CognitoUserPoolUiCustomization;
