"use strict";
// https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact.html
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
exports.ServicecatalogProvisioningArtifact = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact.html aws_servicecatalog_provisioning_artifact}
*/
var ServicecatalogProvisioningArtifact = /** @class */ (function (_super) {
    __extends(ServicecatalogProvisioningArtifact, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact.html aws_servicecatalog_provisioning_artifact} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogProvisioningArtifactConfig
    */
    function ServicecatalogProvisioningArtifact(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_servicecatalog_provisioning_artifact',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._acceptLanguage = config.acceptLanguage;
        _this._active = config.active;
        _this._description = config.description;
        _this._disableTemplateValidation = config.disableTemplateValidation;
        _this._guidance = config.guidance;
        _this._name = config.name;
        _this._productId = config.productId;
        _this._templatePhysicalId = config.templatePhysicalId;
        _this._templateUrl = config.templateUrl;
        _this._type = config.type;
        return _this;
    }
    Object.defineProperty(ServicecatalogProvisioningArtifact.prototype, "acceptLanguage", {
        get: function () {
            return this.getStringAttribute('accept_language');
        },
        set: function (value) {
            this._acceptLanguage = value;
        },
        enumerable: false,
        configurable: true
    });
    ServicecatalogProvisioningArtifact.prototype.resetAcceptLanguage = function () {
        this._acceptLanguage = undefined;
    };
    Object.defineProperty(ServicecatalogProvisioningArtifact.prototype, "acceptLanguageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._acceptLanguage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProvisioningArtifact.prototype, "active", {
        get: function () {
            return this.getBooleanAttribute('active');
        },
        set: function (value) {
            this._active = value;
        },
        enumerable: false,
        configurable: true
    });
    ServicecatalogProvisioningArtifact.prototype.resetActive = function () {
        this._active = undefined;
    };
    Object.defineProperty(ServicecatalogProvisioningArtifact.prototype, "activeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._active;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProvisioningArtifact.prototype, "createdTime", {
        // created_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProvisioningArtifact.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ServicecatalogProvisioningArtifact.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(ServicecatalogProvisioningArtifact.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProvisioningArtifact.prototype, "disableTemplateValidation", {
        get: function () {
            return this.getBooleanAttribute('disable_template_validation');
        },
        set: function (value) {
            this._disableTemplateValidation = value;
        },
        enumerable: false,
        configurable: true
    });
    ServicecatalogProvisioningArtifact.prototype.resetDisableTemplateValidation = function () {
        this._disableTemplateValidation = undefined;
    };
    Object.defineProperty(ServicecatalogProvisioningArtifact.prototype, "disableTemplateValidationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._disableTemplateValidation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProvisioningArtifact.prototype, "guidance", {
        get: function () {
            return this.getStringAttribute('guidance');
        },
        set: function (value) {
            this._guidance = value;
        },
        enumerable: false,
        configurable: true
    });
    ServicecatalogProvisioningArtifact.prototype.resetGuidance = function () {
        this._guidance = undefined;
    };
    Object.defineProperty(ServicecatalogProvisioningArtifact.prototype, "guidanceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._guidance;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProvisioningArtifact.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProvisioningArtifact.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    ServicecatalogProvisioningArtifact.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(ServicecatalogProvisioningArtifact.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProvisioningArtifact.prototype, "productId", {
        get: function () {
            return this.getStringAttribute('product_id');
        },
        set: function (value) {
            this._productId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProvisioningArtifact.prototype, "productIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._productId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProvisioningArtifact.prototype, "templatePhysicalId", {
        get: function () {
            return this.getStringAttribute('template_physical_id');
        },
        set: function (value) {
            this._templatePhysicalId = value;
        },
        enumerable: false,
        configurable: true
    });
    ServicecatalogProvisioningArtifact.prototype.resetTemplatePhysicalId = function () {
        this._templatePhysicalId = undefined;
    };
    Object.defineProperty(ServicecatalogProvisioningArtifact.prototype, "templatePhysicalIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._templatePhysicalId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProvisioningArtifact.prototype, "templateUrl", {
        get: function () {
            return this.getStringAttribute('template_url');
        },
        set: function (value) {
            this._templateUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ServicecatalogProvisioningArtifact.prototype.resetTemplateUrl = function () {
        this._templateUrl = undefined;
    };
    Object.defineProperty(ServicecatalogProvisioningArtifact.prototype, "templateUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._templateUrl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProvisioningArtifact.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    ServicecatalogProvisioningArtifact.prototype.resetType = function () {
        this._type = undefined;
    };
    Object.defineProperty(ServicecatalogProvisioningArtifact.prototype, "typeInput", {
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
    ServicecatalogProvisioningArtifact.prototype.synthesizeAttributes = function () {
        return {
            accept_language: cdktf.stringToTerraform(this._acceptLanguage),
            active: cdktf.booleanToTerraform(this._active),
            description: cdktf.stringToTerraform(this._description),
            disable_template_validation: cdktf.booleanToTerraform(this._disableTemplateValidation),
            guidance: cdktf.stringToTerraform(this._guidance),
            name: cdktf.stringToTerraform(this._name),
            product_id: cdktf.stringToTerraform(this._productId),
            template_physical_id: cdktf.stringToTerraform(this._templatePhysicalId),
            template_url: cdktf.stringToTerraform(this._templateUrl),
            type: cdktf.stringToTerraform(this._type)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ServicecatalogProvisioningArtifact.tfResourceType = "aws_servicecatalog_provisioning_artifact";
    return ServicecatalogProvisioningArtifact;
}(cdktf.TerraformResource));
exports.ServicecatalogProvisioningArtifact = ServicecatalogProvisioningArtifact;
