"use strict";
// https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html
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
exports.CognitoUserPoolClient = void 0;
var cdktf = require("cdktf");
function cognitoUserPoolClientAnalyticsConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        application_arn: cdktf.stringToTerraform(struct.applicationArn),
        application_id: cdktf.stringToTerraform(struct.applicationId),
        external_id: cdktf.stringToTerraform(struct.externalId),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        user_data_shared: cdktf.booleanToTerraform(struct.userDataShared)
    };
}
function cognitoUserPoolClientTokenValidityUnitsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        access_token: cdktf.stringToTerraform(struct.accessToken),
        id_token: cdktf.stringToTerraform(struct.idToken),
        refresh_token: cdktf.stringToTerraform(struct.refreshToken)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html aws_cognito_user_pool_client}
*/
var CognitoUserPoolClient = /** @class */ (function (_super) {
    __extends(CognitoUserPoolClient, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html aws_cognito_user_pool_client} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CognitoUserPoolClientConfig
    */
    function CognitoUserPoolClient(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_cognito_user_pool_client',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._accessTokenValidity = config.accessTokenValidity;
        _this._allowedOauthFlows = config.allowedOauthFlows;
        _this._allowedOauthFlowsUserPoolClient = config.allowedOauthFlowsUserPoolClient;
        _this._allowedOauthScopes = config.allowedOauthScopes;
        _this._callbackUrls = config.callbackUrls;
        _this._defaultRedirectUri = config.defaultRedirectUri;
        _this._enableTokenRevocation = config.enableTokenRevocation;
        _this._explicitAuthFlows = config.explicitAuthFlows;
        _this._generateSecret = config.generateSecret;
        _this._idTokenValidity = config.idTokenValidity;
        _this._logoutUrls = config.logoutUrls;
        _this._name = config.name;
        _this._preventUserExistenceErrors = config.preventUserExistenceErrors;
        _this._readAttributes = config.readAttributes;
        _this._refreshTokenValidity = config.refreshTokenValidity;
        _this._supportedIdentityProviders = config.supportedIdentityProviders;
        _this._userPoolId = config.userPoolId;
        _this._writeAttributes = config.writeAttributes;
        _this._analyticsConfiguration = config.analyticsConfiguration;
        _this._tokenValidityUnits = config.tokenValidityUnits;
        return _this;
    }
    Object.defineProperty(CognitoUserPoolClient.prototype, "accessTokenValidity", {
        get: function () {
            return this.getNumberAttribute('access_token_validity');
        },
        set: function (value) {
            this._accessTokenValidity = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoUserPoolClient.prototype.resetAccessTokenValidity = function () {
        this._accessTokenValidity = undefined;
    };
    Object.defineProperty(CognitoUserPoolClient.prototype, "accessTokenValidityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessTokenValidity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPoolClient.prototype, "allowedOauthFlows", {
        get: function () {
            return this.getListAttribute('allowed_oauth_flows');
        },
        set: function (value) {
            this._allowedOauthFlows = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoUserPoolClient.prototype.resetAllowedOauthFlows = function () {
        this._allowedOauthFlows = undefined;
    };
    Object.defineProperty(CognitoUserPoolClient.prototype, "allowedOauthFlowsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowedOauthFlows;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPoolClient.prototype, "allowedOauthFlowsUserPoolClient", {
        get: function () {
            return this.getBooleanAttribute('allowed_oauth_flows_user_pool_client');
        },
        set: function (value) {
            this._allowedOauthFlowsUserPoolClient = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoUserPoolClient.prototype.resetAllowedOauthFlowsUserPoolClient = function () {
        this._allowedOauthFlowsUserPoolClient = undefined;
    };
    Object.defineProperty(CognitoUserPoolClient.prototype, "allowedOauthFlowsUserPoolClientInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowedOauthFlowsUserPoolClient;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPoolClient.prototype, "allowedOauthScopes", {
        get: function () {
            return this.getListAttribute('allowed_oauth_scopes');
        },
        set: function (value) {
            this._allowedOauthScopes = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoUserPoolClient.prototype.resetAllowedOauthScopes = function () {
        this._allowedOauthScopes = undefined;
    };
    Object.defineProperty(CognitoUserPoolClient.prototype, "allowedOauthScopesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowedOauthScopes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPoolClient.prototype, "callbackUrls", {
        get: function () {
            return this.getListAttribute('callback_urls');
        },
        set: function (value) {
            this._callbackUrls = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoUserPoolClient.prototype.resetCallbackUrls = function () {
        this._callbackUrls = undefined;
    };
    Object.defineProperty(CognitoUserPoolClient.prototype, "callbackUrlsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._callbackUrls;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPoolClient.prototype, "clientSecret", {
        // client_secret - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('client_secret');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPoolClient.prototype, "defaultRedirectUri", {
        get: function () {
            return this.getStringAttribute('default_redirect_uri');
        },
        set: function (value) {
            this._defaultRedirectUri = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoUserPoolClient.prototype.resetDefaultRedirectUri = function () {
        this._defaultRedirectUri = undefined;
    };
    Object.defineProperty(CognitoUserPoolClient.prototype, "defaultRedirectUriInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultRedirectUri;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPoolClient.prototype, "enableTokenRevocation", {
        get: function () {
            return this.getBooleanAttribute('enable_token_revocation');
        },
        set: function (value) {
            this._enableTokenRevocation = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoUserPoolClient.prototype.resetEnableTokenRevocation = function () {
        this._enableTokenRevocation = undefined;
    };
    Object.defineProperty(CognitoUserPoolClient.prototype, "enableTokenRevocationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enableTokenRevocation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPoolClient.prototype, "explicitAuthFlows", {
        get: function () {
            return this.getListAttribute('explicit_auth_flows');
        },
        set: function (value) {
            this._explicitAuthFlows = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoUserPoolClient.prototype.resetExplicitAuthFlows = function () {
        this._explicitAuthFlows = undefined;
    };
    Object.defineProperty(CognitoUserPoolClient.prototype, "explicitAuthFlowsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._explicitAuthFlows;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPoolClient.prototype, "generateSecret", {
        get: function () {
            return this.getBooleanAttribute('generate_secret');
        },
        set: function (value) {
            this._generateSecret = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoUserPoolClient.prototype.resetGenerateSecret = function () {
        this._generateSecret = undefined;
    };
    Object.defineProperty(CognitoUserPoolClient.prototype, "generateSecretInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._generateSecret;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPoolClient.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPoolClient.prototype, "idTokenValidity", {
        get: function () {
            return this.getNumberAttribute('id_token_validity');
        },
        set: function (value) {
            this._idTokenValidity = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoUserPoolClient.prototype.resetIdTokenValidity = function () {
        this._idTokenValidity = undefined;
    };
    Object.defineProperty(CognitoUserPoolClient.prototype, "idTokenValidityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._idTokenValidity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPoolClient.prototype, "logoutUrls", {
        get: function () {
            return this.getListAttribute('logout_urls');
        },
        set: function (value) {
            this._logoutUrls = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoUserPoolClient.prototype.resetLogoutUrls = function () {
        this._logoutUrls = undefined;
    };
    Object.defineProperty(CognitoUserPoolClient.prototype, "logoutUrlsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._logoutUrls;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPoolClient.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPoolClient.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPoolClient.prototype, "preventUserExistenceErrors", {
        get: function () {
            return this.getStringAttribute('prevent_user_existence_errors');
        },
        set: function (value) {
            this._preventUserExistenceErrors = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoUserPoolClient.prototype.resetPreventUserExistenceErrors = function () {
        this._preventUserExistenceErrors = undefined;
    };
    Object.defineProperty(CognitoUserPoolClient.prototype, "preventUserExistenceErrorsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._preventUserExistenceErrors;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPoolClient.prototype, "readAttributes", {
        get: function () {
            return this.getListAttribute('read_attributes');
        },
        set: function (value) {
            this._readAttributes = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoUserPoolClient.prototype.resetReadAttributes = function () {
        this._readAttributes = undefined;
    };
    Object.defineProperty(CognitoUserPoolClient.prototype, "readAttributesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._readAttributes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPoolClient.prototype, "refreshTokenValidity", {
        get: function () {
            return this.getNumberAttribute('refresh_token_validity');
        },
        set: function (value) {
            this._refreshTokenValidity = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoUserPoolClient.prototype.resetRefreshTokenValidity = function () {
        this._refreshTokenValidity = undefined;
    };
    Object.defineProperty(CognitoUserPoolClient.prototype, "refreshTokenValidityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._refreshTokenValidity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPoolClient.prototype, "supportedIdentityProviders", {
        get: function () {
            return this.getListAttribute('supported_identity_providers');
        },
        set: function (value) {
            this._supportedIdentityProviders = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoUserPoolClient.prototype.resetSupportedIdentityProviders = function () {
        this._supportedIdentityProviders = undefined;
    };
    Object.defineProperty(CognitoUserPoolClient.prototype, "supportedIdentityProvidersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._supportedIdentityProviders;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPoolClient.prototype, "userPoolId", {
        get: function () {
            return this.getStringAttribute('user_pool_id');
        },
        set: function (value) {
            this._userPoolId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPoolClient.prototype, "userPoolIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userPoolId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPoolClient.prototype, "writeAttributes", {
        get: function () {
            return this.getListAttribute('write_attributes');
        },
        set: function (value) {
            this._writeAttributes = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoUserPoolClient.prototype.resetWriteAttributes = function () {
        this._writeAttributes = undefined;
    };
    Object.defineProperty(CognitoUserPoolClient.prototype, "writeAttributesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._writeAttributes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPoolClient.prototype, "analyticsConfiguration", {
        get: function () {
            return this.interpolationForAttribute('analytics_configuration');
        },
        set: function (value) {
            this._analyticsConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoUserPoolClient.prototype.resetAnalyticsConfiguration = function () {
        this._analyticsConfiguration = undefined;
    };
    Object.defineProperty(CognitoUserPoolClient.prototype, "analyticsConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._analyticsConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPoolClient.prototype, "tokenValidityUnits", {
        get: function () {
            return this.interpolationForAttribute('token_validity_units');
        },
        set: function (value) {
            this._tokenValidityUnits = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoUserPoolClient.prototype.resetTokenValidityUnits = function () {
        this._tokenValidityUnits = undefined;
    };
    Object.defineProperty(CognitoUserPoolClient.prototype, "tokenValidityUnitsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tokenValidityUnits;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CognitoUserPoolClient.prototype.synthesizeAttributes = function () {
        return {
            access_token_validity: cdktf.numberToTerraform(this._accessTokenValidity),
            allowed_oauth_flows: cdktf.listMapper(cdktf.stringToTerraform)(this._allowedOauthFlows),
            allowed_oauth_flows_user_pool_client: cdktf.booleanToTerraform(this._allowedOauthFlowsUserPoolClient),
            allowed_oauth_scopes: cdktf.listMapper(cdktf.stringToTerraform)(this._allowedOauthScopes),
            callback_urls: cdktf.listMapper(cdktf.stringToTerraform)(this._callbackUrls),
            default_redirect_uri: cdktf.stringToTerraform(this._defaultRedirectUri),
            enable_token_revocation: cdktf.booleanToTerraform(this._enableTokenRevocation),
            explicit_auth_flows: cdktf.listMapper(cdktf.stringToTerraform)(this._explicitAuthFlows),
            generate_secret: cdktf.booleanToTerraform(this._generateSecret),
            id_token_validity: cdktf.numberToTerraform(this._idTokenValidity),
            logout_urls: cdktf.listMapper(cdktf.stringToTerraform)(this._logoutUrls),
            name: cdktf.stringToTerraform(this._name),
            prevent_user_existence_errors: cdktf.stringToTerraform(this._preventUserExistenceErrors),
            read_attributes: cdktf.listMapper(cdktf.stringToTerraform)(this._readAttributes),
            refresh_token_validity: cdktf.numberToTerraform(this._refreshTokenValidity),
            supported_identity_providers: cdktf.listMapper(cdktf.stringToTerraform)(this._supportedIdentityProviders),
            user_pool_id: cdktf.stringToTerraform(this._userPoolId),
            write_attributes: cdktf.listMapper(cdktf.stringToTerraform)(this._writeAttributes),
            analytics_configuration: cdktf.listMapper(cognitoUserPoolClientAnalyticsConfigurationToTerraform)(this._analyticsConfiguration),
            token_validity_units: cdktf.listMapper(cognitoUserPoolClientTokenValidityUnitsToTerraform)(this._tokenValidityUnits)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CognitoUserPoolClient.tfResourceType = "aws_cognito_user_pool_client";
    return CognitoUserPoolClient;
}(cdktf.TerraformResource));
exports.CognitoUserPoolClient = CognitoUserPoolClient;
