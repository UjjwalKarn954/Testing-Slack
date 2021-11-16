"use strict";
// https://www.terraform.io/docs/providers/aws/r/api_gateway_method_response.html
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
exports.ApiGatewayMethodResponse = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_response.html aws_api_gateway_method_response}
*/
var ApiGatewayMethodResponse = /** @class */ (function (_super) {
    __extends(ApiGatewayMethodResponse, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_response.html aws_api_gateway_method_response} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayMethodResponseConfig
    */
    function ApiGatewayMethodResponse(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_api_gateway_method_response',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._httpMethod = config.httpMethod;
        _this._resourceId = config.resourceId;
        _this._responseModels = config.responseModels;
        _this._responseParameters = config.responseParameters;
        _this._restApiId = config.restApiId;
        _this._statusCode = config.statusCode;
        return _this;
    }
    Object.defineProperty(ApiGatewayMethodResponse.prototype, "httpMethod", {
        get: function () {
            return this.getStringAttribute('http_method');
        },
        set: function (value) {
            this._httpMethod = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayMethodResponse.prototype, "httpMethodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._httpMethod;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayMethodResponse.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayMethodResponse.prototype, "resourceId", {
        get: function () {
            return this.getStringAttribute('resource_id');
        },
        set: function (value) {
            this._resourceId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayMethodResponse.prototype, "resourceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resourceId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayMethodResponse.prototype, "responseModels", {
        get: function () {
            return this.interpolationForAttribute('response_models');
        },
        set: function (value) {
            this._responseModels = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayMethodResponse.prototype.resetResponseModels = function () {
        this._responseModels = undefined;
    };
    Object.defineProperty(ApiGatewayMethodResponse.prototype, "responseModelsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._responseModels;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayMethodResponse.prototype, "responseParameters", {
        get: function () {
            return this.getBooleanAttribute('response_parameters');
        },
        set: function (value) {
            this._responseParameters = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayMethodResponse.prototype.resetResponseParameters = function () {
        this._responseParameters = undefined;
    };
    Object.defineProperty(ApiGatewayMethodResponse.prototype, "responseParametersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._responseParameters;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayMethodResponse.prototype, "restApiId", {
        get: function () {
            return this.getStringAttribute('rest_api_id');
        },
        set: function (value) {
            this._restApiId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayMethodResponse.prototype, "restApiIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._restApiId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayMethodResponse.prototype, "statusCode", {
        get: function () {
            return this.getStringAttribute('status_code');
        },
        set: function (value) {
            this._statusCode = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayMethodResponse.prototype, "statusCodeInput", {
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
    ApiGatewayMethodResponse.prototype.synthesizeAttributes = function () {
        return {
            http_method: cdktf.stringToTerraform(this._httpMethod),
            resource_id: cdktf.stringToTerraform(this._resourceId),
            response_models: cdktf.hashMapper(cdktf.anyToTerraform)(this._responseModels),
            response_parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._responseParameters),
            rest_api_id: cdktf.stringToTerraform(this._restApiId),
            status_code: cdktf.stringToTerraform(this._statusCode)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ApiGatewayMethodResponse.tfResourceType = "aws_api_gateway_method_response";
    return ApiGatewayMethodResponse;
}(cdktf.TerraformResource));
exports.ApiGatewayMethodResponse = ApiGatewayMethodResponse;
