"use strict";
// https://www.terraform.io/docs/providers/aws/r/lb.html
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
exports.Lb = void 0;
var cdktf = require("cdktf");
function lbAccessLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket: cdktf.stringToTerraform(struct.bucket),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        prefix: cdktf.stringToTerraform(struct.prefix)
    };
}
function lbSubnetMappingToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        allocation_id: cdktf.stringToTerraform(struct.allocationId),
        ipv6_address: cdktf.stringToTerraform(struct.ipv6Address),
        private_ipv4_address: cdktf.stringToTerraform(struct.privateIpv4Address),
        subnet_id: cdktf.stringToTerraform(struct.subnetId)
    };
}
function lbTimeoutsToTerraform(struct) {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lb.html aws_lb}
*/
var Lb = /** @class */ (function (_super) {
    __extends(Lb, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lb.html aws_lb} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LbConfig = {}
    */
    function Lb(scope, id, config) {
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
        _this._customerOwnedIpv4Pool = config.customerOwnedIpv4Pool;
        _this._dropInvalidHeaderFields = config.dropInvalidHeaderFields;
        _this._enableCrossZoneLoadBalancing = config.enableCrossZoneLoadBalancing;
        _this._enableDeletionProtection = config.enableDeletionProtection;
        _this._enableHttp2 = config.enableHttp2;
        _this._idleTimeout = config.idleTimeout;
        _this._internal = config.internal;
        _this._ipAddressType = config.ipAddressType;
        _this._loadBalancerType = config.loadBalancerType;
        _this._name = config.name;
        _this._namePrefix = config.namePrefix;
        _this._securityGroups = config.securityGroups;
        _this._subnets = config.subnets;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._accessLogs = config.accessLogs;
        _this._subnetMapping = config.subnetMapping;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(Lb.prototype, "arn", {
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
    Object.defineProperty(Lb.prototype, "arnSuffix", {
        // arn_suffix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn_suffix');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lb.prototype, "customerOwnedIpv4Pool", {
        get: function () {
            return this.getStringAttribute('customer_owned_ipv4_pool');
        },
        set: function (value) {
            this._customerOwnedIpv4Pool = value;
        },
        enumerable: false,
        configurable: true
    });
    Lb.prototype.resetCustomerOwnedIpv4Pool = function () {
        this._customerOwnedIpv4Pool = undefined;
    };
    Object.defineProperty(Lb.prototype, "customerOwnedIpv4PoolInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customerOwnedIpv4Pool;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lb.prototype, "dnsName", {
        // dns_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dns_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lb.prototype, "dropInvalidHeaderFields", {
        get: function () {
            return this.getBooleanAttribute('drop_invalid_header_fields');
        },
        set: function (value) {
            this._dropInvalidHeaderFields = value;
        },
        enumerable: false,
        configurable: true
    });
    Lb.prototype.resetDropInvalidHeaderFields = function () {
        this._dropInvalidHeaderFields = undefined;
    };
    Object.defineProperty(Lb.prototype, "dropInvalidHeaderFieldsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dropInvalidHeaderFields;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lb.prototype, "enableCrossZoneLoadBalancing", {
        get: function () {
            return this.getBooleanAttribute('enable_cross_zone_load_balancing');
        },
        set: function (value) {
            this._enableCrossZoneLoadBalancing = value;
        },
        enumerable: false,
        configurable: true
    });
    Lb.prototype.resetEnableCrossZoneLoadBalancing = function () {
        this._enableCrossZoneLoadBalancing = undefined;
    };
    Object.defineProperty(Lb.prototype, "enableCrossZoneLoadBalancingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enableCrossZoneLoadBalancing;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lb.prototype, "enableDeletionProtection", {
        get: function () {
            return this.getBooleanAttribute('enable_deletion_protection');
        },
        set: function (value) {
            this._enableDeletionProtection = value;
        },
        enumerable: false,
        configurable: true
    });
    Lb.prototype.resetEnableDeletionProtection = function () {
        this._enableDeletionProtection = undefined;
    };
    Object.defineProperty(Lb.prototype, "enableDeletionProtectionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enableDeletionProtection;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lb.prototype, "enableHttp2", {
        get: function () {
            return this.getBooleanAttribute('enable_http2');
        },
        set: function (value) {
            this._enableHttp2 = value;
        },
        enumerable: false,
        configurable: true
    });
    Lb.prototype.resetEnableHttp2 = function () {
        this._enableHttp2 = undefined;
    };
    Object.defineProperty(Lb.prototype, "enableHttp2Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enableHttp2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lb.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lb.prototype, "idleTimeout", {
        get: function () {
            return this.getNumberAttribute('idle_timeout');
        },
        set: function (value) {
            this._idleTimeout = value;
        },
        enumerable: false,
        configurable: true
    });
    Lb.prototype.resetIdleTimeout = function () {
        this._idleTimeout = undefined;
    };
    Object.defineProperty(Lb.prototype, "idleTimeoutInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._idleTimeout;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lb.prototype, "internal", {
        get: function () {
            return this.getBooleanAttribute('internal');
        },
        set: function (value) {
            this._internal = value;
        },
        enumerable: false,
        configurable: true
    });
    Lb.prototype.resetInternal = function () {
        this._internal = undefined;
    };
    Object.defineProperty(Lb.prototype, "internalInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._internal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lb.prototype, "ipAddressType", {
        get: function () {
            return this.getStringAttribute('ip_address_type');
        },
        set: function (value) {
            this._ipAddressType = value;
        },
        enumerable: false,
        configurable: true
    });
    Lb.prototype.resetIpAddressType = function () {
        this._ipAddressType = undefined;
    };
    Object.defineProperty(Lb.prototype, "ipAddressTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipAddressType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lb.prototype, "loadBalancerType", {
        get: function () {
            return this.getStringAttribute('load_balancer_type');
        },
        set: function (value) {
            this._loadBalancerType = value;
        },
        enumerable: false,
        configurable: true
    });
    Lb.prototype.resetLoadBalancerType = function () {
        this._loadBalancerType = undefined;
    };
    Object.defineProperty(Lb.prototype, "loadBalancerTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._loadBalancerType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lb.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Lb.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(Lb.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lb.prototype, "namePrefix", {
        get: function () {
            return this.getStringAttribute('name_prefix');
        },
        set: function (value) {
            this._namePrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    Lb.prototype.resetNamePrefix = function () {
        this._namePrefix = undefined;
    };
    Object.defineProperty(Lb.prototype, "namePrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._namePrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lb.prototype, "securityGroups", {
        get: function () {
            return this.getListAttribute('security_groups');
        },
        set: function (value) {
            this._securityGroups = value;
        },
        enumerable: false,
        configurable: true
    });
    Lb.prototype.resetSecurityGroups = function () {
        this._securityGroups = undefined;
    };
    Object.defineProperty(Lb.prototype, "securityGroupsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._securityGroups;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lb.prototype, "subnets", {
        get: function () {
            return this.getListAttribute('subnets');
        },
        set: function (value) {
            this._subnets = value;
        },
        enumerable: false,
        configurable: true
    });
    Lb.prototype.resetSubnets = function () {
        this._subnets = undefined;
    };
    Object.defineProperty(Lb.prototype, "subnetsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subnets;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lb.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    Lb.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(Lb.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lb.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    Lb.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(Lb.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lb.prototype, "vpcId", {
        // vpc_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lb.prototype, "zoneId", {
        // zone_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lb.prototype, "accessLogs", {
        get: function () {
            return this.interpolationForAttribute('access_logs');
        },
        set: function (value) {
            this._accessLogs = value;
        },
        enumerable: false,
        configurable: true
    });
    Lb.prototype.resetAccessLogs = function () {
        this._accessLogs = undefined;
    };
    Object.defineProperty(Lb.prototype, "accessLogsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessLogs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lb.prototype, "subnetMapping", {
        get: function () {
            return this.interpolationForAttribute('subnet_mapping');
        },
        set: function (value) {
            this._subnetMapping = value;
        },
        enumerable: false,
        configurable: true
    });
    Lb.prototype.resetSubnetMapping = function () {
        this._subnetMapping = undefined;
    };
    Object.defineProperty(Lb.prototype, "subnetMappingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subnetMapping;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lb.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    Lb.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(Lb.prototype, "timeoutsInput", {
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
    Lb.prototype.synthesizeAttributes = function () {
        return {
            customer_owned_ipv4_pool: cdktf.stringToTerraform(this._customerOwnedIpv4Pool),
            drop_invalid_header_fields: cdktf.booleanToTerraform(this._dropInvalidHeaderFields),
            enable_cross_zone_load_balancing: cdktf.booleanToTerraform(this._enableCrossZoneLoadBalancing),
            enable_deletion_protection: cdktf.booleanToTerraform(this._enableDeletionProtection),
            enable_http2: cdktf.booleanToTerraform(this._enableHttp2),
            idle_timeout: cdktf.numberToTerraform(this._idleTimeout),
            internal: cdktf.booleanToTerraform(this._internal),
            ip_address_type: cdktf.stringToTerraform(this._ipAddressType),
            load_balancer_type: cdktf.stringToTerraform(this._loadBalancerType),
            name: cdktf.stringToTerraform(this._name),
            name_prefix: cdktf.stringToTerraform(this._namePrefix),
            security_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroups),
            subnets: cdktf.listMapper(cdktf.stringToTerraform)(this._subnets),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            access_logs: cdktf.listMapper(lbAccessLogsToTerraform)(this._accessLogs),
            subnet_mapping: cdktf.listMapper(lbSubnetMappingToTerraform)(this._subnetMapping),
            timeouts: lbTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Lb.tfResourceType = "aws_lb";
    return Lb;
}(cdktf.TerraformResource));
exports.Lb = Lb;
