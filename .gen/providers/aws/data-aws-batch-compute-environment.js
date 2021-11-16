"use strict";
// https://www.terraform.io/docs/providers/aws/d/batch_compute_environment.html
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
exports.DataAwsBatchComputeEnvironment = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/batch_compute_environment.html aws_batch_compute_environment}
*/
var DataAwsBatchComputeEnvironment = /** @class */ (function (_super) {
    __extends(DataAwsBatchComputeEnvironment, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/batch_compute_environment.html aws_batch_compute_environment} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsBatchComputeEnvironmentConfig
    */
    function DataAwsBatchComputeEnvironment(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_batch_compute_environment',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._computeEnvironmentName = config.computeEnvironmentName;
        _this._tags = config.tags;
        return _this;
    }
    Object.defineProperty(DataAwsBatchComputeEnvironment.prototype, "arn", {
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
    Object.defineProperty(DataAwsBatchComputeEnvironment.prototype, "computeEnvironmentName", {
        get: function () {
            return this.getStringAttribute('compute_environment_name');
        },
        set: function (value) {
            this._computeEnvironmentName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsBatchComputeEnvironment.prototype, "computeEnvironmentNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._computeEnvironmentName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsBatchComputeEnvironment.prototype, "ecsClusterArn", {
        // ecs_cluster_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ecs_cluster_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsBatchComputeEnvironment.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsBatchComputeEnvironment.prototype, "serviceRole", {
        // service_role - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('service_role');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsBatchComputeEnvironment.prototype, "state", {
        // state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsBatchComputeEnvironment.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsBatchComputeEnvironment.prototype, "statusReason", {
        // status_reason - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status_reason');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsBatchComputeEnvironment.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsBatchComputeEnvironment.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsBatchComputeEnvironment.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsBatchComputeEnvironment.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsBatchComputeEnvironment.prototype.synthesizeAttributes = function () {
        return {
            compute_environment_name: cdktf.stringToTerraform(this._computeEnvironmentName),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsBatchComputeEnvironment.tfResourceType = "aws_batch_compute_environment";
    return DataAwsBatchComputeEnvironment;
}(cdktf.TerraformDataSource));
exports.DataAwsBatchComputeEnvironment = DataAwsBatchComputeEnvironment;
