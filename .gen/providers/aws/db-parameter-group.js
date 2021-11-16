"use strict";
// https://www.terraform.io/docs/providers/aws/r/db_parameter_group.html
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
exports.DbParameterGroup = void 0;
var cdktf = require("cdktf");
function dbParameterGroupParameterToTerraform(struct) {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_parameter_group.html aws_db_parameter_group}
*/
var DbParameterGroup = /** @class */ (function (_super) {
    __extends(DbParameterGroup, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/db_parameter_group.html aws_db_parameter_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DbParameterGroupConfig
    */
    function DbParameterGroup(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_db_parameter_group',
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
    Object.defineProperty(DbParameterGroup.prototype, "arn", {
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
    Object.defineProperty(DbParameterGroup.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    DbParameterGroup.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(DbParameterGroup.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbParameterGroup.prototype, "family", {
        get: function () {
            return this.getStringAttribute('family');
        },
        set: function (value) {
            this._family = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbParameterGroup.prototype, "familyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._family;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbParameterGroup.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbParameterGroup.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    DbParameterGroup.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(DbParameterGroup.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbParameterGroup.prototype, "namePrefix", {
        get: function () {
            return this.getStringAttribute('name_prefix');
        },
        set: function (value) {
            this._namePrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    DbParameterGroup.prototype.resetNamePrefix = function () {
        this._namePrefix = undefined;
    };
    Object.defineProperty(DbParameterGroup.prototype, "namePrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._namePrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbParameterGroup.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DbParameterGroup.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DbParameterGroup.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbParameterGroup.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    DbParameterGroup.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(DbParameterGroup.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbParameterGroup.prototype, "parameter", {
        get: function () {
            return this.interpolationForAttribute('parameter');
        },
        set: function (value) {
            this._parameter = value;
        },
        enumerable: false,
        configurable: true
    });
    DbParameterGroup.prototype.resetParameter = function () {
        this._parameter = undefined;
    };
    Object.defineProperty(DbParameterGroup.prototype, "parameterInput", {
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
    DbParameterGroup.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            family: cdktf.stringToTerraform(this._family),
            name: cdktf.stringToTerraform(this._name),
            name_prefix: cdktf.stringToTerraform(this._namePrefix),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            parameter: cdktf.listMapper(dbParameterGroupParameterToTerraform)(this._parameter)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DbParameterGroup.tfResourceType = "aws_db_parameter_group";
    return DbParameterGroup;
}(cdktf.TerraformResource));
exports.DbParameterGroup = DbParameterGroup;
