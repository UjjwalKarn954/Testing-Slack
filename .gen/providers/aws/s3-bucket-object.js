"use strict";
// https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html
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
exports.S3BucketObject = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html aws_s3_bucket_object}
*/
var S3BucketObject = /** @class */ (function (_super) {
    __extends(S3BucketObject, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html aws_s3_bucket_object} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3BucketObjectConfig
    */
    function S3BucketObject(scope, id, config) {
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
        _this._acl = config.acl;
        _this._bucket = config.bucket;
        _this._bucketKeyEnabled = config.bucketKeyEnabled;
        _this._cacheControl = config.cacheControl;
        _this._content = config.content;
        _this._contentBase64 = config.contentBase64;
        _this._contentDisposition = config.contentDisposition;
        _this._contentEncoding = config.contentEncoding;
        _this._contentLanguage = config.contentLanguage;
        _this._contentType = config.contentType;
        _this._etag = config.etag;
        _this._forceDestroy = config.forceDestroy;
        _this._key = config.key;
        _this._kmsKeyId = config.kmsKeyId;
        _this._metadata = config.metadata;
        _this._objectLockLegalHoldStatus = config.objectLockLegalHoldStatus;
        _this._objectLockMode = config.objectLockMode;
        _this._objectLockRetainUntilDate = config.objectLockRetainUntilDate;
        _this._serverSideEncryption = config.serverSideEncryption;
        _this._source = config.source;
        _this._sourceHash = config.sourceHash;
        _this._storageClass = config.storageClass;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._websiteRedirect = config.websiteRedirect;
        return _this;
    }
    Object.defineProperty(S3BucketObject.prototype, "acl", {
        get: function () {
            return this.getStringAttribute('acl');
        },
        set: function (value) {
            this._acl = value;
        },
        enumerable: false,
        configurable: true
    });
    S3BucketObject.prototype.resetAcl = function () {
        this._acl = undefined;
    };
    Object.defineProperty(S3BucketObject.prototype, "aclInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._acl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketObject.prototype, "bucket", {
        get: function () {
            return this.getStringAttribute('bucket');
        },
        set: function (value) {
            this._bucket = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketObject.prototype, "bucketInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bucket;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketObject.prototype, "bucketKeyEnabled", {
        get: function () {
            return this.getBooleanAttribute('bucket_key_enabled');
        },
        set: function (value) {
            this._bucketKeyEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    S3BucketObject.prototype.resetBucketKeyEnabled = function () {
        this._bucketKeyEnabled = undefined;
    };
    Object.defineProperty(S3BucketObject.prototype, "bucketKeyEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bucketKeyEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketObject.prototype, "cacheControl", {
        get: function () {
            return this.getStringAttribute('cache_control');
        },
        set: function (value) {
            this._cacheControl = value;
        },
        enumerable: false,
        configurable: true
    });
    S3BucketObject.prototype.resetCacheControl = function () {
        this._cacheControl = undefined;
    };
    Object.defineProperty(S3BucketObject.prototype, "cacheControlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cacheControl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketObject.prototype, "content", {
        get: function () {
            return this.getStringAttribute('content');
        },
        set: function (value) {
            this._content = value;
        },
        enumerable: false,
        configurable: true
    });
    S3BucketObject.prototype.resetContent = function () {
        this._content = undefined;
    };
    Object.defineProperty(S3BucketObject.prototype, "contentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._content;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketObject.prototype, "contentBase64", {
        get: function () {
            return this.getStringAttribute('content_base64');
        },
        set: function (value) {
            this._contentBase64 = value;
        },
        enumerable: false,
        configurable: true
    });
    S3BucketObject.prototype.resetContentBase64 = function () {
        this._contentBase64 = undefined;
    };
    Object.defineProperty(S3BucketObject.prototype, "contentBase64Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contentBase64;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketObject.prototype, "contentDisposition", {
        get: function () {
            return this.getStringAttribute('content_disposition');
        },
        set: function (value) {
            this._contentDisposition = value;
        },
        enumerable: false,
        configurable: true
    });
    S3BucketObject.prototype.resetContentDisposition = function () {
        this._contentDisposition = undefined;
    };
    Object.defineProperty(S3BucketObject.prototype, "contentDispositionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contentDisposition;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketObject.prototype, "contentEncoding", {
        get: function () {
            return this.getStringAttribute('content_encoding');
        },
        set: function (value) {
            this._contentEncoding = value;
        },
        enumerable: false,
        configurable: true
    });
    S3BucketObject.prototype.resetContentEncoding = function () {
        this._contentEncoding = undefined;
    };
    Object.defineProperty(S3BucketObject.prototype, "contentEncodingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contentEncoding;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketObject.prototype, "contentLanguage", {
        get: function () {
            return this.getStringAttribute('content_language');
        },
        set: function (value) {
            this._contentLanguage = value;
        },
        enumerable: false,
        configurable: true
    });
    S3BucketObject.prototype.resetContentLanguage = function () {
        this._contentLanguage = undefined;
    };
    Object.defineProperty(S3BucketObject.prototype, "contentLanguageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contentLanguage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketObject.prototype, "contentType", {
        get: function () {
            return this.getStringAttribute('content_type');
        },
        set: function (value) {
            this._contentType = value;
        },
        enumerable: false,
        configurable: true
    });
    S3BucketObject.prototype.resetContentType = function () {
        this._contentType = undefined;
    };
    Object.defineProperty(S3BucketObject.prototype, "contentTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contentType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketObject.prototype, "etag", {
        get: function () {
            return this.getStringAttribute('etag');
        },
        set: function (value) {
            this._etag = value;
        },
        enumerable: false,
        configurable: true
    });
    S3BucketObject.prototype.resetEtag = function () {
        this._etag = undefined;
    };
    Object.defineProperty(S3BucketObject.prototype, "etagInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._etag;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketObject.prototype, "forceDestroy", {
        get: function () {
            return this.getBooleanAttribute('force_destroy');
        },
        set: function (value) {
            this._forceDestroy = value;
        },
        enumerable: false,
        configurable: true
    });
    S3BucketObject.prototype.resetForceDestroy = function () {
        this._forceDestroy = undefined;
    };
    Object.defineProperty(S3BucketObject.prototype, "forceDestroyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._forceDestroy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketObject.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketObject.prototype, "key", {
        get: function () {
            return this.getStringAttribute('key');
        },
        set: function (value) {
            this._key = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketObject.prototype, "keyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._key;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketObject.prototype, "kmsKeyId", {
        get: function () {
            return this.getStringAttribute('kms_key_id');
        },
        set: function (value) {
            this._kmsKeyId = value;
        },
        enumerable: false,
        configurable: true
    });
    S3BucketObject.prototype.resetKmsKeyId = function () {
        this._kmsKeyId = undefined;
    };
    Object.defineProperty(S3BucketObject.prototype, "kmsKeyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kmsKeyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketObject.prototype, "metadata", {
        get: function () {
            return this.interpolationForAttribute('metadata');
        },
        set: function (value) {
            this._metadata = value;
        },
        enumerable: false,
        configurable: true
    });
    S3BucketObject.prototype.resetMetadata = function () {
        this._metadata = undefined;
    };
    Object.defineProperty(S3BucketObject.prototype, "metadataInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._metadata;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketObject.prototype, "objectLockLegalHoldStatus", {
        get: function () {
            return this.getStringAttribute('object_lock_legal_hold_status');
        },
        set: function (value) {
            this._objectLockLegalHoldStatus = value;
        },
        enumerable: false,
        configurable: true
    });
    S3BucketObject.prototype.resetObjectLockLegalHoldStatus = function () {
        this._objectLockLegalHoldStatus = undefined;
    };
    Object.defineProperty(S3BucketObject.prototype, "objectLockLegalHoldStatusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._objectLockLegalHoldStatus;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketObject.prototype, "objectLockMode", {
        get: function () {
            return this.getStringAttribute('object_lock_mode');
        },
        set: function (value) {
            this._objectLockMode = value;
        },
        enumerable: false,
        configurable: true
    });
    S3BucketObject.prototype.resetObjectLockMode = function () {
        this._objectLockMode = undefined;
    };
    Object.defineProperty(S3BucketObject.prototype, "objectLockModeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._objectLockMode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketObject.prototype, "objectLockRetainUntilDate", {
        get: function () {
            return this.getStringAttribute('object_lock_retain_until_date');
        },
        set: function (value) {
            this._objectLockRetainUntilDate = value;
        },
        enumerable: false,
        configurable: true
    });
    S3BucketObject.prototype.resetObjectLockRetainUntilDate = function () {
        this._objectLockRetainUntilDate = undefined;
    };
    Object.defineProperty(S3BucketObject.prototype, "objectLockRetainUntilDateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._objectLockRetainUntilDate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketObject.prototype, "serverSideEncryption", {
        get: function () {
            return this.getStringAttribute('server_side_encryption');
        },
        set: function (value) {
            this._serverSideEncryption = value;
        },
        enumerable: false,
        configurable: true
    });
    S3BucketObject.prototype.resetServerSideEncryption = function () {
        this._serverSideEncryption = undefined;
    };
    Object.defineProperty(S3BucketObject.prototype, "serverSideEncryptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serverSideEncryption;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketObject.prototype, "source", {
        get: function () {
            return this.getStringAttribute('source');
        },
        set: function (value) {
            this._source = value;
        },
        enumerable: false,
        configurable: true
    });
    S3BucketObject.prototype.resetSource = function () {
        this._source = undefined;
    };
    Object.defineProperty(S3BucketObject.prototype, "sourceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._source;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketObject.prototype, "sourceHash", {
        get: function () {
            return this.getStringAttribute('source_hash');
        },
        set: function (value) {
            this._sourceHash = value;
        },
        enumerable: false,
        configurable: true
    });
    S3BucketObject.prototype.resetSourceHash = function () {
        this._sourceHash = undefined;
    };
    Object.defineProperty(S3BucketObject.prototype, "sourceHashInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sourceHash;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketObject.prototype, "storageClass", {
        get: function () {
            return this.getStringAttribute('storage_class');
        },
        set: function (value) {
            this._storageClass = value;
        },
        enumerable: false,
        configurable: true
    });
    S3BucketObject.prototype.resetStorageClass = function () {
        this._storageClass = undefined;
    };
    Object.defineProperty(S3BucketObject.prototype, "storageClassInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._storageClass;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketObject.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    S3BucketObject.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(S3BucketObject.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketObject.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    S3BucketObject.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(S3BucketObject.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketObject.prototype, "versionId", {
        // version_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('version_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketObject.prototype, "websiteRedirect", {
        get: function () {
            return this.getStringAttribute('website_redirect');
        },
        set: function (value) {
            this._websiteRedirect = value;
        },
        enumerable: false,
        configurable: true
    });
    S3BucketObject.prototype.resetWebsiteRedirect = function () {
        this._websiteRedirect = undefined;
    };
    Object.defineProperty(S3BucketObject.prototype, "websiteRedirectInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._websiteRedirect;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    S3BucketObject.prototype.synthesizeAttributes = function () {
        return {
            acl: cdktf.stringToTerraform(this._acl),
            bucket: cdktf.stringToTerraform(this._bucket),
            bucket_key_enabled: cdktf.booleanToTerraform(this._bucketKeyEnabled),
            cache_control: cdktf.stringToTerraform(this._cacheControl),
            content: cdktf.stringToTerraform(this._content),
            content_base64: cdktf.stringToTerraform(this._contentBase64),
            content_disposition: cdktf.stringToTerraform(this._contentDisposition),
            content_encoding: cdktf.stringToTerraform(this._contentEncoding),
            content_language: cdktf.stringToTerraform(this._contentLanguage),
            content_type: cdktf.stringToTerraform(this._contentType),
            etag: cdktf.stringToTerraform(this._etag),
            force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
            key: cdktf.stringToTerraform(this._key),
            kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
            metadata: cdktf.hashMapper(cdktf.anyToTerraform)(this._metadata),
            object_lock_legal_hold_status: cdktf.stringToTerraform(this._objectLockLegalHoldStatus),
            object_lock_mode: cdktf.stringToTerraform(this._objectLockMode),
            object_lock_retain_until_date: cdktf.stringToTerraform(this._objectLockRetainUntilDate),
            server_side_encryption: cdktf.stringToTerraform(this._serverSideEncryption),
            source: cdktf.stringToTerraform(this._source),
            source_hash: cdktf.stringToTerraform(this._sourceHash),
            storage_class: cdktf.stringToTerraform(this._storageClass),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            website_redirect: cdktf.stringToTerraform(this._websiteRedirect)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    S3BucketObject.tfResourceType = "aws_s3_bucket_object";
    return S3BucketObject;
}(cdktf.TerraformResource));
exports.S3BucketObject = S3BucketObject;
