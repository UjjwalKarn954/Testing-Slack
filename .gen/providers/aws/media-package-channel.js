"use strict";
// https://www.terraform.io/docs/providers/aws/r/media_package_channel.html
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
exports.MediaPackageChannel = exports.MediaPackageChannelHlsIngest = exports.MediaPackageChannelHlsIngestIngestEndpoints = void 0;
var cdktf = require("cdktf");
var MediaPackageChannelHlsIngestIngestEndpoints = /** @class */ (function (_super) {
    __extends(MediaPackageChannelHlsIngestIngestEndpoints, _super);
    function MediaPackageChannelHlsIngestIngestEndpoints() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MediaPackageChannelHlsIngestIngestEndpoints.prototype, "password", {
        // password - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('password');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MediaPackageChannelHlsIngestIngestEndpoints.prototype, "url", {
        // url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MediaPackageChannelHlsIngestIngestEndpoints.prototype, "username", {
        // username - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('username');
        },
        enumerable: false,
        configurable: true
    });
    return MediaPackageChannelHlsIngestIngestEndpoints;
}(cdktf.ComplexComputedList));
exports.MediaPackageChannelHlsIngestIngestEndpoints = MediaPackageChannelHlsIngestIngestEndpoints;
var MediaPackageChannelHlsIngest = /** @class */ (function (_super) {
    __extends(MediaPackageChannelHlsIngest, _super);
    function MediaPackageChannelHlsIngest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MediaPackageChannelHlsIngest.prototype, "ingestEndpoints", {
        // ingest_endpoints - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('ingest_endpoints');
        },
        enumerable: false,
        configurable: true
    });
    return MediaPackageChannelHlsIngest;
}(cdktf.ComplexComputedList));
exports.MediaPackageChannelHlsIngest = MediaPackageChannelHlsIngest;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/media_package_channel.html aws_media_package_channel}
*/
var MediaPackageChannel = /** @class */ (function (_super) {
    __extends(MediaPackageChannel, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/media_package_channel.html aws_media_package_channel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MediaPackageChannelConfig
    */
    function MediaPackageChannel(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_media_package_channel',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._channelId = config.channelId;
        _this._description = config.description;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(MediaPackageChannel.prototype, "arn", {
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
    Object.defineProperty(MediaPackageChannel.prototype, "channelId", {
        get: function () {
            return this.getStringAttribute('channel_id');
        },
        set: function (value) {
            this._channelId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MediaPackageChannel.prototype, "channelIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._channelId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MediaPackageChannel.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    MediaPackageChannel.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(MediaPackageChannel.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    // hls_ingest - computed: true, optional: false, required: false
    MediaPackageChannel.prototype.hlsIngest = function (index) {
        return new MediaPackageChannelHlsIngest(this, 'hls_ingest', index);
    };
    Object.defineProperty(MediaPackageChannel.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MediaPackageChannel.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    MediaPackageChannel.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(MediaPackageChannel.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MediaPackageChannel.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    MediaPackageChannel.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(MediaPackageChannel.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    MediaPackageChannel.prototype.synthesizeAttributes = function () {
        return {
            channel_id: cdktf.stringToTerraform(this._channelId),
            description: cdktf.stringToTerraform(this._description),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    MediaPackageChannel.tfResourceType = "aws_media_package_channel";
    return MediaPackageChannel;
}(cdktf.TerraformResource));
exports.MediaPackageChannel = MediaPackageChannel;
