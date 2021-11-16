"use strict";
// https://www.terraform.io/docs/providers/slack/r/group.html
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
exports.Group = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/slack/r/group.html slack_group}
*/
var Group = /** @class */ (function (_super) {
    __extends(Group, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/slack/r/group.html slack_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GroupConfig
    */
    function Group(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'slack_group',
            terraformGeneratorMetadata: {
                providerName: 'slack'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._actionOnDestroy = config.actionOnDestroy;
        _this._isArchived = config.isArchived;
        _this._name = config.name;
        _this._purpose = config.purpose;
        _this._topic = config.topic;
        return _this;
    }
    Object.defineProperty(Group.prototype, "actionOnDestroy", {
        get: function () {
            return this.getStringAttribute('action_on_destroy');
        },
        set: function (value) {
            this._actionOnDestroy = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "actionOnDestroyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._actionOnDestroy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "created", {
        // created - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('created');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "creator", {
        // creator - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('creator');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "isArchived", {
        get: function () {
            return this.getBooleanAttribute('is_archived');
        },
        set: function (value) {
            this._isArchived = value;
        },
        enumerable: false,
        configurable: true
    });
    Group.prototype.resetIsArchived = function () {
        this._isArchived = undefined;
    };
    Object.defineProperty(Group.prototype, "isArchivedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._isArchived;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "isExtShared", {
        // is_ext_shared - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_ext_shared');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "isOrgShared", {
        // is_org_shared - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_org_shared');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "isShared", {
        // is_shared - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_shared');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "purpose", {
        get: function () {
            return this.getStringAttribute('purpose');
        },
        set: function (value) {
            this._purpose = value;
        },
        enumerable: false,
        configurable: true
    });
    Group.prototype.resetPurpose = function () {
        this._purpose = undefined;
    };
    Object.defineProperty(Group.prototype, "purposeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._purpose;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "topic", {
        get: function () {
            return this.getStringAttribute('topic');
        },
        set: function (value) {
            this._topic = value;
        },
        enumerable: false,
        configurable: true
    });
    Group.prototype.resetTopic = function () {
        this._topic = undefined;
    };
    Object.defineProperty(Group.prototype, "topicInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._topic;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Group.prototype.synthesizeAttributes = function () {
        return {
            action_on_destroy: cdktf.stringToTerraform(this._actionOnDestroy),
            is_archived: cdktf.booleanToTerraform(this._isArchived),
            name: cdktf.stringToTerraform(this._name),
            purpose: cdktf.stringToTerraform(this._purpose),
            topic: cdktf.stringToTerraform(this._topic)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Group.tfResourceType = "slack_group";
    return Group;
}(cdktf.TerraformResource));
exports.Group = Group;
