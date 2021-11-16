"use strict";
// https://www.terraform.io/docs/providers/aws/d/organizations_organization.html
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
exports.DataAwsOrganizationsOrganization = exports.DataAwsOrganizationsOrganizationRoots = exports.DataAwsOrganizationsOrganizationRootsPolicyTypes = exports.DataAwsOrganizationsOrganizationNonMasterAccounts = exports.DataAwsOrganizationsOrganizationAccounts = void 0;
var cdktf = require("cdktf");
var DataAwsOrganizationsOrganizationAccounts = /** @class */ (function (_super) {
    __extends(DataAwsOrganizationsOrganizationAccounts, _super);
    function DataAwsOrganizationsOrganizationAccounts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsOrganizationsOrganizationAccounts.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsOrganizationsOrganizationAccounts.prototype, "email", {
        // email - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsOrganizationsOrganizationAccounts.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsOrganizationsOrganizationAccounts.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsOrganizationsOrganizationAccounts.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsOrganizationsOrganizationAccounts;
}(cdktf.ComplexComputedList));
exports.DataAwsOrganizationsOrganizationAccounts = DataAwsOrganizationsOrganizationAccounts;
var DataAwsOrganizationsOrganizationNonMasterAccounts = /** @class */ (function (_super) {
    __extends(DataAwsOrganizationsOrganizationNonMasterAccounts, _super);
    function DataAwsOrganizationsOrganizationNonMasterAccounts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsOrganizationsOrganizationNonMasterAccounts.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsOrganizationsOrganizationNonMasterAccounts.prototype, "email", {
        // email - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsOrganizationsOrganizationNonMasterAccounts.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsOrganizationsOrganizationNonMasterAccounts.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsOrganizationsOrganizationNonMasterAccounts.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsOrganizationsOrganizationNonMasterAccounts;
}(cdktf.ComplexComputedList));
exports.DataAwsOrganizationsOrganizationNonMasterAccounts = DataAwsOrganizationsOrganizationNonMasterAccounts;
var DataAwsOrganizationsOrganizationRootsPolicyTypes = /** @class */ (function (_super) {
    __extends(DataAwsOrganizationsOrganizationRootsPolicyTypes, _super);
    function DataAwsOrganizationsOrganizationRootsPolicyTypes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsOrganizationsOrganizationRootsPolicyTypes.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsOrganizationsOrganizationRootsPolicyTypes.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsOrganizationsOrganizationRootsPolicyTypes;
}(cdktf.ComplexComputedList));
exports.DataAwsOrganizationsOrganizationRootsPolicyTypes = DataAwsOrganizationsOrganizationRootsPolicyTypes;
var DataAwsOrganizationsOrganizationRoots = /** @class */ (function (_super) {
    __extends(DataAwsOrganizationsOrganizationRoots, _super);
    function DataAwsOrganizationsOrganizationRoots() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsOrganizationsOrganizationRoots.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsOrganizationsOrganizationRoots.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsOrganizationsOrganizationRoots.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsOrganizationsOrganizationRoots.prototype, "policyTypes", {
        // policy_types - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('policy_types');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsOrganizationsOrganizationRoots;
}(cdktf.ComplexComputedList));
exports.DataAwsOrganizationsOrganizationRoots = DataAwsOrganizationsOrganizationRoots;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/organizations_organization.html aws_organizations_organization}
*/
var DataAwsOrganizationsOrganization = /** @class */ (function (_super) {
    __extends(DataAwsOrganizationsOrganization, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/organizations_organization.html aws_organizations_organization} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsOrganizationsOrganizationConfig = {}
    */
    function DataAwsOrganizationsOrganization(scope, id, config) {
        if (config === void 0) { config = {}; }
        return _super.call(this, scope, id, {
            terraformResourceType: 'aws_organizations_organization',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // accounts - computed: true, optional: false, required: false
    DataAwsOrganizationsOrganization.prototype.accounts = function (index) {
        return new DataAwsOrganizationsOrganizationAccounts(this, 'accounts', index);
    };
    Object.defineProperty(DataAwsOrganizationsOrganization.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsOrganizationsOrganization.prototype, "awsServiceAccessPrincipals", {
        // aws_service_access_principals - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('aws_service_access_principals');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsOrganizationsOrganization.prototype, "enabledPolicyTypes", {
        // enabled_policy_types - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('enabled_policy_types');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsOrganizationsOrganization.prototype, "featureSet", {
        // feature_set - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('feature_set');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsOrganizationsOrganization.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsOrganizationsOrganization.prototype, "masterAccountArn", {
        // master_account_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('master_account_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsOrganizationsOrganization.prototype, "masterAccountEmail", {
        // master_account_email - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('master_account_email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsOrganizationsOrganization.prototype, "masterAccountId", {
        // master_account_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('master_account_id');
        },
        enumerable: false,
        configurable: true
    });
    // non_master_accounts - computed: true, optional: false, required: false
    DataAwsOrganizationsOrganization.prototype.nonMasterAccounts = function (index) {
        return new DataAwsOrganizationsOrganizationNonMasterAccounts(this, 'non_master_accounts', index);
    };
    // roots - computed: true, optional: false, required: false
    DataAwsOrganizationsOrganization.prototype.roots = function (index) {
        return new DataAwsOrganizationsOrganizationRoots(this, 'roots', index);
    };
    // =========
    // SYNTHESIS
    // =========
    DataAwsOrganizationsOrganization.prototype.synthesizeAttributes = function () {
        return {};
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsOrganizationsOrganization.tfResourceType = "aws_organizations_organization";
    return DataAwsOrganizationsOrganization;
}(cdktf.TerraformDataSource));
exports.DataAwsOrganizationsOrganization = DataAwsOrganizationsOrganization;
