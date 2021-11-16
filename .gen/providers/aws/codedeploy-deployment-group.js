"use strict";
// https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html
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
exports.CodedeployDeploymentGroup = void 0;
var cdktf = require("cdktf");
function codedeployDeploymentGroupAlarmConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        alarms: cdktf.listMapper(cdktf.stringToTerraform)(struct.alarms),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        ignore_poll_alarm_failure: cdktf.booleanToTerraform(struct.ignorePollAlarmFailure)
    };
}
function codedeployDeploymentGroupAutoRollbackConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        events: cdktf.listMapper(cdktf.stringToTerraform)(struct.events)
    };
}
function codedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        action_on_timeout: cdktf.stringToTerraform(struct.actionOnTimeout),
        wait_time_in_minutes: cdktf.numberToTerraform(struct.waitTimeInMinutes)
    };
}
function codedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        action: cdktf.stringToTerraform(struct.action)
    };
}
function codedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        action: cdktf.stringToTerraform(struct.action),
        termination_wait_time_in_minutes: cdktf.numberToTerraform(struct.terminationWaitTimeInMinutes)
    };
}
function codedeployDeploymentGroupBlueGreenDeploymentConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        deployment_ready_option: cdktf.listMapper(codedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionToTerraform)(struct.deploymentReadyOption),
        green_fleet_provisioning_option: cdktf.listMapper(codedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionToTerraform)(struct.greenFleetProvisioningOption),
        terminate_blue_instances_on_deployment_success: cdktf.listMapper(codedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessToTerraform)(struct.terminateBlueInstancesOnDeploymentSuccess)
    };
}
function codedeployDeploymentGroupDeploymentStyleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        deployment_option: cdktf.stringToTerraform(struct.deploymentOption),
        deployment_type: cdktf.stringToTerraform(struct.deploymentType)
    };
}
function codedeployDeploymentGroupEc2TagFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        type: cdktf.stringToTerraform(struct.type),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function codedeployDeploymentGroupEc2TagSetEc2TagFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        type: cdktf.stringToTerraform(struct.type),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function codedeployDeploymentGroupEc2TagSetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        ec2_tag_filter: cdktf.listMapper(codedeployDeploymentGroupEc2TagSetEc2TagFilterToTerraform)(struct.ec2TagFilter)
    };
}
function codedeployDeploymentGroupEcsServiceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cluster_name: cdktf.stringToTerraform(struct.clusterName),
        service_name: cdktf.stringToTerraform(struct.serviceName)
    };
}
function codedeployDeploymentGroupLoadBalancerInfoElbInfoToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function codedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        listener_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct.listenerArns)
    };
}
function codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        listener_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct.listenerArns)
    };
}
function codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        prod_traffic_route: cdktf.listMapper(codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteToTerraform)(struct.prodTrafficRoute),
        target_group: cdktf.listMapper(codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupToTerraform)(struct.targetGroup),
        test_traffic_route: cdktf.listMapper(codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteToTerraform)(struct.testTrafficRoute)
    };
}
function codedeployDeploymentGroupLoadBalancerInfoToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        elb_info: cdktf.listMapper(codedeployDeploymentGroupLoadBalancerInfoElbInfoToTerraform)(struct.elbInfo),
        target_group_info: cdktf.listMapper(codedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoToTerraform)(struct.targetGroupInfo),
        target_group_pair_info: cdktf.listMapper(codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoToTerraform)(struct.targetGroupPairInfo)
    };
}
function codedeployDeploymentGroupOnPremisesInstanceTagFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        type: cdktf.stringToTerraform(struct.type),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function codedeployDeploymentGroupTriggerConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        trigger_events: cdktf.listMapper(cdktf.stringToTerraform)(struct.triggerEvents),
        trigger_name: cdktf.stringToTerraform(struct.triggerName),
        trigger_target_arn: cdktf.stringToTerraform(struct.triggerTargetArn)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html aws_codedeploy_deployment_group}
