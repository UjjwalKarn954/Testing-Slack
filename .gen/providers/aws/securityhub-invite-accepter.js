"use strict";
// https://www.terraform.io/docs/providers/aws/r/securityhub_invite_accepter.html
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
exports.SecurityhubInviteAccepter = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/securityhub_invite_accepter.html aws_securityhub_invite_accepter}
*/
var SecurityhubInviteAccepter = /** @class */ (function (_super) {
    __extends(SecurityhubInviteAccepter, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/securityhub_invite_accepter.html aws_securityhub_invite_accepter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecurityhubInviteAccepterConfig
    */
    function SecurityhubInviteAccepter(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_securityhub_invite_accepter',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._masterId = config.masterId;
        return _this;
    }
    Object.defineProperty(SecurityhubInviteAccepter.prototype, "id", {
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
    Object.defineProperty(SecurityhubInviteAccepter.prototype, "invitationId", {
        // invitation_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('invitation_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityhubInviteAccepter.prototype, "masterId", {
        get: function () {
            return this.getStringAttribute('master_id');
        },
        set: function (value) {
            this._masterId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityhubInviteAccepter.prototype, "masterIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._masterId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SecurityhubInviteAccepter.prototype.synthesizeAttributes = function () {
        return {
            master_id: cdktf.stringToTerraform(this._masterId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SecurityhubInviteAccepter.tfResourceType = "aws_securityhub_invite_accepter";
    return SecurityhubInviteAccepter;
}(cdktf.TerraformResource));
exports.SecurityhubInviteAccepter = SecurityhubInviteAccepter;
