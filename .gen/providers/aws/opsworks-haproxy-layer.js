"use strict";
// https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer.html
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
exports.OpsworksHaproxyLayer = void 0;
var cdktf = require("cdktf");
function opsworksHaproxyLayerEbsVolumeToTerraform(struct) {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer.html aws_opsworks_haproxy_layer}
*/
var OpsworksHaproxyLayer = /** @class */ (function (_super) {
    __extends(OpsworksHaproxyLayer, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/opsworks_haproxy_layer.html aws_opsworks_haproxy_layer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OpsworksHaproxyLayerConfig
    */
    function OpsworksHaproxyLayer(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_opsworks_haproxy_layer',
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
        _this._healthcheckMethod = config.healthcheckMethod;
        _this._healthcheckUrl = config.healthcheckUrl;
        _this._installUpdatesOnBoot = config.installUpdatesOnBoot;
        _this._instanceShutdownTimeout = config.instanceShutdownTimeout;
        _this._name = config.name;
        _this._stackId = config.stackId;
        _this._statsEnabled = config.statsEnabled;
        _this._statsPassword = config.statsPassword;
        _this._statsUrl = config.statsUrl;
        _this._statsUser = config.statsUser;
        _this._systemPackages = config.systemPackages;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._useEbsOptimizedInstances = config.useEbsOptimizedInstances;
        _this._ebsVolume = config.ebsVolume;
        return _this;
    }
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "arn", {
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
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "autoAssignElasticIps", {
        get: function () {
            return this.getBooleanAttribute('auto_assign_elastic_ips');
        },
        set: function (value) {
            this._autoAssignElasticIps = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksHaproxyLayer.prototype.resetAutoAssignElasticIps = function () {
        this._autoAssignElasticIps = undefined;
    };
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "autoAssignElasticIpsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoAssignElasticIps;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "autoAssignPublicIps", {
        get: function () {
            return this.getBooleanAttribute('auto_assign_public_ips');
        },
        set: function (value) {
            this._autoAssignPublicIps = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksHaproxyLayer.prototype.resetAutoAssignPublicIps = function () {
        this._autoAssignPublicIps = undefined;
    };
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "autoAssignPublicIpsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoAssignPublicIps;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "autoHealing", {
        get: function () {
            return this.getBooleanAttribute('auto_healing');
        },
        set: function (value) {
            this._autoHealing = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksHaproxyLayer.prototype.resetAutoHealing = function () {
        this._autoHealing = undefined;
    };
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "autoHealingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoHealing;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "customConfigureRecipes", {
        get: function () {
            return this.getListAttribute('custom_configure_recipes');
        },
        set: function (value) {
            this._customConfigureRecipes = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksHaproxyLayer.prototype.resetCustomConfigureRecipes = function () {
        this._customConfigureRecipes = undefined;
    };
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "customConfigureRecipesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customConfigureRecipes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "customDeployRecipes", {
        get: function () {
            return this.getListAttribute('custom_deploy_recipes');
        },
        set: function (value) {
            this._customDeployRecipes = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksHaproxyLayer.prototype.resetCustomDeployRecipes = function () {
        this._customDeployRecipes = undefined;
    };
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "customDeployRecipesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customDeployRecipes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "customInstanceProfileArn", {
        get: function () {
            return this.getStringAttribute('custom_instance_profile_arn');
        },
        set: function (value) {
            this._customInstanceProfileArn = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksHaproxyLayer.prototype.resetCustomInstanceProfileArn = function () {
        this._customInstanceProfileArn = undefined;
    };
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "customInstanceProfileArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customInstanceProfileArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "customJson", {
        get: function () {
            return this.getStringAttribute('custom_json');
        },
        set: function (value) {
            this._customJson = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksHaproxyLayer.prototype.resetCustomJson = function () {
        this._customJson = undefined;
    };
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "customJsonInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customJson;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "customSecurityGroupIds", {
        get: function () {
            return this.getListAttribute('custom_security_group_ids');
        },
        set: function (value) {
            this._customSecurityGroupIds = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksHaproxyLayer.prototype.resetCustomSecurityGroupIds = function () {
        this._customSecurityGroupIds = undefined;
    };
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "customSecurityGroupIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customSecurityGroupIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "customSetupRecipes", {
        get: function () {
            return this.getListAttribute('custom_setup_recipes');
        },
        set: function (value) {
            this._customSetupRecipes = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksHaproxyLayer.prototype.resetCustomSetupRecipes = function () {
        this._customSetupRecipes = undefined;
    };
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "customSetupRecipesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customSetupRecipes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "customShutdownRecipes", {
        get: function () {
            return this.getListAttribute('custom_shutdown_recipes');
        },
        set: function (value) {
            this._customShutdownRecipes = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksHaproxyLayer.prototype.resetCustomShutdownRecipes = function () {
        this._customShutdownRecipes = undefined;
    };
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "customShutdownRecipesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customShutdownRecipes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "customUndeployRecipes", {
        get: function () {
            return this.getListAttribute('custom_undeploy_recipes');
        },
        set: function (value) {
            this._customUndeployRecipes = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksHaproxyLayer.prototype.resetCustomUndeployRecipes = function () {
        this._customUndeployRecipes = undefined;
    };
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "customUndeployRecipesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customUndeployRecipes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "drainElbOnShutdown", {
        get: function () {
            return this.getBooleanAttribute('drain_elb_on_shutdown');
        },
        set: function (value) {
            this._drainElbOnShutdown = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksHaproxyLayer.prototype.resetDrainElbOnShutdown = function () {
        this._drainElbOnShutdown = undefined;
    };
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "drainElbOnShutdownInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._drainElbOnShutdown;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "elasticLoadBalancer", {
        get: function () {
            return this.getStringAttribute('elastic_load_balancer');
        },
        set: function (value) {
            this._elasticLoadBalancer = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksHaproxyLayer.prototype.resetElasticLoadBalancer = function () {
        this._elasticLoadBalancer = undefined;
    };
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "elasticLoadBalancerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._elasticLoadBalancer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "healthcheckMethod", {
        get: function () {
            return this.getStringAttribute('healthcheck_method');
        },
        set: function (value) {
            this._healthcheckMethod = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksHaproxyLayer.prototype.resetHealthcheckMethod = function () {
        this._healthcheckMethod = undefined;
    };
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "healthcheckMethodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._healthcheckMethod;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "healthcheckUrl", {
        get: function () {
            return this.getStringAttribute('healthcheck_url');
        },
        set: function (value) {
            this._healthcheckUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksHaproxyLayer.prototype.resetHealthcheckUrl = function () {
        this._healthcheckUrl = undefined;
    };
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "healthcheckUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._healthcheckUrl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "installUpdatesOnBoot", {
        get: function () {
            return this.getBooleanAttribute('install_updates_on_boot');
        },
        set: function (value) {
            this._installUpdatesOnBoot = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksHaproxyLayer.prototype.resetInstallUpdatesOnBoot = function () {
        this._installUpdatesOnBoot = undefined;
    };
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "installUpdatesOnBootInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._installUpdatesOnBoot;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "instanceShutdownTimeout", {
        get: function () {
            return this.getNumberAttribute('instance_shutdown_timeout');
        },
        set: function (value) {
            this._instanceShutdownTimeout = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksHaproxyLayer.prototype.resetInstanceShutdownTimeout = function () {
        this._instanceShutdownTimeout = undefined;
    };
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "instanceShutdownTimeoutInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceShutdownTimeout;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksHaproxyLayer.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "stackId", {
        get: function () {
            return this.getStringAttribute('stack_id');
        },
        set: function (value) {
            this._stackId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "stackIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._stackId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "statsEnabled", {
        get: function () {
            return this.getBooleanAttribute('stats_enabled');
        },
        set: function (value) {
            this._statsEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksHaproxyLayer.prototype.resetStatsEnabled = function () {
        this._statsEnabled = undefined;
    };
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "statsEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._statsEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "statsPassword", {
        get: function () {
            return this.getStringAttribute('stats_password');
        },
        set: function (value) {
            this._statsPassword = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "statsPasswordInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._statsPassword;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "statsUrl", {
        get: function () {
            return this.getStringAttribute('stats_url');
        },
        set: function (value) {
            this._statsUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksHaproxyLayer.prototype.resetStatsUrl = function () {
        this._statsUrl = undefined;
    };
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "statsUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._statsUrl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "statsUser", {
        get: function () {
            return this.getStringAttribute('stats_user');
        },
        set: function (value) {
            this._statsUser = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksHaproxyLayer.prototype.resetStatsUser = function () {
        this._statsUser = undefined;
    };
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "statsUserInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._statsUser;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "systemPackages", {
        get: function () {
            return this.getListAttribute('system_packages');
        },
        set: function (value) {
            this._systemPackages = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksHaproxyLayer.prototype.resetSystemPackages = function () {
        this._systemPackages = undefined;
    };
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "systemPackagesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._systemPackages;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksHaproxyLayer.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksHaproxyLayer.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "useEbsOptimizedInstances", {
        get: function () {
            return this.getBooleanAttribute('use_ebs_optimized_instances');
        },
        set: function (value) {
            this._useEbsOptimizedInstances = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksHaproxyLayer.prototype.resetUseEbsOptimizedInstances = function () {
        this._useEbsOptimizedInstances = undefined;
    };
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "useEbsOptimizedInstancesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._useEbsOptimizedInstances;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "ebsVolume", {
        get: function () {
            return this.interpolationForAttribute('ebs_volume');
        },
        set: function (value) {
            this._ebsVolume = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksHaproxyLayer.prototype.resetEbsVolume = function () {
        this._ebsVolume = undefined;
    };
    Object.defineProperty(OpsworksHaproxyLayer.prototype, "ebsVolumeInput", {
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
    OpsworksHaproxyLayer.prototype.synthesizeAttributes = function () {
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
            healthcheck_method: cdktf.stringToTerraform(this._healthcheckMethod),
            healthcheck_url: cdktf.stringToTerraform(this._healthcheckUrl),
            install_updates_on_boot: cdktf.booleanToTerraform(this._installUpdatesOnBoot),
            instance_shutdown_timeout: cdktf.numberToTerraform(this._instanceShutdownTimeout),
            name: cdktf.stringToTerraform(this._name),
            stack_id: cdktf.stringToTerraform(this._stackId),
            stats_enabled: cdktf.booleanToTerraform(this._statsEnabled),
            stats_password: cdktf.stringToTerraform(this._statsPassword),
            stats_url: cdktf.stringToTerraform(this._statsUrl),
            stats_user: cdktf.stringToTerraform(this._statsUser),
            system_packages: cdktf.listMapper(cdktf.stringToTerraform)(this._systemPackages),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            use_ebs_optimized_instances: cdktf.booleanToTerraform(this._useEbsOptimizedInstances),
            ebs_volume: cdktf.listMapper(opsworksHaproxyLayerEbsVolumeToTerraform)(this._ebsVolume)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    OpsworksHaproxyLayer.tfResourceType = "aws_opsworks_haproxy_layer";
    return OpsworksHaproxyLayer;
}(cdktf.TerraformResource));
exports.OpsworksHaproxyLayer = OpsworksHaproxyLayer;
