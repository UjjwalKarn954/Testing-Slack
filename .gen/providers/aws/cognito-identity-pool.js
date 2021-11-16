"use strict";
// https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool.html
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
exports.CognitoIdentityPool = void 0;
var cdktf = require("cdktf");
function cognitoIdentityPoolCognitoIdentityProvidersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        client_id: cdktf.stringToTerraform(struct.clientId),
        provider_name: cdktf.stringToTerraform(struct.providerName),
        server_side_token_check: cdktf.booleanToTerraform(struct.serverSideTokenCheck)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool.html aws_cognito_identity_pool}
*/
var CognitoIdentityPool = /** @class */ (function (_super) {
    __extends(CognitoIdentityPool, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool.html aws_cognito_identity_pool} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CognitoIdentityPoolConfig
    */
    function CognitoIdentityPool(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_cognito_identity_pool',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._allowClassicFlow = config.allowClassicFlow;
        _this._allowUnauthenticatedIdentities = config.allowUnauthenticatedIdentities;
        _this._developerProviderName = config.developerProviderName;
        _this._identityPoolName = config.identityPoolName;
        _this._openidConnectProviderArns = config.openidConnectProviderArns;
        _this._samlProviderArns = config.samlProviderArns;
        _this._supportedLoginProviders = config.supportedLoginProviders;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._cognitoIdentityProviders = config.cognitoIdentityProviders;
        return _this;
    }
    Object.defineProperty(CognitoIdentityPool.prototype, "allowClassicFlow", {
        get: function () {
            return this.getBooleanAttribute('allow_classic_flow');
        },
        set: function (value) {
            this._allowClassicFlow = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoIdentityPool.prototype.resetAllowClassicFlow = function () {
        this._allowClassicFlow = undefined;
    };
    Object.defineProperty(CognitoIdentityPool.prototype, "allowClassicFlowInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowClassicFlow;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoIdentityPool.prototype, "allowUnauthenticatedIdentities", {
        get: function () {
            return this.getBooleanAttribute('allow_unauthenticated_identities');
        },
        set: function (value) {
            this._allowUnauthenticatedIdentities = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoIdentityPool.prototype.resetAllowUnauthenticatedIdentities = function () {
        this._allowUnauthenticatedIdentities = undefined;
    };
    Object.defineProperty(CognitoIdentityPool.prototype, "allowUnauthenticatedIdentitiesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowUnauthenticatedIdentities;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoIdentityPool.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoIdentityPool.prototype, "developerProviderName", {
        get: function () {
            return this.getStringAttribute('developer_provider_name');
        },
        set: function (value) {
            this._developerProviderName = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoIdentityPool.prototype.resetDeveloperProviderName = function () {
        this._developerProviderName = undefined;
    };
    Object.defineProperty(CognitoIdentityPool.prototype, "developerProviderNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._developerProviderName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoIdentityPool.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoIdentityPool.prototype, "identityPoolName", {
        get: function () {
            return this.getStringAttribute('identity_pool_name');
        },
        set: function (value) {
            this._identityPoolName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoIdentityPool.prototype, "identityPoolNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityPoolName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoIdentityPool.prototype, "openidConnectProviderArns", {
        get: function () {
            return this.getListAttribute('openid_connect_provider_arns');
        },
        set: function (value) {
            this._openidConnectProviderArns = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoIdentityPool.prototype.resetOpenidConnectProviderArns = function () {
        this._openidConnectProviderArns = undefined;
    };
    Object.defineProperty(CognitoIdentityPool.prototype, "openidConnectProviderArnsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._openidConnectProviderArns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoIdentityPool.prototype, "samlProviderArns", {
        get: function () {
            return this.getListAttribute('saml_provider_arns');
        },
        set: function (value) {
            this._samlProviderArns = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoIdentityPool.prototype.resetSamlProviderArns = function () {
        this._samlProviderArns = undefined;
    };
    Object.defineProperty(CognitoIdentityPool.prototype, "samlProviderArnsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._samlProviderArns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoIdentityPool.prototype, "supportedLoginProviders", {
        get: function () {
            return this.interpolationForAttribute('supported_login_providers');
        },
        set: function (value) {
            this._supportedLoginProviders = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoIdentityPool.prototype.resetSupportedLoginProviders = function () {
        this._supportedLoginProviders = undefined;
    };
    Object.defineProperty(CognitoIdentityPool.prototype, "supportedLoginProvidersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._supportedLoginProviders;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoIdentityPool.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoIdentityPool.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(CognitoIdentityPool.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoIdentityPool.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoIdentityPool.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(CognitoIdentityPool.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoIdentityPool.prototype, "cognitoIdentityProviders", {
        get: function () {
            return this.interpolationForAttribute('cognito_identity_providers');
        },
        set: function (value) {
            this._cognitoIdentityProviders = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoIdentityPool.prototype.resetCognitoIdentityProviders = function () {
        this._cognitoIdentityProviders = undefined;
    };
    Object.defineProperty(CognitoIdentityPool.prototype, "cognitoIdentityProvidersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cognitoIdentityProviders;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CognitoIdentityPool.prototype.synthesizeAttributes = function () {
        return {
            allow_classic_flow: cdktf.booleanToTerraform(this._allowClassicFlow),
            allow_unauthenticated_identities: cdktf.booleanToTerraform(this._allowUnauthenticatedIdentities),
            developer_provider_name: cdktf.stringToTerraform(this._developerProviderName),
            identity_pool_name: cdktf.stringToTerraform(this._identityPoolName),
            openid_connect_provider_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._openidConnectProviderArns),
            saml_provider_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._samlProviderArns),
            supported_login_providers: cdktf.hashMapper(cdktf.anyToTerraform)(this._supportedLoginProviders),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            cognito_identity_providers: cdktf.listMapper(cognitoIdentityPoolCognitoIdentityProvidersToTerraform)(this._cognitoIdentityProviders)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CognitoIdentityPool.tfResourceType = "aws_cognito_identity_pool";
    return CognitoIdentityPool;
}(cdktf.TerraformResource));
exports.CognitoIdentityPool = CognitoIdentityPool;
