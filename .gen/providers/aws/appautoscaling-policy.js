"use strict";
// https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html
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
exports.AppautoscalingPolicy = void 0;
var cdktf = require("cdktf");
function appautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        metric_interval_lower_bound: cdktf.stringToTerraform(struct.metricIntervalLowerBound),
        metric_interval_upper_bound: cdktf.stringToTerraform(struct.metricIntervalUpperBound),
        scaling_adjustment: cdktf.numberToTerraform(struct.scalingAdjustment)
    };
}
function appautoscalingPolicyStepScalingPolicyConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        adjustment_type: cdktf.stringToTerraform(struct.adjustmentType),
        cooldown: cdktf.numberToTerraform(struct.cooldown),
        metric_aggregation_type: cdktf.stringToTerraform(struct.metricAggregationType),
        min_adjustment_magnitude: cdktf.numberToTerraform(struct.minAdjustmentMagnitude),
        step_adjustment: cdktf.listMapper(appautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentToTerraform)(struct.stepAdjustment)
    };
}
function appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        metric_name: cdktf.stringToTerraform(struct.metricName),
        namespace: cdktf.stringToTerraform(struct.namespace),
        statistic: cdktf.stringToTerraform(struct.statistic),
        unit: cdktf.stringToTerraform(struct.unit),
        dimensions: cdktf.listMapper(appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsToTerraform)(struct.dimensions)
    };
}
function appautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        predefined_metric_type: cdktf.stringToTerraform(struct.predefinedMetricType),
        resource_label: cdktf.stringToTerraform(struct.resourceLabel)
    };
}
function appautoscalingPolicyTargetTrackingScalingPolicyConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        disable_scale_in: cdktf.booleanToTerraform(struct.disableScaleIn),
        scale_in_cooldown: cdktf.numberToTerraform(struct.scaleInCooldown),
        scale_out_cooldown: cdktf.numberToTerraform(struct.scaleOutCooldown),
        target_value: cdktf.numberToTerraform(struct.targetValue),
        customized_metric_specification: cdktf.listMapper(appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationToTerraform)(struct.customizedMetricSpecification),
        predefined_metric_specification: cdktf.listMapper(appautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationToTerraform)(struct.predefinedMetricSpecification)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html aws_appautoscaling_policy}
*/
var AppautoscalingPolicy = /** @class */ (function (_super) {
    __extends(AppautoscalingPolicy, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html aws_appautoscaling_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppautoscalingPolicyConfig
    */
    function AppautoscalingPolicy(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_appautoscaling_policy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        _this._policyType = config.policyType;
        _this._resourceId = config.resourceId;
        _this._scalableDimension = config.scalableDimension;
        _this._serviceNamespace = config.serviceNamespace;
        _this._stepScalingPolicyConfiguration = config.stepScalingPolicyConfiguration;
        _this._targetTrackingScalingPolicyConfiguration = config.targetTrackingScalingPolicyConfiguration;
        return _this;
    }
    Object.defineProperty(AppautoscalingPolicy.prototype, "arn", {
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
    Object.defineProperty(AppautoscalingPolicy.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppautoscalingPolicy.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppautoscalingPolicy.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppautoscalingPolicy.prototype, "policyType", {
        get: function () {
            return this.getStringAttribute('policy_type');
        },
        set: function (value) {
            this._policyType = value;
        },
        enumerable: false,
        configurable: true
    });
    AppautoscalingPolicy.prototype.resetPolicyType = function () {
        this._policyType = undefined;
    };
    Object.defineProperty(AppautoscalingPolicy.prototype, "policyTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policyType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppautoscalingPolicy.prototype, "resourceId", {
        get: function () {
            return this.getStringAttribute('resource_id');
        },
        set: function (value) {
            this._resourceId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppautoscalingPolicy.prototype, "resourceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resourceId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppautoscalingPolicy.prototype, "scalableDimension", {
        get: function () {
            return this.getStringAttribute('scalable_dimension');
        },
        set: function (value) {
            this._scalableDimension = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppautoscalingPolicy.prototype, "scalableDimensionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scalableDimension;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppautoscalingPolicy.prototype, "serviceNamespace", {
        get: function () {
            return this.getStringAttribute('service_namespace');
        },
        set: function (value) {
            this._serviceNamespace = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppautoscalingPolicy.prototype, "serviceNamespaceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serviceNamespace;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppautoscalingPolicy.prototype, "stepScalingPolicyConfiguration", {
        get: function () {
            return this.interpolationForAttribute('step_scaling_policy_configuration');
        },
        set: function (value) {
            this._stepScalingPolicyConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    AppautoscalingPolicy.prototype.resetStepScalingPolicyConfiguration = function () {
        this._stepScalingPolicyConfiguration = undefined;
    };
    Object.defineProperty(AppautoscalingPolicy.prototype, "stepScalingPolicyConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._stepScalingPolicyConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppautoscalingPolicy.prototype, "targetTrackingScalingPolicyConfiguration", {
        get: function () {
            return this.interpolationForAttribute('target_tracking_scaling_policy_configuration');
        },
        set: function (value) {
            this._targetTrackingScalingPolicyConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    AppautoscalingPolicy.prototype.resetTargetTrackingScalingPolicyConfiguration = function () {
        this._targetTrackingScalingPolicyConfiguration = undefined;
    };
    Object.defineProperty(AppautoscalingPolicy.prototype, "targetTrackingScalingPolicyConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetTrackingScalingPolicyConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    AppautoscalingPolicy.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            policy_type: cdktf.stringToTerraform(this._policyType),
            resource_id: cdktf.stringToTerraform(this._resourceId),
            scalable_dimension: cdktf.stringToTerraform(this._scalableDimension),
            service_namespace: cdktf.stringToTerraform(this._serviceNamespace),
            step_scaling_policy_configuration: cdktf.listMapper(appautoscalingPolicyStepScalingPolicyConfigurationToTerraform)(this._stepScalingPolicyConfiguration),
            target_tracking_scaling_policy_configuration: cdktf.listMapper(appautoscalingPolicyTargetTrackingScalingPolicyConfigurationToTerraform)(this._targetTrackingScalingPolicyConfiguration)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    AppautoscalingPolicy.tfResourceType = "aws_appautoscaling_policy";
    return AppautoscalingPolicy;
}(cdktf.TerraformResource));
exports.AppautoscalingPolicy = AppautoscalingPolicy;