*/
var CodedeployDeploymentGroup = /** @class */ (function (_super) {
    __extends(CodedeployDeploymentGroup, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html aws_codedeploy_deployment_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodedeployDeploymentGroupConfig
    */
    function CodedeployDeploymentGroup(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_codedeploy_deployment_group',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._appName = config.appName;
        _this._autoscalingGroups = config.autoscalingGroups;
        _this._deploymentConfigName = config.deploymentConfigName;
        _this._deploymentGroupName = config.deploymentGroupName;
        _this._serviceRoleArn = config.serviceRoleArn;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._alarmConfiguration = config.alarmConfiguration;
        _this._autoRollbackConfiguration = config.autoRollbackConfiguration;
        _this._blueGreenDeploymentConfig = config.blueGreenDeploymentConfig;
        _this._deploymentStyle = config.deploymentStyle;
        _this._ec2TagFilter = config.ec2TagFilter;
        _this._ec2TagSet = config.ec2TagSet;
        _this._ecsService = config.ecsService;
        _this._loadBalancerInfo = config.loadBalancerInfo;
        _this._onPremisesInstanceTagFilter = config.onPremisesInstanceTagFilter;
        _this._triggerConfiguration = config.triggerConfiguration;
        return _this;
    }
    Object.defineProperty(CodedeployDeploymentGroup.prototype, "appName", {
        get: function () {
            return this.getStringAttribute('app_name');
        },
        set: function (value) {
            this._appName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodedeployDeploymentGroup.prototype, "appNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._appName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodedeployDeploymentGroup.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodedeployDeploymentGroup.prototype, "autoscalingGroups", {
        get: function () {
            return this.getListAttribute('autoscaling_groups');
        },
        set: function (value) {
            this._autoscalingGroups = value;
        },
        enumerable: false,
        configurable: true
    });
    CodedeployDeploymentGroup.prototype.resetAutoscalingGroups = function () {
        this._autoscalingGroups = undefined;
    };
    Object.defineProperty(CodedeployDeploymentGroup.prototype, "autoscalingGroupsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoscalingGroups;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodedeployDeploymentGroup.prototype, "computePlatform", {
        // compute_platform - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('compute_platform');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodedeployDeploymentGroup.prototype, "deploymentConfigName", {
        get: function () {
            return this.getStringAttribute('deployment_config_name');
        },
        set: function (value) {
            this._deploymentConfigName = value;
        },
        enumerable: false,
        configurable: true
    });
    CodedeployDeploymentGroup.prototype.resetDeploymentConfigName = function () {
        this._deploymentConfigName = undefined;
    };
    Object.defineProperty(CodedeployDeploymentGroup.prototype, "deploymentConfigNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deploymentConfigName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodedeployDeploymentGroup.prototype, "deploymentGroupId", {
        // deployment_group_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('deployment_group_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodedeployDeploymentGroup.prototype, "deploymentGroupName", {
        get: function () {
            return this.getStringAttribute('deployment_group_name');
        },
        set: function (value) {
            this._deploymentGroupName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodedeployDeploymentGroup.prototype, "deploymentGroupNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deploymentGroupName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodedeployDeploymentGroup.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodedeployDeploymentGroup.prototype, "serviceRoleArn", {
        get: function () {
            return this.getStringAttribute('service_role_arn');
        },
        set: function (value) {
            this._serviceRoleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodedeployDeploymentGroup.prototype, "serviceRoleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serviceRoleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodedeployDeploymentGroup.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    CodedeployDeploymentGroup.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(CodedeployDeploymentGroup.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodedeployDeploymentGroup.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    CodedeployDeploymentGroup.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(CodedeployDeploymentGroup.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodedeployDeploymentGroup.prototype, "alarmConfiguration", {
        get: function () {
            return this.interpolationForAttribute('alarm_configuration');
        },
        set: function (value) {
            this._alarmConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    CodedeployDeploymentGroup.prototype.resetAlarmConfiguration = function () {
        this._alarmConfiguration = undefined;
    };
    Object.defineProperty(CodedeployDeploymentGroup.prototype, "alarmConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._alarmConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodedeployDeploymentGroup.prototype, "autoRollbackConfiguration", {
        get: function () {
            return this.interpolationForAttribute('auto_rollback_configuration');
        },
        set: function (value) {
            this._autoRollbackConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    CodedeployDeploymentGroup.prototype.resetAutoRollbackConfiguration = function () {
        this._autoRollbackConfiguration = undefined;
    };
    Object.defineProperty(CodedeployDeploymentGroup.prototype, "autoRollbackConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoRollbackConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodedeployDeploymentGroup.prototype, "blueGreenDeploymentConfig", {
        get: function () {
            return this.interpolationForAttribute('blue_green_deployment_config');
        },
        set: function (value) {
            this._blueGreenDeploymentConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    CodedeployDeploymentGroup.prototype.resetBlueGreenDeploymentConfig = function () {
        this._blueGreenDeploymentConfig = undefined;
    };
    Object.defineProperty(CodedeployDeploymentGroup.prototype, "blueGreenDeploymentConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._blueGreenDeploymentConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodedeployDeploymentGroup.prototype, "deploymentStyle", {
        get: function () {
            return this.interpolationForAttribute('deployment_style');
        },
        set: function (value) {
            this._deploymentStyle = value;
        },
        enumerable: false,
        configurable: true
    });
    CodedeployDeploymentGroup.prototype.resetDeploymentStyle = function () {
        this._deploymentStyle = undefined;
    };
    Object.defineProperty(CodedeployDeploymentGroup.prototype, "deploymentStyleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deploymentStyle;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodedeployDeploymentGroup.prototype, "ec2TagFilter", {
        get: function () {
            return this.interpolationForAttribute('ec2_tag_filter');
        },
        set: function (value) {
            this._ec2TagFilter = value;
        },
        enumerable: false,
        configurable: true
    });
    CodedeployDeploymentGroup.prototype.resetEc2TagFilter = function () {
        this._ec2TagFilter = undefined;
    };
    Object.defineProperty(CodedeployDeploymentGroup.prototype, "ec2TagFilterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ec2TagFilter;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodedeployDeploymentGroup.prototype, "ec2TagSet", {
        get: function () {
            return this.interpolationForAttribute('ec2_tag_set');
        },
        set: function (value) {
            this._ec2TagSet = value;
        },
        enumerable: false,
        configurable: true
    });
    CodedeployDeploymentGroup.prototype.resetEc2TagSet = function () {
        this._ec2TagSet = undefined;
    };
    Object.defineProperty(CodedeployDeploymentGroup.prototype, "ec2TagSetInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ec2TagSet;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodedeployDeploymentGroup.prototype, "ecsService", {
        get: function () {
            return this.interpolationForAttribute('ecs_service');
        },
        set: function (value) {
            this._ecsService = value;
        },
        enumerable: false,
        configurable: true
    });
    CodedeployDeploymentGroup.prototype.resetEcsService = function () {
        this._ecsService = undefined;
    };
    Object.defineProperty(CodedeployDeploymentGroup.prototype, "ecsServiceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ecsService;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodedeployDeploymentGroup.prototype, "loadBalancerInfo", {
        get: function () {
            return this.interpolationForAttribute('load_balancer_info');
        },
        set: function (value) {
            this._loadBalancerInfo = value;
        },
        enumerable: false,
        configurable: true
    });
    CodedeployDeploymentGroup.prototype.resetLoadBalancerInfo = function () {
        this._loadBalancerInfo = undefined;
    };
    Object.defineProperty(CodedeployDeploymentGroup.prototype, "loadBalancerInfoInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._loadBalancerInfo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodedeployDeploymentGroup.prototype, "onPremisesInstanceTagFilter", {
        get: function () {
            return this.interpolationForAttribute('on_premises_instance_tag_filter');
        },
        set: function (value) {
            this._onPremisesInstanceTagFilter = value;
        },
        enumerable: false,
        configurable: true
    });
    CodedeployDeploymentGroup.prototype.resetOnPremisesInstanceTagFilter = function () {
        this._onPremisesInstanceTagFilter = undefined;
    };
    Object.defineProperty(CodedeployDeploymentGroup.prototype, "onPremisesInstanceTagFilterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._onPremisesInstanceTagFilter;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodedeployDeploymentGroup.prototype, "triggerConfiguration", {
        get: function () {
            return this.interpolationForAttribute('trigger_configuration');
        },
        set: function (value) {
            this._triggerConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    CodedeployDeploymentGroup.prototype.resetTriggerConfiguration = function () {
        this._triggerConfiguration = undefined;
    };
    Object.defineProperty(CodedeployDeploymentGroup.prototype, "triggerConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._triggerConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CodedeployDeploymentGroup.prototype.synthesizeAttributes = function () {
        return {
            app_name: cdktf.stringToTerraform(this._appName),
            autoscaling_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._autoscalingGroups),
            deployment_config_name: cdktf.stringToTerraform(this._deploymentConfigName),
            deployment_group_name: cdktf.stringToTerraform(this._deploymentGroupName),
            service_role_arn: cdktf.stringToTerraform(this._serviceRoleArn),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            alarm_configuration: cdktf.listMapper(codedeployDeploymentGroupAlarmConfigurationToTerraform)(this._alarmConfiguration),
            auto_rollback_configuration: cdktf.listMapper(codedeployDeploymentGroupAutoRollbackConfigurationToTerraform)(this._autoRollbackConfiguration),
            blue_green_deployment_config: cdktf.listMapper(codedeployDeploymentGroupBlueGreenDeploymentConfigToTerraform)(this._blueGreenDeploymentConfig),
            deployment_style: cdktf.listMapper(codedeployDeploymentGroupDeploymentStyleToTerraform)(this._deploymentStyle),
            ec2_tag_filter: cdktf.listMapper(codedeployDeploymentGroupEc2TagFilterToTerraform)(this._ec2TagFilter),
            ec2_tag_set: cdktf.listMapper(codedeployDeploymentGroupEc2TagSetToTerraform)(this._ec2TagSet),
            ecs_service: cdktf.listMapper(codedeployDeploymentGroupEcsServiceToTerraform)(this._ecsService),
            load_balancer_info: cdktf.listMapper(codedeployDeploymentGroupLoadBalancerInfoToTerraform)(this._loadBalancerInfo),
            on_premises_instance_tag_filter: cdktf.listMapper(codedeployDeploymentGroupOnPremisesInstanceTagFilterToTerraform)(this._onPremisesInstanceTagFilter),
            trigger_configuration: cdktf.listMapper(codedeployDeploymentGroupTriggerConfigurationToTerraform)(this._triggerConfiguration)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CodedeployDeploymentGroup.tfResourceType = "aws_codedeploy_deployment_group";
    return CodedeployDeploymentGroup;
}(cdktf.TerraformResource));
exports.CodedeployDeploymentGroup = CodedeployDeploymentGroup;
