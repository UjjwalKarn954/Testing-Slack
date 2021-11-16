"use strict";
// https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy.html
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
exports.CodeartifactRepositoryPermissionsPolicy = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy.html aws_codeartifact_repository_permissions_policy}
*/
var CodeartifactRepositoryPermissionsPolicy = /** @class */ (function (_super) {
    __extends(CodeartifactRepositoryPermissionsPolicy, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy.html aws_codeartifact_repository_permissions_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodeartifactRepositoryPermissionsPolicyConfig
    */
    function CodeartifactRepositoryPermissionsPolicy(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_codeartifact_repository_permissions_policy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._domain = config.domain;
        _this._domainOwner = config.domainOwner;
        _this._policyDocument = config.policyDocument;
        _this._policyRevision = config.policyRevision;
        _this._repository = config.repository;
        return _this;
    }
    Object.defineProperty(CodeartifactRepositoryPermissionsPolicy.prototype, "domain", {
        get: function () {
            return this.getStringAttribute('domain');
        },
        set: function (value) {
            this._domain = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodeartifactRepositoryPermissionsPolicy.prototype, "domainInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domain;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodeartifactRepositoryPermissionsPolicy.prototype, "domainOwner", {
        get: function () {
            return this.getStringAttribute('domain_owner');
        },
        set: function (value) {
            this._domainOwner = value;
        },
        enumerable: false,
        configurable: true
    });
    CodeartifactRepositoryPermissionsPolicy.prototype.resetDomainOwner = function () {
        this._domainOwner = undefined;
    };
    Object.defineProperty(CodeartifactRepositoryPermissionsPolicy.prototype, "domainOwnerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domainOwner;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodeartifactRepositoryPermissionsPolicy.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodeartifactRepositoryPermissionsPolicy.prototype, "policyDocument", {
        get: function () {
            return this.getStringAttribute('policy_document');
        },
        set: function (value) {
            this._policyDocument = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodeartifactRepositoryPermissionsPolicy.prototype, "policyDocumentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policyDocument;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodeartifactRepositoryPermissionsPolicy.prototype, "policyRevision", {
        get: function () {
            return this.getStringAttribute('policy_revision');
        },
        set: function (value) {
            this._policyRevision = value;
        },
        enumerable: false,
        configurable: true
    });
    CodeartifactRepositoryPermissionsPolicy.prototype.resetPolicyRevision = function () {
        this._policyRevision = undefined;
    };
    Object.defineProperty(CodeartifactRepositoryPermissionsPolicy.prototype, "policyRevisionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policyRevision;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodeartifactRepositoryPermissionsPolicy.prototype, "repository", {
        get: function () {
            return this.getStringAttribute('repository');
        },
        set: function (value) {
            this._repository = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodeartifactRepositoryPermissionsPolicy.prototype, "repositoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._repository;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodeartifactRepositoryPermissionsPolicy.prototype, "resourceArn", {
        // resource_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('resource_arn');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CodeartifactRepositoryPermissionsPolicy.prototype.synthesizeAttributes = function () {
        return {
            domain: cdktf.stringToTerraform(this._domain),
            domain_owner: cdktf.stringToTerraform(this._domainOwner),
            policy_document: cdktf.stringToTerraform(this._policyDocument),
            policy_revision: cdktf.stringToTerraform(this._policyRevision),
            repository: cdktf.stringToTerraform(this._repository)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CodeartifactRepositoryPermissionsPolicy.tfResourceType = "aws_codeartifact_repository_permissions_policy";
    return CodeartifactRepositoryPermissionsPolicy;
}(cdktf.TerraformResource));
exports.CodeartifactRepositoryPermissionsPolicy = CodeartifactRepositoryPermissionsPolicy;
