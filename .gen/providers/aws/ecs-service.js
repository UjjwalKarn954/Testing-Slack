"use strict";
// https://www.terraform.io/docs/providers/aws/r/ecs_service.html
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
exports.EcsService = void 0;
var cdktf = require("cdktf");
function ecsServiceCapacityProviderStrategyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        base: cdktf.numberToTerraform(struct.base),
        capacity_provider: cdktf.stringToTerraform(struct.capacityProvider),
        weight: cdktf.numberToTerraform(struct.weight)
    };
}
function ecsServiceDeploymentCircuitBreakerToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enable: cdktf.booleanToTerraform(struct.enable),
        rollback: cdktf.booleanToTerraform(struct.rollback)
    };
}
function ecsServiceDeploymentControllerToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        type: cdktf.stringToTerraform(struct.type)
    };
}
function ecsServiceLoadBalancerToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        container_name: cdktf.stringToTerraform(struct.containerName),
        container_port: cdktf.numberToTerraform(struct.containerPort),
        elb_name: cdktf.stringToTerraform(struct.elbName),
        target_group_arn: cdktf.stringToTerraform(struct.targetGroupArn)
    };
}
function ecsServiceNetworkConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        assign_public_ip: cdktf.booleanToTerraform(struct.assignPublicIp),
        security_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroups),
        subnets: cdktf.listMapper(cdktf.stringToTerraform)(struct.subnets)
    };
}
function ecsServiceOrderedPlacementStrategyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        field: cdktf.stringToTerraform(struct.field),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function ecsServicePlacementConstraintsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        expression: cdktf.stringToTerraform(struct.expression),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function ecsServiceServiceRegistriesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        container_name: cdktf.stringToTerraform(struct.containerName),
        container_port: cdktf.numberToTerraform(struct.containerPort),
        port: cdktf.numberToTerraform(struct.port),
        registry_arn: cdktf.stringToTerraform(struct.registryArn)
    };
}
function ecsServiceTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        "delete": cdktf.stringToTerraform(struct["delete"])
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html aws_ecs_service}
*/
var EcsService = /** @class */ (function (_super) {
    __extends(EcsService, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html aws_ecs_service} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcsServiceConfig
    */
    function EcsService(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ecs_service',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._cluster = config.cluster;
        _this._deploymentMaximumPercent = config.deploymentMaximumPercent;
        _this._deploymentMinimumHealthyPercent = config.deploymentMinimumHealthyPercent;
        _this._desiredCount = config.desiredCount;
        _this._enableEcsManagedTags = config.enableEcsManagedTags;
        _this._enableExecuteCommand = config.enableExecuteCommand;
        _this._forceNewDeployment = config.forceNewDeployment;
        _this._healthCheckGracePeriodSeconds = config.healthCheckGracePeriodSeconds;
        _this._iamRole = config.iamRole;
        _this._launchType = config.launchType;
        _this._name = config.name;
        _this._platformVersion = config.platformVersion;
        _this._propagateTags = config.propagateTags;
        _this._schedulingStrategy = config.schedulingStrategy;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._taskDefinition = config.taskDefinition;
        _this._waitForSteadyState = config.waitForSteadyState;
        _this._capacityProviderStrategy = config.capacityProviderStrategy;
        _this._deploymentCircuitBreaker = config.deploymentCircuitBreaker;
        _this._deploymentController = config.deploymentController;
        _this._loadBalancer = config.loadBalancer;
        _this._networkConfiguration = config.networkConfiguration;
        _this._orderedPlacementStrategy = config.orderedPlacementStrategy;
        _this._placementConstraints = config.placementConstraints;
        _this._serviceRegistries = config.serviceRegistries;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(EcsService.prototype, "cluster", {
        get: function () {
            return this.getStringAttribute('cluster');
        },
        set: function (value) {
            this._cluster = value;
        },
        enumerable: false,
        configurable: true
    });
    EcsService.prototype.resetCluster = function () {
        this._cluster = undefined;
    };
    Object.defineProperty(EcsService.prototype, "clusterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cluster;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsService.prototype, "deploymentMaximumPercent", {
        get: function () {
            return this.getNumberAttribute('deployment_maximum_percent');
        },
        set: function (value) {
            this._deploymentMaximumPercent = value;
        },
        enumerable: false,
        configurable: true
    });
    EcsService.prototype.resetDeploymentMaximumPercent = function () {
        this._deploymentMaximumPercent = undefined;
    };
    Object.defineProperty(EcsService.prototype, "deploymentMaximumPercentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deploymentMaximumPercent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsService.prototype, "deploymentMinimumHealthyPercent", {
        get: function () {
            return this.getNumberAttribute('deployment_minimum_healthy_percent');
        },
        set: function (value) {
            this._deploymentMinimumHealthyPercent = value;
        },
        enumerable: false,
        configurable: true
    });
    EcsService.prototype.resetDeploymentMinimumHealthyPercent = function () {
        this._deploymentMinimumHealthyPercent = undefined;
    };
    Object.defineProperty(EcsService.prototype, "deploymentMinimumHealthyPercentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deploymentMinimumHealthyPercent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsService.prototype, "desiredCount", {
        get: function () {
            return this.getNumberAttribute('desired_count');
        },
        set: function (value) {
            this._desiredCount = value;
        },
        enumerable: false,
        configurable: true
    });
    EcsService.prototype.resetDesiredCount = function () {
        this._desiredCount = undefined;
    };
    Object.defineProperty(EcsService.prototype, "desiredCountInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._desiredCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsService.prototype, "enableEcsManagedTags", {
        get: function () {
            return this.getBooleanAttribute('enable_ecs_managed_tags');
        },
        set: function (value) {
            this._enableEcsManagedTags = value;
        },
        enumerable: false,
        configurable: true
    });
    EcsService.prototype.resetEnableEcsManagedTags = function () {
        this._enableEcsManagedTags = undefined;
    };
    Object.defineProperty(EcsService.prototype, "enableEcsManagedTagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enableEcsManagedTags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsService.prototype, "enableExecuteCommand", {
        get: function () {
            return this.getBooleanAttribute('enable_execute_command');
        },
        set: function (value) {
            this._enableExecuteCommand = value;
        },
        enumerable: false,
        configurable: true
    });
    EcsService.prototype.resetEnableExecuteCommand = function () {
        this._enableExecuteCommand = undefined;
    };
    Object.defineProperty(EcsService.prototype, "enableExecuteCommandInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enableExecuteCommand;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsService.prototype, "forceNewDeployment", {
        get: function () {
            return this.getBooleanAttribute('force_new_deployment');
        },
        set: function (value) {
            this._forceNewDeployment = value;
        },
        enumerable: false,
        configurable: true
    });
    EcsService.prototype.resetForceNewDeployment = function () {
        this._forceNewDeployment = undefined;
    };
    Object.defineProperty(EcsService.prototype, "forceNewDeploymentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._forceNewDeployment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsService.prototype, "healthCheckGracePeriodSeconds", {
        get: function () {
            return this.getNumberAttribute('health_check_grace_period_seconds');
        },
        set: function (value) {
            this._healthCheckGracePeriodSeconds = value;
        },
        enumerable: false,
        configurable: true
    });
    EcsService.prototype.resetHealthCheckGracePeriodSeconds = function () {
        this._healthCheckGracePeriodSeconds = undefined;
    };
    Object.defineProperty(EcsService.prototype, "healthCheckGracePeriodSecondsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._healthCheckGracePeriodSeconds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsService.prototype, "iamRole", {
        get: function () {
            return this.getStringAttribute('iam_role');
        },
        set: function (value) {
            this._iamRole = value;
        },
        enumerable: false,
        configurable: true
    });
    EcsService.prototype.resetIamRole = function () {
        this._iamRole = undefined;
    };
    Object.defineProperty(EcsService.prototype, "iamRoleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._iamRole;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsService.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsService.prototype, "launchType", {
        get: function () {
            return this.getStringAttribute('launch_type');
        },
        set: function (value) {
            this._launchType = value;
        },
        enumerable: false,
        configurable: true
    });
    EcsService.prototype.resetLaunchType = function () {
        this._launchType = undefined;
    };
    Object.defineProperty(EcsService.prototype, "launchTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._launchType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsService.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsService.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsService.prototype, "platformVersion", {
        get: function () {
            return this.getStringAttribute('platform_version');
        },
        set: function (value) {
            this._platformVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    EcsService.prototype.resetPlatformVersion = function () {
        this._platformVersion = undefined;
    };
    Object.defineProperty(EcsService.prototype, "platformVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._platformVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsService.prototype, "propagateTags", {
        get: function () {
            return this.getStringAttribute('propagate_tags');
        },
        set: function (value) {
            this._propagateTags = value;
        },
        enumerable: false,
        configurable: true
    });
    EcsService.prototype.resetPropagateTags = function () {
        this._propagateTags = undefined;
    };
    Object.defineProperty(EcsService.prototype, "propagateTagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._propagateTags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsService.prototype, "schedulingStrategy", {
        get: function () {
            return this.getStringAttribute('scheduling_strategy');
        },
        set: function (value) {
            this._schedulingStrategy = value;
        },
        enumerable: false,
        configurable: true
    });
    EcsService.prototype.resetSchedulingStrategy = function () {
        this._schedulingStrategy = undefined;
    };
    Object.defineProperty(EcsService.prototype, "schedulingStrategyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._schedulingStrategy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsService.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    EcsService.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(EcsService.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsService.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    EcsService.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(EcsService.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsService.prototype, "taskDefinition", {
        get: function () {
            return this.getStringAttribute('task_definition');
        },
        set: function (value) {
            this._taskDefinition = value;
        },
        enumerable: false,
        configurable: true
    });
    EcsService.prototype.resetTaskDefinition = function () {
        this._taskDefinition = undefined;
    };
    Object.defineProperty(EcsService.prototype, "taskDefinitionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._taskDefinition;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsService.prototype, "waitForSteadyState", {
        get: function () {
            return this.getBooleanAttribute('wait_for_steady_state');
        },
        set: function (value) {
            this._waitForSteadyState = value;
        },
        enumerable: false,
        configurable: true
    });
    EcsService.prototype.resetWaitForSteadyState = function () {
        this._waitForSteadyState = undefined;
    };
    Object.defineProperty(EcsService.prototype, "waitForSteadyStateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._waitForSteadyState;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsService.prototype, "capacityProviderStrategy", {
        get: function () {
            return this.interpolationForAttribute('capacity_provider_strategy');
        },
        set: function (value) {
            this._capacityProviderStrategy = value;
        },
        enumerable: false,
        configurable: true
    });
    EcsService.prototype.resetCapacityProviderStrategy = function () {
        this._capacityProviderStrategy = undefined;
    };
    Object.defineProperty(EcsService.prototype, "capacityProviderStrategyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._capacityProviderStrategy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsService.prototype, "deploymentCircuitBreaker", {
        get: function () {
            return this.interpolationForAttribute('deployment_circuit_breaker');
        },
        set: function (value) {
            this._deploymentCircuitBreaker = value;
        },
        enumerable: false,
        configurable: true
    });
    EcsService.prototype.resetDeploymentCircuitBreaker = function () {
        this._deploymentCircuitBreaker = undefined;
    };
    Object.defineProperty(EcsService.prototype, "deploymentCircuitBreakerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deploymentCircuitBreaker;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsService.prototype, "deploymentController", {
        get: function () {
            return this.interpolationForAttribute('deployment_controller');
        },
        set: function (value) {
            this._deploymentController = value;
        },
        enumerable: false,
        configurable: true
    });
    EcsService.prototype.resetDeploymentController = function () {
        this._deploymentController = undefined;
    };
    Object.defineProperty(EcsService.prototype, "deploymentControllerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deploymentController;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsService.prototype, "loadBalancer", {
        get: function () {
            return this.interpolationForAttribute('load_balancer');
        },
        set: function (value) {
            this._loadBalancer = value;
        },
        enumerable: false,
        configurable: true
    });
    EcsService.prototype.resetLoadBalancer = function () {
        this._loadBalancer = undefined;
    };
    Object.defineProperty(EcsService.prototype, "loadBalancerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._loadBalancer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsService.prototype, "networkConfiguration", {
        get: function () {
            return this.interpolationForAttribute('network_configuration');
        },
        set: function (value) {
            this._networkConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    EcsService.prototype.resetNetworkConfiguration = function () {
        this._networkConfiguration = undefined;
    };
    Object.defineProperty(EcsService.prototype, "networkConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._networkConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsService.prototype, "orderedPlacementStrategy", {
        get: function () {
            return this.interpolationForAttribute('ordered_placement_strategy');
        },
        set: function (value) {
            this._orderedPlacementStrategy = value;
        },
        enumerable: false,
        configurable: true
    });
    EcsService.prototype.resetOrderedPlacementStrategy = function () {
        this._orderedPlacementStrategy = undefined;
    };
    Object.defineProperty(EcsService.prototype, "orderedPlacementStrategyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._orderedPlacementStrategy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsService.prototype, "placementConstraints", {
        get: function () {
            return this.interpolationForAttribute('placement_constraints');
        },
        set: function (value) {
            this._placementConstraints = value;
        },
        enumerable: false,
        configurable: true
    });
    EcsService.prototype.resetPlacementConstraints = function () {
        this._placementConstraints = undefined;
    };
    Object.defineProperty(EcsService.prototype, "placementConstraintsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._placementConstraints;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsService.prototype, "serviceRegistries", {
        get: function () {
            return this.interpolationForAttribute('service_registries');
        },
        set: function (value) {
            this._serviceRegistries = value;
        },
        enumerable: false,
        configurable: true
    });
    EcsService.prototype.resetServiceRegistries = function () {
        this._serviceRegistries = undefined;
    };
    Object.defineProperty(EcsService.prototype, "serviceRegistriesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serviceRegistries;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsService.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    EcsService.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(EcsService.prototype, "timeoutsInput", {
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
    EcsService.prototype.synthesizeAttributes = function () {
        return {
            cluster: cdktf.stringToTerraform(this._cluster),
            deployment_maximum_percent: cdktf.numberToTerraform(this._deploymentMaximumPercent),
            deployment_minimum_healthy_percent: cdktf.numberToTerraform(this._deploymentMinimumHealthyPercent),
            desired_count: cdktf.numberToTerraform(this._desiredCount),
            enable_ecs_managed_tags: cdktf.booleanToTerraform(this._enableEcsManagedTags),
            enable_execute_command: cdktf.booleanToTerraform(this._enableExecuteCommand),
            force_new_deployment: cdktf.booleanToTerraform(this._forceNewDeployment),
            health_check_grace_period_seconds: cdktf.numberToTerraform(this._healthCheckGracePeriodSeconds),
            iam_role: cdktf.stringToTerraform(this._iamRole),
            launch_type: cdktf.stringToTerraform(this._launchType),
            name: cdktf.stringToTerraform(this._name),
            platform_version: cdktf.stringToTerraform(this._platformVersion),
            propagate_tags: cdktf.stringToTerraform(this._propagateTags),
            scheduling_strategy: cdktf.stringToTerraform(this._schedulingStrategy),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            task_definition: cdktf.stringToTerraform(this._taskDefinition),
            wait_for_steady_state: cdktf.booleanToTerraform(this._waitForSteadyState),
            capacity_provider_strategy: cdktf.listMapper(ecsServiceCapacityProviderStrategyToTerraform)(this._capacityProviderStrategy),
            deployment_circuit_breaker: cdktf.listMapper(ecsServiceDeploymentCircuitBreakerToTerraform)(this._deploymentCircuitBreaker),
            deployment_controller: cdktf.listMapper(ecsServiceDeploymentControllerToTerraform)(this._deploymentController),
            load_balancer: cdktf.listMapper(ecsServiceLoadBalancerToTerraform)(this._loadBalancer),
            network_configuration: cdktf.listMapper(ecsServiceNetworkConfigurationToTerraform)(this._networkConfiguration),
            ordered_placement_strategy: cdktf.listMapper(ecsServiceOrderedPlacementStrategyToTerraform)(this._orderedPlacementStrategy),
            placement_constraints: cdktf.listMapper(ecsServicePlacementConstraintsToTerraform)(this._placementConstraints),
            service_registries: cdktf.listMapper(ecsServiceServiceRegistriesToTerraform)(this._serviceRegistries),
            timeouts: ecsServiceTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    EcsService.tfResourceType = "aws_ecs_service";
    return EcsService;
}(cdktf.TerraformResource));
exports.EcsService = EcsService;
