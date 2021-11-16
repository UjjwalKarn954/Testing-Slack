"use strict";
// https://www.terraform.io/docs/providers/aws/r/codecommit_repository.html
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
exports.CodecommitRepository = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/codecommit_repository.html aws_codecommit_repository}
*/
var CodecommitRepository = /** @class */ (function (_super) {
    __extends(CodecommitRepository, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codecommit_repository.html aws_codecommit_repository} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodecommitRepositoryConfig
    */
    function CodecommitRepository(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_codecommit_repository',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._defaultBranch = config.defaultBranch;
        _this._description = config.description;
        _this._repositoryName = config.repositoryName;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(CodecommitRepository.prototype, "arn", {
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
    Object.defineProperty(CodecommitRepository.prototype, "cloneUrlHttp", {
        // clone_url_http - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('clone_url_http');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodecommitRepository.prototype, "cloneUrlSsh", {
        // clone_url_ssh - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('clone_url_ssh');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodecommitRepository.prototype, "defaultBranch", {
        get: function () {
            return this.getStringAttribute('default_branch');
        },
        set: function (value) {
            this._defaultBranch = value;
        },
        enumerable: false,
        configurable: true
    });
    CodecommitRepository.prototype.resetDefaultBranch = function () {
        this._defaultBranch = undefined;
    };
    Object.defineProperty(CodecommitRepository.prototype, "defaultBranchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultBranch;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodecommitRepository.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    CodecommitRepository.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(CodecommitRepository.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodecommitRepository.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodecommitRepository.prototype, "repositoryId", {
        // repository_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('repository_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodecommitRepository.prototype, "repositoryName", {
        get: function () {
            return this.getStringAttribute('repository_name');
        },
        set: function (value) {
            this._repositoryName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodecommitRepository.prototype, "repositoryNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._repositoryName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodecommitRepository.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    CodecommitRepository.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(CodecommitRepository.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodecommitRepository.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    CodecommitRepository.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(CodecommitRepository.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CodecommitRepository.prototype.synthesizeAttributes = function () {
        return {
            default_branch: cdktf.stringToTerraform(this._defaultBranch),
            description: cdktf.stringToTerraform(this._description),
            repository_name: cdktf.stringToTerraform(this._repositoryName),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CodecommitRepository.tfResourceType = "aws_codecommit_repository";
    return CodecommitRepository;
}(cdktf.TerraformResource));
exports.CodecommitRepository = CodecommitRepository;
