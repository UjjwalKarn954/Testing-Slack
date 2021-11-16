"use strict";
// https://www.terraform.io/docs/providers/aws/r/servicecatalog_tag_option_resource_association.html
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
exports.ServicecatalogTagOptionResourceAssociation = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_tag_option_resource_association.html aws_servicecatalog_tag_option_resource_association}
*/
var ServicecatalogTagOptionResourceAssociation = /** @class */ (function (_super) {
    __extends(ServicecatalogTagOptionResourceAssociation, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_tag_option_resource_association.html aws_servicecatalog_tag_option_resource_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogTagOptionResourceAssociationConfig
    */
    function ServicecatalogTagOptionResourceAssociation(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_servicecatalog_tag_option_resource_association',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._resourceId = config.resourceId;
        _this._tagOptionId = config.tagOptionId;
        return _this;
    }
    Object.defineProperty(ServicecatalogTagOptionResourceAssociation.prototype, "id", {
        // ==========
        // ATTRIBUTES
        // ==========
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogTagOptionResourceAssociation.prototype, "resourceArn", {
        // resource_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('resource_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogTagOptionResourceAssociation.prototype, "resourceCreatedTime", {
        // resource_created_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('resource_created_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogTagOptionResourceAssociation.prototype, "resourceDescription", {
        // resource_description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('resource_description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogTagOptionResourceAssociation.prototype, "resourceId", {
        get: function () {
            return this.getStringAttribute('resource_id');
        },
        set: function (value) {
            this._resourceId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogTagOptionResourceAssociation.prototype, "resourceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resourceId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogTagOptionResourceAssociation.prototype, "resourceName", {
        // resource_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('resource_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogTagOptionResourceAssociation.prototype, "tagOptionId", {
        get: function () {
            return this.getStringAttribute('tag_option_id');
        },
        set: function (value) {
            this._tagOptionId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicecatalogTagOptionResourceAssociation.prototype, "tagOptionIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagOptionId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ServicecatalogTagOptionResourceAssociation.prototype.synthesizeAttributes = function () {
        return {
            resource_id: cdktf.stringToTerraform(this._resourceId),
            tag_option_id: cdktf.stringToTerraform(this._tagOptionId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ServicecatalogTagOptionResourceAssociation.tfResourceType = "aws_servicecatalog_tag_option_resource_association";
    return ServicecatalogTagOptionResourceAssociation;
}(cdktf.TerraformResource));
exports.ServicecatalogTagOptionResourceAssociation = ServicecatalogTagOptionResourceAssociation;
