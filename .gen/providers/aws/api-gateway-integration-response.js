"use strict";
// https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response.html
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
exports.ApiGatewayIntegrationResponse = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response.html aws_api_gateway_integration_response}
*/
var ApiGatewayIntegrationResponse = /** @class */ (function (_super) {
    __extends(ApiGatewayIntegrationResponse, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response.html aws_api_gateway_integration_response} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayIntegrationResponseConfig
    */
    function ApiGatewayIntegrationResponse(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_api_gateway_integration_response',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._contentHandling = config.contentHandling;
        _this._httpMethod = config.httpMethod;
        _this._resourceId = config.resourceId;
        _this._responseParameters = config.responseParameters;
        _this._responseTemplates = config.responseTemplates;
        _this._restApiId = config.restApiId;
        _this._selectionPattern = config.selectionPattern;
        _this._statusCode = config.statusCode;
        return _this;
    }
    Object.defineProperty(ApiGatewayIntegrationResponse.prototype, "contentHandling", {
        get: function () {
            return this.getStringAttribute('content_handling');
        },
        set: function (value) {
            this._contentHandling = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayIntegrationResponse.prototype.resetContentHandling = function () {
        this._contentHandling = undefined;
    };
    Object.defineProperty(ApiGatewayIntegrationResponse.prototype, "contentHandlingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contentHandling;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayIntegrationResponse.prototype, "httpMethod", {
        get: function () {
            return this.getStringAttribute('http_method');
        },
        set: function (value) {
            this._httpMethod = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayIntegrationResponse.prototype, "httpMethodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._httpMethod;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayIntegrationResponse.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayIntegrationResponse.prototype, "resourceId", {
        get: function () {
            return this.getStringAttribute('resource_id');
        },
        set: function (value) {
            this._resourceId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayIntegrationResponse.prototype, "resourceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resourceId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayIntegrationResponse.prototype, "responseParameters", {
        get: function () {
            return this.interpolationForAttribute('response_parameters');
        },
        set: function (value) {
            this._responseParameters = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayIntegrationResponse.prototype.resetResponseParameters = function () {
        this._responseParameters = undefined;
    };
    Object.defineProperty(ApiGatewayIntegrationResponse.prototype, "responseParametersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._responseParameters;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayIntegrationResponse.prototype, "responseTemplates", {
        get: function () {
            return this.interpolationForAttribute('response_templates');
        },
        set: function (value) {
            this._responseTemplates = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayIntegrationResponse.prototype.resetResponseTemplates = function () {
        this._responseTemplates = undefined;
    };
    Object.defineProperty(ApiGatewayIntegrationResponse.prototype, "responseTemplatesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._responseTemplates;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayIntegrationResponse.prototype, "restApiId", {
        get: function () {
            return this.getStringAttribute('rest_api_id');
        },
        set: function (value) {
            this._restApiId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayIntegrationResponse.prototype, "restApiIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._restApiId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayIntegrationResponse.prototype, "selectionPattern", {
        get: function () {
            return this.getStringAttribute('selection_pattern');
        },
        set: function (value) {
            this._selectionPattern = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayIntegrationResponse.prototype.resetSelectionPattern = function () {
        this._selectionPattern = undefined;
    };
    Object.defineProperty(ApiGatewayIntegrationResponse.prototype, "selectionPatternInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._selectionPattern;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayIntegrationResponse.prototype, "statusCode", {
        get: function () {
            return this.getStringAttribute('status_code');
        },
        set: function (value) {
            this._statusCode = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayIntegrationResponse.prototype, "statusCodeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._statusCode;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ApiGatewayIntegrationResponse.prototype.synthesizeAttributes = function () {
        return {
            content_handling: cdktf.stringToTerraform(this._contentHandling),
            http_method: cdktf.stringToTerraform(this._httpMethod),
            resource_id: cdktf.stringToTerraform(this._resourceId),
            response_parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._responseParameters),
            response_templates: cdktf.hashMapper(cdktf.anyToTerraform)(this._responseTemplates),
            rest_api_id: cdktf.stringToTerraform(this._restApiId),
            selection_pattern: cdktf.stringToTerraform(this._selectionPattern),
            status_code: cdktf.stringToTerraform(this._statusCode)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ApiGatewayIntegrationResponse.tfResourceType = "aws_api_gateway_integration_response";
    return ApiGatewayIntegrationResponse;
}(cdktf.TerraformResource));
exports.ApiGatewayIntegrationResponse = ApiGatewayIntegrationResponse;
