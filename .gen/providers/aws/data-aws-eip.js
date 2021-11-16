"use strict";
// https://www.terraform.io/docs/providers/aws/d/eip.html
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
exports.DataAwsEip = void 0;
var cdktf = require("cdktf");
function dataAwsEipFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/eip.html aws_eip}
*/
var DataAwsEip = /** @class */ (function (_super) {
    __extends(DataAwsEip, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/eip.html aws_eip} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEipConfig = {}
    */
    function DataAwsEip(scope, id, config) {
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
        _this._publicIp = config.publicIp;
        _this._tags = config.tags;
        _this._filter = config.filter;
        return _this;
    }
    Object.defineProperty(DataAwsEip.prototype, "associationId", {
        // ==========
        // ATTRIBUTES
        // ==========
        // association_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('association_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEip.prototype, "carrierIp", {
        // carrier_ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('carrier_ip');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEip.prototype, "customerOwnedIp", {
        // customer_owned_ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('customer_owned_ip');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEip.prototype, "customerOwnedIpv4Pool", {
        // customer_owned_ipv4_pool - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('customer_owned_ipv4_pool');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEip.prototype, "domain", {
        // domain - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('domain');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEip.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEip.prototype, "instanceId", {
        // instance_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('instance_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEip.prototype, "networkInterfaceId", {
        // network_interface_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('network_interface_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEip.prototype, "networkInterfaceOwnerId", {
        // network_interface_owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('network_interface_owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEip.prototype, "privateDns", {
        // private_dns - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('private_dns');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEip.prototype, "privateIp", {
        // private_ip - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('private_ip');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEip.prototype, "publicDns", {
        // public_dns - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('public_dns');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEip.prototype, "publicIp", {
        get: function () {
            return this.getStringAttribute('public_ip');
        },
        set: function (value) {
            this._publicIp = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEip.prototype.resetPublicIp = function () {
        this._publicIp = undefined;
    };
    Object.defineProperty(DataAwsEip.prototype, "publicIpInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._publicIp;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEip.prototype, "publicIpv4Pool", {
        // public_ipv4_pool - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('public_ipv4_pool');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEip.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEip.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsEip.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEip.prototype, "filter", {
        get: function () {
            return this.interpolationForAttribute('filter');
        },
        set: function (value) {
            this._filter = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEip.prototype.resetFilter = function () {
        this._filter = undefined;
    };
    Object.defineProperty(DataAwsEip.prototype, "filterInput", {
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
    DataAwsEip.prototype.synthesizeAttributes = function () {
        return {
            public_ip: cdktf.stringToTerraform(this._publicIp),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            filter: cdktf.listMapper(dataAwsEipFilterToTerraform)(this._filter)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsEip.tfResourceType = "aws_eip";
    return DataAwsEip;
}(cdktf.TerraformDataSource));
exports.DataAwsEip = DataAwsEip;
