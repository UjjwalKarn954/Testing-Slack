"use strict";
// https://www.terraform.io/docs/providers/aws/d/api_gateway_rest_api.html
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
exports.DataAwsApiGatewayRestApi = exports.DataAwsApiGatewayRestApiEndpointConfiguration = void 0;
var cdktf = require("cdktf");
var DataAwsApiGatewayRestApiEndpointConfiguration = /** @class */ (function (_super) {
    __extends(DataAwsApiGatewayRestApiEndpointConfiguration, _super);
    function DataAwsApiGatewayRestApiEndpointConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsApiGatewayRestApiEndpointConfiguration.prototype, "types", {
        // types - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('types');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApiGatewayRestApiEndpointConfiguration.prototype, "vpcEndpointIds", {
        // vpc_endpoint_ids - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('vpc_endpoint_ids');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsApiGatewayRestApiEndpointConfiguration;
}(cdktf.ComplexComputedList));
exports.DataAwsApiGatewayRestApiEndpointConfiguration = DataAwsApiGatewayRestApiEndpointConfiguration;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_rest_api.html aws_api_gateway_rest_api}
*/
var DataAwsApiGatewayRestApi = /** @class */ (function (_super) {
    __extends(DataAwsApiGatewayRestApi, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_rest_api.html aws_api_gateway_rest_api} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsApiGatewayRestApiConfig
    */
    function DataAwsApiGatewayRestApi(scope, id, config) {
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
        _this._name = config.name;
        _this._tags = config.tags;
        return _this;
    }
    Object.defineProperty(DataAwsApiGatewayRestApi.prototype, "apiKeySource", {
        // ==========
        // ATTRIBUTES
        // ==========
        // api_key_source - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('api_key_source');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApiGatewayRestApi.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApiGatewayRestApi.prototype, "binaryMediaTypes", {
        // binary_media_types - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('binary_media_types');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApiGatewayRestApi.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    // endpoint_configuration - computed: true, optional: false, required: false
    DataAwsApiGatewayRestApi.prototype.endpointConfiguration = function (index) {
        return new DataAwsApiGatewayRestApiEndpointConfiguration(this, 'endpoint_configuration', index);
    };
    Object.defineProperty(DataAwsApiGatewayRestApi.prototype, "executionArn", {
        // execution_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('execution_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApiGatewayRestApi.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApiGatewayRestApi.prototype, "minimumCompressionSize", {
        // minimum_compression_size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('minimum_compression_size');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApiGatewayRestApi.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApiGatewayRestApi.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApiGatewayRestApi.prototype, "policy", {
        // policy - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('policy');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApiGatewayRestApi.prototype, "rootResourceId", {
        // root_resource_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('root_resource_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApiGatewayRestApi.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsApiGatewayRestApi.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsApiGatewayRestApi.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsApiGatewayRestApi.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsApiGatewayRestApi.tfResourceType = "aws_api_gateway_rest_api";
    return DataAwsApiGatewayRestApi;
}(cdktf.TerraformDataSource));
exports.DataAwsApiGatewayRestApi = DataAwsApiGatewayRestApi;
