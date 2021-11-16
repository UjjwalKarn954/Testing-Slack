"use strict";
// https://www.terraform.io/docs/providers/aws/r/emr_cluster.html
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
exports.EmrCluster = void 0;
var cdktf = require("cdktf");
function emrClusterStepHadoopJarStepToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        args: struct.args === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct.args),
        jar: struct.jar === undefined ? null : cdktf.stringToTerraform(struct.jar),
        main_class: struct.mainClass === undefined ? null : cdktf.stringToTerraform(struct.mainClass),
        properties: struct.properties === undefined ? null : cdktf.hashMapper(cdktf.anyToTerraform)(struct.properties)
    };
}
function emrClusterStepToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        action_on_failure: struct.actionOnFailure === undefined ? null : cdktf.stringToTerraform(struct.actionOnFailure),
        hadoop_jar_step: struct.hadoopJarStep === undefined ? null : cdktf.listMapper(emrClusterStepHadoopJarStepToTerraform)(struct.hadoopJarStep),
        name: struct.name === undefined ? null : cdktf.stringToTerraform(struct.name)
    };
}
function emrClusterBootstrapActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        args: cdktf.listMapper(cdktf.stringToTerraform)(struct.args),
        name: cdktf.stringToTerraform(struct.name),
        path: cdktf.stringToTerraform(struct.path)
    };
}
function emrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        classification: cdktf.stringToTerraform(struct.classification),
        properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct.properties)
    };
}
function emrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        iops: cdktf.numberToTerraform(struct.iops),
        size: cdktf.numberToTerraform(struct.size),
        type: cdktf.stringToTerraform(struct.type),
        volumes_per_instance: cdktf.numberToTerraform(struct.volumesPerInstance)
    };
}
function emrClusterCoreInstanceFleetInstanceTypeConfigsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bid_price: cdktf.stringToTerraform(struct.bidPrice),
        bid_price_as_percentage_of_on_demand_price: cdktf.numberToTerraform(struct.bidPriceAsPercentageOfOnDemandPrice),
        instance_type: cdktf.stringToTerraform(struct.instanceType),
        weighted_capacity: cdktf.numberToTerraform(struct.weightedCapacity),
        configurations: cdktf.listMapper(emrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsToTerraform)(struct.configurations),
        ebs_config: cdktf.listMapper(emrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigToTerraform)(struct.ebsConfig)
    };
}
function emrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        allocation_strategy: cdktf.stringToTerraform(struct.allocationStrategy)
    };
}
function emrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        allocation_strategy: cdktf.stringToTerraform(struct.allocationStrategy),
        block_duration_minutes: cdktf.numberToTerraform(struct.blockDurationMinutes),
        timeout_action: cdktf.stringToTerraform(struct.timeoutAction),
        timeout_duration_minutes: cdktf.numberToTerraform(struct.timeoutDurationMinutes)
    };
}
function emrClusterCoreInstanceFleetLaunchSpecificationsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        on_demand_specification: cdktf.listMapper(emrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationToTerraform)(struct.onDemandSpecification),
        spot_specification: cdktf.listMapper(emrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationToTerraform)(struct.spotSpecification)
    };
}
function emrClusterCoreInstanceFleetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        target_on_demand_capacity: cdktf.numberToTerraform(struct.targetOnDemandCapacity),
        target_spot_capacity: cdktf.numberToTerraform(struct.targetSpotCapacity),
        instance_type_configs: cdktf.listMapper(emrClusterCoreInstanceFleetInstanceTypeConfigsToTerraform)(struct.instanceTypeConfigs),
        launch_specifications: cdktf.listMapper(emrClusterCoreInstanceFleetLaunchSpecificationsToTerraform)(struct.launchSpecifications)
    };
}
function emrClusterCoreInstanceGroupEbsConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        iops: cdktf.numberToTerraform(struct.iops),
        size: cdktf.numberToTerraform(struct.size),
        type: cdktf.stringToTerraform(struct.type),
        volumes_per_instance: cdktf.numberToTerraform(struct.volumesPerInstance)
    };
}
function emrClusterCoreInstanceGroupToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        autoscaling_policy: cdktf.stringToTerraform(struct.autoscalingPolicy),
        bid_price: cdktf.stringToTerraform(struct.bidPrice),
        instance_count: cdktf.numberToTerraform(struct.instanceCount),
        instance_type: cdktf.stringToTerraform(struct.instanceType),
        name: cdktf.stringToTerraform(struct.name),
        ebs_config: cdktf.listMapper(emrClusterCoreInstanceGroupEbsConfigToTerraform)(struct.ebsConfig)
    };
}
function emrClusterEc2AttributesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        additional_master_security_groups: cdktf.stringToTerraform(struct.additionalMasterSecurityGroups),
        additional_slave_security_groups: cdktf.stringToTerraform(struct.additionalSlaveSecurityGroups),
        emr_managed_master_security_group: cdktf.stringToTerraform(struct.emrManagedMasterSecurityGroup),
        emr_managed_slave_security_group: cdktf.stringToTerraform(struct.emrManagedSlaveSecurityGroup),
        instance_profile: cdktf.stringToTerraform(struct.instanceProfile),
        key_name: cdktf.stringToTerraform(struct.keyName),
        service_access_security_group: cdktf.stringToTerraform(struct.serviceAccessSecurityGroup),
        subnet_id: cdktf.stringToTerraform(struct.subnetId),
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.subnetIds)
    };
}
function emrClusterKerberosAttributesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        ad_domain_join_password: cdktf.stringToTerraform(struct.adDomainJoinPassword),
        ad_domain_join_user: cdktf.stringToTerraform(struct.adDomainJoinUser),
        cross_realm_trust_principal_password: cdktf.stringToTerraform(struct.crossRealmTrustPrincipalPassword),
        kdc_admin_password: cdktf.stringToTerraform(struct.kdcAdminPassword),
        realm: cdktf.stringToTerraform(struct.realm)
    };
}
function emrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        classification: cdktf.stringToTerraform(struct.classification),
        properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct.properties)
    };
}
function emrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        iops: cdktf.numberToTerraform(struct.iops),
        size: cdktf.numberToTerraform(struct.size),
        type: cdktf.stringToTerraform(struct.type),
        volumes_per_instance: cdktf.numberToTerraform(struct.volumesPerInstance)
    };
}
function emrClusterMasterInstanceFleetInstanceTypeConfigsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bid_price: cdktf.stringToTerraform(struct.bidPrice),
        bid_price_as_percentage_of_on_demand_price: cdktf.numberToTerraform(struct.bidPriceAsPercentageOfOnDemandPrice),
        instance_type: cdktf.stringToTerraform(struct.instanceType),
        weighted_capacity: cdktf.numberToTerraform(struct.weightedCapacity),
        configurations: cdktf.listMapper(emrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsToTerraform)(struct.configurations),
        ebs_config: cdktf.listMapper(emrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigToTerraform)(struct.ebsConfig)
    };
}
function emrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        allocation_strategy: cdktf.stringToTerraform(struct.allocationStrategy)
    };
}
function emrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        allocation_strategy: cdktf.stringToTerraform(struct.allocationStrategy),
        block_duration_minutes: cdktf.numberToTerraform(struct.blockDurationMinutes),
        timeout_action: cdktf.stringToTerraform(struct.timeoutAction),
        timeout_duration_minutes: cdktf.numberToTerraform(struct.timeoutDurationMinutes)
    };
}
function emrClusterMasterInstanceFleetLaunchSpecificationsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        on_demand_specification: cdktf.listMapper(emrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationToTerraform)(struct.onDemandSpecification),
        spot_specification: cdktf.listMapper(emrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationToTerraform)(struct.spotSpecification)
    };
}
function emrClusterMasterInstanceFleetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        target_on_demand_capacity: cdktf.numberToTerraform(struct.targetOnDemandCapacity),
        target_spot_capacity: cdktf.numberToTerraform(struct.targetSpotCapacity),
        instance_type_configs: cdktf.listMapper(emrClusterMasterInstanceFleetInstanceTypeConfigsToTerraform)(struct.instanceTypeConfigs),
        launch_specifications: cdktf.listMapper(emrClusterMasterInstanceFleetLaunchSpecificationsToTerraform)(struct.launchSpecifications)
    };
}
function emrClusterMasterInstanceGroupEbsConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        iops: cdktf.numberToTerraform(struct.iops),
        size: cdktf.numberToTerraform(struct.size),
        type: cdktf.stringToTerraform(struct.type),
        volumes_per_instance: cdktf.numberToTerraform(struct.volumesPerInstance)
    };
}
function emrClusterMasterInstanceGroupToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bid_price: cdktf.stringToTerraform(struct.bidPrice),
        instance_count: cdktf.numberToTerraform(struct.instanceCount),
        instance_type: cdktf.stringToTerraform(struct.instanceType),
        name: cdktf.stringToTerraform(struct.name),
        ebs_config: cdktf.listMapper(emrClusterMasterInstanceGroupEbsConfigToTerraform)(struct.ebsConfig)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html aws_emr_cluster}
