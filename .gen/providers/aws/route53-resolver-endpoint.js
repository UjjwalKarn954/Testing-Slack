"use strict";
// https://www.terraform.io/docs/providers/aws/r/route53_resolver_endpoint.html
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
exports.Route53ResolverEndpoint = void 0;
var cdktf = require("cdktf");
function route53ResolverEndpointIpAddressToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        ip: cdktf.stringToTerraform(struct.ip),
        subnet_id: cdktf.stringToTerraform(struct.subnetId)
    };
}
function route53ResolverEndpointTimeoutsToTerraform(struct) {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_endpoint.html aws_route53_resolver_endpoint}
*/
var Route53ResolverEndpoint = /** @class */ (function (_super) {
    __extends(Route53ResolverEndpoint, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_endpoint.html aws_route53_resolver_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53ResolverEndpointConfig
    */
    function Route53ResolverEndpoint(scope, id, config) {
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
        _this._direction = config.direction;
        _this._name = config.name;
        _this._securityGroupIds = config.securityGroupIds;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._ipAddress = config.ipAddress;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(Route53ResolverEndpoint.prototype, "arn", {
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
    Object.defineProperty(Route53ResolverEndpoint.prototype, "direction", {
        get: function () {
            return this.getStringAttribute('direction');
        },
        set: function (value) {
            this._direction = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverEndpoint.prototype, "directionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._direction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverEndpoint.prototype, "hostVpcId", {
        // host_vpc_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('host_vpc_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverEndpoint.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverEndpoint.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53ResolverEndpoint.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(Route53ResolverEndpoint.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverEndpoint.prototype, "securityGroupIds", {
        get: function () {
            return this.getListAttribute('security_group_ids');
        },
        set: function (value) {
            this._securityGroupIds = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverEndpoint.prototype, "securityGroupIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._securityGroupIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverEndpoint.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53ResolverEndpoint.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(Route53ResolverEndpoint.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverEndpoint.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53ResolverEndpoint.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(Route53ResolverEndpoint.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverEndpoint.prototype, "ipAddress", {
        get: function () {
            return this.interpolationForAttribute('ip_address');
        },
        set: function (value) {
            this._ipAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverEndpoint.prototype, "ipAddressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipAddress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Route53ResolverEndpoint.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    Route53ResolverEndpoint.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(Route53ResolverEndpoint.prototype, "timeoutsInput", {
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
    Route53ResolverEndpoint.prototype.synthesizeAttributes = function () {
        return {
            direction: cdktf.stringToTerraform(this._direction),
            name: cdktf.stringToTerraform(this._name),
            security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupIds),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            ip_address: cdktf.listMapper(route53ResolverEndpointIpAddressToTerraform)(this._ipAddress),
            timeouts: route53ResolverEndpointTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Route53ResolverEndpoint.tfResourceType = "aws_route53_resolver_endpoint";
    return Route53ResolverEndpoint;
}(cdktf.TerraformResource));
exports.Route53ResolverEndpoint = Route53ResolverEndpoint;
