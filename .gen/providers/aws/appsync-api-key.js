"use strict";
// https://www.terraform.io/docs/providers/aws/r/appsync_api_key.html
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
exports.AppsyncApiKey = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_key.html aws_appsync_api_key}
*/
var AppsyncApiKey = /** @class */ (function (_super) {
    __extends(AppsyncApiKey, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appsync_api_key.html aws_appsync_api_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppsyncApiKeyConfig
    */
    function AppsyncApiKey(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_appsync_api_key',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._apiId = config.apiId;
        _this._description = config.description;
        _this._expires = config.expires;
        return _this;
    }
    Object.defineProperty(AppsyncApiKey.prototype, "apiId", {
        get: function () {
            return this.getStringAttribute('api_id');
        },
        set: function (value) {
            this._apiId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncApiKey.prototype, "apiIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._apiId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncApiKey.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    AppsyncApiKey.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(AppsyncApiKey.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncApiKey.prototype, "expires", {
        get: function () {
            return this.getStringAttribute('expires');
        },
        set: function (value) {
            this._expires = value;
        },
        enumerable: false,
        configurable: true
    });
    AppsyncApiKey.prototype.resetExpires = function () {
        this._expires = undefined;
    };
    Object.defineProperty(AppsyncApiKey.prototype, "expiresInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._expires;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncApiKey.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncApiKey.prototype, "key", {
        // key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    AppsyncApiKey.prototype.synthesizeAttributes = function () {
        return {
            api_id: cdktf.stringToTerraform(this._apiId),
            description: cdktf.stringToTerraform(this._description),
            expires: cdktf.stringToTerraform(this._expires)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    AppsyncApiKey.tfResourceType = "aws_appsync_api_key";
    return AppsyncApiKey;
}(cdktf.TerraformResource));
exports.AppsyncApiKey = AppsyncApiKey;
