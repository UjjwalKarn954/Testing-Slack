"use strict";
// https://www.terraform.io/docs/providers/aws/r/iam_group_membership.html
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
exports.IamGroupMembership = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_group_membership.html aws_iam_group_membership}
*/
var IamGroupMembership = /** @class */ (function (_super) {
    __extends(IamGroupMembership, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_group_membership.html aws_iam_group_membership} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamGroupMembershipConfig
    */
    function IamGroupMembership(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_iam_group_membership',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._group = config.group;
        _this._name = config.name;
        _this._users = config.users;
        return _this;
    }
    Object.defineProperty(IamGroupMembership.prototype, "group", {
        get: function () {
            return this.getStringAttribute('group');
        },
        set: function (value) {
            this._group = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamGroupMembership.prototype, "groupInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._group;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamGroupMembership.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamGroupMembership.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamGroupMembership.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamGroupMembership.prototype, "users", {
        get: function () {
            return this.getListAttribute('users');
        },
        set: function (value) {
            this._users = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamGroupMembership.prototype, "usersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._users;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    IamGroupMembership.prototype.synthesizeAttributes = function () {
        return {
            group: cdktf.stringToTerraform(this._group),
            name: cdktf.stringToTerraform(this._name),
            users: cdktf.listMapper(cdktf.stringToTerraform)(this._users)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    IamGroupMembership.tfResourceType = "aws_iam_group_membership";
    return IamGroupMembership;
}(cdktf.TerraformResource));
exports.IamGroupMembership = IamGroupMembership;
