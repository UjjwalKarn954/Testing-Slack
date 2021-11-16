"use strict";
// https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service.html
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
exports.VpcEndpointService = exports.VpcEndpointServicePrivateDnsNameConfiguration = void 0;
var cdktf = require("cdktf");
var VpcEndpointServicePrivateDnsNameConfiguration = /** @class */ (function (_super) {
    __extends(VpcEndpointServicePrivateDnsNameConfiguration, _super);
    function VpcEndpointServicePrivateDnsNameConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(VpcEndpointServicePrivateDnsNameConfiguration.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpointServicePrivateDnsNameConfiguration.prototype, "state", {
        // state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpointServicePrivateDnsNameConfiguration.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpointServicePrivateDnsNameConfiguration.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return VpcEndpointServicePrivateDnsNameConfiguration;
}(cdktf.ComplexComputedList));
exports.VpcEndpointServicePrivateDnsNameConfiguration = VpcEndpointServicePrivateDnsNameConfiguration;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service.html aws_vpc_endpoint_service}
*/
var VpcEndpointService = /** @class */ (function (_super) {
    __extends(VpcEndpointService, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service.html aws_vpc_endpoint_service} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcEndpointServiceConfig
    */
    function VpcEndpointService(scope, id, config) {
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
        _this._acceptanceRequired = config.acceptanceRequired;
        _this._allowedPrincipals = config.allowedPrincipals;
        _this._gatewayLoadBalancerArns = config.gatewayLoadBalancerArns;
        _this._networkLoadBalancerArns = config.networkLoadBalancerArns;
        _this._privateDnsName = config.privateDnsName;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(VpcEndpointService.prototype, "acceptanceRequired", {
        get: function () {
            return this.getBooleanAttribute('acceptance_required');
        },
        set: function (value) {
            this._acceptanceRequired = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpointService.prototype, "acceptanceRequiredInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._acceptanceRequired;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpointService.prototype, "allowedPrincipals", {
        get: function () {
            return this.getListAttribute('allowed_principals');
        },
        set: function (value) {
            this._allowedPrincipals = value;
        },
        enumerable: false,
        configurable: true
    });
    VpcEndpointService.prototype.resetAllowedPrincipals = function () {
        this._allowedPrincipals = undefined;
    };
    Object.defineProperty(VpcEndpointService.prototype, "allowedPrincipalsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowedPrincipals;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpointService.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpointService.prototype, "availabilityZones", {
        // availability_zones - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('availability_zones');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpointService.prototype, "baseEndpointDnsNames", {
        // base_endpoint_dns_names - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('base_endpoint_dns_names');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpointService.prototype, "gatewayLoadBalancerArns", {
        get: function () {
            return this.getListAttribute('gateway_load_balancer_arns');
        },
        set: function (value) {
            this._gatewayLoadBalancerArns = value;
        },
        enumerable: false,
        configurable: true
    });
    VpcEndpointService.prototype.resetGatewayLoadBalancerArns = function () {
        this._gatewayLoadBalancerArns = undefined;
    };
    Object.defineProperty(VpcEndpointService.prototype, "gatewayLoadBalancerArnsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._gatewayLoadBalancerArns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpointService.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpointService.prototype, "managesVpcEndpoints", {
        // manages_vpc_endpoints - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('manages_vpc_endpoints');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpointService.prototype, "networkLoadBalancerArns", {
        get: function () {
            return this.getListAttribute('network_load_balancer_arns');
        },
        set: function (value) {
            this._networkLoadBalancerArns = value;
        },
        enumerable: false,
        configurable: true
    });
    VpcEndpointService.prototype.resetNetworkLoadBalancerArns = function () {
        this._networkLoadBalancerArns = undefined;
    };
    Object.defineProperty(VpcEndpointService.prototype, "networkLoadBalancerArnsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._networkLoadBalancerArns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpointService.prototype, "privateDnsName", {
        get: function () {
            return this.getStringAttribute('private_dns_name');
        },
        set: function (value) {
            this._privateDnsName = value;
        },
        enumerable: false,
        configurable: true
    });
    VpcEndpointService.prototype.resetPrivateDnsName = function () {
        this._privateDnsName = undefined;
    };
    Object.defineProperty(VpcEndpointService.prototype, "privateDnsNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._privateDnsName;
        },
        enumerable: false,
        configurable: true
    });
    // private_dns_name_configuration - computed: true, optional: false, required: false
    VpcEndpointService.prototype.privateDnsNameConfiguration = function (index) {
        return new VpcEndpointServicePrivateDnsNameConfiguration(this, 'private_dns_name_configuration', index);
    };
    Object.defineProperty(VpcEndpointService.prototype, "serviceName", {
        // service_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('service_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpointService.prototype, "serviceType", {
        // service_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('service_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpointService.prototype, "state", {
        // state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpointService.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    VpcEndpointService.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(VpcEndpointService.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcEndpointService.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    VpcEndpointService.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(VpcEndpointService.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    VpcEndpointService.prototype.synthesizeAttributes = function () {
        return {
            acceptance_required: cdktf.booleanToTerraform(this._acceptanceRequired),
            allowed_principals: cdktf.listMapper(cdktf.stringToTerraform)(this._allowedPrincipals),
            gateway_load_balancer_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._gatewayLoadBalancerArns),
            network_load_balancer_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._networkLoadBalancerArns),
            private_dns_name: cdktf.stringToTerraform(this._privateDnsName),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    VpcEndpointService.tfResourceType = "aws_vpc_endpoint_service";
    return VpcEndpointService;
}(cdktf.TerraformResource));
exports.VpcEndpointService = VpcEndpointService;
