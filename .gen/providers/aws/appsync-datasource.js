"use strict";
// https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html
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
exports.AppsyncDatasource = void 0;
var cdktf = require("cdktf");
function appsyncDatasourceDynamodbConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        region: cdktf.stringToTerraform(struct.region),
        table_name: cdktf.stringToTerraform(struct.tableName),
        use_caller_credentials: cdktf.booleanToTerraform(struct.useCallerCredentials)
    };
}
function appsyncDatasourceElasticsearchConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        endpoint: cdktf.stringToTerraform(struct.endpoint),
        region: cdktf.stringToTerraform(struct.region)
    };
}
function appsyncDatasourceHttpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        endpoint: cdktf.stringToTerraform(struct.endpoint)
    };
}
function appsyncDatasourceLambdaConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        function_arn: cdktf.stringToTerraform(struct.functionArn)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html aws_appsync_datasource}
*/
var AppsyncDatasource = /** @class */ (function (_super) {
    __extends(AppsyncDatasource, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html aws_appsync_datasource} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppsyncDatasourceConfig
    */
    function AppsyncDatasource(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_appsync_datasource',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._apiId = config.apiId;
        _this._description = config.description;
        _this._name = config.name;
        _this._serviceRoleArn = config.serviceRoleArn;
        _this._type = config.type;
        _this._dynamodbConfig = config.dynamodbConfig;
        _this._elasticsearchConfig = config.elasticsearchConfig;
        _this._httpConfig = config.httpConfig;
        _this._lambdaConfig = config.lambdaConfig;
        return _this;
    }
    Object.defineProperty(AppsyncDatasource.prototype, "apiId", {
        get: function () {
            return this.getStringAttribute('api_id');
        },
        set: function (value) {
            this._apiId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncDatasource.prototype, "apiIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._apiId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncDatasource.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncDatasource.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    AppsyncDatasource.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(AppsyncDatasource.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncDatasource.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncDatasource.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncDatasource.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncDatasource.prototype, "serviceRoleArn", {
        get: function () {
            return this.getStringAttribute('service_role_arn');
        },
        set: function (value) {
            this._serviceRoleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    AppsyncDatasource.prototype.resetServiceRoleArn = function () {
        this._serviceRoleArn = undefined;
    };
    Object.defineProperty(AppsyncDatasource.prototype, "serviceRoleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serviceRoleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncDatasource.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncDatasource.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncDatasource.prototype, "dynamodbConfig", {
        get: function () {
            return this.interpolationForAttribute('dynamodb_config');
        },
        set: function (value) {
            this._dynamodbConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    AppsyncDatasource.prototype.resetDynamodbConfig = function () {
        this._dynamodbConfig = undefined;
    };
    Object.defineProperty(AppsyncDatasource.prototype, "dynamodbConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dynamodbConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncDatasource.prototype, "elasticsearchConfig", {
        get: function () {
            return this.interpolationForAttribute('elasticsearch_config');
        },
        set: function (value) {
            this._elasticsearchConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    AppsyncDatasource.prototype.resetElasticsearchConfig = function () {
        this._elasticsearchConfig = undefined;
    };
    Object.defineProperty(AppsyncDatasource.prototype, "elasticsearchConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._elasticsearchConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncDatasource.prototype, "httpConfig", {
        get: function () {
            return this.interpolationForAttribute('http_config');
        },
        set: function (value) {
            this._httpConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    AppsyncDatasource.prototype.resetHttpConfig = function () {
        this._httpConfig = undefined;
    };
    Object.defineProperty(AppsyncDatasource.prototype, "httpConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._httpConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncDatasource.prototype, "lambdaConfig", {
        get: function () {
            return this.interpolationForAttribute('lambda_config');
        },
        set: function (value) {
            this._lambdaConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    AppsyncDatasource.prototype.resetLambdaConfig = function () {
        this._lambdaConfig = undefined;
    };
    Object.defineProperty(AppsyncDatasource.prototype, "lambdaConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._lambdaConfig;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    AppsyncDatasource.prototype.synthesizeAttributes = function () {
        return {
            api_id: cdktf.stringToTerraform(this._apiId),
            description: cdktf.stringToTerraform(this._description),
            name: cdktf.stringToTerraform(this._name),
            service_role_arn: cdktf.stringToTerraform(this._serviceRoleArn),
            type: cdktf.stringToTerraform(this._type),
            dynamodb_config: cdktf.listMapper(appsyncDatasourceDynamodbConfigToTerraform)(this._dynamodbConfig),
            elasticsearch_config: cdktf.listMapper(appsyncDatasourceElasticsearchConfigToTerraform)(this._elasticsearchConfig),
            http_config: cdktf.listMapper(appsyncDatasourceHttpConfigToTerraform)(this._httpConfig),
            lambda_config: cdktf.listMapper(appsyncDatasourceLambdaConfigToTerraform)(this._lambdaConfig)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    AppsyncDatasource.tfResourceType = "aws_appsync_datasource";
    return AppsyncDatasource;
}(cdktf.TerraformResource));
exports.AppsyncDatasource = AppsyncDatasource;
