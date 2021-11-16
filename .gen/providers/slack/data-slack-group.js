"use strict";
// https://www.terraform.io/docs/providers/slack/d/group.html
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
exports.DataSlackGroup = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/slack/d/group.html slack_group}
*/
var DataSlackGroup = /** @class */ (function (_super) {
    __extends(DataSlackGroup, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/slack/d/group.html slack_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataSlackGroupConfig
    */
    function DataSlackGroup(scope, id, config) {
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
        _this._groupId = config.groupId;
        _this._purpose = config.purpose;
        _this._topic = config.topic;
        return _this;
    }
    Object.defineProperty(DataSlackGroup.prototype, "created", {
        // ==========
        // ATTRIBUTES
        // ==========
        // created - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('created');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataSlackGroup.prototype, "creator", {
        // creator - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('creator');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataSlackGroup.prototype, "groupId", {
        get: function () {
            return this.getStringAttribute('group_id');
        },
        set: function (value) {
            this._groupId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataSlackGroup.prototype, "groupIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._groupId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataSlackGroup.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataSlackGroup.prototype, "isArchived", {
        // is_archived - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_archived');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataSlackGroup.prototype, "isExtShared", {
        // is_ext_shared - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_ext_shared');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataSlackGroup.prototype, "isOrgShared", {
        // is_org_shared - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_org_shared');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataSlackGroup.prototype, "isShared", {
        // is_shared - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_shared');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataSlackGroup.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataSlackGroup.prototype, "purpose", {
        get: function () {
            return this.getStringAttribute('purpose');
        },
        set: function (value) {
            this._purpose = value;
        },
        enumerable: false,
        configurable: true
    });
    DataSlackGroup.prototype.resetPurpose = function () {
        this._purpose = undefined;
    };
    Object.defineProperty(DataSlackGroup.prototype, "purposeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._purpose;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataSlackGroup.prototype, "topic", {
        get: function () {
            return this.getStringAttribute('topic');
        },
        set: function (value) {
            this._topic = value;
        },
        enumerable: false,
        configurable: true
    });
    DataSlackGroup.prototype.resetTopic = function () {
        this._topic = undefined;
    };
    Object.defineProperty(DataSlackGroup.prototype, "topicInput", {
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
    DataSlackGroup.prototype.synthesizeAttributes = function () {
        return {
            group_id: cdktf.stringToTerraform(this._groupId),
            purpose: cdktf.stringToTerraform(this._purpose),
            topic: cdktf.stringToTerraform(this._topic)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataSlackGroup.tfResourceType = "slack_group";
    return DataSlackGroup;
}(cdktf.TerraformDataSource));
exports.DataSlackGroup = DataSlackGroup;
