"use strict";
// https://www.terraform.io/docs/providers/aws/r/launch_template.html
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
exports.LaunchTemplate = void 0;
var cdktf = require("cdktf");
function launchTemplateBlockDeviceMappingsEbsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        delete_on_termination: cdktf.stringToTerraform(struct.deleteOnTermination),
        encrypted: cdktf.stringToTerraform(struct.encrypted),
        iops: cdktf.numberToTerraform(struct.iops),
        kms_key_id: cdktf.stringToTerraform(struct.kmsKeyId),
        snapshot_id: cdktf.stringToTerraform(struct.snapshotId),
        throughput: cdktf.numberToTerraform(struct.throughput),
        volume_size: cdktf.numberToTerraform(struct.volumeSize),
        volume_type: cdktf.stringToTerraform(struct.volumeType)
    };
}
function launchTemplateBlockDeviceMappingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        device_name: cdktf.stringToTerraform(struct.deviceName),
        no_device: cdktf.stringToTerraform(struct.noDevice),
        virtual_name: cdktf.stringToTerraform(struct.virtualName),
        ebs: cdktf.listMapper(launchTemplateBlockDeviceMappingsEbsToTerraform)(struct.ebs)
    };
}
function launchTemplateCapacityReservationSpecificationCapacityReservationTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        capacity_reservation_id: cdktf.stringToTerraform(struct.capacityReservationId)
    };
}
function launchTemplateCapacityReservationSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        capacity_reservation_preference: cdktf.stringToTerraform(struct.capacityReservationPreference),
        capacity_reservation_target: cdktf.listMapper(launchTemplateCapacityReservationSpecificationCapacityReservationTargetToTerraform)(struct.capacityReservationTarget)
    };
}
function launchTemplateCpuOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        core_count: cdktf.numberToTerraform(struct.coreCount),
        threads_per_core: cdktf.numberToTerraform(struct.threadsPerCore)
    };
}
function launchTemplateCreditSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cpu_credits: cdktf.stringToTerraform(struct.cpuCredits)
    };
}
function launchTemplateElasticGpuSpecificationsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        type: cdktf.stringToTerraform(struct.type)
    };
}
function launchTemplateElasticInferenceAcceleratorToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        type: cdktf.stringToTerraform(struct.type)
    };
}
function launchTemplateEnclaveOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled)
    };
}
function launchTemplateHibernationOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        configured: cdktf.booleanToTerraform(struct.configured)
    };
}
function launchTemplateIamInstanceProfileToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        name: cdktf.stringToTerraform(struct.name)
    };
}
function launchTemplateInstanceMarketOptionsSpotOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        block_duration_minutes: cdktf.numberToTerraform(struct.blockDurationMinutes),
        instance_interruption_behavior: cdktf.stringToTerraform(struct.instanceInterruptionBehavior),
        max_price: cdktf.stringToTerraform(struct.maxPrice),
        spot_instance_type: cdktf.stringToTerraform(struct.spotInstanceType),
        valid_until: cdktf.stringToTerraform(struct.validUntil)
    };
}
function launchTemplateInstanceMarketOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        market_type: cdktf.stringToTerraform(struct.marketType),
        spot_options: cdktf.listMapper(launchTemplateInstanceMarketOptionsSpotOptionsToTerraform)(struct.spotOptions)
    };
}
function launchTemplateLicenseSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        license_configuration_arn: cdktf.stringToTerraform(struct.licenseConfigurationArn)
    };
}
function launchTemplateMetadataOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        http_endpoint: cdktf.stringToTerraform(struct.httpEndpoint),
        http_protocol_ipv6: cdktf.stringToTerraform(struct.httpProtocolIpv6),
        http_put_response_hop_limit: cdktf.numberToTerraform(struct.httpPutResponseHopLimit),
        http_tokens: cdktf.stringToTerraform(struct.httpTokens)
    };
}
function launchTemplateMonitoringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled)
    };
}
function launchTemplateNetworkInterfacesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        associate_carrier_ip_address: cdktf.stringToTerraform(struct.associateCarrierIpAddress),
        associate_public_ip_address: cdktf.stringToTerraform(struct.associatePublicIpAddress),
        delete_on_termination: cdktf.stringToTerraform(struct.deleteOnTermination),
        description: cdktf.stringToTerraform(struct.description),
        device_index: cdktf.numberToTerraform(struct.deviceIndex),
        interface_type: cdktf.stringToTerraform(struct.interfaceType),
        ipv4_address_count: cdktf.numberToTerraform(struct.ipv4AddressCount),
        ipv4_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct.ipv4Addresses),
        ipv6_address_count: cdktf.numberToTerraform(struct.ipv6AddressCount),
        ipv6_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct.ipv6Addresses),
        network_card_index: cdktf.numberToTerraform(struct.networkCardIndex),
        network_interface_id: cdktf.stringToTerraform(struct.networkInterfaceId),
        private_ip_address: cdktf.stringToTerraform(struct.privateIpAddress),
        security_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroups),
        subnet_id: cdktf.stringToTerraform(struct.subnetId)
    };
}
function launchTemplatePlacementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        affinity: cdktf.stringToTerraform(struct.affinity),
        availability_zone: cdktf.stringToTerraform(struct.availabilityZone),
        group_name: cdktf.stringToTerraform(struct.groupName),
        host_id: cdktf.stringToTerraform(struct.hostId),
        host_resource_group_arn: cdktf.stringToTerraform(struct.hostResourceGroupArn),
        partition_number: cdktf.numberToTerraform(struct.partitionNumber),
        spread_domain: cdktf.stringToTerraform(struct.spreadDomain),
        tenancy: cdktf.stringToTerraform(struct.tenancy)
    };
}
function launchTemplateTagSpecificationsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        resource_type: cdktf.stringToTerraform(struct.resourceType),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct.tags)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html aws_launch_template}
*/
var LaunchTemplate = /** @class */ (function (_super) {
    __extends(LaunchTemplate, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html aws_launch_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LaunchTemplateConfig = {}
    */
    function LaunchTemplate(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_launch_template',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._defaultVersion = config.defaultVersion;
        _this._description = config.description;
        _this._disableApiTermination = config.disableApiTermination;
        _this._ebsOptimized = config.ebsOptimized;
        _this._imageId = config.imageId;
        _this._instanceInitiatedShutdownBehavior = config.instanceInitiatedShutdownBehavior;
        _this._instanceType = config.instanceType;
        _this._kernelId = config.kernelId;
        _this._keyName = config.keyName;
        _this._name = config.name;
        _this._namePrefix = config.namePrefix;
        _this._ramDiskId = config.ramDiskId;
        _this._securityGroupNames = config.securityGroupNames;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._updateDefaultVersion = config.updateDefaultVersion;
        _this._userData = config.userData;
        _this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
        _this._blockDeviceMappings = config.blockDeviceMappings;
        _this._capacityReservationSpecification = config.capacityReservationSpecification;
        _this._cpuOptions = config.cpuOptions;
        _this._creditSpecification = config.creditSpecification;
        _this._elasticGpuSpecifications = config.elasticGpuSpecifications;
        _this._elasticInferenceAccelerator = config.elasticInferenceAccelerator;
        _this._enclaveOptions = config.enclaveOptions;
        _this._hibernationOptions = config.hibernationOptions;
        _this._iamInstanceProfile = config.iamInstanceProfile;
        _this._instanceMarketOptions = config.instanceMarketOptions;
        _this._licenseSpecification = config.licenseSpecification;
        _this._metadataOptions = config.metadataOptions;
        _this._monitoring = config.monitoring;
        _this._networkInterfaces = config.networkInterfaces;
        _this._placement = config.placement;
        _this._tagSpecifications = config.tagSpecifications;
        return _this;
    }
    Object.defineProperty(LaunchTemplate.prototype, "arn", {
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
    Object.defineProperty(LaunchTemplate.prototype, "defaultVersion", {
        get: function () {
            return this.getNumberAttribute('default_version');
        },
        set: function (value) {
            this._defaultVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    LaunchTemplate.prototype.resetDefaultVersion = function () {
        this._defaultVersion = undefined;
    };
    Object.defineProperty(LaunchTemplate.prototype, "defaultVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchTemplate.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    LaunchTemplate.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(LaunchTemplate.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchTemplate.prototype, "disableApiTermination", {
        get: function () {
            return this.getBooleanAttribute('disable_api_termination');
        },
        set: function (value) {
            this._disableApiTermination = value;
        },
        enumerable: false,
        configurable: true
    });
    LaunchTemplate.prototype.resetDisableApiTermination = function () {
        this._disableApiTermination = undefined;
    };
    Object.defineProperty(LaunchTemplate.prototype, "disableApiTerminationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._disableApiTermination;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchTemplate.prototype, "ebsOptimized", {
        get: function () {
            return this.getStringAttribute('ebs_optimized');
        },
        set: function (value) {
            this._ebsOptimized = value;
        },
        enumerable: false,
        configurable: true
    });
    LaunchTemplate.prototype.resetEbsOptimized = function () {
        this._ebsOptimized = undefined;
    };
    Object.defineProperty(LaunchTemplate.prototype, "ebsOptimizedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ebsOptimized;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchTemplate.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchTemplate.prototype, "imageId", {
        get: function () {
            return this.getStringAttribute('image_id');
        },
        set: function (value) {
            this._imageId = value;
        },
        enumerable: false,
        configurable: true
    });
    LaunchTemplate.prototype.resetImageId = function () {
        this._imageId = undefined;
    };
    Object.defineProperty(LaunchTemplate.prototype, "imageIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._imageId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchTemplate.prototype, "instanceInitiatedShutdownBehavior", {
        get: function () {
            return this.getStringAttribute('instance_initiated_shutdown_behavior');
        },
        set: function (value) {
            this._instanceInitiatedShutdownBehavior = value;
        },
        enumerable: false,
        configurable: true
    });
    LaunchTemplate.prototype.resetInstanceInitiatedShutdownBehavior = function () {
        this._instanceInitiatedShutdownBehavior = undefined;
    };
    Object.defineProperty(LaunchTemplate.prototype, "instanceInitiatedShutdownBehaviorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceInitiatedShutdownBehavior;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchTemplate.prototype, "instanceType", {
        get: function () {
            return this.getStringAttribute('instance_type');
        },
        set: function (value) {
            this._instanceType = value;
        },
        enumerable: false,
        configurable: true
    });
    LaunchTemplate.prototype.resetInstanceType = function () {
        this._instanceType = undefined;
    };
    Object.defineProperty(LaunchTemplate.prototype, "instanceTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchTemplate.prototype, "kernelId", {
        get: function () {
            return this.getStringAttribute('kernel_id');
        },
        set: function (value) {
            this._kernelId = value;
        },
        enumerable: false,
        configurable: true
    });
    LaunchTemplate.prototype.resetKernelId = function () {
        this._kernelId = undefined;
    };
    Object.defineProperty(LaunchTemplate.prototype, "kernelIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kernelId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchTemplate.prototype, "keyName", {
        get: function () {
            return this.getStringAttribute('key_name');
        },
        set: function (value) {
            this._keyName = value;
        },
        enumerable: false,
        configurable: true
    });
    LaunchTemplate.prototype.resetKeyName = function () {
        this._keyName = undefined;
    };
    Object.defineProperty(LaunchTemplate.prototype, "keyNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keyName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchTemplate.prototype, "latestVersion", {
        // latest_version - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('latest_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchTemplate.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    LaunchTemplate.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(LaunchTemplate.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchTemplate.prototype, "namePrefix", {
        get: function () {
            return this.getStringAttribute('name_prefix');
        },
        set: function (value) {
            this._namePrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    LaunchTemplate.prototype.resetNamePrefix = function () {
        this._namePrefix = undefined;
    };
    Object.defineProperty(LaunchTemplate.prototype, "namePrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._namePrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchTemplate.prototype, "ramDiskId", {
        get: function () {
            return this.getStringAttribute('ram_disk_id');
        },
        set: function (value) {
            this._ramDiskId = value;
        },
        enumerable: false,
        configurable: true
    });
    LaunchTemplate.prototype.resetRamDiskId = function () {
        this._ramDiskId = undefined;
    };
    Object.defineProperty(LaunchTemplate.prototype, "ramDiskIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ramDiskId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchTemplate.prototype, "securityGroupNames", {
        get: function () {
            return this.getListAttribute('security_group_names');
        },
        set: function (value) {
            this._securityGroupNames = value;
        },
        enumerable: false,
        configurable: true
    });
    LaunchTemplate.prototype.resetSecurityGroupNames = function () {
        this._securityGroupNames = undefined;
    };
    Object.defineProperty(LaunchTemplate.prototype, "securityGroupNamesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._securityGroupNames;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchTemplate.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    LaunchTemplate.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(LaunchTemplate.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchTemplate.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    LaunchTemplate.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(LaunchTemplate.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchTemplate.prototype, "updateDefaultVersion", {
        get: function () {
            return this.getBooleanAttribute('update_default_version');
        },
        set: function (value) {
            this._updateDefaultVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    LaunchTemplate.prototype.resetUpdateDefaultVersion = function () {
        this._updateDefaultVersion = undefined;
    };
    Object.defineProperty(LaunchTemplate.prototype, "updateDefaultVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._updateDefaultVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchTemplate.prototype, "userData", {
        get: function () {
            return this.getStringAttribute('user_data');
        },
        set: function (value) {
            this._userData = value;
        },
        enumerable: false,
        configurable: true
    });
    LaunchTemplate.prototype.resetUserData = function () {
        this._userData = undefined;
    };
    Object.defineProperty(LaunchTemplate.prototype, "userDataInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userData;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchTemplate.prototype, "vpcSecurityGroupIds", {
        get: function () {
            return this.getListAttribute('vpc_security_group_ids');
        },
        set: function (value) {
            this._vpcSecurityGroupIds = value;
        },
        enumerable: false,
        configurable: true
    });
    LaunchTemplate.prototype.resetVpcSecurityGroupIds = function () {
        this._vpcSecurityGroupIds = undefined;
    };
    Object.defineProperty(LaunchTemplate.prototype, "vpcSecurityGroupIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcSecurityGroupIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchTemplate.prototype, "blockDeviceMappings", {
        get: function () {
            return this.interpolationForAttribute('block_device_mappings');
        },
        set: function (value) {
            this._blockDeviceMappings = value;
        },
        enumerable: false,
        configurable: true
    });
    LaunchTemplate.prototype.resetBlockDeviceMappings = function () {
        this._blockDeviceMappings = undefined;
    };
    Object.defineProperty(LaunchTemplate.prototype, "blockDeviceMappingsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._blockDeviceMappings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchTemplate.prototype, "capacityReservationSpecification", {
        get: function () {
            return this.interpolationForAttribute('capacity_reservation_specification');
        },
        set: function (value) {
            this._capacityReservationSpecification = value;
        },
        enumerable: false,
        configurable: true
    });
    LaunchTemplate.prototype.resetCapacityReservationSpecification = function () {
        this._capacityReservationSpecification = undefined;
    };
    Object.defineProperty(LaunchTemplate.prototype, "capacityReservationSpecificationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._capacityReservationSpecification;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchTemplate.prototype, "cpuOptions", {
        get: function () {
            return this.interpolationForAttribute('cpu_options');
        },
        set: function (value) {
            this._cpuOptions = value;
        },
        enumerable: false,
        configurable: true
    });
    LaunchTemplate.prototype.resetCpuOptions = function () {
        this._cpuOptions = undefined;
    };
    Object.defineProperty(LaunchTemplate.prototype, "cpuOptionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cpuOptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchTemplate.prototype, "creditSpecification", {
        get: function () {
            return this.interpolationForAttribute('credit_specification');
        },
        set: function (value) {
            this._creditSpecification = value;
        },
        enumerable: false,
        configurable: true
    });
    LaunchTemplate.prototype.resetCreditSpecification = function () {
        this._creditSpecification = undefined;
    };
    Object.defineProperty(LaunchTemplate.prototype, "creditSpecificationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._creditSpecification;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchTemplate.prototype, "elasticGpuSpecifications", {
        get: function () {
            return this.interpolationForAttribute('elastic_gpu_specifications');
        },
        set: function (value) {
            this._elasticGpuSpecifications = value;
        },
        enumerable: false,
        configurable: true
    });
    LaunchTemplate.prototype.resetElasticGpuSpecifications = function () {
        this._elasticGpuSpecifications = undefined;
    };
    Object.defineProperty(LaunchTemplate.prototype, "elasticGpuSpecificationsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._elasticGpuSpecifications;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchTemplate.prototype, "elasticInferenceAccelerator", {
        get: function () {
            return this.interpolationForAttribute('elastic_inference_accelerator');
        },
        set: function (value) {
            this._elasticInferenceAccelerator = value;
        },
        enumerable: false,
        configurable: true
    });
    LaunchTemplate.prototype.resetElasticInferenceAccelerator = function () {
        this._elasticInferenceAccelerator = undefined;
    };
    Object.defineProperty(LaunchTemplate.prototype, "elasticInferenceAcceleratorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._elasticInferenceAccelerator;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchTemplate.prototype, "enclaveOptions", {
        get: function () {
            return this.interpolationForAttribute('enclave_options');
        },
        set: function (value) {
            this._enclaveOptions = value;
        },
        enumerable: false,
        configurable: true
    });
    LaunchTemplate.prototype.resetEnclaveOptions = function () {
        this._enclaveOptions = undefined;
    };
    Object.defineProperty(LaunchTemplate.prototype, "enclaveOptionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enclaveOptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchTemplate.prototype, "hibernationOptions", {
        get: function () {
            return this.interpolationForAttribute('hibernation_options');
        },
        set: function (value) {
            this._hibernationOptions = value;
        },
        enumerable: false,
        configurable: true
    });
    LaunchTemplate.prototype.resetHibernationOptions = function () {
        this._hibernationOptions = undefined;
    };
    Object.defineProperty(LaunchTemplate.prototype, "hibernationOptionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hibernationOptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchTemplate.prototype, "iamInstanceProfile", {
        get: function () {
            return this.interpolationForAttribute('iam_instance_profile');
        },
        set: function (value) {
            this._iamInstanceProfile = value;
        },
        enumerable: false,
        configurable: true
    });
    LaunchTemplate.prototype.resetIamInstanceProfile = function () {
        this._iamInstanceProfile = undefined;
    };
    Object.defineProperty(LaunchTemplate.prototype, "iamInstanceProfileInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._iamInstanceProfile;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchTemplate.prototype, "instanceMarketOptions", {
        get: function () {
            return this.interpolationForAttribute('instance_market_options');
        },
        set: function (value) {
            this._instanceMarketOptions = value;
        },
        enumerable: false,
        configurable: true
    });
    LaunchTemplate.prototype.resetInstanceMarketOptions = function () {
        this._instanceMarketOptions = undefined;
    };
    Object.defineProperty(LaunchTemplate.prototype, "instanceMarketOptionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceMarketOptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchTemplate.prototype, "licenseSpecification", {
        get: function () {
            return this.interpolationForAttribute('license_specification');
        },
        set: function (value) {
            this._licenseSpecification = value;
        },
        enumerable: false,
        configurable: true
    });
    LaunchTemplate.prototype.resetLicenseSpecification = function () {
        this._licenseSpecification = undefined;
    };
    Object.defineProperty(LaunchTemplate.prototype, "licenseSpecificationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._licenseSpecification;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchTemplate.prototype, "metadataOptions", {
        get: function () {
            return this.interpolationForAttribute('metadata_options');
        },
        set: function (value) {
            this._metadataOptions = value;
        },
        enumerable: false,
        configurable: true
    });
    LaunchTemplate.prototype.resetMetadataOptions = function () {
        this._metadataOptions = undefined;
    };
    Object.defineProperty(LaunchTemplate.prototype, "metadataOptionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._metadataOptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchTemplate.prototype, "monitoring", {
        get: function () {
            return this.interpolationForAttribute('monitoring');
        },
        set: function (value) {
            this._monitoring = value;
        },
        enumerable: false,
        configurable: true
    });
    LaunchTemplate.prototype.resetMonitoring = function () {
        this._monitoring = undefined;
    };
    Object.defineProperty(LaunchTemplate.prototype, "monitoringInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._monitoring;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchTemplate.prototype, "networkInterfaces", {
        get: function () {
            return this.interpolationForAttribute('network_interfaces');
        },
        set: function (value) {
            this._networkInterfaces = value;
        },
        enumerable: false,
        configurable: true
    });
    LaunchTemplate.prototype.resetNetworkInterfaces = function () {
        this._networkInterfaces = undefined;
    };
    Object.defineProperty(LaunchTemplate.prototype, "networkInterfacesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._networkInterfaces;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchTemplate.prototype, "placement", {
        get: function () {
            return this.interpolationForAttribute('placement');
        },
        set: function (value) {
            this._placement = value;
        },
        enumerable: false,
        configurable: true
    });
    LaunchTemplate.prototype.resetPlacement = function () {
        this._placement = undefined;
    };
    Object.defineProperty(LaunchTemplate.prototype, "placementInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._placement;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchTemplate.prototype, "tagSpecifications", {
        get: function () {
            return this.interpolationForAttribute('tag_specifications');
        },
        set: function (value) {
            this._tagSpecifications = value;
        },
        enumerable: false,
        configurable: true
    });
    LaunchTemplate.prototype.resetTagSpecifications = function () {
        this._tagSpecifications = undefined;
    };
    Object.defineProperty(LaunchTemplate.prototype, "tagSpecificationsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagSpecifications;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    LaunchTemplate.prototype.synthesizeAttributes = function () {
        return {
            default_version: cdktf.numberToTerraform(this._defaultVersion),
            description: cdktf.stringToTerraform(this._description),
            disable_api_termination: cdktf.booleanToTerraform(this._disableApiTermination),
            ebs_optimized: cdktf.stringToTerraform(this._ebsOptimized),
            image_id: cdktf.stringToTerraform(this._imageId),
            instance_initiated_shutdown_behavior: cdktf.stringToTerraform(this._instanceInitiatedShutdownBehavior),
            instance_type: cdktf.stringToTerraform(this._instanceType),
            kernel_id: cdktf.stringToTerraform(this._kernelId),
            key_name: cdktf.stringToTerraform(this._keyName),
            name: cdktf.stringToTerraform(this._name),
            name_prefix: cdktf.stringToTerraform(this._namePrefix),
            ram_disk_id: cdktf.stringToTerraform(this._ramDiskId),
            security_group_names: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupNames),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            update_default_version: cdktf.booleanToTerraform(this._updateDefaultVersion),
            user_data: cdktf.stringToTerraform(this._userData),
            vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSecurityGroupIds),
            block_device_mappings: cdktf.listMapper(launchTemplateBlockDeviceMappingsToTerraform)(this._blockDeviceMappings),
            capacity_reservation_specification: cdktf.listMapper(launchTemplateCapacityReservationSpecificationToTerraform)(this._capacityReservationSpecification),
            cpu_options: cdktf.listMapper(launchTemplateCpuOptionsToTerraform)(this._cpuOptions),
            credit_specification: cdktf.listMapper(launchTemplateCreditSpecificationToTerraform)(this._creditSpecification),
            elastic_gpu_specifications: cdktf.listMapper(launchTemplateElasticGpuSpecificationsToTerraform)(this._elasticGpuSpecifications),
            elastic_inference_accelerator: cdktf.listMapper(launchTemplateElasticInferenceAcceleratorToTerraform)(this._elasticInferenceAccelerator),
            enclave_options: cdktf.listMapper(launchTemplateEnclaveOptionsToTerraform)(this._enclaveOptions),
            hibernation_options: cdktf.listMapper(launchTemplateHibernationOptionsToTerraform)(this._hibernationOptions),
            iam_instance_profile: cdktf.listMapper(launchTemplateIamInstanceProfileToTerraform)(this._iamInstanceProfile),
            instance_market_options: cdktf.listMapper(launchTemplateInstanceMarketOptionsToTerraform)(this._instanceMarketOptions),
            license_specification: cdktf.listMapper(launchTemplateLicenseSpecificationToTerraform)(this._licenseSpecification),
            metadata_options: cdktf.listMapper(launchTemplateMetadataOptionsToTerraform)(this._metadataOptions),
            monitoring: cdktf.listMapper(launchTemplateMonitoringToTerraform)(this._monitoring),
            network_interfaces: cdktf.listMapper(launchTemplateNetworkInterfacesToTerraform)(this._networkInterfaces),
            placement: cdktf.listMapper(launchTemplatePlacementToTerraform)(this._placement),
            tag_specifications: cdktf.listMapper(launchTemplateTagSpecificationsToTerraform)(this._tagSpecifications)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    LaunchTemplate.tfResourceType = "aws_launch_template";
    return LaunchTemplate;
}(cdktf.TerraformResource));
exports.LaunchTemplate = LaunchTemplate;
