"use strict";
// https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html
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
exports.GlueCatalogTable = void 0;
var cdktf = require("cdktf");
function glueCatalogTablePartitionIndexToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        index_name: cdktf.stringToTerraform(struct.indexName),
        keys: cdktf.listMapper(cdktf.stringToTerraform)(struct.keys)
    };
}
function glueCatalogTablePartitionKeysToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comment: cdktf.stringToTerraform(struct.comment),
        name: cdktf.stringToTerraform(struct.name),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function glueCatalogTableStorageDescriptorColumnsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comment: cdktf.stringToTerraform(struct.comment),
        name: cdktf.stringToTerraform(struct.name),
        parameters: cdktf.hashMapper(cdktf.anyToTerraform)(struct.parameters),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function glueCatalogTableStorageDescriptorSchemaReferenceSchemaIdToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        registry_name: cdktf.stringToTerraform(struct.registryName),
        schema_arn: cdktf.stringToTerraform(struct.schemaArn),
        schema_name: cdktf.stringToTerraform(struct.schemaName)
    };
}
function glueCatalogTableStorageDescriptorSchemaReferenceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        schema_version_id: cdktf.stringToTerraform(struct.schemaVersionId),
        schema_version_number: cdktf.numberToTerraform(struct.schemaVersionNumber),
        schema_id: cdktf.listMapper(glueCatalogTableStorageDescriptorSchemaReferenceSchemaIdToTerraform)(struct.schemaId)
    };
}
function glueCatalogTableStorageDescriptorSerDeInfoToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        parameters: cdktf.hashMapper(cdktf.anyToTerraform)(struct.parameters),
        serialization_library: cdktf.stringToTerraform(struct.serializationLibrary)
    };
}
function glueCatalogTableStorageDescriptorSkewedInfoToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        skewed_column_names: cdktf.listMapper(cdktf.stringToTerraform)(struct.skewedColumnNames),
        skewed_column_value_location_maps: cdktf.hashMapper(cdktf.anyToTerraform)(struct.skewedColumnValueLocationMaps),
        skewed_column_values: cdktf.listMapper(cdktf.stringToTerraform)(struct.skewedColumnValues)
    };
}
function glueCatalogTableStorageDescriptorSortColumnsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        column: cdktf.stringToTerraform(struct.column),
        sort_order: cdktf.numberToTerraform(struct.sortOrder)
    };
}
function glueCatalogTableStorageDescriptorToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket_columns: cdktf.listMapper(cdktf.stringToTerraform)(struct.bucketColumns),
        compressed: cdktf.booleanToTerraform(struct.compressed),
        input_format: cdktf.stringToTerraform(struct.inputFormat),
        location: cdktf.stringToTerraform(struct.location),
        number_of_buckets: cdktf.numberToTerraform(struct.numberOfBuckets),
        output_format: cdktf.stringToTerraform(struct.outputFormat),
        parameters: cdktf.hashMapper(cdktf.anyToTerraform)(struct.parameters),
        stored_as_sub_directories: cdktf.booleanToTerraform(struct.storedAsSubDirectories),
        columns: cdktf.listMapper(glueCatalogTableStorageDescriptorColumnsToTerraform)(struct.columns),
        schema_reference: cdktf.listMapper(glueCatalogTableStorageDescriptorSchemaReferenceToTerraform)(struct.schemaReference),
        ser_de_info: cdktf.listMapper(glueCatalogTableStorageDescriptorSerDeInfoToTerraform)(struct.serDeInfo),
        skewed_info: cdktf.listMapper(glueCatalogTableStorageDescriptorSkewedInfoToTerraform)(struct.skewedInfo),
        sort_columns: cdktf.listMapper(glueCatalogTableStorageDescriptorSortColumnsToTerraform)(struct.sortColumns)
    };
}
function glueCatalogTableTargetTableToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        catalog_id: cdktf.stringToTerraform(struct.catalogId),
        database_name: cdktf.stringToTerraform(struct.databaseName),
        name: cdktf.stringToTerraform(struct.name)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html aws_glue_catalog_table}
