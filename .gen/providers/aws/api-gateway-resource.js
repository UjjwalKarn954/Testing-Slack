"use strict";
// https://www.terraform.io/docs/providers/aws/r/api_gateway_resource.html
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
exports.ApiGatewayResource = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_resource.html aws_api_gateway_resource}
*/
var ApiGatewayResource = /** @class */ (function (_super) {
    __extends(ApiGatewayResource, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_resource.html aws_api_gateway_resource} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayResourceConfig
    */
    function ApiGatewayResource(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_api_gateway_resource',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._parentId = config.parentId;
        _this._pathPart = config.pathPart;
        _this._restApiId = config.restApiId;
        return _this;
    }
    Object.defineProperty(ApiGatewayResource.prototype, "id", {
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
    Object.defineProperty(ApiGatewayResource.prototype, "parentId", {
        get: function () {
            return this.getStringAttribute('parent_id');
        },
        set: function (value) {
            this._parentId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayResource.prototype, "parentIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._parentId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayResource.prototype, "path", {
        // path - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('path');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayResource.prototype, "pathPart", {
        get: function () {
            return this.getStringAttribute('path_part');
        },
        set: function (value) {
            this._pathPart = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayResource.prototype, "pathPartInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pathPart;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayResource.prototype, "restApiId", {
        get: function () {
            return this.getStringAttribute('rest_api_id');
        },
        set: function (value) {
            this._restApiId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayResource.prototype, "restApiIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._restApiId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ApiGatewayResource.prototype.synthesizeAttributes = function () {
        return {
            parent_id: cdktf.stringToTerraform(this._parentId),
            path_part: cdktf.stringToTerraform(this._pathPart),
            rest_api_id: cdktf.stringToTerraform(this._restApiId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ApiGatewayResource.tfResourceType = "aws_api_gateway_resource";
    return ApiGatewayResource;
}(cdktf.TerraformResource));
exports.ApiGatewayResource = ApiGatewayResource;
