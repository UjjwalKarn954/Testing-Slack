"use strict";
// https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template.html
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
exports.ElasticBeanstalkConfigurationTemplate = void 0;
var cdktf = require("cdktf");
function elasticBeanstalkConfigurationTemplateSettingToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        namespace: cdktf.stringToTerraform(struct.namespace),
        resource: cdktf.stringToTerraform(struct.resource),
        value: cdktf.stringToTerraform(struct.value)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template.html aws_elastic_beanstalk_configuration_template}
*/
var ElasticBeanstalkConfigurationTemplate = /** @class */ (function (_super) {
    __extends(ElasticBeanstalkConfigurationTemplate, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template.html aws_elastic_beanstalk_configuration_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElasticBeanstalkConfigurationTemplateConfig
    */
    function ElasticBeanstalkConfigurationTemplate(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_elastic_beanstalk_configuration_template',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._application = config.application;
        _this._description = config.description;
        _this._environmentId = config.environmentId;
        _this._name = config.name;
        _this._solutionStackName = config.solutionStackName;
        _this._setting = config.setting;
        return _this;
    }
    Object.defineProperty(ElasticBeanstalkConfigurationTemplate.prototype, "application", {
        get: function () {
            return this.getStringAttribute('application');
        },
        set: function (value) {
            this._application = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkConfigurationTemplate.prototype, "applicationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._application;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkConfigurationTemplate.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticBeanstalkConfigurationTemplate.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(ElasticBeanstalkConfigurationTemplate.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkConfigurationTemplate.prototype, "environmentId", {
        get: function () {
            return this.getStringAttribute('environment_id');
        },
        set: function (value) {
            this._environmentId = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticBeanstalkConfigurationTemplate.prototype.resetEnvironmentId = function () {
        this._environmentId = undefined;
    };
    Object.defineProperty(ElasticBeanstalkConfigurationTemplate.prototype, "environmentIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._environmentId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkConfigurationTemplate.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkConfigurationTemplate.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkConfigurationTemplate.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkConfigurationTemplate.prototype, "solutionStackName", {
        get: function () {
            return this.getStringAttribute('solution_stack_name');
        },
        set: function (value) {
            this._solutionStackName = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticBeanstalkConfigurationTemplate.prototype.resetSolutionStackName = function () {
        this._solutionStackName = undefined;
    };
    Object.defineProperty(ElasticBeanstalkConfigurationTemplate.prototype, "solutionStackNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._solutionStackName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkConfigurationTemplate.prototype, "setting", {
        get: function () {
            return this.interpolationForAttribute('setting');
        },
        set: function (value) {
            this._setting = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticBeanstalkConfigurationTemplate.prototype.resetSetting = function () {
        this._setting = undefined;
    };
    Object.defineProperty(ElasticBeanstalkConfigurationTemplate.prototype, "settingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._setting;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ElasticBeanstalkConfigurationTemplate.prototype.synthesizeAttributes = function () {
        return {
            application: cdktf.stringToTerraform(this._application),
            description: cdktf.stringToTerraform(this._description),
            environment_id: cdktf.stringToTerraform(this._environmentId),
            name: cdktf.stringToTerraform(this._name),
            solution_stack_name: cdktf.stringToTerraform(this._solutionStackName),
            setting: cdktf.listMapper(elasticBeanstalkConfigurationTemplateSettingToTerraform)(this._setting)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ElasticBeanstalkConfigurationTemplate.tfResourceType = "aws_elastic_beanstalk_configuration_template";
    return ElasticBeanstalkConfigurationTemplate;
}(cdktf.TerraformResource));
exports.ElasticBeanstalkConfigurationTemplate = ElasticBeanstalkConfigurationTemplate;
