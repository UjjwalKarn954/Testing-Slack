"use strict";
// https://www.terraform.io/docs/providers/aws/r/macie2_invitation_accepter.html
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
exports.Macie2InvitationAccepter = void 0;
var cdktf = require("cdktf");
function macie2InvitationAccepterTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie2_invitation_accepter.html aws_macie2_invitation_accepter}
*/
var Macie2InvitationAccepter = /** @class */ (function (_super) {
    __extends(Macie2InvitationAccepter, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/macie2_invitation_accepter.html aws_macie2_invitation_accepter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Macie2InvitationAccepterConfig
    */
    function Macie2InvitationAccepter(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_macie2_invitation_accepter',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._administratorAccountId = config.administratorAccountId;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(Macie2InvitationAccepter.prototype, "administratorAccountId", {
        get: function () {
            return this.getStringAttribute('administrator_account_id');
        },
        set: function (value) {
            this._administratorAccountId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2InvitationAccepter.prototype, "administratorAccountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._administratorAccountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2InvitationAccepter.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2InvitationAccepter.prototype, "invitationId", {
        // invitation_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('invitation_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2InvitationAccepter.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    Macie2InvitationAccepter.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(Macie2InvitationAccepter.prototype, "timeoutsInput", {
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
    Macie2InvitationAccepter.prototype.synthesizeAttributes = function () {
        return {
            administrator_account_id: cdktf.stringToTerraform(this._administratorAccountId),
            timeouts: macie2InvitationAccepterTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Macie2InvitationAccepter.tfResourceType = "aws_macie2_invitation_accepter";
    return Macie2InvitationAccepter;
}(cdktf.TerraformResource));
exports.Macie2InvitationAccepter = Macie2InvitationAccepter;
