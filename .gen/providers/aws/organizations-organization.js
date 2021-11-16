"use strict";
// https://www.terraform.io/docs/providers/aws/r/organizations_organization.html
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
exports.OrganizationsOrganization = exports.OrganizationsOrganizationRoots = exports.OrganizationsOrganizationRootsPolicyTypes = exports.OrganizationsOrganizationNonMasterAccounts = exports.OrganizationsOrganizationAccounts = void 0;
var cdktf = require("cdktf");
var OrganizationsOrganizationAccounts = /** @class */ (function (_super) {
    __extends(OrganizationsOrganizationAccounts, _super);
    function OrganizationsOrganizationAccounts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(OrganizationsOrganizationAccounts.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsOrganizationAccounts.prototype, "email", {
        // email - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsOrganizationAccounts.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsOrganizationAccounts.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsOrganizationAccounts.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    return OrganizationsOrganizationAccounts;
}(cdktf.ComplexComputedList));
exports.OrganizationsOrganizationAccounts = OrganizationsOrganizationAccounts;
var OrganizationsOrganizationNonMasterAccounts = /** @class */ (function (_super) {
    __extends(OrganizationsOrganizationNonMasterAccounts, _super);
    function OrganizationsOrganizationNonMasterAccounts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(OrganizationsOrganizationNonMasterAccounts.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsOrganizationNonMasterAccounts.prototype, "email", {
        // email - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsOrganizationNonMasterAccounts.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsOrganizationNonMasterAccounts.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsOrganizationNonMasterAccounts.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    return OrganizationsOrganizationNonMasterAccounts;
}(cdktf.ComplexComputedList));
exports.OrganizationsOrganizationNonMasterAccounts = OrganizationsOrganizationNonMasterAccounts;
var OrganizationsOrganizationRootsPolicyTypes = /** @class */ (function (_super) {
    __extends(OrganizationsOrganizationRootsPolicyTypes, _super);
    function OrganizationsOrganizationRootsPolicyTypes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(OrganizationsOrganizationRootsPolicyTypes.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsOrganizationRootsPolicyTypes.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return OrganizationsOrganizationRootsPolicyTypes;
}(cdktf.ComplexComputedList));
exports.OrganizationsOrganizationRootsPolicyTypes = OrganizationsOrganizationRootsPolicyTypes;
var OrganizationsOrganizationRoots = /** @class */ (function (_super) {
    __extends(OrganizationsOrganizationRoots, _super);
    function OrganizationsOrganizationRoots() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(OrganizationsOrganizationRoots.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsOrganizationRoots.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsOrganizationRoots.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsOrganizationRoots.prototype, "policyTypes", {
        // policy_types - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('policy_types');
        },
        enumerable: false,
        configurable: true
    });
    return OrganizationsOrganizationRoots;
}(cdktf.ComplexComputedList));
exports.OrganizationsOrganizationRoots = OrganizationsOrganizationRoots;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/organizations_organization.html aws_organizations_organization}
*/
var OrganizationsOrganization = /** @class */ (function (_super) {
    __extends(OrganizationsOrganization, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/organizations_organization.html aws_organizations_organization} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OrganizationsOrganizationConfig = {}
    */
    function OrganizationsOrganization(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_organizations_organization',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._awsServiceAccessPrincipals = config.awsServiceAccessPrincipals;
        _this._enabledPolicyTypes = config.enabledPolicyTypes;
        _this._featureSet = config.featureSet;
        return _this;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // accounts - computed: true, optional: false, required: false
    OrganizationsOrganization.prototype.accounts = function (index) {
        return new OrganizationsOrganizationAccounts(this, 'accounts', index);
    };
    Object.defineProperty(OrganizationsOrganization.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsOrganization.prototype, "awsServiceAccessPrincipals", {
        get: function () {
            return this.getListAttribute('aws_service_access_principals');
        },
        set: function (value) {
            this._awsServiceAccessPrincipals = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationsOrganization.prototype.resetAwsServiceAccessPrincipals = function () {
        this._awsServiceAccessPrincipals = undefined;
    };
    Object.defineProperty(OrganizationsOrganization.prototype, "awsServiceAccessPrincipalsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._awsServiceAccessPrincipals;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsOrganization.prototype, "enabledPolicyTypes", {
        get: function () {
            return this.getListAttribute('enabled_policy_types');
        },
        set: function (value) {
            this._enabledPolicyTypes = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationsOrganization.prototype.resetEnabledPolicyTypes = function () {
        this._enabledPolicyTypes = undefined;
    };
    Object.defineProperty(OrganizationsOrganization.prototype, "enabledPolicyTypesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabledPolicyTypes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsOrganization.prototype, "featureSet", {
        get: function () {
            return this.getStringAttribute('feature_set');
        },
        set: function (value) {
            this._featureSet = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationsOrganization.prototype.resetFeatureSet = function () {
        this._featureSet = undefined;
    };
    Object.defineProperty(OrganizationsOrganization.prototype, "featureSetInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._featureSet;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsOrganization.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsOrganization.prototype, "masterAccountArn", {
        // master_account_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('master_account_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsOrganization.prototype, "masterAccountEmail", {
        // master_account_email - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('master_account_email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsOrganization.prototype, "masterAccountId", {
        // master_account_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('master_account_id');
        },
        enumerable: false,
        configurable: true
    });
    // non_master_accounts - computed: true, optional: false, required: false
    OrganizationsOrganization.prototype.nonMasterAccounts = function (index) {
        return new OrganizationsOrganizationNonMasterAccounts(this, 'non_master_accounts', index);
    };
    // roots - computed: true, optional: false, required: false
    OrganizationsOrganization.prototype.roots = function (index) {
        return new OrganizationsOrganizationRoots(this, 'roots', index);
    };
    // =========
    // SYNTHESIS
    // =========
    OrganizationsOrganization.prototype.synthesizeAttributes = function () {
        return {
            aws_service_access_principals: cdktf.listMapper(cdktf.stringToTerraform)(this._awsServiceAccessPrincipals),
            enabled_policy_types: cdktf.listMapper(cdktf.stringToTerraform)(this._enabledPolicyTypes),
            feature_set: cdktf.stringToTerraform(this._featureSet)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    OrganizationsOrganization.tfResourceType = "aws_organizations_organization";
    return OrganizationsOrganization;
}(cdktf.TerraformResource));
exports.OrganizationsOrganization = OrganizationsOrganization;
