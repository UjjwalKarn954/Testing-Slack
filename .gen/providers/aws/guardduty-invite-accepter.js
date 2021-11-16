"use strict";
// https://www.terraform.io/docs/providers/aws/r/guardduty_invite_accepter.html
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
exports.GuarddutyInviteAccepter = void 0;
var cdktf = require("cdktf");
function guarddutyInviteAccepterTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/guardduty_invite_accepter.html aws_guardduty_invite_accepter}
*/
var GuarddutyInviteAccepter = /** @class */ (function (_super) {
    __extends(GuarddutyInviteAccepter, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/guardduty_invite_accepter.html aws_guardduty_invite_accepter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GuarddutyInviteAccepterConfig
    */
    function GuarddutyInviteAccepter(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_guardduty_invite_accepter',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._detectorId = config.detectorId;
        _this._masterAccountId = config.masterAccountId;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(GuarddutyInviteAccepter.prototype, "detectorId", {
        get: function () {
            return this.getStringAttribute('detector_id');
        },
        set: function (value) {
            this._detectorId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyInviteAccepter.prototype, "detectorIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._detectorId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyInviteAccepter.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyInviteAccepter.prototype, "masterAccountId", {
        get: function () {
            return this.getStringAttribute('master_account_id');
        },
        set: function (value) {
            this._masterAccountId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyInviteAccepter.prototype, "masterAccountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._masterAccountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyInviteAccepter.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    GuarddutyInviteAccepter.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(GuarddutyInviteAccepter.prototype, "timeoutsInput", {
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
    GuarddutyInviteAccepter.prototype.synthesizeAttributes = function () {
        return {
            detector_id: cdktf.stringToTerraform(this._detectorId),
            master_account_id: cdktf.stringToTerraform(this._masterAccountId),
            timeouts: guarddutyInviteAccepterTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    GuarddutyInviteAccepter.tfResourceType = "aws_guardduty_invite_accepter";
    return GuarddutyInviteAccepter;
}(cdktf.TerraformResource));
exports.GuarddutyInviteAccepter = GuarddutyInviteAccepter;
