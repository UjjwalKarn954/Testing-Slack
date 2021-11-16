"use strict";
// https://www.terraform.io/docs/providers/aws/d/cloudfront_origin_request_policy.html
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
exports.DataAwsCloudfrontOriginRequestPolicy = exports.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig = exports.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings = exports.DataAwsCloudfrontOriginRequestPolicyHeadersConfig = exports.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeaders = exports.DataAwsCloudfrontOriginRequestPolicyCookiesConfig = exports.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookies = void 0;
var cdktf = require("cdktf");
var DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookies = /** @class */ (function (_super) {
    __extends(DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookies, _super);
    function DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookies() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookies.prototype, "items", {
        // items - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('items');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookies;
}(cdktf.ComplexComputedList));
exports.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookies = DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookies;
var DataAwsCloudfrontOriginRequestPolicyCookiesConfig = /** @class */ (function (_super) {
    __extends(DataAwsCloudfrontOriginRequestPolicyCookiesConfig, _super);
    function DataAwsCloudfrontOriginRequestPolicyCookiesConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsCloudfrontOriginRequestPolicyCookiesConfig.prototype, "cookieBehavior", {
        // cookie_behavior - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cookie_behavior');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontOriginRequestPolicyCookiesConfig.prototype, "cookies", {
        // cookies - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('cookies');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsCloudfrontOriginRequestPolicyCookiesConfig;
}(cdktf.ComplexComputedList));
exports.DataAwsCloudfrontOriginRequestPolicyCookiesConfig = DataAwsCloudfrontOriginRequestPolicyCookiesConfig;
var DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeaders = /** @class */ (function (_super) {
    __extends(DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeaders, _super);
    function DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeaders.prototype, "items", {
        // items - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('items');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeaders;
}(cdktf.ComplexComputedList));
exports.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeaders = DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeaders;
var DataAwsCloudfrontOriginRequestPolicyHeadersConfig = /** @class */ (function (_super) {
    __extends(DataAwsCloudfrontOriginRequestPolicyHeadersConfig, _super);
    function DataAwsCloudfrontOriginRequestPolicyHeadersConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsCloudfrontOriginRequestPolicyHeadersConfig.prototype, "headerBehavior", {
        // header_behavior - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('header_behavior');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontOriginRequestPolicyHeadersConfig.prototype, "headers", {
        // headers - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('headers');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsCloudfrontOriginRequestPolicyHeadersConfig;
}(cdktf.ComplexComputedList));
exports.DataAwsCloudfrontOriginRequestPolicyHeadersConfig = DataAwsCloudfrontOriginRequestPolicyHeadersConfig;
var DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings = /** @class */ (function (_super) {
    __extends(DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings, _super);
    function DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings.prototype, "items", {
        // items - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('items');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings;
}(cdktf.ComplexComputedList));
exports.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings = DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings;
var DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig = /** @class */ (function (_super) {
    __extends(DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig, _super);
    function DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig.prototype, "queryStringBehavior", {
        // query_string_behavior - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('query_string_behavior');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig.prototype, "queryStrings", {
        // query_strings - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('query_strings');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig;
}(cdktf.ComplexComputedList));
exports.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig = DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_origin_request_policy.html aws_cloudfront_origin_request_policy}
*/
var DataAwsCloudfrontOriginRequestPolicy = /** @class */ (function (_super) {
    __extends(DataAwsCloudfrontOriginRequestPolicy, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_origin_request_policy.html aws_cloudfront_origin_request_policy} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudfrontOriginRequestPolicyConfig = {}
    */
    function DataAwsCloudfrontOriginRequestPolicy(scope, id, config) {
        if (config === void 0) { config = {}; }
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
        _this._id = config.id;
        _this._name = config.name;
        return _this;
    }
    Object.defineProperty(DataAwsCloudfrontOriginRequestPolicy.prototype, "comment", {
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
    // cookies_config - computed: true, optional: false, required: false
    DataAwsCloudfrontOriginRequestPolicy.prototype.cookiesConfig = function (index) {
        return new DataAwsCloudfrontOriginRequestPolicyCookiesConfig(this, 'cookies_config', index);
    };
    Object.defineProperty(DataAwsCloudfrontOriginRequestPolicy.prototype, "etag", {
        // etag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('etag');
        },
        enumerable: false,
        configurable: true
    });
    // headers_config - computed: true, optional: false, required: false
    DataAwsCloudfrontOriginRequestPolicy.prototype.headersConfig = function (index) {
        return new DataAwsCloudfrontOriginRequestPolicyHeadersConfig(this, 'headers_config', index);
    };
    Object.defineProperty(DataAwsCloudfrontOriginRequestPolicy.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsCloudfrontOriginRequestPolicy.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataAwsCloudfrontOriginRequestPolicy.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudfrontOriginRequestPolicy.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsCloudfrontOriginRequestPolicy.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(DataAwsCloudfrontOriginRequestPolicy.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    // query_strings_config - computed: true, optional: false, required: false
    DataAwsCloudfrontOriginRequestPolicy.prototype.queryStringsConfig = function (index) {
        return new DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig(this, 'query_strings_config', index);
    };
    // =========
    // SYNTHESIS
    // =========
    DataAwsCloudfrontOriginRequestPolicy.prototype.synthesizeAttributes = function () {
        return {
            id: cdktf.stringToTerraform(this._id),
            name: cdktf.stringToTerraform(this._name)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsCloudfrontOriginRequestPolicy.tfResourceType = "aws_cloudfront_origin_request_policy";
    return DataAwsCloudfrontOriginRequestPolicy;
}(cdktf.TerraformDataSource));
exports.DataAwsCloudfrontOriginRequestPolicy = DataAwsCloudfrontOriginRequestPolicy;
