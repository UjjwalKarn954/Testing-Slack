"use strict";
// https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration.html
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
exports.Apigatewayv2Integration = void 0;
var cdktf = require("cdktf");
function apigatewayv2IntegrationResponseParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        mappings: cdktf.hashMapper(cdktf.anyToTerraform)(struct.mappings),
        status_code: cdktf.stringToTerraform(struct.statusCode)
    };
}
function apigatewayv2IntegrationTlsConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        server_name_to_verify: cdktf.stringToTerraform(struct.serverNameToVerify)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration.html aws_apigatewayv2_integration}
*/
var Apigatewayv2Integration = /** @class */ (function (_super) {
    __extends(Apigatewayv2Integration, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration.html aws_apigatewayv2_integration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Apigatewayv2IntegrationConfig
    */
    function Apigatewayv2Integration(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_apigatewayv2_integration',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._apiId = config.apiId;
        _this._connectionId = config.connectionId;
        _this._connectionType = config.connectionType;
        _this._contentHandlingStrategy = config.contentHandlingStrategy;
        _this._credentialsArn = config.credentialsArn;
        _this._description = config.description;
        _this._integrationMethod = config.integrationMethod;
        _this._integrationSubtype = config.integrationSubtype;
        _this._integrationType = config.integrationType;
        _this._integrationUri = config.integrationUri;
        _this._passthroughBehavior = config.passthroughBehavior;
        _this._payloadFormatVersion = config.payloadFormatVersion;
        _this._requestParameters = config.requestParameters;
        _this._requestTemplates = config.requestTemplates;
        _this._templateSelectionExpression = config.templateSelectionExpression;
        _this._timeoutMilliseconds = config.timeoutMilliseconds;
        _this._responseParameters = config.responseParameters;
        _this._tlsConfig = config.tlsConfig;
        return _this;
    }
    Object.defineProperty(Apigatewayv2Integration.prototype, "apiId", {
        get: function () {
            return this.getStringAttribute('api_id');
        },
        set: function (value) {
            this._apiId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Integration.prototype, "apiIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._apiId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Integration.prototype, "connectionId", {
        get: function () {
            return this.getStringAttribute('connection_id');
        },
        set: function (value) {
            this._connectionId = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Integration.prototype.resetConnectionId = function () {
        this._connectionId = undefined;
    };
    Object.defineProperty(Apigatewayv2Integration.prototype, "connectionIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._connectionId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Integration.prototype, "connectionType", {
        get: function () {
            return this.getStringAttribute('connection_type');
        },
        set: function (value) {
            this._connectionType = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Integration.prototype.resetConnectionType = function () {
        this._connectionType = undefined;
    };
    Object.defineProperty(Apigatewayv2Integration.prototype, "connectionTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._connectionType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Integration.prototype, "contentHandlingStrategy", {
        get: function () {
            return this.getStringAttribute('content_handling_strategy');
        },
        set: function (value) {
            this._contentHandlingStrategy = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Integration.prototype.resetContentHandlingStrategy = function () {
        this._contentHandlingStrategy = undefined;
    };
    Object.defineProperty(Apigatewayv2Integration.prototype, "contentHandlingStrategyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contentHandlingStrategy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Integration.prototype, "credentialsArn", {
        get: function () {
            return this.getStringAttribute('credentials_arn');
        },
        set: function (value) {
            this._credentialsArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Integration.prototype.resetCredentialsArn = function () {
        this._credentialsArn = undefined;
    };
    Object.defineProperty(Apigatewayv2Integration.prototype, "credentialsArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._credentialsArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Integration.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Integration.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(Apigatewayv2Integration.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Integration.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Integration.prototype, "integrationMethod", {
        get: function () {
            return this.getStringAttribute('integration_method');
        },
        set: function (value) {
            this._integrationMethod = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Integration.prototype.resetIntegrationMethod = function () {
        this._integrationMethod = undefined;
    };
    Object.defineProperty(Apigatewayv2Integration.prototype, "integrationMethodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._integrationMethod;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Integration.prototype, "integrationResponseSelectionExpression", {
        // integration_response_selection_expression - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('integration_response_selection_expression');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Integration.prototype, "integrationSubtype", {
        get: function () {
            return this.getStringAttribute('integration_subtype');
        },
        set: function (value) {
            this._integrationSubtype = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Integration.prototype.resetIntegrationSubtype = function () {
        this._integrationSubtype = undefined;
    };
    Object.defineProperty(Apigatewayv2Integration.prototype, "integrationSubtypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._integrationSubtype;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Integration.prototype, "integrationType", {
        get: function () {
            return this.getStringAttribute('integration_type');
        },
        set: function (value) {
            this._integrationType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Integration.prototype, "integrationTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._integrationType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Integration.prototype, "integrationUri", {
        get: function () {
            return this.getStringAttribute('integration_uri');
        },
        set: function (value) {
            this._integrationUri = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Integration.prototype.resetIntegrationUri = function () {
        this._integrationUri = undefined;
    };
    Object.defineProperty(Apigatewayv2Integration.prototype, "integrationUriInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._integrationUri;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Integration.prototype, "passthroughBehavior", {
        get: function () {
            return this.getStringAttribute('passthrough_behavior');
        },
        set: function (value) {
            this._passthroughBehavior = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Integration.prototype.resetPassthroughBehavior = function () {
        this._passthroughBehavior = undefined;
    };
    Object.defineProperty(Apigatewayv2Integration.prototype, "passthroughBehaviorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._passthroughBehavior;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Integration.prototype, "payloadFormatVersion", {
        get: function () {
            return this.getStringAttribute('payload_format_version');
        },
        set: function (value) {
            this._payloadFormatVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Integration.prototype.resetPayloadFormatVersion = function () {
        this._payloadFormatVersion = undefined;
    };
    Object.defineProperty(Apigatewayv2Integration.prototype, "payloadFormatVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._payloadFormatVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Integration.prototype, "requestParameters", {
        get: function () {
            return this.interpolationForAttribute('request_parameters');
        },
        set: function (value) {
            this._requestParameters = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Integration.prototype.resetRequestParameters = function () {
        this._requestParameters = undefined;
    };
    Object.defineProperty(Apigatewayv2Integration.prototype, "requestParametersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requestParameters;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Integration.prototype, "requestTemplates", {
        get: function () {
            return this.interpolationForAttribute('request_templates');
        },
        set: function (value) {
            this._requestTemplates = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Integration.prototype.resetRequestTemplates = function () {
        this._requestTemplates = undefined;
    };
    Object.defineProperty(Apigatewayv2Integration.prototype, "requestTemplatesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requestTemplates;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Integration.prototype, "templateSelectionExpression", {
        get: function () {
            return this.getStringAttribute('template_selection_expression');
        },
        set: function (value) {
            this._templateSelectionExpression = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Integration.prototype.resetTemplateSelectionExpression = function () {
        this._templateSelectionExpression = undefined;
    };
    Object.defineProperty(Apigatewayv2Integration.prototype, "templateSelectionExpressionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._templateSelectionExpression;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Integration.prototype, "timeoutMilliseconds", {
        get: function () {
            return this.getNumberAttribute('timeout_milliseconds');
        },
        set: function (value) {
            this._timeoutMilliseconds = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Integration.prototype.resetTimeoutMilliseconds = function () {
        this._timeoutMilliseconds = undefined;
    };
    Object.defineProperty(Apigatewayv2Integration.prototype, "timeoutMillisecondsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeoutMilliseconds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Integration.prototype, "responseParameters", {
        get: function () {
            return this.interpolationForAttribute('response_parameters');
        },
        set: function (value) {
            this._responseParameters = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Integration.prototype.resetResponseParameters = function () {
        this._responseParameters = undefined;
    };
    Object.defineProperty(Apigatewayv2Integration.prototype, "responseParametersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._responseParameters;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Integration.prototype, "tlsConfig", {
        get: function () {
            return this.interpolationForAttribute('tls_config');
        },
        set: function (value) {
            this._tlsConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Integration.prototype.resetTlsConfig = function () {
        this._tlsConfig = undefined;
    };
    Object.defineProperty(Apigatewayv2Integration.prototype, "tlsConfigInput", {
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
    Apigatewayv2Integration.prototype.synthesizeAttributes = function () {
        return {
            api_id: cdktf.stringToTerraform(this._apiId),
            connection_id: cdktf.stringToTerraform(this._connectionId),
            connection_type: cdktf.stringToTerraform(this._connectionType),
            content_handling_strategy: cdktf.stringToTerraform(this._contentHandlingStrategy),
            credentials_arn: cdktf.stringToTerraform(this._credentialsArn),
            description: cdktf.stringToTerraform(this._description),
            integration_method: cdktf.stringToTerraform(this._integrationMethod),
            integration_subtype: cdktf.stringToTerraform(this._integrationSubtype),
            integration_type: cdktf.stringToTerraform(this._integrationType),
            integration_uri: cdktf.stringToTerraform(this._integrationUri),
            passthrough_behavior: cdktf.stringToTerraform(this._passthroughBehavior),
            payload_format_version: cdktf.stringToTerraform(this._payloadFormatVersion),
            request_parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._requestParameters),
            request_templates: cdktf.hashMapper(cdktf.anyToTerraform)(this._requestTemplates),
            template_selection_expression: cdktf.stringToTerraform(this._templateSelectionExpression),
            timeout_milliseconds: cdktf.numberToTerraform(this._timeoutMilliseconds),
            response_parameters: cdktf.listMapper(apigatewayv2IntegrationResponseParametersToTerraform)(this._responseParameters),
            tls_config: cdktf.listMapper(apigatewayv2IntegrationTlsConfigToTerraform)(this._tlsConfig)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Apigatewayv2Integration.tfResourceType = "aws_apigatewayv2_integration";
    return Apigatewayv2Integration;
}(cdktf.TerraformResource));
exports.Apigatewayv2Integration = Apigatewayv2Integration;
