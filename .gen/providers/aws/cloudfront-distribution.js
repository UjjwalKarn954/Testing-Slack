"use strict";
// https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html
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
exports.CloudfrontDistribution = exports.CloudfrontDistributionTrustedSigners = exports.CloudfrontDistributionTrustedSignersItems = exports.CloudfrontDistributionTrustedKeyGroups = exports.CloudfrontDistributionTrustedKeyGroupsItems = void 0;
var cdktf = require("cdktf");
var CloudfrontDistributionTrustedKeyGroupsItems = /** @class */ (function (_super) {
    __extends(CloudfrontDistributionTrustedKeyGroupsItems, _super);
    function CloudfrontDistributionTrustedKeyGroupsItems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CloudfrontDistributionTrustedKeyGroupsItems.prototype, "keyGroupId", {
        // key_group_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key_group_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontDistributionTrustedKeyGroupsItems.prototype, "keyPairIds", {
        // key_pair_ids - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('key_pair_ids');
        },
        enumerable: false,
        configurable: true
    });
    return CloudfrontDistributionTrustedKeyGroupsItems;
}(cdktf.ComplexComputedList));
exports.CloudfrontDistributionTrustedKeyGroupsItems = CloudfrontDistributionTrustedKeyGroupsItems;
var CloudfrontDistributionTrustedKeyGroups = /** @class */ (function (_super) {
    __extends(CloudfrontDistributionTrustedKeyGroups, _super);
    function CloudfrontDistributionTrustedKeyGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CloudfrontDistributionTrustedKeyGroups.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontDistributionTrustedKeyGroups.prototype, "items", {
        // items - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('items');
        },
        enumerable: false,
        configurable: true
    });
    return CloudfrontDistributionTrustedKeyGroups;
}(cdktf.ComplexComputedList));
exports.CloudfrontDistributionTrustedKeyGroups = CloudfrontDistributionTrustedKeyGroups;
var CloudfrontDistributionTrustedSignersItems = /** @class */ (function (_super) {
    __extends(CloudfrontDistributionTrustedSignersItems, _super);
    function CloudfrontDistributionTrustedSignersItems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CloudfrontDistributionTrustedSignersItems.prototype, "awsAccountNumber", {
        // aws_account_number - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('aws_account_number');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontDistributionTrustedSignersItems.prototype, "keyPairIds", {
        // key_pair_ids - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('key_pair_ids');
        },
        enumerable: false,
        configurable: true
    });
    return CloudfrontDistributionTrustedSignersItems;
}(cdktf.ComplexComputedList));
exports.CloudfrontDistributionTrustedSignersItems = CloudfrontDistributionTrustedSignersItems;
var CloudfrontDistributionTrustedSigners = /** @class */ (function (_super) {
    __extends(CloudfrontDistributionTrustedSigners, _super);
    function CloudfrontDistributionTrustedSigners() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CloudfrontDistributionTrustedSigners.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontDistributionTrustedSigners.prototype, "items", {
        // items - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('items');
        },
        enumerable: false,
        configurable: true
    });
    return CloudfrontDistributionTrustedSigners;
}(cdktf.ComplexComputedList));
exports.CloudfrontDistributionTrustedSigners = CloudfrontDistributionTrustedSigners;
function cloudfrontDistributionCustomErrorResponseToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        error_caching_min_ttl: cdktf.numberToTerraform(struct.errorCachingMinTtl),
        error_code: cdktf.numberToTerraform(struct.errorCode),
        response_code: cdktf.numberToTerraform(struct.responseCode),
        response_page_path: cdktf.stringToTerraform(struct.responsePagePath)
    };
}
function cloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        forward: cdktf.stringToTerraform(struct.forward),
        whitelisted_names: cdktf.listMapper(cdktf.stringToTerraform)(struct.whitelistedNames)
    };
}
function cloudfrontDistributionDefaultCacheBehaviorForwardedValuesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        headers: cdktf.listMapper(cdktf.stringToTerraform)(struct.headers),
        query_string: cdktf.booleanToTerraform(struct.queryString),
        query_string_cache_keys: cdktf.listMapper(cdktf.stringToTerraform)(struct.queryStringCacheKeys),
        cookies: cdktf.listMapper(cloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesToTerraform)(struct.cookies)
    };
}
function cloudfrontDistributionDefaultCacheBehaviorFunctionAssociationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        event_type: cdktf.stringToTerraform(struct.eventType),
        function_arn: cdktf.stringToTerraform(struct.functionArn)
    };
}
function cloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        event_type: cdktf.stringToTerraform(struct.eventType),
        include_body: cdktf.booleanToTerraform(struct.includeBody),
        lambda_arn: cdktf.stringToTerraform(struct.lambdaArn)
    };
}
function cloudfrontDistributionDefaultCacheBehaviorToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        allowed_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct.allowedMethods),
        cache_policy_id: cdktf.stringToTerraform(struct.cachePolicyId),
        cached_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct.cachedMethods),
        compress: cdktf.booleanToTerraform(struct.compress),
        default_ttl: cdktf.numberToTerraform(struct.defaultTtl),
        field_level_encryption_id: cdktf.stringToTerraform(struct.fieldLevelEncryptionId),
        max_ttl: cdktf.numberToTerraform(struct.maxTtl),
        min_ttl: cdktf.numberToTerraform(struct.minTtl),
        origin_request_policy_id: cdktf.stringToTerraform(struct.originRequestPolicyId),
        realtime_log_config_arn: cdktf.stringToTerraform(struct.realtimeLogConfigArn),
        response_headers_policy_id: cdktf.stringToTerraform(struct.responseHeadersPolicyId),
        smooth_streaming: cdktf.booleanToTerraform(struct.smoothStreaming),
        target_origin_id: cdktf.stringToTerraform(struct.targetOriginId),
        trusted_key_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct.trustedKeyGroups),
        trusted_signers: cdktf.listMapper(cdktf.stringToTerraform)(struct.trustedSigners),
        viewer_protocol_policy: cdktf.stringToTerraform(struct.viewerProtocolPolicy),
        forwarded_values: cdktf.listMapper(cloudfrontDistributionDefaultCacheBehaviorForwardedValuesToTerraform)(struct.forwardedValues),
        function_association: cdktf.listMapper(cloudfrontDistributionDefaultCacheBehaviorFunctionAssociationToTerraform)(struct.functionAssociation),
        lambda_function_association: cdktf.listMapper(cloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationToTerraform)(struct.lambdaFunctionAssociation)
    };
}
function cloudfrontDistributionLoggingConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket: cdktf.stringToTerraform(struct.bucket),
        include_cookies: cdktf.booleanToTerraform(struct.includeCookies),
        prefix: cdktf.stringToTerraform(struct.prefix)
    };
}
function cloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        forward: cdktf.stringToTerraform(struct.forward),
        whitelisted_names: cdktf.listMapper(cdktf.stringToTerraform)(struct.whitelistedNames)
    };
}
function cloudfrontDistributionOrderedCacheBehaviorForwardedValuesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        headers: cdktf.listMapper(cdktf.stringToTerraform)(struct.headers),
        query_string: cdktf.booleanToTerraform(struct.queryString),
        query_string_cache_keys: cdktf.listMapper(cdktf.stringToTerraform)(struct.queryStringCacheKeys),
        cookies: cdktf.listMapper(cloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesToTerraform)(struct.cookies)
    };
}
function cloudfrontDistributionOrderedCacheBehaviorFunctionAssociationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        event_type: cdktf.stringToTerraform(struct.eventType),
        function_arn: cdktf.stringToTerraform(struct.functionArn)
    };
}
function cloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        event_type: cdktf.stringToTerraform(struct.eventType),
        include_body: cdktf.booleanToTerraform(struct.includeBody),
        lambda_arn: cdktf.stringToTerraform(struct.lambdaArn)
    };
}
function cloudfrontDistributionOrderedCacheBehaviorToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        allowed_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct.allowedMethods),
        cache_policy_id: cdktf.stringToTerraform(struct.cachePolicyId),
        cached_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct.cachedMethods),
        compress: cdktf.booleanToTerraform(struct.compress),
        default_ttl: cdktf.numberToTerraform(struct.defaultTtl),
        field_level_encryption_id: cdktf.stringToTerraform(struct.fieldLevelEncryptionId),
        max_ttl: cdktf.numberToTerraform(struct.maxTtl),
        min_ttl: cdktf.numberToTerraform(struct.minTtl),
        origin_request_policy_id: cdktf.stringToTerraform(struct.originRequestPolicyId),
        path_pattern: cdktf.stringToTerraform(struct.pathPattern),
        realtime_log_config_arn: cdktf.stringToTerraform(struct.realtimeLogConfigArn),
        response_headers_policy_id: cdktf.stringToTerraform(struct.responseHeadersPolicyId),
        smooth_streaming: cdktf.booleanToTerraform(struct.smoothStreaming),
        target_origin_id: cdktf.stringToTerraform(struct.targetOriginId),
        trusted_key_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct.trustedKeyGroups),
        trusted_signers: cdktf.listMapper(cdktf.stringToTerraform)(struct.trustedSigners),
        viewer_protocol_policy: cdktf.stringToTerraform(struct.viewerProtocolPolicy),
        forwarded_values: cdktf.listMapper(cloudfrontDistributionOrderedCacheBehaviorForwardedValuesToTerraform)(struct.forwardedValues),
        function_association: cdktf.listMapper(cloudfrontDistributionOrderedCacheBehaviorFunctionAssociationToTerraform)(struct.functionAssociation),
        lambda_function_association: cdktf.listMapper(cloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationToTerraform)(struct.lambdaFunctionAssociation)
    };
}
function cloudfrontDistributionOriginCustomHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function cloudfrontDistributionOriginCustomOriginConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        http_port: cdktf.numberToTerraform(struct.httpPort),
        https_port: cdktf.numberToTerraform(struct.httpsPort),
        origin_keepalive_timeout: cdktf.numberToTerraform(struct.originKeepaliveTimeout),
        origin_protocol_policy: cdktf.stringToTerraform(struct.originProtocolPolicy),
        origin_read_timeout: cdktf.numberToTerraform(struct.originReadTimeout),
        origin_ssl_protocols: cdktf.listMapper(cdktf.stringToTerraform)(struct.originSslProtocols)
    };
}
function cloudfrontDistributionOriginOriginShieldToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        origin_shield_region: cdktf.stringToTerraform(struct.originShieldRegion)
    };
}
function cloudfrontDistributionOriginS3OriginConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        origin_access_identity: cdktf.stringToTerraform(struct.originAccessIdentity)
    };
}
function cloudfrontDistributionOriginToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        connection_attempts: cdktf.numberToTerraform(struct.connectionAttempts),
        connection_timeout: cdktf.numberToTerraform(struct.connectionTimeout),
        domain_name: cdktf.stringToTerraform(struct.domainName),
        origin_id: cdktf.stringToTerraform(struct.originId),
        origin_path: cdktf.stringToTerraform(struct.originPath),
        custom_header: cdktf.listMapper(cloudfrontDistributionOriginCustomHeaderToTerraform)(struct.customHeader),
        custom_origin_config: cdktf.listMapper(cloudfrontDistributionOriginCustomOriginConfigToTerraform)(struct.customOriginConfig),
        origin_shield: cdktf.listMapper(cloudfrontDistributionOriginOriginShieldToTerraform)(struct.originShield),
        s3_origin_config: cdktf.listMapper(cloudfrontDistributionOriginS3OriginConfigToTerraform)(struct.s3OriginConfig)
    };
}
function cloudfrontDistributionOriginGroupFailoverCriteriaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        status_codes: cdktf.listMapper(cdktf.numberToTerraform)(struct.statusCodes)
    };
}
function cloudfrontDistributionOriginGroupMemberToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        origin_id: cdktf.stringToTerraform(struct.originId)
    };
}
function cloudfrontDistributionOriginGroupToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        origin_id: cdktf.stringToTerraform(struct.originId),
        failover_criteria: cdktf.listMapper(cloudfrontDistributionOriginGroupFailoverCriteriaToTerraform)(struct.failoverCriteria),
        member: cdktf.listMapper(cloudfrontDistributionOriginGroupMemberToTerraform)(struct.member)
    };
}
function cloudfrontDistributionRestrictionsGeoRestrictionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        locations: cdktf.listMapper(cdktf.stringToTerraform)(struct.locations),
        restriction_type: cdktf.stringToTerraform(struct.restrictionType)
    };
}
function cloudfrontDistributionRestrictionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        geo_restriction: cdktf.listMapper(cloudfrontDistributionRestrictionsGeoRestrictionToTerraform)(struct.geoRestriction)
    };
}
function cloudfrontDistributionViewerCertificateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        acm_certificate_arn: cdktf.stringToTerraform(struct.acmCertificateArn),
        cloudfront_default_certificate: cdktf.booleanToTerraform(struct.cloudfrontDefaultCertificate),
        iam_certificate_id: cdktf.stringToTerraform(struct.iamCertificateId),
        minimum_protocol_version: cdktf.stringToTerraform(struct.minimumProtocolVersion),
        ssl_support_method: cdktf.stringToTerraform(struct.sslSupportMethod)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html aws_cloudfront_distribution}
