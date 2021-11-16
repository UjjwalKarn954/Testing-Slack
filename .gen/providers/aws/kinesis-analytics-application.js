"use strict";
// https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html
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
exports.KinesisAnalyticsApplication = void 0;
var cdktf = require("cdktf");
function kinesisAnalyticsApplicationCloudwatchLoggingOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        log_stream_arn: cdktf.stringToTerraform(struct.logStreamArn),
        role_arn: cdktf.stringToTerraform(struct.roleArn)
    };
}
function kinesisAnalyticsApplicationInputsKinesisFirehoseToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        resource_arn: cdktf.stringToTerraform(struct.resourceArn),
        role_arn: cdktf.stringToTerraform(struct.roleArn)
    };
}
function kinesisAnalyticsApplicationInputsKinesisStreamToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        resource_arn: cdktf.stringToTerraform(struct.resourceArn),
        role_arn: cdktf.stringToTerraform(struct.roleArn)
    };
}
function kinesisAnalyticsApplicationInputsParallelismToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        count: cdktf.numberToTerraform(struct.count)
    };
}
function kinesisAnalyticsApplicationInputsProcessingConfigurationLambdaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        resource_arn: cdktf.stringToTerraform(struct.resourceArn),
        role_arn: cdktf.stringToTerraform(struct.roleArn)
    };
}
function kinesisAnalyticsApplicationInputsProcessingConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        lambda: cdktf.listMapper(kinesisAnalyticsApplicationInputsProcessingConfigurationLambdaToTerraform)(struct.lambda)
    };
}
function kinesisAnalyticsApplicationInputsSchemaRecordColumnsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        mapping: cdktf.stringToTerraform(struct.mapping),
        name: cdktf.stringToTerraform(struct.name),
        sql_type: cdktf.stringToTerraform(struct.sqlType)
    };
}
function kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        record_column_delimiter: cdktf.stringToTerraform(struct.recordColumnDelimiter),
        record_row_delimiter: cdktf.stringToTerraform(struct.recordRowDelimiter)
    };
}
function kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        record_row_path: cdktf.stringToTerraform(struct.recordRowPath)
    };
}
function kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        csv: cdktf.listMapper(kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvToTerraform)(struct.csv),
        json: cdktf.listMapper(kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonToTerraform)(struct.json)
    };
}
function kinesisAnalyticsApplicationInputsSchemaRecordFormatToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        mapping_parameters: cdktf.listMapper(kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersToTerraform)(struct.mappingParameters)
    };
}
function kinesisAnalyticsApplicationInputsSchemaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        record_encoding: cdktf.stringToTerraform(struct.recordEncoding),
        record_columns: cdktf.listMapper(kinesisAnalyticsApplicationInputsSchemaRecordColumnsToTerraform)(struct.recordColumns),
        record_format: cdktf.listMapper(kinesisAnalyticsApplicationInputsSchemaRecordFormatToTerraform)(struct.recordFormat)
    };
}
function kinesisAnalyticsApplicationInputsStartingPositionConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        starting_position: cdktf.stringToTerraform(struct.startingPosition)
    };
}
function kinesisAnalyticsApplicationInputsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name_prefix: cdktf.stringToTerraform(struct.namePrefix),
        kinesis_firehose: cdktf.listMapper(kinesisAnalyticsApplicationInputsKinesisFirehoseToTerraform)(struct.kinesisFirehose),
        kinesis_stream: cdktf.listMapper(kinesisAnalyticsApplicationInputsKinesisStreamToTerraform)(struct.kinesisStream),
        parallelism: cdktf.listMapper(kinesisAnalyticsApplicationInputsParallelismToTerraform)(struct.parallelism),
        processing_configuration: cdktf.listMapper(kinesisAnalyticsApplicationInputsProcessingConfigurationToTerraform)(struct.processingConfiguration),
        schema: cdktf.listMapper(kinesisAnalyticsApplicationInputsSchemaToTerraform)(struct.schema),
        starting_position_configuration: cdktf.listMapper(kinesisAnalyticsApplicationInputsStartingPositionConfigurationToTerraform)(struct.startingPositionConfiguration)
    };
}
function kinesisAnalyticsApplicationOutputsKinesisFirehoseToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        resource_arn: cdktf.stringToTerraform(struct.resourceArn),
        role_arn: cdktf.stringToTerraform(struct.roleArn)
    };
}
function kinesisAnalyticsApplicationOutputsKinesisStreamToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        resource_arn: cdktf.stringToTerraform(struct.resourceArn),
        role_arn: cdktf.stringToTerraform(struct.roleArn)
    };
}
function kinesisAnalyticsApplicationOutputsLambdaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        resource_arn: cdktf.stringToTerraform(struct.resourceArn),
        role_arn: cdktf.stringToTerraform(struct.roleArn)
    };
}
function kinesisAnalyticsApplicationOutputsSchemaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        record_format_type: cdktf.stringToTerraform(struct.recordFormatType)
    };
}
function kinesisAnalyticsApplicationOutputsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        kinesis_firehose: cdktf.listMapper(kinesisAnalyticsApplicationOutputsKinesisFirehoseToTerraform)(struct.kinesisFirehose),
        kinesis_stream: cdktf.listMapper(kinesisAnalyticsApplicationOutputsKinesisStreamToTerraform)(struct.kinesisStream),
        lambda: cdktf.listMapper(kinesisAnalyticsApplicationOutputsLambdaToTerraform)(struct.lambda),
        schema: cdktf.listMapper(kinesisAnalyticsApplicationOutputsSchemaToTerraform)(struct.schema)
    };
}
function kinesisAnalyticsApplicationReferenceDataSourcesS3ToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket_arn: cdktf.stringToTerraform(struct.bucketArn),
        file_key: cdktf.stringToTerraform(struct.fileKey),
        role_arn: cdktf.stringToTerraform(struct.roleArn)
    };
}
function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        mapping: cdktf.stringToTerraform(struct.mapping),
        name: cdktf.stringToTerraform(struct.name),
        sql_type: cdktf.stringToTerraform(struct.sqlType)
    };
}
function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        record_column_delimiter: cdktf.stringToTerraform(struct.recordColumnDelimiter),
        record_row_delimiter: cdktf.stringToTerraform(struct.recordRowDelimiter)
    };
}
function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        record_row_path: cdktf.stringToTerraform(struct.recordRowPath)
    };
}
function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        csv: cdktf.listMapper(kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvToTerraform)(struct.csv),
        json: cdktf.listMapper(kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonToTerraform)(struct.json)
    };
}
function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        mapping_parameters: cdktf.listMapper(kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersToTerraform)(struct.mappingParameters)
    };
}
function kinesisAnalyticsApplicationReferenceDataSourcesSchemaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        record_encoding: cdktf.stringToTerraform(struct.recordEncoding),
        record_columns: cdktf.listMapper(kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsToTerraform)(struct.recordColumns),
        record_format: cdktf.listMapper(kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatToTerraform)(struct.recordFormat)
    };
}
function kinesisAnalyticsApplicationReferenceDataSourcesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        table_name: cdktf.stringToTerraform(struct.tableName),
        s3: cdktf.listMapper(kinesisAnalyticsApplicationReferenceDataSourcesS3ToTerraform)(struct.s3),
        schema: cdktf.listMapper(kinesisAnalyticsApplicationReferenceDataSourcesSchemaToTerraform)(struct.schema)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html aws_kinesis_analytics_application}
