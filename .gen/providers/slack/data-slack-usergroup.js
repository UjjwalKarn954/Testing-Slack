"use strict";
// https://www.terraform.io/docs/providers/slack/d/usergroup.html
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
exports.DataSlackUsergroup = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/slack/d/usergroup.html slack_usergroup}
*/
var DataSlackUsergroup = /** @class */ (function (_super) {
    __extends(DataSlackUsergroup, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/slack/d/usergroup.html slack_usergroup} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataSlackUsergroupConfig
    */
    function DataSlackUsergroup(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'slack_usergroup',
            terraformGeneratorMetadata: {
                providerName: 'slack'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._description = config.description;
        _this._usergroupId = config.usergroupId;
        return _this;
    }
    Object.defineProperty(DataSlackUsergroup.prototype, "autoType", {
        // ==========
        // ATTRIBUTES
        // ==========
        // auto_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('auto_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataSlackUsergroup.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    DataSlackUsergroup.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(DataSlackUsergroup.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataSlackUsergroup.prototype, "handle", {
        // handle - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('handle');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataSlackUsergroup.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataSlackUsergroup.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataSlackUsergroup.prototype, "teamId", {
        // team_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('team_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataSlackUsergroup.prototype, "usergroupId", {
        get: function () {
            return this.getStringAttribute('usergroup_id');
        },
        set: function (value) {
            this._usergroupId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataSlackUsergroup.prototype, "usergroupIdInput", {
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
    DataSlackUsergroup.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            usergroup_id: cdktf.stringToTerraform(this._usergroupId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataSlackUsergroup.tfResourceType = "slack_usergroup";
    return DataSlackUsergroup;
}(cdktf.TerraformDataSource));
exports.DataSlackUsergroup = DataSlackUsergroup;
