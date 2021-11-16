"use strict";
// https://www.terraform.io/docs/providers/aws/r/securityhub_member.html
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
exports.SecurityhubMember = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/securityhub_member.html aws_securityhub_member}
*/
var SecurityhubMember = /** @class */ (function (_super) {
    __extends(SecurityhubMember, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/securityhub_member.html aws_securityhub_member} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecurityhubMemberConfig
    */
    function SecurityhubMember(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_securityhub_member',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._accountId = config.accountId;
        _this._email = config.email;
        _this._invite = config.invite;
        return _this;
    }
    Object.defineProperty(SecurityhubMember.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityhubMember.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityhubMember.prototype, "email", {
        get: function () {
            return this.getStringAttribute('email');
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityhubMember.prototype, "emailInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityhubMember.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityhubMember.prototype, "invite", {
        get: function () {
            return this.getBooleanAttribute('invite');
        },
        set: function (value) {
            this._invite = value;
        },
        enumerable: false,
        configurable: true
    });
    SecurityhubMember.prototype.resetInvite = function () {
        this._invite = undefined;
    };
    Object.defineProperty(SecurityhubMember.prototype, "inviteInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._invite;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityhubMember.prototype, "masterId", {
        // master_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('master_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityhubMember.prototype, "memberStatus", {
        // member_status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('member_status');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SecurityhubMember.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            email: cdktf.stringToTerraform(this._email),
            invite: cdktf.booleanToTerraform(this._invite)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SecurityhubMember.tfResourceType = "aws_securityhub_member";
    return SecurityhubMember;
}(cdktf.TerraformResource));
exports.SecurityhubMember = SecurityhubMember;
