"use strict";
// https://www.terraform.io/docs/providers/aws/r/instance.html
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
exports.Instance = void 0;
var cdktf = require("cdktf");
function instanceCapacityReservationSpecificationCapacityReservationTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        capacity_reservation_id: cdktf.stringToTerraform(struct.capacityReservationId)
    };
}
function instanceCapacityReservationSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        capacity_reservation_preference: cdktf.stringToTerraform(struct.capacityReservationPreference),
        capacity_reservation_target: cdktf.listMapper(instanceCapacityReservationSpecificationCapacityReservationTargetToTerraform)(struct.capacityReservationTarget)
    };
}
function instanceCreditSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cpu_credits: cdktf.stringToTerraform(struct.cpuCredits)
    };
}
function instanceEbsBlockDeviceToTerraform(struct) {
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
function instanceEnclaveOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled)
    };
}
function instanceEphemeralBlockDeviceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        device_name: cdktf.stringToTerraform(struct.deviceName),
        no_device: cdktf.booleanToTerraform(struct.noDevice),
        virtual_name: cdktf.stringToTerraform(struct.virtualName)
    };
}
function instanceLaunchTemplateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
        name: cdktf.stringToTerraform(struct.name),
        version: cdktf.stringToTerraform(struct.version)
    };
}
function instanceMetadataOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        http_endpoint: cdktf.stringToTerraform(struct.httpEndpoint),
        http_put_response_hop_limit: cdktf.numberToTerraform(struct.httpPutResponseHopLimit),
        http_tokens: cdktf.stringToTerraform(struct.httpTokens)
    };
}
function instanceNetworkInterfaceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        delete_on_termination: cdktf.booleanToTerraform(struct.deleteOnTermination),
        device_index: cdktf.numberToTerraform(struct.deviceIndex),
        network_interface_id: cdktf.stringToTerraform(struct.networkInterfaceId)
    };
}
function instanceRootBlockDeviceToTerraform(struct) {
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
function instanceTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        "delete": cdktf.stringToTerraform(struct["delete"]),
        update: cdktf.stringToTerraform(struct.update)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/instance.html aws_instance}
