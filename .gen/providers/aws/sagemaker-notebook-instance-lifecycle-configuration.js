"use strict";
// https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance_lifecycle_configuration.html
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
exports.SagemakerNotebookInstanceLifecycleConfiguration = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance_lifecycle_configuration.html aws_sagemaker_notebook_instance_lifecycle_configuration}
*/
var SagemakerNotebookInstanceLifecycleConfiguration = /** @class */ (function (_super) {
    __extends(SagemakerNotebookInstanceLifecycleConfiguration, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance_lifecycle_configuration.html aws_sagemaker_notebook_instance_lifecycle_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerNotebookInstanceLifecycleConfigurationConfig = {}
    */
    function SagemakerNotebookInstanceLifecycleConfiguration(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_sagemaker_notebook_instance_lifecycle_configuration',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        _this._onCreate = config.onCreate;
        _this._onStart = config.onStart;
        return _this;
    }
    Object.defineProperty(SagemakerNotebookInstanceLifecycleConfiguration.prototype, "arn", {
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
    Object.defineProperty(SagemakerNotebookInstanceLifecycleConfiguration.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerNotebookInstanceLifecycleConfiguration.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerNotebookInstanceLifecycleConfiguration.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(SagemakerNotebookInstanceLifecycleConfiguration.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerNotebookInstanceLifecycleConfiguration.prototype, "onCreate", {
        get: function () {
            return this.getStringAttribute('on_create');
        },
        set: function (value) {
            this._onCreate = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerNotebookInstanceLifecycleConfiguration.prototype.resetOnCreate = function () {
        this._onCreate = undefined;
    };
    Object.defineProperty(SagemakerNotebookInstanceLifecycleConfiguration.prototype, "onCreateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._onCreate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerNotebookInstanceLifecycleConfiguration.prototype, "onStart", {
        get: function () {
            return this.getStringAttribute('on_start');
        },
        set: function (value) {
            this._onStart = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerNotebookInstanceLifecycleConfiguration.prototype.resetOnStart = function () {
        this._onStart = undefined;
    };
    Object.defineProperty(SagemakerNotebookInstanceLifecycleConfiguration.prototype, "onStartInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._onStart;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SagemakerNotebookInstanceLifecycleConfiguration.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            on_create: cdktf.stringToTerraform(this._onCreate),
            on_start: cdktf.stringToTerraform(this._onStart)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SagemakerNotebookInstanceLifecycleConfiguration.tfResourceType = "aws_sagemaker_notebook_instance_lifecycle_configuration";
    return SagemakerNotebookInstanceLifecycleConfiguration;
}(cdktf.TerraformResource));
exports.SagemakerNotebookInstanceLifecycleConfiguration = SagemakerNotebookInstanceLifecycleConfiguration;
