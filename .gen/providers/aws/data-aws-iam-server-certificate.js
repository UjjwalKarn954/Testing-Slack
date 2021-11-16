"use strict";
// https://www.terraform.io/docs/providers/aws/d/iam_server_certificate.html
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
exports.DataAwsIamServerCertificate = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/iam_server_certificate.html aws_iam_server_certificate}
*/
var DataAwsIamServerCertificate = /** @class */ (function (_super) {
    __extends(DataAwsIamServerCertificate, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/iam_server_certificate.html aws_iam_server_certificate} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsIamServerCertificateConfig = {}
    */
    function DataAwsIamServerCertificate(scope, id, config) {
        if (config === void 0) { config = {}; }
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
        _this._latest = config.latest;
        _this._name = config.name;
        _this._namePrefix = config.namePrefix;
        _this._pathPrefix = config.pathPrefix;
        return _this;
    }
    Object.defineProperty(DataAwsIamServerCertificate.prototype, "arn", {
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
    Object.defineProperty(DataAwsIamServerCertificate.prototype, "certificateBody", {
        // certificate_body - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate_body');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIamServerCertificate.prototype, "certificateChain", {
        // certificate_chain - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate_chain');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIamServerCertificate.prototype, "expirationDate", {
        // expiration_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expiration_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIamServerCertificate.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIamServerCertificate.prototype, "latest", {
        get: function () {
            return this.getBooleanAttribute('latest');
        },
        set: function (value) {
            this._latest = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsIamServerCertificate.prototype.resetLatest = function () {
        this._latest = undefined;
    };
    Object.defineProperty(DataAwsIamServerCertificate.prototype, "latestInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._latest;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIamServerCertificate.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsIamServerCertificate.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(DataAwsIamServerCertificate.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIamServerCertificate.prototype, "namePrefix", {
        get: function () {
            return this.getStringAttribute('name_prefix');
        },
        set: function (value) {
            this._namePrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsIamServerCertificate.prototype.resetNamePrefix = function () {
        this._namePrefix = undefined;
    };
    Object.defineProperty(DataAwsIamServerCertificate.prototype, "namePrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._namePrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIamServerCertificate.prototype, "path", {
        // path - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('path');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIamServerCertificate.prototype, "pathPrefix", {
        get: function () {
            return this.getStringAttribute('path_prefix');
        },
        set: function (value) {
            this._pathPrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsIamServerCertificate.prototype.resetPathPrefix = function () {
        this._pathPrefix = undefined;
    };
    Object.defineProperty(DataAwsIamServerCertificate.prototype, "pathPrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pathPrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIamServerCertificate.prototype, "uploadDate", {
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
    DataAwsIamServerCertificate.prototype.synthesizeAttributes = function () {
        return {
            latest: cdktf.booleanToTerraform(this._latest),
            name: cdktf.stringToTerraform(this._name),
            name_prefix: cdktf.stringToTerraform(this._namePrefix),
            path_prefix: cdktf.stringToTerraform(this._pathPrefix)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsIamServerCertificate.tfResourceType = "aws_iam_server_certificate";
    return DataAwsIamServerCertificate;
}(cdktf.TerraformDataSource));
exports.DataAwsIamServerCertificate = DataAwsIamServerCertificate;
