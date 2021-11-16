"use strict";
// https://www.terraform.io/docs/providers/aws/r/quicksight_user.html
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
exports.QuicksightUser = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/quicksight_user.html aws_quicksight_user}
*/
var QuicksightUser = /** @class */ (function (_super) {
    __extends(QuicksightUser, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/quicksight_user.html aws_quicksight_user} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options QuicksightUserConfig
    */
    function QuicksightUser(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_quicksight_user',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._awsAccountId = config.awsAccountId;
        _this._email = config.email;
        _this._iamArn = config.iamArn;
        _this._identityType = config.identityType;
        _this._namespace = config.namespace;
        _this._sessionName = config.sessionName;
        _this._userName = config.userName;
        _this._userRole = config.userRole;
        return _this;
    }
    Object.defineProperty(QuicksightUser.prototype, "arn", {
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
    Object.defineProperty(QuicksightUser.prototype, "awsAccountId", {
        get: function () {
            return this.getStringAttribute('aws_account_id');
        },
        set: function (value) {
            this._awsAccountId = value;
        },
        enumerable: false,
        configurable: true
    });
    QuicksightUser.prototype.resetAwsAccountId = function () {
        this._awsAccountId = undefined;
    };
    Object.defineProperty(QuicksightUser.prototype, "awsAccountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._awsAccountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuicksightUser.prototype, "email", {
        get: function () {
            return this.getStringAttribute('email');
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuicksightUser.prototype, "emailInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuicksightUser.prototype, "iamArn", {
        get: function () {
            return this.getStringAttribute('iam_arn');
        },
        set: function (value) {
            this._iamArn = value;
        },
        enumerable: false,
        configurable: true
    });
    QuicksightUser.prototype.resetIamArn = function () {
        this._iamArn = undefined;
    };
    Object.defineProperty(QuicksightUser.prototype, "iamArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._iamArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuicksightUser.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuicksightUser.prototype, "identityType", {
        get: function () {
            return this.getStringAttribute('identity_type');
        },
        set: function (value) {
            this._identityType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuicksightUser.prototype, "identityTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuicksightUser.prototype, "namespace", {
        get: function () {
            return this.getStringAttribute('namespace');
        },
        set: function (value) {
            this._namespace = value;
        },
        enumerable: false,
        configurable: true
    });
    QuicksightUser.prototype.resetNamespace = function () {
        this._namespace = undefined;
    };
    Object.defineProperty(QuicksightUser.prototype, "namespaceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._namespace;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuicksightUser.prototype, "sessionName", {
        get: function () {
            return this.getStringAttribute('session_name');
        },
        set: function (value) {
            this._sessionName = value;
        },
        enumerable: false,
        configurable: true
    });
    QuicksightUser.prototype.resetSessionName = function () {
        this._sessionName = undefined;
    };
    Object.defineProperty(QuicksightUser.prototype, "sessionNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sessionName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuicksightUser.prototype, "userName", {
        get: function () {
            return this.getStringAttribute('user_name');
        },
        set: function (value) {
            this._userName = value;
        },
        enumerable: false,
        configurable: true
    });
    QuicksightUser.prototype.resetUserName = function () {
        this._userName = undefined;
    };
    Object.defineProperty(QuicksightUser.prototype, "userNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuicksightUser.prototype, "userRole", {
        get: function () {
            return this.getStringAttribute('user_role');
        },
        set: function (value) {
            this._userRole = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuicksightUser.prototype, "userRoleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userRole;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    QuicksightUser.prototype.synthesizeAttributes = function () {
        return {
            aws_account_id: cdktf.stringToTerraform(this._awsAccountId),
            email: cdktf.stringToTerraform(this._email),
            iam_arn: cdktf.stringToTerraform(this._iamArn),
            identity_type: cdktf.stringToTerraform(this._identityType),
            namespace: cdktf.stringToTerraform(this._namespace),
            session_name: cdktf.stringToTerraform(this._sessionName),
            user_name: cdktf.stringToTerraform(this._userName),
            user_role: cdktf.stringToTerraform(this._userRole)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    QuicksightUser.tfResourceType = "aws_quicksight_user";
    return QuicksightUser;
}(cdktf.TerraformResource));
exports.QuicksightUser = QuicksightUser;
