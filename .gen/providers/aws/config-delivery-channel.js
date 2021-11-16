"use strict";
// https://www.terraform.io/docs/providers/aws/r/config_delivery_channel.html
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
exports.ConfigDeliveryChannel = void 0;
var cdktf = require("cdktf");
function configDeliveryChannelSnapshotDeliveryPropertiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        delivery_frequency: cdktf.stringToTerraform(struct.deliveryFrequency)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel.html aws_config_delivery_channel}
*/
var ConfigDeliveryChannel = /** @class */ (function (_super) {
    __extends(ConfigDeliveryChannel, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel.html aws_config_delivery_channel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigDeliveryChannelConfig
    */
    function ConfigDeliveryChannel(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_config_delivery_channel',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        _this._s3BucketName = config.s3BucketName;
        _this._s3KeyPrefix = config.s3KeyPrefix;
        _this._s3KmsKeyArn = config.s3KmsKeyArn;
        _this._snsTopicArn = config.snsTopicArn;
        _this._snapshotDeliveryProperties = config.snapshotDeliveryProperties;
        return _this;
    }
    Object.defineProperty(ConfigDeliveryChannel.prototype, "id", {
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
    Object.defineProperty(ConfigDeliveryChannel.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    ConfigDeliveryChannel.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(ConfigDeliveryChannel.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigDeliveryChannel.prototype, "s3BucketName", {
        get: function () {
            return this.getStringAttribute('s3_bucket_name');
        },
        set: function (value) {
            this._s3BucketName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigDeliveryChannel.prototype, "s3BucketNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._s3BucketName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigDeliveryChannel.prototype, "s3KeyPrefix", {
        get: function () {
            return this.getStringAttribute('s3_key_prefix');
        },
        set: function (value) {
            this._s3KeyPrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    ConfigDeliveryChannel.prototype.resetS3KeyPrefix = function () {
        this._s3KeyPrefix = undefined;
    };
    Object.defineProperty(ConfigDeliveryChannel.prototype, "s3KeyPrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._s3KeyPrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigDeliveryChannel.prototype, "s3KmsKeyArn", {
        get: function () {
            return this.getStringAttribute('s3_kms_key_arn');
        },
        set: function (value) {
            this._s3KmsKeyArn = value;
        },
        enumerable: false,
        configurable: true
    });
    ConfigDeliveryChannel.prototype.resetS3KmsKeyArn = function () {
        this._s3KmsKeyArn = undefined;
    };
    Object.defineProperty(ConfigDeliveryChannel.prototype, "s3KmsKeyArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._s3KmsKeyArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigDeliveryChannel.prototype, "snsTopicArn", {
        get: function () {
            return this.getStringAttribute('sns_topic_arn');
        },
        set: function (value) {
            this._snsTopicArn = value;
        },
        enumerable: false,
        configurable: true
    });
    ConfigDeliveryChannel.prototype.resetSnsTopicArn = function () {
        this._snsTopicArn = undefined;
    };
    Object.defineProperty(ConfigDeliveryChannel.prototype, "snsTopicArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._snsTopicArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigDeliveryChannel.prototype, "snapshotDeliveryProperties", {
        get: function () {
            return this.interpolationForAttribute('snapshot_delivery_properties');
        },
        set: function (value) {
            this._snapshotDeliveryProperties = value;
        },
        enumerable: false,
        configurable: true
    });
    ConfigDeliveryChannel.prototype.resetSnapshotDeliveryProperties = function () {
        this._snapshotDeliveryProperties = undefined;
    };
    Object.defineProperty(ConfigDeliveryChannel.prototype, "snapshotDeliveryPropertiesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._snapshotDeliveryProperties;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ConfigDeliveryChannel.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            s3_bucket_name: cdktf.stringToTerraform(this._s3BucketName),
            s3_key_prefix: cdktf.stringToTerraform(this._s3KeyPrefix),
            s3_kms_key_arn: cdktf.stringToTerraform(this._s3KmsKeyArn),
            sns_topic_arn: cdktf.stringToTerraform(this._snsTopicArn),
            snapshot_delivery_properties: cdktf.listMapper(configDeliveryChannelSnapshotDeliveryPropertiesToTerraform)(this._snapshotDeliveryProperties)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ConfigDeliveryChannel.tfResourceType = "aws_config_delivery_channel";
    return ConfigDeliveryChannel;
}(cdktf.TerraformResource));
exports.ConfigDeliveryChannel = ConfigDeliveryChannel;
