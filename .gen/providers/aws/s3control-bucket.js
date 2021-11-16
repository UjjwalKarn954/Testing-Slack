"use strict";
// https://www.terraform.io/docs/providers/aws/r/s3control_bucket.html
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
exports.S3ControlBucket = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket.html aws_s3control_bucket}
*/
var S3ControlBucket = /** @class */ (function (_super) {
    __extends(S3ControlBucket, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket.html aws_s3control_bucket} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3ControlBucketConfig
    */
    function S3ControlBucket(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_s3control_bucket',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._bucket = config.bucket;
        _this._outpostId = config.outpostId;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(S3ControlBucket.prototype, "arn", {
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
    Object.defineProperty(S3ControlBucket.prototype, "bucket", {
        get: function () {
            return this.getStringAttribute('bucket');
        },
        set: function (value) {
            this._bucket = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ControlBucket.prototype, "bucketInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bucket;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ControlBucket.prototype, "creationDate", {
        // creation_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('creation_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ControlBucket.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ControlBucket.prototype, "outpostId", {
        get: function () {
            return this.getStringAttribute('outpost_id');
        },
        set: function (value) {
            this._outpostId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ControlBucket.prototype, "outpostIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._outpostId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ControlBucket.prototype, "publicAccessBlockEnabled", {
        // public_access_block_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('public_access_block_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ControlBucket.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    S3ControlBucket.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(S3ControlBucket.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ControlBucket.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    S3ControlBucket.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(S3ControlBucket.prototype, "tagsAllInput", {
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
    S3ControlBucket.prototype.synthesizeAttributes = function () {
        return {
            bucket: cdktf.stringToTerraform(this._bucket),
            outpost_id: cdktf.stringToTerraform(this._outpostId),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    S3ControlBucket.tfResourceType = "aws_s3control_bucket";
    return S3ControlBucket;
}(cdktf.TerraformResource));
exports.S3ControlBucket = S3ControlBucket;
