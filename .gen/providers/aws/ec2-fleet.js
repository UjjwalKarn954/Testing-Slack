"use strict";
// https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html
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
exports.Ec2Fleet = void 0;
var cdktf = require("cdktf");
function ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        launch_template_id: cdktf.stringToTerraform(struct.launchTemplateId),
        launch_template_name: cdktf.stringToTerraform(struct.launchTemplateName),
        version: cdktf.stringToTerraform(struct.version)
    };
}
function ec2FleetLaunchTemplateConfigOverrideToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        availability_zone: cdktf.stringToTerraform(struct.availabilityZone),
        instance_type: cdktf.stringToTerraform(struct.instanceType),
        max_price: cdktf.stringToTerraform(struct.maxPrice),
        priority: cdktf.numberToTerraform(struct.priority),
        subnet_id: cdktf.stringToTerraform(struct.subnetId),
        weighted_capacity: cdktf.numberToTerraform(struct.weightedCapacity)
    };
}
function ec2FleetLaunchTemplateConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        launch_template_specification: cdktf.listMapper(ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationToTerraform)(struct.launchTemplateSpecification),
        override: cdktf.listMapper(ec2FleetLaunchTemplateConfigOverrideToTerraform)(struct.override)
    };
}
function ec2FleetOnDemandOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        allocation_strategy: cdktf.stringToTerraform(struct.allocationStrategy)
    };
}
function ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        replacement_strategy: cdktf.stringToTerraform(struct.replacementStrategy)
    };
}
function ec2FleetSpotOptionsMaintenanceStrategiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        capacity_rebalance: cdktf.listMapper(ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceToTerraform)(struct.capacityRebalance)
    };
}
function ec2FleetSpotOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        allocation_strategy: cdktf.stringToTerraform(struct.allocationStrategy),
        instance_interruption_behavior: cdktf.stringToTerraform(struct.instanceInterruptionBehavior),
        instance_pools_to_use_count: cdktf.numberToTerraform(struct.instancePoolsToUseCount),
        maintenance_strategies: cdktf.listMapper(ec2FleetSpotOptionsMaintenanceStrategiesToTerraform)(struct.maintenanceStrategies)
    };
}
function ec2FleetTargetCapacitySpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        default_target_capacity_type: cdktf.stringToTerraform(struct.defaultTargetCapacityType),
        on_demand_target_capacity: cdktf.numberToTerraform(struct.onDemandTargetCapacity),
        spot_target_capacity: cdktf.numberToTerraform(struct.spotTargetCapacity),
        total_target_capacity: cdktf.numberToTerraform(struct.totalTargetCapacity)
    };
}
function ec2FleetTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        "delete": cdktf.stringToTerraform(struct["delete"]),
        update: cdktf.stringToTerraform(struct.update)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html aws_ec2_fleet}
