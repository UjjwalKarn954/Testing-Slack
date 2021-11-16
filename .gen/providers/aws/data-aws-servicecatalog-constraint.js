"use strict";
// https://www.terraform.io/docs/providers/aws/d/servicecatalog_constraint.html
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
exports.DataAwsServicecatalogConstraint = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_constraint.html aws_servicecatalog_constraint}
*/
var DataAwsServicecatalogConstraint = /** @class */ (function (_super) {
    __extends(DataAwsServicecatalogConstraint, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_constraint.html aws_servicecatalog_constraint} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsServicecatalogConstraintConfig
    */
    function DataAwsServicecatalogConstraint(scope, id, config) {
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
        _this._id = config.id;
        return _this;
    }
    Object.defineProperty(DataAwsServicecatalogConstraint.prototype, "acceptLanguage", {
        get: function () {
            return this.getStringAttribute('accept_language');
        },
        set: function (value) {
            this._acceptLanguage = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsServicecatalogConstraint.prototype.resetAcceptLanguage = function () {
        this._acceptLanguage = undefined;
    };
    Object.defineProperty(DataAwsServicecatalogConstraint.prototype, "acceptLanguageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._acceptLanguage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServicecatalogConstraint.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsServicecatalogConstraint.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(DataAwsServicecatalogConstraint.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServicecatalogConstraint.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServicecatalogConstraint.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServicecatalogConstraint.prototype, "owner", {
        // owner - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServicecatalogConstraint.prototype, "parameters", {
        // parameters - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('parameters');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServicecatalogConstraint.prototype, "portfolioId", {
        // portfolio_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('portfolio_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServicecatalogConstraint.prototype, "productId", {
        // product_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('product_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServicecatalogConstraint.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsServicecatalogConstraint.prototype, "type", {
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
    DataAwsServicecatalogConstraint.prototype.synthesizeAttributes = function () {
        return {
            accept_language: cdktf.stringToTerraform(this._acceptLanguage),
            description: cdktf.stringToTerraform(this._description),
            id: cdktf.stringToTerraform(this._id)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsServicecatalogConstraint.tfResourceType = "aws_servicecatalog_constraint";
    return DataAwsServicecatalogConstraint;
}(cdktf.TerraformDataSource));
exports.DataAwsServicecatalogConstraint = DataAwsServicecatalogConstraint;
