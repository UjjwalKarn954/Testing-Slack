"use strict";
// https://www.terraform.io/docs/providers/aws/d/route53_resolver_endpoint.html
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
exports.DataAwsRoute53ResolverEndpoint = void 0;
var cdktf = require("cdktf");
function dataAwsRoute53ResolverEndpointFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_endpoint.html aws_route53_resolver_endpoint}
*/
var DataAwsRoute53ResolverEndpoint = /** @class */ (function (_super) {
    __extends(DataAwsRoute53ResolverEndpoint, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_endpoint.html aws_route53_resolver_endpoint} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRoute53ResolverEndpointConfig = {}
    */
    function DataAwsRoute53ResolverEndpoint(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_route53_resolver_endpoint',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._resolverEndpointId = config.resolverEndpointId;
        _this._filter = config.filter;
        return _this;
    }
    Object.defineProperty(DataAwsRoute53ResolverEndpoint.prototype, "arn", {
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
    Object.defineProperty(DataAwsRoute53ResolverEndpoint.prototype, "direction", {
        // direction - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('direction');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRoute53ResolverEndpoint.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRoute53ResolverEndpoint.prototype, "ipAddresses", {
        // ip_addresses - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('ip_addresses');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRoute53ResolverEndpoint.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRoute53ResolverEndpoint.prototype, "resolverEndpointId", {
        get: function () {
            return this.getStringAttribute('resolver_endpoint_id');
        },
        set: function (value) {
            this._resolverEndpointId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRoute53ResolverEndpoint.prototype.resetResolverEndpointId = function () {
        this._resolverEndpointId = undefined;
    };
    Object.defineProperty(DataAwsRoute53ResolverEndpoint.prototype, "resolverEndpointIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resolverEndpointId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRoute53ResolverEndpoint.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRoute53ResolverEndpoint.prototype, "vpcId", {
        // vpc_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRoute53ResolverEndpoint.prototype, "filter", {
        get: function () {
            return this.interpolationForAttribute('filter');
        },
        set: function (value) {
            this._filter = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRoute53ResolverEndpoint.prototype.resetFilter = function () {
        this._filter = undefined;
    };
    Object.defineProperty(DataAwsRoute53ResolverEndpoint.prototype, "filterInput", {
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
    DataAwsRoute53ResolverEndpoint.prototype.synthesizeAttributes = function () {
        return {
            resolver_endpoint_id: cdktf.stringToTerraform(this._resolverEndpointId),
            filter: cdktf.listMapper(dataAwsRoute53ResolverEndpointFilterToTerraform)(this._filter)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsRoute53ResolverEndpoint.tfResourceType = "aws_route53_resolver_endpoint";
    return DataAwsRoute53ResolverEndpoint;
}(cdktf.TerraformDataSource));
exports.DataAwsRoute53ResolverEndpoint = DataAwsRoute53ResolverEndpoint;
