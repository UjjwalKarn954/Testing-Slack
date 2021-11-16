"use strict";
// https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html
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
exports.ApiGatewayDomainName = void 0;
var cdktf = require("cdktf");
function apiGatewayDomainNameEndpointConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        types: cdktf.listMapper(cdktf.stringToTerraform)(struct.types)
    };
}
function apiGatewayDomainNameMutualTlsAuthenticationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        truststore_uri: cdktf.stringToTerraform(struct.truststoreUri),
        truststore_version: cdktf.stringToTerraform(struct.truststoreVersion)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html aws_api_gateway_domain_name}
*/
var ApiGatewayDomainName = /** @class */ (function (_super) {
    __extends(ApiGatewayDomainName, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html aws_api_gateway_domain_name} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayDomainNameConfig
    */
    function ApiGatewayDomainName(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_api_gateway_domain_name',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._certificateArn = config.certificateArn;
        _this._certificateBody = config.certificateBody;
        _this._certificateChain = config.certificateChain;
        _this._certificateName = config.certificateName;
        _this._certificatePrivateKey = config.certificatePrivateKey;
        _this._domainName = config.domainName;
        _this._regionalCertificateArn = config.regionalCertificateArn;
        _this._regionalCertificateName = config.regionalCertificateName;
        _this._securityPolicy = config.securityPolicy;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._endpointConfiguration = config.endpointConfiguration;
        _this._mutualTlsAuthentication = config.mutualTlsAuthentication;
        return _this;
    }
    Object.defineProperty(ApiGatewayDomainName.prototype, "arn", {
        // ==========
        // ATTRIBUTES
        // ==========
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayDomainName.prototype, "certificateArn", {
        get: function () {
            return this.getStringAttribute('certificate_arn');
        },
        set: function (value) {
            this._certificateArn = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayDomainName.prototype.resetCertificateArn = function () {
        this._certificateArn = undefined;
    };
    Object.defineProperty(ApiGatewayDomainName.prototype, "certificateArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificateArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayDomainName.prototype, "certificateBody", {
        get: function () {
            return this.getStringAttribute('certificate_body');
        },
        set: function (value) {
            this._certificateBody = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayDomainName.prototype.resetCertificateBody = function () {
        this._certificateBody = undefined;
    };
    Object.defineProperty(ApiGatewayDomainName.prototype, "certificateBodyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificateBody;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayDomainName.prototype, "certificateChain", {
        get: function () {
            return this.getStringAttribute('certificate_chain');
        },
        set: function (value) {
            this._certificateChain = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayDomainName.prototype.resetCertificateChain = function () {
        this._certificateChain = undefined;
    };
    Object.defineProperty(ApiGatewayDomainName.prototype, "certificateChainInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificateChain;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayDomainName.prototype, "certificateName", {
        get: function () {
            return this.getStringAttribute('certificate_name');
        },
        set: function (value) {
            this._certificateName = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayDomainName.prototype.resetCertificateName = function () {
        this._certificateName = undefined;
    };
    Object.defineProperty(ApiGatewayDomainName.prototype, "certificateNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificateName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayDomainName.prototype, "certificatePrivateKey", {
        get: function () {
            return this.getStringAttribute('certificate_private_key');
        },
        set: function (value) {
            this._certificatePrivateKey = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayDomainName.prototype.resetCertificatePrivateKey = function () {
        this._certificatePrivateKey = undefined;
    };
    Object.defineProperty(ApiGatewayDomainName.prototype, "certificatePrivateKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificatePrivateKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayDomainName.prototype, "certificateUploadDate", {
        // certificate_upload_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate_upload_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayDomainName.prototype, "cloudfrontDomainName", {
        // cloudfront_domain_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cloudfront_domain_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayDomainName.prototype, "cloudfrontZoneId", {
        // cloudfront_zone_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cloudfront_zone_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayDomainName.prototype, "domainName", {
        get: function () {
            return this.getStringAttribute('domain_name');
        },
        set: function (value) {
            this._domainName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayDomainName.prototype, "domainNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domainName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayDomainName.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayDomainName.prototype, "regionalCertificateArn", {
        get: function () {
            return this.getStringAttribute('regional_certificate_arn');
        },
        set: function (value) {
            this._regionalCertificateArn = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayDomainName.prototype.resetRegionalCertificateArn = function () {
        this._regionalCertificateArn = undefined;
    };
    Object.defineProperty(ApiGatewayDomainName.prototype, "regionalCertificateArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._regionalCertificateArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayDomainName.prototype, "regionalCertificateName", {
        get: function () {
            return this.getStringAttribute('regional_certificate_name');
        },
        set: function (value) {
            this._regionalCertificateName = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayDomainName.prototype.resetRegionalCertificateName = function () {
        this._regionalCertificateName = undefined;
    };
    Object.defineProperty(ApiGatewayDomainName.prototype, "regionalCertificateNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._regionalCertificateName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayDomainName.prototype, "regionalDomainName", {
        // regional_domain_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('regional_domain_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayDomainName.prototype, "regionalZoneId", {
        // regional_zone_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('regional_zone_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayDomainName.prototype, "securityPolicy", {
        get: function () {
            return this.getStringAttribute('security_policy');
        },
        set: function (value) {
            this._securityPolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayDomainName.prototype.resetSecurityPolicy = function () {
        this._securityPolicy = undefined;
    };
    Object.defineProperty(ApiGatewayDomainName.prototype, "securityPolicyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._securityPolicy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayDomainName.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayDomainName.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(ApiGatewayDomainName.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayDomainName.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayDomainName.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(ApiGatewayDomainName.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayDomainName.prototype, "endpointConfiguration", {
        get: function () {
            return this.interpolationForAttribute('endpoint_configuration');
        },
        set: function (value) {
            this._endpointConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayDomainName.prototype.resetEndpointConfiguration = function () {
        this._endpointConfiguration = undefined;
    };
    Object.defineProperty(ApiGatewayDomainName.prototype, "endpointConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._endpointConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiGatewayDomainName.prototype, "mutualTlsAuthentication", {
        get: function () {
            return this.interpolationForAttribute('mutual_tls_authentication');
        },
        set: function (value) {
            this._mutualTlsAuthentication = value;
        },
        enumerable: false,
        configurable: true
    });
    ApiGatewayDomainName.prototype.resetMutualTlsAuthentication = function () {
        this._mutualTlsAuthentication = undefined;
    };
    Object.defineProperty(ApiGatewayDomainName.prototype, "mutualTlsAuthenticationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mutualTlsAuthentication;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ApiGatewayDomainName.prototype.synthesizeAttributes = function () {
        return {
            certificate_arn: cdktf.stringToTerraform(this._certificateArn),
            certificate_body: cdktf.stringToTerraform(this._certificateBody),
            certificate_chain: cdktf.stringToTerraform(this._certificateChain),
            certificate_name: cdktf.stringToTerraform(this._certificateName),
            certificate_private_key: cdktf.stringToTerraform(this._certificatePrivateKey),
            domain_name: cdktf.stringToTerraform(this._domainName),
            regional_certificate_arn: cdktf.stringToTerraform(this._regionalCertificateArn),
            regional_certificate_name: cdktf.stringToTerraform(this._regionalCertificateName),
            security_policy: cdktf.stringToTerraform(this._securityPolicy),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            endpoint_configuration: cdktf.listMapper(apiGatewayDomainNameEndpointConfigurationToTerraform)(this._endpointConfiguration),
            mutual_tls_authentication: cdktf.listMapper(apiGatewayDomainNameMutualTlsAuthenticationToTerraform)(this._mutualTlsAuthentication)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ApiGatewayDomainName.tfResourceType = "aws_api_gateway_domain_name";
    return ApiGatewayDomainName;
}(cdktf.TerraformResource));
exports.ApiGatewayDomainName = ApiGatewayDomainName;
