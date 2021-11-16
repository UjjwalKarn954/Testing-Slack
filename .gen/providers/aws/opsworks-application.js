"use strict";
// https://www.terraform.io/docs/providers/aws/r/opsworks_application.html
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
exports.OpsworksApplication = void 0;
var cdktf = require("cdktf");
function opsworksApplicationAppSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        password: cdktf.stringToTerraform(struct.password),
        revision: cdktf.stringToTerraform(struct.revision),
        ssh_key: cdktf.stringToTerraform(struct.sshKey),
        type: cdktf.stringToTerraform(struct.type),
        url: cdktf.stringToTerraform(struct.url),
        username: cdktf.stringToTerraform(struct.username)
    };
}
function opsworksApplicationEnvironmentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        secure: cdktf.booleanToTerraform(struct.secure),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function opsworksApplicationSslConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        certificate: cdktf.stringToTerraform(struct.certificate),
        chain: cdktf.stringToTerraform(struct.chain),
        private_key: cdktf.stringToTerraform(struct.privateKey)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html aws_opsworks_application}
*/
var OpsworksApplication = /** @class */ (function (_super) {
    __extends(OpsworksApplication, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html aws_opsworks_application} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OpsworksApplicationConfig
    */
    function OpsworksApplication(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_opsworks_application',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._autoBundleOnDeploy = config.autoBundleOnDeploy;
        _this._awsFlowRubySettings = config.awsFlowRubySettings;
        _this._dataSourceArn = config.dataSourceArn;
        _this._dataSourceDatabaseName = config.dataSourceDatabaseName;
        _this._dataSourceType = config.dataSourceType;
        _this._description = config.description;
        _this._documentRoot = config.documentRoot;
        _this._domains = config.domains;
        _this._enableSsl = config.enableSsl;
        _this._name = config.name;
        _this._railsEnv = config.railsEnv;
        _this._shortName = config.shortName;
        _this._stackId = config.stackId;
        _this._type = config.type;
        _this._appSource = config.appSource;
        _this._environment = config.environment;
        _this._sslConfiguration = config.sslConfiguration;
        return _this;
    }
    Object.defineProperty(OpsworksApplication.prototype, "autoBundleOnDeploy", {
        get: function () {
            return this.getStringAttribute('auto_bundle_on_deploy');
        },
        set: function (value) {
            this._autoBundleOnDeploy = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksApplication.prototype.resetAutoBundleOnDeploy = function () {
        this._autoBundleOnDeploy = undefined;
    };
    Object.defineProperty(OpsworksApplication.prototype, "autoBundleOnDeployInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoBundleOnDeploy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksApplication.prototype, "awsFlowRubySettings", {
        get: function () {
            return this.getStringAttribute('aws_flow_ruby_settings');
        },
        set: function (value) {
            this._awsFlowRubySettings = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksApplication.prototype.resetAwsFlowRubySettings = function () {
        this._awsFlowRubySettings = undefined;
    };
    Object.defineProperty(OpsworksApplication.prototype, "awsFlowRubySettingsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._awsFlowRubySettings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksApplication.prototype, "dataSourceArn", {
        get: function () {
            return this.getStringAttribute('data_source_arn');
        },
        set: function (value) {
            this._dataSourceArn = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksApplication.prototype.resetDataSourceArn = function () {
        this._dataSourceArn = undefined;
    };
    Object.defineProperty(OpsworksApplication.prototype, "dataSourceArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dataSourceArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksApplication.prototype, "dataSourceDatabaseName", {
        get: function () {
            return this.getStringAttribute('data_source_database_name');
        },
        set: function (value) {
            this._dataSourceDatabaseName = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksApplication.prototype.resetDataSourceDatabaseName = function () {
        this._dataSourceDatabaseName = undefined;
    };
    Object.defineProperty(OpsworksApplication.prototype, "dataSourceDatabaseNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dataSourceDatabaseName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksApplication.prototype, "dataSourceType", {
        get: function () {
            return this.getStringAttribute('data_source_type');
        },
        set: function (value) {
            this._dataSourceType = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksApplication.prototype.resetDataSourceType = function () {
        this._dataSourceType = undefined;
    };
    Object.defineProperty(OpsworksApplication.prototype, "dataSourceTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dataSourceType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksApplication.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksApplication.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(OpsworksApplication.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksApplication.prototype, "documentRoot", {
        get: function () {
            return this.getStringAttribute('document_root');
        },
        set: function (value) {
            this._documentRoot = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksApplication.prototype.resetDocumentRoot = function () {
        this._documentRoot = undefined;
    };
    Object.defineProperty(OpsworksApplication.prototype, "documentRootInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._documentRoot;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksApplication.prototype, "domains", {
        get: function () {
            return this.getListAttribute('domains');
        },
        set: function (value) {
            this._domains = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksApplication.prototype.resetDomains = function () {
        this._domains = undefined;
    };
    Object.defineProperty(OpsworksApplication.prototype, "domainsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domains;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksApplication.prototype, "enableSsl", {
        get: function () {
            return this.getBooleanAttribute('enable_ssl');
        },
        set: function (value) {
            this._enableSsl = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksApplication.prototype.resetEnableSsl = function () {
        this._enableSsl = undefined;
    };
    Object.defineProperty(OpsworksApplication.prototype, "enableSslInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enableSsl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksApplication.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksApplication.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksApplication.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksApplication.prototype, "railsEnv", {
        get: function () {
            return this.getStringAttribute('rails_env');
        },
        set: function (value) {
            this._railsEnv = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksApplication.prototype.resetRailsEnv = function () {
        this._railsEnv = undefined;
    };
    Object.defineProperty(OpsworksApplication.prototype, "railsEnvInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._railsEnv;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksApplication.prototype, "shortName", {
        get: function () {
            return this.getStringAttribute('short_name');
        },
        set: function (value) {
            this._shortName = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksApplication.prototype.resetShortName = function () {
        this._shortName = undefined;
    };
    Object.defineProperty(OpsworksApplication.prototype, "shortNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._shortName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksApplication.prototype, "stackId", {
        get: function () {
            return this.getStringAttribute('stack_id');
        },
        set: function (value) {
            this._stackId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksApplication.prototype, "stackIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._stackId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksApplication.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksApplication.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksApplication.prototype, "appSource", {
        get: function () {
            return this.interpolationForAttribute('app_source');
        },
        set: function (value) {
            this._appSource = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksApplication.prototype.resetAppSource = function () {
        this._appSource = undefined;
    };
    Object.defineProperty(OpsworksApplication.prototype, "appSourceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._appSource;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksApplication.prototype, "environment", {
        get: function () {
            return this.interpolationForAttribute('environment');
        },
        set: function (value) {
            this._environment = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksApplication.prototype.resetEnvironment = function () {
        this._environment = undefined;
    };
    Object.defineProperty(OpsworksApplication.prototype, "environmentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._environment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpsworksApplication.prototype, "sslConfiguration", {
        get: function () {
            return this.interpolationForAttribute('ssl_configuration');
        },
        set: function (value) {
            this._sslConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    OpsworksApplication.prototype.resetSslConfiguration = function () {
        this._sslConfiguration = undefined;
    };
    Object.defineProperty(OpsworksApplication.prototype, "sslConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sslConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    OpsworksApplication.prototype.synthesizeAttributes = function () {
        return {
            auto_bundle_on_deploy: cdktf.stringToTerraform(this._autoBundleOnDeploy),
            aws_flow_ruby_settings: cdktf.stringToTerraform(this._awsFlowRubySettings),
            data_source_arn: cdktf.stringToTerraform(this._dataSourceArn),
            data_source_database_name: cdktf.stringToTerraform(this._dataSourceDatabaseName),
            data_source_type: cdktf.stringToTerraform(this._dataSourceType),
            description: cdktf.stringToTerraform(this._description),
            document_root: cdktf.stringToTerraform(this._documentRoot),
            domains: cdktf.listMapper(cdktf.stringToTerraform)(this._domains),
            enable_ssl: cdktf.booleanToTerraform(this._enableSsl),
            name: cdktf.stringToTerraform(this._name),
            rails_env: cdktf.stringToTerraform(this._railsEnv),
            short_name: cdktf.stringToTerraform(this._shortName),
            stack_id: cdktf.stringToTerraform(this._stackId),
            type: cdktf.stringToTerraform(this._type),
            app_source: cdktf.listMapper(opsworksApplicationAppSourceToTerraform)(this._appSource),
            environment: cdktf.listMapper(opsworksApplicationEnvironmentToTerraform)(this._environment),
            ssl_configuration: cdktf.listMapper(opsworksApplicationSslConfigurationToTerraform)(this._sslConfiguration)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    OpsworksApplication.tfResourceType = "aws_opsworks_application";
    return OpsworksApplication;
}(cdktf.TerraformResource));
exports.OpsworksApplication = OpsworksApplication;
