"use strict";
// https://www.terraform.io/docs/providers/aws/r/api_gateway_request_validator.html
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
exports.ApiGatewayRequestValidator = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_request_validator.html aws_api_gateway_request_validator}
*/
var ApiGatewayRequestValidator = /** @class */ (function (_super) {
    __extends(ApiGatewayRequestValidator, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_request_validator.html aws_api_gateway_request_validator} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayRequestValidatorConfig
    */
    function ApiGatewayRequestValidator(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_api_gateway_request_validator',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        _this._restApiId = config.restApiId;
        _this._validateRequestBody = config.validateRequestBody;
        _this._validateRequestParameters = config.validateRequestParameters;
        return _this;
    }
    Object.defineProperty(ApiGatewayRequestValidator.prototype, "id", {
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
    Object.defineProperty(ApiGatewayRequestValidator.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayRequestValidator.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayRequestValidator.prototype, "restApiId", {
        get: function () {
            return this.getStringAttribute('rest_api_id');
        },
        set: function (value) {
            this._restApiId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayRequestValidator.prototype, "restApiIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._restApiId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayRequestValidator.prototype, "validateRequestBody", {
        get: function () {
            return this.getBooleanAttribute('validate_request_body');
        },
        set: function (value) {
            this._validateRequestBody = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayRequestValidator.prototype.resetValidateRequestBody = function () {
        this._validateRequestBody = undefined;
    };
    Object.defineProperty(ApiGatewayRequestValidator.prototype, "validateRequestBodyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._validateRequestBody;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayRequestValidator.prototype, "validateRequestParameters", {
        get: function () {
            return this.getBooleanAttribute('validate_request_parameters');
        },
        set: function (value) {
            this._validateRequestParameters = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayRequestValidator.prototype.resetValidateRequestParameters = function () {
        this._validateRequestParameters = undefined;
    };
    Object.defineProperty(ApiGatewayRequestValidator.prototype, "validateRequestParametersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._validateRequestParameters;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ApiGatewayRequestValidator.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            rest_api_id: cdktf.stringToTerraform(this._restApiId),
            validate_request_body: cdktf.booleanToTerraform(this._validateRequestBody),
            validate_request_parameters: cdktf.booleanToTerraform(this._validateRequestParameters)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ApiGatewayRequestValidator.tfResourceType = "aws_api_gateway_request_validator";
    return ApiGatewayRequestValidator;
}(cdktf.TerraformResource));
exports.ApiGatewayRequestValidator = ApiGatewayRequestValidator;
