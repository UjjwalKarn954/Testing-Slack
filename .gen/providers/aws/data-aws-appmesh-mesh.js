"use strict";
// https://www.terraform.io/docs/providers/aws/d/appmesh_mesh.html
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
exports.DataAwsAppmeshMesh = exports.DataAwsAppmeshMeshSpec = exports.DataAwsAppmeshMeshSpecEgressFilter = void 0;
var cdktf = require("cdktf");
var DataAwsAppmeshMeshSpecEgressFilter = /** @class */ (function (_super) {
    __extends(DataAwsAppmeshMeshSpecEgressFilter, _super);
    function DataAwsAppmeshMeshSpecEgressFilter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsAppmeshMeshSpecEgressFilter.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsAppmeshMeshSpecEgressFilter;
}(cdktf.ComplexComputedList));
exports.DataAwsAppmeshMeshSpecEgressFilter = DataAwsAppmeshMeshSpecEgressFilter;
var DataAwsAppmeshMeshSpec = /** @class */ (function (_super) {
    __extends(DataAwsAppmeshMeshSpec, _super);
    function DataAwsAppmeshMeshSpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsAppmeshMeshSpec.prototype, "egressFilter", {
        // egress_filter - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('egress_filter');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsAppmeshMeshSpec;
}(cdktf.ComplexComputedList));
exports.DataAwsAppmeshMeshSpec = DataAwsAppmeshMeshSpec;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/appmesh_mesh.html aws_appmesh_mesh}
*/
var DataAwsAppmeshMesh = /** @class */ (function (_super) {
    __extends(DataAwsAppmeshMesh, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/appmesh_mesh.html aws_appmesh_mesh} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAppmeshMeshConfig
    */
    function DataAwsAppmeshMesh(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_appmesh_mesh',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._meshOwner = config.meshOwner;
        _this._name = config.name;
        _this._tags = config.tags;
        return _this;
    }
    Object.defineProperty(DataAwsAppmeshMesh.prototype, "arn", {
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
    Object.defineProperty(DataAwsAppmeshMesh.prototype, "createdDate", {
        // created_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAppmeshMesh.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAppmeshMesh.prototype, "lastUpdatedDate", {
        // last_updated_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_updated_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAppmeshMesh.prototype, "meshOwner", {
        get: function () {
            return this.getStringAttribute('mesh_owner');
        },
        set: function (value) {
            this._meshOwner = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsAppmeshMesh.prototype.resetMeshOwner = function () {
        this._meshOwner = undefined;
    };
    Object.defineProperty(DataAwsAppmeshMesh.prototype, "meshOwnerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._meshOwner;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAppmeshMesh.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAppmeshMesh.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAppmeshMesh.prototype, "resourceOwner", {
        // resource_owner - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('resource_owner');
        },
        enumerable: false,
        configurable: true
    });
    // spec - computed: true, optional: false, required: false
    DataAwsAppmeshMesh.prototype.spec = function (index) {
        return new DataAwsAppmeshMeshSpec(this, 'spec', index);
    };
    Object.defineProperty(DataAwsAppmeshMesh.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsAppmeshMesh.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsAppmeshMesh.prototype, "tagsInput", {
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
    DataAwsAppmeshMesh.prototype.synthesizeAttributes = function () {
        return {
            mesh_owner: cdktf.stringToTerraform(this._meshOwner),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsAppmeshMesh.tfResourceType = "aws_appmesh_mesh";
    return DataAwsAppmeshMesh;
}(cdktf.TerraformDataSource));
exports.DataAwsAppmeshMesh = DataAwsAppmeshMesh;
