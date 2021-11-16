"use strict";
// https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html
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
exports.DmsEndpoint = void 0;
var cdktf = require("cdktf");
function dmsEndpointElasticsearchSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        endpoint_uri: cdktf.stringToTerraform(struct.endpointUri),
        error_retry_duration: cdktf.numberToTerraform(struct.errorRetryDuration),
        full_load_error_percentage: cdktf.numberToTerraform(struct.fullLoadErrorPercentage),
        service_access_role_arn: cdktf.stringToTerraform(struct.serviceAccessRoleArn)
    };
}
function dmsEndpointKafkaSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        broker: cdktf.stringToTerraform(struct.broker),
        include_control_details: cdktf.booleanToTerraform(struct.includeControlDetails),
        include_null_and_empty: cdktf.booleanToTerraform(struct.includeNullAndEmpty),
        include_partition_value: cdktf.booleanToTerraform(struct.includePartitionValue),
        include_table_alter_operations: cdktf.booleanToTerraform(struct.includeTableAlterOperations),
        include_transaction_details: cdktf.booleanToTerraform(struct.includeTransactionDetails),
        message_format: cdktf.stringToTerraform(struct.messageFormat),
        message_max_bytes: cdktf.numberToTerraform(struct.messageMaxBytes),
        no_hex_prefix: cdktf.booleanToTerraform(struct.noHexPrefix),
        partition_include_schema_table: cdktf.booleanToTerraform(struct.partitionIncludeSchemaTable),
        sasl_password: cdktf.stringToTerraform(struct.saslPassword),
        sasl_username: cdktf.stringToTerraform(struct.saslUsername),
        security_protocol: cdktf.stringToTerraform(struct.securityProtocol),
        ssl_ca_certificate_arn: cdktf.stringToTerraform(struct.sslCaCertificateArn),
        ssl_client_certificate_arn: cdktf.stringToTerraform(struct.sslClientCertificateArn),
        ssl_client_key_arn: cdktf.stringToTerraform(struct.sslClientKeyArn),
        ssl_client_key_password: cdktf.stringToTerraform(struct.sslClientKeyPassword),
        topic: cdktf.stringToTerraform(struct.topic)
    };
}
function dmsEndpointKinesisSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        include_control_details: cdktf.booleanToTerraform(struct.includeControlDetails),
        include_null_and_empty: cdktf.booleanToTerraform(struct.includeNullAndEmpty),
        include_partition_value: cdktf.booleanToTerraform(struct.includePartitionValue),
        include_table_alter_operations: cdktf.booleanToTerraform(struct.includeTableAlterOperations),
        include_transaction_details: cdktf.booleanToTerraform(struct.includeTransactionDetails),
        message_format: cdktf.stringToTerraform(struct.messageFormat),
        partition_include_schema_table: cdktf.booleanToTerraform(struct.partitionIncludeSchemaTable),
        service_access_role_arn: cdktf.stringToTerraform(struct.serviceAccessRoleArn),
        stream_arn: cdktf.stringToTerraform(struct.streamArn)
    };
}
function dmsEndpointMongodbSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        auth_mechanism: cdktf.stringToTerraform(struct.authMechanism),
        auth_source: cdktf.stringToTerraform(struct.authSource),
        auth_type: cdktf.stringToTerraform(struct.authType),
        docs_to_investigate: cdktf.stringToTerraform(struct.docsToInvestigate),
        extract_doc_id: cdktf.stringToTerraform(struct.extractDocId),
        nesting_level: cdktf.stringToTerraform(struct.nestingLevel)
    };
}
function dmsEndpointS3SettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket_folder: cdktf.stringToTerraform(struct.bucketFolder),
        bucket_name: cdktf.stringToTerraform(struct.bucketName),
        compression_type: cdktf.stringToTerraform(struct.compressionType),
        csv_delimiter: cdktf.stringToTerraform(struct.csvDelimiter),
        csv_row_delimiter: cdktf.stringToTerraform(struct.csvRowDelimiter),
        data_format: cdktf.stringToTerraform(struct.dataFormat),
        date_partition_enabled: cdktf.booleanToTerraform(struct.datePartitionEnabled),
        encryption_mode: cdktf.stringToTerraform(struct.encryptionMode),
        external_table_definition: cdktf.stringToTerraform(struct.externalTableDefinition),
        parquet_timestamp_in_millisecond: cdktf.booleanToTerraform(struct.parquetTimestampInMillisecond),
        parquet_version: cdktf.stringToTerraform(struct.parquetVersion),
        server_side_encryption_kms_key_id: cdktf.stringToTerraform(struct.serverSideEncryptionKmsKeyId),
        service_access_role_arn: cdktf.stringToTerraform(struct.serviceAccessRoleArn)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html aws_dms_endpoint}
