"use strict";
// https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html
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
exports.ApiGatewayMethodSettings = void 0;
var cdktf = require("cdktf");
function apiGatewayMethodSettingsSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cache_data_encrypted: cdktf.booleanToTerraform(struct.cacheDataEncrypted),
        cache_ttl_in_seconds: cdktf.numberToTerraform(struct.cacheTtlInSeconds),
        caching_enabled: cdktf.booleanToTerraform(struct.cachingEnabled),
        data_trace_enabled: cdktf.booleanToTerraform(struct.dataTraceEnabled),
        logging_level: cdktf.stringToTerraform(struct.loggingLevel),
        metrics_enabled: cdktf.booleanToTerraform(struct.metricsEnabled),
        require_authorization_for_cache_control: cdktf.booleanToTerraform(struct.requireAuthorizationForCacheControl),
        throttling_burst_limit: cdktf.numberToTerraform(struct.throttlingBurstLimit),
        throttling_rate_limit: cdktf.numberToTerraform(struct.throttlingRateLimit),
        unauthorized_cache_control_header_strategy: cdktf.stringToTerraform(struct.unauthorizedCacheControlHeaderStrategy)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html aws_api_gateway_method_settings}
*/
var ApiGatewayMethodSettings = /** @class */ (function (_super) {
    __extends(ApiGatewayMethodSettings, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html aws_api_gateway_method_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayMethodSettingsConfig
    */
    function ApiGatewayMethodSettings(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_api_gateway_method_settings',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._methodPath = config.methodPath;
        _this._restApiId = config.restApiId;
        _this._stageName = config.stageName;
        _this._settings = config.settings;
        return _this;
    }
    Object.defineProperty(ApiGatewayMethodSettings.prototype, "id", {
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
    Object.defineProperty(ApiGatewayMethodSettings.prototype, "methodPath", {
        get: function () {
            return this.getStringAttribute('method_path');
        },
        set: function (value) {
            this._methodPath = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayMethodSettings.prototype, "methodPathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._methodPath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayMethodSettings.prototype, "restApiId", {
        get: function () {
            return this.getStringAttribute('rest_api_id');
        },
        set: function (value) {
            this._restApiId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayMethodSettings.prototype, "restApiIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._restApiId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayMethodSettings.prototype, "stageName", {
        get: function () {
            return this.getStringAttribute('stage_name');
        },
        set: function (value) {
            this._stageName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayMethodSettings.prototype, "stageNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._stageName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayMethodSettings.prototype, "settings", {
        get: function () {
            return this.interpolationForAttribute('settings');
        },
        set: function (value) {
            this._settings = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayMethodSettings.prototype, "settingsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._settings;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ApiGatewayMethodSettings.prototype.synthesizeAttributes = function () {
        return {
            method_path: cdktf.stringToTerraform(this._methodPath),
            rest_api_id: cdktf.stringToTerraform(this._restApiId),
            stage_name: cdktf.stringToTerraform(this._stageName),
            settings: cdktf.listMapper(apiGatewayMethodSettingsSettingsToTerraform)(this._settings)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ApiGatewayMethodSettings.tfResourceType = "aws_api_gateway_method_settings";
    return ApiGatewayMethodSettings;
}(cdktf.TerraformResource));
exports.ApiGatewayMethodSettings = ApiGatewayMethodSettings;
