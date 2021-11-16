"use strict";
// https://www.terraform.io/docs/providers/aws/r/s3_bucket.html
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
exports.S3Bucket = void 0;
var cdktf = require("cdktf");
function s3BucketCorsRuleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        allowed_headers: cdktf.listMapper(cdktf.stringToTerraform)(struct.allowedHeaders),
        allowed_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct.allowedMethods),
        allowed_origins: cdktf.listMapper(cdktf.stringToTerraform)(struct.allowedOrigins),
        expose_headers: cdktf.listMapper(cdktf.stringToTerraform)(struct.exposeHeaders),
        max_age_seconds: cdktf.numberToTerraform(struct.maxAgeSeconds)
    };
}
function s3BucketGrantToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
        permissions: cdktf.listMapper(cdktf.stringToTerraform)(struct.permissions),
        type: cdktf.stringToTerraform(struct.type),
        uri: cdktf.stringToTerraform(struct.uri)
    };
}
function s3BucketLifecycleRuleExpirationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        date: cdktf.stringToTerraform(struct.date),
        days: cdktf.numberToTerraform(struct.days),
        expired_object_delete_marker: cdktf.booleanToTerraform(struct.expiredObjectDeleteMarker)
    };
}
function s3BucketLifecycleRuleNoncurrentVersionExpirationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        days: cdktf.numberToTerraform(struct.days)
    };
}
function s3BucketLifecycleRuleNoncurrentVersionTransitionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        days: cdktf.numberToTerraform(struct.days),
        storage_class: cdktf.stringToTerraform(struct.storageClass)
    };
}
function s3BucketLifecycleRuleTransitionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        date: cdktf.stringToTerraform(struct.date),
        days: cdktf.numberToTerraform(struct.days),
        storage_class: cdktf.stringToTerraform(struct.storageClass)
    };
}
function s3BucketLifecycleRuleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        abort_incomplete_multipart_upload_days: cdktf.numberToTerraform(struct.abortIncompleteMultipartUploadDays),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        id: cdktf.stringToTerraform(struct.id),
        prefix: cdktf.stringToTerraform(struct.prefix),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct.tags),
        expiration: cdktf.listMapper(s3BucketLifecycleRuleExpirationToTerraform)(struct.expiration),
        noncurrent_version_expiration: cdktf.listMapper(s3BucketLifecycleRuleNoncurrentVersionExpirationToTerraform)(struct.noncurrentVersionExpiration),
        noncurrent_version_transition: cdktf.listMapper(s3BucketLifecycleRuleNoncurrentVersionTransitionToTerraform)(struct.noncurrentVersionTransition),
        transition: cdktf.listMapper(s3BucketLifecycleRuleTransitionToTerraform)(struct.transition)
    };
}
function s3BucketLoggingToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        target_bucket: cdktf.stringToTerraform(struct.targetBucket),
        target_prefix: cdktf.stringToTerraform(struct.targetPrefix)
    };
}
function s3BucketObjectLockConfigurationRuleDefaultRetentionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        days: cdktf.numberToTerraform(struct.days),
        mode: cdktf.stringToTerraform(struct.mode),
        years: cdktf.numberToTerraform(struct.years)
    };
}
function s3BucketObjectLockConfigurationRuleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        default_retention: cdktf.listMapper(s3BucketObjectLockConfigurationRuleDefaultRetentionToTerraform)(struct.defaultRetention)
    };
}
function s3BucketObjectLockConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        object_lock_enabled: cdktf.stringToTerraform(struct.objectLockEnabled),
        rule: cdktf.listMapper(s3BucketObjectLockConfigurationRuleToTerraform)(struct.rule)
    };
}
function s3BucketReplicationConfigurationRulesDestinationAccessControlTranslationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        owner: cdktf.stringToTerraform(struct.owner)
    };
}
function s3BucketReplicationConfigurationRulesDestinationMetricsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        minutes: cdktf.numberToTerraform(struct.minutes),
        status: cdktf.stringToTerraform(struct.status)
    };
}
function s3BucketReplicationConfigurationRulesDestinationReplicationTimeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        minutes: cdktf.numberToTerraform(struct.minutes),
        status: cdktf.stringToTerraform(struct.status)
    };
}
function s3BucketReplicationConfigurationRulesDestinationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        account_id: cdktf.stringToTerraform(struct.accountId),
        bucket: cdktf.stringToTerraform(struct.bucket),
        replica_kms_key_id: cdktf.stringToTerraform(struct.replicaKmsKeyId),
        storage_class: cdktf.stringToTerraform(struct.storageClass),
        access_control_translation: cdktf.listMapper(s3BucketReplicationConfigurationRulesDestinationAccessControlTranslationToTerraform)(struct.accessControlTranslation),
        metrics: cdktf.listMapper(s3BucketReplicationConfigurationRulesDestinationMetricsToTerraform)(struct.metrics),
        replication_time: cdktf.listMapper(s3BucketReplicationConfigurationRulesDestinationReplicationTimeToTerraform)(struct.replicationTime)
    };
}
function s3BucketReplicationConfigurationRulesFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        prefix: cdktf.stringToTerraform(struct.prefix),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct.tags)
    };
}
function s3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled)
    };
}
function s3BucketReplicationConfigurationRulesSourceSelectionCriteriaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        sse_kms_encrypted_objects: cdktf.listMapper(s3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsToTerraform)(struct.sseKmsEncryptedObjects)
    };
}
function s3BucketReplicationConfigurationRulesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        delete_marker_replication_status: cdktf.stringToTerraform(struct.deleteMarkerReplicationStatus),
        id: cdktf.stringToTerraform(struct.id),
        prefix: cdktf.stringToTerraform(struct.prefix),
        priority: cdktf.numberToTerraform(struct.priority),
        status: cdktf.stringToTerraform(struct.status),
        destination: cdktf.listMapper(s3BucketReplicationConfigurationRulesDestinationToTerraform)(struct.destination),
        filter: cdktf.listMapper(s3BucketReplicationConfigurationRulesFilterToTerraform)(struct.filter),
        source_selection_criteria: cdktf.listMapper(s3BucketReplicationConfigurationRulesSourceSelectionCriteriaToTerraform)(struct.sourceSelectionCriteria)
    };
}
function s3BucketReplicationConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        role: cdktf.stringToTerraform(struct.role),
        rules: cdktf.listMapper(s3BucketReplicationConfigurationRulesToTerraform)(struct.rules)
    };
}
function s3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        kms_master_key_id: cdktf.stringToTerraform(struct.kmsMasterKeyId),
        sse_algorithm: cdktf.stringToTerraform(struct.sseAlgorithm)
    };
}
function s3BucketServerSideEncryptionConfigurationRuleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket_key_enabled: cdktf.booleanToTerraform(struct.bucketKeyEnabled),
        apply_server_side_encryption_by_default: cdktf.listMapper(s3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultToTerraform)(struct.applyServerSideEncryptionByDefault)
    };
}
function s3BucketServerSideEncryptionConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        rule: cdktf.listMapper(s3BucketServerSideEncryptionConfigurationRuleToTerraform)(struct.rule)
    };
}
function s3BucketVersioningToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        mfa_delete: cdktf.booleanToTerraform(struct.mfaDelete)
    };
}
function s3BucketWebsiteToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        error_document: cdktf.stringToTerraform(struct.errorDocument),
        index_document: cdktf.stringToTerraform(struct.indexDocument),
        redirect_all_requests_to: cdktf.stringToTerraform(struct.redirectAllRequestsTo),
        routing_rules: cdktf.stringToTerraform(struct.routingRules)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html aws_s3_bucket}
