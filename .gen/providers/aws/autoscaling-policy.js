"use strict";
// https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html
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
exports.AutoscalingPolicy = void 0;
var cdktf = require("cdktf");
function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        predefined_metric_type: cdktf.stringToTerraform(struct.predefinedMetricType),
        resource_label: cdktf.stringToTerraform(struct.resourceLabel)
    };
}
function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        predefined_metric_type: cdktf.stringToTerraform(struct.predefinedMetricType),
        resource_label: cdktf.stringToTerraform(struct.resourceLabel)
    };
}
function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        predefined_metric_type: cdktf.stringToTerraform(struct.predefinedMetricType),
        resource_label: cdktf.stringToTerraform(struct.resourceLabel)
    };
}
function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        target_value: cdktf.numberToTerraform(struct.targetValue),
        predefined_load_metric_specification: cdktf.listMapper(autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationToTerraform)(struct.predefinedLoadMetricSpecification),
        predefined_metric_pair_specification: cdktf.listMapper(autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationToTerraform)(struct.predefinedMetricPairSpecification),
        predefined_scaling_metric_specification: cdktf.listMapper(autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationToTerraform)(struct.predefinedScalingMetricSpecification)
    };
}
function autoscalingPolicyPredictiveScalingConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        max_capacity_breach_behavior: cdktf.stringToTerraform(struct.maxCapacityBreachBehavior),
        max_capacity_buffer: cdktf.stringToTerraform(struct.maxCapacityBuffer),
        mode: cdktf.stringToTerraform(struct.mode),
        scheduling_buffer_time: cdktf.stringToTerraform(struct.schedulingBufferTime),
        metric_specification: cdktf.listMapper(autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationToTerraform)(struct.metricSpecification)
    };
}
function autoscalingPolicyStepAdjustmentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        metric_interval_lower_bound: cdktf.stringToTerraform(struct.metricIntervalLowerBound),
        metric_interval_upper_bound: cdktf.stringToTerraform(struct.metricIntervalUpperBound),
        scaling_adjustment: cdktf.numberToTerraform(struct.scalingAdjustment)
    };
}
function autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        metric_name: cdktf.stringToTerraform(struct.metricName),
        namespace: cdktf.stringToTerraform(struct.namespace),
        statistic: cdktf.stringToTerraform(struct.statistic),
        unit: cdktf.stringToTerraform(struct.unit),
        metric_dimension: cdktf.listMapper(autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionToTerraform)(struct.metricDimension)
    };
}
function autoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        predefined_metric_type: cdktf.stringToTerraform(struct.predefinedMetricType),
        resource_label: cdktf.stringToTerraform(struct.resourceLabel)
    };
}
function autoscalingPolicyTargetTrackingConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        disable_scale_in: cdktf.booleanToTerraform(struct.disableScaleIn),
        target_value: cdktf.numberToTerraform(struct.targetValue),
        customized_metric_specification: cdktf.listMapper(autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationToTerraform)(struct.customizedMetricSpecification),
        predefined_metric_specification: cdktf.listMapper(autoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationToTerraform)(struct.predefinedMetricSpecification)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html aws_autoscaling_policy}
