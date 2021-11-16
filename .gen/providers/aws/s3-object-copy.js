"use strict";
// https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html
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
exports.S3ObjectCopy = void 0;
var cdktf = require("cdktf");
function s3ObjectCopyGrantToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        email: cdktf.stringToTerraform(struct.email),
        id: cdktf.stringToTerraform(struct.id),
        permissions: cdktf.listMapper(cdktf.stringToTerraform)(struct.permissions),
        type: cdktf.stringToTerraform(struct.type),
        uri: cdktf.stringToTerraform(struct.uri)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html aws_s3_object_copy}
*/
var S3ObjectCopy = /** @class */ (function (_super) {
    __extends(S3ObjectCopy, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy.html aws_s3_object_copy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3ObjectCopyConfig
    */
    function S3ObjectCopy(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_s3_object_copy',
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
        _this._contentDisposition = config.contentDisposition;
        _this._contentEncoding = config.contentEncoding;
        _this._contentLanguage = config.contentLanguage;
        _this._contentType = config.contentType;
        _this._copyIfMatch = config.copyIfMatch;
        _this._copyIfModifiedSince = config.copyIfModifiedSince;
        _this._copyIfNoneMatch = config.copyIfNoneMatch;
        _this._copyIfUnmodifiedSince = config.copyIfUnmodifiedSince;
        _this._customerAlgorithm = config.customerAlgorithm;
        _this._customerKey = config.customerKey;
        _this._customerKeyMd5 = config.customerKeyMd5;
        _this._expectedBucketOwner = config.expectedBucketOwner;
        _this._expectedSourceBucketOwner = config.expectedSourceBucketOwner;
        _this._expires = config.expires;
        _this._forceDestroy = config.forceDestroy;
        _this._key = config.key;
        _this._kmsEncryptionContext = config.kmsEncryptionContext;
        _this._kmsKeyId = config.kmsKeyId;
        _this._metadata = config.metadata;
        _this._metadataDirective = config.metadataDirective;
        _this._objectLockLegalHoldStatus = config.objectLockLegalHoldStatus;
        _this._objectLockMode = config.objectLockMode;
        _this._objectLockRetainUntilDate = config.objectLockRetainUntilDate;
        _this._requestPayer = config.requestPayer;
        _this._serverSideEncryption = config.serverSideEncryption;
        _this._source = config.source;
        _this._sourceCustomerAlgorithm = config.sourceCustomerAlgorithm;
        _this._sourceCustomerKey = config.sourceCustomerKey;
        _this._sourceCustomerKeyMd5 = config.sourceCustomerKeyMd5;
        _this._storageClass = config.storageClass;
        _this._taggingDirective = config.taggingDirective;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._websiteRedirect = config.websiteRedirect;
        _this._grant = config.grant;
        return _this;
    }
    Object.defineProperty(S3ObjectCopy.prototype, "acl", {
        get: function () {
            return this.getStringAttribute('acl');
        },
        set: function (value) {
            this._acl = value;
        },
        enumerable: false,
        configurable: true
    });
    S3ObjectCopy.prototype.resetAcl = function () {
        this._acl = undefined;
    };
    Object.defineProperty(S3ObjectCopy.prototype, "aclInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._acl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ObjectCopy.prototype, "bucket", {
        get: function () {
            return this.getStringAttribute('bucket');
        },
        set: function (value) {
            this._bucket = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ObjectCopy.prototype, "bucketInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bucket;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ObjectCopy.prototype, "bucketKeyEnabled", {
        get: function () {
            return this.getBooleanAttribute('bucket_key_enabled');
        },
        set: function (value) {
            this._bucketKeyEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    S3ObjectCopy.prototype.resetBucketKeyEnabled = function () {
        this._bucketKeyEnabled = undefined;
    };
    Object.defineProperty(S3ObjectCopy.prototype, "bucketKeyEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bucketKeyEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ObjectCopy.prototype, "cacheControl", {
        get: function () {
            return this.getStringAttribute('cache_control');
        },
        set: function (value) {
            this._cacheControl = value;
        },
        enumerable: false,
        configurable: true
    });
    S3ObjectCopy.prototype.resetCacheControl = function () {
        this._cacheControl = undefined;
    };
    Object.defineProperty(S3ObjectCopy.prototype, "cacheControlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cacheControl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ObjectCopy.prototype, "contentDisposition", {
        get: function () {
            return this.getStringAttribute('content_disposition');
        },
        set: function (value) {
            this._contentDisposition = value;
        },
        enumerable: false,
        configurable: true
    });
    S3ObjectCopy.prototype.resetContentDisposition = function () {
        this._contentDisposition = undefined;
    };
    Object.defineProperty(S3ObjectCopy.prototype, "contentDispositionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contentDisposition;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ObjectCopy.prototype, "contentEncoding", {
        get: function () {
            return this.getStringAttribute('content_encoding');
        },
        set: function (value) {
            this._contentEncoding = value;
        },
        enumerable: false,
        configurable: true
    });
    S3ObjectCopy.prototype.resetContentEncoding = function () {
        this._contentEncoding = undefined;
    };
    Object.defineProperty(S3ObjectCopy.prototype, "contentEncodingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contentEncoding;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ObjectCopy.prototype, "contentLanguage", {
        get: function () {
            return this.getStringAttribute('content_language');
        },
        set: function (value) {
            this._contentLanguage = value;
        },
        enumerable: false,
        configurable: true
    });
    S3ObjectCopy.prototype.resetContentLanguage = function () {
        this._contentLanguage = undefined;
    };
    Object.defineProperty(S3ObjectCopy.prototype, "contentLanguageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contentLanguage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ObjectCopy.prototype, "contentType", {
        get: function () {
            return this.getStringAttribute('content_type');
        },
        set: function (value) {
            this._contentType = value;
        },
        enumerable: false,
        configurable: true
    });
    S3ObjectCopy.prototype.resetContentType = function () {
        this._contentType = undefined;
    };
    Object.defineProperty(S3ObjectCopy.prototype, "contentTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contentType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ObjectCopy.prototype, "copyIfMatch", {
        get: function () {
            return this.getStringAttribute('copy_if_match');
        },
        set: function (value) {
            this._copyIfMatch = value;
        },
        enumerable: false,
        configurable: true
    });
    S3ObjectCopy.prototype.resetCopyIfMatch = function () {
        this._copyIfMatch = undefined;
    };
    Object.defineProperty(S3ObjectCopy.prototype, "copyIfMatchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._copyIfMatch;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ObjectCopy.prototype, "copyIfModifiedSince", {
        get: function () {
            return this.getStringAttribute('copy_if_modified_since');
        },
        set: function (value) {
            this._copyIfModifiedSince = value;
        },
        enumerable: false,
        configurable: true
    });
    S3ObjectCopy.prototype.resetCopyIfModifiedSince = function () {
        this._copyIfModifiedSince = undefined;
    };
    Object.defineProperty(S3ObjectCopy.prototype, "copyIfModifiedSinceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._copyIfModifiedSince;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ObjectCopy.prototype, "copyIfNoneMatch", {
        get: function () {
            return this.getStringAttribute('copy_if_none_match');
        },
        set: function (value) {
            this._copyIfNoneMatch = value;
        },
        enumerable: false,
        configurable: true
    });
    S3ObjectCopy.prototype.resetCopyIfNoneMatch = function () {
        this._copyIfNoneMatch = undefined;
    };
    Object.defineProperty(S3ObjectCopy.prototype, "copyIfNoneMatchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._copyIfNoneMatch;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ObjectCopy.prototype, "copyIfUnmodifiedSince", {
        get: function () {
            return this.getStringAttribute('copy_if_unmodified_since');
        },
        set: function (value) {
            this._copyIfUnmodifiedSince = value;
        },
        enumerable: false,
        configurable: true
    });
    S3ObjectCopy.prototype.resetCopyIfUnmodifiedSince = function () {
        this._copyIfUnmodifiedSince = undefined;
    };
    Object.defineProperty(S3ObjectCopy.prototype, "copyIfUnmodifiedSinceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._copyIfUnmodifiedSince;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ObjectCopy.prototype, "customerAlgorithm", {
        get: function () {
            return this.getStringAttribute('customer_algorithm');
        },
        set: function (value) {
            this._customerAlgorithm = value;
        },
        enumerable: false,
        configurable: true
    });
    S3ObjectCopy.prototype.resetCustomerAlgorithm = function () {
        this._customerAlgorithm = undefined;
    };
    Object.defineProperty(S3ObjectCopy.prototype, "customerAlgorithmInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customerAlgorithm;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ObjectCopy.prototype, "customerKey", {
        get: function () {
            return this.getStringAttribute('customer_key');
        },
        set: function (value) {
            this._customerKey = value;
        },
        enumerable: false,
        configurable: true
    });
    S3ObjectCopy.prototype.resetCustomerKey = function () {
        this._customerKey = undefined;
    };
    Object.defineProperty(S3ObjectCopy.prototype, "customerKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customerKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ObjectCopy.prototype, "customerKeyMd5", {
        get: function () {
            return this.getStringAttribute('customer_key_md5');
        },
        set: function (value) {
            this._customerKeyMd5 = value;
        },
        enumerable: false,
        configurable: true
    });
    S3ObjectCopy.prototype.resetCustomerKeyMd5 = function () {
        this._customerKeyMd5 = undefined;
    };
    Object.defineProperty(S3ObjectCopy.prototype, "customerKeyMd5Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customerKeyMd5;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ObjectCopy.prototype, "etag", {
        // etag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('etag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ObjectCopy.prototype, "expectedBucketOwner", {
        get: function () {
            return this.getStringAttribute('expected_bucket_owner');
        },
        set: function (value) {
            this._expectedBucketOwner = value;
        },
        enumerable: false,
        configurable: true
    });
    S3ObjectCopy.prototype.resetExpectedBucketOwner = function () {
        this._expectedBucketOwner = undefined;
    };
    Object.defineProperty(S3ObjectCopy.prototype, "expectedBucketOwnerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._expectedBucketOwner;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ObjectCopy.prototype, "expectedSourceBucketOwner", {
        get: function () {
            return this.getStringAttribute('expected_source_bucket_owner');
        },
        set: function (value) {
            this._expectedSourceBucketOwner = value;
        },
        enumerable: false,
        configurable: true
    });
    S3ObjectCopy.prototype.resetExpectedSourceBucketOwner = function () {
        this._expectedSourceBucketOwner = undefined;
    };
    Object.defineProperty(S3ObjectCopy.prototype, "expectedSourceBucketOwnerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._expectedSourceBucketOwner;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ObjectCopy.prototype, "expiration", {
        // expiration - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expiration');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ObjectCopy.prototype, "expires", {
        get: function () {
            return this.getStringAttribute('expires');
        },
        set: function (value) {
            this._expires = value;
        },
        enumerable: false,
        configurable: true
    });
    S3ObjectCopy.prototype.resetExpires = function () {
        this._expires = undefined;
    };
    Object.defineProperty(S3ObjectCopy.prototype, "expiresInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._expires;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ObjectCopy.prototype, "forceDestroy", {
        get: function () {
            return this.getBooleanAttribute('force_destroy');
        },
        set: function (value) {
            this._forceDestroy = value;
        },
        enumerable: false,
        configurable: true
    });
    S3ObjectCopy.prototype.resetForceDestroy = function () {
        this._forceDestroy = undefined;
    };
    Object.defineProperty(S3ObjectCopy.prototype, "forceDestroyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._forceDestroy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ObjectCopy.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ObjectCopy.prototype, "key", {
        get: function () {
            return this.getStringAttribute('key');
        },
        set: function (value) {
            this._key = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ObjectCopy.prototype, "keyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._key;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ObjectCopy.prototype, "kmsEncryptionContext", {
        get: function () {
            return this.getStringAttribute('kms_encryption_context');
        },
        set: function (value) {
            this._kmsEncryptionContext = value;
        },
        enumerable: false,
        configurable: true
    });
    S3ObjectCopy.prototype.resetKmsEncryptionContext = function () {
        this._kmsEncryptionContext = undefined;
    };
    Object.defineProperty(S3ObjectCopy.prototype, "kmsEncryptionContextInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kmsEncryptionContext;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ObjectCopy.prototype, "kmsKeyId", {
        get: function () {
            return this.getStringAttribute('kms_key_id');
        },
        set: function (value) {
            this._kmsKeyId = value;
        },
        enumerable: false,
        configurable: true
    });
    S3ObjectCopy.prototype.resetKmsKeyId = function () {
        this._kmsKeyId = undefined;
    };
    Object.defineProperty(S3ObjectCopy.prototype, "kmsKeyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kmsKeyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ObjectCopy.prototype, "lastModified", {
        // last_modified - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_modified');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ObjectCopy.prototype, "metadata", {
        get: function () {
            return this.interpolationForAttribute('metadata'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._metadata = value;
        },
        enumerable: false,
        configurable: true
    });
    S3ObjectCopy.prototype.resetMetadata = function () {
        this._metadata = undefined;
    };
    Object.defineProperty(S3ObjectCopy.prototype, "metadataInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._metadata;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ObjectCopy.prototype, "metadataDirective", {
        get: function () {
            return this.getStringAttribute('metadata_directive');
        },
        set: function (value) {
            this._metadataDirective = value;
        },
        enumerable: false,
        configurable: true
    });
    S3ObjectCopy.prototype.resetMetadataDirective = function () {
        this._metadataDirective = undefined;
    };
    Object.defineProperty(S3ObjectCopy.prototype, "metadataDirectiveInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._metadataDirective;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ObjectCopy.prototype, "objectLockLegalHoldStatus", {
        get: function () {
            return this.getStringAttribute('object_lock_legal_hold_status');
        },
        set: function (value) {
            this._objectLockLegalHoldStatus = value;
        },
        enumerable: false,
        configurable: true
    });
    S3ObjectCopy.prototype.resetObjectLockLegalHoldStatus = function () {
        this._objectLockLegalHoldStatus = undefined;
    };
    Object.defineProperty(S3ObjectCopy.prototype, "objectLockLegalHoldStatusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._objectLockLegalHoldStatus;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ObjectCopy.prototype, "objectLockMode", {
        get: function () {
            return this.getStringAttribute('object_lock_mode');
        },
        set: function (value) {
            this._objectLockMode = value;
        },
        enumerable: false,
        configurable: true
    });
    S3ObjectCopy.prototype.resetObjectLockMode = function () {
        this._objectLockMode = undefined;
    };
    Object.defineProperty(S3ObjectCopy.prototype, "objectLockModeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._objectLockMode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ObjectCopy.prototype, "objectLockRetainUntilDate", {
        get: function () {
            return this.getStringAttribute('object_lock_retain_until_date');
        },
        set: function (value) {
            this._objectLockRetainUntilDate = value;
        },
        enumerable: false,
        configurable: true
    });
    S3ObjectCopy.prototype.resetObjectLockRetainUntilDate = function () {
        this._objectLockRetainUntilDate = undefined;
    };
    Object.defineProperty(S3ObjectCopy.prototype, "objectLockRetainUntilDateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._objectLockRetainUntilDate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ObjectCopy.prototype, "requestCharged", {
        // request_charged - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('request_charged');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ObjectCopy.prototype, "requestPayer", {
        get: function () {
            return this.getStringAttribute('request_payer');
        },
        set: function (value) {
            this._requestPayer = value;
        },
        enumerable: false,
        configurable: true
    });
    S3ObjectCopy.prototype.resetRequestPayer = function () {
        this._requestPayer = undefined;
    };
    Object.defineProperty(S3ObjectCopy.prototype, "requestPayerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requestPayer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ObjectCopy.prototype, "serverSideEncryption", {
        get: function () {
            return this.getStringAttribute('server_side_encryption');
        },
        set: function (value) {
            this._serverSideEncryption = value;
        },
        enumerable: false,
        configurable: true
    });
    S3ObjectCopy.prototype.resetServerSideEncryption = function () {
        this._serverSideEncryption = undefined;
    };
    Object.defineProperty(S3ObjectCopy.prototype, "serverSideEncryptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serverSideEncryption;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ObjectCopy.prototype, "source", {
        get: function () {
            return this.getStringAttribute('source');
        },
        set: function (value) {
            this._source = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ObjectCopy.prototype, "sourceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._source;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ObjectCopy.prototype, "sourceCustomerAlgorithm", {
        get: function () {
            return this.getStringAttribute('source_customer_algorithm');
        },
        set: function (value) {
            this._sourceCustomerAlgorithm = value;
        },
        enumerable: false,
        configurable: true
    });
    S3ObjectCopy.prototype.resetSourceCustomerAlgorithm = function () {
        this._sourceCustomerAlgorithm = undefined;
    };
    Object.defineProperty(S3ObjectCopy.prototype, "sourceCustomerAlgorithmInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sourceCustomerAlgorithm;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ObjectCopy.prototype, "sourceCustomerKey", {
        get: function () {
            return this.getStringAttribute('source_customer_key');
        },
        set: function (value) {
            this._sourceCustomerKey = value;
        },
        enumerable: false,
        configurable: true
    });
    S3ObjectCopy.prototype.resetSourceCustomerKey = function () {
        this._sourceCustomerKey = undefined;
    };
    Object.defineProperty(S3ObjectCopy.prototype, "sourceCustomerKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sourceCustomerKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ObjectCopy.prototype, "sourceCustomerKeyMd5", {
        get: function () {
            return this.getStringAttribute('source_customer_key_md5');
        },
        set: function (value) {
            this._sourceCustomerKeyMd5 = value;
        },
        enumerable: false,
        configurable: true
    });
    S3ObjectCopy.prototype.resetSourceCustomerKeyMd5 = function () {
        this._sourceCustomerKeyMd5 = undefined;
    };
    Object.defineProperty(S3ObjectCopy.prototype, "sourceCustomerKeyMd5Input", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sourceCustomerKeyMd5;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ObjectCopy.prototype, "sourceVersionId", {
        // source_version_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('source_version_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ObjectCopy.prototype, "storageClass", {
        get: function () {
            return this.getStringAttribute('storage_class');
        },
        set: function (value) {
            this._storageClass = value;
        },
        enumerable: false,
        configurable: true
    });
    S3ObjectCopy.prototype.resetStorageClass = function () {
        this._storageClass = undefined;
    };
    Object.defineProperty(S3ObjectCopy.prototype, "storageClassInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._storageClass;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ObjectCopy.prototype, "taggingDirective", {
        get: function () {
            return this.getStringAttribute('tagging_directive');
        },
        set: function (value) {
            this._taggingDirective = value;
        },
        enumerable: false,
        configurable: true
    });
    S3ObjectCopy.prototype.resetTaggingDirective = function () {
        this._taggingDirective = undefined;
    };
    Object.defineProperty(S3ObjectCopy.prototype, "taggingDirectiveInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._taggingDirective;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ObjectCopy.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    S3ObjectCopy.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(S3ObjectCopy.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ObjectCopy.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    S3ObjectCopy.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(S3ObjectCopy.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ObjectCopy.prototype, "versionId", {
        // version_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('version_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ObjectCopy.prototype, "websiteRedirect", {
        get: function () {
            return this.getStringAttribute('website_redirect');
        },
        set: function (value) {
            this._websiteRedirect = value;
        },
        enumerable: false,
        configurable: true
    });
    S3ObjectCopy.prototype.resetWebsiteRedirect = function () {
        this._websiteRedirect = undefined;
    };
    Object.defineProperty(S3ObjectCopy.prototype, "websiteRedirectInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._websiteRedirect;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ObjectCopy.prototype, "grant", {
        get: function () {
            return this.interpolationForAttribute('grant');
        },
        set: function (value) {
            this._grant = value;
        },
        enumerable: false,
        configurable: true
    });
    S3ObjectCopy.prototype.resetGrant = function () {
        this._grant = undefined;
    };
    Object.defineProperty(S3ObjectCopy.prototype, "grantInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._grant;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    S3ObjectCopy.prototype.synthesizeAttributes = function () {
        return {
            acl: cdktf.stringToTerraform(this._acl),
            bucket: cdktf.stringToTerraform(this._bucket),
            bucket_key_enabled: cdktf.booleanToTerraform(this._bucketKeyEnabled),
            cache_control: cdktf.stringToTerraform(this._cacheControl),
            content_disposition: cdktf.stringToTerraform(this._contentDisposition),
            content_encoding: cdktf.stringToTerraform(this._contentEncoding),
            content_language: cdktf.stringToTerraform(this._contentLanguage),
            content_type: cdktf.stringToTerraform(this._contentType),
            copy_if_match: cdktf.stringToTerraform(this._copyIfMatch),
            copy_if_modified_since: cdktf.stringToTerraform(this._copyIfModifiedSince),
            copy_if_none_match: cdktf.stringToTerraform(this._copyIfNoneMatch),
            copy_if_unmodified_since: cdktf.stringToTerraform(this._copyIfUnmodifiedSince),
            customer_algorithm: cdktf.stringToTerraform(this._customerAlgorithm),
            customer_key: cdktf.stringToTerraform(this._customerKey),
            customer_key_md5: cdktf.stringToTerraform(this._customerKeyMd5),
            expected_bucket_owner: cdktf.stringToTerraform(this._expectedBucketOwner),
            expected_source_bucket_owner: cdktf.stringToTerraform(this._expectedSourceBucketOwner),
            expires: cdktf.stringToTerraform(this._expires),
            force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
            key: cdktf.stringToTerraform(this._key),
            kms_encryption_context: cdktf.stringToTerraform(this._kmsEncryptionContext),
            kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
            metadata: cdktf.hashMapper(cdktf.anyToTerraform)(this._metadata),
            metadata_directive: cdktf.stringToTerraform(this._metadataDirective),
            object_lock_legal_hold_status: cdktf.stringToTerraform(this._objectLockLegalHoldStatus),
            object_lock_mode: cdktf.stringToTerraform(this._objectLockMode),
            object_lock_retain_until_date: cdktf.stringToTerraform(this._objectLockRetainUntilDate),
            request_payer: cdktf.stringToTerraform(this._requestPayer),
            server_side_encryption: cdktf.stringToTerraform(this._serverSideEncryption),
            source: cdktf.stringToTerraform(this._source),
            source_customer_algorithm: cdktf.stringToTerraform(this._sourceCustomerAlgorithm),
            source_customer_key: cdktf.stringToTerraform(this._sourceCustomerKey),
            source_customer_key_md5: cdktf.stringToTerraform(this._sourceCustomerKeyMd5),
            storage_class: cdktf.stringToTerraform(this._storageClass),
            tagging_directive: cdktf.stringToTerraform(this._taggingDirective),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            website_redirect: cdktf.stringToTerraform(this._websiteRedirect),
            grant: cdktf.listMapper(s3ObjectCopyGrantToTerraform)(this._grant)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    S3ObjectCopy.tfResourceType = "aws_s3_object_copy";
    return S3ObjectCopy;
}(cdktf.TerraformResource));
exports.S3ObjectCopy = S3ObjectCopy;
