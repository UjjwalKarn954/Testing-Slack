"use strict";
// https://www.terraform.io/docs/providers/aws/d/ecs_cluster.html
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
exports.DataAwsEcsCluster = exports.DataAwsEcsClusterSetting = void 0;
var cdktf = require("cdktf");
var DataAwsEcsClusterSetting = /** @class */ (function (_super) {
    __extends(DataAwsEcsClusterSetting, _super);
    function DataAwsEcsClusterSetting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsEcsClusterSetting.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEcsClusterSetting.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsEcsClusterSetting;
}(cdktf.ComplexComputedList));
exports.DataAwsEcsClusterSetting = DataAwsEcsClusterSetting;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ecs_cluster.html aws_ecs_cluster}
*/
var DataAwsEcsCluster = /** @class */ (function (_super) {
    __extends(DataAwsEcsCluster, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ecs_cluster.html aws_ecs_cluster} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEcsClusterConfig
    */
    function DataAwsEcsCluster(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ecs_cluster',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._clusterName = config.clusterName;
        return _this;
    }
    Object.defineProperty(DataAwsEcsCluster.prototype, "arn", {
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
    Object.defineProperty(DataAwsEcsCluster.prototype, "clusterName", {
        get: function () {
            return this.getStringAttribute('cluster_name');
        },
        set: function (value) {
            this._clusterName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEcsCluster.prototype, "clusterNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clusterName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEcsCluster.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEcsCluster.prototype, "pendingTasksCount", {
        // pending_tasks_count - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('pending_tasks_count');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEcsCluster.prototype, "registeredContainerInstancesCount", {
        // registered_container_instances_count - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('registered_container_instances_count');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEcsCluster.prototype, "runningTasksCount", {
        // running_tasks_count - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('running_tasks_count');
        },
        enumerable: false,
        configurable: true
    });
    // setting - computed: true, optional: false, required: false
    DataAwsEcsCluster.prototype.setting = function (index) {
        return new DataAwsEcsClusterSetting(this, 'setting', index);
    };
    Object.defineProperty(DataAwsEcsCluster.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsEcsCluster.prototype.synthesizeAttributes = function () {
        return {
            cluster_name: cdktf.stringToTerraform(this._clusterName)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsEcsCluster.tfResourceType = "aws_ecs_cluster";
    return DataAwsEcsCluster;
}(cdktf.TerraformDataSource));
exports.DataAwsEcsCluster = DataAwsEcsCluster;
