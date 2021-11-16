"use strict";
// https://www.terraform.io/docs/providers/aws/r/codeartifact_domain.html
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
exports.CodeartifactDomain = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_domain.html aws_codeartifact_domain}
*/
var CodeartifactDomain = /** @class */ (function (_super) {
    __extends(CodeartifactDomain, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_domain.html aws_codeartifact_domain} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodeartifactDomainConfig
    */
    function CodeartifactDomain(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_codeartifact_domain',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._domain = config.domain;
        _this._encryptionKey = config.encryptionKey;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(CodeartifactDomain.prototype, "arn", {
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
    Object.defineProperty(CodeartifactDomain.prototype, "assetSizeBytes", {
        // asset_size_bytes - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('asset_size_bytes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodeartifactDomain.prototype, "createdTime", {
        // created_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodeartifactDomain.prototype, "domain", {
        get: function () {
            return this.getStringAttribute('domain');
        },
        set: function (value) {
            this._domain = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodeartifactDomain.prototype, "domainInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domain;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodeartifactDomain.prototype, "encryptionKey", {
        get: function () {
            return this.getStringAttribute('encryption_key');
        },
        set: function (value) {
            this._encryptionKey = value;
        },
        enumerable: false,
        configurable: true
    });
    CodeartifactDomain.prototype.resetEncryptionKey = function () {
        this._encryptionKey = undefined;
    };
    Object.defineProperty(CodeartifactDomain.prototype, "encryptionKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._encryptionKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodeartifactDomain.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodeartifactDomain.prototype, "owner", {
        // owner - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodeartifactDomain.prototype, "repositoryCount", {
        // repository_count - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('repository_count');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodeartifactDomain.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    CodeartifactDomain.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(CodeartifactDomain.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodeartifactDomain.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    CodeartifactDomain.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(CodeartifactDomain.prototype, "tagsAllInput", {
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
    CodeartifactDomain.prototype.synthesizeAttributes = function () {
        return {
            domain: cdktf.stringToTerraform(this._domain),
            encryption_key: cdktf.stringToTerraform(this._encryptionKey),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CodeartifactDomain.tfResourceType = "aws_codeartifact_domain";
    return CodeartifactDomain;
}(cdktf.TerraformResource));
exports.CodeartifactDomain = CodeartifactDomain;
