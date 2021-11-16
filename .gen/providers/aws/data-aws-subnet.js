"use strict";
// https://www.terraform.io/docs/providers/aws/d/subnet.html
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
exports.DataAwsSubnet = void 0;
var cdktf = require("cdktf");
function dataAwsSubnetFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/subnet.html aws_subnet}
*/
var DataAwsSubnet = /** @class */ (function (_super) {
    __extends(DataAwsSubnet, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/subnet.html aws_subnet} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSubnetConfig = {}
    */
    function DataAwsSubnet(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_subnet',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._availabilityZone = config.availabilityZone;
        _this._availabilityZoneId = config.availabilityZoneId;
        _this._cidrBlock = config.cidrBlock;
        _this._defaultForAz = config.defaultForAz;
        _this._ipv6CidrBlock = config.ipv6CidrBlock;
        _this._state = config.state;
        _this._tags = config.tags;
        _this._vpcId = config.vpcId;
        _this._filter = config.filter;
        return _this;
    }
    Object.defineProperty(DataAwsSubnet.prototype, "arn", {
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
    Object.defineProperty(DataAwsSubnet.prototype, "assignIpv6AddressOnCreation", {
        // assign_ipv6_address_on_creation - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('assign_ipv6_address_on_creation');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSubnet.prototype, "availabilityZone", {
        get: function () {
            return this.getStringAttribute('availability_zone');
        },
        set: function (value) {
            this._availabilityZone = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsSubnet.prototype.resetAvailabilityZone = function () {
        this._availabilityZone = undefined;
    };
    Object.defineProperty(DataAwsSubnet.prototype, "availabilityZoneInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._availabilityZone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSubnet.prototype, "availabilityZoneId", {
        get: function () {
            return this.getStringAttribute('availability_zone_id');
        },
        set: function (value) {
            this._availabilityZoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsSubnet.prototype.resetAvailabilityZoneId = function () {
        this._availabilityZoneId = undefined;
    };
    Object.defineProperty(DataAwsSubnet.prototype, "availabilityZoneIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._availabilityZoneId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSubnet.prototype, "availableIpAddressCount", {
        // available_ip_address_count - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('available_ip_address_count');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSubnet.prototype, "cidrBlock", {
        get: function () {
            return this.getStringAttribute('cidr_block');
        },
        set: function (value) {
            this._cidrBlock = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsSubnet.prototype.resetCidrBlock = function () {
        this._cidrBlock = undefined;
    };
    Object.defineProperty(DataAwsSubnet.prototype, "cidrBlockInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cidrBlock;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSubnet.prototype, "customerOwnedIpv4Pool", {
        // customer_owned_ipv4_pool - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('customer_owned_ipv4_pool');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSubnet.prototype, "defaultForAz", {
        get: function () {
            return this.getBooleanAttribute('default_for_az');
        },
        set: function (value) {
            this._defaultForAz = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsSubnet.prototype.resetDefaultForAz = function () {
        this._defaultForAz = undefined;
    };
    Object.defineProperty(DataAwsSubnet.prototype, "defaultForAzInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultForAz;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSubnet.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSubnet.prototype, "ipv6CidrBlock", {
        get: function () {
            return this.getStringAttribute('ipv6_cidr_block');
        },
        set: function (value) {
            this._ipv6CidrBlock = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsSubnet.prototype.resetIpv6CidrBlock = function () {
        this._ipv6CidrBlock = undefined;
    };
    Object.defineProperty(DataAwsSubnet.prototype, "ipv6CidrBlockInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipv6CidrBlock;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSubnet.prototype, "ipv6CidrBlockAssociationId", {
        // ipv6_cidr_block_association_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ipv6_cidr_block_association_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSubnet.prototype, "mapCustomerOwnedIpOnLaunch", {
        // map_customer_owned_ip_on_launch - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('map_customer_owned_ip_on_launch');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSubnet.prototype, "mapPublicIpOnLaunch", {
        // map_public_ip_on_launch - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('map_public_ip_on_launch');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSubnet.prototype, "outpostArn", {
        // outpost_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('outpost_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSubnet.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSubnet.prototype, "state", {
        get: function () {
            return this.getStringAttribute('state');
        },
        set: function (value) {
            this._state = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsSubnet.prototype.resetState = function () {
        this._state = undefined;
    };
    Object.defineProperty(DataAwsSubnet.prototype, "stateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._state;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSubnet.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsSubnet.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsSubnet.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSubnet.prototype, "vpcId", {
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        set: function (value) {
            this._vpcId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsSubnet.prototype.resetVpcId = function () {
        this._vpcId = undefined;
    };
    Object.defineProperty(DataAwsSubnet.prototype, "vpcIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSubnet.prototype, "filter", {
        get: function () {
            return this.interpolationForAttribute('filter');
        },
        set: function (value) {
            this._filter = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsSubnet.prototype.resetFilter = function () {
        this._filter = undefined;
    };
    Object.defineProperty(DataAwsSubnet.prototype, "filterInput", {
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
    DataAwsSubnet.prototype.synthesizeAttributes = function () {
        return {
            availability_zone: cdktf.stringToTerraform(this._availabilityZone),
            availability_zone_id: cdktf.stringToTerraform(this._availabilityZoneId),
            cidr_block: cdktf.stringToTerraform(this._cidrBlock),
            default_for_az: cdktf.booleanToTerraform(this._defaultForAz),
            ipv6_cidr_block: cdktf.stringToTerraform(this._ipv6CidrBlock),
            state: cdktf.stringToTerraform(this._state),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            vpc_id: cdktf.stringToTerraform(this._vpcId),
            filter: cdktf.listMapper(dataAwsSubnetFilterToTerraform)(this._filter)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsSubnet.tfResourceType = "aws_subnet";
    return DataAwsSubnet;
}(cdktf.TerraformDataSource));
exports.DataAwsSubnet = DataAwsSubnet;
