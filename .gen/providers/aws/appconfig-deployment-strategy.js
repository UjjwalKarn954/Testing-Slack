"use strict";
// https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy.html
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
exports.AppconfigDeploymentStrategy = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy.html aws_appconfig_deployment_strategy}
*/
var AppconfigDeploymentStrategy = /** @class */ (function (_super) {
    __extends(AppconfigDeploymentStrategy, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy.html aws_appconfig_deployment_strategy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppconfigDeploymentStrategyConfig
    */
    function AppconfigDeploymentStrategy(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_appconfig_deployment_strategy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._deploymentDurationInMinutes = config.deploymentDurationInMinutes;
        _this._description = config.description;
        _this._finalBakeTimeInMinutes = config.finalBakeTimeInMinutes;
        _this._growthFactor = config.growthFactor;
        _this._growthType = config.growthType;
        _this._name = config.name;
        _this._replicateTo = config.replicateTo;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(AppconfigDeploymentStrategy.prototype, "arn", {
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
    Object.defineProperty(AppconfigDeploymentStrategy.prototype, "deploymentDurationInMinutes", {
        get: function () {
            return this.getNumberAttribute('deployment_duration_in_minutes');
        },
        set: function (value) {
            this._deploymentDurationInMinutes = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigDeploymentStrategy.prototype, "deploymentDurationInMinutesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deploymentDurationInMinutes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigDeploymentStrategy.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    AppconfigDeploymentStrategy.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(AppconfigDeploymentStrategy.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigDeploymentStrategy.prototype, "finalBakeTimeInMinutes", {
        get: function () {
            return this.getNumberAttribute('final_bake_time_in_minutes');
        },
        set: function (value) {
            this._finalBakeTimeInMinutes = value;
        },
        enumerable: false,
        configurable: true
    });
    AppconfigDeploymentStrategy.prototype.resetFinalBakeTimeInMinutes = function () {
        this._finalBakeTimeInMinutes = undefined;
    };
    Object.defineProperty(AppconfigDeploymentStrategy.prototype, "finalBakeTimeInMinutesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._finalBakeTimeInMinutes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigDeploymentStrategy.prototype, "growthFactor", {
        get: function () {
            return this.getNumberAttribute('growth_factor');
        },
        set: function (value) {
            this._growthFactor = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigDeploymentStrategy.prototype, "growthFactorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._growthFactor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigDeploymentStrategy.prototype, "growthType", {
        get: function () {
            return this.getStringAttribute('growth_type');
        },
        set: function (value) {
            this._growthType = value;
        },
        enumerable: false,
        configurable: true
    });
    AppconfigDeploymentStrategy.prototype.resetGrowthType = function () {
        this._growthType = undefined;
    };
    Object.defineProperty(AppconfigDeploymentStrategy.prototype, "growthTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._growthType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigDeploymentStrategy.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigDeploymentStrategy.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigDeploymentStrategy.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigDeploymentStrategy.prototype, "replicateTo", {
        get: function () {
            return this.getStringAttribute('replicate_to');
        },
        set: function (value) {
            this._replicateTo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigDeploymentStrategy.prototype, "replicateToInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._replicateTo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigDeploymentStrategy.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    AppconfigDeploymentStrategy.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(AppconfigDeploymentStrategy.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppconfigDeploymentStrategy.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    AppconfigDeploymentStrategy.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(AppconfigDeploymentStrategy.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    AppconfigDeploymentStrategy.prototype.synthesizeAttributes = function () {
        return {
            deployment_duration_in_minutes: cdktf.numberToTerraform(this._deploymentDurationInMinutes),
            description: cdktf.stringToTerraform(this._description),
            final_bake_time_in_minutes: cdktf.numberToTerraform(this._finalBakeTimeInMinutes),
            growth_factor: cdktf.numberToTerraform(this._growthFactor),
            growth_type: cdktf.stringToTerraform(this._growthType),
            name: cdktf.stringToTerraform(this._name),
            replicate_to: cdktf.stringToTerraform(this._replicateTo),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    AppconfigDeploymentStrategy.tfResourceType = "aws_appconfig_deployment_strategy";
    return AppconfigDeploymentStrategy;
}(cdktf.TerraformResource));
exports.AppconfigDeploymentStrategy = AppconfigDeploymentStrategy;
