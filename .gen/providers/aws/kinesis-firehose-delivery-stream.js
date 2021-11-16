"use strict";
// https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html
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
exports.KinesisFirehoseDeliveryStream = void 0;
var cdktf = require("cdktf");
function kinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_group_name: cdktf.stringToTerraform(struct.logGroupName),
        log_stream_name: cdktf.stringToTerraform(struct.logStreamName)
    };
}
function kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        parameter_name: cdktf.stringToTerraform(struct.parameterName),
        parameter_value: cdktf.stringToTerraform(struct.parameterValue)
    };
}
function kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
        parameters: cdktf.listMapper(kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParametersToTerraform)(struct.parameters)
    };
}
function kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        processors: cdktf.listMapper(kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsToTerraform)(struct.processors)
    };
}
function kinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroupIds),
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.subnetIds)
    };
}
function kinesisFirehoseDeliveryStreamElasticsearchConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        buffering_interval: cdktf.numberToTerraform(struct.bufferingInterval),
        buffering_size: cdktf.numberToTerraform(struct.bufferingSize),
        cluster_endpoint: cdktf.stringToTerraform(struct.clusterEndpoint),
        domain_arn: cdktf.stringToTerraform(struct.domainArn),
        index_name: cdktf.stringToTerraform(struct.indexName),
        index_rotation_period: cdktf.stringToTerraform(struct.indexRotationPeriod),
        retry_duration: cdktf.numberToTerraform(struct.retryDuration),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        s3_backup_mode: cdktf.stringToTerraform(struct.s3BackupMode),
        type_name: cdktf.stringToTerraform(struct.typeName),
        cloudwatch_logging_options: cdktf.listMapper(kinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsToTerraform)(struct.cloudwatchLoggingOptions),
        processing_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationToTerraform)(struct.processingConfiguration),
        vpc_config: cdktf.listMapper(kinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfigToTerraform)(struct.vpcConfig)
    };
}
function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_group_name: cdktf.stringToTerraform(struct.logGroupName),
        log_stream_name: cdktf.stringToTerraform(struct.logStreamName)
    };
}
function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        timestamp_formats: cdktf.listMapper(cdktf.stringToTerraform)(struct.timestampFormats)
    };
}
function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        case_insensitive: cdktf.booleanToTerraform(struct.caseInsensitive),
        column_to_json_key_mappings: cdktf.hashMapper(cdktf.anyToTerraform)(struct.columnToJsonKeyMappings),
        convert_dots_in_json_keys_to_underscores: cdktf.booleanToTerraform(struct.convertDotsInJsonKeysToUnderscores)
    };
}
function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        hive_json_ser_de: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeToTerraform)(struct.hiveJsonSerDe),
        open_x_json_ser_de: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeToTerraform)(struct.openXJsonSerDe)
    };
}
function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        deserializer: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerToTerraform)(struct.deserializer)
    };
}
function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        block_size_bytes: cdktf.numberToTerraform(struct.blockSizeBytes),
        bloom_filter_columns: cdktf.listMapper(cdktf.stringToTerraform)(struct.bloomFilterColumns),
        bloom_filter_false_positive_probability: cdktf.numberToTerraform(struct.bloomFilterFalsePositiveProbability),
        compression: cdktf.stringToTerraform(struct.compression),
        dictionary_key_threshold: cdktf.numberToTerraform(struct.dictionaryKeyThreshold),
        enable_padding: cdktf.booleanToTerraform(struct.enablePadding),
        format_version: cdktf.stringToTerraform(struct.formatVersion),
        padding_tolerance: cdktf.numberToTerraform(struct.paddingTolerance),
        row_index_stride: cdktf.numberToTerraform(struct.rowIndexStride),
        stripe_size_bytes: cdktf.numberToTerraform(struct.stripeSizeBytes)
    };
}
function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        block_size_bytes: cdktf.numberToTerraform(struct.blockSizeBytes),
        compression: cdktf.stringToTerraform(struct.compression),
        enable_dictionary_compression: cdktf.booleanToTerraform(struct.enableDictionaryCompression),
        max_padding_bytes: cdktf.numberToTerraform(struct.maxPaddingBytes),
        page_size_bytes: cdktf.numberToTerraform(struct.pageSizeBytes),
        writer_version: cdktf.stringToTerraform(struct.writerVersion)
    };
}
function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        orc_ser_de: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeToTerraform)(struct.orcSerDe),
        parquet_ser_de: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeToTerraform)(struct.parquetSerDe)
    };
}
function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        serializer: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerToTerraform)(struct.serializer)
    };
}
function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        catalog_id: cdktf.stringToTerraform(struct.catalogId),
        database_name: cdktf.stringToTerraform(struct.databaseName),
        region: cdktf.stringToTerraform(struct.region),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        table_name: cdktf.stringToTerraform(struct.tableName),
        version_id: cdktf.stringToTerraform(struct.versionId)
    };
}
function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        input_format_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationToTerraform)(struct.inputFormatConfiguration),
        output_format_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationToTerraform)(struct.outputFormatConfiguration),
        schema_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfigurationToTerraform)(struct.schemaConfiguration)
    };
}
function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        parameter_name: cdktf.stringToTerraform(struct.parameterName),
        parameter_value: cdktf.stringToTerraform(struct.parameterValue)
    };
}
function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
        parameters: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParametersToTerraform)(struct.parameters)
    };
}
function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        processors: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsToTerraform)(struct.processors)
    };
}
function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_group_name: cdktf.stringToTerraform(struct.logGroupName),
        log_stream_name: cdktf.stringToTerraform(struct.logStreamName)
    };
}
function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket_arn: cdktf.stringToTerraform(struct.bucketArn),
        buffer_interval: cdktf.numberToTerraform(struct.bufferInterval),
        buffer_size: cdktf.numberToTerraform(struct.bufferSize),
        compression_format: cdktf.stringToTerraform(struct.compressionFormat),
        kms_key_arn: cdktf.stringToTerraform(struct.kmsKeyArn),
        prefix: cdktf.stringToTerraform(struct.prefix),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        cloudwatch_logging_options: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform)(struct.cloudwatchLoggingOptions)
    };
}
function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket_arn: cdktf.stringToTerraform(struct.bucketArn),
        buffer_interval: cdktf.numberToTerraform(struct.bufferInterval),
        buffer_size: cdktf.numberToTerraform(struct.bufferSize),
        compression_format: cdktf.stringToTerraform(struct.compressionFormat),
        error_output_prefix: cdktf.stringToTerraform(struct.errorOutputPrefix),
        kms_key_arn: cdktf.stringToTerraform(struct.kmsKeyArn),
        prefix: cdktf.stringToTerraform(struct.prefix),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        s3_backup_mode: cdktf.stringToTerraform(struct.s3BackupMode),
        cloudwatch_logging_options: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsToTerraform)(struct.cloudwatchLoggingOptions),
        data_format_conversion_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationToTerraform)(struct.dataFormatConversionConfiguration),
        processing_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationToTerraform)(struct.processingConfiguration),
        s3_backup_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationToTerraform)(struct.s3BackupConfiguration)
    };
}
function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_group_name: cdktf.stringToTerraform(struct.logGroupName),
        log_stream_name: cdktf.stringToTerraform(struct.logStreamName)
    };
}
function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        parameter_name: cdktf.stringToTerraform(struct.parameterName),
        parameter_value: cdktf.stringToTerraform(struct.parameterValue)
    };
}
function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
        parameters: cdktf.listMapper(kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParametersToTerraform)(struct.parameters)
    };
}
function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        processors: cdktf.listMapper(kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsToTerraform)(struct.processors)
    };
}
function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        content_encoding: cdktf.stringToTerraform(struct.contentEncoding),
        common_attributes: cdktf.listMapper(kinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributesToTerraform)(struct.commonAttributes)
    };
}
function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        access_key: cdktf.stringToTerraform(struct.accessKey),
        buffering_interval: cdktf.numberToTerraform(struct.bufferingInterval),
        buffering_size: cdktf.numberToTerraform(struct.bufferingSize),
        name: cdktf.stringToTerraform(struct.name),
        retry_duration: cdktf.numberToTerraform(struct.retryDuration),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        s3_backup_mode: cdktf.stringToTerraform(struct.s3BackupMode),
        url: cdktf.stringToTerraform(struct.url),
        cloudwatch_logging_options: cdktf.listMapper(kinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsToTerraform)(struct.cloudwatchLoggingOptions),
        processing_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationToTerraform)(struct.processingConfiguration),
        request_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationToTerraform)(struct.requestConfiguration)
    };
}
function kinesisFirehoseDeliveryStreamKinesisSourceConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        kinesis_stream_arn: cdktf.stringToTerraform(struct.kinesisStreamArn),
        role_arn: cdktf.stringToTerraform(struct.roleArn)
    };
}
function kinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_group_name: cdktf.stringToTerraform(struct.logGroupName),
        log_stream_name: cdktf.stringToTerraform(struct.logStreamName)
    };
}
function kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        parameter_name: cdktf.stringToTerraform(struct.parameterName),
        parameter_value: cdktf.stringToTerraform(struct.parameterValue)
    };
}
function kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
        parameters: cdktf.listMapper(kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParametersToTerraform)(struct.parameters)
    };
}
function kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        processors: cdktf.listMapper(kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsToTerraform)(struct.processors)
    };
}
function kinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_group_name: cdktf.stringToTerraform(struct.logGroupName),
        log_stream_name: cdktf.stringToTerraform(struct.logStreamName)
    };
}
function kinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket_arn: cdktf.stringToTerraform(struct.bucketArn),
        buffer_interval: cdktf.numberToTerraform(struct.bufferInterval),
        buffer_size: cdktf.numberToTerraform(struct.bufferSize),
        compression_format: cdktf.stringToTerraform(struct.compressionFormat),
        kms_key_arn: cdktf.stringToTerraform(struct.kmsKeyArn),
        prefix: cdktf.stringToTerraform(struct.prefix),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        cloudwatch_logging_options: cdktf.listMapper(kinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform)(struct.cloudwatchLoggingOptions)
    };
}
function kinesisFirehoseDeliveryStreamRedshiftConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cluster_jdbcurl: cdktf.stringToTerraform(struct.clusterJdbcurl),
        copy_options: cdktf.stringToTerraform(struct.copyOptions),
        data_table_columns: cdktf.stringToTerraform(struct.dataTableColumns),
        data_table_name: cdktf.stringToTerraform(struct.dataTableName),
        password: cdktf.stringToTerraform(struct.password),
        retry_duration: cdktf.numberToTerraform(struct.retryDuration),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        s3_backup_mode: cdktf.stringToTerraform(struct.s3BackupMode),
        username: cdktf.stringToTerraform(struct.username),
        cloudwatch_logging_options: cdktf.listMapper(kinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsToTerraform)(struct.cloudwatchLoggingOptions),
        processing_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationToTerraform)(struct.processingConfiguration),
        s3_backup_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationToTerraform)(struct.s3BackupConfiguration)
    };
}
function kinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_group_name: cdktf.stringToTerraform(struct.logGroupName),
        log_stream_name: cdktf.stringToTerraform(struct.logStreamName)
    };
}
function kinesisFirehoseDeliveryStreamS3ConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket_arn: cdktf.stringToTerraform(struct.bucketArn),
        buffer_interval: cdktf.numberToTerraform(struct.bufferInterval),
        buffer_size: cdktf.numberToTerraform(struct.bufferSize),
        compression_format: cdktf.stringToTerraform(struct.compressionFormat),
        kms_key_arn: cdktf.stringToTerraform(struct.kmsKeyArn),
        prefix: cdktf.stringToTerraform(struct.prefix),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        cloudwatch_logging_options: cdktf.listMapper(kinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptionsToTerraform)(struct.cloudwatchLoggingOptions)
    };
}
function kinesisFirehoseDeliveryStreamServerSideEncryptionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        key_arn: cdktf.stringToTerraform(struct.keyArn),
        key_type: cdktf.stringToTerraform(struct.keyType)
    };
}
function kinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_group_name: cdktf.stringToTerraform(struct.logGroupName),
        log_stream_name: cdktf.stringToTerraform(struct.logStreamName)
    };
}
function kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        parameter_name: cdktf.stringToTerraform(struct.parameterName),
        parameter_value: cdktf.stringToTerraform(struct.parameterValue)
    };
}
function kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
        parameters: cdktf.listMapper(kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParametersToTerraform)(struct.parameters)
    };
}
function kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        processors: cdktf.listMapper(kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsToTerraform)(struct.processors)
    };
}
function kinesisFirehoseDeliveryStreamSplunkConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        hec_acknowledgment_timeout: cdktf.numberToTerraform(struct.hecAcknowledgmentTimeout),
        hec_endpoint: cdktf.stringToTerraform(struct.hecEndpoint),
        hec_endpoint_type: cdktf.stringToTerraform(struct.hecEndpointType),
        hec_token: cdktf.stringToTerraform(struct.hecToken),
        retry_duration: cdktf.numberToTerraform(struct.retryDuration),
        s3_backup_mode: cdktf.stringToTerraform(struct.s3BackupMode),
        cloudwatch_logging_options: cdktf.listMapper(kinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsToTerraform)(struct.cloudwatchLoggingOptions),
        processing_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationToTerraform)(struct.processingConfiguration)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html aws_kinesis_firehose_delivery_stream}
