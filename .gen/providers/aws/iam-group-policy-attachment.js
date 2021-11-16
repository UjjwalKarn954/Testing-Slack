"use strict";
// https://www.terraform.io/docs/providers/aws/r/iam_group_policy_attachment.html
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
exports.IamGroupPolicyAttachment = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_group_policy_attachment.html aws_iam_group_policy_attachment}
*/
var IamGroupPolicyAttachment = /** @class */ (function (_super) {
    __extends(IamGroupPolicyAttachment, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_group_policy_attachment.html aws_iam_group_policy_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamGroupPolicyAttachmentConfig
    */
    function IamGroupPolicyAttachment(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_iam_group_policy_attachment',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._group = config.group;
        _this._policyArn = config.policyArn;
        return _this;
    }
    Object.defineProperty(IamGroupPolicyAttachment.prototype, "group", {
        get: function () {
            return this.getStringAttribute('group');
        },
        set: function (value) {
            this._group = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamGroupPolicyAttachment.prototype, "groupInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._group;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamGroupPolicyAttachment.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamGroupPolicyAttachment.prototype, "policyArn", {
        get: function () {
            return this.getStringAttribute('policy_arn');
        },
        set: function (value) {
            this._policyArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamGroupPolicyAttachment.prototype, "policyArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policyArn;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    IamGroupPolicyAttachment.prototype.synthesizeAttributes = function () {
        return {
            group: cdktf.stringToTerraform(this._group),
            policy_arn: cdktf.stringToTerraform(this._policyArn)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    IamGroupPolicyAttachment.tfResourceType = "aws_iam_group_policy_attachment";
    return IamGroupPolicyAttachment;
}(cdktf.TerraformResource));
exports.IamGroupPolicyAttachment = IamGroupPolicyAttachment;
