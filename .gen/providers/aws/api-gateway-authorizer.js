"use strict";
// https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer.html
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
exports.ApiGatewayAuthorizer = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer.html aws_api_gateway_authorizer}
*/
var ApiGatewayAuthorizer = /** @class */ (function (_super) {
    __extends(ApiGatewayAuthorizer, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer.html aws_api_gateway_authorizer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayAuthorizerConfig
    */
    function ApiGatewayAuthorizer(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_api_gateway_authorizer',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._authorizerCredentials = config.authorizerCredentials;
        _this._authorizerResultTtlInSeconds = config.authorizerResultTtlInSeconds;
        _this._authorizerUri = config.authorizerUri;
        _this._identitySource = config.identitySource;
        _this._identityValidationExpression = config.identityValidationExpression;
        _this._name = config.name;
        _this._providerArns = config.providerArns;
        _this._restApiId = config.restApiId;
        _this._type = config.type;
        return _this;
    }
    Object.defineProperty(ApiGatewayAuthorizer.prototype, "authorizerCredentials", {
        get: function () {
            return this.getStringAttribute('authorizer_credentials');
        },
        set: function (value) {
            this._authorizerCredentials = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayAuthorizer.prototype.resetAuthorizerCredentials = function () {
        this._authorizerCredentials = undefined;
    };
    Object.defineProperty(ApiGatewayAuthorizer.prototype, "authorizerCredentialsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authorizerCredentials;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayAuthorizer.prototype, "authorizerResultTtlInSeconds", {
        get: function () {
            return this.getNumberAttribute('authorizer_result_ttl_in_seconds');
        },
        set: function (value) {
            this._authorizerResultTtlInSeconds = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayAuthorizer.prototype.resetAuthorizerResultTtlInSeconds = function () {
        this._authorizerResultTtlInSeconds = undefined;
    };
    Object.defineProperty(ApiGatewayAuthorizer.prototype, "authorizerResultTtlInSecondsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authorizerResultTtlInSeconds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayAuthorizer.prototype, "authorizerUri", {
        get: function () {
            return this.getStringAttribute('authorizer_uri');
        },
        set: function (value) {
            this._authorizerUri = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayAuthorizer.prototype.resetAuthorizerUri = function () {
        this._authorizerUri = undefined;
    };
    Object.defineProperty(ApiGatewayAuthorizer.prototype, "authorizerUriInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authorizerUri;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayAuthorizer.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayAuthorizer.prototype, "identitySource", {
        get: function () {
            return this.getStringAttribute('identity_source');
        },
        set: function (value) {
            this._identitySource = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayAuthorizer.prototype.resetIdentitySource = function () {
        this._identitySource = undefined;
    };
    Object.defineProperty(ApiGatewayAuthorizer.prototype, "identitySourceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identitySource;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayAuthorizer.prototype, "identityValidationExpression", {
        get: function () {
            return this.getStringAttribute('identity_validation_expression');
        },
        set: function (value) {
            this._identityValidationExpression = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayAuthorizer.prototype.resetIdentityValidationExpression = function () {
        this._identityValidationExpression = undefined;
    };
    Object.defineProperty(ApiGatewayAuthorizer.prototype, "identityValidationExpressionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityValidationExpression;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayAuthorizer.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayAuthorizer.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayAuthorizer.prototype, "providerArns", {
        get: function () {
            return this.getListAttribute('provider_arns');
        },
        set: function (value) {
            this._providerArns = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayAuthorizer.prototype.resetProviderArns = function () {
        this._providerArns = undefined;
    };
    Object.defineProperty(ApiGatewayAuthorizer.prototype, "providerArnsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._providerArns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayAuthorizer.prototype, "restApiId", {
        get: function () {
            return this.getStringAttribute('rest_api_id');
        },
        set: function (value) {
            this._restApiId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayAuthorizer.prototype, "restApiIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._restApiId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayAuthorizer.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayAuthorizer.prototype.resetType = function () {
        this._type = undefined;
    };
    Object.defineProperty(ApiGatewayAuthorizer.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ApiGatewayAuthorizer.prototype.synthesizeAttributes = function () {
        return {
            authorizer_credentials: cdktf.stringToTerraform(this._authorizerCredentials),
            authorizer_result_ttl_in_seconds: cdktf.numberToTerraform(this._authorizerResultTtlInSeconds),
            authorizer_uri: cdktf.stringToTerraform(this._authorizerUri),
            identity_source: cdktf.stringToTerraform(this._identitySource),
            identity_validation_expression: cdktf.stringToTerraform(this._identityValidationExpression),
            name: cdktf.stringToTerraform(this._name),
            provider_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._providerArns),
            rest_api_id: cdktf.stringToTerraform(this._restApiId),
            type: cdktf.stringToTerraform(this._type)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ApiGatewayAuthorizer.tfResourceType = "aws_api_gateway_authorizer";
    return ApiGatewayAuthorizer;
}(cdktf.TerraformResource));
exports.ApiGatewayAuthorizer = ApiGatewayAuthorizer;
