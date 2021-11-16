"use strict";
// https://www.terraform.io/docs/providers/aws/r/apprunner_service.html
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
exports.ApprunnerService = void 0;
var cdktf = require("cdktf");
function apprunnerServiceEncryptionConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        kms_key: cdktf.stringToTerraform(struct.kmsKey)
    };
}
function apprunnerServiceHealthCheckConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        healthy_threshold: cdktf.numberToTerraform(struct.healthyThreshold),
        interval: cdktf.numberToTerraform(struct.interval),
        path: cdktf.stringToTerraform(struct.path),
        protocol: cdktf.stringToTerraform(struct.protocol),
        timeout: cdktf.numberToTerraform(struct.timeout),
        unhealthy_threshold: cdktf.numberToTerraform(struct.unhealthyThreshold)
    };
}
function apprunnerServiceInstanceConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cpu: cdktf.stringToTerraform(struct.cpu),
        instance_role_arn: cdktf.stringToTerraform(struct.instanceRoleArn),
        memory: cdktf.stringToTerraform(struct.memory)
    };
}
function apprunnerServiceSourceConfigurationAuthenticationConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        access_role_arn: cdktf.stringToTerraform(struct.accessRoleArn),
        connection_arn: cdktf.stringToTerraform(struct.connectionArn)
    };
}
function apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        build_command: cdktf.stringToTerraform(struct.buildCommand),
        port: cdktf.stringToTerraform(struct.port),
        runtime: cdktf.stringToTerraform(struct.runtime),
        runtime_environment_variables: cdktf.hashMapper(cdktf.anyToTerraform)(struct.runtimeEnvironmentVariables),
        start_command: cdktf.stringToTerraform(struct.startCommand)
    };
}
function apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        configuration_source: cdktf.stringToTerraform(struct.configurationSource),
        code_configuration_values: cdktf.listMapper(apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesToTerraform)(struct.codeConfigurationValues)
    };
}
function apprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function apprunnerServiceSourceConfigurationCodeRepositoryToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        repository_url: cdktf.stringToTerraform(struct.repositoryUrl),
        code_configuration: cdktf.listMapper(apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationToTerraform)(struct.codeConfiguration),
        source_code_version: cdktf.listMapper(apprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionToTerraform)(struct.sourceCodeVersion)
    };
}
function apprunnerServiceSourceConfigurationImageRepositoryImageConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        port: cdktf.stringToTerraform(struct.port),
        runtime_environment_variables: cdktf.hashMapper(cdktf.anyToTerraform)(struct.runtimeEnvironmentVariables),
        start_command: cdktf.stringToTerraform(struct.startCommand)
    };
}
function apprunnerServiceSourceConfigurationImageRepositoryToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        image_identifier: cdktf.stringToTerraform(struct.imageIdentifier),
        image_repository_type: cdktf.stringToTerraform(struct.imageRepositoryType),
        image_configuration: cdktf.listMapper(apprunnerServiceSourceConfigurationImageRepositoryImageConfigurationToTerraform)(struct.imageConfiguration)
    };
}
function apprunnerServiceSourceConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        auto_deployments_enabled: cdktf.booleanToTerraform(struct.autoDeploymentsEnabled),
        authentication_configuration: cdktf.listMapper(apprunnerServiceSourceConfigurationAuthenticationConfigurationToTerraform)(struct.authenticationConfiguration),
        code_repository: cdktf.listMapper(apprunnerServiceSourceConfigurationCodeRepositoryToTerraform)(struct.codeRepository),
        image_repository: cdktf.listMapper(apprunnerServiceSourceConfigurationImageRepositoryToTerraform)(struct.imageRepository)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html aws_apprunner_service}
