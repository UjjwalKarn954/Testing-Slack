"use strict";
// https://www.terraform.io/docs/providers/aws/r/iot_policy_attachment.html
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
exports.IotPolicyAttachment = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iot_policy_attachment.html aws_iot_policy_attachment}
*/
var IotPolicyAttachment = /** @class */ (function (_super) {
    __extends(IotPolicyAttachment, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iot_policy_attachment.html aws_iot_policy_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotPolicyAttachmentConfig
    */
    function IotPolicyAttachment(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_iot_policy_attachment',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._policy = config.policy;
        _this._target = config.target;
        return _this;
    }
    Object.defineProperty(IotPolicyAttachment.prototype, "id", {
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
    Object.defineProperty(IotPolicyAttachment.prototype, "policy", {
        get: function () {
            return this.getStringAttribute('policy');
        },
        set: function (value) {
            this._policy = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotPolicyAttachment.prototype, "policyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotPolicyAttachment.prototype, "target", {
        get: function () {
            return this.getStringAttribute('target');
        },
        set: function (value) {
            this._target = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotPolicyAttachment.prototype, "targetInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._target;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    IotPolicyAttachment.prototype.synthesizeAttributes = function () {
        return {
            policy: cdktf.stringToTerraform(this._policy),
            target: cdktf.stringToTerraform(this._target)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    IotPolicyAttachment.tfResourceType = "aws_iot_policy_attachment";
    return IotPolicyAttachment;
}(cdktf.TerraformResource));
exports.IotPolicyAttachment = IotPolicyAttachment;
