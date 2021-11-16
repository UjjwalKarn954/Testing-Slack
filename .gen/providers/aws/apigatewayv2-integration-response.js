"use strict";
// https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response.html
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
exports.Apigatewayv2IntegrationResponse = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response.html aws_apigatewayv2_integration_response}
*/
var Apigatewayv2IntegrationResponse = /** @class */ (function (_super) {
    __extends(Apigatewayv2IntegrationResponse, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response.html aws_apigatewayv2_integration_response} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Apigatewayv2IntegrationResponseConfig
    */
    function Apigatewayv2IntegrationResponse(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_apigatewayv2_integration_response',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._apiId = config.apiId;
        _this._contentHandlingStrategy = config.contentHandlingStrategy;
        _this._integrationId = config.integrationId;
        _this._integrationResponseKey = config.integrationResponseKey;
        _this._responseTemplates = config.responseTemplates;
        _this._templateSelectionExpression = config.templateSelectionExpression;
        return _this;
    }
    Object.defineProperty(Apigatewayv2IntegrationResponse.prototype, "apiId", {
        get: function () {
            return this.getStringAttribute('api_id');
        },
        set: function (value) {
            this._apiId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2IntegrationResponse.prototype, "apiIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._apiId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2IntegrationResponse.prototype, "contentHandlingStrategy", {
        get: function () {
            return this.getStringAttribute('content_handling_strategy');
        },
        set: function (value) {
            this._contentHandlingStrategy = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2IntegrationResponse.prototype.resetContentHandlingStrategy = function () {
        this._contentHandlingStrategy = undefined;
    };
    Object.defineProperty(Apigatewayv2IntegrationResponse.prototype, "contentHandlingStrategyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contentHandlingStrategy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2IntegrationResponse.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2IntegrationResponse.prototype, "integrationId", {
        get: function () {
            return this.getStringAttribute('integration_id');
        },
        set: function (value) {
            this._integrationId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2IntegrationResponse.prototype, "integrationIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._integrationId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2IntegrationResponse.prototype, "integrationResponseKey", {
        get: function () {
            return this.getStringAttribute('integration_response_key');
        },
        set: function (value) {
            this._integrationResponseKey = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2IntegrationResponse.prototype, "integrationResponseKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._integrationResponseKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2IntegrationResponse.prototype, "responseTemplates", {
        get: function () {
            return this.interpolationForAttribute('response_templates');
        },
        set: function (value) {
            this._responseTemplates = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2IntegrationResponse.prototype.resetResponseTemplates = function () {
        this._responseTemplates = undefined;
    };
    Object.defineProperty(Apigatewayv2IntegrationResponse.prototype, "responseTemplatesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._responseTemplates;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2IntegrationResponse.prototype, "templateSelectionExpression", {
        get: function () {
            return this.getStringAttribute('template_selection_expression');
        },
        set: function (value) {
            this._templateSelectionExpression = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2IntegrationResponse.prototype.resetTemplateSelectionExpression = function () {
        this._templateSelectionExpression = undefined;
    };
    Object.defineProperty(Apigatewayv2IntegrationResponse.prototype, "templateSelectionExpressionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._templateSelectionExpression;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Apigatewayv2IntegrationResponse.prototype.synthesizeAttributes = function () {
        return {
            api_id: cdktf.stringToTerraform(this._apiId),
            content_handling_strategy: cdktf.stringToTerraform(this._contentHandlingStrategy),
            integration_id: cdktf.stringToTerraform(this._integrationId),
            integration_response_key: cdktf.stringToTerraform(this._integrationResponseKey),
            response_templates: cdktf.hashMapper(cdktf.anyToTerraform)(this._responseTemplates),
            template_selection_expression: cdktf.stringToTerraform(this._templateSelectionExpression)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Apigatewayv2IntegrationResponse.tfResourceType = "aws_apigatewayv2_integration_response";
    return Apigatewayv2IntegrationResponse;
}(cdktf.TerraformResource));
exports.Apigatewayv2IntegrationResponse = Apigatewayv2IntegrationResponse;
