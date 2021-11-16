"use strict";
// https://www.terraform.io/docs/providers/aws/r/guardduty_member.html
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
exports.GuarddutyMember = void 0;
var cdktf = require("cdktf");
function guarddutyMemberTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        update: cdktf.stringToTerraform(struct.update)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member.html aws_guardduty_member}
*/
var GuarddutyMember = /** @class */ (function (_super) {
    __extends(GuarddutyMember, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/guardduty_member.html aws_guardduty_member} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GuarddutyMemberConfig
    */
    function GuarddutyMember(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_guardduty_member',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._accountId = config.accountId;
        _this._detectorId = config.detectorId;
        _this._disableEmailNotification = config.disableEmailNotification;
        _this._email = config.email;
        _this._invitationMessage = config.invitationMessage;
        _this._invite = config.invite;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(GuarddutyMember.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyMember.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyMember.prototype, "detectorId", {
        get: function () {
            return this.getStringAttribute('detector_id');
        },
        set: function (value) {
            this._detectorId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyMember.prototype, "detectorIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._detectorId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyMember.prototype, "disableEmailNotification", {
        get: function () {
            return this.getBooleanAttribute('disable_email_notification');
        },
        set: function (value) {
            this._disableEmailNotification = value;
        },
        enumerable: false,
        configurable: true
    });
    GuarddutyMember.prototype.resetDisableEmailNotification = function () {
        this._disableEmailNotification = undefined;
    };
    Object.defineProperty(GuarddutyMember.prototype, "disableEmailNotificationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._disableEmailNotification;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyMember.prototype, "email", {
        get: function () {
            return this.getStringAttribute('email');
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyMember.prototype, "emailInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyMember.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyMember.prototype, "invitationMessage", {
        get: function () {
            return this.getStringAttribute('invitation_message');
        },
        set: function (value) {
            this._invitationMessage = value;
        },
        enumerable: false,
        configurable: true
    });
    GuarddutyMember.prototype.resetInvitationMessage = function () {
        this._invitationMessage = undefined;
    };
    Object.defineProperty(GuarddutyMember.prototype, "invitationMessageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._invitationMessage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyMember.prototype, "invite", {
        get: function () {
            return this.getBooleanAttribute('invite');
        },
        set: function (value) {
            this._invite = value;
        },
        enumerable: false,
        configurable: true
    });
    GuarddutyMember.prototype.resetInvite = function () {
        this._invite = undefined;
    };
    Object.defineProperty(GuarddutyMember.prototype, "inviteInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._invite;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyMember.prototype, "relationshipStatus", {
        // relationship_status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('relationship_status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyMember.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    GuarddutyMember.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(GuarddutyMember.prototype, "timeoutsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeouts;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    GuarddutyMember.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            detector_id: cdktf.stringToTerraform(this._detectorId),
            disable_email_notification: cdktf.booleanToTerraform(this._disableEmailNotification),
            email: cdktf.stringToTerraform(this._email),
            invitation_message: cdktf.stringToTerraform(this._invitationMessage),
            invite: cdktf.booleanToTerraform(this._invite),
            timeouts: guarddutyMemberTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    GuarddutyMember.tfResourceType = "aws_guardduty_member";
    return GuarddutyMember;
}(cdktf.TerraformResource));
exports.GuarddutyMember = GuarddutyMember;
