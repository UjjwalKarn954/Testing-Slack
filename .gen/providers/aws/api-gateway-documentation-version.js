"use strict";
// https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_version.html
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
exports.ApiGatewayDocumentationVersion = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_version.html aws_api_gateway_documentation_version}
*/
var ApiGatewayDocumentationVersion = /** @class */ (function (_super) {
    __extends(ApiGatewayDocumentationVersion, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_version.html aws_api_gateway_documentation_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayDocumentationVersionConfig
    */
    function ApiGatewayDocumentationVersion(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_api_gateway_documentation_version',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._description = config.description;
        _this._restApiId = config.restApiId;
        _this._version = config.version;
        return _this;
    }
    Object.defineProperty(ApiGatewayDocumentationVersion.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayDocumentationVersion.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(ApiGatewayDocumentationVersion.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayDocumentationVersion.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayDocumentationVersion.prototype, "restApiId", {
        get: function () {
            return this.getStringAttribute('rest_api_id');
        },
        set: function (value) {
            this._restApiId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayDocumentationVersion.prototype, "restApiIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._restApiId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayDocumentationVersion.prototype, "version", {
        get: function () {
            return this.getStringAttribute('version');
        },
        set: function (value) {
            this._version = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayDocumentationVersion.prototype, "versionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._version;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ApiGatewayDocumentationVersion.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            rest_api_id: cdktf.stringToTerraform(this._restApiId),
            version: cdktf.stringToTerraform(this._version)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ApiGatewayDocumentationVersion.tfResourceType = "aws_api_gateway_documentation_version";
    return ApiGatewayDocumentationVersion;
}(cdktf.TerraformResource));
exports.ApiGatewayDocumentationVersion = ApiGatewayDocumentationVersion;
