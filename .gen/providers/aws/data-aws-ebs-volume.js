"use strict";
// https://www.terraform.io/docs/providers/aws/d/ebs_volume.html
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
exports.DataAwsEbsVolume = void 0;
var cdktf = require("cdktf");
function dataAwsEbsVolumeFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ebs_volume.html aws_ebs_volume}
*/
var DataAwsEbsVolume = /** @class */ (function (_super) {
    __extends(DataAwsEbsVolume, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ebs_volume.html aws_ebs_volume} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEbsVolumeConfig = {}
    */
    function DataAwsEbsVolume(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ebs_volume',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._mostRecent = config.mostRecent;
        _this._tags = config.tags;
        _this._filter = config.filter;
        return _this;
    }
    Object.defineProperty(DataAwsEbsVolume.prototype, "arn", {
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
    Object.defineProperty(DataAwsEbsVolume.prototype, "availabilityZone", {
        // availability_zone - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('availability_zone');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEbsVolume.prototype, "encrypted", {
        // encrypted - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('encrypted');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEbsVolume.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEbsVolume.prototype, "iops", {
        // iops - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('iops');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEbsVolume.prototype, "kmsKeyId", {
        // kms_key_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('kms_key_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEbsVolume.prototype, "mostRecent", {
        get: function () {
            return this.getBooleanAttribute('most_recent');
        },
        set: function (value) {
            this._mostRecent = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEbsVolume.prototype.resetMostRecent = function () {
        this._mostRecent = undefined;
    };
    Object.defineProperty(DataAwsEbsVolume.prototype, "mostRecentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mostRecent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEbsVolume.prototype, "multiAttachEnabled", {
        // multi_attach_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('multi_attach_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEbsVolume.prototype, "outpostArn", {
        // outpost_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('outpost_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEbsVolume.prototype, "size", {
        // size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('size');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEbsVolume.prototype, "snapshotId", {
        // snapshot_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('snapshot_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEbsVolume.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEbsVolume.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsEbsVolume.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEbsVolume.prototype, "throughput", {
        // throughput - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('throughput');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEbsVolume.prototype, "volumeId", {
        // volume_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('volume_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEbsVolume.prototype, "volumeType", {
        // volume_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('volume_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEbsVolume.prototype, "filter", {
        get: function () {
            return this.interpolationForAttribute('filter');
        },
        set: function (value) {
            this._filter = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEbsVolume.prototype.resetFilter = function () {
        this._filter = undefined;
    };
    Object.defineProperty(DataAwsEbsVolume.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsEbsVolume.prototype.synthesizeAttributes = function () {
        return {
            most_recent: cdktf.booleanToTerraform(this._mostRecent),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            filter: cdktf.listMapper(dataAwsEbsVolumeFilterToTerraform)(this._filter)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsEbsVolume.tfResourceType = "aws_ebs_volume";
    return DataAwsEbsVolume;
}(cdktf.TerraformDataSource));
exports.DataAwsEbsVolume = DataAwsEbsVolume;
