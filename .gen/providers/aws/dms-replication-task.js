"use strict";
// https://www.terraform.io/docs/providers/aws/r/dms_replication_task.html
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
exports.DmsReplicationTask = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task.html aws_dms_replication_task}
*/
var DmsReplicationTask = /** @class */ (function (_super) {
    __extends(DmsReplicationTask, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_task.html aws_dms_replication_task} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DmsReplicationTaskConfig
    */
    function DmsReplicationTask(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_dms_replication_task',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._cdcStartPosition = config.cdcStartPosition;
        _this._cdcStartTime = config.cdcStartTime;
        _this._migrationType = config.migrationType;
        _this._replicationInstanceArn = config.replicationInstanceArn;
        _this._replicationTaskId = config.replicationTaskId;
        _this._replicationTaskSettings = config.replicationTaskSettings;
        _this._sourceEndpointArn = config.sourceEndpointArn;
        _this._tableMappings = config.tableMappings;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._targetEndpointArn = config.targetEndpointArn;
        return _this;
    }
    Object.defineProperty(DmsReplicationTask.prototype, "cdcStartPosition", {
        get: function () {
            return this.getStringAttribute('cdc_start_position');
        },
        set: function (value) {
            this._cdcStartPosition = value;
        },
        enumerable: false,
        configurable: true
    });
    DmsReplicationTask.prototype.resetCdcStartPosition = function () {
        this._cdcStartPosition = undefined;
    };
    Object.defineProperty(DmsReplicationTask.prototype, "cdcStartPositionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cdcStartPosition;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsReplicationTask.prototype, "cdcStartTime", {
        get: function () {
            return this.getStringAttribute('cdc_start_time');
        },
        set: function (value) {
            this._cdcStartTime = value;
        },
        enumerable: false,
        configurable: true
    });
    DmsReplicationTask.prototype.resetCdcStartTime = function () {
        this._cdcStartTime = undefined;
    };
    Object.defineProperty(DmsReplicationTask.prototype, "cdcStartTimeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cdcStartTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsReplicationTask.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsReplicationTask.prototype, "migrationType", {
        get: function () {
            return this.getStringAttribute('migration_type');
        },
        set: function (value) {
            this._migrationType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsReplicationTask.prototype, "migrationTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._migrationType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsReplicationTask.prototype, "replicationInstanceArn", {
        get: function () {
            return this.getStringAttribute('replication_instance_arn');
        },
        set: function (value) {
            this._replicationInstanceArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsReplicationTask.prototype, "replicationInstanceArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._replicationInstanceArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsReplicationTask.prototype, "replicationTaskArn", {
        // replication_task_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('replication_task_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsReplicationTask.prototype, "replicationTaskId", {
        get: function () {
            return this.getStringAttribute('replication_task_id');
        },
        set: function (value) {
            this._replicationTaskId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsReplicationTask.prototype, "replicationTaskIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._replicationTaskId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsReplicationTask.prototype, "replicationTaskSettings", {
        get: function () {
            return this.getStringAttribute('replication_task_settings');
        },
        set: function (value) {
            this._replicationTaskSettings = value;
        },
        enumerable: false,
        configurable: true
    });
    DmsReplicationTask.prototype.resetReplicationTaskSettings = function () {
        this._replicationTaskSettings = undefined;
    };
    Object.defineProperty(DmsReplicationTask.prototype, "replicationTaskSettingsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._replicationTaskSettings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsReplicationTask.prototype, "sourceEndpointArn", {
        get: function () {
            return this.getStringAttribute('source_endpoint_arn');
        },
        set: function (value) {
            this._sourceEndpointArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsReplicationTask.prototype, "sourceEndpointArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sourceEndpointArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsReplicationTask.prototype, "tableMappings", {
        get: function () {
            return this.getStringAttribute('table_mappings');
        },
        set: function (value) {
            this._tableMappings = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsReplicationTask.prototype, "tableMappingsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tableMappings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsReplicationTask.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DmsReplicationTask.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DmsReplicationTask.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsReplicationTask.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    DmsReplicationTask.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(DmsReplicationTask.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsReplicationTask.prototype, "targetEndpointArn", {
        get: function () {
            return this.getStringAttribute('target_endpoint_arn');
        },
        set: function (value) {
            this._targetEndpointArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsReplicationTask.prototype, "targetEndpointArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetEndpointArn;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DmsReplicationTask.prototype.synthesizeAttributes = function () {
        return {
            cdc_start_position: cdktf.stringToTerraform(this._cdcStartPosition),
            cdc_start_time: cdktf.stringToTerraform(this._cdcStartTime),
            migration_type: cdktf.stringToTerraform(this._migrationType),
            replication_instance_arn: cdktf.stringToTerraform(this._replicationInstanceArn),
            replication_task_id: cdktf.stringToTerraform(this._replicationTaskId),
            replication_task_settings: cdktf.stringToTerraform(this._replicationTaskSettings),
            source_endpoint_arn: cdktf.stringToTerraform(this._sourceEndpointArn),
            table_mappings: cdktf.stringToTerraform(this._tableMappings),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            target_endpoint_arn: cdktf.stringToTerraform(this._targetEndpointArn)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DmsReplicationTask.tfResourceType = "aws_dms_replication_task";
    return DmsReplicationTask;
}(cdktf.TerraformResource));
exports.DmsReplicationTask = DmsReplicationTask;
