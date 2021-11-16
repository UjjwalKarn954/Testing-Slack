"use strict";
// https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html
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
exports.VpcEndpoint = exports.VpcEndpointDnsEntry = void 0;
var cdktf = require("cdktf");
var VpcEndpointDnsEntry = /** @class */ (function (_super) {
    __extends(VpcEndpointDnsEntry, _super);
    function VpcEndpointDnsEntry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(VpcEndpointDnsEntry.prototype, "dnsName", {
        // dns_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dns_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpointDnsEntry.prototype, "hostedZoneId", {
        // hosted_zone_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hosted_zone_id');
        },
        enumerable: false,
        configurable: true
    });
    return VpcEndpointDnsEntry;
}(cdktf.ComplexComputedList));
exports.VpcEndpointDnsEntry = VpcEndpointDnsEntry;
function vpcEndpointTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        "delete": cdktf.stringToTerraform(struct["delete"]),
        update: cdktf.stringToTerraform(struct.update)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html aws_vpc_endpoint}
*/
var VpcEndpoint = /** @class */ (function (_super) {
    __extends(VpcEndpoint, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html aws_vpc_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcEndpointConfig
    */
    function VpcEndpoint(scope, id, config) {
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
        _this._autoAccept = config.autoAccept;
        _this._policy = config.policy;
        _this._privateDnsEnabled = config.privateDnsEnabled;
        _this._routeTableIds = config.routeTableIds;
        _this._securityGroupIds = config.securityGroupIds;
        _this._serviceName = config.serviceName;
        _this._subnetIds = config.subnetIds;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._vpcEndpointType = config.vpcEndpointType;
        _this._vpcId = config.vpcId;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(VpcEndpoint.prototype, "arn", {
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
    Object.defineProperty(VpcEndpoint.prototype, "autoAccept", {
        get: function () {
            return this.getBooleanAttribute('auto_accept');
        },
        set: function (value) {
            this._autoAccept = value;
        },
        enumerable: false,
        configurable: true
    });
    VpcEndpoint.prototype.resetAutoAccept = function () {
        this._autoAccept = undefined;
    };
    Object.defineProperty(VpcEndpoint.prototype, "autoAcceptInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoAccept;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpoint.prototype, "cidrBlocks", {
        // cidr_blocks - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('cidr_blocks');
        },
        enumerable: false,
        configurable: true
    });
    // dns_entry - computed: true, optional: false, required: false
    VpcEndpoint.prototype.dnsEntry = function (index) {
        return new VpcEndpointDnsEntry(this, 'dns_entry', index);
    };
    Object.defineProperty(VpcEndpoint.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpoint.prototype, "networkInterfaceIds", {
        // network_interface_ids - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('network_interface_ids');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpoint.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpoint.prototype, "policy", {
        get: function () {
            return this.getStringAttribute('policy');
        },
        set: function (value) {
            this._policy = value;
        },
        enumerable: false,
        configurable: true
    });
    VpcEndpoint.prototype.resetPolicy = function () {
        this._policy = undefined;
    };
    Object.defineProperty(VpcEndpoint.prototype, "policyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpoint.prototype, "prefixListId", {
        // prefix_list_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('prefix_list_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpoint.prototype, "privateDnsEnabled", {
        get: function () {
            return this.getBooleanAttribute('private_dns_enabled');
        },
        set: function (value) {
            this._privateDnsEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    VpcEndpoint.prototype.resetPrivateDnsEnabled = function () {
        this._privateDnsEnabled = undefined;
    };
    Object.defineProperty(VpcEndpoint.prototype, "privateDnsEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._privateDnsEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpoint.prototype, "requesterManaged", {
        // requester_managed - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('requester_managed');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpoint.prototype, "routeTableIds", {
        get: function () {
            return this.getListAttribute('route_table_ids');
        },
        set: function (value) {
            this._routeTableIds = value;
        },
        enumerable: false,
        configurable: true
    });
    VpcEndpoint.prototype.resetRouteTableIds = function () {
        this._routeTableIds = undefined;
    };
    Object.defineProperty(VpcEndpoint.prototype, "routeTableIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._routeTableIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpoint.prototype, "securityGroupIds", {
        get: function () {
            return this.getListAttribute('security_group_ids');
        },
        set: function (value) {
            this._securityGroupIds = value;
        },
        enumerable: false,
        configurable: true
    });
    VpcEndpoint.prototype.resetSecurityGroupIds = function () {
        this._securityGroupIds = undefined;
    };
    Object.defineProperty(VpcEndpoint.prototype, "securityGroupIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._securityGroupIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpoint.prototype, "serviceName", {
        get: function () {
            return this.getStringAttribute('service_name');
        },
        set: function (value) {
            this._serviceName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpoint.prototype, "serviceNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serviceName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpoint.prototype, "state", {
        // state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpoint.prototype, "subnetIds", {
        get: function () {
            return this.getListAttribute('subnet_ids');
        },
        set: function (value) {
            this._subnetIds = value;
        },
        enumerable: false,
        configurable: true
    });
    VpcEndpoint.prototype.resetSubnetIds = function () {
        this._subnetIds = undefined;
    };
    Object.defineProperty(VpcEndpoint.prototype, "subnetIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subnetIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpoint.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    VpcEndpoint.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(VpcEndpoint.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpoint.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    VpcEndpoint.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(VpcEndpoint.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpoint.prototype, "vpcEndpointType", {
        get: function () {
            return this.getStringAttribute('vpc_endpoint_type');
        },
        set: function (value) {
            this._vpcEndpointType = value;
        },
        enumerable: false,
        configurable: true
    });
    VpcEndpoint.prototype.resetVpcEndpointType = function () {
        this._vpcEndpointType = undefined;
    };
    Object.defineProperty(VpcEndpoint.prototype, "vpcEndpointTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcEndpointType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpoint.prototype, "vpcId", {
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        set: function (value) {
            this._vpcId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpoint.prototype, "vpcIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpoint.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    VpcEndpoint.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(VpcEndpoint.prototype, "timeoutsInput", {
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
    VpcEndpoint.prototype.synthesizeAttributes = function () {
        return {
            auto_accept: cdktf.booleanToTerraform(this._autoAccept),
            policy: cdktf.stringToTerraform(this._policy),
            private_dns_enabled: cdktf.booleanToTerraform(this._privateDnsEnabled),
            route_table_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._routeTableIds),
            security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupIds),
            service_name: cdktf.stringToTerraform(this._serviceName),
            subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            vpc_endpoint_type: cdktf.stringToTerraform(this._vpcEndpointType),
            vpc_id: cdktf.stringToTerraform(this._vpcId),
            timeouts: vpcEndpointTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    VpcEndpoint.tfResourceType = "aws_vpc_endpoint";
    return VpcEndpoint;
}(cdktf.TerraformResource));
exports.VpcEndpoint = VpcEndpoint;
