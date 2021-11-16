"use strict";
// https://www.terraform.io/docs/providers/aws/d/appmesh_virtual_service.html
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
exports.DataAwsAppmeshVirtualService = exports.DataAwsAppmeshVirtualServiceSpec = exports.DataAwsAppmeshVirtualServiceSpecProvider = exports.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouter = exports.DataAwsAppmeshVirtualServiceSpecProviderVirtualNode = void 0;
var cdktf = require("cdktf");
var DataAwsAppmeshVirtualServiceSpecProviderVirtualNode = /** @class */ (function (_super) {
    __extends(DataAwsAppmeshVirtualServiceSpecProviderVirtualNode, _super);
    function DataAwsAppmeshVirtualServiceSpecProviderVirtualNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsAppmeshVirtualServiceSpecProviderVirtualNode.prototype, "virtualNodeName", {
        // virtual_node_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('virtual_node_name');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsAppmeshVirtualServiceSpecProviderVirtualNode;
}(cdktf.ComplexComputedList));
exports.DataAwsAppmeshVirtualServiceSpecProviderVirtualNode = DataAwsAppmeshVirtualServiceSpecProviderVirtualNode;
var DataAwsAppmeshVirtualServiceSpecProviderVirtualRouter = /** @class */ (function (_super) {
    __extends(DataAwsAppmeshVirtualServiceSpecProviderVirtualRouter, _super);
    function DataAwsAppmeshVirtualServiceSpecProviderVirtualRouter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsAppmeshVirtualServiceSpecProviderVirtualRouter.prototype, "virtualRouterName", {
        // virtual_router_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('virtual_router_name');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsAppmeshVirtualServiceSpecProviderVirtualRouter;
}(cdktf.ComplexComputedList));
exports.DataAwsAppmeshVirtualServiceSpecProviderVirtualRouter = DataAwsAppmeshVirtualServiceSpecProviderVirtualRouter;
var DataAwsAppmeshVirtualServiceSpecProvider = /** @class */ (function (_super) {
    __extends(DataAwsAppmeshVirtualServiceSpecProvider, _super);
    function DataAwsAppmeshVirtualServiceSpecProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsAppmeshVirtualServiceSpecProvider.prototype, "virtualNode", {
        // virtual_node - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('virtual_node');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAppmeshVirtualServiceSpecProvider.prototype, "virtualRouter", {
        // virtual_router - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('virtual_router');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsAppmeshVirtualServiceSpecProvider;
}(cdktf.ComplexComputedList));
exports.DataAwsAppmeshVirtualServiceSpecProvider = DataAwsAppmeshVirtualServiceSpecProvider;
var DataAwsAppmeshVirtualServiceSpec = /** @class */ (function (_super) {
    __extends(DataAwsAppmeshVirtualServiceSpec, _super);
    function DataAwsAppmeshVirtualServiceSpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsAppmeshVirtualServiceSpec.prototype, "provider", {
        // provider - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('provider');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsAppmeshVirtualServiceSpec;
}(cdktf.ComplexComputedList));
exports.DataAwsAppmeshVirtualServiceSpec = DataAwsAppmeshVirtualServiceSpec;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/appmesh_virtual_service.html aws_appmesh_virtual_service}
*/
var DataAwsAppmeshVirtualService = /** @class */ (function (_super) {
    __extends(DataAwsAppmeshVirtualService, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/appmesh_virtual_service.html aws_appmesh_virtual_service} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAppmeshVirtualServiceConfig
    */
    function DataAwsAppmeshVirtualService(scope, id, config) {
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
        return _this;
    }
    Object.defineProperty(DataAwsAppmeshVirtualService.prototype, "arn", {
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
    Object.defineProperty(DataAwsAppmeshVirtualService.prototype, "createdDate", {
        // created_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAppmeshVirtualService.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAppmeshVirtualService.prototype, "lastUpdatedDate", {
        // last_updated_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_updated_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAppmeshVirtualService.prototype, "meshName", {
        get: function () {
            return this.getStringAttribute('mesh_name');
        },
        set: function (value) {
            this._meshName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAppmeshVirtualService.prototype, "meshNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._meshName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAppmeshVirtualService.prototype, "meshOwner", {
        get: function () {
            return this.getStringAttribute('mesh_owner');
        },
        set: function (value) {
            this._meshOwner = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsAppmeshVirtualService.prototype.resetMeshOwner = function () {
        this._meshOwner = undefined;
    };
    Object.defineProperty(DataAwsAppmeshVirtualService.prototype, "meshOwnerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._meshOwner;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAppmeshVirtualService.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAppmeshVirtualService.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAppmeshVirtualService.prototype, "resourceOwner", {
        // resource_owner - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('resource_owner');
        },
        enumerable: false,
        configurable: true
    });
    // spec - computed: true, optional: false, required: false
    DataAwsAppmeshVirtualService.prototype.spec = function (index) {
        return new DataAwsAppmeshVirtualServiceSpec(this, 'spec', index);
    };
    Object.defineProperty(DataAwsAppmeshVirtualService.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsAppmeshVirtualService.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsAppmeshVirtualService.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsAppmeshVirtualService.prototype.synthesizeAttributes = function () {
        return {
            mesh_name: cdktf.stringToTerraform(this._meshName),
            mesh_owner: cdktf.stringToTerraform(this._meshOwner),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsAppmeshVirtualService.tfResourceType = "aws_appmesh_virtual_service";
    return DataAwsAppmeshVirtualService;
}(cdktf.TerraformDataSource));
exports.DataAwsAppmeshVirtualService = DataAwsAppmeshVirtualService;
