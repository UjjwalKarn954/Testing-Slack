"use strict";
// https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html
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
exports.Apigatewayv2Api = void 0;
var cdktf = require("cdktf");
function apigatewayv2ApiCorsConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        allow_credentials: cdktf.booleanToTerraform(struct.allowCredentials),
        allow_headers: cdktf.listMapper(cdktf.stringToTerraform)(struct.allowHeaders),
        allow_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct.allowMethods),
        allow_origins: cdktf.listMapper(cdktf.stringToTerraform)(struct.allowOrigins),
        expose_headers: cdktf.listMapper(cdktf.stringToTerraform)(struct.exposeHeaders),
        max_age: cdktf.numberToTerraform(struct.maxAge)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html aws_apigatewayv2_api}
*/
var Apigatewayv2Api = /** @class */ (function (_super) {
    __extends(Apigatewayv2Api, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api.html aws_apigatewayv2_api} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Apigatewayv2ApiConfig
    */
    function Apigatewayv2Api(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_apigatewayv2_api',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._apiKeySelectionExpression = config.apiKeySelectionExpression;
        _this._body = config.body;
        _this._credentialsArn = config.credentialsArn;
        _this._description = config.description;
        _this._disableExecuteApiEndpoint = config.disableExecuteApiEndpoint;
        _this._failOnWarnings = config.failOnWarnings;
        _this._name = config.name;
        _this._protocolType = config.protocolType;
        _this._routeKey = config.routeKey;
        _this._routeSelectionExpression = config.routeSelectionExpression;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._target = config.target;
        _this._version = config.version;
        _this._corsConfiguration = config.corsConfiguration;
        return _this;
    }
    Object.defineProperty(Apigatewayv2Api.prototype, "apiEndpoint", {
        // ==========
        // ATTRIBUTES
        // ==========
        // api_endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('api_endpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Api.prototype, "apiKeySelectionExpression", {
        get: function () {
            return this.getStringAttribute('api_key_selection_expression');
        },
        set: function (value) {
            this._apiKeySelectionExpression = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Api.prototype.resetApiKeySelectionExpression = function () {
        this._apiKeySelectionExpression = undefined;
    };
    Object.defineProperty(Apigatewayv2Api.prototype, "apiKeySelectionExpressionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._apiKeySelectionExpression;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Api.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Api.prototype, "body", {
        get: function () {
            return this.getStringAttribute('body');
        },
        set: function (value) {
            this._body = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Api.prototype.resetBody = function () {
        this._body = undefined;
    };
    Object.defineProperty(Apigatewayv2Api.prototype, "bodyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._body;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Api.prototype, "credentialsArn", {
        get: function () {
            return this.getStringAttribute('credentials_arn');
        },
        set: function (value) {
            this._credentialsArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Api.prototype.resetCredentialsArn = function () {
        this._credentialsArn = undefined;
    };
    Object.defineProperty(Apigatewayv2Api.prototype, "credentialsArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._credentialsArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Api.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Api.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(Apigatewayv2Api.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Api.prototype, "disableExecuteApiEndpoint", {
        get: function () {
            return this.getBooleanAttribute('disable_execute_api_endpoint');
        },
        set: function (value) {
            this._disableExecuteApiEndpoint = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Api.prototype.resetDisableExecuteApiEndpoint = function () {
        this._disableExecuteApiEndpoint = undefined;
    };
    Object.defineProperty(Apigatewayv2Api.prototype, "disableExecuteApiEndpointInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._disableExecuteApiEndpoint;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Api.prototype, "executionArn", {
        // execution_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('execution_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Api.prototype, "failOnWarnings", {
        get: function () {
            return this.getBooleanAttribute('fail_on_warnings');
        },
        set: function (value) {
            this._failOnWarnings = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Api.prototype.resetFailOnWarnings = function () {
        this._failOnWarnings = undefined;
    };
    Object.defineProperty(Apigatewayv2Api.prototype, "failOnWarningsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._failOnWarnings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Api.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Api.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Api.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Api.prototype, "protocolType", {
        get: function () {
            return this.getStringAttribute('protocol_type');
        },
        set: function (value) {
            this._protocolType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Api.prototype, "protocolTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._protocolType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Api.prototype, "routeKey", {
        get: function () {
            return this.getStringAttribute('route_key');
        },
        set: function (value) {
            this._routeKey = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Api.prototype.resetRouteKey = function () {
        this._routeKey = undefined;
    };
    Object.defineProperty(Apigatewayv2Api.prototype, "routeKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._routeKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Api.prototype, "routeSelectionExpression", {
        get: function () {
            return this.getStringAttribute('route_selection_expression');
        },
        set: function (value) {
            this._routeSelectionExpression = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Api.prototype.resetRouteSelectionExpression = function () {
        this._routeSelectionExpression = undefined;
    };
    Object.defineProperty(Apigatewayv2Api.prototype, "routeSelectionExpressionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._routeSelectionExpression;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Api.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Api.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(Apigatewayv2Api.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Api.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Api.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(Apigatewayv2Api.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Api.prototype, "target", {
        get: function () {
            return this.getStringAttribute('target');
        },
        set: function (value) {
            this._target = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Api.prototype.resetTarget = function () {
        this._target = undefined;
    };
    Object.defineProperty(Apigatewayv2Api.prototype, "targetInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._target;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Api.prototype, "version", {
        get: function () {
            return this.getStringAttribute('version');
        },
        set: function (value) {
            this._version = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Api.prototype.resetVersion = function () {
        this._version = undefined;
    };
    Object.defineProperty(Apigatewayv2Api.prototype, "versionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._version;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Api.prototype, "corsConfiguration", {
        get: function () {
            return this.interpolationForAttribute('cors_configuration');
        },
        set: function (value) {
            this._corsConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Api.prototype.resetCorsConfiguration = function () {
        this._corsConfiguration = undefined;
    };
    Object.defineProperty(Apigatewayv2Api.prototype, "corsConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._corsConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Apigatewayv2Api.prototype.synthesizeAttributes = function () {
        return {
            api_key_selection_expression: cdktf.stringToTerraform(this._apiKeySelectionExpression),
            body: cdktf.stringToTerraform(this._body),
            credentials_arn: cdktf.stringToTerraform(this._credentialsArn),
            description: cdktf.stringToTerraform(this._description),
            disable_execute_api_endpoint: cdktf.booleanToTerraform(this._disableExecuteApiEndpoint),
            fail_on_warnings: cdktf.booleanToTerraform(this._failOnWarnings),
            name: cdktf.stringToTerraform(this._name),
            protocol_type: cdktf.stringToTerraform(this._protocolType),
            route_key: cdktf.stringToTerraform(this._routeKey),
            route_selection_expression: cdktf.stringToTerraform(this._routeSelectionExpression),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            target: cdktf.stringToTerraform(this._target),
            version: cdktf.stringToTerraform(this._version),
            cors_configuration: cdktf.listMapper(apigatewayv2ApiCorsConfigurationToTerraform)(this._corsConfiguration)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Apigatewayv2Api.tfResourceType = "aws_apigatewayv2_api";
    return Apigatewayv2Api;
}(cdktf.TerraformResource));
exports.Apigatewayv2Api = Apigatewayv2Api;
