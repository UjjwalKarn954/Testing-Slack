"use strict";
// https://www.terraform.io/docs/providers/aws/r/worklink_website_certificate_authority_association.html
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
exports.WorklinkWebsiteCertificateAuthorityAssociation = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/worklink_website_certificate_authority_association.html aws_worklink_website_certificate_authority_association}
*/
var WorklinkWebsiteCertificateAuthorityAssociation = /** @class */ (function (_super) {
    __extends(WorklinkWebsiteCertificateAuthorityAssociation, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/worklink_website_certificate_authority_association.html aws_worklink_website_certificate_authority_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WorklinkWebsiteCertificateAuthorityAssociationConfig
    */
    function WorklinkWebsiteCertificateAuthorityAssociation(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_worklink_website_certificate_authority_association',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._certificate = config.certificate;
        _this._displayName = config.displayName;
        _this._fleetArn = config.fleetArn;
        return _this;
    }
    Object.defineProperty(WorklinkWebsiteCertificateAuthorityAssociation.prototype, "certificate", {
        get: function () {
            return this.getStringAttribute('certificate');
        },
        set: function (value) {
            this._certificate = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorklinkWebsiteCertificateAuthorityAssociation.prototype, "certificateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorklinkWebsiteCertificateAuthorityAssociation.prototype, "displayName", {
        get: function () {
            return this.getStringAttribute('display_name');
        },
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    WorklinkWebsiteCertificateAuthorityAssociation.prototype.resetDisplayName = function () {
        this._displayName = undefined;
    };
    Object.defineProperty(WorklinkWebsiteCertificateAuthorityAssociation.prototype, "displayNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._displayName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorklinkWebsiteCertificateAuthorityAssociation.prototype, "fleetArn", {
        get: function () {
            return this.getStringAttribute('fleet_arn');
        },
        set: function (value) {
            this._fleetArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorklinkWebsiteCertificateAuthorityAssociation.prototype, "fleetArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fleetArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorklinkWebsiteCertificateAuthorityAssociation.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorklinkWebsiteCertificateAuthorityAssociation.prototype, "websiteCaId", {
        // website_ca_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('website_ca_id');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    WorklinkWebsiteCertificateAuthorityAssociation.prototype.synthesizeAttributes = function () {
        return {
            certificate: cdktf.stringToTerraform(this._certificate),
            display_name: cdktf.stringToTerraform(this._displayName),
            fleet_arn: cdktf.stringToTerraform(this._fleetArn)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    WorklinkWebsiteCertificateAuthorityAssociation.tfResourceType = "aws_worklink_website_certificate_authority_association";
    return WorklinkWebsiteCertificateAuthorityAssociation;
}(cdktf.TerraformResource));
exports.WorklinkWebsiteCertificateAuthorityAssociation = WorklinkWebsiteCertificateAuthorityAssociation;
