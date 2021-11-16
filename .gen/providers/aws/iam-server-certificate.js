"use strict";
// https://www.terraform.io/docs/providers/aws/r/iam_server_certificate.html
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
exports.IamServerCertificate = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_server_certificate.html aws_iam_server_certificate}
*/
var IamServerCertificate = /** @class */ (function (_super) {
    __extends(IamServerCertificate, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_server_certificate.html aws_iam_server_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamServerCertificateConfig
    */
    function IamServerCertificate(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_iam_server_certificate',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._certificateBody = config.certificateBody;
        _this._certificateChain = config.certificateChain;
        _this._name = config.name;
        _this._namePrefix = config.namePrefix;
        _this._path = config.path;
        _this._privateKey = config.privateKey;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(IamServerCertificate.prototype, "arn", {
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
    Object.defineProperty(IamServerCertificate.prototype, "certificateBody", {
        get: function () {
            return this.getStringAttribute('certificate_body');
        },
        set: function (value) {
            this._certificateBody = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamServerCertificate.prototype, "certificateBodyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificateBody;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamServerCertificate.prototype, "certificateChain", {
        get: function () {
            return this.getStringAttribute('certificate_chain');
        },
        set: function (value) {
            this._certificateChain = value;
        },
        enumerable: false,
        configurable: true
    });
    IamServerCertificate.prototype.resetCertificateChain = function () {
        this._certificateChain = undefined;
    };
    Object.defineProperty(IamServerCertificate.prototype, "certificateChainInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificateChain;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamServerCertificate.prototype, "expiration", {
        // expiration - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expiration');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamServerCertificate.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamServerCertificate.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    IamServerCertificate.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(IamServerCertificate.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamServerCertificate.prototype, "namePrefix", {
        get: function () {
            return this.getStringAttribute('name_prefix');
        },
        set: function (value) {
            this._namePrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    IamServerCertificate.prototype.resetNamePrefix = function () {
        this._namePrefix = undefined;
    };
    Object.defineProperty(IamServerCertificate.prototype, "namePrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._namePrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamServerCertificate.prototype, "path", {
        get: function () {
            return this.getStringAttribute('path');
        },
        set: function (value) {
            this._path = value;
        },
        enumerable: false,
        configurable: true
    });
    IamServerCertificate.prototype.resetPath = function () {
        this._path = undefined;
    };
    Object.defineProperty(IamServerCertificate.prototype, "pathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._path;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamServerCertificate.prototype, "privateKey", {
        get: function () {
            return this.getStringAttribute('private_key');
        },
        set: function (value) {
            this._privateKey = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamServerCertificate.prototype, "privateKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._privateKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamServerCertificate.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    IamServerCertificate.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(IamServerCertificate.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamServerCertificate.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    IamServerCertificate.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(IamServerCertificate.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IamServerCertificate.prototype, "uploadDate", {
        // upload_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('upload_date');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    IamServerCertificate.prototype.synthesizeAttributes = function () {
        return {
            certificate_body: cdktf.stringToTerraform(this._certificateBody),
            certificate_chain: cdktf.stringToTerraform(this._certificateChain),
            name: cdktf.stringToTerraform(this._name),
            name_prefix: cdktf.stringToTerraform(this._namePrefix),
            path: cdktf.stringToTerraform(this._path),
            private_key: cdktf.stringToTerraform(this._privateKey),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    IamServerCertificate.tfResourceType = "aws_iam_server_certificate";
    return IamServerCertificate;
}(cdktf.TerraformResource));
exports.IamServerCertificate = IamServerCertificate;
