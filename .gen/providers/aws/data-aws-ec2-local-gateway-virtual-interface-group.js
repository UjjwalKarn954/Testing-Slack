"use strict";
// https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group.html
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
exports.DataAwsEc2LocalGatewayVirtualInterfaceGroup = void 0;
var cdktf = require("cdktf");
function dataAwsEc2LocalGatewayVirtualInterfaceGroupFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group.html aws_ec2_local_gateway_virtual_interface_group}
*/
var DataAwsEc2LocalGatewayVirtualInterfaceGroup = /** @class */ (function (_super) {
    __extends(DataAwsEc2LocalGatewayVirtualInterfaceGroup, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_group.html aws_ec2_local_gateway_virtual_interface_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig = {}
    */
    function DataAwsEc2LocalGatewayVirtualInterfaceGroup(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ec2_local_gateway_virtual_interface_group',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._localGatewayId = config.localGatewayId;
        _this._tags = config.tags;
        _this._filter = config.filter;
        return _this;
    }
    Object.defineProperty(DataAwsEc2LocalGatewayVirtualInterfaceGroup.prototype, "id", {
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
    Object.defineProperty(DataAwsEc2LocalGatewayVirtualInterfaceGroup.prototype, "localGatewayId", {
        get: function () {
            return this.getStringAttribute('local_gateway_id');
        },
        set: function (value) {
            this._localGatewayId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEc2LocalGatewayVirtualInterfaceGroup.prototype.resetLocalGatewayId = function () {
        this._localGatewayId = undefined;
    };
    Object.defineProperty(DataAwsEc2LocalGatewayVirtualInterfaceGroup.prototype, "localGatewayIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._localGatewayId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2LocalGatewayVirtualInterfaceGroup.prototype, "localGatewayVirtualInterfaceIds", {
        // local_gateway_virtual_interface_ids - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('local_gateway_virtual_interface_ids');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2LocalGatewayVirtualInterfaceGroup.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEc2LocalGatewayVirtualInterfaceGroup.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsEc2LocalGatewayVirtualInterfaceGroup.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2LocalGatewayVirtualInterfaceGroup.prototype, "filter", {
        get: function () {
            return this.interpolationForAttribute('filter');
        },
        set: function (value) {
            this._filter = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEc2LocalGatewayVirtualInterfaceGroup.prototype.resetFilter = function () {
        this._filter = undefined;
    };
    Object.defineProperty(DataAwsEc2LocalGatewayVirtualInterfaceGroup.prototype, "filterInput", {
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
    DataAwsEc2LocalGatewayVirtualInterfaceGroup.prototype.synthesizeAttributes = function () {
        return {
            local_gateway_id: cdktf.stringToTerraform(this._localGatewayId),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            filter: cdktf.listMapper(dataAwsEc2LocalGatewayVirtualInterfaceGroupFilterToTerraform)(this._filter)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsEc2LocalGatewayVirtualInterfaceGroup.tfResourceType = "aws_ec2_local_gateway_virtual_interface_group";
    return DataAwsEc2LocalGatewayVirtualInterfaceGroup;
}(cdktf.TerraformDataSource));
exports.DataAwsEc2LocalGatewayVirtualInterfaceGroup = DataAwsEc2LocalGatewayVirtualInterfaceGroup;
