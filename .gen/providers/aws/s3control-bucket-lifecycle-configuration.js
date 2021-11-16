"use strict";
// https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html
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
exports.S3ControlBucketLifecycleConfiguration = void 0;
var cdktf = require("cdktf");
function s3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        days_after_initiation: cdktf.numberToTerraform(struct.daysAfterInitiation)
    };
}
function s3ControlBucketLifecycleConfigurationRuleExpirationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        date: cdktf.stringToTerraform(struct.date),
        days: cdktf.numberToTerraform(struct.days),
        expired_object_delete_marker: cdktf.booleanToTerraform(struct.expiredObjectDeleteMarker)
    };
}
function s3ControlBucketLifecycleConfigurationRuleFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        prefix: cdktf.stringToTerraform(struct.prefix),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct.tags)
    };
}
function s3ControlBucketLifecycleConfigurationRuleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
        status: cdktf.stringToTerraform(struct.status),
        abort_incomplete_multipart_upload: cdktf.listMapper(s3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadToTerraform)(struct.abortIncompleteMultipartUpload),
        expiration: cdktf.listMapper(s3ControlBucketLifecycleConfigurationRuleExpirationToTerraform)(struct.expiration),
        filter: cdktf.listMapper(s3ControlBucketLifecycleConfigurationRuleFilterToTerraform)(struct.filter)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html aws_s3control_bucket_lifecycle_configuration}
*/
var S3ControlBucketLifecycleConfiguration = /** @class */ (function (_super) {
    __extends(S3ControlBucketLifecycleConfiguration, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3control_bucket_lifecycle_configuration.html aws_s3control_bucket_lifecycle_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3ControlBucketLifecycleConfigurationConfig
    */
    function S3ControlBucketLifecycleConfiguration(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_s3control_bucket_lifecycle_configuration',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._bucket = config.bucket;
        _this._rule = config.rule;
        return _this;
    }
    Object.defineProperty(S3ControlBucketLifecycleConfiguration.prototype, "bucket", {
        get: function () {
            return this.getStringAttribute('bucket');
        },
        set: function (value) {
            this._bucket = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ControlBucketLifecycleConfiguration.prototype, "bucketInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bucket;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ControlBucketLifecycleConfiguration.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ControlBucketLifecycleConfiguration.prototype, "rule", {
        get: function () {
            return this.interpolationForAttribute('rule');
        },
        set: function (value) {
            this._rule = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3ControlBucketLifecycleConfiguration.prototype, "ruleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rule;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    S3ControlBucketLifecycleConfiguration.prototype.synthesizeAttributes = function () {
        return {
            bucket: cdktf.stringToTerraform(this._bucket),
            rule: cdktf.listMapper(s3ControlBucketLifecycleConfigurationRuleToTerraform)(this._rule)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    S3ControlBucketLifecycleConfiguration.tfResourceType = "aws_s3control_bucket_lifecycle_configuration";
    return S3ControlBucketLifecycleConfiguration;
}(cdktf.TerraformResource));
exports.S3ControlBucketLifecycleConfiguration = S3ControlBucketLifecycleConfiguration;
