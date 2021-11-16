"use strict";
// https://www.terraform.io/docs/providers/aws/d/vpc.html
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
exports.DataAwsVpc = exports.DataAwsVpcCidrBlockAssociations = void 0;
var cdktf = require("cdktf");
var DataAwsVpcCidrBlockAssociations = /** @class */ (function (_super) {
    __extends(DataAwsVpcCidrBlockAssociations, _super);
    function DataAwsVpcCidrBlockAssociations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsVpcCidrBlockAssociations.prototype, "associationId", {
        // association_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('association_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpcCidrBlockAssociations.prototype, "cidrBlock", {
        // cidr_block - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cidr_block');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpcCidrBlockAssociations.prototype, "state", {
        // state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('state');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsVpcCidrBlockAssociations;
}(cdktf.ComplexComputedList));
exports.DataAwsVpcCidrBlockAssociations = DataAwsVpcCidrBlockAssociations;
function dataAwsVpcFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpc.html aws_vpc}
*/
var DataAwsVpc = /** @class */ (function (_super) {
    __extends(DataAwsVpc, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/vpc.html aws_vpc} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsVpcConfig = {}
    */
    function DataAwsVpc(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_vpc',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._cidrBlock = config.cidrBlock;
        _this._default = config["default"];
        _this._dhcpOptionsId = config.dhcpOptionsId;
        _this._state = config.state;
        _this._tags = config.tags;
        _this._filter = config.filter;
        return _this;
    }
    Object.defineProperty(DataAwsVpc.prototype, "arn", {
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
    Object.defineProperty(DataAwsVpc.prototype, "cidrBlock", {
        get: function () {
            return this.getStringAttribute('cidr_block');
        },
        set: function (value) {
            this._cidrBlock = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsVpc.prototype.resetCidrBlock = function () {
        this._cidrBlock = undefined;
    };
    Object.defineProperty(DataAwsVpc.prototype, "cidrBlockInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cidrBlock;
        },
        enumerable: false,
        configurable: true
    });
    // cidr_block_associations - computed: true, optional: false, required: false
    DataAwsVpc.prototype.cidrBlockAssociations = function (index) {
        return new DataAwsVpcCidrBlockAssociations(this, 'cidr_block_associations', index);
    };
    Object.defineProperty(DataAwsVpc.prototype, "default", {
        get: function () {
            return this.getBooleanAttribute('default');
        },
        set: function (value) {
            this._default = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsVpc.prototype.resetDefault = function () {
        this._default = undefined;
    };
    Object.defineProperty(DataAwsVpc.prototype, "defaultInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._default;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpc.prototype, "dhcpOptionsId", {
        get: function () {
            return this.getStringAttribute('dhcp_options_id');
        },
        set: function (value) {
            this._dhcpOptionsId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsVpc.prototype.resetDhcpOptionsId = function () {
        this._dhcpOptionsId = undefined;
    };
    Object.defineProperty(DataAwsVpc.prototype, "dhcpOptionsIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dhcpOptionsId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpc.prototype, "enableDnsHostnames", {
        // enable_dns_hostnames - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enable_dns_hostnames');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpc.prototype, "enableDnsSupport", {
        // enable_dns_support - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enable_dns_support');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpc.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpc.prototype, "instanceTenancy", {
        // instance_tenancy - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('instance_tenancy');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpc.prototype, "ipv6AssociationId", {
        // ipv6_association_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ipv6_association_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpc.prototype, "ipv6CidrBlock", {
        // ipv6_cidr_block - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ipv6_cidr_block');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpc.prototype, "mainRouteTableId", {
        // main_route_table_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('main_route_table_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpc.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpc.prototype, "state", {
        get: function () {
            return this.getStringAttribute('state');
        },
        set: function (value) {
            this._state = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsVpc.prototype.resetState = function () {
        this._state = undefined;
    };
    Object.defineProperty(DataAwsVpc.prototype, "stateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._state;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpc.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsVpc.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsVpc.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpc.prototype, "filter", {
        get: function () {
            return this.interpolationForAttribute('filter');
        },
        set: function (value) {
            this._filter = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsVpc.prototype.resetFilter = function () {
        this._filter = undefined;
    };
    Object.defineProperty(DataAwsVpc.prototype, "filterInput", {
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
    DataAwsVpc.prototype.synthesizeAttributes = function () {
        return {
            cidr_block: cdktf.stringToTerraform(this._cidrBlock),
            "default": cdktf.booleanToTerraform(this._default),
            dhcp_options_id: cdktf.stringToTerraform(this._dhcpOptionsId),
            state: cdktf.stringToTerraform(this._state),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            filter: cdktf.listMapper(dataAwsVpcFilterToTerraform)(this._filter)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsVpc.tfResourceType = "aws_vpc";
    return DataAwsVpc;
}(cdktf.TerraformDataSource));
exports.DataAwsVpc = DataAwsVpc;
