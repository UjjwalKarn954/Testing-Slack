"use strict";
// https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html
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
exports.ElastictranscoderPipeline = void 0;
var cdktf = require("cdktf");
function elastictranscoderPipelineContentConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket: cdktf.stringToTerraform(struct.bucket),
        storage_class: cdktf.stringToTerraform(struct.storageClass)
    };
}
function elastictranscoderPipelineContentConfigPermissionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        access: cdktf.listMapper(cdktf.stringToTerraform)(struct.access),
        grantee: cdktf.stringToTerraform(struct.grantee),
        grantee_type: cdktf.stringToTerraform(struct.granteeType)
    };
}
function elastictranscoderPipelineNotificationsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        completed: cdktf.stringToTerraform(struct.completed),
        error: cdktf.stringToTerraform(struct.error),
        progressing: cdktf.stringToTerraform(struct.progressing),
        warning: cdktf.stringToTerraform(struct.warning)
    };
}
function elastictranscoderPipelineThumbnailConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket: cdktf.stringToTerraform(struct.bucket),
        storage_class: cdktf.stringToTerraform(struct.storageClass)
    };
}
function elastictranscoderPipelineThumbnailConfigPermissionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        access: cdktf.listMapper(cdktf.stringToTerraform)(struct.access),
        grantee: cdktf.stringToTerraform(struct.grantee),
        grantee_type: cdktf.stringToTerraform(struct.granteeType)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html aws_elastictranscoder_pipeline}