*/
var EmrCluster = /** @class */ (function (_super) {
    __extends(EmrCluster, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html aws_emr_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EmrClusterConfig
    */
    function EmrCluster(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_emr_cluster',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._additionalInfo = config.additionalInfo;
        _this._applications = config.applications;
        _this._autoscalingRole = config.autoscalingRole;
        _this._configurations = config.configurations;
        _this._configurationsJson = config.configurationsJson;
        _this._customAmiId = config.customAmiId;
        _this._ebsRootVolumeSize = config.ebsRootVolumeSize;
        _this._keepJobFlowAliveWhenNoSteps = config.keepJobFlowAliveWhenNoSteps;
        _this._logEncryptionKmsKeyId = config.logEncryptionKmsKeyId;
        _this._logUri = config.logUri;
        _this._name = config.name;
        _this._releaseLabel = config.releaseLabel;
        _this._scaleDownBehavior = config.scaleDownBehavior;
        _this._securityConfiguration = config.securityConfiguration;
        _this._serviceRole = config.serviceRole;
        _this._step = config.step;
        _this._stepConcurrencyLevel = config.stepConcurrencyLevel;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._terminationProtection = config.terminationProtection;
        _this._visibleToAllUsers = config.visibleToAllUsers;
        _this._bootstrapAction = config.bootstrapAction;
        _this._coreInstanceFleet = config.coreInstanceFleet;
        _this._coreInstanceGroup = config.coreInstanceGroup;
        _this._ec2Attributes = config.ec2Attributes;
        _this._kerberosAttributes = config.kerberosAttributes;
        _this._masterInstanceFleet = config.masterInstanceFleet;
        _this._masterInstanceGroup = config.masterInstanceGroup;
        return _this;
    }
    Object.defineProperty(EmrCluster.prototype, "additionalInfo", {
        get: function () {
            return this.getStringAttribute('additional_info');
        },
        set: function (value) {
            this._additionalInfo = value;
        },
        enumerable: false,
        configurable: true
    });
    EmrCluster.prototype.resetAdditionalInfo = function () {
        this._additionalInfo = undefined;
    };
    Object.defineProperty(EmrCluster.prototype, "additionalInfoInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._additionalInfo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrCluster.prototype, "applications", {
        get: function () {
            return this.getListAttribute('applications');
        },
        set: function (value) {
            this._applications = value;
        },
        enumerable: false,
        configurable: true
    });
    EmrCluster.prototype.resetApplications = function () {
        this._applications = undefined;
    };
    Object.defineProperty(EmrCluster.prototype, "applicationsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._applications;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrCluster.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrCluster.prototype, "autoscalingRole", {
        get: function () {
            return this.getStringAttribute('autoscaling_role');
        },
        set: function (value) {
            this._autoscalingRole = value;
        },
        enumerable: false,
        configurable: true
    });
    EmrCluster.prototype.resetAutoscalingRole = function () {
        this._autoscalingRole = undefined;
    };
    Object.defineProperty(EmrCluster.prototype, "autoscalingRoleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoscalingRole;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrCluster.prototype, "clusterState", {
        // cluster_state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cluster_state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrCluster.prototype, "configurations", {
        get: function () {
            return this.getStringAttribute('configurations');
        },
        set: function (value) {
            this._configurations = value;
        },
        enumerable: false,
        configurable: true
    });
    EmrCluster.prototype.resetConfigurations = function () {
        this._configurations = undefined;
    };
    Object.defineProperty(EmrCluster.prototype, "configurationsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._configurations;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrCluster.prototype, "configurationsJson", {
        get: function () {
            return this.getStringAttribute('configurations_json');
        },
        set: function (value) {
            this._configurationsJson = value;
        },
        enumerable: false,
        configurable: true
    });
    EmrCluster.prototype.resetConfigurationsJson = function () {
        this._configurationsJson = undefined;
    };
    Object.defineProperty(EmrCluster.prototype, "configurationsJsonInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._configurationsJson;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrCluster.prototype, "customAmiId", {
        get: function () {
            return this.getStringAttribute('custom_ami_id');
        },
        set: function (value) {
            this._customAmiId = value;
        },
        enumerable: false,
        configurable: true
    });
    EmrCluster.prototype.resetCustomAmiId = function () {
        this._customAmiId = undefined;
    };
    Object.defineProperty(EmrCluster.prototype, "customAmiIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customAmiId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrCluster.prototype, "ebsRootVolumeSize", {
        get: function () {
            return this.getNumberAttribute('ebs_root_volume_size');
        },
        set: function (value) {
            this._ebsRootVolumeSize = value;
        },
        enumerable: false,
        configurable: true
    });
    EmrCluster.prototype.resetEbsRootVolumeSize = function () {
        this._ebsRootVolumeSize = undefined;
    };
    Object.defineProperty(EmrCluster.prototype, "ebsRootVolumeSizeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ebsRootVolumeSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrCluster.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrCluster.prototype, "keepJobFlowAliveWhenNoSteps", {
        get: function () {
            return this.getBooleanAttribute('keep_job_flow_alive_when_no_steps');
        },
        set: function (value) {
            this._keepJobFlowAliveWhenNoSteps = value;
        },
        enumerable: false,
        configurable: true
    });
    EmrCluster.prototype.resetKeepJobFlowAliveWhenNoSteps = function () {
        this._keepJobFlowAliveWhenNoSteps = undefined;
    };
    Object.defineProperty(EmrCluster.prototype, "keepJobFlowAliveWhenNoStepsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keepJobFlowAliveWhenNoSteps;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrCluster.prototype, "logEncryptionKmsKeyId", {
        get: function () {
            return this.getStringAttribute('log_encryption_kms_key_id');
        },
        set: function (value) {
            this._logEncryptionKmsKeyId = value;
        },
        enumerable: false,
        configurable: true
    });
    EmrCluster.prototype.resetLogEncryptionKmsKeyId = function () {
        this._logEncryptionKmsKeyId = undefined;
    };
    Object.defineProperty(EmrCluster.prototype, "logEncryptionKmsKeyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._logEncryptionKmsKeyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrCluster.prototype, "logUri", {
        get: function () {
            return this.getStringAttribute('log_uri');
        },
        set: function (value) {
            this._logUri = value;
        },
        enumerable: false,
        configurable: true
    });
    EmrCluster.prototype.resetLogUri = function () {
        this._logUri = undefined;
    };
    Object.defineProperty(EmrCluster.prototype, "logUriInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._logUri;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrCluster.prototype, "masterPublicDns", {
        // master_public_dns - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('master_public_dns');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrCluster.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrCluster.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrCluster.prototype, "releaseLabel", {
        get: function () {
            return this.getStringAttribute('release_label');
        },
        set: function (value) {
            this._releaseLabel = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrCluster.prototype, "releaseLabelInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._releaseLabel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrCluster.prototype, "scaleDownBehavior", {
        get: function () {
            return this.getStringAttribute('scale_down_behavior');
        },
        set: function (value) {
            this._scaleDownBehavior = value;
        },
        enumerable: false,
        configurable: true
    });
    EmrCluster.prototype.resetScaleDownBehavior = function () {
        this._scaleDownBehavior = undefined;
    };
    Object.defineProperty(EmrCluster.prototype, "scaleDownBehaviorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scaleDownBehavior;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrCluster.prototype, "securityConfiguration", {
        get: function () {
            return this.getStringAttribute('security_configuration');
        },
        set: function (value) {
            this._securityConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    EmrCluster.prototype.resetSecurityConfiguration = function () {
        this._securityConfiguration = undefined;
    };
    Object.defineProperty(EmrCluster.prototype, "securityConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._securityConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrCluster.prototype, "serviceRole", {
        get: function () {
            return this.getStringAttribute('service_role');
        },
        set: function (value) {
            this._serviceRole = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrCluster.prototype, "serviceRoleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serviceRole;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrCluster.prototype, "step", {
        get: function () {
            return this.interpolationForAttribute('step'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._step = value;
        },
        enumerable: false,
        configurable: true
    });
    EmrCluster.prototype.resetStep = function () {
        this._step = undefined;
    };
    Object.defineProperty(EmrCluster.prototype, "stepInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._step;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrCluster.prototype, "stepConcurrencyLevel", {
        get: function () {
            return this.getNumberAttribute('step_concurrency_level');
        },
        set: function (value) {
            this._stepConcurrencyLevel = value;
        },
        enumerable: false,
        configurable: true
    });
    EmrCluster.prototype.resetStepConcurrencyLevel = function () {
        this._stepConcurrencyLevel = undefined;
    };
    Object.defineProperty(EmrCluster.prototype, "stepConcurrencyLevelInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._stepConcurrencyLevel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrCluster.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    EmrCluster.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(EmrCluster.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrCluster.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    EmrCluster.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(EmrCluster.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrCluster.prototype, "terminationProtection", {
        get: function () {
            return this.getBooleanAttribute('termination_protection');
        },
        set: function (value) {
            this._terminationProtection = value;
        },
        enumerable: false,
        configurable: true
    });
    EmrCluster.prototype.resetTerminationProtection = function () {
        this._terminationProtection = undefined;
    };
    Object.defineProperty(EmrCluster.prototype, "terminationProtectionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._terminationProtection;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrCluster.prototype, "visibleToAllUsers", {
        get: function () {
            return this.getBooleanAttribute('visible_to_all_users');
        },
        set: function (value) {
            this._visibleToAllUsers = value;
        },
        enumerable: false,
        configurable: true
    });
    EmrCluster.prototype.resetVisibleToAllUsers = function () {
        this._visibleToAllUsers = undefined;
    };
    Object.defineProperty(EmrCluster.prototype, "visibleToAllUsersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._visibleToAllUsers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrCluster.prototype, "bootstrapAction", {
        get: function () {
            return this.interpolationForAttribute('bootstrap_action');
        },
        set: function (value) {
            this._bootstrapAction = value;
        },
        enumerable: false,
        configurable: true
    });
    EmrCluster.prototype.resetBootstrapAction = function () {
        this._bootstrapAction = undefined;
    };
    Object.defineProperty(EmrCluster.prototype, "bootstrapActionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bootstrapAction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrCluster.prototype, "coreInstanceFleet", {
        get: function () {
            return this.interpolationForAttribute('core_instance_fleet');
        },
        set: function (value) {
            this._coreInstanceFleet = value;
        },
        enumerable: false,
        configurable: true
    });
    EmrCluster.prototype.resetCoreInstanceFleet = function () {
        this._coreInstanceFleet = undefined;
    };
    Object.defineProperty(EmrCluster.prototype, "coreInstanceFleetInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._coreInstanceFleet;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrCluster.prototype, "coreInstanceGroup", {
        get: function () {
            return this.interpolationForAttribute('core_instance_group');
        },
        set: function (value) {
            this._coreInstanceGroup = value;
        },
        enumerable: false,
        configurable: true
    });
    EmrCluster.prototype.resetCoreInstanceGroup = function () {
        this._coreInstanceGroup = undefined;
    };
    Object.defineProperty(EmrCluster.prototype, "coreInstanceGroupInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._coreInstanceGroup;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrCluster.prototype, "ec2Attributes", {
        get: function () {
            return this.interpolationForAttribute('ec2_attributes');
        },
        set: function (value) {
            this._ec2Attributes = value;
        },
        enumerable: false,
        configurable: true
    });
    EmrCluster.prototype.resetEc2Attributes = function () {
        this._ec2Attributes = undefined;
    };
    Object.defineProperty(EmrCluster.prototype, "ec2AttributesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ec2Attributes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrCluster.prototype, "kerberosAttributes", {
        get: function () {
            return this.interpolationForAttribute('kerberos_attributes');
        },
        set: function (value) {
            this._kerberosAttributes = value;
        },
        enumerable: false,
        configurable: true
    });
    EmrCluster.prototype.resetKerberosAttributes = function () {
        this._kerberosAttributes = undefined;
    };
    Object.defineProperty(EmrCluster.prototype, "kerberosAttributesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kerberosAttributes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrCluster.prototype, "masterInstanceFleet", {
        get: function () {
            return this.interpolationForAttribute('master_instance_fleet');
        },
        set: function (value) {
            this._masterInstanceFleet = value;
        },
        enumerable: false,
        configurable: true
    });
    EmrCluster.prototype.resetMasterInstanceFleet = function () {
        this._masterInstanceFleet = undefined;
    };
    Object.defineProperty(EmrCluster.prototype, "masterInstanceFleetInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._masterInstanceFleet;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmrCluster.prototype, "masterInstanceGroup", {
        get: function () {
            return this.interpolationForAttribute('master_instance_group');
        },
        set: function (value) {
            this._masterInstanceGroup = value;
        },
        enumerable: false,
        configurable: true
    });
    EmrCluster.prototype.resetMasterInstanceGroup = function () {
        this._masterInstanceGroup = undefined;
    };
    Object.defineProperty(EmrCluster.prototype, "masterInstanceGroupInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._masterInstanceGroup;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    EmrCluster.prototype.synthesizeAttributes = function () {
        return {
            additional_info: cdktf.stringToTerraform(this._additionalInfo),
            applications: cdktf.listMapper(cdktf.stringToTerraform)(this._applications),
            autoscaling_role: cdktf.stringToTerraform(this._autoscalingRole),
            configurations: cdktf.stringToTerraform(this._configurations),
            configurations_json: cdktf.stringToTerraform(this._configurationsJson),
            custom_ami_id: cdktf.stringToTerraform(this._customAmiId),
            ebs_root_volume_size: cdktf.numberToTerraform(this._ebsRootVolumeSize),
            keep_job_flow_alive_when_no_steps: cdktf.booleanToTerraform(this._keepJobFlowAliveWhenNoSteps),
            log_encryption_kms_key_id: cdktf.stringToTerraform(this._logEncryptionKmsKeyId),
            log_uri: cdktf.stringToTerraform(this._logUri),
            name: cdktf.stringToTerraform(this._name),
            release_label: cdktf.stringToTerraform(this._releaseLabel),
            scale_down_behavior: cdktf.stringToTerraform(this._scaleDownBehavior),
            security_configuration: cdktf.stringToTerraform(this._securityConfiguration),
            service_role: cdktf.stringToTerraform(this._serviceRole),
            step: cdktf.listMapper(emrClusterStepToTerraform)(this._step),
            step_concurrency_level: cdktf.numberToTerraform(this._stepConcurrencyLevel),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            termination_protection: cdktf.booleanToTerraform(this._terminationProtection),
            visible_to_all_users: cdktf.booleanToTerraform(this._visibleToAllUsers),
            bootstrap_action: cdktf.listMapper(emrClusterBootstrapActionToTerraform)(this._bootstrapAction),
            core_instance_fleet: cdktf.listMapper(emrClusterCoreInstanceFleetToTerraform)(this._coreInstanceFleet),
            core_instance_group: cdktf.listMapper(emrClusterCoreInstanceGroupToTerraform)(this._coreInstanceGroup),
            ec2_attributes: cdktf.listMapper(emrClusterEc2AttributesToTerraform)(this._ec2Attributes),
            kerberos_attributes: cdktf.listMapper(emrClusterKerberosAttributesToTerraform)(this._kerberosAttributes),
            master_instance_fleet: cdktf.listMapper(emrClusterMasterInstanceFleetToTerraform)(this._masterInstanceFleet),
            master_instance_group: cdktf.listMapper(emrClusterMasterInstanceGroupToTerraform)(this._masterInstanceGroup)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    EmrCluster.tfResourceType = "aws_emr_cluster";
    return EmrCluster;
}(cdktf.TerraformResource));
exports.EmrCluster = EmrCluster;
