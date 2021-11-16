"use strict";
// https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html
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
exports.SpotFleetRequest = void 0;
var cdktf = require("cdktf");
function spotFleetRequestLaunchSpecificationEbsBlockDeviceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        delete_on_termination: cdktf.booleanToTerraform(struct.deleteOnTermination),
        device_name: cdktf.stringToTerraform(struct.deviceName),
        encrypted: cdktf.booleanToTerraform(struct.encrypted),
        iops: cdktf.numberToTerraform(struct.iops),
        kms_key_id: cdktf.stringToTerraform(struct.kmsKeyId),
        snapshot_id: cdktf.stringToTerraform(struct.snapshotId),
        throughput: cdktf.numberToTerraform(struct.throughput),
        volume_size: cdktf.numberToTerraform(struct.volumeSize),
        volume_type: cdktf.stringToTerraform(struct.volumeType)
    };
}
function spotFleetRequestLaunchSpecificationEphemeralBlockDeviceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        device_name: cdktf.stringToTerraform(struct.deviceName),
        virtual_name: cdktf.stringToTerraform(struct.virtualName)
    };
}
function spotFleetRequestLaunchSpecificationRootBlockDeviceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        delete_on_termination: cdktf.booleanToTerraform(struct.deleteOnTermination),
        encrypted: cdktf.booleanToTerraform(struct.encrypted),
        iops: cdktf.numberToTerraform(struct.iops),
        kms_key_id: cdktf.stringToTerraform(struct.kmsKeyId),
        throughput: cdktf.numberToTerraform(struct.throughput),
        volume_size: cdktf.numberToTerraform(struct.volumeSize),
        volume_type: cdktf.stringToTerraform(struct.volumeType)
    };
}
function spotFleetRequestLaunchSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        ami: cdktf.stringToTerraform(struct.ami),
        associate_public_ip_address: cdktf.booleanToTerraform(struct.associatePublicIpAddress),
        availability_zone: cdktf.stringToTerraform(struct.availabilityZone),
        ebs_optimized: cdktf.booleanToTerraform(struct.ebsOptimized),
        iam_instance_profile: cdktf.stringToTerraform(struct.iamInstanceProfile),
        iam_instance_profile_arn: cdktf.stringToTerraform(struct.iamInstanceProfileArn),
        instance_type: cdktf.stringToTerraform(struct.instanceType),
        key_name: cdktf.stringToTerraform(struct.keyName),
        monitoring: cdktf.booleanToTerraform(struct.monitoring),
        placement_group: cdktf.stringToTerraform(struct.placementGroup),
        placement_tenancy: cdktf.stringToTerraform(struct.placementTenancy),
        spot_price: cdktf.stringToTerraform(struct.spotPrice),
        subnet_id: cdktf.stringToTerraform(struct.subnetId),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct.tags),
        user_data: cdktf.stringToTerraform(struct.userData),
        vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.vpcSecurityGroupIds),
        weighted_capacity: cdktf.stringToTerraform(struct.weightedCapacity),
        ebs_block_device: cdktf.listMapper(spotFleetRequestLaunchSpecificationEbsBlockDeviceToTerraform)(struct.ebsBlockDevice),
        ephemeral_block_device: cdktf.listMapper(spotFleetRequestLaunchSpecificationEphemeralBlockDeviceToTerraform)(struct.ephemeralBlockDevice),
        root_block_device: cdktf.listMapper(spotFleetRequestLaunchSpecificationRootBlockDeviceToTerraform)(struct.rootBlockDevice)
    };
}
function spotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
        name: cdktf.stringToTerraform(struct.name),
        version: cdktf.stringToTerraform(struct.version)
    };
}
function spotFleetRequestLaunchTemplateConfigOverridesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        availability_zone: cdktf.stringToTerraform(struct.availabilityZone),
        instance_type: cdktf.stringToTerraform(struct.instanceType),
        priority: cdktf.numberToTerraform(struct.priority),
        spot_price: cdktf.stringToTerraform(struct.spotPrice),
        subnet_id: cdktf.stringToTerraform(struct.subnetId),
        weighted_capacity: cdktf.numberToTerraform(struct.weightedCapacity)
    };
}
function spotFleetRequestLaunchTemplateConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        launch_template_specification: cdktf.listMapper(spotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationToTerraform)(struct.launchTemplateSpecification),
        overrides: cdktf.listMapper(spotFleetRequestLaunchTemplateConfigOverridesToTerraform)(struct.overrides)
    };
}
function spotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        replacement_strategy: cdktf.stringToTerraform(struct.replacementStrategy)
    };
}
function spotFleetRequestSpotMaintenanceStrategiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        capacity_rebalance: cdktf.listMapper(spotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceToTerraform)(struct.capacityRebalance)
    };
}
function spotFleetRequestTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        "delete": cdktf.stringToTerraform(struct["delete"])
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html aws_spot_fleet_request}
*/
var SpotFleetRequest = /** @class */ (function (_super) {
    __extends(SpotFleetRequest, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html aws_spot_fleet_request} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SpotFleetRequestConfig
    */
    function SpotFleetRequest(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_spot_fleet_request',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._allocationStrategy = config.allocationStrategy;
        _this._excessCapacityTerminationPolicy = config.excessCapacityTerminationPolicy;
        _this._fleetType = config.fleetType;
        _this._iamFleetRole = config.iamFleetRole;
        _this._instanceInterruptionBehaviour = config.instanceInterruptionBehaviour;
        _this._instancePoolsToUseCount = config.instancePoolsToUseCount;
        _this._loadBalancers = config.loadBalancers;
        _this._onDemandAllocationStrategy = config.onDemandAllocationStrategy;
        _this._onDemandMaxTotalPrice = config.onDemandMaxTotalPrice;
        _this._onDemandTargetCapacity = config.onDemandTargetCapacity;
        _this._replaceUnhealthyInstances = config.replaceUnhealthyInstances;
        _this._spotPrice = config.spotPrice;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._targetCapacity = config.targetCapacity;
        _this._targetGroupArns = config.targetGroupArns;
        _this._terminateInstancesWithExpiration = config.terminateInstancesWithExpiration;
        _this._validFrom = config.validFrom;
        _this._validUntil = config.validUntil;
        _this._waitForFulfillment = config.waitForFulfillment;
        _this._launchSpecification = config.launchSpecification;
        _this._launchTemplateConfig = config.launchTemplateConfig;
        _this._spotMaintenanceStrategies = config.spotMaintenanceStrategies;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(SpotFleetRequest.prototype, "allocationStrategy", {
        get: function () {
            return this.getStringAttribute('allocation_strategy');
        },
        set: function (value) {
            this._allocationStrategy = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotFleetRequest.prototype.resetAllocationStrategy = function () {
        this._allocationStrategy = undefined;
    };
    Object.defineProperty(SpotFleetRequest.prototype, "allocationStrategyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allocationStrategy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotFleetRequest.prototype, "clientToken", {
        // client_token - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('client_token');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotFleetRequest.prototype, "excessCapacityTerminationPolicy", {
        get: function () {
            return this.getStringAttribute('excess_capacity_termination_policy');
        },
        set: function (value) {
            this._excessCapacityTerminationPolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotFleetRequest.prototype.resetExcessCapacityTerminationPolicy = function () {
        this._excessCapacityTerminationPolicy = undefined;
    };
    Object.defineProperty(SpotFleetRequest.prototype, "excessCapacityTerminationPolicyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._excessCapacityTerminationPolicy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotFleetRequest.prototype, "fleetType", {
        get: function () {
            return this.getStringAttribute('fleet_type');
        },
        set: function (value) {
            this._fleetType = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotFleetRequest.prototype.resetFleetType = function () {
        this._fleetType = undefined;
    };
    Object.defineProperty(SpotFleetRequest.prototype, "fleetTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fleetType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotFleetRequest.prototype, "iamFleetRole", {
        get: function () {
            return this.getStringAttribute('iam_fleet_role');
        },
        set: function (value) {
            this._iamFleetRole = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotFleetRequest.prototype, "iamFleetRoleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._iamFleetRole;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotFleetRequest.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotFleetRequest.prototype, "instanceInterruptionBehaviour", {
        get: function () {
            return this.getStringAttribute('instance_interruption_behaviour');
        },
        set: function (value) {
            this._instanceInterruptionBehaviour = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotFleetRequest.prototype.resetInstanceInterruptionBehaviour = function () {
        this._instanceInterruptionBehaviour = undefined;
    };
    Object.defineProperty(SpotFleetRequest.prototype, "instanceInterruptionBehaviourInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceInterruptionBehaviour;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotFleetRequest.prototype, "instancePoolsToUseCount", {
        get: function () {
            return this.getNumberAttribute('instance_pools_to_use_count');
        },
        set: function (value) {
            this._instancePoolsToUseCount = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotFleetRequest.prototype.resetInstancePoolsToUseCount = function () {
        this._instancePoolsToUseCount = undefined;
    };
    Object.defineProperty(SpotFleetRequest.prototype, "instancePoolsToUseCountInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instancePoolsToUseCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotFleetRequest.prototype, "loadBalancers", {
        get: function () {
            return this.getListAttribute('load_balancers');
        },
        set: function (value) {
            this._loadBalancers = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotFleetRequest.prototype.resetLoadBalancers = function () {
        this._loadBalancers = undefined;
    };
    Object.defineProperty(SpotFleetRequest.prototype, "loadBalancersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._loadBalancers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotFleetRequest.prototype, "onDemandAllocationStrategy", {
        get: function () {
            return this.getStringAttribute('on_demand_allocation_strategy');
        },
        set: function (value) {
            this._onDemandAllocationStrategy = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotFleetRequest.prototype.resetOnDemandAllocationStrategy = function () {
        this._onDemandAllocationStrategy = undefined;
    };
    Object.defineProperty(SpotFleetRequest.prototype, "onDemandAllocationStrategyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._onDemandAllocationStrategy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotFleetRequest.prototype, "onDemandMaxTotalPrice", {
        get: function () {
            return this.getStringAttribute('on_demand_max_total_price');
        },
        set: function (value) {
            this._onDemandMaxTotalPrice = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotFleetRequest.prototype.resetOnDemandMaxTotalPrice = function () {
        this._onDemandMaxTotalPrice = undefined;
    };
    Object.defineProperty(SpotFleetRequest.prototype, "onDemandMaxTotalPriceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._onDemandMaxTotalPrice;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotFleetRequest.prototype, "onDemandTargetCapacity", {
        get: function () {
            return this.getNumberAttribute('on_demand_target_capacity');
        },
        set: function (value) {
            this._onDemandTargetCapacity = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotFleetRequest.prototype.resetOnDemandTargetCapacity = function () {
        this._onDemandTargetCapacity = undefined;
    };
    Object.defineProperty(SpotFleetRequest.prototype, "onDemandTargetCapacityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._onDemandTargetCapacity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotFleetRequest.prototype, "replaceUnhealthyInstances", {
        get: function () {
            return this.getBooleanAttribute('replace_unhealthy_instances');
        },
        set: function (value) {
            this._replaceUnhealthyInstances = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotFleetRequest.prototype.resetReplaceUnhealthyInstances = function () {
        this._replaceUnhealthyInstances = undefined;
    };
    Object.defineProperty(SpotFleetRequest.prototype, "replaceUnhealthyInstancesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._replaceUnhealthyInstances;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotFleetRequest.prototype, "spotPrice", {
        get: function () {
            return this.getStringAttribute('spot_price');
        },
        set: function (value) {
            this._spotPrice = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotFleetRequest.prototype.resetSpotPrice = function () {
        this._spotPrice = undefined;
    };
    Object.defineProperty(SpotFleetRequest.prototype, "spotPriceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._spotPrice;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotFleetRequest.prototype, "spotRequestState", {
        // spot_request_state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('spot_request_state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotFleetRequest.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotFleetRequest.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(SpotFleetRequest.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotFleetRequest.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotFleetRequest.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(SpotFleetRequest.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotFleetRequest.prototype, "targetCapacity", {
        get: function () {
            return this.getNumberAttribute('target_capacity');
        },
        set: function (value) {
            this._targetCapacity = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotFleetRequest.prototype, "targetCapacityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetCapacity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotFleetRequest.prototype, "targetGroupArns", {
        get: function () {
            return this.getListAttribute('target_group_arns');
        },
        set: function (value) {
            this._targetGroupArns = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotFleetRequest.prototype.resetTargetGroupArns = function () {
        this._targetGroupArns = undefined;
    };
    Object.defineProperty(SpotFleetRequest.prototype, "targetGroupArnsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetGroupArns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotFleetRequest.prototype, "terminateInstancesWithExpiration", {
        get: function () {
            return this.getBooleanAttribute('terminate_instances_with_expiration');
        },
        set: function (value) {
            this._terminateInstancesWithExpiration = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotFleetRequest.prototype.resetTerminateInstancesWithExpiration = function () {
        this._terminateInstancesWithExpiration = undefined;
    };
    Object.defineProperty(SpotFleetRequest.prototype, "terminateInstancesWithExpirationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._terminateInstancesWithExpiration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotFleetRequest.prototype, "validFrom", {
        get: function () {
            return this.getStringAttribute('valid_from');
        },
        set: function (value) {
            this._validFrom = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotFleetRequest.prototype.resetValidFrom = function () {
        this._validFrom = undefined;
    };
    Object.defineProperty(SpotFleetRequest.prototype, "validFromInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._validFrom;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotFleetRequest.prototype, "validUntil", {
        get: function () {
            return this.getStringAttribute('valid_until');
        },
        set: function (value) {
            this._validUntil = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotFleetRequest.prototype.resetValidUntil = function () {
        this._validUntil = undefined;
    };
    Object.defineProperty(SpotFleetRequest.prototype, "validUntilInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._validUntil;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotFleetRequest.prototype, "waitForFulfillment", {
        get: function () {
            return this.getBooleanAttribute('wait_for_fulfillment');
        },
        set: function (value) {
            this._waitForFulfillment = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotFleetRequest.prototype.resetWaitForFulfillment = function () {
        this._waitForFulfillment = undefined;
    };
    Object.defineProperty(SpotFleetRequest.prototype, "waitForFulfillmentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._waitForFulfillment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotFleetRequest.prototype, "launchSpecification", {
        get: function () {
            return this.interpolationForAttribute('launch_specification');
        },
        set: function (value) {
            this._launchSpecification = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotFleetRequest.prototype.resetLaunchSpecification = function () {
        this._launchSpecification = undefined;
    };
    Object.defineProperty(SpotFleetRequest.prototype, "launchSpecificationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._launchSpecification;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotFleetRequest.prototype, "launchTemplateConfig", {
        get: function () {
            return this.interpolationForAttribute('launch_template_config');
        },
        set: function (value) {
            this._launchTemplateConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotFleetRequest.prototype.resetLaunchTemplateConfig = function () {
        this._launchTemplateConfig = undefined;
    };
    Object.defineProperty(SpotFleetRequest.prototype, "launchTemplateConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._launchTemplateConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotFleetRequest.prototype, "spotMaintenanceStrategies", {
        get: function () {
            return this.interpolationForAttribute('spot_maintenance_strategies');
        },
        set: function (value) {
            this._spotMaintenanceStrategies = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotFleetRequest.prototype.resetSpotMaintenanceStrategies = function () {
        this._spotMaintenanceStrategies = undefined;
    };
    Object.defineProperty(SpotFleetRequest.prototype, "spotMaintenanceStrategiesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._spotMaintenanceStrategies;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotFleetRequest.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotFleetRequest.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(SpotFleetRequest.prototype, "timeoutsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeouts;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SpotFleetRequest.prototype.synthesizeAttributes = function () {
        return {
            allocation_strategy: cdktf.stringToTerraform(this._allocationStrategy),
            excess_capacity_termination_policy: cdktf.stringToTerraform(this._excessCapacityTerminationPolicy),
            fleet_type: cdktf.stringToTerraform(this._fleetType),
            iam_fleet_role: cdktf.stringToTerraform(this._iamFleetRole),
            instance_interruption_behaviour: cdktf.stringToTerraform(this._instanceInterruptionBehaviour),
            instance_pools_to_use_count: cdktf.numberToTerraform(this._instancePoolsToUseCount),
            load_balancers: cdktf.listMapper(cdktf.stringToTerraform)(this._loadBalancers),
            on_demand_allocation_strategy: cdktf.stringToTerraform(this._onDemandAllocationStrategy),
            on_demand_max_total_price: cdktf.stringToTerraform(this._onDemandMaxTotalPrice),
            on_demand_target_capacity: cdktf.numberToTerraform(this._onDemandTargetCapacity),
            replace_unhealthy_instances: cdktf.booleanToTerraform(this._replaceUnhealthyInstances),
            spot_price: cdktf.stringToTerraform(this._spotPrice),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            target_capacity: cdktf.numberToTerraform(this._targetCapacity),
            target_group_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._targetGroupArns),
            terminate_instances_with_expiration: cdktf.booleanToTerraform(this._terminateInstancesWithExpiration),
            valid_from: cdktf.stringToTerraform(this._validFrom),
            valid_until: cdktf.stringToTerraform(this._validUntil),
            wait_for_fulfillment: cdktf.booleanToTerraform(this._waitForFulfillment),
            launch_specification: cdktf.listMapper(spotFleetRequestLaunchSpecificationToTerraform)(this._launchSpecification),
            launch_template_config: cdktf.listMapper(spotFleetRequestLaunchTemplateConfigToTerraform)(this._launchTemplateConfig),
            spot_maintenance_strategies: cdktf.listMapper(spotFleetRequestSpotMaintenanceStrategiesToTerraform)(this._spotMaintenanceStrategies),
            timeouts: spotFleetRequestTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SpotFleetRequest.tfResourceType = "aws_spot_fleet_request";
    return SpotFleetRequest;
}(cdktf.TerraformResource));
exports.SpotFleetRequest = SpotFleetRequest;
