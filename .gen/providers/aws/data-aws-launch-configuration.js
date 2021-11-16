"use strict";
// https://www.terraform.io/docs/providers/aws/d/launch_configuration.html
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
exports.DataAwsLaunchConfiguration = exports.DataAwsLaunchConfigurationRootBlockDevice = exports.DataAwsLaunchConfigurationMetadataOptions = exports.DataAwsLaunchConfigurationEphemeralBlockDevice = exports.DataAwsLaunchConfigurationEbsBlockDevice = void 0;
var cdktf = require("cdktf");
var DataAwsLaunchConfigurationEbsBlockDevice = /** @class */ (function (_super) {
    __extends(DataAwsLaunchConfigurationEbsBlockDevice, _super);
    function DataAwsLaunchConfigurationEbsBlockDevice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsLaunchConfigurationEbsBlockDevice.prototype, "deleteOnTermination", {
        // delete_on_termination - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('delete_on_termination');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchConfigurationEbsBlockDevice.prototype, "deviceName", {
        // device_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('device_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchConfigurationEbsBlockDevice.prototype, "encrypted", {
        // encrypted - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('encrypted');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchConfigurationEbsBlockDevice.prototype, "iops", {
        // iops - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('iops');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchConfigurationEbsBlockDevice.prototype, "noDevice", {
        // no_device - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('no_device');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchConfigurationEbsBlockDevice.prototype, "snapshotId", {
        // snapshot_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('snapshot_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchConfigurationEbsBlockDevice.prototype, "throughput", {
        // throughput - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('throughput');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchConfigurationEbsBlockDevice.prototype, "volumeSize", {
        // volume_size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('volume_size');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchConfigurationEbsBlockDevice.prototype, "volumeType", {
        // volume_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('volume_type');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsLaunchConfigurationEbsBlockDevice;
}(cdktf.ComplexComputedList));
exports.DataAwsLaunchConfigurationEbsBlockDevice = DataAwsLaunchConfigurationEbsBlockDevice;
var DataAwsLaunchConfigurationEphemeralBlockDevice = /** @class */ (function (_super) {
    __extends(DataAwsLaunchConfigurationEphemeralBlockDevice, _super);
    function DataAwsLaunchConfigurationEphemeralBlockDevice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsLaunchConfigurationEphemeralBlockDevice.prototype, "deviceName", {
        // device_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('device_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchConfigurationEphemeralBlockDevice.prototype, "virtualName", {
        // virtual_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('virtual_name');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsLaunchConfigurationEphemeralBlockDevice;
}(cdktf.ComplexComputedList));
exports.DataAwsLaunchConfigurationEphemeralBlockDevice = DataAwsLaunchConfigurationEphemeralBlockDevice;
var DataAwsLaunchConfigurationMetadataOptions = /** @class */ (function (_super) {
    __extends(DataAwsLaunchConfigurationMetadataOptions, _super);
    function DataAwsLaunchConfigurationMetadataOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsLaunchConfigurationMetadataOptions.prototype, "httpEndpoint", {
        // http_endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('http_endpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchConfigurationMetadataOptions.prototype, "httpPutResponseHopLimit", {
        // http_put_response_hop_limit - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('http_put_response_hop_limit');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchConfigurationMetadataOptions.prototype, "httpTokens", {
        // http_tokens - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('http_tokens');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsLaunchConfigurationMetadataOptions;
}(cdktf.ComplexComputedList));
exports.DataAwsLaunchConfigurationMetadataOptions = DataAwsLaunchConfigurationMetadataOptions;
var DataAwsLaunchConfigurationRootBlockDevice = /** @class */ (function (_super) {
    __extends(DataAwsLaunchConfigurationRootBlockDevice, _super);
    function DataAwsLaunchConfigurationRootBlockDevice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsLaunchConfigurationRootBlockDevice.prototype, "deleteOnTermination", {
        // delete_on_termination - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('delete_on_termination');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchConfigurationRootBlockDevice.prototype, "encrypted", {
        // encrypted - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('encrypted');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchConfigurationRootBlockDevice.prototype, "iops", {
        // iops - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('iops');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchConfigurationRootBlockDevice.prototype, "throughput", {
        // throughput - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('throughput');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchConfigurationRootBlockDevice.prototype, "volumeSize", {
        // volume_size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('volume_size');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchConfigurationRootBlockDevice.prototype, "volumeType", {
        // volume_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('volume_type');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsLaunchConfigurationRootBlockDevice;
}(cdktf.ComplexComputedList));
exports.DataAwsLaunchConfigurationRootBlockDevice = DataAwsLaunchConfigurationRootBlockDevice;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/launch_configuration.html aws_launch_configuration}
*/
var DataAwsLaunchConfiguration = /** @class */ (function (_super) {
    __extends(DataAwsLaunchConfiguration, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/launch_configuration.html aws_launch_configuration} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLaunchConfigurationConfig
    */
    function DataAwsLaunchConfiguration(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_launch_configuration',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        return _this;
    }
    Object.defineProperty(DataAwsLaunchConfiguration.prototype, "arn", {
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
    Object.defineProperty(DataAwsLaunchConfiguration.prototype, "associatePublicIpAddress", {
        // associate_public_ip_address - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('associate_public_ip_address');
        },
        enumerable: false,
        configurable: true
    });
    // ebs_block_device - computed: true, optional: false, required: false
    DataAwsLaunchConfiguration.prototype.ebsBlockDevice = function (index) {
        return new DataAwsLaunchConfigurationEbsBlockDevice(this, 'ebs_block_device', index);
    };
    Object.defineProperty(DataAwsLaunchConfiguration.prototype, "ebsOptimized", {
        // ebs_optimized - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('ebs_optimized');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchConfiguration.prototype, "enableMonitoring", {
        // enable_monitoring - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enable_monitoring');
        },
        enumerable: false,
        configurable: true
    });
    // ephemeral_block_device - computed: true, optional: false, required: false
    DataAwsLaunchConfiguration.prototype.ephemeralBlockDevice = function (index) {
        return new DataAwsLaunchConfigurationEphemeralBlockDevice(this, 'ephemeral_block_device', index);
    };
    Object.defineProperty(DataAwsLaunchConfiguration.prototype, "iamInstanceProfile", {
        // iam_instance_profile - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('iam_instance_profile');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchConfiguration.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchConfiguration.prototype, "imageId", {
        // image_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('image_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchConfiguration.prototype, "instanceType", {
        // instance_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('instance_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchConfiguration.prototype, "keyName", {
        // key_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key_name');
        },
        enumerable: false,
        configurable: true
    });
    // metadata_options - computed: true, optional: false, required: false
    DataAwsLaunchConfiguration.prototype.metadataOptions = function (index) {
        return new DataAwsLaunchConfigurationMetadataOptions(this, 'metadata_options', index);
    };
    Object.defineProperty(DataAwsLaunchConfiguration.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchConfiguration.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchConfiguration.prototype, "placementTenancy", {
        // placement_tenancy - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('placement_tenancy');
        },
        enumerable: false,
        configurable: true
    });
    // root_block_device - computed: true, optional: false, required: false
    DataAwsLaunchConfiguration.prototype.rootBlockDevice = function (index) {
        return new DataAwsLaunchConfigurationRootBlockDevice(this, 'root_block_device', index);
    };
    Object.defineProperty(DataAwsLaunchConfiguration.prototype, "securityGroups", {
        // security_groups - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('security_groups');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchConfiguration.prototype, "spotPrice", {
        // spot_price - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('spot_price');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchConfiguration.prototype, "userData", {
        // user_data - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('user_data');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchConfiguration.prototype, "vpcClassicLinkId", {
        // vpc_classic_link_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('vpc_classic_link_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchConfiguration.prototype, "vpcClassicLinkSecurityGroups", {
        // vpc_classic_link_security_groups - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('vpc_classic_link_security_groups');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsLaunchConfiguration.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsLaunchConfiguration.tfResourceType = "aws_launch_configuration";
    return DataAwsLaunchConfiguration;
}(cdktf.TerraformDataSource));
exports.DataAwsLaunchConfiguration = DataAwsLaunchConfiguration;
