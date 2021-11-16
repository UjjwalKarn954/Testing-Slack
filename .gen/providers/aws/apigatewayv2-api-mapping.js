"use strict";
// https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api_mapping.html
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
exports.Apigatewayv2ApiMapping = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api_mapping.html aws_apigatewayv2_api_mapping}
*/
var Apigatewayv2ApiMapping = /** @class */ (function (_super) {
    __extends(Apigatewayv2ApiMapping, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_api_mapping.html aws_apigatewayv2_api_mapping} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Apigatewayv2ApiMappingConfig
    */
    function Apigatewayv2ApiMapping(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_apigatewayv2_api_mapping',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._apiId = config.apiId;
        _this._apiMappingKey = config.apiMappingKey;
        _this._domainName = config.domainName;
        _this._stage = config.stage;
        return _this;
    }
    Object.defineProperty(Apigatewayv2ApiMapping.prototype, "apiId", {
        get: function () {
            return this.getStringAttribute('api_id');
        },
        set: function (value) {
            this._apiId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2ApiMapping.prototype, "apiIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._apiId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2ApiMapping.prototype, "apiMappingKey", {
        get: function () {
            return this.getStringAttribute('api_mapping_key');
        },
        set: function (value) {
            this._apiMappingKey = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2ApiMapping.prototype.resetApiMappingKey = function () {
        this._apiMappingKey = undefined;
    };
    Object.defineProperty(Apigatewayv2ApiMapping.prototype, "apiMappingKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._apiMappingKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2ApiMapping.prototype, "domainName", {
        get: function () {
            return this.getStringAttribute('domain_name');
        },
        set: function (value) {
            this._domainName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2ApiMapping.prototype, "domainNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domainName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2ApiMapping.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2ApiMapping.prototype, "stage", {
        get: function () {
            return this.getStringAttribute('stage');
        },
        set: function (value) {
            this._stage = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2ApiMapping.prototype, "stageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._stage;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Apigatewayv2ApiMapping.prototype.synthesizeAttributes = function () {
        return {
            api_id: cdktf.stringToTerraform(this._apiId),
            api_mapping_key: cdktf.stringToTerraform(this._apiMappingKey),
            domain_name: cdktf.stringToTerraform(this._domainName),
            stage: cdktf.stringToTerraform(this._stage)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Apigatewayv2ApiMapping.tfResourceType = "aws_apigatewayv2_api_mapping";
    return Apigatewayv2ApiMapping;
}(cdktf.TerraformResource));
exports.Apigatewayv2ApiMapping = Apigatewayv2ApiMapping;
