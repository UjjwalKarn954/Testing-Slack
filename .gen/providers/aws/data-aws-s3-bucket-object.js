"use strict";
// https://www.terraform.io/docs/providers/aws/d/s3_bucket_object.html
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
exports.DataAwsS3BucketObject = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object.html aws_s3_bucket_object}
*/
var DataAwsS3BucketObject = /** @class */ (function (_super) {
    __extends(DataAwsS3BucketObject, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object.html aws_s3_bucket_object} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsS3BucketObjectConfig
    */
    function DataAwsS3BucketObject(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_s3_bucket_object',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._bucket = config.bucket;
        _this._key = config.key;
        _this._range = config.range;
        _this._tags = config.tags;
        _this._versionId = config.versionId;
        return _this;
    }
    Object.defineProperty(DataAwsS3BucketObject.prototype, "body", {
        // ==========
        // ATTRIBUTES
        // ==========
        // body - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('body');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsS3BucketObject.prototype, "bucket", {
        get: function () {
            return this.getStringAttribute('bucket');
        },
        set: function (value) {
            this._bucket = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsS3BucketObject.prototype, "bucketInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bucket;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsS3BucketObject.prototype, "bucketKeyEnabled", {
        // bucket_key_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('bucket_key_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsS3BucketObject.prototype, "cacheControl", {
        // cache_control - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cache_control');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsS3BucketObject.prototype, "contentDisposition", {
        // content_disposition - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('content_disposition');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsS3BucketObject.prototype, "contentEncoding", {
        // content_encoding - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('content_encoding');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsS3BucketObject.prototype, "contentLanguage", {
        // content_language - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('content_language');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsS3BucketObject.prototype, "contentLength", {
        // content_length - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('content_length');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsS3BucketObject.prototype, "contentType", {
        // content_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('content_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsS3BucketObject.prototype, "etag", {
        // etag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('etag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsS3BucketObject.prototype, "expiration", {
        // expiration - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expiration');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsS3BucketObject.prototype, "expires", {
        // expires - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expires');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsS3BucketObject.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsS3BucketObject.prototype, "key", {
        get: function () {
            return this.getStringAttribute('key');
        },
        set: function (value) {
            this._key = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsS3BucketObject.prototype, "keyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._key;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsS3BucketObject.prototype, "lastModified", {
        // last_modified - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_modified');
        },
        enumerable: false,
        configurable: true
    });
    // metadata - computed: true, optional: false, required: false
    DataAwsS3BucketObject.prototype.metadata = function (key) {
        return new cdktf.StringMap(this, 'metadata').lookup(key);
    };
    Object.defineProperty(DataAwsS3BucketObject.prototype, "objectLockLegalHoldStatus", {
        // object_lock_legal_hold_status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('object_lock_legal_hold_status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsS3BucketObject.prototype, "objectLockMode", {
        // object_lock_mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('object_lock_mode');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsS3BucketObject.prototype, "objectLockRetainUntilDate", {
        // object_lock_retain_until_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('object_lock_retain_until_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsS3BucketObject.prototype, "range", {
        get: function () {
            return this.getStringAttribute('range');
        },
        set: function (value) {
            this._range = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsS3BucketObject.prototype.resetRange = function () {
        this._range = undefined;
    };
    Object.defineProperty(DataAwsS3BucketObject.prototype, "rangeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._range;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsS3BucketObject.prototype, "serverSideEncryption", {
        // server_side_encryption - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('server_side_encryption');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsS3BucketObject.prototype, "sseKmsKeyId", {
        // sse_kms_key_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('sse_kms_key_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsS3BucketObject.prototype, "storageClass", {
        // storage_class - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('storage_class');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsS3BucketObject.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsS3BucketObject.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsS3BucketObject.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsS3BucketObject.prototype, "versionId", {
        get: function () {
            return this.getStringAttribute('version_id');
        },
        set: function (value) {
            this._versionId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsS3BucketObject.prototype.resetVersionId = function () {
        this._versionId = undefined;
    };
    Object.defineProperty(DataAwsS3BucketObject.prototype, "versionIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._versionId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsS3BucketObject.prototype, "websiteRedirectLocation", {
        // website_redirect_location - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('website_redirect_location');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsS3BucketObject.prototype.synthesizeAttributes = function () {
        return {
            bucket: cdktf.stringToTerraform(this._bucket),
            key: cdktf.stringToTerraform(this._key),
            range: cdktf.stringToTerraform(this._range),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            version_id: cdktf.stringToTerraform(this._versionId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsS3BucketObject.tfResourceType = "aws_s3_bucket_object";
    return DataAwsS3BucketObject;
}(cdktf.TerraformDataSource));
exports.DataAwsS3BucketObject = DataAwsS3BucketObject;
