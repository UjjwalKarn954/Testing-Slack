"use strict";
// https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html
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
exports.AlbListenerRule = void 0;
var cdktf = require("cdktf");
function albListenerRuleActionAuthenticateCognitoToTerraform(struct) {
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
function albListenerRuleActionAuthenticateOidcToTerraform(struct) {
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
function albListenerRuleActionFixedResponseToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        content_type: cdktf.stringToTerraform(struct.contentType),
        message_body: cdktf.stringToTerraform(struct.messageBody),
        status_code: cdktf.stringToTerraform(struct.statusCode)
    };
}
function albListenerRuleActionForwardStickinessToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        duration: cdktf.numberToTerraform(struct.duration),
        enabled: cdktf.booleanToTerraform(struct.enabled)
    };
}
function albListenerRuleActionForwardTargetGroupToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        weight: cdktf.numberToTerraform(struct.weight)
    };
}
function albListenerRuleActionForwardToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        stickiness: cdktf.listMapper(albListenerRuleActionForwardStickinessToTerraform)(struct.stickiness),
        target_group: cdktf.listMapper(albListenerRuleActionForwardTargetGroupToTerraform)(struct.targetGroup)
    };
}
function albListenerRuleActionRedirectToTerraform(struct) {
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
function albListenerRuleActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        order: cdktf.numberToTerraform(struct.order),
        target_group_arn: cdktf.stringToTerraform(struct.targetGroupArn),
        type: cdktf.stringToTerraform(struct.type),
        authenticate_cognito: cdktf.listMapper(albListenerRuleActionAuthenticateCognitoToTerraform)(struct.authenticateCognito),
        authenticate_oidc: cdktf.listMapper(albListenerRuleActionAuthenticateOidcToTerraform)(struct.authenticateOidc),
        fixed_response: cdktf.listMapper(albListenerRuleActionFixedResponseToTerraform)(struct.fixedResponse),
        forward: cdktf.listMapper(albListenerRuleActionForwardToTerraform)(struct.forward),
        redirect: cdktf.listMapper(albListenerRuleActionRedirectToTerraform)(struct.redirect)
    };
}
function albListenerRuleConditionHostHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
function albListenerRuleConditionHttpHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        http_header_name: cdktf.stringToTerraform(struct.httpHeaderName),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
function albListenerRuleConditionHttpRequestMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
function albListenerRuleConditionPathPatternToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
function albListenerRuleConditionQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function albListenerRuleConditionSourceIpToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
function albListenerRuleConditionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        host_header: cdktf.listMapper(albListenerRuleConditionHostHeaderToTerraform)(struct.hostHeader),
        http_header: cdktf.listMapper(albListenerRuleConditionHttpHeaderToTerraform)(struct.httpHeader),
        http_request_method: cdktf.listMapper(albListenerRuleConditionHttpRequestMethodToTerraform)(struct.httpRequestMethod),
        path_pattern: cdktf.listMapper(albListenerRuleConditionPathPatternToTerraform)(struct.pathPattern),
        query_string: cdktf.listMapper(albListenerRuleConditionQueryStringToTerraform)(struct.queryString),
        source_ip: cdktf.listMapper(albListenerRuleConditionSourceIpToTerraform)(struct.sourceIp)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html aws_alb_listener_rule}
*/
var AlbListenerRule = /** @class */ (function (_super) {
    __extends(AlbListenerRule, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html aws_alb_listener_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AlbListenerRuleConfig
    */
    function AlbListenerRule(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_alb_listener_rule',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._listenerArn = config.listenerArn;
        _this._priority = config.priority;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._action = config.action;
        _this._condition = config.condition;
        return _this;
    }
    Object.defineProperty(AlbListenerRule.prototype, "arn", {
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
    Object.defineProperty(AlbListenerRule.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AlbListenerRule.prototype, "listenerArn", {
        get: function () {
            return this.getStringAttribute('listener_arn');
        },
        set: function (value) {
            this._listenerArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AlbListenerRule.prototype, "listenerArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._listenerArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AlbListenerRule.prototype, "priority", {
        get: function () {
            return this.getNumberAttribute('priority');
        },
        set: function (value) {
            this._priority = value;
        },
        enumerable: false,
        configurable: true
    });
    AlbListenerRule.prototype.resetPriority = function () {
        this._priority = undefined;
    };
    Object.defineProperty(AlbListenerRule.prototype, "priorityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._priority;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AlbListenerRule.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    AlbListenerRule.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(AlbListenerRule.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AlbListenerRule.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    AlbListenerRule.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(AlbListenerRule.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AlbListenerRule.prototype, "action", {
        get: function () {
            return this.interpolationForAttribute('action');
        },
        set: function (value) {
            this._action = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AlbListenerRule.prototype, "actionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._action;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AlbListenerRule.prototype, "condition", {
        get: function () {
            return this.interpolationForAttribute('condition');
        },
        set: function (value) {
            this._condition = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AlbListenerRule.prototype, "conditionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._condition;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    AlbListenerRule.prototype.synthesizeAttributes = function () {
        return {
            listener_arn: cdktf.stringToTerraform(this._listenerArn),
            priority: cdktf.numberToTerraform(this._priority),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            action: cdktf.listMapper(albListenerRuleActionToTerraform)(this._action),
            condition: cdktf.listMapper(albListenerRuleConditionToTerraform)(this._condition)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    AlbListenerRule.tfResourceType = "aws_alb_listener_rule";
    return AlbListenerRule;
}(cdktf.TerraformResource));
exports.AlbListenerRule = AlbListenerRule;
