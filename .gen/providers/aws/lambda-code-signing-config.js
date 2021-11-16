"use strict";
// https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config.html
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
exports.LambdaCodeSigningConfig = void 0;
var cdktf = require("cdktf");
function lambdaCodeSigningConfigAllowedPublishersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        signing_profile_version_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct.signingProfileVersionArns)
    };
}
function lambdaCodeSigningConfigPoliciesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        untrusted_artifact_on_deployment: cdktf.stringToTerraform(struct.untrustedArtifactOnDeployment)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config.html aws_lambda_code_signing_config}
*/
var LambdaCodeSigningConfig = /** @class */ (function (_super) {
    __extends(LambdaCodeSigningConfig, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config.html aws_lambda_code_signing_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LambdaCodeSigningConfigConfig
    */
    function LambdaCodeSigningConfig(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_lambda_code_signing_config',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._description = config.description;
        _this._allowedPublishers = config.allowedPublishers;
        _this._policies = config.policies;
        return _this;
    }
    Object.defineProperty(LambdaCodeSigningConfig.prototype, "arn", {
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
    Object.defineProperty(LambdaCodeSigningConfig.prototype, "configId", {
        // config_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('config_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaCodeSigningConfig.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaCodeSigningConfig.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(LambdaCodeSigningConfig.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaCodeSigningConfig.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaCodeSigningConfig.prototype, "lastModified", {
        // last_modified - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_modified');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaCodeSigningConfig.prototype, "allowedPublishers", {
        get: function () {
            return this.interpolationForAttribute('allowed_publishers');
        },
        set: function (value) {
            this._allowedPublishers = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaCodeSigningConfig.prototype, "allowedPublishersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowedPublishers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaCodeSigningConfig.prototype, "policies", {
        get: function () {
            return this.interpolationForAttribute('policies');
        },
        set: function (value) {
            this._policies = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaCodeSigningConfig.prototype.resetPolicies = function () {
        this._policies = undefined;
    };
    Object.defineProperty(LambdaCodeSigningConfig.prototype, "policiesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policies;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    LambdaCodeSigningConfig.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            allowed_publishers: cdktf.listMapper(lambdaCodeSigningConfigAllowedPublishersToTerraform)(this._allowedPublishers),
            policies: cdktf.listMapper(lambdaCodeSigningConfigPoliciesToTerraform)(this._policies)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    LambdaCodeSigningConfig.tfResourceType = "aws_lambda_code_signing_config";
    return LambdaCodeSigningConfig;
}(cdktf.TerraformResource));
exports.LambdaCodeSigningConfig = LambdaCodeSigningConfig;
