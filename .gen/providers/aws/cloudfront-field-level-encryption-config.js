"use strict";
// https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config.html
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
exports.CloudfrontFieldLevelEncryptionConfig = void 0;
var cdktf = require("cdktf");
function cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        content_type: cdktf.stringToTerraform(struct.contentType),
        format: cdktf.stringToTerraform(struct.format),
        profile_id: cdktf.stringToTerraform(struct.profileId)
    };
}
function cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        items: cdktf.listMapper(cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsToTerraform)(struct.items)
    };
}
function cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        forward_when_content_type_is_unknown: cdktf.booleanToTerraform(struct.forwardWhenContentTypeIsUnknown),
        content_type_profiles: cdktf.listMapper(cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesToTerraform)(struct.contentTypeProfiles)
    };
}
function cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        profile_id: cdktf.stringToTerraform(struct.profileId),
        query_arg: cdktf.stringToTerraform(struct.queryArg)
    };
}
function cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        items: cdktf.listMapper(cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsToTerraform)(struct.items)
    };
}
function cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        forward_when_query_arg_profile_is_unknown: cdktf.booleanToTerraform(struct.forwardWhenQueryArgProfileIsUnknown),
        query_arg_profiles: cdktf.listMapper(cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesToTerraform)(struct.queryArgProfiles)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config.html aws_cloudfront_field_level_encryption_config}
*/
var CloudfrontFieldLevelEncryptionConfig = /** @class */ (function (_super) {
    __extends(CloudfrontFieldLevelEncryptionConfig, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config.html aws_cloudfront_field_level_encryption_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontFieldLevelEncryptionConfigConfig
    */
    function CloudfrontFieldLevelEncryptionConfig(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_cloudfront_field_level_encryption_config',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._comment = config.comment;
        _this._contentTypeProfileConfig = config.contentTypeProfileConfig;
        _this._queryArgProfileConfig = config.queryArgProfileConfig;
        return _this;
    }
    Object.defineProperty(CloudfrontFieldLevelEncryptionConfig.prototype, "callerReference", {
        // ==========
        // ATTRIBUTES
        // ==========
        // caller_reference - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('caller_reference');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontFieldLevelEncryptionConfig.prototype, "comment", {
        get: function () {
            return this.getStringAttribute('comment');
        },
        set: function (value) {
            this._comment = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudfrontFieldLevelEncryptionConfig.prototype.resetComment = function () {
        this._comment = undefined;
    };
    Object.defineProperty(CloudfrontFieldLevelEncryptionConfig.prototype, "commentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._comment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontFieldLevelEncryptionConfig.prototype, "etag", {
        // etag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('etag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontFieldLevelEncryptionConfig.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontFieldLevelEncryptionConfig.prototype, "contentTypeProfileConfig", {
        get: function () {
            return this.interpolationForAttribute('content_type_profile_config');
        },
        set: function (value) {
            this._contentTypeProfileConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontFieldLevelEncryptionConfig.prototype, "contentTypeProfileConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contentTypeProfileConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontFieldLevelEncryptionConfig.prototype, "queryArgProfileConfig", {
        get: function () {
            return this.interpolationForAttribute('query_arg_profile_config');
        },
        set: function (value) {
            this._queryArgProfileConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontFieldLevelEncryptionConfig.prototype, "queryArgProfileConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._queryArgProfileConfig;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CloudfrontFieldLevelEncryptionConfig.prototype.synthesizeAttributes = function () {
        return {
            comment: cdktf.stringToTerraform(this._comment),
            content_type_profile_config: cdktf.listMapper(cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigToTerraform)(this._contentTypeProfileConfig),
            query_arg_profile_config: cdktf.listMapper(cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigToTerraform)(this._queryArgProfileConfig)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CloudfrontFieldLevelEncryptionConfig.tfResourceType = "aws_cloudfront_field_level_encryption_config";
    return CloudfrontFieldLevelEncryptionConfig;
}(cdktf.TerraformResource));
exports.CloudfrontFieldLevelEncryptionConfig = CloudfrontFieldLevelEncryptionConfig;