*/
var GlueCatalogTable = /** @class */ (function (_super) {
    __extends(GlueCatalogTable, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html aws_glue_catalog_table} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueCatalogTableConfig
    */
    function GlueCatalogTable(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_glue_catalog_table',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._catalogId = config.catalogId;
        _this._databaseName = config.databaseName;
        _this._description = config.description;
        _this._name = config.name;
        _this._owner = config.owner;
        _this._parameters = config.parameters;
        _this._retention = config.retention;
        _this._tableType = config.tableType;
        _this._viewExpandedText = config.viewExpandedText;
        _this._viewOriginalText = config.viewOriginalText;
        _this._partitionIndex = config.partitionIndex;
        _this._partitionKeys = config.partitionKeys;
        _this._storageDescriptor = config.storageDescriptor;
        _this._targetTable = config.targetTable;
        return _this;
    }
    Object.defineProperty(GlueCatalogTable.prototype, "arn", {
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
    Object.defineProperty(GlueCatalogTable.prototype, "catalogId", {
        get: function () {
            return this.getStringAttribute('catalog_id');
        },
        set: function (value) {
            this._catalogId = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueCatalogTable.prototype.resetCatalogId = function () {
        this._catalogId = undefined;
    };
    Object.defineProperty(GlueCatalogTable.prototype, "catalogIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._catalogId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueCatalogTable.prototype, "databaseName", {
        get: function () {
            return this.getStringAttribute('database_name');
        },
        set: function (value) {
            this._databaseName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueCatalogTable.prototype, "databaseNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._databaseName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueCatalogTable.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueCatalogTable.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(GlueCatalogTable.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueCatalogTable.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueCatalogTable.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueCatalogTable.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueCatalogTable.prototype, "owner", {
        get: function () {
            return this.getStringAttribute('owner');
        },
        set: function (value) {
            this._owner = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueCatalogTable.prototype.resetOwner = function () {
        this._owner = undefined;
    };
    Object.defineProperty(GlueCatalogTable.prototype, "ownerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._owner;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueCatalogTable.prototype, "parameters", {
        get: function () {
            return this.interpolationForAttribute('parameters');
        },
        set: function (value) {
            this._parameters = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueCatalogTable.prototype.resetParameters = function () {
        this._parameters = undefined;
    };
    Object.defineProperty(GlueCatalogTable.prototype, "parametersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._parameters;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueCatalogTable.prototype, "retention", {
        get: function () {
            return this.getNumberAttribute('retention');
        },
        set: function (value) {
            this._retention = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueCatalogTable.prototype.resetRetention = function () {
        this._retention = undefined;
    };
    Object.defineProperty(GlueCatalogTable.prototype, "retentionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._retention;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueCatalogTable.prototype, "tableType", {
        get: function () {
            return this.getStringAttribute('table_type');
        },
        set: function (value) {
            this._tableType = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueCatalogTable.prototype.resetTableType = function () {
        this._tableType = undefined;
    };
    Object.defineProperty(GlueCatalogTable.prototype, "tableTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tableType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueCatalogTable.prototype, "viewExpandedText", {
        get: function () {
            return this.getStringAttribute('view_expanded_text');
        },
        set: function (value) {
            this._viewExpandedText = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueCatalogTable.prototype.resetViewExpandedText = function () {
        this._viewExpandedText = undefined;
    };
    Object.defineProperty(GlueCatalogTable.prototype, "viewExpandedTextInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._viewExpandedText;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueCatalogTable.prototype, "viewOriginalText", {
        get: function () {
            return this.getStringAttribute('view_original_text');
        },
        set: function (value) {
            this._viewOriginalText = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueCatalogTable.prototype.resetViewOriginalText = function () {
        this._viewOriginalText = undefined;
    };
    Object.defineProperty(GlueCatalogTable.prototype, "viewOriginalTextInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._viewOriginalText;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueCatalogTable.prototype, "partitionIndex", {
        get: function () {
            return this.interpolationForAttribute('partition_index');
        },
        set: function (value) {
            this._partitionIndex = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueCatalogTable.prototype.resetPartitionIndex = function () {
        this._partitionIndex = undefined;
    };
    Object.defineProperty(GlueCatalogTable.prototype, "partitionIndexInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._partitionIndex;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueCatalogTable.prototype, "partitionKeys", {
        get: function () {
            return this.interpolationForAttribute('partition_keys');
        },
        set: function (value) {
            this._partitionKeys = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueCatalogTable.prototype.resetPartitionKeys = function () {
        this._partitionKeys = undefined;
    };
    Object.defineProperty(GlueCatalogTable.prototype, "partitionKeysInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._partitionKeys;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueCatalogTable.prototype, "storageDescriptor", {
        get: function () {
            return this.interpolationForAttribute('storage_descriptor');
        },
        set: function (value) {
            this._storageDescriptor = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueCatalogTable.prototype.resetStorageDescriptor = function () {
        this._storageDescriptor = undefined;
    };
    Object.defineProperty(GlueCatalogTable.prototype, "storageDescriptorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._storageDescriptor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueCatalogTable.prototype, "targetTable", {
        get: function () {
            return this.interpolationForAttribute('target_table');
        },
        set: function (value) {
            this._targetTable = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueCatalogTable.prototype.resetTargetTable = function () {
        this._targetTable = undefined;
    };
    Object.defineProperty(GlueCatalogTable.prototype, "targetTableInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetTable;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    GlueCatalogTable.prototype.synthesizeAttributes = function () {
        return {
            catalog_id: cdktf.stringToTerraform(this._catalogId),
            database_name: cdktf.stringToTerraform(this._databaseName),
            description: cdktf.stringToTerraform(this._description),
            name: cdktf.stringToTerraform(this._name),
            owner: cdktf.stringToTerraform(this._owner),
            parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
            retention: cdktf.numberToTerraform(this._retention),
            table_type: cdktf.stringToTerraform(this._tableType),
            view_expanded_text: cdktf.stringToTerraform(this._viewExpandedText),
            view_original_text: cdktf.stringToTerraform(this._viewOriginalText),
            partition_index: cdktf.listMapper(glueCatalogTablePartitionIndexToTerraform)(this._partitionIndex),
            partition_keys: cdktf.listMapper(glueCatalogTablePartitionKeysToTerraform)(this._partitionKeys),
            storage_descriptor: cdktf.listMapper(glueCatalogTableStorageDescriptorToTerraform)(this._storageDescriptor),
            target_table: cdktf.listMapper(glueCatalogTableTargetTableToTerraform)(this._targetTable)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    GlueCatalogTable.tfResourceType = "aws_glue_catalog_table";
    return GlueCatalogTable;
}(cdktf.TerraformResource));
exports.GlueCatalogTable = GlueCatalogTable;
