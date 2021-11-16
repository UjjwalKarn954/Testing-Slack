"use strict";
// https://www.terraform.io/docs/providers/aws/d/batch_job_queue.html
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
exports.DataAwsBatchJobQueue = exports.DataAwsBatchJobQueueComputeEnvironmentOrder = void 0;
var cdktf = require("cdktf");
var DataAwsBatchJobQueueComputeEnvironmentOrder = /** @class */ (function (_super) {
    __extends(DataAwsBatchJobQueueComputeEnvironmentOrder, _super);
    function DataAwsBatchJobQueueComputeEnvironmentOrder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsBatchJobQueueComputeEnvironmentOrder.prototype, "computeEnvironment", {
        // compute_environment - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('compute_environment');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsBatchJobQueueComputeEnvironmentOrder.prototype, "order", {
        // order - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('order');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsBatchJobQueueComputeEnvironmentOrder;
}(cdktf.ComplexComputedList));
exports.DataAwsBatchJobQueueComputeEnvironmentOrder = DataAwsBatchJobQueueComputeEnvironmentOrder;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/batch_job_queue.html aws_batch_job_queue}
*/
var DataAwsBatchJobQueue = /** @class */ (function (_super) {
    __extends(DataAwsBatchJobQueue, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/batch_job_queue.html aws_batch_job_queue} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsBatchJobQueueConfig
    */
    function DataAwsBatchJobQueue(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_batch_job_queue',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        _this._tags = config.tags;
        return _this;
    }
    Object.defineProperty(DataAwsBatchJobQueue.prototype, "arn", {
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
    // compute_environment_order - computed: true, optional: false, required: false
    DataAwsBatchJobQueue.prototype.computeEnvironmentOrder = function (index) {
        return new DataAwsBatchJobQueueComputeEnvironmentOrder(this, 'compute_environment_order', index);
    };
    Object.defineProperty(DataAwsBatchJobQueue.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsBatchJobQueue.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsBatchJobQueue.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsBatchJobQueue.prototype, "priority", {
        // priority - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('priority');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsBatchJobQueue.prototype, "state", {
        // state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsBatchJobQueue.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsBatchJobQueue.prototype, "statusReason", {
        // status_reason - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status_reason');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsBatchJobQueue.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsBatchJobQueue.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsBatchJobQueue.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsBatchJobQueue.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsBatchJobQueue.tfResourceType = "aws_batch_job_queue";
    return DataAwsBatchJobQueue;
}(cdktf.TerraformDataSource));
exports.DataAwsBatchJobQueue = DataAwsBatchJobQueue;
