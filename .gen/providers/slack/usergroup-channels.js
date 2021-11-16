"use strict";
// https://www.terraform.io/docs/providers/slack/r/usergroup_channels.html
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
exports.UsergroupChannels = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/slack/r/usergroup_channels.html slack_usergroup_channels}
*/
var UsergroupChannels = /** @class */ (function (_super) {
    __extends(UsergroupChannels, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/slack/r/usergroup_channels.html slack_usergroup_channels} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options UsergroupChannelsConfig
    */
    function UsergroupChannels(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'slack_usergroup_channels',
            terraformGeneratorMetadata: {
                providerName: 'slack'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._channels = config.channels;
        _this._usergroupId = config.usergroupId;
        return _this;
    }
    Object.defineProperty(UsergroupChannels.prototype, "channels", {
        get: function () {
            return this.getListAttribute('channels');
        },
        set: function (value) {
            this._channels = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UsergroupChannels.prototype, "channelsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._channels;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UsergroupChannels.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UsergroupChannels.prototype, "usergroupId", {
        get: function () {
            return this.getStringAttribute('usergroup_id');
        },
        set: function (value) {
            this._usergroupId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UsergroupChannels.prototype, "usergroupIdInput", {
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
    UsergroupChannels.prototype.synthesizeAttributes = function () {
        return {
            channels: cdktf.listMapper(cdktf.stringToTerraform)(this._channels),
            usergroup_id: cdktf.stringToTerraform(this._usergroupId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    UsergroupChannels.tfResourceType = "slack_usergroup_channels";
    return UsergroupChannels;
}(cdktf.TerraformResource));
exports.UsergroupChannels = UsergroupChannels;
