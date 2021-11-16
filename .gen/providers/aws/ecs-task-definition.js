"use strict";
// https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html
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
exports.EcsTaskDefinition = void 0;
var cdktf = require("cdktf");
function ecsTaskDefinitionEphemeralStorageToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        size_in_gib: cdktf.numberToTerraform(struct.sizeInGib)
    };
}
function ecsTaskDefinitionInferenceAcceleratorToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        device_name: cdktf.stringToTerraform(struct.deviceName),
        device_type: cdktf.stringToTerraform(struct.deviceType)
    };
}
function ecsTaskDefinitionPlacementConstraintsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        expression: cdktf.stringToTerraform(struct.expression),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function ecsTaskDefinitionProxyConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        container_name: cdktf.stringToTerraform(struct.containerName),
        properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct.properties),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function ecsTaskDefinitionVolumeDockerVolumeConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        autoprovision: cdktf.booleanToTerraform(struct.autoprovision),
        driver: cdktf.stringToTerraform(struct.driver),
        driver_opts: cdktf.hashMapper(cdktf.anyToTerraform)(struct.driverOpts),
        labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct.labels),
        scope: cdktf.stringToTerraform(struct.scope)
    };
}
function ecsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        access_point_id: cdktf.stringToTerraform(struct.accessPointId),
        iam: cdktf.stringToTerraform(struct.iam)
    };
}
function ecsTaskDefinitionVolumeEfsVolumeConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        file_system_id: cdktf.stringToTerraform(struct.fileSystemId),
        root_directory: cdktf.stringToTerraform(struct.rootDirectory),
        transit_encryption: cdktf.stringToTerraform(struct.transitEncryption),
        transit_encryption_port: cdktf.numberToTerraform(struct.transitEncryptionPort),
        authorization_config: cdktf.listMapper(ecsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigToTerraform)(struct.authorizationConfig)
    };
}
function ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        credentials_parameter: cdktf.stringToTerraform(struct.credentialsParameter),
        domain: cdktf.stringToTerraform(struct.domain)
    };
}
function ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        file_system_id: cdktf.stringToTerraform(struct.fileSystemId),
        root_directory: cdktf.stringToTerraform(struct.rootDirectory),
        authorization_config: cdktf.listMapper(ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigToTerraform)(struct.authorizationConfig)
    };
}
function ecsTaskDefinitionVolumeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        host_path: cdktf.stringToTerraform(struct.hostPath),
        name: cdktf.stringToTerraform(struct.name),
        docker_volume_configuration: cdktf.listMapper(ecsTaskDefinitionVolumeDockerVolumeConfigurationToTerraform)(struct.dockerVolumeConfiguration),
        efs_volume_configuration: cdktf.listMapper(ecsTaskDefinitionVolumeEfsVolumeConfigurationToTerraform)(struct.efsVolumeConfiguration),
        fsx_windows_file_server_volume_configuration: cdktf.listMapper(ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationToTerraform)(struct.fsxWindowsFileServerVolumeConfiguration)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html aws_ecs_task_definition}
