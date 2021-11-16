"use strict";
// https://www.terraform.io/docs/providers/aws/d/lb_listener.html
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
exports.DataAwsLbListener = exports.DataAwsLbListenerDefaultAction = exports.DataAwsLbListenerDefaultActionRedirect = exports.DataAwsLbListenerDefaultActionForward = exports.DataAwsLbListenerDefaultActionForwardTargetGroup = exports.DataAwsLbListenerDefaultActionForwardStickiness = exports.DataAwsLbListenerDefaultActionFixedResponse = exports.DataAwsLbListenerDefaultActionAuthenticateOidc = exports.DataAwsLbListenerDefaultActionAuthenticateCognito = void 0;
var cdktf = require("cdktf");
var DataAwsLbListenerDefaultActionAuthenticateCognito = /** @class */ (function (_super) {
    __extends(DataAwsLbListenerDefaultActionAuthenticateCognito, _super);
    function DataAwsLbListenerDefaultActionAuthenticateCognito() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsLbListenerDefaultActionAuthenticateCognito.prototype, "authenticationRequestExtraParams", {
        // authentication_request_extra_params - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('authentication_request_extra_params');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbListenerDefaultActionAuthenticateCognito.prototype, "onUnauthenticatedRequest", {
        // on_unauthenticated_request - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('on_unauthenticated_request');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbListenerDefaultActionAuthenticateCognito.prototype, "scope", {
        // scope - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('scope');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbListenerDefaultActionAuthenticateCognito.prototype, "sessionCookieName", {
        // session_cookie_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('session_cookie_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbListenerDefaultActionAuthenticateCognito.prototype, "sessionTimeout", {
        // session_timeout - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('session_timeout');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbListenerDefaultActionAuthenticateCognito.prototype, "userPoolArn", {
        // user_pool_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('user_pool_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbListenerDefaultActionAuthenticateCognito.prototype, "userPoolClientId", {
        // user_pool_client_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('user_pool_client_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbListenerDefaultActionAuthenticateCognito.prototype, "userPoolDomain", {
        // user_pool_domain - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('user_pool_domain');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsLbListenerDefaultActionAuthenticateCognito;
}(cdktf.ComplexComputedList));
exports.DataAwsLbListenerDefaultActionAuthenticateCognito = DataAwsLbListenerDefaultActionAuthenticateCognito;
var DataAwsLbListenerDefaultActionAuthenticateOidc = /** @class */ (function (_super) {
    __extends(DataAwsLbListenerDefaultActionAuthenticateOidc, _super);
    function DataAwsLbListenerDefaultActionAuthenticateOidc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsLbListenerDefaultActionAuthenticateOidc.prototype, "authenticationRequestExtraParams", {
        // authentication_request_extra_params - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('authentication_request_extra_params');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbListenerDefaultActionAuthenticateOidc.prototype, "authorizationEndpoint", {
        // authorization_endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('authorization_endpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbListenerDefaultActionAuthenticateOidc.prototype, "clientId", {
        // client_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('client_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbListenerDefaultActionAuthenticateOidc.prototype, "clientSecret", {
        // client_secret - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('client_secret');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbListenerDefaultActionAuthenticateOidc.prototype, "issuer", {
        // issuer - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('issuer');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbListenerDefaultActionAuthenticateOidc.prototype, "onUnauthenticatedRequest", {
        // on_unauthenticated_request - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('on_unauthenticated_request');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbListenerDefaultActionAuthenticateOidc.prototype, "scope", {
        // scope - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('scope');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbListenerDefaultActionAuthenticateOidc.prototype, "sessionCookieName", {
        // session_cookie_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('session_cookie_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbListenerDefaultActionAuthenticateOidc.prototype, "sessionTimeout", {
        // session_timeout - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('session_timeout');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbListenerDefaultActionAuthenticateOidc.prototype, "tokenEndpoint", {
        // token_endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('token_endpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbListenerDefaultActionAuthenticateOidc.prototype, "userInfoEndpoint", {
        // user_info_endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('user_info_endpoint');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsLbListenerDefaultActionAuthenticateOidc;
}(cdktf.ComplexComputedList));
exports.DataAwsLbListenerDefaultActionAuthenticateOidc = DataAwsLbListenerDefaultActionAuthenticateOidc;
var DataAwsLbListenerDefaultActionFixedResponse = /** @class */ (function (_super) {
    __extends(DataAwsLbListenerDefaultActionFixedResponse, _super);
    function DataAwsLbListenerDefaultActionFixedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsLbListenerDefaultActionFixedResponse.prototype, "contentType", {
        // content_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('content_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbListenerDefaultActionFixedResponse.prototype, "messageBody", {
        // message_body - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('message_body');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbListenerDefaultActionFixedResponse.prototype, "statusCode", {
        // status_code - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status_code');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsLbListenerDefaultActionFixedResponse;
}(cdktf.ComplexComputedList));
exports.DataAwsLbListenerDefaultActionFixedResponse = DataAwsLbListenerDefaultActionFixedResponse;
var DataAwsLbListenerDefaultActionForwardStickiness = /** @class */ (function (_super) {
    __extends(DataAwsLbListenerDefaultActionForwardStickiness, _super);
    function DataAwsLbListenerDefaultActionForwardStickiness() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsLbListenerDefaultActionForwardStickiness.prototype, "duration", {
        // duration - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('duration');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbListenerDefaultActionForwardStickiness.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsLbListenerDefaultActionForwardStickiness;
}(cdktf.ComplexComputedList));
exports.DataAwsLbListenerDefaultActionForwardStickiness = DataAwsLbListenerDefaultActionForwardStickiness;
var DataAwsLbListenerDefaultActionForwardTargetGroup = /** @class */ (function (_super) {
    __extends(DataAwsLbListenerDefaultActionForwardTargetGroup, _super);
    function DataAwsLbListenerDefaultActionForwardTargetGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsLbListenerDefaultActionForwardTargetGroup.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbListenerDefaultActionForwardTargetGroup.prototype, "weight", {
        // weight - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('weight');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsLbListenerDefaultActionForwardTargetGroup;
}(cdktf.ComplexComputedList));
exports.DataAwsLbListenerDefaultActionForwardTargetGroup = DataAwsLbListenerDefaultActionForwardTargetGroup;
var DataAwsLbListenerDefaultActionForward = /** @class */ (function (_super) {
    __extends(DataAwsLbListenerDefaultActionForward, _super);
    function DataAwsLbListenerDefaultActionForward() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsLbListenerDefaultActionForward.prototype, "stickiness", {
        // stickiness - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('stickiness');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbListenerDefaultActionForward.prototype, "targetGroup", {
        // target_group - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('target_group');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsLbListenerDefaultActionForward;
}(cdktf.ComplexComputedList));
exports.DataAwsLbListenerDefaultActionForward = DataAwsLbListenerDefaultActionForward;
var DataAwsLbListenerDefaultActionRedirect = /** @class */ (function (_super) {
    __extends(DataAwsLbListenerDefaultActionRedirect, _super);
    function DataAwsLbListenerDefaultActionRedirect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsLbListenerDefaultActionRedirect.prototype, "host", {
        // host - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('host');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbListenerDefaultActionRedirect.prototype, "path", {
        // path - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('path');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbListenerDefaultActionRedirect.prototype, "port", {
        // port - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbListenerDefaultActionRedirect.prototype, "protocol", {
        // protocol - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('protocol');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbListenerDefaultActionRedirect.prototype, "query", {
        // query - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('query');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbListenerDefaultActionRedirect.prototype, "statusCode", {
        // status_code - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status_code');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsLbListenerDefaultActionRedirect;
}(cdktf.ComplexComputedList));
exports.DataAwsLbListenerDefaultActionRedirect = DataAwsLbListenerDefaultActionRedirect;
var DataAwsLbListenerDefaultAction = /** @class */ (function (_super) {
    __extends(DataAwsLbListenerDefaultAction, _super);
    function DataAwsLbListenerDefaultAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsLbListenerDefaultAction.prototype, "authenticateCognito", {
        // authenticate_cognito - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('authenticate_cognito');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbListenerDefaultAction.prototype, "authenticateOidc", {
        // authenticate_oidc - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('authenticate_oidc');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbListenerDefaultAction.prototype, "fixedResponse", {
        // fixed_response - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('fixed_response');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbListenerDefaultAction.prototype, "forward", {
        // forward - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('forward');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbListenerDefaultAction.prototype, "order", {
        // order - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('order');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbListenerDefaultAction.prototype, "redirect", {
        // redirect - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('redirect');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbListenerDefaultAction.prototype, "targetGroupArn", {
        // target_group_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('target_group_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbListenerDefaultAction.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsLbListenerDefaultAction;
}(cdktf.ComplexComputedList));
exports.DataAwsLbListenerDefaultAction = DataAwsLbListenerDefaultAction;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/lb_listener.html aws_lb_listener}
*/
var DataAwsLbListener = /** @class */ (function (_super) {
    __extends(DataAwsLbListener, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lb_listener.html aws_lb_listener} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLbListenerConfig = {}
    */
    function DataAwsLbListener(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_lb_listener',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._loadBalancerArn = config.loadBalancerArn;
        _this._port = config.port;
        _this._tags = config.tags;
        return _this;
    }
    Object.defineProperty(DataAwsLbListener.prototype, "alpnPolicy", {
        // ==========
        // ATTRIBUTES
        // ==========
        // alpn_policy - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('alpn_policy');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbListener.prototype, "arn", {
        // arn - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbListener.prototype, "certificateArn", {
        // certificate_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate_arn');
        },
        enumerable: false,
        configurable: true
    });
    // default_action - computed: true, optional: false, required: false
    DataAwsLbListener.prototype.defaultAction = function (index) {
        return new DataAwsLbListenerDefaultAction(this, 'default_action', index);
    };
    Object.defineProperty(DataAwsLbListener.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbListener.prototype, "loadBalancerArn", {
        get: function () {
            return this.getStringAttribute('load_balancer_arn');
        },
        set: function (value) {
            this._loadBalancerArn = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsLbListener.prototype.resetLoadBalancerArn = function () {
        this._loadBalancerArn = undefined;
    };
    Object.defineProperty(DataAwsLbListener.prototype, "loadBalancerArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._loadBalancerArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbListener.prototype, "port", {
        get: function () {
            return this.getNumberAttribute('port');
        },
        set: function (value) {
            this._port = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsLbListener.prototype.resetPort = function () {
        this._port = undefined;
    };
    Object.defineProperty(DataAwsLbListener.prototype, "portInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._port;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbListener.prototype, "protocol", {
        // protocol - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('protocol');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbListener.prototype, "sslPolicy", {
        // ssl_policy - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ssl_policy');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLbListener.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsLbListener.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsLbListener.prototype, "tagsInput", {
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
    DataAwsLbListener.prototype.synthesizeAttributes = function () {
        return {
            load_balancer_arn: cdktf.stringToTerraform(this._loadBalancerArn),
            port: cdktf.numberToTerraform(this._port),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsLbListener.tfResourceType = "aws_lb_listener";
    return DataAwsLbListener;
}(cdktf.TerraformDataSource));
exports.DataAwsLbListener = DataAwsLbListener;
