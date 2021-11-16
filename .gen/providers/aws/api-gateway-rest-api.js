"use strict";
// https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html
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
exports.ApiGatewayRestApi = void 0;
var cdktf = require("cdktf");
function apiGatewayRestApiEndpointConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        types: cdktf.listMapper(cdktf.stringToTerraform)(struct.types),
        vpc_endpoint_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.vpcEndpointIds)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html aws_api_gateway_rest_api}
*/
var ApiGatewayRestApi = /** @class */ (function (_super) {
    __extends(ApiGatewayRestApi, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html aws_api_gateway_rest_api} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayRestApiConfig
    */
    function ApiGatewayRestApi(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_api_gateway_rest_api',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._apiKeySource = config.apiKeySource;
        _this._binaryMediaTypes = config.binaryMediaTypes;
        _this._body = config.body;
        _this._description = config.description;
        _this._disableExecuteApiEndpoint = config.disableExecuteApiEndpoint;
        _this._minimumCompressionSize = config.minimumCompressionSize;
        _this._name = config.name;
        _this._parameters = config.parameters;
        _this._policy = config.policy;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._endpointConfiguration = config.endpointConfiguration;
        return _this;
    }
    Object.defineProperty(ApiGatewayRestApi.prototype, "apiKeySource", {
        get: function () {
            return this.getStringAttribute('api_key_source');
        },
        set: function (value) {
            this._apiKeySource = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayRestApi.prototype.resetApiKeySource = function () {
        this._apiKeySource = undefined;
    };
    Object.defineProperty(ApiGatewayRestApi.prototype, "apiKeySourceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._apiKeySource;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayRestApi.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayRestApi.prototype, "binaryMediaTypes", {
        get: function () {
            return this.getListAttribute('binary_media_types');
        },
        set: function (value) {
            this._binaryMediaTypes = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayRestApi.prototype.resetBinaryMediaTypes = function () {
        this._binaryMediaTypes = undefined;
    };
    Object.defineProperty(ApiGatewayRestApi.prototype, "binaryMediaTypesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._binaryMediaTypes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayRestApi.prototype, "body", {
        get: function () {
            return this.getStringAttribute('body');
        },
        set: function (value) {
            this._body = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayRestApi.prototype.resetBody = function () {
        this._body = undefined;
    };
    Object.defineProperty(ApiGatewayRestApi.prototype, "bodyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._body;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayRestApi.prototype, "createdDate", {
        // created_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayRestApi.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayRestApi.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(ApiGatewayRestApi.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayRestApi.prototype, "disableExecuteApiEndpoint", {
        get: function () {
            return this.getBooleanAttribute('disable_execute_api_endpoint');
        },
        set: function (value) {
            this._disableExecuteApiEndpoint = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayRestApi.prototype.resetDisableExecuteApiEndpoint = function () {
        this._disableExecuteApiEndpoint = undefined;
    };
    Object.defineProperty(ApiGatewayRestApi.prototype, "disableExecuteApiEndpointInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._disableExecuteApiEndpoint;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayRestApi.prototype, "executionArn", {
        // execution_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('execution_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayRestApi.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayRestApi.prototype, "minimumCompressionSize", {
        get: function () {
            return this.getNumberAttribute('minimum_compression_size');
        },
        set: function (value) {
            this._minimumCompressionSize = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayRestApi.prototype.resetMinimumCompressionSize = function () {
        this._minimumCompressionSize = undefined;
    };
    Object.defineProperty(ApiGatewayRestApi.prototype, "minimumCompressionSizeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._minimumCompressionSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayRestApi.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayRestApi.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayRestApi.prototype, "parameters", {
        get: function () {
            return this.interpolationForAttribute('parameters');
        },
        set: function (value) {
            this._parameters = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayRestApi.prototype.resetParameters = function () {
        this._parameters = undefined;
    };
    Object.defineProperty(ApiGatewayRestApi.prototype, "parametersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._parameters;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayRestApi.prototype, "policy", {
        get: function () {
            return this.getStringAttribute('policy');
        },
        set: function (value) {
            this._policy = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayRestApi.prototype.resetPolicy = function () {
        this._policy = undefined;
    };
    Object.defineProperty(ApiGatewayRestApi.prototype, "policyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayRestApi.prototype, "rootResourceId", {
        // root_resource_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('root_resource_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayRestApi.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayRestApi.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(ApiGatewayRestApi.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayRestApi.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayRestApi.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(ApiGatewayRestApi.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayRestApi.prototype, "endpointConfiguration", {
        get: function () {
            return this.interpolationForAttribute('endpoint_configuration');
        },
        set: function (value) {
            this._endpointConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayRestApi.prototype.resetEndpointConfiguration = function () {
        this._endpointConfiguration = undefined;
    };
    Object.defineProperty(ApiGatewayRestApi.prototype, "endpointConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._endpointConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ApiGatewayRestApi.prototype.synthesizeAttributes = function () {
        return {
            api_key_source: cdktf.stringToTerraform(this._apiKeySource),
            binary_media_types: cdktf.listMapper(cdktf.stringToTerraform)(this._binaryMediaTypes),
            body: cdktf.stringToTerraform(this._body),
            description: cdktf.stringToTerraform(this._description),
            disable_execute_api_endpoint: cdktf.booleanToTerraform(this._disableExecuteApiEndpoint),
            minimum_compression_size: cdktf.numberToTerraform(this._minimumCompressionSize),
            name: cdktf.stringToTerraform(this._name),
            parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
            policy: cdktf.stringToTerraform(this._policy),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            endpoint_configuration: cdktf.listMapper(apiGatewayRestApiEndpointConfigurationToTerraform)(this._endpointConfiguration)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ApiGatewayRestApi.tfResourceType = "aws_api_gateway_rest_api";
    return ApiGatewayRestApi;
}(cdktf.TerraformResource));
exports.ApiGatewayRestApi = ApiGatewayRestApi;
