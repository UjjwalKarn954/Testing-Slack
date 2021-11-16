"use strict";
// https://www.terraform.io/docs/providers/aws/d/lambda_layer_version.html
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
exports.DataAwsLambdaLayerVersion = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version.html aws_lambda_layer_version}
*/
var DataAwsLambdaLayerVersion = /** @class */ (function (_super) {
    __extends(DataAwsLambdaLayerVersion, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version.html aws_lambda_layer_version} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLambdaLayerVersionConfig
    */
    function DataAwsLambdaLayerVersion(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_lambda_layer_version',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._compatibleArchitecture = config.compatibleArchitecture;
        _this._compatibleRuntime = config.compatibleRuntime;
        _this._layerName = config.layerName;
        _this._version = config.version;
        return _this;
    }
    Object.defineProperty(DataAwsLambdaLayerVersion.prototype, "arn", {
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
    Object.defineProperty(DataAwsLambdaLayerVersion.prototype, "compatibleArchitecture", {
        get: function () {
            return this.getStringAttribute('compatible_architecture');
        },
        set: function (value) {
            this._compatibleArchitecture = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsLambdaLayerVersion.prototype.resetCompatibleArchitecture = function () {
        this._compatibleArchitecture = undefined;
    };
    Object.defineProperty(DataAwsLambdaLayerVersion.prototype, "compatibleArchitectureInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._compatibleArchitecture;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaLayerVersion.prototype, "compatibleArchitectures", {
        // compatible_architectures - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('compatible_architectures');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaLayerVersion.prototype, "compatibleRuntime", {
        get: function () {
            return this.getStringAttribute('compatible_runtime');
        },
        set: function (value) {
            this._compatibleRuntime = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsLambdaLayerVersion.prototype.resetCompatibleRuntime = function () {
        this._compatibleRuntime = undefined;
    };
    Object.defineProperty(DataAwsLambdaLayerVersion.prototype, "compatibleRuntimeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._compatibleRuntime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaLayerVersion.prototype, "compatibleRuntimes", {
        // compatible_runtimes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('compatible_runtimes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaLayerVersion.prototype, "createdDate", {
        // created_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaLayerVersion.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaLayerVersion.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaLayerVersion.prototype, "layerArn", {
        // layer_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('layer_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaLayerVersion.prototype, "layerName", {
        get: function () {
            return this.getStringAttribute('layer_name');
        },
        set: function (value) {
            this._layerName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaLayerVersion.prototype, "layerNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._layerName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaLayerVersion.prototype, "licenseInfo", {
        // license_info - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('license_info');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaLayerVersion.prototype, "signingJobArn", {
        // signing_job_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('signing_job_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaLayerVersion.prototype, "signingProfileVersionArn", {
        // signing_profile_version_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('signing_profile_version_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaLayerVersion.prototype, "sourceCodeHash", {
        // source_code_hash - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('source_code_hash');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaLayerVersion.prototype, "sourceCodeSize", {
        // source_code_size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('source_code_size');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLambdaLayerVersion.prototype, "version", {
        get: function () {
            return this.getNumberAttribute('version');
        },
        set: function (value) {
            this._version = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsLambdaLayerVersion.prototype.resetVersion = function () {
        this._version = undefined;
    };
    Object.defineProperty(DataAwsLambdaLayerVersion.prototype, "versionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._version;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsLambdaLayerVersion.prototype.synthesizeAttributes = function () {
        return {
            compatible_architecture: cdktf.stringToTerraform(this._compatibleArchitecture),
            compatible_runtime: cdktf.stringToTerraform(this._compatibleRuntime),
            layer_name: cdktf.stringToTerraform(this._layerName),
            version: cdktf.numberToTerraform(this._version)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsLambdaLayerVersion.tfResourceType = "aws_lambda_layer_version";
    return DataAwsLambdaLayerVersion;
}(cdktf.TerraformDataSource));
exports.DataAwsLambdaLayerVersion = DataAwsLambdaLayerVersion;
