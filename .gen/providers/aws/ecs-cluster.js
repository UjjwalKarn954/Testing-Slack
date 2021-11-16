"use strict";
// https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html
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
exports.EcsCluster = void 0;
var cdktf = require("cdktf");
function ecsClusterConfigurationExecuteCommandConfigurationLogConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cloud_watch_encryption_enabled: cdktf.booleanToTerraform(struct.cloudWatchEncryptionEnabled),
        cloud_watch_log_group_name: cdktf.stringToTerraform(struct.cloudWatchLogGroupName),
        s3_bucket_encryption_enabled: cdktf.booleanToTerraform(struct.s3BucketEncryptionEnabled),
        s3_bucket_name: cdktf.stringToTerraform(struct.s3BucketName),
        s3_key_prefix: cdktf.stringToTerraform(struct.s3KeyPrefix)
    };
}
function ecsClusterConfigurationExecuteCommandConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        kms_key_id: cdktf.stringToTerraform(struct.kmsKeyId),
        logging: cdktf.stringToTerraform(struct.logging),
        log_configuration: cdktf.listMapper(ecsClusterConfigurationExecuteCommandConfigurationLogConfigurationToTerraform)(struct.logConfiguration)
    };
}
function ecsClusterConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        execute_command_configuration: cdktf.listMapper(ecsClusterConfigurationExecuteCommandConfigurationToTerraform)(struct.executeCommandConfiguration)
    };
}
function ecsClusterDefaultCapacityProviderStrategyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        base: cdktf.numberToTerraform(struct.base),
        capacity_provider: cdktf.stringToTerraform(struct.capacityProvider),
        weight: cdktf.numberToTerraform(struct.weight)
    };
}
function ecsClusterSettingToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        value: cdktf.stringToTerraform(struct.value)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html aws_ecs_cluster}
*/
var EcsCluster = /** @class */ (function (_super) {
    __extends(EcsCluster, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html aws_ecs_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcsClusterConfig
    */
    function EcsCluster(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ecs_cluster',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._capacityProviders = config.capacityProviders;
        _this._name = config.name;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._configuration = config.configuration;
        _this._defaultCapacityProviderStrategy = config.defaultCapacityProviderStrategy;
        _this._setting = config.setting;
        return _this;
    }
    Object.defineProperty(EcsCluster.prototype, "arn", {
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
    Object.defineProperty(EcsCluster.prototype, "capacityProviders", {
        get: function () {
            return this.getListAttribute('capacity_providers');
        },
        set: function (value) {
            this._capacityProviders = value;
        },
        enumerable: false,
        configurable: true
    });
    EcsCluster.prototype.resetCapacityProviders = function () {
        this._capacityProviders = undefined;
    };
    Object.defineProperty(EcsCluster.prototype, "capacityProvidersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._capacityProviders;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsCluster.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsCluster.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsCluster.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsCluster.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    EcsCluster.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(EcsCluster.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsCluster.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    EcsCluster.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(EcsCluster.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsCluster.prototype, "configuration", {
        get: function () {
            return this.interpolationForAttribute('configuration');
        },
        set: function (value) {
            this._configuration = value;
        },
        enumerable: false,
        configurable: true
    });
    EcsCluster.prototype.resetConfiguration = function () {
        this._configuration = undefined;
    };
    Object.defineProperty(EcsCluster.prototype, "configurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._configuration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsCluster.prototype, "defaultCapacityProviderStrategy", {
        get: function () {
            return this.interpolationForAttribute('default_capacity_provider_strategy');
        },
        set: function (value) {
            this._defaultCapacityProviderStrategy = value;
        },
        enumerable: false,
        configurable: true
    });
    EcsCluster.prototype.resetDefaultCapacityProviderStrategy = function () {
        this._defaultCapacityProviderStrategy = undefined;
    };
    Object.defineProperty(EcsCluster.prototype, "defaultCapacityProviderStrategyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultCapacityProviderStrategy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcsCluster.prototype, "setting", {
        get: function () {
            return this.interpolationForAttribute('setting');
        },
        set: function (value) {
            this._setting = value;
        },
        enumerable: false,
        configurable: true
    });
    EcsCluster.prototype.resetSetting = function () {
        this._setting = undefined;
    };
    Object.defineProperty(EcsCluster.prototype, "settingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._setting;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    EcsCluster.prototype.synthesizeAttributes = function () {
        return {
            capacity_providers: cdktf.listMapper(cdktf.stringToTerraform)(this._capacityProviders),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            configuration: cdktf.listMapper(ecsClusterConfigurationToTerraform)(this._configuration),
            default_capacity_provider_strategy: cdktf.listMapper(ecsClusterDefaultCapacityProviderStrategyToTerraform)(this._defaultCapacityProviderStrategy),
            setting: cdktf.listMapper(ecsClusterSettingToTerraform)(this._setting)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    EcsCluster.tfResourceType = "aws_ecs_cluster";
    return EcsCluster;
}(cdktf.TerraformResource));
exports.EcsCluster = EcsCluster;
