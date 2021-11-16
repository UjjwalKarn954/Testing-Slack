"use strict";
// https://www.terraform.io/docs/providers/aws/r/eip.html
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
exports.Eip = void 0;
var cdktf = require("cdktf");
function eipTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        "delete": cdktf.stringToTerraform(struct["delete"]),
        read: cdktf.stringToTerraform(struct.read),
        update: cdktf.stringToTerraform(struct.update)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/eip.html aws_eip}
*/
var Eip = /** @class */ (function (_super) {
    __extends(Eip, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/eip.html aws_eip} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EipConfig = {}
    */
    function Eip(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_eip',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._address = config.address;
        _this._associateWithPrivateIp = config.associateWithPrivateIp;
        _this._customerOwnedIpv4Pool = config.customerOwnedIpv4Pool;
        _this._instance = config.instance;
        _this._networkBorderGroup = config.networkBorderGroup;
        _this._networkInterface = config.networkInterface;
        _this._publicIpv4Pool = config.publicIpv4Pool;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._vpc = config.vpc;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(Eip.prototype, "address", {
        get: function () {
            return this.getStringAttribute('address');
        },
        set: function (value) {
            this._address = value;
        },
        enumerable: false,
        configurable: true
    });
    Eip.prototype.resetAddress = function () {
        this._address = undefined;
    };
    Object.defineProperty(Eip.prototype, "addressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._address;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Eip.prototype, "allocationId", {
        // allocation_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('allocation_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Eip.prototype, "associateWithPrivateIp", {
        get: function () {
            return this.getStringAttribute('associate_with_private_ip');
        },
        set: function (value) {
            this._associateWithPrivateIp = value;
        },
        enumerable: false,
        configurable: true
    });
    Eip.prototype.resetAssociateWithPrivateIp = function () {
        this._associateWithPrivateIp = undefined;
    };
    Object.defineProperty(Eip.prototype, "associateWithPrivateIpInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._associateWithPrivateIp;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Eip.prototype, "associationId", {
        // association_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('association_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Eip.prototype, "carrierIp", {
        // carrier_ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('carrier_ip');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Eip.prototype, "customerOwnedIp", {
        // customer_owned_ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('customer_owned_ip');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Eip.prototype, "customerOwnedIpv4Pool", {
        get: function () {
            return this.getStringAttribute('customer_owned_ipv4_pool');
        },
        set: function (value) {
            this._customerOwnedIpv4Pool = value;
        },
        enumerable: false,
        configurable: true
    });
    Eip.prototype.resetCustomerOwnedIpv4Pool = function () {
        this._customerOwnedIpv4Pool = undefined;
    };
    Object.defineProperty(Eip.prototype, "customerOwnedIpv4PoolInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customerOwnedIpv4Pool;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Eip.prototype, "domain", {
        // domain - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('domain');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Eip.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Eip.prototype, "instance", {
        get: function () {
            return this.getStringAttribute('instance');
        },
        set: function (value) {
            this._instance = value;
        },
        enumerable: false,
        configurable: true
    });
    Eip.prototype.resetInstance = function () {
        this._instance = undefined;
    };
    Object.defineProperty(Eip.prototype, "instanceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Eip.prototype, "networkBorderGroup", {
        get: function () {
            return this.getStringAttribute('network_border_group');
        },
        set: function (value) {
            this._networkBorderGroup = value;
        },
        enumerable: false,
        configurable: true
    });
    Eip.prototype.resetNetworkBorderGroup = function () {
        this._networkBorderGroup = undefined;
    };
    Object.defineProperty(Eip.prototype, "networkBorderGroupInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._networkBorderGroup;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Eip.prototype, "networkInterface", {
        get: function () {
            return this.getStringAttribute('network_interface');
        },
        set: function (value) {
            this._networkInterface = value;
        },
        enumerable: false,
        configurable: true
    });
    Eip.prototype.resetNetworkInterface = function () {
        this._networkInterface = undefined;
    };
    Object.defineProperty(Eip.prototype, "networkInterfaceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._networkInterface;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Eip.prototype, "privateDns", {
        // private_dns - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('private_dns');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Eip.prototype, "privateIp", {
        // private_ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('private_ip');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Eip.prototype, "publicDns", {
        // public_dns - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('public_dns');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Eip.prototype, "publicIp", {
        // public_ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('public_ip');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Eip.prototype, "publicIpv4Pool", {
        get: function () {
            return this.getStringAttribute('public_ipv4_pool');
        },
        set: function (value) {
            this._publicIpv4Pool = value;
        },
        enumerable: false,
        configurable: true
    });
    Eip.prototype.resetPublicIpv4Pool = function () {
        this._publicIpv4Pool = undefined;
    };
    Object.defineProperty(Eip.prototype, "publicIpv4PoolInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._publicIpv4Pool;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Eip.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    Eip.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(Eip.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Eip.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    Eip.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(Eip.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Eip.prototype, "vpc", {
        get: function () {
            return this.getBooleanAttribute('vpc');
        },
        set: function (value) {
            this._vpc = value;
        },
        enumerable: false,
        configurable: true
    });
    Eip.prototype.resetVpc = function () {
        this._vpc = undefined;
    };
    Object.defineProperty(Eip.prototype, "vpcInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpc;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Eip.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    Eip.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(Eip.prototype, "timeoutsInput", {
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
    Eip.prototype.synthesizeAttributes = function () {
        return {
            address: cdktf.stringToTerraform(this._address),
            associate_with_private_ip: cdktf.stringToTerraform(this._associateWithPrivateIp),
            customer_owned_ipv4_pool: cdktf.stringToTerraform(this._customerOwnedIpv4Pool),
            instance: cdktf.stringToTerraform(this._instance),
            network_border_group: cdktf.stringToTerraform(this._networkBorderGroup),
            network_interface: cdktf.stringToTerraform(this._networkInterface),
            public_ipv4_pool: cdktf.stringToTerraform(this._publicIpv4Pool),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            vpc: cdktf.booleanToTerraform(this._vpc),
            timeouts: eipTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Eip.tfResourceType = "aws_eip";
    return Eip;
}(cdktf.TerraformResource));
exports.Eip = Eip;
