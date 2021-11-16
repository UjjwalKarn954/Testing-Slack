"use strict";
// https://www.terraform.io/docs/providers/aws/r/servicecatalog_budget_resource_association.html
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
exports.ServicecatalogBudgetResourceAssociation = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_budget_resource_association.html aws_servicecatalog_budget_resource_association}
*/
var ServicecatalogBudgetResourceAssociation = /** @class */ (function (_super) {
    __extends(ServicecatalogBudgetResourceAssociation, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_budget_resource_association.html aws_servicecatalog_budget_resource_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogBudgetResourceAssociationConfig
    */
    function ServicecatalogBudgetResourceAssociation(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_servicecatalog_budget_resource_association',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._budgetName = config.budgetName;
        _this._resourceId = config.resourceId;
        return _this;
    }
    Object.defineProperty(ServicecatalogBudgetResourceAssociation.prototype, "budgetName", {
        get: function () {
            return this.getStringAttribute('budget_name');
        },
        set: function (value) {
            this._budgetName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogBudgetResourceAssociation.prototype, "budgetNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._budgetName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogBudgetResourceAssociation.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogBudgetResourceAssociation.prototype, "resourceId", {
        get: function () {
            return this.getStringAttribute('resource_id');
        },
        set: function (value) {
            this._resourceId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogBudgetResourceAssociation.prototype, "resourceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resourceId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ServicecatalogBudgetResourceAssociation.prototype.synthesizeAttributes = function () {
        return {
            budget_name: cdktf.stringToTerraform(this._budgetName),
            resource_id: cdktf.stringToTerraform(this._resourceId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ServicecatalogBudgetResourceAssociation.tfResourceType = "aws_servicecatalog_budget_resource_association";
    return ServicecatalogBudgetResourceAssociation;
}(cdktf.TerraformResource));
exports.ServicecatalogBudgetResourceAssociation = ServicecatalogBudgetResourceAssociation;