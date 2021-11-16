"use strict";
// https://www.terraform.io/docs/providers/aws/r/sfn_state_machine.html
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
exports.SfnStateMachine = void 0;
var cdktf = require("cdktf");
function sfnStateMachineLoggingConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        include_execution_data: cdktf.booleanToTerraform(struct.includeExecutionData),
        level: cdktf.stringToTerraform(struct.level),
        log_destination: cdktf.stringToTerraform(struct.logDestination)
    };
}
function sfnStateMachineTracingConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine.html aws_sfn_state_machine}
*/
var SfnStateMachine = /** @class */ (function (_super) {
    __extends(SfnStateMachine, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine.html aws_sfn_state_machine} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SfnStateMachineConfig
    */
    function SfnStateMachine(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_sfn_state_machine',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._definition = config.definition;
        _this._name = config.name;
        _this._roleArn = config.roleArn;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._type = config.type;
        _this._loggingConfiguration = config.loggingConfiguration;
        _this._tracingConfiguration = config.tracingConfiguration;
        return _this;
    }
    Object.defineProperty(SfnStateMachine.prototype, "arn", {
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
    Object.defineProperty(SfnStateMachine.prototype, "creationDate", {
        // creation_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('creation_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SfnStateMachine.prototype, "definition", {
        get: function () {
            return this.getStringAttribute('definition');
        },
        set: function (value) {
            this._definition = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SfnStateMachine.prototype, "definitionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._definition;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SfnStateMachine.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SfnStateMachine.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SfnStateMachine.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SfnStateMachine.prototype, "roleArn", {
        get: function () {
            return this.getStringAttribute('role_arn');
        },
        set: function (value) {
            this._roleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SfnStateMachine.prototype, "roleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._roleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SfnStateMachine.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SfnStateMachine.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    SfnStateMachine.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(SfnStateMachine.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SfnStateMachine.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    SfnStateMachine.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(SfnStateMachine.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SfnStateMachine.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    SfnStateMachine.prototype.resetType = function () {
        this._type = undefined;
    };
    Object.defineProperty(SfnStateMachine.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SfnStateMachine.prototype, "loggingConfiguration", {
        get: function () {
            return this.interpolationForAttribute('logging_configuration');
        },
        set: function (value) {
            this._loggingConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    SfnStateMachine.prototype.resetLoggingConfiguration = function () {
        this._loggingConfiguration = undefined;
    };
    Object.defineProperty(SfnStateMachine.prototype, "loggingConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._loggingConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SfnStateMachine.prototype, "tracingConfiguration", {
        get: function () {
            return this.interpolationForAttribute('tracing_configuration');
        },
        set: function (value) {
            this._tracingConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    SfnStateMachine.prototype.resetTracingConfiguration = function () {
        this._tracingConfiguration = undefined;
    };
    Object.defineProperty(SfnStateMachine.prototype, "tracingConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tracingConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SfnStateMachine.prototype.synthesizeAttributes = function () {
        return {
            definition: cdktf.stringToTerraform(this._definition),
            name: cdktf.stringToTerraform(this._name),
            role_arn: cdktf.stringToTerraform(this._roleArn),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            type: cdktf.stringToTerraform(this._type),
            logging_configuration: cdktf.listMapper(sfnStateMachineLoggingConfigurationToTerraform)(this._loggingConfiguration),
            tracing_configuration: cdktf.listMapper(sfnStateMachineTracingConfigurationToTerraform)(this._tracingConfiguration)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SfnStateMachine.tfResourceType = "aws_sfn_state_machine";
    return SfnStateMachine;
}(cdktf.TerraformResource));
exports.SfnStateMachine = SfnStateMachine;
