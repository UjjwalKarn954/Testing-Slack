"use strict";
// https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule.html
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
exports.Route53RecoverycontrolconfigSafetyRule = void 0;
var cdktf = require("cdktf");
function route53RecoverycontrolconfigSafetyRuleRuleConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        inverted: cdktf.booleanToTerraform(struct.inverted),
        threshold: cdktf.numberToTerraform(struct.threshold),
        type: cdktf.stringToTerraform(struct.type)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule.html aws_route53recoverycontrolconfig_safety_rule}
*/
var Route53RecoverycontrolconfigSafetyRule = /** @class */ (function (_super) {
    __extends(Route53RecoverycontrolconfigSafetyRule, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule.html aws_route53recoverycontrolconfig_safety_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53RecoverycontrolconfigSafetyRuleConfig
    */
    function Route53RecoverycontrolconfigSafetyRule(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_route53recoverycontrolconfig_safety_rule',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._assertedControls = config.assertedControls;
        _this._controlPanelArn = config.controlPanelArn;
        _this._gatingControls = config.gatingControls;
        _this._name = config.name;
        _this._targetControls = config.targetControls;
        _this._waitPeriodMs = config.waitPeriodMs;
        _this._ruleConfig = config.ruleConfig;
        return _this;
    }
    Object.defineProperty(Route53RecoverycontrolconfigSafetyRule.prototype, "arn", {
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
    Object.defineProperty(Route53RecoverycontrolconfigSafetyRule.prototype, "assertedControls", {
        get: function () {
            return this.getListAttribute('asserted_controls');
        },
        set: function (value) {
            this._assertedControls = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53RecoverycontrolconfigSafetyRule.prototype.resetAssertedControls = function () {
        this._assertedControls = undefined;
    };
    Object.defineProperty(Route53RecoverycontrolconfigSafetyRule.prototype, "assertedControlsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._assertedControls;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoverycontrolconfigSafetyRule.prototype, "controlPanelArn", {
        get: function () {
            return this.getStringAttribute('control_panel_arn');
        },
        set: function (value) {
            this._controlPanelArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoverycontrolconfigSafetyRule.prototype, "controlPanelArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._controlPanelArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoverycontrolconfigSafetyRule.prototype, "gatingControls", {
        get: function () {
            return this.getListAttribute('gating_controls');
        },
        set: function (value) {
            this._gatingControls = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53RecoverycontrolconfigSafetyRule.prototype.resetGatingControls = function () {
        this._gatingControls = undefined;
    };
    Object.defineProperty(Route53RecoverycontrolconfigSafetyRule.prototype, "gatingControlsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._gatingControls;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoverycontrolconfigSafetyRule.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoverycontrolconfigSafetyRule.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoverycontrolconfigSafetyRule.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoverycontrolconfigSafetyRule.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoverycontrolconfigSafetyRule.prototype, "targetControls", {
        get: function () {
            return this.getListAttribute('target_controls');
        },
        set: function (value) {
            this._targetControls = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53RecoverycontrolconfigSafetyRule.prototype.resetTargetControls = function () {
        this._targetControls = undefined;
    };
    Object.defineProperty(Route53RecoverycontrolconfigSafetyRule.prototype, "targetControlsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetControls;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoverycontrolconfigSafetyRule.prototype, "waitPeriodMs", {
        get: function () {
            return this.getNumberAttribute('wait_period_ms');
        },
        set: function (value) {
            this._waitPeriodMs = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoverycontrolconfigSafetyRule.prototype, "waitPeriodMsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._waitPeriodMs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoverycontrolconfigSafetyRule.prototype, "ruleConfig", {
        get: function () {
            return this.interpolationForAttribute('rule_config');
        },
        set: function (value) {
            this._ruleConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53RecoverycontrolconfigSafetyRule.prototype, "ruleConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ruleConfig;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Route53RecoverycontrolconfigSafetyRule.prototype.synthesizeAttributes = function () {
        return {
            asserted_controls: cdktf.listMapper(cdktf.stringToTerraform)(this._assertedControls),
            control_panel_arn: cdktf.stringToTerraform(this._controlPanelArn),
            gating_controls: cdktf.listMapper(cdktf.stringToTerraform)(this._gatingControls),
            name: cdktf.stringToTerraform(this._name),
            target_controls: cdktf.listMapper(cdktf.stringToTerraform)(this._targetControls),
            wait_period_ms: cdktf.numberToTerraform(this._waitPeriodMs),
            rule_config: cdktf.listMapper(route53RecoverycontrolconfigSafetyRuleRuleConfigToTerraform)(this._ruleConfig)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Route53RecoverycontrolconfigSafetyRule.tfResourceType = "aws_route53recoverycontrolconfig_safety_rule";
    return Route53RecoverycontrolconfigSafetyRule;
}(cdktf.TerraformResource));
exports.Route53RecoverycontrolconfigSafetyRule = Route53RecoverycontrolconfigSafetyRule;
