"use strict";
// https://www.terraform.io/docs/providers/aws/d/api_gateway_resource.html
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
exports.DataAwsApiGatewayResource = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_resource.html aws_api_gateway_resource}
*/
var DataAwsApiGatewayResource = /** @class */ (function (_super) {
    __extends(DataAwsApiGatewayResource, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_resource.html aws_api_gateway_resource} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsApiGatewayResourceConfig
    */
    function DataAwsApiGatewayResource(scope, id, config) {
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
        _this._path = config.path;
        _this._restApiId = config.restApiId;
        return _this;
    }
    Object.defineProperty(DataAwsApiGatewayResource.prototype, "id", {
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
    Object.defineProperty(DataAwsApiGatewayResource.prototype, "parentId", {
        // parent_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('parent_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApiGatewayResource.prototype, "path", {
        get: function () {
            return this.getStringAttribute('path');
        },
        set: function (value) {
            this._path = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApiGatewayResource.prototype, "pathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._path;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApiGatewayResource.prototype, "pathPart", {
        // path_part - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('path_part');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApiGatewayResource.prototype, "restApiId", {
        get: function () {
            return this.getStringAttribute('rest_api_id');
        },
        set: function (value) {
            this._restApiId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApiGatewayResource.prototype, "restApiIdInput", {
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
    DataAwsApiGatewayResource.prototype.synthesizeAttributes = function () {
        return {
            path: cdktf.stringToTerraform(this._path),
            rest_api_id: cdktf.stringToTerraform(this._restApiId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsApiGatewayResource.tfResourceType = "aws_api_gateway_resource";
    return DataAwsApiGatewayResource;
}(cdktf.TerraformDataSource));
exports.DataAwsApiGatewayResource = DataAwsApiGatewayResource;
