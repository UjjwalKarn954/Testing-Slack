"use strict";
// https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints.html
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
exports.DataAwsServicecatalogPortfolioConstraints = exports.DataAwsServicecatalogPortfolioConstraintsDetails = void 0;
var cdktf = require("cdktf");
var DataAwsServicecatalogPortfolioConstraintsDetails = /** @class */ (function (_super) {
    __extends(DataAwsServicecatalogPortfolioConstraintsDetails, _super);
    function DataAwsServicecatalogPortfolioConstraintsDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsServicecatalogPortfolioConstraintsDetails.prototype, "constraintId", {
        // constraint_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('constraint_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServicecatalogPortfolioConstraintsDetails.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServicecatalogPortfolioConstraintsDetails.prototype, "owner", {
        // owner - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServicecatalogPortfolioConstraintsDetails.prototype, "portfolioId", {
        // portfolio_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('portfolio_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServicecatalogPortfolioConstraintsDetails.prototype, "productId", {
        // product_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('product_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServicecatalogPortfolioConstraintsDetails.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsServicecatalogPortfolioConstraintsDetails;
}(cdktf.ComplexComputedList));
exports.DataAwsServicecatalogPortfolioConstraintsDetails = DataAwsServicecatalogPortfolioConstraintsDetails;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints.html aws_servicecatalog_portfolio_constraints}
*/
var DataAwsServicecatalogPortfolioConstraints = /** @class */ (function (_super) {
    __extends(DataAwsServicecatalogPortfolioConstraints, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints.html aws_servicecatalog_portfolio_constraints} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsServicecatalogPortfolioConstraintsConfig
    */
    function DataAwsServicecatalogPortfolioConstraints(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_servicecatalog_portfolio_constraints',
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
        return _this;
    }
    Object.defineProperty(DataAwsServicecatalogPortfolioConstraints.prototype, "acceptLanguage", {
        get: function () {
            return this.getStringAttribute('accept_language');
        },
        set: function (value) {
            this._acceptLanguage = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsServicecatalogPortfolioConstraints.prototype.resetAcceptLanguage = function () {
        this._acceptLanguage = undefined;
    };
    Object.defineProperty(DataAwsServicecatalogPortfolioConstraints.prototype, "acceptLanguageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._acceptLanguage;
        },
        enumerable: false,
        configurable: true
    });
    // details - computed: true, optional: false, required: false
    DataAwsServicecatalogPortfolioConstraints.prototype.details = function (index) {
        return new DataAwsServicecatalogPortfolioConstraintsDetails(this, 'details', index);
    };
    Object.defineProperty(DataAwsServicecatalogPortfolioConstraints.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServicecatalogPortfolioConstraints.prototype, "portfolioId", {
        get: function () {
            return this.getStringAttribute('portfolio_id');
        },
        set: function (value) {
            this._portfolioId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServicecatalogPortfolioConstraints.prototype, "portfolioIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._portfolioId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServicecatalogPortfolioConstraints.prototype, "productId", {
        get: function () {
            return this.getStringAttribute('product_id');
        },
        set: function (value) {
            this._productId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsServicecatalogPortfolioConstraints.prototype.resetProductId = function () {
        this._productId = undefined;
    };
    Object.defineProperty(DataAwsServicecatalogPortfolioConstraints.prototype, "productIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._productId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsServicecatalogPortfolioConstraints.prototype.synthesizeAttributes = function () {
        return {
            accept_language: cdktf.stringToTerraform(this._acceptLanguage),
            portfolio_id: cdktf.stringToTerraform(this._portfolioId),
            product_id: cdktf.stringToTerraform(this._productId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsServicecatalogPortfolioConstraints.tfResourceType = "aws_servicecatalog_portfolio_constraints";
    return DataAwsServicecatalogPortfolioConstraints;
}(cdktf.TerraformDataSource));
exports.DataAwsServicecatalogPortfolioConstraints = DataAwsServicecatalogPortfolioConstraints;
