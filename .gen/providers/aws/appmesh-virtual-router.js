"use strict";
// https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html
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
exports.AppmeshVirtualRouter = void 0;
var cdktf = require("cdktf");
function appmeshVirtualRouterSpecListenerPortMappingToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        port: cdktf.numberToTerraform(struct.port),
        protocol: cdktf.stringToTerraform(struct.protocol)
    };
}
function appmeshVirtualRouterSpecListenerToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        port_mapping: cdktf.listMapper(appmeshVirtualRouterSpecListenerPortMappingToTerraform)(struct.portMapping)
    };
}
function appmeshVirtualRouterSpecToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        listener: cdktf.listMapper(appmeshVirtualRouterSpecListenerToTerraform)(struct.listener)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html aws_appmesh_virtual_router}
*/
var AppmeshVirtualRouter = /** @class */ (function (_super) {
    __extends(AppmeshVirtualRouter, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html aws_appmesh_virtual_router} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppmeshVirtualRouterConfig
    */
    function AppmeshVirtualRouter(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_appmesh_virtual_router',
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
    Object.defineProperty(AppmeshVirtualRouter.prototype, "arn", {
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
    Object.defineProperty(AppmeshVirtualRouter.prototype, "createdDate", {
        // created_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshVirtualRouter.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshVirtualRouter.prototype, "lastUpdatedDate", {
        // last_updated_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_updated_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshVirtualRouter.prototype, "meshName", {
        get: function () {
            return this.getStringAttribute('mesh_name');
        },
        set: function (value) {
            this._meshName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshVirtualRouter.prototype, "meshNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._meshName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshVirtualRouter.prototype, "meshOwner", {
        get: function () {
            return this.getStringAttribute('mesh_owner');
        },
        set: function (value) {
            this._meshOwner = value;
        },
        enumerable: false,
        configurable: true
    });
    AppmeshVirtualRouter.prototype.resetMeshOwner = function () {
        this._meshOwner = undefined;
    };
    Object.defineProperty(AppmeshVirtualRouter.prototype, "meshOwnerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._meshOwner;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshVirtualRouter.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshVirtualRouter.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshVirtualRouter.prototype, "resourceOwner", {
        // resource_owner - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('resource_owner');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshVirtualRouter.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    AppmeshVirtualRouter.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(AppmeshVirtualRouter.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshVirtualRouter.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    AppmeshVirtualRouter.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(AppmeshVirtualRouter.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshVirtualRouter.prototype, "spec", {
        get: function () {
            return this.interpolationForAttribute('spec');
        },
        set: function (value) {
            this._spec = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshVirtualRouter.prototype, "specInput", {
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
    AppmeshVirtualRouter.prototype.synthesizeAttributes = function () {
        return {
            mesh_name: cdktf.stringToTerraform(this._meshName),
            mesh_owner: cdktf.stringToTerraform(this._meshOwner),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            spec: cdktf.listMapper(appmeshVirtualRouterSpecToTerraform)(this._spec)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    AppmeshVirtualRouter.tfResourceType = "aws_appmesh_virtual_router";
    return AppmeshVirtualRouter;
}(cdktf.TerraformResource));
exports.AppmeshVirtualRouter = AppmeshVirtualRouter;
