"use strict";
// https://www.terraform.io/docs/providers/aws/r/servicecatalog_constraint.html
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
exports.ServicecatalogConstraint = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_constraint.html aws_servicecatalog_constraint}
*/
var ServicecatalogConstraint = /** @class */ (function (_super) {
    __extends(ServicecatalogConstraint, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_constraint.html aws_servicecatalog_constraint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogConstraintConfig
    */
    function ServicecatalogConstraint(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_servicecatalog_constraint',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._acceptLanguage = config.acceptLanguage;
        _this._description = config.description;
        _this._parameters = config.parameters;
        _this._portfolioId = config.portfolioId;
        _this._productId = config.productId;
        _this._type = config.type;
        return _this;
    }
    Object.defineProperty(ServicecatalogConstraint.prototype, "acceptLanguage", {
        get: function () {
            return this.getStringAttribute('accept_language');
        },
        set: function (value) {
            this._acceptLanguage = value;
        },
        enumerable: false,
        configurable: true
    });
    ServicecatalogConstraint.prototype.resetAcceptLanguage = function () {
        this._acceptLanguage = undefined;
    };
    Object.defineProperty(ServicecatalogConstraint.prototype, "acceptLanguageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._acceptLanguage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogConstraint.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ServicecatalogConstraint.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(ServicecatalogConstraint.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogConstraint.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogConstraint.prototype, "owner", {
        // owner - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogConstraint.prototype, "parameters", {
        get: function () {
            return this.getStringAttribute('parameters');
        },
        set: function (value) {
            this._parameters = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogConstraint.prototype, "parametersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._parameters;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogConstraint.prototype, "portfolioId", {
        get: function () {
            return this.getStringAttribute('portfolio_id');
        },
        set: function (value) {
            this._portfolioId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogConstraint.prototype, "portfolioIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._portfolioId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogConstraint.prototype, "productId", {
        get: function () {
            return this.getStringAttribute('product_id');
        },
        set: function (value) {
            this._productId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogConstraint.prototype, "productIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._productId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogConstraint.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogConstraint.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogConstraint.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ServicecatalogConstraint.prototype.synthesizeAttributes = function () {
        return {
            accept_language: cdktf.stringToTerraform(this._acceptLanguage),
            description: cdktf.stringToTerraform(this._description),
            parameters: cdktf.stringToTerraform(this._parameters),
            portfolio_id: cdktf.stringToTerraform(this._portfolioId),
            product_id: cdktf.stringToTerraform(this._productId),
            type: cdktf.stringToTerraform(this._type)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ServicecatalogConstraint.tfResourceType = "aws_servicecatalog_constraint";
    return ServicecatalogConstraint;
}(cdktf.TerraformResource));
exports.ServicecatalogConstraint = ServicecatalogConstraint;
