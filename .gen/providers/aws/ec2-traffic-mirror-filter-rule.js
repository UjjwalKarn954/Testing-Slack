"use strict";
// https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html
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
exports.Ec2TrafficMirrorFilterRule = void 0;
var cdktf = require("cdktf");
function ec2TrafficMirrorFilterRuleDestinationPortRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        from_port: cdktf.numberToTerraform(struct.fromPort),
        to_port: cdktf.numberToTerraform(struct.toPort)
    };
}
function ec2TrafficMirrorFilterRuleSourcePortRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        from_port: cdktf.numberToTerraform(struct.fromPort),
        to_port: cdktf.numberToTerraform(struct.toPort)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html aws_ec2_traffic_mirror_filter_rule}
*/
var Ec2TrafficMirrorFilterRule = /** @class */ (function (_super) {
    __extends(Ec2TrafficMirrorFilterRule, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter_rule.html aws_ec2_traffic_mirror_filter_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TrafficMirrorFilterRuleConfig
    */
    function Ec2TrafficMirrorFilterRule(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ec2_traffic_mirror_filter_rule',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._description = config.description;
        _this._destinationCidrBlock = config.destinationCidrBlock;
        _this._protocol = config.protocol;
        _this._ruleAction = config.ruleAction;
        _this._ruleNumber = config.ruleNumber;
        _this._sourceCidrBlock = config.sourceCidrBlock;
        _this._trafficDirection = config.trafficDirection;
        _this._trafficMirrorFilterId = config.trafficMirrorFilterId;
        _this._destinationPortRange = config.destinationPortRange;
        _this._sourcePortRange = config.sourcePortRange;
        return _this;
    }
    Object.defineProperty(Ec2TrafficMirrorFilterRule.prototype, "arn", {
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
    Object.defineProperty(Ec2TrafficMirrorFilterRule.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2TrafficMirrorFilterRule.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(Ec2TrafficMirrorFilterRule.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TrafficMirrorFilterRule.prototype, "destinationCidrBlock", {
        get: function () {
            return this.getStringAttribute('destination_cidr_block');
        },
        set: function (value) {
            this._destinationCidrBlock = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TrafficMirrorFilterRule.prototype, "destinationCidrBlockInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._destinationCidrBlock;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TrafficMirrorFilterRule.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TrafficMirrorFilterRule.prototype, "protocol", {
        get: function () {
            return this.getNumberAttribute('protocol');
        },
        set: function (value) {
            this._protocol = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2TrafficMirrorFilterRule.prototype.resetProtocol = function () {
        this._protocol = undefined;
    };
    Object.defineProperty(Ec2TrafficMirrorFilterRule.prototype, "protocolInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._protocol;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TrafficMirrorFilterRule.prototype, "ruleAction", {
        get: function () {
            return this.getStringAttribute('rule_action');
        },
        set: function (value) {
            this._ruleAction = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TrafficMirrorFilterRule.prototype, "ruleActionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ruleAction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TrafficMirrorFilterRule.prototype, "ruleNumber", {
        get: function () {
            return this.getNumberAttribute('rule_number');
        },
        set: function (value) {
            this._ruleNumber = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TrafficMirrorFilterRule.prototype, "ruleNumberInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ruleNumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TrafficMirrorFilterRule.prototype, "sourceCidrBlock", {
        get: function () {
            return this.getStringAttribute('source_cidr_block');
        },
        set: function (value) {
            this._sourceCidrBlock = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TrafficMirrorFilterRule.prototype, "sourceCidrBlockInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sourceCidrBlock;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TrafficMirrorFilterRule.prototype, "trafficDirection", {
        get: function () {
            return this.getStringAttribute('traffic_direction');
        },
        set: function (value) {
            this._trafficDirection = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TrafficMirrorFilterRule.prototype, "trafficDirectionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._trafficDirection;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TrafficMirrorFilterRule.prototype, "trafficMirrorFilterId", {
        get: function () {
            return this.getStringAttribute('traffic_mirror_filter_id');
        },
        set: function (value) {
            this._trafficMirrorFilterId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TrafficMirrorFilterRule.prototype, "trafficMirrorFilterIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._trafficMirrorFilterId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TrafficMirrorFilterRule.prototype, "destinationPortRange", {
        get: function () {
            return this.interpolationForAttribute('destination_port_range');
        },
        set: function (value) {
            this._destinationPortRange = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2TrafficMirrorFilterRule.prototype.resetDestinationPortRange = function () {
        this._destinationPortRange = undefined;
    };
    Object.defineProperty(Ec2TrafficMirrorFilterRule.prototype, "destinationPortRangeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._destinationPortRange;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2TrafficMirrorFilterRule.prototype, "sourcePortRange", {
        get: function () {
            return this.interpolationForAttribute('source_port_range');
        },
        set: function (value) {
            this._sourcePortRange = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2TrafficMirrorFilterRule.prototype.resetSourcePortRange = function () {
        this._sourcePortRange = undefined;
    };
    Object.defineProperty(Ec2TrafficMirrorFilterRule.prototype, "sourcePortRangeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sourcePortRange;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Ec2TrafficMirrorFilterRule.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            destination_cidr_block: cdktf.stringToTerraform(this._destinationCidrBlock),
            protocol: cdktf.numberToTerraform(this._protocol),
            rule_action: cdktf.stringToTerraform(this._ruleAction),
            rule_number: cdktf.numberToTerraform(this._ruleNumber),
            source_cidr_block: cdktf.stringToTerraform(this._sourceCidrBlock),
            traffic_direction: cdktf.stringToTerraform(this._trafficDirection),
            traffic_mirror_filter_id: cdktf.stringToTerraform(this._trafficMirrorFilterId),
            destination_port_range: cdktf.listMapper(ec2TrafficMirrorFilterRuleDestinationPortRangeToTerraform)(this._destinationPortRange),
            source_port_range: cdktf.listMapper(ec2TrafficMirrorFilterRuleSourcePortRangeToTerraform)(this._sourcePortRange)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Ec2TrafficMirrorFilterRule.tfResourceType = "aws_ec2_traffic_mirror_filter_rule";
    return Ec2TrafficMirrorFilterRule;
}(cdktf.TerraformResource));
exports.Ec2TrafficMirrorFilterRule = Ec2TrafficMirrorFilterRule;
