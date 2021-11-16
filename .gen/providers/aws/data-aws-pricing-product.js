"use strict";
// https://www.terraform.io/docs/providers/aws/d/pricing_product.html
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
exports.DataAwsPricingProduct = void 0;
var cdktf = require("cdktf");
function dataAwsPricingProductFiltersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        field: cdktf.stringToTerraform(struct.field),
        value: cdktf.stringToTerraform(struct.value)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/pricing_product.html aws_pricing_product}
*/
var DataAwsPricingProduct = /** @class */ (function (_super) {
    __extends(DataAwsPricingProduct, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/pricing_product.html aws_pricing_product} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsPricingProductConfig
    */
    function DataAwsPricingProduct(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_pricing_product',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._serviceCode = config.serviceCode;
        _this._filters = config.filters;
        return _this;
    }
    Object.defineProperty(DataAwsPricingProduct.prototype, "id", {
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
    Object.defineProperty(DataAwsPricingProduct.prototype, "result", {
        // result - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('result');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsPricingProduct.prototype, "serviceCode", {
        get: function () {
            return this.getStringAttribute('service_code');
        },
        set: function (value) {
            this._serviceCode = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsPricingProduct.prototype, "serviceCodeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serviceCode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsPricingProduct.prototype, "filters", {
        get: function () {
            return this.interpolationForAttribute('filters');
        },
        set: function (value) {
            this._filters = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsPricingProduct.prototype, "filtersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filters;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsPricingProduct.prototype.synthesizeAttributes = function () {
        return {
            service_code: cdktf.stringToTerraform(this._serviceCode),
            filters: cdktf.listMapper(dataAwsPricingProductFiltersToTerraform)(this._filters)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsPricingProduct.tfResourceType = "aws_pricing_product";
    return DataAwsPricingProduct;
}(cdktf.TerraformDataSource));
exports.DataAwsPricingProduct = DataAwsPricingProduct;
