"use strict";
// https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html
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
exports.ServiceDiscoveryService = void 0;
var cdktf = require("cdktf");
function serviceDiscoveryServiceDnsConfigDnsRecordsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        ttl: cdktf.numberToTerraform(struct.ttl),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function serviceDiscoveryServiceDnsConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        namespace_id: cdktf.stringToTerraform(struct.namespaceId),
        routing_policy: cdktf.stringToTerraform(struct.routingPolicy),
        dns_records: cdktf.listMapper(serviceDiscoveryServiceDnsConfigDnsRecordsToTerraform)(struct.dnsRecords)
    };
}
function serviceDiscoveryServiceHealthCheckConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        failure_threshold: cdktf.numberToTerraform(struct.failureThreshold),
        resource_path: cdktf.stringToTerraform(struct.resourcePath),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function serviceDiscoveryServiceHealthCheckCustomConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        failure_threshold: cdktf.numberToTerraform(struct.failureThreshold)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html aws_service_discovery_service}
*/
var ServiceDiscoveryService = /** @class */ (function (_super) {
    __extends(ServiceDiscoveryService, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html aws_service_discovery_service} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServiceDiscoveryServiceConfig
    */
    function ServiceDiscoveryService(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_service_discovery_service',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._description = config.description;
        _this._forceDestroy = config.forceDestroy;
        _this._name = config.name;
        _this._namespaceId = config.namespaceId;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._dnsConfig = config.dnsConfig;
        _this._healthCheckConfig = config.healthCheckConfig;
        _this._healthCheckCustomConfig = config.healthCheckCustomConfig;
        return _this;
    }
    Object.defineProperty(ServiceDiscoveryService.prototype, "arn", {
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
    Object.defineProperty(ServiceDiscoveryService.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceDiscoveryService.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(ServiceDiscoveryService.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceDiscoveryService.prototype, "forceDestroy", {
        get: function () {
            return this.getBooleanAttribute('force_destroy');
        },
        set: function (value) {
            this._forceDestroy = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceDiscoveryService.prototype.resetForceDestroy = function () {
        this._forceDestroy = undefined;
    };
    Object.defineProperty(ServiceDiscoveryService.prototype, "forceDestroyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._forceDestroy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceDiscoveryService.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceDiscoveryService.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceDiscoveryService.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceDiscoveryService.prototype, "namespaceId", {
        get: function () {
            return this.getStringAttribute('namespace_id');
        },
        set: function (value) {
            this._namespaceId = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceDiscoveryService.prototype.resetNamespaceId = function () {
        this._namespaceId = undefined;
    };
    Object.defineProperty(ServiceDiscoveryService.prototype, "namespaceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._namespaceId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceDiscoveryService.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceDiscoveryService.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(ServiceDiscoveryService.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceDiscoveryService.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceDiscoveryService.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(ServiceDiscoveryService.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceDiscoveryService.prototype, "dnsConfig", {
        get: function () {
            return this.interpolationForAttribute('dns_config');
        },
        set: function (value) {
            this._dnsConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceDiscoveryService.prototype.resetDnsConfig = function () {
        this._dnsConfig = undefined;
    };
    Object.defineProperty(ServiceDiscoveryService.prototype, "dnsConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dnsConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceDiscoveryService.prototype, "healthCheckConfig", {
        get: function () {
            return this.interpolationForAttribute('health_check_config');
        },
        set: function (value) {
            this._healthCheckConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceDiscoveryService.prototype.resetHealthCheckConfig = function () {
        this._healthCheckConfig = undefined;
    };
    Object.defineProperty(ServiceDiscoveryService.prototype, "healthCheckConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._healthCheckConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceDiscoveryService.prototype, "healthCheckCustomConfig", {
        get: function () {
            return this.interpolationForAttribute('health_check_custom_config');
        },
        set: function (value) {
            this._healthCheckCustomConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceDiscoveryService.prototype.resetHealthCheckCustomConfig = function () {
        this._healthCheckCustomConfig = undefined;
    };
    Object.defineProperty(ServiceDiscoveryService.prototype, "healthCheckCustomConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._healthCheckCustomConfig;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ServiceDiscoveryService.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
            name: cdktf.stringToTerraform(this._name),
            namespace_id: cdktf.stringToTerraform(this._namespaceId),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            dns_config: cdktf.listMapper(serviceDiscoveryServiceDnsConfigToTerraform)(this._dnsConfig),
            health_check_config: cdktf.listMapper(serviceDiscoveryServiceHealthCheckConfigToTerraform)(this._healthCheckConfig),
            health_check_custom_config: cdktf.listMapper(serviceDiscoveryServiceHealthCheckCustomConfigToTerraform)(this._healthCheckCustomConfig)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ServiceDiscoveryService.tfResourceType = "aws_service_discovery_service";
    return ServiceDiscoveryService;
}(cdktf.TerraformResource));
exports.ServiceDiscoveryService = ServiceDiscoveryService;
