"use strict";
// https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html
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
exports.Apigatewayv2DomainName = void 0;
var cdktf = require("cdktf");
function apigatewayv2DomainNameDomainNameConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        certificate_arn: cdktf.stringToTerraform(struct.certificateArn),
        endpoint_type: cdktf.stringToTerraform(struct.endpointType),
        security_policy: cdktf.stringToTerraform(struct.securityPolicy)
    };
}
function apigatewayv2DomainNameMutualTlsAuthenticationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        truststore_uri: cdktf.stringToTerraform(struct.truststoreUri),
        truststore_version: cdktf.stringToTerraform(struct.truststoreVersion)
    };
}
function apigatewayv2DomainNameTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        update: cdktf.stringToTerraform(struct.update)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html aws_apigatewayv2_domain_name}
*/
var Apigatewayv2DomainName = /** @class */ (function (_super) {
    __extends(Apigatewayv2DomainName, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html aws_apigatewayv2_domain_name} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Apigatewayv2DomainNameConfig
    */
    function Apigatewayv2DomainName(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_apigatewayv2_domain_name',
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
        _this._tagsAll = config.tagsAll;
        _this._domainNameConfiguration = config.domainNameConfiguration;
        _this._mutualTlsAuthentication = config.mutualTlsAuthentication;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(Apigatewayv2DomainName.prototype, "apiMappingSelectionExpression", {
        // ==========
        // ATTRIBUTES
        // ==========
        // api_mapping_selection_expression - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('api_mapping_selection_expression');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2DomainName.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2DomainName.prototype, "domainName", {
        get: function () {
            return this.getStringAttribute('domain_name');
        },
        set: function (value) {
            this._domainName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2DomainName.prototype, "domainNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domainName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2DomainName.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2DomainName.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2DomainName.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(Apigatewayv2DomainName.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2DomainName.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2DomainName.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(Apigatewayv2DomainName.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2DomainName.prototype, "domainNameConfiguration", {
        get: function () {
            return this.interpolationForAttribute('domain_name_configuration');
        },
        set: function (value) {
            this._domainNameConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2DomainName.prototype, "domainNameConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domainNameConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2DomainName.prototype, "mutualTlsAuthentication", {
        get: function () {
            return this.interpolationForAttribute('mutual_tls_authentication');
        },
        set: function (value) {
            this._mutualTlsAuthentication = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2DomainName.prototype.resetMutualTlsAuthentication = function () {
        this._mutualTlsAuthentication = undefined;
    };
    Object.defineProperty(Apigatewayv2DomainName.prototype, "mutualTlsAuthenticationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mutualTlsAuthentication;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2DomainName.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2DomainName.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(Apigatewayv2DomainName.prototype, "timeoutsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeouts;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Apigatewayv2DomainName.prototype.synthesizeAttributes = function () {
        return {
            domain_name: cdktf.stringToTerraform(this._domainName),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            domain_name_configuration: cdktf.listMapper(apigatewayv2DomainNameDomainNameConfigurationToTerraform)(this._domainNameConfiguration),
            mutual_tls_authentication: cdktf.listMapper(apigatewayv2DomainNameMutualTlsAuthenticationToTerraform)(this._mutualTlsAuthentication),
            timeouts: apigatewayv2DomainNameTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Apigatewayv2DomainName.tfResourceType = "aws_apigatewayv2_domain_name";
    return Apigatewayv2DomainName;
}(cdktf.TerraformResource));
exports.Apigatewayv2DomainName = Apigatewayv2DomainName;
