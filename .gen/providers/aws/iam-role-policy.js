"use strict";
// https://www.terraform.io/docs/providers/aws/r/iam_role_policy.html
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
exports.IamRolePolicy = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_role_policy.html aws_iam_role_policy}
*/
var IamRolePolicy = /** @class */ (function (_super) {
    __extends(IamRolePolicy, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_role_policy.html aws_iam_role_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamRolePolicyConfig
    */
    function IamRolePolicy(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_iam_role_policy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        _this._namePrefix = config.namePrefix;
        _this._policy = config.policy;
        _this._role = config.role;
        return _this;
    }
    Object.defineProperty(IamRolePolicy.prototype, "id", {
        // ==========
        // ATTRIBUTES
        // ==========
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamRolePolicy.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    IamRolePolicy.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(IamRolePolicy.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamRolePolicy.prototype, "namePrefix", {
        get: function () {
            return this.getStringAttribute('name_prefix');
        },
        set: function (value) {
            this._namePrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    IamRolePolicy.prototype.resetNamePrefix = function () {
        this._namePrefix = undefined;
    };
    Object.defineProperty(IamRolePolicy.prototype, "namePrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._namePrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamRolePolicy.prototype, "policy", {
        get: function () {
            return this.getStringAttribute('policy');
        },
        set: function (value) {
            this._policy = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamRolePolicy.prototype, "policyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamRolePolicy.prototype, "role", {
        get: function () {
            return this.getStringAttribute('role');
        },
        set: function (value) {
            this._role = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamRolePolicy.prototype, "roleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._role;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    IamRolePolicy.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            name_prefix: cdktf.stringToTerraform(this._namePrefix),
            policy: cdktf.stringToTerraform(this._policy),
            role: cdktf.stringToTerraform(this._role)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    IamRolePolicy.tfResourceType = "aws_iam_role_policy";
    return IamRolePolicy;
}(cdktf.TerraformResource));
exports.IamRolePolicy = IamRolePolicy;
