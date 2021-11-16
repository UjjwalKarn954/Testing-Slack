"use strict";
// https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html
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
exports.QuicksightDataSource = void 0;
var cdktf = require("cdktf");
function quicksightDataSourceCredentialsCredentialPairToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        password: cdktf.stringToTerraform(struct.password),
        username: cdktf.stringToTerraform(struct.username)
    };
}
function quicksightDataSourceCredentialsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        copy_source_arn: cdktf.stringToTerraform(struct.copySourceArn),
        credential_pair: cdktf.listMapper(quicksightDataSourceCredentialsCredentialPairToTerraform)(struct.credentialPair)
    };
}
function quicksightDataSourceParametersAmazonElasticsearchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        domain: cdktf.stringToTerraform(struct.domain)
    };
}
function quicksightDataSourceParametersAthenaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        work_group: cdktf.stringToTerraform(struct.workGroup)
    };
}
function quicksightDataSourceParametersAuroraToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port)
    };
}
function quicksightDataSourceParametersAuroraPostgresqlToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port)
    };
}
function quicksightDataSourceParametersAwsIotAnalyticsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        data_set_name: cdktf.stringToTerraform(struct.dataSetName)
    };
}
function quicksightDataSourceParametersJiraToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        site_base_url: cdktf.stringToTerraform(struct.siteBaseUrl)
    };
}
function quicksightDataSourceParametersMariaDbToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port)
    };
}
function quicksightDataSourceParametersMysqlToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port)
    };
}
function quicksightDataSourceParametersOracleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port)
    };
}
function quicksightDataSourceParametersPostgresqlToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port)
    };
}
function quicksightDataSourceParametersPrestoToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        catalog: cdktf.stringToTerraform(struct.catalog),
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port)
    };
}
function quicksightDataSourceParametersRdsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        database: cdktf.stringToTerraform(struct.database),
        instance_id: cdktf.stringToTerraform(struct.instanceId)
    };
}
function quicksightDataSourceParametersRedshiftToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cluster_id: cdktf.stringToTerraform(struct.clusterId),
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port)
    };
}
function quicksightDataSourceParametersS3ManifestFileLocationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket: cdktf.stringToTerraform(struct.bucket),
        key: cdktf.stringToTerraform(struct.key)
    };
}
function quicksightDataSourceParametersS3ToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        manifest_file_location: cdktf.listMapper(quicksightDataSourceParametersS3ManifestFileLocationToTerraform)(struct.manifestFileLocation)
    };
}
function quicksightDataSourceParametersServiceNowToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        site_base_url: cdktf.stringToTerraform(struct.siteBaseUrl)
    };
}
function quicksightDataSourceParametersSnowflakeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        warehouse: cdktf.stringToTerraform(struct.warehouse)
    };
}
function quicksightDataSourceParametersSparkToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port)
    };
}
function quicksightDataSourceParametersSqlServerToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port)
    };
}
function quicksightDataSourceParametersTeradataToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        port: cdktf.numberToTerraform(struct.port)
    };
}
function quicksightDataSourceParametersTwitterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        max_rows: cdktf.numberToTerraform(struct.maxRows),
        query: cdktf.stringToTerraform(struct.query)
    };
}
function quicksightDataSourceParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        amazon_elasticsearch: cdktf.listMapper(quicksightDataSourceParametersAmazonElasticsearchToTerraform)(struct.amazonElasticsearch),
        athena: cdktf.listMapper(quicksightDataSourceParametersAthenaToTerraform)(struct.athena),
        aurora: cdktf.listMapper(quicksightDataSourceParametersAuroraToTerraform)(struct.aurora),
        aurora_postgresql: cdktf.listMapper(quicksightDataSourceParametersAuroraPostgresqlToTerraform)(struct.auroraPostgresql),
        aws_iot_analytics: cdktf.listMapper(quicksightDataSourceParametersAwsIotAnalyticsToTerraform)(struct.awsIotAnalytics),
        jira: cdktf.listMapper(quicksightDataSourceParametersJiraToTerraform)(struct.jira),
        maria_db: cdktf.listMapper(quicksightDataSourceParametersMariaDbToTerraform)(struct.mariaDb),
        mysql: cdktf.listMapper(quicksightDataSourceParametersMysqlToTerraform)(struct.mysql),
        oracle: cdktf.listMapper(quicksightDataSourceParametersOracleToTerraform)(struct.oracle),
        postgresql: cdktf.listMapper(quicksightDataSourceParametersPostgresqlToTerraform)(struct.postgresql),
        presto: cdktf.listMapper(quicksightDataSourceParametersPrestoToTerraform)(struct.presto),
        rds: cdktf.listMapper(quicksightDataSourceParametersRdsToTerraform)(struct.rds),
        redshift: cdktf.listMapper(quicksightDataSourceParametersRedshiftToTerraform)(struct.redshift),
        s3: cdktf.listMapper(quicksightDataSourceParametersS3ToTerraform)(struct.s3),
        service_now: cdktf.listMapper(quicksightDataSourceParametersServiceNowToTerraform)(struct.serviceNow),
        snowflake: cdktf.listMapper(quicksightDataSourceParametersSnowflakeToTerraform)(struct.snowflake),
        spark: cdktf.listMapper(quicksightDataSourceParametersSparkToTerraform)(struct.spark),
        sql_server: cdktf.listMapper(quicksightDataSourceParametersSqlServerToTerraform)(struct.sqlServer),
        teradata: cdktf.listMapper(quicksightDataSourceParametersTeradataToTerraform)(struct.teradata),
        twitter: cdktf.listMapper(quicksightDataSourceParametersTwitterToTerraform)(struct.twitter)
    };
}
function quicksightDataSourcePermissionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        actions: cdktf.listMapper(cdktf.stringToTerraform)(struct.actions),
        principal: cdktf.stringToTerraform(struct.principal)
    };
}
function quicksightDataSourceSslPropertiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        disable_ssl: cdktf.booleanToTerraform(struct.disableSsl)
    };
}
function quicksightDataSourceVpcConnectionPropertiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        vpc_connection_arn: cdktf.stringToTerraform(struct.vpcConnectionArn)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html aws_quicksight_data_source}
*/
var QuicksightDataSource = /** @class */ (function (_super) {
    __extends(QuicksightDataSource, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_source.html aws_quicksight_data_source} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options QuicksightDataSourceConfig
    */
    function QuicksightDataSource(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_quicksight_data_source',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._awsAccountId = config.awsAccountId;
        _this._dataSourceId = config.dataSourceId;
        _this._name = config.name;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._type = config.type;
        _this._credentials = config.credentials;
        _this._parameters = config.parameters;
        _this._permission = config.permission;
        _this._sslProperties = config.sslProperties;
        _this._vpcConnectionProperties = config.vpcConnectionProperties;
        return _this;
    }
    Object.defineProperty(QuicksightDataSource.prototype, "arn", {
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
    Object.defineProperty(QuicksightDataSource.prototype, "awsAccountId", {
        get: function () {
            return this.getStringAttribute('aws_account_id');
        },
        set: function (value) {
            this._awsAccountId = value;
        },
        enumerable: false,
        configurable: true
    });
    QuicksightDataSource.prototype.resetAwsAccountId = function () {
        this._awsAccountId = undefined;
    };
    Object.defineProperty(QuicksightDataSource.prototype, "awsAccountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._awsAccountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuicksightDataSource.prototype, "dataSourceId", {
        get: function () {
            return this.getStringAttribute('data_source_id');
        },
        set: function (value) {
            this._dataSourceId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuicksightDataSource.prototype, "dataSourceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dataSourceId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuicksightDataSource.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuicksightDataSource.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuicksightDataSource.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuicksightDataSource.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    QuicksightDataSource.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(QuicksightDataSource.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuicksightDataSource.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    QuicksightDataSource.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(QuicksightDataSource.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuicksightDataSource.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuicksightDataSource.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuicksightDataSource.prototype, "credentials", {
        get: function () {
            return this.interpolationForAttribute('credentials');
        },
        set: function (value) {
            this._credentials = value;
        },
        enumerable: false,
        configurable: true
    });
    QuicksightDataSource.prototype.resetCredentials = function () {
        this._credentials = undefined;
    };
    Object.defineProperty(QuicksightDataSource.prototype, "credentialsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._credentials;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuicksightDataSource.prototype, "parameters", {
        get: function () {
            return this.interpolationForAttribute('parameters');
        },
        set: function (value) {
            this._parameters = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuicksightDataSource.prototype, "parametersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._parameters;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuicksightDataSource.prototype, "permission", {
        get: function () {
            return this.interpolationForAttribute('permission');
        },
        set: function (value) {
            this._permission = value;
        },
        enumerable: false,
        configurable: true
    });
    QuicksightDataSource.prototype.resetPermission = function () {
        this._permission = undefined;
    };
    Object.defineProperty(QuicksightDataSource.prototype, "permissionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._permission;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuicksightDataSource.prototype, "sslProperties", {
        get: function () {
            return this.interpolationForAttribute('ssl_properties');
        },
        set: function (value) {
            this._sslProperties = value;
        },
        enumerable: false,
        configurable: true
    });
    QuicksightDataSource.prototype.resetSslProperties = function () {
        this._sslProperties = undefined;
    };
    Object.defineProperty(QuicksightDataSource.prototype, "sslPropertiesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sslProperties;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuicksightDataSource.prototype, "vpcConnectionProperties", {
        get: function () {
            return this.interpolationForAttribute('vpc_connection_properties');
        },
        set: function (value) {
            this._vpcConnectionProperties = value;
        },
        enumerable: false,
        configurable: true
    });
    QuicksightDataSource.prototype.resetVpcConnectionProperties = function () {
        this._vpcConnectionProperties = undefined;
    };
    Object.defineProperty(QuicksightDataSource.prototype, "vpcConnectionPropertiesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcConnectionProperties;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    QuicksightDataSource.prototype.synthesizeAttributes = function () {
        return {
            aws_account_id: cdktf.stringToTerraform(this._awsAccountId),
            data_source_id: cdktf.stringToTerraform(this._dataSourceId),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            type: cdktf.stringToTerraform(this._type),
            credentials: cdktf.listMapper(quicksightDataSourceCredentialsToTerraform)(this._credentials),
            parameters: cdktf.listMapper(quicksightDataSourceParametersToTerraform)(this._parameters),
            permission: cdktf.listMapper(quicksightDataSourcePermissionToTerraform)(this._permission),
            ssl_properties: cdktf.listMapper(quicksightDataSourceSslPropertiesToTerraform)(this._sslProperties),
            vpc_connection_properties: cdktf.listMapper(quicksightDataSourceVpcConnectionPropertiesToTerraform)(this._vpcConnectionProperties)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    QuicksightDataSource.tfResourceType = "aws_quicksight_data_source";
    return QuicksightDataSource;
}(cdktf.TerraformResource));
exports.QuicksightDataSource = QuicksightDataSource;
