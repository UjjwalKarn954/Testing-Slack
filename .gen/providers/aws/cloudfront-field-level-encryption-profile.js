"use strict";
// https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile.html
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
exports.CloudfrontFieldLevelEncryptionProfile = void 0;
var cdktf = require("cdktf");
function cloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        items: cdktf.listMapper(cdktf.stringToTerraform)(struct.items)
    };
}
function cloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        provider_id: cdktf.stringToTerraform(struct.providerId),
        public_key_id: cdktf.stringToTerraform(struct.publicKeyId),
        field_patterns: cdktf.listMapper(cloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsToTerraform)(struct.fieldPatterns)
    };
}
function cloudfrontFieldLevelEncryptionProfileEncryptionEntitiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        items: cdktf.listMapper(cloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsToTerraform)(struct.items)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile.html aws_cloudfront_field_level_encryption_profile}
*/
var CloudfrontFieldLevelEncryptionProfile = /** @class */ (function (_super) {
    __extends(CloudfrontFieldLevelEncryptionProfile, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile.html aws_cloudfront_field_level_encryption_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontFieldLevelEncryptionProfileConfig
    */
    function CloudfrontFieldLevelEncryptionProfile(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_cloudfront_field_level_encryption_profile',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._comment = config.comment;
        _this._name = config.name;
        _this._encryptionEntities = config.encryptionEntities;
        return _this;
    }
    Object.defineProperty(CloudfrontFieldLevelEncryptionProfile.prototype, "callerReference", {
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
    Object.defineProperty(CloudfrontFieldLevelEncryptionProfile.prototype, "comment", {
        get: function () {
            return this.getStringAttribute('comment');
        },
        set: function (value) {
            this._comment = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudfrontFieldLevelEncryptionProfile.prototype.resetComment = function () {
        this._comment = undefined;
    };
    Object.defineProperty(CloudfrontFieldLevelEncryptionProfile.prototype, "commentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._comment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontFieldLevelEncryptionProfile.prototype, "etag", {
        // etag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('etag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontFieldLevelEncryptionProfile.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontFieldLevelEncryptionProfile.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontFieldLevelEncryptionProfile.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontFieldLevelEncryptionProfile.prototype, "encryptionEntities", {
        get: function () {
            return this.interpolationForAttribute('encryption_entities');
        },
        set: function (value) {
            this._encryptionEntities = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudfrontFieldLevelEncryptionProfile.prototype, "encryptionEntitiesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._encryptionEntities;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CloudfrontFieldLevelEncryptionProfile.prototype.synthesizeAttributes = function () {
        return {
            comment: cdktf.stringToTerraform(this._comment),
            name: cdktf.stringToTerraform(this._name),
            encryption_entities: cdktf.listMapper(cloudfrontFieldLevelEncryptionProfileEncryptionEntitiesToTerraform)(this._encryptionEntities)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CloudfrontFieldLevelEncryptionProfile.tfResourceType = "aws_cloudfront_field_level_encryption_profile";
    return CloudfrontFieldLevelEncryptionProfile;
}(cdktf.TerraformResource));
exports.CloudfrontFieldLevelEncryptionProfile = CloudfrontFieldLevelEncryptionProfile;
