"use strict";
// https://www.terraform.io/docs/providers/aws/r/network_interface.html
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
exports.NetworkInterface = void 0;
var cdktf = require("cdktf");
function networkInterfaceAttachmentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        device_index: cdktf.numberToTerraform(struct.deviceIndex),
        instance: cdktf.stringToTerraform(struct.instance)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html aws_network_interface}
*/
var NetworkInterface = /** @class */ (function (_super) {
    __extends(NetworkInterface, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/network_interface.html aws_network_interface} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkInterfaceConfig
    */
    function NetworkInterface(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_network_interface',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._description = config.description;
        _this._interfaceType = config.interfaceType;
        _this._ipv4PrefixCount = config.ipv4PrefixCount;
        _this._ipv4Prefixes = config.ipv4Prefixes;
        _this._ipv6AddressCount = config.ipv6AddressCount;
        _this._ipv6Addresses = config.ipv6Addresses;
        _this._ipv6PrefixCount = config.ipv6PrefixCount;
        _this._ipv6Prefixes = config.ipv6Prefixes;
        _this._privateIp = config.privateIp;
        _this._privateIps = config.privateIps;
        _this._privateIpsCount = config.privateIpsCount;
        _this._securityGroups = config.securityGroups;
        _this._sourceDestCheck = config.sourceDestCheck;
        _this._subnetId = config.subnetId;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._attachment = config.attachment;
        return _this;
    }
    Object.defineProperty(NetworkInterface.prototype, "arn", {
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
    Object.defineProperty(NetworkInterface.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    NetworkInterface.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(NetworkInterface.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkInterface.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkInterface.prototype, "interfaceType", {
        get: function () {
            return this.getStringAttribute('interface_type');
        },
        set: function (value) {
            this._interfaceType = value;
        },
        enumerable: false,
        configurable: true
    });
    NetworkInterface.prototype.resetInterfaceType = function () {
        this._interfaceType = undefined;
    };
    Object.defineProperty(NetworkInterface.prototype, "interfaceTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._interfaceType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkInterface.prototype, "ipv4PrefixCount", {
        get: function () {
            return this.getNumberAttribute('ipv4_prefix_count');
        },
        set: function (value) {
            this._ipv4PrefixCount = value;
        },
        enumerable: false,
        configurable: true
    });
    NetworkInterface.prototype.resetIpv4PrefixCount = function () {
        this._ipv4PrefixCount = undefined;
    };
    Object.defineProperty(NetworkInterface.prototype, "ipv4PrefixCountInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipv4PrefixCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkInterface.prototype, "ipv4Prefixes", {
        get: function () {
            return this.getListAttribute('ipv4_prefixes');
        },
        set: function (value) {
            this._ipv4Prefixes = value;
        },
        enumerable: false,
        configurable: true
    });
    NetworkInterface.prototype.resetIpv4Prefixes = function () {
        this._ipv4Prefixes = undefined;
    };
    Object.defineProperty(NetworkInterface.prototype, "ipv4PrefixesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipv4Prefixes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkInterface.prototype, "ipv6AddressCount", {
        get: function () {
            return this.getNumberAttribute('ipv6_address_count');
        },
        set: function (value) {
            this._ipv6AddressCount = value;
        },
        enumerable: false,
        configurable: true
    });
    NetworkInterface.prototype.resetIpv6AddressCount = function () {
        this._ipv6AddressCount = undefined;
    };
    Object.defineProperty(NetworkInterface.prototype, "ipv6AddressCountInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipv6AddressCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkInterface.prototype, "ipv6Addresses", {
        get: function () {
            return this.getListAttribute('ipv6_addresses');
        },
        set: function (value) {
            this._ipv6Addresses = value;
        },
        enumerable: false,
        configurable: true
    });
    NetworkInterface.prototype.resetIpv6Addresses = function () {
        this._ipv6Addresses = undefined;
    };
    Object.defineProperty(NetworkInterface.prototype, "ipv6AddressesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipv6Addresses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkInterface.prototype, "ipv6PrefixCount", {
        get: function () {
            return this.getNumberAttribute('ipv6_prefix_count');
        },
        set: function (value) {
            this._ipv6PrefixCount = value;
        },
        enumerable: false,
        configurable: true
    });
    NetworkInterface.prototype.resetIpv6PrefixCount = function () {
        this._ipv6PrefixCount = undefined;
    };
    Object.defineProperty(NetworkInterface.prototype, "ipv6PrefixCountInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipv6PrefixCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkInterface.prototype, "ipv6Prefixes", {
        get: function () {
            return this.getListAttribute('ipv6_prefixes');
        },
        set: function (value) {
            this._ipv6Prefixes = value;
        },
        enumerable: false,
        configurable: true
    });
    NetworkInterface.prototype.resetIpv6Prefixes = function () {
        this._ipv6Prefixes = undefined;
    };
    Object.defineProperty(NetworkInterface.prototype, "ipv6PrefixesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipv6Prefixes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkInterface.prototype, "macAddress", {
        // mac_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('mac_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkInterface.prototype, "outpostArn", {
        // outpost_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('outpost_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkInterface.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkInterface.prototype, "privateDnsName", {
        // private_dns_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('private_dns_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkInterface.prototype, "privateIp", {
        get: function () {
            return this.getStringAttribute('private_ip');
        },
        set: function (value) {
            this._privateIp = value;
        },
        enumerable: false,
        configurable: true
    });
    NetworkInterface.prototype.resetPrivateIp = function () {
        this._privateIp = undefined;
    };
    Object.defineProperty(NetworkInterface.prototype, "privateIpInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._privateIp;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkInterface.prototype, "privateIps", {
        get: function () {
            return this.getListAttribute('private_ips');
        },
        set: function (value) {
            this._privateIps = value;
        },
        enumerable: false,
        configurable: true
    });
    NetworkInterface.prototype.resetPrivateIps = function () {
        this._privateIps = undefined;
    };
    Object.defineProperty(NetworkInterface.prototype, "privateIpsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._privateIps;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkInterface.prototype, "privateIpsCount", {
        get: function () {
            return this.getNumberAttribute('private_ips_count');
        },
        set: function (value) {
            this._privateIpsCount = value;
        },
        enumerable: false,
        configurable: true
    });
    NetworkInterface.prototype.resetPrivateIpsCount = function () {
        this._privateIpsCount = undefined;
    };
    Object.defineProperty(NetworkInterface.prototype, "privateIpsCountInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._privateIpsCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkInterface.prototype, "securityGroups", {
        get: function () {
            return this.getListAttribute('security_groups');
        },
        set: function (value) {
            this._securityGroups = value;
        },
        enumerable: false,
        configurable: true
    });
    NetworkInterface.prototype.resetSecurityGroups = function () {
        this._securityGroups = undefined;
    };
    Object.defineProperty(NetworkInterface.prototype, "securityGroupsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._securityGroups;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkInterface.prototype, "sourceDestCheck", {
        get: function () {
            return this.getBooleanAttribute('source_dest_check');
        },
        set: function (value) {
            this._sourceDestCheck = value;
        },
        enumerable: false,
        configurable: true
    });
    NetworkInterface.prototype.resetSourceDestCheck = function () {
        this._sourceDestCheck = undefined;
    };
    Object.defineProperty(NetworkInterface.prototype, "sourceDestCheckInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sourceDestCheck;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkInterface.prototype, "subnetId", {
        get: function () {
            return this.getStringAttribute('subnet_id');
        },
        set: function (value) {
            this._subnetId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkInterface.prototype, "subnetIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subnetId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkInterface.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    NetworkInterface.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(NetworkInterface.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkInterface.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    NetworkInterface.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(NetworkInterface.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkInterface.prototype, "attachment", {
        get: function () {
            return this.interpolationForAttribute('attachment');
        },
        set: function (value) {
            this._attachment = value;
        },
        enumerable: false,
        configurable: true
    });
    NetworkInterface.prototype.resetAttachment = function () {
        this._attachment = undefined;
    };
    Object.defineProperty(NetworkInterface.prototype, "attachmentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._attachment;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    NetworkInterface.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            interface_type: cdktf.stringToTerraform(this._interfaceType),
            ipv4_prefix_count: cdktf.numberToTerraform(this._ipv4PrefixCount),
            ipv4_prefixes: cdktf.listMapper(cdktf.stringToTerraform)(this._ipv4Prefixes),
            ipv6_address_count: cdktf.numberToTerraform(this._ipv6AddressCount),
            ipv6_addresses: cdktf.listMapper(cdktf.stringToTerraform)(this._ipv6Addresses),
            ipv6_prefix_count: cdktf.numberToTerraform(this._ipv6PrefixCount),
            ipv6_prefixes: cdktf.listMapper(cdktf.stringToTerraform)(this._ipv6Prefixes),
            private_ip: cdktf.stringToTerraform(this._privateIp),
            private_ips: cdktf.listMapper(cdktf.stringToTerraform)(this._privateIps),
            private_ips_count: cdktf.numberToTerraform(this._privateIpsCount),
            security_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroups),
            source_dest_check: cdktf.booleanToTerraform(this._sourceDestCheck),
            subnet_id: cdktf.stringToTerraform(this._subnetId),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            attachment: cdktf.listMapper(networkInterfaceAttachmentToTerraform)(this._attachment)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    NetworkInterface.tfResourceType = "aws_network_interface";
    return NetworkInterface;
}(cdktf.TerraformResource));
exports.NetworkInterface = NetworkInterface;