*/
var ElastictranscoderPipeline = /** @class */ (function (_super) {
    __extends(ElastictranscoderPipeline, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html aws_elastictranscoder_pipeline} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElastictranscoderPipelineConfig
    */
    function ElastictranscoderPipeline(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_elastictranscoder_pipeline',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._awsKmsKeyArn = config.awsKmsKeyArn;
        _this._inputBucket = config.inputBucket;
        _this._name = config.name;
        _this._outputBucket = config.outputBucket;
        _this._role = config.role;
        _this._contentConfig = config.contentConfig;
        _this._contentConfigPermissions = config.contentConfigPermissions;
        _this._notifications = config.notifications;
        _this._thumbnailConfig = config.thumbnailConfig;
        _this._thumbnailConfigPermissions = config.thumbnailConfigPermissions;
        return _this;
    }
    Object.defineProperty(ElastictranscoderPipeline.prototype, "arn", {
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
    Object.defineProperty(ElastictranscoderPipeline.prototype, "awsKmsKeyArn", {
        get: function () {
            return this.getStringAttribute('aws_kms_key_arn');
        },
        set: function (value) {
            this._awsKmsKeyArn = value;
        },
        enumerable: false,
        configurable: true
    });
    ElastictranscoderPipeline.prototype.resetAwsKmsKeyArn = function () {
        this._awsKmsKeyArn = undefined;
    };
    Object.defineProperty(ElastictranscoderPipeline.prototype, "awsKmsKeyArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._awsKmsKeyArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElastictranscoderPipeline.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElastictranscoderPipeline.prototype, "inputBucket", {
        get: function () {
            return this.getStringAttribute('input_bucket');
        },
        set: function (value) {
            this._inputBucket = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElastictranscoderPipeline.prototype, "inputBucketInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._inputBucket;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElastictranscoderPipeline.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    ElastictranscoderPipeline.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(ElastictranscoderPipeline.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElastictranscoderPipeline.prototype, "outputBucket", {
        get: function () {
            return this.getStringAttribute('output_bucket');
        },
        set: function (value) {
            this._outputBucket = value;
        },
        enumerable: false,
        configurable: true
    });
    ElastictranscoderPipeline.prototype.resetOutputBucket = function () {
        this._outputBucket = undefined;
    };
    Object.defineProperty(ElastictranscoderPipeline.prototype, "outputBucketInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._outputBucket;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElastictranscoderPipeline.prototype, "role", {
        get: function () {
            return this.getStringAttribute('role');
        },
        set: function (value) {
            this._role = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElastictranscoderPipeline.prototype, "roleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._role;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElastictranscoderPipeline.prototype, "contentConfig", {
        get: function () {
            return this.interpolationForAttribute('content_config');
        },
        set: function (value) {
            this._contentConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    ElastictranscoderPipeline.prototype.resetContentConfig = function () {
        this._contentConfig = undefined;
    };
    Object.defineProperty(ElastictranscoderPipeline.prototype, "contentConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contentConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElastictranscoderPipeline.prototype, "contentConfigPermissions", {
        get: function () {
            return this.interpolationForAttribute('content_config_permissions');
        },
        set: function (value) {
            this._contentConfigPermissions = value;
        },
        enumerable: false,
        configurable: true
    });
    ElastictranscoderPipeline.prototype.resetContentConfigPermissions = function () {
        this._contentConfigPermissions = undefined;
    };
    Object.defineProperty(ElastictranscoderPipeline.prototype, "contentConfigPermissionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contentConfigPermissions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElastictranscoderPipeline.prototype, "notifications", {
        get: function () {
            return this.interpolationForAttribute('notifications');
        },
        set: function (value) {
            this._notifications = value;
        },
        enumerable: false,
        configurable: true
    });
    ElastictranscoderPipeline.prototype.resetNotifications = function () {
        this._notifications = undefined;
    };
    Object.defineProperty(ElastictranscoderPipeline.prototype, "notificationsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._notifications;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElastictranscoderPipeline.prototype, "thumbnailConfig", {
        get: function () {
            return this.interpolationForAttribute('thumbnail_config');
        },
        set: function (value) {
            this._thumbnailConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    ElastictranscoderPipeline.prototype.resetThumbnailConfig = function () {
        this._thumbnailConfig = undefined;
    };
    Object.defineProperty(ElastictranscoderPipeline.prototype, "thumbnailConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._thumbnailConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElastictranscoderPipeline.prototype, "thumbnailConfigPermissions", {
        get: function () {
            return this.interpolationForAttribute('thumbnail_config_permissions');
        },
        set: function (value) {
            this._thumbnailConfigPermissions = value;
        },
        enumerable: false,
        configurable: true
    });
    ElastictranscoderPipeline.prototype.resetThumbnailConfigPermissions = function () {
        this._thumbnailConfigPermissions = undefined;
    };
    Object.defineProperty(ElastictranscoderPipeline.prototype, "thumbnailConfigPermissionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._thumbnailConfigPermissions;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ElastictranscoderPipeline.prototype.synthesizeAttributes = function () {
        return {
            aws_kms_key_arn: cdktf.stringToTerraform(this._awsKmsKeyArn),
            input_bucket: cdktf.stringToTerraform(this._inputBucket),
            name: cdktf.stringToTerraform(this._name),
            output_bucket: cdktf.stringToTerraform(this._outputBucket),
            role: cdktf.stringToTerraform(this._role),
            content_config: cdktf.listMapper(elastictranscoderPipelineContentConfigToTerraform)(this._contentConfig),
            content_config_permissions: cdktf.listMapper(elastictranscoderPipelineContentConfigPermissionsToTerraform)(this._contentConfigPermissions),
            notifications: cdktf.listMapper(elastictranscoderPipelineNotificationsToTerraform)(this._notifications),
            thumbnail_config: cdktf.listMapper(elastictranscoderPipelineThumbnailConfigToTerraform)(this._thumbnailConfig),
            thumbnail_config_permissions: cdktf.listMapper(elastictranscoderPipelineThumbnailConfigPermissionsToTerraform)(this._thumbnailConfigPermissions)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ElastictranscoderPipeline.tfResourceType = "aws_elastictranscoder_pipeline";
    return ElastictranscoderPipeline;
}(cdktf.TerraformResource));
exports.ElastictranscoderPipeline = ElastictranscoderPipeline;
