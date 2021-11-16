"use strict";
// https://www.terraform.io/docs/providers/aws/d/apigatewayv2_api.html
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
exports.DataAwsApigatewayv2Api = exports.DataAwsApigatewayv2ApiCorsConfiguration = void 0;
var cdktf = require("cdktf");
var DataAwsApigatewayv2ApiCorsConfiguration = /** @class */ (function (_super) {
    __extends(DataAwsApigatewayv2ApiCorsConfiguration, _super);
    function DataAwsApigatewayv2ApiCorsConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsApigatewayv2ApiCorsConfiguration.prototype, "allowCredentials", {
        // allow_credentials - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('allow_credentials');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApigatewayv2ApiCorsConfiguration.prototype, "allowHeaders", {
        // allow_headers - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('allow_headers');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApigatewayv2ApiCorsConfiguration.prototype, "allowMethods", {
        // allow_methods - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('allow_methods');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApigatewayv2ApiCorsConfiguration.prototype, "allowOrigins", {
        // allow_origins - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('allow_origins');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApigatewayv2ApiCorsConfiguration.prototype, "exposeHeaders", {
        // expose_headers - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('expose_headers');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApigatewayv2ApiCorsConfiguration.prototype, "maxAge", {
        // max_age - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('max_age');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsApigatewayv2ApiCorsConfiguration;
}(cdktf.ComplexComputedList));
exports.DataAwsApigatewayv2ApiCorsConfiguration = DataAwsApigatewayv2ApiCorsConfiguration;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_api.html aws_apigatewayv2_api}
*/
var DataAwsApigatewayv2Api = /** @class */ (function (_super) {
    __extends(DataAwsApigatewayv2Api, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_api.html aws_apigatewayv2_api} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsApigatewayv2ApiConfig
    */
    function DataAwsApigatewayv2Api(scope, id, config) {
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
        _this._apiId = config.apiId;
        _this._tags = config.tags;
        return _this;
    }
    Object.defineProperty(DataAwsApigatewayv2Api.prototype, "apiEndpoint", {
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
    Object.defineProperty(DataAwsApigatewayv2Api.prototype, "apiId", {
        get: function () {
            return this.getStringAttribute('api_id');
        },
        set: function (value) {
            this._apiId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApigatewayv2Api.prototype, "apiIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._apiId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApigatewayv2Api.prototype, "apiKeySelectionExpression", {
        // api_key_selection_expression - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('api_key_selection_expression');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApigatewayv2Api.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    // cors_configuration - computed: true, optional: false, required: false
    DataAwsApigatewayv2Api.prototype.corsConfiguration = function (index) {
        return new DataAwsApigatewayv2ApiCorsConfiguration(this, 'cors_configuration', index);
    };
    Object.defineProperty(DataAwsApigatewayv2Api.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApigatewayv2Api.prototype, "disableExecuteApiEndpoint", {
        // disable_execute_api_endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('disable_execute_api_endpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApigatewayv2Api.prototype, "executionArn", {
        // execution_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('execution_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApigatewayv2Api.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApigatewayv2Api.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApigatewayv2Api.prototype, "protocolType", {
        // protocol_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('protocol_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApigatewayv2Api.prototype, "routeSelectionExpression", {
        // route_selection_expression - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('route_selection_expression');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApigatewayv2Api.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsApigatewayv2Api.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsApigatewayv2Api.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApigatewayv2Api.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsApigatewayv2Api.prototype.synthesizeAttributes = function () {
        return {
            api_id: cdktf.stringToTerraform(this._apiId),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsApigatewayv2Api.tfResourceType = "aws_apigatewayv2_api";
    return DataAwsApigatewayv2Api;
}(cdktf.TerraformDataSource));
exports.DataAwsApigatewayv2Api = DataAwsApigatewayv2Api;
