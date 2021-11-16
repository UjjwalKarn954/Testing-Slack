"use strict";
// https://www.terraform.io/docs/providers/aws/r/timestreamwrite_table.html
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
exports.TimestreamwriteTable = void 0;
var cdktf = require("cdktf");
function timestreamwriteTableRetentionPropertiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        magnetic_store_retention_period_in_days: cdktf.numberToTerraform(struct.magneticStoreRetentionPeriodInDays),
        memory_store_retention_period_in_hours: cdktf.numberToTerraform(struct.memoryStoreRetentionPeriodInHours)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/timestreamwrite_table.html aws_timestreamwrite_table}
*/
var TimestreamwriteTable = /** @class */ (function (_super) {
    __extends(TimestreamwriteTable, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/timestreamwrite_table.html aws_timestreamwrite_table} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TimestreamwriteTableConfig
    */
    function TimestreamwriteTable(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_timestreamwrite_table',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._databaseName = config.databaseName;
        _this._tableName = config.tableName;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._retentionProperties = config.retentionProperties;
        return _this;
    }
    Object.defineProperty(TimestreamwriteTable.prototype, "arn", {
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
    Object.defineProperty(TimestreamwriteTable.prototype, "databaseName", {
        get: function () {
            return this.getStringAttribute('database_name');
        },
        set: function (value) {
            this._databaseName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimestreamwriteTable.prototype, "databaseNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._databaseName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimestreamwriteTable.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimestreamwriteTable.prototype, "tableName", {
        get: function () {
            return this.getStringAttribute('table_name');
        },
        set: function (value) {
            this._tableName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimestreamwriteTable.prototype, "tableNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tableName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimestreamwriteTable.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    TimestreamwriteTable.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(TimestreamwriteTable.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimestreamwriteTable.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    TimestreamwriteTable.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(TimestreamwriteTable.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimestreamwriteTable.prototype, "retentionProperties", {
        get: function () {
            return this.interpolationForAttribute('retention_properties');
        },
        set: function (value) {
            this._retentionProperties = value;
        },
        enumerable: false,
        configurable: true
    });
    TimestreamwriteTable.prototype.resetRetentionProperties = function () {
        this._retentionProperties = undefined;
    };
    Object.defineProperty(TimestreamwriteTable.prototype, "retentionPropertiesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._retentionProperties;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    TimestreamwriteTable.prototype.synthesizeAttributes = function () {
        return {
            database_name: cdktf.stringToTerraform(this._databaseName),
            table_name: cdktf.stringToTerraform(this._tableName),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            retention_properties: cdktf.listMapper(timestreamwriteTableRetentionPropertiesToTerraform)(this._retentionProperties)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    TimestreamwriteTable.tfResourceType = "aws_timestreamwrite_table";
    return TimestreamwriteTable;
}(cdktf.TerraformResource));
exports.TimestreamwriteTable = TimestreamwriteTable;
