"use strict";
// https://www.terraform.io/docs/providers/aws/r/servicecatalog_principal_portfolio_association.html
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
exports.ServicecatalogPrincipalPortfolioAssociation = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_principal_portfolio_association.html aws_servicecatalog_principal_portfolio_association}
*/
var ServicecatalogPrincipalPortfolioAssociation = /** @class */ (function (_super) {
    __extends(ServicecatalogPrincipalPortfolioAssociation, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_principal_portfolio_association.html aws_servicecatalog_principal_portfolio_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogPrincipalPortfolioAssociationConfig
    */
    function ServicecatalogPrincipalPortfolioAssociation(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_servicecatalog_principal_portfolio_association',
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
        _this._principalArn = config.principalArn;
        _this._principalType = config.principalType;
        return _this;
    }
    Object.defineProperty(ServicecatalogPrincipalPortfolioAssociation.prototype, "acceptLanguage", {
        get: function () {
            return this.getStringAttribute('accept_language');
        },
        set: function (value) {
            this._acceptLanguage = value;
        },
        enumerable: false,
        configurable: true
    });
    ServicecatalogPrincipalPortfolioAssociation.prototype.resetAcceptLanguage = function () {
        this._acceptLanguage = undefined;
    };
    Object.defineProperty(ServicecatalogPrincipalPortfolioAssociation.prototype, "acceptLanguageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._acceptLanguage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogPrincipalPortfolioAssociation.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogPrincipalPortfolioAssociation.prototype, "portfolioId", {
        get: function () {
            return this.getStringAttribute('portfolio_id');
        },
        set: function (value) {
            this._portfolioId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogPrincipalPortfolioAssociation.prototype, "portfolioIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._portfolioId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogPrincipalPortfolioAssociation.prototype, "principalArn", {
        get: function () {
            return this.getStringAttribute('principal_arn');
        },
        set: function (value) {
            this._principalArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogPrincipalPortfolioAssociation.prototype, "principalArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._principalArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogPrincipalPortfolioAssociation.prototype, "principalType", {
        get: function () {
            return this.getStringAttribute('principal_type');
        },
        set: function (value) {
            this._principalType = value;
        },
        enumerable: false,
        configurable: true
    });
    ServicecatalogPrincipalPortfolioAssociation.prototype.resetPrincipalType = function () {
        this._principalType = undefined;
    };
    Object.defineProperty(ServicecatalogPrincipalPortfolioAssociation.prototype, "principalTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._principalType;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ServicecatalogPrincipalPortfolioAssociation.prototype.synthesizeAttributes = function () {
        return {
            accept_language: cdktf.stringToTerraform(this._acceptLanguage),
            portfolio_id: cdktf.stringToTerraform(this._portfolioId),
            principal_arn: cdktf.stringToTerraform(this._principalArn),
            principal_type: cdktf.stringToTerraform(this._principalType)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ServicecatalogPrincipalPortfolioAssociation.tfResourceType = "aws_servicecatalog_principal_portfolio_association";
    return ServicecatalogPrincipalPortfolioAssociation;
}(cdktf.TerraformResource));
exports.ServicecatalogPrincipalPortfolioAssociation = ServicecatalogPrincipalPortfolioAssociation;
