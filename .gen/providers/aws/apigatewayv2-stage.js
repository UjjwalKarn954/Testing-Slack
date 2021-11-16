"use strict";
// https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html
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
exports.Apigatewayv2Stage = void 0;
var cdktf = require("cdktf");
function apigatewayv2StageAccessLogSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        destination_arn: cdktf.stringToTerraform(struct.destinationArn),
        format: cdktf.stringToTerraform(struct.format)
    };
}
function apigatewayv2StageDefaultRouteSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        data_trace_enabled: cdktf.booleanToTerraform(struct.dataTraceEnabled),
        detailed_metrics_enabled: cdktf.booleanToTerraform(struct.detailedMetricsEnabled),
        logging_level: cdktf.stringToTerraform(struct.loggingLevel),
        throttling_burst_limit: cdktf.numberToTerraform(struct.throttlingBurstLimit),
        throttling_rate_limit: cdktf.numberToTerraform(struct.throttlingRateLimit)
    };
}
function apigatewayv2StageRouteSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        data_trace_enabled: cdktf.booleanToTerraform(struct.dataTraceEnabled),
        detailed_metrics_enabled: cdktf.booleanToTerraform(struct.detailedMetricsEnabled),
        logging_level: cdktf.stringToTerraform(struct.loggingLevel),
        route_key: cdktf.stringToTerraform(struct.routeKey),
        throttling_burst_limit: cdktf.numberToTerraform(struct.throttlingBurstLimit),
        throttling_rate_limit: cdktf.numberToTerraform(struct.throttlingRateLimit)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html aws_apigatewayv2_stage}
*/
var Apigatewayv2Stage = /** @class */ (function (_super) {
    __extends(Apigatewayv2Stage, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage.html aws_apigatewayv2_stage} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Apigatewayv2StageConfig
    */
    function Apigatewayv2Stage(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_apigatewayv2_stage',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._apiId = config.apiId;
        _this._autoDeploy = config.autoDeploy;
        _this._clientCertificateId = config.clientCertificateId;
        _this._deploymentId = config.deploymentId;
        _this._description = config.description;
        _this._name = config.name;
        _this._stageVariables = config.stageVariables;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._accessLogSettings = config.accessLogSettings;
        _this._defaultRouteSettings = config.defaultRouteSettings;
        _this._routeSettings = config.routeSettings;
        return _this;
    }
    Object.defineProperty(Apigatewayv2Stage.prototype, "apiId", {
        get: function () {
            return this.getStringAttribute('api_id');
        },
        set: function (value) {
            this._apiId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Stage.prototype, "apiIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._apiId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Stage.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Stage.prototype, "autoDeploy", {
        get: function () {
            return this.getBooleanAttribute('auto_deploy');
        },
        set: function (value) {
            this._autoDeploy = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Stage.prototype.resetAutoDeploy = function () {
        this._autoDeploy = undefined;
    };
    Object.defineProperty(Apigatewayv2Stage.prototype, "autoDeployInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoDeploy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Stage.prototype, "clientCertificateId", {
        get: function () {
            return this.getStringAttribute('client_certificate_id');
        },
        set: function (value) {
            this._clientCertificateId = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Stage.prototype.resetClientCertificateId = function () {
        this._clientCertificateId = undefined;
    };
    Object.defineProperty(Apigatewayv2Stage.prototype, "clientCertificateIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clientCertificateId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Stage.prototype, "deploymentId", {
        get: function () {
            return this.getStringAttribute('deployment_id');
        },
        set: function (value) {
            this._deploymentId = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Stage.prototype.resetDeploymentId = function () {
        this._deploymentId = undefined;
    };
    Object.defineProperty(Apigatewayv2Stage.prototype, "deploymentIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deploymentId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Stage.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Stage.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(Apigatewayv2Stage.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Stage.prototype, "executionArn", {
        // execution_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('execution_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Stage.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Stage.prototype, "invokeUrl", {
        // invoke_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('invoke_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Stage.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Stage.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Stage.prototype, "stageVariables", {
        get: function () {
            return this.interpolationForAttribute('stage_variables');
        },
        set: function (value) {
            this._stageVariables = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Stage.prototype.resetStageVariables = function () {
        this._stageVariables = undefined;
    };
    Object.defineProperty(Apigatewayv2Stage.prototype, "stageVariablesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._stageVariables;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Stage.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Stage.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(Apigatewayv2Stage.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Stage.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Stage.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(Apigatewayv2Stage.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Stage.prototype, "accessLogSettings", {
        get: function () {
            return this.interpolationForAttribute('access_log_settings');
        },
        set: function (value) {
            this._accessLogSettings = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Stage.prototype.resetAccessLogSettings = function () {
        this._accessLogSettings = undefined;
    };
    Object.defineProperty(Apigatewayv2Stage.prototype, "accessLogSettingsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessLogSettings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Stage.prototype, "defaultRouteSettings", {
        get: function () {
            return this.interpolationForAttribute('default_route_settings');
        },
        set: function (value) {
            this._defaultRouteSettings = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Stage.prototype.resetDefaultRouteSettings = function () {
        this._defaultRouteSettings = undefined;
    };
    Object.defineProperty(Apigatewayv2Stage.prototype, "defaultRouteSettingsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultRouteSettings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Stage.prototype, "routeSettings", {
        get: function () {
            return this.interpolationForAttribute('route_settings');
        },
        set: function (value) {
            this._routeSettings = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Stage.prototype.resetRouteSettings = function () {
        this._routeSettings = undefined;
    };
    Object.defineProperty(Apigatewayv2Stage.prototype, "routeSettingsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._routeSettings;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Apigatewayv2Stage.prototype.synthesizeAttributes = function () {
        return {
            api_id: cdktf.stringToTerraform(this._apiId),
            auto_deploy: cdktf.booleanToTerraform(this._autoDeploy),
            client_certificate_id: cdktf.stringToTerraform(this._clientCertificateId),
            deployment_id: cdktf.stringToTerraform(this._deploymentId),
            description: cdktf.stringToTerraform(this._description),
            name: cdktf.stringToTerraform(this._name),
            stage_variables: cdktf.hashMapper(cdktf.anyToTerraform)(this._stageVariables),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            access_log_settings: cdktf.listMapper(apigatewayv2StageAccessLogSettingsToTerraform)(this._accessLogSettings),
            default_route_settings: cdktf.listMapper(apigatewayv2StageDefaultRouteSettingsToTerraform)(this._defaultRouteSettings),
            route_settings: cdktf.listMapper(apigatewayv2StageRouteSettingsToTerraform)(this._routeSettings)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Apigatewayv2Stage.tfResourceType = "aws_apigatewayv2_stage";
    return Apigatewayv2Stage;
}(cdktf.TerraformResource));
exports.Apigatewayv2Stage = Apigatewayv2Stage;
