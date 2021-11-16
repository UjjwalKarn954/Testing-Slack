"use strict";
// https://www.terraform.io/docs/providers/aws/r/api_gateway_method.html
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
exports.ApiGatewayMethod = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method.html aws_api_gateway_method}
*/
var ApiGatewayMethod = /** @class */ (function (_super) {
    __extends(ApiGatewayMethod, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method.html aws_api_gateway_method} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayMethodConfig
    */
    function ApiGatewayMethod(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_api_gateway_method',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._apiKeyRequired = config.apiKeyRequired;
        _this._authorization = config.authorization;
        _this._authorizationScopes = config.authorizationScopes;
        _this._authorizerId = config.authorizerId;
        _this._httpMethod = config.httpMethod;
        _this._operationName = config.operationName;
        _this._requestModels = config.requestModels;
        _this._requestParameters = config.requestParameters;
        _this._requestValidatorId = config.requestValidatorId;
        _this._resourceId = config.resourceId;
        _this._restApiId = config.restApiId;
        return _this;
    }
    Object.defineProperty(ApiGatewayMethod.prototype, "apiKeyRequired", {
        get: function () {
            return this.getBooleanAttribute('api_key_required');
        },
        set: function (value) {
            this._apiKeyRequired = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayMethod.prototype.resetApiKeyRequired = function () {
        this._apiKeyRequired = undefined;
    };
    Object.defineProperty(ApiGatewayMethod.prototype, "apiKeyRequiredInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._apiKeyRequired;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayMethod.prototype, "authorization", {
        get: function () {
            return this.getStringAttribute('authorization');
        },
        set: function (value) {
            this._authorization = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayMethod.prototype, "authorizationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authorization;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayMethod.prototype, "authorizationScopes", {
        get: function () {
            return this.getListAttribute('authorization_scopes');
        },
        set: function (value) {
            this._authorizationScopes = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayMethod.prototype.resetAuthorizationScopes = function () {
        this._authorizationScopes = undefined;
    };
    Object.defineProperty(ApiGatewayMethod.prototype, "authorizationScopesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authorizationScopes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayMethod.prototype, "authorizerId", {
        get: function () {
            return this.getStringAttribute('authorizer_id');
        },
        set: function (value) {
            this._authorizerId = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayMethod.prototype.resetAuthorizerId = function () {
        this._authorizerId = undefined;
    };
    Object.defineProperty(ApiGatewayMethod.prototype, "authorizerIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authorizerId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayMethod.prototype, "httpMethod", {
        get: function () {
            return this.getStringAttribute('http_method');
        },
        set: function (value) {
            this._httpMethod = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayMethod.prototype, "httpMethodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._httpMethod;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayMethod.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayMethod.prototype, "operationName", {
        get: function () {
            return this.getStringAttribute('operation_name');
        },
        set: function (value) {
            this._operationName = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayMethod.prototype.resetOperationName = function () {
        this._operationName = undefined;
    };
    Object.defineProperty(ApiGatewayMethod.prototype, "operationNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._operationName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayMethod.prototype, "requestModels", {
        get: function () {
            return this.interpolationForAttribute('request_models');
        },
        set: function (value) {
            this._requestModels = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayMethod.prototype.resetRequestModels = function () {
        this._requestModels = undefined;
    };
    Object.defineProperty(ApiGatewayMethod.prototype, "requestModelsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requestModels;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayMethod.prototype, "requestParameters", {
        get: function () {
            return this.getBooleanAttribute('request_parameters');
        },
        set: function (value) {
            this._requestParameters = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayMethod.prototype.resetRequestParameters = function () {
        this._requestParameters = undefined;
    };
    Object.defineProperty(ApiGatewayMethod.prototype, "requestParametersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requestParameters;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayMethod.prototype, "requestValidatorId", {
        get: function () {
            return this.getStringAttribute('request_validator_id');
        },
        set: function (value) {
            this._requestValidatorId = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayMethod.prototype.resetRequestValidatorId = function () {
        this._requestValidatorId = undefined;
    };
    Object.defineProperty(ApiGatewayMethod.prototype, "requestValidatorIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requestValidatorId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayMethod.prototype, "resourceId", {
        get: function () {
            return this.getStringAttribute('resource_id');
        },
        set: function (value) {
            this._resourceId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayMethod.prototype, "resourceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resourceId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayMethod.prototype, "restApiId", {
        get: function () {
            return this.getStringAttribute('rest_api_id');
        },
        set: function (value) {
            this._restApiId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayMethod.prototype, "restApiIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._restApiId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ApiGatewayMethod.prototype.synthesizeAttributes = function () {
        return {
            api_key_required: cdktf.booleanToTerraform(this._apiKeyRequired),
            authorization: cdktf.stringToTerraform(this._authorization),
            authorization_scopes: cdktf.listMapper(cdktf.stringToTerraform)(this._authorizationScopes),
            authorizer_id: cdktf.stringToTerraform(this._authorizerId),
            http_method: cdktf.stringToTerraform(this._httpMethod),
            operation_name: cdktf.stringToTerraform(this._operationName),
            request_models: cdktf.hashMapper(cdktf.anyToTerraform)(this._requestModels),
            request_parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._requestParameters),
            request_validator_id: cdktf.stringToTerraform(this._requestValidatorId),
            resource_id: cdktf.stringToTerraform(this._resourceId),
            rest_api_id: cdktf.stringToTerraform(this._restApiId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ApiGatewayMethod.tfResourceType = "aws_api_gateway_method";
    return ApiGatewayMethod;
}(cdktf.TerraformResource));
exports.ApiGatewayMethod = ApiGatewayMethod;
