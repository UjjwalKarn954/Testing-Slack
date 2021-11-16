"use strict";
// https://www.terraform.io/docs/providers/aws/r/ecr_repository_policy.html
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
exports.EcrRepositoryPolicy = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository_policy.html aws_ecr_repository_policy}
*/
var EcrRepositoryPolicy = /** @class */ (function (_super) {
    __extends(EcrRepositoryPolicy, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository_policy.html aws_ecr_repository_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcrRepositoryPolicyConfig
    */
    function EcrRepositoryPolicy(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ecr_repository_policy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._policy = config.policy;
        _this._repository = config.repository;
        return _this;
    }
    Object.defineProperty(EcrRepositoryPolicy.prototype, "id", {
        // ==========
        // ATTRIBUTES
        // ==========
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcrRepositoryPolicy.prototype, "policy", {
        get: function () {
            return this.getStringAttribute('policy');
        },
        set: function (value) {
            this._policy = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcrRepositoryPolicy.prototype, "policyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcrRepositoryPolicy.prototype, "registryId", {
        // registry_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('registry_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcrRepositoryPolicy.prototype, "repository", {
        get: function () {
            return this.getStringAttribute('repository');
        },
        set: function (value) {
            this._repository = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EcrRepositoryPolicy.prototype, "repositoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._repository;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    EcrRepositoryPolicy.prototype.synthesizeAttributes = function () {
        return {
            policy: cdktf.stringToTerraform(this._policy),
            repository: cdktf.stringToTerraform(this._repository)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    EcrRepositoryPolicy.tfResourceType = "aws_ecr_repository_policy";
    return EcrRepositoryPolicy;
}(cdktf.TerraformResource));
exports.EcrRepositoryPolicy = EcrRepositoryPolicy;
