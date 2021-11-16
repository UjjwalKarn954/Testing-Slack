"use strict";
// https://www.terraform.io/docs/providers/aws/r/glue_partition_index.html
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
exports.GluePartitionIndex = void 0;
var cdktf = require("cdktf");
function gluePartitionIndexPartitionIndexToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        index_name: cdktf.stringToTerraform(struct.indexName),
        keys: cdktf.listMapper(cdktf.stringToTerraform)(struct.keys)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index.html aws_glue_partition_index}
*/
var GluePartitionIndex = /** @class */ (function (_super) {
    __extends(GluePartitionIndex, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index.html aws_glue_partition_index} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GluePartitionIndexConfig
    */
    function GluePartitionIndex(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_glue_partition_index',
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
        _this._tableName = config.tableName;
        _this._partitionIndex = config.partitionIndex;
        return _this;
    }
    Object.defineProperty(GluePartitionIndex.prototype, "catalogId", {
        get: function () {
            return this.getStringAttribute('catalog_id');
        },
        set: function (value) {
            this._catalogId = value;
        },
        enumerable: false,
        configurable: true
    });
    GluePartitionIndex.prototype.resetCatalogId = function () {
        this._catalogId = undefined;
    };
    Object.defineProperty(GluePartitionIndex.prototype, "catalogIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._catalogId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GluePartitionIndex.prototype, "databaseName", {
        get: function () {
            return this.getStringAttribute('database_name');
        },
        set: function (value) {
            this._databaseName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GluePartitionIndex.prototype, "databaseNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._databaseName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GluePartitionIndex.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GluePartitionIndex.prototype, "tableName", {
        get: function () {
            return this.getStringAttribute('table_name');
        },
        set: function (value) {
            this._tableName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GluePartitionIndex.prototype, "tableNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tableName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GluePartitionIndex.prototype, "partitionIndex", {
        get: function () {
            return this.interpolationForAttribute('partition_index');
        },
        set: function (value) {
            this._partitionIndex = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GluePartitionIndex.prototype, "partitionIndexInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._partitionIndex;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    GluePartitionIndex.prototype.synthesizeAttributes = function () {
        return {
            catalog_id: cdktf.stringToTerraform(this._catalogId),
            database_name: cdktf.stringToTerraform(this._databaseName),
            table_name: cdktf.stringToTerraform(this._tableName),
            partition_index: cdktf.listMapper(gluePartitionIndexPartitionIndexToTerraform)(this._partitionIndex)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    GluePartitionIndex.tfResourceType = "aws_glue_partition_index";
    return GluePartitionIndex;
}(cdktf.TerraformResource));
exports.GluePartitionIndex = GluePartitionIndex;
