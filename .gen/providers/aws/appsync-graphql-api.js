"use strict";
// https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html
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
exports.AppsyncGraphqlApi = void 0;
var cdktf = require("cdktf");
function appsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        auth_ttl: cdktf.numberToTerraform(struct.authTtl),
        client_id: cdktf.stringToTerraform(struct.clientId),
        iat_ttl: cdktf.numberToTerraform(struct.iatTtl),
        issuer: cdktf.stringToTerraform(struct.issuer)
    };
}
function appsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        app_id_client_regex: cdktf.stringToTerraform(struct.appIdClientRegex),
        aws_region: cdktf.stringToTerraform(struct.awsRegion),
        user_pool_id: cdktf.stringToTerraform(struct.userPoolId)
    };
}
function appsyncGraphqlApiAdditionalAuthenticationProviderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        authentication_type: cdktf.stringToTerraform(struct.authenticationType),
        openid_connect_config: cdktf.listMapper(appsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigToTerraform)(struct.openidConnectConfig),
        user_pool_config: cdktf.listMapper(appsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigToTerraform)(struct.userPoolConfig)
    };
}
function appsyncGraphqlApiLogConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cloudwatch_logs_role_arn: cdktf.stringToTerraform(struct.cloudwatchLogsRoleArn),
        exclude_verbose_content: cdktf.booleanToTerraform(struct.excludeVerboseContent),
        field_log_level: cdktf.stringToTerraform(struct.fieldLogLevel)
    };
}
function appsyncGraphqlApiOpenidConnectConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        auth_ttl: cdktf.numberToTerraform(struct.authTtl),
        client_id: cdktf.stringToTerraform(struct.clientId),
        iat_ttl: cdktf.numberToTerraform(struct.iatTtl),
        issuer: cdktf.stringToTerraform(struct.issuer)
    };
}
function appsyncGraphqlApiUserPoolConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        app_id_client_regex: cdktf.stringToTerraform(struct.appIdClientRegex),
        aws_region: cdktf.stringToTerraform(struct.awsRegion),
        default_action: cdktf.stringToTerraform(struct.defaultAction),
        user_pool_id: cdktf.stringToTerraform(struct.userPoolId)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html aws_appsync_graphql_api}
*/
var AppsyncGraphqlApi = /** @class */ (function (_super) {
    __extends(AppsyncGraphqlApi, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html aws_appsync_graphql_api} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppsyncGraphqlApiConfig
    */
    function AppsyncGraphqlApi(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_appsync_graphql_api',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._authenticationType = config.authenticationType;
        _this._name = config.name;
        _this._schema = config.schema;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._xrayEnabled = config.xrayEnabled;
        _this._additionalAuthenticationProvider = config.additionalAuthenticationProvider;
        _this._logConfig = config.logConfig;
        _this._openidConnectConfig = config.openidConnectConfig;
        _this._userPoolConfig = config.userPoolConfig;
        return _this;
    }
    Object.defineProperty(AppsyncGraphqlApi.prototype, "arn", {
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
    Object.defineProperty(AppsyncGraphqlApi.prototype, "authenticationType", {
        get: function () {
            return this.getStringAttribute('authentication_type');
        },
        set: function (value) {
            this._authenticationType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncGraphqlApi.prototype, "authenticationTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authenticationType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncGraphqlApi.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncGraphqlApi.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncGraphqlApi.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncGraphqlApi.prototype, "schema", {
        get: function () {
            return this.getStringAttribute('schema');
        },
        set: function (value) {
            this._schema = value;
        },
        enumerable: false,
        configurable: true
    });
    AppsyncGraphqlApi.prototype.resetSchema = function () {
        this._schema = undefined;
    };
    Object.defineProperty(AppsyncGraphqlApi.prototype, "schemaInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._schema;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncGraphqlApi.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    AppsyncGraphqlApi.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(AppsyncGraphqlApi.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncGraphqlApi.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    AppsyncGraphqlApi.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(AppsyncGraphqlApi.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    // uris - computed: true, optional: false, required: false
    AppsyncGraphqlApi.prototype.uris = function (key) {
        return new cdktf.StringMap(this, 'uris').lookup(key);
    };
    Object.defineProperty(AppsyncGraphqlApi.prototype, "xrayEnabled", {
        get: function () {
            return this.getBooleanAttribute('xray_enabled');
        },
        set: function (value) {
            this._xrayEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    AppsyncGraphqlApi.prototype.resetXrayEnabled = function () {
        this._xrayEnabled = undefined;
    };
    Object.defineProperty(AppsyncGraphqlApi.prototype, "xrayEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._xrayEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncGraphqlApi.prototype, "additionalAuthenticationProvider", {
        get: function () {
            return this.interpolationForAttribute('additional_authentication_provider');
        },
        set: function (value) {
            this._additionalAuthenticationProvider = value;
        },
        enumerable: false,
        configurable: true
    });
    AppsyncGraphqlApi.prototype.resetAdditionalAuthenticationProvider = function () {
        this._additionalAuthenticationProvider = undefined;
    };
    Object.defineProperty(AppsyncGraphqlApi.prototype, "additionalAuthenticationProviderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._additionalAuthenticationProvider;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncGraphqlApi.prototype, "logConfig", {
        get: function () {
            return this.interpolationForAttribute('log_config');
        },
        set: function (value) {
            this._logConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    AppsyncGraphqlApi.prototype.resetLogConfig = function () {
        this._logConfig = undefined;
    };
    Object.defineProperty(AppsyncGraphqlApi.prototype, "logConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._logConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncGraphqlApi.prototype, "openidConnectConfig", {
        get: function () {
            return this.interpolationForAttribute('openid_connect_config');
        },
        set: function (value) {
            this._openidConnectConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    AppsyncGraphqlApi.prototype.resetOpenidConnectConfig = function () {
        this._openidConnectConfig = undefined;
    };
    Object.defineProperty(AppsyncGraphqlApi.prototype, "openidConnectConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._openidConnectConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncGraphqlApi.prototype, "userPoolConfig", {
        get: function () {
            return this.interpolationForAttribute('user_pool_config');
        },
        set: function (value) {
            this._userPoolConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    AppsyncGraphqlApi.prototype.resetUserPoolConfig = function () {
        this._userPoolConfig = undefined;
    };
    Object.defineProperty(AppsyncGraphqlApi.prototype, "userPoolConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userPoolConfig;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    AppsyncGraphqlApi.prototype.synthesizeAttributes = function () {
        return {
            authentication_type: cdktf.stringToTerraform(this._authenticationType),
            name: cdktf.stringToTerraform(this._name),
            schema: cdktf.stringToTerraform(this._schema),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            xray_enabled: cdktf.booleanToTerraform(this._xrayEnabled),
            additional_authentication_provider: cdktf.listMapper(appsyncGraphqlApiAdditionalAuthenticationProviderToTerraform)(this._additionalAuthenticationProvider),
            log_config: cdktf.listMapper(appsyncGraphqlApiLogConfigToTerraform)(this._logConfig),
            openid_connect_config: cdktf.listMapper(appsyncGraphqlApiOpenidConnectConfigToTerraform)(this._openidConnectConfig),
            user_pool_config: cdktf.listMapper(appsyncGraphqlApiUserPoolConfigToTerraform)(this._userPoolConfig)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    AppsyncGraphqlApi.tfResourceType = "aws_appsync_graphql_api";
    return AppsyncGraphqlApi;
}(cdktf.TerraformResource));
exports.AppsyncGraphqlApi = AppsyncGraphqlApi;
