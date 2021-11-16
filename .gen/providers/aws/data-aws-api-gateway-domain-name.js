"use strict";
// https://www.terraform.io/docs/providers/aws/d/api_gateway_domain_name.html
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
exports.DataAwsApiGatewayDomainName = exports.DataAwsApiGatewayDomainNameEndpointConfiguration = void 0;
var cdktf = require("cdktf");
var DataAwsApiGatewayDomainNameEndpointConfiguration = /** @class */ (function (_super) {
    __extends(DataAwsApiGatewayDomainNameEndpointConfiguration, _super);
    function DataAwsApiGatewayDomainNameEndpointConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsApiGatewayDomainNameEndpointConfiguration.prototype, "types", {
        // types - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('types');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsApiGatewayDomainNameEndpointConfiguration;
}(cdktf.ComplexComputedList));
exports.DataAwsApiGatewayDomainNameEndpointConfiguration = DataAwsApiGatewayDomainNameEndpointConfiguration;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_domain_name.html aws_api_gateway_domain_name}
*/
var DataAwsApiGatewayDomainName = /** @class */ (function (_super) {
    __extends(DataAwsApiGatewayDomainName, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_domain_name.html aws_api_gateway_domain_name} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsApiGatewayDomainNameConfig
    */
    function DataAwsApiGatewayDomainName(scope, id, config) {
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
        _this._domainName = config.domainName;
        _this._tags = config.tags;
        return _this;
    }
    Object.defineProperty(DataAwsApiGatewayDomainName.prototype, "arn", {
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
    Object.defineProperty(DataAwsApiGatewayDomainName.prototype, "certificateArn", {
        // certificate_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApiGatewayDomainName.prototype, "certificateName", {
        // certificate_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApiGatewayDomainName.prototype, "certificateUploadDate", {
        // certificate_upload_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate_upload_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApiGatewayDomainName.prototype, "cloudfrontDomainName", {
        // cloudfront_domain_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cloudfront_domain_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApiGatewayDomainName.prototype, "cloudfrontZoneId", {
        // cloudfront_zone_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cloudfront_zone_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApiGatewayDomainName.prototype, "domainName", {
        get: function () {
            return this.getStringAttribute('domain_name');
        },
        set: function (value) {
            this._domainName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApiGatewayDomainName.prototype, "domainNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domainName;
        },
        enumerable: false,
        configurable: true
    });
    // endpoint_configuration - computed: true, optional: false, required: false
    DataAwsApiGatewayDomainName.prototype.endpointConfiguration = function (index) {
        return new DataAwsApiGatewayDomainNameEndpointConfiguration(this, 'endpoint_configuration', index);
    };
    Object.defineProperty(DataAwsApiGatewayDomainName.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApiGatewayDomainName.prototype, "regionalCertificateArn", {
        // regional_certificate_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('regional_certificate_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApiGatewayDomainName.prototype, "regionalCertificateName", {
        // regional_certificate_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('regional_certificate_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApiGatewayDomainName.prototype, "regionalDomainName", {
        // regional_domain_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('regional_domain_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApiGatewayDomainName.prototype, "regionalZoneId", {
        // regional_zone_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('regional_zone_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApiGatewayDomainName.prototype, "securityPolicy", {
        // security_policy - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('security_policy');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsApiGatewayDomainName.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsApiGatewayDomainName.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsApiGatewayDomainName.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsApiGatewayDomainName.prototype.synthesizeAttributes = function () {
        return {
            domain_name: cdktf.stringToTerraform(this._domainName),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsApiGatewayDomainName.tfResourceType = "aws_api_gateway_domain_name";
    return DataAwsApiGatewayDomainName;
}(cdktf.TerraformDataSource));
exports.DataAwsApiGatewayDomainName = DataAwsApiGatewayDomainName;