*/
var KinesisAnalyticsApplication = /** @class */ (function (_super) {
    __extends(KinesisAnalyticsApplication, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html aws_kinesis_analytics_application} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KinesisAnalyticsApplicationConfig
    */
    function KinesisAnalyticsApplication(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_kinesis_analytics_application',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._code = config.code;
        _this._description = config.description;
        _this._name = config.name;
        _this._startApplication = config.startApplication;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._cloudwatchLoggingOptions = config.cloudwatchLoggingOptions;
        _this._inputs = config.inputs;
        _this._outputs = config.outputs;
        _this._referenceDataSources = config.referenceDataSources;
        return _this;
    }
    Object.defineProperty(KinesisAnalyticsApplication.prototype, "arn", {
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
    Object.defineProperty(KinesisAnalyticsApplication.prototype, "code", {
        get: function () {
            return this.getStringAttribute('code');
        },
        set: function (value) {
            this._code = value;
        },
        enumerable: false,
        configurable: true
    });
    KinesisAnalyticsApplication.prototype.resetCode = function () {
        this._code = undefined;
    };
    Object.defineProperty(KinesisAnalyticsApplication.prototype, "codeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._code;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisAnalyticsApplication.prototype, "createTimestamp", {
        // create_timestamp - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('create_timestamp');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisAnalyticsApplication.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    KinesisAnalyticsApplication.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(KinesisAnalyticsApplication.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisAnalyticsApplication.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisAnalyticsApplication.prototype, "lastUpdateTimestamp", {
        // last_update_timestamp - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_update_timestamp');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisAnalyticsApplication.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisAnalyticsApplication.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisAnalyticsApplication.prototype, "startApplication", {
        get: function () {
            return this.getBooleanAttribute('start_application');
        },
        set: function (value) {
            this._startApplication = value;
        },
        enumerable: false,
        configurable: true
    });
    KinesisAnalyticsApplication.prototype.resetStartApplication = function () {
        this._startApplication = undefined;
    };
    Object.defineProperty(KinesisAnalyticsApplication.prototype, "startApplicationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._startApplication;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisAnalyticsApplication.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisAnalyticsApplication.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    KinesisAnalyticsApplication.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(KinesisAnalyticsApplication.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisAnalyticsApplication.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    KinesisAnalyticsApplication.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(KinesisAnalyticsApplication.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisAnalyticsApplication.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisAnalyticsApplication.prototype, "cloudwatchLoggingOptions", {
        get: function () {
            return this.interpolationForAttribute('cloudwatch_logging_options');
        },
        set: function (value) {
            this._cloudwatchLoggingOptions = value;
        },
        enumerable: false,
        configurable: true
    });
    KinesisAnalyticsApplication.prototype.resetCloudwatchLoggingOptions = function () {
        this._cloudwatchLoggingOptions = undefined;
    };
    Object.defineProperty(KinesisAnalyticsApplication.prototype, "cloudwatchLoggingOptionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cloudwatchLoggingOptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisAnalyticsApplication.prototype, "inputs", {
        get: function () {
            return this.interpolationForAttribute('inputs');
        },
        set: function (value) {
            this._inputs = value;
        },
        enumerable: false,
        configurable: true
    });
    KinesisAnalyticsApplication.prototype.resetInputs = function () {
        this._inputs = undefined;
    };
    Object.defineProperty(KinesisAnalyticsApplication.prototype, "inputsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._inputs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisAnalyticsApplication.prototype, "outputs", {
        get: function () {
            return this.interpolationForAttribute('outputs');
        },
        set: function (value) {
            this._outputs = value;
        },
        enumerable: false,
        configurable: true
    });
    KinesisAnalyticsApplication.prototype.resetOutputs = function () {
        this._outputs = undefined;
    };
    Object.defineProperty(KinesisAnalyticsApplication.prototype, "outputsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._outputs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisAnalyticsApplication.prototype, "referenceDataSources", {
        get: function () {
            return this.interpolationForAttribute('reference_data_sources');
        },
        set: function (value) {
            this._referenceDataSources = value;
        },
        enumerable: false,
        configurable: true
    });
    KinesisAnalyticsApplication.prototype.resetReferenceDataSources = function () {
        this._referenceDataSources = undefined;
    };
    Object.defineProperty(KinesisAnalyticsApplication.prototype, "referenceDataSourcesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._referenceDataSources;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    KinesisAnalyticsApplication.prototype.synthesizeAttributes = function () {
        return {
            code: cdktf.stringToTerraform(this._code),
            description: cdktf.stringToTerraform(this._description),
            name: cdktf.stringToTerraform(this._name),
            start_application: cdktf.booleanToTerraform(this._startApplication),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            cloudwatch_logging_options: cdktf.listMapper(kinesisAnalyticsApplicationCloudwatchLoggingOptionsToTerraform)(this._cloudwatchLoggingOptions),
            inputs: cdktf.listMapper(kinesisAnalyticsApplicationInputsToTerraform)(this._inputs),
            outputs: cdktf.listMapper(kinesisAnalyticsApplicationOutputsToTerraform)(this._outputs),
            reference_data_sources: cdktf.listMapper(kinesisAnalyticsApplicationReferenceDataSourcesToTerraform)(this._referenceDataSources)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    KinesisAnalyticsApplication.tfResourceType = "aws_kinesis_analytics_application";
    return KinesisAnalyticsApplication;
}(cdktf.TerraformResource));
exports.KinesisAnalyticsApplication = KinesisAnalyticsApplication;
