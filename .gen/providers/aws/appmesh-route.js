"use strict";
// https://www.terraform.io/docs/providers/aws/r/appmesh_route.html
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
exports.AppmeshRoute = void 0;
var cdktf = require("cdktf");
function appmeshRouteSpecGrpcRouteActionWeightedTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        virtual_node: cdktf.stringToTerraform(struct.virtualNode),
        weight: cdktf.numberToTerraform(struct.weight)
    };
}
function appmeshRouteSpecGrpcRouteActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        weighted_target: cdktf.listMapper(appmeshRouteSpecGrpcRouteActionWeightedTargetToTerraform)(struct.weightedTarget)
    };
}
function appmeshRouteSpecGrpcRouteMatchMetadataMatchRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        end: cdktf.numberToTerraform(struct.end),
        start: cdktf.numberToTerraform(struct.start)
    };
}
function appmeshRouteSpecGrpcRouteMatchMetadataMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        exact: cdktf.stringToTerraform(struct.exact),
        prefix: cdktf.stringToTerraform(struct.prefix),
        regex: cdktf.stringToTerraform(struct.regex),
        suffix: cdktf.stringToTerraform(struct.suffix),
        range: cdktf.listMapper(appmeshRouteSpecGrpcRouteMatchMetadataMatchRangeToTerraform)(struct.range)
    };
}
function appmeshRouteSpecGrpcRouteMatchMetadataToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        invert: cdktf.booleanToTerraform(struct.invert),
        name: cdktf.stringToTerraform(struct.name),
        match: cdktf.listMapper(appmeshRouteSpecGrpcRouteMatchMetadataMatchToTerraform)(struct.match)
    };
}
function appmeshRouteSpecGrpcRouteMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        method_name: cdktf.stringToTerraform(struct.methodName),
        prefix: cdktf.stringToTerraform(struct.prefix),
        service_name: cdktf.stringToTerraform(struct.serviceName),
        metadata: cdktf.listMapper(appmeshRouteSpecGrpcRouteMatchMetadataToTerraform)(struct.metadata)
    };
}
function appmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value)
    };
}
function appmeshRouteSpecGrpcRouteRetryPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        grpc_retry_events: cdktf.listMapper(cdktf.stringToTerraform)(struct.grpcRetryEvents),
        http_retry_events: cdktf.listMapper(cdktf.stringToTerraform)(struct.httpRetryEvents),
        max_retries: cdktf.numberToTerraform(struct.maxRetries),
        tcp_retry_events: cdktf.listMapper(cdktf.stringToTerraform)(struct.tcpRetryEvents),
        per_retry_timeout: cdktf.listMapper(appmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutToTerraform)(struct.perRetryTimeout)
    };
}
function appmeshRouteSpecGrpcRouteTimeoutIdleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value)
    };
}
function appmeshRouteSpecGrpcRouteTimeoutPerRequestToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value)
    };
}
function appmeshRouteSpecGrpcRouteTimeoutToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        idle: cdktf.listMapper(appmeshRouteSpecGrpcRouteTimeoutIdleToTerraform)(struct.idle),
        per_request: cdktf.listMapper(appmeshRouteSpecGrpcRouteTimeoutPerRequestToTerraform)(struct.perRequest)
    };
}
function appmeshRouteSpecGrpcRouteToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        action: cdktf.listMapper(appmeshRouteSpecGrpcRouteActionToTerraform)(struct.action),
        match: cdktf.listMapper(appmeshRouteSpecGrpcRouteMatchToTerraform)(struct.match),
        retry_policy: cdktf.listMapper(appmeshRouteSpecGrpcRouteRetryPolicyToTerraform)(struct.retryPolicy),
        timeout: cdktf.listMapper(appmeshRouteSpecGrpcRouteTimeoutToTerraform)(struct.timeout)
    };
}
function appmeshRouteSpecHttp2RouteActionWeightedTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        virtual_node: cdktf.stringToTerraform(struct.virtualNode),
        weight: cdktf.numberToTerraform(struct.weight)
    };
}
function appmeshRouteSpecHttp2RouteActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        weighted_target: cdktf.listMapper(appmeshRouteSpecHttp2RouteActionWeightedTargetToTerraform)(struct.weightedTarget)
    };
}
function appmeshRouteSpecHttp2RouteMatchHeaderMatchRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        end: cdktf.numberToTerraform(struct.end),
        start: cdktf.numberToTerraform(struct.start)
    };
}
function appmeshRouteSpecHttp2RouteMatchHeaderMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        exact: cdktf.stringToTerraform(struct.exact),
        prefix: cdktf.stringToTerraform(struct.prefix),
        regex: cdktf.stringToTerraform(struct.regex),
        suffix: cdktf.stringToTerraform(struct.suffix),
        range: cdktf.listMapper(appmeshRouteSpecHttp2RouteMatchHeaderMatchRangeToTerraform)(struct.range)
    };
}
function appmeshRouteSpecHttp2RouteMatchHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        invert: cdktf.booleanToTerraform(struct.invert),
        name: cdktf.stringToTerraform(struct.name),
        match: cdktf.listMapper(appmeshRouteSpecHttp2RouteMatchHeaderMatchToTerraform)(struct.match)
    };
}
function appmeshRouteSpecHttp2RouteMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        method: cdktf.stringToTerraform(struct.method),
        prefix: cdktf.stringToTerraform(struct.prefix),
        scheme: cdktf.stringToTerraform(struct.scheme),
        header: cdktf.listMapper(appmeshRouteSpecHttp2RouteMatchHeaderToTerraform)(struct.header)
    };
}
function appmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value)
    };
}
function appmeshRouteSpecHttp2RouteRetryPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        http_retry_events: cdktf.listMapper(cdktf.stringToTerraform)(struct.httpRetryEvents),
        max_retries: cdktf.numberToTerraform(struct.maxRetries),
        tcp_retry_events: cdktf.listMapper(cdktf.stringToTerraform)(struct.tcpRetryEvents),
        per_retry_timeout: cdktf.listMapper(appmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutToTerraform)(struct.perRetryTimeout)
    };
}
function appmeshRouteSpecHttp2RouteTimeoutIdleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value)
    };
}
function appmeshRouteSpecHttp2RouteTimeoutPerRequestToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value)
    };
}
function appmeshRouteSpecHttp2RouteTimeoutToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        idle: cdktf.listMapper(appmeshRouteSpecHttp2RouteTimeoutIdleToTerraform)(struct.idle),
        per_request: cdktf.listMapper(appmeshRouteSpecHttp2RouteTimeoutPerRequestToTerraform)(struct.perRequest)
    };
}
function appmeshRouteSpecHttp2RouteToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        action: cdktf.listMapper(appmeshRouteSpecHttp2RouteActionToTerraform)(struct.action),
        match: cdktf.listMapper(appmeshRouteSpecHttp2RouteMatchToTerraform)(struct.match),
        retry_policy: cdktf.listMapper(appmeshRouteSpecHttp2RouteRetryPolicyToTerraform)(struct.retryPolicy),
        timeout: cdktf.listMapper(appmeshRouteSpecHttp2RouteTimeoutToTerraform)(struct.timeout)
    };
}
function appmeshRouteSpecHttpRouteActionWeightedTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        virtual_node: cdktf.stringToTerraform(struct.virtualNode),
        weight: cdktf.numberToTerraform(struct.weight)
    };
}
function appmeshRouteSpecHttpRouteActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        weighted_target: cdktf.listMapper(appmeshRouteSpecHttpRouteActionWeightedTargetToTerraform)(struct.weightedTarget)
    };
}
function appmeshRouteSpecHttpRouteMatchHeaderMatchRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        end: cdktf.numberToTerraform(struct.end),
        start: cdktf.numberToTerraform(struct.start)
    };
}
function appmeshRouteSpecHttpRouteMatchHeaderMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        exact: cdktf.stringToTerraform(struct.exact),
        prefix: cdktf.stringToTerraform(struct.prefix),
        regex: cdktf.stringToTerraform(struct.regex),
        suffix: cdktf.stringToTerraform(struct.suffix),
        range: cdktf.listMapper(appmeshRouteSpecHttpRouteMatchHeaderMatchRangeToTerraform)(struct.range)
    };
}
function appmeshRouteSpecHttpRouteMatchHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        invert: cdktf.booleanToTerraform(struct.invert),
        name: cdktf.stringToTerraform(struct.name),
        match: cdktf.listMapper(appmeshRouteSpecHttpRouteMatchHeaderMatchToTerraform)(struct.match)
    };
}
function appmeshRouteSpecHttpRouteMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        method: cdktf.stringToTerraform(struct.method),
        prefix: cdktf.stringToTerraform(struct.prefix),
        scheme: cdktf.stringToTerraform(struct.scheme),
        header: cdktf.listMapper(appmeshRouteSpecHttpRouteMatchHeaderToTerraform)(struct.header)
    };
}
function appmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value)
    };
}
function appmeshRouteSpecHttpRouteRetryPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        http_retry_events: cdktf.listMapper(cdktf.stringToTerraform)(struct.httpRetryEvents),
        max_retries: cdktf.numberToTerraform(struct.maxRetries),
        tcp_retry_events: cdktf.listMapper(cdktf.stringToTerraform)(struct.tcpRetryEvents),
        per_retry_timeout: cdktf.listMapper(appmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutToTerraform)(struct.perRetryTimeout)
    };
}
function appmeshRouteSpecHttpRouteTimeoutIdleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value)
    };
}
function appmeshRouteSpecHttpRouteTimeoutPerRequestToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value)
    };
}
function appmeshRouteSpecHttpRouteTimeoutToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        idle: cdktf.listMapper(appmeshRouteSpecHttpRouteTimeoutIdleToTerraform)(struct.idle),
        per_request: cdktf.listMapper(appmeshRouteSpecHttpRouteTimeoutPerRequestToTerraform)(struct.perRequest)
    };
}
function appmeshRouteSpecHttpRouteToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        action: cdktf.listMapper(appmeshRouteSpecHttpRouteActionToTerraform)(struct.action),
        match: cdktf.listMapper(appmeshRouteSpecHttpRouteMatchToTerraform)(struct.match),
        retry_policy: cdktf.listMapper(appmeshRouteSpecHttpRouteRetryPolicyToTerraform)(struct.retryPolicy),
        timeout: cdktf.listMapper(appmeshRouteSpecHttpRouteTimeoutToTerraform)(struct.timeout)
    };
}
function appmeshRouteSpecTcpRouteActionWeightedTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        virtual_node: cdktf.stringToTerraform(struct.virtualNode),
        weight: cdktf.numberToTerraform(struct.weight)
    };
}
function appmeshRouteSpecTcpRouteActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        weighted_target: cdktf.listMapper(appmeshRouteSpecTcpRouteActionWeightedTargetToTerraform)(struct.weightedTarget)
    };
}
function appmeshRouteSpecTcpRouteTimeoutIdleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value)
    };
}
function appmeshRouteSpecTcpRouteTimeoutToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        idle: cdktf.listMapper(appmeshRouteSpecTcpRouteTimeoutIdleToTerraform)(struct.idle)
    };
}
function appmeshRouteSpecTcpRouteToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        action: cdktf.listMapper(appmeshRouteSpecTcpRouteActionToTerraform)(struct.action),
        timeout: cdktf.listMapper(appmeshRouteSpecTcpRouteTimeoutToTerraform)(struct.timeout)
    };
}
function appmeshRouteSpecToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        grpc_route: cdktf.listMapper(appmeshRouteSpecGrpcRouteToTerraform)(struct.grpcRoute),
        http2_route: cdktf.listMapper(appmeshRouteSpecHttp2RouteToTerraform)(struct.http2Route),
        http_route: cdktf.listMapper(appmeshRouteSpecHttpRouteToTerraform)(struct.httpRoute),
        tcp_route: cdktf.listMapper(appmeshRouteSpecTcpRouteToTerraform)(struct.tcpRoute)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html aws_appmesh_route}
