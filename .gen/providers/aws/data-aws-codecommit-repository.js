"use strict";
// https://www.terraform.io/docs/providers/aws/d/codecommit_repository.html
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
exports.DataAwsCodecommitRepository = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/codecommit_repository.html aws_codecommit_repository}
*/
var DataAwsCodecommitRepository = /** @class */ (function (_super) {
    __extends(DataAwsCodecommitRepository, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/codecommit_repository.html aws_codecommit_repository} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCodecommitRepositoryConfig
    */
    function DataAwsCodecommitRepository(scope, id, config) {
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
        _this._repositoryName = config.repositoryName;
        return _this;
    }
    Object.defineProperty(DataAwsCodecommitRepository.prototype, "arn", {
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
    Object.defineProperty(DataAwsCodecommitRepository.prototype, "cloneUrlHttp", {
        // clone_url_http - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('clone_url_http');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCodecommitRepository.prototype, "cloneUrlSsh", {
        // clone_url_ssh - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('clone_url_ssh');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCodecommitRepository.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCodecommitRepository.prototype, "repositoryId", {
        // repository_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('repository_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCodecommitRepository.prototype, "repositoryName", {
        get: function () {
            return this.getStringAttribute('repository_name');
        },
        set: function (value) {
            this._repositoryName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCodecommitRepository.prototype, "repositoryNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._repositoryName;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsCodecommitRepository.prototype.synthesizeAttributes = function () {
        return {
            repository_name: cdktf.stringToTerraform(this._repositoryName)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsCodecommitRepository.tfResourceType = "aws_codecommit_repository";
    return DataAwsCodecommitRepository;
}(cdktf.TerraformDataSource));
exports.DataAwsCodecommitRepository = DataAwsCodecommitRepository;
