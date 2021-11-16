"use strict";
// https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook.html
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
exports.CodepipelineWebhook = void 0;
var cdktf = require("cdktf");
function codepipelineWebhookAuthenticationConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        allowed_ip_range: cdktf.stringToTerraform(struct.allowedIpRange),
        secret_token: cdktf.stringToTerraform(struct.secretToken)
    };
}
function codepipelineWebhookFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        json_path: cdktf.stringToTerraform(struct.jsonPath),
        match_equals: cdktf.stringToTerraform(struct.matchEquals)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook.html aws_codepipeline_webhook}
*/
var CodepipelineWebhook = /** @class */ (function (_super) {
    __extends(CodepipelineWebhook, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook.html aws_codepipeline_webhook} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodepipelineWebhookConfig
    */
    function CodepipelineWebhook(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_codepipeline_webhook',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._authentication = config.authentication;
        _this._name = config.name;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._targetAction = config.targetAction;
        _this._targetPipeline = config.targetPipeline;
        _this._authenticationConfiguration = config.authenticationConfiguration;
        _this._filter = config.filter;
        return _this;
    }
    Object.defineProperty(CodepipelineWebhook.prototype, "authentication", {
        get: function () {
            return this.getStringAttribute('authentication');
        },
        set: function (value) {
            this._authentication = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodepipelineWebhook.prototype, "authenticationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authentication;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodepipelineWebhook.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodepipelineWebhook.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodepipelineWebhook.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodepipelineWebhook.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    CodepipelineWebhook.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(CodepipelineWebhook.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodepipelineWebhook.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    CodepipelineWebhook.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(CodepipelineWebhook.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodepipelineWebhook.prototype, "targetAction", {
        get: function () {
            return this.getStringAttribute('target_action');
        },
        set: function (value) {
            this._targetAction = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodepipelineWebhook.prototype, "targetActionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetAction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodepipelineWebhook.prototype, "targetPipeline", {
        get: function () {
            return this.getStringAttribute('target_pipeline');
        },
        set: function (value) {
            this._targetPipeline = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodepipelineWebhook.prototype, "targetPipelineInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetPipeline;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodepipelineWebhook.prototype, "url", {
        // url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodepipelineWebhook.prototype, "authenticationConfiguration", {
        get: function () {
            return this.interpolationForAttribute('authentication_configuration');
        },
        set: function (value) {
            this._authenticationConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    CodepipelineWebhook.prototype.resetAuthenticationConfiguration = function () {
        this._authenticationConfiguration = undefined;
    };
    Object.defineProperty(CodepipelineWebhook.prototype, "authenticationConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authenticationConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodepipelineWebhook.prototype, "filter", {
        get: function () {
            return this.interpolationForAttribute('filter');
        },
        set: function (value) {
            this._filter = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodepipelineWebhook.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CodepipelineWebhook.prototype.synthesizeAttributes = function () {
        return {
            authentication: cdktf.stringToTerraform(this._authentication),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            target_action: cdktf.stringToTerraform(this._targetAction),
            target_pipeline: cdktf.stringToTerraform(this._targetPipeline),
            authentication_configuration: cdktf.listMapper(codepipelineWebhookAuthenticationConfigurationToTerraform)(this._authenticationConfiguration),
            filter: cdktf.listMapper(codepipelineWebhookFilterToTerraform)(this._filter)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CodepipelineWebhook.tfResourceType = "aws_codepipeline_webhook";
    return CodepipelineWebhook;
}(cdktf.TerraformResource));
exports.CodepipelineWebhook = CodepipelineWebhook;
