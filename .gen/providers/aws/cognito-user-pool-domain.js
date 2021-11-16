"use strict";
// https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_domain.html
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
exports.CognitoUserPoolDomain = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_domain.html aws_cognito_user_pool_domain}
*/
var CognitoUserPoolDomain = /** @class */ (function (_super) {
    __extends(CognitoUserPoolDomain, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_domain.html aws_cognito_user_pool_domain} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CognitoUserPoolDomainConfig
    */
    function CognitoUserPoolDomain(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_cognito_user_pool_domain',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._certificateArn = config.certificateArn;
        _this._domain = config.domain;
        _this._userPoolId = config.userPoolId;
        return _this;
    }
    Object.defineProperty(CognitoUserPoolDomain.prototype, "awsAccountId", {
        // ==========
        // ATTRIBUTES
        // ==========
        // aws_account_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('aws_account_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPoolDomain.prototype, "certificateArn", {
        get: function () {
            return this.getStringAttribute('certificate_arn');
        },
        set: function (value) {
            this._certificateArn = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoUserPoolDomain.prototype.resetCertificateArn = function () {
        this._certificateArn = undefined;
    };
    Object.defineProperty(CognitoUserPoolDomain.prototype, "certificateArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificateArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPoolDomain.prototype, "cloudfrontDistributionArn", {
        // cloudfront_distribution_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cloudfront_distribution_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPoolDomain.prototype, "domain", {
        get: function () {
            return this.getStringAttribute('domain');
        },
        set: function (value) {
            this._domain = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPoolDomain.prototype, "domainInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domain;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPoolDomain.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPoolDomain.prototype, "s3Bucket", {
        // s3_bucket - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('s3_bucket');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPoolDomain.prototype, "userPoolId", {
        get: function () {
            return this.getStringAttribute('user_pool_id');
        },
        set: function (value) {
            this._userPoolId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPoolDomain.prototype, "userPoolIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userPoolId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPoolDomain.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CognitoUserPoolDomain.prototype.synthesizeAttributes = function () {
        return {
            certificate_arn: cdktf.stringToTerraform(this._certificateArn),
            domain: cdktf.stringToTerraform(this._domain),
            user_pool_id: cdktf.stringToTerraform(this._userPoolId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CognitoUserPoolDomain.tfResourceType = "aws_cognito_user_pool_domain";
    return CognitoUserPoolDomain;
}(cdktf.TerraformResource));
exports.CognitoUserPoolDomain = CognitoUserPoolDomain;
