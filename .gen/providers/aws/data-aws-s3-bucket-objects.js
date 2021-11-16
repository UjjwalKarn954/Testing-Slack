"use strict";
// https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects.html
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
exports.DataAwsS3BucketObjects = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects.html aws_s3_bucket_objects}
*/
var DataAwsS3BucketObjects = /** @class */ (function (_super) {
    __extends(DataAwsS3BucketObjects, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects.html aws_s3_bucket_objects} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsS3BucketObjectsConfig
    */
    function DataAwsS3BucketObjects(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_s3_bucket_objects',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._bucket = config.bucket;
        _this._delimiter = config.delimiter;
        _this._encodingType = config.encodingType;
        _this._fetchOwner = config.fetchOwner;
        _this._maxKeys = config.maxKeys;
        _this._prefix = config.prefix;
        _this._startAfter = config.startAfter;
        return _this;
    }
    Object.defineProperty(DataAwsS3BucketObjects.prototype, "bucket", {
        get: function () {
            return this.getStringAttribute('bucket');
        },
        set: function (value) {
            this._bucket = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsS3BucketObjects.prototype, "bucketInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bucket;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsS3BucketObjects.prototype, "commonPrefixes", {
        // common_prefixes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('common_prefixes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsS3BucketObjects.prototype, "delimiter", {
        get: function () {
            return this.getStringAttribute('delimiter');
        },
        set: function (value) {
            this._delimiter = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsS3BucketObjects.prototype.resetDelimiter = function () {
        this._delimiter = undefined;
    };
    Object.defineProperty(DataAwsS3BucketObjects.prototype, "delimiterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._delimiter;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsS3BucketObjects.prototype, "encodingType", {
        get: function () {
            return this.getStringAttribute('encoding_type');
        },
        set: function (value) {
            this._encodingType = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsS3BucketObjects.prototype.resetEncodingType = function () {
        this._encodingType = undefined;
    };
    Object.defineProperty(DataAwsS3BucketObjects.prototype, "encodingTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._encodingType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsS3BucketObjects.prototype, "fetchOwner", {
        get: function () {
            return this.getBooleanAttribute('fetch_owner');
        },
        set: function (value) {
            this._fetchOwner = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsS3BucketObjects.prototype.resetFetchOwner = function () {
        this._fetchOwner = undefined;
    };
    Object.defineProperty(DataAwsS3BucketObjects.prototype, "fetchOwnerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fetchOwner;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsS3BucketObjects.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsS3BucketObjects.prototype, "keys", {
        // keys - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('keys');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsS3BucketObjects.prototype, "maxKeys", {
        get: function () {
            return this.getNumberAttribute('max_keys');
        },
        set: function (value) {
            this._maxKeys = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsS3BucketObjects.prototype.resetMaxKeys = function () {
        this._maxKeys = undefined;
    };
    Object.defineProperty(DataAwsS3BucketObjects.prototype, "maxKeysInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxKeys;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsS3BucketObjects.prototype, "owners", {
        // owners - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('owners');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsS3BucketObjects.prototype, "prefix", {
        get: function () {
            return this.getStringAttribute('prefix');
        },
        set: function (value) {
            this._prefix = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsS3BucketObjects.prototype.resetPrefix = function () {
        this._prefix = undefined;
    };
    Object.defineProperty(DataAwsS3BucketObjects.prototype, "prefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._prefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsS3BucketObjects.prototype, "startAfter", {
        get: function () {
            return this.getStringAttribute('start_after');
        },
        set: function (value) {
            this._startAfter = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsS3BucketObjects.prototype.resetStartAfter = function () {
        this._startAfter = undefined;
    };
    Object.defineProperty(DataAwsS3BucketObjects.prototype, "startAfterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._startAfter;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsS3BucketObjects.prototype.synthesizeAttributes = function () {
        return {
            bucket: cdktf.stringToTerraform(this._bucket),
            delimiter: cdktf.stringToTerraform(this._delimiter),
            encoding_type: cdktf.stringToTerraform(this._encodingType),
            fetch_owner: cdktf.booleanToTerraform(this._fetchOwner),
            max_keys: cdktf.numberToTerraform(this._maxKeys),
            prefix: cdktf.stringToTerraform(this._prefix),
            start_after: cdktf.stringToTerraform(this._startAfter)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsS3BucketObjects.tfResourceType = "aws_s3_bucket_objects";
    return DataAwsS3BucketObjects;
}(cdktf.TerraformDataSource));
exports.DataAwsS3BucketObjects = DataAwsS3BucketObjects;
