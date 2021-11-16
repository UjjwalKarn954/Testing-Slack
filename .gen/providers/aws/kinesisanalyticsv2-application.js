"use strict";
// https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html
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
exports.Kinesisanalyticsv2Application = void 0;
var cdktf = require("cdktf");
function kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket_arn: cdktf.stringToTerraform(struct.bucketArn),
        file_key: cdktf.stringToTerraform(struct.fileKey),
        object_version: cdktf.stringToTerraform(struct.objectVersion)
    };
}
function kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        text_content: cdktf.stringToTerraform(struct.textContent),
        s3_content_location: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationToTerraform)(struct.s3ContentLocation)
    };
}
function kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        code_content_type: cdktf.stringToTerraform(struct.codeContentType),
        code_content: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentToTerraform)(struct.codeContent)
    };
}
function kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        snapshots_enabled: cdktf.booleanToTerraform(struct.snapshotsEnabled)
    };
}
function kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        property_group_id: cdktf.stringToTerraform(struct.propertyGroupId),
        property_map: cdktf.hashMapper(cdktf.anyToTerraform)(struct.propertyMap)
    };
}
function kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        property_group: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupToTerraform)(struct.propertyGroup)
    };
}
function kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        checkpoint_interval: cdktf.numberToTerraform(struct.checkpointInterval),
        checkpointing_enabled: cdktf.booleanToTerraform(struct.checkpointingEnabled),
        configuration_type: cdktf.stringToTerraform(struct.configurationType),
        min_pause_between_checkpoints: cdktf.numberToTerraform(struct.minPauseBetweenCheckpoints)
    };
}
function kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        configuration_type: cdktf.stringToTerraform(struct.configurationType),
        log_level: cdktf.stringToTerraform(struct.logLevel),
        metrics_level: cdktf.stringToTerraform(struct.metricsLevel)
    };
}
function kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        auto_scaling_enabled: cdktf.booleanToTerraform(struct.autoScalingEnabled),
        configuration_type: cdktf.stringToTerraform(struct.configurationType),
        parallelism: cdktf.numberToTerraform(struct.parallelism),
        parallelism_per_kpu: cdktf.numberToTerraform(struct.parallelismPerKpu)
    };
}
function kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        checkpoint_configuration: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationToTerraform)(struct.checkpointConfiguration),
        monitoring_configuration: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationToTerraform)(struct.monitoringConfiguration),
        parallelism_configuration: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationToTerraform)(struct.parallelismConfiguration)
    };
}
function kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        application_restore_type: cdktf.stringToTerraform(struct.applicationRestoreType),
        snapshot_name: cdktf.stringToTerraform(struct.snapshotName)
    };
}
function kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        allow_non_restored_state: cdktf.booleanToTerraform(struct.allowNonRestoredState)
    };
}
function kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        application_restore_configuration: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfigurationToTerraform)(struct.applicationRestoreConfiguration),
        flink_run_configuration: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfigurationToTerraform)(struct.flinkRunConfiguration)
    };
}
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelismToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        count: cdktf.numberToTerraform(struct.count)
    };
}
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessorToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        resource_arn: cdktf.stringToTerraform(struct.resourceArn)
    };
}
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        input_lambda_processor: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessorToTerraform)(struct.inputLambdaProcessor)
    };
}
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        mapping: cdktf.stringToTerraform(struct.mapping),
        name: cdktf.stringToTerraform(struct.name),
        sql_type: cdktf.stringToTerraform(struct.sqlType)
    };
}
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        record_column_delimiter: cdktf.stringToTerraform(struct.recordColumnDelimiter),
        record_row_delimiter: cdktf.stringToTerraform(struct.recordRowDelimiter)
    };
}
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        record_row_path: cdktf.stringToTerraform(struct.recordRowPath)
    };
}
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        csv_mapping_parameters: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersToTerraform)(struct.csvMappingParameters),
        json_mapping_parameters: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersToTerraform)(struct.jsonMappingParameters)
    };
}
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        record_format_type: cdktf.stringToTerraform(struct.recordFormatType),
        mapping_parameters: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersToTerraform)(struct.mappingParameters)
    };
}
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        record_encoding: cdktf.stringToTerraform(struct.recordEncoding),
        record_column: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnToTerraform)(struct.recordColumn),
        record_format: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatToTerraform)(struct.recordFormat)
    };
}
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        input_starting_position: cdktf.stringToTerraform(struct.inputStartingPosition)
    };
}
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInputToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        resource_arn: cdktf.stringToTerraform(struct.resourceArn)
    };
}
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInputToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        resource_arn: cdktf.stringToTerraform(struct.resourceArn)
    };
}
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name_prefix: cdktf.stringToTerraform(struct.namePrefix),
        input_parallelism: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelismToTerraform)(struct.inputParallelism),
        input_processing_configuration: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationToTerraform)(struct.inputProcessingConfiguration),
        input_schema: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaToTerraform)(struct.inputSchema),
        input_starting_position_configuration: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfigurationToTerraform)(struct.inputStartingPositionConfiguration),
        kinesis_firehose_input: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInputToTerraform)(struct.kinesisFirehoseInput),
        kinesis_streams_input: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInputToTerraform)(struct.kinesisStreamsInput)
    };
}
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchemaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        record_format_type: cdktf.stringToTerraform(struct.recordFormatType)
    };
}
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutputToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        resource_arn: cdktf.stringToTerraform(struct.resourceArn)
    };
}
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutputToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        resource_arn: cdktf.stringToTerraform(struct.resourceArn)
    };
}
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutputToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        resource_arn: cdktf.stringToTerraform(struct.resourceArn)
    };
}
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        destination_schema: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchemaToTerraform)(struct.destinationSchema),
        kinesis_firehose_output: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutputToTerraform)(struct.kinesisFirehoseOutput),
        kinesis_streams_output: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutputToTerraform)(struct.kinesisStreamsOutput),
        lambda_output: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutputToTerraform)(struct.lambdaOutput)
    };
}
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        mapping: cdktf.stringToTerraform(struct.mapping),
        name: cdktf.stringToTerraform(struct.name),
        sql_type: cdktf.stringToTerraform(struct.sqlType)
    };
}
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        record_column_delimiter: cdktf.stringToTerraform(struct.recordColumnDelimiter),
        record_row_delimiter: cdktf.stringToTerraform(struct.recordRowDelimiter)
    };
}
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        record_row_path: cdktf.stringToTerraform(struct.recordRowPath)
    };
}
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        csv_mapping_parameters: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersToTerraform)(struct.csvMappingParameters),
        json_mapping_parameters: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersToTerraform)(struct.jsonMappingParameters)
    };
}
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        record_format_type: cdktf.stringToTerraform(struct.recordFormatType),
        mapping_parameters: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersToTerraform)(struct.mappingParameters)
    };
}
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        record_encoding: cdktf.stringToTerraform(struct.recordEncoding),
        record_column: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnToTerraform)(struct.recordColumn),
        record_format: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatToTerraform)(struct.recordFormat)
    };
}
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket_arn: cdktf.stringToTerraform(struct.bucketArn),
        file_key: cdktf.stringToTerraform(struct.fileKey)
    };
}
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        table_name: cdktf.stringToTerraform(struct.tableName),
        reference_schema: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaToTerraform)(struct.referenceSchema),
        s3_reference_data_source: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSourceToTerraform)(struct.s3ReferenceDataSource)
    };
}
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        input: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputToTerraform)(struct.input),
        output: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputToTerraform)(struct.output),
        reference_data_source: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceToTerraform)(struct.referenceDataSource)
    };
}
function kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroupIds),
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.subnetIds)
    };
}
function kinesisanalyticsv2ApplicationApplicationConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        application_code_configuration: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationToTerraform)(struct.applicationCodeConfiguration),
        application_snapshot_configuration: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationToTerraform)(struct.applicationSnapshotConfiguration),
        environment_properties: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesToTerraform)(struct.environmentProperties),
        flink_application_configuration: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationToTerraform)(struct.flinkApplicationConfiguration),
        run_configuration: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationToTerraform)(struct.runConfiguration),
        sql_application_configuration: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationToTerraform)(struct.sqlApplicationConfiguration),
        vpc_configuration: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationToTerraform)(struct.vpcConfiguration)
    };
}
function kinesisanalyticsv2ApplicationCloudwatchLoggingOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        log_stream_arn: cdktf.stringToTerraform(struct.logStreamArn)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html aws_kinesisanalyticsv2_application}
*/
var Kinesisanalyticsv2Application = /** @class */ (function (_super) {
    __extends(Kinesisanalyticsv2Application, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html aws_kinesisanalyticsv2_application} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Kinesisanalyticsv2ApplicationConfig
    */
    function Kinesisanalyticsv2Application(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_kinesisanalyticsv2_application',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._description = config.description;
        _this._forceStop = config.forceStop;
        _this._name = config.name;
        _this._runtimeEnvironment = config.runtimeEnvironment;
        _this._serviceExecutionRole = config.serviceExecutionRole;
        _this._startApplication = config.startApplication;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._applicationConfiguration = config.applicationConfiguration;
        _this._cloudwatchLoggingOptions = config.cloudwatchLoggingOptions;
        return _this;
    }
    Object.defineProperty(Kinesisanalyticsv2Application.prototype, "arn", {
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
    Object.defineProperty(Kinesisanalyticsv2Application.prototype, "createTimestamp", {
        // create_timestamp - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('create_timestamp');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Kinesisanalyticsv2Application.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    Kinesisanalyticsv2Application.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(Kinesisanalyticsv2Application.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Kinesisanalyticsv2Application.prototype, "forceStop", {
        get: function () {
            return this.getBooleanAttribute('force_stop');
        },
        set: function (value) {
            this._forceStop = value;
        },
        enumerable: false,
        configurable: true
    });
    Kinesisanalyticsv2Application.prototype.resetForceStop = function () {
        this._forceStop = undefined;
    };
    Object.defineProperty(Kinesisanalyticsv2Application.prototype, "forceStopInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._forceStop;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Kinesisanalyticsv2Application.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Kinesisanalyticsv2Application.prototype, "lastUpdateTimestamp", {
        // last_update_timestamp - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_update_timestamp');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Kinesisanalyticsv2Application.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Kinesisanalyticsv2Application.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Kinesisanalyticsv2Application.prototype, "runtimeEnvironment", {
        get: function () {
            return this.getStringAttribute('runtime_environment');
        },
        set: function (value) {
            this._runtimeEnvironment = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Kinesisanalyticsv2Application.prototype, "runtimeEnvironmentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._runtimeEnvironment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Kinesisanalyticsv2Application.prototype, "serviceExecutionRole", {
        get: function () {
            return this.getStringAttribute('service_execution_role');
        },
        set: function (value) {
            this._serviceExecutionRole = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Kinesisanalyticsv2Application.prototype, "serviceExecutionRoleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serviceExecutionRole;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Kinesisanalyticsv2Application.prototype, "startApplication", {
        get: function () {
            return this.getBooleanAttribute('start_application');
        },
        set: function (value) {
            this._startApplication = value;
        },
        enumerable: false,
        configurable: true
    });
    Kinesisanalyticsv2Application.prototype.resetStartApplication = function () {
        this._startApplication = undefined;
    };
    Object.defineProperty(Kinesisanalyticsv2Application.prototype, "startApplicationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._startApplication;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Kinesisanalyticsv2Application.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Kinesisanalyticsv2Application.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    Kinesisanalyticsv2Application.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(Kinesisanalyticsv2Application.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Kinesisanalyticsv2Application.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    Kinesisanalyticsv2Application.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(Kinesisanalyticsv2Application.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Kinesisanalyticsv2Application.prototype, "versionId", {
        // version_id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('version_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Kinesisanalyticsv2Application.prototype, "applicationConfiguration", {
        get: function () {
            return this.interpolationForAttribute('application_configuration');
        },
        set: function (value) {
            this._applicationConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    Kinesisanalyticsv2Application.prototype.resetApplicationConfiguration = function () {
        this._applicationConfiguration = undefined;
    };
    Object.defineProperty(Kinesisanalyticsv2Application.prototype, "applicationConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._applicationConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Kinesisanalyticsv2Application.prototype, "cloudwatchLoggingOptions", {
        get: function () {
            return this.interpolationForAttribute('cloudwatch_logging_options');
        },
        set: function (value) {
            this._cloudwatchLoggingOptions = value;
        },
        enumerable: false,
        configurable: true
    });
    Kinesisanalyticsv2Application.prototype.resetCloudwatchLoggingOptions = function () {
        this._cloudwatchLoggingOptions = undefined;
    };
    Object.defineProperty(Kinesisanalyticsv2Application.prototype, "cloudwatchLoggingOptionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cloudwatchLoggingOptions;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Kinesisanalyticsv2Application.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            force_stop: cdktf.booleanToTerraform(this._forceStop),
            name: cdktf.stringToTerraform(this._name),
            runtime_environment: cdktf.stringToTerraform(this._runtimeEnvironment),
            service_execution_role: cdktf.stringToTerraform(this._serviceExecutionRole),
            start_application: cdktf.booleanToTerraform(this._startApplication),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            application_configuration: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationToTerraform)(this._applicationConfiguration),
            cloudwatch_logging_options: cdktf.listMapper(kinesisanalyticsv2ApplicationCloudwatchLoggingOptionsToTerraform)(this._cloudwatchLoggingOptions)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Kinesisanalyticsv2Application.tfResourceType = "aws_kinesisanalyticsv2_application";
    return Kinesisanalyticsv2Application;
}(cdktf.TerraformResource));
exports.Kinesisanalyticsv2Application = Kinesisanalyticsv2Application;
