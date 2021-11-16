"use strict";
// https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html
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
exports.ElastictranscoderPreset = void 0;
var cdktf = require("cdktf");
function elastictranscoderPresetAudioToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        audio_packing_mode: cdktf.stringToTerraform(struct.audioPackingMode),
        bit_rate: cdktf.stringToTerraform(struct.bitRate),
        channels: cdktf.stringToTerraform(struct.channels),
        codec: cdktf.stringToTerraform(struct.codec),
        sample_rate: cdktf.stringToTerraform(struct.sampleRate)
    };
}
function elastictranscoderPresetAudioCodecOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bit_depth: cdktf.stringToTerraform(struct.bitDepth),
        bit_order: cdktf.stringToTerraform(struct.bitOrder),
        profile: cdktf.stringToTerraform(struct.profile),
        signed: cdktf.stringToTerraform(struct.signed)
    };
}
function elastictranscoderPresetThumbnailsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        aspect_ratio: cdktf.stringToTerraform(struct.aspectRatio),
        format: cdktf.stringToTerraform(struct.format),
        interval: cdktf.stringToTerraform(struct.interval),
        max_height: cdktf.stringToTerraform(struct.maxHeight),
        max_width: cdktf.stringToTerraform(struct.maxWidth),
        padding_policy: cdktf.stringToTerraform(struct.paddingPolicy),
        resolution: cdktf.stringToTerraform(struct.resolution),
        sizing_policy: cdktf.stringToTerraform(struct.sizingPolicy)
    };
}
function elastictranscoderPresetVideoToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        aspect_ratio: cdktf.stringToTerraform(struct.aspectRatio),
        bit_rate: cdktf.stringToTerraform(struct.bitRate),
        codec: cdktf.stringToTerraform(struct.codec),
        display_aspect_ratio: cdktf.stringToTerraform(struct.displayAspectRatio),
        fixed_gop: cdktf.stringToTerraform(struct.fixedGop),
        frame_rate: cdktf.stringToTerraform(struct.frameRate),
        keyframes_max_dist: cdktf.stringToTerraform(struct.keyframesMaxDist),
        max_frame_rate: cdktf.stringToTerraform(struct.maxFrameRate),
        max_height: cdktf.stringToTerraform(struct.maxHeight),
        max_width: cdktf.stringToTerraform(struct.maxWidth),
        padding_policy: cdktf.stringToTerraform(struct.paddingPolicy),
        resolution: cdktf.stringToTerraform(struct.resolution),
        sizing_policy: cdktf.stringToTerraform(struct.sizingPolicy)
    };
}
function elastictranscoderPresetVideoWatermarksToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        horizontal_align: cdktf.stringToTerraform(struct.horizontalAlign),
        horizontal_offset: cdktf.stringToTerraform(struct.horizontalOffset),
        id: cdktf.stringToTerraform(struct.id),
        max_height: cdktf.stringToTerraform(struct.maxHeight),
        max_width: cdktf.stringToTerraform(struct.maxWidth),
        opacity: cdktf.stringToTerraform(struct.opacity),
        sizing_policy: cdktf.stringToTerraform(struct.sizingPolicy),
        target: cdktf.stringToTerraform(struct.target),
        vertical_align: cdktf.stringToTerraform(struct.verticalAlign),
        vertical_offset: cdktf.stringToTerraform(struct.verticalOffset)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html aws_elastictranscoder_preset}
