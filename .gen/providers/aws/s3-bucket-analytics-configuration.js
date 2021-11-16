"use strict";
// https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html
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
exports.S3BucketAnalyticsConfiguration = void 0;
var cdktf = require("cdktf");
function s3BucketAnalyticsConfigurationFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        prefix: cdktf.stringToTerraform(struct.prefix),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct.tags)
    };
}
function s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestinationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket_account_id: cdktf.stringToTerraform(struct.bucketAccountId),
        bucket_arn: cdktf.stringToTerraform(struct.bucketArn),
        format: cdktf.stringToTerraform(struct.format),
        prefix: cdktf.stringToTerraform(struct.prefix)
    };
}
function s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        s3_bucket_destination: cdktf.listMapper(s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestinationToTerraform)(struct.s3BucketDestination)
    };
}
function s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        output_schema_version: cdktf.stringToTerraform(struct.outputSchemaVersion),
        destination: cdktf.listMapper(s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationToTerraform)(struct.destination)
    };
}
function s3BucketAnalyticsConfigurationStorageClassAnalysisToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        data_export: cdktf.listMapper(s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportToTerraform)(struct.dataExport)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html aws_s3_bucket_analytics_configuration}
*/
var S3BucketAnalyticsConfiguration = /** @class */ (function (_super) {
    __extends(S3BucketAnalyticsConfiguration, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html aws_s3_bucket_analytics_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3BucketAnalyticsConfigurationConfig
    */
    function S3BucketAnalyticsConfiguration(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_s3_bucket_analytics_configuration',
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
        _this._filter = config.filter;
        _this._storageClassAnalysis = config.storageClassAnalysis;
        return _this;
    }
    Object.defineProperty(S3BucketAnalyticsConfiguration.prototype, "bucket", {
        get: function () {
            return this.getStringAttribute('bucket');
        },
        set: function (value) {
            this._bucket = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketAnalyticsConfiguration.prototype, "bucketInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bucket;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketAnalyticsConfiguration.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketAnalyticsConfiguration.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketAnalyticsConfiguration.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketAnalyticsConfiguration.prototype, "filter", {
        get: function () {
            return this.interpolationForAttribute('filter');
        },
        set: function (value) {
            this._filter = value;
        },
        enumerable: false,
        configurable: true
    });
    S3BucketAnalyticsConfiguration.prototype.resetFilter = function () {
        this._filter = undefined;
    };
    Object.defineProperty(S3BucketAnalyticsConfiguration.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(S3BucketAnalyticsConfiguration.prototype, "storageClassAnalysis", {
        get: function () {
            return this.interpolationForAttribute('storage_class_analysis');
        },
        set: function (value) {
            this._storageClassAnalysis = value;
        },
        enumerable: false,
        configurable: true
    });
    S3BucketAnalyticsConfiguration.prototype.resetStorageClassAnalysis = function () {
        this._storageClassAnalysis = undefined;
    };
    Object.defineProperty(S3BucketAnalyticsConfiguration.prototype, "storageClassAnalysisInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._storageClassAnalysis;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    S3BucketAnalyticsConfiguration.prototype.synthesizeAttributes = function () {
        return {
            bucket: cdktf.stringToTerraform(this._bucket),
            name: cdktf.stringToTerraform(this._name),
            filter: cdktf.listMapper(s3BucketAnalyticsConfigurationFilterToTerraform)(this._filter),
            storage_class_analysis: cdktf.listMapper(s3BucketAnalyticsConfigurationStorageClassAnalysisToTerraform)(this._storageClassAnalysis)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    S3BucketAnalyticsConfiguration.tfResourceType = "aws_s3_bucket_analytics_configuration";
    return S3BucketAnalyticsConfiguration;
}(cdktf.TerraformResource));
exports.S3BucketAnalyticsConfiguration = S3BucketAnalyticsConfiguration;
