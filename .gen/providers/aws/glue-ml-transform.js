"use strict";
// https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html
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
exports.GlueMlTransform = exports.GlueMlTransformSchema = void 0;
var cdktf = require("cdktf");
var GlueMlTransformSchema = /** @class */ (function (_super) {
    __extends(GlueMlTransformSchema, _super);
    function GlueMlTransformSchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(GlueMlTransformSchema.prototype, "dataType", {
        // data_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('data_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueMlTransformSchema.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return GlueMlTransformSchema;
}(cdktf.ComplexComputedList));
exports.GlueMlTransformSchema = GlueMlTransformSchema;
function glueMlTransformInputRecordTablesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        catalog_id: cdktf.stringToTerraform(struct.catalogId),
        connection_name: cdktf.stringToTerraform(struct.connectionName),
        database_name: cdktf.stringToTerraform(struct.databaseName),
        table_name: cdktf.stringToTerraform(struct.tableName)
    };
}
function glueMlTransformParametersFindMatchesParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        accuracy_cost_trade_off: cdktf.numberToTerraform(struct.accuracyCostTradeOff),
        enforce_provided_labels: cdktf.booleanToTerraform(struct.enforceProvidedLabels),
        precision_recall_trade_off: cdktf.numberToTerraform(struct.precisionRecallTradeOff),
        primary_key_column_name: cdktf.stringToTerraform(struct.primaryKeyColumnName)
    };
}
function glueMlTransformParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        transform_type: cdktf.stringToTerraform(struct.transformType),
        find_matches_parameters: cdktf.listMapper(glueMlTransformParametersFindMatchesParametersToTerraform)(struct.findMatchesParameters)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html aws_glue_ml_transform}
*/
var GlueMlTransform = /** @class */ (function (_super) {
    __extends(GlueMlTransform, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_ml_transform.html aws_glue_ml_transform} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueMlTransformConfig
    */
    function GlueMlTransform(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_glue_ml_transform',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._description = config.description;
        _this._glueVersion = config.glueVersion;
        _this._maxCapacity = config.maxCapacity;
        _this._maxRetries = config.maxRetries;
        _this._name = config.name;
        _this._numberOfWorkers = config.numberOfWorkers;
        _this._roleArn = config.roleArn;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._timeout = config.timeout;
        _this._workerType = config.workerType;
        _this._inputRecordTables = config.inputRecordTables;
        _this._parameters = config.parameters;
        return _this;
    }
    Object.defineProperty(GlueMlTransform.prototype, "arn", {
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
    Object.defineProperty(GlueMlTransform.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueMlTransform.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(GlueMlTransform.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueMlTransform.prototype, "glueVersion", {
        get: function () {
            return this.getStringAttribute('glue_version');
        },
        set: function (value) {
            this._glueVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueMlTransform.prototype.resetGlueVersion = function () {
        this._glueVersion = undefined;
    };
    Object.defineProperty(GlueMlTransform.prototype, "glueVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._glueVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueMlTransform.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueMlTransform.prototype, "labelCount", {
        // label_count - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('label_count');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueMlTransform.prototype, "maxCapacity", {
        get: function () {
            return this.getNumberAttribute('max_capacity');
        },
        set: function (value) {
            this._maxCapacity = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueMlTransform.prototype.resetMaxCapacity = function () {
        this._maxCapacity = undefined;
    };
    Object.defineProperty(GlueMlTransform.prototype, "maxCapacityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxCapacity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueMlTransform.prototype, "maxRetries", {
        get: function () {
            return this.getNumberAttribute('max_retries');
        },
        set: function (value) {
            this._maxRetries = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueMlTransform.prototype.resetMaxRetries = function () {
        this._maxRetries = undefined;
    };
    Object.defineProperty(GlueMlTransform.prototype, "maxRetriesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxRetries;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueMlTransform.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueMlTransform.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueMlTransform.prototype, "numberOfWorkers", {
        get: function () {
            return this.getNumberAttribute('number_of_workers');
        },
        set: function (value) {
            this._numberOfWorkers = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueMlTransform.prototype.resetNumberOfWorkers = function () {
        this._numberOfWorkers = undefined;
    };
    Object.defineProperty(GlueMlTransform.prototype, "numberOfWorkersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._numberOfWorkers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueMlTransform.prototype, "roleArn", {
        get: function () {
            return this.getStringAttribute('role_arn');
        },
        set: function (value) {
            this._roleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueMlTransform.prototype, "roleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._roleArn;
        },
        enumerable: false,
        configurable: true
    });
    // schema - computed: true, optional: false, required: false
    GlueMlTransform.prototype.schema = function (index) {
        return new GlueMlTransformSchema(this, 'schema', index);
    };
    Object.defineProperty(GlueMlTransform.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueMlTransform.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(GlueMlTransform.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueMlTransform.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueMlTransform.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(GlueMlTransform.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueMlTransform.prototype, "timeout", {
        get: function () {
            return this.getNumberAttribute('timeout');
        },
        set: function (value) {
            this._timeout = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueMlTransform.prototype.resetTimeout = function () {
        this._timeout = undefined;
    };
    Object.defineProperty(GlueMlTransform.prototype, "timeoutInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeout;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueMlTransform.prototype, "workerType", {
        get: function () {
            return this.getStringAttribute('worker_type');
        },
        set: function (value) {
            this._workerType = value;
        },
        enumerable: false,
        configurable: true
    });
    GlueMlTransform.prototype.resetWorkerType = function () {
        this._workerType = undefined;
    };
    Object.defineProperty(GlueMlTransform.prototype, "workerTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._workerType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueMlTransform.prototype, "inputRecordTables", {
        get: function () {
            return this.interpolationForAttribute('input_record_tables');
        },
        set: function (value) {
            this._inputRecordTables = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueMlTransform.prototype, "inputRecordTablesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._inputRecordTables;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueMlTransform.prototype, "parameters", {
        get: function () {
            return this.interpolationForAttribute('parameters');
        },
        set: function (value) {
            this._parameters = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlueMlTransform.prototype, "parametersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._parameters;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    GlueMlTransform.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            glue_version: cdktf.stringToTerraform(this._glueVersion),
            max_capacity: cdktf.numberToTerraform(this._maxCapacity),
            max_retries: cdktf.numberToTerraform(this._maxRetries),
            name: cdktf.stringToTerraform(this._name),
            number_of_workers: cdktf.numberToTerraform(this._numberOfWorkers),
            role_arn: cdktf.stringToTerraform(this._roleArn),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            timeout: cdktf.numberToTerraform(this._timeout),
            worker_type: cdktf.stringToTerraform(this._workerType),
            input_record_tables: cdktf.listMapper(glueMlTransformInputRecordTablesToTerraform)(this._inputRecordTables),
            parameters: cdktf.listMapper(glueMlTransformParametersToTerraform)(this._parameters)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    GlueMlTransform.tfResourceType = "aws_glue_ml_transform";
    return GlueMlTransform;
}(cdktf.TerraformResource));
exports.GlueMlTransform = GlueMlTransform;
