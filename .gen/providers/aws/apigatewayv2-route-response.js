"use strict";
// https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response.html
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
exports.Apigatewayv2RouteResponse = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response.html aws_apigatewayv2_route_response}
*/
var Apigatewayv2RouteResponse = /** @class */ (function (_super) {
    __extends(Apigatewayv2RouteResponse, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response.html aws_apigatewayv2_route_response} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Apigatewayv2RouteResponseConfig
    */
    function Apigatewayv2RouteResponse(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_apigatewayv2_route_response',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._apiId = config.apiId;
        _this._modelSelectionExpression = config.modelSelectionExpression;
        _this._responseModels = config.responseModels;
        _this._routeId = config.routeId;
        _this._routeResponseKey = config.routeResponseKey;
        return _this;
    }
    Object.defineProperty(Apigatewayv2RouteResponse.prototype, "apiId", {
        get: function () {
            return this.getStringAttribute('api_id');
        },
        set: function (value) {
            this._apiId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2RouteResponse.prototype, "apiIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._apiId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2RouteResponse.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2RouteResponse.prototype, "modelSelectionExpression", {
        get: function () {
            return this.getStringAttribute('model_selection_expression');
        },
        set: function (value) {
            this._modelSelectionExpression = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2RouteResponse.prototype.resetModelSelectionExpression = function () {
        this._modelSelectionExpression = undefined;
    };
    Object.defineProperty(Apigatewayv2RouteResponse.prototype, "modelSelectionExpressionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._modelSelectionExpression;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2RouteResponse.prototype, "responseModels", {
        get: function () {
            return this.interpolationForAttribute('response_models');
        },
        set: function (value) {
            this._responseModels = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2RouteResponse.prototype.resetResponseModels = function () {
        this._responseModels = undefined;
    };
    Object.defineProperty(Apigatewayv2RouteResponse.prototype, "responseModelsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._responseModels;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2RouteResponse.prototype, "routeId", {
        get: function () {
            return this.getStringAttribute('route_id');
        },
        set: function (value) {
            this._routeId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2RouteResponse.prototype, "routeIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._routeId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2RouteResponse.prototype, "routeResponseKey", {
        get: function () {
            return this.getStringAttribute('route_response_key');
        },
        set: function (value) {
            this._routeResponseKey = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2RouteResponse.prototype, "routeResponseKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._routeResponseKey;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Apigatewayv2RouteResponse.prototype.synthesizeAttributes = function () {
        return {
            api_id: cdktf.stringToTerraform(this._apiId),
            model_selection_expression: cdktf.stringToTerraform(this._modelSelectionExpression),
            response_models: cdktf.hashMapper(cdktf.anyToTerraform)(this._responseModels),
            route_id: cdktf.stringToTerraform(this._routeId),
            route_response_key: cdktf.stringToTerraform(this._routeResponseKey)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Apigatewayv2RouteResponse.tfResourceType = "aws_apigatewayv2_route_response";
    return Apigatewayv2RouteResponse;
}(cdktf.TerraformResource));
exports.Apigatewayv2RouteResponse = Apigatewayv2RouteResponse;
