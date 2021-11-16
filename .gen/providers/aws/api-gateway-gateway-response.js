"use strict";
// https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response.html
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
exports.ApiGatewayGatewayResponse = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response.html aws_api_gateway_gateway_response}
*/
var ApiGatewayGatewayResponse = /** @class */ (function (_super) {
    __extends(ApiGatewayGatewayResponse, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response.html aws_api_gateway_gateway_response} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayGatewayResponseConfig
    */
    function ApiGatewayGatewayResponse(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_api_gateway_gateway_response',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._responseParameters = config.responseParameters;
        _this._responseTemplates = config.responseTemplates;
        _this._responseType = config.responseType;
        _this._restApiId = config.restApiId;
        _this._statusCode = config.statusCode;
        return _this;
    }
    Object.defineProperty(ApiGatewayGatewayResponse.prototype, "id", {
        // ==========
        // ATTRIBUTES
        // ==========
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayGatewayResponse.prototype, "responseParameters", {
        get: function () {
            return this.interpolationForAttribute('response_parameters');
        },
        set: function (value) {
            this._responseParameters = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayGatewayResponse.prototype.resetResponseParameters = function () {
        this._responseParameters = undefined;
    };
    Object.defineProperty(ApiGatewayGatewayResponse.prototype, "responseParametersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._responseParameters;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayGatewayResponse.prototype, "responseTemplates", {
        get: function () {
            return this.interpolationForAttribute('response_templates');
        },
        set: function (value) {
            this._responseTemplates = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayGatewayResponse.prototype.resetResponseTemplates = function () {
        this._responseTemplates = undefined;
    };
    Object.defineProperty(ApiGatewayGatewayResponse.prototype, "responseTemplatesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._responseTemplates;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayGatewayResponse.prototype, "responseType", {
        get: function () {
            return this.getStringAttribute('response_type');
        },
        set: function (value) {
            this._responseType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayGatewayResponse.prototype, "responseTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._responseType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayGatewayResponse.prototype, "restApiId", {
        get: function () {
            return this.getStringAttribute('rest_api_id');
        },
        set: function (value) {
            this._restApiId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayGatewayResponse.prototype, "restApiIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._restApiId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayGatewayResponse.prototype, "statusCode", {
        get: function () {
            return this.getStringAttribute('status_code');
        },
        set: function (value) {
            this._statusCode = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayGatewayResponse.prototype.resetStatusCode = function () {
        this._statusCode = undefined;
    };
    Object.defineProperty(ApiGatewayGatewayResponse.prototype, "statusCodeInput", {
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
    ApiGatewayGatewayResponse.prototype.synthesizeAttributes = function () {
        return {
            response_parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._responseParameters),
            response_templates: cdktf.hashMapper(cdktf.anyToTerraform)(this._responseTemplates),
            response_type: cdktf.stringToTerraform(this._responseType),
            rest_api_id: cdktf.stringToTerraform(this._restApiId),
            status_code: cdktf.stringToTerraform(this._statusCode)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ApiGatewayGatewayResponse.tfResourceType = "aws_api_gateway_gateway_response";
    return ApiGatewayGatewayResponse;
}(cdktf.TerraformResource));
exports.ApiGatewayGatewayResponse = ApiGatewayGatewayResponse;
