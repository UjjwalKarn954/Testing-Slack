"use strict";
// https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html
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
exports.SesReceiptRule = void 0;
var cdktf = require("cdktf");
function sesReceiptRuleAddHeaderActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        header_name: cdktf.stringToTerraform(struct.headerName),
        header_value: cdktf.stringToTerraform(struct.headerValue),
        position: cdktf.numberToTerraform(struct.position)
    };
}
function sesReceiptRuleBounceActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        message: cdktf.stringToTerraform(struct.message),
        position: cdktf.numberToTerraform(struct.position),
        sender: cdktf.stringToTerraform(struct.sender),
        smtp_reply_code: cdktf.stringToTerraform(struct.smtpReplyCode),
        status_code: cdktf.stringToTerraform(struct.statusCode),
        topic_arn: cdktf.stringToTerraform(struct.topicArn)
    };
}
function sesReceiptRuleLambdaActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        function_arn: cdktf.stringToTerraform(struct.functionArn),
        invocation_type: cdktf.stringToTerraform(struct.invocationType),
        position: cdktf.numberToTerraform(struct.position),
        topic_arn: cdktf.stringToTerraform(struct.topicArn)
    };
}
function sesReceiptRuleS3ActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket_name: cdktf.stringToTerraform(struct.bucketName),
        kms_key_arn: cdktf.stringToTerraform(struct.kmsKeyArn),
        object_key_prefix: cdktf.stringToTerraform(struct.objectKeyPrefix),
        position: cdktf.numberToTerraform(struct.position),
        topic_arn: cdktf.stringToTerraform(struct.topicArn)
    };
}
function sesReceiptRuleSnsActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        encoding: cdktf.stringToTerraform(struct.encoding),
        position: cdktf.numberToTerraform(struct.position),
        topic_arn: cdktf.stringToTerraform(struct.topicArn)
    };
}
function sesReceiptRuleStopActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        position: cdktf.numberToTerraform(struct.position),
        scope: cdktf.stringToTerraform(struct.scope),
        topic_arn: cdktf.stringToTerraform(struct.topicArn)
    };
}
function sesReceiptRuleWorkmailActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        organization_arn: cdktf.stringToTerraform(struct.organizationArn),
        position: cdktf.numberToTerraform(struct.position),
        topic_arn: cdktf.stringToTerraform(struct.topicArn)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html aws_ses_receipt_rule}
