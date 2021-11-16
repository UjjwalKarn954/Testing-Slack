"use strict";
// https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group.html
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
exports.DocdbClusterParameterGroup = void 0;
var cdktf = require("cdktf");
function docdbClusterParameterGroupParameterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        apply_method: cdktf.stringToTerraform(struct.applyMethod),
        name: cdktf.stringToTerraform(struct.name),
        value: cdktf.stringToTerraform(struct.value)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group.html aws_docdb_cluster_parameter_group}
*/
var DocdbClusterParameterGroup = /** @class */ (function (_super) {
    __extends(DocdbClusterParameterGroup, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group.html aws_docdb_cluster_parameter_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DocdbClusterParameterGroupConfig
    */
    function DocdbClusterParameterGroup(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_docdb_cluster_parameter_group',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._description = config.description;
        _this._family = config.family;
        _this._name = config.name;
        _this._namePrefix = config.namePrefix;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._parameter = config.parameter;
        return _this;
    }
    Object.defineProperty(DocdbClusterParameterGroup.prototype, "arn", {
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
    Object.defineProperty(DocdbClusterParameterGroup.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    DocdbClusterParameterGroup.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(DocdbClusterParameterGroup.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbClusterParameterGroup.prototype, "family", {
        get: function () {
            return this.getStringAttribute('family');
        },
        set: function (value) {
            this._family = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbClusterParameterGroup.prototype, "familyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._family;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbClusterParameterGroup.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbClusterParameterGroup.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    DocdbClusterParameterGroup.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(DocdbClusterParameterGroup.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbClusterParameterGroup.prototype, "namePrefix", {
        get: function () {
            return this.getStringAttribute('name_prefix');
        },
        set: function (value) {
            this._namePrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    DocdbClusterParameterGroup.prototype.resetNamePrefix = function () {
        this._namePrefix = undefined;
    };
    Object.defineProperty(DocdbClusterParameterGroup.prototype, "namePrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._namePrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbClusterParameterGroup.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DocdbClusterParameterGroup.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DocdbClusterParameterGroup.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbClusterParameterGroup.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    DocdbClusterParameterGroup.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(DocdbClusterParameterGroup.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocdbClusterParameterGroup.prototype, "parameter", {
        get: function () {
            return this.interpolationForAttribute('parameter');
        },
        set: function (value) {
            this._parameter = value;
        },
        enumerable: false,
        configurable: true
    });
    DocdbClusterParameterGroup.prototype.resetParameter = function () {
        this._parameter = undefined;
    };
    Object.defineProperty(DocdbClusterParameterGroup.prototype, "parameterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._parameter;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DocdbClusterParameterGroup.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            family: cdktf.stringToTerraform(this._family),
            name: cdktf.stringToTerraform(this._name),
            name_prefix: cdktf.stringToTerraform(this._namePrefix),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            parameter: cdktf.listMapper(docdbClusterParameterGroupParameterToTerraform)(this._parameter)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DocdbClusterParameterGroup.tfResourceType = "aws_docdb_cluster_parameter_group";
    return DocdbClusterParameterGroup;
}(cdktf.TerraformResource));
exports.DocdbClusterParameterGroup = DocdbClusterParameterGroup;
