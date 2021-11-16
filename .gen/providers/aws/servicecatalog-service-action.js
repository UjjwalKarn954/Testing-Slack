"use strict";
// https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action.html
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
exports.ServicecatalogServiceAction = void 0;
var cdktf = require("cdktf");
function servicecatalogServiceActionDefinitionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        assume_role: cdktf.stringToTerraform(struct.assumeRole),
        name: cdktf.stringToTerraform(struct.name),
        parameters: cdktf.stringToTerraform(struct.parameters),
        type: cdktf.stringToTerraform(struct.type),
        version: cdktf.stringToTerraform(struct.version)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action.html aws_servicecatalog_service_action}
*/
var ServicecatalogServiceAction = /** @class */ (function (_super) {
    __extends(ServicecatalogServiceAction, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action.html aws_servicecatalog_service_action} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogServiceActionConfig
    */
    function ServicecatalogServiceAction(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_servicecatalog_service_action',
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
        _this._name = config.name;
        _this._definition = config.definition;
        return _this;
    }
    Object.defineProperty(ServicecatalogServiceAction.prototype, "acceptLanguage", {
        get: function () {
            return this.getStringAttribute('accept_language');
        },
        set: function (value) {
            this._acceptLanguage = value;
        },
        enumerable: false,
        configurable: true
    });
    ServicecatalogServiceAction.prototype.resetAcceptLanguage = function () {
        this._acceptLanguage = undefined;
    };
    Object.defineProperty(ServicecatalogServiceAction.prototype, "acceptLanguageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._acceptLanguage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogServiceAction.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ServicecatalogServiceAction.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(ServicecatalogServiceAction.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogServiceAction.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogServiceAction.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogServiceAction.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogServiceAction.prototype, "definition", {
        get: function () {
            return this.interpolationForAttribute('definition');
        },
        set: function (value) {
            this._definition = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogServiceAction.prototype, "definitionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._definition;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ServicecatalogServiceAction.prototype.synthesizeAttributes = function () {
        return {
            accept_language: cdktf.stringToTerraform(this._acceptLanguage),
            description: cdktf.stringToTerraform(this._description),
            name: cdktf.stringToTerraform(this._name),
            definition: cdktf.listMapper(servicecatalogServiceActionDefinitionToTerraform)(this._definition)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ServicecatalogServiceAction.tfResourceType = "aws_servicecatalog_service_action";
    return ServicecatalogServiceAction;
}(cdktf.TerraformResource));
exports.ServicecatalogServiceAction = ServicecatalogServiceAction;
