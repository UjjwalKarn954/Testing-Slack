"use strict";
// https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html
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
exports.GameliftFleet = void 0;
var cdktf = require("cdktf");
function gameliftFleetEc2InboundPermissionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        from_port: cdktf.numberToTerraform(struct.fromPort),
        ip_range: cdktf.stringToTerraform(struct.ipRange),
        protocol: cdktf.stringToTerraform(struct.protocol),
        to_port: cdktf.numberToTerraform(struct.toPort)
    };
}
function gameliftFleetResourceCreationLimitPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        new_game_sessions_per_creator: cdktf.numberToTerraform(struct.newGameSessionsPerCreator),
        policy_period_in_minutes: cdktf.numberToTerraform(struct.policyPeriodInMinutes)
    };
}
function gameliftFleetRuntimeConfigurationServerProcessToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        concurrent_executions: cdktf.numberToTerraform(struct.concurrentExecutions),
        launch_path: cdktf.stringToTerraform(struct.launchPath),
        parameters: cdktf.stringToTerraform(struct.parameters)
    };
}
function gameliftFleetRuntimeConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        game_session_activation_timeout_seconds: cdktf.numberToTerraform(struct.gameSessionActivationTimeoutSeconds),
        max_concurrent_game_session_activations: cdktf.numberToTerraform(struct.maxConcurrentGameSessionActivations),
        server_process: cdktf.listMapper(gameliftFleetRuntimeConfigurationServerProcessToTerraform)(struct.serverProcess)
    };
}
function gameliftFleetTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        "delete": cdktf.stringToTerraform(struct["delete"])
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html aws_gamelift_fleet}
*/
var GameliftFleet = /** @class */ (function (_super) {
    __extends(GameliftFleet, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html aws_gamelift_fleet} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GameliftFleetConfig
    */
    function GameliftFleet(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_gamelift_fleet',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._buildId = config.buildId;
        _this._description = config.description;
        _this._ec2InstanceType = config.ec2InstanceType;
        _this._fleetType = config.fleetType;
        _this._instanceRoleArn = config.instanceRoleArn;
        _this._metricGroups = config.metricGroups;
        _this._name = config.name;
        _this._newGameSessionProtectionPolicy = config.newGameSessionProtectionPolicy;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._ec2InboundPermission = config.ec2InboundPermission;
        _this._resourceCreationLimitPolicy = config.resourceCreationLimitPolicy;
        _this._runtimeConfiguration = config.runtimeConfiguration;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(GameliftFleet.prototype, "arn", {
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
    Object.defineProperty(GameliftFleet.prototype, "buildId", {
        get: function () {
            return this.getStringAttribute('build_id');
        },
        set: function (value) {
            this._buildId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameliftFleet.prototype, "buildIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._buildId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameliftFleet.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    GameliftFleet.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(GameliftFleet.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameliftFleet.prototype, "ec2InstanceType", {
        get: function () {
            return this.getStringAttribute('ec2_instance_type');
        },
        set: function (value) {
            this._ec2InstanceType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameliftFleet.prototype, "ec2InstanceTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ec2InstanceType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameliftFleet.prototype, "fleetType", {
        get: function () {
            return this.getStringAttribute('fleet_type');
        },
        set: function (value) {
            this._fleetType = value;
        },
        enumerable: false,
        configurable: true
    });
    GameliftFleet.prototype.resetFleetType = function () {
        this._fleetType = undefined;
    };
    Object.defineProperty(GameliftFleet.prototype, "fleetTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fleetType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameliftFleet.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameliftFleet.prototype, "instanceRoleArn", {
        get: function () {
            return this.getStringAttribute('instance_role_arn');
        },
        set: function (value) {
            this._instanceRoleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    GameliftFleet.prototype.resetInstanceRoleArn = function () {
        this._instanceRoleArn = undefined;
    };
    Object.defineProperty(GameliftFleet.prototype, "instanceRoleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceRoleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameliftFleet.prototype, "logPaths", {
        // log_paths - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('log_paths');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameliftFleet.prototype, "metricGroups", {
        get: function () {
            return this.getListAttribute('metric_groups');
        },
        set: function (value) {
            this._metricGroups = value;
        },
        enumerable: false,
        configurable: true
    });
    GameliftFleet.prototype.resetMetricGroups = function () {
        this._metricGroups = undefined;
    };
    Object.defineProperty(GameliftFleet.prototype, "metricGroupsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._metricGroups;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameliftFleet.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameliftFleet.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameliftFleet.prototype, "newGameSessionProtectionPolicy", {
        get: function () {
            return this.getStringAttribute('new_game_session_protection_policy');
        },
        set: function (value) {
            this._newGameSessionProtectionPolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    GameliftFleet.prototype.resetNewGameSessionProtectionPolicy = function () {
        this._newGameSessionProtectionPolicy = undefined;
    };
    Object.defineProperty(GameliftFleet.prototype, "newGameSessionProtectionPolicyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._newGameSessionProtectionPolicy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameliftFleet.prototype, "operatingSystem", {
        // operating_system - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('operating_system');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameliftFleet.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    GameliftFleet.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(GameliftFleet.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameliftFleet.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    GameliftFleet.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(GameliftFleet.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameliftFleet.prototype, "ec2InboundPermission", {
        get: function () {
            return this.interpolationForAttribute('ec2_inbound_permission');
        },
        set: function (value) {
            this._ec2InboundPermission = value;
        },
        enumerable: false,
        configurable: true
    });
    GameliftFleet.prototype.resetEc2InboundPermission = function () {
        this._ec2InboundPermission = undefined;
    };
    Object.defineProperty(GameliftFleet.prototype, "ec2InboundPermissionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ec2InboundPermission;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameliftFleet.prototype, "resourceCreationLimitPolicy", {
        get: function () {
            return this.interpolationForAttribute('resource_creation_limit_policy');
        },
        set: function (value) {
            this._resourceCreationLimitPolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    GameliftFleet.prototype.resetResourceCreationLimitPolicy = function () {
        this._resourceCreationLimitPolicy = undefined;
    };
    Object.defineProperty(GameliftFleet.prototype, "resourceCreationLimitPolicyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resourceCreationLimitPolicy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameliftFleet.prototype, "runtimeConfiguration", {
        get: function () {
            return this.interpolationForAttribute('runtime_configuration');
        },
        set: function (value) {
            this._runtimeConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    GameliftFleet.prototype.resetRuntimeConfiguration = function () {
        this._runtimeConfiguration = undefined;
    };
    Object.defineProperty(GameliftFleet.prototype, "runtimeConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._runtimeConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameliftFleet.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    GameliftFleet.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(GameliftFleet.prototype, "timeoutsInput", {
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
    GameliftFleet.prototype.synthesizeAttributes = function () {
        return {
            build_id: cdktf.stringToTerraform(this._buildId),
            description: cdktf.stringToTerraform(this._description),
            ec2_instance_type: cdktf.stringToTerraform(this._ec2InstanceType),
            fleet_type: cdktf.stringToTerraform(this._fleetType),
            instance_role_arn: cdktf.stringToTerraform(this._instanceRoleArn),
            metric_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._metricGroups),
            name: cdktf.stringToTerraform(this._name),
            new_game_session_protection_policy: cdktf.stringToTerraform(this._newGameSessionProtectionPolicy),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            ec2_inbound_permission: cdktf.listMapper(gameliftFleetEc2InboundPermissionToTerraform)(this._ec2InboundPermission),
            resource_creation_limit_policy: cdktf.listMapper(gameliftFleetResourceCreationLimitPolicyToTerraform)(this._resourceCreationLimitPolicy),
            runtime_configuration: cdktf.listMapper(gameliftFleetRuntimeConfigurationToTerraform)(this._runtimeConfiguration),
            timeouts: gameliftFleetTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    GameliftFleet.tfResourceType = "aws_gamelift_fleet";
    return GameliftFleet;
}(cdktf.TerraformResource));
exports.GameliftFleet = GameliftFleet;
