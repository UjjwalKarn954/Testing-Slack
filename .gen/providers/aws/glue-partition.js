"use strict";
// https://www.terraform.io/docs/providers/aws/r/glue_partition.html
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
exports.GluePartition = void 0;
var cdktf = require("cdktf");
function gluePartitionStorageDescriptorColumnsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comment: cdktf.stringToTerraform(struct.comment),
        name: cdktf.stringToTerraform(struct.name),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function gluePartitionStorageDescriptorSerDeInfoToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        parameters: cdktf.hashMapper(cdktf.anyToTerraform)(struct.parameters),
        serialization_library: cdktf.stringToTerraform(struct.serializationLibrary)
    };
}
function gluePartitionStorageDescriptorSkewedInfoToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        skewed_column_names: cdktf.listMapper(cdktf.stringToTerraform)(struct.skewedColumnNames),
        skewed_column_value_location_maps: cdktf.hashMapper(cdktf.anyToTerraform)(struct.skewedColumnValueLocationMaps),
        skewed_column_values: cdktf.listMapper(cdktf.stringToTerraform)(struct.skewedColumnValues)
    };
}
function gluePartitionStorageDescriptorSortColumnsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        column: cdktf.stringToTerraform(struct.column),
        sort_order: cdktf.numberToTerraform(struct.sortOrder)
    };
}
function gluePartitionStorageDescriptorToTerraform(struct) {
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
        columns: cdktf.listMapper(gluePartitionStorageDescriptorColumnsToTerraform)(struct.columns),
        ser_de_info: cdktf.listMapper(gluePartitionStorageDescriptorSerDeInfoToTerraform)(struct.serDeInfo),
        skewed_info: cdktf.listMapper(gluePartitionStorageDescriptorSkewedInfoToTerraform)(struct.skewedInfo),
        sort_columns: cdktf.listMapper(gluePartitionStorageDescriptorSortColumnsToTerraform)(struct.sortColumns)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html aws_glue_partition}
*/
var GluePartition = /** @class */ (function (_super) {
    __extends(GluePartition, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html aws_glue_partition} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GluePartitionConfig
    */
    function GluePartition(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_glue_partition',
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
        _this._parameters = config.parameters;
        _this._partitionValues = config.partitionValues;
        _this._tableName = config.tableName;
        _this._storageDescriptor = config.storageDescriptor;
        return _this;
    }
    Object.defineProperty(GluePartition.prototype, "catalogId", {
        get: function () {
            return this.getStringAttribute('catalog_id');
        },
        set: function (value) {
            this._catalogId = value;
        },
        enumerable: false,
        configurable: true
    });
    GluePartition.prototype.resetCatalogId = function () {
        this._catalogId = undefined;
    };
    Object.defineProperty(GluePartition.prototype, "catalogIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._catalogId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GluePartition.prototype, "creationTime", {
        // creation_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('creation_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GluePartition.prototype, "databaseName", {
        get: function () {
            return this.getStringAttribute('database_name');
        },
        set: function (value) {
            this._databaseName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GluePartition.prototype, "databaseNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._databaseName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GluePartition.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GluePartition.prototype, "lastAccessedTime", {
        // last_accessed_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_accessed_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GluePartition.prototype, "lastAnalyzedTime", {
        // last_analyzed_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_analyzed_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GluePartition.prototype, "parameters", {
        get: function () {
            return this.interpolationForAttribute('parameters');
        },
        set: function (value) {
            this._parameters = value;
        },
        enumerable: false,
        configurable: true
    });
    GluePartition.prototype.resetParameters = function () {
        this._parameters = undefined;
    };
    Object.defineProperty(GluePartition.prototype, "parametersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._parameters;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GluePartition.prototype, "partitionValues", {
        get: function () {
            return this.getListAttribute('partition_values');
        },
        set: function (value) {
            this._partitionValues = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GluePartition.prototype, "partitionValuesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._partitionValues;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GluePartition.prototype, "tableName", {
        get: function () {
            return this.getStringAttribute('table_name');
        },
        set: function (value) {
            this._tableName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GluePartition.prototype, "tableNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tableName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GluePartition.prototype, "storageDescriptor", {
        get: function () {
            return this.interpolationForAttribute('storage_descriptor');
        },
        set: function (value) {
            this._storageDescriptor = value;
        },
        enumerable: false,
        configurable: true
    });
    GluePartition.prototype.resetStorageDescriptor = function () {
        this._storageDescriptor = undefined;
    };
    Object.defineProperty(GluePartition.prototype, "storageDescriptorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._storageDescriptor;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    GluePartition.prototype.synthesizeAttributes = function () {
        return {
            catalog_id: cdktf.stringToTerraform(this._catalogId),
            database_name: cdktf.stringToTerraform(this._databaseName),
            parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
            partition_values: cdktf.listMapper(cdktf.stringToTerraform)(this._partitionValues),
            table_name: cdktf.stringToTerraform(this._tableName),
            storage_descriptor: cdktf.listMapper(gluePartitionStorageDescriptorToTerraform)(this._storageDescriptor)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    GluePartition.tfResourceType = "aws_glue_partition";
    return GluePartition;
}(cdktf.TerraformResource));
exports.GluePartition = GluePartition;