*/
var Instance = /** @class */ (function (_super) {
    __extends(Instance, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/instance.html aws_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options InstanceConfig = {}
    */
    function Instance(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_instance',
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
        _this._cpuCoreCount = config.cpuCoreCount;
        _this._cpuThreadsPerCore = config.cpuThreadsPerCore;
        _this._disableApiTermination = config.disableApiTermination;
        _this._ebsOptimized = config.ebsOptimized;
        _this._getPasswordData = config.fetchPasswordData;
        _this._hibernation = config.hibernation;
        _this._hostId = config.hostId;
        _this._iamInstanceProfile = config.iamInstanceProfile;
        _this._instanceInitiatedShutdownBehavior = config.instanceInitiatedShutdownBehavior;
        _this._instanceType = config.instanceType;
        _this._ipv6AddressCount = config.ipv6AddressCount;
        _this._ipv6Addresses = config.ipv6Addresses;
        _this._keyName = config.keyName;
        _this._monitoring = config.monitoring;
        _this._placementGroup = config.placementGroup;
        _this._placementPartitionNumber = config.placementPartitionNumber;
        _this._privateIp = config.privateIp;
        _this._secondaryPrivateIps = config.secondaryPrivateIps;
        _this._securityGroups = config.securityGroups;
        _this._sourceDestCheck = config.sourceDestCheck;
        _this._subnetId = config.subnetId;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._tenancy = config.tenancy;
        _this._userData = config.userData;
        _this._userDataBase64 = config.userDataBase64;
        _this._volumeTags = config.volumeTags;
        _this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
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
    Object.defineProperty(Instance.prototype, "ami", {
        get: function () {
            return this.getStringAttribute('ami');
        },
        set: function (value) {
            this._ami = value;
        },
        enumerable: false,
        configurable: true
    });
    Instance.prototype.resetAmi = function () {
        this._ami = undefined;
    };
    Object.defineProperty(Instance.prototype, "amiInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ami;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instance.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instance.prototype, "associatePublicIpAddress", {
        get: function () {
            return this.getBooleanAttribute('associate_public_ip_address');
        },
        set: function (value) {
            this._associatePublicIpAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    Instance.prototype.resetAssociatePublicIpAddress = function () {
        this._associatePublicIpAddress = undefined;
    };
    Object.defineProperty(Instance.prototype, "associatePublicIpAddressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._associatePublicIpAddress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instance.prototype, "availabilityZone", {
        get: function () {
            return this.getStringAttribute('availability_zone');
        },
        set: function (value) {
            this._availabilityZone = value;
        },
        enumerable: false,
        configurable: true
    });
    Instance.prototype.resetAvailabilityZone = function () {
        this._availabilityZone = undefined;
    };
    Object.defineProperty(Instance.prototype, "availabilityZoneInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._availabilityZone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instance.prototype, "cpuCoreCount", {
        get: function () {
            return this.getNumberAttribute('cpu_core_count');
        },
        set: function (value) {
            this._cpuCoreCount = value;
        },
        enumerable: false,
        configurable: true
    });
    Instance.prototype.resetCpuCoreCount = function () {
        this._cpuCoreCount = undefined;
    };
    Object.defineProperty(Instance.prototype, "cpuCoreCountInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cpuCoreCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instance.prototype, "cpuThreadsPerCore", {
        get: function () {
            return this.getNumberAttribute('cpu_threads_per_core');
        },
        set: function (value) {
            this._cpuThreadsPerCore = value;
        },
        enumerable: false,
        configurable: true
    });
    Instance.prototype.resetCpuThreadsPerCore = function () {
        this._cpuThreadsPerCore = undefined;
    };
    Object.defineProperty(Instance.prototype, "cpuThreadsPerCoreInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cpuThreadsPerCore;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instance.prototype, "disableApiTermination", {
        get: function () {
            return this.getBooleanAttribute('disable_api_termination');
        },
        set: function (value) {
            this._disableApiTermination = value;
        },
        enumerable: false,
        configurable: true
    });
    Instance.prototype.resetDisableApiTermination = function () {
        this._disableApiTermination = undefined;
    };
    Object.defineProperty(Instance.prototype, "disableApiTerminationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._disableApiTermination;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instance.prototype, "ebsOptimized", {
        get: function () {
            return this.getBooleanAttribute('ebs_optimized');
        },
        set: function (value) {
            this._ebsOptimized = value;
        },
        enumerable: false,
        configurable: true
    });
    Instance.prototype.resetEbsOptimized = function () {
        this._ebsOptimized = undefined;
    };
    Object.defineProperty(Instance.prototype, "ebsOptimizedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ebsOptimized;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instance.prototype, "fetchPasswordData", {
        get: function () {
            return this.getBooleanAttribute('get_password_data');
        },
        set: function (value) {
            this._getPasswordData = value;
        },
        enumerable: false,
        configurable: true
    });
    Instance.prototype.resetFetchPasswordData = function () {
        this._getPasswordData = undefined;
    };
    Object.defineProperty(Instance.prototype, "fetchPasswordDataInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._getPasswordData;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instance.prototype, "hibernation", {
        get: function () {
            return this.getBooleanAttribute('hibernation');
        },
        set: function (value) {
            this._hibernation = value;
        },
        enumerable: false,
        configurable: true
    });
    Instance.prototype.resetHibernation = function () {
        this._hibernation = undefined;
    };
    Object.defineProperty(Instance.prototype, "hibernationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hibernation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instance.prototype, "hostId", {
        get: function () {
            return this.getStringAttribute('host_id');
        },
        set: function (value) {
            this._hostId = value;
        },
        enumerable: false,
        configurable: true
    });
    Instance.prototype.resetHostId = function () {
        this._hostId = undefined;
    };
    Object.defineProperty(Instance.prototype, "hostIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hostId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instance.prototype, "iamInstanceProfile", {
        get: function () {
            return this.getStringAttribute('iam_instance_profile');
        },
        set: function (value) {
            this._iamInstanceProfile = value;
        },
        enumerable: false,
        configurable: true
    });
    Instance.prototype.resetIamInstanceProfile = function () {
        this._iamInstanceProfile = undefined;
    };
    Object.defineProperty(Instance.prototype, "iamInstanceProfileInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._iamInstanceProfile;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instance.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instance.prototype, "instanceInitiatedShutdownBehavior", {
        get: function () {
            return this.getStringAttribute('instance_initiated_shutdown_behavior');
        },
        set: function (value) {
            this._instanceInitiatedShutdownBehavior = value;
        },
        enumerable: false,
        configurable: true
    });
    Instance.prototype.resetInstanceInitiatedShutdownBehavior = function () {
        this._instanceInitiatedShutdownBehavior = undefined;
    };
    Object.defineProperty(Instance.prototype, "instanceInitiatedShutdownBehaviorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceInitiatedShutdownBehavior;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instance.prototype, "instanceState", {
        // instance_state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('instance_state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instance.prototype, "instanceType", {
        get: function () {
            return this.getStringAttribute('instance_type');
        },
        set: function (value) {
            this._instanceType = value;
        },
        enumerable: false,
        configurable: true
    });
    Instance.prototype.resetInstanceType = function () {
        this._instanceType = undefined;
    };
    Object.defineProperty(Instance.prototype, "instanceTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instance.prototype, "ipv6AddressCount", {
        get: function () {
            return this.getNumberAttribute('ipv6_address_count');
        },
        set: function (value) {
            this._ipv6AddressCount = value;
        },
        enumerable: false,
        configurable: true
    });
    Instance.prototype.resetIpv6AddressCount = function () {
        this._ipv6AddressCount = undefined;
    };
    Object.defineProperty(Instance.prototype, "ipv6AddressCountInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipv6AddressCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instance.prototype, "ipv6Addresses", {
        get: function () {
            return this.getListAttribute('ipv6_addresses');
        },
        set: function (value) {
            this._ipv6Addresses = value;
        },
        enumerable: false,
        configurable: true
    });
    Instance.prototype.resetIpv6Addresses = function () {
        this._ipv6Addresses = undefined;
    };
    Object.defineProperty(Instance.prototype, "ipv6AddressesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipv6Addresses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instance.prototype, "keyName", {
        get: function () {
            return this.getStringAttribute('key_name');
        },
        set: function (value) {
            this._keyName = value;
        },
        enumerable: false,
        configurable: true
    });
    Instance.prototype.resetKeyName = function () {
        this._keyName = undefined;
    };
    Object.defineProperty(Instance.prototype, "keyNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keyName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instance.prototype, "monitoring", {
        get: function () {
            return this.getBooleanAttribute('monitoring');
        },
        set: function (value) {
            this._monitoring = value;
        },
        enumerable: false,
        configurable: true
    });
    Instance.prototype.resetMonitoring = function () {
        this._monitoring = undefined;
    };
    Object.defineProperty(Instance.prototype, "monitoringInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._monitoring;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instance.prototype, "outpostArn", {
        // outpost_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('outpost_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instance.prototype, "passwordData", {
        // password_data - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('password_data');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instance.prototype, "placementGroup", {
        get: function () {
            return this.getStringAttribute('placement_group');
        },
        set: function (value) {
            this._placementGroup = value;
        },
        enumerable: false,
        configurable: true
    });
    Instance.prototype.resetPlacementGroup = function () {
        this._placementGroup = undefined;
    };
    Object.defineProperty(Instance.prototype, "placementGroupInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._placementGroup;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instance.prototype, "placementPartitionNumber", {
        get: function () {
            return this.getNumberAttribute('placement_partition_number');
        },
        set: function (value) {
            this._placementPartitionNumber = value;
        },
        enumerable: false,
        configurable: true
    });
    Instance.prototype.resetPlacementPartitionNumber = function () {
        this._placementPartitionNumber = undefined;
    };
    Object.defineProperty(Instance.prototype, "placementPartitionNumberInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._placementPartitionNumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instance.prototype, "primaryNetworkInterfaceId", {
        // primary_network_interface_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('primary_network_interface_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instance.prototype, "privateDns", {
        // private_dns - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('private_dns');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instance.prototype, "privateIp", {
        get: function () {
            return this.getStringAttribute('private_ip');
        },
        set: function (value) {
            this._privateIp = value;
        },
        enumerable: false,
        configurable: true
    });
    Instance.prototype.resetPrivateIp = function () {
        this._privateIp = undefined;
    };
    Object.defineProperty(Instance.prototype, "privateIpInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._privateIp;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instance.prototype, "publicDns", {
        // public_dns - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('public_dns');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instance.prototype, "publicIp", {
        // public_ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('public_ip');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instance.prototype, "secondaryPrivateIps", {
        get: function () {
            return this.getListAttribute('secondary_private_ips');
        },
        set: function (value) {
            this._secondaryPrivateIps = value;
        },
        enumerable: false,
        configurable: true
    });
    Instance.prototype.resetSecondaryPrivateIps = function () {
        this._secondaryPrivateIps = undefined;
    };
    Object.defineProperty(Instance.prototype, "secondaryPrivateIpsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secondaryPrivateIps;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instance.prototype, "securityGroups", {
        get: function () {
            return this.getListAttribute('security_groups');
        },
        set: function (value) {
            this._securityGroups = value;
        },
        enumerable: false,
        configurable: true
    });
    Instance.prototype.resetSecurityGroups = function () {
        this._securityGroups = undefined;
    };
    Object.defineProperty(Instance.prototype, "securityGroupsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._securityGroups;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instance.prototype, "sourceDestCheck", {
        get: function () {
            return this.getBooleanAttribute('source_dest_check');
        },
        set: function (value) {
            this._sourceDestCheck = value;
        },
        enumerable: false,
        configurable: true
    });
    Instance.prototype.resetSourceDestCheck = function () {
        this._sourceDestCheck = undefined;
    };
    Object.defineProperty(Instance.prototype, "sourceDestCheckInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sourceDestCheck;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instance.prototype, "subnetId", {
        get: function () {
            return this.getStringAttribute('subnet_id');
        },
        set: function (value) {
            this._subnetId = value;
        },
        enumerable: false,
        configurable: true
    });
    Instance.prototype.resetSubnetId = function () {
        this._subnetId = undefined;
    };
    Object.defineProperty(Instance.prototype, "subnetIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subnetId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instance.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    Instance.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(Instance.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instance.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    Instance.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(Instance.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instance.prototype, "tenancy", {
        get: function () {
            return this.getStringAttribute('tenancy');
        },
        set: function (value) {
            this._tenancy = value;
        },
        enumerable: false,
        configurable: true
    });
    Instance.prototype.resetTenancy = function () {
        this._tenancy = undefined;
    };
    Object.defineProperty(Instance.prototype, "tenancyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tenancy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instance.prototype, "userData", {
        get: function () {
            return this.getStringAttribute('user_data');
        },
        set: function (value) {
            this._userData = value;
        },
        enumerable: false,
        configurable: true
    });
    Instance.prototype.resetUserData = function () {
        this._userData = undefined;
    };
    Object.defineProperty(Instance.prototype, "userDataInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userData;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instance.prototype, "userDataBase64", {
        get: function () {
            return this.getStringAttribute('user_data_base64');
        },
        set: function (value) {
            this._userDataBase64 = value;
        },
        enumerable: false,
        configurable: true
    });
    Instance.prototype.resetUserDataBase64 = function () {
        this._userDataBase64 = undefined;
    };
    Object.defineProperty(Instance.prototype, "userDataBase64Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userDataBase64;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instance.prototype, "volumeTags", {
        get: function () {
            return this.interpolationForAttribute('volume_tags');
        },
        set: function (value) {
            this._volumeTags = value;
        },
        enumerable: false,
        configurable: true
    });
    Instance.prototype.resetVolumeTags = function () {
        this._volumeTags = undefined;
    };
    Object.defineProperty(Instance.prototype, "volumeTagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._volumeTags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instance.prototype, "vpcSecurityGroupIds", {
        get: function () {
            return this.getListAttribute('vpc_security_group_ids');
        },
        set: function (value) {
            this._vpcSecurityGroupIds = value;
        },
        enumerable: false,
        configurable: true
    });
    Instance.prototype.resetVpcSecurityGroupIds = function () {
        this._vpcSecurityGroupIds = undefined;
    };
    Object.defineProperty(Instance.prototype, "vpcSecurityGroupIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcSecurityGroupIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instance.prototype, "capacityReservationSpecification", {
        get: function () {
            return this.interpolationForAttribute('capacity_reservation_specification');
        },
        set: function (value) {
            this._capacityReservationSpecification = value;
        },
        enumerable: false,
        configurable: true
    });
    Instance.prototype.resetCapacityReservationSpecification = function () {
        this._capacityReservationSpecification = undefined;
    };
    Object.defineProperty(Instance.prototype, "capacityReservationSpecificationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._capacityReservationSpecification;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instance.prototype, "creditSpecification", {
        get: function () {
            return this.interpolationForAttribute('credit_specification');
        },
        set: function (value) {
            this._creditSpecification = value;
        },
        enumerable: false,
        configurable: true
    });
    Instance.prototype.resetCreditSpecification = function () {
        this._creditSpecification = undefined;
    };
    Object.defineProperty(Instance.prototype, "creditSpecificationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._creditSpecification;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instance.prototype, "ebsBlockDevice", {
        get: function () {
            return this.interpolationForAttribute('ebs_block_device');
        },
        set: function (value) {
            this._ebsBlockDevice = value;
        },
        enumerable: false,
        configurable: true
    });
    Instance.prototype.resetEbsBlockDevice = function () {
        this._ebsBlockDevice = undefined;
    };
    Object.defineProperty(Instance.prototype, "ebsBlockDeviceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ebsBlockDevice;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instance.prototype, "enclaveOptions", {
        get: function () {
            return this.interpolationForAttribute('enclave_options');
        },
        set: function (value) {
            this._enclaveOptions = value;
        },
        enumerable: false,
        configurable: true
    });
    Instance.prototype.resetEnclaveOptions = function () {
        this._enclaveOptions = undefined;
    };
    Object.defineProperty(Instance.prototype, "enclaveOptionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enclaveOptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instance.prototype, "ephemeralBlockDevice", {
        get: function () {
            return this.interpolationForAttribute('ephemeral_block_device');
        },
        set: function (value) {
            this._ephemeralBlockDevice = value;
        },
        enumerable: false,
        configurable: true
    });
    Instance.prototype.resetEphemeralBlockDevice = function () {
        this._ephemeralBlockDevice = undefined;
    };
    Object.defineProperty(Instance.prototype, "ephemeralBlockDeviceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ephemeralBlockDevice;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instance.prototype, "launchTemplate", {
        get: function () {
            return this.interpolationForAttribute('launch_template');
        },
        set: function (value) {
            this._launchTemplate = value;
        },
        enumerable: false,
        configurable: true
    });
    Instance.prototype.resetLaunchTemplate = function () {
        this._launchTemplate = undefined;
    };
    Object.defineProperty(Instance.prototype, "launchTemplateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._launchTemplate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instance.prototype, "metadataOptions", {
        get: function () {
            return this.interpolationForAttribute('metadata_options');
        },
        set: function (value) {
            this._metadataOptions = value;
        },
        enumerable: false,
        configurable: true
    });
    Instance.prototype.resetMetadataOptions = function () {
        this._metadataOptions = undefined;
    };
    Object.defineProperty(Instance.prototype, "metadataOptionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._metadataOptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instance.prototype, "networkInterface", {
        get: function () {
            return this.interpolationForAttribute('network_interface');
        },
        set: function (value) {
            this._networkInterface = value;
        },
        enumerable: false,
        configurable: true
    });
    Instance.prototype.resetNetworkInterface = function () {
        this._networkInterface = undefined;
    };
    Object.defineProperty(Instance.prototype, "networkInterfaceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._networkInterface;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instance.prototype, "rootBlockDevice", {
        get: function () {
            return this.interpolationForAttribute('root_block_device');
        },
        set: function (value) {
            this._rootBlockDevice = value;
        },
        enumerable: false,
        configurable: true
    });
    Instance.prototype.resetRootBlockDevice = function () {
        this._rootBlockDevice = undefined;
    };
    Object.defineProperty(Instance.prototype, "rootBlockDeviceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rootBlockDevice;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instance.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    Instance.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(Instance.prototype, "timeoutsInput", {
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
    Instance.prototype.synthesizeAttributes = function () {
        return {
            ami: cdktf.stringToTerraform(this._ami),
            associate_public_ip_address: cdktf.booleanToTerraform(this._associatePublicIpAddress),
            availability_zone: cdktf.stringToTerraform(this._availabilityZone),
            cpu_core_count: cdktf.numberToTerraform(this._cpuCoreCount),
            cpu_threads_per_core: cdktf.numberToTerraform(this._cpuThreadsPerCore),
            disable_api_termination: cdktf.booleanToTerraform(this._disableApiTermination),
            ebs_optimized: cdktf.booleanToTerraform(this._ebsOptimized),
            get_password_data: cdktf.booleanToTerraform(this._getPasswordData),
            hibernation: cdktf.booleanToTerraform(this._hibernation),
            host_id: cdktf.stringToTerraform(this._hostId),
            iam_instance_profile: cdktf.stringToTerraform(this._iamInstanceProfile),
            instance_initiated_shutdown_behavior: cdktf.stringToTerraform(this._instanceInitiatedShutdownBehavior),
            instance_type: cdktf.stringToTerraform(this._instanceType),
            ipv6_address_count: cdktf.numberToTerraform(this._ipv6AddressCount),
            ipv6_addresses: cdktf.listMapper(cdktf.stringToTerraform)(this._ipv6Addresses),
            key_name: cdktf.stringToTerraform(this._keyName),
            monitoring: cdktf.booleanToTerraform(this._monitoring),
            placement_group: cdktf.stringToTerraform(this._placementGroup),
            placement_partition_number: cdktf.numberToTerraform(this._placementPartitionNumber),
            private_ip: cdktf.stringToTerraform(this._privateIp),
            secondary_private_ips: cdktf.listMapper(cdktf.stringToTerraform)(this._secondaryPrivateIps),
            security_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroups),
            source_dest_check: cdktf.booleanToTerraform(this._sourceDestCheck),
            subnet_id: cdktf.stringToTerraform(this._subnetId),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            tenancy: cdktf.stringToTerraform(this._tenancy),
            user_data: cdktf.stringToTerraform(this._userData),
            user_data_base64: cdktf.stringToTerraform(this._userDataBase64),
            volume_tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._volumeTags),
            vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSecurityGroupIds),
            capacity_reservation_specification: cdktf.listMapper(instanceCapacityReservationSpecificationToTerraform)(this._capacityReservationSpecification),
            credit_specification: cdktf.listMapper(instanceCreditSpecificationToTerraform)(this._creditSpecification),
            ebs_block_device: cdktf.listMapper(instanceEbsBlockDeviceToTerraform)(this._ebsBlockDevice),
            enclave_options: cdktf.listMapper(instanceEnclaveOptionsToTerraform)(this._enclaveOptions),
            ephemeral_block_device: cdktf.listMapper(instanceEphemeralBlockDeviceToTerraform)(this._ephemeralBlockDevice),
            launch_template: cdktf.listMapper(instanceLaunchTemplateToTerraform)(this._launchTemplate),
            metadata_options: cdktf.listMapper(instanceMetadataOptionsToTerraform)(this._metadataOptions),
            network_interface: cdktf.listMapper(instanceNetworkInterfaceToTerraform)(this._networkInterface),
            root_block_device: cdktf.listMapper(instanceRootBlockDeviceToTerraform)(this._rootBlockDevice),
            timeouts: instanceTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Instance.tfResourceType = "aws_instance";
    return Instance;
}(cdktf.TerraformResource));
exports.Instance = Instance;