*/
var CloudfrontDistribution = /** @class */ (function (_super) {
    __extends(CloudfrontDistribution, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html aws_cloudfront_distribution} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontDistributionConfig
    */
    function CloudfrontDistribution(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_cloudfront_distribution',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._aliases = config.aliases;
        _this._comment = config.comment;
        _this._defaultRootObject = config.defaultRootObject;
        _this._enabled = config.enabled;
        _this._httpVersion = config.httpVersion;
        _this._isIpv6Enabled = config.isIpv6Enabled;
        _this._priceClass = config.priceClass;
        _this._retainOnDelete = config.retainOnDelete;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._waitForDeployment = config.waitForDeployment;
        _this._webAclId = config.webAclId;
        _this._customErrorResponse = config.customErrorResponse;
        _this._defaultCacheBehavior = config.defaultCacheBehavior;
        _this._loggingConfig = config.loggingConfig;
        _this._orderedCacheBehavior = config.orderedCacheBehavior;
        _this._origin = config.origin;
        _this._originGroup = config.originGroup;
        _this._restrictions = config.restrictions;
        _this._viewerCertificate = config.viewerCertificate;
        return _this;
    }
    Object.defineProperty(CloudfrontDistribution.prototype, "aliases", {
        get: function () {
            return this.getListAttribute('aliases');
        },
        set: function (value) {
            this._aliases = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudfrontDistribution.prototype.resetAliases = function () {
        this._aliases = undefined;
    };
    Object.defineProperty(CloudfrontDistribution.prototype, "aliasesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._aliases;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontDistribution.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontDistribution.prototype, "callerReference", {
        // caller_reference - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('caller_reference');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontDistribution.prototype, "comment", {
        get: function () {
            return this.getStringAttribute('comment');
        },
        set: function (value) {
            this._comment = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudfrontDistribution.prototype.resetComment = function () {
        this._comment = undefined;
    };
    Object.defineProperty(CloudfrontDistribution.prototype, "commentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._comment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontDistribution.prototype, "defaultRootObject", {
        get: function () {
            return this.getStringAttribute('default_root_object');
        },
        set: function (value) {
            this._defaultRootObject = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudfrontDistribution.prototype.resetDefaultRootObject = function () {
        this._defaultRootObject = undefined;
    };
    Object.defineProperty(CloudfrontDistribution.prototype, "defaultRootObjectInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultRootObject;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontDistribution.prototype, "domainName", {
        // domain_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('domain_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontDistribution.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontDistribution.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontDistribution.prototype, "etag", {
        // etag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('etag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontDistribution.prototype, "hostedZoneId", {
        // hosted_zone_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hosted_zone_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontDistribution.prototype, "httpVersion", {
        get: function () {
            return this.getStringAttribute('http_version');
        },
        set: function (value) {
            this._httpVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudfrontDistribution.prototype.resetHttpVersion = function () {
        this._httpVersion = undefined;
    };
    Object.defineProperty(CloudfrontDistribution.prototype, "httpVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._httpVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontDistribution.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontDistribution.prototype, "inProgressValidationBatches", {
        // in_progress_validation_batches - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('in_progress_validation_batches');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontDistribution.prototype, "isIpv6Enabled", {
        get: function () {
            return this.getBooleanAttribute('is_ipv6_enabled');
        },
        set: function (value) {
            this._isIpv6Enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudfrontDistribution.prototype.resetIsIpv6Enabled = function () {
        this._isIpv6Enabled = undefined;
    };
    Object.defineProperty(CloudfrontDistribution.prototype, "isIpv6EnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._isIpv6Enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontDistribution.prototype, "lastModifiedTime", {
        // last_modified_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_modified_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontDistribution.prototype, "priceClass", {
        get: function () {
            return this.getStringAttribute('price_class');
        },
        set: function (value) {
            this._priceClass = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudfrontDistribution.prototype.resetPriceClass = function () {
        this._priceClass = undefined;
    };
    Object.defineProperty(CloudfrontDistribution.prototype, "priceClassInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._priceClass;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontDistribution.prototype, "retainOnDelete", {
        get: function () {
            return this.getBooleanAttribute('retain_on_delete');
        },
        set: function (value) {
            this._retainOnDelete = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudfrontDistribution.prototype.resetRetainOnDelete = function () {
        this._retainOnDelete = undefined;
    };
    Object.defineProperty(CloudfrontDistribution.prototype, "retainOnDeleteInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._retainOnDelete;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontDistribution.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontDistribution.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudfrontDistribution.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(CloudfrontDistribution.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontDistribution.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudfrontDistribution.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(CloudfrontDistribution.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    // trusted_key_groups - computed: true, optional: false, required: false
    CloudfrontDistribution.prototype.trustedKeyGroups = function (index) {
        return new CloudfrontDistributionTrustedKeyGroups(this, 'trusted_key_groups', index);
    };
    // trusted_signers - computed: true, optional: false, required: false
    CloudfrontDistribution.prototype.trustedSigners = function (index) {
        return new CloudfrontDistributionTrustedSigners(this, 'trusted_signers', index);
    };
    Object.defineProperty(CloudfrontDistribution.prototype, "waitForDeployment", {
        get: function () {
            return this.getBooleanAttribute('wait_for_deployment');
        },
        set: function (value) {
            this._waitForDeployment = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudfrontDistribution.prototype.resetWaitForDeployment = function () {
        this._waitForDeployment = undefined;
    };
    Object.defineProperty(CloudfrontDistribution.prototype, "waitForDeploymentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._waitForDeployment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontDistribution.prototype, "webAclId", {
        get: function () {
            return this.getStringAttribute('web_acl_id');
        },
        set: function (value) {
            this._webAclId = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudfrontDistribution.prototype.resetWebAclId = function () {
        this._webAclId = undefined;
    };
    Object.defineProperty(CloudfrontDistribution.prototype, "webAclIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._webAclId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontDistribution.prototype, "customErrorResponse", {
        get: function () {
            return this.interpolationForAttribute('custom_error_response');
        },
        set: function (value) {
            this._customErrorResponse = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudfrontDistribution.prototype.resetCustomErrorResponse = function () {
        this._customErrorResponse = undefined;
    };
    Object.defineProperty(CloudfrontDistribution.prototype, "customErrorResponseInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customErrorResponse;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontDistribution.prototype, "defaultCacheBehavior", {
        get: function () {
            return this.interpolationForAttribute('default_cache_behavior');
        },
        set: function (value) {
            this._defaultCacheBehavior = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontDistribution.prototype, "defaultCacheBehaviorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultCacheBehavior;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontDistribution.prototype, "loggingConfig", {
        get: function () {
            return this.interpolationForAttribute('logging_config');
        },
        set: function (value) {
            this._loggingConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudfrontDistribution.prototype.resetLoggingConfig = function () {
        this._loggingConfig = undefined;
    };
    Object.defineProperty(CloudfrontDistribution.prototype, "loggingConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._loggingConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontDistribution.prototype, "orderedCacheBehavior", {
        get: function () {
            return this.interpolationForAttribute('ordered_cache_behavior');
        },
        set: function (value) {
            this._orderedCacheBehavior = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudfrontDistribution.prototype.resetOrderedCacheBehavior = function () {
        this._orderedCacheBehavior = undefined;
    };
    Object.defineProperty(CloudfrontDistribution.prototype, "orderedCacheBehaviorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._orderedCacheBehavior;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontDistribution.prototype, "origin", {
        get: function () {
            return this.interpolationForAttribute('origin');
        },
        set: function (value) {
            this._origin = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontDistribution.prototype, "originInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._origin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontDistribution.prototype, "originGroup", {
        get: function () {
            return this.interpolationForAttribute('origin_group');
        },
        set: function (value) {
            this._originGroup = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudfrontDistribution.prototype.resetOriginGroup = function () {
        this._originGroup = undefined;
    };
    Object.defineProperty(CloudfrontDistribution.prototype, "originGroupInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._originGroup;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontDistribution.prototype, "restrictions", {
        get: function () {
            return this.interpolationForAttribute('restrictions');
        },
        set: function (value) {
            this._restrictions = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontDistribution.prototype, "restrictionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._restrictions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontDistribution.prototype, "viewerCertificate", {
        get: function () {
            return this.interpolationForAttribute('viewer_certificate');
        },
        set: function (value) {
            this._viewerCertificate = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontDistribution.prototype, "viewerCertificateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._viewerCertificate;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CloudfrontDistribution.prototype.synthesizeAttributes = function () {
        return {
            aliases: cdktf.listMapper(cdktf.stringToTerraform)(this._aliases),
            comment: cdktf.stringToTerraform(this._comment),
            default_root_object: cdktf.stringToTerraform(this._defaultRootObject),
            enabled: cdktf.booleanToTerraform(this._enabled),
            http_version: cdktf.stringToTerraform(this._httpVersion),
            is_ipv6_enabled: cdktf.booleanToTerraform(this._isIpv6Enabled),
            price_class: cdktf.stringToTerraform(this._priceClass),
            retain_on_delete: cdktf.booleanToTerraform(this._retainOnDelete),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            wait_for_deployment: cdktf.booleanToTerraform(this._waitForDeployment),
            web_acl_id: cdktf.stringToTerraform(this._webAclId),
            custom_error_response: cdktf.listMapper(cloudfrontDistributionCustomErrorResponseToTerraform)(this._customErrorResponse),
            default_cache_behavior: cdktf.listMapper(cloudfrontDistributionDefaultCacheBehaviorToTerraform)(this._defaultCacheBehavior),
            logging_config: cdktf.listMapper(cloudfrontDistributionLoggingConfigToTerraform)(this._loggingConfig),
            ordered_cache_behavior: cdktf.listMapper(cloudfrontDistributionOrderedCacheBehaviorToTerraform)(this._orderedCacheBehavior),
            origin: cdktf.listMapper(cloudfrontDistributionOriginToTerraform)(this._origin),
            origin_group: cdktf.listMapper(cloudfrontDistributionOriginGroupToTerraform)(this._originGroup),
            restrictions: cdktf.listMapper(cloudfrontDistributionRestrictionsToTerraform)(this._restrictions),
            viewer_certificate: cdktf.listMapper(cloudfrontDistributionViewerCertificateToTerraform)(this._viewerCertificate)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CloudfrontDistribution.tfResourceType = "aws_cloudfront_distribution";
    return CloudfrontDistribution;
}(cdktf.TerraformResource));
exports.CloudfrontDistribution = CloudfrontDistribution;
