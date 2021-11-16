"use strict";
// https://www.terraform.io/docs/providers/aws/r/service_discovery_instance.html
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
exports.ServiceDiscoveryInstance = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_instance.html aws_service_discovery_instance}
*/
var ServiceDiscoveryInstance = /** @class */ (function (_super) {
    __extends(ServiceDiscoveryInstance, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_instance.html aws_service_discovery_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServiceDiscoveryInstanceConfig
    */
    function ServiceDiscoveryInstance(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_service_discovery_instance',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._attributes = config.attributes;
        _this._instanceId = config.instanceId;
        _this._serviceId = config.serviceId;
        return _this;
    }
    Object.defineProperty(ServiceDiscoveryInstance.prototype, "attributes", {
        get: function () {
            return this.interpolationForAttribute('attributes');
        },
        set: function (value) {
            this._attributes = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceDiscoveryInstance.prototype, "attributesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._attributes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceDiscoveryInstance.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceDiscoveryInstance.prototype, "instanceId", {
        get: function () {
            return this.getStringAttribute('instance_id');
        },
        set: function (value) {
            this._instanceId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceDiscoveryInstance.prototype, "instanceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceDiscoveryInstance.prototype, "serviceId", {
        get: function () {
            return this.getStringAttribute('service_id');
        },
        set: function (value) {
            this._serviceId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceDiscoveryInstance.prototype, "serviceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serviceId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ServiceDiscoveryInstance.prototype.synthesizeAttributes = function () {
        return {
            attributes: cdktf.hashMapper(cdktf.anyToTerraform)(this._attributes),
            instance_id: cdktf.stringToTerraform(this._instanceId),
            service_id: cdktf.stringToTerraform(this._serviceId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ServiceDiscoveryInstance.tfResourceType = "aws_service_discovery_instance";
    return ServiceDiscoveryInstance;
}(cdktf.TerraformResource));
exports.ServiceDiscoveryInstance = ServiceDiscoveryInstance;
