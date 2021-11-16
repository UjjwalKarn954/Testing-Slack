"use strict";
// https://www.terraform.io/docs/providers/aws/d/lambda_code_signing_config.html
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
exports.DataAwsLambdaCodeSigningConfig = exports.DataAwsLambdaCodeSigningConfigPolicies = exports.DataAwsLambdaCodeSigningConfigAllowedPublishers = void 0;
var cdktf = require("cdktf");
var DataAwsLambdaCodeSigningConfigAllowedPublishers = /** @class */ (function (_super) {
    __extends(DataAwsLambdaCodeSigningConfigAllowedPublishers, _super);
    function DataAwsLambdaCodeSigningConfigAllowedPublishers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsLambdaCodeSigningConfigAllowedPublishers.prototype, "signingProfileVersionArns", {
        // signing_profile_version_arns - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('signing_profile_version_arns');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsLambdaCodeSigningConfigAllowedPublishers;
}(cdktf.ComplexComputedList));
exports.DataAwsLambdaCodeSigningConfigAllowedPublishers = DataAwsLambdaCodeSigningConfigAllowedPublishers;
var DataAwsLambdaCodeSigningConfigPolicies = /** @class */ (function (_super) {
    __extends(DataAwsLambdaCodeSigningConfigPolicies, _super);
    function DataAwsLambdaCodeSigningConfigPolicies() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsLambdaCodeSigningConfigPolicies.prototype, "untrustedArtifactOnDeployment", {
        // untrusted_artifact_on_deployment - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('untrusted_artifact_on_deployment');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsLambdaCodeSigningConfigPolicies;
}(cdktf.ComplexComputedList));
exports.DataAwsLambdaCodeSigningConfigPolicies = DataAwsLambdaCodeSigningConfigPolicies;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/lambda_code_signing_config.html aws_lambda_code_signing_config}
*/
var DataAwsLambdaCodeSigningConfig = /** @class */ (function (_super) {
    __extends(DataAwsLambdaCodeSigningConfig, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lambda_code_signing_config.html aws_lambda_code_signing_config} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLambdaCodeSigningConfigConfig
    */
    function DataAwsLambdaCodeSigningConfig(scope, id, config) {
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
        _this._arn = config.arn;
        return _this;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // allowed_publishers - computed: true, optional: false, required: false
    DataAwsLambdaCodeSigningConfig.prototype.allowedPublishers = function (index) {
        return new DataAwsLambdaCodeSigningConfigAllowedPublishers(this, 'allowed_publishers', index);
    };
    Object.defineProperty(DataAwsLambdaCodeSigningConfig.prototype, "arn", {
        get: function () {
            return this.getStringAttribute('arn');
        },
        set: function (value) {
            this._arn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaCodeSigningConfig.prototype, "arnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._arn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaCodeSigningConfig.prototype, "configId", {
        // config_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('config_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaCodeSigningConfig.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaCodeSigningConfig.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaCodeSigningConfig.prototype, "lastModified", {
        // last_modified - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_modified');
        },
        enumerable: false,
        configurable: true
    });
    // policies - computed: true, optional: false, required: false
    DataAwsLambdaCodeSigningConfig.prototype.policies = function (index) {
        return new DataAwsLambdaCodeSigningConfigPolicies(this, 'policies', index);
    };
    // =========
    // SYNTHESIS
    // =========
    DataAwsLambdaCodeSigningConfig.prototype.synthesizeAttributes = function () {
        return {
            arn: cdktf.stringToTerraform(this._arn)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsLambdaCodeSigningConfig.tfResourceType = "aws_lambda_code_signing_config";
    return DataAwsLambdaCodeSigningConfig;
}(cdktf.TerraformDataSource));
exports.DataAwsLambdaCodeSigningConfig = DataAwsLambdaCodeSigningConfig;
