"use strict";
// https://www.terraform.io/docs/providers/aws/r/launch_configuration.html
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
exports.LaunchConfiguration = void 0;
var cdktf = require("cdktf");
function launchConfigurationEbsBlockDeviceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        delete_on_termination: cdktf.booleanToTerraform(struct.deleteOnTermination),
        device_name: cdktf.stringToTerraform(struct.deviceName),
        encrypted: cdktf.booleanToTerraform(struct.encrypted),
        iops: cdktf.numberToTerraform(struct.iops),
        no_device: cdktf.booleanToTerraform(struct.noDevice),
        snapshot_id: cdktf.stringToTerraform(struct.snapshotId),
        throughput: cdktf.numberToTerraform(struct.throughput),
        volume_size: cdktf.numberToTerraform(struct.volumeSize),
        volume_type: cdktf.stringToTerraform(struct.volumeType)
    };
}
function launchConfigurationEphemeralBlockDeviceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        device_name: cdktf.stringToTerraform(struct.deviceName),
        virtual_name: cdktf.stringToTerraform(struct.virtualName)
    };
}
function launchConfigurationMetadataOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        http_endpoint: cdktf.stringToTerraform(struct.httpEndpoint),
        http_put_response_hop_limit: cdktf.numberToTerraform(struct.httpPutResponseHopLimit),
        http_tokens: cdktf.stringToTerraform(struct.httpTokens)
    };
}
function launchConfigurationRootBlockDeviceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        delete_on_termination: cdktf.booleanToTerraform(struct.deleteOnTermination),
        encrypted: cdktf.booleanToTerraform(struct.encrypted),
        iops: cdktf.numberToTerraform(struct.iops),
        throughput: cdktf.numberToTerraform(struct.throughput),
        volume_size: cdktf.numberToTerraform(struct.volumeSize),
        volume_type: cdktf.stringToTerraform(struct.volumeType)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html aws_launch_configuration}