*/
var ElastictranscoderPreset = /** @class */ (function (_super) {
    __extends(ElastictranscoderPreset, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html aws_elastictranscoder_preset} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElastictranscoderPresetConfig
    */
    function ElastictranscoderPreset(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_elastictranscoder_preset',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._container = config.container;
        _this._description = config.description;
        _this._name = config.name;
        _this._type = config.type;
        _this._videoCodecOptions = config.videoCodecOptions;
        _this._audio = config.audio;
        _this._audioCodecOptions = config.audioCodecOptions;
        _this._thumbnails = config.thumbnails;
        _this._video = config.video;
        _this._videoWatermarks = config.videoWatermarks;
        return _this;
    }
    Object.defineProperty(ElastictranscoderPreset.prototype, "arn", {
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
    Object.defineProperty(ElastictranscoderPreset.prototype, "container", {
        get: function () {
            return this.getStringAttribute('container');
        },
        set: function (value) {
            this._container = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElastictranscoderPreset.prototype, "containerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._container;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElastictranscoderPreset.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ElastictranscoderPreset.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(ElastictranscoderPreset.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElastictranscoderPreset.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElastictranscoderPreset.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    ElastictranscoderPreset.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(ElastictranscoderPreset.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElastictranscoderPreset.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    ElastictranscoderPreset.prototype.resetType = function () {
        this._type = undefined;
    };
    Object.defineProperty(ElastictranscoderPreset.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElastictranscoderPreset.prototype, "videoCodecOptions", {
        get: function () {
            return this.interpolationForAttribute('video_codec_options');
        },
        set: function (value) {
            this._videoCodecOptions = value;
        },
        enumerable: false,
        configurable: true
    });
    ElastictranscoderPreset.prototype.resetVideoCodecOptions = function () {
        this._videoCodecOptions = undefined;
    };
    Object.defineProperty(ElastictranscoderPreset.prototype, "videoCodecOptionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._videoCodecOptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElastictranscoderPreset.prototype, "audio", {
        get: function () {
            return this.interpolationForAttribute('audio');
        },
        set: function (value) {
            this._audio = value;
        },
        enumerable: false,
        configurable: true
    });
    ElastictranscoderPreset.prototype.resetAudio = function () {
        this._audio = undefined;
    };
    Object.defineProperty(ElastictranscoderPreset.prototype, "audioInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._audio;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElastictranscoderPreset.prototype, "audioCodecOptions", {
        get: function () {
            return this.interpolationForAttribute('audio_codec_options');
        },
        set: function (value) {
            this._audioCodecOptions = value;
        },
        enumerable: false,
        configurable: true
    });
    ElastictranscoderPreset.prototype.resetAudioCodecOptions = function () {
        this._audioCodecOptions = undefined;
    };
    Object.defineProperty(ElastictranscoderPreset.prototype, "audioCodecOptionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._audioCodecOptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElastictranscoderPreset.prototype, "thumbnails", {
        get: function () {
            return this.interpolationForAttribute('thumbnails');
        },
        set: function (value) {
            this._thumbnails = value;
        },
        enumerable: false,
        configurable: true
    });
    ElastictranscoderPreset.prototype.resetThumbnails = function () {
        this._thumbnails = undefined;
    };
    Object.defineProperty(ElastictranscoderPreset.prototype, "thumbnailsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._thumbnails;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElastictranscoderPreset.prototype, "video", {
        get: function () {
            return this.interpolationForAttribute('video');
        },
        set: function (value) {
            this._video = value;
        },
        enumerable: false,
        configurable: true
    });
    ElastictranscoderPreset.prototype.resetVideo = function () {
        this._video = undefined;
    };
    Object.defineProperty(ElastictranscoderPreset.prototype, "videoInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._video;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElastictranscoderPreset.prototype, "videoWatermarks", {
        get: function () {
            return this.interpolationForAttribute('video_watermarks');
        },
        set: function (value) {
            this._videoWatermarks = value;
        },
        enumerable: false,
        configurable: true
    });
    ElastictranscoderPreset.prototype.resetVideoWatermarks = function () {
        this._videoWatermarks = undefined;
    };
    Object.defineProperty(ElastictranscoderPreset.prototype, "videoWatermarksInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._videoWatermarks;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ElastictranscoderPreset.prototype.synthesizeAttributes = function () {
        return {
            container: cdktf.stringToTerraform(this._container),
            description: cdktf.stringToTerraform(this._description),
            name: cdktf.stringToTerraform(this._name),
            type: cdktf.stringToTerraform(this._type),
            video_codec_options: cdktf.hashMapper(cdktf.anyToTerraform)(this._videoCodecOptions),
            audio: cdktf.listMapper(elastictranscoderPresetAudioToTerraform)(this._audio),
            audio_codec_options: cdktf.listMapper(elastictranscoderPresetAudioCodecOptionsToTerraform)(this._audioCodecOptions),
            thumbnails: cdktf.listMapper(elastictranscoderPresetThumbnailsToTerraform)(this._thumbnails),
            video: cdktf.listMapper(elastictranscoderPresetVideoToTerraform)(this._video),
            video_watermarks: cdktf.listMapper(elastictranscoderPresetVideoWatermarksToTerraform)(this._videoWatermarks)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ElastictranscoderPreset.tfResourceType = "aws_elastictranscoder_preset";
    return ElastictranscoderPreset;
}(cdktf.TerraformResource));
exports.ElastictranscoderPreset = ElastictranscoderPreset;
