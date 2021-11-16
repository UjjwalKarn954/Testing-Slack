"use strict";
// https://www.terraform.io/docs/providers/aws/d/apigatewayv2_apis.html
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
exports.DataAwsApigatewayv2Apis = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_apis.html aws_apigatewayv2_apis}
*/
var DataAwsApigatewayv2Apis = /** @class */ (function (_super) {
    __extends(DataAwsApigatewayv2Apis, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_apis.html aws_apigatewayv2_apis} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsApigatewayv2ApisConfig = {}
    */
    function DataAwsApigatewayv2Apis(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_apigatewayv2_apis',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        _this._protocolType = config.protocolType;
        _this._tags = config.tags;
        return _this;
    }
    Object.defineProperty(DataAwsApigatewayv2Apis.prototype, "id", {
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
    Object.defineProperty(DataAwsApigatewayv2Apis.prototype, "ids", {
        // ids - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('ids');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApigatewayv2Apis.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsApigatewayv2Apis.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(DataAwsApigatewayv2Apis.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApigatewayv2Apis.prototype, "protocolType", {
        get: function () {
            return this.getStringAttribute('protocol_type');
        },
        set: function (value) {
            this._protocolType = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsApigatewayv2Apis.prototype.resetProtocolType = function () {
        this._protocolType = undefined;
    };
    Object.defineProperty(DataAwsApigatewayv2Apis.prototype, "protocolTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._protocolType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApigatewayv2Apis.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsApigatewayv2Apis.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsApigatewayv2Apis.prototype, "tagsInput", {
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
    DataAwsApigatewayv2Apis.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            protocol_type: cdktf.stringToTerraform(this._protocolType),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsApigatewayv2Apis.tfResourceType = "aws_apigatewayv2_apis";
    return DataAwsApigatewayv2Apis;
}(cdktf.TerraformDataSource));
exports.DataAwsApigatewayv2Apis = DataAwsApigatewayv2Apis;
