"use strict";
// https://www.terraform.io/docs/providers/aws/r/macie2_member.html
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
exports.Macie2Member = void 0;
var cdktf = require("cdktf");
function macie2MemberTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        update: cdktf.stringToTerraform(struct.update)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie2_member.html aws_macie2_member}
*/
var Macie2Member = /** @class */ (function (_super) {
    __extends(Macie2Member, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/macie2_member.html aws_macie2_member} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Macie2MemberConfig
    */
    function Macie2Member(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_macie2_member',
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
        _this._invitationDisableEmailNotification = config.invitationDisableEmailNotification;
        _this._invitationMessage = config.invitationMessage;
        _this._invite = config.invite;
        _this._status = config.status;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(Macie2Member.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2Member.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2Member.prototype, "administratorAccountId", {
        // administrator_account_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('administrator_account_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2Member.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2Member.prototype, "email", {
        get: function () {
            return this.getStringAttribute('email');
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2Member.prototype, "emailInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2Member.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2Member.prototype, "invitationDisableEmailNotification", {
        get: function () {
            return this.getStringAttribute('invitation_disable_email_notification');
        },
        set: function (value) {
            this._invitationDisableEmailNotification = value;
        },
        enumerable: false,
        configurable: true
    });
    Macie2Member.prototype.resetInvitationDisableEmailNotification = function () {
        this._invitationDisableEmailNotification = undefined;
    };
    Object.defineProperty(Macie2Member.prototype, "invitationDisableEmailNotificationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._invitationDisableEmailNotification;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2Member.prototype, "invitationMessage", {
        get: function () {
            return this.getStringAttribute('invitation_message');
        },
        set: function (value) {
            this._invitationMessage = value;
        },
        enumerable: false,
        configurable: true
    });
    Macie2Member.prototype.resetInvitationMessage = function () {
        this._invitationMessage = undefined;
    };
    Object.defineProperty(Macie2Member.prototype, "invitationMessageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._invitationMessage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2Member.prototype, "invite", {
        get: function () {
            return this.getBooleanAttribute('invite');
        },
        set: function (value) {
            this._invite = value;
        },
        enumerable: false,
        configurable: true
    });
    Macie2Member.prototype.resetInvite = function () {
        this._invite = undefined;
    };
    Object.defineProperty(Macie2Member.prototype, "inviteInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._invite;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2Member.prototype, "invitedAt", {
        // invited_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('invited_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2Member.prototype, "masterAccountId", {
        // master_account_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('master_account_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2Member.prototype, "relationshipStatus", {
        // relationship_status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('relationship_status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2Member.prototype, "status", {
        get: function () {
            return this.getStringAttribute('status');
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    Macie2Member.prototype.resetStatus = function () {
        this._status = undefined;
    };
    Object.defineProperty(Macie2Member.prototype, "statusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2Member.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    Macie2Member.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(Macie2Member.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2Member.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    Macie2Member.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(Macie2Member.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2Member.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2Member.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    Macie2Member.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(Macie2Member.prototype, "timeoutsInput", {
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
    Macie2Member.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            email: cdktf.stringToTerraform(this._email),
            invitation_disable_email_notification: cdktf.stringToTerraform(this._invitationDisableEmailNotification),
            invitation_message: cdktf.stringToTerraform(this._invitationMessage),
            invite: cdktf.booleanToTerraform(this._invite),
            status: cdktf.stringToTerraform(this._status),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            timeouts: macie2MemberTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Macie2Member.tfResourceType = "aws_macie2_member";
    return Macie2Member;
}(cdktf.TerraformResource));
exports.Macie2Member = Macie2Member;
