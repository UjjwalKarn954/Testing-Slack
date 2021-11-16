"use strict";
// https://www.terraform.io/docs/providers/aws/r/lex_bot.html
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
exports.LexBot = void 0;
var cdktf = require("cdktf");
function lexBotAbortStatementMessageToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        content: cdktf.stringToTerraform(struct.content),
        content_type: cdktf.stringToTerraform(struct.contentType),
        group_number: cdktf.numberToTerraform(struct.groupNumber)
    };
}
function lexBotAbortStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        response_card: cdktf.stringToTerraform(struct.responseCard),
        message: cdktf.listMapper(lexBotAbortStatementMessageToTerraform)(struct.message)
    };
}
function lexBotClarificationPromptMessageToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        content: cdktf.stringToTerraform(struct.content),
        content_type: cdktf.stringToTerraform(struct.contentType),
        group_number: cdktf.numberToTerraform(struct.groupNumber)
    };
}
function lexBotClarificationPromptToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        max_attempts: cdktf.numberToTerraform(struct.maxAttempts),
        response_card: cdktf.stringToTerraform(struct.responseCard),
        message: cdktf.listMapper(lexBotClarificationPromptMessageToTerraform)(struct.message)
    };
}
function lexBotIntentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        intent_name: cdktf.stringToTerraform(struct.intentName),
        intent_version: cdktf.stringToTerraform(struct.intentVersion)
    };
}
function lexBotTimeoutsToTerraform(struct) {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html aws_lex_bot}
*/
var LexBot = /** @class */ (function (_super) {
    __extends(LexBot, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html aws_lex_bot} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LexBotConfig
    */
    function LexBot(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_lex_bot',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._childDirected = config.childDirected;
        _this._createVersion = config.createVersion;
        _this._description = config.description;
        _this._detectSentiment = config.detectSentiment;
        _this._enableModelImprovements = config.enableModelImprovements;
        _this._idleSessionTtlInSeconds = config.idleSessionTtlInSeconds;
        _this._locale = config.locale;
        _this._name = config.name;
        _this._nluIntentConfidenceThreshold = config.nluIntentConfidenceThreshold;
        _this._processBehavior = config.processBehavior;
        _this._voiceId = config.voiceId;
        _this._abortStatement = config.abortStatement;
        _this._clarificationPrompt = config.clarificationPrompt;
        _this._intent = config.intent;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(LexBot.prototype, "arn", {
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
    Object.defineProperty(LexBot.prototype, "checksum", {
        // checksum - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('checksum');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexBot.prototype, "childDirected", {
        get: function () {
            return this.getBooleanAttribute('child_directed');
        },
        set: function (value) {
            this._childDirected = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexBot.prototype, "childDirectedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._childDirected;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexBot.prototype, "createVersion", {
        get: function () {
            return this.getBooleanAttribute('create_version');
        },
        set: function (value) {
            this._createVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    LexBot.prototype.resetCreateVersion = function () {
        this._createVersion = undefined;
    };
    Object.defineProperty(LexBot.prototype, "createVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._createVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexBot.prototype, "createdDate", {
        // created_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexBot.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    LexBot.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(LexBot.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexBot.prototype, "detectSentiment", {
        get: function () {
            return this.getBooleanAttribute('detect_sentiment');
        },
        set: function (value) {
            this._detectSentiment = value;
        },
        enumerable: false,
        configurable: true
    });
    LexBot.prototype.resetDetectSentiment = function () {
        this._detectSentiment = undefined;
    };
    Object.defineProperty(LexBot.prototype, "detectSentimentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._detectSentiment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexBot.prototype, "enableModelImprovements", {
        get: function () {
            return this.getBooleanAttribute('enable_model_improvements');
        },
        set: function (value) {
            this._enableModelImprovements = value;
        },
        enumerable: false,
        configurable: true
    });
    LexBot.prototype.resetEnableModelImprovements = function () {
        this._enableModelImprovements = undefined;
    };
    Object.defineProperty(LexBot.prototype, "enableModelImprovementsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enableModelImprovements;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexBot.prototype, "failureReason", {
        // failure_reason - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('failure_reason');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexBot.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexBot.prototype, "idleSessionTtlInSeconds", {
        get: function () {
            return this.getNumberAttribute('idle_session_ttl_in_seconds');
        },
        set: function (value) {
            this._idleSessionTtlInSeconds = value;
        },
        enumerable: false,
        configurable: true
    });
    LexBot.prototype.resetIdleSessionTtlInSeconds = function () {
        this._idleSessionTtlInSeconds = undefined;
    };
    Object.defineProperty(LexBot.prototype, "idleSessionTtlInSecondsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._idleSessionTtlInSeconds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexBot.prototype, "lastUpdatedDate", {
        // last_updated_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_updated_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexBot.prototype, "locale", {
        get: function () {
            return this.getStringAttribute('locale');
        },
        set: function (value) {
            this._locale = value;
        },
        enumerable: false,
        configurable: true
    });
    LexBot.prototype.resetLocale = function () {
        this._locale = undefined;
    };
    Object.defineProperty(LexBot.prototype, "localeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._locale;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexBot.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexBot.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexBot.prototype, "nluIntentConfidenceThreshold", {
        get: function () {
            return this.getNumberAttribute('nlu_intent_confidence_threshold');
        },
        set: function (value) {
            this._nluIntentConfidenceThreshold = value;
        },
        enumerable: false,
        configurable: true
    });
    LexBot.prototype.resetNluIntentConfidenceThreshold = function () {
        this._nluIntentConfidenceThreshold = undefined;
    };
    Object.defineProperty(LexBot.prototype, "nluIntentConfidenceThresholdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._nluIntentConfidenceThreshold;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexBot.prototype, "processBehavior", {
        get: function () {
            return this.getStringAttribute('process_behavior');
        },
        set: function (value) {
            this._processBehavior = value;
        },
        enumerable: false,
        configurable: true
    });
    LexBot.prototype.resetProcessBehavior = function () {
        this._processBehavior = undefined;
    };
    Object.defineProperty(LexBot.prototype, "processBehaviorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._processBehavior;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexBot.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexBot.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexBot.prototype, "voiceId", {
        get: function () {
            return this.getStringAttribute('voice_id');
        },
        set: function (value) {
            this._voiceId = value;
        },
        enumerable: false,
        configurable: true
    });
    LexBot.prototype.resetVoiceId = function () {
        this._voiceId = undefined;
    };
    Object.defineProperty(LexBot.prototype, "voiceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._voiceId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexBot.prototype, "abortStatement", {
        get: function () {
            return this.interpolationForAttribute('abort_statement');
        },
        set: function (value) {
            this._abortStatement = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexBot.prototype, "abortStatementInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._abortStatement;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexBot.prototype, "clarificationPrompt", {
        get: function () {
            return this.interpolationForAttribute('clarification_prompt');
        },
        set: function (value) {
            this._clarificationPrompt = value;
        },
        enumerable: false,
        configurable: true
    });
    LexBot.prototype.resetClarificationPrompt = function () {
        this._clarificationPrompt = undefined;
    };
    Object.defineProperty(LexBot.prototype, "clarificationPromptInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clarificationPrompt;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexBot.prototype, "intent", {
        get: function () {
            return this.interpolationForAttribute('intent');
        },
        set: function (value) {
            this._intent = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexBot.prototype, "intentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._intent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexBot.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    LexBot.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(LexBot.prototype, "timeoutsInput", {
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
    LexBot.prototype.synthesizeAttributes = function () {
        return {
            child_directed: cdktf.booleanToTerraform(this._childDirected),
            create_version: cdktf.booleanToTerraform(this._createVersion),
            description: cdktf.stringToTerraform(this._description),
            detect_sentiment: cdktf.booleanToTerraform(this._detectSentiment),
            enable_model_improvements: cdktf.booleanToTerraform(this._enableModelImprovements),
            idle_session_ttl_in_seconds: cdktf.numberToTerraform(this._idleSessionTtlInSeconds),
            locale: cdktf.stringToTerraform(this._locale),
            name: cdktf.stringToTerraform(this._name),
            nlu_intent_confidence_threshold: cdktf.numberToTerraform(this._nluIntentConfidenceThreshold),
            process_behavior: cdktf.stringToTerraform(this._processBehavior),
            voice_id: cdktf.stringToTerraform(this._voiceId),
            abort_statement: cdktf.listMapper(lexBotAbortStatementToTerraform)(this._abortStatement),
            clarification_prompt: cdktf.listMapper(lexBotClarificationPromptToTerraform)(this._clarificationPrompt),
            intent: cdktf.listMapper(lexBotIntentToTerraform)(this._intent),
            timeouts: lexBotTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    LexBot.tfResourceType = "aws_lex_bot";
    return LexBot;
}(cdktf.TerraformResource));
exports.LexBot = LexBot;
