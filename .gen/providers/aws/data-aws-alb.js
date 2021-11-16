"use strict";
// https://www.terraform.io/docs/providers/aws/d/alb.html
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
exports.DataAwsAlb = exports.DataAwsAlbSubnetMapping = exports.DataAwsAlbAccessLogs = void 0;
var cdktf = require("cdktf");
var DataAwsAlbAccessLogs = /** @class */ (function (_super) {
    __extends(DataAwsAlbAccessLogs, _super);
    function DataAwsAlbAccessLogs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsAlbAccessLogs.prototype, "bucket", {
        // bucket - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('bucket');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbAccessLogs.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbAccessLogs.prototype, "prefix", {
        // prefix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('prefix');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsAlbAccessLogs;
}(cdktf.ComplexComputedList));
exports.DataAwsAlbAccessLogs = DataAwsAlbAccessLogs;
var DataAwsAlbSubnetMapping = /** @class */ (function (_super) {
    __extends(DataAwsAlbSubnetMapping, _super);
    function DataAwsAlbSubnetMapping() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsAlbSubnetMapping.prototype, "allocationId", {
        // allocation_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('allocation_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbSubnetMapping.prototype, "ipv6Address", {
        // ipv6_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ipv6_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbSubnetMapping.prototype, "outpostId", {
        // outpost_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('outpost_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbSubnetMapping.prototype, "privateIpv4Address", {
        // private_ipv4_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('private_ipv4_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbSubnetMapping.prototype, "subnetId", {
        // subnet_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('subnet_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsAlbSubnetMapping;
}(cdktf.ComplexComputedList));
exports.DataAwsAlbSubnetMapping = DataAwsAlbSubnetMapping;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/alb.html aws_alb}
*/
var DataAwsAlb = /** @class */ (function (_super) {
    __extends(DataAwsAlb, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/alb.html aws_alb} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAlbConfig = {}
    */
    function DataAwsAlb(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_alb',
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
    DataAwsAlb.prototype.accessLogs = function (index) {
        return new DataAwsAlbAccessLogs(this, 'access_logs', index);
    };
    Object.defineProperty(DataAwsAlb.prototype, "arn", {
        // arn - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlb.prototype, "arnSuffix", {
        // arn_suffix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn_suffix');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlb.prototype, "customerOwnedIpv4Pool", {
        // customer_owned_ipv4_pool - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('customer_owned_ipv4_pool');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlb.prototype, "dnsName", {
        // dns_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dns_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlb.prototype, "dropInvalidHeaderFields", {
        // drop_invalid_header_fields - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('drop_invalid_header_fields');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlb.prototype, "enableDeletionProtection", {
        // enable_deletion_protection - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enable_deletion_protection');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlb.prototype, "enableHttp2", {
        // enable_http2 - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enable_http2');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlb.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlb.prototype, "idleTimeout", {
        // idle_timeout - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('idle_timeout');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlb.prototype, "internal", {
        // internal - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('internal');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlb.prototype, "ipAddressType", {
        // ip_address_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ip_address_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlb.prototype, "loadBalancerType", {
        // load_balancer_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('load_balancer_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlb.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsAlb.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(DataAwsAlb.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlb.prototype, "securityGroups", {
        // security_groups - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('security_groups');
        },
        enumerable: false,
        configurable: true
    });
    // subnet_mapping - computed: true, optional: false, required: false
    DataAwsAlb.prototype.subnetMapping = function (index) {
        return new DataAwsAlbSubnetMapping(this, 'subnet_mapping', index);
    };
    Object.defineProperty(DataAwsAlb.prototype, "subnets", {
        // subnets - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('subnets');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlb.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsAlb.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsAlb.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlb.prototype, "vpcId", {
        // vpc_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlb.prototype, "zoneId", {
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
    DataAwsAlb.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsAlb.tfResourceType = "aws_alb";
    return DataAwsAlb;
}(cdktf.TerraformDataSource));
exports.DataAwsAlb = DataAwsAlb;
