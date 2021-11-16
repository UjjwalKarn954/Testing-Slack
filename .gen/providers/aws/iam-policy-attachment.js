"use strict";
// https://www.terraform.io/docs/providers/aws/r/iam_policy_attachment.html
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
exports.IamPolicyAttachment = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_policy_attachment.html aws_iam_policy_attachment}
*/
var IamPolicyAttachment = /** @class */ (function (_super) {
    __extends(IamPolicyAttachment, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_policy_attachment.html aws_iam_policy_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamPolicyAttachmentConfig
    */
    function IamPolicyAttachment(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_iam_policy_attachment',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._groups = config.groups;
        _this._name = config.name;
        _this._policyArn = config.policyArn;
        _this._roles = config.roles;
        _this._users = config.users;
        return _this;
    }
    Object.defineProperty(IamPolicyAttachment.prototype, "groups", {
        get: function () {
            return this.getListAttribute('groups');
        },
        set: function (value) {
            this._groups = value;
        },
        enumerable: false,
        configurable: true
    });
    IamPolicyAttachment.prototype.resetGroups = function () {
        this._groups = undefined;
    };
    Object.defineProperty(IamPolicyAttachment.prototype, "groupsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._groups;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamPolicyAttachment.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamPolicyAttachment.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamPolicyAttachment.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamPolicyAttachment.prototype, "policyArn", {
        get: function () {
            return this.getStringAttribute('policy_arn');
        },
        set: function (value) {
            this._policyArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamPolicyAttachment.prototype, "policyArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policyArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamPolicyAttachment.prototype, "roles", {
        get: function () {
            return this.getListAttribute('roles');
        },
        set: function (value) {
            this._roles = value;
        },
        enumerable: false,
        configurable: true
    });
    IamPolicyAttachment.prototype.resetRoles = function () {
        this._roles = undefined;
    };
    Object.defineProperty(IamPolicyAttachment.prototype, "rolesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._roles;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamPolicyAttachment.prototype, "users", {
        get: function () {
            return this.getListAttribute('users');
        },
        set: function (value) {
            this._users = value;
        },
        enumerable: false,
        configurable: true
    });
    IamPolicyAttachment.prototype.resetUsers = function () {
        this._users = undefined;
    };
    Object.defineProperty(IamPolicyAttachment.prototype, "usersInput", {
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
    IamPolicyAttachment.prototype.synthesizeAttributes = function () {
        return {
            groups: cdktf.listMapper(cdktf.stringToTerraform)(this._groups),
            name: cdktf.stringToTerraform(this._name),
            policy_arn: cdktf.stringToTerraform(this._policyArn),
            roles: cdktf.listMapper(cdktf.stringToTerraform)(this._roles),
            users: cdktf.listMapper(cdktf.stringToTerraform)(this._users)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    IamPolicyAttachment.tfResourceType = "aws_iam_policy_attachment";
    return IamPolicyAttachment;
}(cdktf.TerraformResource));
exports.IamPolicyAttachment = IamPolicyAttachment;
