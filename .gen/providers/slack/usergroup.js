"use strict";
// https://www.terraform.io/docs/providers/slack/r/usergroup.html
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
exports.Usergroup = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/slack/r/usergroup.html slack_usergroup}
*/
var Usergroup = /** @class */ (function (_super) {
    __extends(Usergroup, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/slack/r/usergroup.html slack_usergroup} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options UsergroupConfig
    */
    function Usergroup(scope, id, config) {
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
        _this._autoType = config.autoType;
        _this._description = config.description;
        _this._handle = config.handle;
        _this._name = config.name;
        return _this;
    }
    Object.defineProperty(Usergroup.prototype, "autoType", {
        get: function () {
            return this.getStringAttribute('auto_type');
        },
        set: function (value) {
            this._autoType = value;
        },
        enumerable: false,
        configurable: true
    });
    Usergroup.prototype.resetAutoType = function () {
        this._autoType = undefined;
    };
    Object.defineProperty(Usergroup.prototype, "autoTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Usergroup.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    Usergroup.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(Usergroup.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Usergroup.prototype, "handle", {
        get: function () {
            return this.getStringAttribute('handle');
        },
        set: function (value) {
            this._handle = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Usergroup.prototype, "handleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._handle;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Usergroup.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Usergroup.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Usergroup.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(Usergroup.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Usergroup.prototype, "teamId", {
        // team_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('team_id');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Usergroup.prototype.synthesizeAttributes = function () {
        return {
            auto_type: cdktf.stringToTerraform(this._autoType),
            description: cdktf.stringToTerraform(this._description),
            handle: cdktf.stringToTerraform(this._handle),
            name: cdktf.stringToTerraform(this._name)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Usergroup.tfResourceType = "slack_usergroup";
    return Usergroup;
}(cdktf.TerraformResource));
exports.Usergroup = Usergroup;
