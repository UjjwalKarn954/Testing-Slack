"use strict";
// https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html
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
exports.CloudfrontResponseHeadersPolicy = void 0;
var cdktf = require("cdktf");
function cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        items: cdktf.listMapper(cdktf.stringToTerraform)(struct.items)
    };
}
function cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        items: cdktf.listMapper(cdktf.stringToTerraform)(struct.items)
    };
}
function cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        items: cdktf.listMapper(cdktf.stringToTerraform)(struct.items)
    };
}
function cloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        items: cdktf.listMapper(cdktf.stringToTerraform)(struct.items)
    };
}
function cloudfrontResponseHeadersPolicyCorsConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        access_control_allow_credentials: cdktf.booleanToTerraform(struct.accessControlAllowCredentials),
        access_control_max_age_sec: cdktf.numberToTerraform(struct.accessControlMaxAgeSec),
        origin_override: cdktf.booleanToTerraform(struct.originOverride),
        access_control_allow_headers: cdktf.listMapper(cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersToTerraform)(struct.accessControlAllowHeaders),
        access_control_allow_methods: cdktf.listMapper(cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsToTerraform)(struct.accessControlAllowMethods),
        access_control_allow_origins: cdktf.listMapper(cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsToTerraform)(struct.accessControlAllowOrigins),
        access_control_expose_headers: cdktf.listMapper(cloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersToTerraform)(struct.accessControlExposeHeaders)
    };
}
function cloudfrontResponseHeadersPolicyCustomHeadersConfigItemsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        header: cdktf.stringToTerraform(struct.header),
        override: cdktf.booleanToTerraform(struct.override),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function cloudfrontResponseHeadersPolicyCustomHeadersConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        items: cdktf.listMapper(cloudfrontResponseHeadersPolicyCustomHeadersConfigItemsToTerraform)(struct.items)
    };
}
function cloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        content_security_policy: cdktf.stringToTerraform(struct.contentSecurityPolicy),
        override: cdktf.booleanToTerraform(struct.override)
    };
}
function cloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        override: cdktf.booleanToTerraform(struct.override)
    };
}
function cloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        frame_option: cdktf.stringToTerraform(struct.frameOption),
        override: cdktf.booleanToTerraform(struct.override)
    };
}
function cloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        override: cdktf.booleanToTerraform(struct.override),
        referrer_policy: cdktf.stringToTerraform(struct.referrerPolicy)
    };
}
function cloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        access_control_max_age_sec: cdktf.numberToTerraform(struct.accessControlMaxAgeSec),
        include_subdomains: cdktf.booleanToTerraform(struct.includeSubdomains),
        override: cdktf.booleanToTerraform(struct.override),
        preload: cdktf.booleanToTerraform(struct.preload)
    };
}
function cloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        mode_block: cdktf.booleanToTerraform(struct.modeBlock),
        override: cdktf.booleanToTerraform(struct.override),
        protection: cdktf.booleanToTerraform(struct.protection),
        report_uri: cdktf.stringToTerraform(struct.reportUri)
    };
}
function cloudfrontResponseHeadersPolicySecurityHeadersConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        content_security_policy: cdktf.listMapper(cloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyToTerraform)(struct.contentSecurityPolicy),
        content_type_options: cdktf.listMapper(cloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsToTerraform)(struct.contentTypeOptions),
        frame_options: cdktf.listMapper(cloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsToTerraform)(struct.frameOptions),
        referrer_policy: cdktf.listMapper(cloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyToTerraform)(struct.referrerPolicy),
        strict_transport_security: cdktf.listMapper(cloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityToTerraform)(struct.strictTransportSecurity),
        xss_protection: cdktf.listMapper(cloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionToTerraform)(struct.xssProtection)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html aws_cloudfront_response_headers_policy}
*/
var CloudfrontResponseHeadersPolicy = /** @class */ (function (_super) {
    __extends(CloudfrontResponseHeadersPolicy, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html aws_cloudfront_response_headers_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontResponseHeadersPolicyConfig
    */
    function CloudfrontResponseHeadersPolicy(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_cloudfront_response_headers_policy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._comment = config.comment;
        _this._etag = config.etag;
        _this._name = config.name;
        _this._corsConfig = config.corsConfig;
        _this._customHeadersConfig = config.customHeadersConfig;
        _this._securityHeadersConfig = config.securityHeadersConfig;
        return _this;
    }
    Object.defineProperty(CloudfrontResponseHeadersPolicy.prototype, "comment", {
        get: function () {
            return this.getStringAttribute('comment');
        },
        set: function (value) {
            this._comment = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudfrontResponseHeadersPolicy.prototype.resetComment = function () {
        this._comment = undefined;
    };
    Object.defineProperty(CloudfrontResponseHeadersPolicy.prototype, "commentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._comment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontResponseHeadersPolicy.prototype, "etag", {
        get: function () {
            return this.getStringAttribute('etag');
        },
        set: function (value) {
            this._etag = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudfrontResponseHeadersPolicy.prototype.resetEtag = function () {
        this._etag = undefined;
    };
    Object.defineProperty(CloudfrontResponseHeadersPolicy.prototype, "etagInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._etag;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontResponseHeadersPolicy.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontResponseHeadersPolicy.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontResponseHeadersPolicy.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontResponseHeadersPolicy.prototype, "corsConfig", {
        get: function () {
            return this.interpolationForAttribute('cors_config');
        },
        set: function (value) {
            this._corsConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudfrontResponseHeadersPolicy.prototype.resetCorsConfig = function () {
        this._corsConfig = undefined;
    };
    Object.defineProperty(CloudfrontResponseHeadersPolicy.prototype, "corsConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._corsConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontResponseHeadersPolicy.prototype, "customHeadersConfig", {
        get: function () {
            return this.interpolationForAttribute('custom_headers_config');
        },
        set: function (value) {
            this._customHeadersConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudfrontResponseHeadersPolicy.prototype.resetCustomHeadersConfig = function () {
        this._customHeadersConfig = undefined;
    };
    Object.defineProperty(CloudfrontResponseHeadersPolicy.prototype, "customHeadersConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._customHeadersConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontResponseHeadersPolicy.prototype, "securityHeadersConfig", {
        get: function () {
            return this.interpolationForAttribute('security_headers_config');
        },
        set: function (value) {
            this._securityHeadersConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudfrontResponseHeadersPolicy.prototype.resetSecurityHeadersConfig = function () {
        this._securityHeadersConfig = undefined;
    };
    Object.defineProperty(CloudfrontResponseHeadersPolicy.prototype, "securityHeadersConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._securityHeadersConfig;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CloudfrontResponseHeadersPolicy.prototype.synthesizeAttributes = function () {
        return {
            comment: cdktf.stringToTerraform(this._comment),
            etag: cdktf.stringToTerraform(this._etag),
            name: cdktf.stringToTerraform(this._name),
            cors_config: cdktf.listMapper(cloudfrontResponseHeadersPolicyCorsConfigToTerraform)(this._corsConfig),
            custom_headers_config: cdktf.listMapper(cloudfrontResponseHeadersPolicyCustomHeadersConfigToTerraform)(this._customHeadersConfig),
            security_headers_config: cdktf.listMapper(cloudfrontResponseHeadersPolicySecurityHeadersConfigToTerraform)(this._securityHeadersConfig)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CloudfrontResponseHeadersPolicy.tfResourceType = "aws_cloudfront_response_headers_policy";
    return CloudfrontResponseHeadersPolicy;
}(cdktf.TerraformResource));
exports.CloudfrontResponseHeadersPolicy = CloudfrontResponseHeadersPolicy;
