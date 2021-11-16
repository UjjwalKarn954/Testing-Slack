"use strict";
// https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html
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
exports.S3BucketInventory = void 0;
var cdktf = require("cdktf");
function s3BucketInventoryDestinationBucketEncryptionSseKmsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key_id: cdktf.stringToTerraform(struct.keyId)
    };
}
function s3BucketInventoryDestinationBucketEncryptionSseS3ToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function s3BucketInventoryDestinationBucketEncryptionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        sse_kms: cdktf.listMapper(s3BucketInventoryDestinationBucketEncryptionSseKmsToTerraform)(struct.sseKms),
        sse_s3: cdktf.listMapper(s3BucketInventoryDestinationBucketEncryptionSseS3ToTerraform)(struct.sseS3)
    };
}
function s3BucketInventoryDestinationBucketToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        account_id: cdktf.stringToTerraform(struct.accountId),
        bucket_arn: cdktf.stringToTerraform(struct.bucketArn),
        format: cdktf.stringToTerraform(struct.format),
        prefix: cdktf.stringToTerraform(struct.prefix),
        encryption: cdktf.listMapper(s3BucketInventoryDestinationBucketEncryptionToTerraform)(struct.encryption)
    };
}
function s3BucketInventoryDestinationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket: cdktf.listMapper(s3BucketInventoryDestinationBucketToTerraform)(struct.bucket)
    };
}
function s3BucketInventoryFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        prefix: cdktf.stringToTerraform(struct.prefix)
    };
}
function s3BucketInventoryScheduleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        frequency: cdktf.stringToTerraform(struct.frequency)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html aws_s3_bucket_inventory}
*/
var S3BucketInventory = /** @class */ (function (_super) {
    __extends(S3BucketInventory, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html aws_s3_bucket_inventory} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3BucketInventoryConfig
    */
    function S3BucketInventory(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_s3_bucket_inventory',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._bucket = config.bucket;
        _this._enabled = config.enabled;
        _this._includedObjectVersions = config.includedObjectVersions;
        _this._name = config.name;
        _this._optionalFields = config.optionalFields;
        _this._destination = config.destination;
        _this._filter = config.filter;
        _this._schedule = config.schedule;
        return _this;
    }
    Object.defineProperty(S3BucketInventory.prototype, "bucket", {
        get: function () {
            return this.getStringAttribute('bucket');
        },
        set: function (value) {
            this._bucket = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketInventory.prototype, "bucketInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bucket;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketInventory.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    S3BucketInventory.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(S3BucketInventory.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketInventory.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketInventory.prototype, "includedObjectVersions", {
        get: function () {
            return this.getStringAttribute('included_object_versions');
        },
        set: function (value) {
            this._includedObjectVersions = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketInventory.prototype, "includedObjectVersionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._includedObjectVersions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketInventory.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketInventory.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketInventory.prototype, "optionalFields", {
        get: function () {
            return this.getListAttribute('optional_fields');
        },
        set: function (value) {
            this._optionalFields = value;
        },
        enumerable: false,
        configurable: true
    });
    S3BucketInventory.prototype.resetOptionalFields = function () {
        this._optionalFields = undefined;
    };
    Object.defineProperty(S3BucketInventory.prototype, "optionalFieldsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._optionalFields;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketInventory.prototype, "destination", {
        get: function () {
            return this.interpolationForAttribute('destination');
        },
        set: function (value) {
            this._destination = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketInventory.prototype, "destinationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._destination;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketInventory.prototype, "filter", {
        get: function () {
            return this.interpolationForAttribute('filter');
        },
        set: function (value) {
            this._filter = value;
        },
        enumerable: false,
        configurable: true
    });
    S3BucketInventory.prototype.resetFilter = function () {
        this._filter = undefined;
    };
    Object.defineProperty(S3BucketInventory.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketInventory.prototype, "schedule", {
        get: function () {
            return this.interpolationForAttribute('schedule');
        },
        set: function (value) {
            this._schedule = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketInventory.prototype, "scheduleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._schedule;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    S3BucketInventory.prototype.synthesizeAttributes = function () {
        return {
            bucket: cdktf.stringToTerraform(this._bucket),
            enabled: cdktf.booleanToTerraform(this._enabled),
            included_object_versions: cdktf.stringToTerraform(this._includedObjectVersions),
            name: cdktf.stringToTerraform(this._name),
            optional_fields: cdktf.listMapper(cdktf.stringToTerraform)(this._optionalFields),
            destination: cdktf.listMapper(s3BucketInventoryDestinationToTerraform)(this._destination),
            filter: cdktf.listMapper(s3BucketInventoryFilterToTerraform)(this._filter),
            schedule: cdktf.listMapper(s3BucketInventoryScheduleToTerraform)(this._schedule)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    S3BucketInventory.tfResourceType = "aws_s3_bucket_inventory";
    return S3BucketInventory;
}(cdktf.TerraformResource));
exports.S3BucketInventory = S3BucketInventory;
