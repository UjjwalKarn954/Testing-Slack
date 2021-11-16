"use strict";
// https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint.html
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
exports.DataAwsCodeartifactRepositoryEndpoint = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint.html aws_codeartifact_repository_endpoint}
*/
var DataAwsCodeartifactRepositoryEndpoint = /** @class */ (function (_super) {
    __extends(DataAwsCodeartifactRepositoryEndpoint, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint.html aws_codeartifact_repository_endpoint} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCodeartifactRepositoryEndpointConfig
    */
    function DataAwsCodeartifactRepositoryEndpoint(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_codeartifact_repository_endpoint',
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
        _this._format = config.format;
        _this._repository = config.repository;
        return _this;
    }
    Object.defineProperty(DataAwsCodeartifactRepositoryEndpoint.prototype, "domain", {
        get: function () {
            return this.getStringAttribute('domain');
        },
        set: function (value) {
            this._domain = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCodeartifactRepositoryEndpoint.prototype, "domainInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domain;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCodeartifactRepositoryEndpoint.prototype, "domainOwner", {
        get: function () {
            return this.getStringAttribute('domain_owner');
        },
        set: function (value) {
            this._domainOwner = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsCodeartifactRepositoryEndpoint.prototype.resetDomainOwner = function () {
        this._domainOwner = undefined;
    };
    Object.defineProperty(DataAwsCodeartifactRepositoryEndpoint.prototype, "domainOwnerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domainOwner;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCodeartifactRepositoryEndpoint.prototype, "format", {
        get: function () {
            return this.getStringAttribute('format');
        },
        set: function (value) {
            this._format = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCodeartifactRepositoryEndpoint.prototype, "formatInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._format;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCodeartifactRepositoryEndpoint.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCodeartifactRepositoryEndpoint.prototype, "repository", {
        get: function () {
            return this.getStringAttribute('repository');
        },
        set: function (value) {
            this._repository = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCodeartifactRepositoryEndpoint.prototype, "repositoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._repository;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCodeartifactRepositoryEndpoint.prototype, "repositoryEndpoint", {
        // repository_endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('repository_endpoint');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsCodeartifactRepositoryEndpoint.prototype.synthesizeAttributes = function () {
        return {
            domain: cdktf.stringToTerraform(this._domain),
            domain_owner: cdktf.stringToTerraform(this._domainOwner),
            format: cdktf.stringToTerraform(this._format),
            repository: cdktf.stringToTerraform(this._repository)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsCodeartifactRepositoryEndpoint.tfResourceType = "aws_codeartifact_repository_endpoint";
    return DataAwsCodeartifactRepositoryEndpoint;
}(cdktf.TerraformDataSource));
exports.DataAwsCodeartifactRepositoryEndpoint = DataAwsCodeartifactRepositoryEndpoint;
