"use strict";
// https://www.terraform.io/docs/providers/aws/r/alb_listener.html
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
exports.AlbListener = void 0;
var cdktf = require("cdktf");
function albListenerDefaultActionAuthenticateCognitoToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        authentication_request_extra_params: cdktf.hashMapper(cdktf.anyToTerraform)(struct.authenticationRequestExtraParams),
        on_unauthenticated_request: cdktf.stringToTerraform(struct.onUnauthenticatedRequest),
        scope: cdktf.stringToTerraform(struct.scope),
        session_cookie_name: cdktf.stringToTerraform(struct.sessionCookieName),
        session_timeout: cdktf.numberToTerraform(struct.sessionTimeout),
        user_pool_arn: cdktf.stringToTerraform(struct.userPoolArn),
        user_pool_client_id: cdktf.stringToTerraform(struct.userPoolClientId),
        user_pool_domain: cdktf.stringToTerraform(struct.userPoolDomain)
    };
}
function albListenerDefaultActionAuthenticateOidcToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        authentication_request_extra_params: cdktf.hashMapper(cdktf.anyToTerraform)(struct.authenticationRequestExtraParams),
        authorization_endpoint: cdktf.stringToTerraform(struct.authorizationEndpoint),
        client_id: cdktf.stringToTerraform(struct.clientId),
        client_secret: cdktf.stringToTerraform(struct.clientSecret),
        issuer: cdktf.stringToTerraform(struct.issuer),
        on_unauthenticated_request: cdktf.stringToTerraform(struct.onUnauthenticatedRequest),
        scope: cdktf.stringToTerraform(struct.scope),
        session_cookie_name: cdktf.stringToTerraform(struct.sessionCookieName),
        session_timeout: cdktf.numberToTerraform(struct.sessionTimeout),
        token_endpoint: cdktf.stringToTerraform(struct.tokenEndpoint),
        user_info_endpoint: cdktf.stringToTerraform(struct.userInfoEndpoint)
    };
}
function albListenerDefaultActionFixedResponseToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        content_type: cdktf.stringToTerraform(struct.contentType),
        message_body: cdktf.stringToTerraform(struct.messageBody),
        status_code: cdktf.stringToTerraform(struct.statusCode)
    };
}
function albListenerDefaultActionForwardStickinessToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        duration: cdktf.numberToTerraform(struct.duration),
        enabled: cdktf.booleanToTerraform(struct.enabled)
    };
}
function albListenerDefaultActionForwardTargetGroupToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        weight: cdktf.numberToTerraform(struct.weight)
    };
}
function albListenerDefaultActionForwardToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        stickiness: cdktf.listMapper(albListenerDefaultActionForwardStickinessToTerraform)(struct.stickiness),
        target_group: cdktf.listMapper(albListenerDefaultActionForwardTargetGroupToTerraform)(struct.targetGroup)
    };
}
function albListenerDefaultActionRedirectToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        host: cdktf.stringToTerraform(struct.host),
        path: cdktf.stringToTerraform(struct.path),
        port: cdktf.stringToTerraform(struct.port),
        protocol: cdktf.stringToTerraform(struct.protocol),
        query: cdktf.stringToTerraform(struct.query),
        status_code: cdktf.stringToTerraform(struct.statusCode)
    };
}
function albListenerDefaultActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        order: cdktf.numberToTerraform(struct.order),
        target_group_arn: cdktf.stringToTerraform(struct.targetGroupArn),
        type: cdktf.stringToTerraform(struct.type),
        authenticate_cognito: cdktf.listMapper(albListenerDefaultActionAuthenticateCognitoToTerraform)(struct.authenticateCognito),
        authenticate_oidc: cdktf.listMapper(albListenerDefaultActionAuthenticateOidcToTerraform)(struct.authenticateOidc),
        fixed_response: cdktf.listMapper(albListenerDefaultActionFixedResponseToTerraform)(struct.fixedResponse),
        forward: cdktf.listMapper(albListenerDefaultActionForwardToTerraform)(struct.forward),
        redirect: cdktf.listMapper(albListenerDefaultActionRedirectToTerraform)(struct.redirect)
    };
}
function albListenerTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        read: cdktf.stringToTerraform(struct.read)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html aws_alb_listener}
*/
var AlbListener = /** @class */ (function (_super) {
    __extends(AlbListener, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html aws_alb_listener} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AlbListenerConfig
    */
    function AlbListener(scope, id, config) {
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
        _this._alpnPolicy = config.alpnPolicy;
        _this._certificateArn = config.certificateArn;
        _this._loadBalancerArn = config.loadBalancerArn;
        _this._port = config.port;
        _this._protocol = config.protocol;
        _this._sslPolicy = config.sslPolicy;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._defaultAction = config.defaultAction;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(AlbListener.prototype, "alpnPolicy", {
        get: function () {
            return this.getStringAttribute('alpn_policy');
        },
        set: function (value) {
            this._alpnPolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    AlbListener.prototype.resetAlpnPolicy = function () {
        this._alpnPolicy = undefined;
    };
    Object.defineProperty(AlbListener.prototype, "alpnPolicyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._alpnPolicy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AlbListener.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AlbListener.prototype, "certificateArn", {
        get: function () {
            return this.getStringAttribute('certificate_arn');
        },
        set: function (value) {
            this._certificateArn = value;
        },
        enumerable: false,
        configurable: true
    });
    AlbListener.prototype.resetCertificateArn = function () {
        this._certificateArn = undefined;
    };
    Object.defineProperty(AlbListener.prototype, "certificateArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificateArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AlbListener.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AlbListener.prototype, "loadBalancerArn", {
        get: function () {
            return this.getStringAttribute('load_balancer_arn');
        },
        set: function (value) {
            this._loadBalancerArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AlbListener.prototype, "loadBalancerArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._loadBalancerArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AlbListener.prototype, "port", {
        get: function () {
            return this.getNumberAttribute('port');
        },
        set: function (value) {
            this._port = value;
        },
        enumerable: false,
        configurable: true
    });
    AlbListener.prototype.resetPort = function () {
        this._port = undefined;
    };
    Object.defineProperty(AlbListener.prototype, "portInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._port;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AlbListener.prototype, "protocol", {
        get: function () {
            return this.getStringAttribute('protocol');
        },
        set: function (value) {
            this._protocol = value;
        },
        enumerable: false,
        configurable: true
    });
    AlbListener.prototype.resetProtocol = function () {
        this._protocol = undefined;
    };
    Object.defineProperty(AlbListener.prototype, "protocolInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._protocol;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AlbListener.prototype, "sslPolicy", {
        get: function () {
            return this.getStringAttribute('ssl_policy');
        },
        set: function (value) {
            this._sslPolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    AlbListener.prototype.resetSslPolicy = function () {
        this._sslPolicy = undefined;
    };
    Object.defineProperty(AlbListener.prototype, "sslPolicyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sslPolicy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AlbListener.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    AlbListener.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(AlbListener.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AlbListener.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    AlbListener.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(AlbListener.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AlbListener.prototype, "defaultAction", {
        get: function () {
            return this.interpolationForAttribute('default_action');
        },
        set: function (value) {
            this._defaultAction = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AlbListener.prototype, "defaultActionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultAction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AlbListener.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    AlbListener.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(AlbListener.prototype, "timeoutsInput", {
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
    AlbListener.prototype.synthesizeAttributes = function () {
        return {
            alpn_policy: cdktf.stringToTerraform(this._alpnPolicy),
            certificate_arn: cdktf.stringToTerraform(this._certificateArn),
            load_balancer_arn: cdktf.stringToTerraform(this._loadBalancerArn),
            port: cdktf.numberToTerraform(this._port),
            protocol: cdktf.stringToTerraform(this._protocol),
            ssl_policy: cdktf.stringToTerraform(this._sslPolicy),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            default_action: cdktf.listMapper(albListenerDefaultActionToTerraform)(this._defaultAction),
            timeouts: albListenerTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    AlbListener.tfResourceType = "aws_alb_listener";
    return AlbListener;
}(cdktf.TerraformResource));
exports.AlbListener = AlbListener;
