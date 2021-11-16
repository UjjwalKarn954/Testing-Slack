"use strict";
// https://www.terraform.io/docs/providers/aws/r/amplify_backend_environment.html
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
exports.AmplifyBackendEnvironment = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/amplify_backend_environment.html aws_amplify_backend_environment}
*/
var AmplifyBackendEnvironment = /** @class */ (function (_super) {
    __extends(AmplifyBackendEnvironment, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/amplify_backend_environment.html aws_amplify_backend_environment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AmplifyBackendEnvironmentConfig
    */
    function AmplifyBackendEnvironment(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_amplify_backend_environment',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._appId = config.appId;
        _this._deploymentArtifacts = config.deploymentArtifacts;
        _this._environmentName = config.environmentName;
        _this._stackName = config.stackName;
        return _this;
    }
    Object.defineProperty(AmplifyBackendEnvironment.prototype, "appId", {
        get: function () {
            return this.getStringAttribute('app_id');
        },
        set: function (value) {
            this._appId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyBackendEnvironment.prototype, "appIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._appId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyBackendEnvironment.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyBackendEnvironment.prototype, "deploymentArtifacts", {
        get: function () {
            return this.getStringAttribute('deployment_artifacts');
        },
        set: function (value) {
            this._deploymentArtifacts = value;
        },
        enumerable: false,
        configurable: true
    });
    AmplifyBackendEnvironment.prototype.resetDeploymentArtifacts = function () {
        this._deploymentArtifacts = undefined;
    };
    Object.defineProperty(AmplifyBackendEnvironment.prototype, "deploymentArtifactsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deploymentArtifacts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyBackendEnvironment.prototype, "environmentName", {
        get: function () {
            return this.getStringAttribute('environment_name');
        },
        set: function (value) {
            this._environmentName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyBackendEnvironment.prototype, "environmentNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._environmentName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyBackendEnvironment.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AmplifyBackendEnvironment.prototype, "stackName", {
        get: function () {
            return this.getStringAttribute('stack_name');
        },
        set: function (value) {
            this._stackName = value;
        },
        enumerable: false,
        configurable: true
    });
    AmplifyBackendEnvironment.prototype.resetStackName = function () {
        this._stackName = undefined;
    };
    Object.defineProperty(AmplifyBackendEnvironment.prototype, "stackNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._stackName;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    AmplifyBackendEnvironment.prototype.synthesizeAttributes = function () {
        return {
            app_id: cdktf.stringToTerraform(this._appId),
            deployment_artifacts: cdktf.stringToTerraform(this._deploymentArtifacts),
            environment_name: cdktf.stringToTerraform(this._environmentName),
            stack_name: cdktf.stringToTerraform(this._stackName)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    AmplifyBackendEnvironment.tfResourceType = "aws_amplify_backend_environment";
    return AmplifyBackendEnvironment;
}(cdktf.TerraformResource));
exports.AmplifyBackendEnvironment = AmplifyBackendEnvironment;
