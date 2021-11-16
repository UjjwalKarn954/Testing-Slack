"use strict";
// https://www.terraform.io/docs/providers/aws/d/kinesis_stream.html
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
exports.DataAwsKinesisStream = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream.html aws_kinesis_stream}
*/
var DataAwsKinesisStream = /** @class */ (function (_super) {
    __extends(DataAwsKinesisStream, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream.html aws_kinesis_stream} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsKinesisStreamConfig
    */
    function DataAwsKinesisStream(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_kinesis_stream',
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
        return _this;
    }
    Object.defineProperty(DataAwsKinesisStream.prototype, "arn", {
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
    Object.defineProperty(DataAwsKinesisStream.prototype, "closedShards", {
        // closed_shards - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('closed_shards');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKinesisStream.prototype, "creationTimestamp", {
        // creation_timestamp - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('creation_timestamp');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKinesisStream.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKinesisStream.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKinesisStream.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKinesisStream.prototype, "openShards", {
        // open_shards - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('open_shards');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKinesisStream.prototype, "retentionPeriod", {
        // retention_period - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('retention_period');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKinesisStream.prototype, "shardLevelMetrics", {
        // shard_level_metrics - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('shard_level_metrics');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKinesisStream.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsKinesisStream.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsKinesisStream.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsKinesisStream.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsKinesisStream.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsKinesisStream.tfResourceType = "aws_kinesis_stream";
    return DataAwsKinesisStream;
}(cdktf.TerraformDataSource));
exports.DataAwsKinesisStream = DataAwsKinesisStream;
