"use strict";
// https://www.terraform.io/docs/providers/slack/d/conversation.html
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
exports.DataSlackConversation = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/slack/d/conversation.html slack_conversation}
*/
var DataSlackConversation = /** @class */ (function (_super) {
    __extends(DataSlackConversation, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/slack/d/conversation.html slack_conversation} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataSlackConversationConfig
    */
    function DataSlackConversation(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'slack_conversation',
            terraformGeneratorMetadata: {
                providerName: 'slack'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._channelId = config.channelId;
        _this._purpose = config.purpose;
        _this._topic = config.topic;
        return _this;
    }
    Object.defineProperty(DataSlackConversation.prototype, "channelId", {
        get: function () {
            return this.getStringAttribute('channel_id');
        },
        set: function (value) {
            this._channelId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataSlackConversation.prototype, "channelIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._channelId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataSlackConversation.prototype, "created", {
        // created - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('created');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataSlackConversation.prototype, "creator", {
        // creator - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('creator');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataSlackConversation.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataSlackConversation.prototype, "isArchived", {
        // is_archived - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_archived');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataSlackConversation.prototype, "isExtShared", {
        // is_ext_shared - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_ext_shared');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataSlackConversation.prototype, "isOrgShared", {
        // is_org_shared - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_org_shared');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataSlackConversation.prototype, "isPrivate", {
        // is_private - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_private');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataSlackConversation.prototype, "isShared", {
        // is_shared - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_shared');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataSlackConversation.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataSlackConversation.prototype, "purpose", {
        get: function () {
            return this.getStringAttribute('purpose');
        },
        set: function (value) {
            this._purpose = value;
        },
        enumerable: false,
        configurable: true
    });
    DataSlackConversation.prototype.resetPurpose = function () {
        this._purpose = undefined;
    };
    Object.defineProperty(DataSlackConversation.prototype, "purposeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._purpose;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataSlackConversation.prototype, "topic", {
        get: function () {
            return this.getStringAttribute('topic');
        },
        set: function (value) {
            this._topic = value;
        },
        enumerable: false,
        configurable: true
    });
    DataSlackConversation.prototype.resetTopic = function () {
        this._topic = undefined;
    };
    Object.defineProperty(DataSlackConversation.prototype, "topicInput", {
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
    DataSlackConversation.prototype.synthesizeAttributes = function () {
        return {
            channel_id: cdktf.stringToTerraform(this._channelId),
            purpose: cdktf.stringToTerraform(this._purpose),
            topic: cdktf.stringToTerraform(this._topic)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataSlackConversation.tfResourceType = "slack_conversation";
    return DataSlackConversation;
}(cdktf.TerraformDataSource));
exports.DataSlackConversation = DataSlackConversation;
