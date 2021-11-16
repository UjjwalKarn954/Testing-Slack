"use strict";
// https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html
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
exports.OpsworksInstance = void 0;
var cdktf = require("cdktf");
function opsworksInstanceEbsBlockDeviceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        delete_on_termination: cdktf.booleanToTerraform(struct.deleteOnTermination),
        device_name: cdktf.stringToTerraform(struct.deviceName),
        iops: cdktf.numberToTerraform(struct.iops),
        snapshot_id: cdktf.stringToTerraform(struct.snapshotId),
        volume_size: cdktf.numberToTerraform(struct.volumeSize),
        volume_type: cdktf.stringToTerraform(struct.volumeType)
    };
}
function opsworksInstanceEphemeralBlockDeviceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        device_name: cdktf.stringToTerraform(struct.deviceName),
        virtual_name: cdktf.stringToTerraform(struct.virtualName)
    };
}
function opsworksInstanceRootBlockDeviceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        delete_on_termination: cdktf.booleanToTerraform(struct.deleteOnTermination),
        iops: cdktf.numberToTerraform(struct.iops),
        volume_size: cdktf.numberToTerraform(struct.volumeSize),
        volume_type: cdktf.stringToTerraform(struct.volumeType)
    };
}
function opsworksInstanceTimeoutsToTerraform(struct) {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html aws_opsworks_instance}
*/
var OpsworksInstance = /** @class */ (function (_super) {
    __extends(OpsworksInstance, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html aws_opsworks_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OpsworksInstanceConfig
    */
    function OpsworksInstance(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_opsworks_instance',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._agentVersion = config.agentVersion;
        _this._amiId = config.amiId;
        _this._architecture = config.architecture;
        _this._autoScalingType = config.autoScalingType;
        _this._availabilityZone = config.availabilityZone;
        _this._createdAt = config.createdAt;
        _this._deleteEbs = config.deleteEbs;
        _this._deleteEip = config.deleteEip;
        _this._ebsOptimized = config.ebsOptimized;
        _this._ecsClusterArn = config.ecsClusterArn;
        _this._elasticIp = config.elasticIp;
        _this._hostname = config.hostname;
        _this._infrastructureClass = config.infrastructureClass;
        _this._installUpdatesOnBoot = config.installUpdatesOnBoot;
        _this._instanceProfileArn = config.instanceProfileArn;
        _this._instanceType = config.instanceType;
        _this._lastServiceErrorId = config.lastServiceErrorId;
        _this._layerIds = config.layerIds;
        _this._os = config.os;
        _this._platform = config.platform;
        _this._privateDns = config.privateDns;
        _this._privateIp = config.privateIp;
        _this._publicDns = config.publicDns;
        _this._publicIp = config.publicIp;
        _this._registeredBy = config.registeredBy;
        _this._reportedAgentVersion = config.reportedAgentVersion;
        _this._reportedOsFamily = config.reportedOsFamily;
        _this._reportedOsName = config.reportedOsName;
        _this._reportedOsVersion = config.reportedOsVersion;
        _this._rootDeviceType = config.rootDeviceType;
        _this._rootDeviceVolumeId = config.rootDeviceVolumeId;
        _this._securityGroupIds = config.securityGroupIds;
        _this._sshHostDsaKeyFingerprint = config.sshHostDsaKeyFingerprint;
        _this._sshHostRsaKeyFingerprint = config.sshHostRsaKeyFingerprint;
        _this._sshKeyName = config.sshKeyName;
        _this._stackId = config.stackId;
        _this._state = config.state;
        _this._status = config.status;
        _this._subnetId = config.subnetId;
        _this._tenancy = config.tenancy;
        _this._virtualizationType = config.virtualizationType;
        _this._ebsBlockDevice = config.ebsBlockDevice;
        _this._ephemeralBlockDevice = config.ephemeralBlockDevice;
        _this._rootBlockDevice = config.rootBlockDevice;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(OpsworksInstance.prototype, "agentVersion", {
        get: function () {
            return this.getStringAttribute('agent_version');
        },
        set: function (value) {
            this._agentVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksInstance.prototype.resetAgentVersion = function () {
        this._agentVersion = undefined;
    };
    Object.defineProperty(OpsworksInstance.prototype, "agentVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._agentVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksInstance.prototype, "amiId", {
        get: function () {
            return this.getStringAttribute('ami_id');
        },
        set: function (value) {
            this._amiId = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksInstance.prototype.resetAmiId = function () {
        this._amiId = undefined;
    };
    Object.defineProperty(OpsworksInstance.prototype, "amiIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._amiId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksInstance.prototype, "architecture", {
        get: function () {
            return this.getStringAttribute('architecture');
        },
        set: function (value) {
            this._architecture = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksInstance.prototype.resetArchitecture = function () {
        this._architecture = undefined;
    };
    Object.defineProperty(OpsworksInstance.prototype, "architectureInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._architecture;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksInstance.prototype, "autoScalingType", {
        get: function () {
            return this.getStringAttribute('auto_scaling_type');
        },
        set: function (value) {
            this._autoScalingType = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksInstance.prototype.resetAutoScalingType = function () {
        this._autoScalingType = undefined;
    };
    Object.defineProperty(OpsworksInstance.prototype, "autoScalingTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoScalingType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksInstance.prototype, "availabilityZone", {
        get: function () {
            return this.getStringAttribute('availability_zone');
        },
        set: function (value) {
            this._availabilityZone = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksInstance.prototype.resetAvailabilityZone = function () {
        this._availabilityZone = undefined;
    };
    Object.defineProperty(OpsworksInstance.prototype, "availabilityZoneInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._availabilityZone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksInstance.prototype, "createdAt", {
        get: function () {
            return this.getStringAttribute('created_at');
        },
        set: function (value) {
            this._createdAt = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksInstance.prototype.resetCreatedAt = function () {
        this._createdAt = undefined;
    };
    Object.defineProperty(OpsworksInstance.prototype, "createdAtInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._createdAt;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksInstance.prototype, "deleteEbs", {
        get: function () {
            return this.getBooleanAttribute('delete_ebs');
        },
        set: function (value) {
            this._deleteEbs = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksInstance.prototype.resetDeleteEbs = function () {
        this._deleteEbs = undefined;
    };
    Object.defineProperty(OpsworksInstance.prototype, "deleteEbsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deleteEbs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksInstance.prototype, "deleteEip", {
        get: function () {
            return this.getBooleanAttribute('delete_eip');
        },
        set: function (value) {
            this._deleteEip = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksInstance.prototype.resetDeleteEip = function () {
        this._deleteEip = undefined;
    };
    Object.defineProperty(OpsworksInstance.prototype, "deleteEipInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deleteEip;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksInstance.prototype, "ebsOptimized", {
        get: function () {
            return this.getBooleanAttribute('ebs_optimized');
        },
        set: function (value) {
            this._ebsOptimized = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksInstance.prototype.resetEbsOptimized = function () {
        this._ebsOptimized = undefined;
    };
    Object.defineProperty(OpsworksInstance.prototype, "ebsOptimizedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ebsOptimized;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksInstance.prototype, "ec2InstanceId", {
        // ec2_instance_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ec2_instance_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksInstance.prototype, "ecsClusterArn", {
        get: function () {
            return this.getStringAttribute('ecs_cluster_arn');
        },
        set: function (value) {
            this._ecsClusterArn = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksInstance.prototype.resetEcsClusterArn = function () {
        this._ecsClusterArn = undefined;
    };
    Object.defineProperty(OpsworksInstance.prototype, "ecsClusterArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ecsClusterArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksInstance.prototype, "elasticIp", {
        get: function () {
            return this.getStringAttribute('elastic_ip');
        },
        set: function (value) {
            this._elasticIp = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksInstance.prototype.resetElasticIp = function () {
        this._elasticIp = undefined;
    };
    Object.defineProperty(OpsworksInstance.prototype, "elasticIpInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._elasticIp;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksInstance.prototype, "hostname", {
        get: function () {
            return this.getStringAttribute('hostname');
        },
        set: function (value) {
            this._hostname = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksInstance.prototype.resetHostname = function () {
        this._hostname = undefined;
    };
    Object.defineProperty(OpsworksInstance.prototype, "hostnameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hostname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksInstance.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksInstance.prototype, "infrastructureClass", {
        get: function () {
            return this.getStringAttribute('infrastructure_class');
        },
        set: function (value) {
            this._infrastructureClass = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksInstance.prototype.resetInfrastructureClass = function () {
        this._infrastructureClass = undefined;
    };
    Object.defineProperty(OpsworksInstance.prototype, "infrastructureClassInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._infrastructureClass;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksInstance.prototype, "installUpdatesOnBoot", {
        get: function () {
            return this.getBooleanAttribute('install_updates_on_boot');
        },
        set: function (value) {
            this._installUpdatesOnBoot = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksInstance.prototype.resetInstallUpdatesOnBoot = function () {
        this._installUpdatesOnBoot = undefined;
    };
    Object.defineProperty(OpsworksInstance.prototype, "installUpdatesOnBootInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._installUpdatesOnBoot;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksInstance.prototype, "instanceProfileArn", {
        get: function () {
            return this.getStringAttribute('instance_profile_arn');
        },
        set: function (value) {
            this._instanceProfileArn = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksInstance.prototype.resetInstanceProfileArn = function () {
        this._instanceProfileArn = undefined;
    };
    Object.defineProperty(OpsworksInstance.prototype, "instanceProfileArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceProfileArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksInstance.prototype, "instanceType", {
        get: function () {
            return this.getStringAttribute('instance_type');
        },
        set: function (value) {
            this._instanceType = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksInstance.prototype.resetInstanceType = function () {
        this._instanceType = undefined;
    };
    Object.defineProperty(OpsworksInstance.prototype, "instanceTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksInstance.prototype, "lastServiceErrorId", {
        get: function () {
            return this.getStringAttribute('last_service_error_id');
        },
        set: function (value) {
            this._lastServiceErrorId = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksInstance.prototype.resetLastServiceErrorId = function () {
        this._lastServiceErrorId = undefined;
    };
    Object.defineProperty(OpsworksInstance.prototype, "lastServiceErrorIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._lastServiceErrorId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksInstance.prototype, "layerIds", {
        get: function () {
            return this.getListAttribute('layer_ids');
        },
        set: function (value) {
            this._layerIds = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksInstance.prototype, "layerIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._layerIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksInstance.prototype, "os", {
        get: function () {
            return this.getStringAttribute('os');
        },
        set: function (value) {
            this._os = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksInstance.prototype.resetOs = function () {
        this._os = undefined;
    };
    Object.defineProperty(OpsworksInstance.prototype, "osInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._os;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksInstance.prototype, "platform", {
        get: function () {
            return this.getStringAttribute('platform');
        },
        set: function (value) {
            this._platform = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksInstance.prototype.resetPlatform = function () {
        this._platform = undefined;
    };
    Object.defineProperty(OpsworksInstance.prototype, "platformInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._platform;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksInstance.prototype, "privateDns", {
        get: function () {
            return this.getStringAttribute('private_dns');
        },
        set: function (value) {
            this._privateDns = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksInstance.prototype.resetPrivateDns = function () {
        this._privateDns = undefined;
    };
    Object.defineProperty(OpsworksInstance.prototype, "privateDnsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._privateDns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksInstance.prototype, "privateIp", {
        get: function () {
            return this.getStringAttribute('private_ip');
        },
        set: function (value) {
            this._privateIp = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksInstance.prototype.resetPrivateIp = function () {
        this._privateIp = undefined;
    };
    Object.defineProperty(OpsworksInstance.prototype, "privateIpInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._privateIp;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksInstance.prototype, "publicDns", {
        get: function () {
            return this.getStringAttribute('public_dns');
        },
        set: function (value) {
            this._publicDns = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksInstance.prototype.resetPublicDns = function () {
        this._publicDns = undefined;
    };
    Object.defineProperty(OpsworksInstance.prototype, "publicDnsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._publicDns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksInstance.prototype, "publicIp", {
        get: function () {
            return this.getStringAttribute('public_ip');
        },
        set: function (value) {
            this._publicIp = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksInstance.prototype.resetPublicIp = function () {
        this._publicIp = undefined;
    };
    Object.defineProperty(OpsworksInstance.prototype, "publicIpInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._publicIp;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksInstance.prototype, "registeredBy", {
        get: function () {
            return this.getStringAttribute('registered_by');
        },
        set: function (value) {
            this._registeredBy = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksInstance.prototype.resetRegisteredBy = function () {
        this._registeredBy = undefined;
    };
    Object.defineProperty(OpsworksInstance.prototype, "registeredByInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._registeredBy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksInstance.prototype, "reportedAgentVersion", {
        get: function () {
            return this.getStringAttribute('reported_agent_version');
        },
        set: function (value) {
            this._reportedAgentVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksInstance.prototype.resetReportedAgentVersion = function () {
        this._reportedAgentVersion = undefined;
    };
    Object.defineProperty(OpsworksInstance.prototype, "reportedAgentVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._reportedAgentVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksInstance.prototype, "reportedOsFamily", {
        get: function () {
            return this.getStringAttribute('reported_os_family');
        },
        set: function (value) {
            this._reportedOsFamily = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksInstance.prototype.resetReportedOsFamily = function () {
        this._reportedOsFamily = undefined;
    };
    Object.defineProperty(OpsworksInstance.prototype, "reportedOsFamilyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._reportedOsFamily;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksInstance.prototype, "reportedOsName", {
        get: function () {
            return this.getStringAttribute('reported_os_name');
        },
        set: function (value) {
            this._reportedOsName = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksInstance.prototype.resetReportedOsName = function () {
        this._reportedOsName = undefined;
    };
    Object.defineProperty(OpsworksInstance.prototype, "reportedOsNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._reportedOsName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksInstance.prototype, "reportedOsVersion", {
        get: function () {
            return this.getStringAttribute('reported_os_version');
        },
        set: function (value) {
            this._reportedOsVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksInstance.prototype.resetReportedOsVersion = function () {
        this._reportedOsVersion = undefined;
    };
    Object.defineProperty(OpsworksInstance.prototype, "reportedOsVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._reportedOsVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksInstance.prototype, "rootDeviceType", {
        get: function () {
            return this.getStringAttribute('root_device_type');
        },
        set: function (value) {
            this._rootDeviceType = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksInstance.prototype.resetRootDeviceType = function () {
        this._rootDeviceType = undefined;
    };
    Object.defineProperty(OpsworksInstance.prototype, "rootDeviceTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rootDeviceType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksInstance.prototype, "rootDeviceVolumeId", {
        get: function () {
            return this.getStringAttribute('root_device_volume_id');
        },
        set: function (value) {
            this._rootDeviceVolumeId = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksInstance.prototype.resetRootDeviceVolumeId = function () {
        this._rootDeviceVolumeId = undefined;
    };
    Object.defineProperty(OpsworksInstance.prototype, "rootDeviceVolumeIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rootDeviceVolumeId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksInstance.prototype, "securityGroupIds", {
        get: function () {
            return this.getListAttribute('security_group_ids');
        },
        set: function (value) {
            this._securityGroupIds = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksInstance.prototype.resetSecurityGroupIds = function () {
        this._securityGroupIds = undefined;
    };
    Object.defineProperty(OpsworksInstance.prototype, "securityGroupIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._securityGroupIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksInstance.prototype, "sshHostDsaKeyFingerprint", {
        get: function () {
            return this.getStringAttribute('ssh_host_dsa_key_fingerprint');
        },
        set: function (value) {
            this._sshHostDsaKeyFingerprint = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksInstance.prototype.resetSshHostDsaKeyFingerprint = function () {
        this._sshHostDsaKeyFingerprint = undefined;
    };
    Object.defineProperty(OpsworksInstance.prototype, "sshHostDsaKeyFingerprintInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sshHostDsaKeyFingerprint;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksInstance.prototype, "sshHostRsaKeyFingerprint", {
        get: function () {
            return this.getStringAttribute('ssh_host_rsa_key_fingerprint');
        },
        set: function (value) {
            this._sshHostRsaKeyFingerprint = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksInstance.prototype.resetSshHostRsaKeyFingerprint = function () {
        this._sshHostRsaKeyFingerprint = undefined;
    };
    Object.defineProperty(OpsworksInstance.prototype, "sshHostRsaKeyFingerprintInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sshHostRsaKeyFingerprint;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksInstance.prototype, "sshKeyName", {
        get: function () {
            return this.getStringAttribute('ssh_key_name');
        },
        set: function (value) {
            this._sshKeyName = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksInstance.prototype.resetSshKeyName = function () {
        this._sshKeyName = undefined;
    };
    Object.defineProperty(OpsworksInstance.prototype, "sshKeyNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sshKeyName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksInstance.prototype, "stackId", {
        get: function () {
            return this.getStringAttribute('stack_id');
        },
        set: function (value) {
            this._stackId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksInstance.prototype, "stackIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._stackId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksInstance.prototype, "state", {
        get: function () {
            return this.getStringAttribute('state');
        },
        set: function (value) {
            this._state = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksInstance.prototype.resetState = function () {
        this._state = undefined;
    };
    Object.defineProperty(OpsworksInstance.prototype, "stateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._state;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksInstance.prototype, "status", {
        get: function () {
            return this.getStringAttribute('status');
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksInstance.prototype.resetStatus = function () {
        this._status = undefined;
    };
    Object.defineProperty(OpsworksInstance.prototype, "statusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksInstance.prototype, "subnetId", {
        get: function () {
            return this.getStringAttribute('subnet_id');
        },
        set: function (value) {
            this._subnetId = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksInstance.prototype.resetSubnetId = function () {
        this._subnetId = undefined;
    };
    Object.defineProperty(OpsworksInstance.prototype, "subnetIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subnetId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksInstance.prototype, "tenancy", {
        get: function () {
            return this.getStringAttribute('tenancy');
        },
        set: function (value) {
            this._tenancy = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksInstance.prototype.resetTenancy = function () {
        this._tenancy = undefined;
    };
    Object.defineProperty(OpsworksInstance.prototype, "tenancyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tenancy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksInstance.prototype, "virtualizationType", {
        get: function () {
            return this.getStringAttribute('virtualization_type');
        },
        set: function (value) {
            this._virtualizationType = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksInstance.prototype.resetVirtualizationType = function () {
        this._virtualizationType = undefined;
    };
    Object.defineProperty(OpsworksInstance.prototype, "virtualizationTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._virtualizationType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksInstance.prototype, "ebsBlockDevice", {
        get: function () {
            return this.interpolationForAttribute('ebs_block_device');
        },
        set: function (value) {
            this._ebsBlockDevice = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksInstance.prototype.resetEbsBlockDevice = function () {
        this._ebsBlockDevice = undefined;
    };
    Object.defineProperty(OpsworksInstance.prototype, "ebsBlockDeviceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ebsBlockDevice;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksInstance.prototype, "ephemeralBlockDevice", {
        get: function () {
            return this.interpolationForAttribute('ephemeral_block_device');
        },
        set: function (value) {
            this._ephemeralBlockDevice = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksInstance.prototype.resetEphemeralBlockDevice = function () {
        this._ephemeralBlockDevice = undefined;
    };
    Object.defineProperty(OpsworksInstance.prototype, "ephemeralBlockDeviceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ephemeralBlockDevice;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksInstance.prototype, "rootBlockDevice", {
        get: function () {
            return this.interpolationForAttribute('root_block_device');
        },
        set: function (value) {
            this._rootBlockDevice = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksInstance.prototype.resetRootBlockDevice = function () {
        this._rootBlockDevice = undefined;
    };
    Object.defineProperty(OpsworksInstance.prototype, "rootBlockDeviceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rootBlockDevice;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksInstance.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksInstance.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(OpsworksInstance.prototype, "timeoutsInput", {
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
    OpsworksInstance.prototype.synthesizeAttributes = function () {
        return {
            agent_version: cdktf.stringToTerraform(this._agentVersion),
            ami_id: cdktf.stringToTerraform(this._amiId),
            architecture: cdktf.stringToTerraform(this._architecture),
            auto_scaling_type: cdktf.stringToTerraform(this._autoScalingType),
            availability_zone: cdktf.stringToTerraform(this._availabilityZone),
            created_at: cdktf.stringToTerraform(this._createdAt),
            delete_ebs: cdktf.booleanToTerraform(this._deleteEbs),
            delete_eip: cdktf.booleanToTerraform(this._deleteEip),
            ebs_optimized: cdktf.booleanToTerraform(this._ebsOptimized),
            ecs_cluster_arn: cdktf.stringToTerraform(this._ecsClusterArn),
            elastic_ip: cdktf.stringToTerraform(this._elasticIp),
            hostname: cdktf.stringToTerraform(this._hostname),
            infrastructure_class: cdktf.stringToTerraform(this._infrastructureClass),
            install_updates_on_boot: cdktf.booleanToTerraform(this._installUpdatesOnBoot),
            instance_profile_arn: cdktf.stringToTerraform(this._instanceProfileArn),
            instance_type: cdktf.stringToTerraform(this._instanceType),
            last_service_error_id: cdktf.stringToTerraform(this._lastServiceErrorId),
            layer_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._layerIds),
            os: cdktf.stringToTerraform(this._os),
            platform: cdktf.stringToTerraform(this._platform),
            private_dns: cdktf.stringToTerraform(this._privateDns),
            private_ip: cdktf.stringToTerraform(this._privateIp),
            public_dns: cdktf.stringToTerraform(this._publicDns),
            public_ip: cdktf.stringToTerraform(this._publicIp),
            registered_by: cdktf.stringToTerraform(this._registeredBy),
            reported_agent_version: cdktf.stringToTerraform(this._reportedAgentVersion),
            reported_os_family: cdktf.stringToTerraform(this._reportedOsFamily),
            reported_os_name: cdktf.stringToTerraform(this._reportedOsName),
            reported_os_version: cdktf.stringToTerraform(this._reportedOsVersion),
            root_device_type: cdktf.stringToTerraform(this._rootDeviceType),
            root_device_volume_id: cdktf.stringToTerraform(this._rootDeviceVolumeId),
            security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupIds),
            ssh_host_dsa_key_fingerprint: cdktf.stringToTerraform(this._sshHostDsaKeyFingerprint),
            ssh_host_rsa_key_fingerprint: cdktf.stringToTerraform(this._sshHostRsaKeyFingerprint),
            ssh_key_name: cdktf.stringToTerraform(this._sshKeyName),
            stack_id: cdktf.stringToTerraform(this._stackId),
            state: cdktf.stringToTerraform(this._state),
            status: cdktf.stringToTerraform(this._status),
            subnet_id: cdktf.stringToTerraform(this._subnetId),
            tenancy: cdktf.stringToTerraform(this._tenancy),
            virtualization_type: cdktf.stringToTerraform(this._virtualizationType),
            ebs_block_device: cdktf.listMapper(opsworksInstanceEbsBlockDeviceToTerraform)(this._ebsBlockDevice),
            ephemeral_block_device: cdktf.listMapper(opsworksInstanceEphemeralBlockDeviceToTerraform)(this._ephemeralBlockDevice),
            root_block_device: cdktf.listMapper(opsworksInstanceRootBlockDeviceToTerraform)(this._rootBlockDevice),
            timeouts: opsworksInstanceTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    OpsworksInstance.tfResourceType = "aws_opsworks_instance";
    return OpsworksInstance;
}(cdktf.TerraformResource));
exports.OpsworksInstance = OpsworksInstance;
