"use strict";
// https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html
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
exports.AutoscalingplansScalingPlan = void 0;
var cdktf = require("cdktf");
function autoscalingplansScalingPlanApplicationSourceTagFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
function autoscalingplansScalingPlanApplicationSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cloudformation_stack_arn: cdktf.stringToTerraform(struct.cloudformationStackArn),
        tag_filter: cdktf.listMapper(autoscalingplansScalingPlanApplicationSourceTagFilterToTerraform)(struct.tagFilter)
    };
}
function autoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        dimensions: cdktf.hashMapper(cdktf.anyToTerraform)(struct.dimensions),
        metric_name: cdktf.stringToTerraform(struct.metricName),
        namespace: cdktf.stringToTerraform(struct.namespace),
        statistic: cdktf.stringToTerraform(struct.statistic),
        unit: cdktf.stringToTerraform(struct.unit)
    };
}
function autoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        predefined_load_metric_type: cdktf.stringToTerraform(struct.predefinedLoadMetricType),
        resource_label: cdktf.stringToTerraform(struct.resourceLabel)
    };
}
function autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        dimensions: cdktf.hashMapper(cdktf.anyToTerraform)(struct.dimensions),
        metric_name: cdktf.stringToTerraform(struct.metricName),
        namespace: cdktf.stringToTerraform(struct.namespace),
        statistic: cdktf.stringToTerraform(struct.statistic),
        unit: cdktf.stringToTerraform(struct.unit)
    };
}
function autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        predefined_scaling_metric_type: cdktf.stringToTerraform(struct.predefinedScalingMetricType),
        resource_label: cdktf.stringToTerraform(struct.resourceLabel)
    };
}
function autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        disable_scale_in: cdktf.booleanToTerraform(struct.disableScaleIn),
        estimated_instance_warmup: cdktf.numberToTerraform(struct.estimatedInstanceWarmup),
        scale_in_cooldown: cdktf.numberToTerraform(struct.scaleInCooldown),
        scale_out_cooldown: cdktf.numberToTerraform(struct.scaleOutCooldown),
        target_value: cdktf.numberToTerraform(struct.targetValue),
        customized_scaling_metric_specification: cdktf.listMapper(autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationToTerraform)(struct.customizedScalingMetricSpecification),
        predefined_scaling_metric_specification: cdktf.listMapper(autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationToTerraform)(struct.predefinedScalingMetricSpecification)
    };
}
function autoscalingplansScalingPlanScalingInstructionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        disable_dynamic_scaling: cdktf.booleanToTerraform(struct.disableDynamicScaling),
        max_capacity: cdktf.numberToTerraform(struct.maxCapacity),
        min_capacity: cdktf.numberToTerraform(struct.minCapacity),
        predictive_scaling_max_capacity_behavior: cdktf.stringToTerraform(struct.predictiveScalingMaxCapacityBehavior),
        predictive_scaling_max_capacity_buffer: cdktf.numberToTerraform(struct.predictiveScalingMaxCapacityBuffer),
        predictive_scaling_mode: cdktf.stringToTerraform(struct.predictiveScalingMode),
        resource_id: cdktf.stringToTerraform(struct.resourceId),
        scalable_dimension: cdktf.stringToTerraform(struct.scalableDimension),
        scaling_policy_update_behavior: cdktf.stringToTerraform(struct.scalingPolicyUpdateBehavior),
        scheduled_action_buffer_time: cdktf.numberToTerraform(struct.scheduledActionBufferTime),
        service_namespace: cdktf.stringToTerraform(struct.serviceNamespace),
        customized_load_metric_specification: cdktf.listMapper(autoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationToTerraform)(struct.customizedLoadMetricSpecification),
        predefined_load_metric_specification: cdktf.listMapper(autoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationToTerraform)(struct.predefinedLoadMetricSpecification),
        target_tracking_configuration: cdktf.listMapper(autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationToTerraform)(struct.targetTrackingConfiguration)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html aws_autoscalingplans_scaling_plan}
*/
var AutoscalingplansScalingPlan = /** @class */ (function (_super) {
    __extends(AutoscalingplansScalingPlan, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html aws_autoscalingplans_scaling_plan} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AutoscalingplansScalingPlanConfig
    */
    function AutoscalingplansScalingPlan(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_autoscalingplans_scaling_plan',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        _this._applicationSource = config.applicationSource;
        _this._scalingInstruction = config.scalingInstruction;
        return _this;
    }
    Object.defineProperty(AutoscalingplansScalingPlan.prototype, "id", {
        // ==========
        // ATTRIBUTES
        // ==========
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingplansScalingPlan.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingplansScalingPlan.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingplansScalingPlan.prototype, "scalingPlanVersion", {
        // scaling_plan_version - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('scaling_plan_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingplansScalingPlan.prototype, "applicationSource", {
        get: function () {
            return this.interpolationForAttribute('application_source');
        },
        set: function (value) {
            this._applicationSource = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingplansScalingPlan.prototype, "applicationSourceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._applicationSource;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingplansScalingPlan.prototype, "scalingInstruction", {
        get: function () {
            return this.interpolationForAttribute('scaling_instruction');
        },
        set: function (value) {
            this._scalingInstruction = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingplansScalingPlan.prototype, "scalingInstructionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scalingInstruction;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    AutoscalingplansScalingPlan.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            application_source: cdktf.listMapper(autoscalingplansScalingPlanApplicationSourceToTerraform)(this._applicationSource),
            scaling_instruction: cdktf.listMapper(autoscalingplansScalingPlanScalingInstructionToTerraform)(this._scalingInstruction)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    AutoscalingplansScalingPlan.tfResourceType = "aws_autoscalingplans_scaling_plan";
    return AutoscalingplansScalingPlan;
}(cdktf.TerraformResource));
exports.AutoscalingplansScalingPlan = AutoscalingplansScalingPlan;
