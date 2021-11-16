"use strict";
// https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association.html
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
exports.ApprunnerCustomDomainAssociation = exports.ApprunnerCustomDomainAssociationCertificateValidationRecords = void 0;
var cdktf = require("cdktf");
var ApprunnerCustomDomainAssociationCertificateValidationRecords = /** @class */ (function (_super) {
    __extends(ApprunnerCustomDomainAssociationCertificateValidationRecords, _super);
    function ApprunnerCustomDomainAssociationCertificateValidationRecords() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ApprunnerCustomDomainAssociationCertificateValidationRecords.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApprunnerCustomDomainAssociationCertificateValidationRecords.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApprunnerCustomDomainAssociationCertificateValidationRecords.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApprunnerCustomDomainAssociationCertificateValidationRecords.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return ApprunnerCustomDomainAssociationCertificateValidationRecords;
}(cdktf.ComplexComputedList));
exports.ApprunnerCustomDomainAssociationCertificateValidationRecords = ApprunnerCustomDomainAssociationCertificateValidationRecords;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association.html aws_apprunner_custom_domain_association}
*/
var ApprunnerCustomDomainAssociation = /** @class */ (function (_super) {
    __extends(ApprunnerCustomDomainAssociation, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association.html aws_apprunner_custom_domain_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApprunnerCustomDomainAssociationConfig
    */
    function ApprunnerCustomDomainAssociation(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_apprunner_custom_domain_association',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._domainName = config.domainName;
        _this._enableWwwSubdomain = config.enableWwwSubdomain;
        _this._serviceArn = config.serviceArn;
        return _this;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // certificate_validation_records - computed: true, optional: false, required: false
    ApprunnerCustomDomainAssociation.prototype.certificateValidationRecords = function (index) {
        return new ApprunnerCustomDomainAssociationCertificateValidationRecords(this, 'certificate_validation_records', index);
    };
    Object.defineProperty(ApprunnerCustomDomainAssociation.prototype, "dnsTarget", {
        // dns_target - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dns_target');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApprunnerCustomDomainAssociation.prototype, "domainName", {
        get: function () {
            return this.getStringAttribute('domain_name');
        },
        set: function (value) {
            this._domainName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApprunnerCustomDomainAssociation.prototype, "domainNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domainName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApprunnerCustomDomainAssociation.prototype, "enableWwwSubdomain", {
        get: function () {
            return this.getBooleanAttribute('enable_www_subdomain');
        },
        set: function (value) {
            this._enableWwwSubdomain = value;
        },
        enumerable: false,
        configurable: true
    });
    ApprunnerCustomDomainAssociation.prototype.resetEnableWwwSubdomain = function () {
        this._enableWwwSubdomain = undefined;
    };
    Object.defineProperty(ApprunnerCustomDomainAssociation.prototype, "enableWwwSubdomainInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enableWwwSubdomain;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApprunnerCustomDomainAssociation.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApprunnerCustomDomainAssociation.prototype, "serviceArn", {
        get: function () {
            return this.getStringAttribute('service_arn');
        },
        set: function (value) {
            this._serviceArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApprunnerCustomDomainAssociation.prototype, "serviceArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serviceArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApprunnerCustomDomainAssociation.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ApprunnerCustomDomainAssociation.prototype.synthesizeAttributes = function () {
        return {
            domain_name: cdktf.stringToTerraform(this._domainName),
            enable_www_subdomain: cdktf.booleanToTerraform(this._enableWwwSubdomain),
            service_arn: cdktf.stringToTerraform(this._serviceArn)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ApprunnerCustomDomainAssociation.tfResourceType = "aws_apprunner_custom_domain_association";
    return ApprunnerCustomDomainAssociation;
}(cdktf.TerraformResource));
exports.ApprunnerCustomDomainAssociation = ApprunnerCustomDomainAssociation;
