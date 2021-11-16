"use strict";
// https://www.terraform.io/docs/providers/aws/r/glue_connection.html
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
exports.GlueConnection = void 0;
var cdktf = require("cdktf");
function glueConnectionPhysicalConnectionRequirementsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        availability_zone: cdktf.stringToTerraform(struct.availabilityZone),
        security_group_id_list: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroupIdList),
        subnet_id: cdktf.stringToTerraform(struct.subnetId)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_connection.html aws_glue_connection}
*/
var GlueConnection = /** @class */ (function (_super) {
    __extends(GlueConnection, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_connection.html aws_glue_connection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueConnectionConfig
    */
    function GlueConnection(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_glue_connection',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._catalogId = config.catalogId;
        _this._connectionProperties = config.connectionProperties;
        _this._connectionType = config.connectionType;
        _this._description = config.description;
        _this._matchCriteria = config.matchCriteria;
        _this._name = config.name;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._physicalConnectionRequirements = config.physicalConnectionRequirements;
        return _this;
    }
    Object.defineProperty(GlueConnection.prototype, "arn", {
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
    Object.defineProperty(GlueConnection.prototype, "catalogId", {
        get: function () {
            return this.getStringAttribute('catalog_id');
        },
        set: function (value) {
            this._catalogId = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueConnection.prototype.resetCatalogId = function () {
        this._catalogId = undefined;
    };
    Object.defineProperty(GlueConnection.prototype, "catalogIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._catalogId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueConnection.prototype, "connectionProperties", {
        get: function () {
            return this.interpolationForAttribute('connection_properties');
        },
        set: function (value) {
            this._connectionProperties = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueConnection.prototype.resetConnectionProperties = function () {
        this._connectionProperties = undefined;
    };
    Object.defineProperty(GlueConnection.prototype, "connectionPropertiesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._connectionProperties;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueConnection.prototype, "connectionType", {
        get: function () {
            return this.getStringAttribute('connection_type');
        },
        set: function (value) {
            this._connectionType = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueConnection.prototype.resetConnectionType = function () {
        this._connectionType = undefined;
    };
    Object.defineProperty(GlueConnection.prototype, "connectionTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._connectionType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueConnection.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueConnection.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(GlueConnection.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueConnection.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueConnection.prototype, "matchCriteria", {
        get: function () {
            return this.getListAttribute('match_criteria');
        },
        set: function (value) {
            this._matchCriteria = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueConnection.prototype.resetMatchCriteria = function () {
        this._matchCriteria = undefined;
    };
    Object.defineProperty(GlueConnection.prototype, "matchCriteriaInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._matchCriteria;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueConnection.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueConnection.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueConnection.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueConnection.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(GlueConnection.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueConnection.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueConnection.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(GlueConnection.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueConnection.prototype, "physicalConnectionRequirements", {
        get: function () {
            return this.interpolationForAttribute('physical_connection_requirements');
        },
        set: function (value) {
            this._physicalConnectionRequirements = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueConnection.prototype.resetPhysicalConnectionRequirements = function () {
        this._physicalConnectionRequirements = undefined;
    };
    Object.defineProperty(GlueConnection.prototype, "physicalConnectionRequirementsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._physicalConnectionRequirements;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    GlueConnection.prototype.synthesizeAttributes = function () {
        return {
            catalog_id: cdktf.stringToTerraform(this._catalogId),
            connection_properties: cdktf.hashMapper(cdktf.anyToTerraform)(this._connectionProperties),
            connection_type: cdktf.stringToTerraform(this._connectionType),
            description: cdktf.stringToTerraform(this._description),
            match_criteria: cdktf.listMapper(cdktf.stringToTerraform)(this._matchCriteria),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            physical_connection_requirements: cdktf.listMapper(glueConnectionPhysicalConnectionRequirementsToTerraform)(this._physicalConnectionRequirements)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    GlueConnection.tfResourceType = "aws_glue_connection";
    return GlueConnection;
}(cdktf.TerraformResource));
exports.GlueConnection = GlueConnection;
