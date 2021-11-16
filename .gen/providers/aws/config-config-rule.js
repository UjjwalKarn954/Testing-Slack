"use strict";
// https://www.terraform.io/docs/providers/aws/r/config_config_rule.html
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
exports.ConfigConfigRule = void 0;
var cdktf = require("cdktf");
function configConfigRuleScopeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        compliance_resource_id: cdktf.stringToTerraform(struct.complianceResourceId),
        compliance_resource_types: cdktf.listMapper(cdktf.stringToTerraform)(struct.complianceResourceTypes),
        tag_key: cdktf.stringToTerraform(struct.tagKey),
        tag_value: cdktf.stringToTerraform(struct.tagValue)
    };
}
function configConfigRuleSourceSourceDetailToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        event_source: cdktf.stringToTerraform(struct.eventSource),
        maximum_execution_frequency: cdktf.stringToTerraform(struct.maximumExecutionFrequency),
        message_type: cdktf.stringToTerraform(struct.messageType)
    };
}
function configConfigRuleSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        owner: cdktf.stringToTerraform(struct.owner),
        source_identifier: cdktf.stringToTerraform(struct.sourceIdentifier),
        source_detail: cdktf.listMapper(configConfigRuleSourceSourceDetailToTerraform)(struct.sourceDetail)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html aws_config_config_rule}
*/
var ConfigConfigRule = /** @class */ (function (_super) {
    __extends(ConfigConfigRule, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html aws_config_config_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigConfigRuleConfig
    */
    function ConfigConfigRule(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_config_config_rule',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._description = config.description;
        _this._inputParameters = config.inputParameters;
        _this._maximumExecutionFrequency = config.maximumExecutionFrequency;
        _this._name = config.name;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._scope = config.scope;
        _this._source = config.source;
        return _this;
    }
    Object.defineProperty(ConfigConfigRule.prototype, "arn", {
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
    Object.defineProperty(ConfigConfigRule.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ConfigConfigRule.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(ConfigConfigRule.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigConfigRule.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigConfigRule.prototype, "inputParameters", {
        get: function () {
            return this.getStringAttribute('input_parameters');
        },
        set: function (value) {
            this._inputParameters = value;
        },
        enumerable: false,
        configurable: true
    });
    ConfigConfigRule.prototype.resetInputParameters = function () {
        this._inputParameters = undefined;
    };
    Object.defineProperty(ConfigConfigRule.prototype, "inputParametersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._inputParameters;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigConfigRule.prototype, "maximumExecutionFrequency", {
        get: function () {
            return this.getStringAttribute('maximum_execution_frequency');
        },
        set: function (value) {
            this._maximumExecutionFrequency = value;
        },
        enumerable: false,
        configurable: true
    });
    ConfigConfigRule.prototype.resetMaximumExecutionFrequency = function () {
        this._maximumExecutionFrequency = undefined;
    };
    Object.defineProperty(ConfigConfigRule.prototype, "maximumExecutionFrequencyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maximumExecutionFrequency;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigConfigRule.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigConfigRule.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigConfigRule.prototype, "ruleId", {
        // rule_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('rule_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigConfigRule.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    ConfigConfigRule.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(ConfigConfigRule.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigConfigRule.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    ConfigConfigRule.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(ConfigConfigRule.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigConfigRule.prototype, "scope", {
        get: function () {
            return this.interpolationForAttribute('scope');
        },
        set: function (value) {
            this._scope = value;
        },
        enumerable: false,
        configurable: true
    });
    ConfigConfigRule.prototype.resetScope = function () {
        this._scope = undefined;
    };
    Object.defineProperty(ConfigConfigRule.prototype, "scopeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scope;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigConfigRule.prototype, "source", {
        get: function () {
            return this.interpolationForAttribute('source');
        },
        set: function (value) {
            this._source = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigConfigRule.prototype, "sourceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._source;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ConfigConfigRule.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            input_parameters: cdktf.stringToTerraform(this._inputParameters),
            maximum_execution_frequency: cdktf.stringToTerraform(this._maximumExecutionFrequency),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            scope: cdktf.listMapper(configConfigRuleScopeToTerraform)(this._scope),
            source: cdktf.listMapper(configConfigRuleSourceToTerraform)(this._source)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ConfigConfigRule.tfResourceType = "aws_config_config_rule";
    return ConfigConfigRule;
}(cdktf.TerraformResource));
exports.ConfigConfigRule = ConfigConfigRule;