*/
var ApprunnerService = /** @class */ (function (_super) {
    __extends(ApprunnerService, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html aws_apprunner_service} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApprunnerServiceConfig
    */
    function ApprunnerService(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_apprunner_service',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._autoScalingConfigurationArn = config.autoScalingConfigurationArn;
        _this._serviceName = config.serviceName;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._encryptionConfiguration = config.encryptionConfiguration;
        _this._healthCheckConfiguration = config.healthCheckConfiguration;
        _this._instanceConfiguration = config.instanceConfiguration;
        _this._sourceConfiguration = config.sourceConfiguration;
        return _this;
    }
    Object.defineProperty(ApprunnerService.prototype, "arn", {
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
    Object.defineProperty(ApprunnerService.prototype, "autoScalingConfigurationArn", {
        get: function () {
            return this.getStringAttribute('auto_scaling_configuration_arn');
        },
        set: function (value) {
            this._autoScalingConfigurationArn = value;
        },
        enumerable: false,
        configurable: true
    });
    ApprunnerService.prototype.resetAutoScalingConfigurationArn = function () {
        this._autoScalingConfigurationArn = undefined;
    };
    Object.defineProperty(ApprunnerService.prototype, "autoScalingConfigurationArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoScalingConfigurationArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApprunnerService.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApprunnerService.prototype, "serviceId", {
        // service_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('service_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApprunnerService.prototype, "serviceName", {
        get: function () {
            return this.getStringAttribute('service_name');
        },
        set: function (value) {
            this._serviceName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApprunnerService.prototype, "serviceNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serviceName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApprunnerService.prototype, "serviceUrl", {
        // service_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('service_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApprunnerService.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApprunnerService.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    ApprunnerService.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(ApprunnerService.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApprunnerService.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    ApprunnerService.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(ApprunnerService.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApprunnerService.prototype, "encryptionConfiguration", {
        get: function () {
            return this.interpolationForAttribute('encryption_configuration');
        },
        set: function (value) {
            this._encryptionConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    ApprunnerService.prototype.resetEncryptionConfiguration = function () {
        this._encryptionConfiguration = undefined;
    };
    Object.defineProperty(ApprunnerService.prototype, "encryptionConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._encryptionConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApprunnerService.prototype, "healthCheckConfiguration", {
        get: function () {
            return this.interpolationForAttribute('health_check_configuration');
        },
        set: function (value) {
            this._healthCheckConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    ApprunnerService.prototype.resetHealthCheckConfiguration = function () {
        this._healthCheckConfiguration = undefined;
    };
    Object.defineProperty(ApprunnerService.prototype, "healthCheckConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._healthCheckConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApprunnerService.prototype, "instanceConfiguration", {
        get: function () {
            return this.interpolationForAttribute('instance_configuration');
        },
        set: function (value) {
            this._instanceConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    ApprunnerService.prototype.resetInstanceConfiguration = function () {
        this._instanceConfiguration = undefined;
    };
    Object.defineProperty(ApprunnerService.prototype, "instanceConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApprunnerService.prototype, "sourceConfiguration", {
        get: function () {
            return this.interpolationForAttribute('source_configuration');
        },
        set: function (value) {
            this._sourceConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApprunnerService.prototype, "sourceConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sourceConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ApprunnerService.prototype.synthesizeAttributes = function () {
        return {
            auto_scaling_configuration_arn: cdktf.stringToTerraform(this._autoScalingConfigurationArn),
            service_name: cdktf.stringToTerraform(this._serviceName),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            encryption_configuration: cdktf.listMapper(apprunnerServiceEncryptionConfigurationToTerraform)(this._encryptionConfiguration),
            health_check_configuration: cdktf.listMapper(apprunnerServiceHealthCheckConfigurationToTerraform)(this._healthCheckConfiguration),
            instance_configuration: cdktf.listMapper(apprunnerServiceInstanceConfigurationToTerraform)(this._instanceConfiguration),
            source_configuration: cdktf.listMapper(apprunnerServiceSourceConfigurationToTerraform)(this._sourceConfiguration)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ApprunnerService.tfResourceType = "aws_apprunner_service";
    return ApprunnerService;
}(cdktf.TerraformResource));
exports.ApprunnerService = ApprunnerService;
