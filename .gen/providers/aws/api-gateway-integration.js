"use strict";
// https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html
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
exports.ApiGatewayIntegration = void 0;
var cdktf = require("cdktf");
function apiGatewayIntegrationTlsConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        insecure_skip_verification: cdktf.booleanToTerraform(struct.insecureSkipVerification)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html aws_api_gateway_integration}
*/
var ApiGatewayIntegration = /** @class */ (function (_super) {
    __extends(ApiGatewayIntegration, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html aws_api_gateway_integration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayIntegrationConfig
    */
    function ApiGatewayIntegration(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_api_gateway_integration',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._cacheKeyParameters = config.cacheKeyParameters;
        _this._cacheNamespace = config.cacheNamespace;
        _this._connectionId = config.connectionId;
        _this._connectionType = config.connectionType;
        _this._contentHandling = config.contentHandling;
        _this._credentials = config.credentials;
        _this._httpMethod = config.httpMethod;
        _this._integrationHttpMethod = config.integrationHttpMethod;
        _this._passthroughBehavior = config.passthroughBehavior;
        _this._requestParameters = config.requestParameters;
        _this._requestTemplates = config.requestTemplates;
        _this._resourceId = config.resourceId;
        _this._restApiId = config.restApiId;
        _this._timeoutMilliseconds = config.timeoutMilliseconds;
        _this._type = config.type;
        _this._uri = config.uri;
        _this._tlsConfig = config.tlsConfig;
        return _this;
    }
    Object.defineProperty(ApiGatewayIntegration.prototype, "cacheKeyParameters", {
        get: function () {
            return this.getListAttribute('cache_key_parameters');
        },
        set: function (value) {
            this._cacheKeyParameters = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayIntegration.prototype.resetCacheKeyParameters = function () {
        this._cacheKeyParameters = undefined;
    };
    Object.defineProperty(ApiGatewayIntegration.prototype, "cacheKeyParametersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cacheKeyParameters;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayIntegration.prototype, "cacheNamespace", {
        get: function () {
            return this.getStringAttribute('cache_namespace');
        },
        set: function (value) {
            this._cacheNamespace = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayIntegration.prototype.resetCacheNamespace = function () {
        this._cacheNamespace = undefined;
    };
    Object.defineProperty(ApiGatewayIntegration.prototype, "cacheNamespaceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cacheNamespace;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayIntegration.prototype, "connectionId", {
        get: function () {
            return this.getStringAttribute('connection_id');
        },
        set: function (value) {
            this._connectionId = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayIntegration.prototype.resetConnectionId = function () {
        this._connectionId = undefined;
    };
    Object.defineProperty(ApiGatewayIntegration.prototype, "connectionIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._connectionId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayIntegration.prototype, "connectionType", {
        get: function () {
            return this.getStringAttribute('connection_type');
        },
        set: function (value) {
            this._connectionType = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayIntegration.prototype.resetConnectionType = function () {
        this._connectionType = undefined;
    };
    Object.defineProperty(ApiGatewayIntegration.prototype, "connectionTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._connectionType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayIntegration.prototype, "contentHandling", {
        get: function () {
            return this.getStringAttribute('content_handling');
        },
        set: function (value) {
            this._contentHandling = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayIntegration.prototype.resetContentHandling = function () {
        this._contentHandling = undefined;
    };
    Object.defineProperty(ApiGatewayIntegration.prototype, "contentHandlingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contentHandling;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayIntegration.prototype, "credentials", {
        get: function () {
            return this.getStringAttribute('credentials');
        },
        set: function (value) {
            this._credentials = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayIntegration.prototype.resetCredentials = function () {
        this._credentials = undefined;
    };
    Object.defineProperty(ApiGatewayIntegration.prototype, "credentialsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._credentials;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayIntegration.prototype, "httpMethod", {
        get: function () {
            return this.getStringAttribute('http_method');
        },
        set: function (value) {
            this._httpMethod = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayIntegration.prototype, "httpMethodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._httpMethod;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayIntegration.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayIntegration.prototype, "integrationHttpMethod", {
        get: function () {
            return this.getStringAttribute('integration_http_method');
        },
        set: function (value) {
            this._integrationHttpMethod = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayIntegration.prototype.resetIntegrationHttpMethod = function () {
        this._integrationHttpMethod = undefined;
    };
    Object.defineProperty(ApiGatewayIntegration.prototype, "integrationHttpMethodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._integrationHttpMethod;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayIntegration.prototype, "passthroughBehavior", {
        get: function () {
            return this.getStringAttribute('passthrough_behavior');
        },
        set: function (value) {
            this._passthroughBehavior = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayIntegration.prototype.resetPassthroughBehavior = function () {
        this._passthroughBehavior = undefined;
    };
    Object.defineProperty(ApiGatewayIntegration.prototype, "passthroughBehaviorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._passthroughBehavior;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayIntegration.prototype, "requestParameters", {
        get: function () {
            return this.interpolationForAttribute('request_parameters');
        },
        set: function (value) {
            this._requestParameters = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayIntegration.prototype.resetRequestParameters = function () {
        this._requestParameters = undefined;
    };
    Object.defineProperty(ApiGatewayIntegration.prototype, "requestParametersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requestParameters;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayIntegration.prototype, "requestTemplates", {
        get: function () {
            return this.interpolationForAttribute('request_templates');
        },
        set: function (value) {
            this._requestTemplates = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayIntegration.prototype.resetRequestTemplates = function () {
        this._requestTemplates = undefined;
    };
    Object.defineProperty(ApiGatewayIntegration.prototype, "requestTemplatesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requestTemplates;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayIntegration.prototype, "resourceId", {
        get: function () {
            return this.getStringAttribute('resource_id');
        },
        set: function (value) {
            this._resourceId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayIntegration.prototype, "resourceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resourceId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayIntegration.prototype, "restApiId", {
        get: function () {
            return this.getStringAttribute('rest_api_id');
        },
        set: function (value) {
            this._restApiId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayIntegration.prototype, "restApiIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._restApiId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayIntegration.prototype, "timeoutMilliseconds", {
        get: function () {
            return this.getNumberAttribute('timeout_milliseconds');
        },
        set: function (value) {
            this._timeoutMilliseconds = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayIntegration.prototype.resetTimeoutMilliseconds = function () {
        this._timeoutMilliseconds = undefined;
    };
    Object.defineProperty(ApiGatewayIntegration.prototype, "timeoutMillisecondsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeoutMilliseconds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayIntegration.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayIntegration.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayIntegration.prototype, "uri", {
        get: function () {
            return this.getStringAttribute('uri');
        },
        set: function (value) {
            this._uri = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayIntegration.prototype.resetUri = function () {
        this._uri = undefined;
    };
    Object.defineProperty(ApiGatewayIntegration.prototype, "uriInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._uri;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayIntegration.prototype, "tlsConfig", {
        get: function () {
            return this.interpolationForAttribute('tls_config');
        },
        set: function (value) {
            this._tlsConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayIntegration.prototype.resetTlsConfig = function () {
        this._tlsConfig = undefined;
    };
    Object.defineProperty(ApiGatewayIntegration.prototype, "tlsConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tlsConfig;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ApiGatewayIntegration.prototype.synthesizeAttributes = function () {
        return {
            cache_key_parameters: cdktf.listMapper(cdktf.stringToTerraform)(this._cacheKeyParameters),
            cache_namespace: cdktf.stringToTerraform(this._cacheNamespace),
            connection_id: cdktf.stringToTerraform(this._connectionId),
            connection_type: cdktf.stringToTerraform(this._connectionType),
            content_handling: cdktf.stringToTerraform(this._contentHandling),
            credentials: cdktf.stringToTerraform(this._credentials),
            http_method: cdktf.stringToTerraform(this._httpMethod),
            integration_http_method: cdktf.stringToTerraform(this._integrationHttpMethod),
            passthrough_behavior: cdktf.stringToTerraform(this._passthroughBehavior),
            request_parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._requestParameters),
            request_templates: cdktf.hashMapper(cdktf.anyToTerraform)(this._requestTemplates),
            resource_id: cdktf.stringToTerraform(this._resourceId),
            rest_api_id: cdktf.stringToTerraform(this._restApiId),
            timeout_milliseconds: cdktf.numberToTerraform(this._timeoutMilliseconds),
            type: cdktf.stringToTerraform(this._type),
            uri: cdktf.stringToTerraform(this._uri),
            tls_config: cdktf.listMapper(apiGatewayIntegrationTlsConfigToTerraform)(this._tlsConfig)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ApiGatewayIntegration.tfResourceType = "aws_api_gateway_integration";
    return ApiGatewayIntegration;
}(cdktf.TerraformResource));
exports.ApiGatewayIntegration = ApiGatewayIntegration;
