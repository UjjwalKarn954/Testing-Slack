"use strict";
// https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html
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
exports.LexBotAlias = void 0;
var cdktf = require("cdktf");
function lexBotAliasConversationLogsLogSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        destination: cdktf.stringToTerraform(struct.destination),
        kms_key_arn: cdktf.stringToTerraform(struct.kmsKeyArn),
        log_type: cdktf.stringToTerraform(struct.logType),
        resource_arn: cdktf.stringToTerraform(struct.resourceArn)
    };
}
function lexBotAliasConversationLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        iam_role_arn: cdktf.stringToTerraform(struct.iamRoleArn),
        log_settings: cdktf.listMapper(lexBotAliasConversationLogsLogSettingsToTerraform)(struct.logSettings)
    };
}
function lexBotAliasTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        "delete": cdktf.stringToTerraform(struct["delete"]),
        update: cdktf.stringToTerraform(struct.update)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html aws_lex_bot_alias}
*/
var LexBotAlias = /** @class */ (function (_super) {
    __extends(LexBotAlias, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html aws_lex_bot_alias} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LexBotAliasConfig
    */
    function LexBotAlias(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_lex_bot_alias',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._botName = config.botName;
        _this._botVersion = config.botVersion;
        _this._description = config.description;
        _this._name = config.name;
        _this._conversationLogs = config.conversationLogs;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(LexBotAlias.prototype, "arn", {
        // ==========
        // ATTRIBUTES
        // ==========
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexBotAlias.prototype, "botName", {
        get: function () {
            return this.getStringAttribute('bot_name');
        },
        set: function (value) {
            this._botName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexBotAlias.prototype, "botNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._botName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexBotAlias.prototype, "botVersion", {
        get: function () {
            return this.getStringAttribute('bot_version');
        },
        set: function (value) {
            this._botVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexBotAlias.prototype, "botVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._botVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexBotAlias.prototype, "checksum", {
        // checksum - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('checksum');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexBotAlias.prototype, "createdDate", {
        // created_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexBotAlias.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    LexBotAlias.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(LexBotAlias.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexBotAlias.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexBotAlias.prototype, "lastUpdatedDate", {
        // last_updated_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_updated_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexBotAlias.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexBotAlias.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexBotAlias.prototype, "conversationLogs", {
        get: function () {
            return this.interpolationForAttribute('conversation_logs');
        },
        set: function (value) {
            this._conversationLogs = value;
        },
        enumerable: false,
        configurable: true
    });
    LexBotAlias.prototype.resetConversationLogs = function () {
        this._conversationLogs = undefined;
    };
    Object.defineProperty(LexBotAlias.prototype, "conversationLogsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._conversationLogs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexBotAlias.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    LexBotAlias.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(LexBotAlias.prototype, "timeoutsInput", {
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
    LexBotAlias.prototype.synthesizeAttributes = function () {
        return {
            bot_name: cdktf.stringToTerraform(this._botName),
            bot_version: cdktf.stringToTerraform(this._botVersion),
            description: cdktf.stringToTerraform(this._description),
            name: cdktf.stringToTerraform(this._name),
            conversation_logs: cdktf.listMapper(lexBotAliasConversationLogsToTerraform)(this._conversationLogs),
            timeouts: lexBotAliasTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    LexBotAlias.tfResourceType = "aws_lex_bot_alias";
    return LexBotAlias;
}(cdktf.TerraformResource));
exports.LexBotAlias = LexBotAlias;
