"use strict";
// https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html
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
exports.CodedeployDeploymentConfig = void 0;
var cdktf = require("cdktf");
function codedeployDeploymentConfigMinimumHealthyHostsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
        value: cdktf.numberToTerraform(struct.value)
    };
}
function codedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        interval: cdktf.numberToTerraform(struct.interval),
        percentage: cdktf.numberToTerraform(struct.percentage)
    };
}
function codedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        interval: cdktf.numberToTerraform(struct.interval),
        percentage: cdktf.numberToTerraform(struct.percentage)
    };
}
function codedeployDeploymentConfigTrafficRoutingConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
        time_based_canary: cdktf.listMapper(codedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryToTerraform)(struct.timeBasedCanary),
        time_based_linear: cdktf.listMapper(codedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearToTerraform)(struct.timeBasedLinear)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html aws_codedeploy_deployment_config}
*/
var CodedeployDeploymentConfig = /** @class */ (function (_super) {
    __extends(CodedeployDeploymentConfig, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html aws_codedeploy_deployment_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodedeployDeploymentConfigConfig
    */
    function CodedeployDeploymentConfig(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_codedeploy_deployment_config',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._computePlatform = config.computePlatform;
        _this._deploymentConfigName = config.deploymentConfigName;
        _this._minimumHealthyHosts = config.minimumHealthyHosts;
        _this._trafficRoutingConfig = config.trafficRoutingConfig;
        return _this;
    }
    Object.defineProperty(CodedeployDeploymentConfig.prototype, "computePlatform", {
        get: function () {
            return this.getStringAttribute('compute_platform');
        },
        set: function (value) {
            this._computePlatform = value;
        },
        enumerable: false,
        configurable: true
    });
    CodedeployDeploymentConfig.prototype.resetComputePlatform = function () {
        this._computePlatform = undefined;
    };
    Object.defineProperty(CodedeployDeploymentConfig.prototype, "computePlatformInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._computePlatform;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodedeployDeploymentConfig.prototype, "deploymentConfigId", {
        // deployment_config_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('deployment_config_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodedeployDeploymentConfig.prototype, "deploymentConfigName", {
        get: function () {
            return this.getStringAttribute('deployment_config_name');
        },
        set: function (value) {
            this._deploymentConfigName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodedeployDeploymentConfig.prototype, "deploymentConfigNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deploymentConfigName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodedeployDeploymentConfig.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodedeployDeploymentConfig.prototype, "minimumHealthyHosts", {
        get: function () {
            return this.interpolationForAttribute('minimum_healthy_hosts');
        },
        set: function (value) {
            this._minimumHealthyHosts = value;
        },
        enumerable: false,
        configurable: true
    });
    CodedeployDeploymentConfig.prototype.resetMinimumHealthyHosts = function () {
        this._minimumHealthyHosts = undefined;
    };
    Object.defineProperty(CodedeployDeploymentConfig.prototype, "minimumHealthyHostsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._minimumHealthyHosts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodedeployDeploymentConfig.prototype, "trafficRoutingConfig", {
        get: function () {
            return this.interpolationForAttribute('traffic_routing_config');
        },
        set: function (value) {
            this._trafficRoutingConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    CodedeployDeploymentConfig.prototype.resetTrafficRoutingConfig = function () {
        this._trafficRoutingConfig = undefined;
    };
    Object.defineProperty(CodedeployDeploymentConfig.prototype, "trafficRoutingConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._trafficRoutingConfig;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CodedeployDeploymentConfig.prototype.synthesizeAttributes = function () {
        return {
            compute_platform: cdktf.stringToTerraform(this._computePlatform),
            deployment_config_name: cdktf.stringToTerraform(this._deploymentConfigName),
            minimum_healthy_hosts: cdktf.listMapper(codedeployDeploymentConfigMinimumHealthyHostsToTerraform)(this._minimumHealthyHosts),
            traffic_routing_config: cdktf.listMapper(codedeployDeploymentConfigTrafficRoutingConfigToTerraform)(this._trafficRoutingConfig)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CodedeployDeploymentConfig.tfResourceType = "aws_codedeploy_deployment_config";
    return CodedeployDeploymentConfig;
}(cdktf.TerraformResource));
exports.CodedeployDeploymentConfig = CodedeployDeploymentConfig;
