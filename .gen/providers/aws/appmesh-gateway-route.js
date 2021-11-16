"use strict";
// https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html
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
exports.AppmeshGatewayRoute = void 0;
var cdktf = require("cdktf");
function appmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        virtual_service_name: cdktf.stringToTerraform(struct.virtualServiceName)
    };
}
function appmeshGatewayRouteSpecGrpcRouteActionTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        virtual_service: cdktf.listMapper(appmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceToTerraform)(struct.virtualService)
    };
}
function appmeshGatewayRouteSpecGrpcRouteActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        target: cdktf.listMapper(appmeshGatewayRouteSpecGrpcRouteActionTargetToTerraform)(struct.target)
    };
}
function appmeshGatewayRouteSpecGrpcRouteMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        service_name: cdktf.stringToTerraform(struct.serviceName)
    };
}
function appmeshGatewayRouteSpecGrpcRouteToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        action: cdktf.listMapper(appmeshGatewayRouteSpecGrpcRouteActionToTerraform)(struct.action),
        match: cdktf.listMapper(appmeshGatewayRouteSpecGrpcRouteMatchToTerraform)(struct.match)
    };
}
function appmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        virtual_service_name: cdktf.stringToTerraform(struct.virtualServiceName)
    };
}
function appmeshGatewayRouteSpecHttp2RouteActionTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        virtual_service: cdktf.listMapper(appmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceToTerraform)(struct.virtualService)
    };
}
function appmeshGatewayRouteSpecHttp2RouteActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        target: cdktf.listMapper(appmeshGatewayRouteSpecHttp2RouteActionTargetToTerraform)(struct.target)
    };
}
function appmeshGatewayRouteSpecHttp2RouteMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        prefix: cdktf.stringToTerraform(struct.prefix)
    };
}
function appmeshGatewayRouteSpecHttp2RouteToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        action: cdktf.listMapper(appmeshGatewayRouteSpecHttp2RouteActionToTerraform)(struct.action),
        match: cdktf.listMapper(appmeshGatewayRouteSpecHttp2RouteMatchToTerraform)(struct.match)
    };
}
function appmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        virtual_service_name: cdktf.stringToTerraform(struct.virtualServiceName)
    };
}
function appmeshGatewayRouteSpecHttpRouteActionTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        virtual_service: cdktf.listMapper(appmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceToTerraform)(struct.virtualService)
    };
}
function appmeshGatewayRouteSpecHttpRouteActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        target: cdktf.listMapper(appmeshGatewayRouteSpecHttpRouteActionTargetToTerraform)(struct.target)
    };
}
function appmeshGatewayRouteSpecHttpRouteMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        prefix: cdktf.stringToTerraform(struct.prefix)
    };
}
function appmeshGatewayRouteSpecHttpRouteToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        action: cdktf.listMapper(appmeshGatewayRouteSpecHttpRouteActionToTerraform)(struct.action),
        match: cdktf.listMapper(appmeshGatewayRouteSpecHttpRouteMatchToTerraform)(struct.match)
    };
}
function appmeshGatewayRouteSpecToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        grpc_route: cdktf.listMapper(appmeshGatewayRouteSpecGrpcRouteToTerraform)(struct.grpcRoute),
        http2_route: cdktf.listMapper(appmeshGatewayRouteSpecHttp2RouteToTerraform)(struct.http2Route),
        http_route: cdktf.listMapper(appmeshGatewayRouteSpecHttpRouteToTerraform)(struct.httpRoute)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html aws_appmesh_gateway_route}
*/
var AppmeshGatewayRoute = /** @class */ (function (_super) {
    __extends(AppmeshGatewayRoute, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html aws_appmesh_gateway_route} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppmeshGatewayRouteConfig
    */
    function AppmeshGatewayRoute(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_appmesh_gateway_route',
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
        _this._virtualGatewayName = config.virtualGatewayName;
        _this._spec = config.spec;
        return _this;
    }
    Object.defineProperty(AppmeshGatewayRoute.prototype, "arn", {
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
    Object.defineProperty(AppmeshGatewayRoute.prototype, "createdDate", {
        // created_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshGatewayRoute.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshGatewayRoute.prototype, "lastUpdatedDate", {
        // last_updated_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_updated_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshGatewayRoute.prototype, "meshName", {
        get: function () {
            return this.getStringAttribute('mesh_name');
        },
        set: function (value) {
            this._meshName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshGatewayRoute.prototype, "meshNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._meshName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshGatewayRoute.prototype, "meshOwner", {
        get: function () {
            return this.getStringAttribute('mesh_owner');
        },
        set: function (value) {
            this._meshOwner = value;
        },
        enumerable: false,
        configurable: true
    });
    AppmeshGatewayRoute.prototype.resetMeshOwner = function () {
        this._meshOwner = undefined;
    };
    Object.defineProperty(AppmeshGatewayRoute.prototype, "meshOwnerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._meshOwner;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshGatewayRoute.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshGatewayRoute.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshGatewayRoute.prototype, "resourceOwner", {
        // resource_owner - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('resource_owner');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshGatewayRoute.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    AppmeshGatewayRoute.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(AppmeshGatewayRoute.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshGatewayRoute.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    AppmeshGatewayRoute.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(AppmeshGatewayRoute.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshGatewayRoute.prototype, "virtualGatewayName", {
        get: function () {
            return this.getStringAttribute('virtual_gateway_name');
        },
        set: function (value) {
            this._virtualGatewayName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshGatewayRoute.prototype, "virtualGatewayNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._virtualGatewayName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshGatewayRoute.prototype, "spec", {
        get: function () {
            return this.interpolationForAttribute('spec');
        },
        set: function (value) {
            this._spec = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshGatewayRoute.prototype, "specInput", {
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
    AppmeshGatewayRoute.prototype.synthesizeAttributes = function () {
        return {
            mesh_name: cdktf.stringToTerraform(this._meshName),
            mesh_owner: cdktf.stringToTerraform(this._meshOwner),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            virtual_gateway_name: cdktf.stringToTerraform(this._virtualGatewayName),
            spec: cdktf.listMapper(appmeshGatewayRouteSpecToTerraform)(this._spec)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    AppmeshGatewayRoute.tfResourceType = "aws_appmesh_gateway_route";
    return AppmeshGatewayRoute;
}(cdktf.TerraformResource));
exports.AppmeshGatewayRoute = AppmeshGatewayRoute;
