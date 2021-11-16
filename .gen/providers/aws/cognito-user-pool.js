"use strict";
// https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html
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
exports.CognitoUserPool = void 0;
var cdktf = require("cdktf");
function cognitoUserPoolAccountRecoverySettingRecoveryMechanismToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        priority: cdktf.numberToTerraform(struct.priority)
    };
}
function cognitoUserPoolAccountRecoverySettingToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        recovery_mechanism: cdktf.listMapper(cognitoUserPoolAccountRecoverySettingRecoveryMechanismToTerraform)(struct.recoveryMechanism)
    };
}
function cognitoUserPoolAdminCreateUserConfigInviteMessageTemplateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        email_message: cdktf.stringToTerraform(struct.emailMessage),
        email_subject: cdktf.stringToTerraform(struct.emailSubject),
        sms_message: cdktf.stringToTerraform(struct.smsMessage)
    };
}
function cognitoUserPoolAdminCreateUserConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        allow_admin_create_user_only: cdktf.booleanToTerraform(struct.allowAdminCreateUserOnly),
        invite_message_template: cdktf.listMapper(cognitoUserPoolAdminCreateUserConfigInviteMessageTemplateToTerraform)(struct.inviteMessageTemplate)
    };
}
function cognitoUserPoolDeviceConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        challenge_required_on_new_device: cdktf.booleanToTerraform(struct.challengeRequiredOnNewDevice),
        device_only_remembered_on_user_prompt: cdktf.booleanToTerraform(struct.deviceOnlyRememberedOnUserPrompt)
    };
}
function cognitoUserPoolEmailConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        configuration_set: cdktf.stringToTerraform(struct.configurationSet),
        email_sending_account: cdktf.stringToTerraform(struct.emailSendingAccount),
        from_email_address: cdktf.stringToTerraform(struct.fromEmailAddress),
        reply_to_email_address: cdktf.stringToTerraform(struct.replyToEmailAddress),
        source_arn: cdktf.stringToTerraform(struct.sourceArn)
    };
}
function cognitoUserPoolLambdaConfigCustomEmailSenderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        lambda_arn: cdktf.stringToTerraform(struct.lambdaArn),
        lambda_version: cdktf.stringToTerraform(struct.lambdaVersion)
    };
}
function cognitoUserPoolLambdaConfigCustomSmsSenderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        lambda_arn: cdktf.stringToTerraform(struct.lambdaArn),
        lambda_version: cdktf.stringToTerraform(struct.lambdaVersion)
    };
}
function cognitoUserPoolLambdaConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create_auth_challenge: cdktf.stringToTerraform(struct.createAuthChallenge),
        custom_message: cdktf.stringToTerraform(struct.customMessage),
        define_auth_challenge: cdktf.stringToTerraform(struct.defineAuthChallenge),
        kms_key_id: cdktf.stringToTerraform(struct.kmsKeyId),
        post_authentication: cdktf.stringToTerraform(struct.postAuthentication),
        post_confirmation: cdktf.stringToTerraform(struct.postConfirmation),
        pre_authentication: cdktf.stringToTerraform(struct.preAuthentication),
        pre_sign_up: cdktf.stringToTerraform(struct.preSignUp),
        pre_token_generation: cdktf.stringToTerraform(struct.preTokenGeneration),
        user_migration: cdktf.stringToTerraform(struct.userMigration),
        verify_auth_challenge_response: cdktf.stringToTerraform(struct.verifyAuthChallengeResponse),
        custom_email_sender: cdktf.listMapper(cognitoUserPoolLambdaConfigCustomEmailSenderToTerraform)(struct.customEmailSender),
        custom_sms_sender: cdktf.listMapper(cognitoUserPoolLambdaConfigCustomSmsSenderToTerraform)(struct.customSmsSender)
    };
}
function cognitoUserPoolPasswordPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        minimum_length: cdktf.numberToTerraform(struct.minimumLength),
        require_lowercase: cdktf.booleanToTerraform(struct.requireLowercase),
        require_numbers: cdktf.booleanToTerraform(struct.requireNumbers),
        require_symbols: cdktf.booleanToTerraform(struct.requireSymbols),
        require_uppercase: cdktf.booleanToTerraform(struct.requireUppercase),
        temporary_password_validity_days: cdktf.numberToTerraform(struct.temporaryPasswordValidityDays)
    };
}
function cognitoUserPoolSchemaNumberAttributeConstraintsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        max_value: cdktf.stringToTerraform(struct.maxValue),
        min_value: cdktf.stringToTerraform(struct.minValue)
    };
}
function cognitoUserPoolSchemaStringAttributeConstraintsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        max_length: cdktf.stringToTerraform(struct.maxLength),
        min_length: cdktf.stringToTerraform(struct.minLength)
    };
}
function cognitoUserPoolSchemaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        attribute_data_type: cdktf.stringToTerraform(struct.attributeDataType),
        developer_only_attribute: cdktf.booleanToTerraform(struct.developerOnlyAttribute),
        mutable: cdktf.booleanToTerraform(struct.mutable),
        name: cdktf.stringToTerraform(struct.name),
        required: cdktf.booleanToTerraform(struct.required),
        number_attribute_constraints: cdktf.listMapper(cognitoUserPoolSchemaNumberAttributeConstraintsToTerraform)(struct.numberAttributeConstraints),
        string_attribute_constraints: cdktf.listMapper(cognitoUserPoolSchemaStringAttributeConstraintsToTerraform)(struct.stringAttributeConstraints)
    };
}
function cognitoUserPoolSmsConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        external_id: cdktf.stringToTerraform(struct.externalId),
        sns_caller_arn: cdktf.stringToTerraform(struct.snsCallerArn)
    };
}
function cognitoUserPoolSoftwareTokenMfaConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled)
    };
}
function cognitoUserPoolUserPoolAddOnsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        advanced_security_mode: cdktf.stringToTerraform(struct.advancedSecurityMode)
    };
}
function cognitoUserPoolUsernameConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        case_sensitive: cdktf.booleanToTerraform(struct.caseSensitive)
    };
}
function cognitoUserPoolVerificationMessageTemplateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        default_email_option: cdktf.stringToTerraform(struct.defaultEmailOption),
        email_message: cdktf.stringToTerraform(struct.emailMessage),
        email_message_by_link: cdktf.stringToTerraform(struct.emailMessageByLink),
        email_subject: cdktf.stringToTerraform(struct.emailSubject),
        email_subject_by_link: cdktf.stringToTerraform(struct.emailSubjectByLink),
        sms_message: cdktf.stringToTerraform(struct.smsMessage)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html aws_cognito_user_pool}
