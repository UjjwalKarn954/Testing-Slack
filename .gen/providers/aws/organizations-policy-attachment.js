"use strict";
// https://www.terraform.io/docs/providers/aws/r/organizations_policy_attachment.html
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
exports.OrganizationsPolicyAttachment = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/organizations_policy_attachment.html aws_organizations_policy_attachment}
*/
var OrganizationsPolicyAttachment = /** @class */ (function (_super) {
    __extends(OrganizationsPolicyAttachment, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/organizations_policy_attachment.html aws_organizations_policy_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OrganizationsPolicyAttachmentConfig
    */
    function OrganizationsPolicyAttachment(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_organizations_policy_attachment',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._policyId = config.policyId;
        _this._targetId = config.targetId;
        return _this;
    }
    Object.defineProperty(OrganizationsPolicyAttachment.prototype, "id", {
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
    Object.defineProperty(OrganizationsPolicyAttachment.prototype, "policyId", {
        get: function () {
            return this.getStringAttribute('policy_id');
        },
        set: function (value) {
            this._policyId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsPolicyAttachment.prototype, "policyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsPolicyAttachment.prototype, "targetId", {
        get: function () {
            return this.getStringAttribute('target_id');
        },
        set: function (value) {
            this._targetId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationsPolicyAttachment.prototype, "targetIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    OrganizationsPolicyAttachment.prototype.synthesizeAttributes = function () {
        return {
            policy_id: cdktf.stringToTerraform(this._policyId),
            target_id: cdktf.stringToTerraform(this._targetId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    OrganizationsPolicyAttachment.tfResourceType = "aws_organizations_policy_attachment";
    return OrganizationsPolicyAttachment;
}(cdktf.TerraformResource));
exports.OrganizationsPolicyAttachment = OrganizationsPolicyAttachment;
