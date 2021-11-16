"use strict";
// https://www.terraform.io/docs/providers/aws/r/glue_crawler.html
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
exports.GlueCrawler = void 0;
var cdktf = require("cdktf");
function glueCrawlerCatalogTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        database_name: cdktf.stringToTerraform(struct.databaseName),
        tables: cdktf.listMapper(cdktf.stringToTerraform)(struct.tables)
    };
}
function glueCrawlerDynamodbTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        path: cdktf.stringToTerraform(struct.path),
        scan_all: cdktf.booleanToTerraform(struct.scanAll),
        scan_rate: cdktf.numberToTerraform(struct.scanRate)
    };
}
function glueCrawlerJdbcTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        connection_name: cdktf.stringToTerraform(struct.connectionName),
        exclusions: cdktf.listMapper(cdktf.stringToTerraform)(struct.exclusions),
        path: cdktf.stringToTerraform(struct.path)
    };
}
function glueCrawlerLineageConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        crawler_lineage_settings: cdktf.stringToTerraform(struct.crawlerLineageSettings)
    };
}
function glueCrawlerMongodbTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        connection_name: cdktf.stringToTerraform(struct.connectionName),
        path: cdktf.stringToTerraform(struct.path),
        scan_all: cdktf.booleanToTerraform(struct.scanAll)
    };
}
function glueCrawlerRecrawlPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        recrawl_behavior: cdktf.stringToTerraform(struct.recrawlBehavior)
    };
}
function glueCrawlerS3TargetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        connection_name: cdktf.stringToTerraform(struct.connectionName),
        dlq_event_queue_arn: cdktf.stringToTerraform(struct.dlqEventQueueArn),
        event_queue_arn: cdktf.stringToTerraform(struct.eventQueueArn),
        exclusions: cdktf.listMapper(cdktf.stringToTerraform)(struct.exclusions),
        path: cdktf.stringToTerraform(struct.path),
        sample_size: cdktf.numberToTerraform(struct.sampleSize)
    };
}
function glueCrawlerSchemaChangePolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        delete_behavior: cdktf.stringToTerraform(struct.deleteBehavior),
        update_behavior: cdktf.stringToTerraform(struct.updateBehavior)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html aws_glue_crawler}
