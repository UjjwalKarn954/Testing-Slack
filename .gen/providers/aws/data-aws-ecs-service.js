"use strict";
// https://www.terraform.io/docs/providers/aws/d/ecs_service.html
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
exports.DataAwsEcsService = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ecs_service.html aws_ecs_service}
*/
var DataAwsEcsService = /** @class */ (function (_super) {
    __extends(DataAwsEcsService, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ecs_service.html aws_ecs_service} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEcsServiceConfig
    */
    function DataAwsEcsService(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ecs_service',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._clusterArn = config.clusterArn;
        _this._serviceName = config.serviceName;
        return _this;
    }
    Object.defineProperty(DataAwsEcsService.prototype, "arn", {
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
    Object.defineProperty(DataAwsEcsService.prototype, "clusterArn", {
        get: function () {
            return this.getStringAttribute('cluster_arn');
        },
        set: function (value) {
            this._clusterArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEcsService.prototype, "clusterArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clusterArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEcsService.prototype, "desiredCount", {
        // desired_count - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('desired_count');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEcsService.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEcsService.prototype, "launchType", {
        // launch_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('launch_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEcsService.prototype, "schedulingStrategy", {
        // scheduling_strategy - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('scheduling_strategy');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEcsService.prototype, "serviceName", {
        get: function () {
            return this.getStringAttribute('service_name');
        },
        set: function (value) {
            this._serviceName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEcsService.prototype, "serviceNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serviceName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEcsService.prototype, "taskDefinition", {
        // task_definition - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('task_definition');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsEcsService.prototype.synthesizeAttributes = function () {
        return {
            cluster_arn: cdktf.stringToTerraform(this._clusterArn),
            service_name: cdktf.stringToTerraform(this._serviceName)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsEcsService.tfResourceType = "aws_ecs_service";
    return DataAwsEcsService;
}(cdktf.TerraformDataSource));
exports.DataAwsEcsService = DataAwsEcsService;
