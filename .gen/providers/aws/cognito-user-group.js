"use strict";
// https://www.terraform.io/docs/providers/aws/r/cognito_user_group.html
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
exports.CognitoUserGroup = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_group.html aws_cognito_user_group}
*/
var CognitoUserGroup = /** @class */ (function (_super) {
    __extends(CognitoUserGroup, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_group.html aws_cognito_user_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CognitoUserGroupConfig
    */
    function CognitoUserGroup(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_cognito_user_group',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._description = config.description;
        _this._name = config.name;
        _this._precedence = config.precedence;
        _this._roleArn = config.roleArn;
        _this._userPoolId = config.userPoolId;
        return _this;
    }
    Object.defineProperty(CognitoUserGroup.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoUserGroup.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(CognitoUserGroup.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserGroup.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserGroup.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserGroup.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserGroup.prototype, "precedence", {
        get: function () {
            return this.getNumberAttribute('precedence');
        },
        set: function (value) {
            this._precedence = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoUserGroup.prototype.resetPrecedence = function () {
        this._precedence = undefined;
    };
    Object.defineProperty(CognitoUserGroup.prototype, "precedenceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._precedence;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserGroup.prototype, "roleArn", {
        get: function () {
            return this.getStringAttribute('role_arn');
        },
        set: function (value) {
            this._roleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoUserGroup.prototype.resetRoleArn = function () {
        this._roleArn = undefined;
    };
    Object.defineProperty(CognitoUserGroup.prototype, "roleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._roleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserGroup.prototype, "userPoolId", {
        get: function () {
            return this.getStringAttribute('user_pool_id');
        },
        set: function (value) {
            this._userPoolId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserGroup.prototype, "userPoolIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userPoolId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CognitoUserGroup.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            name: cdktf.stringToTerraform(this._name),
            precedence: cdktf.numberToTerraform(this._precedence),
            role_arn: cdktf.stringToTerraform(this._roleArn),
            user_pool_id: cdktf.stringToTerraform(this._userPoolId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CognitoUserGroup.tfResourceType = "aws_cognito_user_group";
    return CognitoUserGroup;
}(cdktf.TerraformResource));
exports.CognitoUserGroup = CognitoUserGroup;
