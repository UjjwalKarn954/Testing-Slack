"use strict";
// https://www.terraform.io/docs/providers/aws/d/cloudfront_cache_policy.html
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
exports.DataAwsCloudfrontCachePolicy = exports.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin = exports.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig = exports.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings = exports.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig = exports.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders = exports.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig = exports.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies = void 0;
var cdktf = require("cdktf");
var DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies = /** @class */ (function (_super) {
    __extends(DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies, _super);
    function DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies.prototype, "items", {
        // items - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('items');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies;
}(cdktf.ComplexComputedList));
exports.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies = DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies;
var DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig = /** @class */ (function (_super) {
    __extends(DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig, _super);
    function DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig.prototype, "cookieBehavior", {
        // cookie_behavior - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cookie_behavior');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig.prototype, "cookies", {
        // cookies - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('cookies');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig;
}(cdktf.ComplexComputedList));
exports.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig = DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig;
var DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders = /** @class */ (function (_super) {
    __extends(DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders, _super);
    function DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders.prototype, "items", {
        // items - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('items');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders;
}(cdktf.ComplexComputedList));
exports.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders = DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders;
var DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig = /** @class */ (function (_super) {
    __extends(DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig, _super);
    function DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig.prototype, "headerBehavior", {
        // header_behavior - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('header_behavior');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig.prototype, "headers", {
        // headers - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('headers');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig;
}(cdktf.ComplexComputedList));
exports.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig = DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig;
var DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings = /** @class */ (function (_super) {
    __extends(DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings, _super);
    function DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings.prototype, "items", {
        // items - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('items');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings;
}(cdktf.ComplexComputedList));
exports.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings = DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings;
var DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig = /** @class */ (function (_super) {
    __extends(DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig, _super);
    function DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig.prototype, "queryStringBehavior", {
        // query_string_behavior - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('query_string_behavior');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig.prototype, "queryStrings", {
        // query_strings - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('query_strings');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig;
}(cdktf.ComplexComputedList));
exports.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig = DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig;
var DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin = /** @class */ (function (_super) {
    __extends(DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin, _super);
    function DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin.prototype, "cookiesConfig", {
        // cookies_config - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('cookies_config');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin.prototype, "enableAcceptEncodingBrotli", {
        // enable_accept_encoding_brotli - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enable_accept_encoding_brotli');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin.prototype, "enableAcceptEncodingGzip", {
        // enable_accept_encoding_gzip - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enable_accept_encoding_gzip');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin.prototype, "headersConfig", {
        // headers_config - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('headers_config');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin.prototype, "queryStringsConfig", {
        // query_strings_config - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('query_strings_config');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin;
}(cdktf.ComplexComputedList));
exports.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin = DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_cache_policy.html aws_cloudfront_cache_policy}
*/
var DataAwsCloudfrontCachePolicy = /** @class */ (function (_super) {
    __extends(DataAwsCloudfrontCachePolicy, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_cache_policy.html aws_cloudfront_cache_policy} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudfrontCachePolicyConfig = {}
    */
    function DataAwsCloudfrontCachePolicy(scope, id, config) {
        if (config === void 0) { config = {}; }
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
        _this._id = config.id;
        _this._name = config.name;
        return _this;
    }
    Object.defineProperty(DataAwsCloudfrontCachePolicy.prototype, "comment", {
        // ==========
        // ATTRIBUTES
        // ==========
        // comment - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('comment');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontCachePolicy.prototype, "defaultTtl", {
        // default_ttl - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('default_ttl');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontCachePolicy.prototype, "etag", {
        // etag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('etag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontCachePolicy.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsCloudfrontCachePolicy.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataAwsCloudfrontCachePolicy.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontCachePolicy.prototype, "maxTtl", {
        // max_ttl - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('max_ttl');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontCachePolicy.prototype, "minTtl", {
        // min_ttl - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('min_ttl');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontCachePolicy.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsCloudfrontCachePolicy.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(DataAwsCloudfrontCachePolicy.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    // parameters_in_cache_key_and_forwarded_to_origin - computed: true, optional: false, required: false
    DataAwsCloudfrontCachePolicy.prototype.parametersInCacheKeyAndForwardedToOrigin = function (index) {
        return new DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin(this, 'parameters_in_cache_key_and_forwarded_to_origin', index);
    };
    // =========
    // SYNTHESIS
    // =========
    DataAwsCloudfrontCachePolicy.prototype.synthesizeAttributes = function () {
        return {
            id: cdktf.stringToTerraform(this._id),
            name: cdktf.stringToTerraform(this._name)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsCloudfrontCachePolicy.tfResourceType = "aws_cloudfront_cache_policy";
    return DataAwsCloudfrontCachePolicy;
}(cdktf.TerraformDataSource));
exports.DataAwsCloudfrontCachePolicy = DataAwsCloudfrontCachePolicy;