*/
var S3Bucket = /** @class */ (function (_super) {
    __extends(S3Bucket, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html aws_s3_bucket} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3BucketConfig = {}
    */
    function S3Bucket(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_s3_bucket',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._accelerationStatus = config.accelerationStatus;
        _this._acl = config.acl;
        _this._bucket = config.bucket;
        _this._bucketPrefix = config.bucketPrefix;
        _this._forceDestroy = config.forceDestroy;
        _this._hostedZoneId = config.hostedZoneId;
        _this._policy = config.policy;
        _this._requestPayer = config.requestPayer;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._websiteDomain = config.websiteDomain;
        _this._websiteEndpoint = config.websiteEndpoint;
        _this._corsRule = config.corsRule;
        _this._grant = config.grant;
        _this._lifecycleRule = config.lifecycleRule;
        _this._logging = config.logging;
        _this._objectLockConfiguration = config.objectLockConfiguration;
        _this._replicationConfiguration = config.replicationConfiguration;
        _this._serverSideEncryptionConfiguration = config.serverSideEncryptionConfiguration;
        _this._versioning = config.versioning;
        _this._website = config.website;
        return _this;
    }
    Object.defineProperty(S3Bucket.prototype, "accelerationStatus", {
        get: function () {
            return this.getStringAttribute('acceleration_status');
        },
        set: function (value) {
            this._accelerationStatus = value;
        },
        enumerable: false,
        configurable: true
    });
    S3Bucket.prototype.resetAccelerationStatus = function () {
        this._accelerationStatus = undefined;
    };
    Object.defineProperty(S3Bucket.prototype, "accelerationStatusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accelerationStatus;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3Bucket.prototype, "acl", {
        get: function () {
            return this.getStringAttribute('acl');
        },
        set: function (value) {
            this._acl = value;
        },
        enumerable: false,
        configurable: true
    });
    S3Bucket.prototype.resetAcl = function () {
        this._acl = undefined;
    };
    Object.defineProperty(S3Bucket.prototype, "aclInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._acl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3Bucket.prototype, "arn", {
        // arn - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3Bucket.prototype, "bucket", {
        get: function () {
            return this.getStringAttribute('bucket');
        },
        set: function (value) {
            this._bucket = value;
        },
        enumerable: false,
        configurable: true
    });
    S3Bucket.prototype.resetBucket = function () {
        this._bucket = undefined;
    };
    Object.defineProperty(S3Bucket.prototype, "bucketInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bucket;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3Bucket.prototype, "bucketDomainName", {
        // bucket_domain_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('bucket_domain_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3Bucket.prototype, "bucketPrefix", {
        get: function () {
            return this.getStringAttribute('bucket_prefix');
        },
        set: function (value) {
            this._bucketPrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    S3Bucket.prototype.resetBucketPrefix = function () {
        this._bucketPrefix = undefined;
    };
    Object.defineProperty(S3Bucket.prototype, "bucketPrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bucketPrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3Bucket.prototype, "bucketRegionalDomainName", {
        // bucket_regional_domain_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('bucket_regional_domain_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3Bucket.prototype, "forceDestroy", {
        get: function () {
            return this.getBooleanAttribute('force_destroy');
        },
        set: function (value) {
            this._forceDestroy = value;
        },
        enumerable: false,
        configurable: true
    });
    S3Bucket.prototype.resetForceDestroy = function () {
        this._forceDestroy = undefined;
    };
    Object.defineProperty(S3Bucket.prototype, "forceDestroyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._forceDestroy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3Bucket.prototype, "hostedZoneId", {
        get: function () {
            return this.getStringAttribute('hosted_zone_id');
        },
        set: function (value) {
            this._hostedZoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    S3Bucket.prototype.resetHostedZoneId = function () {
        this._hostedZoneId = undefined;
    };
    Object.defineProperty(S3Bucket.prototype, "hostedZoneIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hostedZoneId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3Bucket.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3Bucket.prototype, "policy", {
        get: function () {
            return this.getStringAttribute('policy');
        },
        set: function (value) {
            this._policy = value;
        },
        enumerable: false,
        configurable: true
    });
    S3Bucket.prototype.resetPolicy = function () {
        this._policy = undefined;
    };
    Object.defineProperty(S3Bucket.prototype, "policyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3Bucket.prototype, "region", {
        // region - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('region');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3Bucket.prototype, "requestPayer", {
        get: function () {
            return this.getStringAttribute('request_payer');
        },
        set: function (value) {
            this._requestPayer = value;
        },
        enumerable: false,
        configurable: true
    });
    S3Bucket.prototype.resetRequestPayer = function () {
        this._requestPayer = undefined;
    };
    Object.defineProperty(S3Bucket.prototype, "requestPayerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requestPayer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3Bucket.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    S3Bucket.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(S3Bucket.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3Bucket.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    S3Bucket.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(S3Bucket.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3Bucket.prototype, "websiteDomain", {
        get: function () {
            return this.getStringAttribute('website_domain');
        },
        set: function (value) {
            this._websiteDomain = value;
        },
        enumerable: false,
        configurable: true
    });
    S3Bucket.prototype.resetWebsiteDomain = function () {
        this._websiteDomain = undefined;
    };
    Object.defineProperty(S3Bucket.prototype, "websiteDomainInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._websiteDomain;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3Bucket.prototype, "websiteEndpoint", {
        get: function () {
            return this.getStringAttribute('website_endpoint');
        },
        set: function (value) {
            this._websiteEndpoint = value;
        },
        enumerable: false,
        configurable: true
    });
    S3Bucket.prototype.resetWebsiteEndpoint = function () {
        this._websiteEndpoint = undefined;
    };
    Object.defineProperty(S3Bucket.prototype, "websiteEndpointInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._websiteEndpoint;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3Bucket.prototype, "corsRule", {
        get: function () {
            return this.interpolationForAttribute('cors_rule');
        },
        set: function (value) {
            this._corsRule = value;
        },
        enumerable: false,
        configurable: true
    });
    S3Bucket.prototype.resetCorsRule = function () {
        this._corsRule = undefined;
    };
    Object.defineProperty(S3Bucket.prototype, "corsRuleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._corsRule;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3Bucket.prototype, "grant", {
        get: function () {
            return this.interpolationForAttribute('grant');
        },
        set: function (value) {
            this._grant = value;
        },
        enumerable: false,
        configurable: true
    });
    S3Bucket.prototype.resetGrant = function () {
        this._grant = undefined;
    };
    Object.defineProperty(S3Bucket.prototype, "grantInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._grant;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3Bucket.prototype, "lifecycleRule", {
        get: function () {
            return this.interpolationForAttribute('lifecycle_rule');
        },
        set: function (value) {
            this._lifecycleRule = value;
        },
        enumerable: false,
        configurable: true
    });
    S3Bucket.prototype.resetLifecycleRule = function () {
        this._lifecycleRule = undefined;
    };
    Object.defineProperty(S3Bucket.prototype, "lifecycleRuleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._lifecycleRule;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3Bucket.prototype, "logging", {
        get: function () {
            return this.interpolationForAttribute('logging');
        },
        set: function (value) {
            this._logging = value;
        },
        enumerable: false,
        configurable: true
    });
    S3Bucket.prototype.resetLogging = function () {
        this._logging = undefined;
    };
    Object.defineProperty(S3Bucket.prototype, "loggingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._logging;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3Bucket.prototype, "objectLockConfiguration", {
        get: function () {
            return this.interpolationForAttribute('object_lock_configuration');
        },
        set: function (value) {
            this._objectLockConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    S3Bucket.prototype.resetObjectLockConfiguration = function () {
        this._objectLockConfiguration = undefined;
    };
    Object.defineProperty(S3Bucket.prototype, "objectLockConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._objectLockConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3Bucket.prototype, "replicationConfiguration", {
        get: function () {
            return this.interpolationForAttribute('replication_configuration');
        },
        set: function (value) {
            this._replicationConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    S3Bucket.prototype.resetReplicationConfiguration = function () {
        this._replicationConfiguration = undefined;
    };
    Object.defineProperty(S3Bucket.prototype, "replicationConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._replicationConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3Bucket.prototype, "serverSideEncryptionConfiguration", {
        get: function () {
            return this.interpolationForAttribute('server_side_encryption_configuration');
        },
        set: function (value) {
            this._serverSideEncryptionConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    S3Bucket.prototype.resetServerSideEncryptionConfiguration = function () {
        this._serverSideEncryptionConfiguration = undefined;
    };
    Object.defineProperty(S3Bucket.prototype, "serverSideEncryptionConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serverSideEncryptionConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3Bucket.prototype, "versioning", {
        get: function () {
            return this.interpolationForAttribute('versioning');
        },
        set: function (value) {
            this._versioning = value;
        },
        enumerable: false,
        configurable: true
    });
    S3Bucket.prototype.resetVersioning = function () {
        this._versioning = undefined;
    };
    Object.defineProperty(S3Bucket.prototype, "versioningInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._versioning;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3Bucket.prototype, "website", {
        get: function () {
            return this.interpolationForAttribute('website');
        },
        set: function (value) {
            this._website = value;
        },
        enumerable: false,
        configurable: true
    });
    S3Bucket.prototype.resetWebsite = function () {
        this._website = undefined;
    };
    Object.defineProperty(S3Bucket.prototype, "websiteInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._website;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    S3Bucket.prototype.synthesizeAttributes = function () {
        return {
            acceleration_status: cdktf.stringToTerraform(this._accelerationStatus),
            acl: cdktf.stringToTerraform(this._acl),
            bucket: cdktf.stringToTerraform(this._bucket),
            bucket_prefix: cdktf.stringToTerraform(this._bucketPrefix),
            force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
            hosted_zone_id: cdktf.stringToTerraform(this._hostedZoneId),
            policy: cdktf.stringToTerraform(this._policy),
            request_payer: cdktf.stringToTerraform(this._requestPayer),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            website_domain: cdktf.stringToTerraform(this._websiteDomain),
            website_endpoint: cdktf.stringToTerraform(this._websiteEndpoint),
            cors_rule: cdktf.listMapper(s3BucketCorsRuleToTerraform)(this._corsRule),
            grant: cdktf.listMapper(s3BucketGrantToTerraform)(this._grant),
            lifecycle_rule: cdktf.listMapper(s3BucketLifecycleRuleToTerraform)(this._lifecycleRule),
            logging: cdktf.listMapper(s3BucketLoggingToTerraform)(this._logging),
            object_lock_configuration: cdktf.listMapper(s3BucketObjectLockConfigurationToTerraform)(this._objectLockConfiguration),
            replication_configuration: cdktf.listMapper(s3BucketReplicationConfigurationToTerraform)(this._replicationConfiguration),
            server_side_encryption_configuration: cdktf.listMapper(s3BucketServerSideEncryptionConfigurationToTerraform)(this._serverSideEncryptionConfiguration),
            versioning: cdktf.listMapper(s3BucketVersioningToTerraform)(this._versioning),
            website: cdktf.listMapper(s3BucketWebsiteToTerraform)(this._website)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    S3Bucket.tfResourceType = "aws_s3_bucket";
    return S3Bucket;
}(cdktf.TerraformResource));
exports.S3Bucket = S3Bucket;
