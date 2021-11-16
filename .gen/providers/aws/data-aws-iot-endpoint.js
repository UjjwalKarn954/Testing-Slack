"use strict";
// https://www.terraform.io/docs/providers/aws/d/iot_endpoint.html
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
exports.DataAwsIotEndpoint = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/iot_endpoint.html aws_iot_endpoint}
*/
var DataAwsIotEndpoint = /** @class */ (function (_super) {
    __extends(DataAwsIotEndpoint, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/iot_endpoint.html aws_iot_endpoint} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsIotEndpointConfig = {}
    */
    function DataAwsIotEndpoint(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_iot_endpoint',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._endpointType = config.endpointType;
        return _this;
    }
    Object.defineProperty(DataAwsIotEndpoint.prototype, "endpointAddress", {
        // ==========
        // ATTRIBUTES
        // ==========
        // endpoint_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('endpoint_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIotEndpoint.prototype, "endpointType", {
        get: function () {
            return this.getStringAttribute('endpoint_type');
        },
        set: function (value) {
            this._endpointType = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsIotEndpoint.prototype.resetEndpointType = function () {
        this._endpointType = undefined;
    };
    Object.defineProperty(DataAwsIotEndpoint.prototype, "endpointTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._endpointType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIotEndpoint.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsIotEndpoint.prototype.synthesizeAttributes = function () {
        return {
            endpoint_type: cdktf.stringToTerraform(this._endpointType)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsIotEndpoint.tfResourceType = "aws_iot_endpoint";
    return DataAwsIotEndpoint;
}(cdktf.TerraformDataSource));
exports.DataAwsIotEndpoint = DataAwsIotEndpoint;
