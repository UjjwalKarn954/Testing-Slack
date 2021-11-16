"use strict";
// https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html
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
exports.AppmeshVirtualService = void 0;
var cdktf = require("cdktf");
function appmeshVirtualServiceSpecProviderVirtualNodeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        virtual_node_name: cdktf.stringToTerraform(struct.virtualNodeName)
    };
}
function appmeshVirtualServiceSpecProviderVirtualRouterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        virtual_router_name: cdktf.stringToTerraform(struct.virtualRouterName)
    };
}
function appmeshVirtualServiceSpecProviderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        virtual_node: cdktf.listMapper(appmeshVirtualServiceSpecProviderVirtualNodeToTerraform)(struct.virtualNode),
        virtual_router: cdktf.listMapper(appmeshVirtualServiceSpecProviderVirtualRouterToTerraform)(struct.virtualRouter)
    };
}
function appmeshVirtualServiceSpecToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        provider: cdktf.listMapper(appmeshVirtualServiceSpecProviderToTerraform)(struct.provider)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html aws_appmesh_virtual_service}
*/
var AppmeshVirtualService = /** @class */ (function (_super) {
    __extends(AppmeshVirtualService, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html aws_appmesh_virtual_service} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppmeshVirtualServiceConfig
    */
    function AppmeshVirtualService(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_appmesh_virtual_service',
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
        _this._spec = config.spec;
        return _this;
    }
    Object.defineProperty(AppmeshVirtualService.prototype, "arn", {
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
    Object.defineProperty(AppmeshVirtualService.prototype, "createdDate", {
        // created_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshVirtualService.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshVirtualService.prototype, "lastUpdatedDate", {
        // last_updated_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_updated_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshVirtualService.prototype, "meshName", {
        get: function () {
            return this.getStringAttribute('mesh_name');
        },
        set: function (value) {
            this._meshName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshVirtualService.prototype, "meshNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._meshName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshVirtualService.prototype, "meshOwner", {
        get: function () {
            return this.getStringAttribute('mesh_owner');
        },
        set: function (value) {
            this._meshOwner = value;
        },
        enumerable: false,
        configurable: true
    });
    AppmeshVirtualService.prototype.resetMeshOwner = function () {
        this._meshOwner = undefined;
    };
    Object.defineProperty(AppmeshVirtualService.prototype, "meshOwnerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._meshOwner;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshVirtualService.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshVirtualService.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshVirtualService.prototype, "resourceOwner", {
        // resource_owner - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('resource_owner');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshVirtualService.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    AppmeshVirtualService.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(AppmeshVirtualService.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshVirtualService.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    AppmeshVirtualService.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(AppmeshVirtualService.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshVirtualService.prototype, "spec", {
        get: function () {
            return this.interpolationForAttribute('spec');
        },
        set: function (value) {
            this._spec = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshVirtualService.prototype, "specInput", {
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
    AppmeshVirtualService.prototype.synthesizeAttributes = function () {
        return {
            mesh_name: cdktf.stringToTerraform(this._meshName),
            mesh_owner: cdktf.stringToTerraform(this._meshOwner),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            spec: cdktf.listMapper(appmeshVirtualServiceSpecToTerraform)(this._spec)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    AppmeshVirtualService.tfResourceType = "aws_appmesh_virtual_service";
    return AppmeshVirtualService;
}(cdktf.TerraformResource));
exports.AppmeshVirtualService = AppmeshVirtualService;
