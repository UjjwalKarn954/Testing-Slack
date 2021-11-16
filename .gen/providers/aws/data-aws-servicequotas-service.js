"use strict";
// https://www.terraform.io/docs/providers/aws/d/servicequotas_service.html
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
exports.DataAwsServicequotasService = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/servicequotas_service.html aws_servicequotas_service}
*/
var DataAwsServicequotasService = /** @class */ (function (_super) {
    __extends(DataAwsServicequotasService, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/servicequotas_service.html aws_servicequotas_service} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsServicequotasServiceConfig
    */
    function DataAwsServicequotasService(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_servicequotas_service',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._serviceName = config.serviceName;
        return _this;
    }
    Object.defineProperty(DataAwsServicequotasService.prototype, "id", {
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
    Object.defineProperty(DataAwsServicequotasService.prototype, "serviceCode", {
        // service_code - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('service_code');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServicequotasService.prototype, "serviceName", {
        get: function () {
            return this.getStringAttribute('service_name');
        },
        set: function (value) {
            this._serviceName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServicequotasService.prototype, "serviceNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serviceName;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsServicequotasService.prototype.synthesizeAttributes = function () {
        return {
            service_name: cdktf.stringToTerraform(this._serviceName)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsServicequotasService.tfResourceType = "aws_servicequotas_service";
    return DataAwsServicequotasService;
}(cdktf.TerraformDataSource));
exports.DataAwsServicequotasService = DataAwsServicequotasService;
