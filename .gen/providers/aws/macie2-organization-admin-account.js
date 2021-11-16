"use strict";
// https://www.terraform.io/docs/providers/aws/r/macie2_organization_admin_account.html
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
exports.Macie2OrganizationAdminAccount = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie2_organization_admin_account.html aws_macie2_organization_admin_account}
*/
var Macie2OrganizationAdminAccount = /** @class */ (function (_super) {
    __extends(Macie2OrganizationAdminAccount, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/macie2_organization_admin_account.html aws_macie2_organization_admin_account} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Macie2OrganizationAdminAccountConfig
    */
    function Macie2OrganizationAdminAccount(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_macie2_organization_admin_account',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._adminAccountId = config.adminAccountId;
        return _this;
    }
    Object.defineProperty(Macie2OrganizationAdminAccount.prototype, "adminAccountId", {
        get: function () {
            return this.getStringAttribute('admin_account_id');
        },
        set: function (value) {
            this._adminAccountId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2OrganizationAdminAccount.prototype, "adminAccountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._adminAccountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2OrganizationAdminAccount.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Macie2OrganizationAdminAccount.prototype.synthesizeAttributes = function () {
        return {
            admin_account_id: cdktf.stringToTerraform(this._adminAccountId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Macie2OrganizationAdminAccount.tfResourceType = "aws_macie2_organization_admin_account";
    return Macie2OrganizationAdminAccount;
}(cdktf.TerraformResource));
exports.Macie2OrganizationAdminAccount = Macie2OrganizationAdminAccount;
