"use strict";
// https://www.terraform.io/docs/providers/aws/r/alb.html
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
exports.Alb = void 0;
var cdktf = require("cdktf");
function albAccessLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket: cdktf.stringToTerraform(struct.bucket),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        prefix: cdktf.stringToTerraform(struct.prefix)
    };
}
function albSubnetMappingToTerraform(struct) {
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
function albTimeoutsToTerraform(struct) {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/alb.html aws_alb}
*/
var Alb = /** @class */ (function (_super) {
    __extends(Alb, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/alb.html aws_alb} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AlbConfig = {}
    */
    function Alb(scope, id, config) {
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
    Object.defineProperty(Alb.prototype, "arn", {
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
    Object.defineProperty(Alb.prototype, "arnSuffix", {
        // arn_suffix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn_suffix');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Alb.prototype, "customerOwnedIpv4Pool", {
        get: function () {
            return this.getStringAttribute('customer_owned_ipv4_pool');
        },
        set: function (value) {
            this._customerOwnedIpv4Pool = value;
        },
        enumerable: false,
        configurable: true
    });
    Alb.prototype.resetCustomerOwnedIpv4Pool = function () {
        this._customerOwnedIpv4Pool = undefined;
    };
    Object.defineProperty(Alb.prototype, "customerOwnedIpv4PoolInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customerOwnedIpv4Pool;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Alb.prototype, "dnsName", {
        // dns_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dns_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Alb.prototype, "dropInvalidHeaderFields", {
        get: function () {
            return this.getBooleanAttribute('drop_invalid_header_fields');
        },
        set: function (value) {
            this._dropInvalidHeaderFields = value;
        },
        enumerable: false,
        configurable: true
    });
    Alb.prototype.resetDropInvalidHeaderFields = function () {
        this._dropInvalidHeaderFields = undefined;
    };
    Object.defineProperty(Alb.prototype, "dropInvalidHeaderFieldsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dropInvalidHeaderFields;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Alb.prototype, "enableCrossZoneLoadBalancing", {
        get: function () {
            return this.getBooleanAttribute('enable_cross_zone_load_balancing');
        },
        set: function (value) {
            this._enableCrossZoneLoadBalancing = value;
        },
        enumerable: false,
        configurable: true
    });
    Alb.prototype.resetEnableCrossZoneLoadBalancing = function () {
        this._enableCrossZoneLoadBalancing = undefined;
    };
    Object.defineProperty(Alb.prototype, "enableCrossZoneLoadBalancingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enableCrossZoneLoadBalancing;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Alb.prototype, "enableDeletionProtection", {
        get: function () {
            return this.getBooleanAttribute('enable_deletion_protection');
        },
        set: function (value) {
            this._enableDeletionProtection = value;
        },
        enumerable: false,
        configurable: true
    });
    Alb.prototype.resetEnableDeletionProtection = function () {
        this._enableDeletionProtection = undefined;
    };
    Object.defineProperty(Alb.prototype, "enableDeletionProtectionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enableDeletionProtection;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Alb.prototype, "enableHttp2", {
        get: function () {
            return this.getBooleanAttribute('enable_http2');
        },
        set: function (value) {
            this._enableHttp2 = value;
        },
        enumerable: false,
        configurable: true
    });
    Alb.prototype.resetEnableHttp2 = function () {
        this._enableHttp2 = undefined;
    };
    Object.defineProperty(Alb.prototype, "enableHttp2Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enableHttp2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Alb.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Alb.prototype, "idleTimeout", {
        get: function () {
            return this.getNumberAttribute('idle_timeout');
        },
        set: function (value) {
            this._idleTimeout = value;
        },
        enumerable: false,
        configurable: true
    });
    Alb.prototype.resetIdleTimeout = function () {
        this._idleTimeout = undefined;
    };
    Object.defineProperty(Alb.prototype, "idleTimeoutInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._idleTimeout;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Alb.prototype, "internal", {
        get: function () {
            return this.getBooleanAttribute('internal');
        },
        set: function (value) {
            this._internal = value;
        },
        enumerable: false,
        configurable: true
    });
    Alb.prototype.resetInternal = function () {
        this._internal = undefined;
    };
    Object.defineProperty(Alb.prototype, "internalInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._internal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Alb.prototype, "ipAddressType", {
        get: function () {
            return this.getStringAttribute('ip_address_type');
        },
        set: function (value) {
            this._ipAddressType = value;
        },
        enumerable: false,
        configurable: true
    });
    Alb.prototype.resetIpAddressType = function () {
        this._ipAddressType = undefined;
    };
    Object.defineProperty(Alb.prototype, "ipAddressTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipAddressType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Alb.prototype, "loadBalancerType", {
        get: function () {
            return this.getStringAttribute('load_balancer_type');
        },
        set: function (value) {
            this._loadBalancerType = value;
        },
        enumerable: false,
        configurable: true
    });
    Alb.prototype.resetLoadBalancerType = function () {
        this._loadBalancerType = undefined;
    };
    Object.defineProperty(Alb.prototype, "loadBalancerTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._loadBalancerType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Alb.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Alb.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(Alb.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Alb.prototype, "namePrefix", {
        get: function () {
            return this.getStringAttribute('name_prefix');
        },
        set: function (value) {
            this._namePrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    Alb.prototype.resetNamePrefix = function () {
        this._namePrefix = undefined;
    };
    Object.defineProperty(Alb.prototype, "namePrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._namePrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Alb.prototype, "securityGroups", {
        get: function () {
            return this.getListAttribute('security_groups');
        },
        set: function (value) {
            this._securityGroups = value;
        },
        enumerable: false,
        configurable: true
    });
    Alb.prototype.resetSecurityGroups = function () {
        this._securityGroups = undefined;
    };
    Object.defineProperty(Alb.prototype, "securityGroupsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._securityGroups;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Alb.prototype, "subnets", {
        get: function () {
            return this.getListAttribute('subnets');
        },
        set: function (value) {
            this._subnets = value;
        },
        enumerable: false,
        configurable: true
    });
    Alb.prototype.resetSubnets = function () {
        this._subnets = undefined;
    };
    Object.defineProperty(Alb.prototype, "subnetsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subnets;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Alb.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    Alb.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(Alb.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Alb.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    Alb.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(Alb.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Alb.prototype, "vpcId", {
        // vpc_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Alb.prototype, "zoneId", {
        // zone_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Alb.prototype, "accessLogs", {
        get: function () {
            return this.interpolationForAttribute('access_logs');
        },
        set: function (value) {
            this._accessLogs = value;
        },
        enumerable: false,
        configurable: true
    });
    Alb.prototype.resetAccessLogs = function () {
        this._accessLogs = undefined;
    };
    Object.defineProperty(Alb.prototype, "accessLogsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessLogs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Alb.prototype, "subnetMapping", {
        get: function () {
            return this.interpolationForAttribute('subnet_mapping');
        },
        set: function (value) {
            this._subnetMapping = value;
        },
        enumerable: false,
        configurable: true
    });
    Alb.prototype.resetSubnetMapping = function () {
        this._subnetMapping = undefined;
    };
    Object.defineProperty(Alb.prototype, "subnetMappingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subnetMapping;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Alb.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    Alb.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(Alb.prototype, "timeoutsInput", {
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
    Alb.prototype.synthesizeAttributes = function () {
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
            access_logs: cdktf.listMapper(albAccessLogsToTerraform)(this._accessLogs),
            subnet_mapping: cdktf.listMapper(albSubnetMappingToTerraform)(this._subnetMapping),
            timeouts: albTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Alb.tfResourceType = "aws_alb";
    return Alb;
}(cdktf.TerraformResource));
exports.Alb = Alb;
