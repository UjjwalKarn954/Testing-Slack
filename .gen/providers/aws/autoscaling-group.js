"use strict";
// https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html
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
exports.AutoscalingGroup = void 0;
var cdktf = require("cdktf");
function autoscalingGroupInitialLifecycleHookToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        default_result: cdktf.stringToTerraform(struct.defaultResult),
        heartbeat_timeout: cdktf.numberToTerraform(struct.heartbeatTimeout),
        lifecycle_transition: cdktf.stringToTerraform(struct.lifecycleTransition),
        name: cdktf.stringToTerraform(struct.name),
        notification_metadata: cdktf.stringToTerraform(struct.notificationMetadata),
        notification_target_arn: cdktf.stringToTerraform(struct.notificationTargetArn),
        role_arn: cdktf.stringToTerraform(struct.roleArn)
    };
}
function autoscalingGroupInstanceRefreshPreferencesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        checkpoint_delay: cdktf.stringToTerraform(struct.checkpointDelay),
        checkpoint_percentages: cdktf.listMapper(cdktf.numberToTerraform)(struct.checkpointPercentages),
        instance_warmup: cdktf.stringToTerraform(struct.instanceWarmup),
        min_healthy_percentage: cdktf.numberToTerraform(struct.minHealthyPercentage)
    };
}
function autoscalingGroupInstanceRefreshToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        strategy: cdktf.stringToTerraform(struct.strategy),
        triggers: cdktf.listMapper(cdktf.stringToTerraform)(struct.triggers),
        preferences: cdktf.listMapper(autoscalingGroupInstanceRefreshPreferencesToTerraform)(struct.preferences)
    };
}
function autoscalingGroupLaunchTemplateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
        name: cdktf.stringToTerraform(struct.name),
        version: cdktf.stringToTerraform(struct.version)
    };
}
function autoscalingGroupMixedInstancesPolicyInstancesDistributionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        on_demand_allocation_strategy: cdktf.stringToTerraform(struct.onDemandAllocationStrategy),
        on_demand_base_capacity: cdktf.numberToTerraform(struct.onDemandBaseCapacity),
        on_demand_percentage_above_base_capacity: cdktf.numberToTerraform(struct.onDemandPercentageAboveBaseCapacity),
        spot_allocation_strategy: cdktf.stringToTerraform(struct.spotAllocationStrategy),
        spot_instance_pools: cdktf.numberToTerraform(struct.spotInstancePools),
        spot_max_price: cdktf.stringToTerraform(struct.spotMaxPrice)
    };
}
function autoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        launch_template_id: cdktf.stringToTerraform(struct.launchTemplateId),
        launch_template_name: cdktf.stringToTerraform(struct.launchTemplateName),
        version: cdktf.stringToTerraform(struct.version)
    };
}
function autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        launch_template_id: cdktf.stringToTerraform(struct.launchTemplateId),
        launch_template_name: cdktf.stringToTerraform(struct.launchTemplateName),
        version: cdktf.stringToTerraform(struct.version)
    };
}
function autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        instance_type: cdktf.stringToTerraform(struct.instanceType),
        weighted_capacity: cdktf.stringToTerraform(struct.weightedCapacity),
        launch_template_specification: cdktf.listMapper(autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationToTerraform)(struct.launchTemplateSpecification)
    };
}
function autoscalingGroupMixedInstancesPolicyLaunchTemplateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        launch_template_specification: cdktf.listMapper(autoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationToTerraform)(struct.launchTemplateSpecification),
        override: cdktf.listMapper(autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideToTerraform)(struct.override)
    };
}
function autoscalingGroupMixedInstancesPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        instances_distribution: cdktf.listMapper(autoscalingGroupMixedInstancesPolicyInstancesDistributionToTerraform)(struct.instancesDistribution),
        launch_template: cdktf.listMapper(autoscalingGroupMixedInstancesPolicyLaunchTemplateToTerraform)(struct.launchTemplate)
    };
}
function autoscalingGroupTagToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        propagate_at_launch: cdktf.booleanToTerraform(struct.propagateAtLaunch),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function autoscalingGroupTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        "delete": cdktf.stringToTerraform(struct["delete"])
    };
}
function autoscalingGroupWarmPoolToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        max_group_prepared_capacity: cdktf.numberToTerraform(struct.maxGroupPreparedCapacity),
        min_size: cdktf.numberToTerraform(struct.minSize),
        pool_state: cdktf.stringToTerraform(struct.poolState)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html aws_autoscaling_group}
