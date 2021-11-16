"use strict";
// https://www.terraform.io/docs/providers/aws/r/iam_user_policy_attachment.html
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
exports.IamUserPolicyAttachment = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_user_policy_attachment.html aws_iam_user_policy_attachment}
*/
var IamUserPolicyAttachment = /** @class */ (function (_super) {
    __extends(IamUserPolicyAttachment, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_user_policy_attachment.html aws_iam_user_policy_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamUserPolicyAttachmentConfig
    */
    function IamUserPolicyAttachment(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_iam_user_policy_attachment',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._policyArn = config.policyArn;
        _this._user = config.user;
        return _this;
    }
    Object.defineProperty(IamUserPolicyAttachment.prototype, "id", {
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
    Object.defineProperty(IamUserPolicyAttachment.prototype, "policyArn", {
        get: function () {
            return this.getStringAttribute('policy_arn');
        },
        set: function (value) {
            this._policyArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamUserPolicyAttachment.prototype, "policyArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policyArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamUserPolicyAttachment.prototype, "user", {
        get: function () {
            return this.getStringAttribute('user');
        },
        set: function (value) {
            this._user = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamUserPolicyAttachment.prototype, "userInput", {
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
    IamUserPolicyAttachment.prototype.synthesizeAttributes = function () {
        return {
            policy_arn: cdktf.stringToTerraform(this._policyArn),
            user: cdktf.stringToTerraform(this._user)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    IamUserPolicyAttachment.tfResourceType = "aws_iam_user_policy_attachment";
    return IamUserPolicyAttachment;
}(cdktf.TerraformResource));
exports.IamUserPolicyAttachment = IamUserPolicyAttachment;
