"use strict";
// https://www.terraform.io/docs/providers/aws/r/iam_role.html
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
exports.IamRole = void 0;
var cdktf = require("cdktf");
function iamRoleInlinePolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        policy: cdktf.stringToTerraform(struct.policy)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_role.html aws_iam_role}
*/
var IamRole = /** @class */ (function (_super) {
    __extends(IamRole, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_role.html aws_iam_role} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamRoleConfig
    */
    function IamRole(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_iam_role',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._assumeRolePolicy = config.assumeRolePolicy;
        _this._description = config.description;
        _this._forceDetachPolicies = config.forceDetachPolicies;
        _this._managedPolicyArns = config.managedPolicyArns;
        _this._maxSessionDuration = config.maxSessionDuration;
        _this._name = config.name;
        _this._namePrefix = config.namePrefix;
        _this._path = config.path;
        _this._permissionsBoundary = config.permissionsBoundary;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._inlinePolicy = config.inlinePolicy;
        return _this;
    }
    Object.defineProperty(IamRole.prototype, "arn", {
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
    Object.defineProperty(IamRole.prototype, "assumeRolePolicy", {
        get: function () {
            return this.getStringAttribute('assume_role_policy');
        },
        set: function (value) {
            this._assumeRolePolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamRole.prototype, "assumeRolePolicyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._assumeRolePolicy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamRole.prototype, "createDate", {
        // create_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('create_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamRole.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    IamRole.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(IamRole.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamRole.prototype, "forceDetachPolicies", {
        get: function () {
            return this.getBooleanAttribute('force_detach_policies');
        },
        set: function (value) {
            this._forceDetachPolicies = value;
        },
        enumerable: false,
        configurable: true
    });
    IamRole.prototype.resetForceDetachPolicies = function () {
        this._forceDetachPolicies = undefined;
    };
    Object.defineProperty(IamRole.prototype, "forceDetachPoliciesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._forceDetachPolicies;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamRole.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamRole.prototype, "managedPolicyArns", {
        get: function () {
            return this.getListAttribute('managed_policy_arns');
        },
        set: function (value) {
            this._managedPolicyArns = value;
        },
        enumerable: false,
        configurable: true
    });
    IamRole.prototype.resetManagedPolicyArns = function () {
        this._managedPolicyArns = undefined;
    };
    Object.defineProperty(IamRole.prototype, "managedPolicyArnsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._managedPolicyArns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamRole.prototype, "maxSessionDuration", {
        get: function () {
            return this.getNumberAttribute('max_session_duration');
        },
        set: function (value) {
            this._maxSessionDuration = value;
        },
        enumerable: false,
        configurable: true
    });
    IamRole.prototype.resetMaxSessionDuration = function () {
        this._maxSessionDuration = undefined;
    };
    Object.defineProperty(IamRole.prototype, "maxSessionDurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxSessionDuration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamRole.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    IamRole.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(IamRole.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamRole.prototype, "namePrefix", {
        get: function () {
            return this.getStringAttribute('name_prefix');
        },
        set: function (value) {
            this._namePrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    IamRole.prototype.resetNamePrefix = function () {
        this._namePrefix = undefined;
    };
    Object.defineProperty(IamRole.prototype, "namePrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._namePrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamRole.prototype, "path", {
        get: function () {
            return this.getStringAttribute('path');
        },
        set: function (value) {
            this._path = value;
        },
        enumerable: false,
        configurable: true
    });
    IamRole.prototype.resetPath = function () {
        this._path = undefined;
    };
    Object.defineProperty(IamRole.prototype, "pathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._path;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamRole.prototype, "permissionsBoundary", {
        get: function () {
            return this.getStringAttribute('permissions_boundary');
        },
        set: function (value) {
            this._permissionsBoundary = value;
        },
        enumerable: false,
        configurable: true
    });
    IamRole.prototype.resetPermissionsBoundary = function () {
        this._permissionsBoundary = undefined;
    };
    Object.defineProperty(IamRole.prototype, "permissionsBoundaryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._permissionsBoundary;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamRole.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    IamRole.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(IamRole.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamRole.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    IamRole.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(IamRole.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamRole.prototype, "uniqueId", {
        // unique_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('unique_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamRole.prototype, "inlinePolicy", {
        get: function () {
            return this.interpolationForAttribute('inline_policy');
        },
        set: function (value) {
            this._inlinePolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    IamRole.prototype.resetInlinePolicy = function () {
        this._inlinePolicy = undefined;
    };
    Object.defineProperty(IamRole.prototype, "inlinePolicyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._inlinePolicy;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    IamRole.prototype.synthesizeAttributes = function () {
        return {
            assume_role_policy: cdktf.stringToTerraform(this._assumeRolePolicy),
            description: cdktf.stringToTerraform(this._description),
            force_detach_policies: cdktf.booleanToTerraform(this._forceDetachPolicies),
            managed_policy_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._managedPolicyArns),
            max_session_duration: cdktf.numberToTerraform(this._maxSessionDuration),
            name: cdktf.stringToTerraform(this._name),
            name_prefix: cdktf.stringToTerraform(this._namePrefix),
            path: cdktf.stringToTerraform(this._path),
            permissions_boundary: cdktf.stringToTerraform(this._permissionsBoundary),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            inline_policy: cdktf.listMapper(iamRoleInlinePolicyToTerraform)(this._inlinePolicy)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    IamRole.tfResourceType = "aws_iam_role";
    return IamRole;
}(cdktf.TerraformResource));
exports.IamRole = IamRole;