*/
var KinesisFirehoseDeliveryStream = /** @class */ (function (_super) {
    __extends(KinesisFirehoseDeliveryStream, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html aws_kinesis_firehose_delivery_stream} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KinesisFirehoseDeliveryStreamConfig
    */
    function KinesisFirehoseDeliveryStream(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_kinesis_firehose_delivery_stream',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._destination = config.destination;
        _this._destinationId = config.destinationId;
        _this._name = config.name;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._versionId = config.versionId;
        _this._elasticsearchConfiguration = config.elasticsearchConfiguration;
        _this._extendedS3Configuration = config.extendedS3Configuration;
        _this._httpEndpointConfiguration = config.httpEndpointConfiguration;
        _this._kinesisSourceConfiguration = config.kinesisSourceConfiguration;
        _this._redshiftConfiguration = config.redshiftConfiguration;
        _this._s3Configuration = config.s3Configuration;
        _this._serverSideEncryption = config.serverSideEncryption;
        _this._splunkConfiguration = config.splunkConfiguration;
        return _this;
    }
    Object.defineProperty(KinesisFirehoseDeliveryStream.prototype, "arn", {
        // ==========
        // ATTRIBUTES
        // ==========
        // arn - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisFirehoseDeliveryStream.prototype, "destination", {
        get: function () {
            return this.getStringAttribute('destination');
        },
        set: function (value) {
            this._destination = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisFirehoseDeliveryStream.prototype, "destinationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._destination;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisFirehoseDeliveryStream.prototype, "destinationId", {
        get: function () {
            return this.getStringAttribute('destination_id');
        },
        set: function (value) {
            this._destinationId = value;
        },
        enumerable: false,
        configurable: true
    });
    KinesisFirehoseDeliveryStream.prototype.resetDestinationId = function () {
        this._destinationId = undefined;
    };
    Object.defineProperty(KinesisFirehoseDeliveryStream.prototype, "destinationIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._destinationId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisFirehoseDeliveryStream.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisFirehoseDeliveryStream.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisFirehoseDeliveryStream.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisFirehoseDeliveryStream.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    KinesisFirehoseDeliveryStream.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(KinesisFirehoseDeliveryStream.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisFirehoseDeliveryStream.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    KinesisFirehoseDeliveryStream.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(KinesisFirehoseDeliveryStream.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisFirehoseDeliveryStream.prototype, "versionId", {
        get: function () {
            return this.getStringAttribute('version_id');
        },
        set: function (value) {
            this._versionId = value;
        },
        enumerable: false,
        configurable: true
    });
    KinesisFirehoseDeliveryStream.prototype.resetVersionId = function () {
        this._versionId = undefined;
    };
    Object.defineProperty(KinesisFirehoseDeliveryStream.prototype, "versionIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._versionId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisFirehoseDeliveryStream.prototype, "elasticsearchConfiguration", {
        get: function () {
            return this.interpolationForAttribute('elasticsearch_configuration');
        },
        set: function (value) {
            this._elasticsearchConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    KinesisFirehoseDeliveryStream.prototype.resetElasticsearchConfiguration = function () {
        this._elasticsearchConfiguration = undefined;
    };
    Object.defineProperty(KinesisFirehoseDeliveryStream.prototype, "elasticsearchConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._elasticsearchConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisFirehoseDeliveryStream.prototype, "extendedS3Configuration", {
        get: function () {
            return this.interpolationForAttribute('extended_s3_configuration');
        },
        set: function (value) {
            this._extendedS3Configuration = value;
        },
        enumerable: false,
        configurable: true
    });
    KinesisFirehoseDeliveryStream.prototype.resetExtendedS3Configuration = function () {
        this._extendedS3Configuration = undefined;
    };
    Object.defineProperty(KinesisFirehoseDeliveryStream.prototype, "extendedS3ConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._extendedS3Configuration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisFirehoseDeliveryStream.prototype, "httpEndpointConfiguration", {
        get: function () {
            return this.interpolationForAttribute('http_endpoint_configuration');
        },
        set: function (value) {
            this._httpEndpointConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    KinesisFirehoseDeliveryStream.prototype.resetHttpEndpointConfiguration = function () {
        this._httpEndpointConfiguration = undefined;
    };
    Object.defineProperty(KinesisFirehoseDeliveryStream.prototype, "httpEndpointConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._httpEndpointConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisFirehoseDeliveryStream.prototype, "kinesisSourceConfiguration", {
        get: function () {
            return this.interpolationForAttribute('kinesis_source_configuration');
        },
        set: function (value) {
            this._kinesisSourceConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    KinesisFirehoseDeliveryStream.prototype.resetKinesisSourceConfiguration = function () {
        this._kinesisSourceConfiguration = undefined;
    };
    Object.defineProperty(KinesisFirehoseDeliveryStream.prototype, "kinesisSourceConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kinesisSourceConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisFirehoseDeliveryStream.prototype, "redshiftConfiguration", {
        get: function () {
            return this.interpolationForAttribute('redshift_configuration');
        },
        set: function (value) {
            this._redshiftConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    KinesisFirehoseDeliveryStream.prototype.resetRedshiftConfiguration = function () {
        this._redshiftConfiguration = undefined;
    };
    Object.defineProperty(KinesisFirehoseDeliveryStream.prototype, "redshiftConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._redshiftConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisFirehoseDeliveryStream.prototype, "s3Configuration", {
        get: function () {
            return this.interpolationForAttribute('s3_configuration');
        },
        set: function (value) {
            this._s3Configuration = value;
        },
        enumerable: false,
        configurable: true
    });
    KinesisFirehoseDeliveryStream.prototype.resetS3Configuration = function () {
        this._s3Configuration = undefined;
    };
    Object.defineProperty(KinesisFirehoseDeliveryStream.prototype, "s3ConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._s3Configuration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisFirehoseDeliveryStream.prototype, "serverSideEncryption", {
        get: function () {
            return this.interpolationForAttribute('server_side_encryption');
        },
        set: function (value) {
            this._serverSideEncryption = value;
        },
        enumerable: false,
        configurable: true
    });
    KinesisFirehoseDeliveryStream.prototype.resetServerSideEncryption = function () {
        this._serverSideEncryption = undefined;
    };
    Object.defineProperty(KinesisFirehoseDeliveryStream.prototype, "serverSideEncryptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serverSideEncryption;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KinesisFirehoseDeliveryStream.prototype, "splunkConfiguration", {
        get: function () {
            return this.interpolationForAttribute('splunk_configuration');
        },
        set: function (value) {
            this._splunkConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    KinesisFirehoseDeliveryStream.prototype.resetSplunkConfiguration = function () {
        this._splunkConfiguration = undefined;
    };
    Object.defineProperty(KinesisFirehoseDeliveryStream.prototype, "splunkConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._splunkConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    KinesisFirehoseDeliveryStream.prototype.synthesizeAttributes = function () {
        return {
            destination: cdktf.stringToTerraform(this._destination),
            destination_id: cdktf.stringToTerraform(this._destinationId),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            version_id: cdktf.stringToTerraform(this._versionId),
            elasticsearch_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamElasticsearchConfigurationToTerraform)(this._elasticsearchConfiguration),
            extended_s3_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationToTerraform)(this._extendedS3Configuration),
            http_endpoint_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamHttpEndpointConfigurationToTerraform)(this._httpEndpointConfiguration),
            kinesis_source_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamKinesisSourceConfigurationToTerraform)(this._kinesisSourceConfiguration),
            redshift_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamRedshiftConfigurationToTerraform)(this._redshiftConfiguration),
            s3_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamS3ConfigurationToTerraform)(this._s3Configuration),
            server_side_encryption: cdktf.listMapper(kinesisFirehoseDeliveryStreamServerSideEncryptionToTerraform)(this._serverSideEncryption),
            splunk_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamSplunkConfigurationToTerraform)(this._splunkConfiguration)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    KinesisFirehoseDeliveryStream.tfResourceType = "aws_kinesis_firehose_delivery_stream";
    return KinesisFirehoseDeliveryStream;
}(cdktf.TerraformResource));
exports.KinesisFirehoseDeliveryStream = KinesisFirehoseDeliveryStream;
