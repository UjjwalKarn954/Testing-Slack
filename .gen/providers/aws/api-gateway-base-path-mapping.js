"use strict";
// https://www.terraform.io/docs/providers/aws/r/api_gateway_base_path_mapping.html
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
exports.ApiGatewayBasePathMapping = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_base_path_mapping.html aws_api_gateway_base_path_mapping}
*/
var ApiGatewayBasePathMapping = /** @class */ (function (_super) {
    __extends(ApiGatewayBasePathMapping, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_base_path_mapping.html aws_api_gateway_base_path_mapping} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayBasePathMappingConfig
    */
    function ApiGatewayBasePathMapping(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_api_gateway_base_path_mapping',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._apiId = config.apiId;
        _this._basePath = config.basePath;
        _this._domainName = config.domainName;
        _this._stageName = config.stageName;
        return _this;
    }
    Object.defineProperty(ApiGatewayBasePathMapping.prototype, "apiId", {
        get: function () {
            return this.getStringAttribute('api_id');
        },
        set: function (value) {
            this._apiId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayBasePathMapping.prototype, "apiIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._apiId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayBasePathMapping.prototype, "basePath", {
        get: function () {
            return this.getStringAttribute('base_path');
        },
        set: function (value) {
            this._basePath = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayBasePathMapping.prototype.resetBasePath = function () {
        this._basePath = undefined;
    };
    Object.defineProperty(ApiGatewayBasePathMapping.prototype, "basePathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._basePath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayBasePathMapping.prototype, "domainName", {
        get: function () {
            return this.getStringAttribute('domain_name');
        },
        set: function (value) {
            this._domainName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayBasePathMapping.prototype, "domainNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domainName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayBasePathMapping.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayBasePathMapping.prototype, "stageName", {
        get: function () {
            return this.getStringAttribute('stage_name');
        },
        set: function (value) {
            this._stageName = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayBasePathMapping.prototype.resetStageName = function () {
        this._stageName = undefined;
    };
    Object.defineProperty(ApiGatewayBasePathMapping.prototype, "stageNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._stageName;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ApiGatewayBasePathMapping.prototype.synthesizeAttributes = function () {
        return {
            api_id: cdktf.stringToTerraform(this._apiId),
            base_path: cdktf.stringToTerraform(this._basePath),
            domain_name: cdktf.stringToTerraform(this._domainName),
            stage_name: cdktf.stringToTerraform(this._stageName)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ApiGatewayBasePathMapping.tfResourceType = "aws_api_gateway_base_path_mapping";
    return ApiGatewayBasePathMapping;
}(cdktf.TerraformResource));
exports.ApiGatewayBasePathMapping = ApiGatewayBasePathMapping;
