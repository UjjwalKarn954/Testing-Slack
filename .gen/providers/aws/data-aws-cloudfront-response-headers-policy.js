"use strict";
// https://www.terraform.io/docs/providers/aws/d/cloudfront_response_headers_policy.html
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
exports.DataAwsCloudfrontResponseHeadersPolicy = exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfig = exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection = exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity = exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy = exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions = exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions = exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy = exports.DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfig = exports.DataAwsCloudfrontResponseHeadersPolicyCorsConfig = exports.DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders = exports.DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins = exports.DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods = exports.DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders = void 0;
var cdktf = require("cdktf");
var DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders = /** @class */ (function (_super) {
    __extends(DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders, _super);
    function DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders.prototype, "items", {
        // items - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('items');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders;
}(cdktf.ComplexComputedList));
exports.DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders = DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders;
var DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods = /** @class */ (function (_super) {
    __extends(DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods, _super);
    function DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods.prototype, "items", {
        // items - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('items');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods;
}(cdktf.ComplexComputedList));
exports.DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods = DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods;
var DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins = /** @class */ (function (_super) {
    __extends(DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins, _super);
    function DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins.prototype, "items", {
        // items - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('items');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins;
}(cdktf.ComplexComputedList));
exports.DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins = DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins;
var DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders = /** @class */ (function (_super) {
    __extends(DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders, _super);
    function DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders.prototype, "items", {
        // items - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('items');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders;
}(cdktf.ComplexComputedList));
exports.DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders = DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders;
var DataAwsCloudfrontResponseHeadersPolicyCorsConfig = /** @class */ (function (_super) {
    __extends(DataAwsCloudfrontResponseHeadersPolicyCorsConfig, _super);
    function DataAwsCloudfrontResponseHeadersPolicyCorsConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsCloudfrontResponseHeadersPolicyCorsConfig.prototype, "accessControlAllowCredentials", {
        // access_control_allow_credentials - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('access_control_allow_credentials');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontResponseHeadersPolicyCorsConfig.prototype, "accessControlAllowHeaders", {
        // access_control_allow_headers - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('access_control_allow_headers');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontResponseHeadersPolicyCorsConfig.prototype, "accessControlAllowMethods", {
        // access_control_allow_methods - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('access_control_allow_methods');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontResponseHeadersPolicyCorsConfig.prototype, "accessControlAllowOrigins", {
        // access_control_allow_origins - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('access_control_allow_origins');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontResponseHeadersPolicyCorsConfig.prototype, "accessControlExposeHeaders", {
        // access_control_expose_headers - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('access_control_expose_headers');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontResponseHeadersPolicyCorsConfig.prototype, "accessControlMaxAgeSec", {
        // access_control_max_age_sec - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('access_control_max_age_sec');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontResponseHeadersPolicyCorsConfig.prototype, "originOverride", {
        // origin_override - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('origin_override');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsCloudfrontResponseHeadersPolicyCorsConfig;
}(cdktf.ComplexComputedList));
exports.DataAwsCloudfrontResponseHeadersPolicyCorsConfig = DataAwsCloudfrontResponseHeadersPolicyCorsConfig;
var DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfig = /** @class */ (function (_super) {
    __extends(DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfig, _super);
    function DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfig.prototype, "header", {
        // header - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('header');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfig.prototype, "override", {
        // override - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('override');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfig.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfig;
}(cdktf.ComplexComputedList));
exports.DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfig = DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfig;
var DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy = /** @class */ (function (_super) {
    __extends(DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy, _super);
    function DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy.prototype, "contentSecurityPolicy", {
        // content_security_policy - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('content_security_policy');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy.prototype, "override", {
        // override - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('override');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy;
}(cdktf.ComplexComputedList));
exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy = DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy;
var DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions = /** @class */ (function (_super) {
    __extends(DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions, _super);
    function DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions.prototype, "override", {
        // override - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('override');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions;
}(cdktf.ComplexComputedList));
exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions = DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions;
var DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions = /** @class */ (function (_super) {
    __extends(DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions, _super);
    function DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions.prototype, "frameOption", {
        // frame_option - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('frame_option');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions.prototype, "override", {
        // override - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('override');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions;
}(cdktf.ComplexComputedList));
exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions = DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions;
var DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy = /** @class */ (function (_super) {
    __extends(DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy, _super);
    function DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy.prototype, "override", {
        // override - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('override');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy.prototype, "referrerPolicy", {
        // referrer_policy - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('referrer_policy');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy;
}(cdktf.ComplexComputedList));
exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy = DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy;
var DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity = /** @class */ (function (_super) {
    __extends(DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity, _super);
    function DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity.prototype, "accessControlMaxAgeSec", {
        // access_control_max_age_sec - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('access_control_max_age_sec');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity.prototype, "includeSubdomains", {
        // include_subdomains - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('include_subdomains');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity.prototype, "override", {
        // override - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('override');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity.prototype, "preload", {
        // preload - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('preload');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity;
}(cdktf.ComplexComputedList));
exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity = DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity;
var DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection = /** @class */ (function (_super) {
    __extends(DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection, _super);
    function DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection.prototype, "modeBlock", {
        // mode_block - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('mode_block');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection.prototype, "override", {
        // override - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('override');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection.prototype, "protection", {
        // protection - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('protection');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection.prototype, "reportUri", {
        // report_uri - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('report_uri');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection;
}(cdktf.ComplexComputedList));
exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection = DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection;
var DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfig = /** @class */ (function (_super) {
    __extends(DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfig, _super);
    function DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfig.prototype, "contentSecurityPolicy", {
        // content_security_policy - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('content_security_policy');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfig.prototype, "contentTypeOptions", {
        // content_type_options - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('content_type_options');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfig.prototype, "frameOptions", {
        // frame_options - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('frame_options');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfig.prototype, "referrerPolicy", {
        // referrer_policy - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('referrer_policy');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfig.prototype, "strictTransportSecurity", {
        // strict_transport_security - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('strict_transport_security');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfig.prototype, "xssProtection", {
        // xss_protection - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('xss_protection');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfig;
}(cdktf.ComplexComputedList));
exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfig = DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfig;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_response_headers_policy.html aws_cloudfront_response_headers_policy}
*/
var DataAwsCloudfrontResponseHeadersPolicy = /** @class */ (function (_super) {
    __extends(DataAwsCloudfrontResponseHeadersPolicy, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_response_headers_policy.html aws_cloudfront_response_headers_policy} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudfrontResponseHeadersPolicyConfig = {}
    */
    function DataAwsCloudfrontResponseHeadersPolicy(scope, id, config) {
        if (config === void 0) { config = {}; }
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
        _this._name = config.name;
        return _this;
    }
    Object.defineProperty(DataAwsCloudfrontResponseHeadersPolicy.prototype, "comment", {
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
    // cors_config - computed: true, optional: false, required: false
    DataAwsCloudfrontResponseHeadersPolicy.prototype.corsConfig = function (index) {
        return new DataAwsCloudfrontResponseHeadersPolicyCorsConfig(this, 'cors_config', index);
    };
    // custom_headers_config - computed: true, optional: false, required: false
    DataAwsCloudfrontResponseHeadersPolicy.prototype.customHeadersConfig = function (index) {
        return new DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfig(this, 'custom_headers_config', index);
    };
    Object.defineProperty(DataAwsCloudfrontResponseHeadersPolicy.prototype, "etag", {
        // etag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('etag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontResponseHeadersPolicy.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontResponseHeadersPolicy.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsCloudfrontResponseHeadersPolicy.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(DataAwsCloudfrontResponseHeadersPolicy.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    // security_headers_config - computed: true, optional: false, required: false
    DataAwsCloudfrontResponseHeadersPolicy.prototype.securityHeadersConfig = function (index) {
        return new DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfig(this, 'security_headers_config', index);
    };
    // =========
    // SYNTHESIS
    // =========
    DataAwsCloudfrontResponseHeadersPolicy.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsCloudfrontResponseHeadersPolicy.tfResourceType = "aws_cloudfront_response_headers_policy";
    return DataAwsCloudfrontResponseHeadersPolicy;
}(cdktf.TerraformDataSource));
exports.DataAwsCloudfrontResponseHeadersPolicy = DataAwsCloudfrontResponseHeadersPolicy;
