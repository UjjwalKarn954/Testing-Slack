"use strict";
// https://www.terraform.io/docs/providers/aws/d/launch_template.html
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
exports.DataAwsLaunchTemplate = exports.DataAwsLaunchTemplateTagSpecifications = exports.DataAwsLaunchTemplatePlacement = exports.DataAwsLaunchTemplateNetworkInterfaces = exports.DataAwsLaunchTemplateMonitoring = exports.DataAwsLaunchTemplateMetadataOptions = exports.DataAwsLaunchTemplateInstanceMarketOptions = exports.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions = exports.DataAwsLaunchTemplateIamInstanceProfile = exports.DataAwsLaunchTemplateHibernationOptions = exports.DataAwsLaunchTemplateEnclaveOptions = exports.DataAwsLaunchTemplateElasticGpuSpecifications = exports.DataAwsLaunchTemplateCreditSpecification = exports.DataAwsLaunchTemplateBlockDeviceMappings = exports.DataAwsLaunchTemplateBlockDeviceMappingsEbs = void 0;
var cdktf = require("cdktf");
var DataAwsLaunchTemplateBlockDeviceMappingsEbs = /** @class */ (function (_super) {
    __extends(DataAwsLaunchTemplateBlockDeviceMappingsEbs, _super);
    function DataAwsLaunchTemplateBlockDeviceMappingsEbs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsLaunchTemplateBlockDeviceMappingsEbs.prototype, "deleteOnTermination", {
        // delete_on_termination - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('delete_on_termination');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchTemplateBlockDeviceMappingsEbs.prototype, "encrypted", {
        // encrypted - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('encrypted');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchTemplateBlockDeviceMappingsEbs.prototype, "iops", {
        // iops - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('iops');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchTemplateBlockDeviceMappingsEbs.prototype, "kmsKeyId", {
        // kms_key_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('kms_key_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchTemplateBlockDeviceMappingsEbs.prototype, "snapshotId", {
        // snapshot_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('snapshot_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchTemplateBlockDeviceMappingsEbs.prototype, "throughput", {
        // throughput - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('throughput');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchTemplateBlockDeviceMappingsEbs.prototype, "volumeSize", {
        // volume_size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('volume_size');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchTemplateBlockDeviceMappingsEbs.prototype, "volumeType", {
        // volume_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('volume_type');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsLaunchTemplateBlockDeviceMappingsEbs;
}(cdktf.ComplexComputedList));
exports.DataAwsLaunchTemplateBlockDeviceMappingsEbs = DataAwsLaunchTemplateBlockDeviceMappingsEbs;
var DataAwsLaunchTemplateBlockDeviceMappings = /** @class */ (function (_super) {
    __extends(DataAwsLaunchTemplateBlockDeviceMappings, _super);
    function DataAwsLaunchTemplateBlockDeviceMappings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsLaunchTemplateBlockDeviceMappings.prototype, "deviceName", {
        // device_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('device_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchTemplateBlockDeviceMappings.prototype, "ebs", {
        // ebs - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('ebs');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchTemplateBlockDeviceMappings.prototype, "noDevice", {
        // no_device - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('no_device');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchTemplateBlockDeviceMappings.prototype, "virtualName", {
        // virtual_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('virtual_name');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsLaunchTemplateBlockDeviceMappings;
}(cdktf.ComplexComputedList));
exports.DataAwsLaunchTemplateBlockDeviceMappings = DataAwsLaunchTemplateBlockDeviceMappings;
var DataAwsLaunchTemplateCreditSpecification = /** @class */ (function (_super) {
    __extends(DataAwsLaunchTemplateCreditSpecification, _super);
    function DataAwsLaunchTemplateCreditSpecification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsLaunchTemplateCreditSpecification.prototype, "cpuCredits", {
        // cpu_credits - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cpu_credits');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsLaunchTemplateCreditSpecification;
}(cdktf.ComplexComputedList));
exports.DataAwsLaunchTemplateCreditSpecification = DataAwsLaunchTemplateCreditSpecification;
var DataAwsLaunchTemplateElasticGpuSpecifications = /** @class */ (function (_super) {
    __extends(DataAwsLaunchTemplateElasticGpuSpecifications, _super);
    function DataAwsLaunchTemplateElasticGpuSpecifications() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsLaunchTemplateElasticGpuSpecifications.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsLaunchTemplateElasticGpuSpecifications;
}(cdktf.ComplexComputedList));
exports.DataAwsLaunchTemplateElasticGpuSpecifications = DataAwsLaunchTemplateElasticGpuSpecifications;
var DataAwsLaunchTemplateEnclaveOptions = /** @class */ (function (_super) {
    __extends(DataAwsLaunchTemplateEnclaveOptions, _super);
    function DataAwsLaunchTemplateEnclaveOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsLaunchTemplateEnclaveOptions.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsLaunchTemplateEnclaveOptions;
}(cdktf.ComplexComputedList));
exports.DataAwsLaunchTemplateEnclaveOptions = DataAwsLaunchTemplateEnclaveOptions;
var DataAwsLaunchTemplateHibernationOptions = /** @class */ (function (_super) {
    __extends(DataAwsLaunchTemplateHibernationOptions, _super);
    function DataAwsLaunchTemplateHibernationOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsLaunchTemplateHibernationOptions.prototype, "configured", {
        // configured - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('configured');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsLaunchTemplateHibernationOptions;
}(cdktf.ComplexComputedList));
exports.DataAwsLaunchTemplateHibernationOptions = DataAwsLaunchTemplateHibernationOptions;
var DataAwsLaunchTemplateIamInstanceProfile = /** @class */ (function (_super) {
    __extends(DataAwsLaunchTemplateIamInstanceProfile, _super);
    function DataAwsLaunchTemplateIamInstanceProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsLaunchTemplateIamInstanceProfile.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchTemplateIamInstanceProfile.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsLaunchTemplateIamInstanceProfile;
}(cdktf.ComplexComputedList));
exports.DataAwsLaunchTemplateIamInstanceProfile = DataAwsLaunchTemplateIamInstanceProfile;
var DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions = /** @class */ (function (_super) {
    __extends(DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions, _super);
    function DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions.prototype, "blockDurationMinutes", {
        // block_duration_minutes - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('block_duration_minutes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions.prototype, "instanceInterruptionBehavior", {
        // instance_interruption_behavior - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('instance_interruption_behavior');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions.prototype, "maxPrice", {
        // max_price - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('max_price');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions.prototype, "spotInstanceType", {
        // spot_instance_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('spot_instance_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions.prototype, "validUntil", {
        // valid_until - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('valid_until');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions;
}(cdktf.ComplexComputedList));
exports.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions = DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions;
var DataAwsLaunchTemplateInstanceMarketOptions = /** @class */ (function (_super) {
    __extends(DataAwsLaunchTemplateInstanceMarketOptions, _super);
    function DataAwsLaunchTemplateInstanceMarketOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsLaunchTemplateInstanceMarketOptions.prototype, "marketType", {
        // market_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('market_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchTemplateInstanceMarketOptions.prototype, "spotOptions", {
        // spot_options - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('spot_options');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsLaunchTemplateInstanceMarketOptions;
}(cdktf.ComplexComputedList));
exports.DataAwsLaunchTemplateInstanceMarketOptions = DataAwsLaunchTemplateInstanceMarketOptions;
var DataAwsLaunchTemplateMetadataOptions = /** @class */ (function (_super) {
    __extends(DataAwsLaunchTemplateMetadataOptions, _super);
    function DataAwsLaunchTemplateMetadataOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsLaunchTemplateMetadataOptions.prototype, "httpEndpoint", {
        // http_endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('http_endpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchTemplateMetadataOptions.prototype, "httpProtocolIpv6", {
        // http_protocol_ipv6 - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('http_protocol_ipv6');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchTemplateMetadataOptions.prototype, "httpPutResponseHopLimit", {
        // http_put_response_hop_limit - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('http_put_response_hop_limit');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchTemplateMetadataOptions.prototype, "httpTokens", {
        // http_tokens - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('http_tokens');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsLaunchTemplateMetadataOptions;
}(cdktf.ComplexComputedList));
exports.DataAwsLaunchTemplateMetadataOptions = DataAwsLaunchTemplateMetadataOptions;
var DataAwsLaunchTemplateMonitoring = /** @class */ (function (_super) {
    __extends(DataAwsLaunchTemplateMonitoring, _super);
    function DataAwsLaunchTemplateMonitoring() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsLaunchTemplateMonitoring.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsLaunchTemplateMonitoring;
}(cdktf.ComplexComputedList));
exports.DataAwsLaunchTemplateMonitoring = DataAwsLaunchTemplateMonitoring;
var DataAwsLaunchTemplateNetworkInterfaces = /** @class */ (function (_super) {
    __extends(DataAwsLaunchTemplateNetworkInterfaces, _super);
    function DataAwsLaunchTemplateNetworkInterfaces() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsLaunchTemplateNetworkInterfaces.prototype, "associateCarrierIpAddress", {
        // associate_carrier_ip_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('associate_carrier_ip_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchTemplateNetworkInterfaces.prototype, "associatePublicIpAddress", {
        // associate_public_ip_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('associate_public_ip_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchTemplateNetworkInterfaces.prototype, "deleteOnTermination", {
        // delete_on_termination - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('delete_on_termination');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchTemplateNetworkInterfaces.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchTemplateNetworkInterfaces.prototype, "deviceIndex", {
        // device_index - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('device_index');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchTemplateNetworkInterfaces.prototype, "interfaceType", {
        // interface_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('interface_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchTemplateNetworkInterfaces.prototype, "ipv4AddressCount", {
        // ipv4_address_count - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('ipv4_address_count');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchTemplateNetworkInterfaces.prototype, "ipv4Addresses", {
        // ipv4_addresses - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('ipv4_addresses');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchTemplateNetworkInterfaces.prototype, "ipv6AddressCount", {
        // ipv6_address_count - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('ipv6_address_count');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchTemplateNetworkInterfaces.prototype, "ipv6Addresses", {
        // ipv6_addresses - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('ipv6_addresses');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchTemplateNetworkInterfaces.prototype, "networkCardIndex", {
        // network_card_index - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('network_card_index');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchTemplateNetworkInterfaces.prototype, "networkInterfaceId", {
        // network_interface_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('network_interface_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchTemplateNetworkInterfaces.prototype, "privateIpAddress", {
        // private_ip_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('private_ip_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchTemplateNetworkInterfaces.prototype, "securityGroups", {
        // security_groups - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('security_groups');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchTemplateNetworkInterfaces.prototype, "subnetId", {
        // subnet_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('subnet_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsLaunchTemplateNetworkInterfaces;
}(cdktf.ComplexComputedList));
exports.DataAwsLaunchTemplateNetworkInterfaces = DataAwsLaunchTemplateNetworkInterfaces;
var DataAwsLaunchTemplatePlacement = /** @class */ (function (_super) {
    __extends(DataAwsLaunchTemplatePlacement, _super);
    function DataAwsLaunchTemplatePlacement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsLaunchTemplatePlacement.prototype, "affinity", {
        // affinity - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('affinity');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchTemplatePlacement.prototype, "availabilityZone", {
        // availability_zone - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('availability_zone');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchTemplatePlacement.prototype, "groupName", {
        // group_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('group_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchTemplatePlacement.prototype, "hostId", {
        // host_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('host_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchTemplatePlacement.prototype, "hostResourceGroupArn", {
        // host_resource_group_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('host_resource_group_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchTemplatePlacement.prototype, "partitionNumber", {
        // partition_number - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('partition_number');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchTemplatePlacement.prototype, "spreadDomain", {
        // spread_domain - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('spread_domain');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchTemplatePlacement.prototype, "tenancy", {
        // tenancy - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tenancy');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsLaunchTemplatePlacement;
}(cdktf.ComplexComputedList));
exports.DataAwsLaunchTemplatePlacement = DataAwsLaunchTemplatePlacement;
var DataAwsLaunchTemplateTagSpecifications = /** @class */ (function (_super) {
    __extends(DataAwsLaunchTemplateTagSpecifications, _super);
    function DataAwsLaunchTemplateTagSpecifications() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsLaunchTemplateTagSpecifications.prototype, "resourceType", {
        // resource_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('resource_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchTemplateTagSpecifications.prototype, "tags", {
        // tags - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsLaunchTemplateTagSpecifications;
}(cdktf.ComplexComputedList));
exports.DataAwsLaunchTemplateTagSpecifications = DataAwsLaunchTemplateTagSpecifications;
function dataAwsLaunchTemplateFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/launch_template.html aws_launch_template}
*/
var DataAwsLaunchTemplate = /** @class */ (function (_super) {
    __extends(DataAwsLaunchTemplate, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/launch_template.html aws_launch_template} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLaunchTemplateConfig = {}
    */
    function DataAwsLaunchTemplate(scope, id, config) {
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
        _this._name = config.name;
        _this._tags = config.tags;
        _this._filter = config.filter;
        return _this;
    }
    Object.defineProperty(DataAwsLaunchTemplate.prototype, "arn", {
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
    // block_device_mappings - computed: true, optional: false, required: false
    DataAwsLaunchTemplate.prototype.blockDeviceMappings = function (index) {
        return new DataAwsLaunchTemplateBlockDeviceMappings(this, 'block_device_mappings', index);
    };
    // credit_specification - computed: true, optional: false, required: false
    DataAwsLaunchTemplate.prototype.creditSpecification = function (index) {
        return new DataAwsLaunchTemplateCreditSpecification(this, 'credit_specification', index);
    };
    Object.defineProperty(DataAwsLaunchTemplate.prototype, "defaultVersion", {
        // default_version - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('default_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchTemplate.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchTemplate.prototype, "disableApiTermination", {
        // disable_api_termination - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('disable_api_termination');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchTemplate.prototype, "ebsOptimized", {
        // ebs_optimized - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ebs_optimized');
        },
        enumerable: false,
        configurable: true
    });
    // elastic_gpu_specifications - computed: true, optional: false, required: false
    DataAwsLaunchTemplate.prototype.elasticGpuSpecifications = function (index) {
        return new DataAwsLaunchTemplateElasticGpuSpecifications(this, 'elastic_gpu_specifications', index);
    };
    // enclave_options - computed: true, optional: false, required: false
    DataAwsLaunchTemplate.prototype.enclaveOptions = function (index) {
        return new DataAwsLaunchTemplateEnclaveOptions(this, 'enclave_options', index);
    };
    // hibernation_options - computed: true, optional: false, required: false
    DataAwsLaunchTemplate.prototype.hibernationOptions = function (index) {
        return new DataAwsLaunchTemplateHibernationOptions(this, 'hibernation_options', index);
    };
    // iam_instance_profile - computed: true, optional: false, required: false
    DataAwsLaunchTemplate.prototype.iamInstanceProfile = function (index) {
        return new DataAwsLaunchTemplateIamInstanceProfile(this, 'iam_instance_profile', index);
    };
    Object.defineProperty(DataAwsLaunchTemplate.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchTemplate.prototype, "imageId", {
        // image_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('image_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchTemplate.prototype, "instanceInitiatedShutdownBehavior", {
        // instance_initiated_shutdown_behavior - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('instance_initiated_shutdown_behavior');
        },
        enumerable: false,
        configurable: true
    });
    // instance_market_options - computed: true, optional: false, required: false
    DataAwsLaunchTemplate.prototype.instanceMarketOptions = function (index) {
        return new DataAwsLaunchTemplateInstanceMarketOptions(this, 'instance_market_options', index);
    };
    Object.defineProperty(DataAwsLaunchTemplate.prototype, "instanceType", {
        // instance_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('instance_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchTemplate.prototype, "kernelId", {
        // kernel_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('kernel_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchTemplate.prototype, "keyName", {
        // key_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchTemplate.prototype, "latestVersion", {
        // latest_version - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('latest_version');
        },
        enumerable: false,
        configurable: true
    });
    // metadata_options - computed: true, optional: false, required: false
    DataAwsLaunchTemplate.prototype.metadataOptions = function (index) {
        return new DataAwsLaunchTemplateMetadataOptions(this, 'metadata_options', index);
    };
    // monitoring - computed: true, optional: false, required: false
    DataAwsLaunchTemplate.prototype.monitoring = function (index) {
        return new DataAwsLaunchTemplateMonitoring(this, 'monitoring', index);
    };
    Object.defineProperty(DataAwsLaunchTemplate.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsLaunchTemplate.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(DataAwsLaunchTemplate.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    // network_interfaces - computed: true, optional: false, required: false
    DataAwsLaunchTemplate.prototype.networkInterfaces = function (index) {
        return new DataAwsLaunchTemplateNetworkInterfaces(this, 'network_interfaces', index);
    };
    // placement - computed: true, optional: false, required: false
    DataAwsLaunchTemplate.prototype.placement = function (index) {
        return new DataAwsLaunchTemplatePlacement(this, 'placement', index);
    };
    Object.defineProperty(DataAwsLaunchTemplate.prototype, "ramDiskId", {
        // ram_disk_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ram_disk_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchTemplate.prototype, "securityGroupNames", {
        // security_group_names - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('security_group_names');
        },
        enumerable: false,
        configurable: true
    });
    // tag_specifications - computed: true, optional: false, required: false
    DataAwsLaunchTemplate.prototype.tagSpecifications = function (index) {
        return new DataAwsLaunchTemplateTagSpecifications(this, 'tag_specifications', index);
    };
    Object.defineProperty(DataAwsLaunchTemplate.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsLaunchTemplate.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsLaunchTemplate.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchTemplate.prototype, "userData", {
        // user_data - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('user_data');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchTemplate.prototype, "vpcSecurityGroupIds", {
        // vpc_security_group_ids - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('vpc_security_group_ids');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLaunchTemplate.prototype, "filter", {
        get: function () {
            return this.interpolationForAttribute('filter');
        },
        set: function (value) {
            this._filter = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsLaunchTemplate.prototype.resetFilter = function () {
        this._filter = undefined;
    };
    Object.defineProperty(DataAwsLaunchTemplate.prototype, "filterInput", {
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
    DataAwsLaunchTemplate.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            filter: cdktf.listMapper(dataAwsLaunchTemplateFilterToTerraform)(this._filter)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsLaunchTemplate.tfResourceType = "aws_launch_template";
    return DataAwsLaunchTemplate;
}(cdktf.TerraformDataSource));
exports.DataAwsLaunchTemplate = DataAwsLaunchTemplate;
