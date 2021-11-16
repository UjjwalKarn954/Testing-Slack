"use strict";
// https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html
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
exports.StoragegatewayGateway = exports.StoragegatewayGatewayGatewayNetworkInterface = void 0;
var cdktf = require("cdktf");
var StoragegatewayGatewayGatewayNetworkInterface = /** @class */ (function (_super) {
    __extends(StoragegatewayGatewayGatewayNetworkInterface, _super);
    function StoragegatewayGatewayGatewayNetworkInterface() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(StoragegatewayGatewayGatewayNetworkInterface.prototype, "ipv4Address", {
        // ipv4_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ipv4_address');
        },
        enumerable: false,
        configurable: true
    });
    return StoragegatewayGatewayGatewayNetworkInterface;
}(cdktf.ComplexComputedList));
exports.StoragegatewayGatewayGatewayNetworkInterface = StoragegatewayGatewayGatewayNetworkInterface;
function storagegatewayGatewaySmbActiveDirectorySettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        domain_controllers: cdktf.listMapper(cdktf.stringToTerraform)(struct.domainControllers),
        domain_name: cdktf.stringToTerraform(struct.domainName),
        organizational_unit: cdktf.stringToTerraform(struct.organizationalUnit),
        password: cdktf.stringToTerraform(struct.password),
        timeout_in_seconds: cdktf.numberToTerraform(struct.timeoutInSeconds),
        username: cdktf.stringToTerraform(struct.username)
    };
}
function storagegatewayGatewayTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html aws_storagegateway_gateway}
*/
var StoragegatewayGateway = /** @class */ (function (_super) {
    __extends(StoragegatewayGateway, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html aws_storagegateway_gateway} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options StoragegatewayGatewayConfig
    */
    function StoragegatewayGateway(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_storagegateway_gateway',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._activationKey = config.activationKey;
        _this._averageDownloadRateLimitInBitsPerSec = config.averageDownloadRateLimitInBitsPerSec;
        _this._averageUploadRateLimitInBitsPerSec = config.averageUploadRateLimitInBitsPerSec;
        _this._cloudwatchLogGroupArn = config.cloudwatchLogGroupArn;
        _this._gatewayIpAddress = config.gatewayIpAddress;
        _this._gatewayName = config.gatewayName;
        _this._gatewayTimezone = config.gatewayTimezone;
        _this._gatewayType = config.gatewayType;
        _this._gatewayVpcEndpoint = config.gatewayVpcEndpoint;
        _this._mediumChangerType = config.mediumChangerType;
        _this._smbFileShareVisibility = config.smbFileShareVisibility;
        _this._smbGuestPassword = config.smbGuestPassword;
        _this._smbSecurityStrategy = config.smbSecurityStrategy;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._tapeDriveType = config.tapeDriveType;
        _this._smbActiveDirectorySettings = config.smbActiveDirectorySettings;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(StoragegatewayGateway.prototype, "activationKey", {
        get: function () {
            return this.getStringAttribute('activation_key');
        },
        set: function (value) {
            this._activationKey = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewayGateway.prototype.resetActivationKey = function () {
        this._activationKey = undefined;
    };
    Object.defineProperty(StoragegatewayGateway.prototype, "activationKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._activationKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayGateway.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayGateway.prototype, "averageDownloadRateLimitInBitsPerSec", {
        get: function () {
            return this.getNumberAttribute('average_download_rate_limit_in_bits_per_sec');
        },
        set: function (value) {
            this._averageDownloadRateLimitInBitsPerSec = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewayGateway.prototype.resetAverageDownloadRateLimitInBitsPerSec = function () {
        this._averageDownloadRateLimitInBitsPerSec = undefined;
    };
    Object.defineProperty(StoragegatewayGateway.prototype, "averageDownloadRateLimitInBitsPerSecInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._averageDownloadRateLimitInBitsPerSec;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayGateway.prototype, "averageUploadRateLimitInBitsPerSec", {
        get: function () {
            return this.getNumberAttribute('average_upload_rate_limit_in_bits_per_sec');
        },
        set: function (value) {
            this._averageUploadRateLimitInBitsPerSec = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewayGateway.prototype.resetAverageUploadRateLimitInBitsPerSec = function () {
        this._averageUploadRateLimitInBitsPerSec = undefined;
    };
    Object.defineProperty(StoragegatewayGateway.prototype, "averageUploadRateLimitInBitsPerSecInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._averageUploadRateLimitInBitsPerSec;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayGateway.prototype, "cloudwatchLogGroupArn", {
        get: function () {
            return this.getStringAttribute('cloudwatch_log_group_arn');
        },
        set: function (value) {
            this._cloudwatchLogGroupArn = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewayGateway.prototype.resetCloudwatchLogGroupArn = function () {
        this._cloudwatchLogGroupArn = undefined;
    };
    Object.defineProperty(StoragegatewayGateway.prototype, "cloudwatchLogGroupArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cloudwatchLogGroupArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayGateway.prototype, "ec2InstanceId", {
        // ec2_instance_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ec2_instance_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayGateway.prototype, "endpointType", {
        // endpoint_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('endpoint_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayGateway.prototype, "gatewayId", {
        // gateway_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('gateway_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayGateway.prototype, "gatewayIpAddress", {
        get: function () {
            return this.getStringAttribute('gateway_ip_address');
        },
        set: function (value) {
            this._gatewayIpAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewayGateway.prototype.resetGatewayIpAddress = function () {
        this._gatewayIpAddress = undefined;
    };
    Object.defineProperty(StoragegatewayGateway.prototype, "gatewayIpAddressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._gatewayIpAddress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayGateway.prototype, "gatewayName", {
        get: function () {
            return this.getStringAttribute('gateway_name');
        },
        set: function (value) {
            this._gatewayName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayGateway.prototype, "gatewayNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._gatewayName;
        },
        enumerable: false,
        configurable: true
    });
    // gateway_network_interface - computed: true, optional: false, required: false
    StoragegatewayGateway.prototype.gatewayNetworkInterface = function (index) {
        return new StoragegatewayGatewayGatewayNetworkInterface(this, 'gateway_network_interface', index);
    };
    Object.defineProperty(StoragegatewayGateway.prototype, "gatewayTimezone", {
        get: function () {
            return this.getStringAttribute('gateway_timezone');
        },
        set: function (value) {
            this._gatewayTimezone = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayGateway.prototype, "gatewayTimezoneInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._gatewayTimezone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayGateway.prototype, "gatewayType", {
        get: function () {
            return this.getStringAttribute('gateway_type');
        },
        set: function (value) {
            this._gatewayType = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewayGateway.prototype.resetGatewayType = function () {
        this._gatewayType = undefined;
    };
    Object.defineProperty(StoragegatewayGateway.prototype, "gatewayTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._gatewayType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayGateway.prototype, "gatewayVpcEndpoint", {
        get: function () {
            return this.getStringAttribute('gateway_vpc_endpoint');
        },
        set: function (value) {
            this._gatewayVpcEndpoint = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewayGateway.prototype.resetGatewayVpcEndpoint = function () {
        this._gatewayVpcEndpoint = undefined;
    };
    Object.defineProperty(StoragegatewayGateway.prototype, "gatewayVpcEndpointInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._gatewayVpcEndpoint;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayGateway.prototype, "hostEnvironment", {
        // host_environment - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('host_environment');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayGateway.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayGateway.prototype, "mediumChangerType", {
        get: function () {
            return this.getStringAttribute('medium_changer_type');
        },
        set: function (value) {
            this._mediumChangerType = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewayGateway.prototype.resetMediumChangerType = function () {
        this._mediumChangerType = undefined;
    };
    Object.defineProperty(StoragegatewayGateway.prototype, "mediumChangerTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mediumChangerType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayGateway.prototype, "smbFileShareVisibility", {
        get: function () {
            return this.getBooleanAttribute('smb_file_share_visibility');
        },
        set: function (value) {
            this._smbFileShareVisibility = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewayGateway.prototype.resetSmbFileShareVisibility = function () {
        this._smbFileShareVisibility = undefined;
    };
    Object.defineProperty(StoragegatewayGateway.prototype, "smbFileShareVisibilityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._smbFileShareVisibility;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayGateway.prototype, "smbGuestPassword", {
        get: function () {
            return this.getStringAttribute('smb_guest_password');
        },
        set: function (value) {
            this._smbGuestPassword = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewayGateway.prototype.resetSmbGuestPassword = function () {
        this._smbGuestPassword = undefined;
    };
    Object.defineProperty(StoragegatewayGateway.prototype, "smbGuestPasswordInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._smbGuestPassword;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayGateway.prototype, "smbSecurityStrategy", {
        get: function () {
            return this.getStringAttribute('smb_security_strategy');
        },
        set: function (value) {
            this._smbSecurityStrategy = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewayGateway.prototype.resetSmbSecurityStrategy = function () {
        this._smbSecurityStrategy = undefined;
    };
    Object.defineProperty(StoragegatewayGateway.prototype, "smbSecurityStrategyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._smbSecurityStrategy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayGateway.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewayGateway.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(StoragegatewayGateway.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayGateway.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewayGateway.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(StoragegatewayGateway.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayGateway.prototype, "tapeDriveType", {
        get: function () {
            return this.getStringAttribute('tape_drive_type');
        },
        set: function (value) {
            this._tapeDriveType = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewayGateway.prototype.resetTapeDriveType = function () {
        this._tapeDriveType = undefined;
    };
    Object.defineProperty(StoragegatewayGateway.prototype, "tapeDriveTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tapeDriveType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayGateway.prototype, "smbActiveDirectorySettings", {
        get: function () {
            return this.interpolationForAttribute('smb_active_directory_settings');
        },
        set: function (value) {
            this._smbActiveDirectorySettings = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewayGateway.prototype.resetSmbActiveDirectorySettings = function () {
        this._smbActiveDirectorySettings = undefined;
    };
    Object.defineProperty(StoragegatewayGateway.prototype, "smbActiveDirectorySettingsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._smbActiveDirectorySettings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoragegatewayGateway.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    StoragegatewayGateway.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(StoragegatewayGateway.prototype, "timeoutsInput", {
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
    StoragegatewayGateway.prototype.synthesizeAttributes = function () {
        return {
            activation_key: cdktf.stringToTerraform(this._activationKey),
            average_download_rate_limit_in_bits_per_sec: cdktf.numberToTerraform(this._averageDownloadRateLimitInBitsPerSec),
            average_upload_rate_limit_in_bits_per_sec: cdktf.numberToTerraform(this._averageUploadRateLimitInBitsPerSec),
            cloudwatch_log_group_arn: cdktf.stringToTerraform(this._cloudwatchLogGroupArn),
            gateway_ip_address: cdktf.stringToTerraform(this._gatewayIpAddress),
            gateway_name: cdktf.stringToTerraform(this._gatewayName),
            gateway_timezone: cdktf.stringToTerraform(this._gatewayTimezone),
            gateway_type: cdktf.stringToTerraform(this._gatewayType),
            gateway_vpc_endpoint: cdktf.stringToTerraform(this._gatewayVpcEndpoint),
            medium_changer_type: cdktf.stringToTerraform(this._mediumChangerType),
            smb_file_share_visibility: cdktf.booleanToTerraform(this._smbFileShareVisibility),
            smb_guest_password: cdktf.stringToTerraform(this._smbGuestPassword),
            smb_security_strategy: cdktf.stringToTerraform(this._smbSecurityStrategy),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            tape_drive_type: cdktf.stringToTerraform(this._tapeDriveType),
            smb_active_directory_settings: cdktf.listMapper(storagegatewayGatewaySmbActiveDirectorySettingsToTerraform)(this._smbActiveDirectorySettings),
            timeouts: storagegatewayGatewayTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    StoragegatewayGateway.tfResourceType = "aws_storagegateway_gateway";
    return StoragegatewayGateway;
}(cdktf.TerraformResource));
exports.StoragegatewayGateway = StoragegatewayGateway;
