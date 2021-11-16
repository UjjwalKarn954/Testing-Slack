"use strict";
// https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route.html
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
exports.Apigatewayv2Route = void 0;
var cdktf = require("cdktf");
function apigatewayv2RouteRequestParameterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        request_parameter_key: cdktf.stringToTerraform(struct.requestParameterKey),
        required: cdktf.booleanToTerraform(struct.required)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route.html aws_apigatewayv2_route}
*/
var Apigatewayv2Route = /** @class */ (function (_super) {
    __extends(Apigatewayv2Route, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route.html aws_apigatewayv2_route} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Apigatewayv2RouteConfig
    */
    function Apigatewayv2Route(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_apigatewayv2_route',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._apiId = config.apiId;
        _this._apiKeyRequired = config.apiKeyRequired;
        _this._authorizationScopes = config.authorizationScopes;
        _this._authorizationType = config.authorizationType;
        _this._authorizerId = config.authorizerId;
        _this._modelSelectionExpression = config.modelSelectionExpression;
        _this._operationName = config.operationName;
        _this._requestModels = config.requestModels;
        _this._routeKey = config.routeKey;
        _this._routeResponseSelectionExpression = config.routeResponseSelectionExpression;
        _this._target = config.target;
        _this._requestParameter = config.requestParameter;
        return _this;
    }
    Object.defineProperty(Apigatewayv2Route.prototype, "apiId", {
        get: function () {
            return this.getStringAttribute('api_id');
        },
        set: function (value) {
            this._apiId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Route.prototype, "apiIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._apiId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Route.prototype, "apiKeyRequired", {
        get: function () {
            return this.getBooleanAttribute('api_key_required');
        },
        set: function (value) {
            this._apiKeyRequired = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Route.prototype.resetApiKeyRequired = function () {
        this._apiKeyRequired = undefined;
    };
    Object.defineProperty(Apigatewayv2Route.prototype, "apiKeyRequiredInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._apiKeyRequired;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Route.prototype, "authorizationScopes", {
        get: function () {
            return this.getListAttribute('authorization_scopes');
        },
        set: function (value) {
            this._authorizationScopes = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Route.prototype.resetAuthorizationScopes = function () {
        this._authorizationScopes = undefined;
    };
    Object.defineProperty(Apigatewayv2Route.prototype, "authorizationScopesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authorizationScopes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Route.prototype, "authorizationType", {
        get: function () {
            return this.getStringAttribute('authorization_type');
        },
        set: function (value) {
            this._authorizationType = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Route.prototype.resetAuthorizationType = function () {
        this._authorizationType = undefined;
    };
    Object.defineProperty(Apigatewayv2Route.prototype, "authorizationTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authorizationType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Route.prototype, "authorizerId", {
        get: function () {
            return this.getStringAttribute('authorizer_id');
        },
        set: function (value) {
            this._authorizerId = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Route.prototype.resetAuthorizerId = function () {
        this._authorizerId = undefined;
    };
    Object.defineProperty(Apigatewayv2Route.prototype, "authorizerIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authorizerId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Route.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Route.prototype, "modelSelectionExpression", {
        get: function () {
            return this.getStringAttribute('model_selection_expression');
        },
        set: function (value) {
            this._modelSelectionExpression = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Route.prototype.resetModelSelectionExpression = function () {
        this._modelSelectionExpression = undefined;
    };
    Object.defineProperty(Apigatewayv2Route.prototype, "modelSelectionExpressionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._modelSelectionExpression;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Route.prototype, "operationName", {
        get: function () {
            return this.getStringAttribute('operation_name');
        },
        set: function (value) {
            this._operationName = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Route.prototype.resetOperationName = function () {
        this._operationName = undefined;
    };
    Object.defineProperty(Apigatewayv2Route.prototype, "operationNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._operationName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Route.prototype, "requestModels", {
        get: function () {
            return this.interpolationForAttribute('request_models');
        },
        set: function (value) {
            this._requestModels = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Route.prototype.resetRequestModels = function () {
        this._requestModels = undefined;
    };
    Object.defineProperty(Apigatewayv2Route.prototype, "requestModelsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requestModels;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Route.prototype, "routeKey", {
        get: function () {
            return this.getStringAttribute('route_key');
        },
        set: function (value) {
            this._routeKey = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Route.prototype, "routeKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._routeKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Route.prototype, "routeResponseSelectionExpression", {
        get: function () {
            return this.getStringAttribute('route_response_selection_expression');
        },
        set: function (value) {
            this._routeResponseSelectionExpression = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Route.prototype.resetRouteResponseSelectionExpression = function () {
        this._routeResponseSelectionExpression = undefined;
    };
    Object.defineProperty(Apigatewayv2Route.prototype, "routeResponseSelectionExpressionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._routeResponseSelectionExpression;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Route.prototype, "target", {
        get: function () {
            return this.getStringAttribute('target');
        },
        set: function (value) {
            this._target = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Route.prototype.resetTarget = function () {
        this._target = undefined;
    };
    Object.defineProperty(Apigatewayv2Route.prototype, "targetInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._target;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Route.prototype, "requestParameter", {
        get: function () {
            return this.interpolationForAttribute('request_parameter');
        },
        set: function (value) {
            this._requestParameter = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Route.prototype.resetRequestParameter = function () {
        this._requestParameter = undefined;
    };
    Object.defineProperty(Apigatewayv2Route.prototype, "requestParameterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requestParameter;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Apigatewayv2Route.prototype.synthesizeAttributes = function () {
        return {
            api_id: cdktf.stringToTerraform(this._apiId),
            api_key_required: cdktf.booleanToTerraform(this._apiKeyRequired),
            authorization_scopes: cdktf.listMapper(cdktf.stringToTerraform)(this._authorizationScopes),
            authorization_type: cdktf.stringToTerraform(this._authorizationType),
            authorizer_id: cdktf.stringToTerraform(this._authorizerId),
            model_selection_expression: cdktf.stringToTerraform(this._modelSelectionExpression),
            operation_name: cdktf.stringToTerraform(this._operationName),
            request_models: cdktf.hashMapper(cdktf.anyToTerraform)(this._requestModels),
            route_key: cdktf.stringToTerraform(this._routeKey),
            route_response_selection_expression: cdktf.stringToTerraform(this._routeResponseSelectionExpression),
            target: cdktf.stringToTerraform(this._target),
            request_parameter: cdktf.listMapper(apigatewayv2RouteRequestParameterToTerraform)(this._requestParameter)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Apigatewayv2Route.tfResourceType = "aws_apigatewayv2_route";
    return Apigatewayv2Route;
}(cdktf.TerraformResource));
exports.Apigatewayv2Route = Apigatewayv2Route;
