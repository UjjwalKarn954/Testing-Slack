"use strict";
// https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment.html
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
exports.CognitoIdentityPoolRolesAttachment = void 0;
var cdktf = require("cdktf");
function cognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        claim: cdktf.stringToTerraform(struct.claim),
        match_type: cdktf.stringToTerraform(struct.matchType),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function cognitoIdentityPoolRolesAttachmentRoleMappingToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        ambiguous_role_resolution: cdktf.stringToTerraform(struct.ambiguousRoleResolution),
        identity_provider: cdktf.stringToTerraform(struct.identityProvider),
        type: cdktf.stringToTerraform(struct.type),
        mapping_rule: cdktf.listMapper(cognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleToTerraform)(struct.mappingRule)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment.html aws_cognito_identity_pool_roles_attachment}
*/
var CognitoIdentityPoolRolesAttachment = /** @class */ (function (_super) {
    __extends(CognitoIdentityPoolRolesAttachment, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment.html aws_cognito_identity_pool_roles_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CognitoIdentityPoolRolesAttachmentConfig
    */
    function CognitoIdentityPoolRolesAttachment(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_cognito_identity_pool_roles_attachment',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._identityPoolId = config.identityPoolId;
        _this._roles = config.roles;
        _this._roleMapping = config.roleMapping;
        return _this;
    }
    Object.defineProperty(CognitoIdentityPoolRolesAttachment.prototype, "id", {
        // ==========
        // ATTRIBUTES
        // ==========
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoIdentityPoolRolesAttachment.prototype, "identityPoolId", {
        get: function () {
            return this.getStringAttribute('identity_pool_id');
        },
        set: function (value) {
            this._identityPoolId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoIdentityPoolRolesAttachment.prototype, "identityPoolIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityPoolId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoIdentityPoolRolesAttachment.prototype, "roles", {
        get: function () {
            return this.interpolationForAttribute('roles');
        },
        set: function (value) {
            this._roles = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoIdentityPoolRolesAttachment.prototype, "rolesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._roles;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoIdentityPoolRolesAttachment.prototype, "roleMapping", {
        get: function () {
            return this.interpolationForAttribute('role_mapping');
        },
        set: function (value) {
            this._roleMapping = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoIdentityPoolRolesAttachment.prototype.resetRoleMapping = function () {
        this._roleMapping = undefined;
    };
    Object.defineProperty(CognitoIdentityPoolRolesAttachment.prototype, "roleMappingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._roleMapping;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CognitoIdentityPoolRolesAttachment.prototype.synthesizeAttributes = function () {
        return {
            identity_pool_id: cdktf.stringToTerraform(this._identityPoolId),
            roles: cdktf.hashMapper(cdktf.anyToTerraform)(this._roles),
            role_mapping: cdktf.listMapper(cognitoIdentityPoolRolesAttachmentRoleMappingToTerraform)(this._roleMapping)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CognitoIdentityPoolRolesAttachment.tfResourceType = "aws_cognito_identity_pool_roles_attachment";
    return CognitoIdentityPoolRolesAttachment;
}(cdktf.TerraformResource));
exports.CognitoIdentityPoolRolesAttachment = CognitoIdentityPoolRolesAttachment;
