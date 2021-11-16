"use strict";
// https://www.terraform.io/docs/providers/aws/r/sagemaker_code_repository.html
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
exports.SagemakerCodeRepository = void 0;
var cdktf = require("cdktf");
function sagemakerCodeRepositoryGitConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        branch: cdktf.stringToTerraform(struct.branch),
        repository_url: cdktf.stringToTerraform(struct.repositoryUrl),
        secret_arn: cdktf.stringToTerraform(struct.secretArn)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_code_repository.html aws_sagemaker_code_repository}
*/
var SagemakerCodeRepository = /** @class */ (function (_super) {
    __extends(SagemakerCodeRepository, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_code_repository.html aws_sagemaker_code_repository} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerCodeRepositoryConfig
    */
    function SagemakerCodeRepository(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_sagemaker_code_repository',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._codeRepositoryName = config.codeRepositoryName;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._gitConfig = config.gitConfig;
        return _this;
    }
    Object.defineProperty(SagemakerCodeRepository.prototype, "arn", {
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
    Object.defineProperty(SagemakerCodeRepository.prototype, "codeRepositoryName", {
        get: function () {
            return this.getStringAttribute('code_repository_name');
        },
        set: function (value) {
            this._codeRepositoryName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerCodeRepository.prototype, "codeRepositoryNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._codeRepositoryName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerCodeRepository.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerCodeRepository.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerCodeRepository.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(SagemakerCodeRepository.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerCodeRepository.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerCodeRepository.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(SagemakerCodeRepository.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerCodeRepository.prototype, "gitConfig", {
        get: function () {
            return this.interpolationForAttribute('git_config');
        },
        set: function (value) {
            this._gitConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerCodeRepository.prototype, "gitConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._gitConfig;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SagemakerCodeRepository.prototype.synthesizeAttributes = function () {
        return {
            code_repository_name: cdktf.stringToTerraform(this._codeRepositoryName),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            git_config: cdktf.listMapper(sagemakerCodeRepositoryGitConfigToTerraform)(this._gitConfig)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SagemakerCodeRepository.tfResourceType = "aws_sagemaker_code_repository";
    return SagemakerCodeRepository;
}(cdktf.TerraformResource));
exports.SagemakerCodeRepository = SagemakerCodeRepository;
