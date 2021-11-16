"use strict";
// https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association.html
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
exports.ServicecatalogProductPortfolioAssociation = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association.html aws_servicecatalog_product_portfolio_association}
*/
var ServicecatalogProductPortfolioAssociation = /** @class */ (function (_super) {
    __extends(ServicecatalogProductPortfolioAssociation, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product_portfolio_association.html aws_servicecatalog_product_portfolio_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogProductPortfolioAssociationConfig
    */
    function ServicecatalogProductPortfolioAssociation(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_servicecatalog_product_portfolio_association',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._acceptLanguage = config.acceptLanguage;
        _this._portfolioId = config.portfolioId;
        _this._productId = config.productId;
        _this._sourcePortfolioId = config.sourcePortfolioId;
        return _this;
    }
    Object.defineProperty(ServicecatalogProductPortfolioAssociation.prototype, "acceptLanguage", {
        get: function () {
            return this.getStringAttribute('accept_language');
        },
        set: function (value) {
            this._acceptLanguage = value;
        },
        enumerable: false,
        configurable: true
    });
    ServicecatalogProductPortfolioAssociation.prototype.resetAcceptLanguage = function () {
        this._acceptLanguage = undefined;
    };
    Object.defineProperty(ServicecatalogProductPortfolioAssociation.prototype, "acceptLanguageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._acceptLanguage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProductPortfolioAssociation.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProductPortfolioAssociation.prototype, "portfolioId", {
        get: function () {
            return this.getStringAttribute('portfolio_id');
        },
        set: function (value) {
            this._portfolioId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProductPortfolioAssociation.prototype, "portfolioIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._portfolioId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProductPortfolioAssociation.prototype, "productId", {
        get: function () {
            return this.getStringAttribute('product_id');
        },
        set: function (value) {
            this._productId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProductPortfolioAssociation.prototype, "productIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._productId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProductPortfolioAssociation.prototype, "sourcePortfolioId", {
        get: function () {
            return this.getStringAttribute('source_portfolio_id');
        },
        set: function (value) {
            this._sourcePortfolioId = value;
        },
        enumerable: false,
        configurable: true
    });
    ServicecatalogProductPortfolioAssociation.prototype.resetSourcePortfolioId = function () {
        this._sourcePortfolioId = undefined;
    };
    Object.defineProperty(ServicecatalogProductPortfolioAssociation.prototype, "sourcePortfolioIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sourcePortfolioId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ServicecatalogProductPortfolioAssociation.prototype.synthesizeAttributes = function () {
        return {
            accept_language: cdktf.stringToTerraform(this._acceptLanguage),
            portfolio_id: cdktf.stringToTerraform(this._portfolioId),
            product_id: cdktf.stringToTerraform(this._productId),
            source_portfolio_id: cdktf.stringToTerraform(this._sourcePortfolioId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ServicecatalogProductPortfolioAssociation.tfResourceType = "aws_servicecatalog_product_portfolio_association";
    return ServicecatalogProductPortfolioAssociation;
}(cdktf.TerraformResource));
exports.ServicecatalogProductPortfolioAssociation = ServicecatalogProductPortfolioAssociation;
