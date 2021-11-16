"use strict";
// https://www.terraform.io/docs/providers/aws/r/organizations_account.html
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
exports.OrganizationsAccount = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/organizations_account.html aws_organizations_account}
*/
var OrganizationsAccount = /** @class */ (function (_super) {
    __extends(OrganizationsAccount, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/organizations_account.html aws_organizations_account} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OrganizationsAccountConfig
    */
    function OrganizationsAccount(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_organizations_account',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._email = config.email;
        _this._iamUserAccessToBilling = config.iamUserAccessToBilling;
        _this._name = config.name;
        _this._parentId = config.parentId;
        _this._roleName = config.roleName;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(OrganizationsAccount.prototype, "arn", {
        // ==========
        // ATTRIBUTES
        // ==========
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsAccount.prototype, "email", {
        get: function () {
            return this.getStringAttribute('email');
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsAccount.prototype, "emailInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsAccount.prototype, "iamUserAccessToBilling", {
        get: function () {
            return this.getStringAttribute('iam_user_access_to_billing');
        },
        set: function (value) {
            this._iamUserAccessToBilling = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationsAccount.prototype.resetIamUserAccessToBilling = function () {
        this._iamUserAccessToBilling = undefined;
    };
    Object.defineProperty(OrganizationsAccount.prototype, "iamUserAccessToBillingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._iamUserAccessToBilling;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsAccount.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsAccount.prototype, "joinedMethod", {
        // joined_method - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('joined_method');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsAccount.prototype, "joinedTimestamp", {
        // joined_timestamp - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('joined_timestamp');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsAccount.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsAccount.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsAccount.prototype, "parentId", {
        get: function () {
            return this.getStringAttribute('parent_id');
        },
        set: function (value) {
            this._parentId = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationsAccount.prototype.resetParentId = function () {
        this._parentId = undefined;
    };
    Object.defineProperty(OrganizationsAccount.prototype, "parentIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._parentId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsAccount.prototype, "roleName", {
        get: function () {
            return this.getStringAttribute('role_name');
        },
        set: function (value) {
            this._roleName = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationsAccount.prototype.resetRoleName = function () {
        this._roleName = undefined;
    };
    Object.defineProperty(OrganizationsAccount.prototype, "roleNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._roleName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsAccount.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsAccount.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationsAccount.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(OrganizationsAccount.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsAccount.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationsAccount.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(OrganizationsAccount.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    OrganizationsAccount.prototype.synthesizeAttributes = function () {
        return {
            email: cdktf.stringToTerraform(this._email),
            iam_user_access_to_billing: cdktf.stringToTerraform(this._iamUserAccessToBilling),
            name: cdktf.stringToTerraform(this._name),
            parent_id: cdktf.stringToTerraform(this._parentId),
            role_name: cdktf.stringToTerraform(this._roleName),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    OrganizationsAccount.tfResourceType = "aws_organizations_account";
    return OrganizationsAccount;
}(cdktf.TerraformResource));
exports.OrganizationsAccount = OrganizationsAccount;
