"use strict";
// https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html
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
exports.ElasticBeanstalkEnvironment = exports.ElasticBeanstalkEnvironmentAllSettings = void 0;
var cdktf = require("cdktf");
var ElasticBeanstalkEnvironmentAllSettings = /** @class */ (function (_super) {
    __extends(ElasticBeanstalkEnvironmentAllSettings, _super);
    function ElasticBeanstalkEnvironmentAllSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ElasticBeanstalkEnvironmentAllSettings.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkEnvironmentAllSettings.prototype, "namespace", {
        // namespace - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('namespace');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkEnvironmentAllSettings.prototype, "resource", {
        // resource - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('resource');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkEnvironmentAllSettings.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return ElasticBeanstalkEnvironmentAllSettings;
}(cdktf.ComplexComputedList));
exports.ElasticBeanstalkEnvironmentAllSettings = ElasticBeanstalkEnvironmentAllSettings;
function elasticBeanstalkEnvironmentSettingToTerraform(struct) {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html aws_elastic_beanstalk_environment}
*/
var ElasticBeanstalkEnvironment = /** @class */ (function (_super) {
    __extends(ElasticBeanstalkEnvironment, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html aws_elastic_beanstalk_environment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElasticBeanstalkEnvironmentConfig
    */
    function ElasticBeanstalkEnvironment(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_elastic_beanstalk_environment',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._application = config.application;
        _this._cnamePrefix = config.cnamePrefix;
        _this._description = config.description;
        _this._name = config.name;
        _this._platformArn = config.platformArn;
        _this._pollInterval = config.pollInterval;
        _this._solutionStackName = config.solutionStackName;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._templateName = config.templateName;
        _this._tier = config.tier;
        _this._versionLabel = config.versionLabel;
        _this._waitForReadyTimeout = config.waitForReadyTimeout;
        _this._setting = config.setting;
        return _this;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // all_settings - computed: true, optional: false, required: false
    ElasticBeanstalkEnvironment.prototype.allSettings = function (index) {
        return new ElasticBeanstalkEnvironmentAllSettings(this, 'all_settings', index);
    };
    Object.defineProperty(ElasticBeanstalkEnvironment.prototype, "application", {
        get: function () {
            return this.getStringAttribute('application');
        },
        set: function (value) {
            this._application = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkEnvironment.prototype, "applicationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._application;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkEnvironment.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkEnvironment.prototype, "autoscalingGroups", {
        // autoscaling_groups - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('autoscaling_groups');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkEnvironment.prototype, "cname", {
        // cname - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkEnvironment.prototype, "cnamePrefix", {
        get: function () {
            return this.getStringAttribute('cname_prefix');
        },
        set: function (value) {
            this._cnamePrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticBeanstalkEnvironment.prototype.resetCnamePrefix = function () {
        this._cnamePrefix = undefined;
    };
    Object.defineProperty(ElasticBeanstalkEnvironment.prototype, "cnamePrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cnamePrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkEnvironment.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticBeanstalkEnvironment.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(ElasticBeanstalkEnvironment.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkEnvironment.prototype, "endpointUrl", {
        // endpoint_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('endpoint_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkEnvironment.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkEnvironment.prototype, "instances", {
        // instances - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('instances');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkEnvironment.prototype, "launchConfigurations", {
        // launch_configurations - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('launch_configurations');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkEnvironment.prototype, "loadBalancers", {
        // load_balancers - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('load_balancers');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkEnvironment.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkEnvironment.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkEnvironment.prototype, "platformArn", {
        get: function () {
            return this.getStringAttribute('platform_arn');
        },
        set: function (value) {
            this._platformArn = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticBeanstalkEnvironment.prototype.resetPlatformArn = function () {
        this._platformArn = undefined;
    };
    Object.defineProperty(ElasticBeanstalkEnvironment.prototype, "platformArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._platformArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkEnvironment.prototype, "pollInterval", {
        get: function () {
            return this.getStringAttribute('poll_interval');
        },
        set: function (value) {
            this._pollInterval = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticBeanstalkEnvironment.prototype.resetPollInterval = function () {
        this._pollInterval = undefined;
    };
    Object.defineProperty(ElasticBeanstalkEnvironment.prototype, "pollIntervalInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pollInterval;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkEnvironment.prototype, "queues", {
        // queues - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('queues');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkEnvironment.prototype, "solutionStackName", {
        get: function () {
            return this.getStringAttribute('solution_stack_name');
        },
        set: function (value) {
            this._solutionStackName = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticBeanstalkEnvironment.prototype.resetSolutionStackName = function () {
        this._solutionStackName = undefined;
    };
    Object.defineProperty(ElasticBeanstalkEnvironment.prototype, "solutionStackNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._solutionStackName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkEnvironment.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticBeanstalkEnvironment.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(ElasticBeanstalkEnvironment.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkEnvironment.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticBeanstalkEnvironment.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(ElasticBeanstalkEnvironment.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkEnvironment.prototype, "templateName", {
        get: function () {
            return this.getStringAttribute('template_name');
        },
        set: function (value) {
            this._templateName = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticBeanstalkEnvironment.prototype.resetTemplateName = function () {
        this._templateName = undefined;
    };
    Object.defineProperty(ElasticBeanstalkEnvironment.prototype, "templateNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._templateName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkEnvironment.prototype, "tier", {
        get: function () {
            return this.getStringAttribute('tier');
        },
        set: function (value) {
            this._tier = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticBeanstalkEnvironment.prototype.resetTier = function () {
        this._tier = undefined;
    };
    Object.defineProperty(ElasticBeanstalkEnvironment.prototype, "tierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkEnvironment.prototype, "triggers", {
        // triggers - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('triggers');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkEnvironment.prototype, "versionLabel", {
        get: function () {
            return this.getStringAttribute('version_label');
        },
        set: function (value) {
            this._versionLabel = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticBeanstalkEnvironment.prototype.resetVersionLabel = function () {
        this._versionLabel = undefined;
    };
    Object.defineProperty(ElasticBeanstalkEnvironment.prototype, "versionLabelInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._versionLabel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkEnvironment.prototype, "waitForReadyTimeout", {
        get: function () {
            return this.getStringAttribute('wait_for_ready_timeout');
        },
        set: function (value) {
            this._waitForReadyTimeout = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticBeanstalkEnvironment.prototype.resetWaitForReadyTimeout = function () {
        this._waitForReadyTimeout = undefined;
    };
    Object.defineProperty(ElasticBeanstalkEnvironment.prototype, "waitForReadyTimeoutInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._waitForReadyTimeout;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElasticBeanstalkEnvironment.prototype, "setting", {
        get: function () {
            return this.interpolationForAttribute('setting');
        },
        set: function (value) {
            this._setting = value;
        },
        enumerable: false,
        configurable: true
    });
    ElasticBeanstalkEnvironment.prototype.resetSetting = function () {
        this._setting = undefined;
    };
    Object.defineProperty(ElasticBeanstalkEnvironment.prototype, "settingInput", {
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
    ElasticBeanstalkEnvironment.prototype.synthesizeAttributes = function () {
        return {
            application: cdktf.stringToTerraform(this._application),
            cname_prefix: cdktf.stringToTerraform(this._cnamePrefix),
            description: cdktf.stringToTerraform(this._description),
            name: cdktf.stringToTerraform(this._name),
            platform_arn: cdktf.stringToTerraform(this._platformArn),
            poll_interval: cdktf.stringToTerraform(this._pollInterval),
            solution_stack_name: cdktf.stringToTerraform(this._solutionStackName),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            template_name: cdktf.stringToTerraform(this._templateName),
            tier: cdktf.stringToTerraform(this._tier),
            version_label: cdktf.stringToTerraform(this._versionLabel),
            wait_for_ready_timeout: cdktf.stringToTerraform(this._waitForReadyTimeout),
            setting: cdktf.listMapper(elasticBeanstalkEnvironmentSettingToTerraform)(this._setting)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ElasticBeanstalkEnvironment.tfResourceType = "aws_elastic_beanstalk_environment";
    return ElasticBeanstalkEnvironment;
}(cdktf.TerraformResource));
exports.ElasticBeanstalkEnvironment = ElasticBeanstalkEnvironment;
