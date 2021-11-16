"use strict";
// https://www.terraform.io/docs/providers/aws/r/iam_user_group_membership.html
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
exports.IamUserGroupMembership = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_user_group_membership.html aws_iam_user_group_membership}
*/
var IamUserGroupMembership = /** @class */ (function (_super) {
    __extends(IamUserGroupMembership, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_user_group_membership.html aws_iam_user_group_membership} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamUserGroupMembershipConfig
    */
    function IamUserGroupMembership(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_iam_user_group_membership',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._groups = config.groups;
        _this._user = config.user;
        return _this;
    }
    Object.defineProperty(IamUserGroupMembership.prototype, "groups", {
        get: function () {
            return this.getListAttribute('groups');
        },
        set: function (value) {
            this._groups = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamUserGroupMembership.prototype, "groupsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._groups;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamUserGroupMembership.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamUserGroupMembership.prototype, "user", {
        get: function () {
            return this.getStringAttribute('user');
        },
        set: function (value) {
            this._user = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamUserGroupMembership.prototype, "userInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._user;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    IamUserGroupMembership.prototype.synthesizeAttributes = function () {
        return {
            groups: cdktf.listMapper(cdktf.stringToTerraform)(this._groups),
            user: cdktf.stringToTerraform(this._user)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    IamUserGroupMembership.tfResourceType = "aws_iam_user_group_membership";
    return IamUserGroupMembership;
}(cdktf.TerraformResource));
exports.IamUserGroupMembership = IamUserGroupMembership;
