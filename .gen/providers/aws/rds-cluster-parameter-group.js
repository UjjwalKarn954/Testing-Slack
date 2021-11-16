"use strict";
// https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group.html
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
exports.RdsClusterParameterGroup = void 0;
var cdktf = require("cdktf");
function rdsClusterParameterGroupParameterToTerraform(struct) {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group.html aws_rds_cluster_parameter_group}
*/
var RdsClusterParameterGroup = /** @class */ (function (_super) {
    __extends(RdsClusterParameterGroup, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group.html aws_rds_cluster_parameter_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RdsClusterParameterGroupConfig
    */
    function RdsClusterParameterGroup(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_rds_cluster_parameter_group',
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
    Object.defineProperty(RdsClusterParameterGroup.prototype, "arn", {
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
    Object.defineProperty(RdsClusterParameterGroup.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsClusterParameterGroup.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(RdsClusterParameterGroup.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsClusterParameterGroup.prototype, "family", {
        get: function () {
            return this.getStringAttribute('family');
        },
        set: function (value) {
            this._family = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsClusterParameterGroup.prototype, "familyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._family;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsClusterParameterGroup.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsClusterParameterGroup.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsClusterParameterGroup.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(RdsClusterParameterGroup.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsClusterParameterGroup.prototype, "namePrefix", {
        get: function () {
            return this.getStringAttribute('name_prefix');
        },
        set: function (value) {
            this._namePrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsClusterParameterGroup.prototype.resetNamePrefix = function () {
        this._namePrefix = undefined;
    };
    Object.defineProperty(RdsClusterParameterGroup.prototype, "namePrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._namePrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsClusterParameterGroup.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsClusterParameterGroup.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(RdsClusterParameterGroup.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsClusterParameterGroup.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsClusterParameterGroup.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(RdsClusterParameterGroup.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdsClusterParameterGroup.prototype, "parameter", {
        get: function () {
            return this.interpolationForAttribute('parameter');
        },
        set: function (value) {
            this._parameter = value;
        },
        enumerable: false,
        configurable: true
    });
    RdsClusterParameterGroup.prototype.resetParameter = function () {
        this._parameter = undefined;
    };
    Object.defineProperty(RdsClusterParameterGroup.prototype, "parameterInput", {
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
    RdsClusterParameterGroup.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            family: cdktf.stringToTerraform(this._family),
            name: cdktf.stringToTerraform(this._name),
            name_prefix: cdktf.stringToTerraform(this._namePrefix),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            parameter: cdktf.listMapper(rdsClusterParameterGroupParameterToTerraform)(this._parameter)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    RdsClusterParameterGroup.tfResourceType = "aws_rds_cluster_parameter_group";
    return RdsClusterParameterGroup;
}(cdktf.TerraformResource));
exports.RdsClusterParameterGroup = RdsClusterParameterGroup;
