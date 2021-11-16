"use strict";
// https://www.terraform.io/docs/providers/aws/r/ecr_repository.html
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
exports.EcrRepository = void 0;
var cdktf = require("cdktf");
function ecrRepositoryEncryptionConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        encryption_type: cdktf.stringToTerraform(struct.encryptionType),
        kms_key: cdktf.stringToTerraform(struct.kmsKey)
    };
}
function ecrRepositoryImageScanningConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        scan_on_push: cdktf.booleanToTerraform(struct.scanOnPush)
    };
}
function ecrRepositoryTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        "delete": cdktf.stringToTerraform(struct["delete"])
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html aws_ecr_repository}
*/
var EcrRepository = /** @class */ (function (_super) {
    __extends(EcrRepository, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html aws_ecr_repository} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcrRepositoryConfig
    */
    function EcrRepository(scope, id, config) {
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
        _this._imageTagMutability = config.imageTagMutability;
        _this._name = config.name;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._encryptionConfiguration = config.encryptionConfiguration;
        _this._imageScanningConfiguration = config.imageScanningConfiguration;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(EcrRepository.prototype, "arn", {
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
    Object.defineProperty(EcrRepository.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcrRepository.prototype, "imageTagMutability", {
        get: function () {
            return this.getStringAttribute('image_tag_mutability');
        },
        set: function (value) {
            this._imageTagMutability = value;
        },
        enumerable: false,
        configurable: true
    });
    EcrRepository.prototype.resetImageTagMutability = function () {
        this._imageTagMutability = undefined;
    };
    Object.defineProperty(EcrRepository.prototype, "imageTagMutabilityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._imageTagMutability;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcrRepository.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcrRepository.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcrRepository.prototype, "registryId", {
        // registry_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('registry_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcrRepository.prototype, "repositoryUrl", {
        // repository_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('repository_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcrRepository.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    EcrRepository.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(EcrRepository.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcrRepository.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    EcrRepository.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(EcrRepository.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcrRepository.prototype, "encryptionConfiguration", {
        get: function () {
            return this.interpolationForAttribute('encryption_configuration');
        },
        set: function (value) {
            this._encryptionConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    EcrRepository.prototype.resetEncryptionConfiguration = function () {
        this._encryptionConfiguration = undefined;
    };
    Object.defineProperty(EcrRepository.prototype, "encryptionConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._encryptionConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcrRepository.prototype, "imageScanningConfiguration", {
        get: function () {
            return this.interpolationForAttribute('image_scanning_configuration');
        },
        set: function (value) {
            this._imageScanningConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    EcrRepository.prototype.resetImageScanningConfiguration = function () {
        this._imageScanningConfiguration = undefined;
    };
    Object.defineProperty(EcrRepository.prototype, "imageScanningConfigurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._imageScanningConfiguration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcrRepository.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    EcrRepository.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(EcrRepository.prototype, "timeoutsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeouts;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    EcrRepository.prototype.synthesizeAttributes = function () {
        return {
            image_tag_mutability: cdktf.stringToTerraform(this._imageTagMutability),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            encryption_configuration: cdktf.listMapper(ecrRepositoryEncryptionConfigurationToTerraform)(this._encryptionConfiguration),
            image_scanning_configuration: cdktf.listMapper(ecrRepositoryImageScanningConfigurationToTerraform)(this._imageScanningConfiguration),
            timeouts: ecrRepositoryTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    EcrRepository.tfResourceType = "aws_ecr_repository";
    return EcrRepository;
}(cdktf.TerraformResource));
exports.EcrRepository = EcrRepository;
