"use strict";
// https://www.terraform.io/docs/providers/aws/d/ecr_repository.html
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
exports.DataAwsEcrRepository = exports.DataAwsEcrRepositoryImageScanningConfiguration = exports.DataAwsEcrRepositoryEncryptionConfiguration = void 0;
var cdktf = require("cdktf");
var DataAwsEcrRepositoryEncryptionConfiguration = /** @class */ (function (_super) {
    __extends(DataAwsEcrRepositoryEncryptionConfiguration, _super);
    function DataAwsEcrRepositoryEncryptionConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsEcrRepositoryEncryptionConfiguration.prototype, "encryptionType", {
        // encryption_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('encryption_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEcrRepositoryEncryptionConfiguration.prototype, "kmsKey", {
        // kms_key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('kms_key');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsEcrRepositoryEncryptionConfiguration;
}(cdktf.ComplexComputedList));
exports.DataAwsEcrRepositoryEncryptionConfiguration = DataAwsEcrRepositoryEncryptionConfiguration;
var DataAwsEcrRepositoryImageScanningConfiguration = /** @class */ (function (_super) {
    __extends(DataAwsEcrRepositoryImageScanningConfiguration, _super);
    function DataAwsEcrRepositoryImageScanningConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsEcrRepositoryImageScanningConfiguration.prototype, "scanOnPush", {
        // scan_on_push - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('scan_on_push');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsEcrRepositoryImageScanningConfiguration;
}(cdktf.ComplexComputedList));
exports.DataAwsEcrRepositoryImageScanningConfiguration = DataAwsEcrRepositoryImageScanningConfiguration;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ecr_repository.html aws_ecr_repository}
*/
var DataAwsEcrRepository = /** @class */ (function (_super) {
    __extends(DataAwsEcrRepository, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ecr_repository.html aws_ecr_repository} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEcrRepositoryConfig
    */
    function DataAwsEcrRepository(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ecr_repository',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        _this._registryId = config.registryId;
        _this._tags = config.tags;
        return _this;
    }
    Object.defineProperty(DataAwsEcrRepository.prototype, "arn", {
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
    // encryption_configuration - computed: true, optional: false, required: false
    DataAwsEcrRepository.prototype.encryptionConfiguration = function (index) {
        return new DataAwsEcrRepositoryEncryptionConfiguration(this, 'encryption_configuration', index);
    };
    Object.defineProperty(DataAwsEcrRepository.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    // image_scanning_configuration - computed: true, optional: false, required: false
    DataAwsEcrRepository.prototype.imageScanningConfiguration = function (index) {
        return new DataAwsEcrRepositoryImageScanningConfiguration(this, 'image_scanning_configuration', index);
    };
    Object.defineProperty(DataAwsEcrRepository.prototype, "imageTagMutability", {
        // image_tag_mutability - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('image_tag_mutability');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEcrRepository.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEcrRepository.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEcrRepository.prototype, "registryId", {
        get: function () {
            return this.getStringAttribute('registry_id');
        },
        set: function (value) {
            this._registryId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEcrRepository.prototype.resetRegistryId = function () {
        this._registryId = undefined;
    };
    Object.defineProperty(DataAwsEcrRepository.prototype, "registryIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._registryId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEcrRepository.prototype, "repositoryUrl", {
        // repository_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('repository_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEcrRepository.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEcrRepository.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsEcrRepository.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsEcrRepository.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            registry_id: cdktf.stringToTerraform(this._registryId),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsEcrRepository.tfResourceType = "aws_ecr_repository";
    return DataAwsEcrRepository;
}(cdktf.TerraformDataSource));
exports.DataAwsEcrRepository = DataAwsEcrRepository;
