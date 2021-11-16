"use strict";
// https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html
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
exports.SagemakerWorkteam = void 0;
var cdktf = require("cdktf");
function sagemakerWorkteamMemberDefinitionCognitoMemberDefinitionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        client_id: cdktf.stringToTerraform(struct.clientId),
        user_group: cdktf.stringToTerraform(struct.userGroup),
        user_pool: cdktf.stringToTerraform(struct.userPool)
    };
}
function sagemakerWorkteamMemberDefinitionOidcMemberDefinitionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        groups: cdktf.listMapper(cdktf.stringToTerraform)(struct.groups)
    };
}
function sagemakerWorkteamMemberDefinitionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cognito_member_definition: cdktf.listMapper(sagemakerWorkteamMemberDefinitionCognitoMemberDefinitionToTerraform)(struct.cognitoMemberDefinition),
        oidc_member_definition: cdktf.listMapper(sagemakerWorkteamMemberDefinitionOidcMemberDefinitionToTerraform)(struct.oidcMemberDefinition)
    };
}
function sagemakerWorkteamNotificationConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        notification_topic_arn: cdktf.stringToTerraform(struct.notificationTopicArn)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html aws_sagemaker_workteam}
*/
var SagemakerWorkteam = /** @class */ (function (_super) {
    __extends(SagemakerWorkteam, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html aws_sagemaker_workteam} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerWorkteamConfig
    */
    function SagemakerWorkteam(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_sagemaker_workteam',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._description = config.description;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._workforceName = config.workforceName;
        _this._workteamName = config.workteamName;
        _this._memberDefinition = config.memberDefinition;
        _this._notificationConfiguration = config.notificationConfiguration;
        return _this;
    }
    Object.defineProperty(SagemakerWorkteam.prototype, "arn", {
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
    Object.defineProperty(SagemakerWorkteam.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerWorkteam.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerWorkteam.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerWorkteam.prototype, "subdomain", {
        // subdomain - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('subdomain');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerWorkteam.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerWorkteam.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(SagemakerWorkteam.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerWorkteam.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerWorkteam.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(SagemakerWorkteam.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerWorkteam.prototype, "workforceName", {
        get: function () {
            return this.getStringAttribute('workforce_name');
        },
        set: function (value) {
            this._workforceName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerWorkteam.prototype, "workforceNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._workforceName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerWorkteam.prototype, "workteamName", {
        get: function () {
            return this.getStringAttribute('workteam_name');
        },
        set: function (value) {
            this._workteamName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerWorkteam.prototype, "workteamNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._workteamName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerWorkteam.prototype, "memberDefinition", {
        get: function () {
            return this.interpolationForAttribute('member_definition');
        },
        set: function (value) {
            this._memberDefinition = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerWorkteam.prototype, "memberDefinitionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._memberDefinition;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerWorkteam.prototype, "notificationConfiguration", {
        get: function () {
            return this.interpolationForAttribute('notification_configuration');
        },
        set: function (value) {
            this._notificationConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerWorkteam.prototype.resetNotificationConfiguration = function () {
        this._notificationConfiguration = undefined;
    };
    Object.defineProperty(SagemakerWorkteam.prototype, "notificationConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._notificationConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SagemakerWorkteam.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            workforce_name: cdktf.stringToTerraform(this._workforceName),
            workteam_name: cdktf.stringToTerraform(this._workteamName),
            member_definition: cdktf.listMapper(sagemakerWorkteamMemberDefinitionToTerraform)(this._memberDefinition),
            notification_configuration: cdktf.listMapper(sagemakerWorkteamNotificationConfigurationToTerraform)(this._notificationConfiguration)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SagemakerWorkteam.tfResourceType = "aws_sagemaker_workteam";
    return SagemakerWorkteam;
}(cdktf.TerraformResource));
exports.SagemakerWorkteam = SagemakerWorkteam;
