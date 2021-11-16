"use strict";
// https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html
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
exports.SagemakerFlowDefinition = void 0;
var cdktf = require("cdktf");
function sagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        human_loop_activation_conditions: cdktf.stringToTerraform(struct.humanLoopActivationConditions)
    };
}
function sagemakerFlowDefinitionHumanLoopActivationConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        human_loop_activation_conditions_config: cdktf.listMapper(sagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigToTerraform)(struct.humanLoopActivationConditionsConfig)
    };
}
function sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cents: cdktf.numberToTerraform(struct.cents),
        dollars: cdktf.numberToTerraform(struct.dollars),
        tenth_fractions_of_a_cent: cdktf.numberToTerraform(struct.tenthFractionsOfACent)
    };
}
function sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        amount_in_usd: cdktf.listMapper(sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdToTerraform)(struct.amountInUsd)
    };
}
function sagemakerFlowDefinitionHumanLoopConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        human_task_ui_arn: cdktf.stringToTerraform(struct.humanTaskUiArn),
        task_availability_lifetime_in_seconds: cdktf.numberToTerraform(struct.taskAvailabilityLifetimeInSeconds),
        task_count: cdktf.numberToTerraform(struct.taskCount),
        task_description: cdktf.stringToTerraform(struct.taskDescription),
        task_keywords: cdktf.listMapper(cdktf.stringToTerraform)(struct.taskKeywords),
        task_time_limit_in_seconds: cdktf.numberToTerraform(struct.taskTimeLimitInSeconds),
        task_title: cdktf.stringToTerraform(struct.taskTitle),
        workteam_arn: cdktf.stringToTerraform(struct.workteamArn),
        public_workforce_task_price: cdktf.listMapper(sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceToTerraform)(struct.publicWorkforceTaskPrice)
    };
}
function sagemakerFlowDefinitionHumanLoopRequestSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        aws_managed_human_loop_request_source: cdktf.stringToTerraform(struct.awsManagedHumanLoopRequestSource)
    };
}
function sagemakerFlowDefinitionOutputConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        kms_key_id: cdktf.stringToTerraform(struct.kmsKeyId),
        s3_output_path: cdktf.stringToTerraform(struct.s3OutputPath)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html aws_sagemaker_flow_definition}
*/
var SagemakerFlowDefinition = /** @class */ (function (_super) {
    __extends(SagemakerFlowDefinition, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html aws_sagemaker_flow_definition} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerFlowDefinitionConfig
    */
    function SagemakerFlowDefinition(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_sagemaker_flow_definition',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._flowDefinitionName = config.flowDefinitionName;
        _this._roleArn = config.roleArn;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._humanLoopActivationConfig = config.humanLoopActivationConfig;
        _this._humanLoopConfig = config.humanLoopConfig;
        _this._humanLoopRequestSource = config.humanLoopRequestSource;
        _this._outputConfig = config.outputConfig;
        return _this;
    }
    Object.defineProperty(SagemakerFlowDefinition.prototype, "arn", {
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
    Object.defineProperty(SagemakerFlowDefinition.prototype, "flowDefinitionName", {
        get: function () {
            return this.getStringAttribute('flow_definition_name');
        },
        set: function (value) {
            this._flowDefinitionName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerFlowDefinition.prototype, "flowDefinitionNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._flowDefinitionName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerFlowDefinition.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerFlowDefinition.prototype, "roleArn", {
        get: function () {
            return this.getStringAttribute('role_arn');
        },
        set: function (value) {
            this._roleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerFlowDefinition.prototype, "roleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._roleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerFlowDefinition.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerFlowDefinition.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(SagemakerFlowDefinition.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerFlowDefinition.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerFlowDefinition.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(SagemakerFlowDefinition.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerFlowDefinition.prototype, "humanLoopActivationConfig", {
        get: function () {
            return this.interpolationForAttribute('human_loop_activation_config');
        },
        set: function (value) {
            this._humanLoopActivationConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerFlowDefinition.prototype.resetHumanLoopActivationConfig = function () {
        this._humanLoopActivationConfig = undefined;
    };
    Object.defineProperty(SagemakerFlowDefinition.prototype, "humanLoopActivationConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._humanLoopActivationConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerFlowDefinition.prototype, "humanLoopConfig", {
        get: function () {
            return this.interpolationForAttribute('human_loop_config');
        },
        set: function (value) {
            this._humanLoopConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerFlowDefinition.prototype, "humanLoopConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._humanLoopConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerFlowDefinition.prototype, "humanLoopRequestSource", {
        get: function () {
            return this.interpolationForAttribute('human_loop_request_source');
        },
        set: function (value) {
            this._humanLoopRequestSource = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerFlowDefinition.prototype.resetHumanLoopRequestSource = function () {
        this._humanLoopRequestSource = undefined;
    };
    Object.defineProperty(SagemakerFlowDefinition.prototype, "humanLoopRequestSourceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._humanLoopRequestSource;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerFlowDefinition.prototype, "outputConfig", {
        get: function () {
            return this.interpolationForAttribute('output_config');
        },
        set: function (value) {
            this._outputConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerFlowDefinition.prototype, "outputConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._outputConfig;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SagemakerFlowDefinition.prototype.synthesizeAttributes = function () {
        return {
            flow_definition_name: cdktf.stringToTerraform(this._flowDefinitionName),
            role_arn: cdktf.stringToTerraform(this._roleArn),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            human_loop_activation_config: cdktf.listMapper(sagemakerFlowDefinitionHumanLoopActivationConfigToTerraform)(this._humanLoopActivationConfig),
            human_loop_config: cdktf.listMapper(sagemakerFlowDefinitionHumanLoopConfigToTerraform)(this._humanLoopConfig),
            human_loop_request_source: cdktf.listMapper(sagemakerFlowDefinitionHumanLoopRequestSourceToTerraform)(this._humanLoopRequestSource),
            output_config: cdktf.listMapper(sagemakerFlowDefinitionOutputConfigToTerraform)(this._outputConfig)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SagemakerFlowDefinition.tfResourceType = "aws_sagemaker_flow_definition";
    return SagemakerFlowDefinition;
}(cdktf.TerraformResource));
exports.SagemakerFlowDefinition = SagemakerFlowDefinition;
