"use strict";
// https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html
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
exports.SpotInstanceRequest = void 0;
var cdktf = require("cdktf");
function spotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        capacity_reservation_id: cdktf.stringToTerraform(struct.capacityReservationId)
    };
}
function spotInstanceRequestCapacityReservationSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        capacity_reservation_preference: cdktf.stringToTerraform(struct.capacityReservationPreference),
        capacity_reservation_target: cdktf.listMapper(spotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetToTerraform)(struct.capacityReservationTarget)
    };
}
function spotInstanceRequestCreditSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cpu_credits: cdktf.stringToTerraform(struct.cpuCredits)
    };
}
function spotInstanceRequestEbsBlockDeviceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        delete_on_termination: cdktf.booleanToTerraform(struct.deleteOnTermination),
        device_name: cdktf.stringToTerraform(struct.deviceName),
        encrypted: cdktf.booleanToTerraform(struct.encrypted),
        iops: cdktf.numberToTerraform(struct.iops),
        kms_key_id: cdktf.stringToTerraform(struct.kmsKeyId),
        snapshot_id: cdktf.stringToTerraform(struct.snapshotId),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct.tags),
        throughput: cdktf.numberToTerraform(struct.throughput),
        volume_size: cdktf.numberToTerraform(struct.volumeSize),
        volume_type: cdktf.stringToTerraform(struct.volumeType)
    };
}
function spotInstanceRequestEnclaveOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled)
    };
}
function spotInstanceRequestEphemeralBlockDeviceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        device_name: cdktf.stringToTerraform(struct.deviceName),
        no_device: cdktf.booleanToTerraform(struct.noDevice),
        virtual_name: cdktf.stringToTerraform(struct.virtualName)
    };
}
function spotInstanceRequestLaunchTemplateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
        name: cdktf.stringToTerraform(struct.name),
        version: cdktf.stringToTerraform(struct.version)
    };
}
function spotInstanceRequestMetadataOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        http_endpoint: cdktf.stringToTerraform(struct.httpEndpoint),
        http_put_response_hop_limit: cdktf.numberToTerraform(struct.httpPutResponseHopLimit),
        http_tokens: cdktf.stringToTerraform(struct.httpTokens)
    };
}
function spotInstanceRequestNetworkInterfaceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        delete_on_termination: cdktf.booleanToTerraform(struct.deleteOnTermination),
        device_index: cdktf.numberToTerraform(struct.deviceIndex),
        network_interface_id: cdktf.stringToTerraform(struct.networkInterfaceId)
    };
}
function spotInstanceRequestRootBlockDeviceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        delete_on_termination: cdktf.booleanToTerraform(struct.deleteOnTermination),
        encrypted: cdktf.booleanToTerraform(struct.encrypted),
        iops: cdktf.numberToTerraform(struct.iops),
        kms_key_id: cdktf.stringToTerraform(struct.kmsKeyId),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct.tags),
        throughput: cdktf.numberToTerraform(struct.throughput),
        volume_size: cdktf.numberToTerraform(struct.volumeSize),
        volume_type: cdktf.stringToTerraform(struct.volumeType)
    };
}
function spotInstanceRequestTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        "delete": cdktf.stringToTerraform(struct["delete"])
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html aws_spot_instance_request}
*/
var SpotInstanceRequest = /** @class */ (function (_super) {
    __extends(SpotInstanceRequest, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html aws_spot_instance_request} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SpotInstanceRequestConfig = {}
    */
    function SpotInstanceRequest(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_spot_instance_request',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._ami = config.ami;
        _this._associatePublicIpAddress = config.associatePublicIpAddress;
        _this._availabilityZone = config.availabilityZone;
        _this._blockDurationMinutes = config.blockDurationMinutes;
        _this._cpuCoreCount = config.cpuCoreCount;
        _this._cpuThreadsPerCore = config.cpuThreadsPerCore;
        _this._disableApiTermination = config.disableApiTermination;
        _this._ebsOptimized = config.ebsOptimized;
        _this._getPasswordData = config.fetchPasswordData;
        _this._hibernation = config.hibernation;
        _this._hostId = config.hostId;
        _this._iamInstanceProfile = config.iamInstanceProfile;
        _this._instanceInitiatedShutdownBehavior = config.instanceInitiatedShutdownBehavior;
        _this._instanceInterruptionBehavior = config.instanceInterruptionBehavior;
        _this._instanceInterruptionBehaviour = config.instanceInterruptionBehaviour;
        _this._instanceType = config.instanceType;
        _this._ipv6AddressCount = config.ipv6AddressCount;
        _this._ipv6Addresses = config.ipv6Addresses;
        _this._keyName = config.keyName;
        _this._launchGroup = config.launchGroup;
        _this._monitoring = config.monitoring;
        _this._placementGroup = config.placementGroup;
        _this._placementPartitionNumber = config.placementPartitionNumber;
        _this._privateIp = config.privateIp;
        _this._secondaryPrivateIps = config.secondaryPrivateIps;
        _this._securityGroups = config.securityGroups;
        _this._sourceDestCheck = config.sourceDestCheck;
        _this._spotPrice = config.spotPrice;
        _this._spotType = config.spotType;
        _this._subnetId = config.subnetId;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._tenancy = config.tenancy;
        _this._userData = config.userData;
        _this._userDataBase64 = config.userDataBase64;
        _this._validFrom = config.validFrom;
        _this._validUntil = config.validUntil;
        _this._volumeTags = config.volumeTags;
        _this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
        _this._waitForFulfillment = config.waitForFulfillment;
        _this._capacityReservationSpecification = config.capacityReservationSpecification;
        _this._creditSpecification = config.creditSpecification;
        _this._ebsBlockDevice = config.ebsBlockDevice;
        _this._enclaveOptions = config.enclaveOptions;
        _this._ephemeralBlockDevice = config.ephemeralBlockDevice;
        _this._launchTemplate = config.launchTemplate;
        _this._metadataOptions = config.metadataOptions;
        _this._networkInterface = config.networkInterface;
        _this._rootBlockDevice = config.rootBlockDevice;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(SpotInstanceRequest.prototype, "ami", {
        get: function () {
            return this.getStringAttribute('ami');
        },
        set: function (value) {
            this._ami = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotInstanceRequest.prototype.resetAmi = function () {
        this._ami = undefined;
    };
    Object.defineProperty(SpotInstanceRequest.prototype, "amiInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ami;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "associatePublicIpAddress", {
        get: function () {
            return this.getBooleanAttribute('associate_public_ip_address');
        },
        set: function (value) {
            this._associatePublicIpAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotInstanceRequest.prototype.resetAssociatePublicIpAddress = function () {
        this._associatePublicIpAddress = undefined;
    };
    Object.defineProperty(SpotInstanceRequest.prototype, "associatePublicIpAddressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._associatePublicIpAddress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "availabilityZone", {
        get: function () {
            return this.getStringAttribute('availability_zone');
        },
        set: function (value) {
            this._availabilityZone = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotInstanceRequest.prototype.resetAvailabilityZone = function () {
        this._availabilityZone = undefined;
    };
    Object.defineProperty(SpotInstanceRequest.prototype, "availabilityZoneInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._availabilityZone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "blockDurationMinutes", {
        get: function () {
            return this.getNumberAttribute('block_duration_minutes');
        },
        set: function (value) {
            this._blockDurationMinutes = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotInstanceRequest.prototype.resetBlockDurationMinutes = function () {
        this._blockDurationMinutes = undefined;
    };
    Object.defineProperty(SpotInstanceRequest.prototype, "blockDurationMinutesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._blockDurationMinutes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "cpuCoreCount", {
        get: function () {
            return this.getNumberAttribute('cpu_core_count');
        },
        set: function (value) {
            this._cpuCoreCount = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotInstanceRequest.prototype.resetCpuCoreCount = function () {
        this._cpuCoreCount = undefined;
    };
    Object.defineProperty(SpotInstanceRequest.prototype, "cpuCoreCountInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cpuCoreCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "cpuThreadsPerCore", {
        get: function () {
            return this.getNumberAttribute('cpu_threads_per_core');
        },
        set: function (value) {
            this._cpuThreadsPerCore = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotInstanceRequest.prototype.resetCpuThreadsPerCore = function () {
        this._cpuThreadsPerCore = undefined;
    };
    Object.defineProperty(SpotInstanceRequest.prototype, "cpuThreadsPerCoreInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cpuThreadsPerCore;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "disableApiTermination", {
        get: function () {
            return this.getBooleanAttribute('disable_api_termination');
        },
        set: function (value) {
            this._disableApiTermination = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotInstanceRequest.prototype.resetDisableApiTermination = function () {
        this._disableApiTermination = undefined;
    };
    Object.defineProperty(SpotInstanceRequest.prototype, "disableApiTerminationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._disableApiTermination;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "ebsOptimized", {
        get: function () {
            return this.getBooleanAttribute('ebs_optimized');
        },
        set: function (value) {
            this._ebsOptimized = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotInstanceRequest.prototype.resetEbsOptimized = function () {
        this._ebsOptimized = undefined;
    };
    Object.defineProperty(SpotInstanceRequest.prototype, "ebsOptimizedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ebsOptimized;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "fetchPasswordData", {
        get: function () {
            return this.getBooleanAttribute('get_password_data');
        },
        set: function (value) {
            this._getPasswordData = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotInstanceRequest.prototype.resetFetchPasswordData = function () {
        this._getPasswordData = undefined;
    };
    Object.defineProperty(SpotInstanceRequest.prototype, "fetchPasswordDataInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._getPasswordData;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "hibernation", {
        get: function () {
            return this.getBooleanAttribute('hibernation');
        },
        set: function (value) {
            this._hibernation = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotInstanceRequest.prototype.resetHibernation = function () {
        this._hibernation = undefined;
    };
    Object.defineProperty(SpotInstanceRequest.prototype, "hibernationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hibernation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "hostId", {
        get: function () {
            return this.getStringAttribute('host_id');
        },
        set: function (value) {
            this._hostId = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotInstanceRequest.prototype.resetHostId = function () {
        this._hostId = undefined;
    };
    Object.defineProperty(SpotInstanceRequest.prototype, "hostIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hostId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "iamInstanceProfile", {
        get: function () {
            return this.getStringAttribute('iam_instance_profile');
        },
        set: function (value) {
            this._iamInstanceProfile = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotInstanceRequest.prototype.resetIamInstanceProfile = function () {
        this._iamInstanceProfile = undefined;
    };
    Object.defineProperty(SpotInstanceRequest.prototype, "iamInstanceProfileInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._iamInstanceProfile;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "instanceInitiatedShutdownBehavior", {
        get: function () {
            return this.getStringAttribute('instance_initiated_shutdown_behavior');
        },
        set: function (value) {
            this._instanceInitiatedShutdownBehavior = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotInstanceRequest.prototype.resetInstanceInitiatedShutdownBehavior = function () {
        this._instanceInitiatedShutdownBehavior = undefined;
    };
    Object.defineProperty(SpotInstanceRequest.prototype, "instanceInitiatedShutdownBehaviorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceInitiatedShutdownBehavior;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "instanceInterruptionBehavior", {
        get: function () {
            return this.getStringAttribute('instance_interruption_behavior');
        },
        set: function (value) {
            this._instanceInterruptionBehavior = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotInstanceRequest.prototype.resetInstanceInterruptionBehavior = function () {
        this._instanceInterruptionBehavior = undefined;
    };
    Object.defineProperty(SpotInstanceRequest.prototype, "instanceInterruptionBehaviorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceInterruptionBehavior;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "instanceInterruptionBehaviour", {
        get: function () {
            return this.getStringAttribute('instance_interruption_behaviour');
        },
        set: function (value) {
            this._instanceInterruptionBehaviour = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotInstanceRequest.prototype.resetInstanceInterruptionBehaviour = function () {
        this._instanceInterruptionBehaviour = undefined;
    };
    Object.defineProperty(SpotInstanceRequest.prototype, "instanceInterruptionBehaviourInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceInterruptionBehaviour;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "instanceState", {
        // instance_state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('instance_state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "instanceType", {
        get: function () {
            return this.getStringAttribute('instance_type');
        },
        set: function (value) {
            this._instanceType = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotInstanceRequest.prototype.resetInstanceType = function () {
        this._instanceType = undefined;
    };
    Object.defineProperty(SpotInstanceRequest.prototype, "instanceTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "ipv6AddressCount", {
        get: function () {
            return this.getNumberAttribute('ipv6_address_count');
        },
        set: function (value) {
            this._ipv6AddressCount = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotInstanceRequest.prototype.resetIpv6AddressCount = function () {
        this._ipv6AddressCount = undefined;
    };
    Object.defineProperty(SpotInstanceRequest.prototype, "ipv6AddressCountInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipv6AddressCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "ipv6Addresses", {
        get: function () {
            return this.getListAttribute('ipv6_addresses');
        },
        set: function (value) {
            this._ipv6Addresses = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotInstanceRequest.prototype.resetIpv6Addresses = function () {
        this._ipv6Addresses = undefined;
    };
    Object.defineProperty(SpotInstanceRequest.prototype, "ipv6AddressesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipv6Addresses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "keyName", {
        get: function () {
            return this.getStringAttribute('key_name');
        },
        set: function (value) {
            this._keyName = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotInstanceRequest.prototype.resetKeyName = function () {
        this._keyName = undefined;
    };
    Object.defineProperty(SpotInstanceRequest.prototype, "keyNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keyName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "launchGroup", {
        get: function () {
            return this.getStringAttribute('launch_group');
        },
        set: function (value) {
            this._launchGroup = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotInstanceRequest.prototype.resetLaunchGroup = function () {
        this._launchGroup = undefined;
    };
    Object.defineProperty(SpotInstanceRequest.prototype, "launchGroupInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._launchGroup;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "monitoring", {
        get: function () {
            return this.getBooleanAttribute('monitoring');
        },
        set: function (value) {
            this._monitoring = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotInstanceRequest.prototype.resetMonitoring = function () {
        this._monitoring = undefined;
    };
    Object.defineProperty(SpotInstanceRequest.prototype, "monitoringInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._monitoring;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "outpostArn", {
        // outpost_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('outpost_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "passwordData", {
        // password_data - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('password_data');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "placementGroup", {
        get: function () {
            return this.getStringAttribute('placement_group');
        },
        set: function (value) {
            this._placementGroup = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotInstanceRequest.prototype.resetPlacementGroup = function () {
        this._placementGroup = undefined;
    };
    Object.defineProperty(SpotInstanceRequest.prototype, "placementGroupInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._placementGroup;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "placementPartitionNumber", {
        get: function () {
            return this.getNumberAttribute('placement_partition_number');
        },
        set: function (value) {
            this._placementPartitionNumber = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotInstanceRequest.prototype.resetPlacementPartitionNumber = function () {
        this._placementPartitionNumber = undefined;
    };
    Object.defineProperty(SpotInstanceRequest.prototype, "placementPartitionNumberInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._placementPartitionNumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "primaryNetworkInterfaceId", {
        // primary_network_interface_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('primary_network_interface_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "privateDns", {
        // private_dns - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('private_dns');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "privateIp", {
        get: function () {
            return this.getStringAttribute('private_ip');
        },
        set: function (value) {
            this._privateIp = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotInstanceRequest.prototype.resetPrivateIp = function () {
        this._privateIp = undefined;
    };
    Object.defineProperty(SpotInstanceRequest.prototype, "privateIpInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._privateIp;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "publicDns", {
        // public_dns - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('public_dns');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "publicIp", {
        // public_ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('public_ip');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "secondaryPrivateIps", {
        get: function () {
            return this.getListAttribute('secondary_private_ips');
        },
        set: function (value) {
            this._secondaryPrivateIps = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotInstanceRequest.prototype.resetSecondaryPrivateIps = function () {
        this._secondaryPrivateIps = undefined;
    };
    Object.defineProperty(SpotInstanceRequest.prototype, "secondaryPrivateIpsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secondaryPrivateIps;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "securityGroups", {
        get: function () {
            return this.getListAttribute('security_groups');
        },
        set: function (value) {
            this._securityGroups = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotInstanceRequest.prototype.resetSecurityGroups = function () {
        this._securityGroups = undefined;
    };
    Object.defineProperty(SpotInstanceRequest.prototype, "securityGroupsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._securityGroups;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "sourceDestCheck", {
        get: function () {
            return this.getBooleanAttribute('source_dest_check');
        },
        set: function (value) {
            this._sourceDestCheck = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotInstanceRequest.prototype.resetSourceDestCheck = function () {
        this._sourceDestCheck = undefined;
    };
    Object.defineProperty(SpotInstanceRequest.prototype, "sourceDestCheckInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sourceDestCheck;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "spotBidStatus", {
        // spot_bid_status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('spot_bid_status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "spotInstanceId", {
        // spot_instance_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('spot_instance_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "spotPrice", {
        get: function () {
            return this.getStringAttribute('spot_price');
        },
        set: function (value) {
            this._spotPrice = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotInstanceRequest.prototype.resetSpotPrice = function () {
        this._spotPrice = undefined;
    };
    Object.defineProperty(SpotInstanceRequest.prototype, "spotPriceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._spotPrice;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "spotRequestState", {
        // spot_request_state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('spot_request_state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "spotType", {
        get: function () {
            return this.getStringAttribute('spot_type');
        },
        set: function (value) {
            this._spotType = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotInstanceRequest.prototype.resetSpotType = function () {
        this._spotType = undefined;
    };
    Object.defineProperty(SpotInstanceRequest.prototype, "spotTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._spotType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "subnetId", {
        get: function () {
            return this.getStringAttribute('subnet_id');
        },
        set: function (value) {
            this._subnetId = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotInstanceRequest.prototype.resetSubnetId = function () {
        this._subnetId = undefined;
    };
    Object.defineProperty(SpotInstanceRequest.prototype, "subnetIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subnetId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotInstanceRequest.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(SpotInstanceRequest.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotInstanceRequest.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(SpotInstanceRequest.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "tenancy", {
        get: function () {
            return this.getStringAttribute('tenancy');
        },
        set: function (value) {
            this._tenancy = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotInstanceRequest.prototype.resetTenancy = function () {
        this._tenancy = undefined;
    };
    Object.defineProperty(SpotInstanceRequest.prototype, "tenancyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tenancy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "userData", {
        get: function () {
            return this.getStringAttribute('user_data');
        },
        set: function (value) {
            this._userData = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotInstanceRequest.prototype.resetUserData = function () {
        this._userData = undefined;
    };
    Object.defineProperty(SpotInstanceRequest.prototype, "userDataInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userData;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "userDataBase64", {
        get: function () {
            return this.getStringAttribute('user_data_base64');
        },
        set: function (value) {
            this._userDataBase64 = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotInstanceRequest.prototype.resetUserDataBase64 = function () {
        this._userDataBase64 = undefined;
    };
    Object.defineProperty(SpotInstanceRequest.prototype, "userDataBase64Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userDataBase64;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "validFrom", {
        get: function () {
            return this.getStringAttribute('valid_from');
        },
        set: function (value) {
            this._validFrom = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotInstanceRequest.prototype.resetValidFrom = function () {
        this._validFrom = undefined;
    };
    Object.defineProperty(SpotInstanceRequest.prototype, "validFromInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._validFrom;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "validUntil", {
        get: function () {
            return this.getStringAttribute('valid_until');
        },
        set: function (value) {
            this._validUntil = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotInstanceRequest.prototype.resetValidUntil = function () {
        this._validUntil = undefined;
    };
    Object.defineProperty(SpotInstanceRequest.prototype, "validUntilInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._validUntil;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "volumeTags", {
        get: function () {
            return this.interpolationForAttribute('volume_tags');
        },
        set: function (value) {
            this._volumeTags = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotInstanceRequest.prototype.resetVolumeTags = function () {
        this._volumeTags = undefined;
    };
    Object.defineProperty(SpotInstanceRequest.prototype, "volumeTagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._volumeTags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "vpcSecurityGroupIds", {
        get: function () {
            return this.getListAttribute('vpc_security_group_ids');
        },
        set: function (value) {
            this._vpcSecurityGroupIds = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotInstanceRequest.prototype.resetVpcSecurityGroupIds = function () {
        this._vpcSecurityGroupIds = undefined;
    };
    Object.defineProperty(SpotInstanceRequest.prototype, "vpcSecurityGroupIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcSecurityGroupIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "waitForFulfillment", {
        get: function () {
            return this.getBooleanAttribute('wait_for_fulfillment');
        },
        set: function (value) {
            this._waitForFulfillment = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotInstanceRequest.prototype.resetWaitForFulfillment = function () {
        this._waitForFulfillment = undefined;
    };
    Object.defineProperty(SpotInstanceRequest.prototype, "waitForFulfillmentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._waitForFulfillment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "capacityReservationSpecification", {
        get: function () {
            return this.interpolationForAttribute('capacity_reservation_specification');
        },
        set: function (value) {
            this._capacityReservationSpecification = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotInstanceRequest.prototype.resetCapacityReservationSpecification = function () {
        this._capacityReservationSpecification = undefined;
    };
    Object.defineProperty(SpotInstanceRequest.prototype, "capacityReservationSpecificationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._capacityReservationSpecification;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "creditSpecification", {
        get: function () {
            return this.interpolationForAttribute('credit_specification');
        },
        set: function (value) {
            this._creditSpecification = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotInstanceRequest.prototype.resetCreditSpecification = function () {
        this._creditSpecification = undefined;
    };
    Object.defineProperty(SpotInstanceRequest.prototype, "creditSpecificationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._creditSpecification;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "ebsBlockDevice", {
        get: function () {
            return this.interpolationForAttribute('ebs_block_device');
        },
        set: function (value) {
            this._ebsBlockDevice = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotInstanceRequest.prototype.resetEbsBlockDevice = function () {
        this._ebsBlockDevice = undefined;
    };
    Object.defineProperty(SpotInstanceRequest.prototype, "ebsBlockDeviceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ebsBlockDevice;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "enclaveOptions", {
        get: function () {
            return this.interpolationForAttribute('enclave_options');
        },
        set: function (value) {
            this._enclaveOptions = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotInstanceRequest.prototype.resetEnclaveOptions = function () {
        this._enclaveOptions = undefined;
    };
    Object.defineProperty(SpotInstanceRequest.prototype, "enclaveOptionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enclaveOptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "ephemeralBlockDevice", {
        get: function () {
            return this.interpolationForAttribute('ephemeral_block_device');
        },
        set: function (value) {
            this._ephemeralBlockDevice = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotInstanceRequest.prototype.resetEphemeralBlockDevice = function () {
        this._ephemeralBlockDevice = undefined;
    };
    Object.defineProperty(SpotInstanceRequest.prototype, "ephemeralBlockDeviceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ephemeralBlockDevice;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "launchTemplate", {
        get: function () {
            return this.interpolationForAttribute('launch_template');
        },
        set: function (value) {
            this._launchTemplate = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotInstanceRequest.prototype.resetLaunchTemplate = function () {
        this._launchTemplate = undefined;
    };
    Object.defineProperty(SpotInstanceRequest.prototype, "launchTemplateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._launchTemplate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "metadataOptions", {
        get: function () {
            return this.interpolationForAttribute('metadata_options');
        },
        set: function (value) {
            this._metadataOptions = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotInstanceRequest.prototype.resetMetadataOptions = function () {
        this._metadataOptions = undefined;
    };
    Object.defineProperty(SpotInstanceRequest.prototype, "metadataOptionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._metadataOptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "networkInterface", {
        get: function () {
            return this.interpolationForAttribute('network_interface');
        },
        set: function (value) {
            this._networkInterface = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotInstanceRequest.prototype.resetNetworkInterface = function () {
        this._networkInterface = undefined;
    };
    Object.defineProperty(SpotInstanceRequest.prototype, "networkInterfaceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._networkInterface;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "rootBlockDevice", {
        get: function () {
            return this.interpolationForAttribute('root_block_device');
        },
        set: function (value) {
            this._rootBlockDevice = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotInstanceRequest.prototype.resetRootBlockDevice = function () {
        this._rootBlockDevice = undefined;
    };
    Object.defineProperty(SpotInstanceRequest.prototype, "rootBlockDeviceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rootBlockDevice;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpotInstanceRequest.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    SpotInstanceRequest.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(SpotInstanceRequest.prototype, "timeoutsInput", {
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
    SpotInstanceRequest.prototype.synthesizeAttributes = function () {
        return {
            ami: cdktf.stringToTerraform(this._ami),
            associate_public_ip_address: cdktf.booleanToTerraform(this._associatePublicIpAddress),
            availability_zone: cdktf.stringToTerraform(this._availabilityZone),
            block_duration_minutes: cdktf.numberToTerraform(this._blockDurationMinutes),
            cpu_core_count: cdktf.numberToTerraform(this._cpuCoreCount),
            cpu_threads_per_core: cdktf.numberToTerraform(this._cpuThreadsPerCore),
            disable_api_termination: cdktf.booleanToTerraform(this._disableApiTermination),
            ebs_optimized: cdktf.booleanToTerraform(this._ebsOptimized),
            get_password_data: cdktf.booleanToTerraform(this._getPasswordData),
            hibernation: cdktf.booleanToTerraform(this._hibernation),
            host_id: cdktf.stringToTerraform(this._hostId),
            iam_instance_profile: cdktf.stringToTerraform(this._iamInstanceProfile),
            instance_initiated_shutdown_behavior: cdktf.stringToTerraform(this._instanceInitiatedShutdownBehavior),
            instance_interruption_behavior: cdktf.stringToTerraform(this._instanceInterruptionBehavior),
            instance_interruption_behaviour: cdktf.stringToTerraform(this._instanceInterruptionBehaviour),
            instance_type: cdktf.stringToTerraform(this._instanceType),
            ipv6_address_count: cdktf.numberToTerraform(this._ipv6AddressCount),
            ipv6_addresses: cdktf.listMapper(cdktf.stringToTerraform)(this._ipv6Addresses),
            key_name: cdktf.stringToTerraform(this._keyName),
            launch_group: cdktf.stringToTerraform(this._launchGroup),
            monitoring: cdktf.booleanToTerraform(this._monitoring),
            placement_group: cdktf.stringToTerraform(this._placementGroup),
            placement_partition_number: cdktf.numberToTerraform(this._placementPartitionNumber),
            private_ip: cdktf.stringToTerraform(this._privateIp),
            secondary_private_ips: cdktf.listMapper(cdktf.stringToTerraform)(this._secondaryPrivateIps),
            security_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroups),
            source_dest_check: cdktf.booleanToTerraform(this._sourceDestCheck),
            spot_price: cdktf.stringToTerraform(this._spotPrice),
            spot_type: cdktf.stringToTerraform(this._spotType),
            subnet_id: cdktf.stringToTerraform(this._subnetId),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            tenancy: cdktf.stringToTerraform(this._tenancy),
            user_data: cdktf.stringToTerraform(this._userData),
            user_data_base64: cdktf.stringToTerraform(this._userDataBase64),
            valid_from: cdktf.stringToTerraform(this._validFrom),
            valid_until: cdktf.stringToTerraform(this._validUntil),
            volume_tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._volumeTags),
            vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSecurityGroupIds),
            wait_for_fulfillment: cdktf.booleanToTerraform(this._waitForFulfillment),
            capacity_reservation_specification: cdktf.listMapper(spotInstanceRequestCapacityReservationSpecificationToTerraform)(this._capacityReservationSpecification),
            credit_specification: cdktf.listMapper(spotInstanceRequestCreditSpecificationToTerraform)(this._creditSpecification),
            ebs_block_device: cdktf.listMapper(spotInstanceRequestEbsBlockDeviceToTerraform)(this._ebsBlockDevice),
            enclave_options: cdktf.listMapper(spotInstanceRequestEnclaveOptionsToTerraform)(this._enclaveOptions),
            ephemeral_block_device: cdktf.listMapper(spotInstanceRequestEphemeralBlockDeviceToTerraform)(this._ephemeralBlockDevice),
            launch_template: cdktf.listMapper(spotInstanceRequestLaunchTemplateToTerraform)(this._launchTemplate),
            metadata_options: cdktf.listMapper(spotInstanceRequestMetadataOptionsToTerraform)(this._metadataOptions),
            network_interface: cdktf.listMapper(spotInstanceRequestNetworkInterfaceToTerraform)(this._networkInterface),
            root_block_device: cdktf.listMapper(spotInstanceRequestRootBlockDeviceToTerraform)(this._rootBlockDevice),
            timeouts: spotInstanceRequestTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SpotInstanceRequest.tfResourceType = "aws_spot_instance_request";
    return SpotInstanceRequest;
}(cdktf.TerraformResource));
exports.SpotInstanceRequest = SpotInstanceRequest;