*/
var DmsEndpoint = /** @class */ (function (_super) {
    __extends(DmsEndpoint, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html aws_dms_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DmsEndpointConfig
    */
    function DmsEndpoint(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_dms_endpoint',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._certificateArn = config.certificateArn;
        _this._databaseName = config.databaseName;
        _this._endpointId = config.endpointId;
        _this._endpointType = config.endpointType;
        _this._engineName = config.engineName;
        _this._extraConnectionAttributes = config.extraConnectionAttributes;
        _this._kmsKeyArn = config.kmsKeyArn;
        _this._password = config.password;
        _this._port = config.port;
        _this._serverName = config.serverName;
        _this._serviceAccessRole = config.serviceAccessRole;
        _this._sslMode = config.sslMode;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._username = config.username;
        _this._elasticsearchSettings = config.elasticsearchSettings;
        _this._kafkaSettings = config.kafkaSettings;
        _this._kinesisSettings = config.kinesisSettings;
        _this._mongodbSettings = config.mongodbSettings;
        _this._s3Settings = config.s3Settings;
        return _this;
    }
    Object.defineProperty(DmsEndpoint.prototype, "certificateArn", {
        get: function () {
            return this.getStringAttribute('certificate_arn');
        },
        set: function (value) {
            this._certificateArn = value;
        },
        enumerable: false,
        configurable: true
    });
    DmsEndpoint.prototype.resetCertificateArn = function () {
        this._certificateArn = undefined;
    };
    Object.defineProperty(DmsEndpoint.prototype, "certificateArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificateArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsEndpoint.prototype, "databaseName", {
        get: function () {
            return this.getStringAttribute('database_name');
        },
        set: function (value) {
            this._databaseName = value;
        },
        enumerable: false,
        configurable: true
    });
    DmsEndpoint.prototype.resetDatabaseName = function () {
        this._databaseName = undefined;
    };
    Object.defineProperty(DmsEndpoint.prototype, "databaseNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._databaseName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsEndpoint.prototype, "endpointArn", {
        // endpoint_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('endpoint_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsEndpoint.prototype, "endpointId", {
        get: function () {
            return this.getStringAttribute('endpoint_id');
        },
        set: function (value) {
            this._endpointId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsEndpoint.prototype, "endpointIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._endpointId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsEndpoint.prototype, "endpointType", {
        get: function () {
            return this.getStringAttribute('endpoint_type');
        },
        set: function (value) {
            this._endpointType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsEndpoint.prototype, "endpointTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._endpointType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsEndpoint.prototype, "engineName", {
        get: function () {
            return this.getStringAttribute('engine_name');
        },
        set: function (value) {
            this._engineName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsEndpoint.prototype, "engineNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._engineName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsEndpoint.prototype, "extraConnectionAttributes", {
        get: function () {
            return this.getStringAttribute('extra_connection_attributes');
        },
        set: function (value) {
            this._extraConnectionAttributes = value;
        },
        enumerable: false,
        configurable: true
    });
    DmsEndpoint.prototype.resetExtraConnectionAttributes = function () {
        this._extraConnectionAttributes = undefined;
    };
    Object.defineProperty(DmsEndpoint.prototype, "extraConnectionAttributesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._extraConnectionAttributes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsEndpoint.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsEndpoint.prototype, "kmsKeyArn", {
        get: function () {
            return this.getStringAttribute('kms_key_arn');
        },
        set: function (value) {
            this._kmsKeyArn = value;
        },
        enumerable: false,
        configurable: true
    });
    DmsEndpoint.prototype.resetKmsKeyArn = function () {
        this._kmsKeyArn = undefined;
    };
    Object.defineProperty(DmsEndpoint.prototype, "kmsKeyArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kmsKeyArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsEndpoint.prototype, "password", {
        get: function () {
            return this.getStringAttribute('password');
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: false,
        configurable: true
    });
    DmsEndpoint.prototype.resetPassword = function () {
        this._password = undefined;
    };
    Object.defineProperty(DmsEndpoint.prototype, "passwordInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._password;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsEndpoint.prototype, "port", {
        get: function () {
            return this.getNumberAttribute('port');
        },
        set: function (value) {
            this._port = value;
        },
        enumerable: false,
        configurable: true
    });
    DmsEndpoint.prototype.resetPort = function () {
        this._port = undefined;
    };
    Object.defineProperty(DmsEndpoint.prototype, "portInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._port;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsEndpoint.prototype, "serverName", {
        get: function () {
            return this.getStringAttribute('server_name');
        },
        set: function (value) {
            this._serverName = value;
        },
        enumerable: false,
        configurable: true
    });
    DmsEndpoint.prototype.resetServerName = function () {
        this._serverName = undefined;
    };
    Object.defineProperty(DmsEndpoint.prototype, "serverNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serverName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsEndpoint.prototype, "serviceAccessRole", {
        get: function () {
            return this.getStringAttribute('service_access_role');
        },
        set: function (value) {
            this._serviceAccessRole = value;
        },
        enumerable: false,
        configurable: true
    });
    DmsEndpoint.prototype.resetServiceAccessRole = function () {
        this._serviceAccessRole = undefined;
    };
    Object.defineProperty(DmsEndpoint.prototype, "serviceAccessRoleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serviceAccessRole;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsEndpoint.prototype, "sslMode", {
        get: function () {
            return this.getStringAttribute('ssl_mode');
        },
        set: function (value) {
            this._sslMode = value;
        },
        enumerable: false,
        configurable: true
    });
    DmsEndpoint.prototype.resetSslMode = function () {
        this._sslMode = undefined;
    };
    Object.defineProperty(DmsEndpoint.prototype, "sslModeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sslMode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsEndpoint.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DmsEndpoint.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DmsEndpoint.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsEndpoint.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    DmsEndpoint.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(DmsEndpoint.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsEndpoint.prototype, "username", {
        get: function () {
            return this.getStringAttribute('username');
        },
        set: function (value) {
            this._username = value;
        },
        enumerable: false,
        configurable: true
    });
    DmsEndpoint.prototype.resetUsername = function () {
        this._username = undefined;
    };
    Object.defineProperty(DmsEndpoint.prototype, "usernameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._username;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsEndpoint.prototype, "elasticsearchSettings", {
        get: function () {
            return this.interpolationForAttribute('elasticsearch_settings');
        },
        set: function (value) {
            this._elasticsearchSettings = value;
        },
        enumerable: false,
        configurable: true
    });
    DmsEndpoint.prototype.resetElasticsearchSettings = function () {
        this._elasticsearchSettings = undefined;
    };
    Object.defineProperty(DmsEndpoint.prototype, "elasticsearchSettingsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._elasticsearchSettings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsEndpoint.prototype, "kafkaSettings", {
        get: function () {
            return this.interpolationForAttribute('kafka_settings');
        },
        set: function (value) {
            this._kafkaSettings = value;
        },
        enumerable: false,
        configurable: true
    });
    DmsEndpoint.prototype.resetKafkaSettings = function () {
        this._kafkaSettings = undefined;
    };
    Object.defineProperty(DmsEndpoint.prototype, "kafkaSettingsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kafkaSettings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsEndpoint.prototype, "kinesisSettings", {
        get: function () {
            return this.interpolationForAttribute('kinesis_settings');
        },
        set: function (value) {
            this._kinesisSettings = value;
        },
        enumerable: false,
        configurable: true
    });
    DmsEndpoint.prototype.resetKinesisSettings = function () {
        this._kinesisSettings = undefined;
    };
    Object.defineProperty(DmsEndpoint.prototype, "kinesisSettingsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kinesisSettings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsEndpoint.prototype, "mongodbSettings", {
        get: function () {
            return this.interpolationForAttribute('mongodb_settings');
        },
        set: function (value) {
            this._mongodbSettings = value;
        },
        enumerable: false,
        configurable: true
    });
    DmsEndpoint.prototype.resetMongodbSettings = function () {
        this._mongodbSettings = undefined;
    };
    Object.defineProperty(DmsEndpoint.prototype, "mongodbSettingsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mongodbSettings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsEndpoint.prototype, "s3Settings", {
        get: function () {
            return this.interpolationForAttribute('s3_settings');
        },
        set: function (value) {
            this._s3Settings = value;
        },
        enumerable: false,
        configurable: true
    });
    DmsEndpoint.prototype.resetS3Settings = function () {
        this._s3Settings = undefined;
    };
    Object.defineProperty(DmsEndpoint.prototype, "s3SettingsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._s3Settings;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DmsEndpoint.prototype.synthesizeAttributes = function () {
        return {
            certificate_arn: cdktf.stringToTerraform(this._certificateArn),
            database_name: cdktf.stringToTerraform(this._databaseName),
            endpoint_id: cdktf.stringToTerraform(this._endpointId),
            endpoint_type: cdktf.stringToTerraform(this._endpointType),
            engine_name: cdktf.stringToTerraform(this._engineName),
            extra_connection_attributes: cdktf.stringToTerraform(this._extraConnectionAttributes),
            kms_key_arn: cdktf.stringToTerraform(this._kmsKeyArn),
            password: cdktf.stringToTerraform(this._password),
            port: cdktf.numberToTerraform(this._port),
            server_name: cdktf.stringToTerraform(this._serverName),
            service_access_role: cdktf.stringToTerraform(this._serviceAccessRole),
            ssl_mode: cdktf.stringToTerraform(this._sslMode),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            username: cdktf.stringToTerraform(this._username),
            elasticsearch_settings: cdktf.listMapper(dmsEndpointElasticsearchSettingsToTerraform)(this._elasticsearchSettings),
            kafka_settings: cdktf.listMapper(dmsEndpointKafkaSettingsToTerraform)(this._kafkaSettings),
            kinesis_settings: cdktf.listMapper(dmsEndpointKinesisSettingsToTerraform)(this._kinesisSettings),
            mongodb_settings: cdktf.listMapper(dmsEndpointMongodbSettingsToTerraform)(this._mongodbSettings),
            s3_settings: cdktf.listMapper(dmsEndpointS3SettingsToTerraform)(this._s3Settings)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DmsEndpoint.tfResourceType = "aws_dms_endpoint";
    return DmsEndpoint;
}(cdktf.TerraformResource));
exports.DmsEndpoint = DmsEndpoint;