*/
var Ec2Fleet = /** @class */ (function (_super) {
    __extends(Ec2Fleet, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html aws_ec2_fleet} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2FleetConfig
    */
    function Ec2Fleet(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ec2_fleet',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._excessCapacityTerminationPolicy = config.excessCapacityTerminationPolicy;
        _this._replaceUnhealthyInstances = config.replaceUnhealthyInstances;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._terminateInstances = config.terminateInstances;
        _this._terminateInstancesWithExpiration = config.terminateInstancesWithExpiration;
        _this._type = config.type;
        _this._launchTemplateConfig = config.launchTemplateConfig;
        _this._onDemandOptions = config.onDemandOptions;
        _this._spotOptions = config.spotOptions;
        _this._targetCapacitySpecification = config.targetCapacitySpecification;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(Ec2Fleet.prototype, "excessCapacityTerminationPolicy", {
        get: function () {
            return this.getStringAttribute('excess_capacity_termination_policy');
        },
        set: function (value) {
            this._excessCapacityTerminationPolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2Fleet.prototype.resetExcessCapacityTerminationPolicy = function () {
        this._excessCapacityTerminationPolicy = undefined;
    };
    Object.defineProperty(Ec2Fleet.prototype, "excessCapacityTerminationPolicyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._excessCapacityTerminationPolicy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2Fleet.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2Fleet.prototype, "replaceUnhealthyInstances", {
        get: function () {
            return this.getBooleanAttribute('replace_unhealthy_instances');
        },
        set: function (value) {
            this._replaceUnhealthyInstances = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2Fleet.prototype.resetReplaceUnhealthyInstances = function () {
        this._replaceUnhealthyInstances = undefined;
    };
    Object.defineProperty(Ec2Fleet.prototype, "replaceUnhealthyInstancesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._replaceUnhealthyInstances;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2Fleet.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2Fleet.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(Ec2Fleet.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2Fleet.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2Fleet.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(Ec2Fleet.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2Fleet.prototype, "terminateInstances", {
        get: function () {
            return this.getBooleanAttribute('terminate_instances');
        },
        set: function (value) {
            this._terminateInstances = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2Fleet.prototype.resetTerminateInstances = function () {
        this._terminateInstances = undefined;
    };
    Object.defineProperty(Ec2Fleet.prototype, "terminateInstancesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._terminateInstances;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2Fleet.prototype, "terminateInstancesWithExpiration", {
        get: function () {
            return this.getBooleanAttribute('terminate_instances_with_expiration');
        },
        set: function (value) {
            this._terminateInstancesWithExpiration = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2Fleet.prototype.resetTerminateInstancesWithExpiration = function () {
        this._terminateInstancesWithExpiration = undefined;
    };
    Object.defineProperty(Ec2Fleet.prototype, "terminateInstancesWithExpirationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._terminateInstancesWithExpiration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2Fleet.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2Fleet.prototype.resetType = function () {
        this._type = undefined;
    };
    Object.defineProperty(Ec2Fleet.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2Fleet.prototype, "launchTemplateConfig", {
        get: function () {
            return this.interpolationForAttribute('launch_template_config');
        },
        set: function (value) {
            this._launchTemplateConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2Fleet.prototype, "launchTemplateConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._launchTemplateConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2Fleet.prototype, "onDemandOptions", {
        get: function () {
            return this.interpolationForAttribute('on_demand_options');
        },
        set: function (value) {
            this._onDemandOptions = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2Fleet.prototype.resetOnDemandOptions = function () {
        this._onDemandOptions = undefined;
    };
    Object.defineProperty(Ec2Fleet.prototype, "onDemandOptionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._onDemandOptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2Fleet.prototype, "spotOptions", {
        get: function () {
            return this.interpolationForAttribute('spot_options');
        },
        set: function (value) {
            this._spotOptions = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2Fleet.prototype.resetSpotOptions = function () {
        this._spotOptions = undefined;
    };
    Object.defineProperty(Ec2Fleet.prototype, "spotOptionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._spotOptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2Fleet.prototype, "targetCapacitySpecification", {
        get: function () {
            return this.interpolationForAttribute('target_capacity_specification');
        },
        set: function (value) {
            this._targetCapacitySpecification = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2Fleet.prototype, "targetCapacitySpecificationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetCapacitySpecification;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2Fleet.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2Fleet.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(Ec2Fleet.prototype, "timeoutsInput", {
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
    Ec2Fleet.prototype.synthesizeAttributes = function () {
        return {
            excess_capacity_termination_policy: cdktf.stringToTerraform(this._excessCapacityTerminationPolicy),
            replace_unhealthy_instances: cdktf.booleanToTerraform(this._replaceUnhealthyInstances),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            terminate_instances: cdktf.booleanToTerraform(this._terminateInstances),
            terminate_instances_with_expiration: cdktf.booleanToTerraform(this._terminateInstancesWithExpiration),
            type: cdktf.stringToTerraform(this._type),
            launch_template_config: cdktf.listMapper(ec2FleetLaunchTemplateConfigToTerraform)(this._launchTemplateConfig),
            on_demand_options: cdktf.listMapper(ec2FleetOnDemandOptionsToTerraform)(this._onDemandOptions),
            spot_options: cdktf.listMapper(ec2FleetSpotOptionsToTerraform)(this._spotOptions),
            target_capacity_specification: cdktf.listMapper(ec2FleetTargetCapacitySpecificationToTerraform)(this._targetCapacitySpecification),
            timeouts: ec2FleetTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Ec2Fleet.tfResourceType = "aws_ec2_fleet";
    return Ec2Fleet;
}(cdktf.TerraformResource));
exports.Ec2Fleet = Ec2Fleet;
