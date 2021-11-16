"use strict";
// https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html
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
exports.SagemakerWorkforce = void 0;
var cdktf = require("cdktf");
function sagemakerWorkforceCognitoConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        client_id: cdktf.stringToTerraform(struct.clientId),
        user_pool: cdktf.stringToTerraform(struct.userPool)
    };
}
function sagemakerWorkforceOidcConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        authorization_endpoint: cdktf.stringToTerraform(struct.authorizationEndpoint),
        client_id: cdktf.stringToTerraform(struct.clientId),
        client_secret: cdktf.stringToTerraform(struct.clientSecret),
        issuer: cdktf.stringToTerraform(struct.issuer),
        jwks_uri: cdktf.stringToTerraform(struct.jwksUri),
        logout_endpoint: cdktf.stringToTerraform(struct.logoutEndpoint),
        token_endpoint: cdktf.stringToTerraform(struct.tokenEndpoint),
        user_info_endpoint: cdktf.stringToTerraform(struct.userInfoEndpoint)
    };
}
function sagemakerWorkforceSourceIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cidrs: cdktf.listMapper(cdktf.stringToTerraform)(struct.cidrs)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html aws_sagemaker_workforce}
*/
var SagemakerWorkforce = /** @class */ (function (_super) {
    __extends(SagemakerWorkforce, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html aws_sagemaker_workforce} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerWorkforceConfig
    */
    function SagemakerWorkforce(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_sagemaker_workforce',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._workforceName = config.workforceName;
        _this._cognitoConfig = config.cognitoConfig;
        _this._oidcConfig = config.oidcConfig;
        _this._sourceIpConfig = config.sourceIpConfig;
        return _this;
    }
    Object.defineProperty(SagemakerWorkforce.prototype, "arn", {
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
    Object.defineProperty(SagemakerWorkforce.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerWorkforce.prototype, "subdomain", {
        // subdomain - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('subdomain');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerWorkforce.prototype, "workforceName", {
        get: function () {
            return this.getStringAttribute('workforce_name');
        },
        set: function (value) {
            this._workforceName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerWorkforce.prototype, "workforceNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._workforceName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerWorkforce.prototype, "cognitoConfig", {
        get: function () {
            return this.interpolationForAttribute('cognito_config');
        },
        set: function (value) {
            this._cognitoConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerWorkforce.prototype.resetCognitoConfig = function () {
        this._cognitoConfig = undefined;
    };
    Object.defineProperty(SagemakerWorkforce.prototype, "cognitoConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cognitoConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerWorkforce.prototype, "oidcConfig", {
        get: function () {
            return this.interpolationForAttribute('oidc_config');
        },
        set: function (value) {
            this._oidcConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerWorkforce.prototype.resetOidcConfig = function () {
        this._oidcConfig = undefined;
    };
    Object.defineProperty(SagemakerWorkforce.prototype, "oidcConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._oidcConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerWorkforce.prototype, "sourceIpConfig", {
        get: function () {
            return this.interpolationForAttribute('source_ip_config');
        },
        set: function (value) {
            this._sourceIpConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerWorkforce.prototype.resetSourceIpConfig = function () {
        this._sourceIpConfig = undefined;
    };
    Object.defineProperty(SagemakerWorkforce.prototype, "sourceIpConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sourceIpConfig;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SagemakerWorkforce.prototype.synthesizeAttributes = function () {
        return {
            workforce_name: cdktf.stringToTerraform(this._workforceName),
            cognito_config: cdktf.listMapper(sagemakerWorkforceCognitoConfigToTerraform)(this._cognitoConfig),
            oidc_config: cdktf.listMapper(sagemakerWorkforceOidcConfigToTerraform)(this._oidcConfig),
            source_ip_config: cdktf.listMapper(sagemakerWorkforceSourceIpConfigToTerraform)(this._sourceIpConfig)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SagemakerWorkforce.tfResourceType = "aws_sagemaker_workforce";
    return SagemakerWorkforce;
}(cdktf.TerraformResource));
exports.SagemakerWorkforce = SagemakerWorkforce;
