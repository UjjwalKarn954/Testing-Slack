"use strict";
// https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html
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
exports.OpsworksGangliaLayer = void 0;
var cdktf = require("cdktf");
function opsworksGangliaLayerEbsVolumeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        encrypted: cdktf.booleanToTerraform(struct.encrypted),
        iops: cdktf.numberToTerraform(struct.iops),
        mount_point: cdktf.stringToTerraform(struct.mountPoint),
        number_of_disks: cdktf.numberToTerraform(struct.numberOfDisks),
        raid_level: cdktf.stringToTerraform(struct.raidLevel),
        size: cdktf.numberToTerraform(struct.size),
        type: cdktf.stringToTerraform(struct.type)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html aws_opsworks_ganglia_layer}
*/
var OpsworksGangliaLayer = /** @class */ (function (_super) {
    __extends(OpsworksGangliaLayer, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/opsworks_ganglia_layer.html aws_opsworks_ganglia_layer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OpsworksGangliaLayerConfig
    */
    function OpsworksGangliaLayer(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_opsworks_ganglia_layer',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._autoAssignElasticIps = config.autoAssignElasticIps;
        _this._autoAssignPublicIps = config.autoAssignPublicIps;
        _this._autoHealing = config.autoHealing;
        _this._customConfigureRecipes = config.customConfigureRecipes;
        _this._customDeployRecipes = config.customDeployRecipes;
        _this._customInstanceProfileArn = config.customInstanceProfileArn;
        _this._customJson = config.customJson;
        _this._customSecurityGroupIds = config.customSecurityGroupIds;
        _this._customSetupRecipes = config.customSetupRecipes;
        _this._customShutdownRecipes = config.customShutdownRecipes;
        _this._customUndeployRecipes = config.customUndeployRecipes;
        _this._drainElbOnShutdown = config.drainElbOnShutdown;
        _this._elasticLoadBalancer = config.elasticLoadBalancer;
        _this._installUpdatesOnBoot = config.installUpdatesOnBoot;
        _this._instanceShutdownTimeout = config.instanceShutdownTimeout;
        _this._name = config.name;
        _this._password = config.password;
        _this._stackId = config.stackId;
        _this._systemPackages = config.systemPackages;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._url = config.url;
        _this._useEbsOptimizedInstances = config.useEbsOptimizedInstances;
        _this._username = config.username;
        _this._ebsVolume = config.ebsVolume;
        return _this;
    }
    Object.defineProperty(OpsworksGangliaLayer.prototype, "arn", {
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
    Object.defineProperty(OpsworksGangliaLayer.prototype, "autoAssignElasticIps", {
        get: function () {
            return this.getBooleanAttribute('auto_assign_elastic_ips');
        },
        set: function (value) {
            this._autoAssignElasticIps = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksGangliaLayer.prototype.resetAutoAssignElasticIps = function () {
        this._autoAssignElasticIps = undefined;
    };
    Object.defineProperty(OpsworksGangliaLayer.prototype, "autoAssignElasticIpsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoAssignElasticIps;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksGangliaLayer.prototype, "autoAssignPublicIps", {
        get: function () {
            return this.getBooleanAttribute('auto_assign_public_ips');
        },
        set: function (value) {
            this._autoAssignPublicIps = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksGangliaLayer.prototype.resetAutoAssignPublicIps = function () {
        this._autoAssignPublicIps = undefined;
    };
    Object.defineProperty(OpsworksGangliaLayer.prototype, "autoAssignPublicIpsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoAssignPublicIps;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksGangliaLayer.prototype, "autoHealing", {
        get: function () {
            return this.getBooleanAttribute('auto_healing');
        },
        set: function (value) {
            this._autoHealing = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksGangliaLayer.prototype.resetAutoHealing = function () {
        this._autoHealing = undefined;
    };
    Object.defineProperty(OpsworksGangliaLayer.prototype, "autoHealingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoHealing;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksGangliaLayer.prototype, "customConfigureRecipes", {
        get: function () {
            return this.getListAttribute('custom_configure_recipes');
        },
        set: function (value) {
            this._customConfigureRecipes = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksGangliaLayer.prototype.resetCustomConfigureRecipes = function () {
        this._customConfigureRecipes = undefined;
    };
    Object.defineProperty(OpsworksGangliaLayer.prototype, "customConfigureRecipesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customConfigureRecipes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksGangliaLayer.prototype, "customDeployRecipes", {
        get: function () {
            return this.getListAttribute('custom_deploy_recipes');
        },
        set: function (value) {
            this._customDeployRecipes = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksGangliaLayer.prototype.resetCustomDeployRecipes = function () {
        this._customDeployRecipes = undefined;
    };
    Object.defineProperty(OpsworksGangliaLayer.prototype, "customDeployRecipesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customDeployRecipes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksGangliaLayer.prototype, "customInstanceProfileArn", {
        get: function () {
            return this.getStringAttribute('custom_instance_profile_arn');
        },
        set: function (value) {
            this._customInstanceProfileArn = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksGangliaLayer.prototype.resetCustomInstanceProfileArn = function () {
        this._customInstanceProfileArn = undefined;
    };
    Object.defineProperty(OpsworksGangliaLayer.prototype, "customInstanceProfileArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customInstanceProfileArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksGangliaLayer.prototype, "customJson", {
        get: function () {
            return this.getStringAttribute('custom_json');
        },
        set: function (value) {
            this._customJson = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksGangliaLayer.prototype.resetCustomJson = function () {
        this._customJson = undefined;
    };
    Object.defineProperty(OpsworksGangliaLayer.prototype, "customJsonInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customJson;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksGangliaLayer.prototype, "customSecurityGroupIds", {
        get: function () {
            return this.getListAttribute('custom_security_group_ids');
        },
        set: function (value) {
            this._customSecurityGroupIds = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksGangliaLayer.prototype.resetCustomSecurityGroupIds = function () {
        this._customSecurityGroupIds = undefined;
    };
    Object.defineProperty(OpsworksGangliaLayer.prototype, "customSecurityGroupIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customSecurityGroupIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksGangliaLayer.prototype, "customSetupRecipes", {
        get: function () {
            return this.getListAttribute('custom_setup_recipes');
        },
        set: function (value) {
            this._customSetupRecipes = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksGangliaLayer.prototype.resetCustomSetupRecipes = function () {
        this._customSetupRecipes = undefined;
    };
    Object.defineProperty(OpsworksGangliaLayer.prototype, "customSetupRecipesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customSetupRecipes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksGangliaLayer.prototype, "customShutdownRecipes", {
        get: function () {
            return this.getListAttribute('custom_shutdown_recipes');
        },
        set: function (value) {
            this._customShutdownRecipes = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksGangliaLayer.prototype.resetCustomShutdownRecipes = function () {
        this._customShutdownRecipes = undefined;
    };
    Object.defineProperty(OpsworksGangliaLayer.prototype, "customShutdownRecipesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customShutdownRecipes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksGangliaLayer.prototype, "customUndeployRecipes", {
        get: function () {
            return this.getListAttribute('custom_undeploy_recipes');
        },
        set: function (value) {
            this._customUndeployRecipes = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksGangliaLayer.prototype.resetCustomUndeployRecipes = function () {
        this._customUndeployRecipes = undefined;
    };
    Object.defineProperty(OpsworksGangliaLayer.prototype, "customUndeployRecipesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customUndeployRecipes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksGangliaLayer.prototype, "drainElbOnShutdown", {
        get: function () {
            return this.getBooleanAttribute('drain_elb_on_shutdown');
        },
        set: function (value) {
            this._drainElbOnShutdown = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksGangliaLayer.prototype.resetDrainElbOnShutdown = function () {
        this._drainElbOnShutdown = undefined;
    };
    Object.defineProperty(OpsworksGangliaLayer.prototype, "drainElbOnShutdownInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._drainElbOnShutdown;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksGangliaLayer.prototype, "elasticLoadBalancer", {
        get: function () {
            return this.getStringAttribute('elastic_load_balancer');
        },
        set: function (value) {
            this._elasticLoadBalancer = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksGangliaLayer.prototype.resetElasticLoadBalancer = function () {
        this._elasticLoadBalancer = undefined;
    };
    Object.defineProperty(OpsworksGangliaLayer.prototype, "elasticLoadBalancerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._elasticLoadBalancer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksGangliaLayer.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksGangliaLayer.prototype, "installUpdatesOnBoot", {
        get: function () {
            return this.getBooleanAttribute('install_updates_on_boot');
        },
        set: function (value) {
            this._installUpdatesOnBoot = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksGangliaLayer.prototype.resetInstallUpdatesOnBoot = function () {
        this._installUpdatesOnBoot = undefined;
    };
    Object.defineProperty(OpsworksGangliaLayer.prototype, "installUpdatesOnBootInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._installUpdatesOnBoot;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksGangliaLayer.prototype, "instanceShutdownTimeout", {
        get: function () {
            return this.getNumberAttribute('instance_shutdown_timeout');
        },
        set: function (value) {
            this._instanceShutdownTimeout = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksGangliaLayer.prototype.resetInstanceShutdownTimeout = function () {
        this._instanceShutdownTimeout = undefined;
    };
    Object.defineProperty(OpsworksGangliaLayer.prototype, "instanceShutdownTimeoutInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceShutdownTimeout;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksGangliaLayer.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksGangliaLayer.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(OpsworksGangliaLayer.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksGangliaLayer.prototype, "password", {
        get: function () {
            return this.getStringAttribute('password');
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksGangliaLayer.prototype, "passwordInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._password;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksGangliaLayer.prototype, "stackId", {
        get: function () {
            return this.getStringAttribute('stack_id');
        },
        set: function (value) {
            this._stackId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksGangliaLayer.prototype, "stackIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._stackId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksGangliaLayer.prototype, "systemPackages", {
        get: function () {
            return this.getListAttribute('system_packages');
        },
        set: function (value) {
            this._systemPackages = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksGangliaLayer.prototype.resetSystemPackages = function () {
        this._systemPackages = undefined;
    };
    Object.defineProperty(OpsworksGangliaLayer.prototype, "systemPackagesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._systemPackages;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksGangliaLayer.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksGangliaLayer.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(OpsworksGangliaLayer.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksGangliaLayer.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksGangliaLayer.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(OpsworksGangliaLayer.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksGangliaLayer.prototype, "url", {
        get: function () {
            return this.getStringAttribute('url');
        },
        set: function (value) {
            this._url = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksGangliaLayer.prototype.resetUrl = function () {
        this._url = undefined;
    };
    Object.defineProperty(OpsworksGangliaLayer.prototype, "urlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._url;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksGangliaLayer.prototype, "useEbsOptimizedInstances", {
        get: function () {
            return this.getBooleanAttribute('use_ebs_optimized_instances');
        },
        set: function (value) {
            this._useEbsOptimizedInstances = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksGangliaLayer.prototype.resetUseEbsOptimizedInstances = function () {
        this._useEbsOptimizedInstances = undefined;
    };
    Object.defineProperty(OpsworksGangliaLayer.prototype, "useEbsOptimizedInstancesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._useEbsOptimizedInstances;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksGangliaLayer.prototype, "username", {
        get: function () {
            return this.getStringAttribute('username');
        },
        set: function (value) {
            this._username = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksGangliaLayer.prototype.resetUsername = function () {
        this._username = undefined;
    };
    Object.defineProperty(OpsworksGangliaLayer.prototype, "usernameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._username;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksGangliaLayer.prototype, "ebsVolume", {
        get: function () {
            return this.interpolationForAttribute('ebs_volume');
        },
        set: function (value) {
            this._ebsVolume = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksGangliaLayer.prototype.resetEbsVolume = function () {
        this._ebsVolume = undefined;
    };
    Object.defineProperty(OpsworksGangliaLayer.prototype, "ebsVolumeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ebsVolume;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    OpsworksGangliaLayer.prototype.synthesizeAttributes = function () {
        return {
            auto_assign_elastic_ips: cdktf.booleanToTerraform(this._autoAssignElasticIps),
            auto_assign_public_ips: cdktf.booleanToTerraform(this._autoAssignPublicIps),
            auto_healing: cdktf.booleanToTerraform(this._autoHealing),
            custom_configure_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customConfigureRecipes),
            custom_deploy_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customDeployRecipes),
            custom_instance_profile_arn: cdktf.stringToTerraform(this._customInstanceProfileArn),
            custom_json: cdktf.stringToTerraform(this._customJson),
            custom_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._customSecurityGroupIds),
            custom_setup_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customSetupRecipes),
            custom_shutdown_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customShutdownRecipes),
            custom_undeploy_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customUndeployRecipes),
            drain_elb_on_shutdown: cdktf.booleanToTerraform(this._drainElbOnShutdown),
            elastic_load_balancer: cdktf.stringToTerraform(this._elasticLoadBalancer),
            install_updates_on_boot: cdktf.booleanToTerraform(this._installUpdatesOnBoot),
            instance_shutdown_timeout: cdktf.numberToTerraform(this._instanceShutdownTimeout),
            name: cdktf.stringToTerraform(this._name),
            password: cdktf.stringToTerraform(this._password),
            stack_id: cdktf.stringToTerraform(this._stackId),
            system_packages: cdktf.listMapper(cdktf.stringToTerraform)(this._systemPackages),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            url: cdktf.stringToTerraform(this._url),
            use_ebs_optimized_instances: cdktf.booleanToTerraform(this._useEbsOptimizedInstances),
            username: cdktf.stringToTerraform(this._username),
            ebs_volume: cdktf.listMapper(opsworksGangliaLayerEbsVolumeToTerraform)(this._ebsVolume)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    OpsworksGangliaLayer.tfResourceType = "aws_opsworks_ganglia_layer";
    return OpsworksGangliaLayer;
}(cdktf.TerraformResource));
exports.OpsworksGangliaLayer = OpsworksGangliaLayer;
