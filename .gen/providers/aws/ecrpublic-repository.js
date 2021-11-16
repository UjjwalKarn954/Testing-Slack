"use strict";
// https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository.html
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
exports.EcrpublicRepository = void 0;
var cdktf = require("cdktf");
function ecrpublicRepositoryCatalogDataToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        about_text: cdktf.stringToTerraform(struct.aboutText),
        architectures: cdktf.listMapper(cdktf.stringToTerraform)(struct.architectures),
        description: cdktf.stringToTerraform(struct.description),
        logo_image_blob: cdktf.stringToTerraform(struct.logoImageBlob),
        operating_systems: cdktf.listMapper(cdktf.stringToTerraform)(struct.operatingSystems),
        usage_text: cdktf.stringToTerraform(struct.usageText)
    };
}
function ecrpublicRepositoryTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        "delete": cdktf.stringToTerraform(struct["delete"])
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository.html aws_ecrpublic_repository}
*/
var EcrpublicRepository = /** @class */ (function (_super) {
    __extends(EcrpublicRepository, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository.html aws_ecrpublic_repository} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcrpublicRepositoryConfig
    */
    function EcrpublicRepository(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ecrpublic_repository',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._forceDestroy = config.forceDestroy;
        _this._repositoryName = config.repositoryName;
        _this._catalogData = config.catalogData;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(EcrpublicRepository.prototype, "arn", {
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
    Object.defineProperty(EcrpublicRepository.prototype, "forceDestroy", {
        get: function () {
            return this.getBooleanAttribute('force_destroy');
        },
        set: function (value) {
            this._forceDestroy = value;
        },
        enumerable: false,
        configurable: true
    });
    EcrpublicRepository.prototype.resetForceDestroy = function () {
        this._forceDestroy = undefined;
    };
    Object.defineProperty(EcrpublicRepository.prototype, "forceDestroyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._forceDestroy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcrpublicRepository.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcrpublicRepository.prototype, "registryId", {
        // registry_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('registry_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcrpublicRepository.prototype, "repositoryName", {
        get: function () {
            return this.getStringAttribute('repository_name');
        },
        set: function (value) {
            this._repositoryName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcrpublicRepository.prototype, "repositoryNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._repositoryName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcrpublicRepository.prototype, "repositoryUri", {
        // repository_uri - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('repository_uri');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcrpublicRepository.prototype, "catalogData", {
        get: function () {
            return this.interpolationForAttribute('catalog_data');
        },
        set: function (value) {
            this._catalogData = value;
        },
        enumerable: false,
        configurable: true
    });
    EcrpublicRepository.prototype.resetCatalogData = function () {
        this._catalogData = undefined;
    };
    Object.defineProperty(EcrpublicRepository.prototype, "catalogDataInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._catalogData;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcrpublicRepository.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    EcrpublicRepository.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(EcrpublicRepository.prototype, "timeoutsInput", {
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
    EcrpublicRepository.prototype.synthesizeAttributes = function () {
        return {
            force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
            repository_name: cdktf.stringToTerraform(this._repositoryName),
            catalog_data: cdktf.listMapper(ecrpublicRepositoryCatalogDataToTerraform)(this._catalogData),
            timeouts: ecrpublicRepositoryTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    EcrpublicRepository.tfResourceType = "aws_ecrpublic_repository";
    return EcrpublicRepository;
}(cdktf.TerraformResource));
exports.EcrpublicRepository = EcrpublicRepository;
