"use strict";
// https://www.terraform.io/docs/providers/aws/d/vpc_endpoint.html
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
exports.DataAwsVpcEndpoint = exports.DataAwsVpcEndpointDnsEntry = void 0;
var cdktf = require("cdktf");
var DataAwsVpcEndpointDnsEntry = /** @class */ (function (_super) {
    __extends(DataAwsVpcEndpointDnsEntry, _super);
    function DataAwsVpcEndpointDnsEntry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsVpcEndpointDnsEntry.prototype, "dnsName", {
        // dns_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dns_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpcEndpointDnsEntry.prototype, "hostedZoneId", {
        // hosted_zone_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hosted_zone_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsVpcEndpointDnsEntry;
}(cdktf.ComplexComputedList));
exports.DataAwsVpcEndpointDnsEntry = DataAwsVpcEndpointDnsEntry;
function dataAwsVpcEndpointFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint.html aws_vpc_endpoint}
*/
var DataAwsVpcEndpoint = /** @class */ (function (_super) {
    __extends(DataAwsVpcEndpoint, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint.html aws_vpc_endpoint} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsVpcEndpointConfig = {}
    */
    function DataAwsVpcEndpoint(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_vpc_endpoint',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._serviceName = config.serviceName;
        _this._state = config.state;
        _this._tags = config.tags;
        _this._vpcId = config.vpcId;
        _this._filter = config.filter;
        return _this;
    }
    Object.defineProperty(DataAwsVpcEndpoint.prototype, "arn", {
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
    Object.defineProperty(DataAwsVpcEndpoint.prototype, "cidrBlocks", {
        // cidr_blocks - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('cidr_blocks');
        },
        enumerable: false,
        configurable: true
    });
    // dns_entry - computed: true, optional: false, required: false
    DataAwsVpcEndpoint.prototype.dnsEntry = function (index) {
        return new DataAwsVpcEndpointDnsEntry(this, 'dns_entry', index);
    };
    Object.defineProperty(DataAwsVpcEndpoint.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpcEndpoint.prototype, "networkInterfaceIds", {
        // network_interface_ids - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('network_interface_ids');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpcEndpoint.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpcEndpoint.prototype, "policy", {
        // policy - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('policy');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpcEndpoint.prototype, "prefixListId", {
        // prefix_list_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('prefix_list_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpcEndpoint.prototype, "privateDnsEnabled", {
        // private_dns_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('private_dns_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpcEndpoint.prototype, "requesterManaged", {
        // requester_managed - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('requester_managed');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpcEndpoint.prototype, "routeTableIds", {
        // route_table_ids - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('route_table_ids');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpcEndpoint.prototype, "securityGroupIds", {
        // security_group_ids - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('security_group_ids');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpcEndpoint.prototype, "serviceName", {
        get: function () {
            return this.getStringAttribute('service_name');
        },
        set: function (value) {
            this._serviceName = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsVpcEndpoint.prototype.resetServiceName = function () {
        this._serviceName = undefined;
    };
    Object.defineProperty(DataAwsVpcEndpoint.prototype, "serviceNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serviceName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpcEndpoint.prototype, "state", {
        get: function () {
            return this.getStringAttribute('state');
        },
        set: function (value) {
            this._state = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsVpcEndpoint.prototype.resetState = function () {
        this._state = undefined;
    };
    Object.defineProperty(DataAwsVpcEndpoint.prototype, "stateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._state;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpcEndpoint.prototype, "subnetIds", {
        // subnet_ids - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('subnet_ids');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpcEndpoint.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsVpcEndpoint.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsVpcEndpoint.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpcEndpoint.prototype, "vpcEndpointType", {
        // vpc_endpoint_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('vpc_endpoint_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpcEndpoint.prototype, "vpcId", {
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        set: function (value) {
            this._vpcId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsVpcEndpoint.prototype.resetVpcId = function () {
        this._vpcId = undefined;
    };
    Object.defineProperty(DataAwsVpcEndpoint.prototype, "vpcIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpcEndpoint.prototype, "filter", {
        get: function () {
            return this.interpolationForAttribute('filter');
        },
        set: function (value) {
            this._filter = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsVpcEndpoint.prototype.resetFilter = function () {
        this._filter = undefined;
    };
    Object.defineProperty(DataAwsVpcEndpoint.prototype, "filterInput", {
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
    DataAwsVpcEndpoint.prototype.synthesizeAttributes = function () {
        return {
            service_name: cdktf.stringToTerraform(this._serviceName),
            state: cdktf.stringToTerraform(this._state),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            vpc_id: cdktf.stringToTerraform(this._vpcId),
            filter: cdktf.listMapper(dataAwsVpcEndpointFilterToTerraform)(this._filter)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsVpcEndpoint.tfResourceType = "aws_vpc_endpoint";
    return DataAwsVpcEndpoint;
}(cdktf.TerraformDataSource));
exports.DataAwsVpcEndpoint = DataAwsVpcEndpoint;