*/
var LaunchConfiguration = /** @class */ (function (_super) {
    __extends(LaunchConfiguration, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html aws_launch_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LaunchConfigurationConfig
    */
    function LaunchConfiguration(scope, id, config) {
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
        _this._associatePublicIpAddress = config.associatePublicIpAddress;
        _this._ebsOptimized = config.ebsOptimized;
        _this._enableMonitoring = config.enableMonitoring;
        _this._iamInstanceProfile = config.iamInstanceProfile;
        _this._imageId = config.imageId;
        _this._instanceType = config.instanceType;
        _this._keyName = config.keyName;
        _this._name = config.name;
        _this._namePrefix = config.namePrefix;
        _this._placementTenancy = config.placementTenancy;
        _this._securityGroups = config.securityGroups;
        _this._spotPrice = config.spotPrice;
        _this._userData = config.userData;
        _this._userDataBase64 = config.userDataBase64;
        _this._vpcClassicLinkId = config.vpcClassicLinkId;
        _this._vpcClassicLinkSecurityGroups = config.vpcClassicLinkSecurityGroups;
        _this._ebsBlockDevice = config.ebsBlockDevice;
        _this._ephemeralBlockDevice = config.ephemeralBlockDevice;
        _this._metadataOptions = config.metadataOptions;
        _this._rootBlockDevice = config.rootBlockDevice;
        return _this;
    }
    Object.defineProperty(LaunchConfiguration.prototype, "arn", {
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
    Object.defineProperty(LaunchConfiguration.prototype, "associatePublicIpAddress", {
        get: function () {
            return this.getBooleanAttribute('associate_public_ip_address');
        },
        set: function (value) {
            this._associatePublicIpAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    LaunchConfiguration.prototype.resetAssociatePublicIpAddress = function () {
        this._associatePublicIpAddress = undefined;
    };
    Object.defineProperty(LaunchConfiguration.prototype, "associatePublicIpAddressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._associatePublicIpAddress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchConfiguration.prototype, "ebsOptimized", {
        get: function () {
            return this.getBooleanAttribute('ebs_optimized');
        },
        set: function (value) {
            this._ebsOptimized = value;
        },
        enumerable: false,
        configurable: true
    });
    LaunchConfiguration.prototype.resetEbsOptimized = function () {
        this._ebsOptimized = undefined;
    };
    Object.defineProperty(LaunchConfiguration.prototype, "ebsOptimizedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ebsOptimized;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchConfiguration.prototype, "enableMonitoring", {
        get: function () {
            return this.getBooleanAttribute('enable_monitoring');
        },
        set: function (value) {
            this._enableMonitoring = value;
        },
        enumerable: false,
        configurable: true
    });
    LaunchConfiguration.prototype.resetEnableMonitoring = function () {
        this._enableMonitoring = undefined;
    };
    Object.defineProperty(LaunchConfiguration.prototype, "enableMonitoringInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enableMonitoring;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchConfiguration.prototype, "iamInstanceProfile", {
        get: function () {
            return this.getStringAttribute('iam_instance_profile');
        },
        set: function (value) {
            this._iamInstanceProfile = value;
        },
        enumerable: false,
        configurable: true
    });
    LaunchConfiguration.prototype.resetIamInstanceProfile = function () {
        this._iamInstanceProfile = undefined;
    };
    Object.defineProperty(LaunchConfiguration.prototype, "iamInstanceProfileInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._iamInstanceProfile;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchConfiguration.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchConfiguration.prototype, "imageId", {
        get: function () {
            return this.getStringAttribute('image_id');
        },
        set: function (value) {
            this._imageId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchConfiguration.prototype, "imageIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._imageId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchConfiguration.prototype, "instanceType", {
        get: function () {
            return this.getStringAttribute('instance_type');
        },
        set: function (value) {
            this._instanceType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchConfiguration.prototype, "instanceTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchConfiguration.prototype, "keyName", {
        get: function () {
            return this.getStringAttribute('key_name');
        },
        set: function (value) {
            this._keyName = value;
        },
        enumerable: false,
        configurable: true
    });
    LaunchConfiguration.prototype.resetKeyName = function () {
        this._keyName = undefined;
    };
    Object.defineProperty(LaunchConfiguration.prototype, "keyNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keyName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchConfiguration.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    LaunchConfiguration.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(LaunchConfiguration.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchConfiguration.prototype, "namePrefix", {
        get: function () {
            return this.getStringAttribute('name_prefix');
        },
        set: function (value) {
            this._namePrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    LaunchConfiguration.prototype.resetNamePrefix = function () {
        this._namePrefix = undefined;
    };
    Object.defineProperty(LaunchConfiguration.prototype, "namePrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._namePrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchConfiguration.prototype, "placementTenancy", {
        get: function () {
            return this.getStringAttribute('placement_tenancy');
        },
        set: function (value) {
            this._placementTenancy = value;
        },
        enumerable: false,
        configurable: true
    });
    LaunchConfiguration.prototype.resetPlacementTenancy = function () {
        this._placementTenancy = undefined;
    };
    Object.defineProperty(LaunchConfiguration.prototype, "placementTenancyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._placementTenancy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchConfiguration.prototype, "securityGroups", {
        get: function () {
            return this.getListAttribute('security_groups');
        },
        set: function (value) {
            this._securityGroups = value;
        },
        enumerable: false,
        configurable: true
    });
    LaunchConfiguration.prototype.resetSecurityGroups = function () {
        this._securityGroups = undefined;
    };
    Object.defineProperty(LaunchConfiguration.prototype, "securityGroupsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._securityGroups;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchConfiguration.prototype, "spotPrice", {
        get: function () {
            return this.getStringAttribute('spot_price');
        },
        set: function (value) {
            this._spotPrice = value;
        },
        enumerable: false,
        configurable: true
    });
    LaunchConfiguration.prototype.resetSpotPrice = function () {
        this._spotPrice = undefined;
    };
    Object.defineProperty(LaunchConfiguration.prototype, "spotPriceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._spotPrice;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchConfiguration.prototype, "userData", {
        get: function () {
            return this.getStringAttribute('user_data');
        },
        set: function (value) {
            this._userData = value;
        },
        enumerable: false,
        configurable: true
    });
    LaunchConfiguration.prototype.resetUserData = function () {
        this._userData = undefined;
    };
    Object.defineProperty(LaunchConfiguration.prototype, "userDataInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userData;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchConfiguration.prototype, "userDataBase64", {
        get: function () {
            return this.getStringAttribute('user_data_base64');
        },
        set: function (value) {
            this._userDataBase64 = value;
        },
        enumerable: false,
        configurable: true
    });
    LaunchConfiguration.prototype.resetUserDataBase64 = function () {
        this._userDataBase64 = undefined;
    };
    Object.defineProperty(LaunchConfiguration.prototype, "userDataBase64Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userDataBase64;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchConfiguration.prototype, "vpcClassicLinkId", {
        get: function () {
            return this.getStringAttribute('vpc_classic_link_id');
        },
        set: function (value) {
            this._vpcClassicLinkId = value;
        },
        enumerable: false,
        configurable: true
    });
    LaunchConfiguration.prototype.resetVpcClassicLinkId = function () {
        this._vpcClassicLinkId = undefined;
    };
    Object.defineProperty(LaunchConfiguration.prototype, "vpcClassicLinkIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcClassicLinkId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchConfiguration.prototype, "vpcClassicLinkSecurityGroups", {
        get: function () {
            return this.getListAttribute('vpc_classic_link_security_groups');
        },
        set: function (value) {
            this._vpcClassicLinkSecurityGroups = value;
        },
        enumerable: false,
        configurable: true
    });
    LaunchConfiguration.prototype.resetVpcClassicLinkSecurityGroups = function () {
        this._vpcClassicLinkSecurityGroups = undefined;
    };
    Object.defineProperty(LaunchConfiguration.prototype, "vpcClassicLinkSecurityGroupsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcClassicLinkSecurityGroups;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchConfiguration.prototype, "ebsBlockDevice", {
        get: function () {
            return this.interpolationForAttribute('ebs_block_device');
        },
        set: function (value) {
            this._ebsBlockDevice = value;
        },
        enumerable: false,
        configurable: true
    });
    LaunchConfiguration.prototype.resetEbsBlockDevice = function () {
        this._ebsBlockDevice = undefined;
    };
    Object.defineProperty(LaunchConfiguration.prototype, "ebsBlockDeviceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ebsBlockDevice;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchConfiguration.prototype, "ephemeralBlockDevice", {
        get: function () {
            return this.interpolationForAttribute('ephemeral_block_device');
        },
        set: function (value) {
            this._ephemeralBlockDevice = value;
        },
        enumerable: false,
        configurable: true
    });
    LaunchConfiguration.prototype.resetEphemeralBlockDevice = function () {
        this._ephemeralBlockDevice = undefined;
    };
    Object.defineProperty(LaunchConfiguration.prototype, "ephemeralBlockDeviceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ephemeralBlockDevice;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchConfiguration.prototype, "metadataOptions", {
        get: function () {
            return this.interpolationForAttribute('metadata_options');
        },
        set: function (value) {
            this._metadataOptions = value;
        },
        enumerable: false,
        configurable: true
    });
    LaunchConfiguration.prototype.resetMetadataOptions = function () {
        this._metadataOptions = undefined;
    };
    Object.defineProperty(LaunchConfiguration.prototype, "metadataOptionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._metadataOptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaunchConfiguration.prototype, "rootBlockDevice", {
        get: function () {
            return this.interpolationForAttribute('root_block_device');
        },
        set: function (value) {
            this._rootBlockDevice = value;
        },
        enumerable: false,
        configurable: true
    });
    LaunchConfiguration.prototype.resetRootBlockDevice = function () {
        this._rootBlockDevice = undefined;
    };
    Object.defineProperty(LaunchConfiguration.prototype, "rootBlockDeviceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rootBlockDevice;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    LaunchConfiguration.prototype.synthesizeAttributes = function () {
        return {
            associate_public_ip_address: cdktf.booleanToTerraform(this._associatePublicIpAddress),
            ebs_optimized: cdktf.booleanToTerraform(this._ebsOptimized),
            enable_monitoring: cdktf.booleanToTerraform(this._enableMonitoring),
            iam_instance_profile: cdktf.stringToTerraform(this._iamInstanceProfile),
            image_id: cdktf.stringToTerraform(this._imageId),
            instance_type: cdktf.stringToTerraform(this._instanceType),
            key_name: cdktf.stringToTerraform(this._keyName),
            name: cdktf.stringToTerraform(this._name),
            name_prefix: cdktf.stringToTerraform(this._namePrefix),
            placement_tenancy: cdktf.stringToTerraform(this._placementTenancy),
            security_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroups),
            spot_price: cdktf.stringToTerraform(this._spotPrice),
            user_data: cdktf.stringToTerraform(this._userData),
            user_data_base64: cdktf.stringToTerraform(this._userDataBase64),
            vpc_classic_link_id: cdktf.stringToTerraform(this._vpcClassicLinkId),
            vpc_classic_link_security_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcClassicLinkSecurityGroups),
            ebs_block_device: cdktf.listMapper(launchConfigurationEbsBlockDeviceToTerraform)(this._ebsBlockDevice),
            ephemeral_block_device: cdktf.listMapper(launchConfigurationEphemeralBlockDeviceToTerraform)(this._ephemeralBlockDevice),
            metadata_options: cdktf.listMapper(launchConfigurationMetadataOptionsToTerraform)(this._metadataOptions),
            root_block_device: cdktf.listMapper(launchConfigurationRootBlockDeviceToTerraform)(this._rootBlockDevice)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    LaunchConfiguration.tfResourceType = "aws_launch_configuration";
    return LaunchConfiguration;
}(cdktf.TerraformResource));
exports.LaunchConfiguration = LaunchConfiguration;
