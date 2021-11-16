"use strict";
// https://www.terraform.io/docs/providers/aws/r/lex_intent.html
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
exports.LexIntent = void 0;
var cdktf = require("cdktf");
function lexIntentConclusionStatementMessageToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        content: cdktf.stringToTerraform(struct.content),
        content_type: cdktf.stringToTerraform(struct.contentType),
        group_number: cdktf.numberToTerraform(struct.groupNumber)
    };
}
function lexIntentConclusionStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        response_card: cdktf.stringToTerraform(struct.responseCard),
        message: cdktf.listMapper(lexIntentConclusionStatementMessageToTerraform)(struct.message)
    };
}
function lexIntentConfirmationPromptMessageToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        content: cdktf.stringToTerraform(struct.content),
        content_type: cdktf.stringToTerraform(struct.contentType),
        group_number: cdktf.numberToTerraform(struct.groupNumber)
    };
}
function lexIntentConfirmationPromptToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        max_attempts: cdktf.numberToTerraform(struct.maxAttempts),
        response_card: cdktf.stringToTerraform(struct.responseCard),
        message: cdktf.listMapper(lexIntentConfirmationPromptMessageToTerraform)(struct.message)
    };
}
function lexIntentDialogCodeHookToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        message_version: cdktf.stringToTerraform(struct.messageVersion),
        uri: cdktf.stringToTerraform(struct.uri)
    };
}
function lexIntentFollowUpPromptPromptMessageToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        content: cdktf.stringToTerraform(struct.content),
        content_type: cdktf.stringToTerraform(struct.contentType),
        group_number: cdktf.numberToTerraform(struct.groupNumber)
    };
}
function lexIntentFollowUpPromptPromptToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        max_attempts: cdktf.numberToTerraform(struct.maxAttempts),
        response_card: cdktf.stringToTerraform(struct.responseCard),
        message: cdktf.listMapper(lexIntentFollowUpPromptPromptMessageToTerraform)(struct.message)
    };
}
function lexIntentFollowUpPromptRejectionStatementMessageToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        content: cdktf.stringToTerraform(struct.content),
        content_type: cdktf.stringToTerraform(struct.contentType),
        group_number: cdktf.numberToTerraform(struct.groupNumber)
    };
}
function lexIntentFollowUpPromptRejectionStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        response_card: cdktf.stringToTerraform(struct.responseCard),
        message: cdktf.listMapper(lexIntentFollowUpPromptRejectionStatementMessageToTerraform)(struct.message)
    };
}
function lexIntentFollowUpPromptToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        prompt: cdktf.listMapper(lexIntentFollowUpPromptPromptToTerraform)(struct.prompt),
        rejection_statement: cdktf.listMapper(lexIntentFollowUpPromptRejectionStatementToTerraform)(struct.rejectionStatement)
    };
}
function lexIntentFulfillmentActivityCodeHookToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        message_version: cdktf.stringToTerraform(struct.messageVersion),
        uri: cdktf.stringToTerraform(struct.uri)
    };
}
function lexIntentFulfillmentActivityToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
        code_hook: cdktf.listMapper(lexIntentFulfillmentActivityCodeHookToTerraform)(struct.codeHook)
    };
}
function lexIntentRejectionStatementMessageToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        content: cdktf.stringToTerraform(struct.content),
        content_type: cdktf.stringToTerraform(struct.contentType),
        group_number: cdktf.numberToTerraform(struct.groupNumber)
    };
}
function lexIntentRejectionStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        response_card: cdktf.stringToTerraform(struct.responseCard),
        message: cdktf.listMapper(lexIntentRejectionStatementMessageToTerraform)(struct.message)
    };
}
function lexIntentSlotValueElicitationPromptMessageToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        content: cdktf.stringToTerraform(struct.content),
        content_type: cdktf.stringToTerraform(struct.contentType),
        group_number: cdktf.numberToTerraform(struct.groupNumber)
    };
}
function lexIntentSlotValueElicitationPromptToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        max_attempts: cdktf.numberToTerraform(struct.maxAttempts),
        response_card: cdktf.stringToTerraform(struct.responseCard),
        message: cdktf.listMapper(lexIntentSlotValueElicitationPromptMessageToTerraform)(struct.message)
    };
}
function lexIntentSlotToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        description: cdktf.stringToTerraform(struct.description),
        name: cdktf.stringToTerraform(struct.name),
        priority: cdktf.numberToTerraform(struct.priority),
        response_card: cdktf.stringToTerraform(struct.responseCard),
        sample_utterances: cdktf.listMapper(cdktf.stringToTerraform)(struct.sampleUtterances),
        slot_constraint: cdktf.stringToTerraform(struct.slotConstraint),
        slot_type: cdktf.stringToTerraform(struct.slotType),
        slot_type_version: cdktf.stringToTerraform(struct.slotTypeVersion),
        value_elicitation_prompt: cdktf.listMapper(lexIntentSlotValueElicitationPromptToTerraform)(struct.valueElicitationPrompt)
    };
}
function lexIntentTimeoutsToTerraform(struct) {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html aws_lex_intent}
*/
var LexIntent = /** @class */ (function (_super) {
    __extends(LexIntent, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html aws_lex_intent} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LexIntentConfig
    */
    function LexIntent(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_lex_intent',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._createVersion = config.createVersion;
        _this._description = config.description;
        _this._name = config.name;
        _this._parentIntentSignature = config.parentIntentSignature;
        _this._sampleUtterances = config.sampleUtterances;
        _this._conclusionStatement = config.conclusionStatement;
        _this._confirmationPrompt = config.confirmationPrompt;
        _this._dialogCodeHook = config.dialogCodeHook;
        _this._followUpPrompt = config.followUpPrompt;
        _this._fulfillmentActivity = config.fulfillmentActivity;
        _this._rejectionStatement = config.rejectionStatement;
        _this._slot = config.slot;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(LexIntent.prototype, "arn", {
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
    Object.defineProperty(LexIntent.prototype, "checksum", {
        // checksum - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('checksum');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexIntent.prototype, "createVersion", {
        get: function () {
            return this.getBooleanAttribute('create_version');
        },
        set: function (value) {
            this._createVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    LexIntent.prototype.resetCreateVersion = function () {
        this._createVersion = undefined;
    };
    Object.defineProperty(LexIntent.prototype, "createVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._createVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexIntent.prototype, "createdDate", {
        // created_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexIntent.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    LexIntent.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(LexIntent.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexIntent.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexIntent.prototype, "lastUpdatedDate", {
        // last_updated_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_updated_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexIntent.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexIntent.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexIntent.prototype, "parentIntentSignature", {
        get: function () {
            return this.getStringAttribute('parent_intent_signature');
        },
        set: function (value) {
            this._parentIntentSignature = value;
        },
        enumerable: false,
        configurable: true
    });
    LexIntent.prototype.resetParentIntentSignature = function () {
        this._parentIntentSignature = undefined;
    };
    Object.defineProperty(LexIntent.prototype, "parentIntentSignatureInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._parentIntentSignature;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexIntent.prototype, "sampleUtterances", {
        get: function () {
            return this.getListAttribute('sample_utterances');
        },
        set: function (value) {
            this._sampleUtterances = value;
        },
        enumerable: false,
        configurable: true
    });
    LexIntent.prototype.resetSampleUtterances = function () {
        this._sampleUtterances = undefined;
    };
    Object.defineProperty(LexIntent.prototype, "sampleUtterancesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sampleUtterances;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexIntent.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexIntent.prototype, "conclusionStatement", {
        get: function () {
            return this.interpolationForAttribute('conclusion_statement');
        },
        set: function (value) {
            this._conclusionStatement = value;
        },
        enumerable: false,
        configurable: true
    });
    LexIntent.prototype.resetConclusionStatement = function () {
        this._conclusionStatement = undefined;
    };
    Object.defineProperty(LexIntent.prototype, "conclusionStatementInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._conclusionStatement;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexIntent.prototype, "confirmationPrompt", {
        get: function () {
            return this.interpolationForAttribute('confirmation_prompt');
        },
        set: function (value) {
            this._confirmationPrompt = value;
        },
        enumerable: false,
        configurable: true
    });
    LexIntent.prototype.resetConfirmationPrompt = function () {
        this._confirmationPrompt = undefined;
    };
    Object.defineProperty(LexIntent.prototype, "confirmationPromptInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._confirmationPrompt;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexIntent.prototype, "dialogCodeHook", {
        get: function () {
            return this.interpolationForAttribute('dialog_code_hook');
        },
        set: function (value) {
            this._dialogCodeHook = value;
        },
        enumerable: false,
        configurable: true
    });
    LexIntent.prototype.resetDialogCodeHook = function () {
        this._dialogCodeHook = undefined;
    };
    Object.defineProperty(LexIntent.prototype, "dialogCodeHookInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dialogCodeHook;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexIntent.prototype, "followUpPrompt", {
        get: function () {
            return this.interpolationForAttribute('follow_up_prompt');
        },
        set: function (value) {
            this._followUpPrompt = value;
        },
        enumerable: false,
        configurable: true
    });
    LexIntent.prototype.resetFollowUpPrompt = function () {
        this._followUpPrompt = undefined;
    };
    Object.defineProperty(LexIntent.prototype, "followUpPromptInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._followUpPrompt;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexIntent.prototype, "fulfillmentActivity", {
        get: function () {
            return this.interpolationForAttribute('fulfillment_activity');
        },
        set: function (value) {
            this._fulfillmentActivity = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexIntent.prototype, "fulfillmentActivityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fulfillmentActivity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexIntent.prototype, "rejectionStatement", {
        get: function () {
            return this.interpolationForAttribute('rejection_statement');
        },
        set: function (value) {
            this._rejectionStatement = value;
        },
        enumerable: false,
        configurable: true
    });
    LexIntent.prototype.resetRejectionStatement = function () {
        this._rejectionStatement = undefined;
    };
    Object.defineProperty(LexIntent.prototype, "rejectionStatementInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rejectionStatement;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexIntent.prototype, "slot", {
        get: function () {
            return this.interpolationForAttribute('slot');
        },
        set: function (value) {
            this._slot = value;
        },
        enumerable: false,
        configurable: true
    });
    LexIntent.prototype.resetSlot = function () {
        this._slot = undefined;
    };
    Object.defineProperty(LexIntent.prototype, "slotInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._slot;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LexIntent.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    LexIntent.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(LexIntent.prototype, "timeoutsInput", {
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
    LexIntent.prototype.synthesizeAttributes = function () {
        return {
            create_version: cdktf.booleanToTerraform(this._createVersion),
            description: cdktf.stringToTerraform(this._description),
            name: cdktf.stringToTerraform(this._name),
            parent_intent_signature: cdktf.stringToTerraform(this._parentIntentSignature),
            sample_utterances: cdktf.listMapper(cdktf.stringToTerraform)(this._sampleUtterances),
            conclusion_statement: cdktf.listMapper(lexIntentConclusionStatementToTerraform)(this._conclusionStatement),
            confirmation_prompt: cdktf.listMapper(lexIntentConfirmationPromptToTerraform)(this._confirmationPrompt),
            dialog_code_hook: cdktf.listMapper(lexIntentDialogCodeHookToTerraform)(this._dialogCodeHook),
            follow_up_prompt: cdktf.listMapper(lexIntentFollowUpPromptToTerraform)(this._followUpPrompt),
            fulfillment_activity: cdktf.listMapper(lexIntentFulfillmentActivityToTerraform)(this._fulfillmentActivity),
            rejection_statement: cdktf.listMapper(lexIntentRejectionStatementToTerraform)(this._rejectionStatement),
            slot: cdktf.listMapper(lexIntentSlotToTerraform)(this._slot),
            timeouts: lexIntentTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    LexIntent.tfResourceType = "aws_lex_intent";
    return LexIntent;
}(cdktf.TerraformResource));
exports.LexIntent = LexIntent;
