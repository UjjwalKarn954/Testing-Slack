"use strict";
// https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version.html
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
exports.ApprunnerAutoScalingConfigurationVersion = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version.html aws_apprunner_auto_scaling_configuration_version}
*/
var ApprunnerAutoScalingConfigurationVersion = /** @class */ (function (_super) {
    __extends(ApprunnerAutoScalingConfigurationVersion, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version.html aws_apprunner_auto_scaling_configuration_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApprunnerAutoScalingConfigurationVersionConfig
    */
    function ApprunnerAutoScalingConfigurationVersion(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_apprunner_auto_scaling_configuration_version',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._autoScalingConfigurationName = config.autoScalingConfigurationName;
        _this._maxConcurrency = config.maxConcurrency;
        _this._maxSize = config.maxSize;
        _this._minSize = config.minSize;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(ApprunnerAutoScalingConfigurationVersion.prototype, "arn", {
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
    Object.defineProperty(ApprunnerAutoScalingConfigurationVersion.prototype, "autoScalingConfigurationName", {
        get: function () {
            return this.getStringAttribute('auto_scaling_configuration_name');
        },
        set: function (value) {
            this._autoScalingConfigurationName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApprunnerAutoScalingConfigurationVersion.prototype, "autoScalingConfigurationNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoScalingConfigurationName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApprunnerAutoScalingConfigurationVersion.prototype, "autoScalingConfigurationRevision", {
        // auto_scaling_configuration_revision - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('auto_scaling_configuration_revision');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApprunnerAutoScalingConfigurationVersion.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApprunnerAutoScalingConfigurationVersion.prototype, "latest", {
        // latest - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('latest');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApprunnerAutoScalingConfigurationVersion.prototype, "maxConcurrency", {
        get: function () {
            return this.getNumberAttribute('max_concurrency');
        },
        set: function (value) {
            this._maxConcurrency = value;
        },
        enumerable: false,
        configurable: true
    });
    ApprunnerAutoScalingConfigurationVersion.prototype.resetMaxConcurrency = function () {
        this._maxConcurrency = undefined;
    };
    Object.defineProperty(ApprunnerAutoScalingConfigurationVersion.prototype, "maxConcurrencyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxConcurrency;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApprunnerAutoScalingConfigurationVersion.prototype, "maxSize", {
        get: function () {
            return this.getNumberAttribute('max_size');
        },
        set: function (value) {
            this._maxSize = value;
        },
        enumerable: false,
        configurable: true
    });
    ApprunnerAutoScalingConfigurationVersion.prototype.resetMaxSize = function () {
        this._maxSize = undefined;
    };
    Object.defineProperty(ApprunnerAutoScalingConfigurationVersion.prototype, "maxSizeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApprunnerAutoScalingConfigurationVersion.prototype, "minSize", {
        get: function () {
            return this.getNumberAttribute('min_size');
        },
        set: function (value) {
            this._minSize = value;
        },
        enumerable: false,
        configurable: true
    });
    ApprunnerAutoScalingConfigurationVersion.prototype.resetMinSize = function () {
        this._minSize = undefined;
    };
    Object.defineProperty(ApprunnerAutoScalingConfigurationVersion.prototype, "minSizeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._minSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApprunnerAutoScalingConfigurationVersion.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApprunnerAutoScalingConfigurationVersion.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    ApprunnerAutoScalingConfigurationVersion.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(ApprunnerAutoScalingConfigurationVersion.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApprunnerAutoScalingConfigurationVersion.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    ApprunnerAutoScalingConfigurationVersion.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(ApprunnerAutoScalingConfigurationVersion.prototype, "tagsAllInput", {
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
    ApprunnerAutoScalingConfigurationVersion.prototype.synthesizeAttributes = function () {
        return {
            auto_scaling_configuration_name: cdktf.stringToTerraform(this._autoScalingConfigurationName),
            max_concurrency: cdktf.numberToTerraform(this._maxConcurrency),
            max_size: cdktf.numberToTerraform(this._maxSize),
            min_size: cdktf.numberToTerraform(this._minSize),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ApprunnerAutoScalingConfigurationVersion.tfResourceType = "aws_apprunner_auto_scaling_configuration_version";
    return ApprunnerAutoScalingConfigurationVersion;
}(cdktf.TerraformResource));
exports.ApprunnerAutoScalingConfigurationVersion = ApprunnerAutoScalingConfigurationVersion;
