"use strict";
// https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part.html
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
exports.ApiGatewayDocumentationPart = void 0;
var cdktf = require("cdktf");
function apiGatewayDocumentationPartLocationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        method: cdktf.stringToTerraform(struct.method),
        name: cdktf.stringToTerraform(struct.name),
        path: cdktf.stringToTerraform(struct.path),
        status_code: cdktf.stringToTerraform(struct.statusCode),
        type: cdktf.stringToTerraform(struct.type)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part.html aws_api_gateway_documentation_part}
*/
var ApiGatewayDocumentationPart = /** @class */ (function (_super) {
    __extends(ApiGatewayDocumentationPart, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part.html aws_api_gateway_documentation_part} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayDocumentationPartConfig
    */
    function ApiGatewayDocumentationPart(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_api_gateway_documentation_part',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._properties = config.properties;
        _this._restApiId = config.restApiId;
        _this._location = config.location;
        return _this;
    }
    Object.defineProperty(ApiGatewayDocumentationPart.prototype, "id", {
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
    Object.defineProperty(ApiGatewayDocumentationPart.prototype, "properties", {
        get: function () {
            return this.getStringAttribute('properties');
        },
        set: function (value) {
            this._properties = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayDocumentationPart.prototype, "propertiesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._properties;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayDocumentationPart.prototype, "restApiId", {
        get: function () {
            return this.getStringAttribute('rest_api_id');
        },
        set: function (value) {
            this._restApiId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayDocumentationPart.prototype, "restApiIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._restApiId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayDocumentationPart.prototype, "location", {
        get: function () {
            return this.interpolationForAttribute('location');
        },
        set: function (value) {
            this._location = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayDocumentationPart.prototype, "locationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._location;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ApiGatewayDocumentationPart.prototype.synthesizeAttributes = function () {
        return {
            properties: cdktf.stringToTerraform(this._properties),
            rest_api_id: cdktf.stringToTerraform(this._restApiId),
            location: cdktf.listMapper(apiGatewayDocumentationPartLocationToTerraform)(this._location)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ApiGatewayDocumentationPart.tfResourceType = "aws_api_gateway_documentation_part";
    return ApiGatewayDocumentationPart;
}(cdktf.TerraformResource));
exports.ApiGatewayDocumentationPart = ApiGatewayDocumentationPart;
