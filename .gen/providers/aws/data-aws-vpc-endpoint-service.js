"use strict";
// https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service.html
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
exports.DataAwsVpcEndpointService = void 0;
var cdktf = require("cdktf");
function dataAwsVpcEndpointServiceFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service.html aws_vpc_endpoint_service}
*/
var DataAwsVpcEndpointService = /** @class */ (function (_super) {
    __extends(DataAwsVpcEndpointService, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service.html aws_vpc_endpoint_service} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsVpcEndpointServiceConfig = {}
    */
    function DataAwsVpcEndpointService(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_vpc_endpoint_service',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._service = config.service;
        _this._serviceName = config.serviceName;
        _this._serviceType = config.serviceType;
        _this._tags = config.tags;
        _this._filter = config.filter;
        return _this;
    }
    Object.defineProperty(DataAwsVpcEndpointService.prototype, "acceptanceRequired", {
        // ==========
        // ATTRIBUTES
        // ==========
        // acceptance_required - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('acceptance_required');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpcEndpointService.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpcEndpointService.prototype, "availabilityZones", {
        // availability_zones - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('availability_zones');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpcEndpointService.prototype, "baseEndpointDnsNames", {
        // base_endpoint_dns_names - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('base_endpoint_dns_names');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpcEndpointService.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpcEndpointService.prototype, "managesVpcEndpoints", {
        // manages_vpc_endpoints - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('manages_vpc_endpoints');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpcEndpointService.prototype, "owner", {
        // owner - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpcEndpointService.prototype, "privateDnsName", {
        // private_dns_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('private_dns_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpcEndpointService.prototype, "service", {
        get: function () {
            return this.getStringAttribute('service');
        },
        set: function (value) {
            this._service = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsVpcEndpointService.prototype.resetService = function () {
        this._service = undefined;
    };
    Object.defineProperty(DataAwsVpcEndpointService.prototype, "serviceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._service;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpcEndpointService.prototype, "serviceId", {
        // service_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('service_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpcEndpointService.prototype, "serviceName", {
        get: function () {
            return this.getStringAttribute('service_name');
        },
        set: function (value) {
            this._serviceName = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsVpcEndpointService.prototype.resetServiceName = function () {
        this._serviceName = undefined;
    };
    Object.defineProperty(DataAwsVpcEndpointService.prototype, "serviceNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serviceName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpcEndpointService.prototype, "serviceType", {
        get: function () {
            return this.getStringAttribute('service_type');
        },
        set: function (value) {
            this._serviceType = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsVpcEndpointService.prototype.resetServiceType = function () {
        this._serviceType = undefined;
    };
    Object.defineProperty(DataAwsVpcEndpointService.prototype, "serviceTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serviceType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpcEndpointService.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsVpcEndpointService.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsVpcEndpointService.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpcEndpointService.prototype, "vpcEndpointPolicySupported", {
        // vpc_endpoint_policy_supported - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('vpc_endpoint_policy_supported');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpcEndpointService.prototype, "filter", {
        get: function () {
            return this.interpolationForAttribute('filter');
        },
        set: function (value) {
            this._filter = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsVpcEndpointService.prototype.resetFilter = function () {
        this._filter = undefined;
    };
    Object.defineProperty(DataAwsVpcEndpointService.prototype, "filterInput", {
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
    DataAwsVpcEndpointService.prototype.synthesizeAttributes = function () {
        return {
            service: cdktf.stringToTerraform(this._service),
            service_name: cdktf.stringToTerraform(this._serviceName),
            service_type: cdktf.stringToTerraform(this._serviceType),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            filter: cdktf.listMapper(dataAwsVpcEndpointServiceFilterToTerraform)(this._filter)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsVpcEndpointService.tfResourceType = "aws_vpc_endpoint_service";
    return DataAwsVpcEndpointService;
}(cdktf.TerraformDataSource));
exports.DataAwsVpcEndpointService = DataAwsVpcEndpointService;
