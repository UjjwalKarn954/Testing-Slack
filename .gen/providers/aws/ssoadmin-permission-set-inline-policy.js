"use strict";
// https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set_inline_policy.html
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
exports.SsoadminPermissionSetInlinePolicy = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set_inline_policy.html aws_ssoadmin_permission_set_inline_policy}
*/
var SsoadminPermissionSetInlinePolicy = /** @class */ (function (_super) {
    __extends(SsoadminPermissionSetInlinePolicy, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set_inline_policy.html aws_ssoadmin_permission_set_inline_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsoadminPermissionSetInlinePolicyConfig
    */
    function SsoadminPermissionSetInlinePolicy(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ssoadmin_permission_set_inline_policy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._inlinePolicy = config.inlinePolicy;
        _this._instanceArn = config.instanceArn;
        _this._permissionSetArn = config.permissionSetArn;
        return _this;
    }
    Object.defineProperty(SsoadminPermissionSetInlinePolicy.prototype, "id", {
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
    Object.defineProperty(SsoadminPermissionSetInlinePolicy.prototype, "inlinePolicy", {
        get: function () {
            return this.getStringAttribute('inline_policy');
        },
        set: function (value) {
            this._inlinePolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsoadminPermissionSetInlinePolicy.prototype, "inlinePolicyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._inlinePolicy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsoadminPermissionSetInlinePolicy.prototype, "instanceArn", {
        get: function () {
            return this.getStringAttribute('instance_arn');
        },
        set: function (value) {
            this._instanceArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsoadminPermissionSetInlinePolicy.prototype, "instanceArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsoadminPermissionSetInlinePolicy.prototype, "permissionSetArn", {
        get: function () {
            return this.getStringAttribute('permission_set_arn');
        },
        set: function (value) {
            this._permissionSetArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsoadminPermissionSetInlinePolicy.prototype, "permissionSetArnInput", {
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
    SsoadminPermissionSetInlinePolicy.prototype.synthesizeAttributes = function () {
        return {
            inline_policy: cdktf.stringToTerraform(this._inlinePolicy),
            instance_arn: cdktf.stringToTerraform(this._instanceArn),
            permission_set_arn: cdktf.stringToTerraform(this._permissionSetArn)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SsoadminPermissionSetInlinePolicy.tfResourceType = "aws_ssoadmin_permission_set_inline_policy";
    return SsoadminPermissionSetInlinePolicy;
}(cdktf.TerraformResource));
exports.SsoadminPermissionSetInlinePolicy = SsoadminPermissionSetInlinePolicy;
