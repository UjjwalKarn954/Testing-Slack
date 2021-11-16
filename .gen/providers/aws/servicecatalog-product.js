"use strict";
// https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html
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
exports.ServicecatalogProduct = void 0;
var cdktf = require("cdktf");
function servicecatalogProductProvisioningArtifactParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        description: cdktf.stringToTerraform(struct.description),
        disable_template_validation: cdktf.booleanToTerraform(struct.disableTemplateValidation),
        name: cdktf.stringToTerraform(struct.name),
        template_physical_id: cdktf.stringToTerraform(struct.templatePhysicalId),
        template_url: cdktf.stringToTerraform(struct.templateUrl),
        type: cdktf.stringToTerraform(struct.type)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html aws_servicecatalog_product}
*/
var ServicecatalogProduct = /** @class */ (function (_super) {
    __extends(ServicecatalogProduct, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_product.html aws_servicecatalog_product} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogProductConfig
    */
    function ServicecatalogProduct(scope, id, config) {
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
        _this._description = config.description;
        _this._distributor = config.distributor;
        _this._name = config.name;
        _this._owner = config.owner;
        _this._supportDescription = config.supportDescription;
        _this._supportEmail = config.supportEmail;
        _this._supportUrl = config.supportUrl;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._type = config.type;
        _this._provisioningArtifactParameters = config.provisioningArtifactParameters;
        return _this;
    }
    Object.defineProperty(ServicecatalogProduct.prototype, "acceptLanguage", {
        get: function () {
            return this.getStringAttribute('accept_language');
        },
        set: function (value) {
            this._acceptLanguage = value;
        },
        enumerable: false,
        configurable: true
    });
    ServicecatalogProduct.prototype.resetAcceptLanguage = function () {
        this._acceptLanguage = undefined;
    };
    Object.defineProperty(ServicecatalogProduct.prototype, "acceptLanguageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._acceptLanguage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProduct.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProduct.prototype, "createdTime", {
        // created_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProduct.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ServicecatalogProduct.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(ServicecatalogProduct.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProduct.prototype, "distributor", {
        get: function () {
            return this.getStringAttribute('distributor');
        },
        set: function (value) {
            this._distributor = value;
        },
        enumerable: false,
        configurable: true
    });
    ServicecatalogProduct.prototype.resetDistributor = function () {
        this._distributor = undefined;
    };
    Object.defineProperty(ServicecatalogProduct.prototype, "distributorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._distributor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProduct.prototype, "hasDefaultPath", {
        // has_default_path - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('has_default_path');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProduct.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProduct.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProduct.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProduct.prototype, "owner", {
        get: function () {
            return this.getStringAttribute('owner');
        },
        set: function (value) {
            this._owner = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProduct.prototype, "ownerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._owner;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProduct.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProduct.prototype, "supportDescription", {
        get: function () {
            return this.getStringAttribute('support_description');
        },
        set: function (value) {
            this._supportDescription = value;
        },
        enumerable: false,
        configurable: true
    });
    ServicecatalogProduct.prototype.resetSupportDescription = function () {
        this._supportDescription = undefined;
    };
    Object.defineProperty(ServicecatalogProduct.prototype, "supportDescriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._supportDescription;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProduct.prototype, "supportEmail", {
        get: function () {
            return this.getStringAttribute('support_email');
        },
        set: function (value) {
            this._supportEmail = value;
        },
        enumerable: false,
        configurable: true
    });
    ServicecatalogProduct.prototype.resetSupportEmail = function () {
        this._supportEmail = undefined;
    };
    Object.defineProperty(ServicecatalogProduct.prototype, "supportEmailInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._supportEmail;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProduct.prototype, "supportUrl", {
        get: function () {
            return this.getStringAttribute('support_url');
        },
        set: function (value) {
            this._supportUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ServicecatalogProduct.prototype.resetSupportUrl = function () {
        this._supportUrl = undefined;
    };
    Object.defineProperty(ServicecatalogProduct.prototype, "supportUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._supportUrl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProduct.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    ServicecatalogProduct.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(ServicecatalogProduct.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProduct.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    ServicecatalogProduct.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(ServicecatalogProduct.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProduct.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProduct.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProduct.prototype, "provisioningArtifactParameters", {
        get: function () {
            return this.interpolationForAttribute('provisioning_artifact_parameters');
        },
        set: function (value) {
            this._provisioningArtifactParameters = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogProduct.prototype, "provisioningArtifactParametersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._provisioningArtifactParameters;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ServicecatalogProduct.prototype.synthesizeAttributes = function () {
        return {
            accept_language: cdktf.stringToTerraform(this._acceptLanguage),
            description: cdktf.stringToTerraform(this._description),
            distributor: cdktf.stringToTerraform(this._distributor),
            name: cdktf.stringToTerraform(this._name),
            owner: cdktf.stringToTerraform(this._owner),
            support_description: cdktf.stringToTerraform(this._supportDescription),
            support_email: cdktf.stringToTerraform(this._supportEmail),
            support_url: cdktf.stringToTerraform(this._supportUrl),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            type: cdktf.stringToTerraform(this._type),
            provisioning_artifact_parameters: cdktf.listMapper(servicecatalogProductProvisioningArtifactParametersToTerraform)(this._provisioningArtifactParameters)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ServicecatalogProduct.tfResourceType = "aws_servicecatalog_product";
    return ServicecatalogProduct;
}(cdktf.TerraformResource));
exports.ServicecatalogProduct = ServicecatalogProduct;
