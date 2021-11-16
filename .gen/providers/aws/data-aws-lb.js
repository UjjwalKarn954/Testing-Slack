"use strict";
// https://www.terraform.io/docs/providers/aws/d/lb.html
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
exports.DataAwsLb = exports.DataAwsLbSubnetMapping = exports.DataAwsLbAccessLogs = void 0;
var cdktf = require("cdktf");
var DataAwsLbAccessLogs = /** @class */ (function (_super) {
    __extends(DataAwsLbAccessLogs, _super);
    function DataAwsLbAccessLogs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsLbAccessLogs.prototype, "bucket", {
        // bucket - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('bucket');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbAccessLogs.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbAccessLogs.prototype, "prefix", {
        // prefix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('prefix');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsLbAccessLogs;
}(cdktf.ComplexComputedList));
exports.DataAwsLbAccessLogs = DataAwsLbAccessLogs;
var DataAwsLbSubnetMapping = /** @class */ (function (_super) {
    __extends(DataAwsLbSubnetMapping, _super);
    function DataAwsLbSubnetMapping() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsLbSubnetMapping.prototype, "allocationId", {
        // allocation_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('allocation_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbSubnetMapping.prototype, "ipv6Address", {
        // ipv6_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ipv6_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbSubnetMapping.prototype, "outpostId", {
        // outpost_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('outpost_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbSubnetMapping.prototype, "privateIpv4Address", {
        // private_ipv4_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('private_ipv4_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbSubnetMapping.prototype, "subnetId", {
        // subnet_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('subnet_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsLbSubnetMapping;
}(cdktf.ComplexComputedList));
exports.DataAwsLbSubnetMapping = DataAwsLbSubnetMapping;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/lb.html aws_lb}
*/
var DataAwsLb = /** @class */ (function (_super) {
    __extends(DataAwsLb, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lb.html aws_lb} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLbConfig = {}
    */
    function DataAwsLb(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_lb',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        _this._tags = config.tags;
        return _this;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // access_logs - computed: true, optional: false, required: false
    DataAwsLb.prototype.accessLogs = function (index) {
        return new DataAwsLbAccessLogs(this, 'access_logs', index);
    };
    Object.defineProperty(DataAwsLb.prototype, "arn", {
        // arn - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLb.prototype, "arnSuffix", {
        // arn_suffix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn_suffix');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLb.prototype, "customerOwnedIpv4Pool", {
        // customer_owned_ipv4_pool - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('customer_owned_ipv4_pool');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLb.prototype, "dnsName", {
        // dns_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dns_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLb.prototype, "dropInvalidHeaderFields", {
        // drop_invalid_header_fields - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('drop_invalid_header_fields');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLb.prototype, "enableDeletionProtection", {
        // enable_deletion_protection - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enable_deletion_protection');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLb.prototype, "enableHttp2", {
        // enable_http2 - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enable_http2');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLb.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLb.prototype, "idleTimeout", {
        // idle_timeout - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('idle_timeout');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLb.prototype, "internal", {
        // internal - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('internal');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLb.prototype, "ipAddressType", {
        // ip_address_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ip_address_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLb.prototype, "loadBalancerType", {
        // load_balancer_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('load_balancer_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLb.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsLb.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(DataAwsLb.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLb.prototype, "securityGroups", {
        // security_groups - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('security_groups');
        },
        enumerable: false,
        configurable: true
    });
    // subnet_mapping - computed: true, optional: false, required: false
    DataAwsLb.prototype.subnetMapping = function (index) {
        return new DataAwsLbSubnetMapping(this, 'subnet_mapping', index);
    };
    Object.defineProperty(DataAwsLb.prototype, "subnets", {
        // subnets - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('subnets');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLb.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsLb.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsLb.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLb.prototype, "vpcId", {
        // vpc_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLb.prototype, "zoneId", {
        // zone_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsLb.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsLb.tfResourceType = "aws_lb";
    return DataAwsLb;
}(cdktf.TerraformDataSource));
exports.DataAwsLb = DataAwsLb;