*/
var AppmeshRoute = /** @class */ (function (_super) {
    __extends(AppmeshRoute, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html aws_appmesh_route} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppmeshRouteConfig
    */
    function AppmeshRoute(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_appmesh_route',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._meshName = config.meshName;
        _this._meshOwner = config.meshOwner;
        _this._name = config.name;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._virtualRouterName = config.virtualRouterName;
        _this._spec = config.spec;
        return _this;
    }
    Object.defineProperty(AppmeshRoute.prototype, "arn", {
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
    Object.defineProperty(AppmeshRoute.prototype, "createdDate", {
        // created_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshRoute.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshRoute.prototype, "lastUpdatedDate", {
        // last_updated_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_updated_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshRoute.prototype, "meshName", {
        get: function () {
            return this.getStringAttribute('mesh_name');
        },
        set: function (value) {
            this._meshName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshRoute.prototype, "meshNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._meshName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshRoute.prototype, "meshOwner", {
        get: function () {
            return this.getStringAttribute('mesh_owner');
        },
        set: function (value) {
            this._meshOwner = value;
        },
        enumerable: false,
        configurable: true
    });
    AppmeshRoute.prototype.resetMeshOwner = function () {
        this._meshOwner = undefined;
    };
    Object.defineProperty(AppmeshRoute.prototype, "meshOwnerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._meshOwner;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshRoute.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshRoute.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshRoute.prototype, "resourceOwner", {
        // resource_owner - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('resource_owner');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshRoute.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    AppmeshRoute.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(AppmeshRoute.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshRoute.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    AppmeshRoute.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(AppmeshRoute.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshRoute.prototype, "virtualRouterName", {
        get: function () {
            return this.getStringAttribute('virtual_router_name');
        },
        set: function (value) {
            this._virtualRouterName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshRoute.prototype, "virtualRouterNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._virtualRouterName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshRoute.prototype, "spec", {
        get: function () {
            return this.interpolationForAttribute('spec');
        },
        set: function (value) {
            this._spec = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshRoute.prototype, "specInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._spec;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    AppmeshRoute.prototype.synthesizeAttributes = function () {
        return {
            mesh_name: cdktf.stringToTerraform(this._meshName),
            mesh_owner: cdktf.stringToTerraform(this._meshOwner),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            virtual_router_name: cdktf.stringToTerraform(this._virtualRouterName),
            spec: cdktf.listMapper(appmeshRouteSpecToTerraform)(this._spec)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    AppmeshRoute.tfResourceType = "aws_appmesh_route";
    return AppmeshRoute;
}(cdktf.TerraformResource));
exports.AppmeshRoute = AppmeshRoute;
