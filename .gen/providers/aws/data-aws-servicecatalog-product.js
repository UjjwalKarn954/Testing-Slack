"use strict";
// https://www.terraform.io/docs/providers/aws/d/servicecatalog_product.html
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
exports.DataAwsServicecatalogProduct = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_product.html aws_servicecatalog_product}
*/
var DataAwsServicecatalogProduct = /** @class */ (function (_super) {
    __extends(DataAwsServicecatalogProduct, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_product.html aws_servicecatalog_product} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsServicecatalogProductConfig
    */
    function DataAwsServicecatalogProduct(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_servicecatalog_product',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._acceptLanguage = config.acceptLanguage;
        _this._id = config.id;
        _this._tags = config.tags;
        return _this;
    }
    Object.defineProperty(DataAwsServicecatalogProduct.prototype, "acceptLanguage", {
        get: function () {
            return this.getStringAttribute('accept_language');
        },
        set: function (value) {
            this._acceptLanguage = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsServicecatalogProduct.prototype.resetAcceptLanguage = function () {
        this._acceptLanguage = undefined;
    };
    Object.defineProperty(DataAwsServicecatalogProduct.prototype, "acceptLanguageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._acceptLanguage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServicecatalogProduct.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServicecatalogProduct.prototype, "createdTime", {
        // created_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServicecatalogProduct.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServicecatalogProduct.prototype, "distributor", {
        // distributor - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('distributor');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServicecatalogProduct.prototype, "hasDefaultPath", {
        // has_default_path - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('has_default_path');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServicecatalogProduct.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServicecatalogProduct.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServicecatalogProduct.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServicecatalogProduct.prototype, "owner", {
        // owner - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServicecatalogProduct.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServicecatalogProduct.prototype, "supportDescription", {
        // support_description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('support_description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServicecatalogProduct.prototype, "supportEmail", {
        // support_email - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('support_email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServicecatalogProduct.prototype, "supportUrl", {
        // support_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('support_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServicecatalogProduct.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsServicecatalogProduct.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsServicecatalogProduct.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServicecatalogProduct.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsServicecatalogProduct.prototype.synthesizeAttributes = function () {
        return {
            accept_language: cdktf.stringToTerraform(this._acceptLanguage),
            id: cdktf.stringToTerraform(this._id),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsServicecatalogProduct.tfResourceType = "aws_servicecatalog_product";
    return DataAwsServicecatalogProduct;
}(cdktf.TerraformDataSource));
exports.DataAwsServicecatalogProduct = DataAwsServicecatalogProduct;
