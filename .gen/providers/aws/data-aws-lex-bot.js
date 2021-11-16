"use strict";
// https://www.terraform.io/docs/providers/aws/d/lex_bot.html
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
exports.DataAwsLexBot = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/lex_bot.html aws_lex_bot}
*/
var DataAwsLexBot = /** @class */ (function (_super) {
    __extends(DataAwsLexBot, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lex_bot.html aws_lex_bot} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLexBotConfig
    */
    function DataAwsLexBot(scope, id, config) {
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
        _this._name = config.name;
        _this._version = config.version;
        return _this;
    }
    Object.defineProperty(DataAwsLexBot.prototype, "arn", {
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
    Object.defineProperty(DataAwsLexBot.prototype, "checksum", {
        // checksum - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('checksum');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLexBot.prototype, "childDirected", {
        // child_directed - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('child_directed');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLexBot.prototype, "createdDate", {
        // created_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLexBot.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLexBot.prototype, "detectSentiment", {
        // detect_sentiment - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('detect_sentiment');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLexBot.prototype, "enableModelImprovements", {
        // enable_model_improvements - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enable_model_improvements');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLexBot.prototype, "failureReason", {
        // failure_reason - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('failure_reason');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLexBot.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLexBot.prototype, "idleSessionTtlInSeconds", {
        // idle_session_ttl_in_seconds - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('idle_session_ttl_in_seconds');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLexBot.prototype, "lastUpdatedDate", {
        // last_updated_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_updated_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLexBot.prototype, "locale", {
        // locale - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('locale');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLexBot.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLexBot.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLexBot.prototype, "nluIntentConfidenceThreshold", {
        // nlu_intent_confidence_threshold - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('nlu_intent_confidence_threshold');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLexBot.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLexBot.prototype, "version", {
        get: function () {
            return this.getStringAttribute('version');
        },
        set: function (value) {
            this._version = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsLexBot.prototype.resetVersion = function () {
        this._version = undefined;
    };
    Object.defineProperty(DataAwsLexBot.prototype, "versionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._version;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLexBot.prototype, "voiceId", {
        // voice_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('voice_id');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsLexBot.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            version: cdktf.stringToTerraform(this._version)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsLexBot.tfResourceType = "aws_lex_bot";
    return DataAwsLexBot;
}(cdktf.TerraformDataSource));
exports.DataAwsLexBot = DataAwsLexBot;