*/
var EcsTaskDefinition = /** @class */ (function (_super) {
    __extends(EcsTaskDefinition, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html aws_ecs_task_definition} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcsTaskDefinitionConfig
    */
    function EcsTaskDefinition(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ecs_task_definition',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._containerDefinitions = config.containerDefinitions;
        _this._cpu = config.cpu;
        _this._executionRoleArn = config.executionRoleArn;
        _this._family = config.family;
        _this._ipcMode = config.ipcMode;
        _this._memory = config.memory;
        _this._networkMode = config.networkMode;
        _this._pidMode = config.pidMode;
        _this._requiresCompatibilities = config.requiresCompatibilities;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._taskRoleArn = config.taskRoleArn;
        _this._ephemeralStorage = config.ephemeralStorage;
        _this._inferenceAccelerator = config.inferenceAccelerator;
        _this._placementConstraints = config.placementConstraints;
        _this._proxyConfiguration = config.proxyConfiguration;
        _this._volume = config.volume;
        return _this;
    }
    Object.defineProperty(EcsTaskDefinition.prototype, "arn", {
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
    Object.defineProperty(EcsTaskDefinition.prototype, "containerDefinitions", {
        get: function () {
            return this.getStringAttribute('container_definitions');
        },
        set: function (value) {
            this._containerDefinitions = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsTaskDefinition.prototype, "containerDefinitionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._containerDefinitions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsTaskDefinition.prototype, "cpu", {
        get: function () {
            return this.getStringAttribute('cpu');
        },
        set: function (value) {
            this._cpu = value;
        },
        enumerable: false,
        configurable: true
    });
    EcsTaskDefinition.prototype.resetCpu = function () {
        this._cpu = undefined;
    };
    Object.defineProperty(EcsTaskDefinition.prototype, "cpuInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cpu;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsTaskDefinition.prototype, "executionRoleArn", {
        get: function () {
            return this.getStringAttribute('execution_role_arn');
        },
        set: function (value) {
            this._executionRoleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    EcsTaskDefinition.prototype.resetExecutionRoleArn = function () {
        this._executionRoleArn = undefined;
    };
    Object.defineProperty(EcsTaskDefinition.prototype, "executionRoleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._executionRoleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsTaskDefinition.prototype, "family", {
        get: function () {
            return this.getStringAttribute('family');
        },
        set: function (value) {
            this._family = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsTaskDefinition.prototype, "familyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._family;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsTaskDefinition.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsTaskDefinition.prototype, "ipcMode", {
        get: function () {
            return this.getStringAttribute('ipc_mode');
        },
        set: function (value) {
            this._ipcMode = value;
        },
        enumerable: false,
        configurable: true
    });
    EcsTaskDefinition.prototype.resetIpcMode = function () {
        this._ipcMode = undefined;
    };
    Object.defineProperty(EcsTaskDefinition.prototype, "ipcModeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipcMode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsTaskDefinition.prototype, "memory", {
        get: function () {
            return this.getStringAttribute('memory');
        },
        set: function (value) {
            this._memory = value;
        },
        enumerable: false,
        configurable: true
    });
    EcsTaskDefinition.prototype.resetMemory = function () {
        this._memory = undefined;
    };
    Object.defineProperty(EcsTaskDefinition.prototype, "memoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._memory;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsTaskDefinition.prototype, "networkMode", {
        get: function () {
            return this.getStringAttribute('network_mode');
        },
        set: function (value) {
            this._networkMode = value;
        },
        enumerable: false,
        configurable: true
    });
    EcsTaskDefinition.prototype.resetNetworkMode = function () {
        this._networkMode = undefined;
    };
    Object.defineProperty(EcsTaskDefinition.prototype, "networkModeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._networkMode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsTaskDefinition.prototype, "pidMode", {
        get: function () {
            return this.getStringAttribute('pid_mode');
        },
        set: function (value) {
            this._pidMode = value;
        },
        enumerable: false,
        configurable: true
    });
    EcsTaskDefinition.prototype.resetPidMode = function () {
        this._pidMode = undefined;
    };
    Object.defineProperty(EcsTaskDefinition.prototype, "pidModeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pidMode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsTaskDefinition.prototype, "requiresCompatibilities", {
        get: function () {
            return this.getListAttribute('requires_compatibilities');
        },
        set: function (value) {
            this._requiresCompatibilities = value;
        },
        enumerable: false,
        configurable: true
    });
    EcsTaskDefinition.prototype.resetRequiresCompatibilities = function () {
        this._requiresCompatibilities = undefined;
    };
    Object.defineProperty(EcsTaskDefinition.prototype, "requiresCompatibilitiesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requiresCompatibilities;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsTaskDefinition.prototype, "revision", {
        // revision - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('revision');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsTaskDefinition.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    EcsTaskDefinition.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(EcsTaskDefinition.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsTaskDefinition.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    EcsTaskDefinition.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(EcsTaskDefinition.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsTaskDefinition.prototype, "taskRoleArn", {
        get: function () {
            return this.getStringAttribute('task_role_arn');
        },
        set: function (value) {
            this._taskRoleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    EcsTaskDefinition.prototype.resetTaskRoleArn = function () {
        this._taskRoleArn = undefined;
    };
    Object.defineProperty(EcsTaskDefinition.prototype, "taskRoleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._taskRoleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsTaskDefinition.prototype, "ephemeralStorage", {
        get: function () {
            return this.interpolationForAttribute('ephemeral_storage');
        },
        set: function (value) {
            this._ephemeralStorage = value;
        },
        enumerable: false,
        configurable: true
    });
    EcsTaskDefinition.prototype.resetEphemeralStorage = function () {
        this._ephemeralStorage = undefined;
    };
    Object.defineProperty(EcsTaskDefinition.prototype, "ephemeralStorageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ephemeralStorage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsTaskDefinition.prototype, "inferenceAccelerator", {
        get: function () {
            return this.interpolationForAttribute('inference_accelerator');
        },
        set: function (value) {
            this._inferenceAccelerator = value;
        },
        enumerable: false,
        configurable: true
    });
    EcsTaskDefinition.prototype.resetInferenceAccelerator = function () {
        this._inferenceAccelerator = undefined;
    };
    Object.defineProperty(EcsTaskDefinition.prototype, "inferenceAcceleratorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._inferenceAccelerator;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsTaskDefinition.prototype, "placementConstraints", {
        get: function () {
            return this.interpolationForAttribute('placement_constraints');
        },
        set: function (value) {
            this._placementConstraints = value;
        },
        enumerable: false,
        configurable: true
    });
    EcsTaskDefinition.prototype.resetPlacementConstraints = function () {
        this._placementConstraints = undefined;
    };
    Object.defineProperty(EcsTaskDefinition.prototype, "placementConstraintsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._placementConstraints;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsTaskDefinition.prototype, "proxyConfiguration", {
        get: function () {
            return this.interpolationForAttribute('proxy_configuration');
        },
        set: function (value) {
            this._proxyConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    EcsTaskDefinition.prototype.resetProxyConfiguration = function () {
        this._proxyConfiguration = undefined;
    };
    Object.defineProperty(EcsTaskDefinition.prototype, "proxyConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._proxyConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsTaskDefinition.prototype, "volume", {
        get: function () {
            return this.interpolationForAttribute('volume');
        },
        set: function (value) {
            this._volume = value;
        },
        enumerable: false,
        configurable: true
    });
    EcsTaskDefinition.prototype.resetVolume = function () {
        this._volume = undefined;
    };
    Object.defineProperty(EcsTaskDefinition.prototype, "volumeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._volume;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    EcsTaskDefinition.prototype.synthesizeAttributes = function () {
        return {
            container_definitions: cdktf.stringToTerraform(this._containerDefinitions),
            cpu: cdktf.stringToTerraform(this._cpu),
            execution_role_arn: cdktf.stringToTerraform(this._executionRoleArn),
            family: cdktf.stringToTerraform(this._family),
            ipc_mode: cdktf.stringToTerraform(this._ipcMode),
            memory: cdktf.stringToTerraform(this._memory),
            network_mode: cdktf.stringToTerraform(this._networkMode),
            pid_mode: cdktf.stringToTerraform(this._pidMode),
            requires_compatibilities: cdktf.listMapper(cdktf.stringToTerraform)(this._requiresCompatibilities),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            task_role_arn: cdktf.stringToTerraform(this._taskRoleArn),
            ephemeral_storage: cdktf.listMapper(ecsTaskDefinitionEphemeralStorageToTerraform)(this._ephemeralStorage),
            inference_accelerator: cdktf.listMapper(ecsTaskDefinitionInferenceAcceleratorToTerraform)(this._inferenceAccelerator),
            placement_constraints: cdktf.listMapper(ecsTaskDefinitionPlacementConstraintsToTerraform)(this._placementConstraints),
            proxy_configuration: cdktf.listMapper(ecsTaskDefinitionProxyConfigurationToTerraform)(this._proxyConfiguration),
            volume: cdktf.listMapper(ecsTaskDefinitionVolumeToTerraform)(this._volume)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    EcsTaskDefinition.tfResourceType = "aws_ecs_task_definition";
    return EcsTaskDefinition;
}(cdktf.TerraformResource));
exports.EcsTaskDefinition = EcsTaskDefinition;
