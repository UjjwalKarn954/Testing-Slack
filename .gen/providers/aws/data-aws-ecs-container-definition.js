"use strict";
// https://www.terraform.io/docs/providers/aws/d/ecs_container_definition.html
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
exports.DataAwsEcsContainerDefinition = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ecs_container_definition.html aws_ecs_container_definition}
*/
var DataAwsEcsContainerDefinition = /** @class */ (function (_super) {
    __extends(DataAwsEcsContainerDefinition, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ecs_container_definition.html aws_ecs_container_definition} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEcsContainerDefinitionConfig
    */
    function DataAwsEcsContainerDefinition(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ecs_container_definition',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._containerName = config.containerName;
        _this._taskDefinition = config.taskDefinition;
        return _this;
    }
    Object.defineProperty(DataAwsEcsContainerDefinition.prototype, "containerName", {
        get: function () {
            return this.getStringAttribute('container_name');
        },
        set: function (value) {
            this._containerName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEcsContainerDefinition.prototype, "containerNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._containerName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEcsContainerDefinition.prototype, "cpu", {
        // cpu - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('cpu');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEcsContainerDefinition.prototype, "disableNetworking", {
        // disable_networking - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('disable_networking');
        },
        enumerable: false,
        configurable: true
    });
    // docker_labels - computed: true, optional: false, required: false
    DataAwsEcsContainerDefinition.prototype.dockerLabels = function (key) {
        return new cdktf.StringMap(this, 'docker_labels').lookup(key);
    };
    // environment - computed: true, optional: false, required: false
    DataAwsEcsContainerDefinition.prototype.environment = function (key) {
        return new cdktf.StringMap(this, 'environment').lookup(key);
    };
    Object.defineProperty(DataAwsEcsContainerDefinition.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEcsContainerDefinition.prototype, "image", {
        // image - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('image');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEcsContainerDefinition.prototype, "imageDigest", {
        // image_digest - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('image_digest');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEcsContainerDefinition.prototype, "memory", {
        // memory - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('memory');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEcsContainerDefinition.prototype, "memoryReservation", {
        // memory_reservation - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('memory_reservation');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEcsContainerDefinition.prototype, "taskDefinition", {
        get: function () {
            return this.getStringAttribute('task_definition');
        },
        set: function (value) {
            this._taskDefinition = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEcsContainerDefinition.prototype, "taskDefinitionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._taskDefinition;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsEcsContainerDefinition.prototype.synthesizeAttributes = function () {
        return {
            container_name: cdktf.stringToTerraform(this._containerName),
            task_definition: cdktf.stringToTerraform(this._taskDefinition)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsEcsContainerDefinition.tfResourceType = "aws_ecs_container_definition";
    return DataAwsEcsContainerDefinition;
}(cdktf.TerraformDataSource));
exports.DataAwsEcsContainerDefinition = DataAwsEcsContainerDefinition;
