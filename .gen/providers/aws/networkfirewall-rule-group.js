"use strict";
// https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html
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
exports.NetworkfirewallRuleGroup = void 0;
var cdktf = require("cdktf");
function networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        definition: cdktf.listMapper(cdktf.stringToTerraform)(struct.definition)
    };
}
function networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        ip_set: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetToTerraform)(struct.ipSet)
    };
}
function networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        definition: cdktf.listMapper(cdktf.stringToTerraform)(struct.definition)
    };
}
function networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        port_set: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetToTerraform)(struct.portSet)
    };
}
function networkfirewallRuleGroupRuleGroupRuleVariablesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        ip_sets: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsToTerraform)(struct.ipSets),
        port_sets: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsToTerraform)(struct.portSets)
    };
}
function networkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        generated_rules_type: cdktf.stringToTerraform(struct.generatedRulesType),
        target_types: cdktf.listMapper(cdktf.stringToTerraform)(struct.targetTypes),
        targets: cdktf.listMapper(cdktf.stringToTerraform)(struct.targets)
    };
}
function networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        destination: cdktf.stringToTerraform(struct.destination),
        destination_port: cdktf.stringToTerraform(struct.destinationPort),
        direction: cdktf.stringToTerraform(struct.direction),
        protocol: cdktf.stringToTerraform(struct.protocol),
        source: cdktf.stringToTerraform(struct.source),
        source_port: cdktf.stringToTerraform(struct.sourcePort)
    };
}
function networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOptionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        keyword: cdktf.stringToTerraform(struct.keyword),
        settings: cdktf.listMapper(cdktf.stringToTerraform)(struct.settings)
    };
}
function networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        action: cdktf.stringToTerraform(struct.action),
        header: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderToTerraform)(struct.header),
        rule_option: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOptionToTerraform)(struct.ruleOption)
    };
}
function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimensionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        value: cdktf.stringToTerraform(struct.value)
    };
}
function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        dimension: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimensionToTerraform)(struct.dimension)
    };
}
function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        publish_metric_action: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionToTerraform)(struct.publishMetricAction)
    };
}
function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        action_name: cdktf.stringToTerraform(struct.actionName),
        action_definition: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionToTerraform)(struct.actionDefinition)
    };
}
function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        address_definition: cdktf.stringToTerraform(struct.addressDefinition)
    };
}
function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPortToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        from_port: cdktf.numberToTerraform(struct.fromPort),
        to_port: cdktf.numberToTerraform(struct.toPort)
    };
}
function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        address_definition: cdktf.stringToTerraform(struct.addressDefinition)
    };
}
function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePortToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        from_port: cdktf.numberToTerraform(struct.fromPort),
        to_port: cdktf.numberToTerraform(struct.toPort)
    };
}
function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlagToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        flags: cdktf.listMapper(cdktf.stringToTerraform)(struct.flags),
        masks: cdktf.listMapper(cdktf.stringToTerraform)(struct.masks)
    };
}
function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        protocols: cdktf.listMapper(cdktf.numberToTerraform)(struct.protocols),
        destination: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationToTerraform)(struct.destination),
        destination_port: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPortToTerraform)(struct.destinationPort),
        source: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourceToTerraform)(struct.source),
        source_port: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePortToTerraform)(struct.sourcePort),
        tcp_flag: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlagToTerraform)(struct.tcpFlag)
    };
}
function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        actions: cdktf.listMapper(cdktf.stringToTerraform)(struct.actions),
        match_attributes: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesToTerraform)(struct.matchAttributes)
    };
}
function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        rule_definition: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionToTerraform)(struct.ruleDefinition)
    };
}
function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        custom_action: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionToTerraform)(struct.customAction),
        stateless_rule: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleToTerraform)(struct.statelessRule)
    };
}
function networkfirewallRuleGroupRuleGroupRulesSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        rules_string: cdktf.stringToTerraform(struct.rulesString),
        rules_source_list: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListToTerraform)(struct.rulesSourceList),
        stateful_rule: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleToTerraform)(struct.statefulRule),
        stateless_rules_and_custom_actions: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsToTerraform)(struct.statelessRulesAndCustomActions)
    };
}
function networkfirewallRuleGroupRuleGroupToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        rule_variables: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRuleVariablesToTerraform)(struct.ruleVariables),
        rules_source: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceToTerraform)(struct.rulesSource)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html aws_networkfirewall_rule_group}
*/
var NetworkfirewallRuleGroup = /** @class */ (function (_super) {
    __extends(NetworkfirewallRuleGroup, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html aws_networkfirewall_rule_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkfirewallRuleGroupConfig
    */
    function NetworkfirewallRuleGroup(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_networkfirewall_rule_group',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._capacity = config.capacity;
        _this._description = config.description;
        _this._name = config.name;
        _this._rules = config.rules;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._type = config.type;
        _this._ruleGroup = config.ruleGroup;
        return _this;
    }
    Object.defineProperty(NetworkfirewallRuleGroup.prototype, "arn", {
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
    Object.defineProperty(NetworkfirewallRuleGroup.prototype, "capacity", {
        get: function () {
            return this.getNumberAttribute('capacity');
        },
        set: function (value) {
            this._capacity = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkfirewallRuleGroup.prototype, "capacityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._capacity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkfirewallRuleGroup.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    NetworkfirewallRuleGroup.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(NetworkfirewallRuleGroup.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkfirewallRuleGroup.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkfirewallRuleGroup.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkfirewallRuleGroup.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkfirewallRuleGroup.prototype, "rules", {
        get: function () {
            return this.getStringAttribute('rules');
        },
        set: function (value) {
            this._rules = value;
        },
        enumerable: false,
        configurable: true
    });
    NetworkfirewallRuleGroup.prototype.resetRules = function () {
        this._rules = undefined;
    };
    Object.defineProperty(NetworkfirewallRuleGroup.prototype, "rulesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rules;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkfirewallRuleGroup.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    NetworkfirewallRuleGroup.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(NetworkfirewallRuleGroup.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkfirewallRuleGroup.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    NetworkfirewallRuleGroup.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(NetworkfirewallRuleGroup.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkfirewallRuleGroup.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkfirewallRuleGroup.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkfirewallRuleGroup.prototype, "updateToken", {
        // update_token - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('update_token');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkfirewallRuleGroup.prototype, "ruleGroup", {
        get: function () {
            return this.interpolationForAttribute('rule_group');
        },
        set: function (value) {
            this._ruleGroup = value;
        },
        enumerable: false,
        configurable: true
    });
    NetworkfirewallRuleGroup.prototype.resetRuleGroup = function () {
        this._ruleGroup = undefined;
    };
    Object.defineProperty(NetworkfirewallRuleGroup.prototype, "ruleGroupInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ruleGroup;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    NetworkfirewallRuleGroup.prototype.synthesizeAttributes = function () {
        return {
            capacity: cdktf.numberToTerraform(this._capacity),
            description: cdktf.stringToTerraform(this._description),
            name: cdktf.stringToTerraform(this._name),
            rules: cdktf.stringToTerraform(this._rules),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            type: cdktf.stringToTerraform(this._type),
            rule_group: cdktf.listMapper(networkfirewallRuleGroupRuleGroupToTerraform)(this._ruleGroup)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    NetworkfirewallRuleGroup.tfResourceType = "aws_networkfirewall_rule_group";
    return NetworkfirewallRuleGroup;
}(cdktf.TerraformResource));
exports.NetworkfirewallRuleGroup = NetworkfirewallRuleGroup;
