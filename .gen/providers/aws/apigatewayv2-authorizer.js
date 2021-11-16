"use strict";
// https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer.html
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
exports.Apigatewayv2Authorizer = void 0;
var cdktf = require("cdktf");
function apigatewayv2AuthorizerJwtConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        audience: cdktf.listMapper(cdktf.stringToTerraform)(struct.audience),
        issuer: cdktf.stringToTerraform(struct.issuer)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer.html aws_apigatewayv2_authorizer}
*/
var Apigatewayv2Authorizer = /** @class */ (function (_super) {
    __extends(Apigatewayv2Authorizer, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer.html aws_apigatewayv2_authorizer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Apigatewayv2AuthorizerConfig
    */
    function Apigatewayv2Authorizer(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_apigatewayv2_authorizer',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._apiId = config.apiId;
        _this._authorizerCredentialsArn = config.authorizerCredentialsArn;
        _this._authorizerPayloadFormatVersion = config.authorizerPayloadFormatVersion;
        _this._authorizerResultTtlInSeconds = config.authorizerResultTtlInSeconds;
        _this._authorizerType = config.authorizerType;
        _this._authorizerUri = config.authorizerUri;
        _this._enableSimpleResponses = config.enableSimpleResponses;
        _this._identitySources = config.identitySources;
        _this._name = config.name;
        _this._jwtConfiguration = config.jwtConfiguration;
        return _this;
    }
    Object.defineProperty(Apigatewayv2Authorizer.prototype, "apiId", {
        get: function () {
            return this.getStringAttribute('api_id');
        },
        set: function (value) {
            this._apiId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Authorizer.prototype, "apiIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._apiId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Authorizer.prototype, "authorizerCredentialsArn", {
        get: function () {
            return this.getStringAttribute('authorizer_credentials_arn');
        },
        set: function (value) {
            this._authorizerCredentialsArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Authorizer.prototype.resetAuthorizerCredentialsArn = function () {
        this._authorizerCredentialsArn = undefined;
    };
    Object.defineProperty(Apigatewayv2Authorizer.prototype, "authorizerCredentialsArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authorizerCredentialsArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Authorizer.prototype, "authorizerPayloadFormatVersion", {
        get: function () {
            return this.getStringAttribute('authorizer_payload_format_version');
        },
        set: function (value) {
            this._authorizerPayloadFormatVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Authorizer.prototype.resetAuthorizerPayloadFormatVersion = function () {
        this._authorizerPayloadFormatVersion = undefined;
    };
    Object.defineProperty(Apigatewayv2Authorizer.prototype, "authorizerPayloadFormatVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authorizerPayloadFormatVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Authorizer.prototype, "authorizerResultTtlInSeconds", {
        get: function () {
            return this.getNumberAttribute('authorizer_result_ttl_in_seconds');
        },
        set: function (value) {
            this._authorizerResultTtlInSeconds = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Authorizer.prototype.resetAuthorizerResultTtlInSeconds = function () {
        this._authorizerResultTtlInSeconds = undefined;
    };
    Object.defineProperty(Apigatewayv2Authorizer.prototype, "authorizerResultTtlInSecondsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authorizerResultTtlInSeconds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Authorizer.prototype, "authorizerType", {
        get: function () {
            return this.getStringAttribute('authorizer_type');
        },
        set: function (value) {
            this._authorizerType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Authorizer.prototype, "authorizerTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authorizerType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Authorizer.prototype, "authorizerUri", {
        get: function () {
            return this.getStringAttribute('authorizer_uri');
        },
        set: function (value) {
            this._authorizerUri = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Authorizer.prototype.resetAuthorizerUri = function () {
        this._authorizerUri = undefined;
    };
    Object.defineProperty(Apigatewayv2Authorizer.prototype, "authorizerUriInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authorizerUri;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Authorizer.prototype, "enableSimpleResponses", {
        get: function () {
            return this.getBooleanAttribute('enable_simple_responses');
        },
        set: function (value) {
            this._enableSimpleResponses = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Authorizer.prototype.resetEnableSimpleResponses = function () {
        this._enableSimpleResponses = undefined;
    };
    Object.defineProperty(Apigatewayv2Authorizer.prototype, "enableSimpleResponsesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enableSimpleResponses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Authorizer.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Authorizer.prototype, "identitySources", {
        get: function () {
            return this.getListAttribute('identity_sources');
        },
        set: function (value) {
            this._identitySources = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Authorizer.prototype.resetIdentitySources = function () {
        this._identitySources = undefined;
    };
    Object.defineProperty(Apigatewayv2Authorizer.prototype, "identitySourcesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identitySources;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Authorizer.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Authorizer.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Authorizer.prototype, "jwtConfiguration", {
        get: function () {
            return this.interpolationForAttribute('jwt_configuration');
        },
        set: function (value) {
            this._jwtConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Authorizer.prototype.resetJwtConfiguration = function () {
        this._jwtConfiguration = undefined;
    };
    Object.defineProperty(Apigatewayv2Authorizer.prototype, "jwtConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._jwtConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Apigatewayv2Authorizer.prototype.synthesizeAttributes = function () {
        return {
            api_id: cdktf.stringToTerraform(this._apiId),
            authorizer_credentials_arn: cdktf.stringToTerraform(this._authorizerCredentialsArn),
            authorizer_payload_format_version: cdktf.stringToTerraform(this._authorizerPayloadFormatVersion),
            authorizer_result_ttl_in_seconds: cdktf.numberToTerraform(this._authorizerResultTtlInSeconds),
            authorizer_type: cdktf.stringToTerraform(this._authorizerType),
            authorizer_uri: cdktf.stringToTerraform(this._authorizerUri),
            enable_simple_responses: cdktf.booleanToTerraform(this._enableSimpleResponses),
            identity_sources: cdktf.listMapper(cdktf.stringToTerraform)(this._identitySources),
            name: cdktf.stringToTerraform(this._name),
            jwt_configuration: cdktf.listMapper(apigatewayv2AuthorizerJwtConfigurationToTerraform)(this._jwtConfiguration)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Apigatewayv2Authorizer.tfResourceType = "aws_apigatewayv2_authorizer";
    return Apigatewayv2Authorizer;
}(cdktf.TerraformResource));
exports.Apigatewayv2Authorizer = Apigatewayv2Authorizer;
