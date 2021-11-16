"use strict";
// https://www.terraform.io/docs/providers/aws/r/default_subnet.html
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
exports.DefaultSubnet = void 0;
var cdktf = require("cdktf");
function defaultSubnetTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        "delete": cdktf.stringToTerraform(struct["delete"])
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_subnet.html aws_default_subnet}
*/
var DefaultSubnet = /** @class */ (function (_super) {
    __extends(DefaultSubnet, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/default_subnet.html aws_default_subnet} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DefaultSubnetConfig
    */
    function DefaultSubnet(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_default_subnet',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._availabilityZone = config.availabilityZone;
        _this._customerOwnedIpv4Pool = config.customerOwnedIpv4Pool;
        _this._mapCustomerOwnedIpOnLaunch = config.mapCustomerOwnedIpOnLaunch;
        _this._mapPublicIpOnLaunch = config.mapPublicIpOnLaunch;
        _this._outpostArn = config.outpostArn;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(DefaultSubnet.prototype, "arn", {
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
    Object.defineProperty(DefaultSubnet.prototype, "assignIpv6AddressOnCreation", {
        // assign_ipv6_address_on_creation - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('assign_ipv6_address_on_creation');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultSubnet.prototype, "availabilityZone", {
        get: function () {
            return this.getStringAttribute('availability_zone');
        },
        set: function (value) {
            this._availabilityZone = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultSubnet.prototype, "availabilityZoneInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._availabilityZone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultSubnet.prototype, "availabilityZoneId", {
        // availability_zone_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('availability_zone_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultSubnet.prototype, "cidrBlock", {
        // cidr_block - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cidr_block');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultSubnet.prototype, "customerOwnedIpv4Pool", {
        get: function () {
            return this.getStringAttribute('customer_owned_ipv4_pool');
        },
        set: function (value) {
            this._customerOwnedIpv4Pool = value;
        },
        enumerable: false,
        configurable: true
    });
    DefaultSubnet.prototype.resetCustomerOwnedIpv4Pool = function () {
        this._customerOwnedIpv4Pool = undefined;
    };
    Object.defineProperty(DefaultSubnet.prototype, "customerOwnedIpv4PoolInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customerOwnedIpv4Pool;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultSubnet.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultSubnet.prototype, "ipv6CidrBlock", {
        // ipv6_cidr_block - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ipv6_cidr_block');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultSubnet.prototype, "ipv6CidrBlockAssociationId", {
        // ipv6_cidr_block_association_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ipv6_cidr_block_association_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultSubnet.prototype, "mapCustomerOwnedIpOnLaunch", {
        get: function () {
            return this.getBooleanAttribute('map_customer_owned_ip_on_launch');
        },
        set: function (value) {
            this._mapCustomerOwnedIpOnLaunch = value;
        },
        enumerable: false,
        configurable: true
    });
    DefaultSubnet.prototype.resetMapCustomerOwnedIpOnLaunch = function () {
        this._mapCustomerOwnedIpOnLaunch = undefined;
    };
    Object.defineProperty(DefaultSubnet.prototype, "mapCustomerOwnedIpOnLaunchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mapCustomerOwnedIpOnLaunch;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultSubnet.prototype, "mapPublicIpOnLaunch", {
        get: function () {
            return this.getBooleanAttribute('map_public_ip_on_launch');
        },
        set: function (value) {
            this._mapPublicIpOnLaunch = value;
        },
        enumerable: false,
        configurable: true
    });
    DefaultSubnet.prototype.resetMapPublicIpOnLaunch = function () {
        this._mapPublicIpOnLaunch = undefined;
    };
    Object.defineProperty(DefaultSubnet.prototype, "mapPublicIpOnLaunchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mapPublicIpOnLaunch;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultSubnet.prototype, "outpostArn", {
        get: function () {
            return this.getStringAttribute('outpost_arn');
        },
        set: function (value) {
            this._outpostArn = value;
        },
        enumerable: false,
        configurable: true
    });
    DefaultSubnet.prototype.resetOutpostArn = function () {
        this._outpostArn = undefined;
    };
    Object.defineProperty(DefaultSubnet.prototype, "outpostArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._outpostArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultSubnet.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultSubnet.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DefaultSubnet.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DefaultSubnet.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultSubnet.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    DefaultSubnet.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(DefaultSubnet.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultSubnet.prototype, "vpcId", {
        // vpc_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultSubnet.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    DefaultSubnet.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(DefaultSubnet.prototype, "timeoutsInput", {
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
    DefaultSubnet.prototype.synthesizeAttributes = function () {
        return {
            availability_zone: cdktf.stringToTerraform(this._availabilityZone),
            customer_owned_ipv4_pool: cdktf.stringToTerraform(this._customerOwnedIpv4Pool),
            map_customer_owned_ip_on_launch: cdktf.booleanToTerraform(this._mapCustomerOwnedIpOnLaunch),
            map_public_ip_on_launch: cdktf.booleanToTerraform(this._mapPublicIpOnLaunch),
            outpost_arn: cdktf.stringToTerraform(this._outpostArn),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            timeouts: defaultSubnetTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DefaultSubnet.tfResourceType = "aws_default_subnet";
    return DefaultSubnet;
}(cdktf.TerraformResource));
exports.DefaultSubnet = DefaultSubnet;