*/
var SesReceiptRule = /** @class */ (function (_super) {
    __extends(SesReceiptRule, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html aws_ses_receipt_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SesReceiptRuleConfig
    */
    function SesReceiptRule(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ses_receipt_rule',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._after = config.after;
        _this._enabled = config.enabled;
        _this._name = config.name;
        _this._recipients = config.recipients;
        _this._ruleSetName = config.ruleSetName;
        _this._scanEnabled = config.scanEnabled;
        _this._tlsPolicy = config.tlsPolicy;
        _this._addHeaderAction = config.addHeaderAction;
        _this._bounceAction = config.bounceAction;
        _this._lambdaAction = config.lambdaAction;
        _this._s3Action = config.s3Action;
        _this._snsAction = config.snsAction;
        _this._stopAction = config.stopAction;
        _this._workmailAction = config.workmailAction;
        return _this;
    }
    Object.defineProperty(SesReceiptRule.prototype, "after", {
        get: function () {
            return this.getStringAttribute('after');
        },
        set: function (value) {
            this._after = value;
        },
        enumerable: false,
        configurable: true
    });
    SesReceiptRule.prototype.resetAfter = function () {
        this._after = undefined;
    };
    Object.defineProperty(SesReceiptRule.prototype, "afterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._after;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesReceiptRule.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesReceiptRule.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    SesReceiptRule.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(SesReceiptRule.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesReceiptRule.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesReceiptRule.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesReceiptRule.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesReceiptRule.prototype, "recipients", {
        get: function () {
            return this.getListAttribute('recipients');
        },
        set: function (value) {
            this._recipients = value;
        },
        enumerable: false,
        configurable: true
    });
    SesReceiptRule.prototype.resetRecipients = function () {
        this._recipients = undefined;
    };
    Object.defineProperty(SesReceiptRule.prototype, "recipientsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._recipients;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesReceiptRule.prototype, "ruleSetName", {
        get: function () {
            return this.getStringAttribute('rule_set_name');
        },
        set: function (value) {
            this._ruleSetName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesReceiptRule.prototype, "ruleSetNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ruleSetName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesReceiptRule.prototype, "scanEnabled", {
        get: function () {
            return this.getBooleanAttribute('scan_enabled');
        },
        set: function (value) {
            this._scanEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    SesReceiptRule.prototype.resetScanEnabled = function () {
        this._scanEnabled = undefined;
    };
    Object.defineProperty(SesReceiptRule.prototype, "scanEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scanEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesReceiptRule.prototype, "tlsPolicy", {
        get: function () {
            return this.getStringAttribute('tls_policy');
        },
        set: function (value) {
            this._tlsPolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    SesReceiptRule.prototype.resetTlsPolicy = function () {
        this._tlsPolicy = undefined;
    };
    Object.defineProperty(SesReceiptRule.prototype, "tlsPolicyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tlsPolicy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesReceiptRule.prototype, "addHeaderAction", {
        get: function () {
            return this.interpolationForAttribute('add_header_action');
        },
        set: function (value) {
            this._addHeaderAction = value;
        },
        enumerable: false,
        configurable: true
    });
    SesReceiptRule.prototype.resetAddHeaderAction = function () {
        this._addHeaderAction = undefined;
    };
    Object.defineProperty(SesReceiptRule.prototype, "addHeaderActionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._addHeaderAction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesReceiptRule.prototype, "bounceAction", {
        get: function () {
            return this.interpolationForAttribute('bounce_action');
        },
        set: function (value) {
            this._bounceAction = value;
        },
        enumerable: false,
        configurable: true
    });
    SesReceiptRule.prototype.resetBounceAction = function () {
        this._bounceAction = undefined;
    };
    Object.defineProperty(SesReceiptRule.prototype, "bounceActionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bounceAction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesReceiptRule.prototype, "lambdaAction", {
        get: function () {
            return this.interpolationForAttribute('lambda_action');
        },
        set: function (value) {
            this._lambdaAction = value;
        },
        enumerable: false,
        configurable: true
    });
    SesReceiptRule.prototype.resetLambdaAction = function () {
        this._lambdaAction = undefined;
    };
    Object.defineProperty(SesReceiptRule.prototype, "lambdaActionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._lambdaAction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesReceiptRule.prototype, "s3Action", {
        get: function () {
            return this.interpolationForAttribute('s3_action');
        },
        set: function (value) {
            this._s3Action = value;
        },
        enumerable: false,
        configurable: true
    });
    SesReceiptRule.prototype.resetS3Action = function () {
        this._s3Action = undefined;
    };
    Object.defineProperty(SesReceiptRule.prototype, "s3ActionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._s3Action;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesReceiptRule.prototype, "snsAction", {
        get: function () {
            return this.interpolationForAttribute('sns_action');
        },
        set: function (value) {
            this._snsAction = value;
        },
        enumerable: false,
        configurable: true
    });
    SesReceiptRule.prototype.resetSnsAction = function () {
        this._snsAction = undefined;
    };
    Object.defineProperty(SesReceiptRule.prototype, "snsActionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._snsAction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesReceiptRule.prototype, "stopAction", {
        get: function () {
            return this.interpolationForAttribute('stop_action');
        },
        set: function (value) {
            this._stopAction = value;
        },
        enumerable: false,
        configurable: true
    });
    SesReceiptRule.prototype.resetStopAction = function () {
        this._stopAction = undefined;
    };
    Object.defineProperty(SesReceiptRule.prototype, "stopActionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._stopAction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SesReceiptRule.prototype, "workmailAction", {
        get: function () {
            return this.interpolationForAttribute('workmail_action');
        },
        set: function (value) {
            this._workmailAction = value;
        },
        enumerable: false,
        configurable: true
    });
    SesReceiptRule.prototype.resetWorkmailAction = function () {
        this._workmailAction = undefined;
    };
    Object.defineProperty(SesReceiptRule.prototype, "workmailActionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._workmailAction;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SesReceiptRule.prototype.synthesizeAttributes = function () {
        return {
            after: cdktf.stringToTerraform(this._after),
            enabled: cdktf.booleanToTerraform(this._enabled),
            name: cdktf.stringToTerraform(this._name),
            recipients: cdktf.listMapper(cdktf.stringToTerraform)(this._recipients),
            rule_set_name: cdktf.stringToTerraform(this._ruleSetName),
            scan_enabled: cdktf.booleanToTerraform(this._scanEnabled),
            tls_policy: cdktf.stringToTerraform(this._tlsPolicy),
            add_header_action: cdktf.listMapper(sesReceiptRuleAddHeaderActionToTerraform)(this._addHeaderAction),
            bounce_action: cdktf.listMapper(sesReceiptRuleBounceActionToTerraform)(this._bounceAction),
            lambda_action: cdktf.listMapper(sesReceiptRuleLambdaActionToTerraform)(this._lambdaAction),
            s3_action: cdktf.listMapper(sesReceiptRuleS3ActionToTerraform)(this._s3Action),
            sns_action: cdktf.listMapper(sesReceiptRuleSnsActionToTerraform)(this._snsAction),
            stop_action: cdktf.listMapper(sesReceiptRuleStopActionToTerraform)(this._stopAction),
            workmail_action: cdktf.listMapper(sesReceiptRuleWorkmailActionToTerraform)(this._workmailAction)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SesReceiptRule.tfResourceType = "aws_ses_receipt_rule";
    return SesReceiptRule;
}(cdktf.TerraformResource));
exports.SesReceiptRule = SesReceiptRule;
