"use strict";
// https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html
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
exports.S3BucketNotification = void 0;
var cdktf = require("cdktf");
function s3BucketNotificationLambdaFunctionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        events: cdktf.listMapper(cdktf.stringToTerraform)(struct.events),
        filter_prefix: cdktf.stringToTerraform(struct.filterPrefix),
        filter_suffix: cdktf.stringToTerraform(struct.filterSuffix),
        id: cdktf.stringToTerraform(struct.id),
        lambda_function_arn: cdktf.stringToTerraform(struct.lambdaFunctionArn)
    };
}
function s3BucketNotificationQueueToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        events: cdktf.listMapper(cdktf.stringToTerraform)(struct.events),
        filter_prefix: cdktf.stringToTerraform(struct.filterPrefix),
        filter_suffix: cdktf.stringToTerraform(struct.filterSuffix),
        id: cdktf.stringToTerraform(struct.id),
        queue_arn: cdktf.stringToTerraform(struct.queueArn)
    };
}
function s3BucketNotificationTopicToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        events: cdktf.listMapper(cdktf.stringToTerraform)(struct.events),
        filter_prefix: cdktf.stringToTerraform(struct.filterPrefix),
        filter_suffix: cdktf.stringToTerraform(struct.filterSuffix),
        id: cdktf.stringToTerraform(struct.id),
        topic_arn: cdktf.stringToTerraform(struct.topicArn)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html aws_s3_bucket_notification}
*/
var S3BucketNotification = /** @class */ (function (_super) {
    __extends(S3BucketNotification, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html aws_s3_bucket_notification} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3BucketNotificationConfig
    */
    function S3BucketNotification(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_s3_bucket_notification',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._bucket = config.bucket;
        _this._lambdaFunction = config.lambdaFunction;
        _this._queue = config.queue;
        _this._topic = config.topic;
        return _this;
    }
    Object.defineProperty(S3BucketNotification.prototype, "bucket", {
        get: function () {
            return this.getStringAttribute('bucket');
        },
        set: function (value) {
            this._bucket = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketNotification.prototype, "bucketInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bucket;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketNotification.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketNotification.prototype, "lambdaFunction", {
        get: function () {
            return this.interpolationForAttribute('lambda_function');
        },
        set: function (value) {
            this._lambdaFunction = value;
        },
        enumerable: false,
        configurable: true
    });
    S3BucketNotification.prototype.resetLambdaFunction = function () {
        this._lambdaFunction = undefined;
    };
    Object.defineProperty(S3BucketNotification.prototype, "lambdaFunctionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._lambdaFunction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketNotification.prototype, "queue", {
        get: function () {
            return this.interpolationForAttribute('queue');
        },
        set: function (value) {
            this._queue = value;
        },
        enumerable: false,
        configurable: true
    });
    S3BucketNotification.prototype.resetQueue = function () {
        this._queue = undefined;
    };
    Object.defineProperty(S3BucketNotification.prototype, "queueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._queue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketNotification.prototype, "topic", {
        get: function () {
            return this.interpolationForAttribute('topic');
        },
        set: function (value) {
            this._topic = value;
        },
        enumerable: false,
        configurable: true
    });
    S3BucketNotification.prototype.resetTopic = function () {
        this._topic = undefined;
    };
    Object.defineProperty(S3BucketNotification.prototype, "topicInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._topic;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    S3BucketNotification.prototype.synthesizeAttributes = function () {
        return {
            bucket: cdktf.stringToTerraform(this._bucket),
            lambda_function: cdktf.listMapper(s3BucketNotificationLambdaFunctionToTerraform)(this._lambdaFunction),
            queue: cdktf.listMapper(s3BucketNotificationQueueToTerraform)(this._queue),
            topic: cdktf.listMapper(s3BucketNotificationTopicToTerraform)(this._topic)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    S3BucketNotification.tfResourceType = "aws_s3_bucket_notification";
    return S3BucketNotification;
}(cdktf.TerraformResource));
exports.S3BucketNotification = S3BucketNotification;
