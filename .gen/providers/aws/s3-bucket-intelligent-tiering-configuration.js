"use strict";
// https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration.html
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
exports.S3BucketIntelligentTieringConfiguration = void 0;
var cdktf = require("cdktf");
function s3BucketIntelligentTieringConfigurationFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        prefix: cdktf.stringToTerraform(struct.prefix),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct.tags)
    };
}
function s3BucketIntelligentTieringConfigurationTieringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        access_tier: cdktf.stringToTerraform(struct.accessTier),
        days: cdktf.numberToTerraform(struct.days)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration.html aws_s3_bucket_intelligent_tiering_configuration}
*/
var S3BucketIntelligentTieringConfiguration = /** @class */ (function (_super) {
    __extends(S3BucketIntelligentTieringConfiguration, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_intelligent_tiering_configuration.html aws_s3_bucket_intelligent_tiering_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3BucketIntelligentTieringConfigurationConfig
    */
    function S3BucketIntelligentTieringConfiguration(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_s3_bucket_intelligent_tiering_configuration',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._bucket = config.bucket;
        _this._name = config.name;
        _this._status = config.status;
        _this._filter = config.filter;
        _this._tiering = config.tiering;
        return _this;
    }
    Object.defineProperty(S3BucketIntelligentTieringConfiguration.prototype, "bucket", {
        get: function () {
            return this.getStringAttribute('bucket');
        },
        set: function (value) {
            this._bucket = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketIntelligentTieringConfiguration.prototype, "bucketInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bucket;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketIntelligentTieringConfiguration.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketIntelligentTieringConfiguration.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketIntelligentTieringConfiguration.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketIntelligentTieringConfiguration.prototype, "status", {
        get: function () {
            return this.getStringAttribute('status');
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    S3BucketIntelligentTieringConfiguration.prototype.resetStatus = function () {
        this._status = undefined;
    };
    Object.defineProperty(S3BucketIntelligentTieringConfiguration.prototype, "statusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketIntelligentTieringConfiguration.prototype, "filter", {
        get: function () {
            return this.interpolationForAttribute('filter');
        },
        set: function (value) {
            this._filter = value;
        },
        enumerable: false,
        configurable: true
    });
    S3BucketIntelligentTieringConfiguration.prototype.resetFilter = function () {
        this._filter = undefined;
    };
    Object.defineProperty(S3BucketIntelligentTieringConfiguration.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketIntelligentTieringConfiguration.prototype, "tiering", {
        get: function () {
            return this.interpolationForAttribute('tiering');
        },
        set: function (value) {
            this._tiering = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketIntelligentTieringConfiguration.prototype, "tieringInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tiering;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    S3BucketIntelligentTieringConfiguration.prototype.synthesizeAttributes = function () {
        return {
            bucket: cdktf.stringToTerraform(this._bucket),
            name: cdktf.stringToTerraform(this._name),
            status: cdktf.stringToTerraform(this._status),
            filter: cdktf.listMapper(s3BucketIntelligentTieringConfigurationFilterToTerraform)(this._filter),
            tiering: cdktf.listMapper(s3BucketIntelligentTieringConfigurationTieringToTerraform)(this._tiering)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    S3BucketIntelligentTieringConfiguration.tfResourceType = "aws_s3_bucket_intelligent_tiering_configuration";
    return S3BucketIntelligentTieringConfiguration;
}(cdktf.TerraformResource));
exports.S3BucketIntelligentTieringConfiguration = S3BucketIntelligentTieringConfiguration;
