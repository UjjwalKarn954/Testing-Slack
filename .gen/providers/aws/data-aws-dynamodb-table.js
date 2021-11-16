"use strict";
// https://www.terraform.io/docs/providers/aws/d/dynamodb_table.html
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
exports.DataAwsDynamodbTable = exports.DataAwsDynamodbTableTtl = exports.DataAwsDynamodbTableReplica = exports.DataAwsDynamodbTablePointInTimeRecovery = exports.DataAwsDynamodbTableLocalSecondaryIndex = exports.DataAwsDynamodbTableGlobalSecondaryIndex = exports.DataAwsDynamodbTableAttribute = void 0;
var cdktf = require("cdktf");
var DataAwsDynamodbTableAttribute = /** @class */ (function (_super) {
    __extends(DataAwsDynamodbTableAttribute, _super);
    function DataAwsDynamodbTableAttribute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsDynamodbTableAttribute.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDynamodbTableAttribute.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsDynamodbTableAttribute;
}(cdktf.ComplexComputedList));
exports.DataAwsDynamodbTableAttribute = DataAwsDynamodbTableAttribute;
var DataAwsDynamodbTableGlobalSecondaryIndex = /** @class */ (function (_super) {
    __extends(DataAwsDynamodbTableGlobalSecondaryIndex, _super);
    function DataAwsDynamodbTableGlobalSecondaryIndex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsDynamodbTableGlobalSecondaryIndex.prototype, "hashKey", {
        // hash_key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hash_key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDynamodbTableGlobalSecondaryIndex.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDynamodbTableGlobalSecondaryIndex.prototype, "nonKeyAttributes", {
        // non_key_attributes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('non_key_attributes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDynamodbTableGlobalSecondaryIndex.prototype, "projectionType", {
        // projection_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('projection_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDynamodbTableGlobalSecondaryIndex.prototype, "rangeKey", {
        // range_key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('range_key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDynamodbTableGlobalSecondaryIndex.prototype, "readCapacity", {
        // read_capacity - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('read_capacity');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDynamodbTableGlobalSecondaryIndex.prototype, "writeCapacity", {
        // write_capacity - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('write_capacity');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsDynamodbTableGlobalSecondaryIndex;
}(cdktf.ComplexComputedList));
exports.DataAwsDynamodbTableGlobalSecondaryIndex = DataAwsDynamodbTableGlobalSecondaryIndex;
var DataAwsDynamodbTableLocalSecondaryIndex = /** @class */ (function (_super) {
    __extends(DataAwsDynamodbTableLocalSecondaryIndex, _super);
    function DataAwsDynamodbTableLocalSecondaryIndex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsDynamodbTableLocalSecondaryIndex.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDynamodbTableLocalSecondaryIndex.prototype, "nonKeyAttributes", {
        // non_key_attributes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('non_key_attributes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDynamodbTableLocalSecondaryIndex.prototype, "projectionType", {
        // projection_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('projection_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDynamodbTableLocalSecondaryIndex.prototype, "rangeKey", {
        // range_key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('range_key');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsDynamodbTableLocalSecondaryIndex;
}(cdktf.ComplexComputedList));
exports.DataAwsDynamodbTableLocalSecondaryIndex = DataAwsDynamodbTableLocalSecondaryIndex;
var DataAwsDynamodbTablePointInTimeRecovery = /** @class */ (function (_super) {
    __extends(DataAwsDynamodbTablePointInTimeRecovery, _super);
    function DataAwsDynamodbTablePointInTimeRecovery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsDynamodbTablePointInTimeRecovery.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsDynamodbTablePointInTimeRecovery;
}(cdktf.ComplexComputedList));
exports.DataAwsDynamodbTablePointInTimeRecovery = DataAwsDynamodbTablePointInTimeRecovery;
var DataAwsDynamodbTableReplica = /** @class */ (function (_super) {
    __extends(DataAwsDynamodbTableReplica, _super);
    function DataAwsDynamodbTableReplica() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsDynamodbTableReplica.prototype, "kmsKeyArn", {
        // kms_key_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('kms_key_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDynamodbTableReplica.prototype, "regionName", {
        // region_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('region_name');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsDynamodbTableReplica;
}(cdktf.ComplexComputedList));
exports.DataAwsDynamodbTableReplica = DataAwsDynamodbTableReplica;
var DataAwsDynamodbTableTtl = /** @class */ (function (_super) {
    __extends(DataAwsDynamodbTableTtl, _super);
    function DataAwsDynamodbTableTtl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsDynamodbTableTtl.prototype, "attributeName", {
        // attribute_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('attribute_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDynamodbTableTtl.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsDynamodbTableTtl;
}(cdktf.ComplexComputedList));
exports.DataAwsDynamodbTableTtl = DataAwsDynamodbTableTtl;
function dataAwsDynamodbTableServerSideEncryptionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table.html aws_dynamodb_table}
*/
var DataAwsDynamodbTable = /** @class */ (function (_super) {
    __extends(DataAwsDynamodbTable, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table.html aws_dynamodb_table} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsDynamodbTableConfig
    */
    function DataAwsDynamodbTable(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_dynamodb_table',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        _this._tags = config.tags;
        _this._serverSideEncryption = config.serverSideEncryption;
        return _this;
    }
    Object.defineProperty(DataAwsDynamodbTable.prototype, "arn", {
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
    // attribute - computed: true, optional: false, required: false
    DataAwsDynamodbTable.prototype.attribute = function (index) {
        return new DataAwsDynamodbTableAttribute(this, 'attribute', index);
    };
    Object.defineProperty(DataAwsDynamodbTable.prototype, "billingMode", {
        // billing_mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('billing_mode');
        },
        enumerable: false,
        configurable: true
    });
    // global_secondary_index - computed: true, optional: false, required: false
    DataAwsDynamodbTable.prototype.globalSecondaryIndex = function (index) {
        return new DataAwsDynamodbTableGlobalSecondaryIndex(this, 'global_secondary_index', index);
    };
    Object.defineProperty(DataAwsDynamodbTable.prototype, "hashKey", {
        // hash_key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hash_key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDynamodbTable.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    // local_secondary_index - computed: true, optional: false, required: false
    DataAwsDynamodbTable.prototype.localSecondaryIndex = function (index) {
        return new DataAwsDynamodbTableLocalSecondaryIndex(this, 'local_secondary_index', index);
    };
    Object.defineProperty(DataAwsDynamodbTable.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDynamodbTable.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    // point_in_time_recovery - computed: true, optional: false, required: false
    DataAwsDynamodbTable.prototype.pointInTimeRecovery = function (index) {
        return new DataAwsDynamodbTablePointInTimeRecovery(this, 'point_in_time_recovery', index);
    };
    Object.defineProperty(DataAwsDynamodbTable.prototype, "rangeKey", {
        // range_key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('range_key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDynamodbTable.prototype, "readCapacity", {
        // read_capacity - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('read_capacity');
        },
        enumerable: false,
        configurable: true
    });
    // replica - computed: true, optional: false, required: false
    DataAwsDynamodbTable.prototype.replica = function (index) {
        return new DataAwsDynamodbTableReplica(this, 'replica', index);
    };
    Object.defineProperty(DataAwsDynamodbTable.prototype, "streamArn", {
        // stream_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('stream_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDynamodbTable.prototype, "streamEnabled", {
        // stream_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('stream_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDynamodbTable.prototype, "streamLabel", {
        // stream_label - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('stream_label');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDynamodbTable.prototype, "streamViewType", {
        // stream_view_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('stream_view_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDynamodbTable.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsDynamodbTable.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsDynamodbTable.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    // ttl - computed: true, optional: false, required: false
    DataAwsDynamodbTable.prototype.ttl = function (index) {
        return new DataAwsDynamodbTableTtl(this, 'ttl', index);
    };
    Object.defineProperty(DataAwsDynamodbTable.prototype, "writeCapacity", {
        // write_capacity - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('write_capacity');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDynamodbTable.prototype, "serverSideEncryption", {
        get: function () {
            return this.interpolationForAttribute('server_side_encryption');
        },
        set: function (value) {
            this._serverSideEncryption = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsDynamodbTable.prototype.resetServerSideEncryption = function () {
        this._serverSideEncryption = undefined;
    };
    Object.defineProperty(DataAwsDynamodbTable.prototype, "serverSideEncryptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serverSideEncryption;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsDynamodbTable.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            server_side_encryption: cdktf.listMapper(dataAwsDynamodbTableServerSideEncryptionToTerraform)(this._serverSideEncryption)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsDynamodbTable.tfResourceType = "aws_dynamodb_table";
    return DataAwsDynamodbTable;
}(cdktf.TerraformDataSource));
exports.DataAwsDynamodbTable = DataAwsDynamodbTable;
