"use strict";
// https://www.terraform.io/docs/providers/aws/d/instance.html
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
exports.DataAwsInstance = exports.DataAwsInstanceRootBlockDevice = exports.DataAwsInstanceMetadataOptions = exports.DataAwsInstanceEphemeralBlockDevice = exports.DataAwsInstanceEnclaveOptions = exports.DataAwsInstanceEbsBlockDevice = exports.DataAwsInstanceCreditSpecification = void 0;
var cdktf = require("cdktf");
var DataAwsInstanceCreditSpecification = /** @class */ (function (_super) {
    __extends(DataAwsInstanceCreditSpecification, _super);
    function DataAwsInstanceCreditSpecification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsInstanceCreditSpecification.prototype, "cpuCredits", {
        // cpu_credits - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cpu_credits');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsInstanceCreditSpecification;
}(cdktf.ComplexComputedList));
exports.DataAwsInstanceCreditSpecification = DataAwsInstanceCreditSpecification;
var DataAwsInstanceEbsBlockDevice = /** @class */ (function (_super) {
    __extends(DataAwsInstanceEbsBlockDevice, _super);
    function DataAwsInstanceEbsBlockDevice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsInstanceEbsBlockDevice.prototype, "deleteOnTermination", {
        // delete_on_termination - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('delete_on_termination');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstanceEbsBlockDevice.prototype, "deviceName", {
        // device_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('device_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstanceEbsBlockDevice.prototype, "encrypted", {
        // encrypted - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('encrypted');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstanceEbsBlockDevice.prototype, "iops", {
        // iops - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('iops');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstanceEbsBlockDevice.prototype, "kmsKeyId", {
        // kms_key_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('kms_key_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstanceEbsBlockDevice.prototype, "snapshotId", {
        // snapshot_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('snapshot_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstanceEbsBlockDevice.prototype, "tags", {
        // tags - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstanceEbsBlockDevice.prototype, "throughput", {
        // throughput - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('throughput');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstanceEbsBlockDevice.prototype, "volumeId", {
        // volume_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('volume_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstanceEbsBlockDevice.prototype, "volumeSize", {
        // volume_size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('volume_size');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstanceEbsBlockDevice.prototype, "volumeType", {
        // volume_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('volume_type');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsInstanceEbsBlockDevice;
}(cdktf.ComplexComputedList));
exports.DataAwsInstanceEbsBlockDevice = DataAwsInstanceEbsBlockDevice;
var DataAwsInstanceEnclaveOptions = /** @class */ (function (_super) {
    __extends(DataAwsInstanceEnclaveOptions, _super);
    function DataAwsInstanceEnclaveOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsInstanceEnclaveOptions.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsInstanceEnclaveOptions;
}(cdktf.ComplexComputedList));
exports.DataAwsInstanceEnclaveOptions = DataAwsInstanceEnclaveOptions;
var DataAwsInstanceEphemeralBlockDevice = /** @class */ (function (_super) {
    __extends(DataAwsInstanceEphemeralBlockDevice, _super);
    function DataAwsInstanceEphemeralBlockDevice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsInstanceEphemeralBlockDevice.prototype, "deviceName", {
        // device_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('device_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstanceEphemeralBlockDevice.prototype, "noDevice", {
        // no_device - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('no_device');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstanceEphemeralBlockDevice.prototype, "virtualName", {
        // virtual_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('virtual_name');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsInstanceEphemeralBlockDevice;
}(cdktf.ComplexComputedList));
exports.DataAwsInstanceEphemeralBlockDevice = DataAwsInstanceEphemeralBlockDevice;
var DataAwsInstanceMetadataOptions = /** @class */ (function (_super) {
    __extends(DataAwsInstanceMetadataOptions, _super);
    function DataAwsInstanceMetadataOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsInstanceMetadataOptions.prototype, "httpEndpoint", {
        // http_endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('http_endpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstanceMetadataOptions.prototype, "httpPutResponseHopLimit", {
        // http_put_response_hop_limit - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('http_put_response_hop_limit');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstanceMetadataOptions.prototype, "httpTokens", {
        // http_tokens - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('http_tokens');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsInstanceMetadataOptions;
}(cdktf.ComplexComputedList));
exports.DataAwsInstanceMetadataOptions = DataAwsInstanceMetadataOptions;
var DataAwsInstanceRootBlockDevice = /** @class */ (function (_super) {
    __extends(DataAwsInstanceRootBlockDevice, _super);
    function DataAwsInstanceRootBlockDevice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsInstanceRootBlockDevice.prototype, "deleteOnTermination", {
        // delete_on_termination - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('delete_on_termination');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstanceRootBlockDevice.prototype, "deviceName", {
        // device_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('device_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstanceRootBlockDevice.prototype, "encrypted", {
        // encrypted - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('encrypted');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstanceRootBlockDevice.prototype, "iops", {
        // iops - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('iops');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstanceRootBlockDevice.prototype, "kmsKeyId", {
        // kms_key_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('kms_key_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstanceRootBlockDevice.prototype, "tags", {
        // tags - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstanceRootBlockDevice.prototype, "throughput", {
        // throughput - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('throughput');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstanceRootBlockDevice.prototype, "volumeId", {
        // volume_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('volume_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstanceRootBlockDevice.prototype, "volumeSize", {
        // volume_size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('volume_size');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstanceRootBlockDevice.prototype, "volumeType", {
        // volume_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('volume_type');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsInstanceRootBlockDevice;
}(cdktf.ComplexComputedList));
exports.DataAwsInstanceRootBlockDevice = DataAwsInstanceRootBlockDevice;
function dataAwsInstanceFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/instance.html aws_instance}
*/
var DataAwsInstance = /** @class */ (function (_super) {
    __extends(DataAwsInstance, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/instance.html aws_instance} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsInstanceConfig = {}
    */
    function DataAwsInstance(scope, id, config) {
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
        _this._getPasswordData = config.fetchPasswordData;
        _this._getUserData = config.fetchUserData;
        _this._instanceId = config.instanceId;
        _this._instanceTags = config.instanceTags;
        _this._tags = config.tags;
        _this._filter = config.filter;
        return _this;
    }
    Object.defineProperty(DataAwsInstance.prototype, "ami", {
        // ==========
        // ATTRIBUTES
        // ==========
        // ami - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ami');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstance.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstance.prototype, "associatePublicIpAddress", {
        // associate_public_ip_address - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('associate_public_ip_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstance.prototype, "availabilityZone", {
        // availability_zone - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('availability_zone');
        },
        enumerable: false,
        configurable: true
    });
    // credit_specification - computed: true, optional: false, required: false
    DataAwsInstance.prototype.creditSpecification = function (index) {
        return new DataAwsInstanceCreditSpecification(this, 'credit_specification', index);
    };
    Object.defineProperty(DataAwsInstance.prototype, "disableApiTermination", {
        // disable_api_termination - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('disable_api_termination');
        },
        enumerable: false,
        configurable: true
    });
    // ebs_block_device - computed: true, optional: false, required: false
    DataAwsInstance.prototype.ebsBlockDevice = function (index) {
        return new DataAwsInstanceEbsBlockDevice(this, 'ebs_block_device', index);
    };
    Object.defineProperty(DataAwsInstance.prototype, "ebsOptimized", {
        // ebs_optimized - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('ebs_optimized');
        },
        enumerable: false,
        configurable: true
    });
    // enclave_options - computed: true, optional: false, required: false
    DataAwsInstance.prototype.enclaveOptions = function (index) {
        return new DataAwsInstanceEnclaveOptions(this, 'enclave_options', index);
    };
    // ephemeral_block_device - computed: true, optional: false, required: false
    DataAwsInstance.prototype.ephemeralBlockDevice = function (index) {
        return new DataAwsInstanceEphemeralBlockDevice(this, 'ephemeral_block_device', index);
    };
    Object.defineProperty(DataAwsInstance.prototype, "fetchPasswordData", {
        get: function () {
            return this.getBooleanAttribute('get_password_data');
        },
        set: function (value) {
            this._getPasswordData = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsInstance.prototype.resetFetchPasswordData = function () {
        this._getPasswordData = undefined;
    };
    Object.defineProperty(DataAwsInstance.prototype, "fetchPasswordDataInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._getPasswordData;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstance.prototype, "fetchUserData", {
        get: function () {
            return this.getBooleanAttribute('get_user_data');
        },
        set: function (value) {
            this._getUserData = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsInstance.prototype.resetFetchUserData = function () {
        this._getUserData = undefined;
    };
    Object.defineProperty(DataAwsInstance.prototype, "fetchUserDataInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._getUserData;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstance.prototype, "hostId", {
        // host_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('host_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstance.prototype, "iamInstanceProfile", {
        // iam_instance_profile - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('iam_instance_profile');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstance.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstance.prototype, "instanceId", {
        get: function () {
            return this.getStringAttribute('instance_id');
        },
        set: function (value) {
            this._instanceId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsInstance.prototype.resetInstanceId = function () {
        this._instanceId = undefined;
    };
    Object.defineProperty(DataAwsInstance.prototype, "instanceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstance.prototype, "instanceState", {
        // instance_state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('instance_state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstance.prototype, "instanceTags", {
        get: function () {
            return this.interpolationForAttribute('instance_tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._instanceTags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsInstance.prototype.resetInstanceTags = function () {
        this._instanceTags = undefined;
    };
    Object.defineProperty(DataAwsInstance.prototype, "instanceTagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceTags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstance.prototype, "instanceType", {
        // instance_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('instance_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstance.prototype, "ipv6Addresses", {
        // ipv6_addresses - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('ipv6_addresses');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstance.prototype, "keyName", {
        // key_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key_name');
        },
        enumerable: false,
        configurable: true
    });
    // metadata_options - computed: true, optional: false, required: false
    DataAwsInstance.prototype.metadataOptions = function (index) {
        return new DataAwsInstanceMetadataOptions(this, 'metadata_options', index);
    };
    Object.defineProperty(DataAwsInstance.prototype, "monitoring", {
        // monitoring - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('monitoring');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstance.prototype, "networkInterfaceId", {
        // network_interface_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('network_interface_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstance.prototype, "outpostArn", {
        // outpost_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('outpost_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstance.prototype, "passwordData", {
        // password_data - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('password_data');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstance.prototype, "placementGroup", {
        // placement_group - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('placement_group');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstance.prototype, "placementPartitionNumber", {
        // placement_partition_number - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('placement_partition_number');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstance.prototype, "privateDns", {
        // private_dns - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('private_dns');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstance.prototype, "privateIp", {
        // private_ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('private_ip');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstance.prototype, "publicDns", {
        // public_dns - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('public_dns');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstance.prototype, "publicIp", {
        // public_ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('public_ip');
        },
        enumerable: false,
        configurable: true
    });
    // root_block_device - computed: true, optional: false, required: false
    DataAwsInstance.prototype.rootBlockDevice = function (index) {
        return new DataAwsInstanceRootBlockDevice(this, 'root_block_device', index);
    };
    Object.defineProperty(DataAwsInstance.prototype, "secondaryPrivateIps", {
        // secondary_private_ips - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('secondary_private_ips');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstance.prototype, "securityGroups", {
        // security_groups - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('security_groups');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstance.prototype, "sourceDestCheck", {
        // source_dest_check - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('source_dest_check');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstance.prototype, "subnetId", {
        // subnet_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('subnet_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstance.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsInstance.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsInstance.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstance.prototype, "tenancy", {
        // tenancy - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tenancy');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstance.prototype, "userData", {
        // user_data - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('user_data');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstance.prototype, "userDataBase64", {
        // user_data_base64 - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('user_data_base64');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstance.prototype, "vpcSecurityGroupIds", {
        // vpc_security_group_ids - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('vpc_security_group_ids');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsInstance.prototype, "filter", {
        get: function () {
            return this.interpolationForAttribute('filter');
        },
        set: function (value) {
            this._filter = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsInstance.prototype.resetFilter = function () {
        this._filter = undefined;
    };
    Object.defineProperty(DataAwsInstance.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsInstance.prototype.synthesizeAttributes = function () {
        return {
            get_password_data: cdktf.booleanToTerraform(this._getPasswordData),
            get_user_data: cdktf.booleanToTerraform(this._getUserData),
            instance_id: cdktf.stringToTerraform(this._instanceId),
            instance_tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._instanceTags),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            filter: cdktf.listMapper(dataAwsInstanceFilterToTerraform)(this._filter)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsInstance.tfResourceType = "aws_instance";
    return DataAwsInstance;
}(cdktf.TerraformDataSource));
exports.DataAwsInstance = DataAwsInstance;
