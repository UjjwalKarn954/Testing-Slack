"use strict";
// https://www.terraform.io/docs/providers/slack/r/usergroup_members.html
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
exports.UsergroupMembers = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/slack/r/usergroup_members.html slack_usergroup_members}
*/
var UsergroupMembers = /** @class */ (function (_super) {
    __extends(UsergroupMembers, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/slack/r/usergroup_members.html slack_usergroup_members} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options UsergroupMembersConfig
    */
    function UsergroupMembers(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'slack_usergroup_members',
            terraformGeneratorMetadata: {
                providerName: 'slack'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._members = config.members;
        _this._usergroupId = config.usergroupId;
        return _this;
    }
    Object.defineProperty(UsergroupMembers.prototype, "id", {
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
    Object.defineProperty(UsergroupMembers.prototype, "members", {
        get: function () {
            return this.getListAttribute('members');
        },
        set: function (value) {
            this._members = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UsergroupMembers.prototype, "membersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._members;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UsergroupMembers.prototype, "usergroupId", {
        get: function () {
            return this.getStringAttribute('usergroup_id');
        },
        set: function (value) {
            this._usergroupId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UsergroupMembers.prototype, "usergroupIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._usergroupId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    UsergroupMembers.prototype.synthesizeAttributes = function () {
        return {
            members: cdktf.listMapper(cdktf.stringToTerraform)(this._members),
            usergroup_id: cdktf.stringToTerraform(this._usergroupId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    UsergroupMembers.tfResourceType = "slack_usergroup_members";
    return UsergroupMembers;
}(cdktf.TerraformResource));
exports.UsergroupMembers = UsergroupMembers;
