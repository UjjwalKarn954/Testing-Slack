"use strict";
// https://www.terraform.io/docs/providers/aws/r/lambda_layer_version.html
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
exports.LambdaLayerVersion = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version.html aws_lambda_layer_version}
*/
var LambdaLayerVersion = /** @class */ (function (_super) {
    __extends(LambdaLayerVersion, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version.html aws_lambda_layer_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LambdaLayerVersionConfig
    */
    function LambdaLayerVersion(scope, id, config) {
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
        _this._compatibleArchitectures = config.compatibleArchitectures;
        _this._compatibleRuntimes = config.compatibleRuntimes;
        _this._description = config.description;
        _this._filename = config.filename;
        _this._layerName = config.layerName;
        _this._licenseInfo = config.licenseInfo;
        _this._s3Bucket = config.s3Bucket;
        _this._s3Key = config.s3Key;
        _this._s3ObjectVersion = config.s3ObjectVersion;
        _this._sourceCodeHash = config.sourceCodeHash;
        return _this;
    }
    Object.defineProperty(LambdaLayerVersion.prototype, "arn", {
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
    Object.defineProperty(LambdaLayerVersion.prototype, "compatibleArchitectures", {
        get: function () {
            return this.getListAttribute('compatible_architectures');
        },
        set: function (value) {
            this._compatibleArchitectures = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaLayerVersion.prototype.resetCompatibleArchitectures = function () {
        this._compatibleArchitectures = undefined;
    };
    Object.defineProperty(LambdaLayerVersion.prototype, "compatibleArchitecturesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._compatibleArchitectures;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaLayerVersion.prototype, "compatibleRuntimes", {
        get: function () {
            return this.getListAttribute('compatible_runtimes');
        },
        set: function (value) {
            this._compatibleRuntimes = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaLayerVersion.prototype.resetCompatibleRuntimes = function () {
        this._compatibleRuntimes = undefined;
    };
    Object.defineProperty(LambdaLayerVersion.prototype, "compatibleRuntimesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._compatibleRuntimes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaLayerVersion.prototype, "createdDate", {
        // created_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaLayerVersion.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaLayerVersion.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(LambdaLayerVersion.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaLayerVersion.prototype, "filename", {
        get: function () {
            return this.getStringAttribute('filename');
        },
        set: function (value) {
            this._filename = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaLayerVersion.prototype.resetFilename = function () {
        this._filename = undefined;
    };
    Object.defineProperty(LambdaLayerVersion.prototype, "filenameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filename;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaLayerVersion.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaLayerVersion.prototype, "layerArn", {
        // layer_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('layer_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaLayerVersion.prototype, "layerName", {
        get: function () {
            return this.getStringAttribute('layer_name');
        },
        set: function (value) {
            this._layerName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaLayerVersion.prototype, "layerNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._layerName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaLayerVersion.prototype, "licenseInfo", {
        get: function () {
            return this.getStringAttribute('license_info');
        },
        set: function (value) {
            this._licenseInfo = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaLayerVersion.prototype.resetLicenseInfo = function () {
        this._licenseInfo = undefined;
    };
    Object.defineProperty(LambdaLayerVersion.prototype, "licenseInfoInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._licenseInfo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaLayerVersion.prototype, "s3Bucket", {
        get: function () {
            return this.getStringAttribute('s3_bucket');
        },
        set: function (value) {
            this._s3Bucket = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaLayerVersion.prototype.resetS3Bucket = function () {
        this._s3Bucket = undefined;
    };
    Object.defineProperty(LambdaLayerVersion.prototype, "s3BucketInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._s3Bucket;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaLayerVersion.prototype, "s3Key", {
        get: function () {
            return this.getStringAttribute('s3_key');
        },
        set: function (value) {
            this._s3Key = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaLayerVersion.prototype.resetS3Key = function () {
        this._s3Key = undefined;
    };
    Object.defineProperty(LambdaLayerVersion.prototype, "s3KeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._s3Key;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaLayerVersion.prototype, "s3ObjectVersion", {
        get: function () {
            return this.getStringAttribute('s3_object_version');
        },
        set: function (value) {
            this._s3ObjectVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaLayerVersion.prototype.resetS3ObjectVersion = function () {
        this._s3ObjectVersion = undefined;
    };
    Object.defineProperty(LambdaLayerVersion.prototype, "s3ObjectVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._s3ObjectVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaLayerVersion.prototype, "signingJobArn", {
        // signing_job_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('signing_job_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaLayerVersion.prototype, "signingProfileVersionArn", {
        // signing_profile_version_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('signing_profile_version_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaLayerVersion.prototype, "sourceCodeHash", {
        get: function () {
            return this.getStringAttribute('source_code_hash');
        },
        set: function (value) {
            this._sourceCodeHash = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaLayerVersion.prototype.resetSourceCodeHash = function () {
        this._sourceCodeHash = undefined;
    };
    Object.defineProperty(LambdaLayerVersion.prototype, "sourceCodeHashInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sourceCodeHash;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaLayerVersion.prototype, "sourceCodeSize", {
        // source_code_size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('source_code_size');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaLayerVersion.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    LambdaLayerVersion.prototype.synthesizeAttributes = function () {
        return {
            compatible_architectures: cdktf.listMapper(cdktf.stringToTerraform)(this._compatibleArchitectures),
            compatible_runtimes: cdktf.listMapper(cdktf.stringToTerraform)(this._compatibleRuntimes),
            description: cdktf.stringToTerraform(this._description),
            filename: cdktf.stringToTerraform(this._filename),
            layer_name: cdktf.stringToTerraform(this._layerName),
            license_info: cdktf.stringToTerraform(this._licenseInfo),
            s3_bucket: cdktf.stringToTerraform(this._s3Bucket),
            s3_key: cdktf.stringToTerraform(this._s3Key),
            s3_object_version: cdktf.stringToTerraform(this._s3ObjectVersion),
            source_code_hash: cdktf.stringToTerraform(this._sourceCodeHash)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    LambdaLayerVersion.tfResourceType = "aws_lambda_layer_version";
    return LambdaLayerVersion;
}(cdktf.TerraformResource));
exports.LambdaLayerVersion = LambdaLayerVersion;
