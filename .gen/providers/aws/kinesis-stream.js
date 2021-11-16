"use strict";
// https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html
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
exports.KinesisStream = void 0;
var cdktf = require("cdktf");
function kinesisStreamTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        "delete": cdktf.stringToTerraform(struct["delete"]),
        update: cdktf.stringToTerraform(struct.update)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html aws_kinesis_stream}
*/
var KinesisStream = /** @class */ (function (_super) {
    __extends(KinesisStream, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html aws_kinesis_stream} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KinesisStreamConfig
    */
    function KinesisStream(scope, id, config) {
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
        _this._encryptionType = config.encryptionType;
        _this._enforceConsumerDeletion = config.enforceConsumerDeletion;
        _this._kmsKeyId = config.kmsKeyId;
        _this._name = config.name;
        _this._retentionPeriod = config.retentionPeriod;
        _this._shardCount = config.shardCount;
        _this._shardLevelMetrics = config.shardLevelMetrics;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(KinesisStream.prototype, "arn", {
        // ==========
        // ATTRIBUTES
        // ==========
        // arn - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisStream.prototype, "encryptionType", {
        get: function () {
            return this.getStringAttribute('encryption_type');
        },
        set: function (value) {
            this._encryptionType = value;
        },
        enumerable: false,
        configurable: true
    });
    KinesisStream.prototype.resetEncryptionType = function () {
        this._encryptionType = undefined;
    };
    Object.defineProperty(KinesisStream.prototype, "encryptionTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._encryptionType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisStream.prototype, "enforceConsumerDeletion", {
        get: function () {
            return this.getBooleanAttribute('enforce_consumer_deletion');
        },
        set: function (value) {
            this._enforceConsumerDeletion = value;
        },
        enumerable: false,
        configurable: true
    });
    KinesisStream.prototype.resetEnforceConsumerDeletion = function () {
        this._enforceConsumerDeletion = undefined;
    };
    Object.defineProperty(KinesisStream.prototype, "enforceConsumerDeletionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enforceConsumerDeletion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisStream.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisStream.prototype, "kmsKeyId", {
        get: function () {
            return this.getStringAttribute('kms_key_id');
        },
        set: function (value) {
            this._kmsKeyId = value;
        },
        enumerable: false,
        configurable: true
    });
    KinesisStream.prototype.resetKmsKeyId = function () {
        this._kmsKeyId = undefined;
    };
    Object.defineProperty(KinesisStream.prototype, "kmsKeyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kmsKeyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisStream.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisStream.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisStream.prototype, "retentionPeriod", {
        get: function () {
            return this.getNumberAttribute('retention_period');
        },
        set: function (value) {
            this._retentionPeriod = value;
        },
        enumerable: false,
        configurable: true
    });
    KinesisStream.prototype.resetRetentionPeriod = function () {
        this._retentionPeriod = undefined;
    };
    Object.defineProperty(KinesisStream.prototype, "retentionPeriodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._retentionPeriod;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisStream.prototype, "shardCount", {
        get: function () {
            return this.getNumberAttribute('shard_count');
        },
        set: function (value) {
            this._shardCount = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisStream.prototype, "shardCountInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._shardCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisStream.prototype, "shardLevelMetrics", {
        get: function () {
            return this.getListAttribute('shard_level_metrics');
        },
        set: function (value) {
            this._shardLevelMetrics = value;
        },
        enumerable: false,
        configurable: true
    });
    KinesisStream.prototype.resetShardLevelMetrics = function () {
        this._shardLevelMetrics = undefined;
    };
    Object.defineProperty(KinesisStream.prototype, "shardLevelMetricsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._shardLevelMetrics;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisStream.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    KinesisStream.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(KinesisStream.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisStream.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    KinesisStream.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(KinesisStream.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisStream.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    KinesisStream.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(KinesisStream.prototype, "timeoutsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeouts;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    KinesisStream.prototype.synthesizeAttributes = function () {
        return {
            encryption_type: cdktf.stringToTerraform(this._encryptionType),
            enforce_consumer_deletion: cdktf.booleanToTerraform(this._enforceConsumerDeletion),
            kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
            name: cdktf.stringToTerraform(this._name),
            retention_period: cdktf.numberToTerraform(this._retentionPeriod),
            shard_count: cdktf.numberToTerraform(this._shardCount),
            shard_level_metrics: cdktf.listMapper(cdktf.stringToTerraform)(this._shardLevelMetrics),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            timeouts: kinesisStreamTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    KinesisStream.tfResourceType = "aws_kinesis_stream";
    return KinesisStream;
}(cdktf.TerraformResource));
exports.KinesisStream = KinesisStream;