*/
var AutoscalingPolicy = /** @class */ (function (_super) {
    __extends(AutoscalingPolicy, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html aws_autoscaling_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AutoscalingPolicyConfig
    */
    function AutoscalingPolicy(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_autoscaling_policy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._adjustmentType = config.adjustmentType;
        _this._autoscalingGroupName = config.autoscalingGroupName;
        _this._cooldown = config.cooldown;
        _this._estimatedInstanceWarmup = config.estimatedInstanceWarmup;
        _this._metricAggregationType = config.metricAggregationType;
        _this._minAdjustmentMagnitude = config.minAdjustmentMagnitude;
        _this._name = config.name;
        _this._policyType = config.policyType;
        _this._scalingAdjustment = config.scalingAdjustment;
        _this._predictiveScalingConfiguration = config.predictiveScalingConfiguration;
        _this._stepAdjustment = config.stepAdjustment;
        _this._targetTrackingConfiguration = config.targetTrackingConfiguration;
        return _this;
    }
    Object.defineProperty(AutoscalingPolicy.prototype, "adjustmentType", {
        get: function () {
            return this.getStringAttribute('adjustment_type');
        },
        set: function (value) {
            this._adjustmentType = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingPolicy.prototype.resetAdjustmentType = function () {
        this._adjustmentType = undefined;
    };
    Object.defineProperty(AutoscalingPolicy.prototype, "adjustmentTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._adjustmentType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingPolicy.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingPolicy.prototype, "autoscalingGroupName", {
        get: function () {
            return this.getStringAttribute('autoscaling_group_name');
        },
        set: function (value) {
            this._autoscalingGroupName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingPolicy.prototype, "autoscalingGroupNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoscalingGroupName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingPolicy.prototype, "cooldown", {
        get: function () {
            return this.getNumberAttribute('cooldown');
        },
        set: function (value) {
            this._cooldown = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingPolicy.prototype.resetCooldown = function () {
        this._cooldown = undefined;
    };
    Object.defineProperty(AutoscalingPolicy.prototype, "cooldownInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cooldown;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingPolicy.prototype, "estimatedInstanceWarmup", {
        get: function () {
            return this.getNumberAttribute('estimated_instance_warmup');
        },
        set: function (value) {
            this._estimatedInstanceWarmup = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingPolicy.prototype.resetEstimatedInstanceWarmup = function () {
        this._estimatedInstanceWarmup = undefined;
    };
    Object.defineProperty(AutoscalingPolicy.prototype, "estimatedInstanceWarmupInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._estimatedInstanceWarmup;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingPolicy.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingPolicy.prototype, "metricAggregationType", {
        get: function () {
            return this.getStringAttribute('metric_aggregation_type');
        },
        set: function (value) {
            this._metricAggregationType = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingPolicy.prototype.resetMetricAggregationType = function () {
        this._metricAggregationType = undefined;
    };
    Object.defineProperty(AutoscalingPolicy.prototype, "metricAggregationTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._metricAggregationType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingPolicy.prototype, "minAdjustmentMagnitude", {
        get: function () {
            return this.getNumberAttribute('min_adjustment_magnitude');
        },
        set: function (value) {
            this._minAdjustmentMagnitude = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingPolicy.prototype.resetMinAdjustmentMagnitude = function () {
        this._minAdjustmentMagnitude = undefined;
    };
    Object.defineProperty(AutoscalingPolicy.prototype, "minAdjustmentMagnitudeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._minAdjustmentMagnitude;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingPolicy.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingPolicy.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingPolicy.prototype, "policyType", {
        get: function () {
            return this.getStringAttribute('policy_type');
        },
        set: function (value) {
            this._policyType = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingPolicy.prototype.resetPolicyType = function () {
        this._policyType = undefined;
    };
    Object.defineProperty(AutoscalingPolicy.prototype, "policyTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policyType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingPolicy.prototype, "scalingAdjustment", {
        get: function () {
            return this.getNumberAttribute('scaling_adjustment');
        },
        set: function (value) {
            this._scalingAdjustment = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingPolicy.prototype.resetScalingAdjustment = function () {
        this._scalingAdjustment = undefined;
    };
    Object.defineProperty(AutoscalingPolicy.prototype, "scalingAdjustmentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scalingAdjustment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingPolicy.prototype, "predictiveScalingConfiguration", {
        get: function () {
            return this.interpolationForAttribute('predictive_scaling_configuration');
        },
        set: function (value) {
            this._predictiveScalingConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingPolicy.prototype.resetPredictiveScalingConfiguration = function () {
        this._predictiveScalingConfiguration = undefined;
    };
    Object.defineProperty(AutoscalingPolicy.prototype, "predictiveScalingConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._predictiveScalingConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingPolicy.prototype, "stepAdjustment", {
        get: function () {
            return this.interpolationForAttribute('step_adjustment');
        },
        set: function (value) {
            this._stepAdjustment = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingPolicy.prototype.resetStepAdjustment = function () {
        this._stepAdjustment = undefined;
    };
    Object.defineProperty(AutoscalingPolicy.prototype, "stepAdjustmentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._stepAdjustment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingPolicy.prototype, "targetTrackingConfiguration", {
        get: function () {
            return this.interpolationForAttribute('target_tracking_configuration');
        },
        set: function (value) {
            this._targetTrackingConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingPolicy.prototype.resetTargetTrackingConfiguration = function () {
        this._targetTrackingConfiguration = undefined;
    };
    Object.defineProperty(AutoscalingPolicy.prototype, "targetTrackingConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetTrackingConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    AutoscalingPolicy.prototype.synthesizeAttributes = function () {
        return {
            adjustment_type: cdktf.stringToTerraform(this._adjustmentType),
            autoscaling_group_name: cdktf.stringToTerraform(this._autoscalingGroupName),
            cooldown: cdktf.numberToTerraform(this._cooldown),
            estimated_instance_warmup: cdktf.numberToTerraform(this._estimatedInstanceWarmup),
            metric_aggregation_type: cdktf.stringToTerraform(this._metricAggregationType),
            min_adjustment_magnitude: cdktf.numberToTerraform(this._minAdjustmentMagnitude),
            name: cdktf.stringToTerraform(this._name),
            policy_type: cdktf.stringToTerraform(this._policyType),
            scaling_adjustment: cdktf.numberToTerraform(this._scalingAdjustment),
            predictive_scaling_configuration: cdktf.listMapper(autoscalingPolicyPredictiveScalingConfigurationToTerraform)(this._predictiveScalingConfiguration),
            step_adjustment: cdktf.listMapper(autoscalingPolicyStepAdjustmentToTerraform)(this._stepAdjustment),
            target_tracking_configuration: cdktf.listMapper(autoscalingPolicyTargetTrackingConfigurationToTerraform)(this._targetTrackingConfiguration)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    AutoscalingPolicy.tfResourceType = "aws_autoscaling_policy";
    return AutoscalingPolicy;
}(cdktf.TerraformResource));
exports.AutoscalingPolicy = AutoscalingPolicy;
