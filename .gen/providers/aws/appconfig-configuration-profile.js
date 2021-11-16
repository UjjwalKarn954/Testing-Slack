"use strict";
// https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile.html
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
exports.AppconfigConfigurationProfile = void 0;
var cdktf = require("cdktf");
function appconfigConfigurationProfileValidatorToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        content: cdktf.stringToTerraform(struct.content),
        type: cdktf.stringToTerraform(struct.type)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile.html aws_appconfig_configuration_profile}
*/
var AppconfigConfigurationProfile = /** @class */ (function (_super) {
    __extends(AppconfigConfigurationProfile, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile.html aws_appconfig_configuration_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppconfigConfigurationProfileConfig
    */
    function AppconfigConfigurationProfile(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_appconfig_configuration_profile',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._applicationId = config.applicationId;
        _this._description = config.description;
        _this._locationUri = config.locationUri;
        _this._name = config.name;
        _this._retrievalRoleArn = config.retrievalRoleArn;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._validator = config.validator;
        return _this;
    }
    Object.defineProperty(AppconfigConfigurationProfile.prototype, "applicationId", {
        get: function () {
            return this.getStringAttribute('application_id');
        },
        set: function (value) {
            this._applicationId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigConfigurationProfile.prototype, "applicationIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._applicationId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigConfigurationProfile.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigConfigurationProfile.prototype, "configurationProfileId", {
        // configuration_profile_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('configuration_profile_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigConfigurationProfile.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    AppconfigConfigurationProfile.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(AppconfigConfigurationProfile.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigConfigurationProfile.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigConfigurationProfile.prototype, "locationUri", {
        get: function () {
            return this.getStringAttribute('location_uri');
        },
        set: function (value) {
            this._locationUri = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigConfigurationProfile.prototype, "locationUriInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._locationUri;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigConfigurationProfile.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigConfigurationProfile.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigConfigurationProfile.prototype, "retrievalRoleArn", {
        get: function () {
            return this.getStringAttribute('retrieval_role_arn');
        },
        set: function (value) {
            this._retrievalRoleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    AppconfigConfigurationProfile.prototype.resetRetrievalRoleArn = function () {
        this._retrievalRoleArn = undefined;
    };
    Object.defineProperty(AppconfigConfigurationProfile.prototype, "retrievalRoleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._retrievalRoleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigConfigurationProfile.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    AppconfigConfigurationProfile.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(AppconfigConfigurationProfile.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigConfigurationProfile.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    AppconfigConfigurationProfile.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(AppconfigConfigurationProfile.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigConfigurationProfile.prototype, "validator", {
        get: function () {
            return this.interpolationForAttribute('validator');
        },
        set: function (value) {
            this._validator = value;
        },
        enumerable: false,
        configurable: true
    });
    AppconfigConfigurationProfile.prototype.resetValidator = function () {
        this._validator = undefined;
    };
    Object.defineProperty(AppconfigConfigurationProfile.prototype, "validatorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._validator;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    AppconfigConfigurationProfile.prototype.synthesizeAttributes = function () {
        return {
            application_id: cdktf.stringToTerraform(this._applicationId),
            description: cdktf.stringToTerraform(this._description),
            location_uri: cdktf.stringToTerraform(this._locationUri),
            name: cdktf.stringToTerraform(this._name),
            retrieval_role_arn: cdktf.stringToTerraform(this._retrievalRoleArn),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            validator: cdktf.listMapper(appconfigConfigurationProfileValidatorToTerraform)(this._validator)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    AppconfigConfigurationProfile.tfResourceType = "aws_appconfig_configuration_profile";
    return AppconfigConfigurationProfile;
}(cdktf.TerraformResource));
exports.AppconfigConfigurationProfile = AppconfigConfigurationProfile;
