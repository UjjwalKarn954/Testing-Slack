"use strict";
// https://www.terraform.io/docs/providers/aws/d/ecs_task_definition.html
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
exports.DataAwsEcsTaskDefinition = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ecs_task_definition.html aws_ecs_task_definition}
*/
var DataAwsEcsTaskDefinition = /** @class */ (function (_super) {
    __extends(DataAwsEcsTaskDefinition, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ecs_task_definition.html aws_ecs_task_definition} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEcsTaskDefinitionConfig
    */
    function DataAwsEcsTaskDefinition(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ecs_task_definition',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._taskDefinition = config.taskDefinition;
        return _this;
    }
    Object.defineProperty(DataAwsEcsTaskDefinition.prototype, "family", {
        // ==========
        // ATTRIBUTES
        // ==========
        // family - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('family');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEcsTaskDefinition.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEcsTaskDefinition.prototype, "networkMode", {
        // network_mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('network_mode');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEcsTaskDefinition.prototype, "revision", {
        // revision - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('revision');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEcsTaskDefinition.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEcsTaskDefinition.prototype, "taskDefinition", {
        get: function () {
            return this.getStringAttribute('task_definition');
        },
        set: function (value) {
            this._taskDefinition = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEcsTaskDefinition.prototype, "taskDefinitionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._taskDefinition;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEcsTaskDefinition.prototype, "taskRoleArn", {
        // task_role_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('task_role_arn');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsEcsTaskDefinition.prototype.synthesizeAttributes = function () {
        return {
            task_definition: cdktf.stringToTerraform(this._taskDefinition)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsEcsTaskDefinition.tfResourceType = "aws_ecs_task_definition";
    return DataAwsEcsTaskDefinition;
}(cdktf.TerraformDataSource));
exports.DataAwsEcsTaskDefinition = DataAwsEcsTaskDefinition;
