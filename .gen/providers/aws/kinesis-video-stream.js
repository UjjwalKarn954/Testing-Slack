"use strict";
// https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html
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
exports.KinesisVideoStream = void 0;
var cdktf = require("cdktf");
function kinesisVideoStreamTimeoutsToTerraform(struct) {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html aws_kinesis_video_stream}
*/
var KinesisVideoStream = /** @class */ (function (_super) {
    __extends(KinesisVideoStream, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html aws_kinesis_video_stream} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KinesisVideoStreamConfig
    */
    function KinesisVideoStream(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_kinesis_video_stream',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._dataRetentionInHours = config.dataRetentionInHours;
        _this._deviceName = config.deviceName;
        _this._kmsKeyId = config.kmsKeyId;
        _this._mediaType = config.mediaType;
        _this._name = config.name;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(KinesisVideoStream.prototype, "arn", {
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
    Object.defineProperty(KinesisVideoStream.prototype, "creationTime", {
        // creation_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('creation_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisVideoStream.prototype, "dataRetentionInHours", {
        get: function () {
            return this.getNumberAttribute('data_retention_in_hours');
        },
        set: function (value) {
            this._dataRetentionInHours = value;
        },
        enumerable: false,
        configurable: true
    });
    KinesisVideoStream.prototype.resetDataRetentionInHours = function () {
        this._dataRetentionInHours = undefined;
    };
    Object.defineProperty(KinesisVideoStream.prototype, "dataRetentionInHoursInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dataRetentionInHours;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisVideoStream.prototype, "deviceName", {
        get: function () {
            return this.getStringAttribute('device_name');
        },
        set: function (value) {
            this._deviceName = value;
        },
        enumerable: false,
        configurable: true
    });
    KinesisVideoStream.prototype.resetDeviceName = function () {
        this._deviceName = undefined;
    };
    Object.defineProperty(KinesisVideoStream.prototype, "deviceNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deviceName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisVideoStream.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisVideoStream.prototype, "kmsKeyId", {
        get: function () {
            return this.getStringAttribute('kms_key_id');
        },
        set: function (value) {
            this._kmsKeyId = value;
        },
        enumerable: false,
        configurable: true
    });
    KinesisVideoStream.prototype.resetKmsKeyId = function () {
        this._kmsKeyId = undefined;
    };
    Object.defineProperty(KinesisVideoStream.prototype, "kmsKeyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kmsKeyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisVideoStream.prototype, "mediaType", {
        get: function () {
            return this.getStringAttribute('media_type');
        },
        set: function (value) {
            this._mediaType = value;
        },
        enumerable: false,
        configurable: true
    });
    KinesisVideoStream.prototype.resetMediaType = function () {
        this._mediaType = undefined;
    };
    Object.defineProperty(KinesisVideoStream.prototype, "mediaTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mediaType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisVideoStream.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisVideoStream.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisVideoStream.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    KinesisVideoStream.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(KinesisVideoStream.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisVideoStream.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    KinesisVideoStream.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(KinesisVideoStream.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisVideoStream.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisVideoStream.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    KinesisVideoStream.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(KinesisVideoStream.prototype, "timeoutsInput", {
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
    KinesisVideoStream.prototype.synthesizeAttributes = function () {
        return {
            data_retention_in_hours: cdktf.numberToTerraform(this._dataRetentionInHours),
            device_name: cdktf.stringToTerraform(this._deviceName),
            kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
            media_type: cdktf.stringToTerraform(this._mediaType),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            timeouts: kinesisVideoStreamTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    KinesisVideoStream.tfResourceType = "aws_kinesis_video_stream";
    return KinesisVideoStream;
}(cdktf.TerraformResource));
exports.KinesisVideoStream = KinesisVideoStream;
