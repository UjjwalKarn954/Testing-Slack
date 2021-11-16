"use strict";
// https://www.terraform.io/docs/providers/aws/d/ecr_authorization_token.html
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
exports.DataAwsEcrAuthorizationToken = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ecr_authorization_token.html aws_ecr_authorization_token}
*/
var DataAwsEcrAuthorizationToken = /** @class */ (function (_super) {
    __extends(DataAwsEcrAuthorizationToken, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ecr_authorization_token.html aws_ecr_authorization_token} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEcrAuthorizationTokenConfig = {}
    */
    function DataAwsEcrAuthorizationToken(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ecr_authorization_token',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._registryId = config.registryId;
        return _this;
    }
    Object.defineProperty(DataAwsEcrAuthorizationToken.prototype, "authorizationToken", {
        // ==========
        // ATTRIBUTES
        // ==========
        // authorization_token - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('authorization_token');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEcrAuthorizationToken.prototype, "expiresAt", {
        // expires_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expires_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEcrAuthorizationToken.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEcrAuthorizationToken.prototype, "password", {
        // password - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('password');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEcrAuthorizationToken.prototype, "proxyEndpoint", {
        // proxy_endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('proxy_endpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEcrAuthorizationToken.prototype, "registryId", {
        get: function () {
            return this.getStringAttribute('registry_id');
        },
        set: function (value) {
            this._registryId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEcrAuthorizationToken.prototype.resetRegistryId = function () {
        this._registryId = undefined;
    };
    Object.defineProperty(DataAwsEcrAuthorizationToken.prototype, "registryIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._registryId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEcrAuthorizationToken.prototype, "userName", {
        // user_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('user_name');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsEcrAuthorizationToken.prototype.synthesizeAttributes = function () {
        return {
            registry_id: cdktf.stringToTerraform(this._registryId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsEcrAuthorizationToken.tfResourceType = "aws_ecr_authorization_token";
    return DataAwsEcrAuthorizationToken;
}(cdktf.TerraformDataSource));
exports.DataAwsEcrAuthorizationToken = DataAwsEcrAuthorizationToken;
