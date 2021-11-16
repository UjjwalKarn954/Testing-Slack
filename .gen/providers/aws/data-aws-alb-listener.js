"use strict";
// https://www.terraform.io/docs/providers/aws/d/alb_listener.html
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
exports.DataAwsAlbListener = exports.DataAwsAlbListenerDefaultAction = exports.DataAwsAlbListenerDefaultActionRedirect = exports.DataAwsAlbListenerDefaultActionForward = exports.DataAwsAlbListenerDefaultActionForwardTargetGroup = exports.DataAwsAlbListenerDefaultActionForwardStickiness = exports.DataAwsAlbListenerDefaultActionFixedResponse = exports.DataAwsAlbListenerDefaultActionAuthenticateOidc = exports.DataAwsAlbListenerDefaultActionAuthenticateCognito = void 0;
var cdktf = require("cdktf");
var DataAwsAlbListenerDefaultActionAuthenticateCognito = /** @class */ (function (_super) {
    __extends(DataAwsAlbListenerDefaultActionAuthenticateCognito, _super);
    function DataAwsAlbListenerDefaultActionAuthenticateCognito() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsAlbListenerDefaultActionAuthenticateCognito.prototype, "authenticationRequestExtraParams", {
        // authentication_request_extra_params - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('authentication_request_extra_params');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbListenerDefaultActionAuthenticateCognito.prototype, "onUnauthenticatedRequest", {
        // on_unauthenticated_request - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('on_unauthenticated_request');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbListenerDefaultActionAuthenticateCognito.prototype, "scope", {
        // scope - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('scope');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbListenerDefaultActionAuthenticateCognito.prototype, "sessionCookieName", {
        // session_cookie_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('session_cookie_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbListenerDefaultActionAuthenticateCognito.prototype, "sessionTimeout", {
        // session_timeout - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('session_timeout');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbListenerDefaultActionAuthenticateCognito.prototype, "userPoolArn", {
        // user_pool_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('user_pool_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbListenerDefaultActionAuthenticateCognito.prototype, "userPoolClientId", {
        // user_pool_client_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('user_pool_client_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbListenerDefaultActionAuthenticateCognito.prototype, "userPoolDomain", {
        // user_pool_domain - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('user_pool_domain');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsAlbListenerDefaultActionAuthenticateCognito;
}(cdktf.ComplexComputedList));
exports.DataAwsAlbListenerDefaultActionAuthenticateCognito = DataAwsAlbListenerDefaultActionAuthenticateCognito;
var DataAwsAlbListenerDefaultActionAuthenticateOidc = /** @class */ (function (_super) {
    __extends(DataAwsAlbListenerDefaultActionAuthenticateOidc, _super);
    function DataAwsAlbListenerDefaultActionAuthenticateOidc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsAlbListenerDefaultActionAuthenticateOidc.prototype, "authenticationRequestExtraParams", {
        // authentication_request_extra_params - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('authentication_request_extra_params');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbListenerDefaultActionAuthenticateOidc.prototype, "authorizationEndpoint", {
        // authorization_endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('authorization_endpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbListenerDefaultActionAuthenticateOidc.prototype, "clientId", {
        // client_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('client_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbListenerDefaultActionAuthenticateOidc.prototype, "clientSecret", {
        // client_secret - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('client_secret');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbListenerDefaultActionAuthenticateOidc.prototype, "issuer", {
        // issuer - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('issuer');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbListenerDefaultActionAuthenticateOidc.prototype, "onUnauthenticatedRequest", {
        // on_unauthenticated_request - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('on_unauthenticated_request');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbListenerDefaultActionAuthenticateOidc.prototype, "scope", {
        // scope - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('scope');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbListenerDefaultActionAuthenticateOidc.prototype, "sessionCookieName", {
        // session_cookie_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('session_cookie_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbListenerDefaultActionAuthenticateOidc.prototype, "sessionTimeout", {
        // session_timeout - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('session_timeout');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbListenerDefaultActionAuthenticateOidc.prototype, "tokenEndpoint", {
        // token_endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('token_endpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbListenerDefaultActionAuthenticateOidc.prototype, "userInfoEndpoint", {
        // user_info_endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('user_info_endpoint');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsAlbListenerDefaultActionAuthenticateOidc;
}(cdktf.ComplexComputedList));
exports.DataAwsAlbListenerDefaultActionAuthenticateOidc = DataAwsAlbListenerDefaultActionAuthenticateOidc;
var DataAwsAlbListenerDefaultActionFixedResponse = /** @class */ (function (_super) {
    __extends(DataAwsAlbListenerDefaultActionFixedResponse, _super);
    function DataAwsAlbListenerDefaultActionFixedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsAlbListenerDefaultActionFixedResponse.prototype, "contentType", {
        // content_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('content_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbListenerDefaultActionFixedResponse.prototype, "messageBody", {
        // message_body - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('message_body');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbListenerDefaultActionFixedResponse.prototype, "statusCode", {
        // status_code - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status_code');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsAlbListenerDefaultActionFixedResponse;
}(cdktf.ComplexComputedList));
exports.DataAwsAlbListenerDefaultActionFixedResponse = DataAwsAlbListenerDefaultActionFixedResponse;
var DataAwsAlbListenerDefaultActionForwardStickiness = /** @class */ (function (_super) {
    __extends(DataAwsAlbListenerDefaultActionForwardStickiness, _super);
    function DataAwsAlbListenerDefaultActionForwardStickiness() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsAlbListenerDefaultActionForwardStickiness.prototype, "duration", {
        // duration - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('duration');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbListenerDefaultActionForwardStickiness.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsAlbListenerDefaultActionForwardStickiness;
}(cdktf.ComplexComputedList));
exports.DataAwsAlbListenerDefaultActionForwardStickiness = DataAwsAlbListenerDefaultActionForwardStickiness;
var DataAwsAlbListenerDefaultActionForwardTargetGroup = /** @class */ (function (_super) {
    __extends(DataAwsAlbListenerDefaultActionForwardTargetGroup, _super);
    function DataAwsAlbListenerDefaultActionForwardTargetGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsAlbListenerDefaultActionForwardTargetGroup.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbListenerDefaultActionForwardTargetGroup.prototype, "weight", {
        // weight - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('weight');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsAlbListenerDefaultActionForwardTargetGroup;
}(cdktf.ComplexComputedList));
exports.DataAwsAlbListenerDefaultActionForwardTargetGroup = DataAwsAlbListenerDefaultActionForwardTargetGroup;
var DataAwsAlbListenerDefaultActionForward = /** @class */ (function (_super) {
    __extends(DataAwsAlbListenerDefaultActionForward, _super);
    function DataAwsAlbListenerDefaultActionForward() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsAlbListenerDefaultActionForward.prototype, "stickiness", {
        // stickiness - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('stickiness');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbListenerDefaultActionForward.prototype, "targetGroup", {
        // target_group - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('target_group');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsAlbListenerDefaultActionForward;
}(cdktf.ComplexComputedList));
exports.DataAwsAlbListenerDefaultActionForward = DataAwsAlbListenerDefaultActionForward;
var DataAwsAlbListenerDefaultActionRedirect = /** @class */ (function (_super) {
    __extends(DataAwsAlbListenerDefaultActionRedirect, _super);
    function DataAwsAlbListenerDefaultActionRedirect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsAlbListenerDefaultActionRedirect.prototype, "host", {
        // host - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('host');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbListenerDefaultActionRedirect.prototype, "path", {
        // path - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('path');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbListenerDefaultActionRedirect.prototype, "port", {
        // port - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbListenerDefaultActionRedirect.prototype, "protocol", {
        // protocol - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('protocol');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbListenerDefaultActionRedirect.prototype, "query", {
        // query - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('query');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbListenerDefaultActionRedirect.prototype, "statusCode", {
        // status_code - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status_code');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsAlbListenerDefaultActionRedirect;
}(cdktf.ComplexComputedList));
exports.DataAwsAlbListenerDefaultActionRedirect = DataAwsAlbListenerDefaultActionRedirect;
var DataAwsAlbListenerDefaultAction = /** @class */ (function (_super) {
    __extends(DataAwsAlbListenerDefaultAction, _super);
    function DataAwsAlbListenerDefaultAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsAlbListenerDefaultAction.prototype, "authenticateCognito", {
        // authenticate_cognito - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('authenticate_cognito');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbListenerDefaultAction.prototype, "authenticateOidc", {
        // authenticate_oidc - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('authenticate_oidc');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbListenerDefaultAction.prototype, "fixedResponse", {
        // fixed_response - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('fixed_response');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbListenerDefaultAction.prototype, "forward", {
        // forward - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('forward');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbListenerDefaultAction.prototype, "order", {
        // order - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('order');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbListenerDefaultAction.prototype, "redirect", {
        // redirect - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('redirect');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbListenerDefaultAction.prototype, "targetGroupArn", {
        // target_group_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('target_group_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbListenerDefaultAction.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsAlbListenerDefaultAction;
}(cdktf.ComplexComputedList));
exports.DataAwsAlbListenerDefaultAction = DataAwsAlbListenerDefaultAction;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/alb_listener.html aws_alb_listener}
*/
var DataAwsAlbListener = /** @class */ (function (_super) {
    __extends(DataAwsAlbListener, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/alb_listener.html aws_alb_listener} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAlbListenerConfig = {}
    */
    function DataAwsAlbListener(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_alb_listener',
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
    Object.defineProperty(DataAwsAlbListener.prototype, "alpnPolicy", {
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
    Object.defineProperty(DataAwsAlbListener.prototype, "arn", {
        // arn - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbListener.prototype, "certificateArn", {
        // certificate_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate_arn');
        },
        enumerable: false,
        configurable: true
    });
    // default_action - computed: true, optional: false, required: false
    DataAwsAlbListener.prototype.defaultAction = function (index) {
        return new DataAwsAlbListenerDefaultAction(this, 'default_action', index);
    };
    Object.defineProperty(DataAwsAlbListener.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbListener.prototype, "loadBalancerArn", {
        get: function () {
            return this.getStringAttribute('load_balancer_arn');
        },
        set: function (value) {
            this._loadBalancerArn = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsAlbListener.prototype.resetLoadBalancerArn = function () {
        this._loadBalancerArn = undefined;
    };
    Object.defineProperty(DataAwsAlbListener.prototype, "loadBalancerArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._loadBalancerArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbListener.prototype, "port", {
        get: function () {
            return this.getNumberAttribute('port');
        },
        set: function (value) {
            this._port = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsAlbListener.prototype.resetPort = function () {
        this._port = undefined;
    };
    Object.defineProperty(DataAwsAlbListener.prototype, "portInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._port;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbListener.prototype, "protocol", {
        // protocol - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('protocol');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbListener.prototype, "sslPolicy", {
        // ssl_policy - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ssl_policy');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsAlbListener.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsAlbListener.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsAlbListener.prototype, "tagsInput", {
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
    DataAwsAlbListener.prototype.synthesizeAttributes = function () {
        return {
            load_balancer_arn: cdktf.stringToTerraform(this._loadBalancerArn),
            port: cdktf.numberToTerraform(this._port),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsAlbListener.tfResourceType = "aws_alb_listener";
    return DataAwsAlbListener;
}(cdktf.TerraformDataSource));
exports.DataAwsAlbListener = DataAwsAlbListener;
