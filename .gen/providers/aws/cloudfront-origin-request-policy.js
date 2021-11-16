"use strict";
// https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html
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
exports.CloudfrontOriginRequestPolicy = void 0;
var cdktf = require("cdktf");
function cloudfrontOriginRequestPolicyCookiesConfigCookiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        items: cdktf.listMapper(cdktf.stringToTerraform)(struct.items)
    };
}
function cloudfrontOriginRequestPolicyCookiesConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cookie_behavior: cdktf.stringToTerraform(struct.cookieBehavior),
        cookies: cdktf.listMapper(cloudfrontOriginRequestPolicyCookiesConfigCookiesToTerraform)(struct.cookies)
    };
}
function cloudfrontOriginRequestPolicyHeadersConfigHeadersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        items: cdktf.listMapper(cdktf.stringToTerraform)(struct.items)
    };
}
function cloudfrontOriginRequestPolicyHeadersConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        header_behavior: cdktf.stringToTerraform(struct.headerBehavior),
        headers: cdktf.listMapper(cloudfrontOriginRequestPolicyHeadersConfigHeadersToTerraform)(struct.headers)
    };
}
function cloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        items: cdktf.listMapper(cdktf.stringToTerraform)(struct.items)
    };
}
function cloudfrontOriginRequestPolicyQueryStringsConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        query_string_behavior: cdktf.stringToTerraform(struct.queryStringBehavior),
        query_strings: cdktf.listMapper(cloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsToTerraform)(struct.queryStrings)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html aws_cloudfront_origin_request_policy}
*/
var CloudfrontOriginRequestPolicy = /** @class */ (function (_super) {
    __extends(CloudfrontOriginRequestPolicy, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html aws_cloudfront_origin_request_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontOriginRequestPolicyConfig
    */
    function CloudfrontOriginRequestPolicy(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_cloudfront_origin_request_policy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._comment = config.comment;
        _this._name = config.name;
        _this._cookiesConfig = config.cookiesConfig;
        _this._headersConfig = config.headersConfig;
        _this._queryStringsConfig = config.queryStringsConfig;
        return _this;
    }
    Object.defineProperty(CloudfrontOriginRequestPolicy.prototype, "comment", {
        get: function () {
            return this.getStringAttribute('comment');
        },
        set: function (value) {
            this._comment = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudfrontOriginRequestPolicy.prototype.resetComment = function () {
        this._comment = undefined;
    };
    Object.defineProperty(CloudfrontOriginRequestPolicy.prototype, "commentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._comment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontOriginRequestPolicy.prototype, "etag", {
        // etag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('etag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontOriginRequestPolicy.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontOriginRequestPolicy.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontOriginRequestPolicy.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontOriginRequestPolicy.prototype, "cookiesConfig", {
        get: function () {
            return this.interpolationForAttribute('cookies_config');
        },
        set: function (value) {
            this._cookiesConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontOriginRequestPolicy.prototype, "cookiesConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cookiesConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontOriginRequestPolicy.prototype, "headersConfig", {
        get: function () {
            return this.interpolationForAttribute('headers_config');
        },
        set: function (value) {
            this._headersConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontOriginRequestPolicy.prototype, "headersConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._headersConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontOriginRequestPolicy.prototype, "queryStringsConfig", {
        get: function () {
            return this.interpolationForAttribute('query_strings_config');
        },
        set: function (value) {
            this._queryStringsConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontOriginRequestPolicy.prototype, "queryStringsConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._queryStringsConfig;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CloudfrontOriginRequestPolicy.prototype.synthesizeAttributes = function () {
        return {
            comment: cdktf.stringToTerraform(this._comment),
            name: cdktf.stringToTerraform(this._name),
            cookies_config: cdktf.listMapper(cloudfrontOriginRequestPolicyCookiesConfigToTerraform)(this._cookiesConfig),
            headers_config: cdktf.listMapper(cloudfrontOriginRequestPolicyHeadersConfigToTerraform)(this._headersConfig),
            query_strings_config: cdktf.listMapper(cloudfrontOriginRequestPolicyQueryStringsConfigToTerraform)(this._queryStringsConfig)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CloudfrontOriginRequestPolicy.tfResourceType = "aws_cloudfront_origin_request_policy";
    return CloudfrontOriginRequestPolicy;
}(cdktf.TerraformResource));
exports.CloudfrontOriginRequestPolicy = CloudfrontOriginRequestPolicy;
