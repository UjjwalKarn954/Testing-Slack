"use strict";
// https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html
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
exports.ApiGatewayStage = void 0;
var cdktf = require("cdktf");
function apiGatewayStageAccessLogSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        destination_arn: cdktf.stringToTerraform(struct.destinationArn),
        format: cdktf.stringToTerraform(struct.format)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html aws_api_gateway_stage}
*/
var ApiGatewayStage = /** @class */ (function (_super) {
    __extends(ApiGatewayStage, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html aws_api_gateway_stage} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayStageConfig
    */
    function ApiGatewayStage(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_api_gateway_stage',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._cacheClusterEnabled = config.cacheClusterEnabled;
        _this._cacheClusterSize = config.cacheClusterSize;
        _this._clientCertificateId = config.clientCertificateId;
        _this._deploymentId = config.deploymentId;
        _this._description = config.description;
        _this._documentationVersion = config.documentationVersion;
        _this._restApiId = config.restApiId;
        _this._stageName = config.stageName;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._variables = config.variables;
        _this._xrayTracingEnabled = config.xrayTracingEnabled;
        _this._accessLogSettings = config.accessLogSettings;
        return _this;
    }
    Object.defineProperty(ApiGatewayStage.prototype, "arn", {
        // ==========
        // ATTRIBUTES
        // ==========
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayStage.prototype, "cacheClusterEnabled", {
        get: function () {
            return this.getBooleanAttribute('cache_cluster_enabled');
        },
        set: function (value) {
            this._cacheClusterEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayStage.prototype.resetCacheClusterEnabled = function () {
        this._cacheClusterEnabled = undefined;
    };
    Object.defineProperty(ApiGatewayStage.prototype, "cacheClusterEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cacheClusterEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayStage.prototype, "cacheClusterSize", {
        get: function () {
            return this.getStringAttribute('cache_cluster_size');
        },
        set: function (value) {
            this._cacheClusterSize = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayStage.prototype.resetCacheClusterSize = function () {
        this._cacheClusterSize = undefined;
    };
    Object.defineProperty(ApiGatewayStage.prototype, "cacheClusterSizeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cacheClusterSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayStage.prototype, "clientCertificateId", {
        get: function () {
            return this.getStringAttribute('client_certificate_id');
        },
        set: function (value) {
            this._clientCertificateId = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayStage.prototype.resetClientCertificateId = function () {
        this._clientCertificateId = undefined;
    };
    Object.defineProperty(ApiGatewayStage.prototype, "clientCertificateIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clientCertificateId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayStage.prototype, "deploymentId", {
        get: function () {
            return this.getStringAttribute('deployment_id');
        },
        set: function (value) {
            this._deploymentId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayStage.prototype, "deploymentIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deploymentId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayStage.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayStage.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(ApiGatewayStage.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayStage.prototype, "documentationVersion", {
        get: function () {
            return this.getStringAttribute('documentation_version');
        },
        set: function (value) {
            this._documentationVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayStage.prototype.resetDocumentationVersion = function () {
        this._documentationVersion = undefined;
    };
    Object.defineProperty(ApiGatewayStage.prototype, "documentationVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._documentationVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayStage.prototype, "executionArn", {
        // execution_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('execution_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayStage.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayStage.prototype, "invokeUrl", {
        // invoke_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('invoke_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayStage.prototype, "restApiId", {
        get: function () {
            return this.getStringAttribute('rest_api_id');
        },
        set: function (value) {
            this._restApiId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayStage.prototype, "restApiIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._restApiId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayStage.prototype, "stageName", {
        get: function () {
            return this.getStringAttribute('stage_name');
        },
        set: function (value) {
            this._stageName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayStage.prototype, "stageNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._stageName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayStage.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayStage.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(ApiGatewayStage.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayStage.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayStage.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(ApiGatewayStage.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayStage.prototype, "variables", {
        get: function () {
            return this.interpolationForAttribute('variables');
        },
        set: function (value) {
            this._variables = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayStage.prototype.resetVariables = function () {
        this._variables = undefined;
    };
    Object.defineProperty(ApiGatewayStage.prototype, "variablesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._variables;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayStage.prototype, "xrayTracingEnabled", {
        get: function () {
            return this.getBooleanAttribute('xray_tracing_enabled');
        },
        set: function (value) {
            this._xrayTracingEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayStage.prototype.resetXrayTracingEnabled = function () {
        this._xrayTracingEnabled = undefined;
    };
    Object.defineProperty(ApiGatewayStage.prototype, "xrayTracingEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._xrayTracingEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayStage.prototype, "accessLogSettings", {
        get: function () {
            return this.interpolationForAttribute('access_log_settings');
        },
        set: function (value) {
            this._accessLogSettings = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayStage.prototype.resetAccessLogSettings = function () {
        this._accessLogSettings = undefined;
    };
    Object.defineProperty(ApiGatewayStage.prototype, "accessLogSettingsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessLogSettings;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ApiGatewayStage.prototype.synthesizeAttributes = function () {
        return {
            cache_cluster_enabled: cdktf.booleanToTerraform(this._cacheClusterEnabled),
            cache_cluster_size: cdktf.stringToTerraform(this._cacheClusterSize),
            client_certificate_id: cdktf.stringToTerraform(this._clientCertificateId),
            deployment_id: cdktf.stringToTerraform(this._deploymentId),
            description: cdktf.stringToTerraform(this._description),
            documentation_version: cdktf.stringToTerraform(this._documentationVersion),
            rest_api_id: cdktf.stringToTerraform(this._restApiId),
            stage_name: cdktf.stringToTerraform(this._stageName),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            variables: cdktf.hashMapper(cdktf.anyToTerraform)(this._variables),
            xray_tracing_enabled: cdktf.booleanToTerraform(this._xrayTracingEnabled),
            access_log_settings: cdktf.listMapper(apiGatewayStageAccessLogSettingsToTerraform)(this._accessLogSettings)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ApiGatewayStage.tfResourceType = "aws_api_gateway_stage";
    return ApiGatewayStage;
}(cdktf.TerraformResource));
exports.ApiGatewayStage = ApiGatewayStage;
