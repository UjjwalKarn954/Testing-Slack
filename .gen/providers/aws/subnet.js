"use strict";
// https://www.terraform.io/docs/providers/aws/r/subnet.html
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
exports.Subnet = void 0;
var cdktf = require("cdktf");
function subnetTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        "delete": cdktf.stringToTerraform(struct["delete"])
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/subnet.html aws_subnet}
*/
var Subnet = /** @class */ (function (_super) {
    __extends(Subnet, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/subnet.html aws_subnet} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SubnetConfig
    */
    function Subnet(scope, id, config) {
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
        _this._assignIpv6AddressOnCreation = config.assignIpv6AddressOnCreation;
        _this._availabilityZone = config.availabilityZone;
        _this._availabilityZoneId = config.availabilityZoneId;
        _this._cidrBlock = config.cidrBlock;
        _this._customerOwnedIpv4Pool = config.customerOwnedIpv4Pool;
        _this._ipv6CidrBlock = config.ipv6CidrBlock;
        _this._mapCustomerOwnedIpOnLaunch = config.mapCustomerOwnedIpOnLaunch;
        _this._mapPublicIpOnLaunch = config.mapPublicIpOnLaunch;
        _this._outpostArn = config.outpostArn;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._vpcId = config.vpcId;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(Subnet.prototype, "arn", {
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
    Object.defineProperty(Subnet.prototype, "assignIpv6AddressOnCreation", {
        get: function () {
            return this.getBooleanAttribute('assign_ipv6_address_on_creation');
        },
        set: function (value) {
            this._assignIpv6AddressOnCreation = value;
        },
        enumerable: false,
        configurable: true
    });
    Subnet.prototype.resetAssignIpv6AddressOnCreation = function () {
        this._assignIpv6AddressOnCreation = undefined;
    };
    Object.defineProperty(Subnet.prototype, "assignIpv6AddressOnCreationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._assignIpv6AddressOnCreation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Subnet.prototype, "availabilityZone", {
        get: function () {
            return this.getStringAttribute('availability_zone');
        },
        set: function (value) {
            this._availabilityZone = value;
        },
        enumerable: false,
        configurable: true
    });
    Subnet.prototype.resetAvailabilityZone = function () {
        this._availabilityZone = undefined;
    };
    Object.defineProperty(Subnet.prototype, "availabilityZoneInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._availabilityZone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Subnet.prototype, "availabilityZoneId", {
        get: function () {
            return this.getStringAttribute('availability_zone_id');
        },
        set: function (value) {
            this._availabilityZoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    Subnet.prototype.resetAvailabilityZoneId = function () {
        this._availabilityZoneId = undefined;
    };
    Object.defineProperty(Subnet.prototype, "availabilityZoneIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._availabilityZoneId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Subnet.prototype, "cidrBlock", {
        get: function () {
            return this.getStringAttribute('cidr_block');
        },
        set: function (value) {
            this._cidrBlock = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Subnet.prototype, "cidrBlockInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cidrBlock;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Subnet.prototype, "customerOwnedIpv4Pool", {
        get: function () {
            return this.getStringAttribute('customer_owned_ipv4_pool');
        },
        set: function (value) {
            this._customerOwnedIpv4Pool = value;
        },
        enumerable: false,
        configurable: true
    });
    Subnet.prototype.resetCustomerOwnedIpv4Pool = function () {
        this._customerOwnedIpv4Pool = undefined;
    };
    Object.defineProperty(Subnet.prototype, "customerOwnedIpv4PoolInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customerOwnedIpv4Pool;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Subnet.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Subnet.prototype, "ipv6CidrBlock", {
        get: function () {
            return this.getStringAttribute('ipv6_cidr_block');
        },
        set: function (value) {
            this._ipv6CidrBlock = value;
        },
        enumerable: false,
        configurable: true
    });
    Subnet.prototype.resetIpv6CidrBlock = function () {
        this._ipv6CidrBlock = undefined;
    };
    Object.defineProperty(Subnet.prototype, "ipv6CidrBlockInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipv6CidrBlock;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Subnet.prototype, "ipv6CidrBlockAssociationId", {
        // ipv6_cidr_block_association_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ipv6_cidr_block_association_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Subnet.prototype, "mapCustomerOwnedIpOnLaunch", {
        get: function () {
            return this.getBooleanAttribute('map_customer_owned_ip_on_launch');
        },
        set: function (value) {
            this._mapCustomerOwnedIpOnLaunch = value;
        },
        enumerable: false,
        configurable: true
    });
    Subnet.prototype.resetMapCustomerOwnedIpOnLaunch = function () {
        this._mapCustomerOwnedIpOnLaunch = undefined;
    };
    Object.defineProperty(Subnet.prototype, "mapCustomerOwnedIpOnLaunchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mapCustomerOwnedIpOnLaunch;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Subnet.prototype, "mapPublicIpOnLaunch", {
        get: function () {
            return this.getBooleanAttribute('map_public_ip_on_launch');
        },
        set: function (value) {
            this._mapPublicIpOnLaunch = value;
        },
        enumerable: false,
        configurable: true
    });
    Subnet.prototype.resetMapPublicIpOnLaunch = function () {
        this._mapPublicIpOnLaunch = undefined;
    };
    Object.defineProperty(Subnet.prototype, "mapPublicIpOnLaunchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mapPublicIpOnLaunch;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Subnet.prototype, "outpostArn", {
        get: function () {
            return this.getStringAttribute('outpost_arn');
        },
        set: function (value) {
            this._outpostArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Subnet.prototype.resetOutpostArn = function () {
        this._outpostArn = undefined;
    };
    Object.defineProperty(Subnet.prototype, "outpostArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._outpostArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Subnet.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Subnet.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    Subnet.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(Subnet.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Subnet.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    Subnet.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(Subnet.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Subnet.prototype, "vpcId", {
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        set: function (value) {
            this._vpcId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Subnet.prototype, "vpcIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Subnet.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    Subnet.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(Subnet.prototype, "timeoutsInput", {
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
    Subnet.prototype.synthesizeAttributes = function () {
        return {
            assign_ipv6_address_on_creation: cdktf.booleanToTerraform(this._assignIpv6AddressOnCreation),
            availability_zone: cdktf.stringToTerraform(this._availabilityZone),
            availability_zone_id: cdktf.stringToTerraform(this._availabilityZoneId),
            cidr_block: cdktf.stringToTerraform(this._cidrBlock),
            customer_owned_ipv4_pool: cdktf.stringToTerraform(this._customerOwnedIpv4Pool),
            ipv6_cidr_block: cdktf.stringToTerraform(this._ipv6CidrBlock),
            map_customer_owned_ip_on_launch: cdktf.booleanToTerraform(this._mapCustomerOwnedIpOnLaunch),
            map_public_ip_on_launch: cdktf.booleanToTerraform(this._mapPublicIpOnLaunch),
            outpost_arn: cdktf.stringToTerraform(this._outpostArn),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            vpc_id: cdktf.stringToTerraform(this._vpcId),
            timeouts: subnetTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Subnet.tfResourceType = "aws_subnet";
    return Subnet;
}(cdktf.TerraformResource));
exports.Subnet = Subnet;
