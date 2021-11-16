"use strict";
// https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html
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
exports.CloudwatchEventConnection = void 0;
var cdktf = require("cdktf");
function cloudwatchEventConnectionAuthParametersApiKeyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function cloudwatchEventConnectionAuthParametersBasicToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        password: cdktf.stringToTerraform(struct.password),
        username: cdktf.stringToTerraform(struct.username)
    };
}
function cloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        is_value_secret: cdktf.booleanToTerraform(struct.isValueSecret),
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function cloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        is_value_secret: cdktf.booleanToTerraform(struct.isValueSecret),
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function cloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        is_value_secret: cdktf.booleanToTerraform(struct.isValueSecret),
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function cloudwatchEventConnectionAuthParametersInvocationHttpParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        body: cdktf.listMapper(cloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyToTerraform)(struct.body),
        header: cdktf.listMapper(cloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderToTerraform)(struct.header),
        query_string: cdktf.listMapper(cloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringToTerraform)(struct.queryString)
    };
}
function cloudwatchEventConnectionAuthParametersOauthClientParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        client_id: cdktf.stringToTerraform(struct.clientId),
        client_secret: cdktf.stringToTerraform(struct.clientSecret)
    };
}
function cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        is_value_secret: cdktf.booleanToTerraform(struct.isValueSecret),
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        is_value_secret: cdktf.booleanToTerraform(struct.isValueSecret),
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        is_value_secret: cdktf.booleanToTerraform(struct.isValueSecret),
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        body: cdktf.listMapper(cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyToTerraform)(struct.body),
        header: cdktf.listMapper(cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderToTerraform)(struct.header),
        query_string: cdktf.listMapper(cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringToTerraform)(struct.queryString)
    };
}
function cloudwatchEventConnectionAuthParametersOauthToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        authorization_endpoint: cdktf.stringToTerraform(struct.authorizationEndpoint),
        http_method: cdktf.stringToTerraform(struct.httpMethod),
        client_parameters: cdktf.listMapper(cloudwatchEventConnectionAuthParametersOauthClientParametersToTerraform)(struct.clientParameters),
        oauth_http_parameters: cdktf.listMapper(cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersToTerraform)(struct.oauthHttpParameters)
    };
}
function cloudwatchEventConnectionAuthParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        api_key: cdktf.listMapper(cloudwatchEventConnectionAuthParametersApiKeyToTerraform)(struct.apiKey),
        basic: cdktf.listMapper(cloudwatchEventConnectionAuthParametersBasicToTerraform)(struct.basic),
        invocation_http_parameters: cdktf.listMapper(cloudwatchEventConnectionAuthParametersInvocationHttpParametersToTerraform)(struct.invocationHttpParameters),
        oauth: cdktf.listMapper(cloudwatchEventConnectionAuthParametersOauthToTerraform)(struct.oauth)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html aws_cloudwatch_event_connection}
*/
var CloudwatchEventConnection = /** @class */ (function (_super) {
    __extends(CloudwatchEventConnection, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html aws_cloudwatch_event_connection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchEventConnectionConfig
    */
    function CloudwatchEventConnection(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_cloudwatch_event_connection',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._authorizationType = config.authorizationType;
        _this._description = config.description;
        _this._name = config.name;
        _this._authParameters = config.authParameters;
        return _this;
    }
    Object.defineProperty(CloudwatchEventConnection.prototype, "arn", {
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
    Object.defineProperty(CloudwatchEventConnection.prototype, "authorizationType", {
        get: function () {
            return this.getStringAttribute('authorization_type');
        },
        set: function (value) {
            this._authorizationType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventConnection.prototype, "authorizationTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authorizationType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventConnection.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudwatchEventConnection.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(CloudwatchEventConnection.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventConnection.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventConnection.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventConnection.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventConnection.prototype, "secretArn", {
        // secret_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('secret_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventConnection.prototype, "authParameters", {
        get: function () {
            return this.interpolationForAttribute('auth_parameters');
        },
        set: function (value) {
            this._authParameters = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudwatchEventConnection.prototype, "authParametersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authParameters;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CloudwatchEventConnection.prototype.synthesizeAttributes = function () {
        return {
            authorization_type: cdktf.stringToTerraform(this._authorizationType),
            description: cdktf.stringToTerraform(this._description),
            name: cdktf.stringToTerraform(this._name),
            auth_parameters: cdktf.listMapper(cloudwatchEventConnectionAuthParametersToTerraform)(this._authParameters)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CloudwatchEventConnection.tfResourceType = "aws_cloudwatch_event_connection";
    return CloudwatchEventConnection;
}(cdktf.TerraformResource));
exports.CloudwatchEventConnection = CloudwatchEventConnection;