*/
var CognitoUserPool = /** @class */ (function (_super) {
    __extends(CognitoUserPool, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html aws_cognito_user_pool} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CognitoUserPoolConfig
    */
    function CognitoUserPool(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_cognito_user_pool',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._aliasAttributes = config.aliasAttributes;
        _this._autoVerifiedAttributes = config.autoVerifiedAttributes;
        _this._emailVerificationMessage = config.emailVerificationMessage;
        _this._emailVerificationSubject = config.emailVerificationSubject;
        _this._mfaConfiguration = config.mfaConfiguration;
        _this._name = config.name;
        _this._smsAuthenticationMessage = config.smsAuthenticationMessage;
        _this._smsVerificationMessage = config.smsVerificationMessage;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._usernameAttributes = config.usernameAttributes;
        _this._accountRecoverySetting = config.accountRecoverySetting;
        _this._adminCreateUserConfig = config.adminCreateUserConfig;
        _this._deviceConfiguration = config.deviceConfiguration;
        _this._emailConfiguration = config.emailConfiguration;
        _this._lambdaConfig = config.lambdaConfig;
        _this._passwordPolicy = config.passwordPolicy;
        _this._schema = config.schema;
        _this._smsConfiguration = config.smsConfiguration;
        _this._softwareTokenMfaConfiguration = config.softwareTokenMfaConfiguration;
        _this._userPoolAddOns = config.userPoolAddOns;
        _this._usernameConfiguration = config.usernameConfiguration;
        _this._verificationMessageTemplate = config.verificationMessageTemplate;
        return _this;
    }
    Object.defineProperty(CognitoUserPool.prototype, "aliasAttributes", {
        get: function () {
            return this.getListAttribute('alias_attributes');
        },
        set: function (value) {
            this._aliasAttributes = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoUserPool.prototype.resetAliasAttributes = function () {
        this._aliasAttributes = undefined;
    };
    Object.defineProperty(CognitoUserPool.prototype, "aliasAttributesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._aliasAttributes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPool.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPool.prototype, "autoVerifiedAttributes", {
        get: function () {
            return this.getListAttribute('auto_verified_attributes');
        },
        set: function (value) {
            this._autoVerifiedAttributes = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoUserPool.prototype.resetAutoVerifiedAttributes = function () {
        this._autoVerifiedAttributes = undefined;
    };
    Object.defineProperty(CognitoUserPool.prototype, "autoVerifiedAttributesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoVerifiedAttributes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPool.prototype, "creationDate", {
        // creation_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('creation_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPool.prototype, "customDomain", {
        // custom_domain - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('custom_domain');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPool.prototype, "domain", {
        // domain - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('domain');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPool.prototype, "emailVerificationMessage", {
        get: function () {
            return this.getStringAttribute('email_verification_message');
        },
        set: function (value) {
            this._emailVerificationMessage = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoUserPool.prototype.resetEmailVerificationMessage = function () {
        this._emailVerificationMessage = undefined;
    };
    Object.defineProperty(CognitoUserPool.prototype, "emailVerificationMessageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._emailVerificationMessage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPool.prototype, "emailVerificationSubject", {
        get: function () {
            return this.getStringAttribute('email_verification_subject');
        },
        set: function (value) {
            this._emailVerificationSubject = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoUserPool.prototype.resetEmailVerificationSubject = function () {
        this._emailVerificationSubject = undefined;
    };
    Object.defineProperty(CognitoUserPool.prototype, "emailVerificationSubjectInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._emailVerificationSubject;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPool.prototype, "endpoint", {
        // endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('endpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPool.prototype, "estimatedNumberOfUsers", {
        // estimated_number_of_users - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('estimated_number_of_users');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPool.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPool.prototype, "lastModifiedDate", {
        // last_modified_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_modified_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPool.prototype, "mfaConfiguration", {
        get: function () {
            return this.getStringAttribute('mfa_configuration');
        },
        set: function (value) {
            this._mfaConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoUserPool.prototype.resetMfaConfiguration = function () {
        this._mfaConfiguration = undefined;
    };
    Object.defineProperty(CognitoUserPool.prototype, "mfaConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mfaConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPool.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPool.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPool.prototype, "smsAuthenticationMessage", {
        get: function () {
            return this.getStringAttribute('sms_authentication_message');
        },
        set: function (value) {
            this._smsAuthenticationMessage = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoUserPool.prototype.resetSmsAuthenticationMessage = function () {
        this._smsAuthenticationMessage = undefined;
    };
    Object.defineProperty(CognitoUserPool.prototype, "smsAuthenticationMessageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._smsAuthenticationMessage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPool.prototype, "smsVerificationMessage", {
        get: function () {
            return this.getStringAttribute('sms_verification_message');
        },
        set: function (value) {
            this._smsVerificationMessage = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoUserPool.prototype.resetSmsVerificationMessage = function () {
        this._smsVerificationMessage = undefined;
    };
    Object.defineProperty(CognitoUserPool.prototype, "smsVerificationMessageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._smsVerificationMessage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPool.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoUserPool.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(CognitoUserPool.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPool.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoUserPool.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(CognitoUserPool.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPool.prototype, "usernameAttributes", {
        get: function () {
            return this.getListAttribute('username_attributes');
        },
        set: function (value) {
            this._usernameAttributes = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoUserPool.prototype.resetUsernameAttributes = function () {
        this._usernameAttributes = undefined;
    };
    Object.defineProperty(CognitoUserPool.prototype, "usernameAttributesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._usernameAttributes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPool.prototype, "accountRecoverySetting", {
        get: function () {
            return this.interpolationForAttribute('account_recovery_setting');
        },
        set: function (value) {
            this._accountRecoverySetting = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoUserPool.prototype.resetAccountRecoverySetting = function () {
        this._accountRecoverySetting = undefined;
    };
    Object.defineProperty(CognitoUserPool.prototype, "accountRecoverySettingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountRecoverySetting;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPool.prototype, "adminCreateUserConfig", {
        get: function () {
            return this.interpolationForAttribute('admin_create_user_config');
        },
        set: function (value) {
            this._adminCreateUserConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoUserPool.prototype.resetAdminCreateUserConfig = function () {
        this._adminCreateUserConfig = undefined;
    };
    Object.defineProperty(CognitoUserPool.prototype, "adminCreateUserConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._adminCreateUserConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPool.prototype, "deviceConfiguration", {
        get: function () {
            return this.interpolationForAttribute('device_configuration');
        },
        set: function (value) {
            this._deviceConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoUserPool.prototype.resetDeviceConfiguration = function () {
        this._deviceConfiguration = undefined;
    };
    Object.defineProperty(CognitoUserPool.prototype, "deviceConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deviceConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPool.prototype, "emailConfiguration", {
        get: function () {
            return this.interpolationForAttribute('email_configuration');
        },
        set: function (value) {
            this._emailConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoUserPool.prototype.resetEmailConfiguration = function () {
        this._emailConfiguration = undefined;
    };
    Object.defineProperty(CognitoUserPool.prototype, "emailConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._emailConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPool.prototype, "lambdaConfig", {
        get: function () {
            return this.interpolationForAttribute('lambda_config');
        },
        set: function (value) {
            this._lambdaConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoUserPool.prototype.resetLambdaConfig = function () {
        this._lambdaConfig = undefined;
    };
    Object.defineProperty(CognitoUserPool.prototype, "lambdaConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._lambdaConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPool.prototype, "passwordPolicy", {
        get: function () {
            return this.interpolationForAttribute('password_policy');
        },
        set: function (value) {
            this._passwordPolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoUserPool.prototype.resetPasswordPolicy = function () {
        this._passwordPolicy = undefined;
    };
    Object.defineProperty(CognitoUserPool.prototype, "passwordPolicyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._passwordPolicy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPool.prototype, "schema", {
        get: function () {
            return this.interpolationForAttribute('schema');
        },
        set: function (value) {
            this._schema = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoUserPool.prototype.resetSchema = function () {
        this._schema = undefined;
    };
    Object.defineProperty(CognitoUserPool.prototype, "schemaInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._schema;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPool.prototype, "smsConfiguration", {
        get: function () {
            return this.interpolationForAttribute('sms_configuration');
        },
        set: function (value) {
            this._smsConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoUserPool.prototype.resetSmsConfiguration = function () {
        this._smsConfiguration = undefined;
    };
    Object.defineProperty(CognitoUserPool.prototype, "smsConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._smsConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPool.prototype, "softwareTokenMfaConfiguration", {
        get: function () {
            return this.interpolationForAttribute('software_token_mfa_configuration');
        },
        set: function (value) {
            this._softwareTokenMfaConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoUserPool.prototype.resetSoftwareTokenMfaConfiguration = function () {
        this._softwareTokenMfaConfiguration = undefined;
    };
    Object.defineProperty(CognitoUserPool.prototype, "softwareTokenMfaConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._softwareTokenMfaConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPool.prototype, "userPoolAddOns", {
        get: function () {
            return this.interpolationForAttribute('user_pool_add_ons');
        },
        set: function (value) {
            this._userPoolAddOns = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoUserPool.prototype.resetUserPoolAddOns = function () {
        this._userPoolAddOns = undefined;
    };
    Object.defineProperty(CognitoUserPool.prototype, "userPoolAddOnsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userPoolAddOns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPool.prototype, "usernameConfiguration", {
        get: function () {
            return this.interpolationForAttribute('username_configuration');
        },
        set: function (value) {
            this._usernameConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoUserPool.prototype.resetUsernameConfiguration = function () {
        this._usernameConfiguration = undefined;
    };
    Object.defineProperty(CognitoUserPool.prototype, "usernameConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._usernameConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoUserPool.prototype, "verificationMessageTemplate", {
        get: function () {
            return this.interpolationForAttribute('verification_message_template');
        },
        set: function (value) {
            this._verificationMessageTemplate = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoUserPool.prototype.resetVerificationMessageTemplate = function () {
        this._verificationMessageTemplate = undefined;
    };
    Object.defineProperty(CognitoUserPool.prototype, "verificationMessageTemplateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._verificationMessageTemplate;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CognitoUserPool.prototype.synthesizeAttributes = function () {
        return {
            alias_attributes: cdktf.listMapper(cdktf.stringToTerraform)(this._aliasAttributes),
            auto_verified_attributes: cdktf.listMapper(cdktf.stringToTerraform)(this._autoVerifiedAttributes),
            email_verification_message: cdktf.stringToTerraform(this._emailVerificationMessage),
            email_verification_subject: cdktf.stringToTerraform(this._emailVerificationSubject),
            mfa_configuration: cdktf.stringToTerraform(this._mfaConfiguration),
            name: cdktf.stringToTerraform(this._name),
            sms_authentication_message: cdktf.stringToTerraform(this._smsAuthenticationMessage),
            sms_verification_message: cdktf.stringToTerraform(this._smsVerificationMessage),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            username_attributes: cdktf.listMapper(cdktf.stringToTerraform)(this._usernameAttributes),
            account_recovery_setting: cdktf.listMapper(cognitoUserPoolAccountRecoverySettingToTerraform)(this._accountRecoverySetting),
            admin_create_user_config: cdktf.listMapper(cognitoUserPoolAdminCreateUserConfigToTerraform)(this._adminCreateUserConfig),
            device_configuration: cdktf.listMapper(cognitoUserPoolDeviceConfigurationToTerraform)(this._deviceConfiguration),
            email_configuration: cdktf.listMapper(cognitoUserPoolEmailConfigurationToTerraform)(this._emailConfiguration),
            lambda_config: cdktf.listMapper(cognitoUserPoolLambdaConfigToTerraform)(this._lambdaConfig),
            password_policy: cdktf.listMapper(cognitoUserPoolPasswordPolicyToTerraform)(this._passwordPolicy),
            schema: cdktf.listMapper(cognitoUserPoolSchemaToTerraform)(this._schema),
            sms_configuration: cdktf.listMapper(cognitoUserPoolSmsConfigurationToTerraform)(this._smsConfiguration),
            software_token_mfa_configuration: cdktf.listMapper(cognitoUserPoolSoftwareTokenMfaConfigurationToTerraform)(this._softwareTokenMfaConfiguration),
            user_pool_add_ons: cdktf.listMapper(cognitoUserPoolUserPoolAddOnsToTerraform)(this._userPoolAddOns),
            username_configuration: cdktf.listMapper(cognitoUserPoolUsernameConfigurationToTerraform)(this._usernameConfiguration),
            verification_message_template: cdktf.listMapper(cognitoUserPoolVerificationMessageTemplateToTerraform)(this._verificationMessageTemplate)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CognitoUserPool.tfResourceType = "aws_cognito_user_pool";
    return CognitoUserPool;
}(cdktf.TerraformResource));
exports.CognitoUserPool = CognitoUserPool;
