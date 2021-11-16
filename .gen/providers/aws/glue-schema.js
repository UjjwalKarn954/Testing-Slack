"use strict";
// https://www.terraform.io/docs/providers/aws/r/glue_schema.html
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
exports.GlueSchema = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_schema.html aws_glue_schema}
*/
var GlueSchema = /** @class */ (function (_super) {
    __extends(GlueSchema, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_schema.html aws_glue_schema} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueSchemaConfig
    */
    function GlueSchema(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_glue_schema',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._compatibility = config.compatibility;
        _this._dataFormat = config.dataFormat;
        _this._description = config.description;
        _this._registryArn = config.registryArn;
        _this._schemaDefinition = config.schemaDefinition;
        _this._schemaName = config.schemaName;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(GlueSchema.prototype, "arn", {
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
    Object.defineProperty(GlueSchema.prototype, "compatibility", {
        get: function () {
            return this.getStringAttribute('compatibility');
        },
        set: function (value) {
            this._compatibility = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueSchema.prototype, "compatibilityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._compatibility;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueSchema.prototype, "dataFormat", {
        get: function () {
            return this.getStringAttribute('data_format');
        },
        set: function (value) {
            this._dataFormat = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueSchema.prototype, "dataFormatInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dataFormat;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueSchema.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueSchema.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(GlueSchema.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueSchema.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueSchema.prototype, "latestSchemaVersion", {
        // latest_schema_version - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('latest_schema_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueSchema.prototype, "nextSchemaVersion", {
        // next_schema_version - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('next_schema_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueSchema.prototype, "registryArn", {
        get: function () {
            return this.getStringAttribute('registry_arn');
        },
        set: function (value) {
            this._registryArn = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueSchema.prototype.resetRegistryArn = function () {
        this._registryArn = undefined;
    };
    Object.defineProperty(GlueSchema.prototype, "registryArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._registryArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueSchema.prototype, "registryName", {
        // registry_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('registry_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueSchema.prototype, "schemaCheckpoint", {
        // schema_checkpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('schema_checkpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueSchema.prototype, "schemaDefinition", {
        get: function () {
            return this.getStringAttribute('schema_definition');
        },
        set: function (value) {
            this._schemaDefinition = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueSchema.prototype, "schemaDefinitionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._schemaDefinition;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueSchema.prototype, "schemaName", {
        get: function () {
            return this.getStringAttribute('schema_name');
        },
        set: function (value) {
            this._schemaName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueSchema.prototype, "schemaNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._schemaName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueSchema.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueSchema.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(GlueSchema.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueSchema.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueSchema.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(GlueSchema.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    GlueSchema.prototype.synthesizeAttributes = function () {
        return {
            compatibility: cdktf.stringToTerraform(this._compatibility),
            data_format: cdktf.stringToTerraform(this._dataFormat),
            description: cdktf.stringToTerraform(this._description),
            registry_arn: cdktf.stringToTerraform(this._registryArn),
            schema_definition: cdktf.stringToTerraform(this._schemaDefinition),
            schema_name: cdktf.stringToTerraform(this._schemaName),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    GlueSchema.tfResourceType = "aws_glue_schema";
    return GlueSchema;
}(cdktf.TerraformResource));
exports.GlueSchema = GlueSchema;
