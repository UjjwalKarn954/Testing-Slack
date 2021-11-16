"use strict";
// https://www.terraform.io/docs/providers/aws/d/network_interface.html
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
exports.DataAwsNetworkInterface = exports.DataAwsNetworkInterfaceAttachment = exports.DataAwsNetworkInterfaceAssociation = void 0;
var cdktf = require("cdktf");
var DataAwsNetworkInterfaceAssociation = /** @class */ (function (_super) {
    __extends(DataAwsNetworkInterfaceAssociation, _super);
    function DataAwsNetworkInterfaceAssociation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsNetworkInterfaceAssociation.prototype, "allocationId", {
        // allocation_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('allocation_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsNetworkInterfaceAssociation.prototype, "associationId", {
        // association_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('association_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsNetworkInterfaceAssociation.prototype, "carrierIp", {
        // carrier_ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('carrier_ip');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsNetworkInterfaceAssociation.prototype, "customerOwnedIp", {
        // customer_owned_ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('customer_owned_ip');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsNetworkInterfaceAssociation.prototype, "ipOwnerId", {
        // ip_owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ip_owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsNetworkInterfaceAssociation.prototype, "publicDnsName", {
        // public_dns_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('public_dns_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsNetworkInterfaceAssociation.prototype, "publicIp", {
        // public_ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('public_ip');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsNetworkInterfaceAssociation;
}(cdktf.ComplexComputedList));
exports.DataAwsNetworkInterfaceAssociation = DataAwsNetworkInterfaceAssociation;
var DataAwsNetworkInterfaceAttachment = /** @class */ (function (_super) {
    __extends(DataAwsNetworkInterfaceAttachment, _super);
    function DataAwsNetworkInterfaceAttachment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsNetworkInterfaceAttachment.prototype, "attachmentId", {
        // attachment_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('attachment_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsNetworkInterfaceAttachment.prototype, "deviceIndex", {
        // device_index - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('device_index');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsNetworkInterfaceAttachment.prototype, "instanceId", {
        // instance_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('instance_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsNetworkInterfaceAttachment.prototype, "instanceOwnerId", {
        // instance_owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('instance_owner_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsNetworkInterfaceAttachment;
}(cdktf.ComplexComputedList));
exports.DataAwsNetworkInterfaceAttachment = DataAwsNetworkInterfaceAttachment;
function dataAwsNetworkInterfaceFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/network_interface.html aws_network_interface}
*/
var DataAwsNetworkInterface = /** @class */ (function (_super) {
    __extends(DataAwsNetworkInterface, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/network_interface.html aws_network_interface} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsNetworkInterfaceConfig = {}
    */
    function DataAwsNetworkInterface(scope, id, config) {
        if (config === void 0) { config = {}; }
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
        _this._tags = config.tags;
        _this._filter = config.filter;
        return _this;
    }
    Object.defineProperty(DataAwsNetworkInterface.prototype, "arn", {
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
    // association - computed: true, optional: false, required: false
    DataAwsNetworkInterface.prototype.association = function (index) {
        return new DataAwsNetworkInterfaceAssociation(this, 'association', index);
    };
    // attachment - computed: true, optional: false, required: false
    DataAwsNetworkInterface.prototype.attachment = function (index) {
        return new DataAwsNetworkInterfaceAttachment(this, 'attachment', index);
    };
    Object.defineProperty(DataAwsNetworkInterface.prototype, "availabilityZone", {
        // availability_zone - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('availability_zone');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsNetworkInterface.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsNetworkInterface.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsNetworkInterface.prototype, "interfaceType", {
        // interface_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('interface_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsNetworkInterface.prototype, "ipv6Addresses", {
        // ipv6_addresses - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('ipv6_addresses');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsNetworkInterface.prototype, "macAddress", {
        // mac_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('mac_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsNetworkInterface.prototype, "outpostArn", {
        // outpost_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('outpost_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsNetworkInterface.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsNetworkInterface.prototype, "privateDnsName", {
        // private_dns_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('private_dns_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsNetworkInterface.prototype, "privateIp", {
        // private_ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('private_ip');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsNetworkInterface.prototype, "privateIps", {
        // private_ips - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('private_ips');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsNetworkInterface.prototype, "requesterId", {
        // requester_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('requester_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsNetworkInterface.prototype, "securityGroups", {
        // security_groups - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('security_groups');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsNetworkInterface.prototype, "subnetId", {
        // subnet_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('subnet_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsNetworkInterface.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsNetworkInterface.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsNetworkInterface.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsNetworkInterface.prototype, "vpcId", {
        // vpc_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsNetworkInterface.prototype, "filter", {
        get: function () {
            return this.interpolationForAttribute('filter');
        },
        set: function (value) {
            this._filter = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsNetworkInterface.prototype.resetFilter = function () {
        this._filter = undefined;
    };
    Object.defineProperty(DataAwsNetworkInterface.prototype, "filterInput", {
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
    DataAwsNetworkInterface.prototype.synthesizeAttributes = function () {
        return {
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            filter: cdktf.listMapper(dataAwsNetworkInterfaceFilterToTerraform)(this._filter)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsNetworkInterface.tfResourceType = "aws_network_interface";
    return DataAwsNetworkInterface;
}(cdktf.TerraformDataSource));
exports.DataAwsNetworkInterface = DataAwsNetworkInterface;