*/
var GlueCrawler = /** @class */ (function (_super) {
    __extends(GlueCrawler, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler.html aws_glue_crawler} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueCrawlerConfig
    */
    function GlueCrawler(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_glue_crawler',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._classifiers = config.classifiers;
        _this._configuration = config.configuration;
        _this._databaseName = config.databaseName;
        _this._description = config.description;
        _this._name = config.name;
        _this._role = config.role;
        _this._schedule = config.schedule;
        _this._securityConfiguration = config.securityConfiguration;
        _this._tablePrefix = config.tablePrefix;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._catalogTarget = config.catalogTarget;
        _this._dynamodbTarget = config.dynamodbTarget;
        _this._jdbcTarget = config.jdbcTarget;
        _this._lineageConfiguration = config.lineageConfiguration;
        _this._mongodbTarget = config.mongodbTarget;
        _this._recrawlPolicy = config.recrawlPolicy;
        _this._s3Target = config.s3Target;
        _this._schemaChangePolicy = config.schemaChangePolicy;
        return _this;
    }
    Object.defineProperty(GlueCrawler.prototype, "arn", {
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
    Object.defineProperty(GlueCrawler.prototype, "classifiers", {
        get: function () {
            return this.getListAttribute('classifiers');
        },
        set: function (value) {
            this._classifiers = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueCrawler.prototype.resetClassifiers = function () {
        this._classifiers = undefined;
    };
    Object.defineProperty(GlueCrawler.prototype, "classifiersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._classifiers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueCrawler.prototype, "configuration", {
        get: function () {
            return this.getStringAttribute('configuration');
        },
        set: function (value) {
            this._configuration = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueCrawler.prototype.resetConfiguration = function () {
        this._configuration = undefined;
    };
    Object.defineProperty(GlueCrawler.prototype, "configurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._configuration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueCrawler.prototype, "databaseName", {
        get: function () {
            return this.getStringAttribute('database_name');
        },
        set: function (value) {
            this._databaseName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueCrawler.prototype, "databaseNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._databaseName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueCrawler.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueCrawler.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(GlueCrawler.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueCrawler.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueCrawler.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueCrawler.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueCrawler.prototype, "role", {
        get: function () {
            return this.getStringAttribute('role');
        },
        set: function (value) {
            this._role = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueCrawler.prototype, "roleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._role;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueCrawler.prototype, "schedule", {
        get: function () {
            return this.getStringAttribute('schedule');
        },
        set: function (value) {
            this._schedule = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueCrawler.prototype.resetSchedule = function () {
        this._schedule = undefined;
    };
    Object.defineProperty(GlueCrawler.prototype, "scheduleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._schedule;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueCrawler.prototype, "securityConfiguration", {
        get: function () {
            return this.getStringAttribute('security_configuration');
        },
        set: function (value) {
            this._securityConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueCrawler.prototype.resetSecurityConfiguration = function () {
        this._securityConfiguration = undefined;
    };
    Object.defineProperty(GlueCrawler.prototype, "securityConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._securityConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueCrawler.prototype, "tablePrefix", {
        get: function () {
            return this.getStringAttribute('table_prefix');
        },
        set: function (value) {
            this._tablePrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueCrawler.prototype.resetTablePrefix = function () {
        this._tablePrefix = undefined;
    };
    Object.defineProperty(GlueCrawler.prototype, "tablePrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tablePrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueCrawler.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueCrawler.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(GlueCrawler.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueCrawler.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueCrawler.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(GlueCrawler.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueCrawler.prototype, "catalogTarget", {
        get: function () {
            return this.interpolationForAttribute('catalog_target');
        },
        set: function (value) {
            this._catalogTarget = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueCrawler.prototype.resetCatalogTarget = function () {
        this._catalogTarget = undefined;
    };
    Object.defineProperty(GlueCrawler.prototype, "catalogTargetInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._catalogTarget;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueCrawler.prototype, "dynamodbTarget", {
        get: function () {
            return this.interpolationForAttribute('dynamodb_target');
        },
        set: function (value) {
            this._dynamodbTarget = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueCrawler.prototype.resetDynamodbTarget = function () {
        this._dynamodbTarget = undefined;
    };
    Object.defineProperty(GlueCrawler.prototype, "dynamodbTargetInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dynamodbTarget;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueCrawler.prototype, "jdbcTarget", {
        get: function () {
            return this.interpolationForAttribute('jdbc_target');
        },
        set: function (value) {
            this._jdbcTarget = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueCrawler.prototype.resetJdbcTarget = function () {
        this._jdbcTarget = undefined;
    };
    Object.defineProperty(GlueCrawler.prototype, "jdbcTargetInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._jdbcTarget;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueCrawler.prototype, "lineageConfiguration", {
        get: function () {
            return this.interpolationForAttribute('lineage_configuration');
        },
        set: function (value) {
            this._lineageConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueCrawler.prototype.resetLineageConfiguration = function () {
        this._lineageConfiguration = undefined;
    };
    Object.defineProperty(GlueCrawler.prototype, "lineageConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._lineageConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueCrawler.prototype, "mongodbTarget", {
        get: function () {
            return this.interpolationForAttribute('mongodb_target');
        },
        set: function (value) {
            this._mongodbTarget = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueCrawler.prototype.resetMongodbTarget = function () {
        this._mongodbTarget = undefined;
    };
    Object.defineProperty(GlueCrawler.prototype, "mongodbTargetInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mongodbTarget;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueCrawler.prototype, "recrawlPolicy", {
        get: function () {
            return this.interpolationForAttribute('recrawl_policy');
        },
        set: function (value) {
            this._recrawlPolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueCrawler.prototype.resetRecrawlPolicy = function () {
        this._recrawlPolicy = undefined;
    };
    Object.defineProperty(GlueCrawler.prototype, "recrawlPolicyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._recrawlPolicy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueCrawler.prototype, "s3Target", {
        get: function () {
            return this.interpolationForAttribute('s3_target');
        },
        set: function (value) {
            this._s3Target = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueCrawler.prototype.resetS3Target = function () {
        this._s3Target = undefined;
    };
    Object.defineProperty(GlueCrawler.prototype, "s3TargetInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._s3Target;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueCrawler.prototype, "schemaChangePolicy", {
        get: function () {
            return this.interpolationForAttribute('schema_change_policy');
        },
        set: function (value) {
            this._schemaChangePolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueCrawler.prototype.resetSchemaChangePolicy = function () {
        this._schemaChangePolicy = undefined;
    };
    Object.defineProperty(GlueCrawler.prototype, "schemaChangePolicyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._schemaChangePolicy;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    GlueCrawler.prototype.synthesizeAttributes = function () {
        return {
            classifiers: cdktf.listMapper(cdktf.stringToTerraform)(this._classifiers),
            configuration: cdktf.stringToTerraform(this._configuration),
            database_name: cdktf.stringToTerraform(this._databaseName),
            description: cdktf.stringToTerraform(this._description),
            name: cdktf.stringToTerraform(this._name),
            role: cdktf.stringToTerraform(this._role),
            schedule: cdktf.stringToTerraform(this._schedule),
            security_configuration: cdktf.stringToTerraform(this._securityConfiguration),
            table_prefix: cdktf.stringToTerraform(this._tablePrefix),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            catalog_target: cdktf.listMapper(glueCrawlerCatalogTargetToTerraform)(this._catalogTarget),
            dynamodb_target: cdktf.listMapper(glueCrawlerDynamodbTargetToTerraform)(this._dynamodbTarget),
            jdbc_target: cdktf.listMapper(glueCrawlerJdbcTargetToTerraform)(this._jdbcTarget),
            lineage_configuration: cdktf.listMapper(glueCrawlerLineageConfigurationToTerraform)(this._lineageConfiguration),
            mongodb_target: cdktf.listMapper(glueCrawlerMongodbTargetToTerraform)(this._mongodbTarget),
            recrawl_policy: cdktf.listMapper(glueCrawlerRecrawlPolicyToTerraform)(this._recrawlPolicy),
            s3_target: cdktf.listMapper(glueCrawlerS3TargetToTerraform)(this._s3Target),
            schema_change_policy: cdktf.listMapper(glueCrawlerSchemaChangePolicyToTerraform)(this._schemaChangePolicy)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    GlueCrawler.tfResourceType = "aws_glue_crawler";
    return GlueCrawler;
}(cdktf.TerraformResource));
exports.GlueCrawler = GlueCrawler;
