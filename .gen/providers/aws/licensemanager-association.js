"use strict";
// https://www.terraform.io/docs/providers/aws/r/licensemanager_association.html
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
exports.LicensemanagerAssociation = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_association.html aws_licensemanager_association}
*/
var LicensemanagerAssociation = /** @class */ (function (_super) {
    __extends(LicensemanagerAssociation, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_association.html aws_licensemanager_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LicensemanagerAssociationConfig
    */
    function LicensemanagerAssociation(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_licensemanager_association',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._licenseConfigurationArn = config.licenseConfigurationArn;
        _this._resourceArn = config.resourceArn;
        return _this;
    }
    Object.defineProperty(LicensemanagerAssociation.prototype, "id", {
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
    Object.defineProperty(LicensemanagerAssociation.prototype, "licenseConfigurationArn", {
        get: function () {
            return this.getStringAttribute('license_configuration_arn');
        },
        set: function (value) {
            this._licenseConfigurationArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LicensemanagerAssociation.prototype, "licenseConfigurationArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._licenseConfigurationArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LicensemanagerAssociation.prototype, "resourceArn", {
        get: function () {
            return this.getStringAttribute('resource_arn');
        },
        set: function (value) {
            this._resourceArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LicensemanagerAssociation.prototype, "resourceArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resourceArn;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    LicensemanagerAssociation.prototype.synthesizeAttributes = function () {
        return {
            license_configuration_arn: cdktf.stringToTerraform(this._licenseConfigurationArn),
            resource_arn: cdktf.stringToTerraform(this._resourceArn)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    LicensemanagerAssociation.tfResourceType = "aws_licensemanager_association";
    return LicensemanagerAssociation;
}(cdktf.TerraformResource));
exports.LicensemanagerAssociation = LicensemanagerAssociation;
