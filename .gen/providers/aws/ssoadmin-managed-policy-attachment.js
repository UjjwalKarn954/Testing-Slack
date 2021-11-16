"use strict";
// https://www.terraform.io/docs/providers/aws/r/ssoadmin_managed_policy_attachment.html
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
exports.SsoadminManagedPolicyAttachment = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_managed_policy_attachment.html aws_ssoadmin_managed_policy_attachment}
*/
var SsoadminManagedPolicyAttachment = /** @class */ (function (_super) {
    __extends(SsoadminManagedPolicyAttachment, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_managed_policy_attachment.html aws_ssoadmin_managed_policy_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsoadminManagedPolicyAttachmentConfig
    */
    function SsoadminManagedPolicyAttachment(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ssoadmin_managed_policy_attachment',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._instanceArn = config.instanceArn;
        _this._managedPolicyArn = config.managedPolicyArn;
        _this._permissionSetArn = config.permissionSetArn;
        return _this;
    }
    Object.defineProperty(SsoadminManagedPolicyAttachment.prototype, "id", {
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
    Object.defineProperty(SsoadminManagedPolicyAttachment.prototype, "instanceArn", {
        get: function () {
            return this.getStringAttribute('instance_arn');
        },
        set: function (value) {
            this._instanceArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsoadminManagedPolicyAttachment.prototype, "instanceArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsoadminManagedPolicyAttachment.prototype, "managedPolicyArn", {
        get: function () {
            return this.getStringAttribute('managed_policy_arn');
        },
        set: function (value) {
            this._managedPolicyArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsoadminManagedPolicyAttachment.prototype, "managedPolicyArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._managedPolicyArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsoadminManagedPolicyAttachment.prototype, "managedPolicyName", {
        // managed_policy_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('managed_policy_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsoadminManagedPolicyAttachment.prototype, "permissionSetArn", {
        get: function () {
            return this.getStringAttribute('permission_set_arn');
        },
        set: function (value) {
            this._permissionSetArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsoadminManagedPolicyAttachment.prototype, "permissionSetArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._permissionSetArn;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SsoadminManagedPolicyAttachment.prototype.synthesizeAttributes = function () {
        return {
            instance_arn: cdktf.stringToTerraform(this._instanceArn),
            managed_policy_arn: cdktf.stringToTerraform(this._managedPolicyArn),
            permission_set_arn: cdktf.stringToTerraform(this._permissionSetArn)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SsoadminManagedPolicyAttachment.tfResourceType = "aws_ssoadmin_managed_policy_attachment";
    return SsoadminManagedPolicyAttachment;
}(cdktf.TerraformResource));
exports.SsoadminManagedPolicyAttachment = SsoadminManagedPolicyAttachment;
