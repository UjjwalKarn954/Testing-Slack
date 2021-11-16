"use strict";
// https://www.terraform.io/docs/providers/aws/r/amplify_domain_association.html
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
exports.AmplifyDomainAssociation = void 0;
var cdktf = require("cdktf");
function amplifyDomainAssociationSubDomainToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        branch_name: cdktf.stringToTerraform(struct.branchName),
        prefix: cdktf.stringToTerraform(struct.prefix)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/amplify_domain_association.html aws_amplify_domain_association}
*/
var AmplifyDomainAssociation = /** @class */ (function (_super) {
    __extends(AmplifyDomainAssociation, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/amplify_domain_association.html aws_amplify_domain_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AmplifyDomainAssociationConfig
    */
    function AmplifyDomainAssociation(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_amplify_domain_association',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._appId = config.appId;
        _this._domainName = config.domainName;
        _this._waitForVerification = config.waitForVerification;
        _this._subDomain = config.subDomain;
        return _this;
    }
    Object.defineProperty(AmplifyDomainAssociation.prototype, "appId", {
        get: function () {
            return this.getStringAttribute('app_id');
        },
        set: function (value) {
            this._appId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyDomainAssociation.prototype, "appIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._appId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyDomainAssociation.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyDomainAssociation.prototype, "certificateVerificationDnsRecord", {
        // certificate_verification_dns_record - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate_verification_dns_record');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyDomainAssociation.prototype, "domainName", {
        get: function () {
            return this.getStringAttribute('domain_name');
        },
        set: function (value) {
            this._domainName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyDomainAssociation.prototype, "domainNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domainName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyDomainAssociation.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyDomainAssociation.prototype, "waitForVerification", {
        get: function () {
            return this.getBooleanAttribute('wait_for_verification');
        },
        set: function (value) {
            this._waitForVerification = value;
        },
        enumerable: false,
        configurable: true
    });
    AmplifyDomainAssociation.prototype.resetWaitForVerification = function () {
        this._waitForVerification = undefined;
    };
    Object.defineProperty(AmplifyDomainAssociation.prototype, "waitForVerificationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._waitForVerification;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyDomainAssociation.prototype, "subDomain", {
        get: function () {
            return this.interpolationForAttribute('sub_domain');
        },
        set: function (value) {
            this._subDomain = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyDomainAssociation.prototype, "subDomainInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subDomain;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    AmplifyDomainAssociation.prototype.synthesizeAttributes = function () {
        return {
            app_id: cdktf.stringToTerraform(this._appId),
            domain_name: cdktf.stringToTerraform(this._domainName),
            wait_for_verification: cdktf.booleanToTerraform(this._waitForVerification),
            sub_domain: cdktf.listMapper(amplifyDomainAssociationSubDomainToTerraform)(this._subDomain)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    AmplifyDomainAssociation.tfResourceType = "aws_amplify_domain_association";
    return AmplifyDomainAssociation;
}(cdktf.TerraformResource));
exports.AmplifyDomainAssociation = AmplifyDomainAssociation;
