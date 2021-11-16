"use strict";
// https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share.html
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
exports.ServicecatalogPortfolioShare = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share.html aws_servicecatalog_portfolio_share}
*/
var ServicecatalogPortfolioShare = /** @class */ (function (_super) {
    __extends(ServicecatalogPortfolioShare, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio_share.html aws_servicecatalog_portfolio_share} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogPortfolioShareConfig
    */
    function ServicecatalogPortfolioShare(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_servicecatalog_portfolio_share',
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
        _this._principalId = config.principalId;
        _this._shareTagOptions = config.shareTagOptions;
        _this._type = config.type;
        _this._waitForAcceptance = config.waitForAcceptance;
        return _this;
    }
    Object.defineProperty(ServicecatalogPortfolioShare.prototype, "acceptLanguage", {
        get: function () {
            return this.getStringAttribute('accept_language');
        },
        set: function (value) {
            this._acceptLanguage = value;
        },
        enumerable: false,
        configurable: true
    });
    ServicecatalogPortfolioShare.prototype.resetAcceptLanguage = function () {
        this._acceptLanguage = undefined;
    };
    Object.defineProperty(ServicecatalogPortfolioShare.prototype, "acceptLanguageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._acceptLanguage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogPortfolioShare.prototype, "accepted", {
        // accepted - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('accepted');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogPortfolioShare.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogPortfolioShare.prototype, "portfolioId", {
        get: function () {
            return this.getStringAttribute('portfolio_id');
        },
        set: function (value) {
            this._portfolioId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogPortfolioShare.prototype, "portfolioIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._portfolioId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogPortfolioShare.prototype, "principalId", {
        get: function () {
            return this.getStringAttribute('principal_id');
        },
        set: function (value) {
            this._principalId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogPortfolioShare.prototype, "principalIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._principalId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogPortfolioShare.prototype, "shareTagOptions", {
        get: function () {
            return this.getBooleanAttribute('share_tag_options');
        },
        set: function (value) {
            this._shareTagOptions = value;
        },
        enumerable: false,
        configurable: true
    });
    ServicecatalogPortfolioShare.prototype.resetShareTagOptions = function () {
        this._shareTagOptions = undefined;
    };
    Object.defineProperty(ServicecatalogPortfolioShare.prototype, "shareTagOptionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._shareTagOptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogPortfolioShare.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogPortfolioShare.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogPortfolioShare.prototype, "waitForAcceptance", {
        get: function () {
            return this.getBooleanAttribute('wait_for_acceptance');
        },
        set: function (value) {
            this._waitForAcceptance = value;
        },
        enumerable: false,
        configurable: true
    });
    ServicecatalogPortfolioShare.prototype.resetWaitForAcceptance = function () {
        this._waitForAcceptance = undefined;
    };
    Object.defineProperty(ServicecatalogPortfolioShare.prototype, "waitForAcceptanceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._waitForAcceptance;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ServicecatalogPortfolioShare.prototype.synthesizeAttributes = function () {
        return {
            accept_language: cdktf.stringToTerraform(this._acceptLanguage),
            portfolio_id: cdktf.stringToTerraform(this._portfolioId),
            principal_id: cdktf.stringToTerraform(this._principalId),
            share_tag_options: cdktf.booleanToTerraform(this._shareTagOptions),
            type: cdktf.stringToTerraform(this._type),
            wait_for_acceptance: cdktf.booleanToTerraform(this._waitForAcceptance)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ServicecatalogPortfolioShare.tfResourceType = "aws_servicecatalog_portfolio_share";
    return ServicecatalogPortfolioShare;
}(cdktf.TerraformResource));
exports.ServicecatalogPortfolioShare = ServicecatalogPortfolioShare;
