"use strict";
// https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html
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
exports.DynamodbTable = void 0;
var cdktf = require("cdktf");
function dynamodbTableAttributeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function dynamodbTableGlobalSecondaryIndexToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        hash_key: cdktf.stringToTerraform(struct.hashKey),
        name: cdktf.stringToTerraform(struct.name),
        non_key_attributes: cdktf.listMapper(cdktf.stringToTerraform)(struct.nonKeyAttributes),
        projection_type: cdktf.stringToTerraform(struct.projectionType),
        range_key: cdktf.stringToTerraform(struct.rangeKey),
        read_capacity: cdktf.numberToTerraform(struct.readCapacity),
        write_capacity: cdktf.numberToTerraform(struct.writeCapacity)
    };
}
function dynamodbTableLocalSecondaryIndexToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        non_key_attributes: cdktf.listMapper(cdktf.stringToTerraform)(struct.nonKeyAttributes),
        projection_type: cdktf.stringToTerraform(struct.projectionType),
        range_key: cdktf.stringToTerraform(struct.rangeKey)
    };
}
function dynamodbTablePointInTimeRecoveryToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled)
    };
}
function dynamodbTableReplicaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        kms_key_arn: cdktf.stringToTerraform(struct.kmsKeyArn),
        region_name: cdktf.stringToTerraform(struct.regionName)
    };
}
function dynamodbTableServerSideEncryptionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        kms_key_arn: cdktf.stringToTerraform(struct.kmsKeyArn)
    };
}
function dynamodbTableTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        "delete": cdktf.stringToTerraform(struct["delete"]),
        update: cdktf.stringToTerraform(struct.update)
    };
}
function dynamodbTableTtlToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        attribute_name: cdktf.stringToTerraform(struct.attributeName),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        kms_key_arn: cdktf.stringToTerraform(struct.kmsKeyArn)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html aws_dynamodb_table}
*/
var DynamodbTable = /** @class */ (function (_super) {
    __extends(DynamodbTable, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html aws_dynamodb_table} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DynamodbTableConfig
    */
    function DynamodbTable(scope, id, config) {
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
        _this._billingMode = config.billingMode;
        _this._hashKey = config.hashKey;
        _this._name = config.name;
        _this._rangeKey = config.rangeKey;
        _this._readCapacity = config.readCapacity;
        _this._streamEnabled = config.streamEnabled;
        _this._streamViewType = config.streamViewType;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._writeCapacity = config.writeCapacity;
        _this._attribute = config.attribute;
        _this._globalSecondaryIndex = config.globalSecondaryIndex;
        _this._localSecondaryIndex = config.localSecondaryIndex;
        _this._pointInTimeRecovery = config.pointInTimeRecovery;
        _this._replica = config.replica;
        _this._serverSideEncryption = config.serverSideEncryption;
        _this._timeouts = config.timeouts;
        _this._ttl = config.ttl;
        return _this;
    }
    Object.defineProperty(DynamodbTable.prototype, "arn", {
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
    Object.defineProperty(DynamodbTable.prototype, "billingMode", {
        get: function () {
            return this.getStringAttribute('billing_mode');
        },
        set: function (value) {
            this._billingMode = value;
        },
        enumerable: false,
        configurable: true
    });
    DynamodbTable.prototype.resetBillingMode = function () {
        this._billingMode = undefined;
    };
    Object.defineProperty(DynamodbTable.prototype, "billingModeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._billingMode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamodbTable.prototype, "hashKey", {
        get: function () {
            return this.getStringAttribute('hash_key');
        },
        set: function (value) {
            this._hashKey = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamodbTable.prototype, "hashKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hashKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamodbTable.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamodbTable.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamodbTable.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamodbTable.prototype, "rangeKey", {
        get: function () {
            return this.getStringAttribute('range_key');
        },
        set: function (value) {
            this._rangeKey = value;
        },
        enumerable: false,
        configurable: true
    });
    DynamodbTable.prototype.resetRangeKey = function () {
        this._rangeKey = undefined;
    };
    Object.defineProperty(DynamodbTable.prototype, "rangeKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rangeKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamodbTable.prototype, "readCapacity", {
        get: function () {
            return this.getNumberAttribute('read_capacity');
        },
        set: function (value) {
            this._readCapacity = value;
        },
        enumerable: false,
        configurable: true
    });
    DynamodbTable.prototype.resetReadCapacity = function () {
        this._readCapacity = undefined;
    };
    Object.defineProperty(DynamodbTable.prototype, "readCapacityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._readCapacity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamodbTable.prototype, "streamArn", {
        // stream_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('stream_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamodbTable.prototype, "streamEnabled", {
        get: function () {
            return this.getBooleanAttribute('stream_enabled');
        },
        set: function (value) {
            this._streamEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    DynamodbTable.prototype.resetStreamEnabled = function () {
        this._streamEnabled = undefined;
    };
    Object.defineProperty(DynamodbTable.prototype, "streamEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._streamEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamodbTable.prototype, "streamLabel", {
        // stream_label - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('stream_label');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamodbTable.prototype, "streamViewType", {
        get: function () {
            return this.getStringAttribute('stream_view_type');
        },
        set: function (value) {
            this._streamViewType = value;
        },
        enumerable: false,
        configurable: true
    });
    DynamodbTable.prototype.resetStreamViewType = function () {
        this._streamViewType = undefined;
    };
    Object.defineProperty(DynamodbTable.prototype, "streamViewTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._streamViewType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamodbTable.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DynamodbTable.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DynamodbTable.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamodbTable.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    DynamodbTable.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(DynamodbTable.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamodbTable.prototype, "writeCapacity", {
        get: function () {
            return this.getNumberAttribute('write_capacity');
        },
        set: function (value) {
            this._writeCapacity = value;
        },
        enumerable: false,
        configurable: true
    });
    DynamodbTable.prototype.resetWriteCapacity = function () {
        this._writeCapacity = undefined;
    };
    Object.defineProperty(DynamodbTable.prototype, "writeCapacityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._writeCapacity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamodbTable.prototype, "attribute", {
        get: function () {
            return this.interpolationForAttribute('attribute');
        },
        set: function (value) {
            this._attribute = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamodbTable.prototype, "attributeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._attribute;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamodbTable.prototype, "globalSecondaryIndex", {
        get: function () {
            return this.interpolationForAttribute('global_secondary_index');
        },
        set: function (value) {
            this._globalSecondaryIndex = value;
        },
        enumerable: false,
        configurable: true
    });
    DynamodbTable.prototype.resetGlobalSecondaryIndex = function () {
        this._globalSecondaryIndex = undefined;
    };
    Object.defineProperty(DynamodbTable.prototype, "globalSecondaryIndexInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._globalSecondaryIndex;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamodbTable.prototype, "localSecondaryIndex", {
        get: function () {
            return this.interpolationForAttribute('local_secondary_index');
        },
        set: function (value) {
            this._localSecondaryIndex = value;
        },
        enumerable: false,
        configurable: true
    });
    DynamodbTable.prototype.resetLocalSecondaryIndex = function () {
        this._localSecondaryIndex = undefined;
    };
    Object.defineProperty(DynamodbTable.prototype, "localSecondaryIndexInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._localSecondaryIndex;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamodbTable.prototype, "pointInTimeRecovery", {
        get: function () {
            return this.interpolationForAttribute('point_in_time_recovery');
        },
        set: function (value) {
            this._pointInTimeRecovery = value;
        },
        enumerable: false,
        configurable: true
    });
    DynamodbTable.prototype.resetPointInTimeRecovery = function () {
        this._pointInTimeRecovery = undefined;
    };
    Object.defineProperty(DynamodbTable.prototype, "pointInTimeRecoveryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pointInTimeRecovery;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamodbTable.prototype, "replica", {
        get: function () {
            return this.interpolationForAttribute('replica');
        },
        set: function (value) {
            this._replica = value;
        },
        enumerable: false,
        configurable: true
    });
    DynamodbTable.prototype.resetReplica = function () {
        this._replica = undefined;
    };
    Object.defineProperty(DynamodbTable.prototype, "replicaInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._replica;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamodbTable.prototype, "serverSideEncryption", {
        get: function () {
            return this.interpolationForAttribute('server_side_encryption');
        },
        set: function (value) {
            this._serverSideEncryption = value;
        },
        enumerable: false,
        configurable: true
    });
    DynamodbTable.prototype.resetServerSideEncryption = function () {
        this._serverSideEncryption = undefined;
    };
    Object.defineProperty(DynamodbTable.prototype, "serverSideEncryptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serverSideEncryption;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamodbTable.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    DynamodbTable.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(DynamodbTable.prototype, "timeoutsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeouts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamodbTable.prototype, "ttl", {
        get: function () {
            return this.interpolationForAttribute('ttl');
        },
        set: function (value) {
            this._ttl = value;
        },
        enumerable: false,
        configurable: true
    });
    DynamodbTable.prototype.resetTtl = function () {
        this._ttl = undefined;
    };
    Object.defineProperty(DynamodbTable.prototype, "ttlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ttl;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DynamodbTable.prototype.synthesizeAttributes = function () {
        return {
            billing_mode: cdktf.stringToTerraform(this._billingMode),
            hash_key: cdktf.stringToTerraform(this._hashKey),
            name: cdktf.stringToTerraform(this._name),
            range_key: cdktf.stringToTerraform(this._rangeKey),
            read_capacity: cdktf.numberToTerraform(this._readCapacity),
            stream_enabled: cdktf.booleanToTerraform(this._streamEnabled),
            stream_view_type: cdktf.stringToTerraform(this._streamViewType),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            write_capacity: cdktf.numberToTerraform(this._writeCapacity),
            attribute: cdktf.listMapper(dynamodbTableAttributeToTerraform)(this._attribute),
            global_secondary_index: cdktf.listMapper(dynamodbTableGlobalSecondaryIndexToTerraform)(this._globalSecondaryIndex),
            local_secondary_index: cdktf.listMapper(dynamodbTableLocalSecondaryIndexToTerraform)(this._localSecondaryIndex),
            point_in_time_recovery: cdktf.listMapper(dynamodbTablePointInTimeRecoveryToTerraform)(this._pointInTimeRecovery),
            replica: cdktf.listMapper(dynamodbTableReplicaToTerraform)(this._replica),
            server_side_encryption: cdktf.listMapper(dynamodbTableServerSideEncryptionToTerraform)(this._serverSideEncryption),
            timeouts: dynamodbTableTimeoutsToTerraform(this._timeouts),
            ttl: cdktf.listMapper(dynamodbTableTtlToTerraform)(this._ttl)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DynamodbTable.tfResourceType = "aws_dynamodb_table";
    return DynamodbTable;
}(cdktf.TerraformResource));
exports.DynamodbTable = DynamodbTable;