*/
var AutoscalingGroup = /** @class */ (function (_super) {
    __extends(AutoscalingGroup, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html aws_autoscaling_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AutoscalingGroupConfig
    */
    function AutoscalingGroup(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_autoscaling_group',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._availabilityZones = config.availabilityZones;
        _this._capacityRebalance = config.capacityRebalance;
        _this._defaultCooldown = config.defaultCooldown;
        _this._desiredCapacity = config.desiredCapacity;
        _this._enabledMetrics = config.enabledMetrics;
        _this._forceDelete = config.forceDelete;
        _this._forceDeleteWarmPool = config.forceDeleteWarmPool;
        _this._healthCheckGracePeriod = config.healthCheckGracePeriod;
        _this._healthCheckType = config.healthCheckType;
        _this._launchConfiguration = config.launchConfiguration;
        _this._loadBalancers = config.loadBalancers;
        _this._maxInstanceLifetime = config.maxInstanceLifetime;
        _this._maxSize = config.maxSize;
        _this._metricsGranularity = config.metricsGranularity;
        _this._minElbCapacity = config.minElbCapacity;
        _this._minSize = config.minSize;
        _this._name = config.name;
        _this._namePrefix = config.namePrefix;
        _this._placementGroup = config.placementGroup;
        _this._protectFromScaleIn = config.protectFromScaleIn;
        _this._serviceLinkedRoleArn = config.serviceLinkedRoleArn;
        _this._suspendedProcesses = config.suspendedProcesses;
        _this._tags = config.tags;
        _this._targetGroupArns = config.targetGroupArns;
        _this._terminationPolicies = config.terminationPolicies;
        _this._vpcZoneIdentifier = config.vpcZoneIdentifier;
        _this._waitForCapacityTimeout = config.waitForCapacityTimeout;
        _this._waitForElbCapacity = config.waitForElbCapacity;
        _this._initialLifecycleHook = config.initialLifecycleHook;
        _this._instanceRefresh = config.instanceRefresh;
        _this._launchTemplate = config.launchTemplate;
        _this._mixedInstancesPolicy = config.mixedInstancesPolicy;
        _this._tag = config.tag;
        _this._timeouts = config.timeouts;
        _this._warmPool = config.warmPool;
        return _this;
    }
    Object.defineProperty(AutoscalingGroup.prototype, "arn", {
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
    Object.defineProperty(AutoscalingGroup.prototype, "availabilityZones", {
        get: function () {
            return this.getListAttribute('availability_zones');
        },
        set: function (value) {
            this._availabilityZones = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingGroup.prototype.resetAvailabilityZones = function () {
        this._availabilityZones = undefined;
    };
    Object.defineProperty(AutoscalingGroup.prototype, "availabilityZonesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._availabilityZones;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingGroup.prototype, "capacityRebalance", {
        get: function () {
            return this.getBooleanAttribute('capacity_rebalance');
        },
        set: function (value) {
            this._capacityRebalance = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingGroup.prototype.resetCapacityRebalance = function () {
        this._capacityRebalance = undefined;
    };
    Object.defineProperty(AutoscalingGroup.prototype, "capacityRebalanceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._capacityRebalance;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingGroup.prototype, "defaultCooldown", {
        get: function () {
            return this.getNumberAttribute('default_cooldown');
        },
        set: function (value) {
            this._defaultCooldown = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingGroup.prototype.resetDefaultCooldown = function () {
        this._defaultCooldown = undefined;
    };
    Object.defineProperty(AutoscalingGroup.prototype, "defaultCooldownInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultCooldown;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingGroup.prototype, "desiredCapacity", {
        get: function () {
            return this.getNumberAttribute('desired_capacity');
        },
        set: function (value) {
            this._desiredCapacity = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingGroup.prototype.resetDesiredCapacity = function () {
        this._desiredCapacity = undefined;
    };
    Object.defineProperty(AutoscalingGroup.prototype, "desiredCapacityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._desiredCapacity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingGroup.prototype, "enabledMetrics", {
        get: function () {
            return this.getListAttribute('enabled_metrics');
        },
        set: function (value) {
            this._enabledMetrics = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingGroup.prototype.resetEnabledMetrics = function () {
        this._enabledMetrics = undefined;
    };
    Object.defineProperty(AutoscalingGroup.prototype, "enabledMetricsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabledMetrics;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingGroup.prototype, "forceDelete", {
        get: function () {
            return this.getBooleanAttribute('force_delete');
        },
        set: function (value) {
            this._forceDelete = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingGroup.prototype.resetForceDelete = function () {
        this._forceDelete = undefined;
    };
    Object.defineProperty(AutoscalingGroup.prototype, "forceDeleteInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._forceDelete;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingGroup.prototype, "forceDeleteWarmPool", {
        get: function () {
            return this.getBooleanAttribute('force_delete_warm_pool');
        },
        set: function (value) {
            this._forceDeleteWarmPool = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingGroup.prototype.resetForceDeleteWarmPool = function () {
        this._forceDeleteWarmPool = undefined;
    };
    Object.defineProperty(AutoscalingGroup.prototype, "forceDeleteWarmPoolInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._forceDeleteWarmPool;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingGroup.prototype, "healthCheckGracePeriod", {
        get: function () {
            return this.getNumberAttribute('health_check_grace_period');
        },
        set: function (value) {
            this._healthCheckGracePeriod = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingGroup.prototype.resetHealthCheckGracePeriod = function () {
        this._healthCheckGracePeriod = undefined;
    };
    Object.defineProperty(AutoscalingGroup.prototype, "healthCheckGracePeriodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._healthCheckGracePeriod;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingGroup.prototype, "healthCheckType", {
        get: function () {
            return this.getStringAttribute('health_check_type');
        },
        set: function (value) {
            this._healthCheckType = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingGroup.prototype.resetHealthCheckType = function () {
        this._healthCheckType = undefined;
    };
    Object.defineProperty(AutoscalingGroup.prototype, "healthCheckTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._healthCheckType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingGroup.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingGroup.prototype, "launchConfiguration", {
        get: function () {
            return this.getStringAttribute('launch_configuration');
        },
        set: function (value) {
            this._launchConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingGroup.prototype.resetLaunchConfiguration = function () {
        this._launchConfiguration = undefined;
    };
    Object.defineProperty(AutoscalingGroup.prototype, "launchConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._launchConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingGroup.prototype, "loadBalancers", {
        get: function () {
            return this.getListAttribute('load_balancers');
        },
        set: function (value) {
            this._loadBalancers = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingGroup.prototype.resetLoadBalancers = function () {
        this._loadBalancers = undefined;
    };
    Object.defineProperty(AutoscalingGroup.prototype, "loadBalancersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._loadBalancers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingGroup.prototype, "maxInstanceLifetime", {
        get: function () {
            return this.getNumberAttribute('max_instance_lifetime');
        },
        set: function (value) {
            this._maxInstanceLifetime = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingGroup.prototype.resetMaxInstanceLifetime = function () {
        this._maxInstanceLifetime = undefined;
    };
    Object.defineProperty(AutoscalingGroup.prototype, "maxInstanceLifetimeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxInstanceLifetime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingGroup.prototype, "maxSize", {
        get: function () {
            return this.getNumberAttribute('max_size');
        },
        set: function (value) {
            this._maxSize = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingGroup.prototype, "maxSizeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingGroup.prototype, "metricsGranularity", {
        get: function () {
            return this.getStringAttribute('metrics_granularity');
        },
        set: function (value) {
            this._metricsGranularity = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingGroup.prototype.resetMetricsGranularity = function () {
        this._metricsGranularity = undefined;
    };
    Object.defineProperty(AutoscalingGroup.prototype, "metricsGranularityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._metricsGranularity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingGroup.prototype, "minElbCapacity", {
        get: function () {
            return this.getNumberAttribute('min_elb_capacity');
        },
        set: function (value) {
            this._minElbCapacity = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingGroup.prototype.resetMinElbCapacity = function () {
        this._minElbCapacity = undefined;
    };
    Object.defineProperty(AutoscalingGroup.prototype, "minElbCapacityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._minElbCapacity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingGroup.prototype, "minSize", {
        get: function () {
            return this.getNumberAttribute('min_size');
        },
        set: function (value) {
            this._minSize = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingGroup.prototype, "minSizeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._minSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingGroup.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingGroup.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(AutoscalingGroup.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingGroup.prototype, "namePrefix", {
        get: function () {
            return this.getStringAttribute('name_prefix');
        },
        set: function (value) {
            this._namePrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingGroup.prototype.resetNamePrefix = function () {
        this._namePrefix = undefined;
    };
    Object.defineProperty(AutoscalingGroup.prototype, "namePrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._namePrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingGroup.prototype, "placementGroup", {
        get: function () {
            return this.getStringAttribute('placement_group');
        },
        set: function (value) {
            this._placementGroup = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingGroup.prototype.resetPlacementGroup = function () {
        this._placementGroup = undefined;
    };
    Object.defineProperty(AutoscalingGroup.prototype, "placementGroupInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._placementGroup;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingGroup.prototype, "protectFromScaleIn", {
        get: function () {
            return this.getBooleanAttribute('protect_from_scale_in');
        },
        set: function (value) {
            this._protectFromScaleIn = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingGroup.prototype.resetProtectFromScaleIn = function () {
        this._protectFromScaleIn = undefined;
    };
    Object.defineProperty(AutoscalingGroup.prototype, "protectFromScaleInInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._protectFromScaleIn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingGroup.prototype, "serviceLinkedRoleArn", {
        get: function () {
            return this.getStringAttribute('service_linked_role_arn');
        },
        set: function (value) {
            this._serviceLinkedRoleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingGroup.prototype.resetServiceLinkedRoleArn = function () {
        this._serviceLinkedRoleArn = undefined;
    };
    Object.defineProperty(AutoscalingGroup.prototype, "serviceLinkedRoleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serviceLinkedRoleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingGroup.prototype, "suspendedProcesses", {
        get: function () {
            return this.getListAttribute('suspended_processes');
        },
        set: function (value) {
            this._suspendedProcesses = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingGroup.prototype.resetSuspendedProcesses = function () {
        this._suspendedProcesses = undefined;
    };
    Object.defineProperty(AutoscalingGroup.prototype, "suspendedProcessesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._suspendedProcesses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingGroup.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingGroup.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(AutoscalingGroup.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingGroup.prototype, "targetGroupArns", {
        get: function () {
            return this.getListAttribute('target_group_arns');
        },
        set: function (value) {
            this._targetGroupArns = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingGroup.prototype.resetTargetGroupArns = function () {
        this._targetGroupArns = undefined;
    };
    Object.defineProperty(AutoscalingGroup.prototype, "targetGroupArnsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetGroupArns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingGroup.prototype, "terminationPolicies", {
        get: function () {
            return this.getListAttribute('termination_policies');
        },
        set: function (value) {
            this._terminationPolicies = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingGroup.prototype.resetTerminationPolicies = function () {
        this._terminationPolicies = undefined;
    };
    Object.defineProperty(AutoscalingGroup.prototype, "terminationPoliciesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._terminationPolicies;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingGroup.prototype, "vpcZoneIdentifier", {
        get: function () {
            return this.getListAttribute('vpc_zone_identifier');
        },
        set: function (value) {
            this._vpcZoneIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingGroup.prototype.resetVpcZoneIdentifier = function () {
        this._vpcZoneIdentifier = undefined;
    };
    Object.defineProperty(AutoscalingGroup.prototype, "vpcZoneIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcZoneIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingGroup.prototype, "waitForCapacityTimeout", {
        get: function () {
            return this.getStringAttribute('wait_for_capacity_timeout');
        },
        set: function (value) {
            this._waitForCapacityTimeout = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingGroup.prototype.resetWaitForCapacityTimeout = function () {
        this._waitForCapacityTimeout = undefined;
    };
    Object.defineProperty(AutoscalingGroup.prototype, "waitForCapacityTimeoutInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._waitForCapacityTimeout;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingGroup.prototype, "waitForElbCapacity", {
        get: function () {
            return this.getNumberAttribute('wait_for_elb_capacity');
        },
        set: function (value) {
            this._waitForElbCapacity = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingGroup.prototype.resetWaitForElbCapacity = function () {
        this._waitForElbCapacity = undefined;
    };
    Object.defineProperty(AutoscalingGroup.prototype, "waitForElbCapacityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._waitForElbCapacity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingGroup.prototype, "initialLifecycleHook", {
        get: function () {
            return this.interpolationForAttribute('initial_lifecycle_hook');
        },
        set: function (value) {
            this._initialLifecycleHook = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingGroup.prototype.resetInitialLifecycleHook = function () {
        this._initialLifecycleHook = undefined;
    };
    Object.defineProperty(AutoscalingGroup.prototype, "initialLifecycleHookInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._initialLifecycleHook;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingGroup.prototype, "instanceRefresh", {
        get: function () {
            return this.interpolationForAttribute('instance_refresh');
        },
        set: function (value) {
            this._instanceRefresh = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingGroup.prototype.resetInstanceRefresh = function () {
        this._instanceRefresh = undefined;
    };
    Object.defineProperty(AutoscalingGroup.prototype, "instanceRefreshInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceRefresh;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingGroup.prototype, "launchTemplate", {
        get: function () {
            return this.interpolationForAttribute('launch_template');
        },
        set: function (value) {
            this._launchTemplate = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingGroup.prototype.resetLaunchTemplate = function () {
        this._launchTemplate = undefined;
    };
    Object.defineProperty(AutoscalingGroup.prototype, "launchTemplateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._launchTemplate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingGroup.prototype, "mixedInstancesPolicy", {
        get: function () {
            return this.interpolationForAttribute('mixed_instances_policy');
        },
        set: function (value) {
            this._mixedInstancesPolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingGroup.prototype.resetMixedInstancesPolicy = function () {
        this._mixedInstancesPolicy = undefined;
    };
    Object.defineProperty(AutoscalingGroup.prototype, "mixedInstancesPolicyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mixedInstancesPolicy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingGroup.prototype, "tag", {
        get: function () {
            return this.interpolationForAttribute('tag');
        },
        set: function (value) {
            this._tag = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingGroup.prototype.resetTag = function () {
        this._tag = undefined;
    };
    Object.defineProperty(AutoscalingGroup.prototype, "tagInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tag;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingGroup.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingGroup.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(AutoscalingGroup.prototype, "timeoutsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeouts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoscalingGroup.prototype, "warmPool", {
        get: function () {
            return this.interpolationForAttribute('warm_pool');
        },
        set: function (value) {
            this._warmPool = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoscalingGroup.prototype.resetWarmPool = function () {
        this._warmPool = undefined;
    };
    Object.defineProperty(AutoscalingGroup.prototype, "warmPoolInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._warmPool;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    AutoscalingGroup.prototype.synthesizeAttributes = function () {
        return {
            availability_zones: cdktf.listMapper(cdktf.stringToTerraform)(this._availabilityZones),
            capacity_rebalance: cdktf.booleanToTerraform(this._capacityRebalance),
            default_cooldown: cdktf.numberToTerraform(this._defaultCooldown),
            desired_capacity: cdktf.numberToTerraform(this._desiredCapacity),
            enabled_metrics: cdktf.listMapper(cdktf.stringToTerraform)(this._enabledMetrics),
            force_delete: cdktf.booleanToTerraform(this._forceDelete),
            force_delete_warm_pool: cdktf.booleanToTerraform(this._forceDeleteWarmPool),
            health_check_grace_period: cdktf.numberToTerraform(this._healthCheckGracePeriod),
            health_check_type: cdktf.stringToTerraform(this._healthCheckType),
            launch_configuration: cdktf.stringToTerraform(this._launchConfiguration),
            load_balancers: cdktf.listMapper(cdktf.stringToTerraform)(this._loadBalancers),
            max_instance_lifetime: cdktf.numberToTerraform(this._maxInstanceLifetime),
            max_size: cdktf.numberToTerraform(this._maxSize),
            metrics_granularity: cdktf.stringToTerraform(this._metricsGranularity),
            min_elb_capacity: cdktf.numberToTerraform(this._minElbCapacity),
            min_size: cdktf.numberToTerraform(this._minSize),
            name: cdktf.stringToTerraform(this._name),
            name_prefix: cdktf.stringToTerraform(this._namePrefix),
            placement_group: cdktf.stringToTerraform(this._placementGroup),
            protect_from_scale_in: cdktf.booleanToTerraform(this._protectFromScaleIn),
            service_linked_role_arn: cdktf.stringToTerraform(this._serviceLinkedRoleArn),
            suspended_processes: cdktf.listMapper(cdktf.stringToTerraform)(this._suspendedProcesses),
            tags: cdktf.listMapper(cdktf.hashMapper(cdktf.anyToTerraform))(this._tags),
            target_group_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._targetGroupArns),
            termination_policies: cdktf.listMapper(cdktf.stringToTerraform)(this._terminationPolicies),
            vpc_zone_identifier: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcZoneIdentifier),
            wait_for_capacity_timeout: cdktf.stringToTerraform(this._waitForCapacityTimeout),
            wait_for_elb_capacity: cdktf.numberToTerraform(this._waitForElbCapacity),
            initial_lifecycle_hook: cdktf.listMapper(autoscalingGroupInitialLifecycleHookToTerraform)(this._initialLifecycleHook),
            instance_refresh: cdktf.listMapper(autoscalingGroupInstanceRefreshToTerraform)(this._instanceRefresh),
            launch_template: cdktf.listMapper(autoscalingGroupLaunchTemplateToTerraform)(this._launchTemplate),
            mixed_instances_policy: cdktf.listMapper(autoscalingGroupMixedInstancesPolicyToTerraform)(this._mixedInstancesPolicy),
            tag: cdktf.listMapper(autoscalingGroupTagToTerraform)(this._tag),
            timeouts: autoscalingGroupTimeoutsToTerraform(this._timeouts),
            warm_pool: cdktf.listMapper(autoscalingGroupWarmPoolToTerraform)(this._warmPool)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    AutoscalingGroup.tfResourceType = "aws_autoscaling_group";
    return AutoscalingGroup;
}(cdktf.TerraformResource));
exports.AutoscalingGroup = AutoscalingGroup;
