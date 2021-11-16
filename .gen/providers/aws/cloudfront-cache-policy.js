"use strict";
// https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html
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
exports.CloudfrontCachePolicy = void 0;
var cdktf = require("cdktf");
function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        items: cdktf.listMapper(cdktf.stringToTerraform)(struct.items)
    };
}
function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cookie_behavior: cdktf.stringToTerraform(struct.cookieBehavior),
        cookies: cdktf.listMapper(cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesToTerraform)(struct.cookies)
    };
}
function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        items: cdktf.listMapper(cdktf.stringToTerraform)(struct.items)
    };
}
function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        header_behavior: cdktf.stringToTerraform(struct.headerBehavior),
        headers: cdktf.listMapper(cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersToTerraform)(struct.headers)
    };
}
function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        items: cdktf.listMapper(cdktf.stringToTerraform)(struct.items)
    };
}
function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        query_string_behavior: cdktf.stringToTerraform(struct.queryStringBehavior),
        query_strings: cdktf.listMapper(cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsToTerraform)(struct.queryStrings)
    };
}
function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enable_accept_encoding_brotli: cdktf.booleanToTerraform(struct.enableAcceptEncodingBrotli),
        enable_accept_encoding_gzip: cdktf.booleanToTerraform(struct.enableAcceptEncodingGzip),
        cookies_config: cdktf.listMapper(cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigToTerraform)(struct.cookiesConfig),
        headers_config: cdktf.listMapper(cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigToTerraform)(struct.headersConfig),
        query_strings_config: cdktf.listMapper(cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigToTerraform)(struct.queryStringsConfig)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html aws_cloudfront_cache_policy}
*/
var CloudfrontCachePolicy = /** @class */ (function (_super) {
    __extends(CloudfrontCachePolicy, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html aws_cloudfront_cache_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontCachePolicyConfig
    */
    function CloudfrontCachePolicy(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_cloudfront_cache_policy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._comment = config.comment;
        _this._defaultTtl = config.defaultTtl;
        _this._maxTtl = config.maxTtl;
        _this._minTtl = config.minTtl;
        _this._name = config.name;
        _this._parametersInCacheKeyAndForwardedToOrigin = config.parametersInCacheKeyAndForwardedToOrigin;
        return _this;
    }
    Object.defineProperty(CloudfrontCachePolicy.prototype, "comment", {
        get: function () {
            return this.getStringAttribute('comment');
        },
        set: function (value) {
            this._comment = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudfrontCachePolicy.prototype.resetComment = function () {
        this._comment = undefined;
    };
    Object.defineProperty(CloudfrontCachePolicy.prototype, "commentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._comment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontCachePolicy.prototype, "defaultTtl", {
        get: function () {
            return this.getNumberAttribute('default_ttl');
        },
        set: function (value) {
            this._defaultTtl = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudfrontCachePolicy.prototype.resetDefaultTtl = function () {
        this._defaultTtl = undefined;
    };
    Object.defineProperty(CloudfrontCachePolicy.prototype, "defaultTtlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultTtl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontCachePolicy.prototype, "etag", {
        // etag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('etag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontCachePolicy.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontCachePolicy.prototype, "maxTtl", {
        get: function () {
            return this.getNumberAttribute('max_ttl');
        },
        set: function (value) {
            this._maxTtl = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudfrontCachePolicy.prototype.resetMaxTtl = function () {
        this._maxTtl = undefined;
    };
    Object.defineProperty(CloudfrontCachePolicy.prototype, "maxTtlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxTtl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontCachePolicy.prototype, "minTtl", {
        get: function () {
            return this.getNumberAttribute('min_ttl');
        },
        set: function (value) {
            this._minTtl = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudfrontCachePolicy.prototype.resetMinTtl = function () {
        this._minTtl = undefined;
    };
    Object.defineProperty(CloudfrontCachePolicy.prototype, "minTtlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._minTtl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontCachePolicy.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontCachePolicy.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontCachePolicy.prototype, "parametersInCacheKeyAndForwardedToOrigin", {
        get: function () {
            return this.interpolationForAttribute('parameters_in_cache_key_and_forwarded_to_origin');
        },
        set: function (value) {
            this._parametersInCacheKeyAndForwardedToOrigin = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontCachePolicy.prototype, "parametersInCacheKeyAndForwardedToOriginInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._parametersInCacheKeyAndForwardedToOrigin;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CloudfrontCachePolicy.prototype.synthesizeAttributes = function () {
        return {
            comment: cdktf.stringToTerraform(this._comment),
            default_ttl: cdktf.numberToTerraform(this._defaultTtl),
            max_ttl: cdktf.numberToTerraform(this._maxTtl),
            min_ttl: cdktf.numberToTerraform(this._minTtl),
            name: cdktf.stringToTerraform(this._name),
            parameters_in_cache_key_and_forwarded_to_origin: cdktf.listMapper(cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginToTerraform)(this._parametersInCacheKeyAndForwardedToOrigin)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CloudfrontCachePolicy.tfResourceType = "aws_cloudfront_cache_policy";
    return CloudfrontCachePolicy;
}(cdktf.TerraformResource));
exports.CloudfrontCachePolicy = CloudfrontCachePolicy;
