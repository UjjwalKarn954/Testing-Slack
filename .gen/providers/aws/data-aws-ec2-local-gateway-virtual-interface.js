"use strict";
// https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface.html
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
exports.DataAwsEc2LocalGatewayVirtualInterface = void 0;
var cdktf = require("cdktf");
function dataAwsEc2LocalGatewayVirtualInterfaceFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface.html aws_ec2_local_gateway_virtual_interface}
*/
var DataAwsEc2LocalGatewayVirtualInterface = /** @class */ (function (_super) {
    __extends(DataAwsEc2LocalGatewayVirtualInterface, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface.html aws_ec2_local_gateway_virtual_interface} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2LocalGatewayVirtualInterfaceConfig = {}
    */
    function DataAwsEc2LocalGatewayVirtualInterface(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ec2_local_gateway_virtual_interface',
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
    Object.defineProperty(DataAwsEc2LocalGatewayVirtualInterface.prototype, "id", {
        // ==========
        // ATTRIBUTES
        // ==========
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2LocalGatewayVirtualInterface.prototype, "localAddress", {
        // local_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('local_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2LocalGatewayVirtualInterface.prototype, "localBgpAsn", {
        // local_bgp_asn - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('local_bgp_asn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2LocalGatewayVirtualInterface.prototype, "localGatewayId", {
        // local_gateway_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('local_gateway_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2LocalGatewayVirtualInterface.prototype, "localGatewayVirtualInterfaceIds", {
        // local_gateway_virtual_interface_ids - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('local_gateway_virtual_interface_ids');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2LocalGatewayVirtualInterface.prototype, "peerAddress", {
        // peer_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('peer_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2LocalGatewayVirtualInterface.prototype, "peerBgpAsn", {
        // peer_bgp_asn - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('peer_bgp_asn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2LocalGatewayVirtualInterface.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEc2LocalGatewayVirtualInterface.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsEc2LocalGatewayVirtualInterface.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2LocalGatewayVirtualInterface.prototype, "vlan", {
        // vlan - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('vlan');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2LocalGatewayVirtualInterface.prototype, "filter", {
        get: function () {
            return this.interpolationForAttribute('filter');
        },
        set: function (value) {
            this._filter = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEc2LocalGatewayVirtualInterface.prototype.resetFilter = function () {
        this._filter = undefined;
    };
    Object.defineProperty(DataAwsEc2LocalGatewayVirtualInterface.prototype, "filterInput", {
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
    DataAwsEc2LocalGatewayVirtualInterface.prototype.synthesizeAttributes = function () {
        return {
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            filter: cdktf.listMapper(dataAwsEc2LocalGatewayVirtualInterfaceFilterToTerraform)(this._filter)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsEc2LocalGatewayVirtualInterface.tfResourceType = "aws_ec2_local_gateway_virtual_interface";
    return DataAwsEc2LocalGatewayVirtualInterface;
}(cdktf.TerraformDataSource));
exports.DataAwsEc2LocalGatewayVirtualInterface = DataAwsEc2LocalGatewayVirtualInterface;
