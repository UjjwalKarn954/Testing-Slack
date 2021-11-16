"use strict";
// https://www.terraform.io/docs/providers/aws/r/codeartifact_repository.html
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
exports.CodeartifactRepository = void 0;
var cdktf = require("cdktf");
function codeartifactRepositoryExternalConnectionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        external_connection_name: cdktf.stringToTerraform(struct.externalConnectionName)
    };
}
function codeartifactRepositoryUpstreamToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        repository_name: cdktf.stringToTerraform(struct.repositoryName)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository.html aws_codeartifact_repository}
*/
var CodeartifactRepository = /** @class */ (function (_super) {
    __extends(CodeartifactRepository, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository.html aws_codeartifact_repository} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodeartifactRepositoryConfig
    */
    function CodeartifactRepository(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_codeartifact_repository',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._description = config.description;
        _this._domain = config.domain;
        _this._domainOwner = config.domainOwner;
        _this._repository = config.repository;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._externalConnections = config.externalConnections;
        _this._upstream = config.upstream;
        return _this;
    }
    Object.defineProperty(CodeartifactRepository.prototype, "administratorAccount", {
        // ==========
        // ATTRIBUTES
        // ==========
        // administrator_account - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('administrator_account');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodeartifactRepository.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodeartifactRepository.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    CodeartifactRepository.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(CodeartifactRepository.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodeartifactRepository.prototype, "domain", {
        get: function () {
            return this.getStringAttribute('domain');
        },
        set: function (value) {
            this._domain = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodeartifactRepository.prototype, "domainInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domain;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodeartifactRepository.prototype, "domainOwner", {
        get: function () {
            return this.getStringAttribute('domain_owner');
        },
        set: function (value) {
            this._domainOwner = value;
        },
        enumerable: false,
        configurable: true
    });
    CodeartifactRepository.prototype.resetDomainOwner = function () {
        this._domainOwner = undefined;
    };
    Object.defineProperty(CodeartifactRepository.prototype, "domainOwnerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domainOwner;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodeartifactRepository.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodeartifactRepository.prototype, "repository", {
        get: function () {
            return this.getStringAttribute('repository');
        },
        set: function (value) {
            this._repository = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodeartifactRepository.prototype, "repositoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._repository;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodeartifactRepository.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    CodeartifactRepository.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(CodeartifactRepository.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodeartifactRepository.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    CodeartifactRepository.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(CodeartifactRepository.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodeartifactRepository.prototype, "externalConnections", {
        get: function () {
            return this.interpolationForAttribute('external_connections');
        },
        set: function (value) {
            this._externalConnections = value;
        },
        enumerable: false,
        configurable: true
    });
    CodeartifactRepository.prototype.resetExternalConnections = function () {
        this._externalConnections = undefined;
    };
    Object.defineProperty(CodeartifactRepository.prototype, "externalConnectionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._externalConnections;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodeartifactRepository.prototype, "upstream", {
        get: function () {
            return this.interpolationForAttribute('upstream');
        },
        set: function (value) {
            this._upstream = value;
        },
        enumerable: false,
        configurable: true
    });
    CodeartifactRepository.prototype.resetUpstream = function () {
        this._upstream = undefined;
    };
    Object.defineProperty(CodeartifactRepository.prototype, "upstreamInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._upstream;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CodeartifactRepository.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            domain: cdktf.stringToTerraform(this._domain),
            domain_owner: cdktf.stringToTerraform(this._domainOwner),
            repository: cdktf.stringToTerraform(this._repository),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            external_connections: cdktf.listMapper(codeartifactRepositoryExternalConnectionsToTerraform)(this._externalConnections),
            upstream: cdktf.listMapper(codeartifactRepositoryUpstreamToTerraform)(this._upstream)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CodeartifactRepository.tfResourceType = "aws_codeartifact_repository";
    return CodeartifactRepository;
}(cdktf.TerraformResource));
exports.CodeartifactRepository = CodeartifactRepository;
